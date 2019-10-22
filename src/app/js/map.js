// Leaflet
import 'leaflet';
import 'leaflet/dist/leaflet.css';
import sidebar from 'leaflet-sidebar-v2';
import 'leaflet-sidebar-v2/css/leaflet-sidebar.min.css';
import 'georaster-layer-for-leaflet';
import 'geoblaze';
import 'leaflet-draw';
import 'leaflet-multi-style';

// ChromaJS
import chroma from 'chroma-js';
import { global } from './auth';
import { getMeteoData } from './dati';
import { draw_puntiChart, draw_meteoChart } from './charts';
import { draw_puntiTable, adjustTable } from './tables';

// initalize leaflet map
const map = L.map('map-container',{attributionControl: false}).setView([42, 14], 6);

// Controllo per il disegno di una AOI rettangolare
const polygonDrawer = new L.Draw.Polygon(map);

const selectionLayer = L.geoJSON(null,{
	style: {
		"color": "#ff7800",
		"weight": 5,
		"opacity": 0.65
	}
}).addTo(map);

// Renderer
const myRenderer = L.canvas({ padding: 0.5 });
// Crate panel to put CartoDB labels on top basemaps
map.createPane('labels');
map.getPane('labels').style.zIndex = 650;
map.getPane('labels').style.pointerEvents = 'none'
// baselayer
var satellite = L.layerGroup([
    L.tileLayer.wms('http://213.215.135.196/reflector/open/service?', {
		maxZoom: 18,
        layers: 'rv1',
        format: 'image/png',
        attribution: '<a href="http://realvista.it" target="_blank">RealVista</a> 1.0 Open WMS &copy; <a href="http://e-geos.it" target="_blank">e-GEOS SpA</a> - CC BY SA'
    }),
    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png',{
		maxZoom: 18,
        attribution: '&copy; OpenStreetMap, &copy; CartoDB',
        pane: 'labels'
    })
]).addTo(map);

var mappa_base = L.layerGroup([
	L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
		subdomains: 'abcd'
	}), 
	L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png',{
		maxZoom: 18,
        attribution: '&copy; OpenStreetMap, &copy; CartoDB',
        pane: 'labels'
    })
]);

// Comune
const comune = L.geoJSON.multiStyle(null,{
	styles:[
		{color: 'black', opacity: 0.15, weight: 10, fill: false},
        {color: 'white', opacity: 0.8, weight: 8, fill: false},
        {color: 'red', opacity: 1, weight: 4, fill: false}
	]
}).addTo(map);

const getComune = function(istat){
    comune.clearLayers();
	$.getJSON({
		url:global.serverURL+"/api/comuni",
		data:{ token: global.token, istatComune: istat },
		success: function(response){
			// Popola il layer
			comune.addData(response);
			// Va all'estensione del layer
			let right_padding = $("#sidebar").width()
			map.fitBounds(comune.getBounds(), {paddingBottomRight: [right_padding, 10]});
		}
	});
};

// Punti di campionamento
const punti_campionamento = L.geoJSON(null,{
	pane:'punti',
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng,{
			renderer: myRenderer,
			radius: 10,
			fillColor: "#CC0000",
			fillOpacity: 0.75,
			color: "#FFF",
			weight:2,
			opacity: 1
		})
	},
	onEachFeature: function (feature,layer){
		var attributes = layer.feature.properties;
		layer.bindTooltip(String("P"+layer.feature.properties.id),{permanent:true, direction:"top"}).openTooltip();
		layer.bindPopup(
			"Punto di campionamento: <strong>P"+attributes["id"]+"</strong><br/>"+
			"Comune: "+attributes["comune"]+" ("+attributes["cod_istat"]+")</br>"+
			"Altezza SLM: "+attributes["elevazione"]+" metri"
		);
		layer.on({
			mouseover:function(e){
				var layer = e.target;
				layer.setStyle({
					fillOpacity: 1,
					radius:12,
					weight:3,
				});
			},
			mouseout: function(e){
				layer.setStyle({
					fillOpacity: 0.75,
					radius:10,
					weight:2,
				});
			}
		})
	}
}).addTo(map);

const getPunti = function(istat){
    punti_campionamento.clearLayers();
	$.getJSON({
		url:global.serverURL+"/api/punti",
		data:{ token: global.token, istatComune: istat },
		success: function(response){
			// Popola il layer
			punti_campionamento.addData(response);
            // Popola la tabella dei punti nel pannello laterale
            if ($("#dati-filter").val() == 'pt'){
                setTimeout( draw_puntiTable(), 200);
                // Mostra il grafico del profilo altimetrico
                setTimeout( draw_puntiChart(), 200); 
            }
		}
	});
}


// Stazioni Meteo
const staz_meteo = L.geoJSON(null,{
	pane:'punti',
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng,{
			renderer: myRenderer,
			radius: 8,
			fillColor: "#0000CC",
			fillOpacity: 0.85,
			color: "#FFF",
			weight: 1,
			opacity: 1
		})
	},
	onEachFeature: function (feature,layer){
		var attributes = layer.feature.properties;
		layer.bindPopup(
			"Stazione meteo: <strong>"+attributes["nome"]+"</strong><br/>"+
			"Altezza SLM: "+attributes["altitudine"]
		);
		layer.on({
			mouseover:function(e){
				var layer = e.target;
				layer.setStyle({
					fillOpacity: 1,
					radius:10,
					weight:2,
				});
			},
			mouseout: function(e){
				layer.setStyle({
					fillOpacity: 0.85,
					radius:8,
					weight:1,
				});
			}
		})
	},
}).addTo(map);

const getStazMeteo = function(){
    staz_meteo.clearLayers();
	$.getJSON({
		url:global.serverURL+"/api/stazioni/meteo",
		data:{ token: global.token },
		success: function(response){
			// Popola il layer
			staz_meteo.addData(response);
		}
	});
};

// Legenda scala
let rasterLayer;
let getRaster = function(){
	
	if (map.hasLayer(rasterLayer)){ rasterLayer.remove(); };

	$("#raster-msg").html(
		"<i class='fas fa-cog fa-spin'></i> Caricamento dati raster in corso..."
	);
	var selectedRaster = $("#raster-filter").val();
	var rasterUrl = global.serverURL+"/raster_data/"+selectedRaster;
	
	let colorscale;

	if (selectedRaster.includes('NDVI')){
		colorscale = chroma.scale('YlGn').domain([-1,1]);
	} else if (selectedRaster.includes('DEM')){
		colorscale = chroma.scale(['#5C7E26','#94C06E','#C0AC6E','#96685E']).domain([155.378,334.486]);
	} else if (selectedRaster.includes('PENDENZA')){
		colorscale = chroma.scale('RdGy').domain([1.599969,57.068]);
	} else if (selectedRaster.includes('ESPOSIZIONE')){
		colorscale = chroma.scale('RdYlGn').domain([7.20119,352.786]);
	}

	fetch(rasterUrl)
	.then(response => response.arrayBuffer())
	.then(arrayBuffer => {
		parseGeoraster(arrayBuffer).then(georaster => {
			rasterLayer = new GeoRasterLayer({
				georaster: georaster,
				opacity: 0.9,
				pixelValuesToColorFn: function(values){
					if (values[0] === georaster.noDataValue){
						return 'rgba(255,255,255,0.0)';
					} else {
						return colorscale(values[0]).hex();
					}
				},
				resolution:256
			});
			rasterLayer.addTo(map);
			map.fitBounds(rasterLayer.getBounds());
			$("#raster-msg").html("<i class='fas fa-info-circle'></i> Analizzare il raster con gli strumenti a disposizione");
			document.querySelector("#raster-legend").style.backgroundImage = "linear-gradient(to right," +colorscale.colors().toString()+ ")";
			$("#raster-px-value").html('<span class="text-muted" style="font-size:16px;">Clicca sul raster ...</span>');
			$("#raster-slider").val(0.9);
			$("#raster-slider").attr('disabled',false);
		});
	});
};

// Layer Control
L.control.layers({
	// Basemaps
	"Ortofoto": satellite,
	"Mappa": mappa_base
},{
	// Overlays
	"Stazioni meteo": staz_meteo,
	"Punti di campionamento": punti_campionamento,
	"Confini comunali": comune
},{ position: 'bottomleft' }).addTo(map);

map.on('baselayerchange', function(e){
	
	if (e.name == 'Mappa') {
		punti_campionamento.setStyle({
			color:'#4A235A'
		});
	} else if (e.name == 'Ortofoto'){
		punti_campionamento.setStyle({
			color: "#FFF"
		})
	}
});

// Sidebar
var rightsidebar = L.control.sidebar({
    autopan: true,       
    closeButton: false,    
    container: 'sidebar', 
    position: 'right'
}).addTo(map);

let resizeMap = function(){
    map.invalidateSize();
}

let activateSidebarHome = function() {
	rightsidebar.open('home-tab');
	setTimeout(function(){
		// Va all'estensione del layer
		let right_padding = $("#sidebar").width()
		map.fitBounds(comune.getBounds(), {paddingBottomRight: [right_padding, 10]});
		// 
		adjustTable('data');
	}, 750);
}

rightsidebar.on('content', function(e) {
	// console.log(e.id);
    if (e.id == 'meteo-tab'){
		getMeteoData();
	}
})

export { resizeMap, activateSidebarHome, 
	map, getComune, getStazMeteo, staz_meteo, getPunti, punti_campionamento, getRaster, rasterLayer, 
	polygonDrawer, selectionLayer
};



