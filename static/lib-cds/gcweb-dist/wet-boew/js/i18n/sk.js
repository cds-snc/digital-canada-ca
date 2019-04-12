/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Slovak dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "sk",
	"lang-native": "Slovenčina",
	add: "Pridať",
	all: "Všetko",
	tphp: "Na začiatok stránky",
	load: "nakladanie ...",
	process: "spracovanie ...",
	srch: "Hľadať",
	"no-match": "No nájdená zhoda",
	matches: {
		mixin: "[MIXIN] zápasov nenájdený"
	},
	current: "(aktuálne)",
	hide: "Schovať",
	err: "Chyba",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Začať",
	stop: "Stop",
	back: "Staré",
	cancel: "Zrušiť",
	"min-ago": "minútou",
	"coup-mins": "pár minút pred",
	"mins-ago": {
		mixin: "pred [MIXIN] minútami"
	},
	"hour-ago": "pred hodinou",
	"hours-ago": {
		mixin: "pred [MIXIN] hodinami"
	},
	"days-ago": {
		mixin: "pred [MIXIN] dňami"
	},
	yesterday: "včera",

	nxt: "Ďalšie",
	"nxt-r": "Ďalšie (klávesy šípka vpravo)",
	prv: "Predchádzajúci",
	"prv-l": "Predchádzajúci (klávesy šípka doľava)",
	first: "Prvé",
	last: "Posledný",
	page: "Page",
	"srch-menus": "Vyhľadávanie a ponuky",
	email: "E-mail",
	"menu-close": "Zavrite menu",
	"overlay-close": "Zavrite so šablónou",
	"esc-key": "(klávesy ESC)",
	show: "Ukázať",

	/* Tabbed interface */
	"tab-rot": {
		off: "Zastaviť kartu otáčania",
		on: "Dátum kartu otáčania"
	},
	"tab-list": "Tab Zoznam",
	"tab-pnl-end1": "Koniec tejto záložke paneli.",
	"tab-pnl-end2": "Návrat na kartu zoznamu",
	"tab-pnl-end3": "alebo pokračovať až do konca stránky.",
	"tab-play": "Hrať",

	/* Multimedia player */
	"mmp-play": "Hrať",
	pause: "Pauza",
	open: "Otvoriť",
	close: "Zavrieť",
	volume: "Hlasitosti",
	mute: {
		on: "Vypnutie",
		off: "Nahlas"
	},
	cc: {
		off: "Skryť Skryté titulky",
		on: "Zobraziť Skryté titulky"
	},
	"cc-err": "Chyba pri načítaní uzavreté titulkami",
	adesc: {
		on: "Povoliť zvukový opis",
		off: "Zakázať zvukový opis"
	},
	pos: "Aktuálna pozícia:",
	dur: "Celkový čas:",

	/* Share widget */
	"shr-txt": "Zdieľať",
	"shr-pg": " túto stránku",
	"shr-vid": " toto video",
	"shr-aud": " tento audio súbor",
	"shr-hnt": " s {s} ",
	"shr-disc": "Č schválenie akýchkoľvek výrobkov alebo služieb je vyjadrené alebo predpokladané.",

	/* Form validation */
	"frm-nosubmit": "Formulár nemožno predložené, pretože ",
	"errs-fnd": " chyby boli nájdené.",
	"err-fnd": " chyba bola nájdená.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Skryť kalendár",
	"date-show": "Vyberte dátum z kalendára pre pole",
	"date-sel": "Vybraný",

	/* Calendar */
	days: [
		"Nedeľa",
		"Pondelok",
		"Utorok",
		"Streda",
		"Štvrtok",
		"Piatok",
		"Sobota"
	],
	mnths: [
		"Január",
		"Február",
		"Marec",
		"Apríl",
		"Máj",
		"Jún",
		"Júl",
		"August",
		"Septembra",
		"Október",
		"November",
		"December"
	],
	cal: "Kalendár",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Aktuálny deň)",
	"cal-goToLnk": "Prejsť na<span class=\"wb-inv\">  mesiac roka</span>",
	"cal-goToTtl": "Prejsť na mesiac roka",
	"cal-goToMnth": "Mesiac:",
	"cal-goToYr": "Rok:",
	"cal-goToBtn": "Ísť",
	prvMnth: "Predchádzajúci mesiac: ",
	nxtMnth: "Budúci mesiac: ",

	/* Lightbox */
	"lb-curr": "Bod %curr% %total%",
	"lb-xhr-err": "Tento obsah sa nepodarilo načítať.",
	"lb-img-err": "Tento obrázok sa nepodarilo načítať.",

	/* Charts widget */
	"tbl-txt": "Tabuľka",
	"tbl-dtls": "Graf. Podrobnosti v nasledujúcej tabuľke.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Vaša relácia vyprší automaticky #min# min #sec# sec.",
	"st-to-msg-end": "Zvoľte \"Pokračovať v relácii\" rozšíriť reláciu.",
	"st-msgbx-ttl": "Session timeout varovanie",
	"st-alrdy-to-msg": "Je nám ľúto, váš relácie už vypršala. Prosím, prihláste sa znova.",
	"st-btn-cont": "pokračovať v relácii",
	"st-btn-end": "Ukončiť reláciu teraz",

	/* Toggle details */
	"td-toggle": "Prepnúť všetky",
	"td-open": "Rozbaliť všetko",
	"td-close": "Zbaliť všetko",
	"td-ttl-open": "Rozbaliť všetky časti obsahu",
	"td-ttl-close": "Minimalizovať všetky časti obsahu",

	/* Table enhancement */
	sortAsc: ": aktivuje na vzostupne zoradiť",
	sortDesc: ": aktivujte pre zostupné radenie",
	emptyTbl: "K dispozícii žiadne údaje v tabuľke",
	infoEntr: "Zobrazené _START_-_END_ z _TOTAL_ položiek",
	infoEmpty: "Zobrazené 0-0 z 0 položiek",
	infoFilt: "(filtrovaná z _MAX_ celkom záznamov)",
	info1000: "&#160;",
	lenMenu: "Zobraziť _MENU_ položiek",
	filter: "Filtrovanie položiek",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Priblížiť",
	"geo-zmout": "Vzdialiť",
	"geo-zmwrld": "Priblížiť zmapovať rozsah",
	"geo-zmfeat": "Priblížiť prvku",
	"geo-sclln": "Mierka mapy",
	"geo-msepos": "Zemepisná šírka a zemepisná dĺžka kurzoru myši",
	"geo-ariamap": "Mapa objekt. Popisy v mape funkcií sú uvedené v tabuľke nižšie.",
	"geo-ally": "<strong>Klávesové užívatelia:</strong> Ak je mapa v centre pozornosti, pomocou klávesov so šípkami posúvať mapu a plus a mínus pre priblíženie. Klávesov so šípkami nebude posúvanie mapy pri zväčšení na mapu rozsahu.",
	"geo-allyttl": "Návod: Mapa navigácie",
	"geo-tgllyr": "Prepnúť zobrazenie vrstvy",
	"geo-hdnlyr": "Táto vrstva je v súčasnej dobe skrýva!",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Kanada základná mapa (len po anglicky alebo francúzsky)",
	"geo-sel": "Vybrať",
	"geo-lblsel": "Skontrolujte, vyberte prvok na mape",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Uveďte názov miesta&#44; poštové smerovacie číslo&#44; adresu (poštové)&#44; počet NTS ...",
	"geo-loc-label": "Umiestnenie",
	"geo-aoi-north": "Sever",
	"geo-aoi-east": "Východ",
	"geo-aoi-south": "Na juh",
	"geo-aoi-west": "Západ",
	"geo-aoi-instructions": "Nakreslite rámček na mape alebo zadajte súradnice nižšie a kliknite na tlačidlo \"Pridať\".",
	"geo-aoi-btndraw": "Kresliť",
	"geo-aoi-btnclear": "Odstrániť",
	"geo-geoloc-btn": "Priblížiť sa k aktuálnej polohe",
	"geo-geoloc-fail": "Lokalita zlyhalo. Uistite sa, že umiestnenie služby sú povolené.",
	"geo-geoloc-uncapable": "Lokalizácia nie je podporovaná vo vašom prehliadači.",
	"geo-lgnd-grphc": "Legenda grafický pre mapovú vrstvu.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Prihlásiť",

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
 * Locale: SK (Slovak; slovenčina, slovenský jazyk)
 */
$.extend( $.validator.messages, {
	required: "Povinné zadať.",
	maxlength: $.validator.format( "Maximálne {0} znakov." ),
	minlength: $.validator.format( "Minimálne {0} znakov." ),
	rangelength: $.validator.format( "Minimálne {0} a maximálne {1} znakov." ),
	email: "E-mailová adresa musí byť platná.",
	url: "URL musí byť platná.",
	date: "Musí byť dátum.",
	number: "Musí byť číslo.",
	digits: "Môže obsahovať iba číslice.",
	equalTo: "Dve hodnoty sa musia rovnať.",
	range: $.validator.format( "Musí byť medzi {0} a {1}." ),
	max: $.validator.format( "Nemôže byť viac ako {0}." ),
	min: $.validator.format( "Nemôže byť menej ako {0}." ),
	creditcard: "Číslo platobnej karty musí byť platné."
} );
return $;
}));

});