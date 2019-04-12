/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- English dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "en",
	"lang-native": "English",
	add: "Add",
	all: "All",
	tphp: "Top of page",
	load: "loading...",
	process: "processing...",
	srch: "Search",
	"no-match": "No match found",
	matches: {
		mixin: "[MIXIN] match(es) found"
	},
	current: "(current)",
	hide: "Hide",
	err: "Error",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Start",
	stop: "Stop",
	back: "Back",
	cancel: "Cancel",
	"min-ago": "a minute ago",
	"coup-mins": "couple of minutes ago",
	"mins-ago": {
		mixin: "[MIXIN] minutes ago"
	},
	"hour-ago": "an hour ago",
	"hours-ago": {
		mixin: "[MIXIN] hours ago"
	},
	"days-ago": {
		mixin: "[MIXIN] days ago"
	},
	yesterday: "yesterday",

	nxt: "Next",
	"nxt-r": "Next (right arrow key)",
	prv: "Previous",
	"prv-l": "Previous (left arrow key)",
	first: "First",
	last: "Last",
	page: "Page",
	"srch-menus": "Search and menus",
	email: "Email",
	"menu-close": "Close menu",
	"overlay-close": "Close overlay",
	"esc-key": "(escape key)",
	show: "Show",

	/* Tabbed interface */
	"tab-rot": {
		off: "Stop tab rotation",
		on: "Start tab rotation"
	},
	"tab-list": "Tab list",
	"tab-pnl-end1": "End of this tab panel.",
	"tab-pnl-end2": "Return to the tab list",
	"tab-pnl-end3": "or continue to the rest of page.",
	"tab-play": "Play",

	/* Multimedia player */
	"mmp-play": "Play",
	pause: "Pause",
	open: "Open",
	close: "Close",
	volume: "Volume",
	mute: {
		on: "Mute",
		off: "Unmute"
	},
	cc: {
		off: "Hide closed captioning",
		on: "Show closed captioning"
	},
	"cc-err": "Error loading closed captions",
	adesc: {
		on: "Enable audio description",
		off: "Disable audio description"
	},
	pos: "Current position:",
	dur: "Total time:",

	/* Share widget */
	"shr-txt": "Share",
	"shr-pg": " this page",
	"shr-vid": " this video",
	"shr-aud": " this audio file",
	"shr-hnt": " with {s} ",
	"shr-disc": "No endorsement of any products or services is expressed or implied.",

	/* Form validation */
	"frm-nosubmit": "The form could not be submitted because ",
	"errs-fnd": " errors were found.",
	"err-fnd": " error was found.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Hide calendar",
	"date-show": "Pick a date from a calendar for field:",
	"date-sel": "Selected",

	/* Calendar */
	days: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	],
	mnths: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	],
	cal: "Calendar",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Current day)",
	"cal-goToLnk": "Go to<span class=\"wb-inv\"> month of year</span>",
	"cal-goToTtl": "Go to month of year",
	"cal-goToMnth": "Month:",
	"cal-goToYr": "Year:",
	"cal-goToBtn": "Go",
	prvMnth: "Previous Month: ",
	nxtMnth: "Next Month: ",

	/* Lightbox */
	"lb-curr": "Item %curr% of %total%",
	"lb-xhr-err": "This content failed to load.",
	"lb-img-err": "This image failed to load.",

	/* Charts widget */
	"tbl-txt": "Table",
	"tbl-dtls": "Chart. Details in the following table.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Your session will expire automatically in #min# min #sec# sec.",
	"st-to-msg-end": "Select \"Continue session\" to extend your session.",
	"st-msgbx-ttl": "Session timeout warning",
	"st-alrdy-to-msg": "Sorry your session has already expired. Please sign in again.",
	"st-btn-cont": "Continue session",
	"st-btn-end": "End session now",

	/* Toggle details */
	"td-toggle": "Toggle all",
	"td-open": "Expand all",
	"td-close": "Collapse all",
	"td-ttl-open": "Expand all sections of content",
	"td-ttl-close": "Collapse all sections of content",

	/* Table enhancement */
	sortAsc: ": activate for ascending sort",
	sortDesc: ": activate for descending sort",
	emptyTbl: "No data is available in the table",
	infoEntr: "Showing _START_ to _END_ of _TOTAL_ entries",
	infoEmpty: "Showing 0 to 0 of 0 entries",
	infoFilt: "(filtered from _MAX_ total entries)",
	info1000: ",",
	lenMenu: "Show _MENU_ entries",
	filter: "Filter items",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Zoom in",
	"geo-zmout": "Zoom out",
	"geo-zmwrld": "Zoom to map extent",
	"geo-zmfeat": "Zoom to element",
	"geo-sclln": "Map scale",
	"geo-msepos": "Latitude and longitude of the mouse cursor",
	"geo-ariamap": "Map object. The descriptions of the map features are in the table below.",
	"geo-ally": "<strong>Keyboard users:</strong> When the map is in focus, use the arrow keys to pan the map and the plus and minus keys to zoom. The arrow keys will not pan the map when zoomed to the map extent.",
	"geo-allyttl": "Instructions: Map Navigation",
	"geo-tgllyr": "Toggle the display of the layer",
	"geo-hdnlyr": "This layer is currently hidden.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Canada Base Map",
	"geo-sel": "Select",
	"geo-lblsel": "Check to select the element on the map",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Enter placename&#44; postal code&#44; street address&#44; NTS number...",
	"geo-loc-label": "Location",
	"geo-aoi-north": "North",
	"geo-aoi-east": "East",
	"geo-aoi-south": "South",
	"geo-aoi-west": "West",
	"geo-aoi-instructions": "Draw box on map or enter coordinates below and click the \"Add\" button.",
	"geo-aoi-btndraw": "Draw",
	"geo-aoi-btnclear": "Clear",
	"geo-geoloc-btn": "Zoom to current location",
	"geo-geoloc-fail": "Geolocation failed. Please ensure that location services are enabled.",
	"geo-geoloc-uncapable": "Geolocation is not supported by your browser.",
	"geo-lgnd-grphc": "Legend graphic for map layer.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Sign in",

	/* Filter */
	"fltr-lbl": "Filter<span class=\"wb-inv\"> content: results appear below as you type.</span>",
	"fltr-info": "Showing _NBITEM_ filtered from _TOTAL_ total entries"
};

} )( wb );
