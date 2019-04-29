/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/imgs/BackSpritesHero.png":
/*!*****************************************!*\
  !*** ./assets/imgs/BackSpritesHero.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "26349cf067803f5613d0578a15c9a8b7.png";

/***/ }),

/***/ "./assets/imgs/all-pokemon.png":
/*!*************************************!*\
  !*** ./assets/imgs/all-pokemon.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3d1518ff754ea154533a20d12f83b9fc.png";

/***/ }),

/***/ "./assets/imgs/areneArgenta.png":
/*!**************************************!*\
  !*** ./assets/imgs/areneArgenta.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "af1476a972ac7bfe5a19e0f7c40769f4.png";

/***/ }),

/***/ "./assets/imgs/argenta.png":
/*!*********************************!*\
  !*** ./assets/imgs/argenta.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "64b524083fe81c248c8588ce403b7540.png";

/***/ }),

/***/ "./assets/imgs/back_sprites.png":
/*!**************************************!*\
  !*** ./assets/imgs/back_sprites.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "34c6decc82d8f7a353d79cbda34a6b9b.png";

/***/ }),

/***/ "./assets/imgs/centrePinterieur.png":
/*!******************************************!*\
  !*** ./assets/imgs/centrePinterieur.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "586a1a0ed248d8d5918adac7663a8344.png";

/***/ }),

/***/ "./assets/imgs/centrePokemon.png":
/*!***************************************!*\
  !*** ./assets/imgs/centrePokemon.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a10189de1d226ddcff1d50a6c46a833e.png";

/***/ }),

/***/ "./assets/imgs/dresseurRougeChatain.png":
/*!**********************************************!*\
  !*** ./assets/imgs/dresseurRougeChatain.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "88f60c27dfbbef22c95f395749f0be2c.png";

/***/ }),

/***/ "./assets/imgs/dresseurVert.png":
/*!**************************************!*\
  !*** ./assets/imgs/dresseurVert.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dd4e7ca69bb77386d883e5c50472e5ab.png";

/***/ }),

/***/ "./assets/imgs/dresseurs.png":
/*!***********************************!*\
  !*** ./assets/imgs/dresseurs.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4b9efe6cf8af8877d35fb38efd0f1807.png";

/***/ }),

/***/ "./assets/imgs/pokeshopInside.png":
/*!****************************************!*\
  !*** ./assets/imgs/pokeshopInside.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5196573bc10df4bf1f657d4f9e6bbea5.png";

/***/ }),

/***/ "./assets/imgs/pokeworldmap.png":
/*!**************************************!*\
  !*** ./assets/imgs/pokeworldmap.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b7ab41db89cd0ad149fea836263aea7d.png";

/***/ }),

/***/ "./assets/imgs/sacha.png":
/*!*******************************!*\
  !*** ./assets/imgs/sacha.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "77c72eb6e29b8cb67d1bc48d0b2a339b.png";

/***/ }),

/***/ "./assets/imgs/terrrainTest2.png":
/*!***************************************!*\
  !*** ./assets/imgs/terrrainTest2.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c0781bf65cced6f6d8c2ee277fdfde39.png";

/***/ }),

/***/ "./assets/imgs/ville2.png":
/*!********************************!*\
  !*** ./assets/imgs/ville2.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "615d3fe3cd45305fab16923b5fb14e86.png";

/***/ }),

/***/ "./assets/musiqueLoop.wav":
/*!********************************!*\
  !*** ./assets/musiqueLoop.wav ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "009bd1ee2df6ea331849526b103a1c8d.wav";

/***/ }),

/***/ "./assets/styles/global.css":
/*!**********************************!*\
  !*** ./assets/styles/global.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./assets/styles/global.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./assets/styles/global.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./assets/styles/global.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "canvas{\n    border: 2px solid black;\n    background-color: grey;\n    width: 100%;\n    height: auto;\n}\n\ncenter{\n  text-align: center;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/UI/Carte.js":
/*!*************************!*\
  !*** ./src/UI/Carte.js ***!
  \*************************/
/*! exports provided: default, ChargeCarte */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargeCarte", function() { return ChargeCarte; });
/* harmony import */ var _map_Porte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map/Porte */ "./src/map/Porte.js");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/globals */ "./src/utils/globals.js");
/* harmony import */ var _utils_render_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render_utils */ "./src/utils/render_utils.js");
/* harmony import */ var _assets_imgs_pokeworldmap_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/imgs/pokeworldmap.png */ "./assets/imgs/pokeworldmap.png");
/* harmony import */ var _assets_imgs_pokeworldmap_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_pokeworldmap_png__WEBPACK_IMPORTED_MODULE_3__);






var Carte = function(){
	this.endroits = [];
	this.selection = 0;
}

Carte.prototype.displayCarte = function(){
	var context = Object(_utils_render_utils__WEBPACK_IMPORTED_MODULE_2__["getContext"])();

	context.fillStyle=_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].couleurPrefere;
	context.fillRect(50,50,800,550);
	context.fillStyle="#000000";
	context.font="20px Georgia";


	var pokeworldmap_img = document.createElement("img");
	pokeworldmap_img.src = _assets_imgs_pokeworldmap_png__WEBPACK_IMPORTED_MODULE_3___default.a;
	context.drawImage(pokeworldmap_img, 0, 0, 240, 160,  70,70,760,510);

	if(this.endroits.length > 0){
		this.endroits[this.selection].displayOnCarte();
	}
}

Carte.prototype.addEndroit= function(endroit){
	this.endroits.push(endroit);
}

Carte.prototype.selectP = function(){
	this.selection++;
	if(this.selection >= this.endroits.length){
		this.selection = 0;
	}
}

Carte.prototype.selectM = function(){
	this.selection--;
	if(this.selection < 0){
		this.selection = this.endroits.length -1;
	}
}

Carte.prototype.voyage = function(){
	this.endroits[this.selection].rejoindreDestination();
}


//-----------------------------------------------------------------------------------------------------------------------------------


var EndroitCarte = function(nom,x,y,porte){
	this.nom = nom;
	this.x=x;		//positions d affichage sur la carte
	this.y=y;
	this.porte = porte;//porte qui n a pas de coordonnées sur la grille
}

EndroitCarte.prototype.rejoindreDestination= function(){
	this.porte.rejoindreDestination();
}


EndroitCarte.prototype.displayOnCarte = function(){
	var context = Object(_utils_render_utils__WEBPACK_IMPORTED_MODULE_2__["getContext"])();
	// console.log(this.nom+" en x:"+this.x+"  y:"+this.y);
	context.fillRect(this.x,this.y,12,12);
	context.fillText(this.nom,650,550);

}

function ChargeCarte(carte){
	carte.addEndroit(new EndroitCarte("Foret",240,220,new _map_Porte__WEBPACK_IMPORTED_MODULE_0__["default"](0,0,0,0,"foret1", _utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"])));
	carte.addEndroit(new EndroitCarte("Ville",320,295,new _map_Porte__WEBPACK_IMPORTED_MODULE_0__["default"](-102,30,712,692,"ville2", _utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"])));
	carte.addEndroit(new EndroitCarte("Argenta",310,395,new _map_Porte__WEBPACK_IMPORTED_MODULE_0__["default"](-102,30,18,198,"argenta", _utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"])));
	carte.addEndroit(new EndroitCarte("Arene Argenta (debug)",310,395,new _map_Porte__WEBPACK_IMPORTED_MODULE_0__["default"](-102,30,-60,42,"areneArgenta", _utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"])));
	return(carte);
}


/* harmony default export */ __webpack_exports__["default"] = (Carte);



/***/ }),

/***/ "./src/UI/Menu.js":
/*!************************!*\
  !*** ./src/UI/Menu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_globals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/globals.js */ "./src/utils/globals.js");
/* harmony import */ var _utils_render_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render_utils.js */ "./src/utils/render_utils.js");





function Menu(){
	this.boutons = [];
	this.boutons[0] = new SousMenu("Pokedex");
	this.boutons[1] = new SousMenu("Pokemon");
	this.boutons[2] = new SousMenu("Inventaire");
	this.boutons[3] = new SousMenu(_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getName());
	this.boutons[4] = new SousMenu("Carte");
	this.boutons[5] = new SousMenu("Sauvegarde");
	this.boutons[6] = new SousMenu("Options");
	this.selection = 0;//indice permettant de situer le curseur
}

Menu.prototype.afficheMenu = function(){
	var context = Object(_utils_render_utils_js__WEBPACK_IMPORTED_MODULE_1__["getContext"])();
	context.fillStyle=_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].couleurPrefere;
	context.fillRect(630,25,250,270);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	for(var i = 0;i<this.boutons.length;i++){
		context.fillText(this.boutons[i].getTitre(),665,80+(i*30));
	}
	this.afficheCurseur();
}


Menu.prototype.afficheCurseur= function(){
	var context = Object(_utils_render_utils_js__WEBPACK_IMPORTED_MODULE_1__["getContext"])();
	context.fillRect(645,72+this.selection*30,5,5);
}

Menu.prototype.selectP = function(){
	this.selection++;
	if(this.selection >= this.boutons.length ){
		this.selection = 0;
	}
}

Menu.prototype.selectM = function(){
	this.selection--;
	if(this.selection < 0 ){
		this.selection = this.boutons.length-1;
	}
}

Menu.prototype.valider = function(){
	switch(this.selection){
		case(0):
			console.log("affiche pokedex");
			_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].hudMode = 2;
		break;
		case(1):
			console.log("affiche pokemon");
			var pokemons = _utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.pokemons;
			console.log(pokemons.length);
			_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].hudMode = 3;
		break;
		case(2):
			_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].hudMode = 4;
			console.log("affiche inventaire");

		break;
		case(3):
			_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].hudMode = 5;
			console.log("affiche infos joueur");
		break;
		case(4):
			console.log("affiche carte");
			_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].hudMode = 6;


		break;
		case(5):
			console.log("sauvegarde");
			_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].hudMode = 7;
		break;
		case(6):
			console.log("affiche options");
			_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].hudMode = 8;
		break;

	}

}

Menu.prototype.showConversation = function(pokemons ){
	var context = Object(_utils_render_utils_js__WEBPACK_IMPORTED_MODULE_1__["getContext"])();
	context.font="20px Georgia";
	context.fillStyle = _utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].couleurPrefere;
	context.fillRect(50,480,800,150);
	context.fillStyle="#ffffff";
	context.fillText(_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].discussion,60,510,780);
}

Menu.prototype.displayPokemons = function(pokemons ){
	var context = Object(_utils_render_utils_js__WEBPACK_IMPORTED_MODULE_1__["getContext"])();
	context.fillStyle=_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].couleurPrefere;
	context.fillRect(50,50,800,550);
	context.font="20px Georgia";

	for(var i = 0;i<pokemons.length;i++){
		context.fillStyle="#eeeeee";
		context.fillRect(55,(i*80)+95,780,35);
		context.fillStyle="#000000";
		context.font="20px Georgia";
		context.fillText("Nom: "+pokemons[i].getName(),65,120+(i*80));
		context.fillText("Niveau: "+pokemons[i].lvl,230,120+(i*80));
		context.fillText("Pdv: "+pokemons[i].pdv+"/"+pokemons[i].pdvMax,370,120+(i*80));

		context.font="18px Georgia";
		context.fillText("XP: "+pokemons[i].exp,100,160+(i*80));
		context.fillText("Prochain Niveau : "+pokemons[i].expMax,350,160+(i*80));

	}
}

Menu.prototype.displayCarte = function(){

	_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].carte.displayCarte();

}

Menu.prototype.displayOptions = function(){
	var context = Object(_utils_render_utils_js__WEBPACK_IMPORTED_MODULE_1__["getContext"])();
	context.fillStyle=_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].couleurPrefere;
	context.fillRect(50,50,800,550);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	context.fillText("'a' Changer la couleur des menus",65,300);
	context.fillText("'p' Retour au gris",65,330);
}

Menu.prototype.displayPokedex = function(){
	var context = Object(_utils_render_utils_js__WEBPACK_IMPORTED_MODULE_1__["getContext"])();
	context.fillStyle=_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].couleurPrefere;
	context.fillRect(50,50,800,550);

	_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["pokedex"].affichePokemon();


}

Menu.prototype.displayInfosJoueur = function(){
	var context = Object(_utils_render_utils_js__WEBPACK_IMPORTED_MODULE_1__["getContext"])();
	context.fillStyle=_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].couleurPrefere;
	context.fillRect(50,50,800,550);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	context.fillText("Nom : "+_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getName(),65,270);
	context.fillText("Argent : "+_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.argent,65,300);
	context.fillText("Badges : "+_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.badges,65,330);
	context.fillText("Objets : "+_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.inventaire.length,65,360);
	context.fillText("Pokemon capturés : "+(_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.pokemons.length+_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.pcDeLeo.length),65,390);
	context.drawImage(_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].charSprites,0+(80*_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getGTX()),0+(80*_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getGTY()), 80, 80, 400,200,250,250);
}

Menu.prototype.displaySauv = function(){
	var context = Object(_utils_render_utils_js__WEBPACK_IMPORTED_MODULE_1__["getContext"])();
	context.fillStyle=_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].couleurPrefere;
	context.fillRect(50,50,800,550);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	context.fillText("Voulez vous sauvegarder votre partie ?",65,240);
	context.fillText("'A' : Oui",65,270);
	context.fillText("'B' :Retour",65,300);

	context.fillText("(Aussi, il faut un compte pour pouvoir sauvegarder)",65,360);

	context.fillText("Vous trouverez le bouton \"Charge Partie\" pour reprendre la ou vous en etiez",65,390);
}

Menu.prototype.displayInventaire = function(){
	var context = Object(_utils_render_utils_js__WEBPACK_IMPORTED_MODULE_1__["getContext"])();
	context.fillStyle=_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].couleurPrefere;
	context.fillRect(50,50,800,550);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	context.fillText("Vous avez "+_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.inventaire.length+" objets dans votre inventaire",65,300);
}

Menu.prototype.displayFail = function(){
	var context = Object(_utils_render_utils_js__WEBPACK_IMPORTED_MODULE_1__["getContext"])();
	var canvas = Object(_utils_render_utils_js__WEBPACK_IMPORTED_MODULE_1__["getCanvas"])();
	context.fillStyle="#000000";
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.fillStyle=_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].couleurPrefere;
	context.fillRect(50,50,800,550);
	context.fillStyle="#000000";
	context.font="30px Georgia";
	context.fillText("Vos pokemons sont tous K.O",65,250);
	context.font="20px Georgia";
	context.fillText("Vous avez perdu",65,300);
	context.font="15px Georgia";
	context.fillText("(Appuyer sur une touche)",65,350);

}

Menu.prototype.displayInfo = function(){
	var context = Object(_utils_render_utils_js__WEBPACK_IMPORTED_MODULE_1__["getContext"])();
	context.fillStyle=_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].couleurPrefere;
	context.fillRect(50,350,800,250);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	context.fillText(_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].info,60,380);
}


Menu.prototype.displayWinCapture = function(){
	var context = Object(_utils_render_utils_js__WEBPACK_IMPORTED_MODULE_1__["getContext"])();
	context.fillStyle=_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].couleurPrefere;
	context.fillRect(50,350,800,250);
	context.fillStyle="#000000";
	context.font="20px Georgia";
	context.fillText("Bravo, vous avez capturé un :",160,380);
	context.fillText(_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getPokemonCapture().getName(),200,430);
	context.fillText("Niveau "+_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getPokemonCapture().lvl,160,480);
	_utils_globals_js__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getPokemonCapture().afficheToiAt(550,400);
}





//----------------------------------------------


function SousMenu(titre){
	this.titre = titre;
}

SousMenu.prototype.getTitre= function(){
	return(this.titre);
}

SousMenu.prototype.getSelect= function(){
	return(this.selection);
}

SousMenu.prototype.setSelect= function(select){
	this.selection = select;
}


/* harmony default export */ __webpack_exports__["default"] = (Menu);


/***/ }),

/***/ "./src/UI/Pokedex.js":
/*!***************************!*\
  !*** ./src/UI/Pokedex.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../combat/Attaques */ "./src/combat/Attaques.js");
/* harmony import */ var _utils_render_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render_utils */ "./src/utils/render_utils.js");
/* harmony import */ var _assets_imgs_all_pokemon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/imgs/all-pokemon.png */ "./assets/imgs/all-pokemon.png");
/* harmony import */ var _assets_imgs_all_pokemon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_all_pokemon_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_imgs_back_sprites_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/imgs/back_sprites.png */ "./assets/imgs/back_sprites.png");
/* harmony import */ var _assets_imgs_back_sprites_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_back_sprites_png__WEBPACK_IMPORTED_MODULE_3__);






function Pokedex(){
	this.pokemons = ["empty"];//pour retrouver les poke simplement grace a leur num, il faut commencer par un vide
	this.index = 1; //pour la visualisation
}


Pokedex.prototype.addPPokemon = function(pokemon){	//	pokedexPokemon  (pp) != pokemon
	this.pokemons.push(pokemon);
}



Pokedex.prototype.getPokeInf = function(){
	this.index--;
	if(this.index < 1){
		this.index = this.pokemons.length-1;
	}
}

Pokedex.prototype.getPokeSup = function(){
	this.index++;
	if(this.index >= this.pokemons.length){
		this.index = 1;
	}
}

Pokedex.prototype.getAttaques= function(pokemon){
	try{
		return(this.pokemons[pokemon.num].getAttaques(pokemon.lvl));
	}
	catch(e){
		//console.log(e);
		return([]);
	}
}



//pokemon1.addAttaque("nom",niveau,type,puissance,precision,pp,description);

Pokedex.prototype.chargePokedex = function(){
	var pokemon1=new PokedexPokemon(1,"Bulbizarre","Plante/Poison","Au matin de sa vie, la graine sur son dos lui fournit les éléments dont il a besoin pour grandir.",2,16);
	this.addPPokemon(pokemon1);

	var pokemon2 = new PokedexPokemon(2,"Herbizarre","Plante/Poison","Lorsque le bourgeon sur son dos éclot, il répand un doux parfum pour célébrer sa floraison.",3,36);
	this.addPPokemon(pokemon2);

	var pokemon3 = new PokedexPokemon(3,"Florizarre","Plante/Poison","Le parfum de sa fleur se fait plus pénétrant les lendemains de pluie. Cela appâte les autres Pokémon.",0,0);
	this.addPPokemon(pokemon3);

	var pokemon4 = new PokedexPokemon(4,"Salameche","Feu","La flamme de sa queue symbolise sa vitalité. Elle est intense quand il est en bonne santé.",2,16);
	this.addPPokemon(pokemon4);

	var pokemon5 = new PokedexPokemon(5,"Reptincel","Feu","La nuit, la queue ardente du REPTINCEL brille comme une étoile dans son repaire montagneux.",2,36);
	this.addPPokemon(pokemon5);

	var pokemon6 = new PokedexPokemon(6,"Dracofeu","Feu/Vol","On raconte que la flamme du DRACAUFEU s'intensifie après un combat difficile.",0,0);
	this.addPPokemon(pokemon6);


	this.addPPokemon(new PokedexPokemon(7,"Carapuce","Eau","Il se réfugie dans sa carapace et réplique en éclaboussant l'ennemi à la première occasion.",2,16));
	this.addPPokemon(new PokedexPokemon(8,"Carabaffe","Eau","On prétend qu'il vit 10 000 ans. Sa queue duveteuse est un symbole de longévité populaire.",2,36));
	this.addPPokemon(new PokedexPokemon(9,"Tortank","Eau","Les trombes d'eau projetées par les canons de sa carapace peuvent percer le métal le plus résistant.",0,0));

	this.addPPokemon(new PokedexPokemon(10,"Chenipan","Insecte","Ses antennes rouges libèrent une puanteur qui repousse l'ennemi. Il grandit par mues régulières.",11,7));
	this.addPPokemon(new PokedexPokemon(11,"Chrysacier","Insecte","Son corps frêle est protégé par sa carapace d'acier. Il encaisse les coups durs en attendant d'évoluer.",12,10));
	this.addPPokemon(new PokedexPokemon(12,"Papilusion","Insecte/Vol","Il raffole du nectar des fleurs. Il est capable de repérer la plus petite quantité de pollen.",0,0));
	this.addPPokemon(new PokedexPokemon(13,"Aspicot","Insecte/Poison","Il mange chaque jour son poids en feuilles. Il utilise l'aiguillon sur sa tête pour repousser l'ennemi.",14,7));
	this.addPPokemon(new PokedexPokemon(14,"Coconfort","Insecte/Poison","Il se cache sous les feuilles et les branches pour fuir les prédateurs en attendant d'évoluer.",0,10));
	this.addPPokemon(new PokedexPokemon(15,"Dardagnan","Insecte/Poison","Il virevolte rapidement autour de l'ennemi et frappe de son dard empoisonné avant de décamper.",0,0));

	this.addPPokemon(new PokedexPokemon(16,"Roucool","Normal/Vol","",17,8));
	this.addPPokemon(new PokedexPokemon(17,"Roucoops","Normal/Vol","",18,15));
	this.addPPokemon(new PokedexPokemon(18,"Roucarnage","Normal/Vol","",0,0));

	this.addPPokemon(new PokedexPokemon(19,"Rattata","Normal","",20,8));
	this.addPPokemon(new PokedexPokemon(20,"Rattatac","Normal","",0,0));

	this.addPPokemon(new PokedexPokemon(21,"Piafabec","Normal/Vol","",22,10));
	this.addPPokemon(new PokedexPokemon(22,"Rapasdepic","Normal/Vol","",0,0));

	this.addPPokemon(new PokedexPokemon(23,"Abo","Poison","",0,0));
	this.addPPokemon(new PokedexPokemon(24,"Arboc","Poison","",0,0));


	var pokemon25 = new PokedexPokemon(25,"Pikachu","Electr","",26,25);
	this.addPPokemon(pokemon25);

	this.addPPokemon(new PokedexPokemon(26,"Raichu","Electr","",0,0));

	this.addPPokemon(new PokedexPokemon(27,"Sabelette","Sol","",0,0));
	this.addPPokemon(new PokedexPokemon(28,"Sablaireau","Sol","",0,0));

	this.addPPokemon(new PokedexPokemon(29,"Nidoran F","Poison","",0,0));
	this.addPPokemon(new PokedexPokemon(30,"Nidorina","Poison","",0,0));
	this.addPPokemon(new PokedexPokemon(31,"Nidoqueen","Poison/Sol","",0,0));

	this.addPPokemon(new PokedexPokemon(32,"Nidoran M","Poison","",0,0));
	this.addPPokemon(new PokedexPokemon(33,"Nidorino","Poison","",0,0));
	this.addPPokemon(new PokedexPokemon(34,"Nidoking","Poison/Sol","",0,0));

	this.addPPokemon(new PokedexPokemon(35,"Melofee","Fee","",0,0));
	this.addPPokemon(new PokedexPokemon(36,"Melodelfe","Fee","",0,0));

	this.addPPokemon(new PokedexPokemon(37,"Goupix","Feu","",0,0));
	this.addPPokemon(new PokedexPokemon(38,"Feunard","Feu","",0,0));

	this.addPPokemon(new PokedexPokemon(39,"Rondoudou","Normal/Fee","",0,0));
	this.addPPokemon(new PokedexPokemon(40,"Grodoudou","Normal/Fee","",0,0));

	this.addPPokemon(new PokedexPokemon(41,"Nosferapti","Poison/Vol","",0,0));
	this.addPPokemon(new PokedexPokemon(42,"Nosferalto","Poison/Vol","",0,0));

	this.addPPokemon(new PokedexPokemon(43,"Mystherbe","Plante/Poison","",0,0));
	this.addPPokemon(new PokedexPokemon(44,"Ortide","Plante/Poison","",0,0));
	this.addPPokemon(new PokedexPokemon(45,"Rafflesia","Plante/Poison","",0,0));

	this.addPPokemon(new PokedexPokemon(46,"Paras","Insecte/Plante","",0,0));
	this.addPPokemon(new PokedexPokemon(47,"Parasect","Insecte/Plante","",0,0));

	this.addPPokemon(new PokedexPokemon(48,"Mimitos","Insecte/Poison","",0,0));
	this.addPPokemon(new PokedexPokemon(49,"Aeromite","Insecte/Poison","",0,0));

	this.addPPokemon(new PokedexPokemon(50,"Topiqueur","Sol","",0,0));
	this.addPPokemon(new PokedexPokemon(51,"Triopikeur","Sol","",0,0));

	this.addPPokemon(new PokedexPokemon(52,"Miaouss","Normal","",0,0));
	this.addPPokemon(new PokedexPokemon(53,"Persian","Normal","",0,0));

	this.addPPokemon(new PokedexPokemon(54,"Psykokwak","Eau","",0,0));
	this.addPPokemon(new PokedexPokemon(55,"Akwakwak","Eau","",0,0));

	this.addPPokemon(new PokedexPokemon(56,"Ferosinge","Combat","",0,0));
	this.addPPokemon(new PokedexPokemon(57,"Colossinge","Combat","",0,0));

	this.addPPokemon(new PokedexPokemon(58,"Caninos","Feu","",0,0));
	this.addPPokemon(new PokedexPokemon(59,"Arcanin","Feu","",0,0));

	this.addPPokemon(new PokedexPokemon(60,"Ptitard","Eau","",0,0));
	this.addPPokemon(new PokedexPokemon(61,"Tetart","Eau","",0,0));
	this.addPPokemon(new PokedexPokemon(62,"Tartard","Eau/Combat","",0,0));

	this.addPPokemon(new PokedexPokemon(63,"Abra","Psy","",0,0));
	this.addPPokemon(new PokedexPokemon(64,"Kadabra","Psy","",0,0));
	this.addPPokemon(new PokedexPokemon(65,"Alakazam","Psy","",0,0));

	this.addPPokemon(new PokedexPokemon(66,"Machoc","Combat","",0,0));
	this.addPPokemon(new PokedexPokemon(67,"Machopeur","Combat","",0,0));
	this.addPPokemon(new PokedexPokemon(68,"Mackogneur","Combat","",0,0));

	this.addPPokemon(new PokedexPokemon(69,"Chetiflor","Plante/Poison","",0,0));
	this.addPPokemon(new PokedexPokemon(70,"Boustiflor","Plante/Poison","",0,0));
	this.addPPokemon(new PokedexPokemon(71,"Empiflor","Plante/Poison","",0,0));

	this.addPPokemon(new PokedexPokemon(72,"Tentacool","Eau/Poison","",0,0));
	this.addPPokemon(new PokedexPokemon(73,"Tentacruel","Eau/Poison","",0,0));

	this.addPPokemon(new PokedexPokemon(74,"Racaillou","Roche/Sol","",0,0));
	this.addPPokemon(new PokedexPokemon(75,"Gravalanch","Roche/Sol","",0,0));
	this.addPPokemon(new PokedexPokemon(76,"Grolem","Roche/Sol","",0,0));

	this.addPPokemon(new PokedexPokemon(77,"Ponyta","Feu","",0,0));
	this.addPPokemon(new PokedexPokemon(78,"Galopa","Feu","",0,0));

	this.addPPokemon(new PokedexPokemon(79,"Ramoloss","Eau/Psy","",0,0));
	this.addPPokemon(new PokedexPokemon(80,"Flagadoss","Eau/Psy","",0,0));

	this.addPPokemon(new PokedexPokemon(81,"Magneti","Electr","",0,0));
	this.addPPokemon(new PokedexPokemon(82,"Magneton","Electr","",0,0));

	this.addPPokemon(new PokedexPokemon(83,"Canarticho","Normal/Vol","",0,0));
	this.addPPokemon(new PokedexPokemon(84,"Doduo","Normal/Vol","",0,0));
	this.addPPokemon(new PokedexPokemon(85,"Dodrio","Normal/Vol","",0,0));

	this.addPPokemon(new PokedexPokemon(86,"Otaria","Eau","",0,0));
	this.addPPokemon(new PokedexPokemon(87,"Lamantine","Eau/Glace","",0,0));

	this.addPPokemon(new PokedexPokemon(88,"Tadmorv","Poison","",0,0));
	this.addPPokemon(new PokedexPokemon(89,"Grotadmorv","Poison","",0,0));

	this.addPPokemon(new PokedexPokemon(90,"Kokiyas","Eau","",0,0));
	this.addPPokemon(new PokedexPokemon(91,"Crustabri","Eau/Glace","",0,0));

	this.addPPokemon(new PokedexPokemon(92,"Fantominus","Spectre/Poison","",0,0));
	this.addPPokemon(new PokedexPokemon(93,"Spectrum","Spectre/Poison","",0,0));
	this.addPPokemon(new PokedexPokemon(94,"Ectoplasma","Spectre/Poison","",0,0));

	this.addPPokemon(new PokedexPokemon(95,"Onix","Roche/Sol","",0,0));

	this.addPPokemon(new PokedexPokemon(96,"Soporifik","Psy","",0,0));
	this.addPPokemon(new PokedexPokemon(97,"Hypnomade","Psy","",0,0));

	this.addPPokemon(new PokedexPokemon(98,"Krabby","Eau","",0,0));
	this.addPPokemon(new PokedexPokemon(99,"Kraboss","Eau","",0,0));

	this.addPPokemon(new PokedexPokemon(100,"Voltorbe","Electr","",0,0));
	this.addPPokemon(new PokedexPokemon(101,"Electrode","Electr","",0,0));

	this.addPPokemon(new PokedexPokemon(102,"Noeunoeuf","Plante/Psy","",0,0));
	this.addPPokemon(new PokedexPokemon(103,"Noadkoko","Plante/Psy","",0,0));

	this.addPPokemon(new PokedexPokemon(104,"Osselet","Sol","",0,0));
	this.addPPokemon(new PokedexPokemon(105,"Ossatueur","Sol","",0,0));

	this.addPPokemon(new PokedexPokemon(106,"Kicklee","Combat","",0,0));
	this.addPPokemon(new PokedexPokemon(107,"Tygnon","Combat","",0,0));

	this.addPPokemon(new PokedexPokemon(108,"Excelangue","Normal","",0,0));

	this.addPPokemon(new PokedexPokemon(109,"Smogo","Poison","",0,0));
	this.addPPokemon(new PokedexPokemon(110,"Smogogo","Poison","",0,0));

	this.addPPokemon(new PokedexPokemon(111,"Rhinocorne","Sol/Roche","",0,0));
	this.addPPokemon(new PokedexPokemon(112,"Rhinoferoce","Sol/Roche","",0,0));

	this.addPPokemon(new PokedexPokemon(113,"Leveinard","Normal","",0,0));

	this.addPPokemon(new PokedexPokemon(114,"Saquedeneu","Plante","",0,0));

	this.addPPokemon(new PokedexPokemon(115,"Kangourex","Normal","",0,0));

	this.addPPokemon(new PokedexPokemon(116,"Hypotrempe","Eau","",0,0));
	this.addPPokemon(new PokedexPokemon(117,"Hypocean","Eau","",0,0));

	this.addPPokemon(new PokedexPokemon(118,"Poissireine","Eau","",0,0));
	this.addPPokemon(new PokedexPokemon(119,"Poissoroi","Eau","",0,0));

	this.addPPokemon(new PokedexPokemon(120,"Stari","Eau","",0,0));
	this.addPPokemon(new PokedexPokemon(121,"Staros","Eau/Psy","",0,0));

	this.addPPokemon(new PokedexPokemon(122,"M.Mime","Psy/Fee","",0,0));

	this.addPPokemon(new PokedexPokemon(123,"Insecateur","Insecte/Vol","",0,0));

	this.addPPokemon(new PokedexPokemon(124,"Lippoutou","Glace/Psy","",0,0));

	this.addPPokemon(new PokedexPokemon(125,"Elektek","Electr","",0,0));

	this.addPPokemon(new PokedexPokemon(126,"Magmar","Feu","",0,0));

	this.addPPokemon(new PokedexPokemon(127,"Scarabrute","Insecte","",0,0));

	this.addPPokemon(new PokedexPokemon(128,"Tauros","Normal","",0,0));

	this.addPPokemon(new PokedexPokemon(129,"Magicarpe","Eau","",0,0));
	this.addPPokemon(new PokedexPokemon(130,"Leviator","Eau/Vol","",0,0));

	this.addPPokemon(new PokedexPokemon(131,"Lokhlass","Eau/Glace","",0,0));

	this.addPPokemon(new PokedexPokemon(132,"Metamorph","Normal","",0,0));

	this.addPPokemon(new PokedexPokemon(133,"Evoli","Normal","",0,0));
	this.addPPokemon(new PokedexPokemon(134,"Aquali","Eau","",0,0));
	this.addPPokemon(new PokedexPokemon(135,"Voltali","Electr","",0,0));
	this.addPPokemon(new PokedexPokemon(136,"Pyroli","Feu","",0,0));

	this.addPPokemon(new PokedexPokemon(137,"Porygon","Normal","",0,0));

	this.addPPokemon(new PokedexPokemon(138,"Amonita","Roche/Eau","",0,0));
	this.addPPokemon(new PokedexPokemon(139,"Amonistar","Roche/Eau","",0,0));

	this.addPPokemon(new PokedexPokemon(140,"Kabuto","Roche/Eau","",0,0));
	this.addPPokemon(new PokedexPokemon(141,"Kabutops","Roche/Eau","",0,0));

	this.addPPokemon(new PokedexPokemon(142,"Ptera","Roche/Vol","",0,0));

	this.addPPokemon(new PokedexPokemon(143,"Ronflex","Normal","",0,0));

	this.addPPokemon(new PokedexPokemon(144,"Artikodin","Glace/Vol","",0,0));
	this.addPPokemon(new PokedexPokemon(145,"Electhor","Electr/Vol","",0,0));
	this.addPPokemon(new PokedexPokemon(146,"Sulfura","Feu/Vol","",0,0));

	this.addPPokemon(new PokedexPokemon(147,"Minidraco","Dragon","",0,0));
	this.addPPokemon(new PokedexPokemon(148,"Draco","","Dragon",0,0));
	this.addPPokemon(new PokedexPokemon(149,"Dracoloss","Dragon/Vol","",0,0));

	this.addPPokemon(new PokedexPokemon(150,"Mewtwo","Psy","",0,0));
	this.addPPokemon(new PokedexPokemon(151,"Mew","Psy","",0,0));



}

Pokedex.prototype.affichePokemon = function(){


	this.pokemons[this.index].afficheToi();
}

Pokedex.prototype.getPoke = function(numero){
	return(this.pokemons[numero]);
}

/* harmony default export */ __webpack_exports__["default"] = (Pokedex);





//--------------------------------------------------
function PokedexPokemon(num,nom,type,desc,evol,lvlEvol){		//pour differencier entre un pokemon theorique et un pokemon capturé ou rencontré, et pour alleger les objets pokemons

	this.numero=num;  //numerotation officielle, pour facilement utiliser les sprites, et faciliter debug
	this.nom=nom;
	this.type=type;
	this.description=desc;
	this.attaques = [];
	this.evolution=evol;		//numero
	this.niveauEvolution=lvlEvol;	//si 0, pas d évolution


	this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Charge",0,0,40,100,20));
	this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Frenesie",0,0,20,100,20));
	this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Mimiqueue",0,0,0,100,30));
	this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Belier",0,0,90,85,20));
	this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Damocle",0,0,120,100,20));
	this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Mimiqueue",0,0,0,100,30));
	this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Rugissement",0,0,50,100,20));
	this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Camaraderie",0,0,0,0,20));
	this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Vive Attaque",12,0,40,100,30));
	this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Griffe Acier",0,0,50,95,35));
	this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Griffe",0,0,40,100,35));


	if(this.isType("Plante")){
		this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Canon Graine",0,0,80,100,15));
		this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Fouet lianes",10,1,45,100,25));

		this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Tranch Herbe",20,1,55,95,25));

	}

	if(this.isType("Feu")){

		this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Flameche",4,3,40,100,25));
		this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Lance Flame",13,3,90,100,25));
		this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Para spore",23,3,90,75,15));
	}
	if(this.isType("Poison")){
		this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Para spore",3,4,10,75,35));
		this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Doux Parfum",7,4,0,100,20));
		this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Poudre Dodo",15,4,0,75,15));
		this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Para spore",17,4,40,75,15));
	}
	if(this.isType("Eau")){
		this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Ecume",5,2,20,75,35));
		this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Pistolet a O",13,2,50,80,15));
		this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Hydro Canon",23,4,95,85,5));
	}
	if(this.isType("Vol")){
		this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Cru Aile",23,0,10,75,15));
	}
	if(this.isType("Electr")){
		this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Eclair",0,4,40,100,30));
		this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Cage Eclair",8,4,0,100,20));
	}
	if(this.isType("Roche")){
		this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Poli Roche",4,0,40,100,30));
		this.addAttaque(new _combat_Attaques__WEBPACK_IMPORTED_MODULE_0__["default"]("Poli Roche",4,0,40,100,30));
	}








}
PokedexPokemon.prototype.afficheToi = function(){
	var context = Object(_utils_render_utils__WEBPACK_IMPORTED_MODULE_1__["getContext"])();
	context.fillStyle="#000000";
	context.font="20px Georgia";



	context.fillText("Nom : "+this.nom,65,270);
	context.fillText("Type : "+this.type,65,300);
	context.fillText("Descr : "+this.description,65,330,750);

	var allPokemon_img = document.createElement("img");
	allPokemon_img.src = _assets_imgs_all_pokemon_png__WEBPACK_IMPORTED_MODULE_2___default.a
	context.drawImage(allPokemon_img,80*this.getGTX(),80*this.getGTY(),80, 80, 500,100,150,150);

}

PokedexPokemon.prototype.afficheToiCombat = function(){
	var context = Object(_utils_render_utils__WEBPACK_IMPORTED_MODULE_1__["getContext"])();
	var allPokemon_img = document.createElement("img");
	allPokemon_img.src = _assets_imgs_all_pokemon_png__WEBPACK_IMPORTED_MODULE_2___default.a
	context.drawImage(allPokemon_img,80*this.getGTX(),80*this.getGTY(), 80, 80, 600,100,200,200);

}
PokedexPokemon.prototype.afficheToiAt = function(x,y){
	var context = Object(_utils_render_utils__WEBPACK_IMPORTED_MODULE_1__["getContext"])();
	var allPokemon_img = document.createElement("img");
	allPokemon_img.src = _assets_imgs_all_pokemon_png__WEBPACK_IMPORTED_MODULE_2___default.a
	context.drawImage(allPokemon_img,80*this.getGTX(),80*this.getGTY(), 80, 80, x,y,150,150);
}


PokedexPokemon.prototype.getBackSprite= function(){
	var context = Object(_utils_render_utils__WEBPACK_IMPORTED_MODULE_1__["getContext"])();
	var backSprites_img = document.createElement("img");
	backSprites_img.src = _assets_imgs_back_sprites_png__WEBPACK_IMPORTED_MODULE_3___default.a
	context.drawImage(backSprites_img,80*this.getGTX(),80*this.getGTY(), 80, 80, 100,300,200,200);
}

PokedexPokemon.prototype.getGTX = function(){
	return((this.numero-1)%25);
}

PokedexPokemon.prototype.getGTY = function(){
	return(Math.floor((this.numero-1)/25));
}

PokedexPokemon.prototype.getName = function(){
	return(this.nom);
}

PokedexPokemon.prototype.addAttaque= function(att){
	this.attaques.push(att);
}



PokedexPokemon.prototype.getAttaques= function(niveau){
	var tab = [];
	for(var i = 0; i< this.attaques.length ;i++){
		if(niveau >= this.attaques[i].lvl){
			tab.push(this.attaques[i]);
		}
	}
	return(tab);
}

PokedexPokemon.prototype.isType=function(type){	//verifie si un pokedexPokemon est de type en faisant une recherche dans le mot (car des fois le type est genre Plante/Poison)
	var str1 = this.type;
	var res = str1.replace(type,"fezef");//remplace le mot contenu dans type pour verifier l egalité plus tard
	//console.log(str1+" est de type "+type+ " ? " + !( str1 == res));
	return(!( str1 == res));
}


/***/ }),

/***/ "./src/UI/hud_events.js":
/*!******************************!*\
  !*** ./src/UI/hud_events.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyHUD_event; });
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/globals */ "./src/utils/globals.js");
/* harmony import */ var _utils_touches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/touches */ "./src/utils/touches.js");
/* harmony import */ var _combat_Combat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../combat/Combat */ "./src/combat/Combat.js");




function applyHUD_event(touche){
  switch(_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].hudMode){
    case(0):// menu pause
      handleMainMenuEvent(touche);
      break;

    case(1):// discussion
      if(touche == _utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].CONFIRM || touche == _utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].BACK){
          _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].calculNextCase();
          var nextCaseX = _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].nextCaseX;
          var nextCaseY = _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].nextCaseY;
          if(_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].grille.getDresseur(nextCaseX,nextCaseY)){	//on parlait directement au dresseur pour l attaquer
            if(!_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].grille.getDresseur(nextCaseX,nextCaseY).aPerdu){
              _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].mode = 2;
              _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].adversaire = _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].grille.getDresseur(nextCaseX,nextCaseY);

              _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].combat = new _combat_Combat__WEBPACK_IMPORTED_MODULE_2__["default"]();
            }
            else{
              _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].mode = 0;
            }
          }
          else{	//le dresseur nous attaquait
              if(_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().aPerdu){
                _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].mode = 0;
              }
              else{
                _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].mode = 2;
                _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].combat = new _combat_Combat__WEBPACK_IMPORTED_MODULE_2__["default"]();
              }
          }
      }
      break;
    case(2):// menu pokedex
      handlePokedexEvent(touche);
      break;
    case(3):// menu mes pokemon
      switch(touche){
        case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].BACK):
          _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].hudMode = 0;
          break;
      }
      break;
    case(4):// menu inventaire
      switch(touche){
        case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].BACK):
          _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].hudMode = 0;
        break;
      }
      break;
    case(5): // mode infos dresseur
      switch(touche){
        case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].BACK):
          _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].hudMode = 0;
        break;
      }
      break;
    case(6)://mode carte
      handleCarteEvent(touche)
      break;
    case(7)://mode sauvegarde
      switch(touche){
        case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].CONFIRM):
          // monDresseur.save();
          alert("Cette fonctionnalité à été désactivé pour  le moment")
        break;
        case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].BACK):
          _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].hudMode = 0;
        break;
      }
      break;
    case(8)://mode option
      switch(touche){
        case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].CONFIRM):
          changeColorHUD()
        break;
        case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].BACK):
          _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].hudMode = 0;
        break;
        case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].PAUSE):
          _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].couleurPrefere = "#bbbbbb";
        break;
      }
      break;
    case(9)://menu fail
      sendDresseurToHealthCenter()
      break;
    case(10)://infos quelqonques
      _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].mode = 0;
    break;
    case(11)://Menu bravo vous avez attrapper tel pokemon
      _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].mode = 0;
      break;
    case(12):	//mode wait, pas de controles.
      console.log("mode wait")
      break;
  }
}

function handleMainMenuEvent(touche){
  switch(touche){
    case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].PAUSE):
      _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].mode = 0;
      break;
    case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].CONFIRM):
      //valide
      _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].menu.valider();
      break;
    case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].BACK):
      _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].mode = 0;
      break;
    case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].UP):
      _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].menu.selectM();
      break;
    case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].DOWN):
      _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].menu.selectP();
      break;
  }
}

function handlePokedexEvent(touche){
  switch(touche){
    case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].BACK):
      _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].hudMode = 0;
    break;
    case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].UP):
      _utils_globals__WEBPACK_IMPORTED_MODULE_0__["pokedex"].getPokeInf()
    break;
    case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].DOWN):
      _utils_globals__WEBPACK_IMPORTED_MODULE_0__["pokedex"].getPokeSup()
    break;
  }
}

function handleCarteEvent(touche){
  switch(touche){
    case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].UP):
      _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].carte.selectM();
    break;
    case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].DOWN):
      _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].carte.selectP();
    break;
    case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].CONFIRM)://valider
      _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].carte.voyage();
    break;
    case(_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].BACK)://retour
      _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].hudMode = 0;
    break;
  }
}

function sendDresseurToHealthCenter(){
  _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].mode = 0;
  _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].setPosX(-74);//---> centre pokemon
  _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].setPosY(0);
}

function changeColorHUD(){
  _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].couleurPrefere = '#'+Math.floor(Math.random()*16777215).toString(16);
}


/***/ }),

/***/ "./src/UI/music.js":
/*!*************************!*\
  !*** ./src/UI/music.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_musiqueLoop_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/musiqueLoop.wav */ "./assets/musiqueLoop.wav");
/* harmony import */ var _assets_musiqueLoop_wav__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_musiqueLoop_wav__WEBPACK_IMPORTED_MODULE_0__);


var audio = new Audio();
audio.src = _assets_musiqueLoop_wav__WEBPACK_IMPORTED_MODULE_0___default.a;
audio.loop = true;
//audio.play();

function stopMusique(){
  if(audio.paused){
    audio.play();
    document.getElementById("buttonMusique").innerHTML = "Musique OFF";
  }
  else{
    audio.pause();
    document.getElementById("buttonMusique").innerHTML = "Musique ON";
  }
}

window.stopMusique = stopMusique;

/***/ }),

/***/ "./src/combat/Attaques.js":
/*!********************************!*\
  !*** ./src/combat/Attaques.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//type -> 0:normal
//1:plante
//2:eau
//3:feu
//4:electr
//5:poison

var attNum = 0;
function Attaque(nom,niveau,type,puiss,precis,pp){
	this.nom = nom;
	this.lvl = niveau;
	this.type = type;
	this.puissance = puiss;
	this.precision = precis;
	this.pp = pp;
	this.num = attNum;
	attNum++;
}

Attaque.prototype.getName=function(){
	return(this.nom);
}

Attaque.prototype.equals=function(oth){
	return(this.nom == oth.getName());
}

Attaque.prototype.save=function(pokemon_id){
	// SauvegardeAttaque(pokemon_id,this.num);
}


/* harmony default export */ __webpack_exports__["default"] = (Attaque);


/***/ }),

/***/ "./src/combat/Combat.js":
/*!******************************!*\
  !*** ./src/combat/Combat.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/globals */ "./src/utils/globals.js");
/* harmony import */ var _utils_render_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render_utils */ "./src/utils/render_utils.js");
/* harmony import */ var _utils_touches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/touches */ "./src/utils/touches.js");
/* harmony import */ var _combat_MenuCombat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../combat/MenuCombat */ "./src/combat/MenuCombat.js");
/* harmony import */ var _assets_imgs_BackSpritesHero_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/imgs/BackSpritesHero.png */ "./assets/imgs/BackSpritesHero.png");
/* harmony import */ var _assets_imgs_BackSpritesHero_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_BackSpritesHero_png__WEBPACK_IMPORTED_MODULE_4__);






var Combat = function(){
	this.joueurs = [_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur,_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv()];
	this.tour = this.joueurs[0].getPokemon(0).agi-this.joueurs[1].getPokemon(0).agi > 0? 0:1;
	this.checkTourComplete = 0;	//-> devient 1 quand un pokemon a attaquer, repasse a 0 quand le deuwieme aussi, et change le mode.


	this.mode = 1;
		 // 1 -> juste les dresseurs,
		 // 2-> juste les pokemons,
		 // 3-> discussion (ex:pokemon gagne pts, pokemon recoit degats) ,
		 // 4 -> Menu selection,
		 // 5 -> attaque
		 //6 -> discussion puis retour au jeu apres combat

	this.menu = new _combat_MenuCombat__WEBPACK_IMPORTED_MODULE_3__["default"](this);

	this.time = 0; //comteur incremental de temps (pas d unité speciales, n*monDresseur.fps pour faire simple)

	this.infos = [];

	//console.log(this.joueurs[0].getPokemon(0).getName());
	//console.log();
}


Combat.prototype.runTour = function(){
	if(this.mode == 5){
				//recuperer l attaque, et surtout son type

				if(!(this.joueurs[this.tour] === _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur)){
					var rand = Math.round(Math.random()*4);
					//console.log("rand = "+rand);
					this.joueurs[this.tour].getPokemon(0).setSelectAttaque(rand);
				}

				if(this.joueurs[this.tour].getPokemon(0).pdv > 0 && this.joueurs[1-this.tour].getPokemon(0).pdv > 0){
					this.joueurs[this.tour].getPokemon(0).attaque(this.joueurs[1-this.tour].getPokemon(0),this);


					this.checkTourComplete+=1;
					if(this.checkTourComplete > 1){
						this.checkTourComplete = 0;
						this.mode = 3;
					}




					if(this.joueurs[1-this.tour].getPokemon(0).pdv <= 0){
						this.joueurs[1-this.tour].getPokemon(0).pdv = 0;
						this.infos.push(this.joueurs[1-this.tour].getPokemon(0).getName()+" a epuisé ses pdv");

						//calcul experience
						var expe = Math.round(this.joueurs[1-this.tour].getPokemon(0).lvl *this.joueurs[1-this.tour].getPokemon(0).lvl*(Math.random()*2 +15)*2 /this.joueurs[this.tour].getPokemon(0).lvl );
										//lvl adverse^(5) * (rand(15 -> 17)) *5 / lvl

										//ajouter a pokemon une variable attaque qui sera choisi avant ce calcul



						this.infos.push(this.joueurs[this.tour].getPokemon(0).getName()+" gagne "+expe+" pts d'experiences");
						this.joueurs[this.tour].getPokemon(0).addExperience(expe,this);


						if(this.joueurs[1-this.tour].pokemonsEnVie().length > 0){
							this.infos.push(this.joueurs[1-this.tour].getName()+" change de pokemon");
							//change pokemon
							var tab = this.joueurs[1-this.tour].pokemonsEnVie();
							this.joueurs[1-this.tour].echange(tab[0],this.joueurs[1-this.tour].getPokemon(0));   	//normalement un pokemon sauvage n as pas besoin de cette fonction
							this.tour = this.joueurs[0].getPokemon(0).agi-this.joueurs[1].getPokemon(0).agi > 0? 0:1;

						}
						else{
							this.joueurs[1-this.tour].aPerdu = 1;

							if(this.joueurs[1-this.tour] === _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur){
								_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].mode = 1;//hud
								_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].hudMode = 9;//fail
								//console.log("Perdu");
								this.joueurs[this.tour].soignePokemons();
								this.joueurs[this.tour].setOriginalOrientation();
								_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].onLose();
							}
							else{
								this.finCombat();
							}
						}
					}
				}
				this.tour = 1-this.tour;

		}
		if(this.mode == 1){//dresseurs
			this.time+= 1;
			if(this.time > 30){	//affichage des sprites
				this.mode = 2;
				this.time = 0;
			}

		}
		if(this.mode == 2){//pokemon
			this.time+= 1;
			if(this.time > 40){	//affichage des sprites
				this.mode = 4;
				this.time = 0;
			}
		}

		if(this.mode == 3){//discussion

				this.time+=1;


		}

		if(this.mode ==4){
			this.time+=1;

		}
		//console.log("mode  "+this.mode);
		//console.log("time  "+this.time);


}
Combat.prototype.finCombat = function(){
	this.mode = 6;
	this.infos.push("Bravo, vous avez gagné ce combat");
}


Combat.prototype.drawCombat=function(){
	//console.log("affichage combat");

					//alert("Fight");
					var context = Object(_utils_render_utils__WEBPACK_IMPORTED_MODULE_1__["getContext"])();
					context.fillStyle=_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].couleurPrefere;
					context.fillRect(50,50,800,550);
					context.fillStyle="#000000";



					if(this.mode == 1){
						if(_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().isSauvage()){
							_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).afficheToiCombat();
						}
						else{
							context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].charSprites,0+(80*_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getGTX()),0+(80*_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getGTY()), 80, 80, 600,50,250,250);
						}
						context.font="25px Georgia";
						context.fillText("Adversaire :"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getName(),65,100);
						var hero_img = document.createElement("img");
						hero_img.src = _assets_imgs_BackSpritesHero_png__WEBPACK_IMPORTED_MODULE_4___default.a;
						context.drawImage(hero_img,0,0, 70, 75, 50,250,400,400);
						context.font="30px Georgia";
						context.fillText("Combat!!",365,300);
					}






					if(this.mode == 2){

						context.font="20px Georgia";
						context.fillText(_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).getName(),65,140);
						context.fillText("Niveau :"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).lvl,90,170);
						context.fillText("Pdv :"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).pdv+"/"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).pdvMax,90,190,200);
						_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).afficheToiCombat();


						context.font="20px Georgia";
						context.fillText(_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).getName(),450,400);
						context.fillText("Niveau :"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).lvl,500,430);
						context.fillText("Pdv :"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).pdv+"/"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).pdvMax,500,450,200);
						_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).getBackSprite();
					}

					if(this.mode == 3){

						context.font="20px Georgia";
						context.fillText(_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).getName(),65,140);
						context.fillText("Niveau :"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).lvl,90,170);
						context.fillText("Pdv :"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).pdv+"/"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).pdvMax,90,190,200);
						_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).afficheToiCombat();


						context.font="20px Georgia";
						context.fillText(_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).getName(),450,400);
						context.fillText("Niveau :"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).lvl,500,430);
						context.fillText("Pdv :"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).pdv+"/"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).pdvMax,500,450,200);
						_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).getBackSprite();

						context.fillStyle = "#aaaaaa";
						context.fillRect(50,450,800,30+(this.infos.length*25));
						context.fillStyle="#000000";
						context.font="20px Georgia";
						for(var i = 0;i< this.infos.length;i++){
							context.fillText(this.infos[i],80,485+(25*i));
						}



					}

					if(this.mode == 4){
						context.font="20px Georgia";
						context.fillText(_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).getName(),65,140);
						context.fillText("Niveau :"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).lvl,90,170);
						context.fillText("Pdv :"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).pdv+"/"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).pdvMax,90,190,200);
						_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).afficheToiCombat();


						context.font="20px Georgia";
						context.fillText(_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).getName(),450,400);
						context.fillText("Niveau :"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).lvl,500,430);
						context.fillText("Pdv :"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).pdv+"/"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).pdvMax,500,450,200);
						_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).getBackSprite();


						this.menu.afficheToi();
					}

					if(this.mode == 6){	//copie du 3 mais pour la fin

						context.font="20px Georgia";
						context.fillText(_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).getName(),65,140);
						context.fillText("Niveau :"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).lvl,90,170);
						context.fillText("Pdv :"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).pdv+"/"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getAdv().getPokemon(0).pdvMax,90,190,200);
						//monDresseur.getAdv().getPokemon(0).afficheToiCombat();


						context.font="20px Georgia";
						context.fillText(_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).getName(),450,400);
						context.fillText("Niveau :"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).lvl,500,430);
						context.fillText("Pdv :"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).pdv+"/"+_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).pdvMax,500,450,200);
						_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.getPokemon(0).getBackSprite();

						context.fillStyle = "#aaaaaa";
						context.fillRect(50,450,800,30+(this.infos.length*25));
						context.fillStyle="#000000";
						context.font="20px Georgia";
						for(var i = 0;i< this.infos.length;i++){
							context.fillText(this.infos[i],80,485+(25*i));
						}
					}

}

Combat.prototype.gestionEvenement = function(touche){
	if(this.mode == 4){//selection
		if(touche != _utils_touches__WEBPACK_IMPORTED_MODULE_2__["default"].CONFIRM){
			this.menu.changeSelection(touche);
		}
		else{
			this.menu.valide();
		}
	}
	if(this.mode == 3){
		if(touche == _utils_touches__WEBPACK_IMPORTED_MODULE_2__["default"].CONFIRM){
			this.mode = 4;
			this.infos = [];
		}
	}
	if(this.mode == 6){
		if(touche == _utils_touches__WEBPACK_IMPORTED_MODULE_2__["default"].CONFIRM){
			if(!this.joueurs[1].isSauvage()){//si c est un dresseur
						_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].mode = 1;
						_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].discussion = this.joueurs[1-this.tour].parler();
						_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].hudMode = 1;
			}
			else{//s il s agit d un pokemon sauvage
						_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].mode = 0;
			}
		}
	}
}


/* harmony default export */ __webpack_exports__["default"] = (Combat);


/***/ }),

/***/ "./src/combat/MenuCombat.js":
/*!**********************************!*\
  !*** ./src/combat/MenuCombat.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_touches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/touches */ "./src/utils/touches.js");
/* harmony import */ var _utils_render_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render_utils */ "./src/utils/render_utils.js");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/globals */ "./src/utils/globals.js");




function MenuCombat(combat){
	this.combat = combat;
	this.mode = 0 ;//-> menu normal, 1->  menu attaques 2 -> menu objets
	this.selection = 0; //-> attaque , 1 -> objets, 2 ->changer pokemon      3-> fuite  (en mode normal / en mode choix objets ou pokemon il sera pour choisir le numero de l objet/pokemon)
	this.selectionAttaque = 0;
	this.selectionObjet = 0;
	this.selectionPokemon = 0;
}

MenuCombat.prototype.afficheToi=function(){
	var context = Object(_utils_render_utils__WEBPACK_IMPORTED_MODULE_1__["getContext"])();
	switch(this.mode){
		case(0):	//menu normal
			context.fillStyle="#444444";
			context.fillRect(50,480,800,155);
			context.fillStyle="#000000";
			switch(this.selection){
				case(0):
					context.fillRect(338,488,244,69);
					break;
				case(1):
					context.fillRect(338,558,244,69);
					break;
				case(2):
					context.fillRect(588,488,244,69);
					break;
				case(3):
					context.fillRect(588,558,244,69);
					break;
			}

			context.fillStyle=_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].couleurPrefere;
			context.fillRect(60,490,230,135);

			context.fillRect(340,490,240,65);
			context.fillRect(340,560,240,65);
			context.fillRect(590,490,240,65);
			context.fillRect(590,560,240,65);


			context.fillStyle="#000000";
			context.fillText("Que voulez vous faire ?",70,565);

			context.fillText("Attaque",360,530);
			context.fillText("Pokemons",360,600);
			context.fillText("Objets",610,530);
			context.fillText("Fuite",610,600);


		break;


		case(1):	//menu attaque
			context.fillStyle="#444444";
			context.fillRect(50,480,800,155);

			context.fillStyle="#000000";

			switch(this.selection){
				case(0):
					//context.fillRect(500,520,10,10);
					context.fillRect(338,488,244,69);
				break;

				case(1):
					context.fillRect(338,558,244,69);
				break;

				case(2):
					context.fillRect(588,488,244,69);
				break;

				case(3):
					context.fillRect(588,558,244,69);
				break;

			}

			context.fillStyle=_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].couleurPrefere;
			context.fillRect(60,490,230,135);

			context.fillRect(340,490,240,65);
			context.fillRect(340,560,240,65);
			context.fillRect(590,490,240,65);
			context.fillRect(590,560,240,65);


			context.fillStyle="#000000";
			context.fillText("Que voulez vous faire ?",70,565);

			context.fillText("Attaque",360,530);
			context.fillText("Pokemons",360,600);
			context.fillText("Objets",610,530);
			context.fillText("Fuite",610,600);

			context.fillStyle="#aaaaaa";
			context.fillRect(360,280,320,370);

			context.fillStyle=_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].couleurPrefere;
			switch(this.selectionAttaque){
				case(0):
					context.fillRect(380,290,280,70);
				break;

				case(1):
					context.fillRect(380,360,280,70);
				break;

				case(2):
					context.fillRect(380,430,280,70);
				break;

				case(3):
					context.fillRect(380,500,280,70);
				break;
				case(4):
					context.fillRect(380,570,280,70);
				break;

			}

			context.fillStyle="#000000";
			//context.fillText("Charge",390,330,270);

			context.fillText(_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.getPokemon(0).getAttaqueNum(0).getName(),390,330,270);
			context.fillText(_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.getPokemon(0).getAttaqueNum(1).getName(),390,400,270);
			context.fillText(_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.getPokemon(0).getAttaqueNum(2).getName(),390,470,270);
			context.fillText(_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.getPokemon(0).getAttaqueNum(3).getName(),390,540,270);

			context.fillText("Retour",390,610,270);
			break;

		case(2):
			context.fillStyle="#444444";
			context.fillRect(50,480,800,155);

			context.fillStyle="#000000";

			switch(this.selection){
				case(0):
					//context.fillRect(500,520,10,10);
					context.fillRect(338,488,244,69);
				break;

				case(1):
					context.fillRect(338,558,244,69);
				break;

				case(2):
					context.fillRect(588,488,244,69);
				break;

				case(3):
					context.fillRect(588,558,244,69);
				break;

			}

			context.fillStyle=_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].couleurPrefere;
			context.fillRect(60,490,230,135);

			context.fillRect(340,490,240,65);
			context.fillRect(340,560,240,65);
			context.fillRect(590,490,240,65);
			context.fillRect(590,560,240,65);


			context.fillStyle="#000000";
			context.fillText("Que voulez vous faire ?",70,565);

			context.fillText("Attaque",360,530);
			context.fillText("Pokemons",360,600);
			context.fillText("Objets",610,530);
			context.fillText("Fuite",610,600);

			context.fillStyle="#aaaaaa";
			context.fillRect(360,280,320,70*(_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.pokemons.length+1)+20);

			context.fillStyle=_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].couleurPrefere;


			context.fillRect(380,290+70*this.selectionPokemon,280,70);

			context.fillStyle="#000000";
			for(var i = 0;i<_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.pokemons.length;i++){
				context.fillText(_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.getPokemon(i).getName(),390,330+(70*i),270);
			}

			context.fillText("Retour",390,260+70*(_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.pokemons.length+1),270);
			break;

		case(3):	//menu objet
			context.fillStyle="#444444";
			context.fillRect(50,480,800,155);
			context.fillStyle="#000000";

			switch(this.selection){
				case(0):
					//context.fillRect(500,520,10,10);
					context.fillRect(338,488,244,69);
				break;

				case(1):
					context.fillRect(338,558,244,69);
				break;

				case(2):
					context.fillRect(588,488,244,69);
				break;

				case(3):
					context.fillRect(588,558,244,69);
				break;

			}

			context.fillStyle=_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].couleurPrefere;
			context.fillRect(60,490,230,135);

			context.fillRect(340,490,240,65);
			context.fillRect(340,560,240,65);
			context.fillRect(590,490,240,65);
			context.fillRect(590,560,240,65);


			context.fillStyle="#000000";
			context.fillText("Que voulez vous faire ?",70,565);

			context.fillText("Attaque",360,530);
			context.fillText("Pokemons",360,600);
			context.fillText("Objets",610,530);
			context.fillText("Fuite",610,600);

			context.fillStyle="#aaaaaa";
			context.fillRect(360,280,320,370);

			context.fillStyle=_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].couleurPrefere;
			switch(this.selectionObjet){
				case(0):
					context.fillRect(380,290,280,70);
				break;

				case(1):
					context.fillRect(380,360,280,70);
				break;

				case(2):
					context.fillRect(380,430,280,70);
				break;

				case(3):
					context.fillRect(380,500,280,70);
				break;
				case(4):
					context.fillRect(380,570,280,70);
				break;

			}

			context.fillStyle="#000000";
			context.fillText("Potion : 0",390,330,270);
			context.fillText("Pokeball",390,400,270);
			context.fillText("Retour",390,610,270);
			break;
	}

}

MenuCombat.prototype.changeSelection = function(touche){
	switch(this.mode){
	case(0):
		switch(touche){
				case(_utils_touches__WEBPACK_IMPORTED_MODULE_0__["default"].DOWN):
					switch(this.selection){
						case(0):
							this.selection = 1;
						break;

						case(1):
							this.selection = 0;
						break;

						case(2):
							this.selection	= 3;
						break;
						case(3):
							this.selection	= 2;
						break;
					}
				break;
				case(_utils_touches__WEBPACK_IMPORTED_MODULE_0__["default"].UP):
					switch(this.selection){
						case(0):
							this.selection = 1;
						break;

						case(1):
							this.selection = 0;
						break;

						case(2):
							this.selection	= 3;
						break;
						case(3):
							this.selection	= 2;
						break;
					}

				break;
				case(_utils_touches__WEBPACK_IMPORTED_MODULE_0__["default"].LEFT)://left
					switch(this.selection){
						case(0):
							this.selection = 2;
						break;

						case(1):
							this.selection = 3;
						break;

						case(2):
							this.selection	= 0;
						break;
						case(3):
							this.selection	= 1;
						break;
					}

				break;
				case(_utils_touches__WEBPACK_IMPORTED_MODULE_0__["default"].RIGHT)://right
					switch(this.selection){
						case(0):
							this.selection = 2;
						break;

						case(1):
							this.selection = 3;
						break;

						case(2):
							this.selection	= 0;
						break;
						case(3):
							this.selection	= 1;
						break;
					}
				break;
		}
	break;
	case 1://menu attaque
		switch(touche){
			case(_utils_touches__WEBPACK_IMPORTED_MODULE_0__["default"].DOWN):
				this.selectionAttaque++;
				if(this.selectionAttaque>4){
					this.selectionAttaque = 0;
				}
			break;
			case(_utils_touches__WEBPACK_IMPORTED_MODULE_0__["default"].UP):
				this.selectionAttaque--;
				if(this.selectionAttaque<0){
					this.selectionAttaque = 4;
				}
			break;

		}
	break;
	case 2://menu pokemon
		switch(touche){
			case(_utils_touches__WEBPACK_IMPORTED_MODULE_0__["default"].DOWN):
				this.selectionPokemon++;
				if(this.selectionPokemon>_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.pokemons.length){
					this.selectionPokemon= 0;
				}
			break;
			case(_utils_touches__WEBPACK_IMPORTED_MODULE_0__["default"].UP):
				this.selectionPokemon--;
				if(this.selectionPokemon<0){
					this.selectionPokemon= _utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.pokemons.length;
				}
			break;

		}
	break;
	case 3://menu objet
		switch(touche){
			case(_utils_touches__WEBPACK_IMPORTED_MODULE_0__["default"].DOWN):
				this.selectionObjet++;
				if(this.selectionObjet>4){			//monDresseur.inveentaire.length +1 (pour le bouton retour )
					this.selectionObjet = 0;
				}
			break;
			case(_utils_touches__WEBPACK_IMPORTED_MODULE_0__["default"].UP):
				this.selectionObjet--;
				if(this.selectionObjet<0){
					this.selectionObjet = 4;
				}
			break;

		}
	break;
	}
}


MenuCombat.prototype.valide=function(){
	//console.log("Vous avez cliquer sur "+this.selection);
	switch(this.mode){
	case 0:
		switch(this.selection){
			case 0:
				this.mode = 1;//menu attaque
			break;
			case 1:
				this.mode = 2;//menu pokemon
			break;
			case 2:
				this.mode = 3;//menu objet
			break;
			case 3://fuite
				if(_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].getAdv().isSauvage()){
					var rand = Math.random();
					if(rand>0.5){
						this.combat.finCombat();
					}
					else{
						this.combat.mode = 5;
						this.mode = 0;
					}
				}
				else{
					this.combat.mode = 5;
					this.mode = 0;
				}
			break;
		}
	break;

	case 1://menu attaque

		switch(this.selectionAttaque){
			case 0:

				this.combat.mode = 5;
				_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.getPokemon(0).setSelectAttaque(0);
				this.mode = 0;
			break;
			case 1:

				this.combat.mode = 5;
				_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.getPokemon(0).setSelectAttaque(1);
				this.mode = 0;
			break;
			case 2:

				this.combat.mode = 5;
				_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.getPokemon(0).setSelectAttaque(2);
				this.mode = 0;
			break;
			case 3:

				this.combat.mode = 5;
				_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.getPokemon(0).setSelectAttaque(3);
				this.mode = 0;
			break;
			case 4: //retour
				this.mode = 0;
			break;


		}
	break;
	case 2://menu pokemon
		console.log(this.selectionPokemon+"  "+_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.pokemons.length);
		if(this.selectionPokemon != _utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.pokemons.length){
			_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.echange(_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.getPokemon(this.selectionPokemon),_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].dresseur.getPokemon(0));
			this.mode = 0;
			this.combat.mode = 5;
		}
		else{
			this.mode = 0;
		}
	break;

	case 3://menu objet

		switch(this.selectionObjet){
			case 0:

			break;
			case 1:
				var rand = Math.random();
				if(_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].getAdv().isSauvage()){
					console.log("ok");
					if(rand > 0.8){	//recalculer a partir des pdv et de l agilité
						_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].addPokemon(_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].getAdv().getPokemon(0));

						_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].mode = 1;
						_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].hudMode = 11;
						_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].setPokemonCapture(_utils_globals__WEBPACK_IMPORTED_MODULE_2__["monDresseur"].getAdv().getPokemon(0));
					}
					else{
						this.mode = 0;
						this.combat.mode = 5;
					}
				}
				else{
					console.log("pas ok");
				}
			break;
			case 2:

			break;
			case 4: //retour
				this.mode = 0;
			break;
		}
	break;
	}
}


/* harmony default export */ __webpack_exports__["default"] = (MenuCombat);


/***/ }),

/***/ "./src/combat/Pokemon.js":
/*!*******************************!*\
  !*** ./src/combat/Pokemon.js ***!
  \*******************************/
/*! exports provided: default, GenereUnPokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenereUnPokemon", function() { return GenereUnPokemon; });
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/globals */ "./src/utils/globals.js");



var Pokemon = function(num,lvl,exp,pdv,att,def,agi){
	this.num = num;
	this.lvl = lvl;
	this.pdv = pdv;
	this.pdvMax = pdv;
	this.exp = exp;
	this.expMax = lvl*lvl*lvl*10;
	this.att = att;
	this.def = def;
	this.agi = agi;
	this.attaques = [];
	this.getAttaques();
	this.selectAttaque = this.attaques[0];
}


Pokemon.prototype.setExp = function(val){
	this.exp = val;
}
Pokemon.prototype.setExpMax = function(val){
	this.expMax = val;
}
Pokemon.prototype.setPdv = function(val){
	this.pdv = val;
}
Pokemon.prototype.setPdvMax = function(val){
	this.pdvMax = val;
}


Pokemon.prototype.setSelectAttaque = function(att){
	this.selectAttaque = this.attaques[att];
}

Pokemon.prototype.afficheToiAt= function(x,y){
	_utils_globals__WEBPACK_IMPORTED_MODULE_0__["pokedex"].getPoke(this.num).afficheToiAt(x,y);
}


Pokemon.prototype.getAttaques= function(){
	var attaques = _utils_globals__WEBPACK_IMPORTED_MODULE_0__["pokedex"].getAttaques(this);
	var testIsNew;
	for(var i = 0;i< attaques.length; i++){
		testIsNew = true;
		for(var j = 0;j<this.attaques.length;j++){
			if(this.attaques[j].equals(attaques[i])){
				testIsNew = false;
			}
		}
		if(testIsNew){
			this.attaques.unshift(attaques[i]);
		}
	}
}

Pokemon.prototype.getAttaqueNum= function(num){
	if(num >= this.attaques.length){
		return("");
	}
	else{
		return(this.attaques[num]);
	}
}


Pokemon.prototype.displayInfo = function(){
	console.log(this.getName()+"---lvl:"+this.lvl);
}

Pokemon.prototype.soigneToi= function(){
	this.pdv = this.pdvMax;
}

Pokemon.prototype.getName = function(){
	try{
	return(_utils_globals__WEBPACK_IMPORTED_MODULE_0__["pokedex"].getPoke(this.num).getName());
	}
	catch(e){
		console.log(e);
		return("");
	}
}

Pokemon.prototype.afficheToiCombat = function(){
	try{
		_utils_globals__WEBPACK_IMPORTED_MODULE_0__["pokedex"].getPoke(this.num).afficheToiCombat();
	}
	catch(e){
		console.log(e);
	}
}


Pokemon.prototype.getBackSprite= function(){
	_utils_globals__WEBPACK_IMPORTED_MODULE_0__["pokedex"].getPoke(this.num).getBackSprite();
}


Pokemon.prototype.getSelectAttaque = function(){
	return(this.selectAttaque);
}

Pokemon.prototype.attaque= function(oth,combat){   //oth est un pokemon
	var rand,total;
	if(this.pdv>0){
		rand = Math.random();
		//console.log("Atq :"+this.att+" Def Adverse:"+oth.def+" Rand:"+rand);



		total = Math.round(  ((this.att*this.getSelectAttaque().puissance/10)) - ((oth.def)+rand*(oth.def)));




		if(total<0){total = 0;}

		combat.infos.push(this.getName()+" attaque : "+this.getSelectAttaque().getName() + "  et inflige "+total+" dommages");
		oth.pdv = oth.pdv - total;
	}
}

Pokemon.prototype.addExperience= function(expe){
	this.exp += expe;

	if(this.exp >= this.expMax){
		this.monteNiveau();
	}

}


Pokemon.prototype.addExperience= function(expe,combat){
	this.exp += expe;

	if(this.exp >= this.expMax){
		this.monteNiveauCombat(combat);
	}

}

Pokemon.prototype.monteNiveauCombat= function(combat){   //pour afficher les infos

	this.lvl++;
	combat.infos.push(_utils_globals__WEBPACK_IMPORTED_MODULE_0__["pokedex"].pokemons[this.num].getName()+" passe au niveau  "+this.lvl);
	this.expMax += this.lvl*this.lvl*this.lvl*10;

	if(this.lvl >= _utils_globals__WEBPACK_IMPORTED_MODULE_0__["pokedex"].pokemons[this.num].niveauEvolution && _utils_globals__WEBPACK_IMPORTED_MODULE_0__["pokedex"].pokemons[this.num].niveauEvolution>0 ){

		var name = this.getName();
		this.num = _utils_globals__WEBPACK_IMPORTED_MODULE_0__["pokedex"].pokemons[this.num].evolution;
		combat.infos.push(name+" vient d'evoluer en "+this.getName());
	}

	// ameliore les stats
	this.pdvMax = Math.round(this.pdvMax * 1.2);
	this.att = Math.round(this.att * 1.2);
	this.def = Math.round(this.def * 1.2);
	this.agi = Math.round(this.agi * 1.1);
	this.getAttaques();

}


Pokemon.prototype.monteNiveau= function(){   //pour afficher les infos

	this.lvl++;

	this.expMax += this.lvl*this.lvl*this.lvl*10;

	if(this.lvl >= _utils_globals__WEBPACK_IMPORTED_MODULE_0__["pokedex"].pokemons[this.num].niveauEvolution && _utils_globals__WEBPACK_IMPORTED_MODULE_0__["pokedex"].pokemons[this.num].niveauEvolution>0 ){

		var name = this.getName();
		this.num = _utils_globals__WEBPACK_IMPORTED_MODULE_0__["pokedex"].pokemons[this.num].evolution;

	}

	// ameliore les stats
	this.pdvMax = Math.round(this.pdvMax * 1.2);
	this.att = Math.round(this.att * 1.2);
	this.def = Math.round(this.def * 1.2);
	this.agi = Math.round(this.agi * 1.1);
	this.getAttaques();

}


Pokemon.prototype.save=function(dresseur_num){
	SauvegardePokemon(dresseur_num,this.num,this.lvl,this.pdv,this.pdvMax,this.exp,this.expMax,this.att,this.def,this.agi);
	//get pokemon id via ajax

	var pokemon_id = 0;
	for(var i=0;i<this.attaques.length;i++){
		this.attaques[i].save(pokemon_id);
	}
}





function GenereUnPokemon(niveau){
	var num = Math.floor(Math.random()*149);
	var pokemon = new Pokemon(num,5,0,100,10,10,10)
	while(pokemon.lvl<niveau){
		pokemon.monteNiveau();
	}
	pokemon.soigneToi();	//evolution n augmente pas les pdv
	return(pokemon);
}


/* harmony default export */ __webpack_exports__["default"] = (Pokemon);



/***/ }),

/***/ "./src/combat/Sauvage.js":
/*!*******************************!*\
  !*** ./src/combat/Sauvage.js ***!
  \*******************************/
/*! exports provided: default, CombatContreSauvage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatContreSauvage", function() { return CombatContreSauvage; });
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/globals */ "./src/utils/globals.js");
/* harmony import */ var _Combat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Combat */ "./src/combat/Combat.js");
/* harmony import */ var _combat_Pokemon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../combat/Pokemon */ "./src/combat/Pokemon.js");





var PokemonSauvage = function(pokemon){
	this.pokemon = pokemon;
	this.asPerdu;//inutile, mais l objet pokemonSauvage doit correspondre a un dresseur (pendant un combat)
}

PokemonSauvage.prototype.getPokemon=function(place){
	return(this.pokemon);
}

PokemonSauvage.prototype.pokemonsEnVie=function(){
	var retour = [];
	if(this.pokemon.pdv>0){
		retour.push(this.pokemon);
	}
	return(retour);
}


PokemonSauvage.prototype.getName=function(){
	return(this.pokemon.getName());
}
PokemonSauvage.prototype.soignePokemons=function(){
	this.pokemon.soigneToi();
}

PokemonSauvage.prototype.setOriginalOrientation=function(){
	//rien a faire
}


PokemonSauvage.prototype.isSauvage=function(){//pendant un combat, un pokemon sauavge agit + ou - comme un dresseur
	return(true);
}



function CombatContreSauvage(zone){
	var poke = Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_2__["GenereUnPokemon"])(zone);
	//alert("combat niv: "+zone+"  contre un "+poke.getName());
	var sauvage = new PokemonSauvage(poke);
	_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].setAdv(sauvage);
	_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].mode = 2;
	_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].combat = new _Combat__WEBPACK_IMPORTED_MODULE_1__["default"]();
}

/* harmony default export */ __webpack_exports__["default"] = (PokemonSauvage);


/***/ }),

/***/ "./src/gamecontent/Loader.js":
/*!***********************************!*\
  !*** ./src/gamecontent/Loader.js ***!
  \***********************************/
/*! exports provided: chargeObjetsDansGrille0, chargeObjetsDansGrille1, chargeObjetsDansGrille2, chargeObjetsDansGrille3, chargeObjetsDansGrille4, chargeObjetsDansGrille5, chargeObjetsDansGrille6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chargeObjetsDansGrille0", function() { return chargeObjetsDansGrille0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chargeObjetsDansGrille1", function() { return chargeObjetsDansGrille1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chargeObjetsDansGrille2", function() { return chargeObjetsDansGrille2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chargeObjetsDansGrille3", function() { return chargeObjetsDansGrille3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chargeObjetsDansGrille4", function() { return chargeObjetsDansGrille4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chargeObjetsDansGrille5", function() { return chargeObjetsDansGrille5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chargeObjetsDansGrille6", function() { return chargeObjetsDansGrille6; });
/* harmony import */ var _combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../combat/Pokemon */ "./src/combat/Pokemon.js");
/* harmony import */ var _map_Dresseur__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/Dresseur */ "./src/map/Dresseur.js");
/* harmony import */ var _map_Herbes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map/Herbes */ "./src/map/Herbes.js");
/* harmony import */ var _map_Batiment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map/Batiment */ "./src/map/Batiment.js");
/* harmony import */ var _map_Objet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../map/Objet */ "./src/map/Objet.js");
/* harmony import */ var _map_Porte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../map/Porte */ "./src/map/Porte.js");
/* harmony import */ var _map_PNJ__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../map/PNJ */ "./src/map/PNJ.js");
/* harmony import */ var _assets_imgs_centrePokemon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/imgs/centrePokemon.png */ "./assets/imgs/centrePokemon.png");
/* harmony import */ var _assets_imgs_centrePokemon_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_centrePokemon_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_imgs_dresseurRougeChatain_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/imgs/dresseurRougeChatain.png */ "./assets/imgs/dresseurRougeChatain.png");
/* harmony import */ var _assets_imgs_dresseurRougeChatain_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_dresseurRougeChatain_png__WEBPACK_IMPORTED_MODULE_8__);







// import {monDresseur} from '../utils/globals';





function loadData_dresseurs(grille){

	const dresseur1 = new _map_Dresseur__WEBPACK_IMPORTED_MODULE_1__["default"]("Mathias",-7,-60,0,0,0);
	var dresseurRougeChatain_img = document.createElement("img");
	dresseurRougeChatain_img.src = _assets_imgs_dresseurRougeChatain_png__WEBPACK_IMPORTED_MODULE_8___default.a;
	dresseur1.setTexture(dresseurRougeChatain_img);
	dresseur1.setTexte("Bienvenu dans ce jeu Pokemon. Des pokemons ont étrangement disparus. Tu m'as l'air plutot louche!");
	dresseur1.setTexteLooser("J'ai du me tromper, fais moi signe si tu en apprend plus de ton coté.");
	dresseur1.setGTX(3);
	dresseur1.setGTY(3);
		dresseur1.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(5));
		dresseur1.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(5));
		dresseur1.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(5));

	const dresseur2 = new _map_Dresseur__WEBPACK_IMPORTED_MODULE_1__["default"]("Quentin",225,-22,1,0);
	dresseur2.setTexture(dresseurRougeChatain_img);
	// dresseur2.setTexture(document.getElementById('dresseurRougeBrun'));
	dresseur2.setTexte("C'est forcement un coup de la Team Rocket!");
	dresseur2.setTexteLooser("Il faut vraiment s'entrainer pour esperer vaincre la Team Rocket!");
	dresseur2.setGTX(3);
	dresseur2.setGTY(5);
		dresseur2.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(5));
		dresseur2.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(7));

	const dresseur3 = new _map_Dresseur__WEBPACK_IMPORTED_MODULE_1__["default"]("Billy",196,172,2,0);
	dresseur3.setTexture(dresseurRougeChatain_img);
	// dresseur3.setTexture(document.getElementById('dresseurRougeChatain'));
	dresseur3.setTexte("Si tu ne peux pas me battre, tu vas te faire massacrer par la Team Rocket");
	dresseur3.setTexteLooser("Bon, toi tu as peut etre tes chances");
	dresseur3.setGTX(3);
	dresseur3.setGTY(4);
		dresseur3.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(5));
		dresseur3.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(7));
		dresseur3.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(9));

	const dresseur4 = new _map_Dresseur__WEBPACK_IMPORTED_MODULE_1__["default"]("Theo",350,18,0,0);
	// dresseur4.setTexture(document.getElementById('dresseurRougeBrun'));
	dresseur4.setTexte("J'avais un pokemon vraiment très fort mais il s'est fait  capturer par la Team Rocket..");
	dresseur4.setTexteLooser("Je ne serai pas fait voler, je t'aurai battu très largement..");
	dresseur4.setGTX(0);
	dresseur4.setGTY(0);
		dresseur4.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(13));

	const dresseur5 = new _map_Dresseur__WEBPACK_IMPORTED_MODULE_1__["default"]("Leo",650,194,0,0);
	// dresseur5.setTexture(document.getElementById('dresseurRougeBlond'));
	dresseur5.setTexte("Attention!, la Team Rocket est toute proche!");
	dresseur5.setTexteLooser("Tu m'as l'air bien préparé, bon courage!");
	dresseur5.setGTX(0);
	dresseur5.setGTY(6);
		dresseur5.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(13));

	const dresseur6 = new _map_Dresseur__WEBPACK_IMPORTED_MODULE_1__["default"]("Spyros",-34,110,2,0);
	// dresseur6.setTexture(document.getElementById('dresseurRougeChatain'));
	dresseur6.setTexte("La Team Rocket a apparement encore sévit.. Un combat?");
	dresseur6.setTexteLooser("Bien joué, la prochaine fois je t'aurais !");
	dresseur6.setGTX(2);
	dresseur6.setGTY(9);
		dresseur6.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(5));
		dresseur6.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(7));

	grille.ajouteDresseur(dresseur1);
	grille.ajouteDresseur(dresseur2);
	grille.ajouteDresseur(dresseur3);
	grille.ajouteDresseur(dresseur4);
	grille.ajouteDresseur(dresseur5);
	grille.ajouteDresseur(dresseur6);

}

function loadData_teamrocket(grille){
	const teamR1 = new _map_Dresseur__WEBPACK_IMPORTED_MODULE_1__["default"]("Bad Guy1",686,34,0,0);
	// teamR1.setTexture(document.getElementById('teamRocketBasic'));
	teamR1.setTexte("Tiens toi! Donnes moi tes pokémons!");
	teamR1.setTexteLooser("La Team Rocket va t'anneantir!");
		teamR1.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(7));
		teamR1.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(10));
		teamR1.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(10));

	const teamR2 = new _map_Dresseur__WEBPACK_IMPORTED_MODULE_1__["default"]("Bad Guy2",740,20,3,0);
	// teamR2.setTexture(document.getElementById('teamRocketBasic'));
	teamR2.setTexte("Hey toi, tu vas voir!");
	teamR2.setTexteLooser("Tu m'as battu, mais attend toi au pire!");
		teamR2.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(11));
		teamR2.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(12));


	const teamR3 = new _map_Dresseur__WEBPACK_IMPORTED_MODULE_1__["default"]("Bad Guy3",844,76,2,0);
	// teamR3.setTexture(document.getElementById('teamRocketBasic'));
	teamR3.setTexte("Pas si vite, mes plutot ces pokemons dans mon sac!");
	teamR3.setTexteLooser("Ouais c'est facile aussi comme ca, tricheur..");
		teamR3.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(17));



	const teamR4 = new _map_Dresseur__WEBPACK_IMPORTED_MODULE_1__["default"]("Bad Guy4",1008,54,3,0);
	// teamR4.setTexture(document.getElementById('teamRocketBasic'));
	teamR4.setTexte("Tu ne pourras meme pas approcher notre chef!");
	teamR4.setTexteLooser("Notre chef va me venger!");
		teamR4.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(9));
		teamR4.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(13));
		teamR4.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(15));


	const teamR5 = new _map_Dresseur__WEBPACK_IMPORTED_MODULE_1__["default"]("Capitaine Rocket",1076,24,1,0);
	// teamR5.setTexture(document.getElementById('teamRocketBasic'));
	teamR5.setTexte("Et oui c'est moi qui retiens tout les pokemons! Mouhahaha");
	teamR5.setTexteLooser("Bravo, je vais redonner les pokemons a leurs proprietaires!");
	teamR5.setGTX(9);
	teamR5.setGTY(9);
		teamR5.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(15));
		teamR5.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(15));
		teamR5.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(18));
		teamR5.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(20));
		teamR5.addPokemon(Object(_combat_Pokemon__WEBPACK_IMPORTED_MODULE_0__["GenereUnPokemon"])(23));

	grille.ajouteDresseur(teamR1);
	grille.ajouteDresseur(teamR2);
	grille.ajouteDresseur(teamR3);
	grille.ajouteDresseur(teamR4);
	grille.ajouteDresseur(teamR5);

}

function loadData_herbe(grille){
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](160,-64,78,48,3));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](128,-58,32,26,3));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](146,-32,14,16,3));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](114,-62,12,14,5));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](160,-16,78,18,5));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](178,2,60,16,5));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](192,18,32,16,7));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](224,178,16,32,5));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](206,196,82,14,5));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](272,98,16,116,5));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](272,118,64,42,5));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](318,160,18,16,7));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](368,34,62,30,7));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](430,34,16,18,9));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](402,2,30,32,10));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](340,2,26,64,10));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](272,-16,34,78,10));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](306,36,10,46,9));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](370,64,12,18,12));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](544,162,80,14,12));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](592,176,30,34,13));

	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](654,178,32,34,14));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](768,72,16,106,15));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](754,148,14,30,15));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](738,84,30,12,15));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](786,64,32,14,15));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](844,68,66,20,18));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](880,38,144,40,18));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](1006,84,44,12,20));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](962,98,48,12,20));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](914,-12,46,62,20));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](994,-28,10,82,25));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](978,-16,16,16,25));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](1006,-62,144,30,25));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](1136,-32,28,44,25));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](1118,0,48,12,25));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](1138,12,28,54,25));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](1154,66,30,30,25));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](1152,96,16,16,25));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](1106,112,46,18,25));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](1136,130,16,30,25));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](1058,132,14,46,25));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](1042,162,14,16,25));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](1072,-28,68,92,20));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](1072,-28,68,92,20));
	grille.ajouteHerbe(new _map_Herbes__WEBPACK_IMPORTED_MODULE_2__["default"](1038,18,72,42,20));
}

function loadData_colisisons_scene_1(grille){
	// All the data where generated using the "z" or "h" shortcut while playing, and copy-pasted here as it
	// (this tool define where objects are based on the player position)

	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1230,-106,14,356));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1070,218,168,18));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-120,-100,18,342));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",464,186,34,30));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",560,182,34,34));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",468,182,26,4));

	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-50,4,68,46));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-112,-92,350,28));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-30,-44,12,14));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",64,-16,14,30));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",2,52,12,12));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",20,38,22,38));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",64,62,32,30));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-112,40,32,36));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-112,86,30,96));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-110,182,92,42));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-78,178,2,4));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-48,112,14,28));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-32,130,14,26));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-16,118,64,38));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",46,146,34,28));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",82,150,60,76));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",142,184,64,42));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",38,38,8,38));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",96,48,14,28));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",96,96,14,28));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",130,116,12,12));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",130,68,28,42));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",192,70,28,38));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",238,-66,34,256));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",76,146,12,4));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",302,-100,200,64));

	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",128,16,22,30));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",144,26,30,34));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",160,126,16,34));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",206,144,20,30));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",206,218,48,0));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",206,214,212,16));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-22,182,14,38));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-18,216,108,14));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",92,114,22,14));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",430,-4,34,34));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",302,-6,38,38));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",88,46,22,34));

	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-36,112,10,44));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",288,152,30,72));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",336,120,32,106));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",368,142,14,32));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",358,182,40,46));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",398,214,292,12));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",688,184,194,42));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",880,122,128,104));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1004,148,36,76));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1036,182,34,42));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1072,152,32,40));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1122,180,16,12));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1136,176,16,28));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1120,142,14,32));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1122,72,28,38));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1024,46,30,32));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1050,60,24,34));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1086,48,18,28));

	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",538,118,116,28));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",532,146,138,16));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",704,108,14,52));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",624,158,0,0));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",514,168,26,38));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",564,184,28,30));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",624,160,30,48));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",642,102,14,48));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",640,6,28,104));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",646,-44,54,60));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",692,-44,88,32));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",762,-18,18,80));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",702,50,76,22));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",776,-8,102,72));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",818,50,26,78));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",848,94,14,32));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",800,78,22,36));

	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",272,62,36,36));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",300,82,22,28));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",288,100,22,12));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",722,152,0,2));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",722,152,32,32));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",784,152,64,32));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",930,-12,34,42));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",956,0,34,30));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1010,-10,28,40));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1032,-4,38,18));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1088,-10,30,42));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1104,28,28,32));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1074,86,28,40));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1050,90,32,12));

	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",136,150,14,34));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",382,64,52,30));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",430,52,36,26));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",434,98,46,26));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",454,86,22,18));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",516,36,22,126));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",498,42,20,72));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",466,6,40,58));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",460,46,10,16));


	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",316,56,36,44));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",366,-18,30,50));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",302,-50,192,46));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",384,104,28,44));


	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",738,102,24,40));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",796,98,68,30));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",884,88,28,34));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",878,110,130,18));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1040,128,14,30));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1154,138,58,36));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1158,130,18,14));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1184,36,26,44));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1166,-10,32,40));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1150,12,22,34));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1122,-34,12,34));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1150,-48,16,16));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",1038,-30,34,44));

	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",462,144,18,30));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",704,138,50,26));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",752,102,16,42));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",864,-8,50,46));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",928,-52,14,34));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",830,-96,406,34));

	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",976,54,30,42));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",912,96,16,14));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",704,-12,32,14));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",720,-2,14,18));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",668,16,22,14));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",16,184,32,32));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",430,112,46,18));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",716,28,42,44));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",892,-102,22,134));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",912,96,18,14));

	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",224,-96,50,28));
}

var chargeObjetsDansGrille0 = function(grille, monDresseur){

	loadData_dresseurs(grille);
	loadData_teamrocket(grille);
	loadData_herbe(grille);
	loadData_colisisons_scene_1(grille);

	var centrePokemon_img = document.createElement("img");
	centrePokemon_img.src = _assets_imgs_centrePokemon_png__WEBPACK_IMPORTED_MODULE_7___default.a;
	var batiment1 = new _map_Batiment__WEBPACK_IMPORTED_MODULE_3__["default"]("Centre Pokemon",centrePokemon_img, -102,-40,120,100);

	grille.ajoutePorte(new _map_Porte__WEBPACK_IMPORTED_MODULE_5__["default"](-74,0,44,112,"centreP1", monDresseur));
	grille.ajouteBatiment(batiment1);

}

var chargeObjetsDansGrille1 = function(grille, monDresseur){//-------------------------------------------------------------------------------------------
	// console.log(monDresseur)
		//maisons
		grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",800,688,68,68));
		grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",640,746,118,110));
		grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",698,926,118,96));
		grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",548,928,116,92));
		grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",370,750,116,110));
		grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",492,748,116,108));
		grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",424,910,118,108));
		grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",116,636,70,68));
		grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",216,568,70,68));
		grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",418,548,86,78));
		grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",508,554,116,76));
		grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",684,560,86,72));
		grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",814,518,84,78));
		grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",790,408,88,84));
		grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",884,364,150,98));
		grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",248,842,118,110));
}

var chargeObjetsDansGrille2 = function(grille, monDresseur){//------------------------------------------------------------------------- premier centre pokemon


	grille.ajoutePorte(new _map_Porte__WEBPACK_IMPORTED_MODULE_5__["default"](40,123,-72,12,"foret1", monDresseur));

	//infirmiere

	grille.ajoutePNJ(new _map_PNJ__WEBPACK_IMPORTED_MODULE_6__["default"]("Infirmiere Joelle",36,48,54,54,true));


	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",100,80,36,34));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-62,128,198,8));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-14,12,104,40));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",82,4,22,24));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-62,12,60,12));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-82,12,24,20));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-82,22,16,112));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-72,124,16,12));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-67,70,26,38));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",98,4,46,14));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",138,14,18,20));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",146,24,8,104));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",128,128,32,8));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",138,114,18,28));


}

var chargeObjetsDansGrille3 = function(grille, monDresseur){//------------------------------------------------------------------------- centre pokemon argenta


	grille.ajoutePorte(new _map_Porte__WEBPACK_IMPORTED_MODULE_5__["default"](40,123,18,198,"argenta", monDresseur));

	//infirmiere

	grille.ajoutePNJ(new _map_PNJ__WEBPACK_IMPORTED_MODULE_6__["default"]("Infirmiere Joelle",36,48,54,54,true));


	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",100,80,36,34));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-62,128,198,8));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-14,12,104,40));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",82,4,22,24));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-62,12,60,12));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-82,12,24,20));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-82,22,16,112));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-72,124,16,12));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-67,70,26,38));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",98,4,46,14));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",138,14,18,20));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",146,24,8,104));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",128,128,32,8));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",138,114,18,28));


}

var chargeObjetsDansGrille4 = function(grille, monDresseur){		//argenta		----------------------------------------------------------------------------


grille.ajoutePorte(new _map_Porte__WEBPACK_IMPORTED_MODULE_5__["default"](12,168,44,112,"centreP2").setLargeur(10), monDresseur);
grille.ajoutePorte(new _map_Porte__WEBPACK_IMPORTED_MODULE_5__["default"](190,52,10,42,"pokeshopArgenta").setLargeur(10), monDresseur);
grille.ajoutePorte(new _map_Porte__WEBPACK_IMPORTED_MODULE_5__["default"](-18,20,-60,42,"areneArgenta").setLargeur(8), monDresseur);

grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("CentreP",-26,102,86,62));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("CentreP",22,162,38,12));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("CentreP",-26,160,38,16));

grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("market",150,-4,70,56));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("market",198,48,22,12));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("market",150,48,40,12));


grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",54,102,38,72));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",66,90,16,12));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-46,86,14,20));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-58,102,40,74));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-176,76,268,18));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-140,196,88,58));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",150,116,166,44));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",246,156,80,18));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",150,150,86,24));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",150,156,14,96));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",156,236,16,18));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",310,236,22,16));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",318,156,14,94));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",160,108,20,12));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",194,108,16,12));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",224,108,18,14));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",256,108,20,18));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",288,108,20,16));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",218,16,32,46));

grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",244,-108,88,58));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",134,-148,118,16));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",190,-178,62,14));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",190,-212,14,42));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-74,-240,264,76));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-74,-166,180,18));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-10,-150,54,20));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",22,-132,22,8));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-10,-132,24,8));

grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-204,-148,56,16));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-122,-50,38,78));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-92,-20,28,16));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-76,-52,120,74));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-10,16,12,10));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-34,16,16,10));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",32,-22,34,20));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",54,-52,38,84));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",78,24,14,66));






}

var chargeObjetsDansGrille5 = function(grille, monDresseur){	//pokeshop argenta

grille.ajoutePorte(new _map_Porte__WEBPACK_IMPORTED_MODULE_5__["default"](0,54,190,65,"argenta").setLargeur(10), monDresseur);


grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-52,20,40,24));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",44,-12,40,54));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",92,-12,24,54));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",92,-46,24,16));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",100,-34,16,12));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",44,-40,56,12));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-8,-50,66,12));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-68,-52,72,64));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",108,-38,10,86));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",92,44,22,18));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision" ,10,54,100,8));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-60,54,62,10));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-64,46,10,8));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-58,52,12,10));
grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-70,-2,10,56));


}

var chargeObjetsDansGrille6 = function(grille, monDresseur){	//arene argenta

	grille.ajoutePorte(new _map_Porte__WEBPACK_IMPORTED_MODULE_5__["default"](-68,52,-16,40,"argenta").setLargeur(12), monDresseur);

	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-110,-22,34,30));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-110,-74,34,28));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-48,-68,36,24));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-48,-38,72,60));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-4,-98,34,84));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-58,-126,62,46));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-128,-126,62,34));

	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-6,20,14,38));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-124,-90,48,62));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-136,-42,18,62));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-122,12,48,10));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-38,20,18,20));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-102,20,16,20));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-120,-94,4,6));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-120,-92,4,2));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-128,-172,130,14));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-112,-166,36,34));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-48,-164,38,34));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-6,-162,14,52));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-126,-178,10,86));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-132,54,64,4));
	grille.ajouteObjet(new _map_Objet__WEBPACK_IMPORTED_MODULE_4__["default"]("Collision",-56,54,62,6));
}





/***/ }),

/***/ "./src/gameloop/PlayerController.js":
/*!******************************************!*\
  !*** ./src/gameloop/PlayerController.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gamecontent_Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gamecontent/Loader */ "./src/gamecontent/Loader.js");
/* harmony import */ var _map_Grille__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/Grille */ "./src/map/Grille.js");
/* harmony import */ var _UI_hud_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/hud_events */ "./src/UI/hud_events.js");
/* harmony import */ var _assets_imgs_terrrainTest2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/imgs/terrrainTest2.png */ "./assets/imgs/terrrainTest2.png");
/* harmony import */ var _assets_imgs_terrrainTest2_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_terrrainTest2_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_imgs_ville2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/imgs/ville2.png */ "./assets/imgs/ville2.png");
/* harmony import */ var _assets_imgs_ville2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_ville2_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_imgs_centrePinterieur_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/imgs/centrePinterieur.png */ "./assets/imgs/centrePinterieur.png");
/* harmony import */ var _assets_imgs_centrePinterieur_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_centrePinterieur_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_imgs_argenta_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/imgs/argenta.png */ "./assets/imgs/argenta.png");
/* harmony import */ var _assets_imgs_argenta_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_argenta_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_imgs_pokeshopInside_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/imgs/pokeshopInside.png */ "./assets/imgs/pokeshopInside.png");
/* harmony import */ var _assets_imgs_pokeshopInside_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_pokeshopInside_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_imgs_areneArgenta_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/imgs/areneArgenta.png */ "./assets/imgs/areneArgenta.png");
/* harmony import */ var _assets_imgs_areneArgenta_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_areneArgenta_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_imgs_dresseurs_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/imgs/dresseurs.png */ "./assets/imgs/dresseurs.png");
/* harmony import */ var _assets_imgs_dresseurs_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_dresseurs_png__WEBPACK_IMPORTED_MODULE_9__);












var PlayerController = function(dresseur,grille){

	this.dresseur = dresseur;
	this.dresseur.grandeTextureX = 1;
	this.dresseur.grandeTextureY= 9;
	this.dresseur.position = 5;
	this.mode=0;   //0 = deplacement    1 = hud    2 = combat
	this.nextCaseX;
	this.nextCaseY;
	this.hudMode=0;// 0 = pause 1 = discussion 2 = pokedex 3= menupokemon
	this.fps = 90;
	this.discussion = false;
	this.info = false;
	this.couleurPrefere = "#bbbbbb";
	this.pokemonCapture = false;
	this.adversaire;

	var dresseurs_img = document.createElement("img");
	dresseurs_img.src = _assets_imgs_dresseurs_png__WEBPACK_IMPORTED_MODULE_9___default.a;
	this.charSprites = dresseurs_img;

	this.walkable = true

	this.menu = null;
	this.combat = null;

	this.grille;
	this.grilles=[];


	var terrain_img = document.createElement("img");
	terrain_img.src = _assets_imgs_terrrainTest2_png__WEBPACK_IMPORTED_MODULE_3___default.a;

	var ville2_img = document.createElement("img");
	ville2_img.src = _assets_imgs_ville2_png__WEBPACK_IMPORTED_MODULE_4___default.a;

	var centrePinterieur_img = document.createElement("img");
	centrePinterieur_img.src = _assets_imgs_centrePinterieur_png__WEBPACK_IMPORTED_MODULE_5___default.a;

	var argenta_img = document.createElement("img");
	argenta_img.src = _assets_imgs_argenta_png__WEBPACK_IMPORTED_MODULE_6___default.a;

	var pokeshopInside_img = document.createElement("img");
	pokeshopInside_img.src = _assets_imgs_pokeshopInside_png__WEBPACK_IMPORTED_MODULE_7___default.a;

	var areneArgenta_img = document.createElement("img");
	areneArgenta_img.src = _assets_imgs_areneArgenta_png__WEBPACK_IMPORTED_MODULE_8___default.a;


	this.grilles.push(new _map_Grille__WEBPACK_IMPORTED_MODULE_1__["default"](terrain_img));
	this.grilles.push(new _map_Grille__WEBPACK_IMPORTED_MODULE_1__["default"](ville2_img));
	this.grilles.push(new _map_Grille__WEBPACK_IMPORTED_MODULE_1__["default"](centrePinterieur_img));
	this.grilles.push(new _map_Grille__WEBPACK_IMPORTED_MODULE_1__["default"](centrePinterieur_img));
	this.grilles.push(new _map_Grille__WEBPACK_IMPORTED_MODULE_1__["default"](argenta_img));
	this.grilles.push(new _map_Grille__WEBPACK_IMPORTED_MODULE_1__["default"](pokeshopInside_img));
	this.grilles.push(new _map_Grille__WEBPACK_IMPORTED_MODULE_1__["default"](areneArgenta_img));

}

PlayerController.prototype.loadObjects = function(num){
	Object(_gamecontent_Loader__WEBPACK_IMPORTED_MODULE_0__["chargeObjetsDansGrille0"])(this.grilles[0], this);//collisions, dresseur, pnj porte etc
	Object(_gamecontent_Loader__WEBPACK_IMPORTED_MODULE_0__["chargeObjetsDansGrille1"])(this.grilles[1], this);
	Object(_gamecontent_Loader__WEBPACK_IMPORTED_MODULE_0__["chargeObjetsDansGrille2"])(this.grilles[2], this);
	Object(_gamecontent_Loader__WEBPACK_IMPORTED_MODULE_0__["chargeObjetsDansGrille3"])(this.grilles[3], this);
	Object(_gamecontent_Loader__WEBPACK_IMPORTED_MODULE_0__["chargeObjetsDansGrille4"])(this.grilles[4], this);
	Object(_gamecontent_Loader__WEBPACK_IMPORTED_MODULE_0__["chargeObjetsDansGrille5"])(this.grilles[5], this);
	Object(_gamecontent_Loader__WEBPACK_IMPORTED_MODULE_0__["chargeObjetsDansGrille6"])(this.grilles[6], this);
}
PlayerController.prototype.setGrille= function(num){
	this.grille = this.grilles[num];
}

PlayerController.prototype.getGrille= function(num){
	return(this.grille);
}

PlayerController.prototype.addPokemon= function(pokemon){
	this.dresseur.addPokemon(pokemon);
}

PlayerController.prototype.getTailleX = function(){
	return(this.dresseur.tailleX);
}

PlayerController.prototype.getGTX = function(){
	return(this.dresseur.grandeTextureX);
}
PlayerController.prototype.getGTY = function(){
	return(this.dresseur.grandeTextureY);
}

PlayerController.prototype.setPokemonCapture = function(poke){
	this.pokemonCapture = poke;
}

PlayerController.prototype.getPokemonCapture = function(){
	return(this.pokemonCapture);
}

PlayerController.prototype.getTailleY = function(){
	return(this.dresseur.tailleY);
}

PlayerController.prototype.getAdv = function(){
	return(this.dresseur.adversaire);
}

PlayerController.prototype.setAdv = function(adv){
	this.dresseur.adversaire = adv;
}

PlayerController.prototype.calculNextCase= function(){
	this.dresseur.calculNextCase();
	this.nextCaseX = this.dresseur.nextCaseX;
	this.nextCaseY = this.dresseur.nextCaseY;
}


PlayerController.prototype.setTexture= function(texture){
	this.dresseur.setTexture(texture);
}

PlayerController.prototype.getTexture= function(){
	return(this.dresseur.texture);
}


PlayerController.prototype.getName= function(){
	return(this.dresseur.getName());
}

PlayerController.prototype.isWalkable = function(posX,posY){
	var retour = true;

	if(posX>this.getPosX()-20 && posX < this.getPosX()+this.getTailleX()+20){
		if(posY>this.getPosY()-20 && posY < this.getPosY()+this.getTailleY()+20){
			retour = false;
		}
	}


	return(retour);
}

PlayerController.prototype.soignePokemons= function(){
	this.dresseur.soignePokemons();
}


PlayerController.prototype.setOrientation= function(or){
	this.dresseur.setOrientation(or);
}

PlayerController.prototype.getOrientation= function(){
	return(this.dresseur.orientation);
}

PlayerController.prototype.getPosX= function(){
	return(this.dresseur.posX);
}

PlayerController.prototype.setPosX= function(value){
	this.dresseur.posX = value;
}

PlayerController.prototype.getPosY= function(){
	return(this.dresseur.posY);
}

PlayerController.prototype.setPosY= function(value){
	this.dresseur.posY = value;
}

PlayerController.prototype.onLose= function(){
	this.dresseur.posX = 0;
	this.dresseur.posY = 0;
}



PlayerController.prototype.getDresseurByNum= function(num){
	var retour = false;
	for(var i = 0;i<this.grilles.length;i++){
		retour = this.grilles[i].getDresseurByNum(num);
		if(retour!=false){
			return(retour);
		}
	}
	return(retour);
}



//for making colision press 'z' twice
var Cx1,Cy1;
var Cx2,Cy2;
var boolPressC = false;//si touche deja appuye, car genere au bout du deuxieme appui

//for making colision press 'z' twice
var Hx1,Hy1;
var Hx2,Hy2;
var boolPressH = false;//si touche deja appuye, car genere au bout du deuxieme appui


PlayerController.prototype.goToNextPosition = function(){
	switch(this.getOrientation()){
		case(1):
			if(this.dresseur.position != 5 && (this.mode == 0) && this.walkable){
				this.setPosY(this.getPosY()+2);
			}
			break;
		case(2):
			if(this.dresseur.position != 5 && (this.mode == 0) && this.walkable){
				this.setPosX(this.getPosX()-2);
			}
			break;
		case(3):
			if(this.dresseur.position != 5 && (this.mode == 0) && this.walkable){
				this.setPosX(this.getPosX()+2);
			}
			break;
		case(4):
			if(this.dresseur.position != 5 && (this.mode == 0) && this.walkable){
				this.setPosY(this.getPosY()-2);
			}
			break;
	}


	if(this.dresseur.position < 4 && (this.mode == 0)){
		this.dresseur.position ++;
	}
	if(this.dresseur.position == 4){this.dresseur.position = 0;}

	document.getElementById('posX').innerHTML = "X:"+this.getPosX();
	document.getElementById('posY').innerHTML = "Y:"+this.getPosY();

}


PlayerController.prototype.actions = function(touche){
	//console.log("mode:"+this.mode+" hud:"+this.hudMode);
	switch(this.mode){

			case(0):									//deplacement

				   switch(touche){
				   	case(40)://down
				   		this.setOrientation(1);
				   		if(this.dresseur.position >= 5){this.dresseur.position = 0;}
				   		this.grille.checkWalkOnHerbes();
				   	break;
				   	case(38)://up
				   		this.setOrientation(4);
				   		if(this.dresseur.position >= 5){this.dresseur.position = 0;}
				   		this.grille.checkWalkOnHerbes();
				   	break;
				   	case(37)://left
				   		this.setOrientation(2);
				   		if(this.dresseur.position >= 5){this.dresseur.position = 0;}
				   		this.grille.checkWalkOnHerbes();
				   	break;
				   	case(39)://right
				   		this.setOrientation(3);
				   		if(this.dresseur.position >= 5){this.dresseur.position = 0;}
				   		this.grille.checkWalkOnHerbes();
				   	break;
				   	case(80):
				   		console.log("Mise en pause");
				   		this.mode = 1;
				   		this.hudMode = 0;
				   		break;
				   	case(65)://touche action = a
				   		this.calculNextCase();
				   		var dress = this.grille.getDresseur(this.nextCaseX,this.nextCaseY);
				   		//boolean si autre que dresseurs

				   		if(typeof(dress)=="object"){
				   			if(dress.isInfirmiere() == false){
					   			this.setAdv(dress);
						   		this.discussion = this.getAdv().parler();
						   		this.mode = 1;
						   		this.hudMode = 1;
						   	}

				   		}
				   		else{
				   			var pnj = this.grille.getPNJ(this.nextCaseX,this.nextCaseY);
				   			if(typeof(pnj)=="object"){
				   				//console.log(pnj);
					   			if(true){	//a remplacer par pnj.isInfirmiere(), mais ne marche pas ce soir.. vas savoir
								   	this.soignePokemons();
							   	}
							   	this.info= pnj.getDiscuss();
								this.mode = 1;
								this.hudMode = 10;
							 }

				   		}
				   		break;

				   	case(90)://z -> recupere message de collisions

				   		if(!boolPressC){
				   			Cx1 = this.getPosX();
				   			Cy1 = this.getPosY();

				   		}
				   		else{
				   			Cx2 = this.getPosX() - Cx1;	//x2,y2 representent la taille de l objet et non sa coordonnee
				   			Cy2 = this.getPosY() - Cy1;
				   			var chaine =  "grille.ajouteObjet(new Objet(\"Collision\","+Cx1+","+Cy1+","+Cx2+","+Cy2+"));<br>"
				   			document.getElementById("ajoutCollision").innerHTML += chaine;
				   		}
				   		boolPressC = !boolPressC;
				   		break;

				   	case(72)://h -> recupere message d herbes

				   		if(!boolPressH){
				   			Hx1 = this.getPosX();
				   			Hy1 = this.getPosY();

				   		}
				   		else{
				   			Hx2 = this.getPosX() - Hx1;	//x2,y2 representent la taille de l objet et non sa coordonnee
				   			Hy2 = this.getPosY() - Hy1;
				   			var chaine =  "this.grille.ajouteHerbe(new Herbe("+Hx1+","+Hy1+","+Hx2+","+Hy2+",5));<br>"
				   			document.getElementById("ajoutCollision").innerHTML += chaine;
				   		}
				   		boolPressH = !boolPressH;
				   		break;

				   }//fin switch touche

				   break;//fin deplacement mode

				case(1):	//mode hud
					Object(_UI_hud_events__WEBPACK_IMPORTED_MODULE_2__["default"])(touche)
				  break;//fin mode hud

				case(2)://mode combat
					  this.combat.gestionEvenement(touche);
				 		break;//fin combat mode

		}
}

PlayerController.prototype.getDresseurByNum=function(num){
	var retour = false;
	var test = false
	for(var i=0;i<this.grilles.length;i++){
		test = this.grilles[i].getDresseurByNum(num);
		if(test != false){
			retour = test;
		}
	}
	return(retour);
}

PlayerController.prototype.save = function(){		//old way
	alert("Cette fonctionnalité à étédésactivé pour  le moment")
	// this.mode = 1;
	// this.hudMode = 12; //mode attente
	// this.info = "Sauvegarde en cours";
	// new SauvegardeController(this.getPosX(),this.getPosY(),this.couleurPrefere,this.dresseur.badges,this.dresseur.argent,this.grille.num);
	// //gere toute les sauvegardes a la suite, et pas en meme temps

}

PlayerController.prototype.saveDresseurs = function(){
	// var chaine = "";
	// for(var i = 0;i<this.grilles.length;i++){
	// 	 chaine += this.grilles[i].saveDresseurs();
	// }
	// return(chaine);
}

PlayerController.prototype.savePokemons = function(){
	// var chaine = getDresseurPokemons(this.dresseur);
	// return(chaine);
}



PlayerController.prototype.load = function(){
	alert("Cette fonctionnalité à étédésactivé pour  le moment")
	// this.mode=1;
  //       this.hudMode = 12;//attente
  //       this.info="Loading Game";
	//
	// if (window.XMLHttpRequest) {
  //           // code for IE7+, Firefox, Chrome, Opera, Safari
  //           xmlhttp = new XMLHttpRequest();
  //       } else {
  //           // code for IE6, IE5
  //           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  //       }
  //       var controller_id;
  //       xmlhttp.onreadystatechange = function() {
  //           if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  //               document.getElementById("debugAjax").innerHTML = xmlhttp.responseText;
  //               var fonctionne =   parseInt(document.getElementById("fonctionne").innerHTML);
  //               if(!fonctionne){
  //               	alert("probleme sauvegarde des infos joueur");
  //               	erreurLoad();
  //               }
  //               else{
	//                 this.setPosX(parseInt(document.getElementById("x").innerHTML));
	//                 this.setPosY(parseInt(document.getElementById("y").innerHTML));
	//                 this.setGrille(parseInt(document.getElementById("grille").innerHTML));
	//                 this.couleurPrefere="#"+document.getElementById("couleur").innerHTML;
	//
	//                 loadDresseurs();//ci dessous
	//         }
  //           }
	//
  //           else{
  //           	if(xmlhttp.readyState==4 && xmlhttp.status!=200){
  //           		console.log("Ca marche pas: \nreadyState ="+xmlhttp.readyState+"\n status ="+xmlhttp.status);
  //           	}
  //           }
  //       }
  //       xmlhttp.open("GET","pokemon/getController.php",true);
	// xmlhttp.send();
}

function loadDresseurs(){
	// if (window.XMLHttpRequest) {
  //           // code for IE7+, Firefox, Chrome, Opera, Safari
  //           xmlhttp = new XMLHttpRequest();
  //       } else {
  //           // code for IE6, IE5
  //           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  //       }
  //       var controller_id;
  //       xmlhttp.onreadystatechange = function() {
  //           if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  //               document.getElementById("debugAjax").innerHTML = xmlhttp.responseText;
  //             	var dressNum = document.getElementsByClassName("num");
  //               var dressAsPerdu = document.getElementsByClassName("asPerdu");
  //               var fonctionne =   parseInt(document.getElementById("fonctionne").innerHTML);
  //               if(dressNum.length!=dressAsPerdu.length){
  //               	alert("Il y a eu un probleme sur la sauvegarde");
  //               	erreurLoad();
  //               }
  //               if(!fonctionne){
  //               	alert("probleme sauvegarde des dresseurs");
  //               	erreurLoad();
  //               }
  //               else{
	//
	//                 var dresseur;
	//                 for(var i=0;i<dressNum.length;i++){
	//                 	//console.log("test trouve dresseur num "+dressNum[i].innerHTML);
	//                 	dresseur = this.getDresseurByNum(parseInt(dressNum[i].innerHTML));
	//                 	//console.log(dresseur.getName()+ " asPerdu:  "+ dresseur.aPerdu+ "  mais en fait :"+dressAsPerdu[i].innerHTML);
	//                 	dresseur.aPerdu = parseInt(dressAsPerdu[i].innerHTML);
	//                 }
	//
	//                 loadPokemons();//ci dessous
	//         }
	//
	//
  //           }
	//
  //           else{
  //           	if(xmlhttp.readyState==4 && xmlhttp.status!=200){
  //           		console.log("Ca marche pas: \nreadyState ="+xmlhttp.readyState+"\n status ="+xmlhttp.status);
  //           		erreurLoad();
  //           	}
  //           }
  //       }
  //       xmlhttp.open("GET","pokemon/getDresseur.php",true);
	// xmlhttp.send();
}


function loadPokemons(){
	// if (window.XMLHttpRequest) {
  //           // code for IE7+, Firefox, Chrome, Opera, Safari
  //           xmlhttp = new XMLHttpRequest();
  //       } else {
  //           // code for IE6, IE5
  //           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  //       }
  //       var controller_id;
  //       xmlhttp.onreadystatechange = function() {
  //           if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  //               document.getElementById("debugAjax").innerHTML = xmlhttp.responseText;
  //               var fonctionne =   parseInt(document.getElementById("fonctionne").innerHTML);
	//
  //               if(!fonctionne){
  //               	alert("probleme sauvegarde des pokemons");
  //               	erreurLoad();
  //               }
  //               else{
  //               	var num = document.getElementsByClassName('num');
	//                 var lvl = document.getElementsByClassName('lvl');
	//                 var pdv = document.getElementsByClassName('pdv');
	//                 var pdvMax = document.getElementsByClassName('pdvMax');
	//                 var exp = document.getElementsByClassName('exp');
	//                 var expMax = document.getElementsByClassName('expMax');//useless
	//                 var att = document.getElementsByClassName('att');
	//                 var def = document.getElementsByClassName('def');
	//                 var agi = document.getElementsByClassName('agi');
	//
	//               	this.dresseur.pokemons = [];
	//
	//               	for(var i = 0;i<num.length;i++){
	//               		var poke = new Pokemon(parseInt(num[i].innerHTML),parseInt(lvl[i].innerHTML),parseInt(exp[i].innerHTML),parseInt(pdvMax[i].innerHTML),parseInt(att[i].innerHTML),parseInt(def[i].innerHTML),parseInt(agi[i]).innerHTML);
	//               		poke.pdv = parseInt(pdv[i].innerHTML);
	//               		this.dresseur.addPokemon(poke);
	//               	}
	//
	//
	//               	 this.mode = 1;
	// 								 this.hudMode = 10;
	// 								 this.info = "Les données ont été chargées avec succès";
	//
  //             	}
  //           }
	//
  //           else{
  //           	if(xmlhttp.readyState==4 && xmlhttp.status!=200){
  //           		console.log("Ca marche pas: \nreadyState ="+xmlhttp.readyState+"\n status ="+xmlhttp.status);
  //           		erreurLoad();
  //           	}
  //           }
  //       }
  //       xmlhttp.open("GET","pokemon/getPokemon.php",true);
	// xmlhttp.send();
}


// function erreurLoad(){
// 	// console.log("Erreur sauvegarde");
// 	// this.mode = 1;
// 	//  this.hudMode = 10;
// 	//  this.info = "Il y a eu un probleme avec le chargement, vous pourriez reesayez, au cas ou..";
// }

/* harmony default export */ __webpack_exports__["default"] = (PlayerController);


/***/ }),

/***/ "./src/gameloop/init.js":
/*!******************************!*\
  !*** ./src/gameloop/init.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/globals */ "./src/utils/globals.js");
/* harmony import */ var _UI_Carte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Carte */ "./src/UI/Carte.js");
/* harmony import */ var _utils_render_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render_utils */ "./src/utils/render_utils.js");
/* harmony import */ var _combat_Pokemon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../combat/Pokemon */ "./src/combat/Pokemon.js");
/* harmony import */ var _UI_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/Menu */ "./src/UI/Menu.js");
/* harmony import */ var _gameloop_inputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gameloop/inputs */ "./src/gameloop/inputs.js");
/* harmony import */ var _assets_imgs_sacha_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/imgs/sacha.png */ "./assets/imgs/sacha.png");
/* harmony import */ var _assets_imgs_sacha_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_sacha_png__WEBPACK_IMPORTED_MODULE_6__);










function init(){

	var canvas = document.getElementById("ecran");
	var context = Object(_utils_render_utils__WEBPACK_IMPORTED_MODULE_2__["getContext"])();

	context.save();
	context.fillStyle="#000000";
	context.fillText("Chargement",250,250);
	context.restore();

	var sacha_img = document.createElement("img");
	sacha_img.src = _assets_imgs_sacha_png__WEBPACK_IMPORTED_MODULE_6___default.a;
	_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].setTexture(sacha_img);
	_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].setGrille(0);

	_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].addPokemon(new _combat_Pokemon__WEBPACK_IMPORTED_MODULE_3__["default"](25,5,0,100,20,15,15));
	var sacha_img = document.createElement("img");
	sacha_img.src = _assets_imgs_sacha_png__WEBPACK_IMPORTED_MODULE_6___default.a;
	_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].texture= _assets_imgs_sacha_png__WEBPACK_IMPORTED_MODULE_6___default.a;

	_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].carte = new _UI_Carte__WEBPACK_IMPORTED_MODULE_1__["default"]();
	Object(_UI_Carte__WEBPACK_IMPORTED_MODULE_1__["ChargeCarte"])(_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].carte);

	_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].menu = new _UI_Menu__WEBPACK_IMPORTED_MODULE_4__["default"]()
	_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].loadObjects();

	Object(_gameloop_inputs__WEBPACK_IMPORTED_MODULE_5__["default"])();
	Object(_utils_render_utils__WEBPACK_IMPORTED_MODULE_2__["animate"])();

}


/***/ }),

/***/ "./src/gameloop/inputs.js":
/*!********************************!*\
  !*** ./src/gameloop/inputs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/globals */ "./src/utils/globals.js");
/* harmony import */ var _utils_touches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/touches */ "./src/utils/touches.js");



function keyPress(event) {
		    var touche = event.keyCode;
		    _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].actions(touche);
}

function releaseKey(event){
	_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.position = 5;
}

function init_inputs(){
	window.addEventListener("keydown", function(e) {
	    // space and arrow keys
	    if([_utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].UP, _utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].DOWN, _utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].LEFT, _utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].RIGHT, _utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].PAUSE, _utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].CONFIRM, _utils_touches__WEBPACK_IMPORTED_MODULE_1__["default"].BACK].indexOf(e.keyCode) > -1) {	//pour les touches directionnelles
	        e.preventDefault();		//enlever comportement par default
					keyPress(e);
	    }
	}, false);

	window.addEventListener("keyup", function(e) {
	   releaseKey(e);
	}, false);
}


/* harmony default export */ __webpack_exports__["default"] = (init_inputs);


/***/ }),

/***/ "./src/gameloop/main.js":
/*!******************************!*\
  !*** ./src/gameloop/main.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var _utils_render_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render_utils */ "./src/utils/render_utils.js");
/* harmony import */ var _utils_globals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/globals.js */ "./src/utils/globals.js");



function render(){	//Moteur d affichage

	var canvas = Object(_utils_render_utils__WEBPACK_IMPORTED_MODULE_0__["getCanvas"])();
	var context = Object(_utils_render_utils__WEBPACK_IMPORTED_MODULE_0__["getContext"])();

	context.save();
	context.clearRect(0, 0, canvas.width, canvas.height);

	_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].grille.drawTerrain();

	_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].grille.afficheBatiments(_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.posX,_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.posY);


	_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].grille.drawDresseur(_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.posX,_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.posY);// Dessines tout les dresseurs   posXY sont les coord du controller


			if(_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].mode != 2){ //si on est pas en combat

					//test colision nextCase
					_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].calculNextCase();
					var nextCaseX = _utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].nextCaseX;
					var nextCaseY = _utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].nextCaseY;
					_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].walkable = _utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].grille.isWalkable(nextCaseX,nextCaseY);

          _utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].goToNextPosition()
					//dessine joueur
					_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].grille.drawMonDresseur();

			}//fin si mode != combat

		switch(_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].mode){ //--------------------------------------------------Affichage
			case(0):
				_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].grille.checkZonesDresseurs();
				_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].grille.checkWalkOnPorte();

			break;
			case(1)://hud

				switch(_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].hudMode){
					case(0)://pause
						//console.log("jeu en pause");
						_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].menu.afficheMenu();

					break;

					case(1)://discussion
						_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].menu.showConversation()
					break;
					case(2)://mode pokedex
						_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].menu.displayPokedex();
						break;
					case(3)://mode pokemon
						_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].menu.displayPokemons(_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.pokemons);

					break;
					case(4)://mode inventaire
							_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].menu.displayInventaire();
					break;
					case(5)://mode infos
							_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].menu.displayInfosJoueur();
					break;
					case(6)://mode carte
							_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].menu.displayCarte();
					break;
					case(7)://mode sauv
							_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].menu.displaySauv();
					break;
					case(8)://mode carte
							_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].menu.displayOptions();
					break;
					case(9)://fail
							_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].menu.displayFail();
					break;
					case(10):	//informations simples, avec controle pour retour au plateau
						_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].menu.displayInfo();
					break;
					case(11):	//affichage bravo vous avez capturer tel pokemon
						_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].menu.displayWinCapture();
					break;
					case(12):	//attente + informations simples
						_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].menu.displayInfo();
					break;

				}
			break;//mode hud

			case(2)://combat
				_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].combat.drawCombat();
				_utils_globals_js__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].combat.runTour();
			break;
	}

	context.restore();
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameloop_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameloop/init */ "./src/gameloop/init.js");
/* harmony import */ var _assets_styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assets/styles/global.css */ "./assets/styles/global.css");
/* harmony import */ var _assets_styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_music__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/music */ "./src/UI/music.js");




window.onload = _gameloop_init__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "./src/map/Batiment.js":
/*!*****************************!*\
  !*** ./src/map/Batiment.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_render_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render_utils */ "./src/utils/render_utils.js");

//penser a virer ce fichier qui n est utilisé que sur le centreP de la premiere grille (foret1)
//donc gimp l image du centreP a l endroit voulu


var Batiment = function(nom,texture,posX,posY,tailleX,tailleY){
	this.nom = nom;
	this.texture = texture;
	this.posX = posX;
	this.posY = posY;
	this.tailleX = tailleX;
	this.tailleY = tailleY;
}

Batiment.prototype.afficheToi = function(posiX,posiY){
	var context = Object(_utils_render_utils__WEBPACK_IMPORTED_MODULE_0__["getContext"])();
	context.drawImage(this.texture,this.posX*3 -(posiX*3)+340,this.posY*3-(posiY*3)+280,this.tailleX,this.tailleY);
	//console.log(posiX+"/"+posiY);
}


Batiment.prototype.isWalkable = function(posX,posY){
	return(!this.isOnPosition(posX,posY));
}



Batiment.prototype.isOnPosition = function(posX,posY){
		if(posX>this.posX&& posX< this.posX+(this.tailleX/2.7)){
			if(posY>this.posY && posY<this.posY+(this.tailleY/2.5)){
				return(true);
			}
		}
		return(false);
}

/* harmony default export */ __webpack_exports__["default"] = (Batiment);


/***/ }),

/***/ "./src/map/Dresseur.js":
/*!*****************************!*\
  !*** ./src/map/Dresseur.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_render_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render_utils */ "./src/utils/render_utils.js");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/globals */ "./src/utils/globals.js");
/* harmony import */ var _assets_imgs_dresseurVert_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/imgs/dresseurVert.png */ "./assets/imgs/dresseurVert.png");
/* harmony import */ var _assets_imgs_dresseurVert_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_dresseurVert_png__WEBPACK_IMPORTED_MODULE_2__);





var nbDresseur = 0;
var Dresseur = function(nom, posX,posY,orientation,grille){
	this.nom = nom;
	this.grille = grille;
	this.posX = posX;
	this.posY = posY;
	this.tailleX = 32;
	this.tailleY = 48;
	this.texte = "Il faut bien avoir quelque chose a dire.."
	this.texteLooser = "J'ai perdu ..";
	this.pokemons = [];
	this.pcDeLeo = [];
	this.inventaire = [];
	this.argent = 0;
	this.badges = 0;
	this.aPerdu = 0;
	this.zone = new ZoneDresseur(this);

	this.num = nbDresseur;
	nbDresseur++;

	var dresseurVert_img = document.createElement("img");
	dresseurVert_img.src = _assets_imgs_dresseurVert_png__WEBPACK_IMPORTED_MODULE_2___default.a;
	this.texture = dresseurVert_img;

	this.grandeTextureX=7;//pour les combats
	this.grandeTextureY=4;//par default simple team rocket, car plus nombreux
	//anim
	this.orientationInit = orientation;
	this.orientation = orientation;// 0 de face, 1 = de gzuche, 2 de droite 3 de derriere
	this.position = 5;
	//colisions
	this.nextCaseX = false;
	this.nextCaseY = false;


}






Dresseur.prototype.isInfirmiere = function(){
	return(false);
}


Dresseur.prototype.displayName = function(){
	console.log("Dresseur:"+this.nom);

}

Dresseur.prototype.getName = function(){
	return(this.nom);

}

Dresseur.prototype.getNum = function(){
	return(this.num);

}

Dresseur.prototype.getGTX = function(){
	return(this.grandeTextureX);
}

Dresseur.prototype.getGTY = function(){
	return(this.grandeTextureY);
}

Dresseur.prototype.setGTX = function(val){
	this.grandeTextureX = val;
}

Dresseur.prototype.setGTY = function(val){
	this.grandeTextureY = val;
}





Dresseur.prototype.calculNextCase=function(){
	switch(this.orientation){

			case(1):
				this.nextCaseX = this.posX;
				this.nextCaseY = this.posY+2;
				break;
			case(2):
				this.nextCaseX = this.posX-2;
				this.nextCaseY = this.posY;
				break;
			case(3):
				this.nextCaseX = this.posX+2;
				this.nextCaseY = this.posY;
				break;
			case(4):
				this.nextCaseX = this.posX;
				this.nextCaseY = this.posY-2;
				break;




	}
}

Dresseur.prototype.isWalkable = function(posX,posY){

	return(!this.isOnPosition(posX,posY));
}

Dresseur.prototype.parler= function(){
	this.trouveOrientation();
	if(this.aPerdu){
		return(this.nom+": "+this.texteLooser);
	}
	else{
		return(this.nom+": "+this.texte);
	}
}

Dresseur.prototype.trouveOrientation= function(){
	var sens;
	var x = _utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].getPosX() - this.getPosX();
	var y = _utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].getPosY() - this.getPosY();


	if(x <= y){

		if(x>0){
			this.setOrientation(0);
		}
		else {
			this.setOrientation(1);
		}
	}
	else{
		if(y>0){
			this.setOrientation(2);
		}
		else {
			this.setOrientation(3);
		}

	}

}




Dresseur.prototype.showPokemon= function(){
	for(var i = 0;i<pokemons.length;i++){
		pokemons[i].displayInfo();
	}
}

Dresseur.prototype.image= function(){
	return(this.texture);
}

Dresseur.prototype.addPokemon= function(poke){
	if(this.pokemons.length < 6){
		this.pokemons.push(poke);

	}
	else{
		console.log("plus de place");
		this.pcDeLeo.push(poke);
	}
}

Dresseur.prototype.afficheToi = function(posiX,posiY){
	var context = Object(_utils_render_utils__WEBPACK_IMPORTED_MODULE_0__["getContext"])();
	context.drawImage(this.texture,0,this.orientation*48,32,48   ,this.posX*3 -(posiX*3)+340,this.posY*3-(posiY*3)+280,this.tailleX,this.tailleY);
}




Dresseur.prototype.isOnPosition = function(posX,posY){
		if(posX>this.posX&& posX< this.posX+(this.tailleX/2.5)){
			if(posY>this.posY && posY<this.posY+(this.tailleY/2.5)){
				return(true);
			}
		}
		return(false);
}

Dresseur.prototype.setTexture = function(texture){
	this.texture = texture;
}


Dresseur.prototype.setTexte = function(texte){
	this.texte = texte;
}

Dresseur.prototype.setTexteLooser = function(texte){
	this.texteLooser = texte;
}

Dresseur.prototype.pokemonsEnVie = function(){
	var tab = [];
	for(var i = 0;i<this.pokemons.length;i++){
		if(this.pokemons[i].pdv>0){
			tab.push(this.pokemons[i]);
		}
	}
	return(tab);
}

Dresseur.prototype.echange = function(pok1,pok2){

	for(var i = 0;i<this.pokemons.length;i++){
		if(this.pokemons[i] == pok1){
			for(var j = 0;j<this.pokemons.length;j++){
				var tamp = this.pokemons[i];
				this.pokemons[i] = this.pokemons[j];
				this.pokemons[j] = tamp;
			}
		}
	}

}

Dresseur.prototype.soignePokemons = function(){
	for(var i = 0;i<this.pokemons.length;i++){
		this.pokemons[i].soigneToi();
	}
}


Dresseur.prototype.peutAvancer= function(){
	return(grille.isWalkable(this.posX,this.posY));
}

Dresseur.prototype.setOrientation= function(or){
	this.orientation = or;
}

Dresseur.prototype.setOriginalOrientation= function(){
	this.orientation = this.orientationInit;
}


Dresseur.prototype.getOrientation= function(){
	return(this.orientation);
}
Dresseur.prototype.getPosX= function(){
	return(this.posX);
}

Dresseur.prototype.getPosY= function(){
	return(this.posY);
}

Dresseur.prototype.walkOnZone= function(){
	return(this.zone.isWalkOn());
}

Dresseur.prototype.getDistance = function(){
	if(this.orientation == 0){

	}
}

Dresseur.prototype.getPokemon=function(place){
	return(this.pokemons[place]);
}

Dresseur.prototype.getNombrePokemon = function(){
	return(this.pokemons.length);
}


Dresseur.prototype.avance= function(num){
	switch(this.orientation){
		case(1):
			this.posY += num;
		break;
		case(2):
			this.posX -= num;
		break;
		case(3):
			this.posX += num;
		break;
		case(4):
			this.posY -= num;
		break;
	}
}

Dresseur.prototype.calculDistanceAParcourir= function(){
	if(this.orientation==1 || this.orientation ==4  ){//Y
		return(Math.abs(this.getPosY()-_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].getPosY()));
	}
	else{//X
		return(Math.abs(this.getPosX()-_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].getPosX()));
	}
}



Dresseur.prototype.attaqueJoueur = function(){
				if(!this.asPerdu){
							console.log(this.nom+" attaque");
							_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].discussion = this.parler();

					   		_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].mode = 1;
					   		_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].hudMode = 1;
				}
}

//---------------------------------------------------Zone d attaque

var ZoneDresseur = function(dresseur){
	this.taille = 40;

	this.dresseur = dresseur;
}


ZoneDresseur.prototype.isWalkOn = function(){
	var x = _utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].getPosX();
	var y = _utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].getPosY();

	var orientation = this.dresseur.getOrientation();
	if(this.dresseur.nom == "Mathias"){
		//console.log(" check if walk on "+this.dresseur.nom);
	}

	switch(orientation){

		case(0)://de face seul Y+
			if((x>(this.dresseur.getPosX()))  && (x<(this.dresseur.getPosX()+this.dresseur.tailleX/3))  ){
				if((y>(this.dresseur.getPosY()+this.dresseur.tailleY/3))  && (y<(this.dresseur.getPosY()+this.dresseur.tailleY/3+this.taille))  ){

					return(true);
				}
			}
		break;
		case(1)://de gauche seul X-
			if((x>(this.dresseur.getPosX()+this.dresseur.tailleX/3-this.taille))  && (x<(this.dresseur.getPosX()+this.dresseur.tailleX/3))  ){
				if((y>(this.dresseur.getPosY()))  && (y<(this.dresseur.getPosY()+this.dresseur.tailleY/3))  ){

					return(true);
				}
			}
		break;
		case(2)://de droite seul X+
			if((x>(this.dresseur.getPosX()+this.dresseur.tailleX/3))  && (x<(this.dresseur.getPosX()+this.dresseur.tailleX/3+this.taille))  ){
				if((y>(this.dresseur.getPosY()))  && (y<(this.dresseur.getPosY()+this.dresseur.tailleY/3))  ){

					return(true);
				}
			}
		break;
		case(3)://de derriere seul Y-
			if((x>(this.dresseur.getPosX()+this.dresseur.tailleX/3))  && (x<(this.dresseur.getPosX()+this.dresseur.tailleX/3+this.taille))  ){
				if((y>(this.dresseur.getPosY()+this.dresseur.tailleY/3-this.taille))  && (y<(this.dresseur.getPosY()+this.dresseur.tailleY/3))  ){

					return(true);
				}
			}
		break;


	}

	return(false);
}

Dresseur.prototype.isSauvage=function(){//pendant un combat, un pokemon sauavge agit + ou - comme un dresseur
	return(false);
}



Dresseur.prototype.load = function(){
	// var xmlhttp;
	// if (window.XMLHttpRequest) {
  //           // code for IE7+, Firefox, Chrome, Opera, Safari
  //           xmlhttp = new XMLHttpRequest();
  //       } else {
  //           // code for IE6, IE5
  //           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  //       }
	//
  //       xmlhttp.onreadystatechange = function() {
  //           if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  //               document.getElementById("debugAjax").innerHTML = xmlhttp.responseText;
  //               //alert("Ca marche");
	//
	//
  //               var name = document.getElementById("name").innerHTML;
  //               var asPerdu = document.getElementById("asPerdu").innerHTML;
  //               var isController = document.getElementById("isController").innerHTML;
	//
	//
	//
	// 	console.log("name: "+name );
	// 	console.log("asPerdu: "+asPerdu );
	//
	// 	var dresseur = monDresseur.getGrille(parseInt(document.getElementById("grille").innerHTML)).getDresseurByName(name);
	// 	dresseur.aPerdu = (asPerdu == 0)?false:true;
	//
	// 	dresseur.loadPokemons();
	//
	//
	//
  //           }
	//
  //           else{
  //           	if(xmlhttp.readyState==4 && xmlhttp.status!=200){
  //           		console.log("Ca marche pas: \nreadyState ="+xmlhttp.readyState+"\n status ="+xmlhttp.status);
	//
	// 		//xmlhttp.send();
  //           	}
  //           }
  //       }
  //       xmlhttp.open("GET","pokemon/getDresseur.php?name="+this.getName(),true);
	// xmlhttp.send();

}

Dresseur.prototype.videPokemons = function(){
	this.pokemons = [];
}



Dresseur.prototype.loadPokemons = function(){ // no more suported for now

	// var xmlhttp;
	// if (window.XMLHttpRequest) {
  //           // code for IE7+, Firefox, Chrome, Opera, Safari
  //           xmlhttp = new XMLHttpRequest();
  //       } else {
  //           // code for IE6, IE5
  //           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  //       }
	//
  //       xmlhttp.onreadystatechange = function() {
  //           if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  //               document.getElementById("debugAjax").innerHTML = xmlhttp.responseText;
  //               var tabNum =  document.getElementsByClassName('pokeNum');
  //                var tabDresseur =  document.getElementsByClassName('dresseur_id');
  //                var lvl=  document.getElementsByClassName('lvl');
  //                var exp=  document.getElementsByClassName('exp');
  //                var expMax=  document.getElementsByClassName('expMax');
  //                var pdv=  document.getElementsByClassName('pdv');
  //                var pdvMax=  document.getElementsByClassName('pdvMax');
  //                var att=  document.getElementsByClassName('att');
  //                var def=  document.getElementsByClassName('def');
  //                var agi=  document.getElementsByClassName('agi');
	//
  //               var dresseur = monDresseur.getDresseurByNum(parseInt(document.getElementById('dressNum').innerHTML));
	//
	//
	//
  //               if(dresseur == false){//il s agit du controller (seul dresseur hors des dresseurs des grilles)
  //               	dresseur = monDresseur.dresseur;
  //               }
	//
  //               dresseur.videPokemons();
	//
  //               for(var i = 0;i<tabNum.length;i++){
  //               	console.log("pokemon "+tabNum[i].innerHTML+" appartient a "+dresseur.getName());
  //               	var pokemon = new Pokemon(tabNum[i].innerHTML,lvl[i].innerHTML,exp[i].innerHTML,pdv[i].innerHTML,att[i].innerHTML,def[i].innerHTML,agi[i].innerHTML)
  //               	dresseur.addPokemon(pokemon);
  //               	pokemon.setExp(exp[i].innerHTML);
  //               	pokemon.setExpMax(expMax[i].innerHTML);
  //               	pokemon.setPdv(pdv[i].innerHTML);
  //               	pokemon.setPdvMax(pdvMax[i].innerHTML);
  //               }
  //           }
	//
  //           else{
  //           	if(xmlhttp.readyState==4 && xmlhttp.status!=200){
  //           		console.log("Ca marche pas: \nreadyState ="+xmlhttp.readyState+"\n status ="+xmlhttp.status);
	//
  //           	}
  //           }
  //       }
  //       xmlhttp.open("GET","pokemon/getPokemon.php?dresseur="+this.num,true);
	// xmlhttp.send();
}


/* harmony default export */ __webpack_exports__["default"] = (Dresseur);


/***/ }),

/***/ "./src/map/Grille.js":
/*!***************************!*\
  !*** ./src/map/Grille.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_render_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render_utils */ "./src/utils/render_utils.js");
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/globals */ "./src/utils/globals.js");
/* harmony import */ var _combat_Sauvage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../combat/Sauvage */ "./src/combat/Sauvage.js");




var nbG = 0;
function Grille(terrain){
	this.terrain = terrain;
	this.objets = [];
	this.dresseurs = [];
	this.batiments = [];
	this.pnjs = [];
	this.portes = [];
	this.herbes = [];
	this.num = nbG;
	nbG++;
}

Grille.prototype.saveDresseurs= function(){
	// console.log("Sauvegardes dresseurs grille "+this.num);
	// var chaine = "";
	// for(var i=0;i<this.dresseurs.length;i++){
	// 	chaine+=getDresseurInfo(this.dresseurs[i])+"&";
	// }//-> false pour isController
	// console.log(chaine);
	// return(chaine);
}

Grille.prototype.ajouteObjet = function(objet) {
	this.objets.push(objet);
};

Grille.prototype.ajoutePNJ = function(objet) {
	this.pnjs.push(objet);
};

Grille.prototype.ajoutePorte = function(porte) {
	this.portes.push(porte);
};

Grille.prototype.ajouteHerbe = function(herbe) {

	this.herbes.push(herbe);

};

Grille.prototype.ajouteDresseur = function(objet) {
	this.dresseurs.push(objet);
	this.objets.push(objet);
};

Grille.prototype.ajouteBatiment = function(bati) {
	this.batiments.push(bati);
	this.objets.push(bati);
};

Grille.prototype.afficheBatiments = function(posiX,posiY) {
	for(var i = 0;i<this.batiments.length;i++){
		this.batiments[i].afficheToi(posiX,posiY);
	}
};

Grille.prototype.displayObjetConsole = function(){
	for(var i = 0;i<this.objets.length;i++){
		this.objets[i].displayName();
	}
}

Grille.prototype.displayDresseurConsole = function(){
	console.log(this.dresseurs.length+" dresseurs:");
	for(var i = 0;i<this.dresseurs.length;i++){
		this.dresseurs[i].displayName();
		console.log(this.dresseurs[i].getOrientation());
	}
}


Grille.prototype.isWalkable = function(posX,posY){
	var retour = true;
	for(var i = 0;i<this.objets.length;i++){
		if(this.objets[i].isWalkable(posX,posY) == false){
		    retour = false;
		}
	}

	return retour;
}

Grille.prototype.checkWalkOnPorte = function(){
	for(var i = 0;i<this.portes.length;i++){
		if(this.portes[i].walkOn()){
			this.portes[i].rejoindreDestination();
		}
	}
}

Grille.prototype.checkWalkOnHerbes = function(){
	for(var i = 0;i<this.herbes.length;i++){
		if(this.herbes[i].walkOn()){
			//console.log("marche sur de l'herbe de puissance :"+this.herbes[i].getPuissance());
			var rand = Math.random();
			// console.log(rand);
			if(rand > 0.95){
				Object(_combat_Sauvage__WEBPACK_IMPORTED_MODULE_2__["CombatContreSauvage"])(this.herbes[i].getPuissance());
			}
		}
	}
}

Grille.prototype.getDresseur = function(posX,posY) {
	var retour = false;
	for(var i = 0;i<this.dresseurs.length;i++){
		if(this.dresseurs[i].isOnPosition(posX,posY)){
			retour = this.dresseurs[i];
		}
	}
	return(retour);
};

Grille.prototype.getPNJ = function(posX,posY) {
	var retour = false;
	for(var i = 0;i<this.pnjs.length;i++){
		if(this.pnjs[i].isOnPosition(posX,posY)){
			retour = this.pnjs[i];
		}
	}
	return(retour);
};

Grille.prototype.getBatiment = function(posX,posY) {
	var retour = false;
	for(var i = 0;i<this.batiments.length;i++){
		if(this.batiments[i].isOnPosition(posX,posY)){
			retour = this.batiments[i];
		}
	}
	return(retour);
};

Grille.prototype.drawDresseur = function(posX,posY){
	for(var i = 0;i<this.dresseurs.length;i++){
		this.dresseurs[i].afficheToi(posX,posY);
	}
}

Grille.prototype.drawTerrain = function(){
		var context = Object(_utils_render_utils__WEBPACK_IMPORTED_MODULE_0__["getContext"])();
		var canvas = Object(_utils_render_utils__WEBPACK_IMPORTED_MODULE_0__["getCanvas"])();

		context.drawImage(this.terrain, _utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].getPosX()+250, _utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].getPosY()+250, canvas.width/3, canvas.height/3, 0,0, canvas.width, canvas.height);
}

Grille.prototype.drawMonDresseur= function(){
	var context = Object(_utils_render_utils__WEBPACK_IMPORTED_MODULE_0__["getContext"])();

	switch(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].getOrientation()){
							case(1):


									switch(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.position){
									case(0):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,0,0,32,48   ,320,240,32,48);
										break;
									case(1):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,32,0,32,48  ,320,240,32,48);
										break;
									case(2):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,64,0,32,48  ,320,240,32,48);
										break;
									case(3):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,96,0,32,48  ,320,240,32,48);
										break;
									case(5):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,0,0,32,48   ,320,240,32,48);
										break;
								}

							break;

							case(2):

									switch(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.position){
									case(0):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,0,48,32,48   ,320,240,32,48);
										break;
									case(1):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,32,48,32,48  ,320,240,32,48);
										break;
									case(2):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,64,48,32,48  ,320,240,32,48);
										break;
									case(3):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,96,48,32,48  ,320,240,32,48);
										break;
									case(5):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,0,48,32,48   ,320,240,32,48);
										break;
								}
							break;

							case(3):

									switch(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.position){
									case(0):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,0,96,32,48   ,320,240,32,48);
										break;
									case(1):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,32,96,32,48  ,320,240,32,48);
										break;
									case(2):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,64,96,32,48  ,320,240,32,48);
										break;
									case(3):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,96,96,32,48  ,320,240,32,48);
										break;
									case(5):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,0,96,32,48   ,320,240,32,48);
										break;
								}
							break;

							case(4):

									switch(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.position){
									case(0):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,0,144,32,48   ,320,240,32,48);
										break;
									case(1):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,32,144,32,48  ,320,240,32,48);
										break;
									case(2):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,64,144,32,48  ,320,240,32,48);
										break;
									case(3):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,96,144,32,48  ,320,240,32,48);
												//{x,y,taileX,tailleY} Portion , {x,y,tailleX,tailleY} Canvas
										break;
									case(5):
										context.drawImage(_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].dresseur.texture,0,144,32,48   ,320,240,32,48);
										break;
								}
							break;
			}
}



Grille.prototype.checkZonesDresseurs = function(){

	for(var i = 0;i<this.dresseurs.length;i++){

		if(this.dresseurs[i].walkOnZone()){
			if(!this.dresseurs[i].aPerdu){
				_utils_globals__WEBPACK_IMPORTED_MODULE_1__["monDresseur"].setAdv(this.dresseurs[i]);
				this.dresseurs[i].attaqueJoueur();
			}
		}
	}

}




Grille.prototype.load= function(){

	for(var i = 0;i<this.dresseurs.length;i++){
		this.dresseurs[i].load();
	}
}

Grille.prototype.getDresseurByName= function(name){

	for(var i = 0;i<this.dresseurs.length;i++){
		if(this.dresseurs[i].getName() == name){
			return(this.dresseurs[i]);
		}
	}
	console.log("Probleme :"+name+"n'est pas dans la grille");
}

Grille.prototype.getDresseurByNum= function(num){

	for(var i = 0;i<this.dresseurs.length;i++){

		if(this.dresseurs[i].getNum() == num){
			return(this.dresseurs[i]);
		}
	}
	return(false);
}

/* harmony default export */ __webpack_exports__["default"] = (Grille);


/***/ }),

/***/ "./src/map/Herbes.js":
/*!***************************!*\
  !*** ./src/map/Herbes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/globals */ "./src/utils/globals.js");


function Herbe(posX,posY,tailleX,tailleY,puissance){
	this.posX=posX;
	this.tailleX=tailleX;
	this.posY=posY;
	this.tailleY=tailleY;
	this.puissance = puissance;//pour qq niveau de pokemon presents, pourra etre complexifier sur les types, genre une liste de types possibles
}

Herbe.prototype.walkOn = function(){
	var retour = false;
	if(_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getPosX()>this.posX && _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getPosX()<this.posX+this.tailleX){
		if(_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getPosY()>this.posY && _utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getPosY()<this.posY+this.tailleY){
			//console.log("marche sur des hautes herbes");
			retour = true;
		}
	}
	return(retour);
}

Herbe.prototype.getPuissance= function(){
	return(this.puissance);
}

/* harmony default export */ __webpack_exports__["default"] = (Herbe);


/***/ }),

/***/ "./src/map/Objet.js":
/*!**************************!*\
  !*** ./src/map/Objet.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Objet(nom,x,y,tX,tY){		//Pour collision quelquonque dans mode de deplacement
	this.nom=nom;
	this.coordX = x;
	this.coordY = y;
	this.tailleX = tX;
	this.tailleY = tY;
	this.walkable = false;
}

Objet.prototype.displayName = function(){
	console.log("Objet: "+this.nom);
}


Objet.prototype.isWalkable = function(posX,posY){
	var retour = true;

	if(posX>this.coordX && posX< this.coordX+this.tailleX){
		if(posY>this.coordY && posY<this.coordY+this.tailleY){
			retour = false;
		}
	}
	if(this.walkable){
		retour = true;
	}
	return(retour);
}

/* harmony default export */ __webpack_exports__["default"] = (Objet);


/***/ }),

/***/ "./src/map/PNJ.js":
/*!************************!*\
  !*** ./src/map/PNJ.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var PNJ = function(nom,posX,posY,tailleX,tailleY,isInfirmiere){
	this.nom = nom;
	this.posX = posX;
	this.posY = posY;
	this.tailleX = tailleX;
	this.tailleY = tailleY;
	this.discussion = "Je ne suis qu'un pnj";
	this.isInfirmiere = isInfirmiere;
	if(isInfirmiere){
		this.discussion = "Bienvenu au centre, nous avons soigné vos pokemons";
	}
}

PNJ.prototype.isInfirmiere = function(){
	return(this.isInfirmiere);
}

PNJ.prototype.getDiscuss = function(){
	return(this.discussion);
}

PNJ.prototype.isOnPosition = function(posX,posY){
		if(posX>this.posX&& posX< this.posX+(this.tailleX/2.7)){
			if(posY>this.posY && posY<this.posY+(this.tailleY/2.5)){
				return(true);
			}
		}
		return(false);
}


/* harmony default export */ __webpack_exports__["default"] = (PNJ);


/***/ }),

/***/ "./src/map/Porte.js":
/*!**************************!*\
  !*** ./src/map/Porte.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/globals */ "./src/utils/globals.js");


var Porte = function(posX,posY,joueurX,joueurY,destination, monDresseur){
	this.posX=posX;
	this.posY=posY;
	this.tailleX=5;
	this.tailleY=5;
	this.joueurX=joueurX;//nouvelles position a la fin du voyage
	this.joueurY=joueurY;
	this.destination=destination;
}

Porte.prototype.walkOn = function(){
	var retour = false;
	if((_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getPosX()>=this.posX) && (_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getPosX()<=(this.posX+this.tailleX)) ){
		if((_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getPosY()>=this.posY) && (_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].getPosY()<=(this.posY+this.tailleY)) ){
			retour = true;
		}
	}
	return(retour);
}


Porte.prototype.setLargeur = function(value){

	this.tailleX = value;

	return(this);
}



Porte.prototype.rejoindreDestination = function(){
	// console.log("voyage");
	switch(this.destination){
		case("foret1"):
			_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].setGrille(0);
			_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.grille = 0;


		break;
		case("ville2"):
			_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].setGrille(1);
			_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.grille = 1;

		break;
		case("centreP1"):	//foret1
			_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].setGrille(2);
			_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.grille = 2;
		break;
		case("centreP2"):	//argenta
			_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].setGrille(3);
			_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.grille = 3;
		break;
		case("argenta"):
			_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].setGrille(4);
			_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.grille = 4;
		break;
		case("pokeshopArgenta"):
			_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].setGrille(5);
			_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.grille = 5;
		break;
		case("areneArgenta"):
			_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].setGrille(6);
			_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].dresseur.grille = 6;
		break;
	}
	_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].setPosX(this.joueurX);
	_utils_globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].setPosY(this.joueurY);
}

/* harmony default export */ __webpack_exports__["default"] = (Porte);


/***/ }),

/***/ "./src/utils/globals.js":
/*!******************************!*\
  !*** ./src/utils/globals.js ***!
  \******************************/
/*! exports provided: pokedex, monDresseur */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pokedex", function() { return pokedex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monDresseur", function() { return monDresseur; });
/* harmony import */ var _UI_Pokedex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/Pokedex */ "./src/UI/Pokedex.js");
/* harmony import */ var _gameloop_PlayerController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameloop/PlayerController */ "./src/gameloop/PlayerController.js");
/* harmony import */ var _map_Dresseur__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map/Dresseur */ "./src/map/Dresseur.js");




var pokedex = new _UI_Pokedex__WEBPACK_IMPORTED_MODULE_0__["default"]();
pokedex.chargePokedex();

var monDresseur = new _gameloop_PlayerController__WEBPACK_IMPORTED_MODULE_1__["default"](new _map_Dresseur__WEBPACK_IMPORTED_MODULE_2__["default"]("Sacha",0,0,1,0));




/***/ }),

/***/ "./src/utils/render_utils.js":
/*!***********************************!*\
  !*** ./src/utils/render_utils.js ***!
  \***********************************/
/*! exports provided: getCanvas, getContext, animate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCanvas", function() { return getCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./src/utils/globals.js");
/* harmony import */ var _gameloop_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameloop/main */ "./src/gameloop/main.js");



function getCanvas(){
    return document.getElementById("ecran");
}
function getContext(){
    return document.getElementById("ecran").getContext("2d");
}

function animate(){
	setInterval(function () {Object(_gameloop_main__WEBPACK_IMPORTED_MODULE_1__["default"])()}, _globals__WEBPACK_IMPORTED_MODULE_0__["monDresseur"].fps);
}




/***/ }),

/***/ "./src/utils/touches.js":
/*!******************************!*\
  !*** ./src/utils/touches.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var BUTTON = {};
BUTTON.CONFIRM = 65;
BUTTON.BACK = 66;
BUTTON.PAUSE = 80;

BUTTON.LEFT = 37;
BUTTON.RIGHT = 39;
BUTTON.UP = 38;
BUTTON.DOWN = 40;

/* harmony default export */ __webpack_exports__["default"] = (BUTTON);


/***/ })

/******/ });
//# sourceMappingURL=main.js.map