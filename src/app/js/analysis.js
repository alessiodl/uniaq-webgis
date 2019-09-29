import $ from 'jquery';
import { map, rasterLayer, getRaster, polygonDrawer, selectionLayer } from './map';

$("#add-raster-btn").click(function(){
    getRaster();
});

$("#remove-raster-btn").click(function(){
    $("#raster-msg").html("<i class='fas fa-lightbulb'></i> Scegliere un raster dall'elenco e aggiungerlo alla mappa");
    document.querySelector("#raster-legend").style.backgroundImage = "none";
    $("#raster-slider").attr('disabled',true);
    $("#raster-px-value").html('<span class="text-muted" style="font-size:16px;">Clicca sul raster ...</span>');
    rasterLayer.remove();
});

$("#raster-slider").change(function(){
    rasterLayer.setOpacity($(this).val());
});

map.on('click', function(e){
	// console.log(e.latlng.lat,e.latlng.lng);
	let lat = e.latlng.lat;
	let lng = e.latlng.lng;
    if (map.hasLayer(rasterLayer)){
        let pixel_value = geoblaze.identify(rasterLayer.georaster,[lng,lat]);
        $("#raster-px-value").html(parseFloat(pixel_value).toFixed(3));
    } else {
        $("#raster-px-value").html('...');
    }
});

$("#draw-polygon-btn").click(function(){
    polygonDrawer.enable();
});

map.on('draw:created', function (e) {

	selectionLayer.clearLayers();

    var type = e.layerType,
        layer = e.layer;
	var minx = layer.getBounds()._southWest.lng
	var miny = layer.getBounds()._southWest.lat
	var maxx = layer.getBounds()._northEast.lng
	var maxy = layer.getBounds()._northEast.lng
    // Do whatever you want with the layer.
    // e.type will be the type of layer that has been draw (polyline, marker, polygon, rectangle, circle)
    selectionLayer.addData( layer.toGeoJSON() );
    // console.log(selectionLayer.toGeoJSON());
    let geom = selectionLayer.toGeoJSON();
    setTimeout(function(){
        rasterLayerAnalysis(geom);
    }, 500);
});

const rasterLayerAnalysis = function(geom){
    let means = geoblaze.mean(rasterLayer.georaster, geom);
    let min = geoblaze.min(rasterLayer.georaster, geom);
    let max = geoblaze.max(rasterLayer.georaster, geom);
    const histogramOptions = {
        scaleType: 'ratio',
        numClasses: 12,
        classType: 'equal-interval'
    };
    let histogram = geoblaze.histogram(rasterLayer.georaster, geom, histogramOptions);
    console.log(histogram)

    let histogramLabels = Object.keys(histogram[0]);
    let histogramValues = Object.values(histogram[0]);

    draw_rasterChart(histogramLabels,histogramValues);
    // console.log(max)
    // console.log(min)
    // console.log(means)
    $("#raster-stats-max").html(max[0]);
    $("#raster-stats-min").html(min[0]);
    $("#raster-stats-means").html(means[0]);
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
			responsive:true
		}
	});
};

$("#clear-polygon-btn").click(function(){
    // Ripulisce il layer di selezione
    selectionLayer.clearLayers();
    // Azzera risultati
    $("#raster-stats-max").html("...");
    $("#raster-stats-min").html("...");
    $("#raster-stats-means").html("...");
    // Cancella grafico
    if (rasterChart) { rasterChart.destroy(); }
});
