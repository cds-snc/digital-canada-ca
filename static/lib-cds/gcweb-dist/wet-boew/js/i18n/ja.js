/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Japanese dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "ja",
	"lang-native": "日本語",
	add: "加える",
	all: "すべて",
	tphp: "ページの先頭",
	load: "ロード中･･･",
	process: "処理中･･･",
	srch: "検索",
	"no-match": "次の条件に一致する情報は見つかりませんでした。",
	matches: {
		mixin: "検索結果： [MIXIN] 件"
	},
	current: "（現在）",
	hide: "非表示",
	err: "エラー",
	colon: "：",
	hyphen: "-",
	"full-stop": "。",
	"comma-space": "、",
	space: "&#173;",
	start: "開始",
	stop: "終了",
	back: "戻る",
	cancel: "取消",
	"min-ago": "1分前",
	"coup-mins": "数分前",
	"mins-ago": {
		mixin: "[MIXIN] 分前"
	},
	"hour-ago": "1時間前",
	"hours-ago": {
		mixin: "[MIXIN] 時間前"
	},
	"days-ago": {
		mixin: "[MIXIN] 日前"
	},
	yesterday: "昨日",

	nxt: "次へ",
	"nxt-r": "次へ（右矢印キー）",
	prv: "前へ",
	"prv-l": "前へ（左矢印キー）",
	first: "最初",
	last: "最後",
	page: "Page",
	"srch-menus": "検索とメニュー",
	email: "メール",
	"menu-close": "メニューを閉じる",
	"overlay-close": "オーバーレイを閉じる",
	"esc-key": "(「Esc」キ)",
	show: "表示",

	/* Tabbed interface */
	"tab-rot": {
		off: "タブローテーションを停止",
		on: "タブローテーションを再生"
	},
	"tab-list": "タブリスト",
	"tab-pnl-end1": "最後のタブパネル",
	"tab-pnl-end2": "タブの一覧に戻る",
	"tab-pnl-end3": "または、ページの残りの部分に進む。",
	"tab-play": "再生",

	/* Multimedia player */
	"mmp-play": "再生",
	pause: "一時停止",
	open: "開く",
	close: "閉じる",
	volume: "音量",
	mute: {
		on: "ミュート",
		off: "ミュート解除"
	},
	cc: {
		off: "クローズドキャプションを非表示",
		on: "クローズドキャプションを表示"
	},
	"cc-err": "クローズドキャプションを実行できませんでした。",
	adesc: {
		on: "音声ガイドを有効にする",
		off: "音声ガイドを無効にする"
	},
	pos: "現在位置：",
	dur: "合計時間：",

	/* Share widget */
	"shr-txt": "共有",
	"shr-pg": "このページ",
	"shr-vid": "このビデオ",
	"shr-aud": "このオーディオファイル",
	"shr-hnt": "{s}と",
	"shr-disc": "製品またはサービスを推薦／保証するものではありません。",

	/* Form validation */
	"frm-nosubmit": "フォームを送信できませんでした。原因：",
	"errs-fnd": "複数のエラーが見つかりました。",
	"err-fnd": "エラーが見つかりました。",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "カレンダーを非表示",
	"date-show": "カレンダーから日付を選択：",
	"date-sel": "選択済み",

	/* Calendar */
	days: [
		"日曜日",
		"月曜日",
		"火曜日",
		"水曜日",
		"木曜日",
		"金曜日",
		"土曜日"
	],
	mnths: [
		"1月",
		"2月",
		"3月",
		"4月",
		"5月",
		"6月",
		"7月",
		"8月",
		"9月",
		"10月",
		"11月",
		"12月"
	],
	cal: "カレンダー",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "（今日）",
	"cal-goToLnk": "<span class=\"wb-inv\">月</span>に移動",
	"cal-goToTtl": "月移動",
	"cal-goToMnth": "月：",
	"cal-goToYr": "年：",
	"cal-goToBtn": "進む",
	prvMnth: "前の月へ",
	nxtMnth: "次の月へ",

	/* Lightbox */
	"lb-curr": "%total% 件中 %curr% 件目",
	"lb-xhr-err": "コンテンツをロードできませんでした。",
	"lb-img-err": "画像をロードできませんでした。",

	/* Charts widget */
	"tbl-txt": "表",
	"tbl-dtls": "チャート図。詳細については次の表を参照。",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "セッションは、 #min# 分 #sec# 秒で自動的に期限切れになります。",
	"st-to-msg-end": "選択はあなたのセッションを延長する\"セッションを続ける\"。",
	"st-msgbx-ttl": "セッションタイムアウト警告",
	"st-alrdy-to-msg": "セッションがタイムアウトしました。再度ログインを行なってください。",
	"st-btn-cont": "セッションを続行",
	"st-btn-end": "今セッションを終了します",

	/* Toggle details */
	"td-toggle": "表示形式を全て切り替える",
	"td-open": "全て開く",
	"td-close": "全て閉じる",
	"td-ttl-open": "コンテンツの全てのセクションを開く",
	"td-ttl-close": "コンテンツの全てのセクションを閉じる",

	/* Table enhancement */
	sortAsc: "：昇順ソートをオンにする",
	sortDesc: "：降順ソートをオンにする",
	emptyTbl: "表の中にデータがありません",
	infoEntr: "_TOTAL_エントリーの_START_から_END_までを表示",
	infoEmpty: "0エントリーのうち、0から0までを表示",
	infoFilt: "（合計_MAX_エントリーからフィルタリング）",
	info1000: ",",
	lenMenu: "_MENU_エントリーを表示",
	filter: "検索条件を指定する",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "ズームイン",
	"geo-zmout": "ズームアウト",
	"geo-zmwrld": "地図を最大に拡大表示する",
	"geo-zmfeat": "エレメントにズームイン",
	"geo-sclln": "地図の縮尺",
	"geo-msepos": "マウスカーソルの緯度と経度",
	"geo-ariamap": "地図オブジェクト。地図機能の詳細については以下を参照。",
	"geo-ally": "<strong>キーボードをお使いの方へ：</strong>地図が表示されたら、「矢印」キーで上下左右に移動したり、「＋」「－」キーで拡大・縮小できます。地図が最大に拡大表示されている時は、「矢印」キーを使って移動できません。",
	"geo-allyttl": "地図ナビゲーションの使い方",
	"geo-tgllyr": "レイヤーの表示・非表示の切り替え",
	"geo-hdnlyr": "このレイヤーは表示されていません。",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis-カナダベースマップ（英語またはフランス語のみ",
	"geo-sel": "選択",
	"geo-lblsel": "マップエレメントを選択",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "場所、郵便番号、住所（郵便）、エヌ·ティー·エスの数の名前を入力して...",
	"geo-loc-label": "場所",
	"geo-aoi-north": "北",
	"geo-aoi-east": "東",
	"geo-aoi-south": "南",
	"geo-aoi-west": "西",
	"geo-aoi-instructions": "Disegnare scatola sulla mappa o inserire le coordinate di sotto e fare clic sul pulsante \"Aggiungi\".",
	"geo-aoi-btndraw": "描く",
	"geo-aoi-btnclear": "削除する",
	"geo-geoloc-btn": "現在の場所にズーム",
	"geo-geoloc-fail": "場所は、失敗しました。位置情報サービスが有効になっていることを確認してください。",
	"geo-geoloc-uncapable": "ローカリゼーションは、お使いのブラウザでサポートされていません。",
	"geo-lgnd-grphc": "マップレイヤの凡例のグラフィック。",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "サインイン",

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
 * Locale: JA (Japanese; 日本語)
 */
$.extend( $.validator.messages, {
	required: "このフィールドは必須です。",
	remote: "このフィールドを修正してください。",
	email: "有効なEメールアドレスを入力してください。",
	url: "有効なURLを入力してください。",
	date: "有効な日付を入力してください。",
	dateISO: "有効な日付（ISO）を入力してください。",
	number: "有効な数字を入力してください。",
	digits: "数字のみを入力してください。",
	creditcard: "有効なクレジットカード番号を入力してください。",
	equalTo: "同じ値をもう一度入力してください。",
	extension: "有効な拡張子を含む値を入力してください。",
	maxlength: $.validator.format( "{0} 文字以内で入力してください。" ),
	minlength: $.validator.format( "{0} 文字以上で入力してください。" ),
	rangelength: $.validator.format( "{0} 文字から {1} 文字までの値を入力してください。" ),
	range: $.validator.format( "{0} から {1} までの値を入力してください。" ),
	step: $.validator.format( "{0} の倍数を入力してください。" ),
	max: $.validator.format( "{0} 以下の値を入力してください。" ),
	min: $.validator.format( "{0} 以上の値を入力してください。" )
} );
return $;
}));

});