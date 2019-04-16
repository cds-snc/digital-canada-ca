/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Spanish dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "es",
	"lang-native": "Español",
	add: "Añadir",
	all: "Todo",
	tphp: "Arriba",
	load: "cargando …",
	process: "en proceso …",
	srch: "Búsqueda",
	"no-match": "0 resultados encontrados",
	matches: {
		mixin: "[MIXIN] resultado(s) encontrados"
	},
	current: "(actual)",
	hide: "Ocultar",
	err: "Error",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Iniciar",
	stop: "Detener",
	back: "Volver",
	cancel: "Cancelar",
	"min-ago": "hace un minuto",
	"coup-mins": "hace algunos minutos",
	"mins-ago": {
		mixin: "hace [MIXIN] minutos"
	},
	"hour-ago": "hace una hora",
	"hours-ago": {
		mixin: "hace [MIXIN] horas"
	},
	"days-ago": {
		mixin: "hace [MIXIN] días"
	},
	yesterday: "ayer",

	nxt: "Siguiente",
	"nxt-r": "Siguiente (tecla flecha derecha)",
	prv: "Anterior",
	"prv-l": "Anterior (tecla flecha izquierda)",
	first: "Primero",
	last: "Último",
	page: "Page",
	"srch-menus": "Búsqueda y menús",
	email: "Correo electrónico",
	"menu-close": "Cierre el menú",
	"overlay-close": "Cierre la superposición",
	"esc-key": "(tecla \"esc\")",
	show: "Mostrar",

	/* Tabbed interface */
	"tab-rot": {
		off: "Detener rotación de pestañas",
		on: "Comenzar rotación de pestañas"
	},
	"tab-list": "Lista de pestañas",
	"tab-pnl-end1": "Fin de este panel de pestaña.",
	"tab-pnl-end2": "Volver a la lista de pestañas",
	"tab-pnl-end3": "o continuar al resto de la página.",
	"tab-play": "Reproducir",

	/* Multimedia player */
	"mmp-play": "Reproducir",
	pause: "Pausa",
	open: "Abrir",
	close: "Cerrar",
	volume: "Volumen",
	mute: {
		on: "Silencio",
		off: "Habilitar sonido"
	},
	cc: {
		off: "Ocultar subtítulos",
		on: "Mostrar subtítulos"
	},
	"cc-err": "Error al cargar subtítulos",
	adesc: {
		on: "Habilitar audio descripción ",
		off: "Deshabilitar audio descripción"
	},
	pos: "Posición actual:",
	dur: "Tiempo total:",

	/* Share widget */
	"shr-txt": "Compartir",
	"shr-pg": " esta página",
	"shr-vid": " este vídeo",
	"shr-aud": " este archivo de audio",
	"shr-hnt": " con {s} ",
	"shr-disc": "No implica la promoción ni recomendación de ningún producto o servicio.",

	/* Form validation */
	"frm-nosubmit": "El formulario no pudo ser enviado debido a ",
	"errs-fnd": " errores encontrados.",
	"err-fnd": " error encontrado.",
	"err-correct": "(corregir y reenviar)",

	/* Date picker */
	"date-hide": "Ocultar calendario",
	"date-show": "Escoger una fecha de un calendario para el campo:",
	"date-sel": "Seleccionado",

	/* Calendar */
	days: [
		"Domingo",
		"Lunes",
		"Martes",
		"Miércoles",
		"Jueves",
		"Viernes",
		"Sábado"
	],
	mnths: [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre"
	],
	cal: "Calendario",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(hoy)",
	"cal-goToLnk": "Ir a<span class=\"wb-inv\"> mes del año</span>",
	"cal-goToTtl": "Ir al mes del año",
	"cal-goToMnth": "Mes:",
	"cal-goToYr": "Año:",
	"cal-goToBtn": "Ir",
	prvMnth: "Mes anterior: ",
	nxtMnth: "Mes siguiente: ",

	/* Lightbox */
	"lb-curr": "Artículo %curr% de %total%",
	"lb-xhr-err": "Este contenido no pudo ser cargado.",
	"lb-img-err": "Esta imagen no pudo ser cargada.",

	/* Charts widget */
	"tbl-txt": "Tabla",
	"tbl-dtls": "Cuadro. Los detalles aparecen en la siguiente tabla.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Su sesión expirará automáticamente en #min# min #sec# sec.",
	"st-to-msg-end": "Seleccione \"Continuar sesión\" para prolongar tu sesión.",
	"st-msgbx-ttl": "Aviso de finalización de sesión",
	"st-alrdy-to-msg": "Lo sentimos, su sesión ha expirado. Por favor ingrese nuevamente.",
	"st-btn-cont": "Continuar sesión",
	"st-btn-end": "Finalizar sesión ahora",

	/* Toggle details */
	"td-toggle": "Alternar todo",
	"td-open": "Expandir todo",
	"td-close": "Colapsar todo",
	"td-ttl-open": "Expandir todas las secciones de contenido",
	"td-ttl-close": "Colapsar todas las secciones de contenido",

	/* Table enhancement */
	sortAsc: "active para ordenar en sentido ascendente",
	sortDesc: "active para ordenar en sentido decendente",
	emptyTbl: "No hay información disponible en la tabla",
	infoEntr: "Mostrar _START_ a _END_ de _TOTAL_ entradas",
	infoEmpty: "Mostrar 0 a 0 de 0 entradas",
	infoFilt: "(filtrado de _MAX_ entradas totales)",
	info1000: ".",
	lenMenu: "Mostrar _MENU_ entradas",
	filter: "filtrar artículos",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Aumentar",
	"geo-zmout": "Reducir",
	"geo-zmwrld": "Reducir al mapa completo",
	"geo-zmfeat": "Aumentar al elemento",
	"geo-sclln": "La escala del mapa",
	"geo-msepos": "Latitud y longitud del cursor del ratón",
	"geo-ariamap": "Objeto: mapa. Las descripciones de las características del mapa están en la tabla a continuación.",
	"geo-ally": "<strong>Keyboard users:</strong> When the map is in focus, use the arrow keys to pan the map and the plus and minus keys to zoom. The arrow keys will not pan the map when zoomed to the map extent.",
	"geo-allyttl": "Instrucciones: Mapa de navegación",
	"geo-tgllyr": "Cambiar la visualización de la capa",
	"geo-hdnlyr": "Esta capa está oculta.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Canadá mapa base (Inglés o francés)",
	"geo-sel": "Seleccionar",
	"geo-lblsel": "Haga clic para seleccionar el elemento en el mapa",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Indique el nombre de la localidad&#44; código postal&#44; dirección (postal)&#44; el número de NTS ...",
	"geo-loc-label": "Ubicación",
	"geo-aoi-north": "Norte",
	"geo-aoi-east": "Este",
	"geo-aoi-south": "Sur",
	"geo-aoi-west": "Oeste",
	"geo-aoi-instructions": "Delimitar una zona en el mapa o rellene el formulario a continuación&#44; haga clic en el botón \"Añadir\".",
	"geo-aoi-btndraw": "Dibujar",
	"geo-aoi-btnclear": "Eliminar",
	"geo-geoloc-btn": "Aumentar la ubicación actual",
	"geo-geoloc-fail": "Ubicación falló. Por favor asegúrese de que los servicios de localización están habilitados.",
	"geo-geoloc-uncapable": "Localización puede no ser compatible con su navegador.",
	"geo-lgnd-grphc": "Gráfico leyenda para la capa de mapa.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Iniciar sesión",

	/* Filter */
	"fltr-lbl": "Filter<span class=\"wb-inv\"> content: results appear below as you type.</span>",
	"fltr-info": "Showing _NBITEM_ filtered from _TOTAL_ total entries"
};

} )( wb );

wb.doc.one( "formLanguages.wb", function() {
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES (Spanish; Español)
 */
$.extend( $.validator.messages, {
	required: "Este campo es obligatorio.",
	remote: "Por favor, rellena este campo.",
	email: "Por favor, escribe una dirección de correo válida.",
	url: "Por favor, escribe una URL válida.",
	date: "Por favor, escribe una fecha válida.",
	dateISO: "Por favor, escribe una fecha (ISO) válida.",
	number: "Por favor, escribe un número válido.",
	digits: "Por favor, escribe sólo dígitos.",
	creditcard: "Por favor, escribe un número de tarjeta válido.",
	equalTo: "Por favor, escribe el mismo valor de nuevo.",
	extension: "Por favor, escribe un valor con una extensión aceptada.",
	maxlength: $.validator.format( "Por favor, no escribas más de {0} caracteres." ),
	minlength: $.validator.format( "Por favor, no escribas menos de {0} caracteres." ),
	rangelength: $.validator.format( "Por favor, escribe un valor entre {0} y {1} caracteres." ),
	range: $.validator.format( "Por favor, escribe un valor entre {0} y {1}." ),
	max: $.validator.format( "Por favor, escribe un valor menor o igual a {0}." ),
	min: $.validator.format( "Por favor, escribe un valor mayor o igual a {0}." ),
	nifES: "Por favor, escribe un NIF válido.",
	nieES: "Por favor, escribe un NIE válido.",
	cifES: "Por favor, escribe un CIF válido."
} );
return $;
}));

});