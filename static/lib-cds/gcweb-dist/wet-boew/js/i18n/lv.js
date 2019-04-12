/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Latvian dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "lv",
	"lang-native": "Latviešu valoda",
	add: "Pievienot",
	all: "Visi",
	tphp: "Lapas augša",
	load: "ielādēšana ...",
	process: "pārstrādes ...",
	srch: "Meklēt",
	"no-match": "Atbilstība nav atrasta",
	matches: {
		mixin: "[MIXIN] atbilstība(s) nav atrasta(s)"
	},
	current: "(pašreizējais)",
	hide: "Slēpt",
	err: "Kļūda",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Sākt",
	stop: "Pārtraukt",
	back: "Atpakaļ",
	cancel: "Atcelt",
	"min-ago": "pirms minūtes",
	"coup-mins": "pirms dažām minūtēm",
	"mins-ago": {
		mixin: "pirms [MIXIN] minūtēm"
	},
	"hour-ago": "pirms stundas",
	"hours-ago": {
		mixin: "pirms [MIXIN] stundām"
	},
	"days-ago": {
		mixin: "pirms [MIXIN] dienām"
	},
	yesterday: "vakar",

	nxt: "Nākošais",
	"nxt-r": "Nākošais (labo bultiņu taustiņu)",
	prv: "Lepriekšējais",
	"prv-l": "Lepriekšējais (pa kreisi bulta taustiņu)",
	first: "Pirmā",
	last: "Pēdējā",
	page: "Page",
	"srch-menus": "Meklēšanas un ēdienkartes",
	email: "e-pasts",
	"menu-close": "Aizveriet izvēlni",
	"overlay-close": "Aizveriet pārklāt",
	"esc-key": "(escape taustiņu)",
	show: "Rādīt",

	/* Tabbed interface */
	"tab-rot": {
		off: "Pārtraukt rotāciju",
		on: "Sākt rotāciju"
	},
	"tab-list": "Saraksts cilnes",
	"tab-pnl-end1": "Beigas cilnes paneļa.",
	"tab-pnl-end2": "Atgriezties uz sarakstu cilnēm",
	"tab-pnl-end3": "vai turpināt uz pārējo lapu.",
	"tab-play": "Spēlēt",

	/* Multimedia player */
	"mmp-play": "Spēlēt",
	pause: "Pauze",
	open: "Atvērt",
	close: "Aizvērt",
	volume: "Skaļums",
	mute: {
		on: "Izslēgt skaņu",
		off: "Ieslēgt skaņu"
	},
	cc: {
		off: "Slēpt subtitrus",
		on: "Rādīt subtitrus"
	},
	"cc-err": "Kļūda lejuplādējot subtitrus",
	adesc: {
		on: "Ieslēgt audio aprakstu",
		off: "Izslēgt audio aprakstu"
	},
	pos: "Šobdrīdējā pozīcija:",
	dur: "Kopējais laiks:",

	/* Share widget */
	"shr-txt": "Ieteikt",
	"shr-pg": " šo lapu",
	"shr-vid": " šo video",
	"shr-aud": " šis audio fails",
	"shr-hnt": " ar {s} ",
	"shr-disc": "Neviena jebkuru produktu vai pakalpojumu apstiprināšanu vai ietverta.",

	/* Form validation */
	"frm-nosubmit": "Formu nav iespējams iesniegt, jo ",
	"errs-fnd": " tika atrastas kļūdas.",
	"err-fnd": " tika atrasta kļūda.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Slēpt kalendāru",
	"date-show": "Izvēlēties datumu no kalendāra lauka:",
	"date-sel": "Atlasīts",

	/* Calendar */
	days: [
		"Pirmdiena",
		"Otrdiena",
		"Trešdiena",
		"Ceturtdiena",
		"Piektdiena",
		"Sestdiena",
		"Svētdiena"
	],
	mnths: [
		"Janvāris",
		"Februāris",
		"Marts",
		"Aprīlis",
		"Maijs",
		"Jūnijs",
		"Jūlijs",
		"Augusts",
		"Septembris",
		"Octobris",
		"Novembris",
		"Decembris"
	],
	cal: "Kalendārs",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Šodien)",
	"cal-goToLnk": "Iet uz<span class=\"wb-inv\"> gada mēnesi</span>",
	"cal-goToTtl": "Iet uz gada mēnesi",
	"cal-goToMnth": "Mēnesis:",
	"cal-goToYr": "Gads:",
	"cal-goToBtn": "Iet uz",
	prvMnth: "Iepriekšējais mēnesis: ",
	nxtMnth: "Nākošais mēnesis: ",

	/* Lightbox */
	"lb-curr": "Vienums %curr% no %total%",
	"lb-xhr-err": "Šo saturu nevar ielādēt",
	"lb-img-err": "Šo attēlu nevar ielādēt",

	/* Charts widget */
	"tbl-txt": "Tabula",
	"tbl-dtls": "Grafiks. Detaļas tabulā.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Jūsu sesija beigsies automātiski #min# min sekundē #sec#.",
	"st-to-msg-end": "Izvēlieties \"Turpināt sesiju\", lai paplašinātu savu sesiju.",
	"st-msgbx-ttl": "Sesijas taimauts brīdinājums",
	"st-alrdy-to-msg": "Atvainojiet, jūsu sesija jau ir beidzies. Lūdzu pieteikties vēlreiz.",
	"st-btn-cont": "Turpināt sesiju",
	"st-btn-end": "Beigt sesiju tagad",

	/* Toggle details */
	"td-toggle": "Pārslēgt visas",
	"td-open": "Izvērst visu",
	"td-close": "Sakļaut visu",
	"td-ttl-open": "Paplašināt visas sadaļas satura",
	"td-ttl-close": "Sakļaut visas sadaļas satura",

	/* Table enhancement */
	sortAsc: ": aktivizēt uz augošā šķirot",
	sortDesc: ": aktivizēt par dilstošā šķirot",
	emptyTbl: "Nav pieejami dati tabulā",
	infoEntr: "Rādu no _START_ līdz _END_ no _TOTAL_ ierakstiem",
	infoEmpty: "Rādu no 0 līdz 0 no 0 ierakstiem",
	infoFilt: "(filtrēts no _MAX_ kopējiem ierakstiem)",
	info1000: ",",
	lenMenu: "Parādīt _MENU_ ieraksti",
	filter: "Atlasīt vienumu",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Pievelciet",
	"geo-zmout": "Attāliniet",
	"geo-zmwrld": "Zoom uz kartes robežas",
	"geo-zmfeat": "Zoom uz elementam",
	"geo-sclln": "Kartes mērogs",
	"geo-msepos": "Platuma un garuma ar peles kursoru",
	"geo-ariamap": "Karte objekts. No kartes funkciju apraksti šajā tabulā.",
	"geo-ally": "<strong>Tastatūras tīklā:</strong> Kad karte ir fokusā, izmantojiet bulttaustiņus, lai pārvietotos karti un plus un mīnus taustiņus, lai tuvinātu. Bulttaustiņi nebūs panoramētu karti kad pietuvināto uz kartes apmērā.",
	"geo-allyttl": "Instrukcijas: Karte navigācija",
	"geo-tgllyr": "Pārslēgt displeja slāņa",
	"geo-hdnlyr": "Šis slānis pašlaik paslēpta.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Kanāda bāze karte (angļu vai franču valodā)",
	"geo-sel": "Atlasīt",
	"geo-lblsel": "Pārbaudiet, lai izvēlētos elementu uz kartes",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Norāda nosaukumu vietu&#44; pasta indekss&#44; adresi (pasta)&#44; skaits NTS ...",
	"geo-loc-label": "Vieta",
	"geo-aoi-north": "Ziemeļu",
	"geo-aoi-east": "Austrumi",
	"geo-aoi-south": "Dienvidu",
	"geo-aoi-west": "Rietumi",
	"geo-aoi-instructions": "Zīmēt rūtiņu uz kartes vai ievadīt koordinātas zemāk un noklikšķiniet uz pogas \"Pievienot\".",
	"geo-aoi-btndraw": "Izdarīt",
	"geo-aoi-btnclear": "Noņemt",
	"geo-geoloc-btn": "Zoom uz pašreizējo atrašanās vietu",
	"geo-geoloc-fail": "Atrašanās vieta neizdevās. Lūdzu, pārliecinieties, ka uz atrašanās vietas pakalpojumi tiek iespējots.",
	"geo-geoloc-uncapable": "Lokalizācija neatbalsta pārlūkprogramma.",
	"geo-lgnd-grphc": "Leģenda grafiskais attiecīgā karte slāni.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Pierakstīties",

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
 * Locale: LV (Latvian; latviešu valoda)
 */
$.extend( $.validator.messages, {
	required: "Šis lauks ir obligāts.",
	remote: "Lūdzu, pārbaudiet šo lauku.",
	email: "Lūdzu, ievadiet derīgu e-pasta adresi.",
	url: "Lūdzu, ievadiet derīgu URL adresi.",
	date: "Lūdzu, ievadiet derīgu datumu.",
	dateISO: "Lūdzu, ievadiet derīgu datumu (ISO).",
	number: "Lūdzu, ievadiet derīgu numuru.",
	digits: "Lūdzu, ievadiet tikai ciparus.",
	creditcard: "Lūdzu, ievadiet derīgu kredītkartes numuru.",
	equalTo: "Lūdzu, ievadiet to pašu vēlreiz.",
	extension: "Lūdzu, ievadiet vērtību ar derīgu paplašinājumu.",
	maxlength: $.validator.format( "Lūdzu, ievadiet ne vairāk kā {0} rakstzīmes." ),
	minlength: $.validator.format( "Lūdzu, ievadiet vismaz {0} rakstzīmes." ),
	rangelength: $.validator.format( "Lūdzu ievadiet {0} līdz {1} rakstzīmes." ),
	range: $.validator.format( "Lūdzu, ievadiet skaitli no {0} līdz {1}." ),
	max: $.validator.format( "Lūdzu, ievadiet skaitli, kurš ir mazāks vai vienāds ar {0}." ),
	min: $.validator.format( "Lūdzu, ievadiet skaitli, kurš ir lielāks vai vienāds ar {0}." )
} );
return $;
}));

});