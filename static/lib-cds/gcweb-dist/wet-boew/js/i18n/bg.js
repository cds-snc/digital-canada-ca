/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Bulgarian dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "bg",
	"lang-native": "Български език",
	add: "Добави",
	all: "Всички",
	tphp: "Начало на страницата",
	load: "зарежда се ...",
	process: "Обработва се ...",
	srch: "Търсене",
	"no-match": "Не е съвпадение, установиха",
	matches: {
		mixin: "[MIXIN] открити съвпадения"
	},
	current: "(Текущи)",
	hide: "Крия",
	err: "Грешка",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Начало",
	stop: "Спиране",
	back: "Назад",
	cancel: "Отказ",
	"min-ago": "преди минута",
	"coup-mins": "Преди няколко минути",
	"mins-ago": {
		mixin: "[MIXIN] минути"
	},
	"hour-ago": "преди час",
	"hours-ago": {
		mixin: "[MIXIN] часа преди"
	},
	"days-ago": {
		mixin: "[MIXIN] дни"
	},
	yesterday: "вчера",

	nxt: "Следваща",
	"nxt-r": "Следваща (дясна стрелка)",
	prv: "Предишен",
	"prv-l": "Предишен (лява стрелка ключ)",
	first: "Първи",
	last: "Последно",
	page: "Page",
	"srch-menus": "Търсене и менюта",
	email: "Мейл",
	"menu-close": "Затворете менюто",
	"overlay-close": "Затворете наслагването",
	"esc-key": "(бягство ключ)",
	show: "Показване",

	/* Tabbed interface */
	"tab-rot": {
		off: "Спри да се върти раздела",
		on: "Започнете въртене раздела"
	},
	"tab-list": "Списък на разделите",
	"tab-pnl-end1": "В края на този раздел панел.",
	"tab-pnl-end2": "Назад към списъка раздела",
	"tab-pnl-end3": "или да продължат да останалата част от страницата.",
	"tab-play": "Играя",

	/* Multimedia player */
	"mmp-play": "Играя",
	pause: "Пауза",
	open: "Отворен",
	close: "Близо",
	volume: "Звука",
	mute: {
		on: "Изключване",
		off: "Вкл.звук"
	},
	cc: {
		off: "Скрий Затворени надписи",
		on: "Покажи Затворени надписи"
	},
	"cc-err": "Грешка при зареждане на затворени надписи",
	adesc: {
		on: "Активиране на аудио описание",
		off: "Изключване на аудио описание"
	},
	pos: "Позиция:",
	dur: "Общо време:",

	/* Share widget */
	"shr-txt": "Споделете",
	"shr-pg": " тази страница",
	"shr-vid": " този клип",
	"shr-aud": " този аудио файл",
	"shr-hnt": " с {s} ",
	"shr-disc": "Липса на одобрение на продукти или услуги, изрични или подразбиращи се",

	/* Form validation */
	"frm-nosubmit": "Форма не могат да се подават, тъй като ",
	"errs-fnd": " бяха открити грешки.",
	"err-fnd": " грешка е намерен.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Скриване на календара",
	"date-show": "Изберете дата от календара за областта:",
	"date-sel": "Подбран",

	/* Calendar */
	days: [
		"Неделя",
		"Понеделник",
		"Вторник",
		"Сряда",
		"Четвъртък",
		"Петък",
		"Събота"
	],
	mnths: [
		"Януари",
		"Февруари",
		"Март",
		"Април",
		"Май",
		"Юни",
		"Юли",
		"Август",
		"Септември",
		"Октомври",
		"Ноември",
		"Декември"
	],
	cal: "Календар",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Текущия ден)",
	"cal-goToLnk": "Отиди на<span class=\"wb-inv\"> месец на годината</span>",
	"cal-goToTtl": "Отиди на месец на годината",
	"cal-goToMnth": "Месец:",
	"cal-goToYr": "Година:",
	"cal-goToBtn": "Отивам",
	prvMnth: "Предходния месец: ",
	nxtMnth: "Следващия месец: ",

	/* Lightbox */
	"lb-curr": "Член %curr% от %total%",
	"lb-xhr-err": "Това съдържание не успя да се зареди.",
	"lb-img-err": "Това изображение не успя да се зареди.",

	/* Charts widget */
	"tbl-txt": "Маса",
	"tbl-dtls": "Графика. Подробности в таблицата по-долу.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Вашата сесия ще изтече автоматично в #min# мин. #sec# сек.",
	"st-to-msg-end": "Изберете \"Продължи сесия\" да се разшири вашата сесия.",
	"st-msgbx-ttl": "Предупреждение Изтекла сесия",
	"st-alrdy-to-msg": "За съжаление вашата сесия вече е изтекъл. Моля, влезте отново.",
	"st-btn-cont": "Продължи сесия",
	"st-btn-end": "Край на сесията сега",

	/* Toggle details */
	"td-toggle": "Превключване всички",
	"td-open": "Разгъване на всички",
	"td-close": "Свиване на всички",
	"td-ttl-open": "Разгъване на всички раздели на съдържание",
	"td-ttl-close": "Сгъване на всички раздели на съдържание",

	/* Table enhancement */
	sortAsc: "активира за възходящ вид",
	sortDesc: "активирате за низходяща вид",
	emptyTbl: "Няма налични данни в таблицата",
	infoEntr: "Показване _START_ до _END_ от общо _TOTAL_ вписвания",
	infoEmpty: "Показване 0 до 0 от общо 0 вписвания",
	infoFilt: "(филтрирани от _MAX_ всички записи)",
	info1000: ",",
	lenMenu: "Покажи _MENU_ вписвания",
	filter: "Филтриране на елементи",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Увеличаване на мащаба",
	"geo-zmout": "Намаляване на мащаба",
	"geo-zmwrld": "Мащаба, за да картата степен",
	"geo-zmfeat": "Увеличите до елемента",
	"geo-sclln": "Карта мащаб",
	"geo-msepos": "Географска ширина и дължина на курсора на мишката",
	"geo-ariamap": "Карта обект. Описанията на картата функции са в таблицата по-долу.",
	"geo-ally": "Клавиатура потребители: Когато картата е на фокус, използвайте клавишите със стрелки, за да се придвижвате карта и бутоните плюс и минус за увеличение. Клавишите със стрелки, които не са ще видиш картата когато увеличени картата степен.",
	"geo-allyttl": "Инструкции: навигационна карта",
	"geo-tgllyr": "Превключване на дисплея на слоя",
	"geo-hdnlyr": "Този слой в момента е скрит.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Канада основната карта (на английски или френски език)",
	"geo-sel": "Изберете",
	"geo-lblsel": "Проверете, за да изберете елемента на картата",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Посочете името на мястото&#44; пощенски код&#44; адрес (пощенски)&#44; броят на НТС ...",
	"geo-loc-label": "Място",
	"geo-aoi-north": "На север",
	"geo-aoi-east": "Изток",
	"geo-aoi-south": "Юг",
	"geo-aoi-west": "Запад",
	"geo-aoi-instructions": "Равен кутия на картата или въведете координатите по-долу и кликнете върху бутона \"Добави\".",
	"geo-aoi-btndraw": "Равенство",
	"geo-aoi-btnclear": "Премахнете",
	"geo-geoloc-btn": "Увеличите към текущото местоположение",
	"geo-geoloc-fail": "Местоположение провали. Моля, уверете се, че местоположението услуги са разрешени.",
	"geo-geoloc-uncapable": "Локализация не се поддържа от вашия браузър.",
	"geo-lgnd-grphc": "Legend графичен за карта слой.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Вход",

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
 * Locale: BG (Bulgarian; български език)
 */
$.extend( $.validator.messages, {
	required: "Полето е задължително.",
	remote: "Моля, въведете правилната стойност.",
	email: "Моля, въведете валиден email.",
	url: "Моля, въведете валидно URL.",
	date: "Моля, въведете валидна дата.",
	dateISO: "Моля, въведете валидна дата (ISO).",
	number: "Моля, въведете валиден номер.",
	digits: "Моля, въведете само цифри.",
	creditcard: "Моля, въведете валиден номер на кредитна карта.",
	equalTo: "Моля, въведете същата стойност отново.",
	extension: "Моля, въведете стойност с валидно разширение.",
	maxlength: $.validator.format( "Моля, въведете повече от {0} символа." ),
	minlength: $.validator.format( "Моля, въведете поне {0} символа." ),
	rangelength: $.validator.format( "Моля, въведете стойност с дължина между {0} и {1} символа." ),
	range: $.validator.format( "Моля, въведете стойност между {0} и {1}." ),
	max: $.validator.format( "Моля, въведете стойност по-малка или равна на {0}." ),
	min: $.validator.format( "Моля, въведете стойност по-голяма или равна на {0}." )
} );
return $;
}));

});