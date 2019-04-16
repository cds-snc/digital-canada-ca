/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Thai dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "th",
	"lang-native": "ภาษาไทย",
	add: "เพิ่ม",
	all: "ทั้งหมด",
	tphp: "ด้านบนของหน้า",
	load: "โหลด ...",
	process: "การประมวลผล ...",
	srch: "ค้นหา",
	"no-match": "ไม่มีการแข่งขันพบ",
	matches: {
		mixin: "[MIXIN] พบว่าตรงกัน"
	},
	current: "(ปัจจุบัน)",
	hide: "ปิดบัง",
	err: "ความผิดพลาด",
	colon: ":",
	hyphen: "-",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#173;",
	start: "เริ่มต้น",
	stop: "หยุด",
	back: "กลับ",
	cancel: "ยกเลิก",
	"min-ago": "นาทีที่ผ่านมา",
	"coup-mins": "ไม่กี่นาทีที่ผ่านมา",
	"mins-ago": {
		mixin: "[MIXIN] นาทีที่ผ่านมา"
	},
	"hour-ago": "ชั่วโมงที่ผ่านมา",
	"hours-ago": {
		mixin: "[MIXIN] ชั่วโมงที่ผ่านมา"
	},
	"days-ago": {
		mixin: "[MIXIN] วันที่ผ่านมา"
	},
	yesterday: "เมื่อวาน",

	nxt: "ต่อไป",
	"nxt-r": "ต่อไป (ปุ่มลูกศรขวา)",
	prv: "ก่อน",
	"prv-l": "ก่อน (คีย์ลูกศรซ้าย)",
	first: "แรก",
	last: "ล่าสุด",
	page: "Page",
	"srch-menus": "ค้นหาและเมนู",
	email: "อีเมล์",
	"menu-close": "ปิดเมนู",
	"overlay-close": "ปิดการแสดงข้อมูล",
	"esc-key": "(คีย์หนี)",
	show: "แสดง",

	/* Tabbed interface */
	"tab-rot": {
		off: "หยุดหมุนแท็บ",
		on: "เริ่มหมุนแท็บ"
	},
	"tab-list": "รายการแท็บ",
	"tab-pnl-end1": "ในตอนท้ายของแผงแท็บนี้",
	"tab-pnl-end2": "กลับไปที่รายการแท็บ",
	"tab-pnl-end3": "หรือดำเนินการต่อในส่วนที่เหลือของหน้า.",
	"tab-play": "เล่น",

	/* Multimedia player */
	"mmp-play": "เล่น",
	pause: "หยุด",
	open: "เปิด",
	close: "ปิด",
	volume: "ปริมาณ",
	mute: {
		on: "ปิด",
		off: "เปิดเสียง"
	},
	cc: {
		off: "ซ่อนปิด captioning",
		on: "แสดงปิด captioning"
	},
	"cc-err": "ข้อผิดพลาดคำอธิบายปิดโหลด",
	adesc: {
		on: "เปิดใช้งานคำอธิบายเสียง",
		off: "ปิดการใช้งานคำอธิบายเสียง"
	},
	pos: "ตำแหน่งปัจจุบัน:",
	dur: "รวมเวลา:",

	/* Share widget */
	"shr-txt": "แบ่งปัน",
	"shr-pg": "หน้านี้",
	"shr-vid": "วิดีโอนี้",
	"shr-aud": " ไฟล์เสียงนี้",
	"shr-hnt": "ด้วย {s} ",
	"shr-disc": "รับรองของผลิตภัณฑ์หรือบริการใด ๆ จะไม่มีการแสดงหรือโดยนัย.",

	/* Form validation */
	"frm-nosubmit": "รูปแบบไม่สามารถส่งเพราะ ",
	"errs-fnd": " พบข้อผิดพลาด.",
	"err-fnd": " ข้อผิดพลาดที่พบ.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "ซ่อนปฏิทิน",
	"date-show": "เลือกวันที่จากปฏิทินสำหรับเขต",
	"date-sel": "เลือก",

	/* Calendar */
	days: [
		"วันอาทิตย์",
		"วันจันทร์",
		"วันอังคาร",
		"วันพุธ",
		"วันพฤหัสบดี",
		"วันศุกร์",
		"วันเสาร์"
	],
	mnths: [
		"มกราคม",
		"กุมภาพันธ์",
		"มีนาคม",
		"เมษายน",
		"พฤษภาคม",
		"มิถุนายน",
		"กรกฎาคม",
		"สิงหาคม",
		"กันยายน",
		"ตุลาคม",
		"พฤศจิกายน",
		"ธันวาคม"
	],
	cal: "ปฏิทิน",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(วันที่ปัจจุบัน)",
	"cal-goToLnk": "ไป<span class=\"wb-inv\">เดือนของปี</span>",
	"cal-goToTtl": "ไปเดือนของปี",
	"cal-goToMnth": "เดือน:",
	"cal-goToYr": "ปี:",
	"cal-goToBtn": "ไป",
	prvMnth: "เดือนก่อน: ",
	nxtMnth: "เดือนถัดไป: ",

	/* Lightbox */
	"lb-curr": "%curr% รายการจาก %total%",
	"lb-xhr-err": "เนื้อหานี้ไม่สามารถโหลด.",
	"lb-img-err": "ภาพนี้ไม่สามารถโหลด.",

	/* Charts widget */
	"tbl-txt": "ตาราง",
	"tbl-dtls": "แผนภูมิ รายละเอียดในตารางต่อไปนี้.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "เซสชั่นของคุณจะหมดอายุโดยอัตโนมัติใน #min# นาที #sec# วินาที.ที่จะขยายเซสชั่นของคุณ",
	"st-to-msg-end": "เลือก \"Continue เซสชั่น\" ที่จะขยายเซสชั่นของคุณ",
	"st-msgbx-ttl": "เตือนหมดเวลา",
	"st-alrdy-to-msg": "ขออภัยเซสชันของคุณหมดอายุแล้ว กรุณาเข้าสู่ระบบอีกครั้ง.",
	"st-btn-cont": "ดำเนินการต่อเซสชั่น",
	"st-btn-end": "จบเซสชั่นในขณะนี้",

	/* Toggle details */
	"td-toggle": "สลับทั้งหมด",
	"td-open": "ขยายทั้งหมด",
	"td-close": "ย่อทั้งหมด",
	"td-ttl-open": "ขยายส่วนทั้งหมดของเนื้อหา",
	"td-ttl-close": "ยุบทุกส่วนของเนื้อหา",

	/* Table enhancement */
	sortAsc: ": เปิดใช้งานสำหรับการจัดเรียงจากน้อยไปมาก",
	sortDesc: ": เปิดใช้งานสำหรับการจัดเรียงจากมากไปน้อย",
	emptyTbl: "ไม่มีข้อมูลในตาราง",
	infoEntr: "แสดง _START_-_END_ จาก _TOTAL_ รายการ",
	infoEmpty: "แสดง 0-0 จาก 0 รายการ",
	infoFilt: "(กรองจาก _MAX_ รายการทั้งหมด)",
	info1000: ",",
	lenMenu: "แสดงรายการ _MENU_",
	filter: "กรองรายการ",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "ขยาย",
	"geo-zmout": "ย่อ",
	"geo-zmwrld": "การซูมที่ต้องการ map ขอบเขต",
	"geo-zmfeat": "ซูมไปที่องค์ประกอบ",
	"geo-sclln": "มาตราส่วนแผนที่",
	"geo-msepos": "ละติจูดและลองจิจูดของเคอร์เซอร์ของเมาส์",
	"geo-ariamap": "วัตถุแผนที่ คำอธิบายของคุณลักษณะแผนที่อยู่ในตารางด้านล่าง.",
	"geo-ally": "<strong>ผู้ใช้แป้นพิมพ์:</strong> เมื่อแผนที่จะอยู่ในโฟกัสใช้ปุ่มลูกศรเพื่อเลื่อนแผนที่และคีย์บวกและลบเพื่อซูม ปุ่มลูกศรจะไม่เลื่อนแผนที่เมื่อซูมที่มีขอบเขตแผนที่.",
	"geo-allyttl": "คำแนะนำ: แผนที่นำร่อง",
	"geo-tgllyr": "สลับการแสดงผลของชั้น",
	"geo-hdnlyr": "ชั้นนี้ซ่อนอยู่.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis-แคนาดาฐานแผนที่ (ภาษาอังกฤษหรือภาษาฝรั่งเศสเท่านั้น)",
	"geo-sel": "เลือก",
	"geo-lblsel": "ตรวจสอบเพื่อเลือกองค์ประกอบบนแผนที่",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "ระบุชื่อสถานที่&#44; รหัสไปรษณีย์ที่อยู่ (ไปรษณีย์) จำนวน NTS ...",
	"geo-loc-label": "ตำแหน่งที่ตั้ง",
	"geo-aoi-north": "เหนือ",
	"geo-aoi-east": "ทางทิศตะวันออก",
	"geo-aoi-south": "ใต้",
	"geo-aoi-west": "ทิศตะวันตก",
	"geo-aoi-instructions": "วาดกล่องบนแผนที่หรือป้อนพิกัดด้านล่างและคลิกที่ปุ่ม \"เพิ่ม\"",
	"geo-aoi-btndraw": "วาด",
	"geo-aoi-btnclear": "เอาออก",
	"geo-geoloc-btn": "ขยายไปยังสถานที่ปัจจุบัน",
	"geo-geoloc-fail": "ที่ล้มเหลว โปรดตรวจสอบว่าบริการสถานที่มีการใช้งาน",
	"geo-geoloc-uncapable": "ท้องถิ่นไม่ได้รับการสนับสนุนโดยเบราว์เซอร์ของคุณ",
	"geo-lgnd-grphc": "กราฟิกตำนานสำหรับชั้นแผนที่",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "เข้าสู่ระบบ",

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
 * Locale: TH (Thai; ไทย)
 */
$.extend( $.validator.messages, {
	required: "โปรดระบุ",
	remote: "โปรดแก้ไขให้ถูกต้อง",
	email: "โปรดระบุที่อยู่อีเมล์ที่ถูกต้อง",
	url: "โปรดระบุ URL ที่ถูกต้อง",
	date: "โปรดระบุวันที่ ที่ถูกต้อง",
	dateISO: "โปรดระบุวันที่ ที่ถูกต้อง (ระบบ ISO).",
	number: "โปรดระบุทศนิยมที่ถูกต้อง",
	digits: "โปรดระบุจำนวนเต็มที่ถูกต้อง",
	creditcard: "โปรดระบุรหัสบัตรเครดิตที่ถูกต้อง",
	equalTo: "โปรดระบุค่าเดิมอีกครั้ง",
	extension: "โปรดระบุค่าที่มีส่วนขยายที่ถูกต้อง",
	maxlength: $.validator.format( "โปรดอย่าระบุค่าที่ยาวกว่า {0} อักขระ" ),
	minlength: $.validator.format( "โปรดอย่าระบุค่าที่สั้นกว่า {0} อักขระ" ),
	rangelength: $.validator.format( "โปรดอย่าระบุค่าความยาวระหว่าง {0} ถึง {1} อักขระ" ),
	range: $.validator.format( "โปรดระบุค่าระหว่าง {0} และ {1}" ),
	max: $.validator.format( "โปรดระบุค่าน้อยกว่าหรือเท่ากับ {0}" ),
	min: $.validator.format( "โปรดระบุค่ามากกว่าหรือเท่ากับ {0}" )
} );
return $;
}));

});