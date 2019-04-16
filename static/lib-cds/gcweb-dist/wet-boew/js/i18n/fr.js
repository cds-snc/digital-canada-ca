/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- French dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "fr",
	"lang-native": "Français",
	add: "Ajouter",
	all: "Tous",
	tphp: "Haut de la page",
	load: "chargement...",
	process: "traitement...",
	srch: "Recherche",
	"no-match": "Aucune correspondance trouvée",
	matches: {
		mixin: "[MIXIN] correspondance(s) trouvées"
	},
	current: "(actuel)",
	hide: "Masquer",
	err: "Erreur",
	colon: "&#160;:",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Lancer",
	stop: "Arrêter",
	back: "Précédent",
	cancel: "Annuler",
	"min-ago": "il y a une minute",
	"coup-mins": "il y a quelques minutes",
	"mins-ago": {
		mixin: "il y a [MIXIN] minutes"
	},
	"hour-ago": "il y a une heure",
	"hours-ago": {
		mixin: "il y a [MIXIN] heures"
	},
	"days-ago": {
		mixin: "il y a [MIXIN] jours"
	},
	yesterday: "hier",

	nxt: "Suivant",
	"nxt-r": "Suivant (touche droite)",
	prv: "Précédent",
	"prv-l": "Précédent (touche gauche)",
	first: "Premier",
	last: "Dernier",
	page: "Page",
	"srch-menus": "Recherche et menus",
	email: "Courriel",
	"menu-close": "Fermer le menu",
	"overlay-close": "Fermer la fenêtre superposée",
	"esc-key": "(touche d'échappement)",
	show: "Afficher",

	/* Tabbed interface */
	"tab-rot": {
		off: "Arrêter la rotation d'onglets",
		on: "Lancer la rotation d'onglets"
	},
	"tab-list": "Liste des onglets",
	"tab-pnl-end1": "Fin de ce panneau à onglets.",
	"tab-pnl-end2": "Retourner à la liste des onglets",
	"tab-pnl-end3": "ou continuer au reste de la page.",
	"tab-play": "Lancer",

	/* Multimedia player */
	"mmp-play": "Lire",
	pause: "Pause",
	open: "Ouvrir",
	close: "Fermer",
	volume: "Volume",
	mute: {
		on: "Activer le mode muet",
		off: "Désactiver le mode muet"
	},
	cc: {
		off: "Masquer le sous-titrage",
		on: "Afficher le sous-titrage"
	},
	"cc-err": "Erreur dans le chargement des sous-titres",
	adesc: {
		on: "Activer l'audiodescription",
		off: "Désactiver l'audiodescription"
	},
	pos: "Position actuelle :",
	dur: "Temps total :",

	/* Share widget */
	"shr-txt": "Partagez",
	"shr-pg": " cette page",
	"shr-vid": " cette vidéo",
	"shr-aud": " ce fichier audio",
	"shr-hnt": " avec {s} ",
	"shr-disc": "Aucun appui n’est accordé, soit de façon expresse ou tacite, à aucun produit ou service.",

	/* Form validation */
	"frm-nosubmit": "Le formulaire n'a pu être soumis car ",
	"errs-fnd": " erreurs ont été trouvées.",
	"err-fnd": " erreur a été trouvée.",
	"err-correct": "(Corriger et resoumettre)",

	/* Date picker */
	"date-hide": "Masquer le calendrier",
	"date-show": "Sélectionner une date à partir d'un calendrier pour le champ:",
	"date-sel": "Sélectionné",

	/* Calendar */
	days: [
		"Dimanche",
		"Lundi",
		"Mardi",
		"Mercredi",
		"Jeudi",
		"Vendredi",
		"Samedi"
	],
	mnths: [
		"janvier",
		"février",
		"mars",
		"avril",
		"mai",
		"juin",
		"juillet",
		"août",
		"septembre",
		"octobre",
		"novembre",
		"décembre"
	],
	cal: "Calendrier",
	"cal-format": "<span class='wb-inv'>{ddd}, </span>{d}<span class='wb-inv'> {M} {Y}</span>",
	currDay: "(Jour courrant)",
	"cal-goToLnk": "Aller au<span class=\"wb-inv\"> mois de l'année</span>",
	"cal-goToTtl": "Aller au mois de l'année",
	"cal-goToMnth": "Mois :",
	"cal-goToYr": "Année :",
	"cal-goToBtn": "Aller",
	prvMnth: "Mois précédent : ",
	nxtMnth: "Mois suivant : ",

	/* Lightbox */
	"lb-curr": "Article %curr% de %total%",
	"lb-xhr-err": "Le chargement de ce contenu a échoué.",
	"lb-img-err": "Le chargement de cette image a échoué.",

	/* Charts widget */
	"tbl-txt": "Tableau",
	"tbl-dtls": "Graphique. Plus de détails dans le tableau suivant.",
	"chrt-cmbslc": "Quartier regroupé",

	/* Session timeout */
	"st-to-msg-bgn": "Votre session expirera automatiquement dans #min# min #sec# sec.",
	"st-to-msg-end": "Sélectionner « Continuer la session » pour prolonger votre session.",
	"st-msgbx-ttl": "Avertissement d'expiration de la session",
	"st-alrdy-to-msg": "Désolé, votre session a déjà expiré. S'il vous plaît ouvrir une nouvelle session.",
	"st-btn-cont": "Continuer la session",
	"st-btn-end": "Mettre fin à la session",

	/* Toggle details */
	"td-toggle": "Basculer tout",
	"td-open": "Afficher tout",
	"td-close": "Réduire tout",
	"td-ttl-open": "Afficher toutes les sections de contenu",
	"td-ttl-close": "Réduire toutes les sections de contenu",

	/* Table enhancement */
	sortAsc: "&#160;: activer pour tri ascendant",
	sortDesc: "&#160;: activer pour tri descendant",
	emptyTbl: "Aucune donnée n'est disponible dans le tableau",
	infoEntr: "Affiche _START_ à _END_ de _TOTAL_ entrées",
	infoEmpty: "Affiche 0 à 0 de 0 entrées",
	infoFilt: "(filtré de _MAX_ entrées totales)",
	info1000: "&#160;",
	lenMenu: "Afficher _MENU_ entrées",
	filter: "Filtrer les articles",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Zoom avant",
	"geo-zmout": "Zoom arrière",
	"geo-zmwrld": "Zoom sur l'étendue de la carte",
	"geo-zmfeat": "Zoom à l'élément",
	"geo-sclln": "Échelle de la carte",
	"geo-msepos": "Latitude et longitude du curseur de la souris",
	"geo-ariamap": "Objet de la carte. Les descriptions des caractéristiques de la carte se trouvent dans la table ci-dessous.",
	"geo-ally": "<strong>Utilisateurs de clavier :</strong> Lorsque la carte a l'attention, utiliser les touches flèches pour déplacer la carte et utiliser les touches plus et négatif pour faire un zoom. La carte ne peut être déplacée lorsque le zoom est à son étendue maximal.",
	"geo-allyttl": "Instructions : comment naviguer dans la carte",
	"geo-tgllyr": "Basculer l'affichage de la couche",
	"geo-hdnlyr": "Cette couche est présentement cachée.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBCT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBCT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=fr",
	"geo-attrttl": "GéoGratis - Carte de base du Canada",
	"geo-sel": "Sélectionnez",
	"geo-lblsel": "Cochez pour sélectionner cet élément sur la carte",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/fr/locate",
	"geo-loc-placeholder": "Indiquer le nom de l&#39;endroit&#44; le code postal&#44; l&#39;adresse (postale)&#44; le numéro du SNRC...",
	"geo-loc-label": "Location",
	"geo-aoi-north": "Nord",
	"geo-aoi-east": "Est",
	"geo-aoi-south": "Sud",
	"geo-aoi-west": "Ouest",
	"geo-aoi-instructions": "Délimiter un territoire sur la carte ou entrer les coordonnées ci-dessous, puis cliquer sur le bouton &#171;&#160;Ajouter&#160;&#187;.",
	"geo-aoi-btndraw": "Tracer",
	"geo-aoi-btnclear": "Enlever",
	"geo-geoloc-btn": "Zoom sur votre position actuelle",
	"geo-geoloc-fail": "Localisation a échoué. S'il vous plaît s'assurer que les services de localisation sont activés.",
	"geo-geoloc-uncapable": "Localisation n'est pas supporté par votre navigateur.",
	"geo-lgnd-grphc": "Graphique légende couche cartographique.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Passer à la version HTML simplifiée",
	"wb-enable": "Passer à la version standard",
	"disable-notice-h": "Avis : Version HTML simplifiée",
	"disable-notice": "Vous naviguez présentement sur la version HTML simplifiée de cette page. Certaines fonctionnalités peuvent être déactivées.",

	/* Dismissable content */
	"dismiss": "Écarter",

	/* Template */
	"tmpl-signin": "Ouvrir une session",

	/* Filter */
	"fltr-lbl": "Filtrer<span class=\"wb-inv\"> le contenu: Les résultats s'afficherons au moment même de la saisie.</span>",
	"fltr-info": "Affiche _NBITEM_ de _TOTAL_ éléments filtrés."
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
 * Locale: FR (French; français)
 */
$.extend( $.validator.messages, {
	required: "Ce champ est obligatoire.",
	remote: "Veuillez corriger ce champ.",
	email: "Veuillez fournir une adresse électronique valide.",
	url: "Veuillez fournir une adresse URL valide.",
	date: "Veuillez fournir une date valide.",
	dateISO: "Veuillez fournir une date valide (ISO).",
	number: "Veuillez fournir un numéro valide.",
	digits: "Veuillez fournir seulement des chiffres.",
	creditcard: "Veuillez fournir un numéro de carte de crédit valide.",
	equalTo: "Veuillez fournir encore la même valeur.",
	notEqualTo: "Veuillez fournir une valeur différente, les valeurs ne doivent pas être identiques.",
	extension: "Veuillez fournir une valeur avec une extension valide.",
	maxlength: $.validator.format( "Veuillez fournir au plus {0} caractères." ),
	minlength: $.validator.format( "Veuillez fournir au moins {0} caractères." ),
	rangelength: $.validator.format( "Veuillez fournir une valeur qui contient entre {0} et {1} caractères." ),
	range: $.validator.format( "Veuillez fournir une valeur entre {0} et {1}." ),
	max: $.validator.format( "Veuillez fournir une valeur inférieure ou égale à {0}." ),
	min: $.validator.format( "Veuillez fournir une valeur supérieure ou égale à {0}." ),
	step: $.validator.format( "Veuillez fournir une valeur multiple de {0}." ),
	maxWords: $.validator.format( "Veuillez fournir au plus {0} mots." ),
	minWords: $.validator.format( "Veuillez fournir au moins {0} mots." ),
	rangeWords: $.validator.format( "Veuillez fournir entre {0} et {1} mots." ),
	letterswithbasicpunc: "Veuillez fournir seulement des lettres et des signes de ponctuation.",
	alphanumeric: "Veuillez fournir seulement des lettres, nombres, espaces et soulignages.",
	lettersonly: "Veuillez fournir seulement des lettres.",
	nowhitespace: "Veuillez ne pas inscrire d'espaces blancs.",
	ziprange: "Veuillez fournir un code postal entre 902xx-xxxx et 905-xx-xxxx.",
	integer: "Veuillez fournir un nombre non décimal qui est positif ou négatif.",
	vinUS: "Veuillez fournir un numéro d'identification du véhicule (VIN).",
	dateITA: "Veuillez fournir une date valide.",
	time: "Veuillez fournir une heure valide entre 00:00 et 23:59.",
	phoneUS: "Veuillez fournir un numéro de téléphone valide.",
	phoneUK: "Veuillez fournir un numéro de téléphone valide.",
	mobileUK: "Veuillez fournir un numéro de téléphone mobile valide.",
	strippedminlength: $.validator.format( "Veuillez fournir au moins {0} caractères." ),
	email2: "Veuillez fournir une adresse électronique valide.",
	url2: "Veuillez fournir une adresse URL valide.",
	creditcardtypes: "Veuillez fournir un numéro de carte de crédit valide.",
	ipv4: "Veuillez fournir une adresse IP v4 valide.",
	ipv6: "Veuillez fournir une adresse IP v6 valide.",
	require_from_group: "Veuillez fournir au moins {0} de ces champs.",
	nifES: "Veuillez fournir un numéro NIF valide.",
	nieES: "Veuillez fournir un numéro NIE valide.",
	cifES: "Veuillez fournir un numéro CIF valide.",
	postalCodeCA: "Veuillez fournir un code postal valide."
} );
return $;
}));

});