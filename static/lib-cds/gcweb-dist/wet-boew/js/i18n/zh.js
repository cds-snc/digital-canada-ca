/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Chinese dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "zh",
	"lang-native": "繁體字",
	add: "添加",
	all: "全部",
	tphp: "頁首",
	load: "下載中…",
	process: "處理...",
	srch: "搜尋",
	"no-match": "找不到合適項目",
	matches: {
		mixin: "找到[MIXIN]項目"
	},
	current: "目前",
	hide: "隱藏",
	err: "錯誤",
	colon: "：",
	hyphen: "-",
	"full-stop": "。",
	"comma-space": "，",
	space: "&#173;",
	start: "開始",
	stop: "停止",
	back: "返回",
	cancel: "取消",
	"min-ago": "一分鐘前",
	"coup-mins": "數分鐘前",
	"mins-ago": {
		mixin: "[MIXIN]分鐘前"
	},
	"hour-ago": "一小時前",
	"hours-ago": {
		mixin: "[MIXIN]數小時前"
	},
	"days-ago": {
		mixin: "[MIXIN]數天前"
	},
	yesterday: "昨天",

	nxt: "下一筆",
	"nxt-r": "下一筆（右箭頭鍵）",
	prv: "上一筆",
	"prv-l": "上一筆（左箭頭鍵）",
	first: "第一筆",
	last: "最後一筆",
	page: "Page",
	"srch-menus": "搜索和菜單",
	email: "電子郵件",
	"menu-close": "關閉菜單",
	"overlay-close": "關閉疊加",
	"esc-key": "（Esc鍵）",
	show: "顯示",

	/* Tabbed interface */
	"tab-rot": {
		off: "旋轉鍵-停止",
		on: "旋轉鍵-啟動"
	},
	"tab-list": "籤頁列表",
	"tab-pnl-end1": "此籤頁選項結束。",
	"tab-pnl-end2": "返回到籤頁列表",
	"tab-pnl-end3": "或繼續其餘的頁面。",
	"tab-play": "播放",

	/* Multimedia player */
	"mmp-play": "播放",
	pause: "暫停",
	open: "打開",
	close: "停止",
	volume: "音量",
	mute: {
		on: "靜音",
		off: "聲音"
	},
	cc: {
		off: "隱藏字幕",
		on: "顯示字幕"
	},
	"cc-err": "載入字幕錯誤",
	adesc: {
		on: "有音訊說明",
		off: "無音訊說明"
	},
	pos: "目前位置：",
	dur: "所有時間：",

	/* Share widget */
	"shr-txt": "分享",
	"shr-pg": "此頁",
	"shr-vid": "該視頻",
	"shr-aud": "這個音頻文件",
	"shr-hnt": "與{s}",
	"shr-disc": "沒有明示或暗示保證代言任何產品或服務。",

	/* Form validation */
	"frm-nosubmit": "本表格不能傳送因為",
	"errs-fnd": "內有錯誤。",
	"err-fnd": "出現錯誤。",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "隱藏行事曆",
	"date-show": "選擇一個日期：",
	"date-sel": "選擇",

	/* Calendar */
	days: [
		"星期天",
		"星期一",
		"星期二",
		"星期三",
		"星期四",
		"星期五",
		"星期六"
	],
	mnths: [
		"一月",
		"二月",
		"三月",
		"四月",
		"五月",
		"六月",
		"七月",
		"八月",
		"九月",
		"十月",
		"十一月",
		"十二月"
	],
	cal: "日曆",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "現在日期",
	"cal-goToLnk": "轉到<span class=\"wb-inv\">月份的一年</span>",
	"cal-goToTtl": "轉到某年的某月份",
	"cal-goToMnth": "月：",
	"cal-goToYr": "年：",
	"cal-goToBtn": "前往",
	prvMnth: "上一月：",
	nxtMnth: "下一月：",

	/* Lightbox */
	"lb-curr": "所有項目%curr%的%total%",
	"lb-xhr-err": "本內容無法載入。",
	"lb-img-err": "圖形無法顯示。",

	/* Charts widget */
	"tbl-txt": "表格",
	"tbl-dtls": "圖表，詳細內容在表格中。",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "#min#＃分#sec#秒，您的會話將自動失效。",
	"st-to-msg-end": "選擇“繼續會話”來擴展您的會話。",
	"st-msgbx-ttl": "連線超時警告",
	"st-alrdy-to-msg": "很抱歉，您的連線已經過期。請重新登錄。",
	"st-btn-cont": "繼續會話",
	"st-btn-end": "現在結束會話",

	/* Toggle details */
	"td-toggle": "切換所有",
	"td-open": "展開全部",
	"td-close": "關閉全部",
	"td-ttl-open": "展開所有內容",
	"td-ttl-close": "關閉所有的內容",

	/* Table enhancement */
	sortAsc: ": 使用大小排序",
	sortDesc: "：使用小大排序",
	emptyTbl: "沒有可用的數據",
	infoEntr: "顯示_START_到_END_的_TOTAL_個項目",
	infoEmpty: "顯示0到0的0個項目",
	infoFilt: "（共_MAX_項過濾）",
	info1000: ",",
	lenMenu: "顯示_MENU_項",
	filter: "過濾選項...",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "放大",
	"geo-zmout": "缩小",
	"geo-zmwrld": "縮放地圖範圍",
	"geo-zmfeat": "放大到元素",
	"geo-sclln": "地圖比例尺",
	"geo-msepos": "緯度和經度的鼠標光標",
	"geo-ariamap": "地圖物件。下表中描述上面地圖的功能。",
	"geo-ally": "<strong>鍵盤用戶：</strong>當在地圖上鎖定，使用箭頭鍵移動地圖，並用加號和減號鍵放大。若縮小到極限時，箭頭鍵將不會平移。",
	"geo-allyttl": "說明：地圖導航",
	"geo-tgllyr": "該層的顯示切換",
	"geo-hdnlyr": "這層隱藏。",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis-加拿大底圖（英語或法語",
	"geo-sel": "選擇",
	"geo-lblsel": "在地圖上檢查選擇的元素",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "指示位置，郵編，地址（郵政），NTS數名...",
	"geo-loc-label": "位置",
	"geo-aoi-north": "北",
	"geo-aoi-east": "東方",
	"geo-aoi-south": "南",
	"geo-aoi-west": "西方",
	"geo-aoi-instructions": "抽獎箱在地圖上或在下方輸入坐標，然後點擊“添加”按鈕。",
	"geo-aoi-btndraw": "畫",
	"geo-aoi-btnclear": "清除",
	"geo-geoloc-btn": "放大到當前位置",
	"geo-geoloc-fail": "位置失敗。請確保該位置的服務被啟用。",
	"geo-geoloc-uncapable": "本地化不是由您的瀏覽器支持。",
	"geo-lgnd-grphc": "傳說中的圖形在地圖圖層。",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "登入",

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
 * Locale: ZH (Chinese, 中文 (Zhōngwén), 汉语, 漢語)
 */
$.extend( $.validator.messages, {
	required: "这是必填字段",
	remote: "请修正此字段",
	email: "请输入有效的电子邮件地址",
	url: "请输入有效的网址",
	date: "请输入有效的日期",
	dateISO: "请输入有效的日期 (YYYY-MM-DD)",
	number: "请输入有效的数字",
	digits: "只能输入数字",
	creditcard: "请输入有效的信用卡号码",
	equalTo: "你的输入不相同",
	extension: "请输入有效的后缀",
	maxlength: $.validator.format( "最多可以输入 {0} 个字符" ),
	minlength: $.validator.format( "最少要输入 {0} 个字符" ),
	rangelength: $.validator.format( "请输入长度在 {0} 到 {1} 之间的字符串" ),
	range: $.validator.format( "请输入范围在 {0} 到 {1} 之间的数值" ),
	max: $.validator.format( "请输入不大于 {0} 的数值" ),
	min: $.validator.format( "请输入不小于 {0} 的数值" )
} );
return $;
}));

});