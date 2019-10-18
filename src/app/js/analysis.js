import $ from 'jquery';
import { map, rasterLayer, getRaster, polygonDrawer, selectionLayer } from './map';

let drawerEnabled = false;

$("#add-raster-btn").click(function(){
    getRaster();
});

$("#remove-raster-btn").click(function(){
    $("#raster-msg").html("<i class='fas fa-lightbulb'></i> Scegliere un raster dall'elenco e aggiungerlo alla mappa");
    document.querySelector("#raster-legend").style.backgroundImage = "none";
    $("#raster-slider").attr('disabled',true);
    $("#raster-px-value").html('<span class="text-muted" style="font-size:16px;">Clicca sul raster ...</span>');
    rasterLayer.remove();
    rasterLayerAnalysisClear();
});

$("#raster-slider").change(function(){
    rasterLayer.setOpacity($(this).val());
});

map.on('click', function(e){
	// console.log(e.latlng.lat,e.latlng.lng);
	let lat = e.latlng.lat;
	let lng = e.latlng.lng;
    if (map.hasLayer(rasterLayer) && drawerEnabled == false){
        let pixel_value = geoblaze.identify(rasterLayer.georaster,[lng,lat]);
        $("#raster-px-value").html(parseFloat(pixel_value).toFixed(3));
    } else {
        $("#raster-px-value").html('...');
    }
});

$("#draw-polygon-btn").click(function(){
    drawerEnabled = true;
    polygonDrawer.enable();
});


let aoi_polygon;

map.on('draw:created', function (e) {

	selectionLayer.clearLayers();

    var layer = e.layer;

    aoi_polygon = [];
    let vertices = layer.editing.latlngs[0][0];
    $.each(vertices,function(i,val){
        aoi_polygon.push([val.lng,val.lat])
    });

    let last = aoi_polygon[0];
    aoi_polygon.push(last);
    
    selectionLayer.addData( layer.toGeoJSON() );
    
    $("#run-analysis-btn").prop("disabled",false);

    drawerEnabled = false;
});

$("#run-analysis-btn").click(function(){

    $("#run-analysis-btn").html("<i class='fas fa-cog fa-spin'></i> Estrazione in corso...");

    let geom = { 
        "type": "Polygon",
        "coordinates": [ aoi_polygon ]
    };

    setTimeout(function(){ rasterLayerAnalysis(geom); },500);
    
});

const rasterLayerAnalysis = function(geom){

    // console.log(geom)

    try{
        let means = geoblaze.mean(rasterLayer.georaster, geom);
        let min = geoblaze.min(rasterLayer.georaster, geom);
        let max = geoblaze.max(rasterLayer.georaster, geom);
        let mode = geoblaze.mode(rasterLayer.georaster, geom);
        let median = geoblaze.median(rasterLayer.georaster, geom);
        const histogramOptions = {
            scaleType: 'ratio',
            numClasses: 12,
            classType: 'equal-interval'
        };
        let histogram = geoblaze.histogram(rasterLayer.georaster, geom, histogramOptions);
        // console.log(histogram)
        let histogramLabels = Object.keys(histogram[0]);
        let histogramValues = Object.values(histogram[0]);
        // Grafico
        draw_rasterChart(histogramLabels,histogramValues);
        // Statistiche
        $("#raster-stats-max").html( max[0].toFixed(3) );
        $("#raster-stats-min").html( min[0].toFixed(3) );
        $("#raster-stats-means").html( means[0].toFixed(3) );
        // $("#raster-stats-mode").html( mode[0].toFixed(3) );
        // $("#raster-stats-median").html( median[0].toFixed(3) );

    } catch(e){
        console.log('Si è verificato un errore!', e);
    }

    $("#run-analysis-btn").html("<i class='fas fa-calculator'></i> Calcola valori");
};

let rasterChart;
const draw_rasterChart = function(labels,data){
    // Crea grafico
	var ctx = document.getElementById('raster-chart').getContext('2d');
    if (rasterChart) { rasterChart.destroy(); }

    rasterChart = new Chart(ctx, {
		type: 'bar',
		data:{
			labels: labels,
			datasets:[{
				label: "Num. di Pixel",
				backgroundColor: '#229954',
				borderColor: '#229954',
				data: data
			}],
		},
		options: {
            responsive:true,
            legend:false
		}
	});
};

$("#clear-polygon-btn").click(function(){
    rasterLayerAnalysisClear();
});

const rasterLayerAnalysisClear = function(){
    // Ripulisce il layer di selezione
    selectionLayer.clearLayers();
    // Azzera risultati
    $("#raster-stats-max").html("...");
    $("#raster-stats-min").html("...");
    $("#raster-stats-means").html("...");
    $("#raster-stats-mode").html("...");
    $("#raster-stats-median").html("...");
    // Cancella grafico
    if (rasterChart) { rasterChart.destroy(); }
    // Disabilita bottone analisi
    $("#run-analysis-btn").prop("disabled",true);
};