/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Turkish dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "tr",
	"lang-native": "Türkçe",
	add: "Eklemek",
	all: "Tüm",
	tphp: "Sayfa Başı",
	load: "yükleniyor ...",
	process: "işleme ...",
	srch: "Ara",
	"no-match": "Eşleşme bulunamadı",
	matches: {
		mixin: "[MIXIN] eşleşme bulundu"
	},
	current: "(güncel)",
	hide: "Sakla",
	err: "Hata",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Başla",
	stop: "Bitir",
	back: "Geri",
	cancel: "İptal",
	"min-ago": "bir dakika önce",
	"coup-mins": "birkaç dakika önce",
	"mins-ago": {
		mixin: "[MIXIN] dakika önce"
	},
	"hour-ago": "bir saat önce",
	"hours-ago": {
		mixin: "[MIXIN] saat önce"
	},
	"days-ago": {
		mixin: "[MIXIN] gün önce"
	},
	yesterday: "dün",

	nxt: "Bir sonraki",
	"nxt-r": "Bir sonraki (sağ ok tuşu)",
	prv: "Bir önceki",
	"prv-l": "Bir önceki (sol ok tuşu)",
	first: "İlk",
	last: "Son",
	page: "Page",
	"srch-menus": "Arama ve menüler",
	email: "E-posta",
	"menu-close": "Menüyü kapatmak",
	"overlay-close": "Bindirme kapatmak",
	"esc-key": "(escape tuşu)",
	show: "Göster",

	/* Tabbed interface */
	"tab-rot": {
		off: "Tab dönüşünü durdur",
		on: "Tab dönüşünü başlat"
	},
	"tab-list": "Tab listesi",
	"tab-pnl-end1": "Bu tab paneli sonu.",
	"tab-pnl-end2": "Tab listesine dön",
	"tab-pnl-end3": "ya da geri kalan sayfa devam etmektedir.",
	"tab-play": "Oynat",

	/* Multimedia player */
	"mmp-play": "Oynat",
	pause: "Duraklat",
	open: "Açık",
	close: "Kapat",
	volume: "Hacim",
	mute: {
		on: "Sessiz",
		off: "Sesi aç"
	},
	cc: {
		off: "Kapalı eklentileri gizle",
		on: "Kapalı eklentileri göster"
	},
	"cc-err": "Kapalı eklenti yükleme hatası",
	adesc: {
		on: "Sesli açıklama açık",
		off: "Sesli açıklama kapalı"
	},
	pos: "Geçerli pozisyon:",
	dur: "Toplam zaman:",

	/* Share widget */
	"shr-txt": "Paylaş",
	"shr-pg": " bu sayfayı",
	"shr-vid": " bu videoyu",
	"shr-aud": " bu ses dosyası",
	"shr-hnt": " ile {s} ",
	"shr-disc": "Herhangi bir ürün veya hizmet yok onaylandığı ifade ya da ima edilir.",

	/* Form validation */
	"frm-nosubmit": "Form gönderilemiyor, çünkü ",
	"errs-fnd": " hatalar bulundu.",
	"err-fnd": " hata bulundu.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Takvimi gizle",
	"date-show": "Alan için takvimden bir tarih seçiniz:",
	"date-sel": "Seçilmiş",

	/* Calendar */
	days: [
		"Pazar",
		"Pazartesi",
		"Salı",
		"Çarşamba",
		"Perşembe",
		"Cuma",
		"Cumartesi"
	],
	mnths: [
		"Ocak",
		"Şubat",
		"Mart",
		"Nisan",
		"Mayıs",
		"Haziran",
		"Temmuz",
		"Ağustos",
		"Eylül",
		"Ekim",
		"Kasım",
		"Aralık"
	],
	cal: "Takvim",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Geçerli gün)",
	"cal-goToLnk": "<span class=\"wb-inv\">Yılın ayına </span>Git",
	"cal-goToTtl": "Yılın ayına git",
	"cal-goToMnth": "Ay:",
	"cal-goToYr": "Yıl:",
	"cal-goToBtn": "Git",
	prvMnth: "Önceki ay: ",
	nxtMnth: "Sonraki ay: ",

	/* Lightbox */
	"lb-curr": "%total% de %curr% inci madde",
	"lb-xhr-err": "İçerik yükleme hatası.",
	"lb-img-err": "İmaj yükleme hatası.",

	/* Charts widget */
	"tbl-txt": "Tablo",
	"tbl-dtls": "Grafik. Detaylar takip eden tablodadır.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Oturumunuz #min# dk #sec# sn otomatik olarak sona erecek.",
	"st-to-msg-end": "turum uzatmak için \"oturum devam\" seçin.",
	"st-msgbx-ttl": "Oturum zaman aşımı uyarısı",
	"st-alrdy-to-msg": "Üzgünüz oturumu zaten doldu. Lütfen tekrar giriş yapın.",
	"st-btn-cont": "oturumu devam",
	"st-btn-end": "Şimdi oturumu bitirmek",

	/* Toggle details */
	"td-toggle": "Tüm geçiş",
	"td-open": "Hepsini aç",
	"td-close": "Hepsini kapa",
	"td-ttl-open": "Içeriğin tüm bölümleri aç",
	"td-ttl-close": "Içeriğin tüm bölümleri aç",

	/* Table enhancement */
	sortAsc: ": sıralama Artan için etkinleştirmek",
	sortDesc: ": sıralama azalan için etkinleştirmek",
	emptyTbl: "Resim verileri tablosu içinde mevcut olan",
	infoEntr: "_TOTAL_ girdi _END_ ile _START_ arası gösteriliyor",
	infoEmpty: "0 girdi 0 ile 0 arası gösteriliyor",
	infoFilt: "(_MAX_ toplam girişler filtrelenir)",
	info1000: ",",
	lenMenu: "_MENU_ girdileri göster",
	filter: "Maddeleri filtrele",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Yakınlaştır",
	"geo-zmout": "Uzaklaştır",
	"geo-zmwrld": "Ölçüde haritaya zoom",
	"geo-zmfeat": "Eleman yakınlaştırma",
	"geo-sclln": "Harita ölçeği",
	"geo-msepos": "Fare imleci enlem ve boylam",
	"geo-ariamap": "Harita nesne. Harita özellikleri açıklamaları aşağıdaki tabloda yer almaktadır.",
	"geo-ally": "<strong>Klavye kullanıcıları:</strong> harita odakta olduğunda, harita ve yakınlaştırmak için artı ve eksi tuşları kaydırmak için ok tuşlarını kullanın. Harita ölçüde yakınlaştırılmış zaman ok tuşları Haritayı kaydırmak olmaz.",
	"geo-allyttl": "Talimatlar: Harita navigasyon",
	"geo-tgllyr": "Katmanı ekran değişikliği",
	"geo-hdnlyr": "Bu katman şu anda gizli olduğu.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Kanada temel harita (İngilizce veya Fransızca sadece)",
	"geo-sel": "Seçmek",
	"geo-lblsel": "Harita üzerinde öğe seçmek için kontrol edin",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Konumu&#44; posta kodu&#44; adres (posta)&#44; NTS sayısının adını belirtin ...",
	"geo-loc-label": "Konum",
	"geo-aoi-north": "Kuzey",
	"geo-aoi-east": "Doğu",
	"geo-aoi-south": "Güney",
	"geo-aoi-west": "Batı",
	"geo-aoi-instructions": "Harita üzerinde kutusu çizmek ya da aşağıdaki koordinatları girin ve \"Ekle\" düğmesine tıklayın.",
	"geo-aoi-btndraw": "Çizmek",
	"geo-aoi-btnclear": "Kaldırmak",
	"geo-geoloc-btn": "Geçerli konuma yakınlaştırma",
	"geo-geoloc-fail": "Yer başarısız oldu. Yer hizmetleri etkin olduğundan emin olun.",
	"geo-geoloc-uncapable": "Yerelleştirme tarayıcınız tarafından desteklenmiyor.",
	"geo-lgnd-grphc": "Harita katmanı için efsane grafik.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Giriş Yapın",

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
 * Locale: TR (Turkish; Türkçe)
 */
$.extend( $.validator.messages, {
	required: "Bu alanın doldurulması zorunludur.",
	remote: "Lütfen bu alanı düzeltin.",
	email: "Lütfen geçerli bir e-posta adresi giriniz.",
	url: "Lütfen geçerli bir web adresi (URL) giriniz.",
	date: "Lütfen geçerli bir tarih giriniz.",
	dateISO: "Lütfen geçerli bir tarih giriniz(ISO formatında)",
	number: "Lütfen geçerli bir sayı giriniz.",
	digits: "Lütfen sadece sayısal karakterler giriniz.",
	creditcard: "Lütfen geçerli bir kredi kartı giriniz.",
	equalTo: "Lütfen aynı değeri tekrar giriniz.",
	extension: "Lütfen geçerli uzantıya sahip bir değer giriniz.",
	maxlength: $.validator.format( "Lütfen en fazla {0} karakter uzunluğunda bir değer giriniz." ),
	minlength: $.validator.format( "Lütfen en az {0} karakter uzunluğunda bir değer giriniz." ),
	rangelength: $.validator.format( "Lütfen en az {0} ve en fazla {1} uzunluğunda bir değer giriniz." ),
	range: $.validator.format( "Lütfen {0} ile {1} arasında bir değer giriniz." ),
	max: $.validator.format( "Lütfen {0} değerine eşit ya da daha küçük bir değer giriniz." ),
	min: $.validator.format( "Lütfen {0} değerine eşit ya da daha büyük bir değer giriniz." ),
	require_from_group: "Lütfen bu alanların en az {0} tanesini doldurunuz."
} );
return $;
}));

});