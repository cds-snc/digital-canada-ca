/**
 * @title WET-BOEW variant of Starcounter-Jack/JSON-Patch
 * @overview Same as json-patch.js but added extensibility support, changed the behaviour of patch test to be atomic and code was fully eslinted.
 * @license MIT
 * @author @duboisp @Starcounter-Jack
 *
 * ----
 *
 * https://github.com/Starcounter-Jack/JSON-Patch
 * json-patch-duplex.js version: 1.1.4
 * (c) 2013 Joachim Wester
 * MIT license
 */
var jsonpatch;
( function ( jsonpatch ) {
    var _objectKeys = function ( obj ) {
            if ( _isArray( obj ) ) {
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
        _equals = function( a, b ) {
            switch (typeof a) {
                case "undefined": //backward compatibility, but really I think we should return false
                case "boolean":
                case "string":
                case "number":
                    return a === b;
                case "object":
                    if ( a === null ) {
                        return b === null;
                    }
                    if ( _isArray( a ) ) {
                        if ( !_isArray( b ) || a.length !== b.length ) {
                            return false;
                        }
                        for ( var i = 0, l = a.length; i < l; i++ ) {
                            if ( !_equals( a[ i ], b[ i ] ) ) {
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
                        if ( !_equals( a[ i ], b[ i ] ) ) {
                            return false;
                        }
                    }
                    return true;
                default:
                    return false;
            }
        },

        /* We use a Javascript hash to store each-
         function. Each hash entry (property) uses
         the operation identifiers specified in rfc6902.
         In this way, we can map each patch operation
         to its dedicated function in efficient way.
         */
        // The operations applicable to an object */
        objOps = {
            add: function( obj, key ) {
                obj[ key ] = this.value;
            },
            remove: function (obj, key) {
                var removed = obj[key];
                delete obj[key];
                return removed;
            },
            replace: function( obj, key ) {
                var removed = obj[ key ];
                obj[ key ] = this.value;
                return removed;
            },
            move: function( obj, key, tree ) {
                var getOriginalDestination = { op: "_get", path: this.path };
                apply( tree, [ getOriginalDestination ] );

                // In case value is moved up and overwrites its ancestor
                var original = getOriginalDestination.value === undefined ? undefined : JSON.parse( JSON.stringify( getOriginalDestination.value ) ),
                    temp = { op: "_get", path: this.from };
                apply( tree, [ temp ] );
                apply( tree, [
                    { op: "remove", path: this.from }
                ] );
                apply( tree, [
                    { op: "add", path: this.path, value: temp.value }
                ] );
                return original;
            },
            copy: function ( obj, key, tree ) {
                var temp = { op: "_get", path: this.from };
                apply( tree, [ temp ] );
                apply( tree, [
                    { op: "add", path: this.path, value: temp.value }
                ] );
            },
            test: function ( obj, key ) {
                return _equals( obj[ key ], this.value );
            },
            _get: function ( obj, key ) {
                this.value = obj[ key ];
            }
        },

        // The operations applicable to an array. Many are the same as for the object
        arrOps = {
            add: function ( arr, i ) {
                arr.splice( i, 0, this.value );

                // this may be needed when using "-" in an array
                return i;
            },
            remove: function ( arr, i ) {
                var removedList = arr.splice( i, 1 );
                return removedList[ 0 ];
            },
            replace: function ( arr, i ) {
                var removed = arr[ i ];
                arr[ i ] = this.value;
                return removed;
            },
            move: objOps.move,
            copy: objOps.copy,
            test: objOps.test,
            _get: objOps._get
        },

        // The operations applicable to object root. Many are the same as for the object
        rootOps = {
            add: function ( obj ) {
                rootOps.remove.call( this, obj );
                for ( var key in this.value ) {
                    if ( this.value.hasOwnProperty( key ) ) {
                        obj[ key ] = this.value[ key ];
                    }
                }
            },
            remove: function ( obj ) {
                var removed = {}, key;
                for ( key in obj ) {
                    if ( obj.hasOwnProperty( key ) ) {
                        removed[ key ] = obj[ key ];
                        objOps.remove.call( this, obj, key );
                    }
                }
                return removed;
            },
            replace: function ( obj ) {
                var removed = apply( obj, [
                    { op: "remove", path: this.path }
                ] );
                apply( obj, [
                    { op: "add", path: this.path, value: this.value }
                ] );
                return removed[ 0 ];
            },
            move: objOps.move,
            copy: objOps.copy,
            test: function ( obj ) {
                return ( JSON.stringify( obj ) === JSON.stringify( this.value ) );
            },
            _get: function ( obj ) {
                this.value = obj;
            }
        },

        /**
         * Apply a json-patch operation on an object tree
         * Returns an array of results of operations.
         * Each element can either be a boolean (if op === "test") or
         * the removed object (operations that remove things)
         * or just be undefined
         *
          @param  {object}   Tree 
          @param  {array}   Array of patches 
          @param  {boolean}  Apply the patch even if test fail, instead test result will be returned
         */
        apply = function( tree, patches, force ) {
            if ( !force ) {

                // Re-order all "test" operation to ensure they are executed first
                patches.sort( function( a, b ) {
                    if ( a.op === "test" && b.op !== "test" ) {
                        return -1;
                    } else if ( b.op === "test" ) {
                        return 1;
                    } else {
                        return 0;
                    }
                } );
            }
            var results = new Array( patches.length ), p = 0, plen = patches.length, patch, key;
            while ( p < plen ) {
                patch = patches[ p ];
                p += 1;
                
                // Find the object
                var path = patch.path || "",
                    op = patch.op,
                    isTest = force ? false : op === "test", // if true, it enforce test to apply subsequent patches
                    keys = path.split( "/" ),
                    obj = tree,
                    t = 1, //skip empty element - http://jsperf.com/to-shift-or-not-to-shift
                    len = keys.length;
                while ( true && obj ) {
                    key = keys[ t ];
                    t += 1;
                    if ( key === undefined ) {
                        if ( t >= len ) {
                            results[ p - 1 ] = rootOps[ op ].call( patch, obj, key, tree ); // Apply patch
                            if ( isTest && !results[ p - 1 ] ) {
                                return tree;
                            }
                            break;
                        }
                    }
                    if ( _isArray( obj ) ) {
                        if ( key === "-" ) {
                            key = obj.length;
                        }
                        else {
                            key = parseInt( key, 10 );
                        }
                        if ( t >= len ) {
                            results[ p - 1 ] = arrOps[ op ].call( patch, obj, key, tree ); // Apply patch
                            if ( isTest && !results[ p - 1] ) {
                                return tree;
                            }
                            break;
                        }
                    }
                    else {
                        if ( key && key.indexOf( "~" ) !== -1 ) {
                            key = key.replace( /~1/g, "/" ).replace( /~0/g, "~" ); // escape chars
                        }
                        if ( t >= len ) {
                            results[ p - 1 ] = objOps[ op ].call( patch, obj, key, tree ); // Apply patch
                            if ( isTest && !results[ p - 1] ) {
                                return tree;
                            }
                            break;
                        }
                    }
                    obj = obj[ key ];
                }
            }
            return results;
        },

        /**
         * Register a custom operation, node in tree
         */
        registerOperation = function( name, fn ) {
            if ( objOps[ name ] ) {
                throw "The operation " + name + " already registered.";
            }
            objOps[ name ] = fn;
        },

        /**
         * Register a custom operation, tree is an array
         */
        registerOperationArray = function( name, fn ) {
            if ( arrOps[ name ] ) {
                throw "The operation " + name + " already registered.";
            }
            arrOps[ name ] = fn;
        },

        /**
         * Register a custom operation, root operation
         */
        registerOperationRoot = function( name, fn ) {
            if ( rootOps[ name ] ) {
                throw "The operation " + name + " already registered.";
            }
            rootOps[ name ] = fn;
        },
        _isArray;

    if ( Array.isArray ) {
        _isArray = Array.isArray;
    }
    else {
        _isArray = function ( obj ) {
            return obj.push && typeof obj.length === "number";
        };
    }

    jsonpatch.apply = apply;
    jsonpatch.registerOps = registerOperation;
    jsonpatch.registerOpsArray = registerOperationArray;
    jsonpatch.registerOpsRoot = registerOperationRoot;

} )( jsonpatch || ( jsonpatch = {} ) );