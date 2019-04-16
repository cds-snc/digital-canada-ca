/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Ukrainian dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "uk",
	"lang-native": "Українська мова",
	add: "додавати",
	all: "Все",
	tphp: "На початок сторінки",
	load: "Завантаження ...",
	process: "оброблено ...",
	srch: "Пошук",
	"no-match": "Нічого не знайдено",
	matches: {
		mixin: "[MIXIN] знайдено"
	},
	current: "(поточна)",
	hide: "Сховати",
	err: "Помилка",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ",",
	space: "&#32;",
	start: "Старт",
	stop: "Стоп",
	back: "Повернутися",
	cancel: "Відміна",
	"min-ago": "хвилину тому",
	"coup-mins": "декілька хвилин тому",
	"mins-ago": {
		mixin: "[MIXIN] хвилин тому"
	},
	"hour-ago": "годину тому",
	"hours-ago": {
		mixin: "[MIXIN] годин тому"
	},
	"days-ago": {
		mixin: "[MIXIN] днів тому"
	},
	yesterday: "вчора",

	nxt: "Наступний",
	"nxt-r": "Наступний (клавішею стрілка вправо)",
	prv: "Попередній",
	"prv-l": "Попередній (клавішею ліва стрілка)",
	first: "Перший",
	last: "Oстанній",
	page: "Page",
	"srch-menus": "Пошук і меню",
	email: "Електронна пошта",
	"menu-close": "Закрийте меню",
	"overlay-close": "Закрийте допоміжних ліній",
	"esc-key": "(клавішею «escape»)",
	show: "Показати",

	/* Tabbed interface */
	"tab-rot": {
		off: "Зупинити ротацію вкладки",
		on: "Почати ротацію вкладки"
	},
	"tab-list": "Вкладка списку",
	"tab-pnl-end1": "Кінець  вкладці панелі.",
	"tab-pnl-end2": "Повернутися на вкладку списку",
	"tab-pnl-end3": "або продовжити до кінця сторінки.",
	"tab-play": "Програти",

	/* Multimedia player */
	"mmp-play": "Програти",
	pause: "Пауза",
	open: "Відкрити",
	close: "Закрити",
	volume: "Гучність",
	mute: {
		on: "Відключити звук",
		off: "Включити звук"
	},
	cc: {
		off: "Сховати субтитри",
		on: "Показати субтитри"
	},
	"cc-err": "Помилка завантаження субтитрів",
	adesc: {
		on: "Включитиаудіо деталі",
		off: "Відключити аудіо деталі"
	},
	pos: "Поточне положення:",
	dur: "Загальний час:",

	/* Share widget */
	"shr-txt": "Поділитись ",
	"shr-pg": " цією сторінкою",
	"shr-vid": " цим відео",
	"shr-aud": " це аудіо",
	"shr-hnt": "з {s}",
	"shr-disc": "Не мається на увазі схвалення або просування будь-яких продукції або послуг",

	/* Form validation */
	"frm-nosubmit": "Форма не подається через те, що",
	"errs-fnd": "знайдено помилки.",
	"err-fnd": "знайдено помилку.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Сховати календар",
	"date-show": "Оберіть дату в календарі:",
	"date-sel": "Вибрано",

	/* Calendar */
	days: [
		"Неділя",
		"Понеділок",
		"Вівторок",
		"Середа",
		"Четвер",
		"П’ятниця",
		"Субота"
	],
	mnths: [
		"Січень",
		"Лютий",
		"Березень",
		"Квітень",
		"Травень",
		"Червень",
		"Липень",
		"Серпень",
		"Вересень",
		"Жовтень",
		"Листопад",
		"Грудень"
	],
	cal: "Календар",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Поточний день)",
	"cal-goToLnk": "Перейти до<span class=\"wb-inv\"> місяця року</span>",
	"cal-goToTtl": "Перейти до місяця року",
	"cal-goToMnth": "Місяц:",
	"cal-goToYr": "Рік:",
	"cal-goToBtn": "Перейти",
	prvMnth: "Попередній місяць: ",
	nxtMnth: "Наступний місяць: ",

	/* Lightbox */
	"lb-curr": "Знайдено %curr% із %total%",
	"lb-xhr-err": "Цей зміст не завантажується.",
	"lb-img-err": "Це зображення не завантажується.",

	/* Charts widget */
	"tbl-txt": "Таблиця",
	"tbl-dtls": "Графік. Див. деталі в таблиці.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Ваш сеанс закінчиться автоматично в #min# хв #sec# сек .",
	"st-to-msg-end": "Виберіть \"Продовжити сеанс\" продовжити сесію.",
	"st-msgbx-ttl": "Попередження про закінчення сесії",
	"st-alrdy-to-msg": "Вибачте, сесія вже закінчилася. Будь ласка, увійдіть знову.",
	"st-btn-cont": "продовжити сеанс",
	"st-btn-end": "Завершити сеанс зараз",

	/* Toggle details */
	"td-toggle": "Згорнути все",
	"td-open": "Розгорнути все",
	"td-close": "Згорнути все",
	"td-ttl-open": "Розгорнути всі розділи змісту",
	"td-ttl-close": "Згорнути всі розділи змісту",

	/* Table enhancement */
	sortAsc: ": активація для сортування за зростанням ",
	sortDesc: ": активація для сортування за спаданням",
	emptyTbl: "Немає  даних у таблиці",
	infoEntr: "Показую з _START_ по _END_ з _TOTAL_ записів",
	infoEmpty: "Показую з 0 по 0 з 0 записів",
	infoFilt: "(Фільтрується від _MAX_ Всього записів)",
	info1000: ",",
	lenMenu: "Показати _MENU_ записів",
	filter: "Фільтр",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Збільшити",
	"geo-zmout": "Зменшити",
	"geo-zmwrld": "Збільшити до повного розміру",
	"geo-zmfeat": "Збільшення до елементу",
	"geo-sclln": "масштаб карти",
	"geo-msepos": "Широту і довготу курсору миші",
	"geo-ariamap": "Карта об'єктів. Опис функцій карти наведені в таблиці нижче.",
	"geo-ally": "<strong>Клавіатура користувачів:</strong> Коли карта знаходиться у фокусі, використовуйте клавіші зі стрілками для переміщення по карті і клавішами \"плюс\" і \"мінус\", щоб збільшити. Клавіши зі стрілками не переміщатимуть карту при її збільшенні у повній розмір. ",
	"geo-allyttl": "Інструкція: Карта навігації",
	"geo-tgllyr": "Включити показ шару",
	"geo-hdnlyr": "Цей шар прихований!",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Канада базової карти (англійською або французькою мовою)",
	"geo-sel": "Вибирати",
	"geo-lblsel": "Для обрання елементу на карті, відмітьте галочкою ",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Вкажіть назву місця&#44; поштовий індекс&#44; адреса (поштова)&#44; кількість НТС ...",
	"geo-loc-label": "Розташування",
	"geo-aoi-north": "На північ",
	"geo-aoi-east": "Схід",
	"geo-aoi-south": "Південь",
	"geo-aoi-west": "Захід",
	"geo-aoi-instructions": "Намалюйте вікно на карті або введіть координати нижче і натисніть кнопку \"Додати\".",
	"geo-aoi-btndraw": "Малювати",
	"geo-aoi-btnclear": "Видаляти",
	"geo-geoloc-btn": "Збільшити до поточного розташування",
	"geo-geoloc-fail": "Розташування не вдалося. Будь ласка, переконайтеся, що послуги визначення місця розташування включені.",
	"geo-geoloc-uncapable": "Локалізація не підтримується браузером.",
	"geo-lgnd-grphc": "Легенда графіка для шару карти.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Увійти",

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
 * Locale: UK (Ukrainian; українська мова)
 */
$.extend( $.validator.messages, {
	required: "Це поле необхідно заповнити.",
	remote: "Будь ласка, введіть правильне значення.",
	email: "Будь ласка, введіть коректну адресу електронної пошти.",
	url: "Будь ласка, введіть коректний URL.",
	date: "Будь ласка, введіть коректну дату.",
	dateISO: "Будь ласка, введіть коректну дату у форматі ISO.",
	number: "Будь ласка, введіть число.",
	digits: "Вводите потрібно лише цифри.",
	creditcard: "Будь ласка, введіть правильний номер кредитної карти.",
	equalTo: "Будь ласка, введіть таке ж значення ще раз.",
	extension: "Будь ласка, виберіть файл з правильним розширенням.",
	maxlength: $.validator.format( "Будь ласка, введіть не більше {0} символів." ),
	minlength: $.validator.format( "Будь ласка, введіть не менше {0} символів." ),
	rangelength: $.validator.format( "Будь ласка, введіть значення довжиною від {0} до {1} символів." ),
	range: $.validator.format( "Будь ласка, введіть число від {0} до {1}." ),
	max: $.validator.format( "Будь ласка, введіть число, менше або рівно {0}." ),
	min: $.validator.format( "Будь ласка, введіть число, більше або рівно {0}." )
} );
return $;
}));

});