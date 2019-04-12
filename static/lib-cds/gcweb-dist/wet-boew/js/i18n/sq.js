/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Albanian dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "sq",
	"lang-native": "Shqip",
	add: "Shtoj",
	all: "Të gjithë",
	tphp: "Fillimi i faqes",
	load: "ngarkimin ...",
	process: "përpunimit të ...",
	srch: "Kërko",
	"no-match": "Nuk është gjetur përputhje",
	matches: {
		mixin: "[MIXIN] ndeshjet gjet"
	},
	current: "(aktual)",
	hide: "Fsheh",
	err: "Gabim",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Fillim",
	stop: "Stop",
	back: "Prapa",
	cancel: "Anuloj",
	"min-ago": "një minutë më parë",
	"coup-mins": "disa minuta më parë",
	"mins-ago": {
		mixin: "[MIXIN] minuta më parë"
	},
	"hour-ago": "një orë më parë",
	"hours-ago": {
		mixin: "[MIXIN] orë më parë"
	},
	"days-ago": {
		mixin: "[MIXIN] ditë më parë"
	},
	yesterday: "dje",

	nxt: "Tjetër",
	"nxt-r": "Tjetër (kyç djathtë arrow)",
	prv: "I mëparshëm",
	"prv-l": "I mëparshëm (kyç majtë arrow)",
	first: "I parë",
	last: "I fundit",
	page: "Page",
	"srch-menus": "Kërko dhe menutë",
	email: "Email",
	"menu-close": "Mbylle menu",
	"overlay-close": "Mbylle mbulesë",
	"esc-key": "(kyç shpëtojnë)",
	show: "Shfaq",

	/* Tabbed interface */
	"tab-rot": {
		off: "Stop rotacionin tab",
		on: "Fillojnë rrotullimin tab"
	},
	"tab-list": "Lista tab",
	"tab-pnl-end1": "Fundi i këtij paneli tab.",
	"tab-pnl-end2": "Kthehuni tek lista tab",
	"tab-pnl-end3": "ose të vazhdojë për pjesën tjetër të faqes.",
	"tab-play": "Luaj",

	/* Multimedia player */
	"mmp-play": "Luaj",
	pause: "Pushim",
	open: "Hapur",
	close: "Afër",
	volume: "Volumin",
	mute: {
		on: "Memec",
		off: "Çheshtja"
	},
	cc: {
		off: "Hide Mbyllur captioning",
		on: "Trego Mbyllur captioning"
	},
	"cc-err": "Captions Gabim gjatë ngarkimit të mbyllura",
	adesc: {
		on: "Aktivizo përshkrimin audio",
		off: "Disable përshkrimin audio"
	},
	pos: "Pozicioni aktual:",
	dur: "Koha totale:",

	/* Share widget */
	"shr-txt": "Share",
	"shr-pg": " këtë faqe",
	"shr-vid": " këtë video",
	"shr-aud": " hierdie audio",
	"shr-hnt": " me {s} ",
	"shr-disc": "Asnjë miratimi i ndonjë produkteve apo shërbimeve është shprehur apo të nënkuptuar",

	/* Form validation */
	"frm-nosubmit": "Formulari nuk mund të paraqitet për shkak ",
	"errs-fnd": " gabime u gjetën.",
	"err-fnd": " gabim u gjet.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Hide kalendar",
	"date-show": "Zgjidh një datë nga një kalendar për fushën:",
	"date-sel": "I zgjedhur",

	/* Calendar */
	days: [
		"E diel",
		"E hënë",
		"E martë",
		"E mërkurë",
		"E enjte",
		"E premte",
		"E shtunë"
	],
	mnths: [
		"Janar",
		"Shkurt",
		"Mars",
		"Prill",
		"Mund",
		"Qershor",
		"Korrik",
		"Gusht",
		"Shtator",
		"Tetor",
		"Nëntor",
		"Dhjetor"
	],
	cal: "Kalendar",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Dita aktual)",
	"cal-goToLnk": "Shko tek<span class=\"wb-inv\"> muaji të vitit</span>",
	"cal-goToTtl": "Shko tek muaji të vitit",
	"cal-goToMnth": "Muaj:",
	"cal-goToYr": "Vit:",
	"cal-goToBtn": "Shkoj",
	prvMnth: "Muajin e kaluar: ",
	nxtMnth: "Muajin e ardhshëm: ",

	/* Lightbox */
	"lb-curr": "Pika %curr% e %total%",
	"lb-xhr-err": "Kjo përmbajtje nuk arriti të ngarkesës.",
	"lb-img-err": "Ky imazh nuk arriti të ngarkesës.",

	/* Charts widget */
	"tbl-txt": "Tabelë",
	"tbl-dtls": "Chart. Detajet në tabelën e mëposhtme.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Sesioni juaj do të përfundojë automatikisht në #min# min #sec# sec.",
	"st-to-msg-end": "Zgjidhni \"Vazhdo seancë\" për të zgjeruar sesionin tuaj.",
	"st-msgbx-ttl": "Timeout Sesioni paralajmërim",
	"st-alrdy-to-msg": "Na vjen keq Sesioni juaj ka skaduar tashmë. Ju lutemi identifikohuni përsëri.",
	"st-btn-cont": "Vazhdo seancë",
	"st-btn-end": "Fundi sesion tani",

	/* Toggle details */
	"td-toggle": "Toggle gjitha",
	"td-open": "Zgjerimin e të gjitha",
	"td-close": "Collapse gjitha",
	"td-ttl-open": "Expand gjitha seksionet e përmbajtjes",
	"td-ttl-close": "Collapse gjitha seksionet e përmbajtjes",

	/* Table enhancement */
	sortAsc: ": aktivizuar për ngjitje lloj",
	sortDesc: ": aktivizuar për zbritës lloj",
	emptyTbl: "Nuk ka të dhëna është në dispozicion në tryezë",
	infoEntr: "Duke shfaqur _START_ deri në _END_ prej _TOTAL_ hyra",
	infoEmpty: "Duke shfaqur 0 deri në 0 prej 0 hyra",
	infoFilt: "(Filtruar nga shënimet _MAX_ totalit)",
	info1000: "&#160;",
	lenMenu: "Trego _MENU_ hyra",
	filter: "Artikuj filtër",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Zoom në",
	"geo-zmout": "Zoom out",
	"geo-zmwrld": "Zoom në hartë shtrirjen",
	"geo-zmfeat": "Zoom në element",
	"geo-sclln": "shkallë Map",
	"geo-msepos": "Gjerësi dhe gjatësi e kursorit të miut",
	"geo-ariamap": "Harta objekt. Përshkrimet e karakteristika hartë janë në tabelën e mëposhtme.",
	"geo-ally": "<strong>Përdoruesit keyboard:</strong> Kur hartë është në fokus, përdorni arrow çelësat për të pan hartë dhe çelësat plus dhe minus për zmadhim. Arrow keys nuk do pan hartën kur zoomed në masën hartë.",
	"geo-allyttl": "Udhëzime: Harta navigacion",
	"geo-tgllyr": "Nyjëtim shfaqjen e shtresës",
	"geo-hdnlyr": "Kjo shtresë është e fshehur tani.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Kanada hartë bazë (anglisht ose frëngjisht vetëm)",
	"geo-sel": "Zgjedh",
	"geo-lblsel": "Kontrolloni për të zgjedhur elementin në hartë",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Shënoni emrin e vendndodhjes&#44; kod postar&#44; adresa (postare)&#44; numri i NTS ...",
	"geo-loc-label": "Location",
	"geo-aoi-north": "Veri",
	"geo-aoi-east": "Lindja",
	"geo-aoi-south": "Jug",
	"geo-aoi-west": "Perëndimi",
	"geo-aoi-instructions": "Teken boks op kaart of ingaan koördinate hieronder en klik op die knoppie \"Voeg deur\".",
	"geo-aoi-btndraw": "Barazim",
	"geo-aoi-btnclear": "Heq",
	"geo-geoloc-btn": "Zoom në pozicionin juaj e tanishme",
	"geo-geoloc-fail": "Vendndodhja dështuar. Ju lutemi të sigurojë që shërbimet lokacioni janë të aktivizuara.",
	"geo-geoloc-uncapable": "Lokalizimi nuk mbështetet nga browseri juaj.",
	"geo-lgnd-grphc": "Legjenda grafik për shtresë hartë.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Kyqeni në",

	/* Filter */
	"fltr-lbl": "Filter<span class=\"wb-inv\"> content: results appear below as you type.</span>",
	"fltr-info": "Showing _NBITEM_ filtered from _TOTAL_ total entries"
};

} )( wb );
