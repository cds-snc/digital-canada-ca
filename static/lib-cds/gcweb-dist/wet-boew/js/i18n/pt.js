/*
* Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
* wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
*/
/*
----- Portuguese dictionary (il8n) ---
*/
( function( wb ) {
"use strict";

/* main index */
wb.i18nDict = {
	"lang-code": "pt",
	"lang-native": "Português",
	add: "Adicionar",
	all: "Todos",
	tphp: "Início da Página",
	load: "carregamento ...",
	process: "processamento ...",
	srch: "Buscar",
	"no-match": "Nenhuma correspondência encontrada",
	matches: {
		mixin: "[MIXIN] Encontrada(s) correspondência(s)"
	},
	current: "(atual)",
	hide: "Ocultar",
	err: "Erro",
	colon: ":",
	hyphen: " - ",
	"full-stop": ".",
	"comma-space": ", ",
	space: "&#32;",
	start: "Iniciar",
	stop: "Parar",
	back: "Anterior",
	cancel: "Cancelar",
	"min-ago": "há um minuto",
	"coup-mins": "há dois minutos",
	"mins-ago": {
		mixin: "há [MIXIN] minutos"
	},
	"hour-ago": "há uma hora",
	"hours-ago": {
		mixin: "há [MIXIN] horas"
	},
	"days-ago": {
		mixin: "há [MIXIN] dias"
	},
	yesterday: "ontem",

	nxt: "Próximo",
	"nxt-r": "Próximo (tecla seta para a direita)",
	prv: "Anterior",
	"prv-l": "Anterior (tecla seta para a esquerda)",
	first: "Primeiro",
	last: "Último",
	page: "Page",
	"srch-menus": "Pesquisa e menus",
	email: "Correio eletrônico",
	"menu-close": "Fechar o menu",
	"overlay-close": "Feche a sobreposição",
	"esc-key": "(botão ESC)",
	show: "Exibir",

	/* Tabbed interface */
	"tab-rot": {
		off: "Interromper a rotação das abas",
		on: "Iniciar a rotação das abas"
	},
	"tab-list": "Lista Tab",
	"tab-pnl-end1": "Final deste painel da guia.",
	"tab-pnl-end2": "Voltar para a lista de guias",
	"tab-pnl-end3": "ou continuar com o resto da página.",
	"tab-play": "Executar",

	/* Multimedia player */
	"mmp-play": "Executar",
	pause: "Pausar",
	open: "Abrir",
	close: "Fechar",
	volume: "Volume",
	mute: {
		on: "Ativar o modo silencioso",
		off: "Desativar o modo silencioso"
	},
	cc: {
		off: "Ocultar a legenda",
		on: "Mostrar a legenda"
	},
	"cc-err": "Ocorreu um erro no carregamento da legenda",
	adesc: {
		on: "Ativar a descrição de áudio",
		off: "Desativar a descrição de áudio"
	},
	pos: "Posição atual:",
	dur: "Tempo total:",

	/* Share widget */
	"shr-txt": "Compartilhar",
	"shr-pg": " esta página",
	"shr-vid": " este vídeo",
	"shr-aud": " este arquivo de áudio",
	"shr-hnt": " com {s} ",
	"shr-disc": "Não endosso de quaisquer produtos ou serviços é expressa ou implícita",

	/* Form validation */
	"frm-nosubmit": "O formulário não pode ser submetido porque ",
	"errs-fnd": " erros encontrados.",
	"err-fnd": " erro encontrado.",
	"err-correct": "(Correct and resubmit)",

	/* Date picker */
	"date-hide": "Ocultar o calendário",
	"date-show": "Selecionar uma data de um calendário para o campo:",
	"date-sel": "Selecionado",

	/* Calendar */
	days: [
		"Domingo",
		"Segunda-feira",
		"Terça-feira",
		"Quarta-feira",
		"Quinta-feira",
		"Sexta-feira",
		"Sábado"
	],
	mnths: [
		"Janeiro",
		"Fevereiro",
		"Março",
		"Abril",
		"Maio",
		"Junho",
		"Julho",
		"Agosto",
		"Setembro",
		"Outubro",
		"Novembro",
		"Dezembro"
	],
	cal: "Calendário",
	"cal-format": "<span class='wb-inv'>{ddd}, {M} </span>{d}<span class='wb-inv'>, {Y}</span>",
	currDay: "(hoje)",
	"cal-goToLnk": "Ir para o<span class=\"wb-inv\"> mês do ano</span>",
	"cal-goToTtl": "Ir para o mês do ano",
	"cal-goToMnth": "Mês:",
	"cal-goToYr": "Ano:",
	"cal-goToBtn": "Ir",
	prvMnth: "Mês anterior: ",
	nxtMnth: "Próximo mês: ",

	/* Lightbox */
	"lb-curr": "Ítem %curr% de %total%",
	"lb-xhr-err": "O carragemento deste conteúdo falhou.",
	"lb-img-err": "O carregamento desta imagem falhou.",

	/* Charts widget */
	"tbl-txt": "Tabela",
	"tbl-dtls": "Gráfico. Mais detalhes na tabela a seguir.",
	"chrt-cmbslc": "Combined slice",

	/* Session timeout */
	"st-to-msg-bgn": "Sua sessão expira automaticamente em #min# min #sec# sec.",
	"st-to-msg-end": "Selecione \"Continuar sessão\" para estender sua sessão.",
	"st-msgbx-ttl": "Aviso de tempo limite da sessão",
	"st-alrdy-to-msg": "Desculpe a sessão já expirou. Por favor, faça login novamente.",
	"st-btn-cont": "Continuar sessão",
	"st-btn-end": "Terminar sessão agora",

	/* Toggle details */
	"td-toggle": "Alternar todos",
	"td-open": "Expandir todos",
	"td-close": "Reduzir tudo",
	"td-ttl-open": "Expandir todas as seções de conteúdo",
	"td-ttl-close": "Recolher todas as seções de conteúdo",

	/* Table enhancement */
	sortAsc: "ativar para ascendente tipo",
	sortDesc: "ativar para descer tipo",
	emptyTbl: "Não há dados disponíveis na tabela",
	infoEntr: "Exibindo _START_ a _END_ de _TOTAL_ entradas",
	infoEmpty: "Exibindo 0 a 0 de 0 entradas",
	infoFilt: "(filtrado a partir de entradas _MAX_ totais)",
	info1000: "&#160;",
	lenMenu: "Mostrar _MENU_ entradas",
	filter: "Filtrar os ítens",

	/* Geomap */
	"geo-mapctrl": "@geo-mapctrl@",
	"geo-zmin": "Ampliar",
	"geo-zmout": "Reduzir",
	"geo-zmwrld": "Zoom para mapear extens",
	"geo-zmfeat": "Zoom ao elemento",
	"geo-sclln": "escala do mapa",
	"geo-msepos": "Latitude e longitude do cursor do mouse",
	"geo-ariamap": "Objeto de mapa. As descrições das características do mapa estão na tabela abaixo.",
	"geo-ally": "<strong>Usuários de teclado:</strong> Quando o mapa está em foco, use as teclas de setas para mover o mapa e as teclas mais e menos para ampliar. As teclas de seta não vai percorrer o mapa quando ampliada na medida em mapa.",
	"geo-allyttl": "Instrucciones: Cómo navegar por el mapa",
	"geo-tgllyr": "Alternar a exibição da camada",
	"geo-hdnlyr": "Esta camada está oculto.",
	"geo-bmapurl": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "//geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "//geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - Canadá mapa base (Inglês ou francês)",
	"geo-sel": "Selecionar",
	"geo-lblsel": "Verifique para selecionar o elemento no mapa",
	"geo-locurl-geogratis": "//geogratis.gc.ca/services/geolocation/en/locate",
	"geo-loc-placeholder": "Indicar o nome do local&#44; CEP&#44; endereço (postal)&#44; o número de NTS ...",
	"geo-loc-label": "Localização",
	"geo-aoi-north": "Norte",
	"geo-aoi-east": "Leste",
	"geo-aoi-south": "Sul",
	"geo-aoi-west": "Ocidente",
	"geo-aoi-instructions": "Caixa Desenhe no mapa ou inserir coordenadas abaixo e clique no botão \"Adicionar\".",
	"geo-aoi-btndraw": "Desenhar",
	"geo-aoi-btnclear": "Remover",
	"geo-geoloc-btn": "Zoom para o local atual",
	"geo-geoloc-fail": "Localização falhou. Certifique-se que os serviços de localização estão habilitados.",
	"geo-geoloc-uncapable": "A localização não é suportado pelo seu navegador.",
	"geo-lgnd-grphc": "Gráfico Legend para a camada mapa.",

	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "Switch to basic HTML version",
	"wb-enable": "Switch to standard version",
	"disable-notice-h": "Notice: Basic HTML",
	"disable-notice": "You are viewing Basic HTML view. Some features may be disabled.",

	/* Dismissable content */
	"dismiss": "Dismiss",

	/* Template */
	"tmpl-signin": "Entrar",

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
 * Localized default methods for the jQuery validation plugin.
 * Locale: PT_BR
 */
$.extend( $.validator.methods, {
	date: function( value, element ) {
		return this.optional( element ) || /^\d\d?\/\d\d?\/\d\d\d?\d?$/.test( value );
	}
} );
return $;
}));
});