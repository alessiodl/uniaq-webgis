!function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(d&&d(t);p.length;)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={0:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;o.push([172,1]),a()}({167:function(e,t,a){var n={"./af":10,"./af.js":10,"./ar":11,"./ar-dz":12,"./ar-dz.js":12,"./ar-kw":13,"./ar-kw.js":13,"./ar-ly":14,"./ar-ly.js":14,"./ar-ma":15,"./ar-ma.js":15,"./ar-sa":16,"./ar-sa.js":16,"./ar-tn":17,"./ar-tn.js":17,"./ar.js":11,"./az":18,"./az.js":18,"./be":19,"./be.js":19,"./bg":20,"./bg.js":20,"./bm":21,"./bm.js":21,"./bn":22,"./bn.js":22,"./bo":23,"./bo.js":23,"./br":24,"./br.js":24,"./bs":25,"./bs.js":25,"./ca":26,"./ca.js":26,"./cs":27,"./cs.js":27,"./cv":28,"./cv.js":28,"./cy":29,"./cy.js":29,"./da":30,"./da.js":30,"./de":31,"./de-at":32,"./de-at.js":32,"./de-ch":33,"./de-ch.js":33,"./de.js":31,"./dv":34,"./dv.js":34,"./el":35,"./el.js":35,"./en-SG":36,"./en-SG.js":36,"./en-au":37,"./en-au.js":37,"./en-ca":38,"./en-ca.js":38,"./en-gb":39,"./en-gb.js":39,"./en-ie":40,"./en-ie.js":40,"./en-il":41,"./en-il.js":41,"./en-nz":42,"./en-nz.js":42,"./eo":43,"./eo.js":43,"./es":44,"./es-do":45,"./es-do.js":45,"./es-us":46,"./es-us.js":46,"./es.js":44,"./et":47,"./et.js":47,"./eu":48,"./eu.js":48,"./fa":49,"./fa.js":49,"./fi":50,"./fi.js":50,"./fo":51,"./fo.js":51,"./fr":52,"./fr-ca":53,"./fr-ca.js":53,"./fr-ch":54,"./fr-ch.js":54,"./fr.js":52,"./fy":55,"./fy.js":55,"./ga":56,"./ga.js":56,"./gd":57,"./gd.js":57,"./gl":58,"./gl.js":58,"./gom-latn":59,"./gom-latn.js":59,"./gu":60,"./gu.js":60,"./he":61,"./he.js":61,"./hi":62,"./hi.js":62,"./hr":63,"./hr.js":63,"./hu":64,"./hu.js":64,"./hy-am":65,"./hy-am.js":65,"./id":66,"./id.js":66,"./is":67,"./is.js":67,"./it":68,"./it-ch":69,"./it-ch.js":69,"./it.js":68,"./ja":70,"./ja.js":70,"./jv":71,"./jv.js":71,"./ka":72,"./ka.js":72,"./kk":73,"./kk.js":73,"./km":74,"./km.js":74,"./kn":75,"./kn.js":75,"./ko":76,"./ko.js":76,"./ku":77,"./ku.js":77,"./ky":78,"./ky.js":78,"./lb":79,"./lb.js":79,"./lo":80,"./lo.js":80,"./lt":81,"./lt.js":81,"./lv":82,"./lv.js":82,"./me":83,"./me.js":83,"./mi":84,"./mi.js":84,"./mk":85,"./mk.js":85,"./ml":86,"./ml.js":86,"./mn":87,"./mn.js":87,"./mr":88,"./mr.js":88,"./ms":89,"./ms-my":90,"./ms-my.js":90,"./ms.js":89,"./mt":91,"./mt.js":91,"./my":92,"./my.js":92,"./nb":93,"./nb.js":93,"./ne":94,"./ne.js":94,"./nl":95,"./nl-be":96,"./nl-be.js":96,"./nl.js":95,"./nn":97,"./nn.js":97,"./pa-in":98,"./pa-in.js":98,"./pl":99,"./pl.js":99,"./pt":100,"./pt-br":101,"./pt-br.js":101,"./pt.js":100,"./ro":102,"./ro.js":102,"./ru":103,"./ru.js":103,"./sd":104,"./sd.js":104,"./se":105,"./se.js":105,"./si":106,"./si.js":106,"./sk":107,"./sk.js":107,"./sl":108,"./sl.js":108,"./sq":109,"./sq.js":109,"./sr":110,"./sr-cyrl":111,"./sr-cyrl.js":111,"./sr.js":110,"./ss":112,"./ss.js":112,"./sv":113,"./sv.js":113,"./sw":114,"./sw.js":114,"./ta":115,"./ta.js":115,"./te":116,"./te.js":116,"./tet":117,"./tet.js":117,"./tg":118,"./tg.js":118,"./th":119,"./th.js":119,"./tl-ph":120,"./tl-ph.js":120,"./tlh":121,"./tlh.js":121,"./tr":122,"./tr.js":122,"./tzl":123,"./tzl.js":123,"./tzm":124,"./tzm-latn":125,"./tzm-latn.js":125,"./tzm.js":124,"./ug-cn":126,"./ug-cn.js":126,"./uk":127,"./uk.js":127,"./ur":128,"./ur.js":128,"./uz":129,"./uz-latn":130,"./uz-latn.js":130,"./uz.js":129,"./vi":131,"./vi.js":131,"./x-pseudo":132,"./x-pseudo.js":132,"./yo":133,"./yo.js":133,"./zh-cn":134,"./zh-cn.js":134,"./zh-hk":135,"./zh-hk.js":135,"./zh-tw":136,"./zh-tw.js":136};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=167},169:function(e,t,a){var n=a(170);"string"==typeof n&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1};a(4)(n,r);n.locals&&(e.exports=n.locals)},170:function(e,t,a){t=e.exports=a(3)(!1);var n=a(8)(a(171));t.push([e.i,"body {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\nhtml, body, #map-container {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n/* Loader */\r\n.no-js #loader { display: none;  }\r\n.js #loader { display: block; position: absolute; left: 100px; top: 0; }\r\n.se-pre-con {\r\n  position: fixed;\r\n  left: 0px;\r\n  top: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 9999;\r\n  background: url("+n+') center no-repeat #fff;\r\n}\r\n\r\n/* Leaflet overrides */\r\n/*********************/\r\n.leaflet-popup-content-wrapper {\r\n    border-radius: 2px !important;\r\n    font-family: "Ubuntu", Tahoma, "Helvetica Neue", Helvetica, Arial, sans-serif !important;\r\n    font-size:14px !important;\r\n}\r\n.leaflet-popup-content-wrapper a{\r\n  color:#dd4814;\r\n  cursor:pointer;\r\n}\r\n\r\n.leaflet-popup-content-wrapper a:hover{\r\n  color:#97310e;\r\n}\r\n\r\n.leaflet-bar a:last-child {\r\n    border-bottom-left-radius: 2px !important;\r\n    border-bottom-right-radius: 2px !important;\r\n}\r\n\r\n.leaflet-bar a:first-child {\r\n    border-top-left-radius: 2px !important;\r\n    border-top-right-radius: 2px !important;\r\n}\r\n\r\n.leaflet-control-layers {\r\n  border-radius: 2px !important;\r\n}\r\n\r\n/* Stili customizzati Sidebar */\r\n/* ************************** */\r\n@media (min-width: 1200px) {\r\n    .leaflet-sidebar {\r\n        width: 620px;\r\n        max-width: 620px;\r\n    }\r\n}\r\n\r\n.leaflet-sidebar-header {\r\n\tbackground-color: #C0392B !important;\r\n}\r\n\r\n.leaflet-sidebar-tabs {\r\n    padding: 0 0 0 2px !important;\r\n}\r\n\r\n.leaflet-sidebar-tabs > ul > li {\r\n    font-size:20px;\r\n}\r\n\r\n.leaflet-sidebar-tabs > ul > li.active {\r\n    background-color: #4A235A !important;\r\n    margin: 0 0 0 -2px;\r\n}\r\n\r\n.leaflet-sidebar-tabs > ul > li:hover {\r\n    margin: 0 0 0 -2px;\r\n    font-size: 22px;\r\n    color: #C0392B;\r\n}\r\n\r\n/* Stili customizzati jsPanel */\r\n/* ************************** */\r\n.jsPanel { z-index: 10001 !important; }\r\n.jsPanel .jsPanel-hdr { line-height: 2.1; }\r\n.jsPanel .jsPanel-ftr.active { padding: 6px 8px; }\r\n.jsPanel-depth-3 { box-shadow: none; border-radius: 2px; }\r\n.jsPanel-headerlogo { font-size: 20px; }',""])},171:function(e,t,a){e.exports=a.p+"1c7682c778ab7be68d1b96055867a58b.gif"},172:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=(a(138),a(7),a(142),a(143),a(145),a(146),a(148),a(149),a(154),a(155),a(157),a(160),a(162),a(6)),s=a.n(o),i=a(2),l=(a(163),a(164),{serverURL:"http://192.168.1.160:5000",development:!0});let c=function(){$.getJSON({url:l.serverURL+"/api/comuni",data:{token:l.token},success:function(e){var t,a="";$.each(e.features,(function(e,t){a+="<option data-icon='fas fa-city' value='"+t.properties.cod_istat+"'>"+t.properties.nome+"</option>"})),$("#comuni-filter").append(a),$("#comuni-filter").selectpicker("val","069101"),$("#comuni-filter").prop("disabled",!1),$("#comuni-filter").selectpicker("refresh"),g("069101"),v("069101"),t="069101",$.ajax({url:l.serverURL+"/api/raster/list",data:{istatComune:t},success:function(e){var t="";$.each(e.raster_data,(function(e,a){t+="<option data-icon='far fa-map' value='"+a.filename+"'>"+a.alias+"</option>"})),$("#raster-filter").empty().append(t),$("#raster-filter").selectpicker("refresh")}})}})};a(166);let d;a(137),a(168);const u=L.map("map-container").setView([42,14],6),p=new L.Draw.Rectangle(u),f=L.geoJSON().addTo(u),m=L.canvas({padding:.5});u.createPane("labels"),u.getPane("labels").style.zIndex=650,u.getPane("labels").style.pointerEvents="none";L.layerGroup([L.tileLayer.wms("http://213.215.135.196/reflector/open/service?",{maxZoom:18,layers:"rv1",format:"image/png",attribution:'<a href="http://realvista.it" target="_blank">RealVista</a> 1.0 Open WMS &copy; <a href="http://e-geos.it" target="_blank">e-GEOS SpA</a> - CC BY SA'}),L.tileLayer("http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png",{maxZoom:18,attribution:"&copy; OpenStreetMap, &copy; CartoDB",pane:"labels"})]).addTo(u);const b=L.geoJSON(null,{style:function(e){return{color:"#dc3545",weight:3,fill:!1,opacity:1,clickable:!1}}}).addTo(u),g=function(e){b.clearLayers(),$.getJSON({url:l.serverURL+"/api/comuni",data:{token:l.token,istatComune:e},success:function(e){console.log(e),b.addData(e),u.fitBounds(b.getBounds())}})},h=L.geoJSON(null,{pane:"punti",pointToLayer:function(e,t){return L.circleMarker(t,{renderer:m,radius:8,fillColor:"#CC263C",fillOpacity:.75,color:"#FFF",weight:2,opacity:1})},onEachFeature:function(e,t){var a=t.feature.properties;t.bindPopup("<table class='table table-sm'><thead><tr><th><span class='list-element-title'>Punto di campionamento "+a.id+"</span></th></tr></thead><tbody><tr><td>Comune: "+a.comune+" ("+a.cod_istat+")</td></tr><tr><td>Altezza SLM: "+a.elevazione+" metri</td></tr></tbody></table>"),t.on({mouseover:function(e){e.target.setStyle({fillOpacity:1,radius:10,weight:3})},mouseout:function(e){t.setStyle({fillOpacity:.75,radius:8,weight:2})}})}}).addTo(u),v=function(e){h.clearLayers(),$.getJSON({url:l.serverURL+"/api/punti",data:{token:l.token,istatComune:e},success:function(e){h.addData(e),"pt"==$("#dati-filter").val()&&(setTimeout(function(){let e=[];$.each(h.toGeoJSON().features,(function(t,a){e.push([a.properties.id,a.properties.elevazione,a.properties.lat,a.properties.long,a.properties.comune,a.properties.cod_istat])})),$("#data-grid").DataTable({destroy:!0,data:e,scrollY:250,scrollX:!1,scrollCollapse:!0,searching:!1,paging:!1,info:!1,language:{url:"https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Italian.json"},columns:[{title:"Punto"},{title:"Elevazione"},{title:"Latitudine",sortable:!1},{title:"Longitudine",sortable:!1},{title:"Comune"},{title:"Cod. Istat",sortable:!1,visible:!1}],order:[[0,"asc"]]})}(),200),setTimeout(function(){var e=[];$.each(h.toGeoJSON().features,(function(t,a){e.push(a.properties.elevazione)}));var t=document.getElementById("data-chart").getContext("2d");d&&d.destroy(),d=new Chart(t,{type:"line",data:{labels:["Punto 1","Punto 2","Punto 3","Punto 4","Punto 5","Punto 6","Punto 7","Punto 8"],datasets:[{label:"Quota SLM",backgroundColor:"#CC263C",borderColor:"#ABB2B9",data:e}]},options:{responsive:!0}})}(),200))}})};let j;var y=L.control.sidebar({autopan:!1,closeButton:!1,container:"sidebar",position:"right"}).addTo(u);let C=function(){y.open("home-tab")};r()("#add-raster-btn").click((function(){!function(){u.hasLayer(j)&&j.remove(),$("#raster-msg").html("<i class='fas fa-cog fa-spin'></i> Caricamento dati raster in corso...");var e=$("#raster-filter").val(),t=l.serverURL+"/raster_data/"+e;let a;e.includes("NDVI")?a=s.a.scale("YlGn").domain([-1,1]):e.includes("DEM")?a=s.a.scale(["#5C7E26","#94C06E","#C0AC6E","#96685E"]).domain([155.378,334.486]):e.includes("PENDENZA")?a=s.a.scale("RdGy").domain([1.599969,57.068]):e.includes("ESPOSIZIONE")&&(a=s.a.scale("RdYlGn").domain([7.20119,352.786])),fetch(t).then(e=>e.arrayBuffer()).then(e=>{parseGeoraster(e).then(e=>{(j=new GeoRasterLayer({georaster:e,opacity:.9,pixelValuesToColorFn:function(t){return t[0]===e.noDataValue?"rgba(255,255,255,0.0)":a(t[0]).hex()},resolution:256})).addTo(u),u.fitBounds(j.getBounds()),$("#raster-msg").html("<i class='fas fa-info-circle'></i> Analizzare il raster con gli strumenti a disposizione"),document.querySelector("#raster-legend").style.backgroundImage="linear-gradient(to right,"+a.colors().toString()+")",$("#raster-px-value").html('<span class="text-muted" style="font-size:16px;">Clicca sul raster ...</span>'),$("#raster-slider").val(.9),$("#raster-slider").attr("disabled",!1)})})}()})),r()("#remove-raster-btn").click((function(){r()("#raster-msg").html("<i class='fas fa-lightbulb'></i> Scegliere un raster dall'elenco e aggiungerlo alla mappa"),document.querySelector("#raster-legend").style.backgroundImage="none",r()("#raster-slider").attr("disabled",!0),r()("#raster-px-value").html('<span class="text-muted" style="font-size:16px;">Clicca sul raster ...</span>'),j.remove()})),r()("#raster-slider").change((function(){j.setOpacity(r()(this).val())})),u.on("click",(function(e){let t=e.latlng.lat,a=e.latlng.lng;if(u.hasLayer(j)){let e=geoblaze.identify(j.georaster,[a,t]);r()("#raster-px-value").html(parseFloat(e).toFixed(3))}else r()("#raster-px-value").html("...")})),r()("#draw-polygon-btn").click((function(){p.enable()})),u.on("draw:created",(function(e){f.clearLayers();e.layerType;var t=e.layer;t.getBounds()._southWest.lng,t.getBounds()._southWest.lat,t.getBounds()._northEast.lng,t.getBounds()._northEast.lng;f.addData(t.toGeoJSON());let a=f.toGeoJSON();setTimeout((function(){P(a)}),500)}));const P=function(e){let t=geoblaze.mean(j.georaster,e),a=geoblaze.min(j.georaster,e),n=geoblaze.max(j.georaster,e);let o=geoblaze.histogram(j.georaster,e,{scaleType:"ratio",numClasses:12,classType:"equal-interval"});console.log(o);let s=Object.keys(o[0]),i=Object.values(o[0]);k(s,i),r()("#raster-stats-max").html(n[0]),r()("#raster-stats-min").html(a[0]),r()("#raster-stats-means").html(t[0])};let O;const k=function(e,t){var a=document.getElementById("raster-chart").getContext("2d");O&&O.destroy(),O=new Chart(a,{type:"bar",data:{labels:e,datasets:[{label:"Num. di Pixel",backgroundColor:"#229954",borderColor:"#229954",data:t}]},options:{responsive:!0}})};r()("#clear-polygon-btn").click((function(){f.clearLayers(),r()("#raster-stats-max").html("..."),r()("#raster-stats-min").html("..."),r()("#raster-stats-means").html("..."),O&&O.destroy()}));a(169);let x=function(){$.ajax({url:l.serverURL+"/api/dati/microbiologici",data:{token:l.token,istatComune:$("#comuni-filter").val(),tipoDati:$("#dati-filter").val()},success:function(e){var t,a,n;"biodiversita_funzionale"==$("#dati-filter").val()?(t=e,a=[],n=$("#periodo-filter").val(),$.each(t,(function(e,t){t.PERIODO==n&&a.push([t["ID CAMPIONE"],t.COMUNE,t.PERIODO,t.AWCD,t.SW,t.VC])})),$("#data-grid").DataTable({destroy:!0,data:a,scrollY:250,scrollX:!1,scrollCollapse:!0,searching:!1,paging:!1,info:!1,language:{url:"https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Italian.json"},columns:[{title:"Punto"},{title:"Comune",visible:!1},{title:"Data"},{title:"AWCD"},{title:"SW"},{title:"VC"}],order:[[2,"asc"]]}),function(e){var t=document.getElementById("data-chart").getContext("2d");d&&d.destroy();var a=$("#periodo-filter").val(),n=[];$.each(e,(function(e,t){t.PERIODO==a&&n.push(t.AWCD)}));var r=[];$.each(e,(function(e,t){t.PERIODO==a&&r.push(t.SW)}));var o=[];$.each(e,(function(e,t){t.PERIODO==a&&o.push(t.VC)})),d=new Chart(t,{type:"bar",data:{labels:["Punto 1","Punto 2","Punto 3","Punto 4","Punto 5","Punto 6","Punto 7","Punto 8"],datasets:[{label:"AWCD",backgroundColor:"#FFC300",borderColor:"#FFC300",data:n},{label:"SW",backgroundColor:"#FF5733",borderColor:"#FF5733",data:r},{label:"VC",backgroundColor:"#C70039",borderColor:"#C70039",data:o}]},options:{responsive:!0}})}(e)):"biodiversita_genetica"==$("#dati-filter").val()&&(function(e){var t=[],a=$("#periodo-filter").val();$.each(e,(function(e,n){n.PERIODO==a&&t.push([n["ID CAMPIONE"],n.COMUNE,n.PERIODO,n["1-D"],n.Ed,n.Fo])})),$("#data-grid").DataTable({destroy:!0,data:t,scrollY:250,scrollX:!1,scrollCollapse:!0,searching:!1,paging:!1,info:!1,language:{url:"https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Italian.json"},columns:[{title:"Punto"},{title:"Comune",visible:!1},{title:"Data"},{title:"1-D"},{title:"Ed"},{title:"Fo"}],order:[[2,"asc"]]})}(e),function(e){var t=document.getElementById("data-chart").getContext("2d");d&&d.destroy();var a=$("#periodo-filter").val(),n=[];$.each(e,(function(e,t){t.PERIODO==a&&n.push(t["1-D"])}));var r=[];$.each(e,(function(e,t){t.PERIODO==a&&r.push(t.Ed)}));var o=[];$.each(e,(function(e,t){t.PERIODO==a&&o.push(t.Fo)})),d=new Chart(t,{type:"bar",data:{labels:["Punto 1","Punto 2","Punto 3","Punto 4","Punto 5","Punto 6","Punto 7","Punto 8"],datasets:[{label:"1-D",backgroundColor:"#FFC300",borderColor:"#FFC300",data:n},{label:"Ed",backgroundColor:"#FF5733",borderColor:"#FF5733",data:r},{label:"Fo",backgroundColor:"#C70039",borderColor:"#C70039",data:o}]},options:{responsive:!0}})}(e))}})},z=function(){$.ajax({url:l.serverURL+"/api/dati/vinificazione",data:{token:l.token,istatComune:$("#comuni-filter").val(),tipoDati:$("#dati-filter").val()},success:function(e){var t,a,n;"maturazione_tecnologica"==$("#dati-filter").val()?(t=e,a=[],n=$("#periodo-filter").val(),$.each(t,(function(e,t){t.PERIODO==n&&a.push([t.ID_CAMPIONE,t.COMUNE,t.PERIODO,t.ACIDITA_TOT,t.BABO,t.PH])})),$("#data-grid").DataTable({destroy:!0,data:a,scrollY:250,scrollX:!1,scrollCollapse:!0,searching:!1,paging:!1,info:!1,language:{url:"https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Italian.json"},columns:[{title:"Punto"},{title:"Comune",visible:!1},{title:"Data"},{title:"Acidità Tot."},{title:"BABO"},{title:"PH"}],order:[[2,"asc"]]}),function(e){var t=document.getElementById("data-chart").getContext("2d");d&&d.destroy();var a=$("#periodo-filter").val(),n=[];$.each(e,(function(e,t){t.PERIODO==a&&n.push(t.ACIDITA_TOT)}));var r=[];$.each(e,(function(e,t){t.PERIODO==a&&r.push(t.BABO)}));var o=[];$.each(e,(function(e,t){t.PERIODO==a&&o.push(t.PH)})),d=new Chart(t,{type:"bar",data:{labels:["Punto 1","Punto 2","Punto 3","Punto 4","Punto 5","Punto 6","Punto 7","Punto 8"],datasets:[{label:"Acidità Tot.",backgroundColor:"#4A235A",borderColor:"#4A235A",data:n},{label:"BABO",backgroundColor:"#9C27B0",borderColor:"#9C27B0",data:r},{label:"PH",backgroundColor:"#0097A7",borderColor:"#0097A7",data:o}]},options:{responsive:!0}})}(e)):"microvinificazione"==$("#dati-filter").val()&&(console.log(e),function(e){var t=[],a=$("#periodo-filter").val(),n=$("#microvin-filter").val();$.each(e,(function(e,r){r.PERIODO==a&&t.push([r.id,r.COMUNE,r.COD_ISTAT,r.ID_CAMPIONE,r.PERIODO,r[n]])})),$("#data-grid").DataTable({destroy:!0,data:t,scrollY:250,scrollX:!1,scrollCollapse:!0,searching:!1,paging:!1,info:!1,language:{url:"https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Italian.json"},columns:[{title:"id",visible:!1},{title:"Comune",visible:!1},{title:"Istat",visible:!1},{title:"Punto"},{title:"Data"},{title:$("#microvin-filter option:selected").text()}],order:[[0,"asc"]]})}(e),function(e){var t=document.getElementById("data-chart").getContext("2d");d&&d.destroy();var a=$("#periodo-filter").val(),n=$("#microvin-filter").val(),r=[];$.each(e,(function(e,t){t.PERIODO==a&&r.push(t[n])})),d=new Chart(t,{type:"bar",data:{labels:["Punto 1","Punto 2","Punto 3","Punto 4","Punto 5","Punto 6","Punto 7","Punto 8"],datasets:[{label:$("#microvin-filter option:selected").text(),backgroundColor:"#4A235A",borderColor:"#4A235A",data:r}]},options:{responsive:!0}})}(e))}})};window.jQuery=r.a,window.$=r.a,r.a.fn.selectpicker.Constructor.BootstrapVersion="4",r()(window).on("load",(function(){setTimeout((function(){r()(".se-pre-con").fadeOut("slow"),function(){let e=i.a.modal.create({id:"panel-auth",closeOnBackdrop:!1,closeOnEscape:!1,theme:"#C0392B",border:"1px solid",iconfont:"fas",headerLogo:'<span>&nbsp;<i class="fas fa-user"></i></span>',headerTitle:"Sistema Informativo Dati Agroambientali",headerControls:"none md",position:"center-top 0 58",contentSize:"450 250",content:'<div class="col-md-12"><input id="username" type="text" class="form-control" placeholder="Nome utente"></input><br/><input id="password" type="password" class="form-control" placeholder="Password"></input></div><br/><div class="col-md-12"><p id="login-msg" class="alert alert-warning"><i class="fas fa-key"></i> Inserire le credenziali di accesso</p></div>',footerToolbar:'<button id="login-btn" class="btn btn-sm btn-secondary">Login <i class="fas fa-sign-in-alt"></i></button>',callback:function(){this.content.style.padding="20px",document.querySelector("#login-btn").addEventListener("click",(function(){$.get({url:"http://192.168.1.160:5000/api/login",data:{username:$("#username").val(),password:$("#password").val()},success:function(t){console.log(t.token),l.token=t.token,c(),$("#login-msg").removeClass("alert-warning alert-danger").addClass("alert-success").html("<i class='fas fa-cog fa-spin'></i> Autenticazione riuscita! Caricamento dati..."),setTimeout((function(){console.log(l),document.querySelector(".leaflet-sidebar").classList.remove("collapsed"),C(),e.close()}),3e3)},error:function(e){$("#login-msg").removeClass("alert-warning").addClass("alert-danger").html("<i class='fas fa-times'></i> Autenticazione fallita!")}})}))}})}()}),2500),u.invalidateSize(),r()("#microvin-filter").selectpicker("hide")})),r()("#comuni-filter, #dati-filter, #periodo-filter").change((function(){var e=r()("#comuni-filter").val(),t=r()("#dati-filter").val();r()("#periodo-filter").val();g(e),v(e),"biodiversita_funzionale"==t||"biodiversita_genetica"==t?(x(),r()("#microvin-filter").selectpicker("hide")):("microvinificazione"==t?(r()("#microvin-filter").selectpicker("show"),r()("#microvin-filter").change((function(){z()}))):r()("#microvin-filter").selectpicker("hide"),z())}))}});