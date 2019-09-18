// Leaflet
import 'leaflet';
import 'leaflet/dist/leaflet.css';
import sidebar from 'leaflet-sidebar-v2';
import 'leaflet-sidebar-v2/css/leaflet-sidebar.min.css';
import 'geoblaze';
// ChromaJS
import chroma from 'chroma-js';
import { global } from './auth';
import { draw_puntiChart } from './charts';
import { draw_puntiTable, adjustTable } from './tables';

// initalize leaflet map
const map = L.map('map-container').setView([42, 14], 6);

map.on('click', function(e){
    console.log(e.latlng.lat,e.latlng.lng);
});

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
// Comune
const comune = L.geoJSON(null,{
	style: function (feature) {
	    return {
	      color: "#dc3545",
	      weight: 3,
	      fill: false,
	      opacity: 1,
	      clickable: false
	    };
	}
}).addTo(map);

const getComune = function(istat){
    comune.clearLayers();
	$.getJSON({
		url:global.serverURL+"/api/comuni",
		data:{ token: global.token, istatComune: istat },
		success: function(response){
            console.log(response);
			// Popola il layer
			comune.addData(response);
			// Va all'estensione del layer
			map.fitBounds(comune.getBounds());
		}
	});
};

// Punti di campionamento
const punti_campionamento = L.geoJSON(null,{
	pane:'punti',
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng,{
			renderer: myRenderer,
			radius: 8,
			fillColor: "#CC263C",
			fillOpacity: 0.75,
			color: "#FFF",
			weight:2,
			opacity: 1
		})
	},
	onEachFeature: function (feature,layer){
		var attributes = layer.feature.properties;
		layer.bindPopup(
			"<table class='table table-sm'>"+
				"<thead>"+
					"<tr><th><span class='list-element-title'>Punto di campionamento "+attributes["id"]+"</span></th></tr>"+
				"</thead>"+
				"<tbody>"+
					"<tr><td>Comune: "+attributes["comune"]+" ("+attributes["cod_istat"]+")</td></tr>"+
					"<tr><td>Altezza SLM: "+attributes["elevazione"]+" metri</td></tr>"+
				"</tbody>"+
			"</table>"
		);
		layer.on({
			mouseover:function(e){
				var layer = e.target;
				layer.setStyle({
					fillOpacity: 1,
					radius:10,
					weight:3,
				});
			},
			mouseout: function(e){
				layer.setStyle({
					fillOpacity: 0.75,
					radius:8,
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

// Legenda scala
var colorscale = chroma.scale('YlGn').domain([0,1]);
document.querySelector("#ndvi-legend").style.backgroundImage = "linear-gradient(to right," +colorscale.colors().toString()+ ")";

// Sidebar
var rightsidebar = L.control.sidebar({
    autopan: false,       
    closeButton: false,    
    container: 'sidebar', 
    position: 'right'
}).addTo(map);

let resizeMap = function(){
    map.invalidateSize();
}

let activateSidebarHome = function() {
    rightsidebar.open('home-tab');
}

export { resizeMap, activateSidebarHome, getComune, getPunti, punti_campionamento };



