/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- German dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "de",
	"lang-native": "Deutsch",
	add: "Hinzufügen",
	all: "Alle",
	tphp: "Zum Seitenanfang",
	load: "Be ...",
	process: "Verarbeitung ...",
	srch: "Suchen",
	"no-match": "Keine Übereinstimmung gefunden",
	matches: {
		mixin: "[MIXIN] Ergebnisse gefunden"
	},
	current: "(Aktuell)",
	hide: "Verbergen",
	err: "Fehler",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Starten",
	stop: "Stoppen",
	back: "Zurück",
	cancel: "Kündigen",
	"min-ago": "Vor einer Minute",
	"coup-mins": "paar Minuten",
	"mins-ago": {
		mixin: "Vor [MIXIN] Minuten"
	},
	"hour-ago": "Vor einer Stunde",
	"hours-ago": {
		mixin: "Vor [MIXIN] Stunden"
	},
	"days-ago": {
		mixin: "Vor [MIXIN] Tagen"
	},
	yesterday: "gestern",

	nxt: "Nächste",
	"nxt-r": "Nächste (rechte Pfeiltaste)",
	prv: "Früher",
	"prv-l": "Früher (linke Pfeiltaste)",
	first: "Erste",
	last: "Letzte",
	page: "Page",
	"srch-menus": "Suche und Menüs",
	email: "E-Mail",
	"menu-close": "Schließen Sie das Menü",
	"overlay-close": "Schließen Sie das Pop-up",
	"esc-key": "(Escape-Taste)",
	show: "Zeigen",

	/* Tabbed interface */
	"tab-rot": {
		off: "Stoppen Registerkarte Drehung",
		on: "Starten Registerkarte Drehung"
	},
	"tab-list": "Registerkarte-Liste",
	"tab-pnl-end1": "Ende dieser Registerkarte angezeigt.",
	"tab-pnl-end2": "Zurück zur Liste der Registerkarte",
	"tab-pnl-end3": "oder der Rest der Seite fortzusetzen.",
	"tab-play": "Spielen",

	/* Multimedia player */
	"mmp-play": "Spielen",
	pause: "Pausieren",
	open: "Öffnen",
	close: "Schließen",
	volume: "Lautstärke",
	mute: {
		on: "Stumm",
		off: "Stummschaltung"
	},
	cc: {
		off: "Ausblenden Untertitelung",
		on: "Zeige Untertitelung"
	},
	"cc-err": "Fehler beim Laden Untertiteln",
	adesc: {
		on: "Aktivieren Sie Audio-Beschreibung",
		off: "Deaktivieren Sie Audio-Beschreibung"
	},
	pos: "Aktuelle Position:",
	dur: "Insgesamt benötigte Zeit",

	/* Share widget */
	"shr-txt": "Teilen",
	"shr-pg": " Sie diese Seite",
	"shr-vid": " Sie diese Video",
	"shr-aud": " diese Audiodatei",
	"shr-hnt": " mit {s} ",
	"shr-disc": "Keine Unterstützung von Produkten oder Dienstleistungen ausdrücklich oder stillschweigend.",

	/* Form validation */
	"frm-nosubmit": "Das Formular konnte nicht vorgelegt werden, da ",
	"errs-fnd": " Fehler gefunden wurden.",
	"err-fnd": " Fehler festgestellt wurde.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Ausblenden Kalender",
	"date-show": "Wählen Sie ein Datum aus einem Kalender für das Feld:",
	"date-sel": "Ausgewählt",

	/* Calendar */
	days: [
		"Sonntag",
		"Montag",
		"Dienstag",
		"Mittwoch",
		"Donnerstag",
		"Freitag",
		"Samstag"
	],
	mnths: [
		"Januar",
		"Februar",
		"März",
		"April",
		"Mai",
		"Juni",
		"Juli",
		"August",
		"September",
		"Oktober",
		"November",
		"Dezember"
	],
	cal: "Kalender",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Aktueller Tag)",
	"cal-goToLnk": "Gehe zu<span class=\"wb-inv\"> Monat des Jahres</span>",
	"cal-goToTtl": "Gehe zu Monat des Jahres",
	"cal-goToMnth": "Monat",
	"cal-goToYr": "Jahr",
	"cal-goToBtn": "Gehen",
	prvMnth: "Vorheriger Monat: ",
	nxtMnth: "Nächster Monat: ",

	/* Lightbox */
	"lb-curr": "Artikel %curr% von %total%",
	"lb-xhr-err": "Dieser Inhalt wurde nicht geladen.",
	"lb-img-err": "Dieses Bild konnte nicht geladen werden.",

	/* Charts widget */
	"tbl-txt": "Tabelle",
	"tbl-dtls": "Grafik. Angaben in der folgenden Tabelle.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Ihre Sitzung endet automatisch in #min# min #sec# sec.",
	"st-to-msg-end": "Wählen Sie \"Weiter Sitzung\", um die Sitzung zu verlängern.",
	"st-msgbx-ttl": "Session Zeitablaufwarnung",
	"st-alrdy-to-msg": "Leider Ihre Sitzung ist bereits abgelaufen. Bitte loggen Sie sich erneut.",
	"st-btn-cont": "Weiter Sitzung",
	"st-btn-end": "Sitzung beenden jetzt",

	/* Toggle details */
	"td-toggle": "Wechseln alle",
	"td-open": "Erweitern",
	"td-close": "Alle ausblenden",
	"td-ttl-open": "Erweitern Sie alle Teile der Inhalte",
	"td-ttl-close": "Alles Teile der Inhalte",

	/* Table enhancement */
	sortAsc: ": Aktivieren für aufsteigend sortieren",
	sortDesc: ": Aktivieren für absteigend sortieren",
	emptyTbl: "Keine Daten in der Tabelle verfügbaren",
	infoEntr: "Zeige _START_ bis _END_ von _TOTAL_ Einträge",
	infoEmpty: "Zeige 0 bis 0 von 0 Einträge",
	infoFilt: "(gefiltert aus insgesamt _MAX_ Einträge)",
	info1000: "&#160;",
	lenMenu: "Zeige _MENU_ Einträge",
	filter: "Filter Artikel",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Vergrößern",
	"geo-zmout": "Verkleinern",
	"geo-zmwrld": "Zoom auf weit Karte",
	"geo-zmfeat": "Zoom auf das Element",
	"geo-sclln": "Karte Maßstab",
	"geo-msepos": "Breitengrad und Längengrad des Mauszeigers",
	"geo-ariamap": "Kartenobjekt. Die Beschreibungen der Karte Funktionen sind in der Tabelle unten.",
	"geo-ally": "<strong>Keyboard-Benutzer:</strong> Wenn die Karte im Fokus ist, verwenden Sie die Pfeiltasten, um die Karte und die Plus-und Minus-Tasten zu vergrößern schwenken. Die Pfeiltasten werden nicht schwenken die Karte, wenn die Karte soweit gezoomt.",
	"geo-allyttl": "Anleitung: Kartennavigation",
	"geo-tgllyr": "Umschalten der Anzeige der Schicht",
	"geo-hdnlyr": "Diese Schicht ist im Moment versteckt.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Kanada Basiskarte (Englisch oder Französisch)",
	"geo-sel": "Wählen",
	"geo-lblsel": "Überprüfen Sie das Element auf der Karte auswählen",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Geben Sie den Namen des Ortes&#44; Postleitzahl&#44; Adresse (Post)&#44; die Anzahl der NTS ...",
	"geo-loc-label": "Position",
	"geo-aoi-north": "Norden",
	"geo-aoi-east": "Osten",
	"geo-aoi-south": "Süden",
	"geo-aoi-west": "Westen",
	"geo-aoi-instructions": "Zeichnen Feld auf der Karte oder geben Sie die Koordinaten ein und klicken Sie auf \"Hinzufügen\".",
	"geo-aoi-btndraw": "Ziehen",
	"geo-aoi-btnclear": "Entfernen",
	"geo-geoloc-btn": "Zoom auf die aktuelle Lage",
	"geo-geoloc-fail": "Lage fehlgeschlagen. Bitte stellen Sie sicher, dass die Ortungsdienste aktiviert sind.",
	"geo-geoloc-uncapable": "Der Ort ist nicht von Ihrem Browser unterstützt.",
	"geo-lgnd-grphc": "Legende Grafik für Karten-Layer.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Login",

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
 * Locale: DE (German, Deutsch)
 */
$.extend( $.validator.messages, {
	required: "Dieses Feld ist ein Pflichtfeld.",
	maxlength: $.validator.format( "Geben Sie bitte maximal {0} Zeichen ein." ),
	minlength: $.validator.format( "Geben Sie bitte mindestens {0} Zeichen ein." ),
	rangelength: $.validator.format( "Geben Sie bitte mindestens {0} und maximal {1} Zeichen ein." ),
	email: "Geben Sie bitte eine gültige E-Mail Adresse ein.",
	url: "Geben Sie bitte eine gültige URL ein.",
	date: "Bitte geben Sie ein gültiges Datum ein.",
	number: "Geben Sie bitte eine Nummer ein.",
	digits: "Geben Sie bitte nur Ziffern ein.",
	equalTo: "Bitte denselben Wert wiederholen.",
	range: $.validator.format( "Geben Sie bitte einen Wert zwischen {0} und {1} ein." ),
	max: $.validator.format( "Geben Sie bitte einen Wert kleiner oder gleich {0} ein." ),
	min: $.validator.format( "Geben Sie bitte einen Wert größer oder gleich {0} ein." ),
	creditcard: "Geben Sie bitte eine gültige Kreditkarten-Nummer ein."
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
 * Locale: DE
 */
$.extend( $.validator.methods, {
	date: function( value, element ) {
		return this.optional( element ) || /^\d\d?\.\d\d?\.\d\d\d?\d?$/.test( value );
	},
	number: function( value, element ) {
		return this.optional( element ) || /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test( value );
	}
} );
return $;
}));
});