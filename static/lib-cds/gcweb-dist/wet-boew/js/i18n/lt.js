/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Lithuanian dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "lt",
	"lang-native": "Lietuvių kalba",
	add: "papildyti",
	all: "Visi",
	tphp: "Puslapio viršus",
	load: "pakrovimo ...",
	process: "perdirbimo ...",
	srch: "Paieška",
	"no-match": "Atitikmenų nerasta",
	matches: {
		mixin: "[MIXIN] atitikmuo (-enys) rasti"
	},
	current: "(dabartinė)",
	hide: "Slėpti",
	err: "Klaida",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Pradėti",
	stop: "Sustoti",
	back: "Atgal",
	cancel: "Atšaukti",
	"min-ago": "Prieš minutę",
	"coup-mins": "Prieš kelias minutes",
	"mins-ago": {
		mixin: "Prieš [MIXIN] minutes"
	},
	"hour-ago": "Prieš valandą",
	"hours-ago": {
		mixin: "Prieš [MIXIN] valandas"
	},
	"days-ago": {
		mixin: "Prieš [MIXIN] dienas"
	},
	yesterday: "Vakar",

	nxt: "Sekantis",
	"nxt-r": "Sekantis (rodyklės dešinėn klavišu)",
	prv: "Ankstenis",
	"prv-l": "Ankstenis (rodyklės dešinėn klavišu)",
	first: "Pirmasis",
	last: "Paskutinis",
	page: "Page",
	"srch-menus": "Ieškoti ir meniu",
	email: "El. paštas",
	"menu-close": "Uždaryti meniu",
	"overlay-close": "Uždaryti perdangos",
	"esc-key": "(\"escape\" klavišu)",
	show: "Rodyti",

	/* Tabbed interface */
	"tab-rot": {
		off: "Sustabdyti rotaciją",
		on: "Pradėti rotaciją"
	},
	"tab-list": "Skirtukas sąrašas",
	"tab-pnl-end1": "Šio skirtuko skydelyje pabaiga.",
	"tab-pnl-end2": "Grįžti į skirtukų sąrašą",
	"tab-pnl-end3": "ar toliau likusia puslapio dalimi.",
	"tab-play": "Žaisti",

	/* Multimedia player */
	"mmp-play": "Žaisti",
	pause: "Pauzė",
	open: "Atidaryti",
	close: "Uždaryti",
	volume: "Apimtis",
	mute: {
		on: "Užtylinti",
		off: "Įjungti garsą"
	},
	cc: {
		off: "Slėpti didžiųjų raidžių įjungimą",
		on: "Rodyti didžiųjų raidžių įjungimą"
	},
	"cc-err": "Klaida kraunant didžiųjų raidžių įjungimą",
	adesc: {
		on: "Aktyvuoti audio aprašą",
		off: "Išjungti audio aprašą"
	},
	pos: "Esama pozicija:",
	dur: "Visas laikas:",

	/* Share widget */
	"shr-txt": "Dalytis ",
	"shr-pg": " šiuo puslapiu",
	"shr-vid": " šiuo vaizdo",
	"shr-aud": " tai garso failas",
	"shr-hnt": " su {s} ",
	"shr-disc": "Išreikštų ar numanomų ne bet kokius produktus ar paslaugas įrašas.",

	/* Form validation */
	"frm-nosubmit": "Formos pateikti negalima, nes ",
	"errs-fnd": " rastos klaidos.",
	"err-fnd": " rasta klaida.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Slėpti kalendorių",
	"date-show": "Pasirinkti datą iš kalendoriaus:",
	"date-sel": "Atrinkta",

	/* Calendar */
	days: [
		"Sekmadienis",
		"Pirmadienis",
		"Antradienis",
		"Trečiadienis",
		"Ketvirtadienis",
		"Penktadienis",
		"Šeštadienis"
	],
	mnths: [
		"Sausis",
		"Vasaris",
		"Kovas",
		"Balandis",
		"Gegužė",
		"Birželis",
		"Liepa",
		"Rugpjūtis",
		"Rugsėjis",
		"Spalis",
		"Lapkritis",
		"Gruodis"
	],
	cal: "Kalendorius",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Šiandien)",
	"cal-goToLnk": "Eiti į<span class=\"wb-inv\"> mėnesius</span>",
	"cal-goToTtl": "Eiti į mėnesius",
	"cal-goToMnth": "Mėnesiai:",
	"cal-goToYr": "Metai:",
	"cal-goToBtn": "Eiti",
	prvMnth: "Ankstesnis mėnuo: ",
	nxtMnth: "Sekantis mėnuo: ",

	/* Lightbox */
	"lb-curr": "Punktas %curr% iš %total%",
	"lb-xhr-err": "Turinio nepavyko užkrauti.",
	"lb-img-err": "Nuotraukos nepavyko užkrauti.",

	/* Charts widget */
	"tbl-txt": "Lentelė",
	"tbl-dtls": "Grafika. Daugiau detalių sekančioje lentelėje.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Jūsų sesija pasibaigs automatiškai #min# min #sec# sek.",
	"st-to-msg-end": "Pasirinkite \"Tęsti sesiją\" pratęsti savo sesiją.",
	"st-msgbx-ttl": "Sesijos laiko įspėjimas",
	"st-alrdy-to-msg": "Deja, Jūsų sesija jau baigėsi. Prašome prisijungti vėl.",
	"st-btn-cont": "Tęsti sesiją",
	"st-btn-end": "Sesijos pabaigos dabar",

	/* Toggle details */
	"td-toggle": "Perjungti visi",
	"td-open": "Išskleisti viską",
	"td-close": "Sutraukti viską",
	"td-ttl-open": "Išskleisti visus turinio skyrius",
	"td-ttl-close": "Sutraukti visus turinio skyrius",

	/* Table enhancement */
	sortAsc: ": suaktyvinkite didėjimo tvarka rūšiuoti",
	sortDesc: ": suaktyvinkite rikiuojama",
	emptyTbl: "Nėra duomenų apie vaisto pateiktoje lentelėje",
	infoEntr: "Rodoma _START_ iki _END_ iš _TOTAL_ įrašų",
	infoEmpty: "Rodoma 0 iki 0 iš 0 įrašų",
	infoFilt: "(filtruojamas iš _MAX_ Iš viso įrašų)",
	info1000: ",",
	lenMenu: "Rodyti _MENU_ įrašai",
	filter: "Filtruoti",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Artinti",
	"geo-zmout": "Tolinti",
	"geo-zmwrld": "Padidinti iki map mastą",
	"geo-zmfeat": "Padidinti iki elemento",
	"geo-sclln": "Žemėlapio mastelis",
	"geo-msepos": "Platuma ir ilguma pelės žymeklį",
	"geo-ariamap": "Žemėlapis objektas. Žemėlapio funkcijų aprašymai žemiau pateiktoje lentelėje.",
	"geo-ally": "<strong>Klaviatūros Vartotojų:</strong> žemėlapis sufokusuotas, naudokite rodyklių klavišus į panoraminį vaizdą, žemėlapį ir pliuso ir minuso klavišus. Rodyklių klavišus nebus przesuniesz žemėlapį, kai didinimas žemėlapyje,.",
	"geo-allyttl": "Instrukcijos: Žemėlapis navigacijos",
	"geo-tgllyr": "Perjungti sluoksnio rodymą",
	"geo-hdnlyr": "Šis sluoksnis yra paslėptas.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Kanada bazė žemėlapis (anglų arba prancūzų kalba)",
	"geo-sel": "Pasirinkti",
	"geo-lblsel": "Patikrinkite, pasirinkite elementą žemėlapyje",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Nurodykite vietą&#44; pašto kodą&#44; adresą (pašto)&#44; į NBA numeris Pavadinimas ...",
	"geo-loc-label": "Vieta",
	"geo-aoi-north": "Į šiaurę",
	"geo-aoi-east": "Rytų",
	"geo-aoi-south": "Į pietus",
	"geo-aoi-west": "Vakarai",
	"geo-aoi-instructions": "Lygiosios langelį žemėlapyje arba įveskite koordinates žemiau ir spustelėkite mygtuką \"Pridėti\".",
	"geo-aoi-btndraw": "Atkreipti",
	"geo-aoi-btnclear": "Pašalinti",
	"geo-geoloc-btn": "Padidinti dabartinę vietą",
	"geo-geoloc-fail": "Vieta nepavyko. Prašome užtikrinti, kad vietos nustatymo paslaugos yra įjungtas.",
	"geo-geoloc-uncapable": "Lokalizacijos nepalaikomas jūsų naršyklėje.",
	"geo-lgnd-grphc": "Legenda grafinis už žemėlapio sluoksnį.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Prisijungti",

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
 * Locale: LT (Lithuanian; lietuvių kalba)
 */
$.extend( $.validator.messages, {
	required: "Šis laukas yra privalomas.",
	remote: "Prašau pataisyti šį lauką.",
	email: "Prašau įvesti teisingą elektroninio pašto adresą.",
	url: "Prašau įvesti teisingą URL.",
	date: "Prašau įvesti teisingą datą.",
	dateISO: "Prašau įvesti teisingą datą (ISO).",
	number: "Prašau įvesti teisingą skaičių.",
	digits: "Prašau naudoti tik skaitmenis.",
	creditcard: "Prašau įvesti teisingą kreditinės kortelės numerį.",
	equalTo: "Prašau įvestį tą pačią reikšmę dar kartą.",
	extension: "Prašau įvesti reikšmę su teisingu plėtiniu.",
	maxlength: $.validator.format( "Prašau įvesti ne daugiau kaip {0} simbolių." ),
	minlength: $.validator.format( "Prašau įvesti bent {0} simbolius." ),
	rangelength: $.validator.format( "Prašau įvesti reikšmes, kurių ilgis nuo {0} iki {1} simbolių." ),
	range: $.validator.format( "Prašau įvesti reikšmę intervale nuo {0} iki {1}." ),
	max: $.validator.format( "Prašau įvesti reikšmę mažesnę arba lygią {0}." ),
	min: $.validator.format( "Prašau įvesti reikšmę didesnę arba lygią {0}." )
} );
return $;
}));

});