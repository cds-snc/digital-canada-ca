/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Russian dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "ru",
	"lang-native": "Русский язык",
	add: "добавлять",
	all: "Все",
	tphp: "Наверх",
	load: "Загрузка ...",
	process: "обработки ...",
	srch: "Поиск",
	"no-match": "Соответствий не найдено",
	matches: {
		mixin: "[MIXIN] cоответствий найдено"
	},
	current: "(текущая)",
	hide: "Скрыть",
	err: "Ошибка",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Начать",
	stop: "Стоп",
	back: "Назад",
	cancel: "Отменить",
	"min-ago": "минуту назад",
	"coup-mins": "пару минут назад",
	"mins-ago": {
		mixin: "[MIXIN] минут назад"
	},
	"hour-ago": "час назад",
	"hours-ago": {
		mixin: "[MIXIN] часов назад"
	},
	"days-ago": {
		mixin: "[MIXIN] дней назад"
	},
	yesterday: "вчера",

	nxt: "Следующий",
	"nxt-r": "Следующий (клавишей стрелка вправо)",
	prv: "Предыдущий",
	"prv-l": "Предыдущий (клавишей стрелка влево)",
	first: "Первое",
	last: "Последнее",
	page: "Page",
	"srch-menus": "Поиск и меню",
	email: "E-mail",
	"menu-close": "Закройте меню",
	"overlay-close": "Закройте вспомогательных линий",
	"esc-key": "(клавишей Escape)",
	show: "Показать",

	/* Tabbed interface */
	"tab-rot": {
		off: "Остановить ротацию вкладки",
		on: "Начать ротацию вкладки"
	},
	"tab-list": "Вкладка списка",
	"tab-pnl-end1": "Конец этой вкладке панели.",
	"tab-pnl-end2": "Вернитесь на вкладку список",
	"tab-pnl-end3": "или продолжать остальной страницы.",
	"tab-play": "Проиграть",

	/* Multimedia player */
	"mmp-play": "Проиграть",
	pause: "Пауза",
	open: "Oткрыть",
	close: "Закрыть",
	volume: "Громкость",
	mute: {
		on: "Отключение звука",
		off: "Включить звук"
	},
	cc: {
		off: "Скрыть Субтитры",
		on: "Показать Субтитры"
	},
	"cc-err": "Ошибка загрузки субтитров",
	adesc: {
		on: "Включить описание аудио",
		off: "Отключить Описание аудио"
	},
	pos: "Текущая позиция:",
	dur: "Общее время:",

	/* Share widget */
	"shr-txt": "Поделиться",
	"shr-pg": " ссылкой на страницу",
	"shr-vid": " этим видео",
	"shr-aud": " это аудио",
	"shr-hnt": " с {s} ",
	"shr-disc": "Нет одобрение любых продуктов или услуг, выраженных или подразумеваемых.",

	/* Form validation */
	"frm-nosubmit": "Формы не могут быть представлены, потому что ",
	"errs-fnd": " были обнаружены ошибки.",
	"err-fnd": " была обнаружена ошибка.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Скрыть календарь",
	"date-show": "Выберите дату из календаря для поля:",
	"date-sel": "Выбранный",

	/* Calendar */
	days: [
		"Воскресенье",
		"Понедельник",
		"Вторник",
		"Среда",
		"Четверг",
		"Пятница",
		"Суббота"
	],
	mnths: [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь"
	],
	cal: "Календарь",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Текущий день)",
	"cal-goToLnk": "Перейти к<span class=\"wb-inv\"> месяцу года</span>",
	"cal-goToTtl": "Перейти к месяцу года",
	"cal-goToMnth": "Месяц:",
	"cal-goToYr": "Год:",
	"cal-goToBtn": "Перейти",
	prvMnth: "Предыдущий месяц: ",
	nxtMnth: "Следующий месяц: ",

	/* Lightbox */
	"lb-curr": "Пункт %curr% из %total%",
	"lb-xhr-err": "Этот контент не удалось загрузить.",
	"lb-img-err": "Это изображение не удалось загрузить.",

	/* Charts widget */
	"tbl-txt": "Таблица",
	"tbl-dtls": "График. Подробности в таблице ниже.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Ваш сеанс закончится автоматически в #min# мин #sec# сек.",
	"st-to-msg-end": "Выберите \"Продолжить сеанс\" продлить сессию.",
	"st-msgbx-ttl": "Предупреждение сессия тайм-аут",
	"st-alrdy-to-msg": "Извините сеанс уже истек. Пожалуйста, войдите снова.",
	"st-btn-cont": "Продолжить сеанс",
	"st-btn-end": "Завершить сеанс сейчас",

	/* Toggle details */
	"td-toggle": "Свернуть все",
	"td-open": "Развернуть все",
	"td-close": "Свернуть все",
	"td-ttl-open": "Развернуть все разделы содержания",
	"td-ttl-close": "Свернуть все разделы содержания",

	/* Table enhancement */
	sortAsc: ": aктивировать для сортировке по возрастанию",
	sortDesc: ": aктивировать для сортировки по убыванию",
	emptyTbl: "Не имеется никаких данных в таблице",
	infoEntr: "Показываю с _START_ по _END_ из _TOTAL_ записей",
	infoEmpty: "Показываю с 0 по 0 из 0 записей",
	infoFilt: "(фильтруется от _MAX_ Всего записей)",
	info1000: ",",
	lenMenu: "Показать _MENU_ записей",
	filter: "Фильтровать",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Приблизить",
	"geo-zmout": "Отдалить",
	"geo-zmwrld": "Увеличить для сопоставления степени",
	"geo-zmfeat": "Увеличение до элемента",
	"geo-sclln": "масштаб карты",
	"geo-msepos": "Широту и долготу курсора мыши",
	"geo-ariamap": "Карта объектов. Описание функций карты приведены в таблице ниже.",
	"geo-ally": "<strong>Клавиатура пользователей:</strong> Когда карта находится в фокусе, используйте клавиши со стрелками для перемещения по карте и плюс и минус ключи, чтобы увеличить. Стрелками не будет перемещения по карте при увеличении на карту степени.",
	"geo-allyttl": "Инструкция: Карта навигации",
	"geo-tgllyr": "Включить показ слоя",
	"geo-hdnlyr": "Этот слой скрыт.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Канада базовой карты (на английском или французском языке)",
	"geo-sel": "Выбирать",
	"geo-lblsel": "Проверьте, чтобы выбрать элемент на карте",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Укажите название места&#44; почтовый индекс&#44; адрес (почтовый)&#44; количество НТС ...",
	"geo-loc-label": "Pасположение",
	"geo-aoi-north": "К северу",
	"geo-aoi-east": "Восток",
	"geo-aoi-south": "Юг",
	"geo-aoi-west": "Запад",
	"geo-aoi-instructions": "Нарисуйте окно на карте или введите координаты ниже и нажмите кнопку \"Добавить\".",
	"geo-aoi-btndraw": "Рисовать",
	"geo-aoi-btnclear": "Удалять",
	"geo-geoloc-btn": "Увеличить к текущему местоположению",
	"geo-geoloc-fail": "Расположение не удалось. Пожалуйста, убедитесь, что услуги определения местоположения включены.",
	"geo-geoloc-uncapable": "Локализация не поддерживается браузером.",
	"geo-lgnd-grphc": "Легенда графика для слоя карты.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Войти",

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
 * Locale: RU (Russian; русский язык)
 */
$.extend( $.validator.messages, {
	required: "Это поле необходимо заполнить.",
	remote: "Пожалуйста, введите правильное значение.",
	email: "Пожалуйста, введите корректный адрес электронной почты.",
	url: "Пожалуйста, введите корректный URL.",
	date: "Пожалуйста, введите корректную дату.",
	dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
	number: "Пожалуйста, введите число.",
	digits: "Пожалуйста, вводите только цифры.",
	creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
	equalTo: "Пожалуйста, введите такое же значение ещё раз.",
	extension: "Пожалуйста, выберите файл с правильным расширением.",
	maxlength: $.validator.format( "Пожалуйста, введите не больше {0} символов." ),
	minlength: $.validator.format( "Пожалуйста, введите не меньше {0} символов." ),
	rangelength: $.validator.format( "Пожалуйста, введите значение длиной от {0} до {1} символов." ),
	range: $.validator.format( "Пожалуйста, введите число от {0} до {1}." ),
	max: $.validator.format( "Пожалуйста, введите число, меньшее или равное {0}." ),
	min: $.validator.format( "Пожалуйста, введите число, большее или равное {0}." )
} );
return $;
}));

});