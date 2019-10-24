// jsPanel
import { jsPanel } from 'jspanel4/es6module/jspanel.js';
import 'jspanel4/es6module/extensions/modal/jspanel.modal.js';
import 'jspanel4/dist/jspanel.css'
import { activateSidebarHome, getComune, getPunti, getStazMeteo } from './map';
import { DH_NOT_SUITABLE_GENERATOR } from 'constants';

var global = {
    // Python GeoAPI host
    serverURL: "https://alessiodl.pythonanywhere.com",
    username:"",
    development: true,
    version: "Prototype"
};

function showLoginPanel() {
    let panel = jsPanel.modal.create({
        id:             'panel-auth',
        closeOnBackdrop: false,
        closeOnEscape:   false,
        theme:          '#C0392B',
        border:         '1px solid',
        iconfont:       'fas',
        headerLogo:     '<span>&nbsp;<i class="fas fa-user"></i></span>',
        headerTitle:    'Sistema Informativo Dati Agroambientali',
        headerControls: 'none md',
        position:       'center-top 0 58',
        contentSize:    '450 250',
        content:        '<div class="col-md-12">'+
                           '<input id="username" type="text" class="form-control" placeholder="Nome utente"></input><br/>'+
                           '<input id="password" type="password" class="form-control" placeholder="Password"></input>'+
                        '</div><br/>'+
                        '<div class="col-md-12">'+
                           '<p id="login-msg" class="alert alert-warning">'+
                                '<i class="fas fa-key"></i> Inserire le credenziali di accesso'+
                            '</p>'+
                        '</div>',
        footerToolbar: '<button id="login-btn" class="btn btn-sm btn-secondary">Login <i class="fas fa-sign-in-alt"></i></button>',
        callback: function () {
            this.content.style.padding = '20px';
            document.querySelector("#login-btn").addEventListener("click", function(){
                // Recupera Token dal Server
                $.get({
                    url: global.serverURL+"/api/login",
                    data:{
                        username: $("#username").val(),
                        password: $("#password").val()
                    },
                    success: function(response){
                        console.log(response.token);
                        global.token = response.token;
                        global.username = $("#username").val();
                        getListComuni();
                        $("#login-msg")
                            .removeClass('alert-warning alert-danger').addClass('alert-success')
                            .html("<i class='fas fa-cog fa-spin'></i> Autenticazione riuscita! Caricamento dati...");
                        setTimeout(function(){
                            // console.log(global);
                            document.querySelector('.leaflet-sidebar').classList.remove('collapsed');
                            activateSidebarHome();
                            // showTitlePanel();
                            $("#info-user").html(global.username)
                            panel.close();
                        },3000);
                    },
                    error: function(e){
                        $("#login-msg")
                            .removeClass('alert-warning').addClass('alert-danger')
                            .html("<i class='fas fa-times'></i> Autenticazione fallita!");
                    }
                });
            });
        }
    });
};

const showTitlePanel = function(){
    jsPanel.create({
        id: 'app-title',
        header: false,
        resizeit: false,
        theme: '#C0392B filled',
        border: '2px solid rgba(0,0,0,.2)',
        borderRadius: 3,
        content: '<div style="padding:2px 10px 0 5px;">'+
                    '<span style="font-size:20px;"><i class="far fa-compass"></i> DISIM WebGIS Dashboard</span><br/>'+
                    '<span style="font-size:12px;margin-left:26px;">Utente: <strong>'+global.username+'</strong></span>'+
                '</div>',
        position: 'left-top 55 10',
        contentSize: 'auto 61'
    });
}

let getListRaster = function(cod_istat){
	// Recupera dati dal server
    $.ajax({
		url:global.serverURL+"/api/raster/list",
		data:{ 
			istatComune: cod_istat
		},
		success: function(resp){
            var options = "";
			$.each(resp.raster_data,function(i,val){
				options += "<option data-icon='far fa-map' value='"+val.filename+"'>"+val.alias+"</option>"
            });
            // Appende le opzioni
            $("#raster-filter").empty().append(options);
            $("#raster-filter").selectpicker('refresh');
		}
	})
};

let getListComuni = function(){
	$.getJSON({
		url:global.serverURL+"/api/comuni", 
        data:{ 
            token: global.token, 
            istatComune: '069101,068035,068026,066060',
        },
		success: function(resp){
			// Popola filtro
			var options = "";
			$.each(resp.features,function(i,val){
                // console.log(val.properties.nome)
				options += "<option data-icon='fas fa-city' value='"+val.properties.cod_istat+"'>"+val.properties.nome+"</option>"
            });
			// Appende le opzioni
			$("#comuni-filter").empty().append(options);
			// Seleziona Villamagna come predefinito
			$("#comuni-filter").selectpicker('val', '069101');
			// Sblocca il widget
            $("#comuni-filter").prop("disabled",false);
			// Refresh per attuare le modifiche
            $("#comuni-filter").selectpicker('refresh');
            // 
            getComune('069101');
            setTimeout(function(){
                getStazMeteo();
                getPunti('069101');
                getListRaster('069101');
            },500);
           
		}
	});
};

export { global, showLoginPanel };