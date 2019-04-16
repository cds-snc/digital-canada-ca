/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Arabic dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "ar",
	"lang-native": "العربية",
	add: "إضافة",
	all: "جميع",
	tphp: "أعلى الصفحة",
	load: "   تحميل ...",
	process: "تجهيز ...",
	srch: "البحث",
	"no-match": "لا نتائج تذكر لل",
	matches: {
		mixin: "العثور على [MIXIN] مباريات"
	},
	current: "(الحالي)",
	hide: "إخفاء",
	err: "خطأ",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": "، ",
	space: "&#32;",
	start: "بداية",
	stop: "توقف",
	back: "ظهر",
	cancel: "إلغاء",
	"min-ago": "منذ دقيقة واحدة",
	"coup-mins": "بضع دقائق قبل",
	"mins-ago": {
		mixin: "منذ [MIXIN] دقيقة"
	},
	"hour-ago": "قبل ساعة",
	"hours-ago": {
		mixin: "منذ [MIXIN] ساعات"
	},
	"days-ago": {
		mixin: "منذ [MIXIN] أيام"
	},
	yesterday: "أمس",

	nxt: "التالي",
	"nxt-r": "مفتاح السهم الأيمن - التالي",
	prv: "سابق",
	"prv-l": "مفتاح السهم الأيسر - سابق",
	first: "الأول",
	last: "آخر",
	page: "Page",
	"srch-menus": "البحث والقوائم",
	email: "البريد الإلكتروني",
	"menu-close": "إغلاق القائمة",
	"overlay-close": "إغلاق تراكب",
	"esc-key": "مفتاح الهروب",
	show: "عرض",

	/* Tabbed interface */
	"tab-rot": {
		off: "ايقاف الدوران علامة التبويب",
		on: "بدء دوران التبويب"
	},
	"tab-list": "علامة التبويب قائمة",
	"tab-pnl-end1": "نهاية هذا الفريق التبويب.",
	"tab-pnl-end2": "العودة إلى قائمة التبويب",
	"tab-pnl-end3": "أو الاستمرار في بقية الصفحة.",
	"tab-play": "لعب",

	/* Multimedia player */
	"mmp-play": "لعب",
	pause: "وقفة",
	open: "فتح",
	close: "أغلق",
	volume: "جهارة الصوت",
	mute: {
		on: "كتم",
		off: "إلغاء كتمه"
	},
	cc: {
		off: "أغلقت إخفاء السفلية",
		on: "أغلقت تظهر السفلية"
	},
	"cc-err": "خطأ في تحميل تعليق مغلق",
	adesc: {
		on: "تمكين الوصف السمعي",
		off: "تعطيل الوصف السمعي"
	},
	pos: "الوظيفة الحالية:",
	dur: "إجمالي الوقت:",

	/* Share widget */
	"shr-txt": "مشاركة",
	"shr-pg": " هذه الصفحة",
	"shr-vid": " هذا الفيديو",
	"shr-aud": " هذا الملف الصوتي",
	"shr-hnt": " مع {s} ",
	"shr-disc": "وأعرب عن تأييد أي أي منتجات أو خدمات أو ضمنية.",

	/* Form validation */
	"frm-nosubmit": "لا يمكن أن تقدم على شكل ل ",
	"errs-fnd": " تم العثور على أخطاء.",
	"err-fnd": " تم العثور على خطأ.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "إخفاء التقويم",
	"date-show": "اختيار تاريخ من التقويم لحقل:",
	"date-sel": "مختار",

	/* Calendar */
	days: [
		"الأحد",
		"يوم الاثنين",
		"الثلاثاء",
		"الأربعاء",
		"الخميس",
		"الجمعة",
		"السبت"
	],
	mnths: [
		"يناير",
		"فبراير",
		"مسيرة",
		"أبريل",
		"قد",
		"يونيو",
		"يوليو",
		"أغسطس",
		"سبتمبر",
		"أكتوبر",
		"نوفمبر",
		"ديسمبر"
	],
	cal: "تقويم",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(اليوم الحالي)",
	"cal-goToLnk": "<span class=\"wb-inv\">انتقل إلى الشهر </span>من العام",
	"cal-goToTtl": "انتقل إلى الشهر من العام",
	"cal-goToMnth": "الشهر:",
	"cal-goToYr": "العام:",
	"cal-goToBtn": "تذهب",
	prvMnth: "الشهر الماضي: ",
	nxtMnth: "الشهر المقبل: ",

	/* Lightbox */
	"lb-curr": "البند %curr% من %total%",
	"lb-xhr-err": "فشل هذا المحتوى ليتم تحميلها.",
	"lb-img-err": "فشلت هذه الصورة ليتم تحميلها.",

	/* Charts widget */
	"tbl-txt": "جدول",
	"tbl-dtls": "الرسم البياني. التفاصيل في الجدول التالي.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "سوف تنتهي جلسة العمل الخاصة بك تلقائيا في على  #min# دقيقة #sec# ثانية.",
	"st-to-msg-end": "اختر \"متابعة الجلسة\" لتمديد جلسة العمل الخاصة بك.",
	"st-msgbx-ttl": "الدورة مهلة الإنذار",
	"st-alrdy-to-msg": "عذرا انتهت صلاحية جلسة العمل الخاصة بك بالفعل. يرجى تسجيل الدخول مرة أخرى.",
	"st-btn-cont": "تستمر الدورة",
	"st-btn-end": "إنهاء جلسة الآن",

	/* Toggle details */
	"td-toggle": "تبديل جميع",
	"td-open": "توسيع الكل",
	"td-close": "طي الكل",
	"td-ttl-open": "توسيع كافة أقسام محتوى",
	"td-ttl-close": "انهيار جميع قطاعات المحتوى",

	/* Table enhancement */
	sortAsc: ": تفعيل لنوع تصاعدي",
	sortDesc: ": تفعيل لفرز تنازلي",
	emptyTbl: "لا تتوفر بيانات في الجدول",
	infoEntr: "عرض _START_ إلى _END_ من _TOTAL_ مقالات",
	infoEmpty: "عرض 0 إلى 0 من 0 مقالات",
	infoFilt: "(تمت تصفيتها في الفترة من _MAX_ مجموع المقالات)",
	info1000: ",",
	lenMenu: "عرض _MENU_ مقالات",
	filter: "تصفية العناصر",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "تكبير",
	"geo-zmout": "تصغير",
	"geo-zmwrld": "التكبير لتعيين حد",
	"geo-zmfeat": "تكبير إلى العنصر",
	"geo-sclln": "خريطة نطاق",
	"geo-msepos": "خطوط الطول والعرض من مؤشر الماوس",
	"geo-ariamap": "خريطة الكائن. أوصاف الميزات الخريطة هي في الجدول أدناه.",
	"geo-ally": "<strong>مستخدمي لوحة المفاتيح:</strong> عندما الخريطة هي في التركيز، استخدم مفاتيح الأسهم لتحريك الخريطة ومفاتيح زائد وناقص لتكبير. فإن مفاتيح الأسهم لا تحريك الخريطة عند التكبير إلى حد الخريطة.",
	"geo-allyttl": "تعليمات: خريطة الملاحة",
	"geo-tgllyr": "تبديل عرض طبقة",
	"geo-hdnlyr": "حاليا يتم إخفاء هذه الطبقة.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - كندا قاعدة الخريطة (الإنجليزية أو الفرنسية فقط)",
	"geo-sel": "حدد",
	"geo-lblsel": "تحقق لتحديد عنصر على الخريطة",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "تشير إلى اسم الموقع، والرمز البريدي والعنوان (البريدي)، وعدد من NTS ...",
	"geo-loc-label": "موقع",
	"geo-aoi-north": "شمال",
	"geo-aoi-east": "شرق",
	"geo-aoi-south": "جنوب",
	"geo-aoi-west": "غرب",
	"geo-aoi-instructions": "مربع رسم على الخريطة أو أدخل إحداثيات أدناه وانقر على زر \"إضافة\".",
	"geo-aoi-btndraw": "رسم",
	"geo-aoi-btnclear": "نزع",
	"geo-geoloc-btn": "التكبير لموقعك الحالي",
	"geo-geoloc-fail": "فشل الموقع. يرجى التأكد من أن يتم تمكين خدمات الموقع.",
	"geo-geoloc-uncapable": "غير معتمد التعريب بواسطة المتصفح الخاص بك.",
	"geo-lgnd-grphc": "رسم خريطة لأسطورة طبقة.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "تسجيل الدخول",

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
 * Locale: AR (Arabic; العربية)
 */
$.extend( $.validator.messages, {
	required: "هذا الحقل إلزامي",
	remote: "يرجى تصحيح هذا الحقل للمتابعة",
	email: "رجاء إدخال عنوان بريد إلكتروني صحيح",
	url: "رجاء إدخال عنوان موقع إلكتروني صحيح",
	date: "رجاء إدخال تاريخ صحيح",
	dateISO: "رجاء إدخال تاريخ صحيح (ISO)",
	number: "رجاء إدخال عدد بطريقة صحيحة",
	digits: "رجاء إدخال أرقام فقط",
	creditcard: "رجاء إدخال رقم بطاقة ائتمان صحيح",
	equalTo: "رجاء إدخال نفس القيمة",
	extension: "رجاء إدخال ملف بامتداد موافق عليه",
	maxlength: $.validator.format( "الحد الأقصى لعدد الحروف هو {0}" ),
	minlength: $.validator.format( "الحد الأدنى لعدد الحروف هو {0}" ),
	rangelength: $.validator.format( "عدد الحروف يجب أن يكون بين {0} و {1}" ),
	range: $.validator.format( "رجاء إدخال عدد قيمته بين {0} و {1}" ),
	max: $.validator.format( "رجاء إدخال عدد أقل من أو يساوي {0}" ),
	min: $.validator.format( "رجاء إدخال عدد أكبر من أو يساوي {0}" )
} );
return $;
}));

});