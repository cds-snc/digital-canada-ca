/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Vietnamese dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "vi",
	"lang-native": "Tiếng Việt",
	add: "thêm vào",
	all: "Tất cả",
	tphp: "Trở về đầu trang",
	load: "tải ...",
	process: "xử lý ...",
	srch: "Tìm kiếm",
	"no-match": "Không hợp được tìm thấy",
	matches: {
		mixin: "[MIXIN] trận được tìm thấy"
	},
	current: "(hiện tại)",
	hide: "Che",
	err: "Lôi",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Bắt đầu",
	stop: "Thôi",
	back: "Lưng",
	cancel: "Hủy bỏ",
	"min-ago": "một phút trước",
	"coup-mins": "vài phút trước đây",
	"mins-ago": {
		mixin: "[MIXIN] phút trước"
	},
	"hour-ago": "một giờ trước đây",
	"hours-ago": {
		mixin: "[MIXIN] giờ trước"
	},
	"days-ago": {
		mixin: "[MIXIN] ngày trước"
	},
	yesterday: "hôm qua",

	nxt: "Tiếp theo",
	"nxt-r": "Tiếp theo (phím mũi tên bên phải)",
	prv: "Trang trước",
	"prv-l": "Trang trước (phím mũi tên trái)",
	first: "Đầu tiên",
	last: "Cuối cùng",
	page: "Page",
	"srch-menus": "Tìm kiếm và thực đơn",
	email: "Email",
	"menu-close": "Đóng menu",
	"overlay-close": "Đóng lớp phủ",
	"esc-key": "(phím thoát)",
	show: "Hiện",

	/* Tabbed interface */
	"tab-rot": {
		off: "Ngừng xoay tab",
		on: "Bắt đầu luân chuyển tab"
	},
	"tab-list": "Tab danh sách",
	"tab-pnl-end1": "Kết thúc của bảng điều khiển tab.",
	"tab-pnl-end2": "Quay trở lại danh sách tab",
	"tab-pnl-end3": "hoặc tiếp tục với phần còn lại của trang.",
	"tab-play": "Chơi",

	/* Multimedia player */
	"mmp-play": "Chơi",
	pause: "Tạm dừng",
	open: "Mở",
	close: "Đóng",
	volume: "Khối lượng",
	mute: {
		on: "Tắt",
		off: "Bật tiếng"
	},
	cc: {
		off: "Hide Đóng cửa phụ đề",
		on: "Hiện Đóng cửa phụ đề"
	},
	"cc-err": "Lỗi khi đang nạp chú thích đóng",
	adesc: {
		on: "Kích hoạt tính năng mô tả âm thanh",
		off: "Vô hiệu hoá mô tả âm thanh"
	},
	pos: "Chức vụ hiện tại:",
	dur: "Tổng thời gian:",

	/* Share widget */
	"shr-txt": "Chia",
	"shr-pg": " sẻ trang này",
	"shr-vid": " sẻ video này",
	"shr-aud": " tập tin âm thanh này",
	"shr-hnt": " với {s} ",
	"shr-disc": "Không có chứng thực của bất kỳ sản phẩm hoặc dịch vụ được thể hiện hay ngụ ý.",

	/* Form validation */
	"frm-nosubmit": "Dạng không thể được nộp bởi vì ",
	"errs-fnd": " lỗi đã được tìm thấy.",
	"err-fnd": " lỗi đã được tìm thấy.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Ẩn lịch",
	"date-show": "Chọn một ngày từ lịch cho lĩnh vực:",
	"date-sel": "Chọn",

	/* Calendar */
	days: [
		"Chủ Nhật",
		"Thứ Hai",
		"Thứ ba",
		"Thứ tư",
		"Thứ năm",
		"Thứ sáu",
		"Thứ bảy"
	],
	mnths: [
		"Tháng một",
		"Tháng Hai",
		"Biên giới",
		"Tháng Tư",
		"May",
		"Tháng Sáu",
		"Tháng Bảy",
		"Oai phong",
		"Tháng Chín",
		"Tháng Mười",
		"Tháng mười một",
		"Tháng mười hai"
	],
	cal: "Lịch",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(Ngày hiện tại)",
	"cal-goToLnk": "Tới tháng trong năm",
	"cal-goToTtl": "Tới tháng trong năm",
	"cal-goToMnth": "Tháng:",
	"cal-goToYr": "Năm:",
	"cal-goToBtn": "Đi",
	prvMnth: "Tháng trước: ",
	nxtMnth: "Tháng sau: ",

	/* Lightbox */
	"lb-curr": "Khoản %curr% của %total%",
	"lb-xhr-err": "Nội dung này không thể tải.",
	"lb-img-err": "Hình ảnh này không tải.",

	/* Charts widget */
	"tbl-txt": "Bảng",
	"tbl-dtls": "Chart. Thông tin chi tiết trong bảng dưới đây.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Phiên của bạn sẽ tự động hết hạn trong  #min# phút #sec# giây.",
	"st-to-msg-end": "Chọn \"Tiếp tục phiên\" mở rộng phiên của bạn.",
	"st-msgbx-ttl": "Cảnh báo phiên thời gian chờ",
	"st-alrdy-to-msg": "Xin lỗi phiên làm việc của bạn đã hết hạn. Bạn có thể đăng nhập lại.",
	"st-btn-cont": "tiếp tục phiên",
	"st-btn-end": "Kết thúc phiên tại",

	/* Toggle details */
	"td-toggle": "Chuyển đổi tất cả",
	"td-open": "Mở rộng tất cả",
	"td-close": "Thu gọn tất cả",
	"td-ttl-open": "Mở rộng tất cả các phần của nội dung",
	"td-ttl-close": "Thu gọn tất cả các phần của nội dung",

	/* Table enhancement */
	sortAsc: ": kích hoạt cho loại tăng dần",
	sortDesc: ": kích hoạt cho loại giảm dần",
	emptyTbl: "Không có dữ liệu có sẵn trong bảng",
	infoEntr: "Hiển thị từ _START_ đến _END_ của _TOTAL_ mục",
	infoEmpty: "Hiển thị từ 0 đến 0 của 0 mục",
	infoFilt: "(lọc từ tổng số _MAX_ mục)",
	info1000: ",",
	lenMenu: "Hiển thị _MENU_ mục",
	filter: "Lọc mặt hàng",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Phóng to",
	"geo-zmout": "Thu nhỏ",
	"geo-zmwrld": "Phóng to bản đồ mức độ",
	"geo-zmfeat": "Phóng to đến yếu tố",
	"geo-sclln": "tỷ lệ bản đồ",
	"geo-msepos": "Vĩ độ và kinh độ của con trỏ chuột",
	"geo-ariamap": "Bản đồ đối tượng. Những mô tả của các tính năng bản đồ trong bảng dưới đây.",
	"geo-ally": "Người sử dụng bàn phím: Khi bản đồ là tập trung, sử dụng các phím mũi tên để xoay bản đồ và các phím dấu cộng và trừ để phóng to. Các phím mũi tên sẽ không xoay bản đồ thu nhỏ đến mức độ bản đồ.",
	"geo-allyttl": "Hướng dẫn: Bản đồ Navigation",
	"geo-tgllyr": "Chuyển đổi các màn hình hiển thị của lớp",
	"geo-hdnlyr": "Lớp này hiện đang ẩn!",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Canada bản đồ cơ bản (tiếng Anh hoặc tiếng Pháp chỉ)",
	"geo-sel": "Chọn",
	"geo-lblsel": "Kiểm tra để chọn phần tử trên bản đồ",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Cho biết tên của địa điểm&#44; mã vùng&#44; địa chỉ (bưu điện)&#44; số lượng NTS ...",
	"geo-loc-label": "Nơi",
	"geo-aoi-north": "Bắc",
	"geo-aoi-east": "Đông",
	"geo-aoi-south": "Nam",
	"geo-aoi-west": "Tây",
	"geo-aoi-instructions": "Vẽ hộp trên bản đồ hoặc nhập tọa độ bên dưới và nhấp vào nút \"Add\".",
	"geo-aoi-btndraw": "Vẽ",
	"geo-aoi-btnclear": "Hủy bỏ",
	"geo-geoloc-btn": "Phóng to đến vị trí hiện tại",
	"geo-geoloc-fail": "Vị trí thất bại. Hãy đảm bảo rằng dịch vụ định vị được kích hoạt.",
	"geo-geoloc-uncapable": "Nội địa hóa không được hỗ trợ bởi trình duyệt của bạn.",
	"geo-lgnd-grphc": "Truyền thuyết đồ họa cho các lớp bản đồ.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Đăng nhập",

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
 * Locale: VI (Vietnamese; Tiếng Việt)
 */
$.extend( $.validator.messages, {
	required: "Hãy nhập.",
	remote: "Hãy sửa cho đúng.",
	email: "Hãy nhập email.",
	url: "Hãy nhập URL.",
	date: "Hãy nhập ngày.",
	dateISO: "Hãy nhập ngày (ISO).",
	number: "Hãy nhập số.",
	digits: "Hãy nhập chữ số.",
	creditcard: "Hãy nhập số thẻ tín dụng.",
	equalTo: "Hãy nhập thêm lần nữa.",
	extension: "Phần mở rộng không đúng.",
	maxlength: $.validator.format( "Hãy nhập từ {0} kí tự trở xuống." ),
	minlength: $.validator.format( "Hãy nhập từ {0} kí tự trở lên." ),
	rangelength: $.validator.format( "Hãy nhập từ {0} đến {1} kí tự." ),
	range: $.validator.format( "Hãy nhập từ {0} đến {1}." ),
	max: $.validator.format( "Hãy nhập từ {0} trở xuống." ),
	min: $.validator.format( "Hãy nhập từ {1} trở lên." )
} );
return $;
}));

});