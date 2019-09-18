import 'datatables.net';
import 'datatables.net-bs4';

import { punti_campionamento } from './map';

const draw_puntiTable = function(){
	// Dati
	let dataSet = [];
	$.each(punti_campionamento.toGeoJSON().features,function(i, val){
      	dataSet.push([
      		val.properties.id,
      		val.properties.elevazione,
      	    val.properties.lat,
      	    val.properties.long,
      	    val.properties.comune,
      	    val.properties.cod_istat
      	]);
	});
	// Tabella
	$('#data-grid').DataTable({
		destroy: true,
		data: dataSet,
		scrollY: 250,
		scrollX: false,
		scrollCollapse:true,
		searching: false,
		paging: false,
		info: false,
		language: {
			url: "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Italian.json"
		},
		columns: [
			{ title: "Punto"},
		    { title: "Elevazione" },
		    { title: "Latitudine", sortable:false },
		    { title: "Longitudine", sortable:false },
		    { title: "Comune" },
		    { title: "Cod. Istat", sortable:false, visible:false}
		],
		order: [[ 0, "asc" ]]
	});
};

const draw_bioFunzTable = function(data){
    var dataSet = [];
	var periodo = $("#periodo-filter").val();
	$.each(data,function(i, val){
		// Popola array dati per la grid
		if (val.PERIODO == periodo){
	      	dataSet.push([
	      		val['ID CAMPIONE'],
	      		val['COMUNE'],
	      	    val['PERIODO'],
	      	    val['AWCD'],
	      	    val['SW'],
	      	    val['VC']
	      	]);
	      }
	});
	// Popola grid
	$('#data-grid').DataTable({
		destroy: true,
		data: dataSet,
		scrollY: 250,
		scrollX: false,
		scrollCollapse:true,
		searching: false,
		paging: false,
		info:false,
		language: {
			url: "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Italian.json"
		},
		columns: [
			{ title: "Punto"},
			{ title: "Comune", visible:false },
		    { title: "Data" },
		    { title: "AWCD"},
		    { title: "SW" },
		    { title: "VC" }
		],
		order: [[ 2, "asc" ]]
	});
};

const draw_bioGenTable = function(data){
    var dataSet = [];
	var periodo = $("#periodo-filter").val();
	$.each(data,function(i, val){
		// Popola array dati per la grid
		if (val.PERIODO == periodo){
	      	dataSet.push([
	      		val['ID CAMPIONE'],
	      		val.COMUNE,
	      	    val.PERIODO,
	      	    val["1-D"],
	      	    val.Ed,
	      	    val.Fo
	      	]);
	      }
	});
	// Popola grid
	$('#data-grid').DataTable({
		destroy: true,
		data: dataSet,
		scrollY: 250,
		scrollX: false,
		scrollCollapse:true,
		searching: false,
		paging: false,
		info: false,
		language: {
			url: "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Italian.json"
		},
		columns: [
			{ title: "Punto"},
			{ title: "Comune", visible:false },
		    { title: "Data" },
		    { title: "1-D"},
		    { title: "Ed" },
		    { title: "Fo" }
		],
		order: [[ 2, "asc" ]]
	});
};

const draw_matTecTable = function(data){
    var dataSet = [];
	var periodo = $("#periodo-filter").val();
	$.each(data,function(i, val){
		// Popola array dati per la grid
		if (val.PERIODO == periodo){
	      	dataSet.push([
	      		val.ID_CAMPIONE,
	      		val.COMUNE,
	      	    val.PERIODO,
	      	    val.ACIDITA_TOT,
	      	    val.BABO,
	      	    val.PH
	      	]);
	    }
	});
	// Popola grid
	$('#data-grid').DataTable({
		destroy: true,
		data: dataSet,
		scrollY: 250,
		scrollX: false,
		scrollCollapse:true,
		searching: false,
		paging: false,
		info: false,
		language: {
			url: "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Italian.json"
		},
		columns: [
			{ title: "Punto"},
			{ title: "Comune", visible:false },
		    { title: "Data" },
		    { title: "Acidità Tot."},
		    { title: "BABO" },
		    { title: "PH" }
		],
		order: [[ 2, "asc" ]]
	});
};

const draw_microvinTable = function(data){
    var dataSet = [];
	var periodo = $("#periodo-filter").val();
	var parametro_selezionato = $("#microvin-filter").val();
	// console.log(parametro_selezionato);
	$.each(data,function(i, val){
		// Popola array dati per la grid
		if (val.PERIODO == periodo){
	      	dataSet.push([
				val.id,
				val.COMUNE,
				val.COD_ISTAT,
				val.ID_CAMPIONE,
				val.PERIODO,
				val[parametro_selezionato]  
	      	]);
	    }
	});
	// Popola grid 
	$("#data-grid").DataTable({
		destroy: true,
		data: dataSet,
		scrollY: 250,
		scrollX: false,
		scrollCollapse:true,
		searching: false,
		paging: false,
		info: false,
		language: {
			url: "https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Italian.json"
		},
		columns: [
			{ title: "id", visible:false },
			{ title: "Comune", visible:false },
			{ title: "Istat", visible:false },
			{ title: "Punto" },
			{ title: "Data" },
			{ title: $("#microvin-filter option:selected").text() }
		],
		order: [[ 0, "asc" ]]
	});
};

const adjustTable = function (layer) {
	var tableObj = $('#'+layer+'-grid').DataTable();
	// Regola larghezza tabella e ricarica alla pagina corrente	
	tableObj.columns.adjust().draw();
	// tableObj.page(page).draw(false);
};

export { draw_puntiTable, draw_bioFunzTable, draw_bioGenTable, draw_matTecTable, draw_microvinTable };