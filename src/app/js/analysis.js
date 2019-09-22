import $ from 'jquery';
import { map, rasterLayer, getRaster } from './map';

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

