/**
 * @title WET-BOEW Template polyfill
 * @overview The <template> element hold elements for Javascript and templating usage. Based on code from http://ironlasso.com/template-tag-polyfill-for-internet-explorer/
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
!function(a,b,c){"use strict";var d="wb-template",e="template",f="wb-init."+d,g=c.doc,h=function(a){if(!a.content){var c,d,e=a;for(c=e.childNodes,d=b.createDocumentFragment();c[0];)d.appendChild(c[0]);e.content=d}},i=function(b){var f=c.init(b,d,e);f&&(h(f),c.ready(a(f),d))};c.tmplPolyfill=h,g.on("timerpoke.wb "+f,e,i),c.add(e)}(jQuery,document,wb);