/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Chinese (Simplified) dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "zh-Hans",
	"lang-native": "繁体字",
	add: "添加",
	all: "全部",
	tphp: "页首",
	load: "装载...",
	process: "处理...",
	srch: "搜索",
	"no-match": "无匹配结果",
	matches: {
		mixin: "找到[MIXIN]项目"
	},
	current: "（电流）",
	hide: "隐藏",
	err: "错误",
	colon: "：",
	hyphen: "-",
	"full-stop": "。",
	"comma-space": "，",
	space: "&#173;",
	start: "开始",
	stop: "停止",
	back: "返回",
	cancel: "取消",
	"min-ago": "一分钟前",
	"coup-mins": "一两分钟前",
	"mins-ago": {
		mixin: "[MIXIN]数分钟前"
	},
	"hour-ago": "一小时前",
	"hours-ago": {
		mixin: "[MIXIN]数小时前"
	},
	"days-ago": {
		mixin: "[MIXIN]数天前"
	},
	yesterday: "昨天",

	nxt: "下一个",
	"nxt-r": "下一个（右箭头键）",
	prv: "上一个",
	"prv-l": "上一个（左箭头键）",
	first: "开始",
	last: "末",
	page: "Page",
	"srch-menus": "搜索和菜单",
	email: "电釉",
	"menu-close": "关闭菜单",
	"overlay-close": "关闭叠加",
	"esc-key": "（逃生键）",
	show: "展示",

	/* Tabbed interface */
	"tab-rot": {
		off: "停止标签旋转",
		on: "开始标签旋转"
	},
	"tab-list": "标签列表",
	"tab-pnl-end1": "此选项卡面板的结束。",
	"tab-pnl-end2": "返回到标签列表",
	"tab-pnl-end3": "或继续其余的页面。",
	"tab-play": "播放",

	/* Multimedia player */
	"mmp-play": "播放",
	pause: "暂停",
	open: "打开",
	close: "关闭",
	volume: "音量",
	mute: {
		on: "静音",
		off: "打开声音"
	},
	cc: {
		off: "隐藏字幕",
		on: "打开字幕"
	},
	"cc-err": "加载字母错误",
	adesc: {
		on: "使用音频描述",
		off: "停止音频描述"
	},
	pos: "现在位置：",
	dur: "总时间：",

	/* Share widget */
	"shr-txt": "分享",
	"shr-pg": "该页面",
	"shr-vid": "该视频",
	"shr-aud": "这个音频文件",
	"shr-hnt": "与{s}",
	"shr-disc": "没有代言的任何产品或服务的明示或暗示的保证。",

	/* Form validation */
	"frm-nosubmit": "表格无法提交，因为",
	"errs-fnd": "找到错误。",
	"err-fnd": "找到错误。",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "隐藏日历",
	"date-show": "从日历选择一个日期：",
	"date-sel": "选中",

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
	cal: "日历",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "当天",
	"cal-goToLnk": "转到<span class=\"wb-inv\">月份的一年</span>",
	"cal-goToTtl": "转到月份的一年",
	"cal-goToMnth": "月份：",
	"cal-goToYr": "年份：",
	"cal-goToBtn": "去",
	prvMnth: "上个月：",
	nxtMnth: "下个月：",

	/* Lightbox */
	"lb-curr": "项目%curr%的%total%",
	"lb-xhr-err": "该内容无法下载。",
	"lb-img-err": "该图像无法下载。",

	/* Charts widget */
	"tbl-txt": "表格",
	"tbl-dtls": "图表。详细资料表如下。",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "#min#＃分#sec#秒，您的会话将自动失效。",
	"st-to-msg-end": "选择“继续会话”来扩展您的会话。",
	"st-msgbx-ttl": "会话超时警告",
	"st-alrdy-to-msg": "很抱歉，您的会话已经过期。请重新登录。",
	"st-btn-cont": "继续会话",
	"st-btn-end": "现在结束会话",

	/* Toggle details */
	"td-toggle": "切换所有",
	"td-open": "展开全部",
	"td-close": "关闭全部",
	"td-ttl-open": "展开所有部分的内容",
	"td-ttl-close": "关闭所有部分的内容",

	/* Table enhancement */
	sortAsc: ": 激活升序排序",
	sortDesc: "：激活降序排序",
	emptyTbl: "没有可用的数据表中的",
	infoEntr: "显示_START_到_END_的_TOTAL_10个项目",
	infoEmpty: "显示0到0的0个项目",
	infoFilt: "（共_MAX_项过滤）",
	info1000: ",",
	lenMenu: "显示_MENU_项",
	filter: "过滤项目",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "放大",
	"geo-zmout": "缩小",
	"geo-zmwrld": "缩放地图范围",
	"geo-zmfeat": "放大的元素",
	"geo-sclln": "地图比例尺",
	"geo-msepos": "纬度和经度的鼠标光标",
	"geo-ariamap": "地图对象。在地图上的功能的描述在下面的表中。",
	"geo-ally": "<strong>键盘用户：</strong>当在地图上的重点是，使用箭头键移动地图，并加号和减号键放大。箭头键将平移地图时，地图范围缩小到。",
	"geo-allyttl": "说明：地图导航",
	"geo-tgllyr": "该层的显示切换",
	"geo-hdnlyr": "这层隐藏。",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis-加拿大底图（英语或法语",
	"geo-sel": "选择",
	"geo-lblsel": "检查选择的元素在地图上",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "指示位置，邮编，地址（邮政），NTS数名...",
	"geo-loc-label": "位置",
	"geo-aoi-north": "北",
	"geo-aoi-east": "东方",
	"geo-aoi-south": "南",
	"geo-aoi-west": "西方",
	"geo-aoi-instructions": "抽奖箱在地图上或在下方输入坐标，然后点击“添加”按钮。",
	"geo-aoi-btndraw": "画",
	"geo-aoi-btnclear": "清除",
	"geo-geoloc-btn": "放大到当前位置",
	"geo-geoloc-fail": "位置失败。请确保该位置的服务被启用。",
	"geo-geoloc-uncapable": "本地化不是由您的浏览器支持。",
	"geo-lgnd-grphc": "传说中的图形在地图图层。",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "登录",

	/* Filter */
	"fltr-lbl": "Filter<span class=\"wb-inv\"> content: results appear below as you type.</span>",
	"fltr-info": "Showing _NBITEM_ filtered from _TOTAL_ total entries"
};

} )( wb );
