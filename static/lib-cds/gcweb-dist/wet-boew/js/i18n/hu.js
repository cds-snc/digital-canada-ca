/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Hungarian dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "hu",
	"lang-native": "Magyar",
	add: "Hozzáad",
	all: "Mind",
	tphp: "Oldal teteje",
	load: "betöltése ...",
	process: "feldolgozás ...",
	srch: "Keresés",
	"no-match": "Nincs találat",
	matches: {
		mixin: "[MIXIN] találat"
	},
	current: "(jelenlegi)",
	hide: "Elrejtés",
	err: "Hiba",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Indítás",
	stop: "Leállítás",
	back: "Vissza",
	cancel: "Mégsem",
	"min-ago": "egy perce",
	"coup-mins": "pár perce",
	"mins-ago": {
		mixin: "[MIXIN] perccel ezelőtt"
	},
	"hour-ago": "egy órával ezelőtt",
	"hours-ago": {
		mixin: "[MIXIN] órával ezelőtt"
	},
	"days-ago": {
		mixin: "[MIXIN] nappal ezelőtt"
	},
	yesterday: "tegnap",

	nxt: "Következő",
	"nxt-r": "Következő (jobb nyíl gomb)",
	prv: "Előző",
	"prv-l": "Előző (bal nyíl gomb)",
	first: "Első",
	last: "Utolsó",
	page: "Page",
	"srch-menus": "Keresés és menük",
	email: "Email",
	"menu-close": "Zárja be a menüt",
	"overlay-close": "Zárja be az overlay",
	"esc-key": "(escape billentyűvel)",
	show: "Mutat",

	/* Tabbed interface */
	"tab-rot": {
		off: "Tabulálás engedélyezése",
		on: "Tabulálás kikapcsolása"
	},
	"tab-list": "Lap listája",
	"tab-pnl-end1": "Vége a lap panel.",
	"tab-pnl-end2": "Vissza a lap listája",
	"tab-pnl-end3": "vagy továbbra is a többi oldalon.",
	"tab-play": "Lejátszás",

	/* Multimedia player */
	"mmp-play": "Lejátszás",
	pause: "Pillanatmegállító",
	open: "Nyitva",
	close: "Bezárás",
	volume: "Hangerő",
	mute: {
		on: "Lenémítás",
		off: "Hang bekapcsolása"
	},
	cc: {
		off: "Feliratok kikapcsolása",
		on: "Feliratozás bekapcsolása"
	},
	"cc-err": "Hiba a felirat betöltése közben",
	adesc: {
		on: "Narráció bekapcsolása",
		off: "Narráció kikapcsolása"
	},
	pos: "Jelenlegi pozíció:",
	dur: "Összidő:",

	/* Share widget */
	"shr-txt": "Oszd",
	"shr-pg": " meg a oldal",
	"shr-vid": " meg a videót",
	"shr-aud": " ezt a hangfájlt",
	"shr-hnt": " a {s} ",
	"shr-disc": "I jóváhagyását olyan termékek vagy szolgáltatások kifejezett vagy hallgatólagos.",

	/* Form validation */
	"frm-nosubmit": "Az adatokat nem lehet elküldeni mert ",
	"errs-fnd": " hibák léptek fel.",
	"err-fnd": " hiba lépett fel.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "A naptár elrejtése",
	"date-show": "Válasszon egy dátumot a naptárból:",
	"date-sel": "Kijelölt",

	/* Calendar */
	days: [
		"Vasárnap",
		"Hétfő",
		"Kedd",
		"Szerda",
		"Csütörtök",
		"Péntek",
		"Szombat"
	],
	mnths: [
		"Január",
		"Február",
		"Március",
		"Április",
		"Május",
		"Június",
		"Július",
		"Augusztus",
		"Szeptember",
		"Október",
		"November",
		"December"
	],
	cal: "Naptár",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Mai nap)",
	"cal-goToLnk": "Ugrás<span class=\"wb-inv\"> erre a hónapra</span>",
	"cal-goToTtl": "Ugrás erre a hónapra",
	"cal-goToMnth": "Hónap:",
	"cal-goToYr": "Év:",
	"cal-goToBtn": "Indít",
	prvMnth: "Előző hónap: ",
	nxtMnth: "Következő hónap: ",

	/* Lightbox */
	"lb-curr": "%total%-ből %curr%",
	"lb-xhr-err": "A tartalom betöltése nem sikerült.",
	"lb-img-err": "A kép betöltése nem sikerült.",

	/* Charts widget */
	"tbl-txt": "Táblázat",
	"tbl-dtls": "Részletek a következő táblázatban.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "A munkamenet lejár automatikusan #min# perc #sec# másodperc.",
	"st-to-msg-end": "Válassza a \"Folytatás session\" kiterjeszteni a munkamenet.",
	"st-msgbx-ttl": "Munkamenet időtúllépési figyelmeztetés",
	"st-alrdy-to-msg": "Sajnos a munkamenet már lejárt. Kérjük, jelentkezzen be újra.",
	"st-btn-cont": "Folytatás ülés",
	"st-btn-end": "Vége ülésen már",

	/* Toggle details */
	"td-toggle": "Váltás az összes",
	"td-open": "Az összes kibontása",
	"td-close": "Az összes összecsukása",
	"td-ttl-open": "Az összes kibontása rétegei tartalom",
	"td-ttl-close": "Elrejt minden rétege tartalom",

	/* Table enhancement */
	sortAsc: ": aktiválja a növekvő sort",
	sortDesc: ": aktiválja csökkenő rendezési",
	emptyTbl: "Nem állnak rendelkezésre adatok a táblázatban",
	infoEntr: "Megjelenítése _START_-_END_ a _TOTAL_ bejegyzés",
	infoEmpty: "Megjelenítése 0-0 a 0 bejegyzés",
	infoFilt: "(kiszűrt összesen _MAX_ entries)",
	info1000: "&#160;",
	lenMenu: "Megjelenítés _MENU_ bejegyzés",
	filter: "Szűrés",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Nagyítás",
	"geo-zmout": "Kicsinyítés",
	"geo-zmwrld": "Nagyítás feltérképezésére mértékben",
	"geo-zmfeat": "Nagyítás elem",
	"geo-sclln": "térkép méretarány",
	"geo-msepos": "Szélességi és hosszúsági az egér kurzor",
	"geo-ariamap": "Térkép objektumot. A leírások A térkép funkciók az alábbi táblázat tartalmazza.",
	"geo-ally": "<strong>Billentyűzet felhasználók:</strong> Ha a térkép a középpontban, a nyílbillentyűkkel mozgathatja a térképet, és a plusz és mínusz gombokkal a képre. A nyilak nem fog mozogni a térképen, ha a térkép kinagyított mértékben.",
	"geo-allyttl": "Utasítás: Térkép navigáció",
	"geo-tgllyr": "Váltás a megjelenítési réteg",
	"geo-hdnlyr": "Ez a réteg jelenleg rejtve.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Kanada alaptérkép (angol vagy francia nyelven esetén)",
	"geo-sel": "Választ",
	"geo-lblsel": "Ellenőrizze, hogy jelölje ki az elemet a térképen",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Adja meg a helység nevét&#44; irányítószám&#44; cím (postai)&#44; a száma NTS ...",
	"geo-loc-label": "Elhelyezkedés",
	"geo-aoi-north": "Észak",
	"geo-aoi-east": "Kelet",
	"geo-aoi-south": "Dél",
	"geo-aoi-west": "Nyugat",
	"geo-aoi-instructions": "Döntetlen box a térképen vagy adja meg a koordinátákat, majd kattintson a \"Hozzáadás\" gombra.",
	"geo-aoi-btndraw": "Rajzol",
	"geo-aoi-btnclear": "Eltávolít",
	"geo-geoloc-btn": "Nagyítás az aktuális helyre",
	"geo-geoloc-fail": "Hely sikerült. Ügyeljen arra, hogy a helymeghatározó szolgáltatások engedélyezve vannak.",
	"geo-geoloc-uncapable": "A honosítás nem támogatja a böngészője.",
	"geo-lgnd-grphc": "Legend grafika térképen réteg.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Bejelentkezés",

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
 * Locale: HU (Hungarian; Magyar)
 */
$.extend( $.validator.messages, {
	required: "Kötelező megadni.",
	maxlength: $.validator.format( "Legfeljebb {0} karakter hosszú legyen." ),
	minlength: $.validator.format( "Legalább {0} karakter hosszú legyen." ),
	rangelength: $.validator.format( "Legalább {0} és legfeljebb {1} karakter hosszú legyen." ),
	email: "Érvényes e-mail címnek kell lennie.",
	url: "Érvényes URL-nek kell lennie.",
	date: "Dátumnak kell lennie.",
	number: "Számnak kell lennie.",
	digits: "Csak számjegyek lehetnek.",
	equalTo: "Meg kell egyeznie a két értéknek.",
	range: $.validator.format( "{0} és {1} közé kell esnie." ),
	max: $.validator.format( "Nem lehet nagyobb, mint {0}." ),
	min: $.validator.format( "Nem lehet kisebb, mint {0}." ),
	creditcard: "Érvényes hitelkártyaszámnak kell lennie.",
	remote: "Kérem javítsa ki ezt a mezőt.",
	dateISO: "Kérem írjon be egy érvényes dátumot (ISO).",
	step: $.validator.format( "A {0} egyik többszörösét adja meg." )
} );
return $;
}));

});