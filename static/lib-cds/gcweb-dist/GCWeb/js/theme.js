/**
 * @title WET-BOEW Action Manager
 * @overview API that coordinate actions with other wet-boew plugin
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
( function( $, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var $document = wb.doc,
	componentName = "wb-actionmng",
	selector = "." + componentName,
	selectorPreset = "[data-" + componentName + "]",
	runCssFlag = componentName + "Rn",
	initEvent = "wb-init." + componentName,
	actionEvent = componentName + selector,
	postponePreActions = { },
	postponeActions = { },
	groupPostAction = { },
	actionMngEvent = [
		"patch",
		"ajax",
		"addClass",
		"removeClass",
		"tblfilter",
		"run"
	].join( "." + actionEvent + " " ) + "." + actionEvent,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm,
			actions, i, i_len, i_cache, i_trggrp;

		if ( elm ) {
			$elm = $( elm );

			actions = wb.getData( $elm, componentName );

			if ( actions ) {
				if ( !$.isArray( actions ) ) {
					actions = [ actions ];
				}
				i_len = actions.length;
				for ( i = 0; i !== i_len; i += 1 ) {
					i_cache = actions[ i ];
					i_trggrp = i_cache.trggroup;
					if ( i_trggrp && i_cache.action ) {
						addDelayedAction( i_trggrp, groupPostAction, i_cache );
					}
				}
			}

			// Identify that initialization has completed
			wb.ready( $elm, componentName );
		}
	},
	addDelayedAction = function( k, a, o ) {
		if ( !a[ k ] ) {
			a[ k ] = [ ];
		}
		a[ k ].push( o );
	},
	executePostAction = function( $elm, k, a ) {
		var actions, i_cache, i_action;

		actions = a[ k ];
		while ( ( i_cache = actions.shift() ) ) {
			i_action = i_cache.action;
			if ( !i_action ) {
				continue;
			}
			$elm.trigger( i_action + "." + actionEvent, i_cache );
			delete i_cache.action;
		}
	},
	patchAct = function( event, data ) {

		// Prepare patches operation for execution by the json-manager
		var source = data.source,
			ops = data.patches,
			isCumulative = !!data.cumulative;

		if ( !ops ) {
			return;
		}

		if ( !$.isArray( ops ) ) {
			ops = [ ops ];
		}

		$( source ).trigger( {
			type: "patches.wb-jsonmanager",
			patches: ops,
			fpath: data.fpath,
			filter: data.filter || [],
			filternot: data.filternot || [],
			cumulative: isCumulative // Ensure the patches would remain as any other future update.
		} );

	},
	ajaxAct = function( event, data ) {
		var $container, containerID, ajxType;

		if ( !data.container ) {
			containerID = wb.getId();
			$container = $( "<div id='" + containerID + "'></div>" );
			$( event.target ).after( $container );
		} else {
			$container = $( data.container );
		}

		if ( data.trigger ) {
			$container.attr( "data-trigger-wet", "true" );
		}

		ajxType = data.type ? data.type : "replace";
		$container.attr( "data-ajax-" + ajxType, data.url );

		$container.one( "wb-contentupdated", function( event, data ) {
			var updtElm = event.currentTarget,
				trigger = updtElm.getAttribute( "data-trigger-wet" );

			updtElm.removeAttribute( "data-ajax-" + data[ "ajax-type" ] );
			if ( trigger ) {
				$( updtElm )
					.find( wb.allSelectors )
						.addClass( "wb-init" )
						.filter( ":not(#" + updtElm.id + " .wb-init .wb-init)" )
							.trigger( "timerpoke.wb" );
				updtElm.removeAttribute( "data-trigger-wet" );
			}
		} );
		$container.trigger( "wb-update.wb-data-ajax" );
	},
	addClassAct = function( event, data ) {
		var $elm = $( data.source || event.target );
		if ( !data.class ) {
			return;
		}
		$elm.addClass( data.class );
	},
	remClassAct = function( event, data ) {
		var $elm = $( data.source || event.target );
		if ( !data.class ) {
			return;
		}
		$elm.removeClass( data.class );
	},
	tblflrAct = function( event, data ) {
		var elm = event.target,
			$source = $( data.source || elm ),
			$datatable,
			column = data.column,
			colInt = parseInt( column, 10 ),
			regex = !!data.regex,
			smart = ( !data.smart ) ? true : !!data.smart,
			caseinsen = ( !data.caseinsen ) ? true : !!data.caseinsen;

		if ( $source.get( 0 ).nodeName !== "TABLE" ) {
			throw "Table filtering can only applied on table";
		}
		$datatable = $source.dataTable( { "retrieve": true } ).api();
		column = ( colInt === true ) ? colInt : column;
		$datatable.column( column ).search( data.value, regex, smart, caseinsen ).draw();
	},
	runAct = function( event, data ) {

		var elm = event.target,
			$elm = $( elm ),
			grpAction = groupPostAction[ data.trggroup ],
			i, i_len, i_cache, i_action;

		if ( grpAction && !$elm.hasClass( runCssFlag ) ) {
			$elm.addClass( runCssFlag );

			i_len = grpAction.length;
			for ( i = 0; i !== i_len; i += 1 ) {
				i_cache = grpAction[ i ];

				i_action = i_cache.action;
				if ( !i_action ) {
					continue;
				}
				$elm.trigger( i_action + "." + actionEvent, i_cache );
			}
			$elm.removeClass( runCssFlag );
		}
	};

// Main entry to submit wet-boew plugin actions
// It will be only executed once per event chain
$document.on( "do." + actionEvent, function( event ) {
	var elm =  event.element || event.target,
		$elm, elmID = elm.id,
		actions = event.actions || [ ],
		i, i_len, i_cache,
		i_action, i_target, i_trggrp;

	// Filter out any events triggered by descendants
	if ( ( elm === event.target || event.currentTarget === event.target ) && elm.className.indexOf( componentName ) === -1 ) {

		if ( !$.isArray( actions ) ) {
			actions = [ actions ];
		}

		i_len = actions.length;

		// Add a CSS selector to trigger action Events
		if ( i_len ) {
			$elm = $( elm );
			$elm.addClass( componentName );
		}

		// For this elements, check if we do not have some postponed pre action to execute.
		if ( elmID && postponePreActions[ elmID ] ) {
			executePostAction( $elm, elmID, postponePreActions );
		}

		for ( i = 0; i !== i_len; i += 1 ) {
			i_cache = actions[ i ];

			i_action = i_cache.action;
			if ( !i_action ) {
				continue;
			}

			i_target = i_cache.target;
			if ( i_target ) {

				if ( !i_cache.trgbefore ) {
					addDelayedAction( i_target, postponeActions, i_cache );
				} else {
					addDelayedAction( i_target, postponePreActions, i_cache );
				}

				// If the target are in a group
				i_trggrp = i_cache.trggroup;
				if ( i_trggrp ) {
					addDelayedAction( i_trggrp, groupPostAction, i_cache );
				}
			} else {
				$elm.trigger( i_action + "." + actionEvent, i_cache );
			}
		}

		// For this elements, check if we do not have some postponed action to execute.
		if ( elmID && postponeActions[ elmID ] ) {
			executePostAction( $elm, elmID, postponeActions );
		}

		$( event.target ).removeClass( componentName );
	}
} );

//Remove any action for grouped postponed action
$document.on( "clean." + actionEvent, function( event ) {
	var elm =  event.element || event.target,
		targetGroup = event.trggroup,
		actionsGrp, i_cache;

	// Filter out any events triggered by descendants
	if ( elm === event.target || event.currentTarget === event.target ) {
		if ( targetGroup && groupPostAction[ targetGroup ] ) {
			actionsGrp = groupPostAction[ targetGroup ];
			while ( ( i_cache = actionsGrp.shift() ) ) {
				delete i_cache.action;
			}
		}
	}
} );

$document.on( actionMngEvent, selector, function( event, data ) {

	var eventType = event.type;

	if ( actionEvent === event.namespace ) {
		switch ( eventType ) {
		case "run":
			runAct( event, data );
			break;
		case "tblfilter":
			tblflrAct( event, data );
			break;
		case "addClass":
			addClassAct( event, data );
			break;
		case "removeClass":
			remClassAct( event, data );
			break;
		case "ajax":
			ajaxAct( event, data );
			break;
		case "patch":
			patchAct( event, data );
			break;
		}
	}
} );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selectorPreset, init );

// Add the timer poke to initialize the plugin
wb.add( selectorPreset );

} )( jQuery, wb );

/**
 * @title WET-BOEW Data Json [data-json-after], [data-json-append],
 * [data-json-before], [data-json-prepend], [data-json-replace], [data-json-replacewith] and [data-wb-json]
 * @overview Insert content extracted from JSON file.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
/*global jsonpointer */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-data-json",
	shortName = "wb-json",
	selectors = [
		"[data-json-after]",
		"[data-json-append]",
		"[data-json-before]",
		"[data-json-prepend]",
		"[data-json-replace]",
		"[data-json-replacewith]",
		"[data-" + shortName + "]"
	],
	allowJsonTypes = [ "after", "append", "before", "prepend", "val" ],
	allowAttrNames = /(href|src|data-*|pattern|min|max|step|low|high)/,
	allowPropNames = /(checked|selected|disabled|required|readonly|multiple|hidden)/,
	selectorsLength = selectors.length,
	selector = selectors.join( "," ),
	initEvent = "wb-init." + componentName,
	updateEvent = "wb-update." + componentName,
	contentUpdatedEvent = "wb-contentupdated",
	dataQueue = componentName + "-queue",
	$document = wb.doc,
	s,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered this handler
	 * @param {string} ajaxType The type of JSON operation, either after, append, before or replace
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm;

		if ( elm ) {

			var jsonCoreTypes = [
					"before",
					"replace",
					"replacewith",
					"after",
					"append",
					"prepend"
				],
				jsonType, jsondata,
				i, i_len = jsonCoreTypes.length, i_cache,
				lstCall = [],
				url;

			$elm = $( elm );

			for ( i = 0; i !== i_len; i += 1 ) {
				jsonType = jsonCoreTypes[ i ];
				url = elm.getAttribute( "data-json-" + jsonType );
				if ( url !== null ) {
					lstCall.push( {
						type: jsonType,
						url: url
					} );
				}
			}

			// Identify that initialization has completed
			wb.ready( $elm, componentName );

			jsondata = wb.getData( $elm, shortName );

			if ( jsondata && jsondata.url ) {
				lstCall.push( jsondata );
			} else if ( jsondata && $.isArray( jsondata ) ) {
				i_len = jsondata.length;
				for ( i = 0; i !== i_len; i += 1 ) {
					lstCall.push( jsondata[ i ] );
				}
			}

			// Save it to the dataJSON object.
			$elm.data( dataQueue, lstCall );

			i_len = lstCall.length;
			for ( i = 0; i !== i_len; i += 1 ) {
				i_cache = lstCall[ i ];
				loadJSON( elm, i_cache.url, i, i_cache.nocache, i_cache.nocachekey );
			}

		}
	},

	loadJSON = function( elm, url, refId, nocache, nocachekey ) {
		var $elm = $( elm ),
			fetchObj = {
				url: url,
				refId: refId,
				nocache: nocache,
				nocachekey: nocachekey
			},
			settings = window[ componentName ],
			urlParts;

		// Detect CORS requests
		if ( settings && ( url.substr( 0, 4 ) === "http" || url.substr( 0, 2 ) === "//" ) ) {
			urlParts = wb.getUrlParts( url );
			if ( ( wb.pageUrlParts.protocol !== urlParts.protocol || wb.pageUrlParts.host !== urlParts.host ) && ( !Modernizr.cors || settings.forceCorsFallback ) ) {
				if ( typeof settings.corsFallback === "function" ) {
					fetchObj.dataType = "jsonp";
					fetchObj.jsonp = "callback";
					fetchObj = settings.corsFallback( fetchObj );
				}
			}
		}

		$elm.trigger( {
			type: "json-fetch.wb",
			fetch: fetchObj
		} );
	},


	// Manage JSON value After the json data has been fetched. This function can deal with array.
	jsonFetched = function( event ) {

		var elm = event.target,
			$elm = $( elm ),
			lstCall = $elm.data( dataQueue ),
			fetchObj = event.fetch,
			itmSettings = lstCall[ fetchObj.refId ],
			jsonType = itmSettings.type,
			attrname = itmSettings.prop || itmSettings.attr,
			showEmpty = itmSettings.showempty,
			content = fetchObj.response,
			typeOfContent = typeof content,
			jQueryCaching;

		if ( showEmpty || typeOfContent !== "undefined" ) {

			if ( showEmpty && typeOfContent === "undefined" ) {
				content = "";
			}

			//Prevents the force caching of nested resources
			jQueryCaching = jQuery.ajaxSettings.cache;
			jQuery.ajaxSettings.cache = true;

			// "replace" and "replaceWith" doesn't map to a jQuery function
			if ( !jsonType ) {
				jsonType = "template";
				applyTemplate( elm, itmSettings, content );

				// Trigger wet
				if ( itmSettings.trigger ) {
					$elm
						.find( wb.allSelectors )
							.addClass( "wb-init" )
							.filter( ":not(#" + elm.id + " .wb-init .wb-init)" )
								.trigger( "timerpoke.wb" );
				}
			} else if ( jsonType === "replace" ) {
				$elm.html( content );
			} else if ( jsonType === "replacewith" ) {
				$elm.replaceWith( content );
			} else if ( jsonType === "addclass" ) {
				$elm.addClass( content );
			} else if ( jsonType === "removeclass" ) {
				$elm.removeClass( content );
			} else if ( jsonType === "prop" && attrname && allowPropNames.test( attrname ) ) {
				$elm.prop( attrname, content );
			} else if ( jsonType === "attr" && attrname && allowAttrNames.test( attrname ) ) {
				$elm.attr( attrname, content );
			} else if ( typeof $elm[ jsonType ] === "function" && allowJsonTypes.indexOf( jsonType ) !== -1 ) {
				$elm[ jsonType ]( content );
			} else {
				throw componentName + " do not support type: " + jsonType;
			}

			//Resets the initial jQuery caching setting
			jQuery.ajaxSettings.cache = jQueryCaching;

			$elm.trigger( contentUpdatedEvent, { "json-type": jsonType, "content": content } );
		}
	},

	// Apply the template as per the configuration
	applyTemplate = function( elm, settings, content ) {

		var mapping = settings.mapping || [ {} ],
			mapping_len,
			filterTrueness = settings.filter || [],
			filterFaslseness = settings.filternot || [],
			queryAll = settings.queryall,
			i, i_len, i_cache,
			j, j_cache, j_cache_attr,
			basePntr,
			clone, selElements,
			cached_node,
			cached_textContent,
			cached_value,
			selectorToClone = settings.tobeclone,
			elmClass = elm.className,
			elmAppendTo = elm,
			dataTable,
			template = settings.source ? document.querySelector( settings.source ) : elm.querySelector( "template" );

		if ( !$.isArray( content ) ) {
			if ( typeof content !== "object" ) {
				content = [ content ];
			} else {
				content = $.map( content, function( val, index ) {
					if ( typeof val === "object" && !$.isArray( val ) ) {
						if ( !val[ "@id" ] ) {
							val[ "@id" ] = index;
						}
					} else {
						val = {
							"@id": index,
							"@value": val
						};
					}
					return [ val ];
				} );
			}
		}
		i_len = content.length;

		if ( !$.isArray( mapping ) ) {
			mapping = [ mapping ];
		}
		mapping_len = mapping.length;

		// Special support for adding row to a wb-table
		// Condition must be meet:
		//  * The element need to be a table
		//  * Data-table need to be initialized
		//  * The mapping need to be an array of string
		if ( elm.tagName === "TABLE" && mapping && elmClass.indexOf( "wb-tables-inited" ) !== -1 && typeof mapping[ 0 ] === "string" ) {
			dataTable = $( elm ).dataTable( { "retrieve": true } ).api();
			for ( i = 0; i < i_len; i += 1 ) {
				i_cache = content[ i ];
				if ( filterPassJSON( i_cache, filterTrueness, filterFaslseness ) ) {
					basePntr = "/" + i;
					cached_value = [];
					for ( j = 0; j < mapping_len; j += 1 ) {
						cached_value.push( jsonpointer.get( content, basePntr + mapping[ j ] ) );
					}
					dataTable.row.add( cached_value );
				}
			}
			dataTable.draw();
			return;
		}

		if ( !template ) {
			return;
		}

		// Needed when executing sub-template that wasn't polyfill, like in IE11
		if ( !template.content ) {
			wb.tmplPolyfill( template );
		}

		if ( settings.appendto ) {
			elmAppendTo = $( settings.appendto ).get( 0 );
		}

		for ( i = 0; i < i_len; i += 1 ) {
			i_cache = content[ i ];

			if ( filterPassJSON( i_cache, filterTrueness, filterFaslseness ) ) {

				basePntr = "/" + i;

				if ( !selectorToClone ) {
					clone = template.content.cloneNode( true );
				} else {
					clone = template.content.querySelector( selectorToClone ).cloneNode( true );
				}

				if ( queryAll ) {
					selElements = clone.querySelectorAll( queryAll );
				}

				for ( j = 0; j < mapping_len || j === 0; j += 1 ) {
					j_cache = mapping[ j ];

					// Get the node used to insert content
					if ( selElements ) {
						cached_node = selElements[ j ];
					} else if ( j_cache.selector ) {
						cached_node = clone.querySelector( j_cache.selector );
					} else {
						cached_node = clone;
					}
					j_cache_attr = j_cache.attr;
					if ( j_cache_attr ) {
						if ( !cached_node.hasAttribute( j_cache_attr ) ) {
							cached_node.setAttribute( j_cache_attr, "" );
						}
						cached_node = cached_node.getAttributeNode( j_cache_attr );
					}

					// Get the value
					if ( typeof i_cache === "string" ) {
						cached_value = i_cache;
					} else if ( typeof j_cache === "string" ) {
						cached_value = jsonpointer.get( content, basePntr + j_cache );
					} else {
						cached_value = jsonpointer.get( content, basePntr + j_cache.value );
					}

					// Placeholder text replacement if any
					if ( j_cache.placeholder ) {
						cached_textContent = cached_node.textContent || "";
						cached_value = cached_textContent.replace( j_cache.placeholder, cached_value );
					}

					// Set the value to the node
					if ( $.isArray( cached_value ) ) {
						applyTemplate( cached_node, j_cache, cached_value );
					} else if ( j_cache.isHTML ) {
						cached_node.innerHTML = cached_value;
					} else {
						cached_node.textContent = cached_value;
					}
				}

				elmAppendTo.appendChild( clone );
			}
		}
	},

	// Filtering a JSON
	// Return true if trueness && falseness
	// Return false if !( trueness && falseness )
	// trueness and falseness is an array of { "path": "", "value": "" } object
	filterPassJSON = function( obj, trueness, falseness ) {
		var i, i_cache,
			trueness_len = trueness.length,
			falseness_len = falseness.length,
			compareResult = false,
			isEqual;

		if ( trueness_len || falseness_len ) {

			for ( i = 0; i < trueness_len; i += 1 ) {
				i_cache = trueness[ i ];
				isEqual = _equalsJSON( jsonpointer.get( obj, i_cache.path ), i_cache.value );

				if ( i_cache.optional ) {
					compareResult = compareResult || isEqual;
				} else if ( !isEqual ) {
					return false;
				} else {
					compareResult = true;
				}
			}
			if ( trueness_len && !compareResult ) {
				return false;
			}

			for ( i = 0; i < falseness_len; i += 1 ) {
				i_cache = falseness[ i ];
				isEqual = _equalsJSON( jsonpointer.get( obj, i_cache.path ), i_cache.value );

				if ( isEqual && !i_cache.optional || isEqual && i_cache.optional ) {
					return false;
				}
			}

		}
		return true;
	},

	//
	_equalsJSON = function( a, b ) {
		switch ( typeof a ) {
		case "undefined":
			return false;
		case "boolean":
		case "string":
		case "number":
			return a === b;
		case "object":
			if ( a === null ) {
				return b === null;
			}
			if ( $.isArray( a ) ) {
				if (  $.isArray( b ) || a.length !== b.length ) {
					return false;
				}
				for ( var i = 0, l = a.length; i < l; i++ ) {
					if ( !_equalsJSON( a[ i ], b[ i ] ) ) {
						return false;
					}
				}
				return true;
			}
			var bKeys = _objectKeys( b ),
				bLength = bKeys.length;
			if ( _objectKeys( a ).length !== bLength ) {
				return false;
			}
			for ( var i = 0; i < bLength; i++ ) {
				if ( !_equalsJSON( a[ i ], b[ i ] ) ) {
					return false;
				}
			}
			return true;
		default:
			return false;
		}
	},
	_objectKeys = function( obj ) {
		if ( $.isArray( obj ) ) {
			var keys = new Array( obj.length );
			for ( var k = 0; k < keys.length; k++ ) {
				keys[ k ] = "" + k;
			}
			return keys;
		}
		if ( Object.keys ) {
			return Object.keys( obj );
		}
		var keys = [];
		for ( var i in obj ) {
			if ( obj.hasOwnProperty( i ) ) {
				keys.push( i );
			}
		}
		return keys;
	},

	// Manage JSON value After the json data has been fetched
	jsonUpdate = function( event ) {
		var elm = event.target,
			$elm = $( elm ),
			lstCall = $elm.data( dataQueue ),
			refId = lstCall.length,
			wbJsonConfig = event[ "wb-json" ];

		if ( !( wbJsonConfig.url && ( wbJsonConfig.type || wbJsonConfig.source ) ) ) {
			throw "Data JSON update not configured properly";
		}

		lstCall.push( wbJsonConfig );
		$elm.data( dataQueue, lstCall );

		loadJSON( elm, wbJsonConfig.url, refId );
	};

$document.on( "json-failed.wb", selector, function( ) {
	throw "Bad JSON Fetched from url in " + componentName;
} );

// Load template polyfill
Modernizr.load( {
	test: ( "content" in document.createElement( "template" ) ),
	nope: "site!deps/template" + wb.getMode() + ".js"
} );

$document.on( "timerpoke.wb " + initEvent + " " + updateEvent + " json-fetched.wb", selector, function( event ) {

	if ( event.currentTarget === event.target ) {
		switch ( event.type ) {

		case "timerpoke":
		case "wb-init":
			init( event );
			break;
		case "wb-update":
			jsonUpdate( event );
			break;
		default:
			jsonFetched( event );
			break;
		}
	}

	return true;
} );

// Add the timerpoke to initialize the plugin
for ( s = 0; s !== selectorsLength; s += 1 ) {
	wb.add( selectors[ s ] );
}

} )( jQuery, window, wb );

/**
 * @title WET-BOEW Template polyfill
 * @overview The <template> element hold elements for Javascript and templating usage. Based on code from http://ironlasso.com/template-tag-polyfill-for-internet-explorer/
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
( function( $, document, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the polyfill - meaning that they will be initialized once per page.
 * This polyfill is mostly used to support <template> element in IE11
 */
var componentName = "wb-template",
	selector = "template",
	initEvent = "wb-init." + componentName,
	$document = wb.doc,

	/**
	 * @method polyfill
	 * @param {DOM element} element that we need to apply the polyfill
	 */
	polyfill = function( elm ) {

		if ( elm.content ) {
			return;
		}
		var elPlate = elm,
			qContent,
			docContent;

		qContent = elPlate.childNodes;
		docContent = document.createDocumentFragment();

		while ( qContent[ 0 ] ) {
			docContent.appendChild( qContent[ 0 ] );
		}

		elPlate.content = docContent;

	},

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector );

		if ( elm ) {

			polyfill( elm );

			// Identify that initialization has completed
			wb.ready( $( elm ), componentName );
		}
	};

// Make it available of when template element is needed on the fly, like subtemplate support in IE11
wb.tmplPolyfill = polyfill;

// Bind the events of the polyfill
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the polyfill
wb.add( selector );

} )( jQuery, document, wb );

/**
 * @title WET-BOEW URL mapping
 * @overview Execute pre-configured action based on url query string
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-doaction",
	selector = "a[data-" + componentName + "],button[data-" + componentName + "]",
	runActions = "do.wb-actionmng",
	$document = wb.doc;

$document.on( "click", selector, function( event ) {

	var elm = event.target,
		$elm = $( elm );

	// Get the selector when click on a child of it, like click on a figure wrapped in a anchor with doaction.
	if ( event.currentTarget !== event.target ) {
		$elm = $elm.parentsUntil( "main", selector );
		elm = $elm[ 0 ];
	}

	// Ensure that we only execute for anchor and button
	if ( elm.nodeName === "BUTTON" || elm.nodeName === "A" ) {

		if ( wb.isReady ) {

			// Execute actions if any.
			$elm.trigger( {
				type: runActions,
				actions: wb.getData( $elm, componentName )
			} );
		} else {

			// Execution of the action after WET will be ready
			$document.one( "wb-ready.wb", function( ) {
				$elm.trigger( {
					type: runActions,
					actions: wb.getData( $elm, componentName )
				} );
			} );
		}
		return false;
	}
} );


} )( jQuery, window, wb );

/**
 * @title WET-BOEW Field Flow
 * @overview Transform a basic list into a selectable list.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
( function( $, document, wb ) {
"use strict";

var componentName = "wb-fieldflow",
	selector = "." + componentName,
	formComponent = componentName + "-form",
	subComponentName = componentName + "-sub",
	crtlSelectClass = componentName + "-init",
	crtlSelectSelector = "." + crtlSelectClass,
	basenameInput = componentName + wb.getId(),
	basenameInputSelector = "[name^=" + basenameInput + "]",
	labelClass = componentName + "-label",
	headerClass = componentName + "-header",
	selectorForm = "." + formComponent,
	initEvent = "wb-init" + selector,
	drawEvent = "draw" + selector,
	actionEvent = "action" + selector,
	submitEvent = "submit" + selector,
	submitedEvent = "submited" + selector,
	readyEvent = "ready" + selector,
	cleanEvent = "clean" + selector,
	resetActionEvent = "reset" + selector,
	createCtrlEvent = "createctrl" + selector,
	registerJQData = componentName + "-register", // Data that contain all the component registered (to the form element and component), used for executing action upon submit
	registerHdnFld = componentName + "-hdnfld",
	configData = componentName + "-config",
	pushJQData =  componentName + "-push",
	submitJQData =  componentName + "-submit", // List of action to perform upon form submission
	actionData =  componentName + "-action", // temp for code transition
	originData =  componentName + "-origin", // To carry the plugin origin ID, any implementation of "createCtrlEvent" must set that option.
	sourceDataAttr =  "data-" + componentName + "-source",
	flagOptValueData =  componentName + "-flagoptvalue",
	$document = wb.doc,
	defaults = {
		toggle: {
			stateOn: "visible", // For toggle plugin
			stateOff: "hidden"  // For toggle plugin
		},
		i18n:
		{
			"en": {
				btn: "Continue", // Action button
				defaultsel: "Make your selection...", // text use for the first empty select
				required: "required"// text for the required label
			},
			"fr": {
				btn: "Allez",
				defaultsel: "Sélectionnez dans la liste...", // text use for the first empty select
				required: "obligatoire" // text for the required label
			}
		},
		action: "ajax",
		prop: "url"
	},
	fieldflowActionsEvents = [
		[
			"redir",
			"query",
			"ajax",
			"addClass",
			"removeClass",
			"removeClass",
			"append",
			"tblfilter",
			"toggle"
		].join( "." + actionEvent + " " ) + "." + actionEvent,
		[
			"ajax",
			"toggle",
			"redir",
			"addClass",
			"removeClass"
		].join( "." + submitEvent + " " ) + "." + submitEvent,
		[
			"tblfilter",
			componentName
		].join( "." + drawEvent + " " ) + "." + drawEvent,
		[
			"select",
			"checkbox",
			"radio"
		].join( "." + createCtrlEvent + " " ) + "." + createCtrlEvent
	].join( " " ),

	/**
	* @method init
	* @param {jQuery Event} event Event that triggered the function call
	*/
	init = function( event ) {
		var elm = wb.init( event, componentName, selector ),
			$elm, elmId,
			wbDataElm,
			config,
			i18n;

		if ( elm ) {
			$elm = $( elm );
			elmId = elm.id;

			// Set default i18n information
			if ( defaults.i18n[ wb.lang ] ) {
				defaults.i18n = defaults.i18n[ wb.lang ];
			}

			// Extend this data with the contextual default
			wbDataElm = wb.getData( $elm, componentName );
			if ( wbDataElm && wbDataElm.i18n ) {
				wbDataElm.i18n = $.extend( {}, defaults.i18n, wbDataElm.i18n );
			}
			config = $.extend( {}, defaults, wbDataElm );

			if ( config.defaultIfNone && !$.isArray( config.defaultIfNone ) ) {
				config.defaultIfNone = [ config.defaultIfNone ];
			}

			// Set the data to the component, if other event need to have access to it.
			$elm.data( configData, config );
			i18n = config.i18n;

			// Add startWith function (ref: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/startsWith)
			if ( !String.prototype.startsWith ) {
				String.prototype.startsWith = function( searchString, position ) {
					position = position || 0;
					return this.substr( position, searchString.length ) === searchString;
				};
			}

			// Transform the list into a select, use the first paragrap content for the label, and extract for i18n the name of the button action.
			var bodyID = wb.getId(),
				stdOut,
				formElm, $form;

			if ( config.noForm ) {
				stdOut = "<div class='mrgn-tp-md'><div id='" + bodyID + "'></div></div>";

				// Need to add the class="formComponent" to the div that wrap the form element.
				formElm = elm.parentElement;
				while ( formElm.nodeName !== "FORM" ) {
					formElm = formElm.parentElement;
				}
				$( formElm.parentElement ).addClass( formComponent );
			} else {
				stdOut = "<div class='wb-frmvld " + formComponent + "'><form><div id='" + bodyID + "'>";
				stdOut = stdOut + "</div><input type=\"submit\" value=\"" + i18n.btn + "\" class=\"btn btn-primary mrgn-bttm-md\" /> </form></div>";
			}
			$elm.addClass( "hidden" );
			stdOut = $( stdOut );
			$elm.after( stdOut );

			if ( !config.noForm ) {
				formElm = stdOut.find( "form" );
				stdOut.trigger( "wb-init.wb-frmvld" );
			}

			$form = $( formElm );

			// Register this plugin within the form, this is to manage form submission
			pushData( $form, registerJQData, elmId );

			if ( !config.outputctnrid ) { // Output container ID
				config.outputctnrid = bodyID;
			}

			if ( !config.source ) {
				config.source = elm; // We assume th container have the source
			}

			if ( !config.srctype ) {
				config.srctype = componentName;
			}

			config.inline = !!config.inline;

			// Trigger the drop down loading
			$elm.trigger( config.srctype + "." + drawEvent, config );

			// Do requested DOM manipulation
			if ( config.unhideelm ) {
				$( config.unhideelm ).removeClass( "hidden" );
			}
			if ( config.hideelm ) {
				$( config.hideelm ).addClass( "hidden" );
			}

			// Identify that initialization has completed
			wb.ready( $elm, componentName );

			if ( config.ext ) {
				config.form = $form.get( 0 );
				$elm.trigger( config.ext + "." + readyEvent, config );
			}
		}
	},
	pushData = function( $elm, prop, data, reset ) {
		var dtCache = $elm.data( prop );
		if ( !dtCache || reset ) {
			dtCache = [];
		}
		dtCache.push( data );
		return $elm.data( prop, dtCache );
	},
	subRedir = function( event, data ) {

		var form = data.form,
			url = data.url;

		if ( url ) {
			form.setAttribute( "action", url );
		}
	},
	actQuery = function( event, data ) {
		var $selectElm = data.$selElm,
			fieldName = data.name,
			fieldValue = data.value;

		if ( fieldName ) {
			data.provEvt.setAttribute( "name", fieldName );
		}
		if ( fieldValue ) {
			$selectElm.val( fieldValue );
		}

		// Add a flag to know the option value was inserted
		$selectElm.attr( "data-" + flagOptValueData, flagOptValueData );
	},
	actAjax = function( event, data ) {
		var provEvt = data.provEvt,
			$container;

		if ( !data.live ) {
			data.preventSubmit = true;
			pushData( $( provEvt ), submitJQData, data );
		} else {
			if ( !data.container ) {

				// Create the container next to component
				$container = $( "<div></div>" );
				$( provEvt.parentNode ).append( $container );
				data.container = $container.get( 0 );
			}
			$( event.target ).trigger( "ajax." + submitEvent, data );
		}
	},
	subAjax = function( event, data ) {
		var $container, containerID, ajxType,
			cleanSelector = data.clean;

		if ( !data.container ) {
			containerID = wb.getId();
			$container = $( "<div id='" + containerID + "'></div>" );
			$( data.form ).append( $container );
			cleanSelector = "#" + containerID;
		} else {
			$container = $( data.container );
		}

		if ( cleanSelector ) {
			$( data.origin ).one( cleanEvent, function( ) {
				$( cleanSelector ).empty();
			} );
		}

		if ( data.trigger ) {
			$container.attr( "data-trigger-wet", "true" );
		}

		ajxType = data.type ? data.type : "replace";
		$container.attr( "data-ajax-" + ajxType, data.url );

		$container.one( "wb-contentupdated", function( event, data ) {
			var updtElm = event.currentTarget,
				trigger = updtElm.getAttribute( "data-trigger-wet" );

			updtElm.removeAttribute( "data-ajax-" + data[ "ajax-type" ] );
			if ( trigger ) {
				$( updtElm )
					.find( wb.allSelectors )
						.addClass( "wb-init" )
						.filter( ":not(#" + updtElm.id + " .wb-init .wb-init)" )
							.trigger( "timerpoke.wb" );
				updtElm.removeAttribute( "data-trigger-wet" );
			}
		} );
		$container.trigger( "wb-update.wb-data-ajax" );
	},
	subToggle = function( event, data ) {
		var $origin = $( data.origin ),
			config = $( event.target ).data( configData ),
			toggleOpts = data.toggle;


		// For simple toggle call syntax
		if ( toggleOpts && typeof toggleOpts === "string" ) {
			toggleOpts = { selector: toggleOpts };
		}
		toggleOpts = $.extend( {}, toggleOpts, config.toggle );

		// Doing an add and remove "wb-toggle" class in order to avoid the click event added by toggle plugin
		$origin.addClass( "wb-toggle" );
		$origin.trigger( "toggle.wb-toggle", toggleOpts );

		// Set the cleaning task
		toggleOpts.type = "off";
		$origin.one( cleanEvent, function( ) {
			$origin.addClass( "wb-toggle" );
			$origin.trigger( "toggle.wb-toggle", toggleOpts );
			$origin.removeClass( "wb-toggle" );
		} );
	},
	actAppend = function( event, data ) {
		if ( event.namespace === actionEvent ) {
			var srctype = data.srctype ? data.srctype : componentName;
			data.container = data.provEvt.parentNode.id;
			if ( !data.source ) {
				throw "A source is required to append a field flow control.";
			}
			$( event.currentTarget ).trigger( srctype + "." + drawEvent, data );
		}
	},
	actTblFilter = function( event, data ) {
		if ( event.namespace === actionEvent ) {
			var sourceSelector = data.source,
				$datatable = $( sourceSelector ).dataTable( { "retrieve": true } ).api(),
				$dtSelectedColumn,
				column = data.column,
				colInt = parseInt( column, 10 ),
				regex = !!data.regex,
				smart = ( !data.smart ) ? true : !!data.smart,
				caseinsen = ( !data.caseinsen ) ? true : !!data.caseinsen;

			column = ( colInt === true ) ? colInt : column;

			$dtSelectedColumn = $datatable.column( column );

			$dtSelectedColumn.search( data.value, regex, smart, caseinsen ).draw();

			// Add a clean up task
			$( data.provEvt ).one( cleanEvent, function( ) {
				$dtSelectedColumn.search( "" ).draw();
			} );

		}
	},
	drwTblFilter = function( event, data ) {
		if ( event.namespace === drawEvent ) {
			var selColumn = data.column, // (integer/datatable column selector)
				csvExtract = data.csvextract, // (true|false) assume items are in CSV format instead of being inside "li" elements
				$column,
				sourceSelector = data.source,
				$source = $( sourceSelector ),
				$datatable,
				arrData, $listItem,
				i, i_len,
				j, j_len,
				items = [ ],
				cur_itm,
				prefLabel = data.label,
				defaultSelectedLabel = data.defaultselectedlabel,
				lblselector = data.lblselector,
				filterSequence = data.fltrseq ? data.fltrseq : [ ],
				limit = data.limit ? data.limit : 10,
				firstFilterSeq,
				actionItm, filterItm,
				renderas;

			// Check if the datatable has been loaded, if not we will wait until it is.
			if ( !$source.hasClass( "wb-tables-inited" ) ) {
				$source.one( "wb-ready.wb-tables", function() {
					$( event.target ).trigger( "tblfilter." + drawEvent, data );
				} );
				return false;
			}
			$datatable = $source.dataTable( { "retrieve": true } ).api();

			if ( $datatable.rows( { "search": "applied" } ).data().length <= limit  ) {
				return true;
			}

			renderas = data.renderas ? data.renderas : "select"; // Default it will render as select

			if ( !selColumn && filterSequence.length ) {
				cur_itm = filterSequence.shift();
				if ( !cur_itm.column ) {
					throw "Column is undefined in the filter sequence";
				}
				selColumn = cur_itm.column;
				csvExtract = cur_itm.csvextract;
				defaultSelectedLabel = cur_itm.defaultselectedlabel;
				prefLabel = cur_itm.label;
				lblselector = cur_itm.lblselector;
			}

			$column = $datatable.column( selColumn, { "search": "applied" } );

			// Get the items
			if ( csvExtract ) {
				arrData = $column.data();
				for ( i = 0, i_len = arrData.length; i !== i_len; i += 1 ) {
					items = items.concat( arrData[ i ].split( "," ) );
				}
			} else {
				arrData = $column.nodes();
				for ( i = 0, i_len = arrData.length; i !== i_len; i += 1 ) {
					$listItem = $( arrData[ i ] ).find( "li" );
					for ( j = 0, j_len = $listItem.length; j !== j_len; j += 1 ) {
						items.push( $( $listItem[ j ] ).text() );
					}
				}
			}

			items = items.sort().filter( function( item, pos, ary ) {
				return !pos || item !== ary[ pos - 1 ];
			} );

			var elm = event.target,
				$elm = $( elm ),
				itemsToCreate = [ ],
				pushAction = data.actions ? data.actions : [ ];

			if ( filterSequence.length ) {
				firstFilterSeq = filterSequence[ 0 ];
				filterItm = {
					action: "append",
					srctype: "tblfilter",
					source: sourceSelector,
					renderas: firstFilterSeq.renderas ? firstFilterSeq.renderas : renderas,
					fltrseq: filterSequence,
					limit: limit
				};
			}
			for ( i = 0, i_len = items.length; i !== i_len; i += 1 ) {
				cur_itm = items[ i ];
				actionItm = {
					label: cur_itm,
					actions: [
						{ // Set an action upon item selection
							action: "tblfilter",
							source: sourceSelector,
							column: selColumn,
							value: cur_itm
						}
					]
				};
				if ( filterItm ) {
					actionItm.actions.push( filterItm );
				}
				itemsToCreate.push( actionItm );
			}

			if ( !prefLabel ) {
				prefLabel = $column.header().textContent;
			}

			if ( !data.outputctnrid ) {
				data.outputctnrid = data.provEvt.parentElement.id;
			}

			$elm.trigger( renderas + "." + createCtrlEvent, {
				actions: pushAction,
				source: $source.get( 0 ),
				outputctnrid: data.outputctnrid,
				label: prefLabel,
				defaultselectedlabel: defaultSelectedLabel,
				lblselector: lblselector,
				items: itemsToCreate,
				inline: data.inline
			} );

		}
	},
	drwFieldflow = function( event, data ) {
		if ( event.namespace === drawEvent ) {
			var elm = event.target,
				$elm = $( elm ),
				wbDataElm,
				$source = $( data.source ),
				source = $source.get( 0 ),
				$labelExplicit, $firstChild,
				labelSelector = data.lblselector || "." + labelClass,
				labelTxt,
				itmSelector = data.itmselector || "ul:first() > li", $items,
				actions,
				renderas;

			// Extend if it is a sub-component
			if ( $source.hasClass( subComponentName ) ) {
				wbDataElm = wb.getData( $source, componentName );
				$source.data( configData, wbDataElm );
				data = $.extend( {}, data, wbDataElm );
			}

			actions = data.actions || [ ];
			renderas = data.renderas ? data.renderas : "select"; // Default it will render as select

			// Check if the first node is a div and contain the label.
			if ( !source.id ) {
				source.id = wb.getId();
			}
			$firstChild = $source.children().first();

			if ( !$firstChild.hasClass( headerClass ) ) {

				// Only use what defined as the label, nothing else
				$labelExplicit = $firstChild.find( labelSelector );
				if ( $labelExplicit.length ) {
					labelTxt = $labelExplicit.html();
				} else {
					labelTxt = $source.find( "> p" ).html();
				}
				labelSelector = null; // unset the label selector because it not needed for the control creation
			} else {
				labelTxt = $firstChild.html();
				itmSelector = "." + headerClass + " + " + itmSelector;
			}

			$items = getItemsData( $source.find( itmSelector ) );

			if ( !data.outputctnrid ) {
				data.outputctnrid = data.provEvt.parentElement.id;
			}

			$elm.trigger( renderas + "." + createCtrlEvent, {
				actions: actions,
				source: source,
				attributes: data.attributes,
				outputctnrid: data.outputctnrid,
				label: labelTxt,
				lblselector: labelSelector,
				defaultselectedlabel: data.defaultselectedlabel,
				required: !!!data.isoptional,
				noreqlabel: data.noreqlabel,
				items: $items,
				inline: data.inline
			} );
		}
	},
	ctrlSelect = function( event, data ) {
		var bodyId = data.outputctnrid,
			$body = $( "#" + bodyId ),
			actions = data.actions,
			lblselector = data.lblselector,
			isReq = !!data.required,
			useReqLabel = !!!data.noreqlabel,
			items = data.items,
			elm = event.target,
			$elm = $( elm ),
			source = data.source,
			attributes = data.attributes,
			i18n = $elm.data( configData ).i18n,
			autoID = wb.getId(),
			labelPrefix = "<label for='" + autoID + "'",
			labelSuffix = "</span>",
			$out, $tmpLabel,
			selectOut, $selectOut,
			defaultSelectedLabel = data.defaultselectedlabel ? data.defaultselectedlabel : i18n.defaultsel,
			i, i_len, j, j_len, cur_itm;

		// Create the label
		if ( isReq && useReqLabel ) {
			labelPrefix += " class='required'";
			labelSuffix += " <strong class='required'>(" + i18n.required + ")</strong>";
		}
		labelPrefix += "><span class='field-name'>";
		labelSuffix += "</label>";

		if ( !lblselector ) {
			$out = $( labelPrefix + data.label + labelSuffix );
		} else {
			$out = $( "<div>" + data.label + "</div>" );
			$tmpLabel = $out.find( lblselector );
			$tmpLabel.html( labelPrefix + $tmpLabel.html() + labelSuffix );
		}

		// Create the select
		selectOut = "<select id='" + autoID + "' name='" + basenameInput + autoID + "' class='full-width form-control mrgn-bttm-md " + crtlSelectClass + "' data-" + originData + "='" + elm.id + "' " + sourceDataAttr + "='" + source.id + "'";
		if ( isReq ) {
			selectOut += " required";
		}
		if ( attributes && typeof attributes === "object" ) {
			for ( i in attributes ) {
				if ( attributes.hasOwnProperty( i ) ) {
					selectOut += " " + i + "='" + attributes[ i ] + "'";
				}
			}
		}
		selectOut += "><option value=''>" + defaultSelectedLabel + "</option>";
		for ( i = 0, i_len = items.length; i !== i_len; i += 1 ) {
			cur_itm = items[ i ];

			if ( !cur_itm.group ) {
				selectOut += buildSelectOption( cur_itm );
			} else {

				// We have a group of sub-items, the cur_itm are a group
				selectOut += "<optgroup label='" + cur_itm.label + "'>";
				j_len = cur_itm.group.length;
				for ( j = 0; j !== j_len; j += 1 ) {
					selectOut += buildSelectOption( cur_itm.group[ j ] );
				}
				selectOut += "</optgroup>";
			}
		}
		selectOut += "</select>";
		$selectOut = $( selectOut );

		$body.append( $out ).append( $selectOut );

		// Set post action if any
		if ( actions && actions.length > 0 ) {
			$selectOut.data( pushJQData, actions );
		}

		// Register this control
		pushData( $elm, registerJQData, autoID );
	},
	ctrlChkbxRad = function( event, data ) {
		var bodyId = data.outputctnrid,
			actions = data.actions,
			lblselector = data.lblselector,
			isReq = !!data.required,
			useReqLabel = !!!data.noreqlabel,
			items = data.items,
			elm = event.target,
			$elm = $( elm ),
			source = data.source,
			i18n = $elm.data( configData ).i18n,
			attributes = data.attributes,
			ctrlID = wb.getId(),
			fieldsetPrefix = "<legend class='h5 ",
			fieldsetSuffix = "</span>",
			fieldsetHTML = "<fieldset id='" + ctrlID + "' data-" + originData + "='" + elm.id + "' " + sourceDataAttr + "='" + source.id + "' class='" + crtlSelectClass + " mrgn-bttm-md'",
			$out,
			$tmpLabel, $cloneLbl, $prevContent,
			radCheckOut = "",
			typeRadCheck = data.typeRadCheck,
			isInline = data.inline,
			fieldName = basenameInput + ctrlID,
			i, i_len, j, j_len, cur_itm;

		if ( attributes && typeof attributes === "object" ) {
			for ( i in attributes ) {
				if ( attributes.hasOwnProperty( i ) ) {
					fieldsetHTML += " " + i + "='" + attributes[ i ] + "'";
				}
			}
		}
		$out = $( fieldsetHTML + "></fieldset>" );

		// Create the legend
		if ( isReq && useReqLabel ) {
			fieldsetPrefix += " required";
			fieldsetSuffix += " <strong class='required'>(" + i18n.required + ")</strong>";
		}
		fieldsetPrefix += "'>";
		fieldsetSuffix += "</legend>";
		if ( !lblselector ) {
			$out.append( $( fieldsetPrefix + data.label + fieldsetSuffix ) );
		} else {
			$cloneLbl = $( "<div>" + data.label + "</div>" );
			$tmpLabel = $cloneLbl.find( lblselector );
			$out.append( ( fieldsetPrefix + $tmpLabel.html() + fieldsetSuffix ) )
				.append( $tmpLabel.nextAll() );
			$prevContent = $tmpLabel.prevAll();
		}

		// Create radio
		for ( i = 0, i_len = items.length; i !== i_len; i += 1 ) {
			cur_itm = items[ i ];

			if ( !cur_itm.group ) {
				radCheckOut += buildCheckboxRadio( cur_itm, fieldName, typeRadCheck, isInline, isReq );
			} else {

				// We have a group of sub-items, the cur_itm are a group
				radCheckOut += "<p>" + cur_itm.label + "</p>";
				j_len = cur_itm.group.length;
				for ( j = 0; j !== j_len; j += 1 ) {
					radCheckOut += buildCheckboxRadio( cur_itm.group[ j ], fieldName, typeRadCheck, isInline, isReq );
				}
			}
		}
		$out.append( radCheckOut );
		$( "#" + bodyId ).append( $out );
		if ( $prevContent ) {
			$out.before( $prevContent );
		}

		// Set post action if any
		if ( actions && actions.length > 0 ) {
			$out.data( pushJQData, actions );
		}

		// Register this control
		pushData( $elm, registerJQData, ctrlID );
	},
	getItemsData = function( $items, preventRecusive ) {
		var arrItems = $items.get(),
			i, i_len = arrItems.length, itmCached,
			itmLabel, itmValue, grpItem,
			j, j_len, childNodes, firstNode, childNode, $childNode, childNodeID,
			parsedItms = [],
			actions;

		for ( i = 0; i !== i_len; i += 1 ) {
			itmCached = arrItems[ i ];

			itmValue = "";
			grpItem = null;
			itmLabel = "";

			firstNode = itmCached.firstChild;
			childNodes = itmCached.childNodes;
			j_len = childNodes.length;

			if ( !firstNode ) {
				throw "You have a markup error, There may be an empyt <li> elements in your list.";
			}

			actions = [];

			// Is firstNode an anchor?
			if ( firstNode.nodeName === "A" ) {
				itmValue = firstNode.getAttribute( "href" );
				itmLabel = $( firstNode ).html();
				j_len = 1; // Force following elements to be ignored

				actions.push( {
					action: "redir",
					url: itmValue
				} );
			}

			// Iterate until we have found the labelClass or <ul> or element with subSelector or end of the array
			for ( j = 1; j !== j_len; j += 1 ) {
				childNode = childNodes[ j ];
				$childNode = $( childNode );

				// Sub plugin
				if ( $childNode.hasClass( subComponentName ) ) {
					childNodeID = childNode.id || wb.getId();
					childNode.id = childNodeID;
					itmValue = componentName + "-" + childNodeID;

					actions.push( {
						action: "append",
						srctype: componentName,
						source: "#" + childNodeID
					} );
					break;
				}

				// Grouping
				if ( childNode.nodeName === "UL" ) {
					if ( preventRecusive ) {
						throw "Recursive error, please check your code";
					}
					grpItem = getItemsData( $childNode.children(), true );
				}

				// Explicit label to use
				if ( $childNode.hasClass( labelClass ) ) {
					itmLabel = $childNode.html();
				}
			}

			if ( !itmLabel ) {
				itmLabel = firstNode.nodeValue;
			}

			// Set an id on the element
			if ( !itmCached.id ) {
				itmCached.id = wb.getId();
			}

			// Return the item parsed
			parsedItms.push( {
				"bind": itmCached.id,
				"label": itmLabel,
				"actions": actions,
				"group": grpItem
			} );
		}
		return parsedItms;
	},
	buildSelectOption = function( data ) {
		var label = data.label,
			out = "<option value='" + label + "'";

		out += buildDataAttribute( data );

		out += ">" + label + "</option>";

		return out;
	},
	buildDataAttribute = function( data ) {
		var out = "",
			dataFieldflow = {};

		dataFieldflow.bind = data.bind || "";
		dataFieldflow.actions = data.actions || [ ];

		out += " data-" + componentName + "='" + JSON.stringify( dataFieldflow ) + "'";

		return out;
	},
	buildCheckboxRadio = function( data, fieldName, inputType, isInline, isReq ) {
		var label = data.label,
			fieldID = wb.getId(),
			inline = isInline ? "-inline" : "",
			out = " for='" + fieldID + "'><input id='" + fieldID + "' type='" + inputType + "' name='" + fieldName + "' value='" + label + "'";

		if ( isInline ) {
			out = "<label class='" + inputType + inline + "'" + out;
		} else {
			out = "<div class='" + inputType + "'><label" + out;
		}

		out += buildDataAttribute( data );

		if ( isReq ) {
			out += " required='required'";
		}
		out += " /> " + label + "</label>";

		if ( !isInline ) {
			out += "</div>";
		}

		return out;
	};

$document.on( resetActionEvent, selector + ", ." + subComponentName, function( event ) {
	var elm = event.target,
		$elm,
		settings,
		settingsReset,
		resetAction = [],
		i, i_len, i_cache, action, isLive;

	if ( elm === event.currentTarget ) {
		$elm = $( elm );
		settings = $elm.data( configData );

		if ( settings && settings.reset ) {
			settingsReset = settings.reset;

			if ( $.isArray( settingsReset ) ) {
				resetAction = settingsReset;
			} else {
				resetAction.push( settingsReset );
			}

			i_len = resetAction.length;
			for ( i = 0; i !== i_len; i += 1 ) {
				i_cache = resetAction[ i ];
				action = i_cache.action;
				if ( action ) {
					isLive = i_cache.live;
					if ( isLive !== false ) {
						i_cache.live = true;
					}
					$elm.trigger( action + "." + actionEvent, i_cache );
				}
			}
		}
	}
} );

// Load content after the user have choosen an option
$document.on( "change", selectorForm + " " + crtlSelectSelector, function( event ) {

	var elm = event.currentTarget,
		$elm = $( elm ),
		selCurrentElm, cacheAction,
		i, i_len, dtCached, dtCachedTarget,
		itmToClean = $elm.nextAll(), itm, idxItem,
		$orgin = $( "#" + elm.getAttribute( "data-" + originData ) ),
		$source = $( "#" + elm.getAttribute( sourceDataAttr ) ),
		lstIdRegistered = $orgin.data( registerJQData ),
		$optSel = $elm.find( ":checked", $elm ),
		form = $elm.get( 0 ).form;

	//
	// 1. Cleaning
	//
	i_len = itmToClean.length;
	if ( i_len ) {
		for ( i = i_len; i !== 0; i -= 1 ) {
			itm = itmToClean[ i ];
			if ( itm ) {
				idxItem = lstIdRegistered.indexOf( itm.id );
				if ( idxItem > -1 ) {
					lstIdRegistered.splice( idxItem, 1 );
				}
				$( "#" + itm.getAttribute( sourceDataAttr ) ).trigger( resetActionEvent ).trigger( cleanEvent );
				$( itm ).trigger( cleanEvent );
			}
		}
		$orgin.data( registerJQData, lstIdRegistered );
		itmToClean.remove();
	}
	$source.trigger( resetActionEvent ).trigger( cleanEvent );
	$elm.trigger( cleanEvent );

	// Remove any action that is pending for form submission
	$elm.data( submitJQData, [] );

	//
	// 2. Get defined actions
	//

	var actions = [],
		settings, settingsSrc, selFieldFlowData,
		actionAttr,
		defaultAction,
		defaultProp,
		baseAction,
		nowActions = [],
		postActions = [], postAction_len,
		bindTo,
		bindToElm;

	// From the component, default action
	settings = $orgin.data( configData );
	settingsSrc = $source.data( configData );
	if ( settingsSrc && settings ) {
		settings = $.extend( {}, settings, settingsSrc );
	}
	if ( $optSel.length && $optSel.val() && settings && settings.default ) {
		cacheAction = settings.default;
		if ( $.isArray( cacheAction ) ) {
			actions = cacheAction;
		} else {
			actions.push( cacheAction );
		}
	}

	defaultAction = settings.action;
	defaultProp = settings.prop;
	actionData = settings.actionData || {};

	// From the component, action pushed for later
	cacheAction = $elm.data( pushJQData );
	if ( cacheAction ) {
		actions = actions.concat( cacheAction );
	}

	// For each the binded elements that are selected
	for ( i = 0, i_len = $optSel.length; i !== i_len; i += 1 ) {
		selCurrentElm = $optSel.get( i );
		selFieldFlowData = wb.getData( selCurrentElm, componentName );
		if ( selFieldFlowData ) {
			bindTo = selFieldFlowData.bind;
			actions = actions.concat( selFieldFlowData.actions );

			if ( bindTo ) {

				// Retreive action set on the binded element
				bindToElm = document.getElementById( bindTo );
				actionAttr = bindToElm.getAttribute( "data-" + componentName );
				if ( actionAttr ) {
					if ( actionAttr.startsWith( "{" ) || actionAttr.startsWith( "[" ) ) {
						try {
							cacheAction = JSON.parse( actionAttr );
						} catch ( error ) {
							$.error( "Bad JSON object " + actionAttr );
						}
						if ( !$.isArray( cacheAction ) ) {
							cacheAction = [ cacheAction ];
						}
					} else {
						cacheAction = {};
						cacheAction.action = defaultAction;
						cacheAction[ defaultProp ] = actionAttr;
						cacheAction = $.extend( true, {}, actionData, cacheAction );
						cacheAction = [ cacheAction ];
					}
					actions = actions.concat( cacheAction );
				}
			}
		}
	}

	// If there is no action, do nothing
	if ( !actions.length ) {
		return true;
	}

	//
	// 3. Sort action
	// 			array1 = Action to be executed now
	//			array2 = Action to be postponed for later use
	for ( i = 0, i_len = actions.length; i !== i_len; i += 1 ) {
		dtCached = actions[ i ];
		dtCachedTarget = dtCached.target;
		if ( !dtCachedTarget || dtCachedTarget === bindTo ) {
			nowActions.push( dtCached );
		} else {
			postActions.push( dtCached );
		}
	}

	//
	// 4. Execute action for the current item
	//
	baseAction = settings.base || {};
	postAction_len = postActions.length;
	for ( i = 0, i_len = nowActions.length; i !== i_len; i += 1 ) {
		dtCached = $.extend( {}, baseAction, nowActions[ i ] );
		dtCached.origin = $source.get( 0 );
		dtCached.provEvt = elm;
		dtCached.$selElm = $optSel;
		dtCached.form = form;
		if ( postAction_len ) {
			dtCached.actions = postActions;
		}
		$orgin.trigger( dtCached.action + "." + actionEvent, dtCached );
	}
	return true;
} );


// Load content after the user have choosen an option
$document.on( "submit", selectorForm + " form", function( event ) {

	var elm = event.currentTarget,
		$elm = $( elm ),
		wbFieldFlowRegistered = $elm.data( registerJQData ),
		wbRegisteredHidden = $elm.data( registerHdnFld ) || [],
		$hdnField,
		i, i_len = wbFieldFlowRegistered ? wbFieldFlowRegistered.length : 0,
		$wbFieldFlow, fieldOrigin,
		lstFieldFlowPostEvent = [],
		componentRegistered, $componentRegistered, $origin, lstOrigin = [],
		settings,
		j, j_len,
		m, m_len, m_cache,
		actions,
		preventSubmit = false, lastProvEvt;

	// Run the cleaning on the current items
	if ( i_len ) {
		$wbFieldFlow = $( "#" + wbFieldFlowRegistered[ i_len - 1 ] );
		fieldOrigin = $wbFieldFlow.data( registerJQData );
		$( "#" + fieldOrigin[ fieldOrigin.length - 1 ] ).trigger( cleanEvent );
		$wbFieldFlow.trigger( cleanEvent );
	}

	// For each wb-fieldflow component, execute submiting task.
	for ( i = 0; i !== i_len; i += 1 ) {
		$wbFieldFlow = $( "#" + wbFieldFlowRegistered[ i ] );
		componentRegistered = $wbFieldFlow.data( registerJQData );
		j_len = componentRegistered.length;
		for ( j = 0; j !== j_len; j += 1 ) {
			$componentRegistered = $( "#" + componentRegistered[ j ] );
			$origin = $( "#" + $componentRegistered.data( originData ) );
			lstOrigin.push( $origin );
			settings = $origin.data( configData );
			actions = $componentRegistered.data( submitJQData );

			// If there is If None setting
			if ( !actions && settings.defaultIfNone ) {
				actions = settings.defaultIfNone;
				for ( m = 0, m_len = actions.length; m !== m_len; m += 1 ) {
					m_cache = actions[ m ];
					m_cache.origin = $origin.get( 0 );
					m_cache.$selElm = $origin.prev().find( "input, select" ).eq( 0 );
					m_cache.provEvt = m_cache.$selElm.get( 0 );
					m_cache.form = elm;
					$origin.trigger( m_cache.action + "." + actionEvent, m_cache );
				}
				actions = $componentRegistered.data( submitJQData );
			}
			if ( actions ) {
				for ( m = 0, m_len = actions.length; m !== m_len; m += 1 ) {
					m_cache = actions[ m ];
					m_cache.form = elm;
					$wbFieldFlow.trigger( m_cache.action + "." + submitEvent, m_cache );
					lstFieldFlowPostEvent.push( {
						$elm: $wbFieldFlow,
						data: m_cache
					} );
					preventSubmit = preventSubmit || m_cache.preventSubmit;
					lastProvEvt = m_cache.provEvt;
				}
			}
		}
	}

	// Before to submit, remove jj-down accessesory control
	if ( !preventSubmit ) {
		$elm.find( basenameInputSelector ).removeAttr( "name" );

		// Fix an issue when clicking back with the mouse
		i_len = wbRegisteredHidden.length;
		for ( i = 0; i !== i_len; i += 1 ) {
			$( wbRegisteredHidden[ i ] ).remove();
		}
		wbRegisteredHidden = [];

		// Check the form action, if there is query string, do split it and create hidden field for submission
		// The following is may be simply caused by a cross-server security issue generated by the browser itself
		var frmAction, idxQueryDelimiter,
			queryString, cacheParam, cacheName,
			items, params;

		frmAction = $elm.attr( "action" );
		if ( frmAction ) {
			idxQueryDelimiter = frmAction.indexOf( "?" );
			if ( idxQueryDelimiter > 0 ) {

				// Split the query string and create hidden input.
				queryString = frmAction.substring( idxQueryDelimiter + 1 );
				params = queryString.split( "&" );

				i_len = params.length;
				for ( i = 0; i !== i_len; i += 1 ) {
					cacheParam = params[ i ];
					cacheName = cacheParam;
					if ( cacheParam.indexOf( "=" ) > 0 ) {
						items = cacheParam.split( "=", 2 );
						cacheName = items[ 0 ];
						cacheParam = items[ 1 ];
					}
					$hdnField = $( "<input type='hidden' name='" + cacheName + "' value='" + cacheParam + "' />" );
					$elm.append( $hdnField );
					wbRegisteredHidden.push( $hdnField.get( 0 ) );
				}
				$elm.data( registerHdnFld, wbRegisteredHidden );
			}
		}
	}

	// Add global action
	i_len = lstOrigin.length;
	for ( i = 0; i !== i_len; i += 1 ) {
		$origin = lstOrigin[ i ];
		settings = $origin.data( configData );
		if ( settings.action ) {
			lstFieldFlowPostEvent.push( {
				$elm: $origin,
				data: settings
			} );
		}
	}

	i_len = lstFieldFlowPostEvent.length;
	for ( i = 0; i !== i_len; i += 1 ) {
		m_cache = lstFieldFlowPostEvent[ i ];
		m_cache.data.lastProvEvt = lastProvEvt;
		m_cache.$elm.trigger( m_cache.data.action + "." + submitedEvent, m_cache.data );
	}
	if ( preventSubmit ) {
		event.preventDefault();
		if ( event.stopPropagation ) {
			event.stopImmediatePropagation();
		} else {
			event.cancelBubble = true;
		}
		return false;
	}
} );

$document.on( "keyup", selectorForm + " select", function( Ev ) {

	// Add the fix for the on change event - https://bugzilla.mozilla.org/show_bug.cgi?id=126379
	if ( navigator.userAgent.indexOf( "Gecko" ) !== -1 ) {

		// prevent tab, alt, ctrl keys from fireing the event
		if ( Ev.keyCode && ( Ev.keyCode === 1 || Ev.keyCode === 9 || Ev.keyCode === 16 || Ev.altKey || Ev.ctrlKey ) ) {
			return true;
		}
		$( Ev.target ).trigger( "change" );
		return true;
	}
} );

$document.on( fieldflowActionsEvents, selector, function( event, data ) {

	var eventType = event.type;

	switch ( event.namespace ) {
	case drawEvent:
		switch ( eventType ) {
		case componentName:
			drwFieldflow( event, data );
			break;
		case "tblfilter":
			drwTblFilter( event, data );
			break;
		}
		break;

	case createCtrlEvent:
		switch ( eventType ) {
		case "select":
			ctrlSelect( event, data );
			break;
		case "checkbox":
			data.typeRadCheck = "checkbox";
			ctrlChkbxRad( event, data );
			break;
		case "radio":
			data.typeRadCheck = "radio";
			ctrlChkbxRad( event, data );
			break;
		}
		break;

	case actionEvent:
		switch ( eventType ) {
		case "append":
			actAppend( event, data );
			break;
		case "redir":
			pushData( $( data.provEvt ), submitJQData, data, true );
			break;
		case "ajax":
			actAjax( event, data );
			break;
		case "tblfilter":
			actTblFilter( event, data );
			break;
		case "toggle":
			if ( data.live ) {
				subToggle( event, data );
			} else {
				data.preventSubmit = true;
				pushData( $( data.provEvt ), submitJQData, data );
			}
			break;
		case "addClass":
			if ( !data.source || !data.class ) {
				return;
			}
			if ( data.live ) {
				$( data.source ).addClass( data.class );
			} else {
				data.preventSubmit = true;
				pushData( $( data.provEvt ), submitJQData, data );
			}
			break;
		case "removeClass":
			if ( !data.source || !data.class ) {
				return;
			}
			if ( data.live ) {
				$( data.source ).removeClass( data.class );
			} else {
				data.preventSubmit = true;
				pushData( $( data.provEvt ), submitJQData, data );
			}
			break;
		case "query":
			actQuery( event, data );
			break;
		}
		break;

	case submitEvent:
		switch ( eventType ) {
		case "redir":
			subRedir( event, data );
			break;
		case "ajax":
			subAjax( event, data );
			break;
		case "toggle":
			subToggle( event, data );
			break;
		case "addClass":
			$( data.source ).addClass( data.class );
			break;
		case "removeClass":
			$( data.source ).removeClass( data.class );
			break;
		case "query":
			actQuery( event, data );
			break;
		}
		break;
	}
} );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, function( event ) {
	switch ( event.type ) {
	case "timerpoke":
	case "wb-init":
		init( event );
		break;
	}

	/*
	* Since we are working with events we want to ensure that we are being passive about our control,
	* so returning true allows for events to always continue
	*/
	return true;
} );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, document, wb );

/**
 * @title WET-BOEW JSON Fetch [ json-fetch ]
 * @overview Load and filter data from a JSON file
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
/*global jsonpointer */
( function( $, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var $document = wb.doc,
	component = "json-fetch",
	fetchEvent = component + ".wb",
	jsonCache = { },
	jsonCacheBacklog = { },
	completeJsonFetch = function( callerId, refId, response, status, xhr, selector ) {
		if ( !window.jsonpointer ) {

			// JSON pointer library is loaded but not executed in memory yet, we need to wait a tick before to continue
			setTimeout( function() {
				completeJsonFetch( callerId, refId, response, status, xhr, selector );
			}, 100 );
			return false;
		}
		if ( selector ) {
			response = jsonpointer.get( response, selector );
		}
		$( "#" + callerId ).trigger( {
			type: "json-fetched.wb",
			fetch: {
				response: response,
				status: status,
				xhr: xhr,
				refId: refId
			}
		}, this );
	};

// Event binding
$document.on( fetchEvent, function( event ) {

	var caller = event.element || event.target,
		fetchOpts = event.fetch,
		urlParts = fetchOpts.url.split( "#" ),
		url = urlParts[ 0 ],
		fetchNoCache = fetchOpts.nocache,
		fetchNoCacheKey = fetchOpts.nocachekey || wb.cacheBustKey || "wbCacheBust",
		fetchNoCacheValue,
		fetchCacheURL,
		hashPart,
		datasetName,
		selector = urlParts[ 1 ] || false,
		callerId, refId = fetchOpts.refId,
		cachedResponse;

	// Filter out any events triggered by descendants
	if ( caller === event.target || event.currentTarget === event.target ) {

		if ( !caller.id ) {
			caller.id = wb.getId();
		}
		callerId = caller.id;

		if ( selector ) {

			// If a Dataset Name exist let it managed by wb-jsonpatch plugin
			hashPart = selector.split( "/" );
			datasetName = hashPart[ 0 ];

			// A dataset name must start with "[" character, if it is a letter, then follow JSON Schema (to be implemented)
			if ( datasetName.charCodeAt( 0 ) === 91 ) {

				// Let the wb-jsonpatch plugin to manage it
				$( "#" + callerId ).trigger( {
					type: "postpone.wb-jsonmanager",
					postpone: {
						callerId: callerId,
						refId: refId,
						dsname: datasetName,
						selector: selector.substring( datasetName.length )
					}
				} );
				return;
			}
			fetchOpts.url = url;
		}

		if ( fetchNoCache ) {
			if ( fetchNoCache === "nocache" ) {
				fetchNoCacheValue = wb.guid();
			} else {
				fetchNoCacheValue = wb.sessionGUID();
			}
			fetchCacheURL = fetchNoCacheKey + "=" + fetchNoCacheValue;

			if ( url.indexOf( "?" ) !== -1 ) {
				url = url + "&" + fetchCacheURL;
			} else {
				url = url + "?" + fetchCacheURL;
			}
			fetchOpts.url = url;
		}

		Modernizr.load( {
			load: "site!deps/jsonpointer" + wb.getMode() + ".js",
			complete: function() {

				if ( !fetchOpts.nocache ) {
					cachedResponse = jsonCache[ url ];

					if ( cachedResponse ) {
						completeJsonFetch( callerId, refId, cachedResponse, "success", undefined, selector );
						return;
					} else {
						if ( !jsonCacheBacklog[ url ] ) {
							jsonCacheBacklog[ url ] = [ ];
						} else {
							jsonCacheBacklog[ url ].push( {
								"callerId": callerId,
								"refId": refId,
								"selector": selector
							} );
							return;
						}
					}
				}

				$.ajax( fetchOpts )
					.done( function( response, status, xhr ) {
						var i, i_len, i_cache, backlog;

						if ( !fetchOpts.nocache ) {
							try {
								jsonCache[ url ] = response;
							} catch ( error ) {
								return;
							}
						}

						completeJsonFetch( callerId, refId, response, status, xhr, selector );

						if ( jsonCacheBacklog[ url ] ) {
							backlog = jsonCacheBacklog[ url ];

							i_len = backlog.length;

							for ( i = 0; i !== i_len; i += 1 ) {
								i_cache = backlog[ i ];
								completeJsonFetch( i_cache.callerId, i_cache.refId, response, status, xhr, i_cache.selector );
							}
						}

					} )
					.fail( function( xhr, status, error ) {
						$( "#" + callerId ).trigger( {
							type: "json-failed.wb",
							fetch: {
								xhr: xhr,
								status: status,
								error: error,
								refId: refId
							}
						}, this );
					}, this );
			}
		} );
	}
} );

} )( jQuery, wb );

/**
 * @title WET-BOEW JSON Manager
 * @overview Manage JSON dataset, execute JSON patch operation.
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
/*global jsonpointer, jsonpatch */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-jsonmanager",
	selector = "[data-" + componentName + "]",
	initEvent = "wb-init." + componentName,
	postponeEvent = "postpone." + componentName,
	patchesEvent = "patches." + componentName,
	jsonFailedClass = "jsonfail",
	dsNameRegistered = [],
	datasetCache = {},
	datasetCacheSettings = {},
	dsDelayed = {},
	$document = wb.doc,
	defaults = {
		ops: [
			{
				name: "wb-count",
				fn: function( obj, key, tree ) {
					var countme = obj[ key ],
						len = 0, i_len, i,
						filter = this.filter || [ ],
						filternot = this.filternot || [ ];

					if ( !$.isArray( filter ) ) {
						filter = [ filter ];
					}
					if ( !$.isArray( filternot ) ) {
						filternot = [ filternot ];
					}

					if ( ( filter.length || filternot.length ) && $.isArray( countme ) ) {

						// Iterate in obj[key] / item and check if is true for the given path is any.
						i_len = countme.length;

						for ( i = 0; i !== i_len; i = i + 1 ) {
							if ( filterPassJSON( countme[ i ], filter, filternot ) ) {
								len = len + 1;
							}
						}
					} else if ( $.isArray( countme ) ) {
						len = countme.length;
					}
					jsonpatch.apply( tree, [
						{ op: "add", path: this.set, value: len }
					] );
				}
			},
			{
				name: "wb-first",
				fn: function( obj, key, tree ) {
					var currObj = obj[ key ];
					if ( !$.isArray( currObj ) || currObj.length === 0 ) {
						return;
					}

					jsonpatch.apply( tree, [
						{ op: "add", path: this.set, value: currObj[ 0 ] }
					] );
				}
			},
			{
				name: "wb-last",
				fn: function( obj, key, tree ) {
					var currObj = obj[ key ];
					if ( !$.isArray( currObj ) || currObj.length === 0 ) {
						return;
					}

					jsonpatch.apply( tree, [
						{ op: "add", path: this.set, value: currObj[ currObj.length - 1 ] }
					] );
				}
			},
			{
				name: "wb-nbtolocal",
				fn: function( obj, key, tree ) {
					var val = obj[ key ],
						loc = this.locale || window.wb.lang,
						suffix = this.suffix || "",
						prefix = this.prefix || "";

					if ( typeof val === "string" ) {
						val = parseFloat( val );
						if ( isNaN( val ) ) {
							return;
						}
					}

					jsonpatch.apply( tree, [
						{ op: "replace", path: this.path, value: prefix + val.toLocaleString( loc ) + suffix  }
					] );
				}
			},
			{
				name: "wb-toDateISO",
				fn: function( obj, key, tree ) {
					if ( !this.set ) {
						jsonpatch.apply( tree, [
							{ op: "replace", path: this.path, value: wb.date.toDateISO( obj[ key ] ) }
						] );
					} else {
						jsonpatch.apply( tree, [
							{ op: "add", path: this.set, value: wb.date.toDateISO( obj[ key ] ) }
						] );
					}
				}
			},
			{
				name: "wb-toDateTimeISO",
				fn: function( obj, key, tree ) {
					if ( !this.set ) {
						jsonpatch.apply( tree, [
							{ op: "replace", path: this.path, value: wb.date.toDateISO( obj[ key ], true ) }
						] );
					} else {
						jsonpatch.apply( tree, [
							{ op: "add", path: this.set, value: wb.date.toDateISO( obj[ key ], true ) }
						] );
					}
				}
			}
		],
		opsArray: [
			{
				name: "wb-toDateISO",
				fn: function( arr )  {
					var setval = this.set,
						pathval = this.path,
						i, i_len = arr.length;
					for ( i = 0; i !== i_len; i += 1 ) {
						if ( setval ) {
							jsonpatch.apply( arr, [
								{ op: "wb-toDateISO", set: "/" + i + setval, path: "/" + i + pathval }
							] );
						} else {
							jsonpatch.apply( arr, [
								{ op: "wb-toDateISO", path: "/" + i + pathval }
							] );
						}
					}
				}
			},
			{
				name: "wb-toDateTimeISO",
				fn: function( arr ) {
					var setval = this.set,
						pathval = this.path,
						i, i_len = arr.length;
					for ( i = 0; i !== i_len; i += 1 ) {
						if ( setval ) {
							jsonpatch.apply( arr, [
								{ op: "wb-toDateTimeISO", set: "/" + i + setval, path: "/" + i + pathval }
							] );
						} else {
							jsonpatch.apply( arr, [
								{ op: "wb-toDateTimeISO", path: "/" + i + pathval }
							] );
						}
					}
				}
			}
		],
		opsRoot: [],
		settings: { }
	},

	// Add debug information after the JSON manager element
	debugPrintOut = function( $elm, name, json, patches ) {
		$elm.after( "<p lang=\"en\"><strong>JSON Manager Debug</strong> (" +  name + ")</p><ul lang=\"en\"><li>JSON: <pre><code>" + JSON.stringify( json ) + "</code></pre></li><li>Patches: <pre><code>" + JSON.stringify( patches ) + "</code></pre>" );
	},

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm,
			jsSettings = window[ componentName ] || { },
			ops, opsArray, opsRoot,
			i, i_len, i_cache,
			url, dsName;

		if ( elm ) {
			$elm = $( elm );

			// Load handlebars
			Modernizr.load( {

				// For loading multiple dependencies
				load: "site!deps/json-patch" + wb.getMode() + ".js",
				testReady: function() {
					return window.jsonpatch;
				},
				complete: function() {
					var elmData = wb.getData( $elm, componentName );

					if ( !defaults.registered ) {
						ops = defaults.ops.concat( jsSettings.ops || [ ] );
						opsArray = defaults.opsArray.concat( jsSettings.opsArray || [ ] );
						opsRoot = defaults.opsRoot.concat( jsSettings.opsRoot || [ ] );

						if ( ops.length ) {
							for ( i = 0, i_len = ops.length; i !== i_len; i++ ) {
								i_cache = ops[ i ];
								jsonpatch.registerOps( i_cache.name, i_cache.fn );
							}
						}
						if ( opsArray.length ) {
							for ( i = 0, i_len = opsArray.length; i !== i_len; i++ ) {
								i_cache = opsArray[ i ];
								jsonpatch.registerOpsArray( i_cache.name, i_cache.fn );
							}
						}
						if ( opsRoot.length ) {
							for ( i = 0, i_len = opsRoot.length; i !== i_len; i++ ) {
								i_cache = opsRoot[ i ];
								jsonpatch.registerOpsRoot( i_cache.name, i_cache.fn );
							}
						}
						defaults.settings = $.extend( {}, defaults.settings, jsSettings.settings || {} );
						defaults.registered = true;
					}

					dsName = elmData.name;

					if ( !dsName || dsName in dsNameRegistered ) {
						throw "Dataset name must be unique";
					}
					dsNameRegistered.push( dsName );

					url = elmData.url;

					if ( url ) {

						// Fetch the JSON
						$elm.trigger( {
							type: "json-fetch.wb",
							fetch: {
								url: url,
								nocache: elmData.nocache,
								nocachekey: elmData.nocachekey
							}
						} );

						// If the URL is a dataset, make it ready
						if ( url.charCodeAt( 0 ) === 35 && url.charCodeAt( 1 ) === 91 ) {
							wb.ready( $elm, componentName );
						}
					} else {
						wb.ready( $elm, componentName );
					}
				}
			} );
		}
	},


	// Filtering a JSON
	// Return true if trueness && falseness
	// Return false if !( trueness && falseness )
	// trueness and falseness is an array of { "path": "", "value": "" } object
	filterPassJSON = function( obj, trueness, falseness ) {
		var i, i_cache,
			trueness_len = trueness.length,
			falseness_len = falseness.length,
			compareResult = false,
			isEqual;

		if ( trueness_len || falseness_len ) {

			for ( i = 0; i < trueness_len; i += 1 ) {
				i_cache = trueness[ i ];
				isEqual = _equalsJSON( jsonpointer.get( obj, i_cache.path ), i_cache.value );

				if ( i_cache.optional ) {
					compareResult = compareResult || isEqual;
				} else if ( !isEqual ) {
					return false;
				} else {
					compareResult = true;
				}
			}
			if ( trueness_len && !compareResult ) {
				return false;
			}

			for ( i = 0; i < falseness_len; i += 1 ) {
				i_cache = falseness[ i ];
				isEqual = _equalsJSON( jsonpointer.get( obj, i_cache.path ), i_cache.value );

				if ( isEqual && !i_cache.optional || isEqual && i_cache.optional ) {
					return false;
				}
			}

		}
		return true;
	},

	// Utility function to compare two JSON value
	_equalsJSON = function( a, b ) {
		switch ( typeof a ) {
		case "undefined":
			return false;
		case "boolean":
		case "string":
		case "number":
			return a === b;
		case "object":
			if ( a === null ) {
				return b === null;
			}
			if ( $.isArray( a ) ) {
				if (  $.isArray( b ) || a.length !== b.length ) {
					return false;
				}
				for ( var i = 0, l = a.length; i < l; i++ ) {
					if ( !_equalsJSON( a[ i ], b[ i ] ) ) {
						return false;
					}
				}
				return true;
			}
			var bKeys = _objectKeys( b ),
				bLength = bKeys.length;
			if ( _objectKeys( a ).length !== bLength ) {
				return false;
			}
			for ( var i = 0; i < bLength; i++ ) {
				if ( !_equalsJSON( a[ i ], b[ i ] ) ) {
					return false;
				}
			}
			return true;
		default:
			return false;
		}
	},
	_objectKeys = function( obj ) {
		if ( $.isArray( obj ) ) {
			var keys = new Array( obj.length );
			for ( var k = 0; k < keys.length; k++ ) {
				keys[ k ] = "" + k;
			}
			return keys;
		}
		if ( Object.keys ) {
			return Object.keys( obj );
		}
		var keys = [];
		for ( var i in obj ) {
			if ( obj.hasOwnProperty( i ) ) {
				keys.push( i );
			}
		}
		return keys;
	},

	// Create series of patches for filtering
	getPatchesToFilter = function( JSONsource, filterPath, filterTrueness, filterFaslseness ) {
		var filterObj,
			i, i_len;

		if ( !$.isArray( filterTrueness ) ) {
			filterTrueness = [ filterTrueness ];
		}
		if ( !$.isArray( filterFaslseness ) ) {
			filterFaslseness = [ filterFaslseness ];
		}

		filterObj = jsonpointer.get( JSONsource, filterPath );
		if ( $.isArray( filterObj ) ) {
			i_len = filterObj.length - 1;
			for ( i = i_len; i !== -1; i -= 1 ) {
				if ( !filterPassJSON( filterObj[ i ], filterTrueness, filterFaslseness ) ) {
					jsonpatch.apply( JSONsource, [ { op: "remove", path: filterPath + "/" + i } ] );
				}
			}
		}
		return JSONsource;
	};

// IE dedicated patch to support ECMA-402 but limited to English and French number formatting
if ( wb.ie ) {
	Number.prototype.toLocaleString = function( locale ) {

		var splitVal = this.toString().split( "." ),
			integer = splitVal[ 0 ],
			decimal = splitVal[ 1 ],
			intLength = integer.length,
			nbSection = intLength % 3 || 3,
			strValue = integer.substr( 0, nbSection ),
			isFrenchLoc = ( locale === "fr" ),
			thousandSep = ( isFrenchLoc ? " " : "," ),
			i;

		for ( i = nbSection; i < intLength; i = i + 3 ) {
			strValue = strValue + thousandSep + integer.substr( i, 3 );
		}
		if ( decimal.length ) {
			if ( isFrenchLoc ) {
				strValue = strValue + "," + decimal;
			} else {
				strValue = strValue + "." + decimal;
			}
		}
		return strValue;
	};
}

$document.on( "json-failed.wb", selector, function( event ) {
	var elm = event.target,
		$elm;

	if ( elm === event.currentTarget ) {
		$elm = $( elm );
		$elm.addClass( jsonFailedClass );

		// Identify that initialization has completed
		wb.ready( $elm, componentName );
	}
} );

$document.on( "json-fetched.wb", selector, function( event ) {
	var elm = event.target,
		$elm = $( elm ),
		settings,
		dsName,
		JSONresponse = event.fetch.response,
		isArrayResponse = $.isArray( JSONresponse ),
		resultSet,
		i, i_len, i_cache, backlog, selector,
		patches, filterTrueness, filterFaslseness, filterPath;


	if ( elm === event.currentTarget ) {

		settings = wb.getData( $elm, componentName );
		dsName = "[" + settings.name + "]";
		patches = settings.patches || [];
		filterPath = settings.fpath;
		filterTrueness = settings.filter || [];
		filterFaslseness = settings.filternot || [];

		if ( !$.isArray( patches ) ) {
			patches = [ patches ];
		}

		if ( isArrayResponse ) {
			JSONresponse = $.extend( [], JSONresponse );
		} else {
			JSONresponse = $.extend( {}, JSONresponse );
		}

		// Apply a filtering
		if ( filterPath ) {
			JSONresponse = getPatchesToFilter( JSONresponse, filterPath, filterTrueness, filterFaslseness );
		}

		// Apply the patches
		if ( patches.length ) {
			if ( isArrayResponse && settings.wraproot ) {
				i_cache = { };
				i_cache[ settings.wraproot ] = JSONresponse;
				JSONresponse = i_cache;
			}
			jsonpatch.apply( JSONresponse, patches );
		}

		if ( settings.debug ) {
			debugPrintOut( $elm, "initEvent", JSONresponse, patches );
		}

		try {
			datasetCache[ dsName ] = JSONresponse;
		} catch ( error ) {
			return;
		}
		datasetCacheSettings[ dsName ] = settings;

		if ( !settings.wait && dsDelayed[ dsName ] ) {
			backlog = dsDelayed[ dsName ];
			i_len = backlog.length;
			for ( i = 0; i !== i_len; i += 1 ) {
				i_cache = backlog[ i ];
				selector = i_cache.selector;
				if ( selector.length ) {
					try {
						resultSet = jsonpointer.get( JSONresponse, selector );
					} catch  ( e ) {
						throw dsName + " - JSON selector not found: " + selector;
					}
				} else {
					resultSet = JSONresponse;
				}
				$( "#" + i_cache.callerId ).trigger( {
					type: "json-fetched.wb",
					fetch: {
						response: resultSet,
						status: "200",
						refId: i_cache.refId,
						xhr: null
					}
				}, this );
			}
		}

		// Identify that initialization has completed
		wb.ready( $elm, componentName );
	}
} );

// Apply patches to a preloaded JSON data
$document.on( patchesEvent, selector, function( event ) {
	var elm = event.target,
		$elm = $( elm ),
		patches = event.patches,
		filterPath = event.fpath,
		filterTrueness = event.filter || [],
		filterFaslseness = event.filternot || [],
		isCumulative = !!event.cumulative,
		settings,
		dsName,
		dsJSON, resultSet,
		delayedLst,
		i, i_len, i_cache, pntrSelector;

	if ( elm === event.currentTarget && $.isArray( patches ) ) {
		settings = wb.getData( $elm, componentName );

		if ( !settings ) {
			return true;
		}
		dsName = "[" + settings.name + "]";

		if ( !dsDelayed[ dsName ] ) {
			throw "Applying patched on undefined dataset name: " + dsName;
		}

		dsJSON = datasetCache[ dsName ];
		if ( !isCumulative ) {
			dsJSON = $.extend( true, ( $.isArray( dsJSON ) ? [] : {} ), dsJSON );
		}

		// Apply a filtering
		if ( filterPath ) {
			dsJSON = getPatchesToFilter( dsJSON, filterPath, filterTrueness, filterFaslseness );
		}

		jsonpatch.apply( dsJSON, patches );

		if ( settings.debug ) {
			debugPrintOut( $elm, "patchesEvent", dsJSON, patches );
		}

		delayedLst = dsDelayed[ dsName ];
		i_len = delayedLst.length;
		for ( i = 0; i !== i_len; i += 1 ) {
			i_cache = delayedLst[ i ];
			pntrSelector = i_cache.selector;
			if ( pntrSelector.length ) {
				try {
					resultSet = jsonpointer.get( dsJSON, pntrSelector );
				} catch  ( e ) {
					throw dsName + " - JSON selector not found: " + pntrSelector;
				}
			} else {
				resultSet = dsJSON;
			}
			$( "#" + i_cache.callerId ).trigger( {
				type: "json-fetched.wb",
				fetch: {
					response: resultSet,
					status: "200",
					refId: i_cache.refId,
					xhr: null
				}
			}, this );
		}
	}
} );


// Used by the JSON-fetch plugin for when trying fetching a resource that is mapped a dataset name
$document.on( postponeEvent, function( event ) {
	var jsonPostpone = event.postpone,
		dsName = jsonPostpone.dsname,
		callerId = jsonPostpone.callerId,
		refId = jsonPostpone.refId,
		selector = jsonPostpone.selector,
		resultSet;

	if ( !dsDelayed[ dsName ] ) {
		dsDelayed[ dsName ] = [ ];
	}

	// Add to the delayed updates list
	dsDelayed[ dsName ].push( {
		"callerId": callerId,
		"refId": refId,
		"selector": selector
	} );

	// Send the data if the dataset is ready?
	if ( datasetCache[ dsName ] && !datasetCacheSettings[ dsName ].wait ) {
		resultSet = datasetCache[ dsName ];
		if ( selector.length ) {
			try {
				resultSet = jsonpointer.get( resultSet, selector );
			} catch  ( e ) {
				throw dsName + " - JSON selector not found: " + selector;
			}
		}
		$( "#" + callerId ).trigger( {
			type: "json-fetched.wb",
			fetch: {
				response: resultSet,
				status: "200",
				refId: refId,
				xhr: null
			}
		}, this );
	}

} );

/*
 * Integration with wb-fieldflow
 *
 */
function pushData( $elm, prop, data, reset ) {
	var dtCache = $elm.data( prop );
	if ( !dtCache || reset ) {
		dtCache = [];
	}
	dtCache.push( data );
	return $elm.data( prop, dtCache );
}

// Fieldflow "op" action
$document.on( "op.action.wb-fieldflow", ".wb-fieldflow", function( event, data ) {

	if ( !data.op ) {
		return;
	}

	// Postpone the event for form submission
	data.preventSubmit = true;
	pushData( $( data.provEvt ), "wb-fieldflow-submit", data );
} );

// Fieldflow "op" submit
$document.on( "op.submit.wb-fieldflow", ".wb-fieldflow", function( event, data ) {

	// Get the hbs Plugin
	var op = data.op,
		source = data.source,
		ops;

	if ( !op ) {
		return true;
	}

	if ( !$.isArray( op ) ) {
		ops = [];
		ops.push( op );
	} else {
		ops = op;
	}

	$( source ).trigger( {
		type: "patches.wb-jsonmanager",
		patches: ops
	} );
} );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );


// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/**
 * @title Menu for GCWeb v5
 * @overview Menu keyboard and mouse interaction with supporting responsiveness
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
( function( $, wb ) {
"use strict";

var componentName = "gcweb-menu",
	selector = ".gcweb-menu",
	initEvent = "wb-init" + selector,
	$document = wb.doc,
	selectorAjaxed =  selector + " [data-ajax-replace]," + selector + " [data-ajax-append]," + selector + " [data-ajax-prepend]," + selector + " [data-wb-ajax]",
	globalTimeoutOn,
	globalTimeoutOff,
	hoverDelay = 350,
	justOpened,
	isMobileMode, // Mobile vs Desktop
	isMediumView,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			ajaxFetch;
		if ( elm ) {

			// If the menu item are ajaxed in, initialize after the ajax is completed
			ajaxFetch = elm.querySelector( selectorAjaxed );

			if ( !ajaxFetch ) {
				onAjaxLoaded( elm.firstChild );
			}


		}
	},
	onAjaxLoaded = function( subElm ) {
		var $elm = $( subElm ).parentsUntil( selector ).parents(),
			htmlClassName = document.querySelector( "html" ).className;
		isMobileMode = htmlClassName.indexOf( "smallview" ) !== -1;
		isMediumView = htmlClassName.indexOf( "mediumview" ) !== -1;

		if ( isMobileMode || isMediumView ) {
			setMnu3LevelOrientationExpandState( false, isMediumView );
		}

		// Identify that initialization has completed
		wb.ready( $elm, componentName );
	};

function OpenMenu( elm ) {

	// If already open, do nothing
	if ( elm.getAttribute( "aria-expanded" ) === "true" ) {
		return;
	}

	// Close the one that is currently open for this level and deeper
	var parentMenu = elm.parentElement.parentElement;

	var menuOpen = parentMenu.querySelector( "[aria-haspopup][aria-expanded=true]:not([data-keep-expanded=md-min])" );

	// Only close other menu in tablet and desktop mode
	if ( menuOpen && !isMobileMode ) {
		CloseMenu( menuOpen, true );
	}

	// Open the menu
	elm.setAttribute( "aria-expanded", "true" );

	justOpened = elm;
	setTimeout( function() {
		justOpened = false;
	}, hoverDelay );

}
function CloseMenu( elm, force ) {

	// Ensure elm is targeted on the haspopup element
	if ( !elm.hasAttribute( "aria-haspopup" ) ) {
		elm = elm.previousElementSibling;
	}

	if ( !force ) {

		// Can the menu be closed?
		// Get the menu item that has the focus.
		var currentFocusIsOn = elm.nextElementSibling.querySelector( "[role=menuitem]:focus" );
		var siblingHasFocus = elm.parentElement.parentElement.querySelector( "[role=menuitem]:focus" );

		// Check if we keep the menu opon
		if ( currentFocusIsOn || siblingHasFocus === elm ) {
			return;
		}
	}

	elm.setAttribute( "aria-expanded", "false" );
}

// On hover, wait for the delay before to open the menu
function OpenMenuWithDelay( elm ) {

	if ( elm.dataset.keepExpanded === "md-min" ) {
		return;
	}

	// Prevent any pending to be open to trigger
	clearTimeout( globalTimeoutOn );

	globalTimeoutOn = setTimeout( function() {
		OpenMenu( elm );
	}, hoverDelay );
}
function CloseMenuWithDelay( elm ) {

	if ( elm.dataset.keepExpanded === "md-min" ) {
		return;
	}

	clearTimeout( globalTimeoutOff );

	globalTimeoutOff = setTimeout( function() {
		CloseMenu( elm );
	}, hoverDelay );
}

// Open menu on mouse hovering
$document.on( "mouseenter", selector + " ul [aria-haspopup]", function( event ) {

	// There is no "mouseenter" in mobile
	if ( !isMobileMode ) {
		clearTimeout( globalTimeoutOff );
		OpenMenuWithDelay( event.currentTarget );
	}
} );


$document.on( "focusin", selector + " ul [aria-haspopup]", function( event ) {

	// Don't open the submenu
	if ( isMobileMode ) {
		return;
	}

	// Open the menu, no delay
	OpenMenu( event.currentTarget );

} );

// The user get inside the submenu, we should cancel the "close" with delay event
$document.on( "mouseenter focusin", selector + " [aria-haspopup] + [role=menu]", function( event ) {

	// Prevent the menu to collapse
	// Note: elm.id is already defined because of the mouseenter event of the parent menu element

	var elm = event.currentTarget.previousElementSibling;

	if ( elm.dataset.keepExpanded === "md-min" ) {
		return;
	}

	// There is no "mouseenter" in mobile and ensure it don't get trigger when activating the button menu
	if ( isMobileMode || justOpened === event.currentTarget ) {
		return;
	}

	clearTimeout( globalTimeoutOff );
} );


$document.on( "mouseleave", selector + " [aria-haspopup]", function( event ) {

	// There is no "mouseenter" in mobile
	if ( !isMobileMode ) {
		clearTimeout( globalTimeoutOn );
		CloseMenuWithDelay( event.currentTarget );
	}
} );

$document.on( "focusout", selector + " [aria-haspopup]", function( event ) {

	// Don't close the submenu
	if ( isMobileMode ) {
		return;
	}

	// Don't close it if the user go in the submenu
	CloseMenuWithDelay( event.currentTarget );
} );

$document.on( "mouseleave focusout", selector + " [aria-haspopup] + [role=menu]", function( event ) {

	// Collapse the menu
	// Note: elm.id is already defined because of the mouseenter event

	var elm = event.currentTarget.previousElementSibling;

	if ( elm.dataset.keepExpanded === "md-min" ) {
		return;
	}

	// There is no "mouseleave" in mobile
	if ( isMobileMode ) {
		return;
	}

	CloseMenuWithDelay( event.currentTarget );
} );


/* **** Do we need to handle the click??? that will be handled by the "focusin" and "focusout" if something */
/*
   Menu current state is...       | Action
  --------------------------------+------------------
    Open                          |  Close the menu
  --------------------------------+------------------
    Delay to be open              |  Open the menu right now
  --------------------------------+------------------
    Short delay after it was open |  Keep the menu open
  --------------------------------+------------------
    Close                         |  Open the menu
  --------------------------------+------------------
*/

// Open right away the popup
$document.on( "click", selector + " [aria-haspopup]", function( event ) {

	var elm = event.currentTarget,
		elmToGiveFocus;

	// Only for mobile view or the menu button
	if ( isMobileMode || elm.nodeName === "BUTTON" ) {

		// Toggle
		if ( elm.getAttribute( "aria-expanded" ) === "true" ) {
			if ( justOpened !== elm ) {
				CloseMenu( elm, true );
			}
		} else {
			OpenMenu( elm );

			// Focus on the first menu item
			elmToGiveFocus = elm.nextElementSibling.querySelector( "[role=menuitem]" );
			elmToGiveFocus.focus();
			elmToGiveFocus.setAttribute( "tabindex", "0" );

		}
	}

	// Stop default behaviour
	event.stopImmediatePropagation();
	event.preventDefault();
} );

// This is for the "most requested" menu item
function setMnu3LevelOrientationExpandState( isVertical, isExpanded ) {
	var mnu3Level = document.querySelectorAll( "[role=menu] [role=menu] [role=menuitem][aria-haspopup=true]" ),
		i, i_len = mnu3Level.length,
		expandState = ( isExpanded ? "true" : "false" ),
		orientation = ( isVertical ? "vertical" : "horizontal" ),
		expandStateItem = expandState;

	for ( i = 0; i < i_len; i++ ) {

		// Keep it expanded if focus are inside submenu
		expandStateItem = ( mnu3Level[ i ].nextElementSibling.querySelector( "[role=menuitem]:focus" ) ? "true" : expandState );

		mnu3Level[ i ].setAttribute( "aria-expanded", expandStateItem );
		mnu3Level[ i ].parentElement.previousElementSibling.setAttribute( "aria-orientation", orientation );
	}
}

// Change the main menu mode
$document.on( wb.resizeEvents, function( event ) {

	switch ( event.type ) {
	case "xxsmallview":
	case "xsmallview":
	case "smallview":
		isMobileMode = true;
		setMnu3LevelOrientationExpandState( false, false );
		break;
	case "mediumview":
		isMobileMode = false;
		setMnu3LevelOrientationExpandState( false, true );
		break;
	case "largeview":
	case "xlargeview":
	default:
		isMobileMode = false;
		setMnu3LevelOrientationExpandState( true, true );
	}
} );

/**
* keycode - determines what action to take when a key is pressed
* @private
* @param {object} event - the event that contains information about the key
* @param {string} orientation - whether the menu is horizontal or vertical (navigated with left/right or up/down)
* @returns name of action to take or false if invalid key
* @type string / bool
*/
function keycode( code ) {

	if ( code === 9 ) {
		return "tab";
	}

	if ( code === 13 || code === 32 ) {
		return "enter";
	}
	if ( code === 27 ) {
		return "esc";
	}
	if ( code === 39 ) { //right arrow
		return "right";
	}
	if ( code === 37 ) { //left arrow
		return "left";
	}
	if ( code === 40 ) { //down arrow
		return "down";
	}
	if ( code === 38 ) { //up arrow
		return "up";
	}


	return false;
};

// Global hook, close the menu on "ESC" when its state are open.
$document.on( "keydown", function( event ) {
	if ( event.keyCode === 27 ) {
		CloseMenu( document.querySelector( selector + " button" ) );
	}
} );

// Keyboard navigation for each menu item
$document.on( "keydown", selector + " button, " + selector + " [role=menuitem]", function( event ) {

	var elm = event.currentTarget,
		key = keycode( event.charCode || event.keyCode );


	// Get the menu item that has the focus.
	var currentFocusIsOn = document.querySelector( "[role=menuitem]:focus" ) || elm,
		parent = currentFocusIsOn.parentElement,
		grandParent = parent.parentElement,
		isCurrentButtonMenu = ( currentFocusIsOn.nodeName === "BUTTON" );

	// FIRST CHILD POPOP
	var firstChildPopup;
	if ( currentFocusIsOn.nextElementSibling ) {
		firstChildPopup = currentFocusIsOn.nextElementSibling.querySelector( "[role='menuitem']" );
	}

	// NEXT MENU ITEM
	var nextSiblingMenuItem;
	if ( parent.nextElementSibling ) {
		nextSiblingMenuItem = parent.nextElementSibling.querySelector( "[role=menuitem]" );

		// Check if we have hit a separator, go to the next one. The separator can't be the last item and are not followed by another separator.
		if ( !nextSiblingMenuItem ) {
			nextSiblingMenuItem = parent.nextElementSibling.nextElementSibling.querySelector( "[role=menuitem]" );
		}
	} else {

		// Get first item and take in consideration if the sub-menu is persistant open
		if ( !isMobileMode && currentFocusIsOn.dataset.keepExpanded && firstChildPopup ) {

			// The current focus is on a persistant open menu item, the next menu item is the first child
			nextSiblingMenuItem = firstChildPopup;
		} else if ( !isMobileMode && grandParent.previousElementSibling.dataset.keepExpanded ) {

			// The current focus is on the last item of the persistant menu
			// Should go the next item of the parent menu item (not supported),
			// but in our use case this is the first item of the parent men
			nextSiblingMenuItem = grandParent.parentElement.parentElement.querySelector( "[role=menuitem]" );
		} else {
			nextSiblingMenuItem = grandParent.querySelector( "[role=menuitem]" );
		}
	}

	// PARENT
	var parentPopupBtn = grandParent.previousElementSibling;

	// PREVIOUS MENU ITEM
	var previousSiblingMenuItem;
	if ( parent.previousElementSibling ) {
		previousSiblingMenuItem = parent.previousElementSibling.querySelector( "[role=menuitem]" );

		// Check if we have hit a separator. A separator is not the first items
		if ( !previousSiblingMenuItem ) {
			previousSiblingMenuItem = parent.previousElementSibling.previousElementSibling.querySelector( "[role=menuitem]" );
		}
	} else {

		// Get the last item, take in consideration one level of persistant open menu
		if ( !isMobileMode && grandParent.lastElementChild.querySelector( "[role=menuitem]" ).dataset.keepExpanded ) {

			// The last item is persistant open, get it's last children
			previousSiblingMenuItem = grandParent.lastElementChild.querySelector( "[role=menuitem]" ).nextElementSibling.lastElementChild.querySelector( "[role=menuitem]" );
		} else if ( !isMobileMode && grandParent.previousElementSibling.dataset.keepExpanded && parentPopupBtn ) {

			// Get the parent, this is the first items of a persistant open menu
			previousSiblingMenuItem = parentPopupBtn;
		} else if ( isCurrentButtonMenu ) {

			// Get the last menu item
			previousSiblingMenuItem = currentFocusIsOn.nextElementSibling.lastElementChild.querySelector( "[role=menuitem]" );
		} else {

			// Get the last item of the current menu
			previousSiblingMenuItem = grandParent.lastElementChild.querySelector( "[role=menuitem]" );
		}

	}

	// NEXT Menu item after the Separator
	// Next Separator Orientation
	var isNextSeparatorOrientationVertical,
		nextSeparatorMenuItem,
		iteratedItem = parent;
	while ( iteratedItem.nextElementSibling ) {
		iteratedItem = iteratedItem.nextElementSibling;
		if ( iteratedItem.getAttribute( "role" ) === "separator" ) {
			if ( iteratedItem.hasAttribute( "aria-orientation" ) && iteratedItem.getAttribute( "aria-orientation" ) === "vertical" ) {
				isNextSeparatorOrientationVertical = true;
			} else {
				isNextSeparatorOrientationVertical = false;
			}
			nextSeparatorMenuItem = iteratedItem.nextElementSibling.querySelector( "[role=menuitem]" );
			break;
		}
	}

	// Previous Menu item after the Separator
	// Previous Separator Orientation
	var isPreviousSeparatorOrientationVertical,
		previousSeparatorMenuItem;
	iteratedItem = parent;
	while ( iteratedItem.previousElementSibling ) {
		iteratedItem = iteratedItem.previousElementSibling;
		if ( iteratedItem.getAttribute( "role" ) === "separator" ) {
			if ( previousSeparatorMenuItem ) {
				break; // Run until we reach the first item or the next separator.
			}
			if ( iteratedItem.hasAttribute( "aria-orientation" ) && iteratedItem.getAttribute( "aria-orientation" ) === "vertical" ) {
				isPreviousSeparatorOrientationVertical = true;
			} else {
				isPreviousSeparatorOrientationVertical = false;
			}
			previousSeparatorMenuItem = iteratedItem.previousElementSibling;
		}
		if ( previousSeparatorMenuItem ) {
			previousSeparatorMenuItem = iteratedItem; // Run until we reach the first item or the next separator.
		}
	}

	// Ensure we are pointing to the first menu item
	if ( previousSeparatorMenuItem ) {
		previousSeparatorMenuItem = previousSeparatorMenuItem.querySelector( "[role=menuitem]" );
	}

	/*
	 * Developer note:

	For the "Most requested" menu.
	- Don't skip that navigation item when it receive the focus
	- when looking for the last, if that menuitem is expanded, then grab it's last items.
	*/

	if ( !isCurrentButtonMenu ) {
		currentFocusIsOn.setAttribute( "tabindex", "-1" );
	}

	var elmToGiveFocus;
	if ( key === "down" && nextSiblingMenuItem  ) {
		elmToGiveFocus = nextSiblingMenuItem;
	} else if ( key === "up" && previousSiblingMenuItem ) {
		elmToGiveFocus = previousSiblingMenuItem;
	} else if ( ( !isCurrentButtonMenu && key === "right" && firstChildPopup ) || key === "enter" && firstChildPopup ) {
		elmToGiveFocus = firstChildPopup;
	} else if ( isNextSeparatorOrientationVertical && key === "right" ) {
		elmToGiveFocus = nextSeparatorMenuItem;
	} else if ( isPreviousSeparatorOrientationVertical && key === "left" ) {
		elmToGiveFocus = previousSeparatorMenuItem;
	} else if ( ( !isCurrentButtonMenu && key === "left" ) || ( !isCurrentButtonMenu && key === "esc" ) ) {
		elmToGiveFocus = parentPopupBtn;
	} else if ( key  === "tab"  ) {
		return;
	}

	if ( !isCurrentButtonMenu && ( key === "left" ||  key === "esc" ) ) {

		// Close the menu
		if ( isMobileMode &&
				elmToGiveFocus.getAttribute( "aria-expanded" ) === "true" ) {
			elmToGiveFocus.setAttribute( "aria-expanded", "false" );
		}
	}

	// Focus on the element
	if ( elmToGiveFocus ) {

		// Open the sub-menu automatically for mobile and menu button
		if ( isMobileMode || isCurrentButtonMenu ) {
			var popup = elmToGiveFocus.parentElement.parentElement.previousElementSibling;
			if ( popup.getAttribute( "aria-expanded" ) !== "true" ) {

				// Open the menu, no delay
				OpenMenu( popup );
			}
		}

		elmToGiveFocus.setAttribute( "tabindex", "0" );
		elmToGiveFocus.focus();

		// Stop default behaviour
		event.stopImmediatePropagation();
		event.preventDefault();
	}

} );

// When the menu item are ajaxed in
$document.on( "ajax-fetched.wb ajax-failed.wb", selectorAjaxed, function( event ) {

	var elm = event.target;

	// Filter out any events triggered by descendants
	if ( event.currentTarget === elm ) {
		onAjaxLoaded( elm );
	}
} );


// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, wb );

/**
 * @title WET-BOEW URL mapping
 * @overview Execute pre-configured action based on url query string
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @duboisp
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-urlmapping",
	selector = "[data-" + componentName + "]",
	initEvent = "wb-init." + componentName,
	doMappingEvent = "domapping." + componentName,
	$document = wb.doc,
	authTrigger,
	patchDefault = {
		op: "move",
		path: "{base}",
		from: "{base}/{qval}"
	},

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm;

		if ( elm ) {
			$elm = $( elm );

			// Only allow the first wb-urlmapping instance to trigger WET
			if ( !authTrigger ) {
				authTrigger = elm;
			}

			// Identify that initialization has completed
			wb.ready( $elm, componentName );

			if ( !wb.isReady ) {

				// Execution of any action after WET is ready
				$document.one( "wb-ready.wb", function( ) {
					$elm.trigger( doMappingEvent );
				} );
			} else {
				$elm.trigger( doMappingEvent );
			}
		}
	},
	executeAction = function( $elm, cValue, actions ) {

		var i, i_len, i_cache, cache_action,
			regMatchValue,
			pattern, cValueParsed,
			defaultValue;

		if ( !$.isArray( actions ) ) {
			actions = [ actions ];
		} else {
			actions = $.extend( [], actions );
		}

		// Fix any action that was defined as query dependent
		i_len = actions.length;
		for ( i = 0; i !== i_len; i += 1 ) {
			i_cache = actions[ i ];

			cache_action = i_cache.action;
			if ( !cache_action ) {
				continue;
			}

			regMatchValue = i_cache.match;
			defaultValue = i_cache.default;
			cValueParsed = false;

			// Abort if we try to match and there is no default set
			if ( regMatchValue && !defaultValue ) {
				throw "'match' and 'default' property need to be set";
			}

			// Validate the value if it match the regular expression / string pattern.
			if ( !!defaultValue && cValue.length && typeof regMatchValue === "string" ) {
				try {
					pattern = new RegExp( regMatchValue );
					cValueParsed = pattern.exec( cValue );

					// Fall back on default if no match found
					cValueParsed = !!cValueParsed ? cValueParsed : defaultValue;
				} catch ( e ) { }
			}

			if ( !i_cache.qval && cValueParsed ) {
				i_cache.qval = cValueParsed;
			}


			switch ( cache_action ) {

			case "patch":
				var ops = i_cache.patches,
					basePntr = i_cache.base || "/";
				if ( !ops ) {
					ops = [ patchDefault ];
					i_cache.cumulative = true;
				}
				if ( !$.isArray( ops ) ) {
					ops = [ ops ];
				}
				ops = patchFixArray( ops, i_cache.qval, basePntr );
				i_cache.patches = ops;
				break;
			case "ajax":
				if ( i_cache.trigger && $elm[ 0 ] !== authTrigger ) {
					i_cache.trigger = false;
				}
				i_cache.url = replaceMappingKeys( i_cache.url, i_cache.qval );
				break;
			case "tblfilter":
				i_cache.value = replaceMappingKeys( i_cache.value, i_cache.qval );
				break;
			default:

				// Just do the action as defined.
				break;

			}
		}


		// Send the list of actions to be dispatched by the actionmng
		$elm.trigger( {
			type: "do.wb-actionmng",
			actions: actions
		} );
	},
	patchFixArray = function( patchArray, val, basePointer ) {

		var i, i_len = patchArray.length, i_cache,
			patchesFixed = [], patch_cache;

		if ( !basePointer ) {
			basePointer = "/";
		}

		for ( i = 0; i !== i_len; i += 1 ) {
			i_cache = patchArray[ i ];
			patch_cache = $.extend( { }, i_cache );
			if ( i_cache.path ) {
				patch_cache.path = replaceMappingKeys( i_cache.path, val, basePointer );
			}
			if ( i_cache.from ) {
				patch_cache.from = replaceMappingKeys( i_cache.from, val, basePointer );
			}
			if ( i_cache.value ) {
				patch_cache.value = replaceMappingKeys( i_cache.value, val, basePointer );
			}
			patchesFixed.push( patch_cache );
		}
		return patchesFixed;
	},
	replaceMappingKeys = function( search, val, basePointer ) {
		if ( !val ) {
			return search;
		}
		if ( !basePointer ) {
			return search.replace( /\{qval\}/, val );
		} else {
			return search.replace( /\{qval\}/, val ).replace( /\{base\}/, basePointer );
		}
	},
	getUrlParams = function() {

		// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript#answer-2880929
		var urlParams = {},
			pl = /\+/g, // Regex for replacing addition symbol with a space
			search = /([^&=]+)=?([^&]*)/g,
			decode = function( s ) {
				return decodeURIComponent( s.replace( pl, " " ) );
			},
			query = window.location.search.substring( 1 ),
			match = search.exec( query );

		while ( match ) {
			urlParams[ decode( match[ 1 ] ) ] = decode( match[ 2 ] );
			match = search.exec( query );
		}

		return urlParams;
	};

$document.on( doMappingEvent, selector, function( event ) {

	var $elm = $( event.target ),
		urlParams = getUrlParams(),
		cKey, cValue, settingQuery,
		settings = $.extend( {}, window[ componentName ] || { }, wb.getData( $elm, componentName ) );

	for ( cKey in urlParams ) {
		cValue = urlParams[ cKey ];
		settingQuery = settings[ cKey + "=" + cValue ] || settings[ cKey ];

		if ( typeof settingQuery === "object" ) {
			executeAction( $elm, cValue, settingQuery );
			if ( !settings.multiplequery ) {
				break;
			}
		}
	}
} );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );

/*
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
( function( $, document, wb ) {
"use strict";

var $document = wb.doc,
	searchSelector = "#wb-srch-q",
	$search = $( searchSelector ),
	$searchDataList = $( "#" + $search.attr( "list" ) ),

//Search Autocomplete
	queryAutoComplete = function( query ) {
		if ( query.length > 0 ) {
			$( this ).trigger( {
				type: "ajax-fetch.wb",
				fetch: {
					url: wb.pageUrlParts.protocol + "//clients1.google.com/complete/search?client=partner&sugexp=gsnos%2Cn%3D13&gs_rn=25&gs_ri=partner&partnerid=" + window.encodeURIComponent( "008724028898028201144:knjjdikrhq0+lang:" + wb.lang ) + "&types=t&ds=cse&cp=3&gs_id=b&hl=" + wb.lang + "&q=" + encodeURI( query ),
					dataType: "jsonp",
					jsonp: "callback"
				}
			} );
		}
	};

//Queries  the autocomplete API
$document.on( "change keyup", searchSelector, function( event ) {
	var target = event.target,
		query = event.target.value,
		which = event.which;

	switch ( event.type ) {
	case "change":
		queryAutoComplete.call( target, query );
		break;
	case "keyup":
		if ( !( event.ctrlKey || event.altKey || event.metaKey ) ) {

			// Spacebar, a - z keys, 0 - 9 keys punctuation, and symbols
			if ( which === 32 || ( which > 47 && which < 91 ) ||
				( which > 95 && which < 112 ) || ( which > 159 && which < 177 ) ||
				( which > 187 && which < 223 ) ) {
				queryAutoComplete.call( target, query );
			}
		}
	}
} );

//Processes the autocomplete API results
$document.on( "ajax-fetched.wb", searchSelector, function( event ) {
	var suggestions = event.fetch.response[ 1 ],
		lenSuggestions = suggestions.length,
		options = "",
		indIssue, issue;

	$searchDataList.empty();

	for ( indIssue = 0; indIssue < lenSuggestions; indIssue += 1 ) {
		issue = suggestions[ indIssue ];

		options += "<option label=\"" + issue[ 0 ] + "\" value=\"" + issue[ 0 ] + "\"></option>";
	}

	if ( wb.ielt10 ) {
		options = "<select>" + options + "</select>";
	}

	$searchDataList.append( options );

	$search.trigger( "wb-update.wb-datalist" );
} );

window[ "wb-data-ajax" ] = {
	corsFallback: function( fetchObj ) {
		fetchObj.url = fetchObj.url.replace( ".html", ".htmlp" );
		return fetchObj;
	}
};

//Report a problem form - reveal textbox when checkbox is selected
$( "[data-reveal]" ).change( function() {
	var $elm = $( this ),
		selector = $elm.attr( "data-reveal" );
	return ( $elm.is( ":checked" ) ) ? $( selector ).removeClass( "hide" ) : $( selector ).addClass( "hide" );
} );


} )( jQuery, document, wb );
