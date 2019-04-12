/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Armenian dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "hy",
	"lang-native": "Հայերեն",
	add: "ավելացնել",
	all: "Բոլորը",
	tphp: "Էջի սկիզբ",
	load: "բեռնման ...",
	process: "Մշակվում է ...",
	srch: "Որոնել",
	"no-match": "Ոչ խաղը չի գտնվել",
	matches: {
		mixin: "[MIXIN] հանդիպումները գտել"
	},
	current: "(Ընթացիկ)",
	hide: "Թաքցնել",
	err: "Սխալ",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Սկիզբ",
	stop: "Կանգառեք",
	back: "Վերադառնալ",
	cancel: "Վերացնել",
	"min-ago": "րոպե առաջ",
	"coup-mins": "մի քանի րոպե առաջ",
	"mins-ago": {
		mixin: "[MIXIN] րոպե առաջ"
	},
	"hour-ago": "ժամ առաջ",
	"hours-ago": {
		mixin: "[MIXIN] ժամ առաջ"
	},
	"days-ago": {
		mixin: "[MIXIN] օր առաջ"
	},
	yesterday: "երեկ",

	nxt: "Հաջորդ",
	"nxt-r": "Հաջորդ (աջ սլաքների բանալին)",
	prv: "Նախորդ",
	"prv-l": "Նախորդ (ձախ սլաքների բանալին)",
	first: "Առաջին",
	last: "Անցյալ",
	page: "Page",
	"srch-menus": "Որոնել եւ Ընտրացանկերը",
	email: "Էլեկտրոնային փոստ",
	"menu-close": "Փակել մենյուն",
	"overlay-close": "Փակեք կափարիչ",
	"esc-key": "(փախչել բանալին)",
	show: "Ցուցադրում",

	/* Tabbed interface */
	"tab-rot": {
		off: "Կանգ էջանիշը պտույտը",
		on: "Սկիզբ էջանիշը պտույտը"
	},
	"tab-list": "էջանշանը ցուցակ",
	"tab-pnl-end1": "Ավարտվեց այս էջանշանը վահանակի վրա.",
	"tab-pnl-end2": "Վերադառնալ ցուցակին էջանիշը",
	"tab-pnl-end3": "կամ շարունակում է մնացած էջում.",
	"tab-play": "Խաղալ",

	/* Multimedia player */
	"mmp-play": "Խաղալ",
	pause: "Դադար",
	open: "Բաց է",
	close: "Մոտիկ",
	volume: "Ծավալը",
	mute: {
		on: "Համր",
		off: "Կասեցնել խլացնելու"
	},
	cc: {
		off: "Թաքցնել փակ կատալոներեն",
		on: "Ցուցադրել փակ կատալոներեն"
	},
	"cc-err": "Սխալի բեռնելիս փակ վերնագրեր",
	adesc: {
		on: "Միացնել աուդիո նկարագրություն",
		off: "Կասեցնել ձայնային նկարագրությունը"
	},
	pos: "Ներկայիս պաշտոնը:",
	dur: "Ընդհանուր ժամանակը:",

	/* Share widget */
	"shr-txt": "Կիսում",
	"shr-pg": " այս էջը",
	"shr-vid": " այս տեսանյութը",
	"shr-aud": " այս աուդիո ֆայլը",
	"shr-hnt": " հետ {s} ",
	"shr-disc": "Ոչ հաստատում որեւէ արտադրանքի կամ ծառայությունների արտահայտված կամ ենթադրվող.",

	/* Form validation */
	"frm-nosubmit": "Ձեւը չի կարող ներկայացվել, քանի որ ",
	"errs-fnd": " սխալներ չեն հայտնաբերվել.",
	"err-fnd": " սխալ է գտնվել.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Թաքցնել Օրացույց",
	"date-show": "Ընտրեք ամսաթիվը ից Օրացույց ոլորտում:",
	"date-sel": "Նյութերի բազա",

	/* Calendar */
	days: [
		"Կիրակի",
		"Երկուշաբթի",
		"Երեքշաբթի",
		"Չորեքշաբթի",
		"Հինգշաբթի",
		"Ուրբաթ",
		"Շաբաթ"
	],
	mnths: [
		"Հունվար",
		"Փետրվար",
		"Մարտ",
		"Ապրիլ",
		"Մայիս",
		"Հունիս",
		"Հուլիս",
		"Օգոստոս",
		"Սեպտեմբեր",
		"Հոկտեմբեր",
		"Նոյեմբեր",
		"Դեկտեմբեր"
	],
	cal: "Օրացույց",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Ընթացիկ օր)",
	"cal-goToLnk": "Գնալ<span class=\"wb-inv\"> ամսվա տարվա</span>",
	"cal-goToTtl": "Գնալ ամսվա տարվա",
	"cal-goToMnth": "Ամիս:",
	"cal-goToYr": "Տարի:",
	"cal-goToBtn": "Գնալ",
	prvMnth: "Էջանշան դնել Դարձնել սկզբնական: ",
	nxtMnth: "Հաջորդ ամիս: ",

	/* Lightbox */
	"lb-curr": "Կոդ %curr% %total% - ից",
	"lb-xhr-err": "Բեռնվում այս պարունակությունը չի հաջողվել.",
	"lb-img-err": "Բեռնվում է պատկերը ձախողվել է.",

	/* Charts widget */
	"tbl-txt": "Սեղան",
	"tbl-dtls": "Աղյուսակում. Մանրամասներ է հետեւյալ աղյուսակում.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Ձեր սեսիան կսպառվի ինքնաբերաբար ին #min# րոպե #sec# վրկ",
	"st-to-msg-end": "սկզբնական Ընտրել \"Շարունակել նիստը» երկարաձգել հայտվել ձեր.",
	"st-msgbx-ttl": "Նիստի ժամանակ դուրս նախազգուշացման",
	"st-alrdy-to-msg": "Ներեցեք Ձեր նիստն արդեն ավարտվել է: Խնդրում ենք մուտք գործել կրկին փորձել.",
	"st-btn-cont": "Շարունակել նիստ",
	"st-btn-end": "Վերջացնել նիստ է",

	/* Toggle details */
	"td-toggle": "Ընդլայնիր կամ Ամբողջությամբ ցուցադրել բոլորը",
	"td-open": "Ծավալել բոլորը",
	"td-close": "Ամբողջությամբ ցուցադրել բոլորը",
	"td-ttl-open": "Ծավալել բոլորը բաժինները բովանդակության",
	"td-ttl-close": "Ամբողջությամբ ցուցադրել բոլորը բաժինները բովանդակության",

	/* Table enhancement */
	sortAsc: ": որպեսզի դասավորում աճման",
	sortDesc: ": որպեսզի դասավորում Նվազման",
	emptyTbl: "Տվյալներ չկան հասանելի է աղյուսակում",
	infoEntr: "Ցույց _START_ _END_ - ից _TOTAL_ - ը մուտքերի",
	infoEmpty: "Ցույց 0 0 - ից 0 - ը մուտքերի",
	infoFilt: "(Ֆիլտրացված են _MAX_ Ընդամենը մուտքերի)",
	info1000: ",",
	lenMenu: "Ցուցադրել _MENU_ գրառում",
	filter: "Զտման նյութեր",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Խոշորացնել",
	"geo-zmout": "Փոքրացնել",
	"geo-zmwrld": "Մեծացնել քարտեզը չափը",
	"geo-zmfeat": "Մանրացնել տարր է",
	"geo-sclln": "Քարտեզ սանդղակ",
	"geo-msepos": "Լայնության եւ երկայնությունը մկնիկի կուրսորը",
	"geo-ariamap": "Քարտեզ օբյեկտի. Նկարագրերը եւ քարտեզը հատկանիշները են ստորեւ բերված աղյուսակում.",
	"geo-ally": "<strong>Ստեղնաշարի գրանցվածները:</strong> Երբ քարտեզը ուշադրության կենտրոնում, օգտագործեք սլաքը բանալիները համահայկական քարտեզի վրա եւ այն, եւ գումարած մինուս բանալին վրա, այն մեծացնելու. Սլաքը բանալիներ չեն համահայկական քարտեզը երբ Մանրացնել է քարտեզ չափով.",
	"geo-allyttl": "Հրահանգներ: Նավիգացիոն քարտեզ",
	"geo-tgllyr": "Ցուցադրման կամ թաքցնել շերտը",
	"geo-hdnlyr": "Այս շերտի այժմ թաքնված.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Կանադա բազա քարտեզ (անգլերեն կամ ֆրանսերեն միայն)",
	"geo-sel": "Ընտրել",
	"geo-lblsel": "Ստուգեք ընտրել տարրը քարտեզի վրա",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Նշեք անունը&#44; գտնվելու վայրը&#44; փոստային կոդը&#44; հասցեն&#44; (փոստային) համարը NTS ...",
	"geo-loc-label": "Որտեղից",
	"geo-aoi-north": "Հյուսիս",
	"geo-aoi-east": "Արեւելք",
	"geo-aoi-south": "Հարավ",
	"geo-aoi-west": "Արեւմուտք",
	"geo-aoi-instructions": "Ոչ ոքի վանդակը քարտեզի վրա, կամ մուտք գործել համակարգում ստորեւ, եւ սեղմեք \"Ավելացնել\" կոճակը:",
	"geo-aoi-btndraw": "Նկարել",
	"geo-aoi-btnclear": "Հեռացնել",
	"geo-geoloc-btn": "Մեծացնել ձեր զբաղեցրած պաշտոնը",
	"geo-geoloc-fail": "Որտեղից ձախողվեց. Խնդրում ենք համոզվել, որ այդ վայրում ծառայություններ հնարավորություն.",
	"geo-geoloc-uncapable": "Տեղայնացման չի ապահովվում է ձեր բրոուզերում.",
	"geo-lgnd-grphc": "Լեգենդ արվեստ քարտեզ շերտ.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Գրանցվել",

	/* Filter */
	"fltr-lbl": "Filter<span class=\"wb-inv\"> content: results appear below as you type.</span>",
	"fltr-info": "Showing _NBITEM_ filtered from _TOTAL_ total entries"
};

} )( wb );
