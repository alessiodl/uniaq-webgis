import 'chart.js';
import { punti_campionamento } from './map';

let myChart;
const draw_puntiChart = function(){
	// Dati
    var dataSet = [];

	$.each(punti_campionamento.toGeoJSON().features,function(i, val){
      	dataSet.push(val.properties.elevazione);
	});

	// Grafico
	var ctx = document.getElementById('data-chart').getContext('2d');
	if (myChart) { myChart.destroy(); }

	myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Punto 1","Punto 2","Punto 3","Punto 4","Punto 5","Punto 6","Punto 7","Punto 8"],
			datasets:[{
				label: 'Quota SLM',
				backgroundColor: '#CC263C',
				borderColor: '#ABB2B9',
				data: dataSet
			}]
		},
		options: {
			responsive:true,
			/* onHover: function(evt) {
				var item = myChart.getElementAtEvent(evt);
				if (item.length) {
					console.log(item, evt.type);
				};
			} */
		}
	});
};

const draw_bioFunzChart = function(data){
    // Crea grafico
	var ctx = document.getElementById('data-chart').getContext('2d');
    if (myChart) { myChart.destroy(); }
    
    // Periodo
    var periodo = $("#periodo-filter").val();
	// serie di dati
	var awcd_data = [];
	$.each(data,function(i,val){
		if (val['PERIODO'] == periodo) { awcd_data.push( val.AWCD ); }
	});

	var sw_data = [];
	$.each(data,function(i,val){ 
		if (val['PERIODO'] == periodo) { sw_data.push( val.SW ); }
	});

	var vc_data = [];
	$.each(data,function(i,val){ 
		if (val['PERIODO'] == periodo) { vc_data.push( val.VC ); }
	});

	myChart = new Chart(ctx, {
	    type: 'bar',
	    data:{
	    	labels: ["Punto 1","Punto 2","Punto 3","Punto 4","Punto 5","Punto 6","Punto 7","Punto 8"],
		    datasets:[{
		    	label: 'AWCD',
		    	backgroundColor: '#FFC300',
	            borderColor: '#FFC300',
		    	data: awcd_data
		    },{
		    	label:'SW',
		    	backgroundColor: '#FF5733',
	            borderColor: '#FF5733',
		    	data: sw_data
		    },{
		    	label:'VC',
		    	backgroundColor: '#C70039',
	            borderColor: '#C70039',
		    	data: vc_data
		    }],
	    },
	    options: {
	    	responsive:true
	    }
	});
};

const draw_bioGenChart = function(data){
    // Crea grafico
	var ctx = document.getElementById('data-chart').getContext('2d');
    if (myChart) { myChart.destroy(); }
    
    // Periodo
    var periodo = $("#periodo-filter").val();
    // Serie di dati
	var d_data = [];
	$.each(data,function(i,val){
		if (val.PERIODO == periodo) { d_data.push( val["1-D"] ); }
	});

	var ed_data = [];
	$.each(data,function(i,val){ 
		if (val.PERIODO == periodo) { ed_data.push( val.Ed ); }
	});

	var fo_data = [];
	$.each(data,function(i,val){ 
		if (val.PERIODO == periodo) { fo_data.push( val.Fo ); }
	});

	// console.log(d_data)

	myChart = new Chart(ctx, {
		type: 'bar',
		data:{
			labels: ["Punto 1","Punto 2","Punto 3","Punto 4","Punto 5","Punto 6","Punto 7","Punto 8"],
			datasets:[{
				label: '1-D',
				backgroundColor: '#FFC300',
				borderColor: '#FFC300',
				data: d_data
			},{
				label:'Ed',
				backgroundColor: '#FF5733',
				borderColor: '#FF5733',
				data: ed_data
			},{
				label:'Fo',
				backgroundColor: '#C70039',
				borderColor: '#C70039',
				data: fo_data
			}],
		},
		options: {
			responsive:true
		}
	});
};

const draw_matTecChart = function(data){
    // Crea grafico
	var ctx = document.getElementById('data-chart').getContext('2d');
    if (myChart) { myChart.destroy(); }
    
    // Periodo
    var periodo = $("#periodo-filter").val();
    // Serie di dati
	var acidita_data = [];
	$.each(data,function(i,val){
		if (val.PERIODO == periodo) { acidita_data.push( val.ACIDITA_TOT ); }
	});

	var babo_data = [];
	$.each(data,function(i,val){ 
		if (val.PERIODO == periodo) { babo_data.push( val.BABO ); }
	});

	var ph_data = [];
	$.each(data,function(i,val){ 
		if (val.PERIODO == periodo) { ph_data.push( val.PH ); }
	});

	// console.log(d_data)

	myChart = new Chart(ctx, {
		type: 'bar',
		data:{
			labels: ["Punto 1","Punto 2","Punto 3","Punto 4","Punto 5","Punto 6","Punto 7","Punto 8"],
			datasets:[{
				label: 'Acidità Tot.',
				backgroundColor: '#4A235A',
				borderColor: '#4A235A',
				data: acidita_data
			},{
				label:'BABO',
				backgroundColor: '#9C27B0',
				borderColor: '#9C27B0',
				data: babo_data
			},{
				label:'PH',
				backgroundColor: '#0097A7',
				borderColor: '#0097A7',
				data: ph_data
			}],
		},
		options: {
			responsive:true
		}
	});

};

const draw_microvinChart = function(data){
	// Crea grafico
	var ctx = document.getElementById('data-chart').getContext('2d');
    if (myChart) { myChart.destroy(); }
    
    // Periodo
	var periodo = $("#periodo-filter").val();
	// Parametro microvinificazione selezionato
	var parametro = $("#microvin-filter").val();
	// Serie di dati
	var parametro_data = [];
	$.each(data,function(i,val){
		if (val.PERIODO == periodo) { parametro_data.push( val[parametro] ); }
	});

	// console.log(d_data)

	myChart = new Chart(ctx, {
		type: 'bar',
		data:{
			labels: ["Punto 1","Punto 2","Punto 3","Punto 4","Punto 5","Punto 6","Punto 7","Punto 8"],
			datasets:[{
				label: $("#microvin-filter option:selected").text(),
				backgroundColor: '#4A235A',
				borderColor: '#4A235A',
				data: parametro_data
			}],
		},
		options: {
			responsive:true
		}
	});
}


export { draw_puntiChart, draw_bioFunzChart, draw_bioGenChart, draw_matTecChart, draw_microvinChart };