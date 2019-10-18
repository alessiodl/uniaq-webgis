// jsPanel
import { jsPanel } from 'jspanel4/es6module/jspanel.js';
import 'jspanel4/es6module/extensions/modal/jspanel.modal.js';
import 'jspanel4/dist/jspanel.css'
import { activateSidebarHome, getComune, getPunti } from './map';

var global = {
    // Python GeoAPI development host
    // serverURL: "http://192.168.1.160:5000",
    serverURL: "https://alessiodl.pythonanywhere.com",
	development: true
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
                        getListComuni();
                        $("#login-msg")
                            .removeClass('alert-warning alert-danger').addClass('alert-success')
                            .html("<i class='fas fa-cog fa-spin'></i> Autenticazione riuscita! Caricamento dati...");
                        setTimeout(function(){
                            console.log(global);
                            document.querySelector('.leaflet-sidebar').classList.remove('collapsed');
                            activateSidebarHome();
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
		data:{ token: global.token },
		success: function(resp){
			// Popola filtro
			var options = "";
			$.each(resp.features,function(i,val){
				options += "<option data-icon='fas fa-city' value='"+val.properties.cod_istat+"'>"+val.properties.nome+"</option>"
            });
			// Appende le opzioni
			$("#comuni-filter").append(options);
			// Seleziona Villamagna come predefinito
			$("#comuni-filter").selectpicker('val', '069101');
			// Sblocca il widget
            $("#comuni-filter").prop("disabled",false);
			// Refresh per attuare le modifiche
            $("#comuni-filter").selectpicker('refresh');
            // 
            getComune('069101');
            setTimeout(function(){
                getPunti('069101');
                getListRaster('069101');
            },500)
           
		}
	});
};

export { global, showLoginPanel };