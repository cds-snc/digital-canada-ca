/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Hindi dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "hi",
	"lang-native": "मानक हिन्दी",
	add: "जोड़ना",
	all: "सब",
	tphp: "पृष्ठ का शीर्ष",
	load: "लोड हो रहा है ...",
	process: "प्रसंस्करण ...",
	srch: "खोजें",
	"no-match": "कोई मैच मिल गया",
	matches: {
		mixin: "[MIXIN] मैचों मिला"
	},
	current: "(वर्तमान)",
	hide: "छिपाना",
	err: "त्रुटि",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "प्रारंभ",
	stop: "रोक",
	back: "वापस",
	cancel: "रद्द करें",
	"min-ago": "एक मिनट पहले",
	"coup-mins": "पहले की जोड़ी",
	"mins-ago": {
		mixin: "[MIXIN] मिनट पहले"
	},
	"hour-ago": "एक घंटे पहले",
	"hours-ago": {
		mixin: "[MIXIN] घंटे पहले"
	},
	"days-ago": {
		mixin: "[MIXIN] दिन पहले"
	},
	yesterday: "कल",

	nxt: "अगला",
	"nxt-r": "अगला (सही तीर कुंजी)",
	prv: "पिछला",
	"prv-l": "पिछला (बाएँ तीर कुंजी)",
	first: "पहले",
	last: "अंतिम",
	page: "Page",
	"srch-menus": "खोज और मेनू",
	email: "ईमेल",
	"menu-close": "मेनू बंद",
	"overlay-close": "पॉपअप बंद",
	"esc-key": "(भागने कुंजी)",
	show: "दिखाना",

	/* Tabbed interface */
	"tab-rot": {
		off: "टैब रोटेशन रोकें",
		on: "टैब रोटेशन प्रारंभ"
	},
	"tab-list": "टैब सूची",
	"tab-pnl-end1": "इस टैब पैनल के अंत.",
	"tab-pnl-end2": "टैब सूची पर लौटें",
	"tab-pnl-end3": "या पृष्ठ के आराम करने के लिए जारी है.",
	"tab-play": "खेल",

	/* Multimedia player */
	"mmp-play": "खेल",
	pause: "ठहराव",
	open: "खुला",
	close: "पास",
	volume: "मात्रा",
	mute: {
		on: "म्यूट",
		off: "अनम्यूट"
	},
	cc: {
		off: "बंद कैप्शन छुपाएं",
		on: "बंद कैप्शन दिखाएं"
	},
	"cc-err": "लोड करने में त्रुटि बंद कैप्शन",
	adesc: {
		on: "ऑडियो विवरण सक्षम",
		off: "ऑडियो विवरण अक्षम"
	},
	pos: "वर्तमान स्थिति:",
	dur: "कुल समय:",

	/* Share widget */
	"shr-txt": "शेयर",
	"shr-pg": " इस पन्ने",
	"shr-vid": " इस वीडियो",
	"shr-aud": " इस ऑडियो फाइल",
	"shr-hnt": "{s} के साथ",
	"shr-disc": "किसी भी उत्पाद या सेवाओं की कोई समर्थन व्यक्त या निहित",

	/* Form validation */
	"frm-nosubmit": "फार्म प्रस्तुत नहीं किया जा सका क्योंकि ",
	"errs-fnd": " त्रुटियों पाया गया.",
	"err-fnd": " त्रुटि पाया गया था.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "कैलेंडर छिपाएँ",
	"date-show": "कैलेंडर से क्षेत्र के लिए एक तारीख उठाओ",
	"date-sel": "चयनित",

	/* Calendar */
	days: [
		"रविवार",
		"सोमवार",
		"मंगलवार",
		"बुधवार",
		"बृहस्पतिवार",
		"शुक्रवार",
		"शनिवार"
	],
	mnths: [
		"जनवरी",
		"फरवरी",
		"मार्च",
		"अप्रैल",
		"मई",
		"जून",
		"जुलाई",
		"अगस्त",
		"सितंबर",
		"अक्टूबर",
		"नवंबर",
		"दिसंबर"
	],
	cal: "कैलेंडर",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(वर्तमान दिन)",
	"cal-goToLnk": "<span class=\"wb-inv\">वर्ष के महीने के लिए </span>जाओ",
	"cal-goToTtl": "वर्ष के महीने के लिए जाओ",
	"cal-goToMnth": "माह:",
	"cal-goToYr": "वर्ष:",
	"cal-goToBtn": "जाना",
	prvMnth: "पिछले माह: ",
	nxtMnth: "अगला महीना: ",

	/* Lightbox */
	"lb-curr": "%total% में से %curr% आइटम",
	"lb-xhr-err": "इस सामग्री को लोड करने में विफल.",
	"lb-img-err": "इस छवि को लोड करने में विफल रहा.",

	/* Charts widget */
	"tbl-txt": "तालिका",
	"tbl-dtls": "चार्ट. निम्न तालिका में विवरण.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "आपका सत्र #min# मिनट #sec# सेकंड में स्वत: ही समाप्त हो जाएगी.",
	"st-to-msg-end": "अपने सत्र का विस्तार करने के लिए \"सत्र जारी\" का चयन करें.",
	"st-msgbx-ttl": "सत्र मध्यांतर चेतावनी",
	"st-alrdy-to-msg": "खेद अपने सत्र पहले ही समाप्त हो गया है. कृपया फिर से प्रवेश करें.",
	"st-btn-cont": "सत्र जारी",
	"st-btn-end": "अब सत्र समाप्त",

	/* Toggle details */
	"td-toggle": "सभी टॉगल करें",
	"td-open": "सभी का विस्तार",
	"td-close": "सभी को संक्षिप्त करें",
	"td-ttl-open": "सामग्री के सभी वर्गों का विस्तार",
	"td-ttl-close": "सामग्री के सभी वर्गों को संक्षिप्त करें",

	/* Table enhancement */
	sortAsc: ": तरह आरोही के लिए सक्रिय",
	sortDesc: ": तरह उतरते के लिए सक्रिय",
	emptyTbl: "कोई डेटा तालिका में उपलब्ध है",
	infoEntr: "दिखा रहा है _START_ _END_ कुल _TOTAL_ प्रविष्टियों की",
	infoEmpty: "दिखा रहा है 0 0 कुल 0 प्रविष्टियों की",
	infoFilt: "(_MAX_ कुल प्रविष्टियों से फ़िल्टर्ड)",
	info1000: ",",
	lenMenu: "_MENU_ प्रविष्टियों दिखाएं",
	filter: "फ़िल्टर आइटम",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "ज़ूम इन करें",
	"geo-zmout": "ज़ूम आउट करें",
	"geo-zmwrld": "हद तक ज़ूम",
	"geo-zmfeat": "तत्व परज़ूमकरें",
	"geo-sclln": "नक़्शे का पैमाना",
	"geo-msepos": "माउस कर्सर के अक्षांश और देशांतर",
	"geo-ariamap": "नक्शा वस्तु. नक्शा सुविधाओं का विवरण नीचे तालिका में हैं.",
	"geo-ally": "<strong>कुंजीपटल उपयोगकर्ताओं:</strong> जब नक्शा ध्यान में है, तीर कुंजियों का उपयोग करने के लिए नक्शा और प्लस और माइनस चाबियाँ ज़ूम पैन. तीर कुंजियों का नक्शा पैन नहीं जब नक्शा हद तक जूम.",
	"geo-allyttl": "निर्देश: मानचित्र नेविगेशन",
	"geo-tgllyr": "परत के प्रदर्शन टॉगल करें",
	"geo-hdnlyr": "इस परत वर्तमान में छिपा हुआ है.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - कनाडा आधार नक्शा (अंग्रेजी या फ्रेंच केवल)",
	"geo-sel": "चयन",
	"geo-lblsel": "नक्शे पर तत्व का चयन करने के लिए जाँच करें",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "स्थान&#44; ज़िप कोड&#44; पता (डाक)&#44; एनटीएस की संख्या के नाम का संकेत ...",
	"geo-loc-label": "स्थान",
	"geo-aoi-north": "उत्तर",
	"geo-aoi-east": "पूर्व",
	"geo-aoi-south": "दक्षिण",
	"geo-aoi-west": "पश्चिम",
	"geo-aoi-instructions": "मानचित्र पर बॉक्स आकर्षित या नीचे निर्देशांक दर्ज करें और \"जोड़ें\" बटन पर क्लिक करें।",
	"geo-aoi-btndraw": "खींचना",
	"geo-aoi-btnclear": "हटाना",
	"geo-geoloc-btn": "वर्तमान स्थान पर ज़ूम",
	"geo-geoloc-fail": "स्थान में विफल रहा है. स्थान सेवाएं सक्षम रहे हैं कि कृपया सुनिश्चित करें.",
	"geo-geoloc-uncapable": "स्थानीयकरण आपके ब्राउज़र द्वारा समर्थित नहीं है.",
	"geo-lgnd-grphc": "नक्शा परत के लिए लीजेंड ग्राफिक।",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "साइन इन करें",

	/* Filter */
	"fltr-lbl": "Filter<span class=\"wb-inv\"> content: results appear below as you type.</span>",
	"fltr-info": "Showing _NBITEM_ filtered from _TOTAL_ total entries"
};

} )( wb );
