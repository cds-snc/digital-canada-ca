/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Greek dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "el",
	"lang-native": "Ελληνικά",
	add: "Προσθήκη",
	all: "Όλα",
	tphp: "Επιστροφή στην αρχή της σελίδα",
	load: "φόρτωση ...",
	process: "επεξεργασία ...",
	srch: "Αναζήτηση σε",
	"no-match": "Δεν που βρέθηκαν αγώνα",
	matches: {
		mixin: "[MIXIN] αγώνες που βρέθηκαν"
	},
	current: "(Τρέχουσα)",
	hide: "Κρύβω",
	err: "Σφάλμα",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Εκκίνηση",
	stop: "Σταματήστε",
	back: "Πίσω",
	cancel: "Ακύρωση",
	"min-ago": "ένα λεπτό Πριν από",
	"coup-mins": "ζευγάρι των λεπτά πριν",
	"mins-ago": {
		mixin: "Πριν από [MIXIN] λεπτά"
	},
	"hour-ago": "μια ώρα πριν από",
	"hours-ago": {
		mixin: "[MIXIN] ώρες πριν"
	},
	"days-ago": {
		mixin: "[MIXIN] μέρες πριν"
	},
	yesterday: "εχθές",

	nxt: "Επόμενος",
	"nxt-r": "Επόμενος (δεξί πλήκτρο βέλους)",
	prv: "Προηγούμενος",
	"prv-l": "Προηγούμενος (αριστερό πλήκτρο βέλους)",
	first: "Πρώτα",
	last: "Τελευταίος",
	page: "Page",
	"srch-menus": "Αναζήτηση και μενού",
	email: "E-mail",
	"menu-close": "Κλείστε το μενού",
	"overlay-close": "Κλείστε το αναδυόμενο παράθυρο",
	"esc-key": "(κλειδί διαφυγής)",
	show: "Προβολή",

	/* Tabbed interface */
	"tab-rot": {
		off: "Σταματήστε να περιστροφή καρτέλα",
		on: "Ξεκινήστε το περιστροφή καρτέλα"
	},
	"tab-list": "Καρτέλα λίστα",
	"tab-pnl-end1": "End του αυτής της πάνελ καρτέλα.",
	"tab-pnl-end2": "Επιστροφή για να την λίστα καρτέλα",
	"tab-pnl-end3": "ή να συνεχίσουν προς την υπόλοιπη της σελίδας.",
	"tab-play": "Παιχνίδι",

	/* Multimedia player */
	"mmp-play": "Παιχνίδι",
	pause: "Παύση",
	open: "Ανοιχτό",
	close: "Κοντά",
	volume: "Ένταση του ήχου",
	mute: {
		on: "Σίγαση",
		off: "Αναίρεση σίγασης"
	},
	cc: {
		off: "Απόκρυψη Κλειστό λεζάντες",
		on: "Εμφάνιση Κλειστό λεζάντες"
	},
	"cc-err": "Σφάλμα κατά τη φόρτωση κλειστά λεζάντες",
	adesc: {
		on: "Ενεργοποίηση ήχου περιγραφή",
		off: "Απενεργοποίηση ήχου περιγραφή"
	},
	pos: "Τρέχουσα θέση:",
	dur: "Συνολικός χρόνος:",

	/* Share widget */
	"shr-txt": "Κοινή χρήση",
	"shr-pg": " αυτής της σελίδας",
	"shr-vid": " αυτής της βίντεο",
	"shr-aud": " αυτό το αρχείο ήχου",
	"shr-hnt": " με {s} ",
	"shr-disc": "Δεν οπισθογράφηση των οποιωνδήποτε τα προϊόντα ή υπηρεσίες αυτών δεν εκφράζονται ή σιωπηρή.",

	/* Form validation */
	"frm-nosubmit": "Το έντυπο θα μπορούσε να να δεν που υποβάλλονται, επειδή ",
	"errs-fnd": " τα σφάλματα βρέθηκαν.",
	"err-fnd": " σφάλμα ήταν που βρέθηκαν.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Απόκρυψη ημερολόγιο",
	"date-show": "Επιλέξτε μια ημερομηνία από το ημερολόγιο για τον τομέα:",
	"date-sel": "Επιλεγμένα",

	/* Calendar */
	days: [
		"Κυριακή",
		"Δευτέρα",
		"Τρίτη",
		"Τετάρτη",
		"Πέμπτη",
		"Παρασκευή",
		"Σάββατο"
	],
	mnths: [
		"Ιανουάριος",
		"Φεβρουάριος",
		"Μάρτιος",
		"Απρίλιος",
		"Μάιος",
		"Ιούνιος",
		"Ιούλιος",
		"Αύγουστος",
		"Σεπτέμβριος",
		"Οκτώβριος",
		"Νοέμβριος",
		"Δεκέμβριος"
	],
	cal: "Ημερολόγιο",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Τρέχουσα ημέρα)",
	"cal-goToLnk": "Πηγαίνετε στο<span class=\"wb-inv\"> μήνα του έτους</span>",
	"cal-goToTtl": "Πηγαίνετε στο μήνα του έτους",
	"cal-goToMnth": "Μήνας",
	"cal-goToYr": "Έτος",
	"cal-goToBtn": "Πάω",
	prvMnth: "Προηγούμενος Μήνας: ",
	nxtMnth: "Επόμενος Μήνας: ",

	/* Lightbox */
	"lb-curr": "Αντικείμενο %curr% από ​​%total%",
	"lb-xhr-err": "Αυτό το περιεχόμενο απέτυχε για να φορτώσει.",
	"lb-img-err": "Αυτή η εικόνα απέτυχε για να φορτώσει.",

	/* Charts widget */
	"tbl-txt": "Τραπέζι",
	"tbl-dtls": "Διάγραμμα. Λεπτομέρειες στον ακόλουθο πίνακα.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Η συνεδρία σας θα λήξει αυτόματα στο #min# min #sec# sec.",
	"st-to-msg-end": "Επιλέξτε \"Συνέχεια συνεδρία\" να παρατείνει τη συνεδρία σας.",
	"st-msgbx-ttl": "Συνεδρία προειδοποίηση χρονικού ορίου",
	"st-alrdy-to-msg": "Μας συγχωρείτε συνεδρίας σας έχει ήδη λήξει. Παρακαλείστε να συνδεθείτε και πάλι.",
	"st-btn-cont": "Συνέχιση της συνόδου",
	"st-btn-end": "Τέλος συνόδου τώρα",

	/* Toggle details */
	"td-toggle": "Εναλλαγή όλα τα",
	"td-open": "Ανάπτυξη όλων",
	"td-close": "Σύμπτυξη όλων",
	"td-ttl-open": "Αναπτύξτε το όλες τις ενότητες του περιεχόμενο",
	"td-ttl-close": "Σύμπτυξη όλες τις ενότητες του περιεχόμενο",

	/* Table enhancement */
	sortAsc: ": την ενεργοποιήσει για την ταξινόμηση με αύξουσα σειρά",
	sortDesc: ": την ενεργοποιήσει για την φθίνουσα είδος",
	emptyTbl: "Δεν τα δεδομένα είναι διαθέσιμα στον πίνακα",
	infoEntr: "Εμφάνιση _START_ έως _END_ από _TOTAL_ καταχωρήσεις",
	infoEmpty: "Εμφάνιση 0 έως 0 από 0 καταχωρήσεις",
	infoFilt: "(φιλτράρεται από _MAX_ καταχωρήσεις)",
	info1000: "&#160;",
	lenMenu: "Εμφάνιση _MENU_ καταχωρήσεις",
	filter: "Φιλτράρισμα των στοιχείων",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Μεγέθυνση",
	"geo-zmout": "Σμίκρυνση",
	"geo-zmwrld": "Ζουμ να χαρτογραφήσει την έκταση",
	"geo-zmfeat": "Ζουμ στο στοιχείο",
	"geo-sclln": "Χάρτης κλίμακα",
	"geo-msepos": "Γεωγραφικό πλάτος και μήκος του δείκτη του ποντικιού",
	"geo-ariamap": "Χάρτης αντικείμενο. Οι περιγραφές των χαρακτηριστικών του χάρτη αναφέρονται στον πίνακα που ακολουθεί.",
	"geo-ally": "<strong>Οι χρήστες Πληκτρολόγιο:</strong> Όταν ο χάρτης είναι σε εστίαση, χρησιμοποιήστε τα πλήκτρα βέλους για να μετακινήσετε το χάρτη και τις συν και του ενεργητικού μείον τα τα πλήκτρα για να κάνετε ζουμ. Οι πλήκτρα με τα βέλη δεν θα τηγάνι το χάρτη όταν μεγεθύνεται στο βαθμό που χάρτη.",
	"geo-allyttl": "Οδηγίες: Χάρτης πλοήγησης",
	"geo-tgllyr": "Εναλλαγή την οθόνη του του στρώμα",
	"geo-hdnlyr": "Αυτό το στρώμα είναι κρυφές αυτή τη στιγμή.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Καναδάς χάρτη βάσης (αγγλικά ή γαλλικά)",
	"geo-sel": "Επιλέξτε το",
	"geo-lblsel": "Ελέγξτε τις για να επιλέξετε το στοιχείο σχετικά με την χάρτη",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Να αναφερθεί το όνομα της τοποθεσίας&#44; ταχυδρομικό κώδικα&#44; διεύθυνση (ταχυδρομική)&#44; ο αριθμός των NTS ...",
	"geo-loc-label": "Τοποθεσία",
	"geo-aoi-north": "βόρεια Προάστια",
	"geo-aoi-east": "Ανατολή",
	"geo-aoi-south": "Νότια",
	"geo-aoi-west": "Δύση",
	"geo-aoi-instructions": "Σχεδιάστε το πλαίσιο στο χάρτη ή πληκτρολογήστε τις συντεταγμένες παρακάτω και κάντε κλικ στο κουμπί \"Προσθήκη\".",
	"geo-aoi-btndraw": "Κλήρωση",
	"geo-aoi-btnclear": "Κατάργηση",
	"geo-geoloc-btn": "Ζουμ στην τρέχουσα θέση",
	"geo-geoloc-fail": "Τοποθεσία απέτυχε. Παρακαλούμε βεβαιωθείτε ότι οι υπηρεσίες τοποθεσίας ενεργοποιημένη.",
	"geo-geoloc-uncapable": "Localization δεν υποστηρίζεται από το πρόγραμμα περιήγησής σας.",
	"geo-lgnd-grphc": "Γραφικό Υπόμνημα για χάρτη στρώμα.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Σύνδεση Σε",

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
 * Locale: EL (Greek; ελληνικά)
 */
$.extend( $.validator.messages, {
	required: "Αυτό το πεδίο είναι υποχρεωτικό.",
	remote: "Παρακαλώ διορθώστε αυτό το πεδίο.",
	email: "Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email.",
	url: "Παρακαλώ εισάγετε ένα έγκυρο URL.",
	date: "Παρακαλώ εισάγετε μια έγκυρη ημερομηνία.",
	dateISO: "Παρακαλώ εισάγετε μια έγκυρη ημερομηνία (ISO).",
	number: "Παρακαλώ εισάγετε έναν έγκυρο αριθμό.",
	digits: "Παρακαλώ εισάγετε μόνο αριθμητικά ψηφία.",
	creditcard: "Παρακαλώ εισάγετε έναν έγκυρο αριθμό πιστωτικής κάρτας.",
	equalTo: "Παρακαλώ εισάγετε την ίδια τιμή ξανά.",
	extension: "Παρακαλώ εισάγετε μια τιμή με έγκυρη επέκταση αρχείου.",
	maxlength: $.validator.format( "Παρακαλώ εισάγετε μέχρι και {0} χαρακτήρες." ),
	minlength: $.validator.format( "Παρακαλώ εισάγετε τουλάχιστον {0} χαρακτήρες." ),
	rangelength: $.validator.format( "Παρακαλώ εισάγετε μια τιμή με μήκος μεταξύ {0} και {1} χαρακτήρων." ),
	range: $.validator.format( "Παρακαλώ εισάγετε μια τιμή μεταξύ {0} και {1}." ),
	max: $.validator.format( "Παρακαλώ εισάγετε μια τιμή μικρότερη ή ίση του {0}." ),
	min: $.validator.format( "Παρακαλώ εισάγετε μια τιμή μεγαλύτερη ή ίση του {0}." )
} );
return $;
}));

});