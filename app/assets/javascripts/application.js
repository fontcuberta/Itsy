// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
// require turbolinks
//= require_tree .

	<script type="text/javascript">
		try{
			dataLayer = [{'identificadorUA_cl': 'UA-47830077-24'}];
			var partner = "PRINCESS".toUpperCase();
			var idioma = "es".toUpperCase();
			var seccion = "DESKTOP.BOOKING_RATES".toUpperCase().split(".")[1];
			var tipo = seccion.split('_')[0];
			var subseccion = (seccion.split('_')[1]!=undefined) ? seccion.split('_')[1] : null;
			var page = "/DESK/MODEL_" + partner + "/ID_" + idioma + "/TYPE_" + tipo;
			if (subseccion!=null) page += "/CONTENT_" + subseccion;
			var hotelProducto = "EMPTY";
			var hotel = "EMPTY";
			var codHotel = "EMPTY";
			var codHab = "EMPTY";
			var pais = "EMPTY";
			var ciudad = "EMPTY";
			var categoria = "EMPTY";
			var impressions = [];
			var impressionsIni = [];
			var dlZone;
			var dlRates;
			var dlStep1;
			var dlStep2;
			var dlStep2cl;
			var dlSearch;
			
				hotelProducto = "La Palma - Teneguía Princess";
				hotel = normalizarTxt("La Palma - Teneguía Princess");
				pais = ("ESPAÑA"=="")?"EMPTY":"ESPAÑA";
				ciudad = ("Fuencaliente de la Palma"=="")?"EMPTY":"Fuencaliente de la Palma";
				categoria = ("HT4"=="")?"EMPTY":"HT4";
				codHotel = "7241444";
			

			function actualizarImpresionesGTM(){
				var remove;
				for (var i = dataLayer.length-1; i >= 0; i--){
					try {
						if (dataLayer[i].ecommerce != undefined){
							remove = dataLayer[i];
						}
					}catch(e){}
				}
				dataLayer = jQuery.grep(dataLayer, function(value) {
						return value != remove;
				});
				var impresiones = [];
				impressionsIni = [];
				var iVisible = 0;
				$('article').each(function(i, val){
					var name = $(val).children(".gtm-name").text();
					var id = $(val).children(".gtm-hotelcode").text();
					var pais = $(val).children(".gtm-country").text();
					var ciudad = $(val).children(".gtm-city").text();
					var categoria = $(val).children(".gtm-category").text();
					name = (name==undefined || name=="")?"EMPTY":name;
					id = (id==undefined || id=="")?"EMPTY":id;
					pais = (pais==undefined || pais=="")?"EMPTY":pais;
					ciudad = (ciudad==undefined || ciudad=="")?"EMPTY":ciudad;
					categoria = (categoria==undefined || categoria=="")?"EMPTY":categoria;
					if ($(this).is(":visible")){
						iVisible += 1;
						impresiones.push({
							'name': name.toUpperCase(),
							'id': id,
							'brand': partner,
							'category': pais.toUpperCase()+"/"+ciudad.toUpperCase()+"/"+categoria,
							'list': 'BUSQUEDA',
							'position': iVisible
						});
					}
					impressionsIni.push({
						'name': name.toUpperCase(),
						'id': id,
						'brand': partner,
						'category': pais.toUpperCase()+"/"+ciudad.toUpperCase()+"/"+categoria,
						'list': 'BUSQUEDA',
						'position': i+1
					});
				});
				dlZone = {
					'ecommerce':{
						'currencyCode': 'EUR',
						'impressions': impresiones
					}
				};
				dataLayer.push(dlZone);
				impressions = impresiones.slice();				
				dataLayerClient = dataLayer.slice();
			}

				// ECOMMERCE
				
				
					var d = 08;
					var m = 10;
					var y = 2015;
					var now = new Date();
					var date = new Date(y, m-1, d, 0, 0, 0, 0);
					var dateDay = (date.getDay()==0) ? 7 : date.getDay();
					var anticipacion = ((date-now)/1000/60/60/24)+1;
					dlRates = {
						'ecommerce':{
							'currencyCode': 'EUR',
							'detail': {
								'actionField':{
									'list': 'BUSQUEDA'
								},
								'products': [{
									'name': hotelProducto.toUpperCase(),
									'id': codHotel,
									'brand': partner,
									'category': pais.toUpperCase()+"/"+ciudad.toUpperCase()+"/"+categoria,
									'reservaAnticipacion': parseInt(anticipacion).toString(),
									'reservaCheckinWeekDay': dateDay.toString(),
									'reservaNumAdultos': '4',
									'reservaNumNiños': '2'
								}]
							}
						}
					};
				
				
				// END ECOMMERCE

				// PÁGINAS VIRTUALES
				
				
				
				
					var dia = "08";
					var mes = "10";
					var anio = "2015";
					var diaHasta = ("" != "") ? "" : "12";
					var mesHasta = ("" != "") ? "" : "10";
					var anioHasta = ("" != "") ? "" : "2015";
					var noches = "4";
					var rooms = ("" != "") ? "" : "1";
					var adultos = 0;
					var ninos = 0;
					if (subseccion == "ZONE") {
						page += "_" + normalizarTxt("La Palma");
					} else {
						var hotel = "EMPTY";
						
							hotel = "La Palma - Teneguía Princess";
						
						page += "_" + codHotel
							+ "_" + normalizarTxt(hotel);
					}
				
				// END PÁGINAS VIRTUALES

				if (subseccion=='RATES' || subseccion=='ZONE') {
					// EVENTOS DE BÚSQUEDA
					var d = "08";
					var m = "10";
					var y = "2015";
					var now = new Date();
					var date = new Date(y, m-1, d, 0, 0, 0, 0);
					var dateDay = (date.getDay()==0) ? 7 : date.getDay();
					var anticipacion = ((date-now)/1000/60/60/24)+1;
					var numAdultos = "";
					var numNinos = "";
					var accion = "buscarDisp";
					var criterio = "";
					
						numAdultos = "4";
						numNinos = "2";
					

					var hotelesDisp = "2";
					var mostrarErrores = "true";
					if (parseInt(hotelesDisp)==0||mostrarErrores=='true') accion = "buscarNoDisp";

					if (subseccion=='ZONE'){
						criterio = "81127";
					}

					dlSearch = {
						'pageName':page,
						'event':'eventoBusqueda',
						'categoria':'DESK-'+partner,
						'accion':accion,
						'etiqueta':"/TYPE_" + tipo + "/CONTENT_" + subseccion,
						'busquedaNoches':"4",
						'busquedaPais':pais.toUpperCase(),
						'busquedaCiudad':(ciudad=="EMPTY") ? criterio : ciudad.toUpperCase(),
						'busquedaHotel':hotelProducto.toUpperCase(),
						'busquedaAnticipacion':parseInt(anticipacion).toString(),
						'busquedaCheckinWeekday':dateDay.toString(),
						'busquedaNumAdultos':numAdultos,
						'busquedaNumNinos':numNinos,
						'busquedaNumHab':"1"
					};
					// END EVENTOS DE BÚSQUEDA
				} else {
					dlSearch = { 'pageName':page };
				}
				dataLayer = [
					{'identificadorUA_cl': 'UA-47830077-24'},
					
					
						dlRates,
					
					
					
					dlSearch,
				];
				dataLayerClient = dataLayer.slice();

			$(document).ready(function(){
				
				// EVENTOS DE VER
				$(".vermapa").click(function(){
					eventoVer(this,'ver_mapa');
				});
				$(".verficha").click(function(){
					eventoVer(this, 'ver_ficha');
				});				
				$(".verfotos").click(function(){
					eventoVer(this, 'ver_fotos');
				});
				function eventoVer(aux, texto){
					var codHot = codHotel;
					var nomHot = hotelProducto;
					if (codHot=="EMPTY") codHot = "";
					if (nomHot=="EMPTY") nomHot = "";
					if (subseccion=='ZONE'){
						var id = $(aux).parent().parent().parent().parent().parent().attr('id');
						codHot = $('#'+id+' .gtm-hotelcode').html();
						nomHot = $('#'+id+' .gtm-name').html();
						codHot = (codHot==undefined)?"EMPTY":codHot;
						nomHot = (nomHot==undefined)?"EMPTY":nomHot;
					}
					dataLayer.push({
						'event':'eventoGA',
						'categoria':'DESK-'+partner,
						'accion':texto,
						'etiqueta':codHot+'-'+nomHot.toUpperCase()
					});
					dataLayerClient = dataLayer.slice();
				}
				// END EVENTOS DE VER

				// EVENTOS DE ERROR
				if ($('.cont-error:visible').length > 0) {
					var pageName = '/virtualPage/MODEL_' + partner + '/ID_' + idioma + '/FORMULARIO/' + seccion + '/ERROR_ENVIO';
					dataLayer.push({'event':'virtualPage', 'pageName':pageName});
					dataLayerClient.push({'event':'virtualPage', 'pageName':pageName});
				}
				$('input[type=button]').click(function(){
					for (var i = dataLayer.length; i > 0; i--){
						if (dataLayer[i]) {
							if (dataLayer[i].event == 'virtualPage') dataLayer.pop();
						}
					}
					if ($('div.error').length > 0) {
						var pageName;
						$.each($('div.error>input'), function(i, val){
							pageName = '/virtualPage/MODEL_' + partner + '/ID_' + idioma + '/FORMULARIO_' + seccion + '/CAMPO_' + normalizarTxt(val.name) + '/ERROR_' + normalizarTxt(val.name) + '_NO_VALIDO';
							dataLayer.push({'event':'virtualPage', 'pageName':pageName});
							dataLayerClient.push({'event':'virtualPage', 'pageName':pageName});
						});
						$.each($('div.error>select'), function(i, val){
							pageName = '/virtualPage/MODEL_' + partner + '/ID_' + idioma + '/FORMULARIO_' + seccion + '/CAMPO_' + normalizarTxt(val.name) + '/ERROR_' + normalizarTxt(val.name) + '_NO_VALIDO';
							dataLayer.push({'event':'virtualPage', 'pageName':pageName});
							dataLayerClient.push({'event':'virtualPage', 'pageName':pageName});
						});
					}
				});
				// END EVENTOS DE ERROR
			});
		} catch(e) {}

		/**
		 * Llamar a esta función cuando un usuario pinche en un enlace de producto en
		 * un listado. Esta función usa la variable de datalayer para “event callback”
		 * para gestionar la navegación hacia la ficha una vez que los datos de
		 * ecommerce se mandan a Google Analytics.
		 * @param {Object} productObj Objeto representando el producto.
		 **/
		function addProductGTM(productObj) {
			dataLayer.push({
				'event': 'productClick',
				'ecommerce': {
					'click': {
						'actionField': {'list': 'BUSQUEDA'}, // Lista a la que pertenece (opcional).
						'products': [{
							'name': productObj.name, // Nombre o id son obligatorio.
							'id': productObj.id, 
							'brand': productObj.brand,
							'category': productObj.category
						}]
					}
				}
			});
			dataLayerClient = dataLayer.slice();
		}

		
			function addHabToCartGTM(codH, regimen, tarifa, precio) {
				codHab = codH;

				var numHabs = 1;
				
					numHabs = 1;
				
				
				var d = 28;
				var m = 7;
				var y = 2015;
				
					
						
							d = 08;
							m = 10;
							y = 2015;
						
					
				

				var now = new Date();
				var date = new Date(y, m-1, d, 0, 0, 0, 0);
				var dateDay = (date.getDay()==0) ? 7 : date.getDay();
				var anticipacion = ((date-now)/1000/60/60/24)+1;
				var vNumAdultos = [];
				var vNumNinos = [];
				var productos = [];
				
					vNumAdultos.push("4");
					vNumNinos.push("2");
				
				for (var i=0;i<numHabs;i++){
					productos.push({
						'name': hotelProducto.toUpperCase(),
						'id': codHotel,
						'price': quitarFormatoLocal(precio),
						'brand': partner,
						'category': pais.toUpperCase()+"/"+ciudad.toUpperCase()+"/"+categoria,
						'variant': 'HAB-' + codH + '_REG-' + regimen + '_TARIFA-' + tarifa,
						'quantity': 4,
						'reservaAnticipacion': parseInt(anticipacion).toString(),
						'reservaCheckinWeekDay': dateDay.toString(),
						'reservaNumAdultos': vNumAdultos[i],
						'reservaNumNiños': vNumNinos[i]
					});
				}
				dataLayer.push({
					'event': 'addToCart',
					'ecommerce': {
						'currencyCode': 'EUR',
						'add': {
							'products': productos
						}
					}
				});
				dataLayerClient = dataLayer.slice();
			}

			function removeHabFromCartGTM(i) {
				var d = $('#dia_'+i).val();;
				var m = $('#mes_'+i).val();;
				var y = $('#anio_'+i).val();;
				var now = new Date();
				var date = new Date(y, m-1, d, 0, 0, 0, 0);
				var dateDay = (date.getDay()==0) ? 7 : date.getDay();
				var anticipacion = ((date-now)/1000/60/60/24)+1;
				var precio = parseFloat(quitarFormatoLocal($('#precioBase_'+i).val()));
				if ($('#precioAdultoExtra_'+i).val()!=undefined) precio += parseFloat(quitarFormatoLocal($('#precioAdultoExtra_'+i).val()));
				if ($('#precioNinoExtra_'+i).val()!=undefined) precio += parseFloat(quitarFormatoLocal($('#precioNinoExtra_'+i).val()));
				dataLayer.push({
					'event': 'removeFromCart',
					'ecommerce': {
						'currencyCode': $('#moneda_'+i).val(),
						'remove': {
							'products': [{
								'name': hotelProducto.toUpperCase(),
								'id': codHotel,
								'price': precio,
								'brand': partner,
								'category': pais.toUpperCase()+"/"+ciudad.toUpperCase()+"/"+categoria,
								'variant': 'HAB-' + $('#codHab_'+i).val() + '_REG-' + $('#regimen_'+i).val() + '_TARIFA-' + $('#tarifa_'+i).val(),
								'quantity': $('#noches_'+i).val(),
								'reservaAnticipacion': parseInt(anticipacion).toString(),
								'reservaCheckinWeekDay': dateDay.toString(),
								'reservaNumAdultos': $('#adultos_'+i).val(),
								'reservaNumNiños': $('#ninos_'+i).val()
							}]
						}
					}
				});
				dataLayerClient = dataLayer.slice();
			}

			function addExtraToCartGTM(i, j) {
				dataLayer.push({
					'event': 'addToCart',
					'ecommerce': {
						'currencyCode': 'EUR',
						'add': {
							'products': [{
								'name': servicios[i-1].nombre.toUpperCase()+'-'+hotelProducto.toUpperCase(),
								'id': codHotel+'-'+codHab+'-EXTRA',
								'price': quitarFormatoLocal(servicios[i-1].precioMinimo),
								'brand': partner,
								'category': pais.toUpperCase()+"/"+ciudad.toUpperCase()+"/"+categoria,
								'variant': 'EXTRA-'+codHab+'-'+servicios[i-1].codigo,
								'quantity': parseInt($("#cantidadItem_"+i+"_"+j).val())
							}]
						}
					}
				});
				dataLayerClient = dataLayer.slice();
			}

			function removeExtraFromCartGTM(i, j) {
				dataLayer.push({
					'event': 'removeFromCart',
					'ecommerce': {
						'currencyCode': 'EUR',
						'remove': {
							'products': [{
								'name': servicios[i-1].nombre.toUpperCase()+'-'+hotelProducto.toUpperCase(),
								'id': codHotel+'-'+codHab+'-EXTRA',
								'price': quitarFormatoLocal(servicios[i-1].precioMinimo),
								'brand': partner,
								'category': pais.toUpperCase()+"/"+ciudad.toUpperCase()+"/"+categoria,
								'variant': 'EXTRA-'+codHab+'-'+servicios[i-1].codigo,
								'quantity': parseInt($("#cantidadItem_"+i+"_"+j).val())
							}]
						}
					}
				});
				dataLayerClient = dataLayer.slice();
			}

			function extraProductViewGTM(){
				var productos = [];
				for (var i=0;i<servicios.length;i++){
					var ser = 
					productos.push({
						'name': 'EXTRA_'+servicios[i].nombre.toUpperCase()+'-'+hotelProducto.toUpperCase(),
						'id': codHotel+'-'+codHab+'-'+servicios[i].codigo,
						'price': servicios[i].precioMinimo,
						'brand': partner,
						'category': pais.toUpperCase()+"/"+ciudad.toUpperCase()+"/"+categoria,
						'variant': ''
					})
				}
				dataLayer.push({
					'ecommerce': {
						'currencyCode': 'EUR',
						'detail': {
							'actionField': {'list': 'EXTRAS'},
							'products': productos
						}
					}
				});
			}
		
	</script>

