/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Afrikaans dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "af",
	"lang-native": "Afrikaans",
	add: "Voeg",
	all: "Alle",
	tphp: "Top van die bladsy",
	load: "loading ...",
	process: "verwerking ...",
	srch: "Soek",
	"no-match": "Geen wedstryd gevind",
	matches: {
		mixin: "[MIXIN] wedstryde"
	},
	current: "(Huidige)",
	hide: "Steek",
	err: "Fout",
	colon: ":",
	hyphen: "[MIXIN] jam yang lalu",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Begin",
	stop: "Stop",
	back: "Terug",
	cancel: "Kanselleer",
	"min-ago": "n minuut gelede",
	"coup-mins": "paar minute gelede",
	"mins-ago": {
		mixin: "[MIXIN] minute gelede"
	},
	"hour-ago": "n uur gelede",
	"hours-ago": {
		mixin: "[MIXIN] ure gelede"
	},
	"days-ago": {
		mixin: "[MIXIN] dae gelede"
	},
	yesterday: "gister",

	nxt: "Volgende",
	"nxt-r": "Volgende (regs pyltjie sleutel)",
	prv: "Vorige",
	"prv-l": "Vorige (links pyltjie sleutel)",
	first: "Eerste",
	last: "Laaste",
	page: "Page",
	"srch-menus": "Soek en spyskaarte",
	email: "Stuur 'n e-pos aan",
	"menu-close": "Maak die menu",
	"overlay-close": "Maak die oortrek",
	"esc-key": "(Escape-sleutel)",
	show: "Toon",

	/* Tabbed interface */
	"tab-rot": {
		off: "Stop tab rotasie",
		on: "Begin blad rotasie"
	},
	"tab-list": "Tab lys",
	"tab-pnl-end1": "Einde van hierdie blad paneel.",
	"tab-pnl-end2": "Keer terug na die blad lys",
	"tab-pnl-end3": "of voortgaan om die res van die bladsy.",
	"tab-play": "Speel",

	/* Multimedia player */
	"mmp-play": "Speel",
	pause: "Pause",
	open: "Oop",
	close: "Close",
	volume: "Volume",
	mute: {
		on: "Stom",
		off: "Ontdemp"
	},
	cc: {
		off: "Steek Gesluit byskrifte",
		on: "Wys Gesluit byskrifte"
	},
	"cc-err": "Fout tydens die laai gesluit onderskrifte",
	adesc: {
		on: "Aktiveer klank beskrywing",
		off: "Deaktiveer audio-beskrywing"
	},
	pos: "Huidige posisie:",
	dur: "Totale tyd:",

	/* Share widget */
	"shr-txt": "Deel",
	"shr-pg": " hierdie bladsy",
	"shr-vid": " hierdie video",
	"shr-aud": " hierdie klank",
	"shr-hnt": " met {s} ",
	"shr-disc": "Geen endossement van enige produkte of dienste is uitgedruk of geரliseer",

	/* Form validation */
	"frm-nosubmit": "Die vorm kon nie voorgel꡷ord nie, want ",
	"errs-fnd": " foute is gevind nie.",
	"err-fnd": " fout gevind word.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Steek kalender",
	"date-show": "Kies 'n datum van \\'n kalender vir die veld:",
	"date-sel": "Gekies",

	/* Calendar */
	days: [
		"Sondag",
		"Maandag",
		"Dinsdag",
		"Woensdag",
		"Donderdag",
		"Vrydag",
		"Saterdag"
	],
	mnths: [
		"Januarie",
		"Februarie",
		"Maart",
		"April",
		"Mei",
		"Junie",
		"Julie",
		"Augustus",
		"September",
		"Oktober",
		"November",
		"Desember"
	],
	cal: "Kalender",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Huidige dag)",
	"cal-goToLnk": "Gaan na<span class=\"wb-inv\"> maand van die jaar</span>",
	"cal-goToTtl": "Gaan na maand van die jaar",
	"cal-goToMnth": "Maand:",
	"cal-goToYr": "Jaar:",
	"cal-goToBtn": "Gaan",
	prvMnth: "Vorige Maand: ",
	nxtMnth: "Volgende Maand: ",

	/* Lightbox */
	"lb-curr": "Item %curr% van %total%",
	"lb-xhr-err": "Hierdie inhoud het misluk om te laai.",
	"lb-img-err": "Hierdie beeld het misluk om te laai.",

	/* Charts widget */
	"tbl-txt": "Tabel",
	"tbl-dtls": "Chart. Besonderhede in die volgende tabel.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Jou sessie sal outomaties verval in #min# min #sec# sek aan.",
	"st-to-msg-end": "Kies \"Gaan voort sessie\" om jou sessie te brei.",
	"st-msgbx-ttl": "Time-outsessie waarskuwing",
	"st-alrdy-to-msg": "Jammer jou sessie reeds verstryk het. Log weer in.",
	"st-btn-cont": "Gaan voort sessie",
	"st-btn-end": "Eindig sessie nou",

	/* Toggle details */
	"td-toggle": "Toggle alle",
	"td-open": "Brei om alle",
	"td-close": "Vou almal",
	"td-ttl-open": "Brei om alle afdelings van die inhoud",
	"td-ttl-close": "Vou alle afdelings van die inhoud",

	/* Table enhancement */
	sortAsc: ": aktiveer vir die stygende soort",
	sortDesc: ": aktiveer vir die dalende soort",
	emptyTbl: "Geen data is beskikbaar in die tabel",
	infoEntr: "Showing _START_ tot _END_ van _TOTAL_ inskrywings",
	infoEmpty: "Showing 0 tot 0 van 0 inskrywings",
	infoFilt: "(Gefiltreer _MAX_ Totaal inskrywings)",
	info1000: ",",
	lenMenu: "Wys _MENU_ inskrywings",
	filter: "Filter artikels",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Zoom in",
	"geo-zmout": "Zoem uit",
	"geo-zmwrld": "Zoom mate kaart",
	"geo-zmfeat": "Zoom in op die element",
	"geo-sclln": "kaartskaal",
	"geo-msepos": "Breedte-en lengteligging van die muis",
	"geo-ariamap": "Kaart voorwerp. Die beskrywings van die kaart funksies is in die tabel hieronder.",
	"geo-ally": "<strong>Sleutelbord-gebruikers:</strong> Wanneer die kaart in fokus is, gebruik die pyltjie sleutels om die kaart en die plus en minus sleutels om te zoom om die pan. Die pyltjie sleutels om die kaart sal nie die pan wanneer dit aan die kaart mate vergrote.",
	"geo-allyttl": "Instruksies: Kaart navigasie",
	"geo-tgllyr": "Skakel die vertoning van die laag",
	"geo-hdnlyr": "Hierdie laag is tans weggesteek.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Kanada basis kaart (Engels of Frans)",
	"geo-sel": "Kies",
	"geo-lblsel": "Gaan die element te kies op die kaart",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Dui die naam van die plek&#44; poskode&#44; adres (pos)&#44; die aantal NTS ...",
	"geo-loc-label": "Ligging",
	"geo-aoi-north": "Noord",
	"geo-aoi-east": "Oos",
	"geo-aoi-south": "Suid",
	"geo-aoi-west": "Weste",
	"geo-aoi-instructions": "Baken 'n gebied op die kaart of die onderstaande inligting in en kliek dan op die \"Teken\"-knoppie.",
	"geo-aoi-btndraw": "Teken",
	"geo-aoi-btnclear": "Verwyder",
	"geo-geoloc-btn": "Zoom in jou huidige posisie",
	"geo-geoloc-fail": "Plek gefaal het. Maak asseblief seker dat plek dienste word aangeskakel.",
	"geo-geoloc-uncapable": "Lokalisering word nie ondersteun deur die leser.",
	"geo-lgnd-grphc": "Legende grafiese vir kaart laag.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Teken In",

	/* Filter */
	"fltr-lbl": "Filter<span class=\"wb-inv\"> content: results appear below as you type.</span>",
	"fltr-info": "Showing _NBITEM_ filtered from _TOTAL_ total entries"
};

} )( wb );
