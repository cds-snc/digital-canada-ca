/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Indonesian dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "id",
	"lang-native": "Bahasa Indonesia",
	add: "Menambahkan",
	all: "Semua",
	tphp: "Halaman Atas",
	load: "memuat ...",
	process: "pengolahan ...",
	srch: "Cari",
	"no-match": "Tidak ditemukan kecocokan",
	matches: {
		mixin: "Ditemukan [MIXIN] kecocokan"
	},
	current: "(saat ini)",
	hide: "Sembunyikan",
	err: "Error",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Mulai",
	stop: "Stop",
	back: "Kembali",
	cancel: "Batal",
	"min-ago": "Satu menit yang lalu",
	"coup-mins": "Beberapa menit yang lalu",
	"mins-ago": {
		mixin: "[MIXIN] menit yang lalu"
	},
	"hour-ago": "Satu jam yang lalu",
	"hours-ago": {
		mixin: "[MIXIN] hours ago"
	},
	"days-ago": {
		mixin: "[MIXIN] hari yang lalu"
	},
	yesterday: "Kemarin",

	nxt: "Berikutnya",
	"nxt-r": "Berikutnya (tombol panah kanan)",
	prv: "Sebelumnya",
	"prv-l": "Sebelumnya (tombol panah kiri)",
	first: "Pertama",
	last: "Terakhir",
	page: "Page",
	"srch-menus": "Cari dari menu",
	email: "Email",
	"menu-close": "Tutup menu",
	"overlay-close": "Tutup hamparan",
	"esc-key": "(tombol \"escape\")",
	show: "Tampilkan",

	/* Tabbed interface */
	"tab-rot": {
		off: "Hentikan rotasi tab",
		on: "Mulai rotasi tab"
	},
	"tab-list": "Daftar tab",
	"tab-pnl-end1": "Akhir panel tab ini.",
	"tab-pnl-end2": "Kembali ke daftar tab",
	"tab-pnl-end3": "atau melanjutkan ke seluruh halaman.",
	"tab-play": "Main",

	/* Multimedia player */
	"mmp-play": "Main",
	pause: "Jeda",
	open: "Buka",
	close: "Tutup",
	volume: "Volume",
	mute: {
		on: "Redam suara",
		off: "Aktifkan kembali suara"
	},
	cc: {
		off: "Sembunyikan subtitel",
		on: "Tampilkan subtitel"
	},
	"cc-err": "Galat saat memuat subtitel",
	adesc: {
		on: "Aktifkan deskripsi audio",
		off: "Deskripsi audio diaktifkan"
	},
	pos: "Posisi saat ini:",
	dur: "Total waktu:",

	/* Share widget */
	"shr-txt": "Berbagi",
	"shr-pg": " halaman ini",
	"shr-vid": " video ini",
	"shr-aud": " file musik ini",
	"shr-hnt": " dengan {s} ",
	"shr-disc": "Tidak ada dukungan dari produk atau jasa yang tersurat maupun tersi",

	/* Form validation */
	"frm-nosubmit": "Il modulo non poteva essere presentata in quanto ",
	"errs-fnd": " error ditemukan.",
	"err-fnd": " error ditemukan.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Sembunyikan kalender",
	"date-show": "Pilih satu tanggal pada kalender:",
	"date-sel": "Sudah dipilih",

	/* Calendar */
	days: [
		"Minggu",
		"Senin",
		"Selasa",
		"Rabu",
		"Kamis",
		"Jumat",
		"Sabtu"
	],
	mnths: [
		"Januari",
		"Februari",
		"Maret",
		"April",
		"Mei",
		"Juni",
		"Juli",
		"Agustus",
		"September",
		"Oktober",
		"November",
		"Desember"
	],
	cal: "Kalender",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "Hari ini",
	"cal-goToLnk": "Pilih<span class=\"invisible\"> bulan dan tahun</span>",
	"cal-goToTtl": "Pilih bulan dan tahun",
	"cal-goToMnth": "Bulan:",
	"cal-goToYr": "Tahun:",
	"cal-goToBtn": "Pilih",
	prvMnth: "Bulan sebelumnya: ",
	nxtMnth: "Bulan berikutnya: ",

	/* Lightbox */
	"lb-curr": "Artikel ke-%curr% dari %total%",
	"lb-xhr-err": "Halaman tidak berhasil ditampilkan.",
	"lb-img-err": "Gambar ini tidak berhasil ditampilkan.",

	/* Charts widget */
	"tbl-txt": "Tabel",
	"tbl-dtls": "Infografis. Detail pada tabel berikut.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Sesi Anda akan berakhir secara otomatis dalam #min# menit #sec# detik.",
	"st-to-msg-end": "Pilih \"Lanjutkan sesi\" untuk memperpanjang sesi Anda.",
	"st-msgbx-ttl": "Sesi batas waktu peringatan",
	"st-alrdy-to-msg": "Maaf sesi Anda sudah berakhir. Silahkan login kembali.",
	"st-btn-cont": "Lanjutkan sesi",
	"st-btn-end": "Mengakhiri sesi sekarang",

	/* Toggle details */
	"td-toggle": "Beralih semua",
	"td-open": "Memperluas semua",
	"td-close": "Tutup semua",
	"td-ttl-open": "Memperluas semua bagian dari konten",
	"td-ttl-close": "Perkecil semua bagian dari konten",

	/* Table enhancement */
	sortAsc: ": aktifkan untuk menaik semacam",
	sortDesc: ": aktifkan untuk turun semacam",
	emptyTbl: "Tidak ada data yang tersedia dalam tabel",
	infoEntr: "Menampilkan _START_ sampai _END_ dari _TOTAL_ entri",
	infoEmpty: "Menampilkan 0 sampai 0 dari 0 entri",
	infoFilt: "(disaring dari _MAX_ entri total)",
	info1000: ",",
	lenMenu: "Tampilkan _MENU_ entri",
	filter: "Filter artikel",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Perbesar",
	"geo-zmout": "Perkecil",
	"geo-zmwrld": "Zoom untuk memetakan sejauh",
	"geo-zmfeat": "Zoom ke elemen",
	"geo-sclln": "skala peta",
	"geo-msepos": "Lintang dan bujur dari kursor mouse",
	"geo-ariamap": "Peta objek. Deskripsi dari fitur peta dalam tabel di bawah ini.",
	"geo-ally": "<strong>Pengguna Keyboard:</strong> Bila peta dalam fokus, gunakan tombol panah untuk menggeser peta dan tombol plus dan minus untuk zoom. Tombol panah tidak akan menggeser peta ketika diperbesar sejauh peta.",
	"geo-allyttl": "Petunjuk: Peta navigasi",
	"geo-tgllyr": "Mengganti display lapisan",
	"geo-hdnlyr": "Lapisan ini saat ini tersembunyi.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Canada peta dasar (bahasa Inggris atau Perancis hanya)",
	"geo-sel": "Memilih",
	"geo-lblsel": "Periksa untuk memilih elemen pada peta",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Menunjukkan nama lokasi&#44; kode pos&#44; alamat (pos)&#44; jumlah NTS ...",
	"geo-loc-label": "Tempat",
	"geo-aoi-north": "Utara",
	"geo-aoi-east": "Timur",
	"geo-aoi-south": "Selatan",
	"geo-aoi-west": "Barat",
	"geo-aoi-instructions": "Menggambar kotak pada peta atau masukkan koordinat di bawah ini dan klik tombol \"Add\".",
	"geo-aoi-btndraw": "Menarik",
	"geo-aoi-btnclear": "Menghapus",
	"geo-geoloc-btn": "Zoom ke lokasi saat ini",
	"geo-geoloc-fail": "Lokalisasi gagal. Pastikan bahwa layanan lokasi diaktifkan.",
	"geo-geoloc-uncapable": "Lokalisasi tidak didukung oleh browser Anda.",
	"geo-lgnd-grphc": "Legenda grafis untuk layer peta.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Masuk",

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
 * Locale: ID (Indonesia; Indonesian)
 */
$.extend( $.validator.messages, {
	required: "Kolom ini diperlukan.",
	remote: "Harap benarkan kolom ini.",
	email: "Silakan masukkan format email yang benar.",
	url: "Silakan masukkan format URL yang benar.",
	date: "Silakan masukkan format tanggal yang benar.",
	dateISO: "Silakan masukkan format tanggal(ISO) yang benar.",
	number: "Silakan masukkan angka yang benar.",
	digits: "Harap masukan angka saja.",
	creditcard: "Harap masukkan format kartu kredit yang benar.",
	equalTo: "Harap masukkan nilai yg sama dengan sebelumnya.",
	maxlength: $.validator.format( "Input dibatasi hanya {0} karakter." ),
	minlength: $.validator.format( "Input tidak kurang dari {0} karakter." ),
	rangelength: $.validator.format( "Panjang karakter yg diizinkan antara {0} dan {1} karakter." ),
	range: $.validator.format( "Harap masukkan nilai antara {0} dan {1}." ),
	max: $.validator.format( "Harap masukkan nilai lebih kecil atau sama dengan {0}." ),
	min: $.validator.format( "Harap masukkan nilai lebih besar atau sama dengan {0}." )
} );
return $;
}));

});