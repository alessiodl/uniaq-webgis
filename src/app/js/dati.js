import { global } from './auth';
import { draw_bioFunzTable, draw_bioGenTable, draw_matTecTable, draw_microvinTable } from './tables';
import { draw_bioFunzChart, draw_bioGenChart, draw_matTecChart, draw_microvinChart } from './charts';

let getMicrobiologici = function(){
    // Recupera dati dal server
    $.ajax({
		url:global.serverURL+"/api/dati/microbiologici",
		data:{ 
			token: global.token, 
			istatComune: $("#comuni-filter").val(),
			tipoDati: $("#dati-filter").val()
		},
		success: function(response){
			if ($("#dati-filter").val() == 'biodiversita_funzionale'){
                draw_bioFunzTable(response);
                draw_bioFunzChart(response);
            } else if ($("#dati-filter").val() == 'biodiversita_genetica') {
                draw_bioGenTable(response);
                draw_bioGenChart(response);
            }
		}
	});
};

let getVinificazione = function(){
    // Recupera dati dal server
    $.ajax({
		url:global.serverURL+"/api/dati/vinificazione",
		data:{ 
			token: global.token, 
			istatComune: $("#comuni-filter").val(),
			tipoDati: $("#dati-filter").val()
		},
		success: function(response){
			if ($("#dati-filter").val() == 'maturazione_tecnologica'){
                draw_matTecTable(response);
                draw_matTecChart(response);
            } else if ($("#dati-filter").val() == 'microvinificazione'){
				console.log(response);
				draw_microvinTable(response);
				draw_microvinChart(response);
            }
		}
	})
};

export { getMicrobiologici, getVinificazione }