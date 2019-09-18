// jQuery
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
// Font Awesome
import '@fortawesome/fontawesome-free/js/all';
// Bootstrap
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap select
import 'bootstrap-select';
$.fn.selectpicker.Constructor.BootstrapVersion = '4';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
// Custom
import './app/js/map';
import { resizeMap, getComune, getPunti } from './app/js/map';
import { global, showLoginPanel } from './app/js/auth';
import './app/js/tables';
import './app/css/style.css';
import { getMicrobiologici, getVinificazione } from './app/js/dati';
import { draw_puntiTable } from './app/js/tables';
import { draw_puntiChart } from './app/js/charts';

document.addEventListener('DOMContentLoaded', (event) => {
    resizeMap();
    showLoginPanel();
    $("#microvin-filter").selectpicker('hide');
});

$("#comuni-filter, #dati-filter, #periodo-filter").change( function(){
    var istat = $("#comuni-filter").val();
    var dati = $("#dati-filter").val();
    var periodo = $("#periodo-filter").val();
    
    getComune(istat);
    getPunti(istat);
     
    if (dati == 'biodiversita_funzionale' || dati == 'biodiversita_genetica'){
        getMicrobiologici();
        $("#microvin-filter").selectpicker('hide');
    } else {
        if (dati == 'microvinificazione') {
            $("#microvin-filter").selectpicker('show');
            $("#microvin-filter").change(function(){
                getVinificazione();
            })
        } else {
            $("#microvin-filter").selectpicker('hide');
        }
        getVinificazione();
    }

});



