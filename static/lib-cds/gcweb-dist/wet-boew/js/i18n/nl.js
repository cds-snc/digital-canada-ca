/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Dutch dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "nl",
	"lang-native": "Nederlands",
	add: "Toevoegen",
	all: "Allen",
	tphp: "Bovenkant pagina",
	load: "het laden van ...",
	process: "verwerking ...",
	srch: "Zoeken",
	"no-match": "Er zijn geen resultaten gevonden voor uw zoekopdracht",
	matches: {
		mixin: "[MIXIN] gevonden zoekresultaten"
	},
	current: "(actueel)",
	hide: "Verbergen",
	err: "Fout",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Beginnen",
	stop: "Stoppen",
	back: "Terug",
	cancel: "Annuleren",
	"min-ago": "Een minuut geleden",
	"coup-mins": "Enkele minuten geleden",
	"mins-ago": {
		mixin: "[MIXIN] minuten geleden"
	},
	"hour-ago": "een uur geleden",
	"hours-ago": {
		mixin: "[MIXIN] uren geleden"
	},
	"days-ago": {
		mixin: "[MIXIN] dagen geleden"
	},
	yesterday: "gisteren",

	nxt: "Volgende",
	"nxt-r": "Volgende (rechtse pijlen-toets)",
	prv: "Vorige",
	"prv-l": "Vorige (linkse pijlen-toets)",
	first: "Eerste",
	last: "Laatste",
	page: "Page",
	"srch-menus": "Zoeken en menu's",
	email: "E-mail",
	"menu-close": "Sluit het menu",
	"overlay-close": "Sluit het dialoogvenster",
	"esc-key": "(Escape-toets)",
	show: "Toon",

	/* Tabbed interface */
	"tab-rot": {
		off: "Stop de tabrotatie",
		on: "Start de tabrotatie"
	},
	"tab-list": "Lijst van tabs",
	"tab-pnl-end1": "Einde van het deelvenster met tabs.",
	"tab-pnl-end2": "Terug naar de lijst met tabs",
	"tab-pnl-end3": "of om met de rest van de pagina door te gaan.",
	"tab-play": "Afspelen",

	/* Multimedia player */
	"mmp-play": "Afspelen",
	pause: "Pauze",
	open: "Openen",
	close: "Afsluiten",
	volume: "Volume",
	mute: {
		on: "Geluid uitzetten",
		off: "Geluid aanzetten"
	},
	cc: {
		off: "Bijschrift verbergen",
		on: "Bijschrift tonen"
	},
	"cc-err": "Fout bij het tonen van de bijschriften",
	adesc: {
		on: "Audiobeschrijving activeren",
		off: "Audiobeschrijving opheffen"
	},
	pos: "Huidige positie:",
	dur: "Totale afspeelduur:",

	/* Share widget */
	"shr-txt": "Deel",
	"shr-pg": " deze pagina",
	"shr-vid": " deze video",
	"shr-aud": " dit audiobestand",
	"shr-hnt": " met {s} ",
	"shr-disc": "Er wordt hier geen goedkeuring van producten of diensten uitgedrukt.",

	/* Form validation */
	"frm-nosubmit": "Het formulier kon niet worden verwerkt omdat ",
	"errs-fnd": " er zijn fouten opgetreden.",
	"err-fnd": " er is een fout opgetreden.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Kalender verbergen",
	"date-show": "Kies een kalenderdatum voor het veld:",
	"date-sel": "Geselecteerd",

	/* Calendar */
	days: [
		"Zondag",
		"Maandag",
		"Dinsdag",
		"Woensdag",
		"Donderdag",
		"Vrijdag",
		"Zaterdag"
	],
	mnths: [
		"Januari",
		"Februari",
		"Maart",
		"April",
		"Mei",
		"Juni",
		"Juli",
		"Augustus",
		"September",
		"Oktober",
		"November",
		"December"
	],
	cal: "Kalender",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Vandaag)",
	"cal-goToLnk": "Ga naar<span class=\"wb-inv\"> de maand of het jaar</span>",
	"cal-goToTtl": "Ga naar de maand of het jaar",
	"cal-goToMnth": "Maand:",
	"cal-goToYr": "Jaar:",
	"cal-goToBtn": "Ga",
	prvMnth: "Vorige maand: ",
	nxtMnth: "Volgende maand: ",

	/* Lightbox */
	"lb-curr": "Onderdeel %curr% van een totaal van %total%",
	"lb-xhr-err": "De inhoud is niet geladen",
	"lb-img-err": "Het beeld is niet geladen",

	/* Charts widget */
	"tbl-txt": "Tabel",
	"tbl-dtls": "Grafiek. Meer details in volgende tabel",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Uw sessie zal automatisch vervallen in #min# min. #sec# sec.",
	"st-to-msg-end": "Kies \"Doorgaan sessie\" om uw sessie te verlengen",
	"st-msgbx-ttl": "Sessie timeout waarschuwing",
	"st-alrdy-to-msg": "Excuses, uw sessie is verlopen. Log opnieuw in.",
	"st-btn-cont": "Doorgaan sessie",
	"st-btn-end": "Einde sessie nu",

	/* Toggle details */
	"td-toggle": "Alles tuimelen",
	"td-open": "Alles uitvouwen",
	"td-close": "Alles invouwen",
	"td-ttl-open": "Alle onderdelen van de inhoud tonen",
	"td-ttl-close": "Alle onderdelen van de inhoud verbergen",

	/* Table enhancement */
	sortAsc: ": activeren voor oplopende sortering",
	sortDesc: ": activeren voor aflopende sortering",
	emptyTbl: "Geen gegevens beschikbaar in de tabel",
	infoEntr: "Toon _START_ tot _END_ van _TOTAL_ lemma's",
	infoEmpty: "Toon 0 tot 0 van 0 lemma's",
	infoFilt: "(gefilterd uit _MAX_ totaal aantal lemma's)",
	info1000: "&#160;",
	lenMenu: "Toon _MENU_ lemma's",
	filter: "Artikelen filteren",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Inzoomen",
	"geo-zmout": "Uitzoomen",
	"geo-zmwrld": "Zoomen naar kaartgrootte",
	"geo-zmfeat": "Zoomen naar onderdeel",
	"geo-sclln": "kaartschaal",
	"geo-msepos": "Lengte-en breedtegraad van de muiscursor",
	"geo-ariamap": "Kaart object. De beschrijvingen van de kaart functies staan in de onderstaande tabel.",
	"geo-ally": "<strong>Keyboard gebruikers:</strong> Als de kaart is scherpgesteld, gebruikt u de pijltoetsen om de kaart en de plus en min toetsen om in te zoomen pannen. De pijltoetsen functioneren niet als schuiftoetsen bij maximale kaartgrootte.",
	"geo-allyttl": "Instructies: Kaartnavigatie",
	"geo-tgllyr": "Tuimel de weergave van de laag",
	"geo-hdnlyr": "Deze laag is momenteel verborgen.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Canada basiskaart (Engels of Frans)",
	"geo-sel": "Selecteren",
	"geo-lblsel": "Vink het element aan om het op de kaart te selecteren",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Vermeld de naam van de locatie&#44; postcode&#44; adres (post)&#44; het aantal NTS ...",
	"geo-loc-label": "Plaats",
	"geo-aoi-north": "Noorden",
	"geo-aoi-east": "Oosten",
	"geo-aoi-south": "Zuiden",
	"geo-aoi-west": "Westen",
	"geo-aoi-instructions": "Bakenen een gebied op de kaart of voer de onderstaande informatie in en klik op de \"Toevoegen\" button.",
	"geo-aoi-btndraw": "Trekken",
	"geo-aoi-btnclear": "Verwijderen",
	"geo-geoloc-btn": "Zoomen naar onderdeel",
	"geo-geoloc-fail": "Locatie mislukt. Zorg ervoor dat locatiediensten zijn ingeschakeld.",
	"geo-geoloc-uncapable": "Lokalisatie wordt niet ondersteund door uw browser.",
	"geo-lgnd-grphc": "Legende grafische kaart voor laag.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Aanmelden",

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
 * Locale: NL (Dutch; Nederlands, Vlaams)
 */
$.extend( $.validator.messages, {
	required: "Dit is een verplicht veld.",
	remote: "Controleer dit veld.",
	email: "Vul hier een geldig e-mailadres in.",
	url: "Vul hier een geldige URL in.",
	date: "Vul hier een geldige datum in.",
	dateISO: "Vul hier een geldige datum in (ISO-formaat).",
	number: "Vul hier een geldig getal in.",
	digits: "Vul hier alleen getallen in.",
	creditcard: "Vul hier een geldig creditcardnummer in.",
	equalTo: "Vul hier dezelfde waarde in.",
	extension: "Vul hier een waarde in met een geldige extensie.",
	maxlength: $.validator.format( "Vul hier maximaal {0} tekens in." ),
	minlength: $.validator.format( "Vul hier minimaal {0} tekens in." ),
	rangelength: $.validator.format( "Vul hier een waarde in van minimaal {0} en maximaal {1} tekens." ),
	range: $.validator.format( "Vul hier een waarde in van minimaal {0} en maximaal {1}." ),
	max: $.validator.format( "Vul hier een waarde in kleiner dan of gelijk aan {0}." ),
	min: $.validator.format( "Vul hier een waarde in groter dan of gelijk aan {0}." ),
	step: $.validator.format( "Vul hier een veelvoud van {0} in." ),

	// For validations in additional-methods.js
	iban: "Vul hier een geldig IBAN in.",
	dateNL: "Vul hier een geldige datum in.",
	phoneNL: "Vul hier een geldig Nederlands telefoonnummer in.",
	mobileNL: "Vul hier een geldig Nederlands mobiel telefoonnummer in.",
	postalcodeNL: "Vul hier een geldige postcode in.",
	bankaccountNL: "Vul hier een geldig bankrekeningnummer in.",
	giroaccountNL: "Vul hier een geldig gironummer in.",
	bankorgiroaccountNL: "Vul hier een geldig bank- of gironummer in."
} );
return $;
}));
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
 * Localized default methods for the jQuery validation plugin.
 * Locale: NL
 */
$.extend( $.validator.methods, {
	date: function( value, element ) {
		return this.optional( element ) || /^\d\d?[\.\/\-]\d\d?[\.\/\-]\d\d\d?\d?$/.test( value );
	},
	number: function( value, element ) {
		return this.optional( element ) || /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test( value );
	}
} );
return $;
}));
});