function reactDevtoolsBackend(window) {

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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ElementTypeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ElementTypeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ElementTypeFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ElementTypeForwardRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ElementTypeHostComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ElementTypeMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ElementTypeOtherOrUnknown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ElementTypeProfiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ElementTypeRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ElementTypeSuspense; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return ElementTypeSuspenseList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ComponentFilterElementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentFilterDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ComponentFilterLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ComponentFilterHOC; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// WARNING
// The values below are referenced by ComponentFilters (which are saved via localStorage).
// Do not change them or it will break previously saved user customizations.
// If new element types are added, use new numbers rather than re-ordering existing ones.
//
// Changing these types is also a backwards breaking change for the standalone shell,
// since the frontend and backend must share the same values-
// and the backend is embedded in certain environments (like React Native).
const ElementTypeClass = 1;
const ElementTypeContext = 2;
const ElementTypeFunction = 5;
const ElementTypeForwardRef = 6;
const ElementTypeHostComponent = 7;
const ElementTypeMemo = 8;
const ElementTypeOtherOrUnknown = 9;
const ElementTypeProfiler = 10;
const ElementTypeRoot = 11;
const ElementTypeSuspense = 12;
const ElementTypeSuspenseList = 13; // Different types of elements displayed in the Elements tree.
// These types may be used to visually distinguish types,
// or to enable/disable certain functionality.

// WARNING
// The values below are referenced by ComponentFilters (which are saved via localStorage).
// Do not change them or it will break previously saved user customizations.
// If new filter types are added, use new numbers rather than re-ordering existing ones.
const ComponentFilterElementType = 1;
const ComponentFilterDisplayName = 2;
const ComponentFilterLocation = 3;
const ComponentFilterHOC = 4;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ getAllEnumerableKeys; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ getDisplayName; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ getUID; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* binding */ utfEncodeString; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* binding */ printOperationsArray; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ getDefaultComponentFilters; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ getInObject; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ deletePathInObject; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* binding */ renamePathInObject; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* binding */ setInObject; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ getDataType; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ getDisplayNameForReactElement; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ formatDataForPreview; });

// UNUSED EXPORTS: alphaSortKeys, utfDecodeString, getSavedComponentFilters, saveComponentFilters, getAppendComponentStack, setAppendComponentStack, getBreakOnConsoleErrors, setBreakOnConsoleErrors, getShowInlineWarningsAndErrors, setShowInlineWarningsAndErrors, separateDisplayNameAndHOCs, shallowDiffers

// EXTERNAL MODULE: /home/marvin/Misc/projects/replay/react/node_modules/lru-cache/index.js
var lru_cache = __webpack_require__(17);
var lru_cache_default = /*#__PURE__*/__webpack_require__.n(lru_cache);

// EXTERNAL MODULE: /home/marvin/Misc/projects/replay/react/build/node_modules/react-is/index.js
var react_is = __webpack_require__(6);

// CONCATENATED MODULE: ../shared/ReactSymbols.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
let REACT_ELEMENT_TYPE = 0xeac7;
let REACT_PORTAL_TYPE = 0xeaca;
let REACT_FRAGMENT_TYPE = 0xeacb;
let REACT_STRICT_MODE_TYPE = 0xeacc;
let REACT_PROFILER_TYPE = 0xead2;
let REACT_PROVIDER_TYPE = 0xeacd;
let REACT_CONTEXT_TYPE = 0xeace;
let REACT_FORWARD_REF_TYPE = 0xead0;
let REACT_SUSPENSE_TYPE = 0xead1;
let REACT_SUSPENSE_LIST_TYPE = 0xead8;
let REACT_MEMO_TYPE = 0xead3;
let REACT_LAZY_TYPE = 0xead4;
let REACT_SCOPE_TYPE = 0xead7;
let REACT_OPAQUE_ID_TYPE = 0xeae0;
let REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
let REACT_OFFSCREEN_TYPE = 0xeae2;
let REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
let REACT_CACHE_TYPE = 0xeae4;

if (typeof Symbol === 'function' && Symbol.for) {
  const symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
  REACT_CACHE_TYPE = symbolFor('react.cache');
}

const MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
const FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  const maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}
// EXTERNAL MODULE: ../react-devtools-shared/src/constants.js
var constants = __webpack_require__(2);

// EXTERNAL MODULE: ../react-devtools-shared/src/types.js
var types = __webpack_require__(0);

// EXTERNAL MODULE: ../react-devtools-shared/src/storage.js
var storage = __webpack_require__(5);

// EXTERNAL MODULE: ../react-devtools-shared/src/hydration.js
var hydration = __webpack_require__(8);

// CONCATENATED MODULE: ../react-devtools-shared/src/utils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */










const cachedDisplayNames = new WeakMap(); // On large trees, encoding takes significant time.
// Try to reuse the already encoded strings.

const encodedStringCache = new lru_cache_default.a({
  max: 1000
});
function alphaSortKeys(a, b) {
  if (a.toString() > b.toString()) {
    return 1;
  } else if (b.toString() > a.toString()) {
    return -1;
  } else {
    return 0;
  }
}
function getAllEnumerableKeys(obj) {
  const keys = new Set();
  let current = obj;

  while (current != null) {
    const currentKeys = [...Object.keys(current), ...Object.getOwnPropertySymbols(current)];
    const descriptors = Object.getOwnPropertyDescriptors(current);
    currentKeys.forEach(key => {
      // $FlowFixMe: key can be a Symbol https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
      if (descriptors[key].enumerable) {
        keys.add(key);
      }
    });
    current = Object.getPrototypeOf(current);
  }

  return keys;
}
function getDisplayName(type, fallbackName = 'Anonymous') {
  const nameFromCache = cachedDisplayNames.get(type);

  if (nameFromCache != null) {
    return nameFromCache;
  }

  let displayName = fallbackName; // The displayName property is not guaranteed to be a string.
  // It's only safe to use for our purposes if it's a string.
  // github.com/facebook/react-devtools/issues/803

  if (typeof type.displayName === 'string') {
    displayName = type.displayName;
  } else if (typeof type.name === 'string' && type.name !== '') {
    displayName = type.name;
  }

  cachedDisplayNames.set(type, displayName);
  return displayName;
}
let uidCounter = 0;
function getUID() {
  return ++uidCounter;
}
function utfDecodeString(array) {
  return String.fromCodePoint(...array);
}
function utfEncodeString(string) {
  const cached = encodedStringCache.get(string);

  if (cached !== undefined) {
    return cached;
  }

  const encoded = new Array(string.length);

  for (let i = 0; i < string.length; i++) {
    encoded[i] = string.codePointAt(i);
  }

  encodedStringCache.set(string, encoded);
  return encoded;
}
function printOperationsArray(operations) {
  // The first two values are always rendererID and rootID
  const rendererID = operations[0];
  const rootID = operations[1];
  const logs = [`operations for renderer:${rendererID} and root:${rootID}`];
  let i = 2; // Reassemble the string table.

  const stringTable = [null // ID = 0 corresponds to the null string.
  ];
  const stringTableSize = operations[i++];
  const stringTableEnd = i + stringTableSize;

  while (i < stringTableEnd) {
    const nextLength = operations[i++];
    const nextString = utfDecodeString(operations.slice(i, i + nextLength));
    stringTable.push(nextString);
    i += nextLength;
  }

  while (i < operations.length) {
    const operation = operations[i];

    switch (operation) {
      case constants["h" /* TREE_OPERATION_ADD */]:
        {
          const id = operations[i + 1];
          const type = operations[i + 2];
          i += 3;

          if (type === types["m" /* ElementTypeRoot */]) {
            logs.push(`Add new root node ${id}`);
            i++; // supportsProfiling

            i++; // hasOwnerMetadata
          } else {
            const parentID = operations[i];
            i++;
            i++; // ownerID

            const displayNameStringID = operations[i];
            const displayName = stringTable[displayNameStringID];
            i++;
            i++; // key

            logs.push(`Add node ${id} (${displayName || 'null'}) as child of ${parentID}`);
          }

          break;
        }

      case constants["i" /* TREE_OPERATION_REMOVE */]:
        {
          const removeLength = operations[i + 1];
          i += 2;

          for (let removeIndex = 0; removeIndex < removeLength; removeIndex++) {
            const id = operations[i];
            i += 1;
            logs.push(`Remove node ${id}`);
          }

          break;
        }

      case constants["j" /* TREE_OPERATION_REMOVE_ROOT */]:
        {
          i += 1;
          logs.push(`Remove root ${rootID}`);
          break;
        }

      case constants["k" /* TREE_OPERATION_REORDER_CHILDREN */]:
        {
          const id = operations[i + 1];
          const numChildren = operations[i + 2];
          i += 3;
          const children = operations.slice(i, i + numChildren);
          i += numChildren;
          logs.push(`Re-order node ${id} children ${children.join(',')}`);
          break;
        }

      case constants["m" /* TREE_OPERATION_UPDATE_TREE_BASE_DURATION */]:
        // Base duration updates are only sent while profiling is in progress.
        // We can ignore them at this point.
        // The profiler UI uses them lazily in order to generate the tree.
        i += 3;
        break;

      case constants["l" /* TREE_OPERATION_UPDATE_ERRORS_OR_WARNINGS */]:
        const id = operations[i + 1];
        const numErrors = operations[i + 2];
        const numWarnings = operations[i + 3];
        i += 4;
        logs.push(`Node ${id} has ${numErrors} errors and ${numWarnings} warnings`);
        break;

      default:
        throw Error(`Unsupported Bridge operation "${operation}"`);
    }
  }

  console.log(logs.join('\n  '));
}
function getDefaultComponentFilters() {
  return [{
    type: types["b" /* ComponentFilterElementType */],
    value: types["i" /* ElementTypeHostComponent */],
    isEnabled: true
  }];
}
function getSavedComponentFilters() {
  try {
    const raw = Object(storage["a" /* localStorageGetItem */])(constants["a" /* LOCAL_STORAGE_FILTER_PREFERENCES_KEY */]);

    if (raw != null) {
      return JSON.parse(raw);
    }
  } catch (error) {}

  return getDefaultComponentFilters();
}
function saveComponentFilters(componentFilters) {
  Object(storage["b" /* localStorageSetItem */])(constants["a" /* LOCAL_STORAGE_FILTER_PREFERENCES_KEY */], JSON.stringify(componentFilters));
}
function getAppendComponentStack() {
  try {
    const raw = Object(storage["a" /* localStorageGetItem */])(constants["c" /* LOCAL_STORAGE_SHOULD_PATCH_CONSOLE_KEY */]);

    if (raw != null) {
      return JSON.parse(raw);
    }
  } catch (error) {}

  return true;
}
function setAppendComponentStack(value) {
  Object(storage["b" /* localStorageSetItem */])(constants["c" /* LOCAL_STORAGE_SHOULD_PATCH_CONSOLE_KEY */], JSON.stringify(value));
}
function getBreakOnConsoleErrors() {
  try {
    const raw = Object(storage["a" /* localStorageGetItem */])(constants["b" /* LOCAL_STORAGE_SHOULD_BREAK_ON_CONSOLE_ERRORS */]);

    if (raw != null) {
      return JSON.parse(raw);
    }
  } catch (error) {}

  return false;
}
function setBreakOnConsoleErrors(value) {
  Object(storage["b" /* localStorageSetItem */])(constants["b" /* LOCAL_STORAGE_SHOULD_BREAK_ON_CONSOLE_ERRORS */], JSON.stringify(value));
}
function getShowInlineWarningsAndErrors() {
  try {
    const raw = Object(storage["a" /* localStorageGetItem */])(constants["d" /* LOCAL_STORAGE_SHOW_INLINE_WARNINGS_AND_ERRORS_KEY */]);

    if (raw != null) {
      return JSON.parse(raw);
    }
  } catch (error) {}

  return true;
}
function setShowInlineWarningsAndErrors(value) {
  Object(storage["b" /* localStorageSetItem */])(constants["d" /* LOCAL_STORAGE_SHOW_INLINE_WARNINGS_AND_ERRORS_KEY */], JSON.stringify(value));
}
function separateDisplayNameAndHOCs(displayName, type) {
  if (displayName === null) {
    return [null, null];
  }

  let hocDisplayNames = null;

  switch (type) {
    case types["e" /* ElementTypeClass */]:
    case types["g" /* ElementTypeForwardRef */]:
    case types["h" /* ElementTypeFunction */]:
    case types["j" /* ElementTypeMemo */]:
      if (displayName.indexOf('(') >= 0) {
        const matches = displayName.match(/[^()]+/g);

        if (matches != null) {
          displayName = matches.pop();
          hocDisplayNames = matches;
        }
      }

      break;

    default:
      break;
  }

  if (type === types["j" /* ElementTypeMemo */]) {
    if (hocDisplayNames === null) {
      hocDisplayNames = ['Memo'];
    } else {
      hocDisplayNames.unshift('Memo');
    }
  } else if (type === types["g" /* ElementTypeForwardRef */]) {
    if (hocDisplayNames === null) {
      hocDisplayNames = ['ForwardRef'];
    } else {
      hocDisplayNames.unshift('ForwardRef');
    }
  }

  return [displayName, hocDisplayNames];
} // Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349

function shallowDiffers(prev, next) {
  for (const attribute in prev) {
    if (!(attribute in next)) {
      return true;
    }
  }

  for (const attribute in next) {
    if (prev[attribute] !== next[attribute]) {
      return true;
    }
  }

  return false;
}
function getInObject(object, path) {
  return path.reduce((reduced, attr) => {
    if (reduced) {
      if (hasOwnProperty.call(reduced, attr)) {
        return reduced[attr];
      }

      if (typeof reduced[Symbol.iterator] === 'function') {
        // Convert iterable to array and return array[index]
        //
        // TRICKY
        // Don't use [...spread] syntax for this purpose.
        // This project uses @babel/plugin-transform-spread in "loose" mode which only works with Array values.
        // Other types (e.g. typed arrays, Sets) will not spread correctly.
        return Array.from(reduced)[attr];
      }
    }

    return null;
  }, object);
}
function deletePathInObject(object, path) {
  const length = path.length;
  const last = path[length - 1];

  if (object != null) {
    const parent = getInObject(object, path.slice(0, length - 1));

    if (parent) {
      if (Array.isArray(parent)) {
        parent.splice(last, 1);
      } else {
        delete parent[last];
      }
    }
  }
}
function renamePathInObject(object, oldPath, newPath) {
  const length = oldPath.length;

  if (object != null) {
    const parent = getInObject(object, oldPath.slice(0, length - 1));

    if (parent) {
      const lastOld = oldPath[length - 1];
      const lastNew = newPath[length - 1];
      parent[lastNew] = parent[lastOld];

      if (Array.isArray(parent)) {
        parent.splice(lastOld, 1);
      } else {
        delete parent[lastOld];
      }
    }
  }
}
function setInObject(object, path, value) {
  const length = path.length;
  const last = path[length - 1];

  if (object != null) {
    const parent = getInObject(object, path.slice(0, length - 1));

    if (parent) {
      parent[last] = value;
    }
  }
}

/**
 * Get a enhanced/artificial type string based on the object instance
 */
function getDataType(data) {
  if (data === null) {
    return 'null';
  } else if (data === undefined) {
    return 'undefined';
  }

  if (Object(react_is["isElement"])(data)) {
    return 'react_element';
  }

  if (typeof HTMLElement !== 'undefined' && data instanceof HTMLElement) {
    return 'html_element';
  }

  const type = typeof data;

  switch (type) {
    case 'bigint':
      return 'bigint';

    case 'boolean':
      return 'boolean';

    case 'function':
      return 'function';

    case 'number':
      if (Number.isNaN(data)) {
        return 'nan';
      } else if (!Number.isFinite(data)) {
        return 'infinity';
      } else {
        return 'number';
      }

    case 'object':
      if (Array.isArray(data)) {
        return 'array';
      } else if (ArrayBuffer.isView(data)) {
        return hasOwnProperty.call(data.constructor, 'BYTES_PER_ELEMENT') ? 'typed_array' : 'data_view';
      } else if (data.constructor && data.constructor.name === 'ArrayBuffer') {
        // HACK This ArrayBuffer check is gross; is there a better way?
        // We could try to create a new DataView with the value.
        // If it doesn't error, we know it's an ArrayBuffer,
        // but this seems kind of awkward and expensive.
        return 'array_buffer';
      } else if (typeof data[Symbol.iterator] === 'function') {
        const iterator = data[Symbol.iterator]();

        if (!iterator) {// Proxies might break assumptoins about iterators.
          // See github.com/facebook/react/issues/21654
        } else {
          return iterator === data ? 'opaque_iterator' : 'iterator';
        }
      } else if (data.constructor && data.constructor.name === 'RegExp') {
        return 'regexp';
      } else {
        const toStringValue = Object.prototype.toString.call(data);

        if (toStringValue === '[object Date]') {
          return 'date';
        } else if (toStringValue === '[object HTMLAllCollection]') {
          return 'html_all_collection';
        }
      }

      return 'object';

    case 'string':
      return 'string';

    case 'symbol':
      return 'symbol';

    case 'undefined':
      if (Object.prototype.toString.call(data) === '[object HTMLAllCollection]') {
        return 'html_all_collection';
      }

      return 'undefined';

    default:
      return 'unknown';
  }
}
function getDisplayNameForReactElement(element) {
  const elementType = Object(react_is["typeOf"])(element);

  switch (elementType) {
    case react_is["ContextConsumer"]:
      return 'ContextConsumer';

    case react_is["ContextProvider"]:
      return 'ContextProvider';

    case react_is["ForwardRef"]:
      return 'ForwardRef';

    case react_is["Fragment"]:
      return 'Fragment';

    case react_is["Lazy"]:
      return 'Lazy';

    case react_is["Memo"]:
      return 'Memo';

    case react_is["Portal"]:
      return 'Portal';

    case react_is["Profiler"]:
      return 'Profiler';

    case react_is["StrictMode"]:
      return 'StrictMode';

    case react_is["Suspense"]:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

    default:
      const {
        type
      } = element;

      if (typeof type === 'string') {
        return type;
      } else if (typeof type === 'function') {
        return getDisplayName(type, 'Anonymous');
      } else if (type != null) {
        return 'NotImplementedInDevtools';
      } else {
        return 'Element';
      }

  }
}
const MAX_PREVIEW_STRING_LENGTH = 50;

function truncateForDisplay(string, length = MAX_PREVIEW_STRING_LENGTH) {
  if (string.length > length) {
    return string.substr(0, length) + '…';
  } else {
    return string;
  }
} // Attempts to mimic Chrome's inline preview for values.
// For example, the following value...
//   {
//      foo: 123,
//      bar: "abc",
//      baz: [true, false],
//      qux: { ab: 1, cd: 2 }
//   };
//
// Would show a preview of...
//   {foo: 123, bar: "abc", baz: Array(2), qux: {…}}
//
// And the following value...
//   [
//     123,
//     "abc",
//     [true, false],
//     { foo: 123, bar: "abc" }
//   ];
//
// Would show a preview of...
//   [123, "abc", Array(2), {…}]


function formatDataForPreview(data, showFormattedValue) {
  if (data != null && hasOwnProperty.call(data, hydration["b" /* meta */].type)) {
    return showFormattedValue ? data[hydration["b" /* meta */].preview_long] : data[hydration["b" /* meta */].preview_short];
  }

  const type = getDataType(data);

  switch (type) {
    case 'html_element':
      return `<${truncateForDisplay(data.tagName.toLowerCase())} />`;

    case 'function':
      return truncateForDisplay(`ƒ ${typeof data.name === 'function' ? '' : data.name}() {}`);

    case 'string':
      return `"${data}"`;

    case 'bigint':
      return truncateForDisplay(data.toString() + 'n');

    case 'regexp':
      return truncateForDisplay(data.toString());

    case 'symbol':
      return truncateForDisplay(data.toString());

    case 'react_element':
      return `<${truncateForDisplay(getDisplayNameForReactElement(data) || 'Unknown')} />`;

    case 'array_buffer':
      return `ArrayBuffer(${data.byteLength})`;

    case 'data_view':
      return `DataView(${data.buffer.byteLength})`;

    case 'array':
      if (showFormattedValue) {
        let formatted = '';

        for (let i = 0; i < data.length; i++) {
          if (i > 0) {
            formatted += ', ';
          }

          formatted += formatDataForPreview(data[i], false);

          if (formatted.length > MAX_PREVIEW_STRING_LENGTH) {
            // Prevent doing a lot of unnecessary iteration...
            break;
          }
        }

        return `[${truncateForDisplay(formatted)}]`;
      } else {
        const length = hasOwnProperty.call(data, hydration["b" /* meta */].size) ? data[hydration["b" /* meta */].size] : data.length;
        return `Array(${length})`;
      }

    case 'typed_array':
      const shortName = `${data.constructor.name}(${data.length})`;

      if (showFormattedValue) {
        let formatted = '';

        for (let i = 0; i < data.length; i++) {
          if (i > 0) {
            formatted += ', ';
          }

          formatted += data[i];

          if (formatted.length > MAX_PREVIEW_STRING_LENGTH) {
            // Prevent doing a lot of unnecessary iteration...
            break;
          }
        }

        return `${shortName} [${truncateForDisplay(formatted)}]`;
      } else {
        return shortName;
      }

    case 'iterator':
      const name = data.constructor.name;

      if (showFormattedValue) {
        // TRICKY
        // Don't use [...spread] syntax for this purpose.
        // This project uses @babel/plugin-transform-spread in "loose" mode which only works with Array values.
        // Other types (e.g. typed arrays, Sets) will not spread correctly.
        const array = Array.from(data);
        let formatted = '';

        for (let i = 0; i < array.length; i++) {
          const entryOrEntries = array[i];

          if (i > 0) {
            formatted += ', ';
          } // TRICKY
          // Browsers display Maps and Sets differently.
          // To mimic their behavior, detect if we've been given an entries tuple.
          //   Map(2) {"abc" => 123, "def" => 123}
          //   Set(2) {"abc", 123}


          if (Array.isArray(entryOrEntries)) {
            const key = formatDataForPreview(entryOrEntries[0], true);
            const value = formatDataForPreview(entryOrEntries[1], false);
            formatted += `${key} => ${value}`;
          } else {
            formatted += formatDataForPreview(entryOrEntries, false);
          }

          if (formatted.length > MAX_PREVIEW_STRING_LENGTH) {
            // Prevent doing a lot of unnecessary iteration...
            break;
          }
        }

        return `${name}(${data.size}) {${truncateForDisplay(formatted)}}`;
      } else {
        return `${name}(${data.size})`;
      }

    case 'opaque_iterator':
      {
        return data[Symbol.toStringTag];
      }

    case 'date':
      return data.toString();

    case 'object':
      if (showFormattedValue) {
        const keys = Array.from(getAllEnumerableKeys(data)).sort(alphaSortKeys);
        let formatted = '';

        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];

          if (i > 0) {
            formatted += ', ';
          }

          formatted += `${key.toString()}: ${formatDataForPreview(data[key], false)}`;

          if (formatted.length > MAX_PREVIEW_STRING_LENGTH) {
            // Prevent doing a lot of unnecessary iteration...
            break;
          }
        }

        return `{${truncateForDisplay(formatted)}}`;
      } else {
        return '{…}';
      }

    case 'boolean':
    case 'number':
    case 'infinity':
    case 'nan':
    case 'null':
    case 'undefined':
      return data;

    default:
      try {
        return truncateForDisplay('' + data);
      } catch (error) {
        return 'unserializable';
      }

  }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __DEBUG__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return TREE_OPERATION_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return TREE_OPERATION_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return TREE_OPERATION_REORDER_CHILDREN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return TREE_OPERATION_UPDATE_TREE_BASE_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return TREE_OPERATION_UPDATE_ERRORS_OR_WARNINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return TREE_OPERATION_REMOVE_ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOCAL_STORAGE_FILTER_PREFERENCES_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SESSION_STORAGE_LAST_SELECTION_KEY; });
/* unused harmony export LOCAL_STORAGE_PARSE_HOOK_NAMES_KEY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SESSION_STORAGE_RELOAD_AND_PROFILE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOCAL_STORAGE_SHOULD_BREAK_ON_CONSOLE_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOCAL_STORAGE_SHOULD_PATCH_CONSOLE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOCAL_STORAGE_SHOW_INLINE_WARNINGS_AND_ERRORS_KEY; });
/* unused harmony export LOCAL_STORAGE_TRACE_UPDATES_ENABLED_KEY */
/* unused harmony export PROFILER_EXPORT_VERSION */
/* unused harmony export CHANGE_LOG_URL */
/* unused harmony export UNSUPPORTED_VERSION_URL */
/* unused harmony export REACT_DEVTOOLS_WORKPLACE_URL */
/* unused harmony export THEME_STYLES */
/* unused harmony export COMFORTABLE_LINE_HEIGHT */
/* unused harmony export COMPACT_LINE_HEIGHT */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// Flip this flag to true to enable verbose console debug logging.
const __DEBUG__ = false;
const TREE_OPERATION_ADD = 1;
const TREE_OPERATION_REMOVE = 2;
const TREE_OPERATION_REORDER_CHILDREN = 3;
const TREE_OPERATION_UPDATE_TREE_BASE_DURATION = 4;
const TREE_OPERATION_UPDATE_ERRORS_OR_WARNINGS = 5;
const TREE_OPERATION_REMOVE_ROOT = 6;
const LOCAL_STORAGE_FILTER_PREFERENCES_KEY = 'React::DevTools::componentFilters';
const SESSION_STORAGE_LAST_SELECTION_KEY = 'React::DevTools::lastSelection';
const LOCAL_STORAGE_PARSE_HOOK_NAMES_KEY = 'React::DevTools::parseHookNames';
const SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY = 'React::DevTools::recordChangeDescriptions';
const SESSION_STORAGE_RELOAD_AND_PROFILE_KEY = 'React::DevTools::reloadAndProfile';
const LOCAL_STORAGE_SHOULD_BREAK_ON_CONSOLE_ERRORS = 'React::DevTools::breakOnConsoleErrors';
const LOCAL_STORAGE_SHOULD_PATCH_CONSOLE_KEY = 'React::DevTools::appendComponentStack';
const LOCAL_STORAGE_SHOW_INLINE_WARNINGS_AND_ERRORS_KEY = 'React::DevTools::showInlineWarningsAndErrors';
const LOCAL_STORAGE_TRACE_UPDATES_ENABLED_KEY = 'React::DevTools::traceUpdatesEnabled';
const PROFILER_EXPORT_VERSION = 5;
const CHANGE_LOG_URL = 'https://github.com/facebook/react/blob/main/packages/react-devtools/CHANGELOG.md';
const UNSUPPORTED_VERSION_URL = 'https://reactjs.org/blog/2019/08/15/new-react-devtools.html#how-do-i-get-the-old-version-back';
const REACT_DEVTOOLS_WORKPLACE_URL = 'https://fburl.com/react-devtools-workplace-group';
const THEME_STYLES = {
  light: {
    '--color-attribute-name': '#ef6632',
    '--color-attribute-name-not-editable': '#23272f',
    '--color-attribute-name-inverted': 'rgba(255, 255, 255, 0.7)',
    '--color-attribute-value': '#1a1aa6',
    '--color-attribute-value-inverted': '#ffffff',
    '--color-attribute-editable-value': '#1a1aa6',
    '--color-background': '#ffffff',
    '--color-background-hover': 'rgba(0, 136, 250, 0.1)',
    '--color-background-inactive': '#e5e5e5',
    '--color-background-invalid': '#fff0f0',
    '--color-background-selected': '#0088fa',
    '--color-button-background': '#ffffff',
    '--color-button-background-focus': '#ededed',
    '--color-button': '#5f6673',
    '--color-button-disabled': '#cfd1d5',
    '--color-button-active': '#0088fa',
    '--color-button-focus': '#23272f',
    '--color-button-hover': '#23272f',
    '--color-border': '#eeeeee',
    '--color-commit-did-not-render-fill': '#cfd1d5',
    '--color-commit-did-not-render-fill-text': '#000000',
    '--color-commit-did-not-render-pattern': '#cfd1d5',
    '--color-commit-did-not-render-pattern-text': '#333333',
    '--color-commit-gradient-0': '#37afa9',
    '--color-commit-gradient-1': '#63b19e',
    '--color-commit-gradient-2': '#80b393',
    '--color-commit-gradient-3': '#97b488',
    '--color-commit-gradient-4': '#abb67d',
    '--color-commit-gradient-5': '#beb771',
    '--color-commit-gradient-6': '#cfb965',
    '--color-commit-gradient-7': '#dfba57',
    '--color-commit-gradient-8': '#efbb49',
    '--color-commit-gradient-9': '#febc38',
    '--color-commit-gradient-text': '#000000',
    '--color-component-name': '#6a51b2',
    '--color-component-name-inverted': '#ffffff',
    '--color-component-badge-background': 'rgba(0, 0, 0, 0.1)',
    '--color-component-badge-background-inverted': 'rgba(255, 255, 255, 0.25)',
    '--color-component-badge-count': '#777d88',
    '--color-component-badge-count-inverted': 'rgba(255, 255, 255, 0.7)',
    '--color-console-error-badge-text': '#ffffff',
    '--color-console-error-background': '#fff0f0',
    '--color-console-error-border': '#ffd6d6',
    '--color-console-error-icon': '#eb3941',
    '--color-console-error-text': '#fe2e31',
    '--color-console-warning-badge-text': '#000000',
    '--color-console-warning-background': '#fffbe5',
    '--color-console-warning-border': '#fff5c1',
    '--color-console-warning-icon': '#f4bd00',
    '--color-console-warning-text': '#64460c',
    '--color-context-background': 'rgba(0,0,0,.9)',
    '--color-context-background-hover': 'rgba(255, 255, 255, 0.1)',
    '--color-context-background-selected': '#178fb9',
    '--color-context-border': '#3d424a',
    '--color-context-text': '#ffffff',
    '--color-context-text-selected': '#ffffff',
    '--color-dim': '#777d88',
    '--color-dimmer': '#cfd1d5',
    '--color-dimmest': '#eff0f1',
    '--color-error-background': 'hsl(0, 100%, 97%)',
    '--color-error-border': 'hsl(0, 100%, 92%)',
    '--color-error-text': '#ff0000',
    '--color-expand-collapse-toggle': '#777d88',
    '--color-link': '#0000ff',
    '--color-modal-background': 'rgba(255, 255, 255, 0.75)',
    '--color-bridge-version-npm-background': '#eff0f1',
    '--color-bridge-version-npm-text': '#000000',
    '--color-bridge-version-number': '#0088fa',
    '--color-primitive-hook-badge-background': '#e5e5e5',
    '--color-primitive-hook-badge-text': '#5f6673',
    '--color-record-active': '#fc3a4b',
    '--color-record-hover': '#3578e5',
    '--color-record-inactive': '#0088fa',
    '--color-resize-bar': '#eeeeee',
    '--color-resize-bar-active': '#dcdcdc',
    '--color-resize-bar-border': '#d1d1d1',
    '--color-resize-bar-dot': '#333333',
    '--color-scheduling-profiler-native-event': '#ccc',
    '--color-scheduling-profiler-native-event-hover': '#aaa',
    '--color-scheduling-profiler-network-primary': '#fcf3dc',
    '--color-scheduling-profiler-network-primary-hover': '#f0e7d1',
    '--color-scheduling-profiler-network-secondary': '#efc457',
    '--color-scheduling-profiler-network-secondary-hover': '#e3ba52',
    '--color-scheduling-profiler-priority-background': '#f6f6f6',
    '--color-scheduling-profiler-priority-border': '#eeeeee',
    '--color-scheduling-profiler-user-timing': '#c9cacd',
    '--color-scheduling-profiler-user-timing-hover': '#93959a',
    '--color-scheduling-profiler-react-idle': '#d3e5f6',
    '--color-scheduling-profiler-react-idle-hover': '#c3d9ef',
    '--color-scheduling-profiler-react-render': '#9fc3f3',
    '--color-scheduling-profiler-react-render-hover': '#83afe9',
    '--color-scheduling-profiler-react-render-text': '#11365e',
    '--color-scheduling-profiler-react-commit': '#c88ff0',
    '--color-scheduling-profiler-react-commit-hover': '#b281d6',
    '--color-scheduling-profiler-react-commit-text': '#3e2c4a',
    '--color-scheduling-profiler-react-layout-effects': '#b281d6',
    '--color-scheduling-profiler-react-layout-effects-hover': '#9d71bd',
    '--color-scheduling-profiler-react-layout-effects-text': '#3e2c4a',
    '--color-scheduling-profiler-react-passive-effects': '#b281d6',
    '--color-scheduling-profiler-react-passive-effects-hover': '#9d71bd',
    '--color-scheduling-profiler-react-passive-effects-text': '#3e2c4a',
    '--color-scheduling-profiler-react-schedule': '#9fc3f3',
    '--color-scheduling-profiler-react-schedule-hover': '#2683E2',
    '--color-scheduling-profiler-react-suspense-rejected': '#f1cc14',
    '--color-scheduling-profiler-react-suspense-rejected-hover': '#ffdf37',
    '--color-scheduling-profiler-react-suspense-resolved': '#a6e59f',
    '--color-scheduling-profiler-react-suspense-resolved-hover': '#89d281',
    '--color-scheduling-profiler-react-suspense-unresolved': '#c9cacd',
    '--color-scheduling-profiler-react-suspense-unresolved-hover': '#93959a',
    '--color-scheduling-profiler-text-color': '#000000',
    '--color-scheduling-profiler-text-dim-color': '#ccc',
    '--color-scheduling-profiler-react-work-border': '#ffffff',
    '--color-search-match': 'yellow',
    '--color-search-match-current': '#f7923b',
    '--color-selected-tree-highlight-active': 'rgba(0, 136, 250, 0.1)',
    '--color-selected-tree-highlight-inactive': 'rgba(0, 0, 0, 0.05)',
    '--color-scroll-caret': 'rgba(150, 150, 150, 0.5)',
    '--color-tab-selected-border': '#0088fa',
    '--color-text': '#000000',
    '--color-text-invalid': '#ff0000',
    '--color-text-selected': '#ffffff',
    '--color-toggle-background-invalid': '#fc3a4b',
    '--color-toggle-background-on': '#0088fa',
    '--color-toggle-background-off': '#cfd1d5',
    '--color-toggle-text': '#ffffff',
    '--color-warning-background': '#fb3655',
    '--color-warning-background-hover': '#f82042',
    '--color-warning-text-color': '#ffffff',
    '--color-warning-text-color-inverted': '#fd4d69',
    // The styles below should be kept in sync with 'root.css'
    // They are repeated there because they're used by e.g. tooltips or context menus
    // which get rendered outside of the DOM subtree (where normal theme/styles are written).
    '--color-scroll-thumb': '#c2c2c2',
    '--color-scroll-track': '#fafafa',
    '--color-tooltip-background': 'rgba(0, 0, 0, 0.9)',
    '--color-tooltip-text': '#ffffff'
  },
  dark: {
    '--color-attribute-name': '#9d87d2',
    '--color-attribute-name-not-editable': '#ededed',
    '--color-attribute-name-inverted': '#282828',
    '--color-attribute-value': '#cedae0',
    '--color-attribute-value-inverted': '#ffffff',
    '--color-attribute-editable-value': 'yellow',
    '--color-background': '#282c34',
    '--color-background-hover': 'rgba(255, 255, 255, 0.1)',
    '--color-background-inactive': '#3d424a',
    '--color-background-invalid': '#5c0000',
    '--color-background-selected': '#178fb9',
    '--color-button-background': '#282c34',
    '--color-button-background-focus': '#3d424a',
    '--color-button': '#afb3b9',
    '--color-button-active': '#61dafb',
    '--color-button-disabled': '#4f5766',
    '--color-button-focus': '#a2e9fc',
    '--color-button-hover': '#ededed',
    '--color-border': '#3d424a',
    '--color-commit-did-not-render-fill': '#777d88',
    '--color-commit-did-not-render-fill-text': '#000000',
    '--color-commit-did-not-render-pattern': '#666c77',
    '--color-commit-did-not-render-pattern-text': '#ffffff',
    '--color-commit-gradient-0': '#37afa9',
    '--color-commit-gradient-1': '#63b19e',
    '--color-commit-gradient-2': '#80b393',
    '--color-commit-gradient-3': '#97b488',
    '--color-commit-gradient-4': '#abb67d',
    '--color-commit-gradient-5': '#beb771',
    '--color-commit-gradient-6': '#cfb965',
    '--color-commit-gradient-7': '#dfba57',
    '--color-commit-gradient-8': '#efbb49',
    '--color-commit-gradient-9': '#febc38',
    '--color-commit-gradient-text': '#000000',
    '--color-component-name': '#61dafb',
    '--color-component-name-inverted': '#282828',
    '--color-component-badge-background': 'rgba(255, 255, 255, 0.25)',
    '--color-component-badge-background-inverted': 'rgba(0, 0, 0, 0.25)',
    '--color-component-badge-count': '#8f949d',
    '--color-component-badge-count-inverted': 'rgba(255, 255, 255, 0.7)',
    '--color-console-error-badge-text': '#000000',
    '--color-console-error-background': '#290000',
    '--color-console-error-border': '#5c0000',
    '--color-console-error-icon': '#eb3941',
    '--color-console-error-text': '#fc7f7f',
    '--color-console-warning-badge-text': '#000000',
    '--color-console-warning-background': '#332b00',
    '--color-console-warning-border': '#665500',
    '--color-console-warning-icon': '#f4bd00',
    '--color-console-warning-text': '#f5f2ed',
    '--color-context-background': 'rgba(255,255,255,.95)',
    '--color-context-background-hover': 'rgba(0, 136, 250, 0.1)',
    '--color-context-background-selected': '#0088fa',
    '--color-context-border': '#eeeeee',
    '--color-context-text': '#000000',
    '--color-context-text-selected': '#ffffff',
    '--color-dim': '#8f949d',
    '--color-dimmer': '#777d88',
    '--color-dimmest': '#4f5766',
    '--color-error-background': '#200',
    '--color-error-border': '#900',
    '--color-error-text': '#f55',
    '--color-expand-collapse-toggle': '#8f949d',
    '--color-link': '#61dafb',
    '--color-modal-background': 'rgba(0, 0, 0, 0.75)',
    '--color-bridge-version-npm-background': 'rgba(0, 0, 0, 0.25)',
    '--color-bridge-version-npm-text': '#ffffff',
    '--color-bridge-version-number': 'yellow',
    '--color-primitive-hook-badge-background': 'rgba(0, 0, 0, 0.25)',
    '--color-primitive-hook-badge-text': 'rgba(255, 255, 255, 0.7)',
    '--color-record-active': '#fc3a4b',
    '--color-record-hover': '#a2e9fc',
    '--color-record-inactive': '#61dafb',
    '--color-resize-bar': '#282c34',
    '--color-resize-bar-active': '#31363f',
    '--color-resize-bar-border': '#3d424a',
    '--color-resize-bar-dot': '#cfd1d5',
    '--color-scheduling-profiler-native-event': '#b2b2b2',
    '--color-scheduling-profiler-native-event-hover': '#949494',
    '--color-scheduling-profiler-network-primary': '#fcf3dc',
    '--color-scheduling-profiler-network-primary-hover': '#e3dbc5',
    '--color-scheduling-profiler-network-secondary': '#efc457',
    '--color-scheduling-profiler-network-secondary-hover': '#d6af4d',
    '--color-scheduling-profiler-priority-background': '#1d2129',
    '--color-scheduling-profiler-priority-border': '#282c34',
    '--color-scheduling-profiler-user-timing': '#c9cacd',
    '--color-scheduling-profiler-user-timing-hover': '#93959a',
    '--color-scheduling-profiler-react-idle': '#3d485b',
    '--color-scheduling-profiler-react-idle-hover': '#465269',
    '--color-scheduling-profiler-react-render': '#2683E2',
    '--color-scheduling-profiler-react-render-hover': '#1a76d4',
    '--color-scheduling-profiler-react-render-text': '#11365e',
    '--color-scheduling-profiler-react-commit': '#731fad',
    '--color-scheduling-profiler-react-commit-hover': '#611b94',
    '--color-scheduling-profiler-react-commit-text': '#e5c1ff',
    '--color-scheduling-profiler-react-layout-effects': '#611b94',
    '--color-scheduling-profiler-react-layout-effects-hover': '#51167a',
    '--color-scheduling-profiler-react-layout-effects-text': '#e5c1ff',
    '--color-scheduling-profiler-react-passive-effects': '#611b94',
    '--color-scheduling-profiler-react-passive-effects-hover': '#51167a',
    '--color-scheduling-profiler-react-passive-effects-text': '#e5c1ff',
    '--color-scheduling-profiler-react-schedule': '#2683E2',
    '--color-scheduling-profiler-react-schedule-hover': '#1a76d4',
    '--color-scheduling-profiler-react-suspense-rejected': '#f1cc14',
    '--color-scheduling-profiler-react-suspense-rejected-hover': '#e4c00f',
    '--color-scheduling-profiler-react-suspense-resolved': '#a6e59f',
    '--color-scheduling-profiler-react-suspense-resolved-hover': '#89d281',
    '--color-scheduling-profiler-react-suspense-unresolved': '#c9cacd',
    '--color-scheduling-profiler-react-suspense-unresolved-hover': '#93959a',
    '--color-scheduling-profiler-text-color': '#282c34',
    '--color-scheduling-profiler-text-dim-color': '#555b66',
    '--color-scheduling-profiler-react-work-border': '#ffffff',
    '--color-search-match': 'yellow',
    '--color-search-match-current': '#f7923b',
    '--color-selected-tree-highlight-active': 'rgba(23, 143, 185, 0.15)',
    '--color-selected-tree-highlight-inactive': 'rgba(255, 255, 255, 0.05)',
    '--color-scroll-caret': '#4f5766',
    '--color-shadow': 'rgba(0, 0, 0, 0.5)',
    '--color-tab-selected-border': '#178fb9',
    '--color-text': '#ffffff',
    '--color-text-invalid': '#ff8080',
    '--color-text-selected': '#ffffff',
    '--color-toggle-background-invalid': '#fc3a4b',
    '--color-toggle-background-on': '#178fb9',
    '--color-toggle-background-off': '#777d88',
    '--color-toggle-text': '#ffffff',
    '--color-warning-background': '#ee1638',
    '--color-warning-background-hover': '#da1030',
    '--color-warning-text-color': '#ffffff',
    '--color-warning-text-color-inverted': '#ee1638',
    // The styles below should be kept in sync with 'root.css'
    // They are repeated there because they're used by e.g. tooltips or context menus
    // which get rendered outside of the DOM subtree (where normal theme/styles are written).
    '--color-scroll-thumb': '#afb3b9',
    '--color-scroll-track': '#313640',
    '--color-tooltip-background': 'rgba(255, 255, 255, 0.95)',
    '--color-tooltip-text': '#000000'
  },
  compact: {
    '--font-size-monospace-small': '9px',
    '--font-size-monospace-normal': '11px',
    '--font-size-monospace-large': '15px',
    '--font-size-sans-small': '10px',
    '--font-size-sans-normal': '12px',
    '--font-size-sans-large': '14px',
    '--line-height-data': '18px'
  },
  comfortable: {
    '--font-size-monospace-small': '10px',
    '--font-size-monospace-normal': '13px',
    '--font-size-monospace-large': '17px',
    '--font-size-sans-small': '12px',
    '--font-size-sans-normal': '14px',
    '--font-size-sans-large': '16px',
    '--line-height-data': '22px'
  }
}; // HACK
//
// Sometimes the inline target is rendered before root styles are applied,
// which would result in e.g. NaN itemSize being passed to react-window list.

const COMFORTABLE_LINE_HEIGHT = parseInt(THEME_STYLES.comfortable['--line-height-data'], 10);
const COMPACT_LINE_HEIGHT = parseInt(THEME_STYLES.compact['--line-height-data'], 10);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONCURRENT_MODE_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CONCURRENT_MODE_SYMBOL_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CONTEXT_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CONTEXT_SYMBOL_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DEPRECATED_ASYNC_MODE_SYMBOL_STRING; });
/* unused harmony export ELEMENT_NUMBER */
/* unused harmony export ELEMENT_SYMBOL_STRING */
/* unused harmony export DEBUG_TRACING_MODE_NUMBER */
/* unused harmony export DEBUG_TRACING_MODE_SYMBOL_STRING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FORWARD_REF_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FORWARD_REF_SYMBOL_STRING; });
/* unused harmony export FRAGMENT_NUMBER */
/* unused harmony export FRAGMENT_SYMBOL_STRING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LAZY_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LAZY_SYMBOL_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return MEMO_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MEMO_SYMBOL_STRING; });
/* unused harmony export OPAQUE_ID_NUMBER */
/* unused harmony export OPAQUE_ID_SYMBOL_STRING */
/* unused harmony export PORTAL_NUMBER */
/* unused harmony export PORTAL_SYMBOL_STRING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return PROFILER_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return PROFILER_SYMBOL_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return PROVIDER_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return PROVIDER_SYMBOL_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SCOPE_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SCOPE_SYMBOL_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return STRICT_MODE_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return STRICT_MODE_SYMBOL_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SUSPENSE_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return SUSPENSE_SYMBOL_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SUSPENSE_LIST_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SUSPENSE_LIST_SYMBOL_STRING; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// This list should be kept updated to reflect additions to 'shared/ReactSymbols'.
// DevTools can't import symbols from 'shared/ReactSymbols' directly for two reasons:
// 1. DevTools requires symbols which may have been deleted in more recent versions (e.g. concurrent mode)
// 2. DevTools must support both Symbol and numeric forms of each symbol;
//    Since e.g. standalone DevTools runs in a separate process, it can't rely on its own ES capabilities.
const CONCURRENT_MODE_NUMBER = 0xeacf;
const CONCURRENT_MODE_SYMBOL_STRING = 'Symbol(react.concurrent_mode)';
const CONTEXT_NUMBER = 0xeace;
const CONTEXT_SYMBOL_STRING = 'Symbol(react.context)';
const DEPRECATED_ASYNC_MODE_SYMBOL_STRING = 'Symbol(react.async_mode)';
const ELEMENT_NUMBER = 0xeac7;
const ELEMENT_SYMBOL_STRING = 'Symbol(react.element)';
const DEBUG_TRACING_MODE_NUMBER = 0xeae1;
const DEBUG_TRACING_MODE_SYMBOL_STRING = 'Symbol(react.debug_trace_mode)';
const FORWARD_REF_NUMBER = 0xead0;
const FORWARD_REF_SYMBOL_STRING = 'Symbol(react.forward_ref)';
const FRAGMENT_NUMBER = 0xeacb;
const FRAGMENT_SYMBOL_STRING = 'Symbol(react.fragment)';
const LAZY_NUMBER = 0xead4;
const LAZY_SYMBOL_STRING = 'Symbol(react.lazy)';
const MEMO_NUMBER = 0xead3;
const MEMO_SYMBOL_STRING = 'Symbol(react.memo)';
const OPAQUE_ID_NUMBER = 0xeae0;
const OPAQUE_ID_SYMBOL_STRING = 'Symbol(react.opaque.id)';
const PORTAL_NUMBER = 0xeaca;
const PORTAL_SYMBOL_STRING = 'Symbol(react.portal)';
const PROFILER_NUMBER = 0xead2;
const PROFILER_SYMBOL_STRING = 'Symbol(react.profiler)';
const PROVIDER_NUMBER = 0xeacd;
const PROVIDER_SYMBOL_STRING = 'Symbol(react.provider)';
const SCOPE_NUMBER = 0xead7;
const SCOPE_SYMBOL_STRING = 'Symbol(react.scope)';
const STRICT_MODE_NUMBER = 0xeacc;
const STRICT_MODE_SYMBOL_STRING = 'Symbol(react.strict_mode)';
const SUSPENSE_NUMBER = 0xead1;
const SUSPENSE_SYMBOL_STRING = 'Symbol(react.suspense)';
const SUSPENSE_LIST_NUMBER = 0xead8;
const SUSPENSE_LIST_SYMBOL_STRING = 'Symbol(react.suspense_list)';

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cleanForBridge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return copyToClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return copyWithDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return copyWithRename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return copyWithSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getEffectDurations; });
/* unused harmony export serializeToString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isSynchronousXHRSupported; });
/* harmony import */ var clipboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var clipboard_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clipboard_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hydration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var shared_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



function cleanForBridge(data, isPathAllowed, path = []) {
  if (data !== null) {
    const cleanedPaths = [];
    const unserializablePaths = [];
    const cleanedData = Object(_hydration__WEBPACK_IMPORTED_MODULE_1__[/* dehydrate */ "a"])(data, cleanedPaths, unserializablePaths, path, isPathAllowed);
    return {
      data: cleanedData,
      cleaned: cleanedPaths,
      unserializable: unserializablePaths
    };
  } else {
    return null;
  }
}
function copyToClipboard(value) {
  const safeToCopy = serializeToString(value);
  const text = safeToCopy === undefined ? 'undefined' : safeToCopy;
  const {
    clipboardCopyText
  } = window.__REACT_DEVTOOLS_GLOBAL_HOOK__; // On Firefox navigator.clipboard.writeText has to be called from
  // the content script js code (because it requires the clipboardWrite
  // permission to be allowed out of a "user handling" callback),
  // clipboardCopyText is an helper injected into the page from.
  // injectGlobalHook.

  if (typeof clipboardCopyText === 'function') {
    clipboardCopyText(text).catch(err => {});
  } else {
    Object(clipboard_js__WEBPACK_IMPORTED_MODULE_0__["copy"])(text);
  }
}
function copyWithDelete(obj, path, index = 0) {
  const key = path[index];
  const updated = Object(shared_isArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj) ? obj.slice() : { ...obj
  };

  if (index + 1 === path.length) {
    if (Object(shared_isArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(updated)) {
      updated.splice(key, 1);
    } else {
      delete updated[key];
    }
  } else {
    // $FlowFixMe number or string is fine here
    updated[key] = copyWithDelete(obj[key], path, index + 1);
  }

  return updated;
} // This function expects paths to be the same except for the final value.
// e.g. ['path', 'to', 'foo'] and ['path', 'to', 'bar']

function copyWithRename(obj, oldPath, newPath, index = 0) {
  const oldKey = oldPath[index];
  const updated = Object(shared_isArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj) ? obj.slice() : { ...obj
  };

  if (index + 1 === oldPath.length) {
    const newKey = newPath[index]; // $FlowFixMe number or string is fine here

    updated[newKey] = updated[oldKey];

    if (Object(shared_isArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(updated)) {
      updated.splice(oldKey, 1);
    } else {
      delete updated[oldKey];
    }
  } else {
    // $FlowFixMe number or string is fine here
    updated[oldKey] = copyWithRename(obj[oldKey], oldPath, newPath, index + 1);
  }

  return updated;
}
function copyWithSet(obj, path, value, index = 0) {
  if (index >= path.length) {
    return value;
  }

  const key = path[index];
  const updated = Object(shared_isArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj) ? obj.slice() : { ...obj
  }; // $FlowFixMe number or string is fine here

  updated[key] = copyWithSet(obj[key], path, value, index + 1);
  return updated;
}
function getEffectDurations(root) {
  // Profiling durations are only available for certain builds.
  // If available, they'll be stored on the HostRoot.
  let effectDuration = null;
  let passiveEffectDuration = null;
  const hostRoot = root.current;

  if (hostRoot != null) {
    const stateNode = hostRoot.stateNode;

    if (stateNode != null) {
      effectDuration = stateNode.effectDuration != null ? stateNode.effectDuration : null;
      passiveEffectDuration = stateNode.passiveEffectDuration != null ? stateNode.passiveEffectDuration : null;
    }
  }

  return {
    effectDuration,
    passiveEffectDuration
  };
}
function serializeToString(data) {
  const cache = new Set(); // Use a custom replacer function to protect against circular references.

  return JSON.stringify(data, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        return;
      }

      cache.add(value);
    } // $FlowFixMe


    if (typeof value === 'bigint') {
      return value.toString() + 'n';
    }

    return value;
  });
} // based on https://github.com/tmpfs/format-util/blob/0e62d430efb0a1c51448709abd3e2406c14d8401/format.js#L1
// based on https://developer.mozilla.org/en-US/docs/Web/API/console#Using_string_substitutions
// Implements s, d, i and f placeholders

function format(maybeMessage, ...inputArgs) {
  const args = inputArgs.slice(); // Symbols cannot be concatenated with Strings.

  let formatted = typeof maybeMessage === 'symbol' ? maybeMessage.toString() : '' + maybeMessage; // If the first argument is a string, check for substitutions.

  if (typeof maybeMessage === 'string') {
    if (args.length) {
      const REGEXP = /(%?)(%([jds]))/g;
      formatted = formatted.replace(REGEXP, (match, escaped, ptn, flag) => {
        let arg = args.shift();

        switch (flag) {
          case 's':
            arg += '';
            break;

          case 'd':
          case 'i':
            arg = parseInt(arg, 10).toString();
            break;

          case 'f':
            arg = parseFloat(arg).toString();
            break;
        }

        if (!escaped) {
          return arg;
        }

        args.unshift(arg);
        return match;
      });
    }
  } // Arguments that remain after formatting.


  if (args.length) {
    for (let i = 0; i < args.length; i++) {
      const arg = args[i]; // Symbols cannot be concatenated with Strings.

      formatted += ' ' + (typeof arg === 'symbol' ? arg.toString() : arg);
    }
  } // Update escaped %% values.


  formatted = formatted.replace(/%{2,2}/g, '%');
  return '' + formatted;
}
function isSynchronousXHRSupported() {
  return !!(window.document && window.document.featurePolicy && window.document.featurePolicy.allowsFeature('sync-xhr'));
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localStorageGetItem; });
/* unused harmony export localStorageRemoveItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return localStorageSetItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sessionStorageGetItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sessionStorageRemoveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return sessionStorageSetItem; });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function localStorageGetItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}
function localStorageRemoveItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {}
}
function localStorageSetItem(key, value) {
  try {
    return localStorage.setItem(key, value);
  } catch (error) {}
}
function sessionStorageGetItem(key) {
  try {
    return sessionStorage.getItem(key);
  } catch (error) {
    return null;
  }
}
function sessionStorageRemoveItem(key) {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {}
}
function sessionStorageSetItem(key, value) {
  try {
    return sessionStorage.setItem(key, value);
  } catch (error) {}
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(25);
} else {}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dehydrate; });
/* unused harmony export fillInPath */
/* unused harmony export hydrate */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const meta = {
  inspectable: Symbol('inspectable'),
  inspected: Symbol('inspected'),
  name: Symbol('name'),
  preview_long: Symbol('preview_long'),
  preview_short: Symbol('preview_short'),
  readonly: Symbol('readonly'),
  size: Symbol('size'),
  type: Symbol('type'),
  unserializable: Symbol('unserializable')
};
// This threshold determines the depth at which the bridge "dehydrates" nested data.
// Dehydration means that we don't serialize the data for e.g. postMessage or stringify,
// unless the frontend explicitly requests it (e.g. a user clicks to expand a props object).
//
// Reducing this threshold will improve the speed of initial component inspection,
// but may decrease the responsiveness of expanding objects/arrays to inspect further.
const LEVEL_THRESHOLD = 2;
/**
 * Generate the dehydrated metadata for complex object instances
 */

function createDehydrated(type, inspectable, data, cleaned, path) {
  cleaned.push(path);
  const dehydrated = {
    inspectable,
    type,
    preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, true),
    preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, false),
    name: !data.constructor || data.constructor.name === 'Object' ? '' : data.constructor.name
  };

  if (type === 'array' || type === 'typed_array') {
    dehydrated.size = data.length;
  } else if (type === 'object') {
    dehydrated.size = Object.keys(data).length;
  }

  if (type === 'iterator' || type === 'typed_array') {
    dehydrated.readonly = true;
  }

  return dehydrated;
}
/**
 * Strip out complex data (instances, functions, and data nested > LEVEL_THRESHOLD levels deep).
 * The paths of the stripped out objects are appended to the `cleaned` list.
 * On the other side of the barrier, the cleaned list is used to "re-hydrate" the cleaned representation into
 * an object with symbols as attributes, so that a sanitized object can be distinguished from a normal object.
 *
 * Input: {"some": {"attr": fn()}, "other": AnInstance}
 * Output: {
 *   "some": {
 *     "attr": {"name": the fn.name, type: "function"}
 *   },
 *   "other": {
 *     "name": "AnInstance",
 *     "type": "object",
 *   },
 * }
 * and cleaned = [["some", "attr"], ["other"]]
 */


function dehydrate(data, cleaned, unserializable, path, isPathAllowed, level = 0) {
  const type = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getDataType */ "d"])(data);
  let isPathAllowedCheck;

  switch (type) {
    case 'html_element':
      cleaned.push(path);
      return {
        inspectable: false,
        preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, false),
        preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, true),
        name: data.tagName,
        type
      };

    case 'function':
      cleaned.push(path);
      return {
        inspectable: false,
        preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, false),
        preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, true),
        name: typeof data.name === 'function' || !data.name ? 'function' : data.name,
        type
      };

    case 'string':
      isPathAllowedCheck = isPathAllowed(path);

      if (isPathAllowedCheck) {
        return data;
      } else {
        return data.length <= 500 ? data : data.slice(0, 500) + '...';
      }

    case 'bigint':
      cleaned.push(path);
      return {
        inspectable: false,
        preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, false),
        preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, true),
        name: data.toString(),
        type
      };

    case 'symbol':
      cleaned.push(path);
      return {
        inspectable: false,
        preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, false),
        preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, true),
        name: data.toString(),
        type
      };
    // React Elements aren't very inspector-friendly,
    // and often contain private fields or circular references.

    case 'react_element':
      cleaned.push(path);
      return {
        inspectable: false,
        preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, false),
        preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, true),
        name: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getDisplayNameForReactElement */ "g"])(data) || 'Unknown',
        type
      };
    // ArrayBuffers error if you try to inspect them.

    case 'array_buffer':
    case 'data_view':
      cleaned.push(path);
      return {
        inspectable: false,
        preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, false),
        preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, true),
        name: type === 'data_view' ? 'DataView' : 'ArrayBuffer',
        size: data.byteLength,
        type
      };

    case 'array':
      isPathAllowedCheck = isPathAllowed(path);

      if (level >= LEVEL_THRESHOLD && !isPathAllowedCheck) {
        return createDehydrated(type, true, data, cleaned, path);
      }

      return data.map((item, i) => dehydrate(item, cleaned, unserializable, path.concat([i]), isPathAllowed, isPathAllowedCheck ? 1 : level + 1));

    case 'html_all_collection':
    case 'typed_array':
    case 'iterator':
      isPathAllowedCheck = isPathAllowed(path);

      if (level >= LEVEL_THRESHOLD && !isPathAllowedCheck) {
        return createDehydrated(type, true, data, cleaned, path);
      } else {
        const unserializableValue = {
          unserializable: true,
          type: type,
          readonly: true,
          size: type === 'typed_array' ? data.length : undefined,
          preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, false),
          preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, true),
          name: !data.constructor || data.constructor.name === 'Object' ? '' : data.constructor.name
        }; // TRICKY
        // Don't use [...spread] syntax for this purpose.
        // This project uses @babel/plugin-transform-spread in "loose" mode which only works with Array values.
        // Other types (e.g. typed arrays, Sets) will not spread correctly.

        Array.from(data).forEach((item, i) => unserializableValue[i] = dehydrate(item, cleaned, unserializable, path.concat([i]), isPathAllowed, isPathAllowedCheck ? 1 : level + 1));
        unserializable.push(path);
        return unserializableValue;
      }

    case 'opaque_iterator':
      cleaned.push(path);
      return {
        inspectable: false,
        preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, false),
        preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, true),
        name: data[Symbol.toStringTag],
        type
      };

    case 'date':
      cleaned.push(path);
      return {
        inspectable: false,
        preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, false),
        preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, true),
        name: data.toString(),
        type
      };

    case 'regexp':
      cleaned.push(path);
      return {
        inspectable: false,
        preview_short: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, false),
        preview_long: Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* formatDataForPreview */ "b"])(data, true),
        name: data.toString(),
        type
      };

    case 'object':
      isPathAllowedCheck = isPathAllowed(path);

      if (level >= LEVEL_THRESHOLD && !isPathAllowedCheck) {
        return createDehydrated(type, true, data, cleaned, path);
      } else {
        const object = {};
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getAllEnumerableKeys */ "c"])(data).forEach(key => {
          const name = key.toString();
          object[name] = dehydrate(data[key], cleaned, unserializable, path.concat([name]), isPathAllowed, isPathAllowedCheck ? 1 : level + 1);
        });
        return object;
      }

    case 'infinity':
    case 'nan':
    case 'undefined':
      // Some values are lossy when sent through a WebSocket.
      // We dehydrate+rehydrate them to preserve their type.
      cleaned.push(path);
      return {
        type
      };

    default:
      return data;
  }
}
function fillInPath(object, data, path, value) {
  const target = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getInObject */ "h"])(object, path);

  if (target != null) {
    if (!target[meta.unserializable]) {
      delete target[meta.inspectable];
      delete target[meta.inspected];
      delete target[meta.name];
      delete target[meta.preview_long];
      delete target[meta.preview_short];
      delete target[meta.readonly];
      delete target[meta.size];
      delete target[meta.type];
    }
  }

  if (value !== null && data.unserializable.length > 0) {
    const unserializablePath = data.unserializable[0];
    let isMatch = unserializablePath.length === path.length;

    for (let i = 0; i < path.length; i++) {
      if (path[i] !== unserializablePath[i]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) {
      upgradeUnserializable(value, value);
    }
  }

  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* setInObject */ "l"])(object, path, value);
}
function hydrate(object, cleaned, unserializable) {
  cleaned.forEach(path => {
    const length = path.length;
    const last = path[length - 1];
    const parent = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getInObject */ "h"])(object, path.slice(0, length - 1));

    if (!parent || !parent.hasOwnProperty(last)) {
      return;
    }

    const value = parent[last];

    if (!value) {
      return;
    } else if (value.type === 'infinity') {
      parent[last] = Infinity;
    } else if (value.type === 'nan') {
      parent[last] = NaN;
    } else if (value.type === 'undefined') {
      parent[last] = undefined;
    } else {
      // Replace the string keys with Symbols so they're non-enumerable.
      const replaced = {};
      replaced[meta.inspectable] = !!value.inspectable;
      replaced[meta.inspected] = false;
      replaced[meta.name] = value.name;
      replaced[meta.preview_long] = value.preview_long;
      replaced[meta.preview_short] = value.preview_short;
      replaced[meta.size] = value.size;
      replaced[meta.readonly] = !!value.readonly;
      replaced[meta.type] = value.type;
      parent[last] = replaced;
    }
  });
  unserializable.forEach(path => {
    const length = path.length;
    const last = path[length - 1];
    const parent = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getInObject */ "h"])(object, path.slice(0, length - 1));

    if (!parent || !parent.hasOwnProperty(last)) {
      return;
    }

    const node = parent[last];
    const replacement = { ...node
    };
    upgradeUnserializable(replacement, node);
    parent[last] = replacement;
  });
  return object;
}

function upgradeUnserializable(destination, source) {
  Object.defineProperties(destination, {
    [meta.inspected]: {
      configurable: true,
      enumerable: false,
      value: !!source.inspected
    },
    [meta.name]: {
      configurable: true,
      enumerable: false,
      value: source.name
    },
    [meta.preview_long]: {
      configurable: true,
      enumerable: false,
      value: source.preview_long
    },
    [meta.preview_short]: {
      configurable: true,
      enumerable: false,
      value: source.preview_short
    },
    [meta.size]: {
      configurable: true,
      enumerable: false,
      value: source.size
    },
    [meta.readonly]: {
      configurable: true,
      enumerable: false,
      value: !!source.readonly
    },
    [meta.type]: {
      configurable: true,
      enumerable: false,
      value: source.type
    },
    [meta.unserializable]: {
      configurable: true,
      enumerable: false,
      value: !!source.unserializable
    }
  });
  delete destination.inspected;
  delete destination.name;
  delete destination.preview_long;
  delete destination.preview_short;
  delete destination.size;
  delete destination.readonly;
  delete destination.type;
  delete destination.unserializable;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/* harmony default export */ __webpack_exports__["a"] = (isArray);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ registerRenderer; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ patch; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ unpatch; });

// UNUSED EXPORTS: isStringComponentStack, dangerous_setTargetConsoleForTesting

// EXTERNAL MODULE: ../react-devtools-shared/src/backend/renderer.js + 2 modules
var backend_renderer = __webpack_require__(14);

// EXTERNAL MODULE: ../react-devtools-shared/src/backend/ReactSymbols.js
var ReactSymbols = __webpack_require__(3);

// CONCATENATED MODULE: ../react-devtools-shared/src/backend/DevToolsConsolePatching.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// This is a DevTools fork of shared/ConsolePatchingDev.
// The shared console patching code is DEV-only.
// We can't use it since DevTools only ships production builds.
// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
let disabledDepth = 0;
let prevLog;
let prevInfo;
let prevWarn;
let prevError;
let prevGroup;
let prevGroupCollapsed;
let prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  if (disabledDepth === 0) {
    /* eslint-disable react-internal/no-production-logging */
    prevLog = console.log;
    prevInfo = console.info;
    prevWarn = console.warn;
    prevError = console.error;
    prevGroup = console.group;
    prevGroupCollapsed = console.groupCollapsed;
    prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

    const props = {
      configurable: true,
      enumerable: true,
      value: disabledLog,
      writable: true
    }; // $FlowFixMe Flow thinks console is immutable.

    Object.defineProperties(console, {
      info: props,
      log: props,
      warn: props,
      error: props,
      group: props,
      groupCollapsed: props,
      groupEnd: props
    });
    /* eslint-enable react-internal/no-production-logging */
  }

  disabledDepth++;
}
function reenableLogs() {
  disabledDepth--;

  if (disabledDepth === 0) {
    /* eslint-disable react-internal/no-production-logging */
    const props = {
      configurable: true,
      enumerable: true,
      writable: true
    }; // $FlowFixMe Flow thinks console is immutable.

    Object.defineProperties(console, {
      log: { ...props,
        value: prevLog
      },
      info: { ...props,
        value: prevInfo
      },
      warn: { ...props,
        value: prevWarn
      },
      error: { ...props,
        value: prevError
      },
      group: { ...props,
        value: prevGroup
      },
      groupCollapsed: { ...props,
        value: prevGroupCollapsed
      },
      groupEnd: { ...props,
        value: prevGroupEnd
      }
    });
    /* eslint-enable react-internal/no-production-logging */
  }

  if (disabledDepth < 0) {
    console.error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
  }
}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/DevToolsComponentStackFrame.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// This is a DevTools fork of ReactComponentStackFrame.
// This fork enables DevTools to use the same "native" component stack format,
// while still maintaining support for multiple renderer versions
// (which use different values for ReactTypeOfWork).
 // The shared console patching code is DEV-only.
// We can't use it since DevTools only ships production builds.


let prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  if (prefix === undefined) {
    // Extract the VM specific prefix used by each line.
    try {
      throw Error();
    } catch (x) {
      const match = x.stack.trim().match(/\n( *(at )?)/);
      prefix = match && match[1] || '';
    }
  } // We use the prefix to ensure our stacks line up with native stack frames.


  return '\n' + prefix + name;
}
let reentry = false;
let componentFrameCache;

if (true) {
  const PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct, currentDispatcherRef) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  if (true) {
    const frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  let control;
  const previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  reentry = true; // Override the dispatcher so effects scheduled by this shallow render are thrown away.
  //
  // Note that unlike the code this was forked from (in ReactComponentStackFrame)
  // DevTools should override the dispatcher even when DevTools is compiled in production mode,
  // because the app itself may be in development mode and log errors/warnings.

  const previousDispatcher = currentDispatcherRef.current;
  currentDispatcherRef.current = null;
  disableLogs();

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      const Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      const sampleLines = sample.stack.split('\n');
      const controlLines = control.stack.split('\n');
      let s = sampleLines.length - 1;
      let c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                const frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                if (true) {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, frame);
                  }
                } // Return the line we found.


                return frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;
    Error.prepareStackTrace = previousPrepareStackTrace;
    currentDispatcherRef.current = previousDispatcher;
    reenableLogs();
  } // Fallback to just using the name if we couldn't make it throw.


  const name = fn ? fn.displayName || fn.name : '';
  const syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  if (true) {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeClassComponentFrame(ctor, source, ownerFn, currentDispatcherRef) {
  return describeNativeComponentFrame(ctor, true, currentDispatcherRef);
}
function describeFunctionComponentFrame(fn, source, ownerFn, currentDispatcherRef) {
  return describeNativeComponentFrame(fn, false, currentDispatcherRef);
}

function shouldConstruct(Component) {
  const prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn, currentDispatcherRef) {
  if (false) {}

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    return describeNativeComponentFrame(type, shouldConstruct(type), currentDispatcherRef);
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type, source, ownerFn);
  }

  switch (type) {
    case ReactSymbols["v" /* SUSPENSE_NUMBER */]:
    case ReactSymbols["w" /* SUSPENSE_SYMBOL_STRING */]:
      return describeBuiltInComponentFrame('Suspense', source, ownerFn);

    case ReactSymbols["t" /* SUSPENSE_LIST_NUMBER */]:
    case ReactSymbols["u" /* SUSPENSE_LIST_SYMBOL_STRING */]:
      return describeBuiltInComponentFrame('SuspenseList', source, ownerFn);
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case ReactSymbols["f" /* FORWARD_REF_NUMBER */]:
      case ReactSymbols["g" /* FORWARD_REF_SYMBOL_STRING */]:
        return describeFunctionComponentFrame(type.render, source, ownerFn, currentDispatcherRef);

      case ReactSymbols["j" /* MEMO_NUMBER */]:
      case ReactSymbols["k" /* MEMO_SYMBOL_STRING */]:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn, currentDispatcherRef);

      case ReactSymbols["h" /* LAZY_NUMBER */]:
      case ReactSymbols["i" /* LAZY_SYMBOL_STRING */]:
        {
          const lazyComponent = type;
          const payload = lazyComponent._payload;
          const init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn, currentDispatcherRef);
          } catch (x) {}
        }
    }
  }

  return '';
}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/DevToolsFiberComponentStack.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// This is a DevTools fork of ReactFiberComponentStack.
// This fork enables DevTools to use the same "native" component stack format,
// while still maintaining support for multiple renderer versions
// (which use different values for ReactTypeOfWork).


function describeFiber(workTagMap, workInProgress, currentDispatcherRef) {
  const {
    HostComponent,
    LazyComponent,
    SuspenseComponent,
    SuspenseListComponent,
    FunctionComponent,
    IndeterminateComponent,
    SimpleMemoComponent,
    ForwardRef,
    ClassComponent
  } = workTagMap;
  const owner =  true ? workInProgress._debugOwner ? workInProgress._debugOwner.type : null : undefined;
  const source =  true ? workInProgress._debugSource : undefined;

  switch (workInProgress.tag) {
    case HostComponent:
      return describeBuiltInComponentFrame(workInProgress.type, source, owner);

    case LazyComponent:
      return describeBuiltInComponentFrame('Lazy', source, owner);

    case SuspenseComponent:
      return describeBuiltInComponentFrame('Suspense', source, owner);

    case SuspenseListComponent:
      return describeBuiltInComponentFrame('SuspenseList', source, owner);

    case FunctionComponent:
    case IndeterminateComponent:
    case SimpleMemoComponent:
      return describeFunctionComponentFrame(workInProgress.type, source, owner, currentDispatcherRef);

    case ForwardRef:
      return describeFunctionComponentFrame(workInProgress.type.render, source, owner, currentDispatcherRef);

    case ClassComponent:
      return describeClassComponentFrame(workInProgress.type, source, owner, currentDispatcherRef);

    default:
      return '';
  }
}

function getStackByFiberInDevAndProd(workTagMap, workInProgress, currentDispatcherRef) {
  try {
    let info = '';
    let node = workInProgress;

    do {
      info += describeFiber(workTagMap, node, currentDispatcherRef);
      node = node.return;
    } while (node);

    return info;
  } catch (x) {
    return '\nError generating stack: ' + x.message + '\n' + x.stack;
  }
}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/console.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


const APPEND_STACK_TO_METHODS = ['error', 'trace', 'warn']; // React's custom built component stack strings match "\s{4}in"
// Chrome's prefix matches "\s{4}at"

const PREFIX_REGEX = /\s{4}(in|at)\s{1}/; // Firefox and Safari have no prefix ("")
// but we can fallback to looking for location info (e.g. "foo.js:12:345")

const ROW_COLUMN_NUMBER_REGEX = /:\d+:\d+(\n|$)/;
function isStringComponentStack(text) {
  return PREFIX_REGEX.test(text) || ROW_COLUMN_NUMBER_REGEX.test(text);
}
const injectedRenderers = new Map();
let targetConsole = console;
let targetConsoleMethods = {};

for (const method in console) {
  targetConsoleMethods[method] = console[method];
}

let unpatchFn = null; // Enables e.g. Jest tests to inject a mock console object.

function dangerous_setTargetConsoleForTesting(targetConsoleForTesting) {
  targetConsole = targetConsoleForTesting;
  targetConsoleMethods = {};

  for (const method in targetConsole) {
    targetConsoleMethods[method] = console[method];
  }
} // v16 renderers should use this method to inject internals necessary to generate a component stack.
// These internals will be used if the console is patched.
// Injecting them separately allows the console to easily be patched or un-patched later (at runtime).

function registerRenderer(renderer, onErrorOrWarning) {
  const {
    currentDispatcherRef,
    getCurrentFiber,
    findFiberByHostInstance,
    version
  } = renderer; // Ignore React v15 and older because they don't expose a component stack anyway.

  if (typeof findFiberByHostInstance !== 'function') {
    return;
  } // currentDispatcherRef gets injected for v16.8+ to support hooks inspection.
  // getCurrentFiber gets injected for v16.9+.


  if (currentDispatcherRef != null && typeof getCurrentFiber === 'function') {
    const {
      ReactTypeOfWork
    } = Object(backend_renderer["b" /* getInternalReactConstants */])(version);
    injectedRenderers.set(renderer, {
      currentDispatcherRef,
      getCurrentFiber,
      workTagMap: ReactTypeOfWork,
      onErrorOrWarning
    });
  }
}
const consoleSettingsRef = {
  appendComponentStack: false,
  breakOnConsoleErrors: false,
  showInlineWarningsAndErrors: false
}; // Patches console methods to append component stack for the current fiber.
// Call unpatch() to remove the injected behavior.

function patch({
  appendComponentStack,
  breakOnConsoleErrors,
  showInlineWarningsAndErrors
}) {
  // Settings may change after we've patched the console.
  // Using a shared ref allows the patch function to read the latest values.
  consoleSettingsRef.appendComponentStack = appendComponentStack;
  consoleSettingsRef.breakOnConsoleErrors = breakOnConsoleErrors;
  consoleSettingsRef.showInlineWarningsAndErrors = showInlineWarningsAndErrors;

  if (unpatchFn !== null) {
    // Don't patch twice.
    return;
  }

  const originalConsoleMethods = {};

  unpatchFn = () => {
    for (const method in originalConsoleMethods) {
      try {
        // $FlowFixMe property error|warn is not writable.
        targetConsole[method] = originalConsoleMethods[method];
      } catch (error) {}
    }
  };

  APPEND_STACK_TO_METHODS.forEach(method => {
    try {
      const originalMethod = originalConsoleMethods[method] = targetConsole[method];

      const overrideMethod = (...args) => {
        let shouldAppendWarningStack = false;

        if (consoleSettingsRef.appendComponentStack) {
          const lastArg = args.length > 0 ? args[args.length - 1] : null;
          const alreadyHasComponentStack = typeof lastArg === 'string' && isStringComponentStack(lastArg); // If we are ever called with a string that already has a component stack,
          // e.g. a React error/warning, don't append a second stack.

          shouldAppendWarningStack = !alreadyHasComponentStack;
        }

        const shouldShowInlineWarningsAndErrors = consoleSettingsRef.showInlineWarningsAndErrors && (method === 'error' || method === 'warn');

        if (shouldAppendWarningStack || shouldShowInlineWarningsAndErrors) {
          // Search for the first renderer that has a current Fiber.
          // We don't handle the edge case of stacks for more than one (e.g. interleaved renderers?)
          // eslint-disable-next-line no-for-of-loops/no-for-of-loops
          for (const {
            currentDispatcherRef,
            getCurrentFiber,
            onErrorOrWarning,
            workTagMap
          } of injectedRenderers.values()) {
            const current = getCurrentFiber();

            if (current != null) {
              try {
                if (shouldShowInlineWarningsAndErrors) {
                  // patch() is called by two places: (1) the hook and (2) the renderer backend.
                  // The backend is what implements a message queue, so it's the only one that injects onErrorOrWarning.
                  if (typeof onErrorOrWarning === 'function') {
                    onErrorOrWarning(current, method, // Copy args before we mutate them (e.g. adding the component stack)
                    args.slice());
                  }
                }

                if (shouldAppendWarningStack) {
                  const componentStack = getStackByFiberInDevAndProd(workTagMap, current, currentDispatcherRef);

                  if (componentStack !== '') {
                    args.push(componentStack);
                  }
                }
              } catch (error) {// Don't let a DevTools or React internal error interfere with logging.
              } finally {
                break;
              }
            }
          }
        }

        if (consoleSettingsRef.breakOnConsoleErrors) {
          // --- Welcome to debugging with React DevTools ---
          // This debugger statement means that you've enabled the "break on warnings" feature.
          // Use the browser's Call Stack panel to step out of this override function-
          // to where the original warning or error was logged.
          // eslint-disable-next-line no-debugger
          debugger;
        }

        originalMethod(...args);
      };

      overrideMethod.__REACT_DEVTOOLS_ORIGINAL_METHOD__ = originalMethod;
      originalMethod.__REACT_DEVTOOLS_OVERRIDE_METHOD__ = overrideMethod; // $FlowFixMe property error|warn is not writable.

      targetConsole[method] = overrideMethod;
    } catch (error) {}
  });
} // Removed component stack patch from console methods.

function unpatch() {
  if (unpatchFn !== null) {
    unpatchFn();
    unpatchFn = null;
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {exports = module.exports = SemVer;
var debug;
/* istanbul ignore next */

if (typeof process === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG)) {
  debug = function () {
    var args = Array.prototype.slice.call(arguments, 0);
    args.unshift('SEMVER');
    console.log.apply(console, args);
  };
} else {
  debug = function () {};
} // Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.


exports.SEMVER_SPEC_VERSION = '2.0.0';
var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */
9007199254740991; // Max safe segment length for coercion.

var MAX_SAFE_COMPONENT_LENGTH = 16; // The actual regexps go on exports.re

var re = exports.re = [];
var src = exports.src = [];
var t = exports.tokens = {};
var R = 0;

function tok(n) {
  t[n] = R++;
} // The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.


tok('NUMERICIDENTIFIER');
src[t.NUMERICIDENTIFIER] = '0|[1-9]\\d*';
tok('NUMERICIDENTIFIERLOOSE');
src[t.NUMERICIDENTIFIERLOOSE] = '[0-9]+'; // ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

tok('NONNUMERICIDENTIFIER');
src[t.NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'; // ## Main Version
// Three dot-separated numeric identifiers.

tok('MAINVERSION');
src[t.MAINVERSION] = '(' + src[t.NUMERICIDENTIFIER] + ')\\.' + '(' + src[t.NUMERICIDENTIFIER] + ')\\.' + '(' + src[t.NUMERICIDENTIFIER] + ')';
tok('MAINVERSIONLOOSE');
src[t.MAINVERSIONLOOSE] = '(' + src[t.NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[t.NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[t.NUMERICIDENTIFIERLOOSE] + ')'; // ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

tok('PRERELEASEIDENTIFIER');
src[t.PRERELEASEIDENTIFIER] = '(?:' + src[t.NUMERICIDENTIFIER] + '|' + src[t.NONNUMERICIDENTIFIER] + ')';
tok('PRERELEASEIDENTIFIERLOOSE');
src[t.PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[t.NUMERICIDENTIFIERLOOSE] + '|' + src[t.NONNUMERICIDENTIFIER] + ')'; // ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

tok('PRERELEASE');
src[t.PRERELEASE] = '(?:-(' + src[t.PRERELEASEIDENTIFIER] + '(?:\\.' + src[t.PRERELEASEIDENTIFIER] + ')*))';
tok('PRERELEASELOOSE');
src[t.PRERELEASELOOSE] = '(?:-?(' + src[t.PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + src[t.PRERELEASEIDENTIFIERLOOSE] + ')*))'; // ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

tok('BUILDIDENTIFIER');
src[t.BUILDIDENTIFIER] = '[0-9A-Za-z-]+'; // ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

tok('BUILD');
src[t.BUILD] = '(?:\\+(' + src[t.BUILDIDENTIFIER] + '(?:\\.' + src[t.BUILDIDENTIFIER] + ')*))'; // ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

tok('FULL');
tok('FULLPLAIN');
src[t.FULLPLAIN] = 'v?' + src[t.MAINVERSION] + src[t.PRERELEASE] + '?' + src[t.BUILD] + '?';
src[t.FULL] = '^' + src[t.FULLPLAIN] + '$'; // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.

tok('LOOSEPLAIN');
src[t.LOOSEPLAIN] = '[v=\\s]*' + src[t.MAINVERSIONLOOSE] + src[t.PRERELEASELOOSE] + '?' + src[t.BUILD] + '?';
tok('LOOSE');
src[t.LOOSE] = '^' + src[t.LOOSEPLAIN] + '$';
tok('GTLT');
src[t.GTLT] = '((?:<|>)?=?)'; // Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.

tok('XRANGEIDENTIFIERLOOSE');
src[t.XRANGEIDENTIFIERLOOSE] = src[t.NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
tok('XRANGEIDENTIFIER');
src[t.XRANGEIDENTIFIER] = src[t.NUMERICIDENTIFIER] + '|x|X|\\*';
tok('XRANGEPLAIN');
src[t.XRANGEPLAIN] = '[v=\\s]*(' + src[t.XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[t.XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[t.XRANGEIDENTIFIER] + ')' + '(?:' + src[t.PRERELEASE] + ')?' + src[t.BUILD] + '?' + ')?)?';
tok('XRANGEPLAINLOOSE');
src[t.XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[t.XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[t.XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[t.XRANGEIDENTIFIERLOOSE] + ')' + '(?:' + src[t.PRERELEASELOOSE] + ')?' + src[t.BUILD] + '?' + ')?)?';
tok('XRANGE');
src[t.XRANGE] = '^' + src[t.GTLT] + '\\s*' + src[t.XRANGEPLAIN] + '$';
tok('XRANGELOOSE');
src[t.XRANGELOOSE] = '^' + src[t.GTLT] + '\\s*' + src[t.XRANGEPLAINLOOSE] + '$'; // Coercion.
// Extract anything that could conceivably be a part of a valid semver

tok('COERCE');
src[t.COERCE] = '(^|[^\\d])' + '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' + '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' + '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' + '(?:$|[^\\d])';
tok('COERCERTL');
re[t.COERCERTL] = new RegExp(src[t.COERCE], 'g'); // Tilde ranges.
// Meaning is "reasonably at or greater than"

tok('LONETILDE');
src[t.LONETILDE] = '(?:~>?)';
tok('TILDETRIM');
src[t.TILDETRIM] = '(\\s*)' + src[t.LONETILDE] + '\\s+';
re[t.TILDETRIM] = new RegExp(src[t.TILDETRIM], 'g');
var tildeTrimReplace = '$1~';
tok('TILDE');
src[t.TILDE] = '^' + src[t.LONETILDE] + src[t.XRANGEPLAIN] + '$';
tok('TILDELOOSE');
src[t.TILDELOOSE] = '^' + src[t.LONETILDE] + src[t.XRANGEPLAINLOOSE] + '$'; // Caret ranges.
// Meaning is "at least and backwards compatible with"

tok('LONECARET');
src[t.LONECARET] = '(?:\\^)';
tok('CARETTRIM');
src[t.CARETTRIM] = '(\\s*)' + src[t.LONECARET] + '\\s+';
re[t.CARETTRIM] = new RegExp(src[t.CARETTRIM], 'g');
var caretTrimReplace = '$1^';
tok('CARET');
src[t.CARET] = '^' + src[t.LONECARET] + src[t.XRANGEPLAIN] + '$';
tok('CARETLOOSE');
src[t.CARETLOOSE] = '^' + src[t.LONECARET] + src[t.XRANGEPLAINLOOSE] + '$'; // A simple gt/lt/eq thing, or just "" to indicate "any version"

tok('COMPARATORLOOSE');
src[t.COMPARATORLOOSE] = '^' + src[t.GTLT] + '\\s*(' + src[t.LOOSEPLAIN] + ')$|^$';
tok('COMPARATOR');
src[t.COMPARATOR] = '^' + src[t.GTLT] + '\\s*(' + src[t.FULLPLAIN] + ')$|^$'; // An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`

tok('COMPARATORTRIM');
src[t.COMPARATORTRIM] = '(\\s*)' + src[t.GTLT] + '\\s*(' + src[t.LOOSEPLAIN] + '|' + src[t.XRANGEPLAIN] + ')'; // this one has to use the /g flag

re[t.COMPARATORTRIM] = new RegExp(src[t.COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3'; // Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.

tok('HYPHENRANGE');
src[t.HYPHENRANGE] = '^\\s*(' + src[t.XRANGEPLAIN] + ')' + '\\s+-\\s+' + '(' + src[t.XRANGEPLAIN] + ')' + '\\s*$';
tok('HYPHENRANGELOOSE');
src[t.HYPHENRANGELOOSE] = '^\\s*(' + src[t.XRANGEPLAINLOOSE] + ')' + '\\s+-\\s+' + '(' + src[t.XRANGEPLAINLOOSE] + ')' + '\\s*$'; // Star ranges basically just allow anything at all.

tok('STAR');
src[t.STAR] = '(<|>)?=?\\s*\\*'; // Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.

for (var i = 0; i < R; i++) {
  debug(i, src[i]);

  if (!re[i]) {
    re[i] = new RegExp(src[i]);
  }
}

exports.parse = parse;

function parse(version, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    };
  }

  if (version instanceof SemVer) {
    return version;
  }

  if (typeof version !== 'string') {
    return null;
  }

  if (version.length > MAX_LENGTH) {
    return null;
  }

  var r = options.loose ? re[t.LOOSE] : re[t.FULL];

  if (!r.test(version)) {
    return null;
  }

  try {
    return new SemVer(version, options);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;

function valid(version, options) {
  var v = parse(version, options);
  return v ? v.version : null;
}

exports.clean = clean;

function clean(version, options) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), options);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    };
  }

  if (version instanceof SemVer) {
    if (version.loose === options.loose) {
      return version;
    } else {
      version = version.version;
    }
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH) {
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');
  }

  if (!(this instanceof SemVer)) {
    return new SemVer(version, options);
  }

  debug('SemVer', version, options);
  this.options = options;
  this.loose = !!options.loose;
  var m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);

  if (!m) {
    throw new TypeError('Invalid Version: ' + version);
  }

  this.raw = version; // these are actually numbers

  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
    throw new TypeError('Invalid major version');
  }

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
    throw new TypeError('Invalid minor version');
  }

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
    throw new TypeError('Invalid patch version');
  } // numberify any prerelease numeric ids


  if (!m[4]) {
    this.prerelease = [];
  } else {
    this.prerelease = m[4].split('.').map(function (id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id;

        if (num >= 0 && num < MAX_SAFE_INTEGER) {
          return num;
        }
      }

      return id;
    });
  }

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function () {
  this.version = this.major + '.' + this.minor + '.' + this.patch;

  if (this.prerelease.length) {
    this.version += '-' + this.prerelease.join('.');
  }

  return this.version;
};

SemVer.prototype.toString = function () {
  return this.version;
};

SemVer.prototype.compare = function (other) {
  debug('SemVer.compare', this.version, this.options, other);

  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options);
  }

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options);
  }

  return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options);
  } // NOT having a prerelease is > having one


  if (this.prerelease.length && !other.prerelease.length) {
    return -1;
  } else if (!this.prerelease.length && other.prerelease.length) {
    return 1;
  } else if (!this.prerelease.length && !other.prerelease.length) {
    return 0;
  }

  var i = 0;

  do {
    var a = this.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);

    if (a === undefined && b === undefined) {
      return 0;
    } else if (b === undefined) {
      return 1;
    } else if (a === undefined) {
      return -1;
    } else if (a === b) {
      continue;
    } else {
      return compareIdentifiers(a, b);
    }
  } while (++i);
};

SemVer.prototype.compareBuild = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options);
  }

  var i = 0;

  do {
    var a = this.build[i];
    var b = other.build[i];
    debug('prerelease compare', i, a, b);

    if (a === undefined && b === undefined) {
      return 0;
    } else if (b === undefined) {
      return 1;
    } else if (a === undefined) {
      return -1;
    } else if (a === b) {
      continue;
    } else {
      return compareIdentifiers(a, b);
    }
  } while (++i);
}; // preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.


SemVer.prototype.inc = function (release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;

    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;

    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.

    case 'prerelease':
      if (this.prerelease.length === 0) {
        this.inc('patch', identifier);
      }

      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
        this.major++;
      }

      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;

    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0) {
        this.minor++;
      }

      this.patch = 0;
      this.prerelease = [];
      break;

    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0) {
        this.patch++;
      }

      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.

    case 'pre':
      if (this.prerelease.length === 0) {
        this.prerelease = [0];
      } else {
        var i = this.prerelease.length;

        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++;
            i = -2;
          }
        }

        if (i === -1) {
          // didn't increment anything
          this.prerelease.push(0);
        }
      }

      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1])) {
            this.prerelease = [identifier, 0];
          }
        } else {
          this.prerelease = [identifier, 0];
        }
      }

      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }

  this.format();
  this.raw = this.version;
  return this;
};

exports.inc = inc;

function inc(version, release, loose, identifier) {
  if (typeof loose === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;

function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    var prefix = '';

    if (v1.prerelease.length || v2.prerelease.length) {
      prefix = 'pre';
      var defaultResult = 'prerelease';
    }

    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key;
        }
      }
    }

    return defaultResult; // may be undefined
  }
}

exports.compareIdentifiers = compareIdentifiers;
var numeric = /^[0-9]+$/;

function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
}

exports.rcompareIdentifiers = rcompareIdentifiers;

function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;

function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;

function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;

function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;

function compare(a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose));
}

exports.compareLoose = compareLoose;

function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.compareBuild = compareBuild;

function compareBuild(a, b, loose) {
  var versionA = new SemVer(a, loose);
  var versionB = new SemVer(b, loose);
  return versionA.compare(versionB) || versionA.compareBuild(versionB);
}

exports.rcompare = rcompare;

function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;

function sort(list, loose) {
  return list.sort(function (a, b) {
    return exports.compareBuild(a, b, loose);
  });
}

exports.rsort = rsort;

function rsort(list, loose) {
  return list.sort(function (a, b) {
    return exports.compareBuild(b, a, loose);
  });
}

exports.gt = gt;

function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;

function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;

function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;

function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;

function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;

function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;

function cmp(a, op, b, loose) {
  switch (op) {
    case '===':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      return a === b;

    case '!==':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      return a !== b;

    case '':
    case '=':
    case '==':
      return eq(a, b, loose);

    case '!=':
      return neq(a, b, loose);

    case '>':
      return gt(a, b, loose);

    case '>=':
      return gte(a, b, loose);

    case '<':
      return lt(a, b, loose);

    case '<=':
      return lte(a, b, loose);

    default:
      throw new TypeError('Invalid operator: ' + op);
  }
}

exports.Comparator = Comparator;

function Comparator(comp, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    };
  }

  if (comp instanceof Comparator) {
    if (comp.loose === !!options.loose) {
      return comp;
    } else {
      comp = comp.value;
    }
  }

  if (!(this instanceof Comparator)) {
    return new Comparator(comp, options);
  }

  debug('comparator', comp, options);
  this.options = options;
  this.loose = !!options.loose;
  this.parse(comp);

  if (this.semver === ANY) {
    this.value = '';
  } else {
    this.value = this.operator + this.semver.version;
  }

  debug('comp', this);
}

var ANY = {};

Comparator.prototype.parse = function (comp) {
  var r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
  var m = comp.match(r);

  if (!m) {
    throw new TypeError('Invalid comparator: ' + comp);
  }

  this.operator = m[1] !== undefined ? m[1] : '';

  if (this.operator === '=') {
    this.operator = '';
  } // if it literally is just '>' or '' then allow anything.


  if (!m[2]) {
    this.semver = ANY;
  } else {
    this.semver = new SemVer(m[2], this.options.loose);
  }
};

Comparator.prototype.toString = function () {
  return this.value;
};

Comparator.prototype.test = function (version) {
  debug('Comparator.test', version, this.options.loose);

  if (this.semver === ANY || version === ANY) {
    return true;
  }

  if (typeof version === 'string') {
    try {
      version = new SemVer(version, this.options);
    } catch (er) {
      return false;
    }
  }

  return cmp(version, this.operator, this.semver, this.options);
};

Comparator.prototype.intersects = function (comp, options) {
  if (!(comp instanceof Comparator)) {
    throw new TypeError('a Comparator is required');
  }

  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    };
  }

  var rangeTmp;

  if (this.operator === '') {
    if (this.value === '') {
      return true;
    }

    rangeTmp = new Range(comp.value, options);
    return satisfies(this.value, rangeTmp, options);
  } else if (comp.operator === '') {
    if (comp.value === '') {
      return true;
    }

    rangeTmp = new Range(this.value, options);
    return satisfies(comp.semver, rangeTmp, options);
  }

  var sameDirectionIncreasing = (this.operator === '>=' || this.operator === '>') && (comp.operator === '>=' || comp.operator === '>');
  var sameDirectionDecreasing = (this.operator === '<=' || this.operator === '<') && (comp.operator === '<=' || comp.operator === '<');
  var sameSemVer = this.semver.version === comp.semver.version;
  var differentDirectionsInclusive = (this.operator === '>=' || this.operator === '<=') && (comp.operator === '>=' || comp.operator === '<=');
  var oppositeDirectionsLessThan = cmp(this.semver, '<', comp.semver, options) && (this.operator === '>=' || this.operator === '>') && (comp.operator === '<=' || comp.operator === '<');
  var oppositeDirectionsGreaterThan = cmp(this.semver, '>', comp.semver, options) && (this.operator === '<=' || this.operator === '<') && (comp.operator === '>=' || comp.operator === '>');
  return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
};

exports.Range = Range;

function Range(range, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    };
  }

  if (range instanceof Range) {
    if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
      return range;
    } else {
      return new Range(range.raw, options);
    }
  }

  if (range instanceof Comparator) {
    return new Range(range.value, options);
  }

  if (!(this instanceof Range)) {
    return new Range(range, options);
  }

  this.options = options;
  this.loose = !!options.loose;
  this.includePrerelease = !!options.includePrerelease; // First, split based on boolean or ||

  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
    return this.parseRange(range.trim());
  }, this).filter(function (c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.format = function () {
  this.range = this.set.map(function (comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function () {
  return this.range;
};

Range.prototype.parseRange = function (range) {
  var loose = this.options.loose;
  range = range.trim(); // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`

  var hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range); // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`

  range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[t.COMPARATORTRIM]); // `~ 1.2.3` => `~1.2.3`

  range = range.replace(re[t.TILDETRIM], tildeTrimReplace); // `^ 1.2.3` => `^1.2.3`

  range = range.replace(re[t.CARETTRIM], caretTrimReplace); // normalize spaces

  range = range.split(/\s+/).join(' '); // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
  var set = range.split(' ').map(function (comp) {
    return parseComparator(comp, this.options);
  }, this).join(' ').split(/\s+/);

  if (this.options.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function (comp) {
      return !!comp.match(compRe);
    });
  }

  set = set.map(function (comp) {
    return new Comparator(comp, this.options);
  }, this);
  return set;
};

Range.prototype.intersects = function (range, options) {
  if (!(range instanceof Range)) {
    throw new TypeError('a Range is required');
  }

  return this.set.some(function (thisComparators) {
    return isSatisfiable(thisComparators, options) && range.set.some(function (rangeComparators) {
      return isSatisfiable(rangeComparators, options) && thisComparators.every(function (thisComparator) {
        return rangeComparators.every(function (rangeComparator) {
          return thisComparator.intersects(rangeComparator, options);
        });
      });
    });
  });
}; // take a set of comparators and determine whether there
// exists a version which can satisfy it


function isSatisfiable(comparators, options) {
  var result = true;
  var remainingComparators = comparators.slice();
  var testComparator = remainingComparators.pop();

  while (result && remainingComparators.length) {
    result = remainingComparators.every(function (otherComparator) {
      return testComparator.intersects(otherComparator, options);
    });
    testComparator = remainingComparators.pop();
  }

  return result;
} // Mostly just for testing and legacy API reasons


exports.toComparators = toComparators;

function toComparators(range, options) {
  return new Range(range, options).set.map(function (comp) {
    return comp.map(function (c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
} // comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.


function parseComparator(comp, options) {
  debug('comp', comp, options);
  comp = replaceCarets(comp, options);
  debug('caret', comp);
  comp = replaceTildes(comp, options);
  debug('tildes', comp);
  comp = replaceXRanges(comp, options);
  debug('xrange', comp);
  comp = replaceStars(comp, options);
  debug('stars', comp);
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
} // ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0


function replaceTildes(comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceTilde(comp, options);
  }).join(' ');
}

function replaceTilde(comp, options) {
  var r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M)) {
      ret = '';
    } else if (isX(m)) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    } else if (pr) {
      debug('replaceTilde pr', pr);
      ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + M + '.' + (+m + 1) + '.0';
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
    }

    debug('tilde return', ret);
    return ret;
  });
} // ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0


function replaceCarets(comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceCaret(comp, options);
  }).join(' ');
}

function replaceCaret(comp, options) {
  debug('caret', comp, options);
  var r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M)) {
      ret = '';
    } else if (isX(m)) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (isX(p)) {
      if (M === '0') {
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      } else {
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
      }
    } else if (pr) {
      debug('replaceCaret pr', pr);

      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + M + '.' + m + '.' + (+p + 1);
        } else {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + M + '.' + (+m + 1) + '.0';
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + (+M + 1) + '.0.0';
      }
    } else {
      debug('no pr');

      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + m + '.' + (+p + 1);
        } else {
          ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0';
      }
    }

    debug('caret return', ret);
    return ret;
  });
}

function replaceXRanges(comp, options) {
  debug('replaceXRanges', comp, options);
  return comp.split(/\s+/).map(function (comp) {
    return replaceXRange(comp, options);
  }).join(' ');
}

function replaceXRange(comp, options) {
  comp = comp.trim();
  var r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX) {
      gtlt = '';
    } // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value


    pr = options.includePrerelease ? '-0' : '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0;
      }

      p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';

        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';

        if (xm) {
          M = +M + 1;
        } else {
          m = +m + 1;
        }
      }

      ret = gtlt + M + '.' + m + '.' + p + pr;
    } else if (xm) {
      ret = '>=' + M + '.0.0' + pr + ' <' + (+M + 1) + '.0.0' + pr;
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0' + pr + ' <' + M + '.' + (+m + 1) + '.0' + pr;
    }

    debug('xRange return', ret);
    return ret;
  });
} // Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.


function replaceStars(comp, options) {
  debug('replaceStars', comp, options); // Looseness is ignored here.  star is always as loose as it gets!

  return comp.trim().replace(re[t.STAR], '');
} // This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0


function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
  if (isX(fM)) {
    from = '';
  } else if (isX(fm)) {
    from = '>=' + fM + '.0.0';
  } else if (isX(fp)) {
    from = '>=' + fM + '.' + fm + '.0';
  } else {
    from = '>=' + from;
  }

  if (isX(tM)) {
    to = '';
  } else if (isX(tm)) {
    to = '<' + (+tM + 1) + '.0.0';
  } else if (isX(tp)) {
    to = '<' + tM + '.' + (+tm + 1) + '.0';
  } else if (tpr) {
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
  } else {
    to = '<=' + to;
  }

  return (from + ' ' + to).trim();
} // if ANY of the sets match ALL of its comparators, then pass


Range.prototype.test = function (version) {
  if (!version) {
    return false;
  }

  if (typeof version === 'string') {
    try {
      version = new SemVer(version, this.options);
    } catch (er) {
      return false;
    }
  }

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version, this.options)) {
      return true;
    }
  }

  return false;
};

function testSet(set, version, options) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false;
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (i = 0; i < set.length; i++) {
      debug(set[i].semver);

      if (set[i].semver === ANY) {
        continue;
      }

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;

        if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
          return true;
        }
      }
    } // Version has a -pre, but it's not one of the ones we like.


    return false;
  }

  return true;
}

exports.satisfies = satisfies;

function satisfies(version, range, options) {
  try {
    range = new Range(range, options);
  } catch (er) {
    return false;
  }

  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;

function maxSatisfying(versions, range, options) {
  var max = null;
  var maxSV = null;

  try {
    var rangeObj = new Range(range, options);
  } catch (er) {
    return null;
  }

  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v;
        maxSV = new SemVer(max, options);
      }
    }
  });
  return max;
}

exports.minSatisfying = minSatisfying;

function minSatisfying(versions, range, options) {
  var min = null;
  var minSV = null;

  try {
    var rangeObj = new Range(range, options);
  } catch (er) {
    return null;
  }

  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v;
        minSV = new SemVer(min, options);
      }
    }
  });
  return min;
}

exports.minVersion = minVersion;

function minVersion(range, loose) {
  range = new Range(range, loose);
  var minver = new SemVer('0.0.0');

  if (range.test(minver)) {
    return minver;
  }

  minver = new SemVer('0.0.0-0');

  if (range.test(minver)) {
    return minver;
  }

  minver = null;

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];
    comparators.forEach(function (comparator) {
      // Clone to avoid manipulating the comparator's semver object.
      var compver = new SemVer(comparator.semver.version);

      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++;
          } else {
            compver.prerelease.push(0);
          }

          compver.raw = compver.format();

        /* fallthrough */

        case '':
        case '>=':
          if (!minver || gt(minver, compver)) {
            minver = compver;
          }

          break;

        case '<':
        case '<=':
          /* Ignore maximum versions */
          break;

        /* istanbul ignore next */

        default:
          throw new Error('Unexpected operation: ' + comparator.operator);
      }
    });
  }

  if (minver && range.test(minver)) {
    return minver;
  }

  return null;
}

exports.validRange = validRange;

function validRange(range, options) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*';
  } catch (er) {
    return null;
  }
} // Determine if version is less than all the versions possible in the range


exports.ltr = ltr;

function ltr(version, range, options) {
  return outside(version, range, '<', options);
} // Determine if version is greater than all the versions possible in the range.


exports.gtr = gtr;

function gtr(version, range, options) {
  return outside(version, range, '>', options);
}

exports.outside = outside;

function outside(version, range, hilo, options) {
  version = new SemVer(version, options);
  range = new Range(range, options);
  var gtfn, ltefn, ltfn, comp, ecomp;

  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;

    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;

    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  } // If it satisifes the range it is not outside


  if (satisfies(version, range, options)) {
    return false;
  } // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.


  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];
    var high = null;
    var low = null;
    comparators.forEach(function (comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0');
      }

      high = high || comparator;
      low = low || comparator;

      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator;
      }
    }); // If the edge version comparator has a operator then our version
    // isn't outside it

    if (high.operator === comp || high.operator === ecomp) {
      return false;
    } // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range


    if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }

  return true;
}

exports.prerelease = prerelease;

function prerelease(version, options) {
  var parsed = parse(version, options);
  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
}

exports.intersects = intersects;

function intersects(r1, r2, options) {
  r1 = new Range(r1, options);
  r2 = new Range(r2, options);
  return r1.intersects(r2);
}

exports.coerce = coerce;

function coerce(version, options) {
  if (version instanceof SemVer) {
    return version;
  }

  if (typeof version === 'number') {
    version = String(version);
  }

  if (typeof version !== 'string') {
    return null;
  }

  options = options || {};
  var match = null;

  if (!options.rtl) {
    match = version.match(re[t.COERCE]);
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    var next;

    while ((next = re[t.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)) {
      if (!match || next.index + next[0].length !== match.index + match[0].length) {
        match = next;
      }

      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
    } // leave it in a clean state


    re[t.COERCERTL].lastIndex = -1;
  }

  if (match === null) {
    return null;
  }

  return parse(match[2] + '.' + (match[3] || '0') + '.' + (match[4] || '0'), options);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(22)))

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventEmitter; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
class EventEmitter {
  constructor() {
    _defineProperty(this, "listenersMap", new Map());
  }

  addListener(event, listener) {
    const listeners = this.listenersMap.get(event);

    if (listeners === undefined) {
      this.listenersMap.set(event, [listener]);
    } else {
      const index = listeners.indexOf(listener);

      if (index < 0) {
        listeners.push(listener);
      }
    }
  }

  emit(event, ...args) {
    const listeners = this.listenersMap.get(event);

    if (listeners !== undefined) {
      if (listeners.length === 1) {
        // No need to clone or try/catch
        const listener = listeners[0];
        listener.apply(null, args);
      } else {
        let didThrow = false;
        let caughtError = null;
        const clonedListeners = Array.from(listeners);

        for (let i = 0; i < clonedListeners.length; i++) {
          const listener = clonedListeners[i];

          try {
            listener.apply(null, args);
          } catch (error) {
            if (caughtError === null) {
              didThrow = true;
              caughtError = error;
            }
          }
        }

        if (didThrow) {
          throw caughtError;
        }
      }
    }
  }

  removeAllListeners() {
    this.listenersMap.clear();
  }

  removeListener(event, listener) {
    const listeners = this.listenersMap.get(event);

    if (listeners !== undefined) {
      const index = listeners.indexOf(listener);

      if (index >= 0) {
        listeners.splice(index, 1);
      }
    }
  }

}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used for built-in method references. */

var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max,
    nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */

var now = function () {
  return root.Date.now();
};
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */


function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  wait = toNumber(wait) || 0;

  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // Start the timer for the trailing edge.

    timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;
    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // Restart the timer.


    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }

    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }

    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */


function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */


function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NAN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = throttle;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(21)))

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ getInternalReactConstants; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ attach; });

// EXTERNAL MODULE: ../react-devtools-shared/node_modules/semver/semver.js
var semver = __webpack_require__(11);

// EXTERNAL MODULE: ../react-devtools-shared/src/types.js
var types = __webpack_require__(0);

// EXTERNAL MODULE: ../react-devtools-shared/src/utils.js + 1 modules
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ../react-devtools-shared/src/storage.js
var storage = __webpack_require__(5);

// EXTERNAL MODULE: ../react-devtools-shared/src/backend/utils.js
var backend_utils = __webpack_require__(4);

// EXTERNAL MODULE: ../react-devtools-shared/src/constants.js
var constants = __webpack_require__(2);

// EXTERNAL MODULE: /home/marvin/Misc/projects/replay/react/build/node_modules/react-debug-tools/index.js
var react_debug_tools = __webpack_require__(19);

// EXTERNAL MODULE: ../react-devtools-shared/src/backend/console.js + 3 modules
var backend_console = __webpack_require__(10);

// EXTERNAL MODULE: ../react-devtools-shared/src/backend/ReactSymbols.js
var ReactSymbols = __webpack_require__(3);

// CONCATENATED MODULE: ../react-devtools-shared/src/config/DevToolsFeatureFlags.extension-oss.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/************************************************************************
 * This file is forked between different DevTools implementations.
 * It should never be imported directly!
 * It should always be imported from "react-devtools-feature-flags".
 ************************************************************************/
const enableProfilerChangedHookIndices = true;
const isInternalFacebookBuild = false;
/************************************************************************
 * Do not edit the code below.
 * It ensures this fork exports the same types as the default flags file.
 ************************************************************************/

// eslint-disable-next-line no-unused-expressions
null;
// CONCATENATED MODULE: ../shared/objectIs.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

const objectIs = typeof Object.is === 'function' ? Object.is : is;
/* harmony default export */ var shared_objectIs = (objectIs);
// EXTERNAL MODULE: ../shared/isArray.js
var isArray = __webpack_require__(9);

// CONCATENATED MODULE: ../react-devtools-shared/src/backend/renderer.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */














function getFiberFlags(fiber) {
  // The name of this field changed from "effectTag" to "flags"
  return fiber.flags !== undefined ? fiber.flags : fiber.effectTag;
} // Some environments (e.g. React Native / Hermes) don't support the performance API yet.


const getCurrentTime = typeof performance === 'object' && typeof performance.now === 'function' ? () => performance.now() : () => Date.now();
function getInternalReactConstants(version) {
  const ReactTypeOfSideEffect = {
    DidCapture: 0b10000000,
    NoFlags: 0b00,
    PerformedWork: 0b01,
    Placement: 0b10,
    Incomplete: 0b10000000000000
  }; // **********************************************************
  // The section below is copied from files in React repo.
  // Keep it in sync, and add version guards if it changes.
  //
  // Technically these priority levels are invalid for versions before 16.9,
  // but 16.9 is the first version to report priority level to DevTools,
  // so we can avoid checking for earlier versions and support pre-16.9 canary releases in the process.

  let ReactPriorityLevels = {
    ImmediatePriority: 99,
    UserBlockingPriority: 98,
    NormalPriority: 97,
    LowPriority: 96,
    IdlePriority: 95,
    NoPriority: 90
  };

  if (Object(semver["gt"])(version, '17.0.2')) {
    ReactPriorityLevels = {
      ImmediatePriority: 1,
      UserBlockingPriority: 2,
      NormalPriority: 3,
      LowPriority: 4,
      IdlePriority: 5,
      NoPriority: 0
    };
  }

  let ReactTypeOfWork = null; // **********************************************************
  // The section below is copied from files in React repo.
  // Keep it in sync, and add version guards if it changes.
  //
  // TODO Update the gt() check below to be gte() whichever the next version number is.
  // Currently the version in Git is 17.0.2 (but that version has not been/may not end up being released).

  if (Object(semver["gt"])(version, '17.0.1')) {
    ReactTypeOfWork = {
      CacheComponent: 24,
      // Experimental
      ClassComponent: 1,
      ContextConsumer: 9,
      ContextProvider: 10,
      CoroutineComponent: -1,
      // Removed
      CoroutineHandlerPhase: -1,
      // Removed
      DehydratedSuspenseComponent: 18,
      // Behind a flag
      ForwardRef: 11,
      Fragment: 7,
      FunctionComponent: 0,
      HostComponent: 5,
      HostPortal: 4,
      HostRoot: 3,
      HostText: 6,
      IncompleteClassComponent: 17,
      IndeterminateComponent: 2,
      LazyComponent: 16,
      LegacyHiddenComponent: 23,
      MemoComponent: 14,
      Mode: 8,
      OffscreenComponent: 22,
      // Experimental
      Profiler: 12,
      ScopeComponent: 21,
      // Experimental
      SimpleMemoComponent: 15,
      SuspenseComponent: 13,
      SuspenseListComponent: 19,
      // Experimental
      YieldComponent: -1 // Removed

    };
  } else if (Object(semver["gte"])(version, '17.0.0-alpha')) {
    ReactTypeOfWork = {
      CacheComponent: -1,
      // Doesn't exist yet
      ClassComponent: 1,
      ContextConsumer: 9,
      ContextProvider: 10,
      CoroutineComponent: -1,
      // Removed
      CoroutineHandlerPhase: -1,
      // Removed
      DehydratedSuspenseComponent: 18,
      // Behind a flag
      ForwardRef: 11,
      Fragment: 7,
      FunctionComponent: 0,
      HostComponent: 5,
      HostPortal: 4,
      HostRoot: 3,
      HostText: 6,
      IncompleteClassComponent: 17,
      IndeterminateComponent: 2,
      LazyComponent: 16,
      LegacyHiddenComponent: 24,
      MemoComponent: 14,
      Mode: 8,
      OffscreenComponent: 23,
      // Experimental
      Profiler: 12,
      ScopeComponent: 21,
      // Experimental
      SimpleMemoComponent: 15,
      SuspenseComponent: 13,
      SuspenseListComponent: 19,
      // Experimental
      YieldComponent: -1 // Removed

    };
  } else if (Object(semver["gte"])(version, '16.6.0-beta.0')) {
    ReactTypeOfWork = {
      CacheComponent: -1,
      // Doesn't exist yet
      ClassComponent: 1,
      ContextConsumer: 9,
      ContextProvider: 10,
      CoroutineComponent: -1,
      // Removed
      CoroutineHandlerPhase: -1,
      // Removed
      DehydratedSuspenseComponent: 18,
      // Behind a flag
      ForwardRef: 11,
      Fragment: 7,
      FunctionComponent: 0,
      HostComponent: 5,
      HostPortal: 4,
      HostRoot: 3,
      HostText: 6,
      IncompleteClassComponent: 17,
      IndeterminateComponent: 2,
      LazyComponent: 16,
      LegacyHiddenComponent: -1,
      MemoComponent: 14,
      Mode: 8,
      OffscreenComponent: -1,
      // Experimental
      Profiler: 12,
      ScopeComponent: -1,
      // Experimental
      SimpleMemoComponent: 15,
      SuspenseComponent: 13,
      SuspenseListComponent: 19,
      // Experimental
      YieldComponent: -1 // Removed

    };
  } else if (Object(semver["gte"])(version, '16.4.3-alpha')) {
    ReactTypeOfWork = {
      CacheComponent: -1,
      // Doesn't exist yet
      ClassComponent: 2,
      ContextConsumer: 11,
      ContextProvider: 12,
      CoroutineComponent: -1,
      // Removed
      CoroutineHandlerPhase: -1,
      // Removed
      DehydratedSuspenseComponent: -1,
      // Doesn't exist yet
      ForwardRef: 13,
      Fragment: 9,
      FunctionComponent: 0,
      HostComponent: 7,
      HostPortal: 6,
      HostRoot: 5,
      HostText: 8,
      IncompleteClassComponent: -1,
      // Doesn't exist yet
      IndeterminateComponent: 4,
      LazyComponent: -1,
      // Doesn't exist yet
      LegacyHiddenComponent: -1,
      MemoComponent: -1,
      // Doesn't exist yet
      Mode: 10,
      OffscreenComponent: -1,
      // Experimental
      Profiler: 15,
      ScopeComponent: -1,
      // Experimental
      SimpleMemoComponent: -1,
      // Doesn't exist yet
      SuspenseComponent: 16,
      SuspenseListComponent: -1,
      // Doesn't exist yet
      YieldComponent: -1 // Removed

    };
  } else {
    ReactTypeOfWork = {
      CacheComponent: -1,
      // Doesn't exist yet
      ClassComponent: 2,
      ContextConsumer: 12,
      ContextProvider: 13,
      CoroutineComponent: 7,
      CoroutineHandlerPhase: 8,
      DehydratedSuspenseComponent: -1,
      // Doesn't exist yet
      ForwardRef: 14,
      Fragment: 10,
      FunctionComponent: 1,
      HostComponent: 5,
      HostPortal: 4,
      HostRoot: 3,
      HostText: 6,
      IncompleteClassComponent: -1,
      // Doesn't exist yet
      IndeterminateComponent: 0,
      LazyComponent: -1,
      // Doesn't exist yet
      LegacyHiddenComponent: -1,
      MemoComponent: -1,
      // Doesn't exist yet
      Mode: 11,
      OffscreenComponent: -1,
      // Experimental
      Profiler: 15,
      ScopeComponent: -1,
      // Experimental
      SimpleMemoComponent: -1,
      // Doesn't exist yet
      SuspenseComponent: 16,
      SuspenseListComponent: -1,
      // Doesn't exist yet
      YieldComponent: 9
    };
  } // **********************************************************
  // End of copied code.
  // **********************************************************


  function getTypeSymbol(type) {
    const symbolOrNumber = typeof type === 'object' && type !== null ? type.$$typeof : type; // $FlowFixMe Flow doesn't know about typeof "symbol"

    return typeof symbolOrNumber === 'symbol' ? symbolOrNumber.toString() : symbolOrNumber;
  }

  const {
    CacheComponent,
    ClassComponent,
    IncompleteClassComponent,
    FunctionComponent,
    IndeterminateComponent,
    ForwardRef,
    HostRoot,
    HostComponent,
    HostPortal,
    HostText,
    Fragment,
    LazyComponent,
    LegacyHiddenComponent,
    MemoComponent,
    OffscreenComponent,
    Profiler,
    ScopeComponent,
    SimpleMemoComponent,
    SuspenseComponent,
    SuspenseListComponent
  } = ReactTypeOfWork;

  function resolveFiberType(type) {
    const typeSymbol = getTypeSymbol(type);

    switch (typeSymbol) {
      case ReactSymbols["j" /* MEMO_NUMBER */]:
      case ReactSymbols["k" /* MEMO_SYMBOL_STRING */]:
        // recursively resolving memo type in case of memo(forwardRef(Component))
        return resolveFiberType(type.type);

      case ReactSymbols["f" /* FORWARD_REF_NUMBER */]:
      case ReactSymbols["g" /* FORWARD_REF_SYMBOL_STRING */]:
        return type.render;

      default:
        return type;
    }
  } // NOTICE Keep in sync with shouldFilterFiber() and other get*ForFiber methods


  function getDisplayNameForFiber(fiber) {
    const {
      elementType,
      type,
      tag
    } = fiber;
    let resolvedType = type;

    if (typeof type === 'object' && type !== null) {
      resolvedType = resolveFiberType(type);
    }

    let resolvedContext = null;

    switch (tag) {
      case CacheComponent:
        return 'Cache';

      case ClassComponent:
      case IncompleteClassComponent:
        return Object(utils["f" /* getDisplayName */])(resolvedType);

      case FunctionComponent:
      case IndeterminateComponent:
        return Object(utils["f" /* getDisplayName */])(resolvedType);

      case ForwardRef:
        // Mirror https://github.com/facebook/react/blob/7c21bf72ace77094fd1910cc350a548287ef8350/packages/shared/getComponentName.js#L27-L37
        return type && type.displayName || Object(utils["f" /* getDisplayName */])(resolvedType, 'Anonymous');

      case HostRoot:
        return null;

      case HostComponent:
        return type;

      case HostPortal:
      case HostText:
      case Fragment:
        return null;

      case LazyComponent:
        // This display name will not be user visible.
        // Once a Lazy component loads its inner component, React replaces the tag and type.
        // This display name will only show up in console logs when DevTools DEBUG mode is on.
        return 'Lazy';

      case MemoComponent:
      case SimpleMemoComponent:
        return elementType && elementType.displayName || type && type.displayName || Object(utils["f" /* getDisplayName */])(resolvedType, 'Anonymous');

      case SuspenseComponent:
        return 'Suspense';

      case LegacyHiddenComponent:
        return 'LegacyHidden';

      case OffscreenComponent:
        return 'Offscreen';

      case ScopeComponent:
        return 'Scope';

      case SuspenseListComponent:
        return 'SuspenseList';

      case Profiler:
        return 'Profiler';

      default:
        const typeSymbol = getTypeSymbol(type);

        switch (typeSymbol) {
          case ReactSymbols["a" /* CONCURRENT_MODE_NUMBER */]:
          case ReactSymbols["b" /* CONCURRENT_MODE_SYMBOL_STRING */]:
          case ReactSymbols["e" /* DEPRECATED_ASYNC_MODE_SYMBOL_STRING */]:
            return null;

          case ReactSymbols["n" /* PROVIDER_NUMBER */]:
          case ReactSymbols["o" /* PROVIDER_SYMBOL_STRING */]:
            // 16.3.0 exposed the context object as "context"
            // PR #12501 changed it to "_context" for 16.3.1+
            // NOTE Keep in sync with inspectElementRaw()
            resolvedContext = fiber.type._context || fiber.type.context;
            return `${resolvedContext.displayName || 'Context'}.Provider`;

          case ReactSymbols["c" /* CONTEXT_NUMBER */]:
          case ReactSymbols["d" /* CONTEXT_SYMBOL_STRING */]:
            // 16.3-16.5 read from "type" because the Consumer is the actual context object.
            // 16.6+ should read from "type._context" because Consumer can be different (in DEV).
            // NOTE Keep in sync with inspectElementRaw()
            resolvedContext = fiber.type._context || fiber.type; // NOTE: TraceUpdatesBackendManager depends on the name ending in '.Consumer'
            // If you change the name, figure out a more resilient way to detect it.

            return `${resolvedContext.displayName || 'Context'}.Consumer`;

          case ReactSymbols["r" /* STRICT_MODE_NUMBER */]:
          case ReactSymbols["s" /* STRICT_MODE_SYMBOL_STRING */]:
            return null;

          case ReactSymbols["l" /* PROFILER_NUMBER */]:
          case ReactSymbols["m" /* PROFILER_SYMBOL_STRING */]:
            return `Profiler(${fiber.memoizedProps.id})`;

          case ReactSymbols["p" /* SCOPE_NUMBER */]:
          case ReactSymbols["q" /* SCOPE_SYMBOL_STRING */]:
            return 'Scope';

          default:
            // Unknown element type.
            // This may mean a new element type that has not yet been added to DevTools.
            return null;
        }

    }
  }

  return {
    getDisplayNameForFiber,
    getTypeSymbol,
    ReactPriorityLevels,
    ReactTypeOfWork,
    ReactTypeOfSideEffect
  };
}
function attach(hook, rendererID, renderer, global) {
  // Newer versions of the reconciler package also specific reconciler version.
  // If that version number is present, use it.
  // Third party renderer versions may not match the reconciler version,
  // and the latter is what's important in terms of tags and symbols.
  const version = renderer.reconcilerVersion || renderer.version;
  const {
    getDisplayNameForFiber,
    getTypeSymbol,
    ReactPriorityLevels,
    ReactTypeOfWork,
    ReactTypeOfSideEffect
  } = getInternalReactConstants(version);
  const {
    DidCapture,
    Incomplete,
    NoFlags,
    PerformedWork,
    Placement
  } = ReactTypeOfSideEffect;
  const {
    CacheComponent,
    ClassComponent,
    ContextConsumer,
    DehydratedSuspenseComponent,
    ForwardRef,
    Fragment,
    FunctionComponent,
    HostRoot,
    HostPortal,
    HostComponent,
    HostText,
    IncompleteClassComponent,
    IndeterminateComponent,
    LegacyHiddenComponent,
    MemoComponent,
    OffscreenComponent,
    SimpleMemoComponent,
    SuspenseComponent,
    SuspenseListComponent
  } = ReactTypeOfWork;
  const {
    ImmediatePriority,
    UserBlockingPriority,
    NormalPriority,
    LowPriority,
    IdlePriority,
    NoPriority
  } = ReactPriorityLevels;
  const {
    overrideHookState,
    overrideHookStateDeletePath,
    overrideHookStateRenamePath,
    overrideProps,
    overridePropsDeletePath,
    overridePropsRenamePath,
    scheduleRefresh,
    setErrorHandler,
    setSuspenseHandler,
    scheduleUpdate
  } = renderer;
  const supportsTogglingError = typeof setErrorHandler === 'function' && typeof scheduleUpdate === 'function';
  const supportsTogglingSuspense = typeof setSuspenseHandler === 'function' && typeof scheduleUpdate === 'function';

  if (typeof scheduleRefresh === 'function') {
    // When Fast Refresh updates a component, the frontend may need to purge cached information.
    // For example, ASTs cached for the component (for named hooks) may no longer be valid.
    // Send a signal to the frontend to purge this cached information.
    // The "fastRefreshScheduled" dispatched is global (not Fiber or even Renderer specific).
    // This is less effecient since it means the front-end will need to purge the entire cache,
    // but this is probably an okay trade off in order to reduce coupling between the DevTools and Fast Refresh.
    renderer.scheduleRefresh = (...args) => {
      try {
        hook.emit('fastRefreshScheduled');
      } finally {
        return scheduleRefresh(...args);
      }
    };
  } // Tracks Fibers with recently changed number of error/warning messages.
  // These collections store the Fiber rather than the ID,
  // in order to avoid generating an ID for Fibers that never get mounted
  // (due to e.g. Suspense or error boundaries).
  // onErrorOrWarning() adds Fibers and recordPendingErrorsAndWarnings() later clears them.


  const fibersWithChangedErrorOrWarningCounts = new Set();
  const pendingFiberToErrorsMap = new Map();
  const pendingFiberToWarningsMap = new Map(); // Mapping of fiber IDs to error/warning messages and counts.

  const fiberIDToErrorsMap = new Map();
  const fiberIDToWarningsMap = new Map();

  function clearErrorsAndWarnings() {
    // eslint-disable-next-line no-for-of-loops/no-for-of-loops
    for (const id of fiberIDToErrorsMap.keys()) {
      const fiber = idToArbitraryFiberMap.get(id);

      if (fiber != null) {
        fibersWithChangedErrorOrWarningCounts.add(fiber);
        updateMostRecentlyInspectedElementIfNecessary(id);
      }
    } // eslint-disable-next-line no-for-of-loops/no-for-of-loops


    for (const id of fiberIDToWarningsMap.keys()) {
      const fiber = idToArbitraryFiberMap.get(id);

      if (fiber != null) {
        fibersWithChangedErrorOrWarningCounts.add(fiber);
        updateMostRecentlyInspectedElementIfNecessary(id);
      }
    }

    fiberIDToErrorsMap.clear();
    fiberIDToWarningsMap.clear();
    flushPendingEvents();
  }

  function clearMessageCountHelper(fiberID, pendingFiberToMessageCountMap, fiberIDToMessageCountMap) {
    const fiber = idToArbitraryFiberMap.get(fiberID);

    if (fiber != null) {
      // Throw out any pending changes.
      pendingFiberToErrorsMap.delete(fiber);

      if (fiberIDToMessageCountMap.has(fiberID)) {
        fiberIDToMessageCountMap.delete(fiberID); // If previous flushed counts have changed, schedule an update too.

        fibersWithChangedErrorOrWarningCounts.add(fiber);
        flushPendingEvents();
        updateMostRecentlyInspectedElementIfNecessary(fiberID);
      } else {
        fibersWithChangedErrorOrWarningCounts.delete(fiber);
      }
    }
  }

  function clearErrorsForFiberID(fiberID) {
    clearMessageCountHelper(fiberID, pendingFiberToErrorsMap, fiberIDToErrorsMap);
  }

  function clearWarningsForFiberID(fiberID) {
    clearMessageCountHelper(fiberID, pendingFiberToWarningsMap, fiberIDToWarningsMap);
  }

  function updateMostRecentlyInspectedElementIfNecessary(fiberID) {
    if (mostRecentlyInspectedElement !== null && mostRecentlyInspectedElement.id === fiberID) {
      hasElementUpdatedSinceLastInspected = true;
    }
  } // Called when an error or warning is logged during render, commit, or passive (including unmount functions).


  function onErrorOrWarning(fiber, type, args) {
    if (type === 'error') {
      const maybeID = getFiberIDUnsafe(fiber); // if this is an error simulated by us to trigger error boundary, ignore

      if (maybeID != null && forceErrorForFiberIDs.get(maybeID) === true) {
        return;
      }
    }

    const message = Object(backend_utils["f" /* format */])(...args);

    if (constants["n" /* __DEBUG__ */]) {
      debug('onErrorOrWarning', fiber, null, `${type}: "${message}"`);
    } // Mark this Fiber as needed its warning/error count updated during the next flush.


    fibersWithChangedErrorOrWarningCounts.add(fiber); // Track the warning/error for later.

    const fiberMap = type === 'error' ? pendingFiberToErrorsMap : pendingFiberToWarningsMap;
    const messageMap = fiberMap.get(fiber);

    if (messageMap != null) {
      const count = messageMap.get(message) || 0;
      messageMap.set(message, count + 1);
    } else {
      fiberMap.set(fiber, new Map([[message, 1]]));
    } // Passive effects may trigger errors or warnings too;
    // In this case, we should wait until the rest of the passive effects have run,
    // but we shouldn't wait until the next commit because that might be a long time.
    // This would also cause "tearing" between an inspected Component and the tree view.
    // Then again we don't want to flush too soon because this could be an error during async rendering.
    // Use a debounce technique to ensure that we'll eventually flush.


    flushPendingErrorsAndWarningsAfterDelay();
  } // Patching the console enables DevTools to do a few useful things:
  // * Append component stacks to warnings and error messages
  // * Disable logging during re-renders to inspect hooks (see inspectHooksOfFiber)
  //
  // Don't patch in test environments because we don't want to interfere with Jest's own console overrides.


  if (true) {
    Object(backend_console["b" /* registerRenderer */])(renderer, onErrorOrWarning); // The renderer interface can't read these preferences directly,
    // because it is stored in localStorage within the context of the extension.
    // It relies on the extension to pass the preference through via the global.

    const appendComponentStack = window.__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__ !== false;
    const breakOnConsoleErrors = window.__REACT_DEVTOOLS_BREAK_ON_CONSOLE_ERRORS__ === true;
    const showInlineWarningsAndErrors = window.__REACT_DEVTOOLS_SHOW_INLINE_WARNINGS_AND_ERRORS__ !== false;

    if (appendComponentStack || breakOnConsoleErrors || showInlineWarningsAndErrors) {
      Object(backend_console["a" /* patch */])({
        appendComponentStack,
        breakOnConsoleErrors,
        showInlineWarningsAndErrors
      });
    }
  }

  const debug = (name, fiber, parentFiber, extraString = '') => {
    if (constants["n" /* __DEBUG__ */]) {
      const displayName = fiber.tag + ':' + (getDisplayNameForFiber(fiber) || 'null');
      const maybeID = getFiberIDUnsafe(fiber) || '<no id>';
      const parentDisplayName = parentFiber ? parentFiber.tag + ':' + (getDisplayNameForFiber(parentFiber) || 'null') : '';
      const maybeParentID = parentFiber ? getFiberIDUnsafe(parentFiber) || '<no-id>' : '';
      console.groupCollapsed(`[renderer] %c${name} %c${displayName} (${maybeID}) %c${parentFiber ? `${parentDisplayName} (${maybeParentID})` : ''} %c${extraString}`, 'color: red; font-weight: bold;', 'color: blue;', 'color: purple;', 'color: black;');
      console.log(new Error().stack.split('\n').slice(1).join('\n'));
      console.groupEnd();
    }
  }; // Configurable Components tree filters.


  const hideElementsWithDisplayNames = new Set();
  const hideElementsWithPaths = new Set();
  const hideElementsWithTypes = new Set(); // Highlight updates

  let traceUpdatesEnabled = false;
  const traceUpdatesForNodes = new Set();

  function applyComponentFilters(componentFilters) {
    hideElementsWithTypes.clear();
    hideElementsWithDisplayNames.clear();
    hideElementsWithPaths.clear();
    componentFilters.forEach(componentFilter => {
      if (!componentFilter.isEnabled) {
        return;
      }

      switch (componentFilter.type) {
        case types["a" /* ComponentFilterDisplayName */]:
          if (componentFilter.isValid && componentFilter.value !== '') {
            hideElementsWithDisplayNames.add(new RegExp(componentFilter.value, 'i'));
          }

          break;

        case types["b" /* ComponentFilterElementType */]:
          hideElementsWithTypes.add(componentFilter.value);
          break;

        case types["d" /* ComponentFilterLocation */]:
          if (componentFilter.isValid && componentFilter.value !== '') {
            hideElementsWithPaths.add(new RegExp(componentFilter.value, 'i'));
          }

          break;

        case types["c" /* ComponentFilterHOC */]:
          hideElementsWithDisplayNames.add(new RegExp('\\('));
          break;

        default:
          console.warn(`Invalid component filter type "${componentFilter.type}"`);
          break;
      }
    });
  } // The renderer interface can't read saved component filters directly,
  // because they are stored in localStorage within the context of the extension.
  // Instead it relies on the extension to pass filters through.


  if (window.__REACT_DEVTOOLS_COMPONENT_FILTERS__ != null) {
    applyComponentFilters(window.__REACT_DEVTOOLS_COMPONENT_FILTERS__);
  } else {
    // Unfortunately this feature is not expected to work for React Native for now.
    // It would be annoying for us to spam YellowBox warnings with unactionable stuff,
    // so for now just skip this message...
    //console.warn('⚛️ DevTools: Could not locate saved component filters');
    // Fallback to assuming the default filters in this case.
    applyComponentFilters(Object(utils["e" /* getDefaultComponentFilters */])());
  } // If necessary, we can revisit optimizing this operation.
  // For example, we could add a new recursive unmount tree operation.
  // The unmount operations are already significantly smaller than mount operations though.
  // This is something to keep in mind for later.


  function updateComponentFilters(componentFilters) {
    if (isProfiling) {
      // Re-mounting a tree while profiling is in progress might break a lot of assumptions.
      // If necessary, we could support this- but it doesn't seem like a necessary use case.
      throw Error('Cannot modify filter preferences while profiling');
    } // Recursively unmount all roots.


    hook.getFiberRoots(rendererID).forEach(root => {
      currentRootID = getOrGenerateFiberID(root.current); // The TREE_OPERATION_REMOVE_ROOT operation serves two purposes:
      // 1. It avoids sending unnecessary bridge traffic to clear a root.
      // 2. It preserves Fiber IDs when remounting (below) which in turn ID to error/warning mapping.

      pushOperation(constants["j" /* TREE_OPERATION_REMOVE_ROOT */]);
      flushPendingEvents(root);
      currentRootID = -1;
    });
    applyComponentFilters(componentFilters); // Reset pseudo counters so that new path selections will be persisted.

    rootDisplayNameCounter.clear(); // Recursively re-mount all roots with new filter criteria applied.

    hook.getFiberRoots(rendererID).forEach(root => {
      currentRootID = getOrGenerateFiberID(root.current);
      setRootPseudoKey(currentRootID, root.current);
      mountFiberRecursively(root.current, null, false, false);
      flushPendingEvents(root);
      currentRootID = -1;
    }); // Also re-evaluate all error and warning counts given the new filters.

    reevaluateErrorsAndWarnings();
    flushPendingEvents();
  } // NOTICE Keep in sync with get*ForFiber methods


  function shouldFilterFiber(fiber) {
    const {
      _debugSource,
      tag,
      type
    } = fiber;

    switch (tag) {
      case DehydratedSuspenseComponent:
        // TODO: ideally we would show dehydrated Suspense immediately.
        // However, it has some special behavior (like disconnecting
        // an alternate and turning into real Suspense) which breaks DevTools.
        // For now, ignore it, and only show it once it gets hydrated.
        // https://github.com/bvaughn/react-devtools-experimental/issues/197
        return true;

      case HostPortal:
      case HostText:
      case Fragment:
      case LegacyHiddenComponent:
      case OffscreenComponent:
        return true;

      case HostRoot:
        // It is never valid to filter the root element.
        return false;

      default:
        const typeSymbol = getTypeSymbol(type);

        switch (typeSymbol) {
          case ReactSymbols["a" /* CONCURRENT_MODE_NUMBER */]:
          case ReactSymbols["b" /* CONCURRENT_MODE_SYMBOL_STRING */]:
          case ReactSymbols["e" /* DEPRECATED_ASYNC_MODE_SYMBOL_STRING */]:
          case ReactSymbols["r" /* STRICT_MODE_NUMBER */]:
          case ReactSymbols["s" /* STRICT_MODE_SYMBOL_STRING */]:
            return true;

          default:
            break;
        }

    }

    const elementType = getElementTypeForFiber(fiber);

    if (hideElementsWithTypes.has(elementType)) {
      return true;
    }

    if (hideElementsWithDisplayNames.size > 0) {
      const displayName = getDisplayNameForFiber(fiber);

      if (displayName != null) {
        // eslint-disable-next-line no-for-of-loops/no-for-of-loops
        for (const displayNameRegExp of hideElementsWithDisplayNames) {
          if (displayNameRegExp.test(displayName)) {
            return true;
          }
        }
      }
    }

    if (_debugSource != null && hideElementsWithPaths.size > 0) {
      const {
        fileName
      } = _debugSource; // eslint-disable-next-line no-for-of-loops/no-for-of-loops

      for (const pathRegExp of hideElementsWithPaths) {
        if (pathRegExp.test(fileName)) {
          return true;
        }
      }
    }

    return false;
  } // NOTICE Keep in sync with shouldFilterFiber() and other get*ForFiber methods


  function getElementTypeForFiber(fiber) {
    const {
      type,
      tag
    } = fiber;

    switch (tag) {
      case ClassComponent:
      case IncompleteClassComponent:
        return types["e" /* ElementTypeClass */];

      case FunctionComponent:
      case IndeterminateComponent:
        return types["h" /* ElementTypeFunction */];

      case ForwardRef:
        return types["g" /* ElementTypeForwardRef */];

      case HostRoot:
        return types["m" /* ElementTypeRoot */];

      case HostComponent:
        return types["i" /* ElementTypeHostComponent */];

      case HostPortal:
      case HostText:
      case Fragment:
        return types["k" /* ElementTypeOtherOrUnknown */];

      case MemoComponent:
      case SimpleMemoComponent:
        return types["j" /* ElementTypeMemo */];

      case SuspenseComponent:
        return types["n" /* ElementTypeSuspense */];

      case SuspenseListComponent:
        return types["o" /* ElementTypeSuspenseList */];

      default:
        const typeSymbol = getTypeSymbol(type);

        switch (typeSymbol) {
          case ReactSymbols["a" /* CONCURRENT_MODE_NUMBER */]:
          case ReactSymbols["b" /* CONCURRENT_MODE_SYMBOL_STRING */]:
          case ReactSymbols["e" /* DEPRECATED_ASYNC_MODE_SYMBOL_STRING */]:
            return types["k" /* ElementTypeOtherOrUnknown */];

          case ReactSymbols["n" /* PROVIDER_NUMBER */]:
          case ReactSymbols["o" /* PROVIDER_SYMBOL_STRING */]:
            return types["f" /* ElementTypeContext */];

          case ReactSymbols["c" /* CONTEXT_NUMBER */]:
          case ReactSymbols["d" /* CONTEXT_SYMBOL_STRING */]:
            return types["f" /* ElementTypeContext */];

          case ReactSymbols["r" /* STRICT_MODE_NUMBER */]:
          case ReactSymbols["s" /* STRICT_MODE_SYMBOL_STRING */]:
            return types["k" /* ElementTypeOtherOrUnknown */];

          case ReactSymbols["l" /* PROFILER_NUMBER */]:
          case ReactSymbols["m" /* PROFILER_SYMBOL_STRING */]:
            return types["l" /* ElementTypeProfiler */];

          default:
            return types["k" /* ElementTypeOtherOrUnknown */];
        }

    }
  } // Map of one or more Fibers in a pair to their unique id number.
  // We track both Fibers to support Fast Refresh,
  // which may forcefully replace one of the pair as part of hot reloading.
  // In that case it's still important to be able to locate the previous ID during subsequent renders.


  const fiberToIDMap = new Map(); // Map of id to one (arbitrary) Fiber in a pair.
  // This Map is used to e.g. get the display name for a Fiber or schedule an update,
  // operations that should be the same whether the current and work-in-progress Fiber is used.

  const idToArbitraryFiberMap = new Map(); // When profiling is supported, we store the latest tree base durations for each Fiber.
  // This is so that we can quickly capture a snapshot of those values if profiling starts.
  // If we didn't store these values, we'd have to crawl the tree when profiling started,
  // and use a slow path to find each of the current Fibers.

  const idToTreeBaseDurationMap = new Map(); // When profiling is supported, we store the latest tree base durations for each Fiber.
  // This map enables us to filter these times by root when sending them to the frontend.

  const idToRootMap = new Map(); // When a mount or update is in progress, this value tracks the root that is being operated on.

  let currentRootID = -1; // Returns the unique ID for a Fiber or generates and caches a new one if the Fiber hasn't been seen before.
  // Once this method has been called for a Fiber, untrackFiberID() should always be called later to avoid leaking.

  function getOrGenerateFiberID(fiber) {
    let id = null;

    if (fiberToIDMap.has(fiber)) {
      id = fiberToIDMap.get(fiber);
    } else {
      const {
        alternate
      } = fiber;

      if (alternate !== null && fiberToIDMap.has(alternate)) {
        id = fiberToIDMap.get(alternate);
      }
    }

    let didGenerateID = false;

    if (id === null) {
      didGenerateID = true;
      id = Object(utils["i" /* getUID */])();
    } // This refinement is for Flow purposes only.


    const refinedID = id; // Make sure we're tracking this Fiber
    // e.g. if it just mounted or an error was logged during initial render.

    if (!fiberToIDMap.has(fiber)) {
      fiberToIDMap.set(fiber, refinedID);
      idToArbitraryFiberMap.set(refinedID, fiber);
    } // Also make sure we're tracking its alternate,
    // e.g. in case this is the first update after mount.


    const {
      alternate
    } = fiber;

    if (alternate !== null) {
      if (!fiberToIDMap.has(alternate)) {
        fiberToIDMap.set(alternate, refinedID);
      }
    }

    if (constants["n" /* __DEBUG__ */]) {
      if (didGenerateID) {
        debug('getOrGenerateFiberID()', fiber, fiber.return, 'Generated a new UID');
      }
    }

    return refinedID;
  } // Returns an ID if one has already been generated for the Fiber or throws.


  function getFiberIDThrows(fiber) {
    const maybeID = getFiberIDUnsafe(fiber);

    if (maybeID !== null) {
      return maybeID;
    }

    throw Error(`Could not find ID for Fiber "${getDisplayNameForFiber(fiber) || ''}"`);
  } // Returns an ID if one has already been generated for the Fiber or null if one has not been generated.
  // Use this method while e.g. logging to avoid over-retaining Fibers.


  function getFiberIDUnsafe(fiber) {
    if (fiberToIDMap.has(fiber)) {
      return fiberToIDMap.get(fiber);
    } else {
      const {
        alternate
      } = fiber;

      if (alternate !== null && fiberToIDMap.has(alternate)) {
        return fiberToIDMap.get(alternate);
      }
    }

    return null;
  } // Removes a Fiber (and its alternate) from the Maps used to track their id.
  // This method should always be called when a Fiber is unmounting.


  function untrackFiberID(fiber) {
    if (constants["n" /* __DEBUG__ */]) {
      debug('untrackFiberID()', fiber, fiber.return, 'schedule after delay');
    } // Untrack Fibers after a slight delay in order to support a Fast Refresh edge case:
    // 1. Component type is updated and Fast Refresh schedules an update+remount.
    // 2. flushPendingErrorsAndWarningsAfterDelay() runs, sees the old Fiber is no longer mounted
    //    (it's been disconnected by Fast Refresh), and calls untrackFiberID() to clear it from the Map.
    // 3. React flushes pending passive effects before it runs the next render,
    //    which logs an error or warning, which causes a new ID to be generated for this Fiber.
    // 4. DevTools now tries to unmount the old Component with the new ID.
    //
    // The underlying problem here is the premature clearing of the Fiber ID,
    // but DevTools has no way to detect that a given Fiber has been scheduled for Fast Refresh.
    // (The "_debugNeedsRemount" flag won't necessarily be set.)
    //
    // The best we can do is to delay untracking by a small amount,
    // and give React time to process the Fast Refresh delay.


    untrackFibersSet.add(fiber);

    if (untrackFibersTimeoutID === null) {
      untrackFibersTimeoutID = setTimeout(untrackFibers, 1000);
    }
  }

  const untrackFibersSet = new Set();
  let untrackFibersTimeoutID = null;

  function untrackFibers() {
    if (untrackFibersTimeoutID !== null) {
      clearTimeout(untrackFibersTimeoutID);
      untrackFibersTimeoutID = null;
    }

    untrackFibersSet.forEach(fiber => {
      const fiberID = getFiberIDUnsafe(fiber);

      if (fiberID !== null) {
        idToArbitraryFiberMap.delete(fiberID); // Also clear any errors/warnings associated with this fiber.

        clearErrorsForFiberID(fiberID);
        clearWarningsForFiberID(fiberID);
      }

      fiberToIDMap.delete(fiber);
      const {
        alternate
      } = fiber;

      if (alternate !== null) {
        fiberToIDMap.delete(alternate);
      }

      if (forceErrorForFiberIDs.has(fiberID)) {
        forceErrorForFiberIDs.delete(fiberID);

        if (forceErrorForFiberIDs.size === 0 && setErrorHandler != null) {
          setErrorHandler(shouldErrorFiberAlwaysNull);
        }
      }
    });
    untrackFibersSet.clear();
  }

  function getChangeDescription(prevFiber, nextFiber) {
    switch (getElementTypeForFiber(nextFiber)) {
      case types["e" /* ElementTypeClass */]:
      case types["h" /* ElementTypeFunction */]:
      case types["j" /* ElementTypeMemo */]:
      case types["g" /* ElementTypeForwardRef */]:
        if (prevFiber === null) {
          return {
            context: null,
            didHooksChange: false,
            isFirstMount: true,
            props: null,
            state: null
          };
        } else {
          const data = {
            context: getContextChangedKeys(nextFiber),
            didHooksChange: false,
            isFirstMount: false,
            props: getChangedKeys(prevFiber.memoizedProps, nextFiber.memoizedProps),
            state: getChangedKeys(prevFiber.memoizedState, nextFiber.memoizedState)
          }; // Only traverse the hooks list once, depending on what info we're returning.

          if (enableProfilerChangedHookIndices) {
            const indices = getChangedHooksIndices(prevFiber.memoizedState, nextFiber.memoizedState);
            data.hooks = indices;
            data.didHooksChange = indices !== null && indices.length > 0;
          } else {
            data.didHooksChange = didHooksChange(prevFiber.memoizedState, nextFiber.memoizedState);
          }

          return data;
        }

      default:
        return null;
    }
  }

  function updateContextsForFiber(fiber) {
    switch (getElementTypeForFiber(fiber)) {
      case types["h" /* ElementTypeFunction */]:
      case types["e" /* ElementTypeClass */]:
        if (idToContextsMap !== null) {
          const id = getFiberIDThrows(fiber);
          const contexts = getContextsForFiber(fiber);

          if (contexts !== null) {
            idToContextsMap.set(id, contexts);
          }
        }

        break;

      default:
        break;
    }
  } // Differentiates between a null context value and no context.


  const NO_CONTEXT = {};

  function getContextsForFiber(fiber) {
    let legacyContext = NO_CONTEXT;
    let modernContext = NO_CONTEXT;

    switch (getElementTypeForFiber(fiber)) {
      case types["e" /* ElementTypeClass */]:
        const instance = fiber.stateNode;

        if (instance != null) {
          if (instance.constructor && instance.constructor.contextType != null) {
            modernContext = instance.context;
          } else {
            legacyContext = instance.context;

            if (legacyContext && Object.keys(legacyContext).length === 0) {
              legacyContext = NO_CONTEXT;
            }
          }
        }

        return [legacyContext, modernContext];

      case types["h" /* ElementTypeFunction */]:
        const dependencies = fiber.dependencies;

        if (dependencies && dependencies.firstContext) {
          modernContext = dependencies.firstContext;
        }

        return [legacyContext, modernContext];

      default:
        return null;
    }
  } // Record all contexts at the time profiling is started.
  // Fibers only store the current context value,
  // so we need to track them separately in order to determine changed keys.


  function crawlToInitializeContextsMap(fiber) {
    updateContextsForFiber(fiber);
    let current = fiber.child;

    while (current !== null) {
      crawlToInitializeContextsMap(current);
      current = current.sibling;
    }
  }

  function getContextChangedKeys(fiber) {
    if (idToContextsMap !== null) {
      const id = getFiberIDThrows(fiber);
      const prevContexts = idToContextsMap.has(id) ? idToContextsMap.get(id) : null;
      const nextContexts = getContextsForFiber(fiber);

      if (prevContexts == null || nextContexts == null) {
        return null;
      }

      const [prevLegacyContext, prevModernContext] = prevContexts;
      const [nextLegacyContext, nextModernContext] = nextContexts;

      switch (getElementTypeForFiber(fiber)) {
        case types["e" /* ElementTypeClass */]:
          if (prevContexts && nextContexts) {
            if (nextLegacyContext !== NO_CONTEXT) {
              return getChangedKeys(prevLegacyContext, nextLegacyContext);
            } else if (nextModernContext !== NO_CONTEXT) {
              return prevModernContext !== nextModernContext;
            }
          }

          break;

        case types["h" /* ElementTypeFunction */]:
          if (nextModernContext !== NO_CONTEXT) {
            let prevContext = prevModernContext;
            let nextContext = nextModernContext;

            while (prevContext && nextContext) {
              if (!shared_objectIs(prevContext.memoizedValue, nextContext.memoizedValue)) {
                return true;
              }

              prevContext = prevContext.next;
              nextContext = nextContext.next;
            }

            return false;
          }

          break;

        default:
          break;
      }
    }

    return null;
  }

  function areHookInputsEqual(nextDeps, prevDeps) {
    if (prevDeps === null) {
      return false;
    }

    for (let i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
      if (shared_objectIs(nextDeps[i], prevDeps[i])) {
        continue;
      }

      return false;
    }

    return true;
  }

  function isEffect(memoizedState) {
    if (memoizedState === null || typeof memoizedState !== 'object') {
      return false;
    }

    const {
      deps
    } = memoizedState;
    const hasOwnProperty = Object.prototype.hasOwnProperty.bind(memoizedState);
    return hasOwnProperty('create') && hasOwnProperty('destroy') && hasOwnProperty('deps') && hasOwnProperty('next') && hasOwnProperty('tag') && (deps === null || Object(isArray["a" /* default */])(deps));
  }

  function didHookChange(prev, next) {
    const prevMemoizedState = prev.memoizedState;
    const nextMemoizedState = next.memoizedState;

    if (isEffect(prevMemoizedState) && isEffect(nextMemoizedState)) {
      return prevMemoizedState !== nextMemoizedState && !areHookInputsEqual(nextMemoizedState.deps, prevMemoizedState.deps);
    }

    return nextMemoizedState !== prevMemoizedState;
  }

  function didHooksChange(prev, next) {
    if (prev == null || next == null) {
      return false;
    } // We can't report anything meaningful for hooks changes.


    if (next.hasOwnProperty('baseState') && next.hasOwnProperty('memoizedState') && next.hasOwnProperty('next') && next.hasOwnProperty('queue')) {
      while (next !== null) {
        if (didHookChange(prev, next)) {
          return true;
        } else {
          next = next.next;
          prev = prev.next;
        }
      }
    }

    return false;
  }

  function getChangedHooksIndices(prev, next) {
    if (enableProfilerChangedHookIndices) {
      if (prev == null || next == null) {
        return null;
      }

      const indices = [];
      let index = 0;

      if (next.hasOwnProperty('baseState') && next.hasOwnProperty('memoizedState') && next.hasOwnProperty('next') && next.hasOwnProperty('queue')) {
        while (next !== null) {
          if (didHookChange(prev, next)) {
            indices.push(index);
          }

          next = next.next;
          prev = prev.next;
          index++;
        }
      }

      return indices;
    }

    return null;
  }

  function getChangedKeys(prev, next) {
    if (prev == null || next == null) {
      return null;
    } // We can't report anything meaningful for hooks changes.


    if (next.hasOwnProperty('baseState') && next.hasOwnProperty('memoizedState') && next.hasOwnProperty('next') && next.hasOwnProperty('queue')) {
      return null;
    }

    const keys = new Set([...Object.keys(prev), ...Object.keys(next)]);
    const changedKeys = []; // eslint-disable-next-line no-for-of-loops/no-for-of-loops

    for (const key of keys) {
      if (prev[key] !== next[key]) {
        changedKeys.push(key);
      }
    }

    return changedKeys;
  } // eslint-disable-next-line no-unused-vars


  function didFiberRender(prevFiber, nextFiber) {
    switch (nextFiber.tag) {
      case ClassComponent:
      case FunctionComponent:
      case ContextConsumer:
      case MemoComponent:
      case SimpleMemoComponent:
        // For types that execute user code, we check PerformedWork effect.
        // We don't reflect bailouts (either referential or sCU) in DevTools.
        // eslint-disable-next-line no-bitwise
        return (getFiberFlags(nextFiber) & PerformedWork) === PerformedWork;
      // Note: ContextConsumer only gets PerformedWork effect in 16.3.3+
      // so it won't get highlighted with React 16.3.0 to 16.3.2.

      default:
        // For host components and other types, we compare inputs
        // to determine whether something is an update.
        return prevFiber.memoizedProps !== nextFiber.memoizedProps || prevFiber.memoizedState !== nextFiber.memoizedState || prevFiber.ref !== nextFiber.ref;
    }
  }

  const pendingOperations = [];
  const pendingRealUnmountedIDs = [];
  const pendingSimulatedUnmountedIDs = [];
  let pendingOperationsQueue = [];
  const pendingStringTable = new Map();
  let pendingStringTableLength = 0;
  let pendingUnmountedRootID = null;

  function pushOperation(op) {
    if (true) {
      if (!Number.isInteger(op)) {
        console.error('pushOperation() was called but the value is not an integer.', op);
      }
    }

    pendingOperations.push(op);
  }

  function flushOrQueueOperations(operations) {
    if (pendingOperationsQueue !== null) {
      pendingOperationsQueue.push(operations);
    } else {
      hook.emit('operations', operations);
    }
  }

  let flushPendingErrorsAndWarningsAfterDelayTimeoutID = null;

  function clearPendingErrorsAndWarningsAfterDelay() {
    if (flushPendingErrorsAndWarningsAfterDelayTimeoutID !== null) {
      clearTimeout(flushPendingErrorsAndWarningsAfterDelayTimeoutID);
      flushPendingErrorsAndWarningsAfterDelayTimeoutID = null;
    }
  }

  function flushPendingErrorsAndWarningsAfterDelay() {
    clearPendingErrorsAndWarningsAfterDelay();
    flushPendingErrorsAndWarningsAfterDelayTimeoutID = setTimeout(() => {
      flushPendingErrorsAndWarningsAfterDelayTimeoutID = null;

      if (pendingOperations.length > 0) {
        // On the off chance that something else has pushed pending operations,
        // we should bail on warnings; it's probably not safe to push midway.
        return;
      }

      recordPendingErrorsAndWarnings();

      if (pendingOperations.length === 0) {
        // No warnings or errors to flush; we can bail out early here too.
        return;
      } // We can create a smaller operations array than flushPendingEvents()
      // because we only need to flush warning and error counts.
      // Only a few pieces of fixed information are required up front.


      const operations = new Array(3 + pendingOperations.length);
      operations[0] = rendererID;
      operations[1] = currentRootID;
      operations[2] = 0; // String table size

      for (let j = 0; j < pendingOperations.length; j++) {
        operations[3 + j] = pendingOperations[j];
      }

      flushOrQueueOperations(operations);
      pendingOperations.length = 0;
    }, 1000);
  }

  function reevaluateErrorsAndWarnings() {
    fibersWithChangedErrorOrWarningCounts.clear();
    fiberIDToErrorsMap.forEach((countMap, fiberID) => {
      const fiber = idToArbitraryFiberMap.get(fiberID);

      if (fiber != null) {
        fibersWithChangedErrorOrWarningCounts.add(fiber);
      }
    });
    fiberIDToWarningsMap.forEach((countMap, fiberID) => {
      const fiber = idToArbitraryFiberMap.get(fiberID);

      if (fiber != null) {
        fibersWithChangedErrorOrWarningCounts.add(fiber);
      }
    });
    recordPendingErrorsAndWarnings();
  }

  function mergeMapsAndGetCountHelper(fiber, fiberID, pendingFiberToMessageCountMap, fiberIDToMessageCountMap) {
    let newCount = 0;
    let messageCountMap = fiberIDToMessageCountMap.get(fiberID);
    const pendingMessageCountMap = pendingFiberToMessageCountMap.get(fiber);

    if (pendingMessageCountMap != null) {
      if (messageCountMap == null) {
        messageCountMap = pendingMessageCountMap;
        fiberIDToMessageCountMap.set(fiberID, pendingMessageCountMap);
      } else {
        // This Flow refinement should not be necessary and yet...
        const refinedMessageCountMap = messageCountMap;
        pendingMessageCountMap.forEach((pendingCount, message) => {
          const previousCount = refinedMessageCountMap.get(message) || 0;
          refinedMessageCountMap.set(message, previousCount + pendingCount);
        });
      }
    }

    if (!shouldFilterFiber(fiber)) {
      if (messageCountMap != null) {
        messageCountMap.forEach(count => {
          newCount += count;
        });
      }
    }

    pendingFiberToMessageCountMap.delete(fiber);
    return newCount;
  }

  function recordPendingErrorsAndWarnings() {
    clearPendingErrorsAndWarningsAfterDelay();
    fibersWithChangedErrorOrWarningCounts.forEach(fiber => {
      const fiberID = getFiberIDUnsafe(fiber);

      if (fiberID === null) {// Don't send updates for Fibers that didn't mount due to e.g. Suspense or an error boundary.
      } else {
        const errorCount = mergeMapsAndGetCountHelper(fiber, fiberID, pendingFiberToErrorsMap, fiberIDToErrorsMap);
        const warningCount = mergeMapsAndGetCountHelper(fiber, fiberID, pendingFiberToWarningsMap, fiberIDToWarningsMap);
        pushOperation(constants["l" /* TREE_OPERATION_UPDATE_ERRORS_OR_WARNINGS */]);
        pushOperation(fiberID);
        pushOperation(errorCount);
        pushOperation(warningCount);
      } // Always clean up so that we don't leak.


      pendingFiberToErrorsMap.delete(fiber);
      pendingFiberToWarningsMap.delete(fiber);
    });
    fibersWithChangedErrorOrWarningCounts.clear();
  }

  function flushPendingEvents(root) {
    // Add any pending errors and warnings to the operations array.
    // We do this just before flushing, so we can ignore errors for no-longer-mounted Fibers.
    recordPendingErrorsAndWarnings();

    if (pendingOperations.length === 0 && pendingRealUnmountedIDs.length === 0 && pendingSimulatedUnmountedIDs.length === 0 && pendingUnmountedRootID === null) {
      // If we aren't profiling, we can just bail out here.
      // No use sending an empty update over the bridge.
      //
      // The Profiler stores metadata for each commit and reconstructs the app tree per commit using:
      // (1) an initial tree snapshot and
      // (2) the operations array for each commit
      // Because of this, it's important that the operations and metadata arrays align,
      // So it's important not to omit even empty operations while profiling is active.
      if (!isProfiling) {
        return;
      }
    }

    const numUnmountIDs = pendingRealUnmountedIDs.length + pendingSimulatedUnmountedIDs.length + (pendingUnmountedRootID === null ? 0 : 1);
    const operations = new Array( // Identify which renderer this update is coming from.
    2 + // [rendererID, rootFiberID]
    // How big is the string table?
    1 + // [stringTableLength]
    // Then goes the actual string table.
    pendingStringTableLength + ( // All unmounts are batched in a single message.
    // [TREE_OPERATION_REMOVE, removedIDLength, ...ids]
    numUnmountIDs > 0 ? 2 + numUnmountIDs : 0) + // Regular operations
    pendingOperations.length); // Identify which renderer this update is coming from.
    // This enables roots to be mapped to renderers,
    // Which in turn enables fiber props, states, and hooks to be inspected.

    let i = 0;
    operations[i++] = rendererID;
    operations[i++] = currentRootID; // Now fill in the string table.
    // [stringTableLength, str1Length, ...str1, str2Length, ...str2, ...]

    operations[i++] = pendingStringTableLength;
    pendingStringTable.forEach((value, key) => {
      operations[i++] = key.length;
      const encodedKey = Object(utils["m" /* utfEncodeString */])(key);

      for (let j = 0; j < encodedKey.length; j++) {
        operations[i + j] = encodedKey[j];
      }

      i += key.length;
    });

    if (numUnmountIDs > 0) {
      // All unmounts except roots are batched in a single message.
      operations[i++] = constants["i" /* TREE_OPERATION_REMOVE */]; // The first number is how many unmounted IDs we're gonna send.

      operations[i++] = numUnmountIDs; // Fill in the real unmounts in the reverse order.
      // They were inserted parents-first by React, but we want children-first.
      // So we traverse our array backwards.

      for (let j = pendingRealUnmountedIDs.length - 1; j >= 0; j--) {
        operations[i++] = pendingRealUnmountedIDs[j];
      } // Fill in the simulated unmounts (hidden Suspense subtrees) in their order.
      // (We want children to go before parents.)
      // They go *after* the real unmounts because we know for sure they won't be
      // children of already pushed "real" IDs. If they were, we wouldn't be able
      // to discover them during the traversal, as they would have been deleted.


      for (let j = 0; j < pendingSimulatedUnmountedIDs.length; j++) {
        operations[i + j] = pendingSimulatedUnmountedIDs[j];
      }

      i += pendingSimulatedUnmountedIDs.length; // The root ID should always be unmounted last.

      if (pendingUnmountedRootID !== null) {
        operations[i] = pendingUnmountedRootID;
        i++;
      }
    } // Fill in the rest of the operations.


    for (let j = 0; j < pendingOperations.length; j++) {
      operations[i + j] = pendingOperations[j];
    }

    i += pendingOperations.length; // Let the frontend know about tree operations.

    flushOrQueueOperations(operations); // Reset all of the pending state now that we've told the frontend about it.

    pendingOperations.length = 0;
    pendingRealUnmountedIDs.length = 0;
    pendingSimulatedUnmountedIDs.length = 0;
    pendingUnmountedRootID = null;
    pendingStringTable.clear();
    pendingStringTableLength = 0;
  }

  function getStringID(str) {
    if (str === null) {
      return 0;
    }

    const existingID = pendingStringTable.get(str);

    if (existingID !== undefined) {
      return existingID;
    }

    const stringID = pendingStringTable.size + 1;
    pendingStringTable.set(str, stringID); // The string table total length needs to account
    // both for the string length, and for the array item
    // that contains the length itself. Hence + 1.

    pendingStringTableLength += str.length + 1;
    return stringID;
  }

  function recordMount(fiber, parentFiber) {
    const isRoot = fiber.tag === HostRoot;
    const id = getOrGenerateFiberID(fiber);

    if (constants["n" /* __DEBUG__ */]) {
      debug('recordMount()', fiber, parentFiber);
    }

    const hasOwnerMetadata = fiber.hasOwnProperty('_debugOwner');
    const isProfilingSupported = fiber.hasOwnProperty('treeBaseDuration');

    if (isRoot) {
      pushOperation(constants["h" /* TREE_OPERATION_ADD */]);
      pushOperation(id);
      pushOperation(types["m" /* ElementTypeRoot */]);
      pushOperation(isProfilingSupported ? 1 : 0);
      pushOperation(hasOwnerMetadata ? 1 : 0);

      if (isProfiling) {
        if (displayNamesByRootID !== null) {
          displayNamesByRootID.set(id, getDisplayNameForRoot(fiber));
        }
      }
    } else {
      const {
        key
      } = fiber;
      const displayName = getDisplayNameForFiber(fiber);
      const elementType = getElementTypeForFiber(fiber);
      const {
        _debugOwner
      } = fiber; // Ideally we should call getFiberIDThrows() for _debugOwner,
      // since owners are almost always higher in the tree (and so have already been processed),
      // but in some (rare) instances reported in open source, a descendant mounts before an owner.
      // Since this is a DEV only field it's probably okay to also just lazily generate and ID here if needed.
      // See https://github.com/facebook/react/issues/21445

      const ownerID = _debugOwner != null ? getOrGenerateFiberID(_debugOwner) : 0;
      const parentID = parentFiber ? getFiberIDThrows(parentFiber) : 0;
      const displayNameStringID = getStringID(displayName); // This check is a guard to handle a React element that has been modified
      // in such a way as to bypass the default stringification of the "key" property.

      const keyString = key === null ? null : '' + key;
      const keyStringID = getStringID(keyString);
      pushOperation(constants["h" /* TREE_OPERATION_ADD */]);
      pushOperation(id);
      pushOperation(elementType);
      pushOperation(parentID);
      pushOperation(ownerID);
      pushOperation(displayNameStringID);
      pushOperation(keyStringID);
    }

    if (isProfilingSupported) {
      idToRootMap.set(id, currentRootID);
      recordProfilingDurations(fiber);
    }
  }

  function recordUnmount(fiber, isSimulated) {
    if (constants["n" /* __DEBUG__ */]) {
      debug('recordUnmount()', fiber, null, isSimulated ? 'unmount is simulated' : '');
    }

    if (trackedPathMatchFiber !== null) {
      // We're in the process of trying to restore previous selection.
      // If this fiber matched but is being unmounted, there's no use trying.
      // Reset the state so we don't keep holding onto it.
      if (fiber === trackedPathMatchFiber || fiber === trackedPathMatchFiber.alternate) {
        setTrackedPath(null);
      }
    }

    const unsafeID = getFiberIDUnsafe(fiber);

    if (unsafeID === null) {
      // If we've never seen this Fiber, it might be inside of a legacy render Suspense fragment (so the store is not even aware of it).
      // In that case we can just ignore it or it will cause errors later on.
      // One example of this is a Lazy component that never resolves before being unmounted.
      //
      // This also might indicate a Fast Refresh force-remount scenario.
      //
      // TODO: This is fragile and can obscure actual bugs.
      return;
    } // Flow refinement.


    const id = unsafeID;
    const isRoot = fiber.tag === HostRoot;

    if (isRoot) {
      // Roots must be removed only after all children (pending and simulated) have been removed.
      // So we track it separately.
      pendingUnmountedRootID = id;
    } else if (!shouldFilterFiber(fiber)) {
      // To maintain child-first ordering,
      // we'll push it into one of these queues,
      // and later arrange them in the correct order.
      if (isSimulated) {
        pendingSimulatedUnmountedIDs.push(id);
      } else {
        pendingRealUnmountedIDs.push(id);
      }
    }

    if (!fiber._debugNeedsRemount) {
      untrackFiberID(fiber);
      const isProfilingSupported = fiber.hasOwnProperty('treeBaseDuration');

      if (isProfilingSupported) {
        idToRootMap.delete(id);
        idToTreeBaseDurationMap.delete(id);
      }
    }
  }

  function mountFiberRecursively(firstChild, parentFiber, traverseSiblings, traceNearestHostComponentUpdate) {
    // Iterate over siblings rather than recursing.
    // This reduces the chance of stack overflow for wide trees (e.g. lists with many items).
    let fiber = firstChild;

    while (fiber !== null) {
      // Generate an ID even for filtered Fibers, in case it's needed later (e.g. for Profiling).
      getOrGenerateFiberID(fiber);

      if (constants["n" /* __DEBUG__ */]) {
        debug('mountFiberRecursively()', fiber, parentFiber);
      } // If we have the tree selection from previous reload, try to match this Fiber.
      // Also remember whether to do the same for siblings.


      const mightSiblingsBeOnTrackedPath = updateTrackedPathStateBeforeMount(fiber);
      const shouldIncludeInTree = !shouldFilterFiber(fiber);

      if (shouldIncludeInTree) {
        recordMount(fiber, parentFiber);
      }

      if (traceUpdatesEnabled) {
        if (traceNearestHostComponentUpdate) {
          const elementType = getElementTypeForFiber(fiber); // If an ancestor updated, we should mark the nearest host nodes for highlighting.

          if (elementType === types["i" /* ElementTypeHostComponent */]) {
            traceUpdatesForNodes.add(fiber.stateNode);
            traceNearestHostComponentUpdate = false;
          }
        } // We intentionally do not re-enable the traceNearestHostComponentUpdate flag in this branch,
        // because we don't want to highlight every host node inside of a newly mounted subtree.

      }

      const isSuspense = fiber.tag === ReactTypeOfWork.SuspenseComponent;

      if (isSuspense) {
        const isTimedOut = fiber.memoizedState !== null;

        if (isTimedOut) {
          // Special case: if Suspense mounts in a timed-out state,
          // get the fallback child from the inner fragment and mount
          // it as if it was our own child. Updates handle this too.
          const primaryChildFragment = fiber.child;
          const fallbackChildFragment = primaryChildFragment ? primaryChildFragment.sibling : null;
          const fallbackChild = fallbackChildFragment ? fallbackChildFragment.child : null;

          if (fallbackChild !== null) {
            mountFiberRecursively(fallbackChild, shouldIncludeInTree ? fiber : parentFiber, true, traceNearestHostComponentUpdate);
          }
        } else {
          let primaryChild = null;
          const areSuspenseChildrenConditionallyWrapped = OffscreenComponent === -1;

          if (areSuspenseChildrenConditionallyWrapped) {
            primaryChild = fiber.child;
          } else if (fiber.child !== null) {
            primaryChild = fiber.child.child;
          }

          if (primaryChild !== null) {
            mountFiberRecursively(primaryChild, shouldIncludeInTree ? fiber : parentFiber, true, traceNearestHostComponentUpdate);
          }
        }
      } else {
        if (fiber.child !== null) {
          mountFiberRecursively(fiber.child, shouldIncludeInTree ? fiber : parentFiber, true, traceNearestHostComponentUpdate);
        }
      } // We're exiting this Fiber now, and entering its siblings.
      // If we have selection to restore, we might need to re-activate tracking.


      updateTrackedPathStateAfterMount(mightSiblingsBeOnTrackedPath);
      fiber = traverseSiblings ? fiber.sibling : null;
    }
  } // We use this to simulate unmounting for Suspense trees
  // when we switch from primary to fallback.


  function unmountFiberChildrenRecursively(fiber) {
    if (constants["n" /* __DEBUG__ */]) {
      debug('unmountFiberChildrenRecursively()', fiber);
    } // We might meet a nested Suspense on our way.


    const isTimedOutSuspense = fiber.tag === ReactTypeOfWork.SuspenseComponent && fiber.memoizedState !== null;
    let child = fiber.child;

    if (isTimedOutSuspense) {
      // If it's showing fallback tree, let's traverse it instead.
      const primaryChildFragment = fiber.child;
      const fallbackChildFragment = primaryChildFragment ? primaryChildFragment.sibling : null; // Skip over to the real Fiber child.

      child = fallbackChildFragment ? fallbackChildFragment.child : null;
    }

    while (child !== null) {
      // Record simulated unmounts children-first.
      // We skip nodes without return because those are real unmounts.
      if (child.return !== null) {
        unmountFiberChildrenRecursively(child);
        recordUnmount(child, true);
      }

      child = child.sibling;
    }
  }

  function recordProfilingDurations(fiber) {
    const id = getFiberIDThrows(fiber);
    const {
      actualDuration,
      treeBaseDuration
    } = fiber;
    idToTreeBaseDurationMap.set(id, treeBaseDuration || 0);

    if (isProfiling) {
      const {
        alternate
      } = fiber; // It's important to update treeBaseDuration even if the current Fiber did not render,
      // because it's possible that one of its descendants did.

      if (alternate == null || treeBaseDuration !== alternate.treeBaseDuration) {
        // Tree base duration updates are included in the operations typed array.
        // So we have to convert them from milliseconds to microseconds so we can send them as ints.
        const convertedTreeBaseDuration = Math.floor((treeBaseDuration || 0) * 1000);
        pushOperation(constants["m" /* TREE_OPERATION_UPDATE_TREE_BASE_DURATION */]);
        pushOperation(id);
        pushOperation(convertedTreeBaseDuration);
      }

      if (alternate == null || didFiberRender(alternate, fiber)) {
        if (actualDuration != null) {
          // The actual duration reported by React includes time spent working on children.
          // This is useful information, but it's also useful to be able to exclude child durations.
          // The frontend can't compute this, since the immediate children may have been filtered out.
          // So we need to do this on the backend.
          // Note that this calculated self duration is not the same thing as the base duration.
          // The two are calculated differently (tree duration does not accumulate).
          let selfDuration = actualDuration;
          let child = fiber.child;

          while (child !== null) {
            selfDuration -= child.actualDuration || 0;
            child = child.sibling;
          } // If profiling is active, store durations for elements that were rendered during the commit.
          // Note that we should do this for any fiber we performed work on, regardless of its actualDuration value.
          // In some cases actualDuration might be 0 for fibers we worked on (particularly if we're using Date.now)
          // In other cases (e.g. Memo) actualDuration might be greater than 0 even if we "bailed out".


          const metadata = currentCommitProfilingMetadata;
          metadata.durations.push(id, actualDuration, selfDuration);
          metadata.maxActualDuration = Math.max(metadata.maxActualDuration, actualDuration);

          if (recordChangeDescriptions) {
            const changeDescription = getChangeDescription(alternate, fiber);

            if (changeDescription !== null) {
              if (metadata.changeDescriptions !== null) {
                metadata.changeDescriptions.set(id, changeDescription);
              }
            }

            updateContextsForFiber(fiber);
          }
        }
      }
    }
  }

  function recordResetChildren(fiber, childSet) {
    if (constants["n" /* __DEBUG__ */]) {
      debug('recordResetChildren()', childSet, fiber);
    } // The frontend only really cares about the displayName, key, and children.
    // The first two don't really change, so we are only concerned with the order of children here.
    // This is trickier than a simple comparison though, since certain types of fibers are filtered.


    const nextChildren = []; // This is a naive implementation that shallowly recourses children.
    // We might want to revisit this if it proves to be too inefficient.

    let child = childSet;

    while (child !== null) {
      findReorderedChildrenRecursively(child, nextChildren);
      child = child.sibling;
    }

    const numChildren = nextChildren.length;

    if (numChildren < 2) {
      // No need to reorder.
      return;
    }

    pushOperation(constants["k" /* TREE_OPERATION_REORDER_CHILDREN */]);
    pushOperation(getFiberIDThrows(fiber));
    pushOperation(numChildren);

    for (let i = 0; i < nextChildren.length; i++) {
      pushOperation(nextChildren[i]);
    }
  }

  function findReorderedChildrenRecursively(fiber, nextChildren) {
    if (!shouldFilterFiber(fiber)) {
      nextChildren.push(getFiberIDThrows(fiber));
    } else {
      let child = fiber.child;
      const isTimedOutSuspense = fiber.tag === SuspenseComponent && fiber.memoizedState !== null;

      if (isTimedOutSuspense) {
        // Special case: if Suspense mounts in a timed-out state,
        // get the fallback child from the inner fragment,
        // and skip over the primary child.
        const primaryChildFragment = fiber.child;
        const fallbackChildFragment = primaryChildFragment ? primaryChildFragment.sibling : null;
        const fallbackChild = fallbackChildFragment ? fallbackChildFragment.child : null;

        if (fallbackChild !== null) {
          child = fallbackChild;
        }
      }

      while (child !== null) {
        findReorderedChildrenRecursively(child, nextChildren);
        child = child.sibling;
      }
    }
  } // Returns whether closest unfiltered fiber parent needs to reset its child list.


  function updateFiberRecursively(nextFiber, prevFiber, parentFiber, traceNearestHostComponentUpdate) {
    const id = getOrGenerateFiberID(nextFiber);

    if (constants["n" /* __DEBUG__ */]) {
      debug('updateFiberRecursively()', nextFiber, parentFiber);
    }

    if (traceUpdatesEnabled) {
      const elementType = getElementTypeForFiber(nextFiber);

      if (traceNearestHostComponentUpdate) {
        // If an ancestor updated, we should mark the nearest host nodes for highlighting.
        if (elementType === types["i" /* ElementTypeHostComponent */]) {
          traceUpdatesForNodes.add(nextFiber.stateNode);
          traceNearestHostComponentUpdate = false;
        }
      } else {
        if (elementType === types["h" /* ElementTypeFunction */] || elementType === types["e" /* ElementTypeClass */] || elementType === types["f" /* ElementTypeContext */] || elementType === types["j" /* ElementTypeMemo */] || elementType === types["g" /* ElementTypeForwardRef */]) {
          // Otherwise if this is a traced ancestor, flag for the nearest host descendant(s).
          traceNearestHostComponentUpdate = didFiberRender(prevFiber, nextFiber);
        }
      }
    }

    if (mostRecentlyInspectedElement !== null && mostRecentlyInspectedElement.id === id && didFiberRender(prevFiber, nextFiber)) {
      // If this Fiber has updated, clear cached inspected data.
      // If it is inspected again, it may need to be re-run to obtain updated hooks values.
      hasElementUpdatedSinceLastInspected = true;
    }

    const shouldIncludeInTree = !shouldFilterFiber(nextFiber);
    const isSuspense = nextFiber.tag === SuspenseComponent;
    let shouldResetChildren = false; // The behavior of timed-out Suspense trees is unique.
    // Rather than unmount the timed out content (and possibly lose important state),
    // React re-parents this content within a hidden Fragment while the fallback is showing.
    // This behavior doesn't need to be observable in the DevTools though.
    // It might even result in a bad user experience for e.g. node selection in the Elements panel.
    // The easiest fix is to strip out the intermediate Fragment fibers,
    // so the Elements panel and Profiler don't need to special case them.
    // Suspense components only have a non-null memoizedState if they're timed-out.

    const prevDidTimeout = isSuspense && prevFiber.memoizedState !== null;
    const nextDidTimeOut = isSuspense && nextFiber.memoizedState !== null; // The logic below is inspired by the code paths in updateSuspenseComponent()
    // inside ReactFiberBeginWork in the React source code.

    if (prevDidTimeout && nextDidTimeOut) {
      // Fallback -> Fallback:
      // 1. Reconcile fallback set.
      const nextFiberChild = nextFiber.child;
      const nextFallbackChildSet = nextFiberChild ? nextFiberChild.sibling : null; // Note: We can't use nextFiber.child.sibling.alternate
      // because the set is special and alternate may not exist.

      const prevFiberChild = prevFiber.child;
      const prevFallbackChildSet = prevFiberChild ? prevFiberChild.sibling : null;

      if (nextFallbackChildSet != null && prevFallbackChildSet != null && updateFiberRecursively(nextFallbackChildSet, prevFallbackChildSet, nextFiber, traceNearestHostComponentUpdate)) {
        shouldResetChildren = true;
      }
    } else if (prevDidTimeout && !nextDidTimeOut) {
      // Fallback -> Primary:
      // 1. Unmount fallback set
      // Note: don't emulate fallback unmount because React actually did it.
      // 2. Mount primary set
      const nextPrimaryChildSet = nextFiber.child;

      if (nextPrimaryChildSet !== null) {
        mountFiberRecursively(nextPrimaryChildSet, shouldIncludeInTree ? nextFiber : parentFiber, true, traceNearestHostComponentUpdate);
      }

      shouldResetChildren = true;
    } else if (!prevDidTimeout && nextDidTimeOut) {
      // Primary -> Fallback:
      // 1. Hide primary set
      // This is not a real unmount, so it won't get reported by React.
      // We need to manually walk the previous tree and record unmounts.
      unmountFiberChildrenRecursively(prevFiber); // 2. Mount fallback set

      const nextFiberChild = nextFiber.child;
      const nextFallbackChildSet = nextFiberChild ? nextFiberChild.sibling : null;

      if (nextFallbackChildSet != null) {
        mountFiberRecursively(nextFallbackChildSet, shouldIncludeInTree ? nextFiber : parentFiber, true, traceNearestHostComponentUpdate);
        shouldResetChildren = true;
      }
    } else {
      // Common case: Primary -> Primary.
      // This is the same code path as for non-Suspense fibers.
      if (nextFiber.child !== prevFiber.child) {
        // If the first child is different, we need to traverse them.
        // Each next child will be either a new child (mount) or an alternate (update).
        let nextChild = nextFiber.child;
        let prevChildAtSameIndex = prevFiber.child;

        while (nextChild) {
          // We already know children will be referentially different because
          // they are either new mounts or alternates of previous children.
          // Schedule updates and mounts depending on whether alternates exist.
          // We don't track deletions here because they are reported separately.
          if (nextChild.alternate) {
            const prevChild = nextChild.alternate;

            if (updateFiberRecursively(nextChild, prevChild, shouldIncludeInTree ? nextFiber : parentFiber, traceNearestHostComponentUpdate)) {
              // If a nested tree child order changed but it can't handle its own
              // child order invalidation (e.g. because it's filtered out like host nodes),
              // propagate the need to reset child order upwards to this Fiber.
              shouldResetChildren = true;
            } // However we also keep track if the order of the children matches
            // the previous order. They are always different referentially, but
            // if the instances line up conceptually we'll want to know that.


            if (prevChild !== prevChildAtSameIndex) {
              shouldResetChildren = true;
            }
          } else {
            mountFiberRecursively(nextChild, shouldIncludeInTree ? nextFiber : parentFiber, false, traceNearestHostComponentUpdate);
            shouldResetChildren = true;
          } // Try the next child.


          nextChild = nextChild.sibling; // Advance the pointer in the previous list so that we can
          // keep comparing if they line up.

          if (!shouldResetChildren && prevChildAtSameIndex !== null) {
            prevChildAtSameIndex = prevChildAtSameIndex.sibling;
          }
        } // If we have no more children, but used to, they don't line up.


        if (prevChildAtSameIndex !== null) {
          shouldResetChildren = true;
        }
      } else {
        if (traceUpdatesEnabled) {
          // If we're tracing updates and we've bailed out before reaching a host node,
          // we should fall back to recursively marking the nearest host descendants for highlight.
          if (traceNearestHostComponentUpdate) {
            const hostFibers = findAllCurrentHostFibers(getFiberIDThrows(nextFiber));
            hostFibers.forEach(hostFiber => {
              traceUpdatesForNodes.add(hostFiber.stateNode);
            });
          }
        }
      }
    }

    if (shouldIncludeInTree) {
      const isProfilingSupported = nextFiber.hasOwnProperty('treeBaseDuration');

      if (isProfilingSupported) {
        recordProfilingDurations(nextFiber);
      }
    }

    if (shouldResetChildren) {
      // We need to crawl the subtree for closest non-filtered Fibers
      // so that we can display them in a flat children set.
      if (shouldIncludeInTree) {
        // Normally, search for children from the rendered child.
        let nextChildSet = nextFiber.child;

        if (nextDidTimeOut) {
          // Special case: timed-out Suspense renders the fallback set.
          const nextFiberChild = nextFiber.child;
          nextChildSet = nextFiberChild ? nextFiberChild.sibling : null;
        }

        if (nextChildSet != null) {
          recordResetChildren(nextFiber, nextChildSet);
        } // We've handled the child order change for this Fiber.
        // Since it's included, there's no need to invalidate parent child order.


        return false;
      } else {
        // Let the closest unfiltered parent Fiber reset its child order instead.
        return true;
      }
    } else {
      return false;
    }
  }

  function cleanup() {// We don't patch any methods so there is no cleanup.
  }

  function rootSupportsProfiling(root) {
    if (root.memoizedInteractions != null) {
      // v16 builds include this field for the scheduler/tracing API.
      return true;
    } else if (root.current != null && root.current.hasOwnProperty('treeBaseDuration')) {
      // The scheduler/tracing API was removed in v17 though
      // so we need to check a non-root Fiber.
      return true;
    } else {
      return false;
    }
  }

  function flushInitialOperations() {
    const localPendingOperationsQueue = pendingOperationsQueue;
    pendingOperationsQueue = null;

    if (localPendingOperationsQueue !== null && localPendingOperationsQueue.length > 0) {
      // We may have already queued up some operations before the frontend connected
      // If so, let the frontend know about them.
      localPendingOperationsQueue.forEach(operations => {
        hook.emit('operations', operations);
      });
    } else {
      // Before the traversals, remember to start tracking
      // our path in case we have selection to restore.
      if (trackedPath !== null) {
        mightBeOnTrackedPath = true;
      } // If we have not been profiling, then we can just walk the tree and build up its current state as-is.


      hook.getFiberRoots(rendererID).forEach(root => {
        currentRootID = getOrGenerateFiberID(root.current);
        setRootPseudoKey(currentRootID, root.current); // Handle multi-renderer edge-case where only some v16 renderers support profiling.

        if (isProfiling && rootSupportsProfiling(root)) {
          // If profiling is active, store commit time and duration.
          // The frontend may request this information after profiling has stopped.
          currentCommitProfilingMetadata = {
            changeDescriptions: recordChangeDescriptions ? new Map() : null,
            durations: [],
            commitTime: getCurrentTime() - profilingStartTime,
            maxActualDuration: 0,
            priorityLevel: null,
            updaters: getUpdatersList(root),
            effectDuration: null,
            passiveEffectDuration: null
          };
        }

        mountFiberRecursively(root.current, null, false, false);
        flushPendingEvents(root);
        currentRootID = -1;
      });
    }
  }

  function getUpdatersList(root) {
    return root.memoizedUpdaters != null ? Array.from(root.memoizedUpdaters).map(fiberToSerializedElement) : null;
  }

  function handleCommitFiberUnmount(fiber) {
    // This is not recursive.
    // We can't traverse fibers after unmounting so instead
    // we rely on React telling us about each unmount.
    recordUnmount(fiber, false);
  }

  function handlePostCommitFiberRoot(root) {
    if (isProfiling && rootSupportsProfiling(root)) {
      if (currentCommitProfilingMetadata !== null) {
        const {
          effectDuration,
          passiveEffectDuration
        } = Object(backend_utils["g" /* getEffectDurations */])(root);
        currentCommitProfilingMetadata.effectDuration = effectDuration;
        currentCommitProfilingMetadata.passiveEffectDuration = passiveEffectDuration;
      }
    }
  }

  function handleCommitFiberRoot(root, priorityLevel) {
    const current = root.current;
    const alternate = current.alternate; // Flush any pending Fibers that we are untracking before processing the new commit.
    // If we don't do this, we might end up double-deleting Fibers in some cases (like Legacy Suspense).

    untrackFibers();
    currentRootID = getOrGenerateFiberID(current); // Before the traversals, remember to start tracking
    // our path in case we have selection to restore.

    if (trackedPath !== null) {
      mightBeOnTrackedPath = true;
    }

    if (traceUpdatesEnabled) {
      traceUpdatesForNodes.clear();
    } // Handle multi-renderer edge-case where only some v16 renderers support profiling.


    const isProfilingSupported = rootSupportsProfiling(root);

    if (isProfiling && isProfilingSupported) {
      // If profiling is active, store commit time and duration.
      // The frontend may request this information after profiling has stopped.
      currentCommitProfilingMetadata = {
        changeDescriptions: recordChangeDescriptions ? new Map() : null,
        durations: [],
        commitTime: getCurrentTime() - profilingStartTime,
        maxActualDuration: 0,
        priorityLevel: priorityLevel == null ? null : formatPriorityLevel(priorityLevel),
        updaters: getUpdatersList(root),
        // Initialize to null; if new enough React version is running,
        // these values will be read during separate handlePostCommitFiberRoot() call.
        effectDuration: null,
        passiveEffectDuration: null
      };
    }

    if (alternate) {
      // TODO: relying on this seems a bit fishy.
      const wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
      const isMounted = current.memoizedState != null && current.memoizedState.element != null;

      if (!wasMounted && isMounted) {
        // Mount a new root.
        setRootPseudoKey(currentRootID, current);
        mountFiberRecursively(current, null, false, false);
      } else if (wasMounted && isMounted) {
        // Update an existing root.
        updateFiberRecursively(current, alternate, null, false);
      } else if (wasMounted && !isMounted) {
        // Unmount an existing root.
        removeRootPseudoKey(currentRootID);
        recordUnmount(current, false);
      }
    } else {
      // Mount a new root.
      setRootPseudoKey(currentRootID, current);
      mountFiberRecursively(current, null, false, false);
    }

    if (isProfiling && isProfilingSupported) {
      const commitProfilingMetadata = rootToCommitProfilingMetadataMap.get(currentRootID);

      if (commitProfilingMetadata != null) {
        commitProfilingMetadata.push(currentCommitProfilingMetadata);
      } else {
        rootToCommitProfilingMetadataMap.set(currentRootID, [currentCommitProfilingMetadata]);
      }
    } // We're done here.


    flushPendingEvents(root);

    if (traceUpdatesEnabled) {
      hook.emit('traceUpdates', traceUpdatesForNodes);
    }

    currentRootID = -1;
  }

  function findAllCurrentHostFibers(id) {
    const fibers = [];
    const fiber = findCurrentFiberUsingSlowPathById(id);

    if (!fiber) {
      return fibers;
    } // Next we'll drill down this component to find all HostComponent/Text.


    let node = fiber;

    while (true) {
      if (node.tag === HostComponent || node.tag === HostText) {
        fibers.push(node);
      } else if (node.child) {
        node.child.return = node;
        node = node.child;
        continue;
      }

      if (node === fiber) {
        return fibers;
      }

      while (!node.sibling) {
        if (!node.return || node.return === fiber) {
          return fibers;
        }

        node = node.return;
      }

      node.sibling.return = node.return;
      node = node.sibling;
    } // Flow needs the return here, but ESLint complains about it.
    // eslint-disable-next-line no-unreachable


    return fibers;
  }

  function findNativeNodesForFiberID(id) {
    try {
      let fiber = findCurrentFiberUsingSlowPathById(id);

      if (fiber === null) {
        return null;
      } // Special case for a timed-out Suspense.


      const isTimedOutSuspense = fiber.tag === SuspenseComponent && fiber.memoizedState !== null;

      if (isTimedOutSuspense) {
        // A timed-out Suspense's findDOMNode is useless.
        // Try our best to find the fallback directly.
        const maybeFallbackFiber = fiber.child && fiber.child.sibling;

        if (maybeFallbackFiber != null) {
          fiber = maybeFallbackFiber;
        }
      }

      const hostFibers = findAllCurrentHostFibers(id);
      return hostFibers.map(hostFiber => hostFiber.stateNode).filter(Boolean);
    } catch (err) {
      // The fiber might have unmounted by now.
      return null;
    }
  }

  function getDisplayNameForFiberID(id) {
    const fiber = idToArbitraryFiberMap.get(id);
    return fiber != null ? getDisplayNameForFiber(fiber) : null;
  }

  function getFiberIDForNative(hostInstance, findNearestUnfilteredAncestor = false) {
    let fiber = renderer.findFiberByHostInstance(hostInstance);

    if (fiber != null) {
      if (findNearestUnfilteredAncestor) {
        while (fiber !== null && shouldFilterFiber(fiber)) {
          fiber = fiber.return;
        }
      }

      return getFiberIDThrows(fiber);
    }

    return null;
  }

  const MOUNTING = 1;
  const MOUNTED = 2;
  const UNMOUNTED = 3; // This function is copied from React and should be kept in sync:
  // https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberTreeReflection.js

  function isFiberMountedImpl(fiber) {
    let node = fiber;
    let prevNode = null;

    if (!fiber.alternate) {
      // If there is no alternate, this might be a new tree that isn't inserted
      // yet. If it is, then it will have a pending insertion effect on it.
      if ((getFiberFlags(node) & Placement) !== NoFlags) {
        return MOUNTING;
      } // This indicates an error during render.


      if ((getFiberFlags(node) & Incomplete) !== NoFlags) {
        return UNMOUNTED;
      }

      while (node.return) {
        prevNode = node;
        node = node.return;

        if ((getFiberFlags(node) & Placement) !== NoFlags) {
          return MOUNTING;
        } // This indicates an error during render.


        if ((getFiberFlags(node) & Incomplete) !== NoFlags) {
          return UNMOUNTED;
        } // If this node is inside of a timed out suspense subtree, we should also ignore errors/warnings.


        const isTimedOutSuspense = node.tag === SuspenseComponent && node.memoizedState !== null;

        if (isTimedOutSuspense) {
          // Note that this does not include errors/warnings in the Fallback tree though!
          const primaryChildFragment = node.child;
          const fallbackChildFragment = primaryChildFragment ? primaryChildFragment.sibling : null;

          if (prevNode !== fallbackChildFragment) {
            return UNMOUNTED;
          }
        }
      }
    } else {
      while (node.return) {
        node = node.return;
      }
    }

    if (node.tag === HostRoot) {
      // TODO: Check if this was a nested HostRoot when used with
      // renderContainerIntoSubtree.
      return MOUNTED;
    } // If we didn't hit the root, that means that we're in an disconnected tree
    // that has been unmounted.


    return UNMOUNTED;
  } // This function is copied from React and should be kept in sync:
  // https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberTreeReflection.js
  // It would be nice if we updated React to inject this function directly (vs just indirectly via findDOMNode).
  // BEGIN copied code


  function findCurrentFiberUsingSlowPathById(id) {
    const fiber = idToArbitraryFiberMap.get(id);

    if (fiber == null) {
      console.warn(`Could not find Fiber with id "${id}"`);
      return null;
    }

    const alternate = fiber.alternate;

    if (!alternate) {
      // If there is no alternate, then we only need to check if it is mounted.
      const state = isFiberMountedImpl(fiber);

      if (state === UNMOUNTED) {
        throw Error('Unable to find node on an unmounted component.');
      }

      if (state === MOUNTING) {
        return null;
      }

      return fiber;
    } // If we have two possible branches, we'll walk backwards up to the root
    // to see what path the root points to. On the way we may hit one of the
    // special cases and we'll deal with them.


    let a = fiber;
    let b = alternate;

    while (true) {
      const parentA = a.return;

      if (parentA === null) {
        // We're at the root.
        break;
      }

      const parentB = parentA.alternate;

      if (parentB === null) {
        // There is no alternate. This is an unusual case. Currently, it only
        // happens when a Suspense component is hidden. An extra fragment fiber
        // is inserted in between the Suspense fiber and its children. Skip
        // over this extra fragment fiber and proceed to the next parent.
        const nextParent = parentA.return;

        if (nextParent !== null) {
          a = b = nextParent;
          continue;
        } // If there's no parent, we're at the root.


        break;
      } // If both copies of the parent fiber point to the same child, we can
      // assume that the child is current. This happens when we bailout on low
      // priority: the bailed out fiber's child reuses the current child.


      if (parentA.child === parentB.child) {
        let child = parentA.child;

        while (child) {
          if (child === a) {
            // We've determined that A is the current branch.
            if (isFiberMountedImpl(parentA) !== MOUNTED) {
              throw Error('Unable to find node on an unmounted component.');
            }

            return fiber;
          }

          if (child === b) {
            // We've determined that B is the current branch.
            if (isFiberMountedImpl(parentA) !== MOUNTED) {
              throw Error('Unable to find node on an unmounted component.');
            }

            return alternate;
          }

          child = child.sibling;
        } // We should never have an alternate for any mounting node. So the only
        // way this could possibly happen is if this was unmounted, if at all.


        throw Error('Unable to find node on an unmounted component.');
      }

      if (a.return !== b.return) {
        // The return pointer of A and the return pointer of B point to different
        // fibers. We assume that return pointers never criss-cross, so A must
        // belong to the child set of A.return, and B must belong to the child
        // set of B.return.
        a = parentA;
        b = parentB;
      } else {
        // The return pointers point to the same fiber. We'll have to use the
        // default, slow path: scan the child sets of each parent alternate to see
        // which child belongs to which set.
        //
        // Search parent A's child set
        let didFindChild = false;
        let child = parentA.child;

        while (child) {
          if (child === a) {
            didFindChild = true;
            a = parentA;
            b = parentB;
            break;
          }

          if (child === b) {
            didFindChild = true;
            b = parentA;
            a = parentB;
            break;
          }

          child = child.sibling;
        }

        if (!didFindChild) {
          // Search parent B's child set
          child = parentB.child;

          while (child) {
            if (child === a) {
              didFindChild = true;
              a = parentB;
              b = parentA;
              break;
            }

            if (child === b) {
              didFindChild = true;
              b = parentB;
              a = parentA;
              break;
            }

            child = child.sibling;
          }

          if (!didFindChild) {
            throw Error('Child was not found in either parent set. This indicates a bug ' + 'in React related to the return pointer. Please file an issue.');
          }
        }
      }

      if (a.alternate !== b) {
        throw Error("Return fibers should always be each others' alternates. " + 'This error is likely caused by a bug in React. Please file an issue.');
      }
    } // If the root is not a host container, we're in a disconnected tree. I.e.
    // unmounted.


    if (a.tag !== HostRoot) {
      throw Error('Unable to find node on an unmounted component.');
    }

    if (a.stateNode.current === a) {
      // We've determined that A is the current branch.
      return fiber;
    } // Otherwise B has to be current branch.


    return alternate;
  } // END copied code


  function prepareViewAttributeSource(id, path) {
    if (isMostRecentlyInspectedElement(id)) {
      window.$attribute = Object(utils["h" /* getInObject */])(mostRecentlyInspectedElement, path);
    }
  }

  function prepareViewElementSource(id) {
    const fiber = idToArbitraryFiberMap.get(id);

    if (fiber == null) {
      console.warn(`Could not find Fiber with id "${id}"`);
      return;
    }

    const {
      elementType,
      tag,
      type
    } = fiber;

    switch (tag) {
      case ClassComponent:
      case IncompleteClassComponent:
      case IndeterminateComponent:
      case FunctionComponent:
        global.$type = type;
        break;

      case ForwardRef:
        global.$type = type.render;
        break;

      case MemoComponent:
      case SimpleMemoComponent:
        global.$type = elementType != null && elementType.type != null ? elementType.type : type;
        break;

      default:
        global.$type = null;
        break;
    }
  }

  function fiberToSerializedElement(fiber) {
    return {
      displayName: getDisplayNameForFiber(fiber) || 'Anonymous',
      id: getFiberIDThrows(fiber),
      key: fiber.key,
      type: getElementTypeForFiber(fiber)
    };
  }

  function getOwnersList(id) {
    const fiber = findCurrentFiberUsingSlowPathById(id);

    if (fiber == null) {
      return null;
    }

    const {
      _debugOwner
    } = fiber;
    const owners = [fiberToSerializedElement(fiber)];

    if (_debugOwner) {
      let owner = _debugOwner;

      while (owner !== null) {
        owners.unshift(fiberToSerializedElement(owner));
        owner = owner._debugOwner || null;
      }
    }

    return owners;
  } // Fast path props lookup for React Native style editor.
  // Could use inspectElementRaw() but that would require shallow rendering hooks components,
  // and could also mess with memoization.


  function getInstanceAndStyle(id) {
    let instance = null;
    let style = null;
    const fiber = findCurrentFiberUsingSlowPathById(id);

    if (fiber !== null) {
      instance = fiber.stateNode;

      if (fiber.memoizedProps !== null) {
        style = fiber.memoizedProps.style;
      }
    }

    return {
      instance,
      style
    };
  }

  function isErrorBoundary(fiber) {
    const {
      tag,
      type
    } = fiber;

    switch (tag) {
      case ClassComponent:
      case IncompleteClassComponent:
        const instance = fiber.stateNode;
        return typeof type.getDerivedStateFromError === 'function' || instance !== null && typeof instance.componentDidCatch === 'function';

      default:
        return false;
    }
  }

  function getNearestErrorBoundaryID(fiber) {
    let parent = fiber.return;

    while (parent !== null) {
      if (isErrorBoundary(parent)) {
        return getFiberIDUnsafe(parent);
      }

      parent = parent.return;
    }

    return null;
  }

  function inspectElementRaw(id) {
    const fiber = findCurrentFiberUsingSlowPathById(id);

    if (fiber == null) {
      return null;
    }

    const {
      _debugOwner,
      _debugSource,
      stateNode,
      key,
      memoizedProps,
      memoizedState,
      dependencies,
      tag,
      type
    } = fiber;
    const elementType = getElementTypeForFiber(fiber);
    const usesHooks = (tag === FunctionComponent || tag === SimpleMemoComponent || tag === ForwardRef) && (!!memoizedState || !!dependencies); // TODO Show custom UI for Cache like we do for Suspense
    // For now, just hide state data entirely since it's not meant to be inspected.

    const showState = !usesHooks && tag !== CacheComponent;
    const typeSymbol = getTypeSymbol(type);
    let canViewSource = false;
    let context = null;

    if (tag === ClassComponent || tag === FunctionComponent || tag === IncompleteClassComponent || tag === IndeterminateComponent || tag === MemoComponent || tag === ForwardRef || tag === SimpleMemoComponent) {
      canViewSource = true;

      if (stateNode && stateNode.context != null) {
        // Don't show an empty context object for class components that don't use the context API.
        const shouldHideContext = elementType === types["e" /* ElementTypeClass */] && !(type.contextTypes || type.contextType);

        if (!shouldHideContext) {
          context = stateNode.context;
        }
      }
    } else if (typeSymbol === ReactSymbols["c" /* CONTEXT_NUMBER */] || typeSymbol === ReactSymbols["d" /* CONTEXT_SYMBOL_STRING */]) {
      // 16.3-16.5 read from "type" because the Consumer is the actual context object.
      // 16.6+ should read from "type._context" because Consumer can be different (in DEV).
      // NOTE Keep in sync with getDisplayNameForFiber()
      const consumerResolvedContext = type._context || type; // Global context value.

      context = consumerResolvedContext._currentValue || null; // Look for overridden value.

      let current = fiber.return;

      while (current !== null) {
        const currentType = current.type;
        const currentTypeSymbol = getTypeSymbol(currentType);

        if (currentTypeSymbol === ReactSymbols["n" /* PROVIDER_NUMBER */] || currentTypeSymbol === ReactSymbols["o" /* PROVIDER_SYMBOL_STRING */]) {
          // 16.3.0 exposed the context object as "context"
          // PR #12501 changed it to "_context" for 16.3.1+
          // NOTE Keep in sync with getDisplayNameForFiber()
          const providerResolvedContext = currentType._context || currentType.context;

          if (providerResolvedContext === consumerResolvedContext) {
            context = current.memoizedProps.value;
            break;
          }
        }

        current = current.return;
      }
    }

    let hasLegacyContext = false;

    if (context !== null) {
      hasLegacyContext = !!type.contextTypes; // To simplify hydration and display logic for context, wrap in a value object.
      // Otherwise simple values (e.g. strings, booleans) become harder to handle.

      context = {
        value: context
      };
    }

    let owners = null;

    if (_debugOwner) {
      owners = [];
      let owner = _debugOwner;

      while (owner !== null) {
        owners.push(fiberToSerializedElement(owner));
        owner = owner._debugOwner || null;
      }
    }

    const isTimedOutSuspense = tag === SuspenseComponent && memoizedState !== null;
    let hooks = null;

    if (usesHooks) {
      const originalConsoleMethods = {}; // Temporarily disable all console logging before re-running the hook.

      for (const method in console) {
        try {
          originalConsoleMethods[method] = console[method]; // $FlowFixMe property error|warn is not writable.

          console[method] = () => {};
        } catch (error) {}
      }

      try {
        hooks = Object(react_debug_tools["inspectHooksOfFiber"])(fiber, renderer.currentDispatcherRef, true // Include source location info for hooks
        );
      } finally {
        // Restore original console functionality.
        for (const method in originalConsoleMethods) {
          try {
            // $FlowFixMe property error|warn is not writable.
            console[method] = originalConsoleMethods[method];
          } catch (error) {}
        }
      }
    }

    let rootType = null;
    let current = fiber;

    while (current.return !== null) {
      current = current.return;
    }

    const fiberRoot = current.stateNode;

    if (fiberRoot != null && fiberRoot._debugRootType !== null) {
      rootType = fiberRoot._debugRootType;
    }

    const errors = fiberIDToErrorsMap.get(id) || new Map();
    const warnings = fiberIDToWarningsMap.get(id) || new Map();
    const isErrored = (fiber.flags & DidCapture) !== NoFlags || forceErrorForFiberIDs.get(id) === true;
    let targetErrorBoundaryID;

    if (isErrorBoundary(fiber)) {
      // if the current inspected element is an error boundary,
      // either that we want to use it to toggle off error state
      // or that we allow to force error state on it if it's within another
      // error boundary
      targetErrorBoundaryID = isErrored ? id : getNearestErrorBoundaryID(fiber);
    } else {
      targetErrorBoundaryID = getNearestErrorBoundaryID(fiber);
    }

    return {
      id,
      // Does the current renderer support editable hooks and function props?
      canEditHooks: typeof overrideHookState === 'function',
      canEditFunctionProps: typeof overrideProps === 'function',
      // Does the current renderer support advanced editing interface?
      canEditHooksAndDeletePaths: typeof overrideHookStateDeletePath === 'function',
      canEditHooksAndRenamePaths: typeof overrideHookStateRenamePath === 'function',
      canEditFunctionPropsDeletePaths: typeof overridePropsDeletePath === 'function',
      canEditFunctionPropsRenamePaths: typeof overridePropsRenamePath === 'function',
      canToggleError: supportsTogglingError && targetErrorBoundaryID != null,
      // Is this error boundary in error state.
      isErrored,
      targetErrorBoundaryID,
      canToggleSuspense: supportsTogglingSuspense && ( // If it's showing the real content, we can always flip fallback.
      !isTimedOutSuspense || // If it's showing fallback because we previously forced it to,
      // allow toggling it back to remove the fallback override.
      forceFallbackForSuspenseIDs.has(id)),
      // Can view component source location.
      canViewSource,
      // Does the component have legacy context attached to it.
      hasLegacyContext,
      key: key != null ? key : null,
      displayName: getDisplayNameForFiber(fiber),
      type: elementType,
      // Inspectable properties.
      // TODO Review sanitization approach for the below inspectable values.
      context,
      hooks,
      props: memoizedProps,
      state: showState ? memoizedState : null,
      errors: Array.from(errors.entries()),
      warnings: Array.from(warnings.entries()),
      // List of owners
      owners,
      // Location of component in source code.
      source: _debugSource || null,
      rootType,
      rendererPackageName: renderer.rendererPackageName,
      rendererVersion: renderer.version
    };
  }

  let mostRecentlyInspectedElement = null;
  let hasElementUpdatedSinceLastInspected = false;
  let currentlyInspectedPaths = {};

  function isMostRecentlyInspectedElement(id) {
    return mostRecentlyInspectedElement !== null && mostRecentlyInspectedElement.id === id;
  }

  function isMostRecentlyInspectedElementCurrent(id) {
    return isMostRecentlyInspectedElement(id) && !hasElementUpdatedSinceLastInspected;
  } // Track the intersection of currently inspected paths,
  // so that we can send their data along if the element is re-rendered.


  function mergeInspectedPaths(path) {
    let current = currentlyInspectedPaths;
    path.forEach(key => {
      if (!current[key]) {
        current[key] = {};
      }

      current = current[key];
    });
  }

  function createIsPathAllowed(key, secondaryCategory) {
    // This function helps prevent previously-inspected paths from being dehydrated in updates.
    // This is important to avoid a bad user experience where expanded toggles collapse on update.
    return function isPathAllowed(path) {
      switch (secondaryCategory) {
        case 'hooks':
          if (path.length === 1) {
            // Never dehydrate the "hooks" object at the top levels.
            return true;
          }

          if (path[path.length - 2] === 'hookSource' && path[path.length - 1] === 'fileName') {
            // It's important to preserve the full file name (URL) for hook sources
            // in case the user has enabled the named hooks feature.
            // Otherwise the frontend may end up with a partial URL which it can't load.
            return true;
          }

          if (path[path.length - 1] === 'subHooks' || path[path.length - 2] === 'subHooks') {
            // Dehydrating the 'subHooks' property makes the HooksTree UI a lot more complicated,
            // so it's easiest for now if we just don't break on this boundary.
            // We can always dehydrate a level deeper (in the value object).
            return true;
          }

          break;

        default:
          break;
      }

      let current = key === null ? currentlyInspectedPaths : currentlyInspectedPaths[key];

      if (!current) {
        return false;
      }

      for (let i = 0; i < path.length; i++) {
        current = current[path[i]];

        if (!current) {
          return false;
        }
      }

      return true;
    };
  }

  function updateSelectedElement(inspectedElement) {
    const {
      hooks,
      id,
      props
    } = inspectedElement;
    const fiber = idToArbitraryFiberMap.get(id);

    if (fiber == null) {
      console.warn(`Could not find Fiber with id "${id}"`);
      return;
    }

    const {
      elementType,
      stateNode,
      tag,
      type
    } = fiber;

    switch (tag) {
      case ClassComponent:
      case IncompleteClassComponent:
      case IndeterminateComponent:
        global.$r = stateNode;
        break;

      case FunctionComponent:
        global.$r = {
          hooks,
          props,
          type
        };
        break;

      case ForwardRef:
        global.$r = {
          hooks,
          props,
          type: type.render
        };
        break;

      case MemoComponent:
      case SimpleMemoComponent:
        global.$r = {
          hooks,
          props,
          type: elementType != null && elementType.type != null ? elementType.type : type
        };
        break;

      default:
        global.$r = null;
        break;
    }
  }

  function storeAsGlobal(id, path, count) {
    if (isMostRecentlyInspectedElement(id)) {
      const value = Object(utils["h" /* getInObject */])(mostRecentlyInspectedElement, path);
      const key = `$reactTemp${count}`;
      window[key] = value;
      console.log(key);
      console.log(value);
    }
  }

  function copyElementPath(id, path) {
    if (isMostRecentlyInspectedElement(id)) {
      Object(backend_utils["b" /* copyToClipboard */])(Object(utils["h" /* getInObject */])(mostRecentlyInspectedElement, path));
    }
  }

  function inspectElement(requestID, id, path) {
    if (path !== null) {
      mergeInspectedPaths(path);
    }

    if (isMostRecentlyInspectedElement(id)) {
      if (!hasElementUpdatedSinceLastInspected) {
        if (path !== null) {
          let secondaryCategory = null;

          if (path[0] === 'hooks') {
            secondaryCategory = 'hooks';
          } // If this element has not been updated since it was last inspected,
          // we can just return the subset of data in the newly-inspected path.


          return {
            id,
            responseID: requestID,
            type: 'hydrated-path',
            path,
            value: Object(backend_utils["a" /* cleanForBridge */])(Object(utils["h" /* getInObject */])(mostRecentlyInspectedElement, path), createIsPathAllowed(null, secondaryCategory), path)
          };
        } else {
          // If this element has not been updated since it was last inspected, we don't need to return it.
          // Instead we can just return the ID to indicate that it has not changed.
          return {
            id,
            responseID: requestID,
            type: 'no-change'
          };
        }
      }
    } else {
      currentlyInspectedPaths = {};
    }

    hasElementUpdatedSinceLastInspected = false;
    mostRecentlyInspectedElement = inspectElementRaw(id);

    if (mostRecentlyInspectedElement === null) {
      return {
        id,
        responseID: requestID,
        type: 'not-found'
      };
    } // Any time an inspected element has an update,
    // we should update the selected $r value as wel.
    // Do this before dehydration (cleanForBridge).


    updateSelectedElement(mostRecentlyInspectedElement); // Clone before cleaning so that we preserve the full data.
    // This will enable us to send patches without re-inspecting if hydrated paths are requested.
    // (Reducing how often we shallow-render is a better DX for function components that use hooks.)

    const cleanedInspectedElement = { ...mostRecentlyInspectedElement
    };
    cleanedInspectedElement.context = Object(backend_utils["a" /* cleanForBridge */])(cleanedInspectedElement.context, createIsPathAllowed('context', null));
    cleanedInspectedElement.hooks = Object(backend_utils["a" /* cleanForBridge */])(cleanedInspectedElement.hooks, createIsPathAllowed('hooks', 'hooks'));
    cleanedInspectedElement.props = Object(backend_utils["a" /* cleanForBridge */])(cleanedInspectedElement.props, createIsPathAllowed('props', null));
    cleanedInspectedElement.state = Object(backend_utils["a" /* cleanForBridge */])(cleanedInspectedElement.state, createIsPathAllowed('state', null));
    return {
      id,
      responseID: requestID,
      type: 'full-data',
      value: cleanedInspectedElement
    };
  }

  function logElementToConsole(id) {
    const result = isMostRecentlyInspectedElementCurrent(id) ? mostRecentlyInspectedElement : inspectElementRaw(id);

    if (result === null) {
      console.warn(`Could not find Fiber with id "${id}"`);
      return;
    }

    const supportsGroup = typeof console.groupCollapsed === 'function';

    if (supportsGroup) {
      console.groupCollapsed(`[Click to expand] %c<${result.displayName || 'Component'} />`, // --dom-tag-name-color is the CSS variable Chrome styles HTML elements with in the console.
      'color: var(--dom-tag-name-color); font-weight: normal;');
    }

    if (result.props !== null) {
      console.log('Props:', result.props);
    }

    if (result.state !== null) {
      console.log('State:', result.state);
    }

    if (result.hooks !== null) {
      console.log('Hooks:', result.hooks);
    }

    const nativeNodes = findNativeNodesForFiberID(id);

    if (nativeNodes !== null) {
      console.log('Nodes:', nativeNodes);
    }

    if (result.source !== null) {
      console.log('Location:', result.source);
    }

    if (window.chrome || /firefox/i.test(navigator.userAgent)) {
      console.log('Right-click any value to save it as a global variable for further inspection.');
    }

    if (supportsGroup) {
      console.groupEnd();
    }
  }

  function deletePath(type, id, hookID, path) {
    const fiber = findCurrentFiberUsingSlowPathById(id);

    if (fiber !== null) {
      const instance = fiber.stateNode;

      switch (type) {
        case 'context':
          // To simplify hydration and display of primitive context values (e.g. number, string)
          // the inspectElement() method wraps context in a {value: ...} object.
          // We need to remove the first part of the path (the "value") before continuing.
          path = path.slice(1);

          switch (fiber.tag) {
            case ClassComponent:
              if (path.length === 0) {// Simple context value (noop)
              } else {
                Object(utils["a" /* deletePathInObject */])(instance.context, path);
              }

              instance.forceUpdate();
              break;

            case FunctionComponent:
              // Function components using legacy context are not editable
              // because there's no instance on which to create a cloned, mutated context.
              break;
          }

          break;

        case 'hooks':
          if (typeof overrideHookStateDeletePath === 'function') {
            overrideHookStateDeletePath(fiber, hookID, path);
          }

          break;

        case 'props':
          if (instance === null) {
            if (typeof overridePropsDeletePath === 'function') {
              overridePropsDeletePath(fiber, path);
            }
          } else {
            fiber.pendingProps = Object(backend_utils["c" /* copyWithDelete */])(instance.props, path);
            instance.forceUpdate();
          }

          break;

        case 'state':
          Object(utils["a" /* deletePathInObject */])(instance.state, path);
          instance.forceUpdate();
          break;
      }
    }
  }

  function renamePath(type, id, hookID, oldPath, newPath) {
    const fiber = findCurrentFiberUsingSlowPathById(id);

    if (fiber !== null) {
      const instance = fiber.stateNode;

      switch (type) {
        case 'context':
          // To simplify hydration and display of primitive context values (e.g. number, string)
          // the inspectElement() method wraps context in a {value: ...} object.
          // We need to remove the first part of the path (the "value") before continuing.
          oldPath = oldPath.slice(1);
          newPath = newPath.slice(1);

          switch (fiber.tag) {
            case ClassComponent:
              if (oldPath.length === 0) {// Simple context value (noop)
              } else {
                Object(utils["k" /* renamePathInObject */])(instance.context, oldPath, newPath);
              }

              instance.forceUpdate();
              break;

            case FunctionComponent:
              // Function components using legacy context are not editable
              // because there's no instance on which to create a cloned, mutated context.
              break;
          }

          break;

        case 'hooks':
          if (typeof overrideHookStateRenamePath === 'function') {
            overrideHookStateRenamePath(fiber, hookID, oldPath, newPath);
          }

          break;

        case 'props':
          if (instance === null) {
            if (typeof overridePropsRenamePath === 'function') {
              overridePropsRenamePath(fiber, oldPath, newPath);
            }
          } else {
            fiber.pendingProps = Object(backend_utils["d" /* copyWithRename */])(instance.props, oldPath, newPath);
            instance.forceUpdate();
          }

          break;

        case 'state':
          Object(utils["k" /* renamePathInObject */])(instance.state, oldPath, newPath);
          instance.forceUpdate();
          break;
      }
    }
  }

  function overrideValueAtPath(type, id, hookID, path, value) {
    const fiber = findCurrentFiberUsingSlowPathById(id);

    if (fiber !== null) {
      const instance = fiber.stateNode;

      switch (type) {
        case 'context':
          // To simplify hydration and display of primitive context values (e.g. number, string)
          // the inspectElement() method wraps context in a {value: ...} object.
          // We need to remove the first part of the path (the "value") before continuing.
          path = path.slice(1);

          switch (fiber.tag) {
            case ClassComponent:
              if (path.length === 0) {
                // Simple context value
                instance.context = value;
              } else {
                Object(utils["l" /* setInObject */])(instance.context, path, value);
              }

              instance.forceUpdate();
              break;

            case FunctionComponent:
              // Function components using legacy context are not editable
              // because there's no instance on which to create a cloned, mutated context.
              break;
          }

          break;

        case 'hooks':
          if (typeof overrideHookState === 'function') {
            overrideHookState(fiber, hookID, path, value);
          }

          break;

        case 'props':
          switch (fiber.tag) {
            case ClassComponent:
              fiber.pendingProps = Object(backend_utils["e" /* copyWithSet */])(instance.props, path, value);
              instance.forceUpdate();
              break;

            default:
              if (typeof overrideProps === 'function') {
                overrideProps(fiber, path, value);
              }

              break;
          }

          break;

        case 'state':
          switch (fiber.tag) {
            case ClassComponent:
              Object(utils["l" /* setInObject */])(instance.state, path, value);
              instance.forceUpdate();
              break;
          }

          break;
      }
    }
  }

  let currentCommitProfilingMetadata = null;
  let displayNamesByRootID = null;
  let idToContextsMap = null;
  let initialTreeBaseDurationsMap = null;
  let initialIDToRootMap = null;
  let isProfiling = false;
  let profilingStartTime = 0;
  let recordChangeDescriptions = false;
  let rootToCommitProfilingMetadataMap = null;

  function getProfilingData() {
    const dataForRoots = [];

    if (rootToCommitProfilingMetadataMap === null) {
      throw Error('getProfilingData() called before any profiling data was recorded');
    }

    rootToCommitProfilingMetadataMap.forEach((commitProfilingMetadata, rootID) => {
      const commitData = [];
      const initialTreeBaseDurations = [];
      const displayName = displayNamesByRootID !== null && displayNamesByRootID.get(rootID) || 'Unknown';

      if (initialTreeBaseDurationsMap != null) {
        initialTreeBaseDurationsMap.forEach((treeBaseDuration, id) => {
          if (initialIDToRootMap != null && initialIDToRootMap.get(id) === rootID) {
            // We don't need to convert milliseconds to microseconds in this case,
            // because the profiling summary is JSON serialized.
            initialTreeBaseDurations.push([id, treeBaseDuration]);
          }
        });
      }

      commitProfilingMetadata.forEach((commitProfilingData, commitIndex) => {
        const {
          changeDescriptions,
          durations,
          effectDuration,
          maxActualDuration,
          passiveEffectDuration,
          priorityLevel,
          commitTime,
          updaters
        } = commitProfilingData;
        const fiberActualDurations = [];
        const fiberSelfDurations = [];

        for (let i = 0; i < durations.length; i += 3) {
          const fiberID = durations[i];
          fiberActualDurations.push([fiberID, durations[i + 1]]);
          fiberSelfDurations.push([fiberID, durations[i + 2]]);
        }

        commitData.push({
          changeDescriptions: changeDescriptions !== null ? Array.from(changeDescriptions.entries()) : null,
          duration: maxActualDuration,
          effectDuration,
          fiberActualDurations,
          fiberSelfDurations,
          passiveEffectDuration,
          priorityLevel,
          timestamp: commitTime,
          updaters
        });
      });
      dataForRoots.push({
        commitData,
        displayName,
        initialTreeBaseDurations,
        rootID
      });
    });
    return {
      dataForRoots,
      rendererID
    };
  }

  function startProfiling(shouldRecordChangeDescriptions) {
    if (isProfiling) {
      return;
    }

    recordChangeDescriptions = shouldRecordChangeDescriptions; // Capture initial values as of the time profiling starts.
    // It's important we snapshot both the durations and the id-to-root map,
    // since either of these may change during the profiling session
    // (e.g. when a fiber is re-rendered or when a fiber gets removed).

    displayNamesByRootID = new Map();
    initialTreeBaseDurationsMap = new Map(idToTreeBaseDurationMap);
    initialIDToRootMap = new Map(idToRootMap);
    idToContextsMap = new Map();
    hook.getFiberRoots(rendererID).forEach(root => {
      const rootID = getFiberIDThrows(root.current);
      displayNamesByRootID.set(rootID, getDisplayNameForRoot(root.current));

      if (shouldRecordChangeDescriptions) {
        // Record all contexts at the time profiling is started.
        // Fibers only store the current context value,
        // so we need to track them separately in order to determine changed keys.
        crawlToInitializeContextsMap(root.current);
      }
    });
    isProfiling = true;
    profilingStartTime = getCurrentTime();
    rootToCommitProfilingMetadataMap = new Map();
  }

  function stopProfiling() {
    isProfiling = false;
    recordChangeDescriptions = false;
  } // Automatically start profiling so that we don't miss timing info from initial "mount".


  if (Object(storage["c" /* sessionStorageGetItem */])(constants["g" /* SESSION_STORAGE_RELOAD_AND_PROFILE_KEY */]) === 'true') {
    startProfiling(Object(storage["c" /* sessionStorageGetItem */])(constants["f" /* SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY */]) === 'true');
  } // React will switch between these implementations depending on whether
  // we have any manually suspended/errored-out Fibers or not.


  function shouldErrorFiberAlwaysNull() {
    return null;
  } // Map of id and its force error status: true (error), false (toggled off),
  // null (do nothing)


  const forceErrorForFiberIDs = new Map();

  function shouldErrorFiberAccordingToMap(fiber) {
    if (typeof setErrorHandler !== 'function') {
      throw new Error('Expected overrideError() to not get called for earlier React versions.');
    }

    const id = getFiberIDUnsafe(fiber);

    if (id === null) {
      return null;
    }

    let status = null;

    if (forceErrorForFiberIDs.has(id)) {
      status = forceErrorForFiberIDs.get(id);

      if (status === false) {
        // TRICKY overrideError adds entries to this Map,
        // so ideally it would be the method that clears them too,
        // but that would break the functionality of the feature,
        // since DevTools needs to tell React to act differently than it normally would
        // (don't just re-render the failed boundary, but reset its errored state too).
        // So we can only clear it after telling React to reset the state.
        // Technically this is premature and we should schedule it for later,
        // since the render could always fail without committing the updated error boundary,
        // but since this is a DEV-only feature, the simplicity is worth the trade off.
        forceErrorForFiberIDs.delete(id);

        if (forceErrorForFiberIDs.size === 0) {
          // Last override is gone. Switch React back to fast path.
          setErrorHandler(shouldErrorFiberAlwaysNull);
        }
      }
    }

    return status;
  }

  function overrideError(id, forceError) {
    if (typeof setErrorHandler !== 'function' || typeof scheduleUpdate !== 'function') {
      throw new Error('Expected overrideError() to not get called for earlier React versions.');
    }

    forceErrorForFiberIDs.set(id, forceError);

    if (forceErrorForFiberIDs.size === 1) {
      // First override is added. Switch React to slower path.
      setErrorHandler(shouldErrorFiberAccordingToMap);
    }

    const fiber = idToArbitraryFiberMap.get(id);

    if (fiber != null) {
      scheduleUpdate(fiber);
    }
  }

  function shouldSuspendFiberAlwaysFalse() {
    return false;
  }

  const forceFallbackForSuspenseIDs = new Set();

  function shouldSuspendFiberAccordingToSet(fiber) {
    const maybeID = getFiberIDUnsafe(fiber);
    return maybeID !== null && forceFallbackForSuspenseIDs.has(maybeID);
  }

  function overrideSuspense(id, forceFallback) {
    if (typeof setSuspenseHandler !== 'function' || typeof scheduleUpdate !== 'function') {
      throw new Error('Expected overrideSuspense() to not get called for earlier React versions.');
    }

    if (forceFallback) {
      forceFallbackForSuspenseIDs.add(id);

      if (forceFallbackForSuspenseIDs.size === 1) {
        // First override is added. Switch React to slower path.
        setSuspenseHandler(shouldSuspendFiberAccordingToSet);
      }
    } else {
      forceFallbackForSuspenseIDs.delete(id);

      if (forceFallbackForSuspenseIDs.size === 0) {
        // Last override is gone. Switch React back to fast path.
        setSuspenseHandler(shouldSuspendFiberAlwaysFalse);
      }
    }

    const fiber = idToArbitraryFiberMap.get(id);

    if (fiber != null) {
      scheduleUpdate(fiber);
    }
  } // Remember if we're trying to restore the selection after reload.
  // In that case, we'll do some extra checks for matching mounts.


  let trackedPath = null;
  let trackedPathMatchFiber = null;
  let trackedPathMatchDepth = -1;
  let mightBeOnTrackedPath = false;

  function setTrackedPath(path) {
    if (path === null) {
      trackedPathMatchFiber = null;
      trackedPathMatchDepth = -1;
      mightBeOnTrackedPath = false;
    }

    trackedPath = path;
  } // We call this before traversing a new mount.
  // It remembers whether this Fiber is the next best match for tracked path.
  // The return value signals whether we should keep matching siblings or not.


  function updateTrackedPathStateBeforeMount(fiber) {
    if (trackedPath === null || !mightBeOnTrackedPath) {
      // Fast path: there's nothing to track so do nothing and ignore siblings.
      return false;
    }

    const returnFiber = fiber.return;
    const returnAlternate = returnFiber !== null ? returnFiber.alternate : null; // By now we know there's some selection to restore, and this is a new Fiber.
    // Is this newly mounted Fiber a direct child of the current best match?
    // (This will also be true for new roots if we haven't matched anything yet.)

    if (trackedPathMatchFiber === returnFiber || trackedPathMatchFiber === returnAlternate && returnAlternate !== null) {
      // Is this the next Fiber we should select? Let's compare the frames.
      const actualFrame = getPathFrame(fiber);
      const expectedFrame = trackedPath[trackedPathMatchDepth + 1];

      if (expectedFrame === undefined) {
        throw new Error('Expected to see a frame at the next depth.');
      }

      if (actualFrame.index === expectedFrame.index && actualFrame.key === expectedFrame.key && actualFrame.displayName === expectedFrame.displayName) {
        // We have our next match.
        trackedPathMatchFiber = fiber;
        trackedPathMatchDepth++; // Are we out of frames to match?

        if (trackedPathMatchDepth === trackedPath.length - 1) {
          // There's nothing that can possibly match afterwards.
          // Don't check the children.
          mightBeOnTrackedPath = false;
        } else {
          // Check the children, as they might reveal the next match.
          mightBeOnTrackedPath = true;
        } // In either case, since we have a match, we don't need
        // to check the siblings. They'll never match.


        return false;
      }
    } // This Fiber's parent is on the path, but this Fiber itself isn't.
    // There's no need to check its children--they won't be on the path either.


    mightBeOnTrackedPath = false; // However, one of its siblings may be on the path so keep searching.

    return true;
  }

  function updateTrackedPathStateAfterMount(mightSiblingsBeOnTrackedPath) {
    // updateTrackedPathStateBeforeMount() told us whether to match siblings.
    // Now that we're entering siblings, let's use that information.
    mightBeOnTrackedPath = mightSiblingsBeOnTrackedPath;
  } // Roots don't have a real persistent identity.
  // A root's "pseudo key" is "childDisplayName:indexWithThatName".
  // For example, "App:0" or, in case of similar roots, "Story:0", "Story:1", etc.
  // We will use this to try to disambiguate roots when restoring selection between reloads.


  const rootPseudoKeys = new Map();
  const rootDisplayNameCounter = new Map();

  function setRootPseudoKey(id, fiber) {
    const name = getDisplayNameForRoot(fiber);
    const counter = rootDisplayNameCounter.get(name) || 0;
    rootDisplayNameCounter.set(name, counter + 1);
    const pseudoKey = `${name}:${counter}`;
    rootPseudoKeys.set(id, pseudoKey);
  }

  function removeRootPseudoKey(id) {
    const pseudoKey = rootPseudoKeys.get(id);

    if (pseudoKey === undefined) {
      throw new Error('Expected root pseudo key to be known.');
    }

    const name = pseudoKey.substring(0, pseudoKey.lastIndexOf(':'));
    const counter = rootDisplayNameCounter.get(name);

    if (counter === undefined) {
      throw new Error('Expected counter to be known.');
    }

    if (counter > 1) {
      rootDisplayNameCounter.set(name, counter - 1);
    } else {
      rootDisplayNameCounter.delete(name);
    }

    rootPseudoKeys.delete(id);
  }

  function getDisplayNameForRoot(fiber) {
    let preferredDisplayName = null;
    let fallbackDisplayName = null;
    let child = fiber.child; // Go at most three levels deep into direct children
    // while searching for a child that has a displayName.

    for (let i = 0; i < 3; i++) {
      if (child === null) {
        break;
      }

      const displayName = getDisplayNameForFiber(child);

      if (displayName !== null) {
        // Prefer display names that we get from user-defined components.
        // We want to avoid using e.g. 'Suspense' unless we find nothing else.
        if (typeof child.type === 'function') {
          // There's a few user-defined tags, but we'll prefer the ones
          // that are usually explicitly named (function or class components).
          preferredDisplayName = displayName;
        } else if (fallbackDisplayName === null) {
          fallbackDisplayName = displayName;
        }
      }

      if (preferredDisplayName !== null) {
        break;
      }

      child = child.child;
    }

    return preferredDisplayName || fallbackDisplayName || 'Anonymous';
  }

  function getPathFrame(fiber) {
    const {
      key
    } = fiber;
    let displayName = getDisplayNameForFiber(fiber);
    const index = fiber.index;

    switch (fiber.tag) {
      case HostRoot:
        // Roots don't have a real displayName, index, or key.
        // Instead, we'll use the pseudo key (childDisplayName:indexWithThatName).
        const id = getFiberIDThrows(fiber);
        const pseudoKey = rootPseudoKeys.get(id);

        if (pseudoKey === undefined) {
          throw new Error('Expected mounted root to have known pseudo key.');
        }

        displayName = pseudoKey;
        break;

      case HostComponent:
        displayName = fiber.type;
        break;

      default:
        break;
    }

    return {
      displayName,
      key,
      index
    };
  } // Produces a serializable representation that does a best effort
  // of identifying a particular Fiber between page reloads.
  // The return path will contain Fibers that are "invisible" to the store
  // because their keys and indexes are important to restoring the selection.


  function getPathForElement(id) {
    let fiber = idToArbitraryFiberMap.get(id);

    if (fiber == null) {
      return null;
    }

    const keyPath = [];

    while (fiber !== null) {
      keyPath.push(getPathFrame(fiber));
      fiber = fiber.return;
    }

    keyPath.reverse();
    return keyPath;
  }

  function getBestMatchForTrackedPath() {
    if (trackedPath === null) {
      // Nothing to match.
      return null;
    }

    if (trackedPathMatchFiber === null) {
      // We didn't find anything.
      return null;
    } // Find the closest Fiber store is aware of.


    let fiber = trackedPathMatchFiber;

    while (fiber !== null && shouldFilterFiber(fiber)) {
      fiber = fiber.return;
    }

    if (fiber === null) {
      return null;
    }

    return {
      id: getFiberIDThrows(fiber),
      isFullMatch: trackedPathMatchDepth === trackedPath.length - 1
    };
  }

  const formatPriorityLevel = priorityLevel => {
    if (priorityLevel == null) {
      return 'Unknown';
    }

    switch (priorityLevel) {
      case ImmediatePriority:
        return 'Immediate';

      case UserBlockingPriority:
        return 'User-Blocking';

      case NormalPriority:
        return 'Normal';

      case LowPriority:
        return 'Low';

      case IdlePriority:
        return 'Idle';

      case NoPriority:
      default:
        return 'Unknown';
    }
  };

  function setTraceUpdatesEnabled(isEnabled) {
    traceUpdatesEnabled = isEnabled;
  }

  return {
    cleanup,
    clearErrorsAndWarnings,
    clearErrorsForFiberID,
    clearWarningsForFiberID,
    copyElementPath,
    deletePath,
    findNativeNodesForFiberID,
    flushInitialOperations,
    getBestMatchForTrackedPath,
    getDisplayNameForFiberID,
    getFiberIDForNative,
    getInstanceAndStyle,
    getOwnersList,
    getPathForElement,
    getProfilingData,
    handleCommitFiberRoot,
    handleCommitFiberUnmount,
    handlePostCommitFiberRoot,
    inspectElement,
    logElementToConsole,
    prepareViewAttributeSource,
    prepareViewElementSource,
    overrideError,
    overrideSuspense,
    overrideValueAtPath,
    renamePath,
    renderer,
    setTraceUpdatesEnabled,
    setTrackedPath,
    startProfiling,
    stopProfiling,
    storeAsGlobal,
    updateComponentFilters
  };
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ agent_Agent; });

// EXTERNAL MODULE: ../react-devtools-shared/src/events.js
var events = __webpack_require__(12);

// EXTERNAL MODULE: /home/marvin/Misc/projects/replay/react/node_modules/lodash.throttle/index.js
var lodash_throttle = __webpack_require__(13);
var lodash_throttle_default = /*#__PURE__*/__webpack_require__.n(lodash_throttle);

// EXTERNAL MODULE: ../react-devtools-shared/src/constants.js
var constants = __webpack_require__(2);

// EXTERNAL MODULE: ../react-devtools-shared/src/storage.js
var storage = __webpack_require__(5);

// CONCATENATED MODULE: /home/marvin/Misc/projects/replay/react/node_modules/memoize-one/esm/index.js
var simpleIsEqual = function simpleIsEqual(a, b) {
  return a === b;
};

/* harmony default export */ var esm = (function (resultFn) {
  var isEqual = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : simpleIsEqual;
  var lastThis = void 0;
  var lastArgs = [];
  var lastResult = void 0;
  var calledOnce = false;

  var isNewArgEqualToLast = function isNewArgEqualToLast(newArg, index) {
    return isEqual(newArg, lastArgs[index]);
  };

  var result = function result() {
    for (var _len = arguments.length, newArgs = Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
      return lastResult;
    }

    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    lastResult = resultFn.apply(this, newArgs);
    return lastResult;
  };

  return result;
});
// EXTERNAL MODULE: /home/marvin/Misc/projects/replay/react/node_modules/object-assign/index.js
var object_assign = __webpack_require__(7);
var object_assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ../react-devtools-shared/src/backend/views/utils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// Get the window object for the document that a node belongs to,
// or return null if it cannot be found (node not attached to DOM,
// etc).
function getOwnerWindow(node) {
  if (!node.ownerDocument) {
    return null;
  }

  return node.ownerDocument.defaultView;
} // Get the iframe containing a node, or return null if it cannot
// be found (node not within iframe, etc).

function getOwnerIframe(node) {
  const nodeWindow = getOwnerWindow(node);

  if (nodeWindow) {
    return nodeWindow.frameElement;
  }

  return null;
} // Get a bounding client rect for a node, with an
// offset added to compensate for its border.

function getBoundingClientRectWithBorderOffset(node) {
  const dimensions = getElementDimensions(node);
  return mergeRectOffsets([node.getBoundingClientRect(), {
    top: dimensions.borderTop,
    left: dimensions.borderLeft,
    bottom: dimensions.borderBottom,
    right: dimensions.borderRight,
    // This width and height won't get used by mergeRectOffsets (since this
    // is not the first rect in the array), but we set them so that this
    // object typechecks as a ClientRect.
    width: 0,
    height: 0
  }]);
} // Add together the top, left, bottom, and right properties of
// each ClientRect, but keep the width and height of the first one.

function mergeRectOffsets(rects) {
  return rects.reduce((previousRect, rect) => {
    if (previousRect == null) {
      return rect;
    }

    return {
      top: previousRect.top + rect.top,
      left: previousRect.left + rect.left,
      width: previousRect.width,
      height: previousRect.height,
      bottom: previousRect.bottom + rect.bottom,
      right: previousRect.right + rect.right
    };
  });
} // Calculate a boundingClientRect for a node relative to boundaryWindow,
// taking into account any offsets caused by intermediate iframes.

function getNestedBoundingClientRect(node, boundaryWindow) {
  const ownerIframe = getOwnerIframe(node);

  if (ownerIframe && ownerIframe !== boundaryWindow) {
    const rects = [node.getBoundingClientRect()];
    let currentIframe = ownerIframe;
    let onlyOneMore = false;

    while (currentIframe) {
      const rect = getBoundingClientRectWithBorderOffset(currentIframe);
      rects.push(rect);
      currentIframe = getOwnerIframe(currentIframe);

      if (onlyOneMore) {
        break;
      } // We don't want to calculate iframe offsets upwards beyond
      // the iframe containing the boundaryWindow, but we
      // need to calculate the offset relative to the boundaryWindow.


      if (currentIframe && getOwnerWindow(currentIframe) === boundaryWindow) {
        onlyOneMore = true;
      }
    }

    return mergeRectOffsets(rects);
  } else {
    return node.getBoundingClientRect();
  }
}
function getElementDimensions(domElement) {
  const calculatedStyle = window.getComputedStyle(domElement);
  return {
    borderLeft: parseInt(calculatedStyle.borderLeftWidth, 10),
    borderRight: parseInt(calculatedStyle.borderRightWidth, 10),
    borderTop: parseInt(calculatedStyle.borderTopWidth, 10),
    borderBottom: parseInt(calculatedStyle.borderBottomWidth, 10),
    marginLeft: parseInt(calculatedStyle.marginLeft, 10),
    marginRight: parseInt(calculatedStyle.marginRight, 10),
    marginTop: parseInt(calculatedStyle.marginTop, 10),
    marginBottom: parseInt(calculatedStyle.marginBottom, 10),
    paddingLeft: parseInt(calculatedStyle.paddingLeft, 10),
    paddingRight: parseInt(calculatedStyle.paddingRight, 10),
    paddingTop: parseInt(calculatedStyle.paddingTop, 10),
    paddingBottom: parseInt(calculatedStyle.paddingBottom, 10)
  };
}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/views/Highlighter/Overlay.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



// Note that the Overlay components are not affected by the active Theme,
// because they highlight elements in the main Chrome window (outside of devtools).
// The colors below were chosen to roughly match those used by Chrome devtools.
class Overlay_OverlayRect {
  constructor(doc, container) {
    this.node = doc.createElement('div');
    this.border = doc.createElement('div');
    this.padding = doc.createElement('div');
    this.content = doc.createElement('div');
    this.border.style.borderColor = overlayStyles.border;
    this.padding.style.borderColor = overlayStyles.padding;
    this.content.style.backgroundColor = overlayStyles.background;
    object_assign_default()(this.node.style, {
      borderColor: overlayStyles.margin,
      pointerEvents: 'none',
      position: 'fixed'
    });
    this.node.style.zIndex = '10000000';
    this.node.appendChild(this.border);
    this.border.appendChild(this.padding);
    this.padding.appendChild(this.content);
    container.appendChild(this.node);
  }

  remove() {
    if (this.node.parentNode) {
      this.node.parentNode.removeChild(this.node);
    }
  }

  update(box, dims) {
    boxWrap(dims, 'margin', this.node);
    boxWrap(dims, 'border', this.border);
    boxWrap(dims, 'padding', this.padding);
    object_assign_default()(this.content.style, {
      height: box.height - dims.borderTop - dims.borderBottom - dims.paddingTop - dims.paddingBottom + 'px',
      width: box.width - dims.borderLeft - dims.borderRight - dims.paddingLeft - dims.paddingRight + 'px'
    });
    object_assign_default()(this.node.style, {
      top: box.top - dims.marginTop + 'px',
      left: box.left - dims.marginLeft + 'px'
    });
  }

}

class Overlay_OverlayTip {
  constructor(doc, container) {
    this.tip = doc.createElement('div');
    object_assign_default()(this.tip.style, {
      display: 'flex',
      flexFlow: 'row nowrap',
      backgroundColor: '#333740',
      borderRadius: '2px',
      fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
      fontWeight: 'bold',
      padding: '3px 5px',
      pointerEvents: 'none',
      position: 'fixed',
      fontSize: '12px',
      whiteSpace: 'nowrap'
    });
    this.nameSpan = doc.createElement('span');
    this.tip.appendChild(this.nameSpan);
    object_assign_default()(this.nameSpan.style, {
      color: '#ee78e6',
      borderRight: '1px solid #aaaaaa',
      paddingRight: '0.5rem',
      marginRight: '0.5rem'
    });
    this.dimSpan = doc.createElement('span');
    this.tip.appendChild(this.dimSpan);
    object_assign_default()(this.dimSpan.style, {
      color: '#d7d7d7'
    });
    this.tip.style.zIndex = '10000000';
    container.appendChild(this.tip);
  }

  remove() {
    if (this.tip.parentNode) {
      this.tip.parentNode.removeChild(this.tip);
    }
  }

  updateText(name, width, height) {
    this.nameSpan.textContent = name;
    this.dimSpan.textContent = Math.round(width) + 'px × ' + Math.round(height) + 'px';
  }

  updatePosition(dims, bounds) {
    const tipRect = this.tip.getBoundingClientRect();
    const tipPos = findTipPos(dims, bounds, {
      width: tipRect.width,
      height: tipRect.height
    });
    object_assign_default()(this.tip.style, tipPos.style);
  }

}

class Overlay_Overlay {
  constructor() {
    // Find the root window, because overlays are positioned relative to it.
    const currentWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
    this.window = currentWindow; // When opened in shells/dev, the tooltip should be bound by the app iframe, not by the topmost window.

    const tipBoundsWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
    this.tipBoundsWindow = tipBoundsWindow;
    const doc = currentWindow.document;
    this.container = doc.createElement('div');
    this.container.style.zIndex = '10000000';
    this.tip = new Overlay_OverlayTip(doc, this.container);
    this.rects = [];
    doc.body.appendChild(this.container);
  }

  remove() {
    this.tip.remove();
    this.rects.forEach(rect => {
      rect.remove();
    });
    this.rects.length = 0;

    if (this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }

  inspect(nodes, name) {
    // We can't get the size of text nodes or comment nodes. React as of v15
    // heavily uses comment nodes to delimit text.
    const elements = nodes.filter(node => node.nodeType === Node.ELEMENT_NODE);

    while (this.rects.length > elements.length) {
      const rect = this.rects.pop();
      rect.remove();
    }

    if (elements.length === 0) {
      return;
    }

    while (this.rects.length < elements.length) {
      this.rects.push(new Overlay_OverlayRect(this.window.document, this.container));
    }

    const outerBox = {
      top: Number.POSITIVE_INFINITY,
      right: Number.NEGATIVE_INFINITY,
      bottom: Number.NEGATIVE_INFINITY,
      left: Number.POSITIVE_INFINITY
    };
    elements.forEach((element, index) => {
      const box = getNestedBoundingClientRect(element, this.window);
      const dims = getElementDimensions(element);
      outerBox.top = Math.min(outerBox.top, box.top - dims.marginTop);
      outerBox.right = Math.max(outerBox.right, box.left + box.width + dims.marginRight);
      outerBox.bottom = Math.max(outerBox.bottom, box.top + box.height + dims.marginBottom);
      outerBox.left = Math.min(outerBox.left, box.left - dims.marginLeft);
      const rect = this.rects[index];
      rect.update(box, dims);
    });

    if (!name) {
      name = elements[0].nodeName.toLowerCase();
      const node = elements[0];
      const hook = node.ownerDocument.defaultView.__REACT_DEVTOOLS_GLOBAL_HOOK__;

      if (hook != null && hook.rendererInterfaces != null) {
        let ownerName = null; // eslint-disable-next-line no-for-of-loops/no-for-of-loops

        for (const rendererInterface of hook.rendererInterfaces.values()) {
          const id = rendererInterface.getFiberIDForNative(node, true);

          if (id !== null) {
            ownerName = rendererInterface.getDisplayNameForFiberID(id, true);
            break;
          }
        }

        if (ownerName) {
          name += ' (in ' + ownerName + ')';
        }
      }
    }

    this.tip.updateText(name, outerBox.right - outerBox.left, outerBox.bottom - outerBox.top);
    const tipBounds = getNestedBoundingClientRect(this.tipBoundsWindow.document.documentElement, this.window);
    this.tip.updatePosition({
      top: outerBox.top,
      left: outerBox.left,
      height: outerBox.bottom - outerBox.top,
      width: outerBox.right - outerBox.left
    }, {
      top: tipBounds.top + this.tipBoundsWindow.scrollY,
      left: tipBounds.left + this.tipBoundsWindow.scrollX,
      height: this.tipBoundsWindow.innerHeight,
      width: this.tipBoundsWindow.innerWidth
    });
  }

}

function findTipPos(dims, bounds, tipSize) {
  const tipHeight = Math.max(tipSize.height, 20);
  const tipWidth = Math.max(tipSize.width, 60);
  const margin = 5;
  let top;

  if (dims.top + dims.height + tipHeight <= bounds.top + bounds.height) {
    if (dims.top + dims.height < bounds.top + 0) {
      top = bounds.top + margin;
    } else {
      top = dims.top + dims.height + margin;
    }
  } else if (dims.top - tipHeight <= bounds.top + bounds.height) {
    if (dims.top - tipHeight - margin < bounds.top + margin) {
      top = bounds.top + margin;
    } else {
      top = dims.top - tipHeight - margin;
    }
  } else {
    top = bounds.top + bounds.height - tipHeight - margin;
  }

  let left = dims.left + margin;

  if (dims.left < bounds.left) {
    left = bounds.left + margin;
  }

  if (dims.left + tipWidth > bounds.left + bounds.width) {
    left = bounds.left + bounds.width - tipWidth - margin;
  }

  top += 'px';
  left += 'px';
  return {
    style: {
      top,
      left
    }
  };
}

function boxWrap(dims, what, node) {
  object_assign_default()(node.style, {
    borderTopWidth: dims[what + 'Top'] + 'px',
    borderLeftWidth: dims[what + 'Left'] + 'px',
    borderRightWidth: dims[what + 'Right'] + 'px',
    borderBottomWidth: dims[what + 'Bottom'] + 'px',
    borderStyle: 'solid'
  });
}

const overlayStyles = {
  background: 'rgba(120, 170, 210, 0.7)',
  padding: 'rgba(77, 200, 0, 0.3)',
  margin: 'rgba(255, 155, 0, 0.3)',
  border: 'rgba(255, 200, 50, 0.3)'
};
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/views/Highlighter/Highlighter.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const SHOW_DURATION = 2000;
let timeoutID = null;
let overlay = null;
function hideOverlay() {
  timeoutID = null;

  if (overlay !== null) {
    overlay.remove();
    overlay = null;
  }
}
function showOverlay(elements, componentName, hideAfterTimeout) {
  // TODO (npm-packages) Detect RN and support it somehow
  if (window.document == null) {
    return;
  }

  if (timeoutID !== null) {
    clearTimeout(timeoutID);
  }

  if (elements == null) {
    return;
  }

  if (overlay === null) {
    overlay = new Overlay_Overlay();
  }

  overlay.inspect(elements, componentName);

  if (hideAfterTimeout) {
    timeoutID = setTimeout(hideOverlay, SHOW_DURATION);
  }
}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/views/Highlighter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




// This plug-in provides in-page highlighting of the selected element.
// It is used by the browser extension and the standalone DevTools shell (when connected to a browser).
// It is not currently the mechanism used to highlight React Native views.
// That is done by the React Native Inspector component.
let iframesListeningTo = new Set();
function setupHighlighter(bridge, agent) {
  bridge.addListener('clearNativeElementHighlight', clearNativeElementHighlight);
  bridge.addListener('highlightNativeElement', highlightNativeElement);
  bridge.addListener('shutdown', stopInspectingNative);
  bridge.addListener('startInspectingNative', startInspectingNative);
  bridge.addListener('stopInspectingNative', stopInspectingNative);

  function startInspectingNative() {
    registerListenersOnWindow(window);
  }

  function registerListenersOnWindow(window) {
    // This plug-in may run in non-DOM environments (e.g. React Native).
    if (window && typeof window.addEventListener === 'function') {
      window.addEventListener('click', onClick, true);
      window.addEventListener('mousedown', onMouseEvent, true);
      window.addEventListener('mouseover', onMouseEvent, true);
      window.addEventListener('mouseup', onMouseEvent, true);
      window.addEventListener('pointerdown', onPointerDown, true);
      window.addEventListener('pointerover', onPointerOver, true);
      window.addEventListener('pointerup', onPointerUp, true);
    }
  }

  function stopInspectingNative() {
    hideOverlay();
    removeListenersOnWindow(window);
    iframesListeningTo.forEach(function (frame) {
      try {
        removeListenersOnWindow(frame.contentWindow);
      } catch (error) {// This can error when the iframe is on a cross-origin.
      }
    });
    iframesListeningTo = new Set();
  }

  function removeListenersOnWindow(window) {
    // This plug-in may run in non-DOM environments (e.g. React Native).
    if (window && typeof window.removeEventListener === 'function') {
      window.removeEventListener('click', onClick, true);
      window.removeEventListener('mousedown', onMouseEvent, true);
      window.removeEventListener('mouseover', onMouseEvent, true);
      window.removeEventListener('mouseup', onMouseEvent, true);
      window.removeEventListener('pointerdown', onPointerDown, true);
      window.removeEventListener('pointerover', onPointerOver, true);
      window.removeEventListener('pointerup', onPointerUp, true);
    }
  }

  function clearNativeElementHighlight() {
    hideOverlay();
  }

  function highlightNativeElement({
    displayName,
    hideAfterTimeout,
    id,
    openNativeElementsPanel,
    rendererID,
    scrollIntoView
  }) {
    const renderer = agent.rendererInterfaces[rendererID];

    if (renderer == null) {
      console.warn(`Invalid renderer id "${rendererID}" for element "${id}"`);
    }

    let nodes = null;

    if (renderer != null) {
      nodes = renderer.findNativeNodesForFiberID(id);
    }

    if (nodes != null && nodes[0] != null) {
      const node = nodes[0];

      if (scrollIntoView && typeof node.scrollIntoView === 'function') {
        // If the node isn't visible show it before highlighting it.
        // We may want to reconsider this; it might be a little disruptive.
        // $FlowFixMe Flow only knows about 'start' | 'end'
        node.scrollIntoView({
          block: 'nearest',
          inline: 'nearest'
        });
      }

      showOverlay(nodes, displayName, hideAfterTimeout);

      if (openNativeElementsPanel) {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$0 = node;
        bridge.send('syncSelectionToNativeElementsPanel');
      }
    } else {
      hideOverlay();
    }
  }

  function onClick(event) {
    event.preventDefault();
    event.stopPropagation();
    stopInspectingNative();
    bridge.send('stopInspectingNative', true);
  }

  function onMouseEvent(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  function onPointerDown(event) {
    event.preventDefault();
    event.stopPropagation();
    selectFiberForNode(event.target);
  }

  function onPointerOver(event) {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target;

    if (target.tagName === 'IFRAME') {
      const iframe = target;

      try {
        if (!iframesListeningTo.has(iframe)) {
          const window = iframe.contentWindow;
          registerListenersOnWindow(window);
          iframesListeningTo.add(iframe);
        }
      } catch (error) {// This can error when the iframe is on a cross-origin.
      }
    } // Don't pass the name explicitly.
    // It will be inferred from DOM tag and Fiber owner.


    showOverlay([target], null, false);
    selectFiberForNode(target);
  }

  function onPointerUp(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const selectFiberForNode = lodash_throttle_default()(esm(node => {
    const id = agent.getIDForNode(node);

    if (id !== null) {
      bridge.send('selectFiber', id);
    }
  }), 200, // Don't change the selection in the very first 200ms
  // because those are usually unintentional as you lift the cursor.
  {
    leading: false
  });
}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/views/TraceUpdates/canvas.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
const OUTLINE_COLOR = '#f0f0f0'; // Note these colors are in sync with DevTools Profiler chart colors.

const COLORS = ['#37afa9', '#63b19e', '#80b393', '#97b488', '#abb67d', '#beb771', '#cfb965', '#dfba57', '#efbb49', '#febc38'];
let canvas = null;
function draw(nodeToData) {
  if (canvas === null) {
    initialize();
  }

  const canvasFlow = canvas;
  canvasFlow.width = window.innerWidth;
  canvasFlow.height = window.innerHeight;
  const context = canvasFlow.getContext('2d');
  context.clearRect(0, 0, canvasFlow.width, canvasFlow.height);
  nodeToData.forEach(({
    count,
    rect
  }) => {
    if (rect !== null) {
      const colorIndex = Math.min(COLORS.length - 1, count - 1);
      const color = COLORS[colorIndex];
      drawBorder(context, rect, color);
    }
  });
}

function drawBorder(context, rect, color) {
  const {
    height,
    left,
    top,
    width
  } = rect; // outline

  context.lineWidth = 1;
  context.strokeStyle = OUTLINE_COLOR;
  context.strokeRect(left - 1, top - 1, width + 2, height + 2); // inset

  context.lineWidth = 1;
  context.strokeStyle = OUTLINE_COLOR;
  context.strokeRect(left + 1, top + 1, width - 1, height - 1);
  context.strokeStyle = color;
  context.setLineDash([0]); // border

  context.lineWidth = 1;
  context.strokeRect(left, top, width - 1, height - 1);
  context.setLineDash([0]);
}

function destroy() {
  if (canvas !== null) {
    if (canvas.parentNode != null) {
      canvas.parentNode.removeChild(canvas);
    }

    canvas = null;
  }
}

function initialize() {
  canvas = window.document.createElement('canvas');
  canvas.style.cssText = `
    xx-background-color: red;
    xx-opacity: 0.5;
    bottom: 0;
    left: 0;
    pointer-events: none;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000000000;
  `;
  const root = window.document.documentElement;
  root.insertBefore(canvas, root.firstChild);
}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/views/TraceUpdates/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



// How long the rect should be shown for?
const DISPLAY_DURATION = 250; // What's the longest we are willing to show the overlay for?
// This can be important if we're getting a flurry of events (e.g. scroll update).

const MAX_DISPLAY_DURATION = 3000; // How long should a rect be considered valid for?

const REMEASUREMENT_AFTER_DURATION = 250; // Some environments (e.g. React Native / Hermes) don't support the performance API yet.

const getCurrentTime = typeof performance === 'object' && typeof performance.now === 'function' ? () => performance.now() : () => Date.now();
const nodeToData = new Map();
let TraceUpdates_agent = null;
let drawAnimationFrameID = null;
let isEnabled = false;
let redrawTimeoutID = null;
function TraceUpdates_initialize(injectedAgent) {
  TraceUpdates_agent = injectedAgent;
  TraceUpdates_agent.addListener('traceUpdates', traceUpdates);
}
function toggleEnabled(value) {
  isEnabled = value;

  if (!isEnabled) {
    nodeToData.clear();

    if (drawAnimationFrameID !== null) {
      cancelAnimationFrame(drawAnimationFrameID);
      drawAnimationFrameID = null;
    }

    if (redrawTimeoutID !== null) {
      clearTimeout(redrawTimeoutID);
      redrawTimeoutID = null;
    }

    destroy();
  }
}

function traceUpdates(nodes) {
  if (!isEnabled) {
    return;
  }

  nodes.forEach(node => {
    const data = nodeToData.get(node);
    const now = getCurrentTime();
    let lastMeasuredAt = data != null ? data.lastMeasuredAt : 0;
    let rect = data != null ? data.rect : null;

    if (rect === null || lastMeasuredAt + REMEASUREMENT_AFTER_DURATION < now) {
      lastMeasuredAt = now;
      rect = measureNode(node);
    }

    nodeToData.set(node, {
      count: data != null ? data.count + 1 : 1,
      expirationTime: data != null ? Math.min(now + MAX_DISPLAY_DURATION, data.expirationTime + DISPLAY_DURATION) : now + DISPLAY_DURATION,
      lastMeasuredAt,
      rect
    });
  });

  if (redrawTimeoutID !== null) {
    clearTimeout(redrawTimeoutID);
    redrawTimeoutID = null;
  }

  if (drawAnimationFrameID === null) {
    drawAnimationFrameID = requestAnimationFrame(prepareToDraw);
  }
}

function prepareToDraw() {
  drawAnimationFrameID = null;
  redrawTimeoutID = null;
  const now = getCurrentTime();
  let earliestExpiration = Number.MAX_VALUE; // Remove any items that have already expired.

  nodeToData.forEach((data, node) => {
    if (data.expirationTime < now) {
      nodeToData.delete(node);
    } else {
      earliestExpiration = Math.min(earliestExpiration, data.expirationTime);
    }
  });
  draw(nodeToData);

  if (earliestExpiration !== Number.MAX_VALUE) {
    redrawTimeoutID = setTimeout(prepareToDraw, earliestExpiration - now);
  }
}

function measureNode(node) {
  if (!node || typeof node.getBoundingClientRect !== 'function') {
    return null;
  }

  const currentWindow = window.__REACT_DEVTOOLS_TARGET_WINDOW__ || window;
  return getNestedBoundingClientRect(node, currentWindow);
}
// EXTERNAL MODULE: ../react-devtools-shared/src/backend/console.js + 3 modules
var backend_console = __webpack_require__(10);

// EXTERNAL MODULE: ../react-devtools-shared/src/bridge.js
var src_bridge = __webpack_require__(16);

// EXTERNAL MODULE: ../react-devtools-shared/src/backend/utils.js
var utils = __webpack_require__(4);

// CONCATENATED MODULE: ../react-devtools-shared/src/backend/agent.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */










const debug = (methodName, ...args) => {
  if (constants["n" /* __DEBUG__ */]) {
    console.log(`%cAgent %c${methodName}`, 'color: purple; font-weight: bold;', 'font-weight: bold;', ...args);
  }
};

class agent_Agent extends events["a" /* default */] {
  constructor(bridge) {
    super();

    _defineProperty(this, "_isProfiling", false);

    _defineProperty(this, "_recordChangeDescriptions", false);

    _defineProperty(this, "_rendererInterfaces", {});

    _defineProperty(this, "_persistedSelection", null);

    _defineProperty(this, "_persistedSelectionMatch", null);

    _defineProperty(this, "_traceUpdatesEnabled", false);

    _defineProperty(this, "clearErrorsAndWarnings", ({
      rendererID
    }) => {
      const renderer = this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn(`Invalid renderer id "${rendererID}"`);
      } else {
        renderer.clearErrorsAndWarnings();
      }
    });

    _defineProperty(this, "clearErrorsForFiberID", ({
      id,
      rendererID
    }) => {
      const renderer = this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn(`Invalid renderer id "${rendererID}"`);
      } else {
        renderer.clearErrorsForFiberID(id);
      }
    });

    _defineProperty(this, "clearWarningsForFiberID", ({
      id,
      rendererID
    }) => {
      const renderer = this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn(`Invalid renderer id "${rendererID}"`);
      } else {
        renderer.clearWarningsForFiberID(id);
      }
    });

    _defineProperty(this, "copyElementPath", ({
      id,
      path,
      rendererID
    }) => {
      const renderer = this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn(`Invalid renderer id "${rendererID}" for element "${id}"`);
      } else {
        renderer.copyElementPath(id, path);
      }
    });

    _defineProperty(this, "deletePath", ({
      hookID,
      id,
      path,
      rendererID,
      type
    }) => {
      const renderer = this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn(`Invalid renderer id "${rendererID}" for element "${id}"`);
      } else {
        renderer.deletePath(type, id, hookID, path);
      }
    });

    _defineProperty(this, "getBridgeProtocol", () => {
      this._bridge.send('bridgeProtocol', src_bridge["currentBridgeProtocol"]);
    });

    _defineProperty(this, "getProfilingData", ({
      rendererID
    }) => {
      const renderer = this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn(`Invalid renderer id "${rendererID}"`);
      }

      this._bridge.send('profilingData', renderer.getProfilingData());
    });

    _defineProperty(this, "getProfilingStatus", () => {
      this._bridge.send('profilingStatus', this._isProfiling);
    });

    _defineProperty(this, "getOwnersList", ({
      id,
      rendererID
    }) => {
      const renderer = this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn(`Invalid renderer id "${rendererID}" for element "${id}"`);
      } else {
        const owners = renderer.getOwnersList(id);

        this._bridge.send('ownersList', {
          id,
          owners
        });
      }
    });

    _defineProperty(this, "inspectElement", ({
      id,
      path,
      rendererID,
      requestID
    }) => {
      const renderer = this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn(`Invalid renderer id "${rendererID}" for element "${id}"`);
      } else {
        this._bridge.send('inspectedElement', renderer.inspectElement(requestID, id, path)); // When user selects an element, stop trying to restore the selection,
        // and instead remember the current selection for the next reload.


        if (this._persistedSelectionMatch === null || this._persistedSelectionMatch.id !== id) {
          this._persistedSelection = null;
          this._persistedSelectionMatch = null;
          renderer.setTrackedPath(null);

          this._throttledPersistSelection(rendererID, id);
        } // TODO: If there was a way to change the selected DOM element
        // in native Elements tab without forcing a switch to it, we'd do it here.
        // For now, it doesn't seem like there is a way to do that:
        // https://github.com/bvaughn/react-devtools-experimental/issues/102
        // (Setting $0 doesn't work, and calling inspect() switches the tab.)

      }
    });

    _defineProperty(this, "logElementToConsole", ({
      id,
      rendererID
    }) => {
      const renderer = this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn(`Invalid renderer id "${rendererID}" for element "${id}"`);
      } else {
        renderer.logElementToConsole(id);
      }
    });

    _defineProperty(this, "overrideError", ({
      id,
      rendererID,
      forceError
    }) => {
      const renderer = this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn(`Invalid renderer id "${rendererID}" for element "${id}"`);
      } else {
        renderer.overrideError(id, forceError);
      }
    });

    _defineProperty(this, "overrideSuspense", ({
      id,
      rendererID,
      forceFallback
    }) => {
      const renderer = this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn(`Invalid renderer id "${rendererID}" for element "${id}"`);
      } else {
        renderer.overrideSuspense(id, forceFallback);
      }
    });

    _defineProperty(this, "overrideValueAtPath", ({
      hookID,
      id,
      path,
      rendererID,
      type,
      value
    }) => {
      const renderer = this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn(`Invalid renderer id "${rendererID}" for element "${id}"`);
      } else {
        renderer.overrideValueAtPath(type, id, hookID, path, value);
      }
    });

    _defineProperty(this, "overrideContext", ({
      id,
      path,
      rendererID,
      wasForwarded,
      value
    }) => {
      // Don't forward a message that's already been forwarded by the front-end Bridge.
      // We only need to process the override command once!
      if (!wasForwarded) {
        this.overrideValueAtPath({
          id,
          path,
          rendererID,
          type: 'context',
          value
        });
      }
    });

    _defineProperty(this, "overrideHookState", ({
      id,
      hookID,
      path,
      rendererID,
      wasForwarded,
      value
    }) => {
      // Don't forward a message that's already been forwarded by the front-end Bridge.
      // We only need to process the override command once!
      if (!wasForwarded) {
        this.overrideValueAtPath({
          id,
          path,
          rendererID,
          type: 'hooks',
          value
        });
      }
    });

    _defineProperty(this, "overrideProps", ({
      id,
      path,
      rendererID,
      wasForwarded,
      value
    }) => {
      // Don't forward a message that's already been forwarded by the front-end Bridge.
      // We only need to process the override command once!
      if (!wasForwarded) {
        this.overrideValueAtPath({
          id,
          path,
          rendererID,
          type: 'props',
          value
        });
      }
    });

    _defineProperty(this, "overrideState", ({
      id,
      path,
      rendererID,
      wasForwarded,
      value
    }) => {
      // Don't forward a message that's already been forwarded by the front-end Bridge.
      // We only need to process the override command once!
      if (!wasForwarded) {
        this.overrideValueAtPath({
          id,
          path,
          rendererID,
          type: 'state',
          value
        });
      }
    });

    _defineProperty(this, "reloadAndProfile", recordChangeDescriptions => {
      Object(storage["e" /* sessionStorageSetItem */])(constants["g" /* SESSION_STORAGE_RELOAD_AND_PROFILE_KEY */], 'true');
      Object(storage["e" /* sessionStorageSetItem */])(constants["f" /* SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY */], recordChangeDescriptions ? 'true' : 'false'); // This code path should only be hit if the shell has explicitly told the Store that it supports profiling.
      // In that case, the shell must also listen for this specific message to know when it needs to reload the app.
      // The agent can't do this in a way that is renderer agnostic.

      this._bridge.send('reloadAppForProfiling');
    });

    _defineProperty(this, "renamePath", ({
      hookID,
      id,
      newPath,
      oldPath,
      rendererID,
      type
    }) => {
      const renderer = this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn(`Invalid renderer id "${rendererID}" for element "${id}"`);
      } else {
        renderer.renamePath(type, id, hookID, oldPath, newPath);
      }
    });

    _defineProperty(this, "setTraceUpdatesEnabled", traceUpdatesEnabled => {
      this._traceUpdatesEnabled = traceUpdatesEnabled;
      toggleEnabled(traceUpdatesEnabled);

      for (const rendererID in this._rendererInterfaces) {
        const renderer = this._rendererInterfaces[rendererID];
        renderer.setTraceUpdatesEnabled(traceUpdatesEnabled);
      }
    });

    _defineProperty(this, "syncSelectionFromNativeElementsPanel", () => {
      const target = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$0;

      if (target == null) {
        return;
      }

      this.selectNode(target);
    });

    _defineProperty(this, "shutdown", () => {
      // Clean up the overlay if visible, and associated events.
      this.emit('shutdown');
    });

    _defineProperty(this, "startProfiling", recordChangeDescriptions => {
      this._recordChangeDescriptions = recordChangeDescriptions;
      this._isProfiling = true;

      for (const rendererID in this._rendererInterfaces) {
        const renderer = this._rendererInterfaces[rendererID];
        renderer.startProfiling(recordChangeDescriptions);
      }

      this._bridge.send('profilingStatus', this._isProfiling);
    });

    _defineProperty(this, "stopProfiling", () => {
      this._isProfiling = false;
      this._recordChangeDescriptions = false;

      for (const rendererID in this._rendererInterfaces) {
        const renderer = this._rendererInterfaces[rendererID];
        renderer.stopProfiling();
      }

      this._bridge.send('profilingStatus', this._isProfiling);
    });

    _defineProperty(this, "storeAsGlobal", ({
      count,
      id,
      path,
      rendererID
    }) => {
      const renderer = this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn(`Invalid renderer id "${rendererID}" for element "${id}"`);
      } else {
        renderer.storeAsGlobal(id, path, count);
      }
    });

    _defineProperty(this, "updateConsolePatchSettings", ({
      appendComponentStack,
      breakOnConsoleErrors,
      showInlineWarningsAndErrors
    }) => {
      // If the frontend preference has change,
      // or in the case of React Native- if the backend is just finding out the preference-
      // then install or uninstall the console overrides.
      // It's safe to call these methods multiple times, so we don't need to worry about that.
      if (appendComponentStack || breakOnConsoleErrors || showInlineWarningsAndErrors) {
        Object(backend_console["a" /* patch */])({
          appendComponentStack,
          breakOnConsoleErrors,
          showInlineWarningsAndErrors
        });
      } else {
        Object(backend_console["c" /* unpatch */])();
      }
    });

    _defineProperty(this, "updateComponentFilters", componentFilters => {
      for (const rendererID in this._rendererInterfaces) {
        const renderer = this._rendererInterfaces[rendererID];
        renderer.updateComponentFilters(componentFilters);
      }
    });

    _defineProperty(this, "viewAttributeSource", ({
      id,
      path,
      rendererID
    }) => {
      const renderer = this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn(`Invalid renderer id "${rendererID}" for element "${id}"`);
      } else {
        renderer.prepareViewAttributeSource(id, path);
      }
    });

    _defineProperty(this, "viewElementSource", ({
      id,
      rendererID
    }) => {
      const renderer = this._rendererInterfaces[rendererID];

      if (renderer == null) {
        console.warn(`Invalid renderer id "${rendererID}" for element "${id}"`);
      } else {
        renderer.prepareViewElementSource(id);
      }
    });

    _defineProperty(this, "onTraceUpdates", nodes => {
      this.emit('traceUpdates', nodes);
    });

    _defineProperty(this, "onFastRefreshScheduled", () => {
      if (constants["n" /* __DEBUG__ */]) {
        debug('onFastRefreshScheduled');
      }

      this._bridge.send('fastRefreshScheduled');
    });

    _defineProperty(this, "onHookOperations", operations => {
      if (constants["n" /* __DEBUG__ */]) {
        debug('onHookOperations', `(${operations.length}) [${operations.join(', ')}]`);
      } // TODO:
      // The chrome.runtime does not currently support transferables; it forces JSON serialization.
      // See bug https://bugs.chromium.org/p/chromium/issues/detail?id=927134
      //
      // Regarding transferables, the postMessage doc states:
      // If the ownership of an object is transferred, it becomes unusable (neutered)
      // in the context it was sent from and becomes available only to the worker it was sent to.
      //
      // Even though Chrome is eventually JSON serializing the array buffer,
      // using the transferable approach also sometimes causes it to throw:
      //   DOMException: Failed to execute 'postMessage' on 'Window': ArrayBuffer at index 0 is already neutered.
      //
      // See bug https://github.com/bvaughn/react-devtools-experimental/issues/25
      //
      // The Store has a fallback in place that parses the message as JSON if the type isn't an array.
      // For now the simplest fix seems to be to not transfer the array.
      // This will negatively impact performance on Firefox so it's unfortunate,
      // but until we're able to fix the Chrome error mentioned above, it seems necessary.
      //
      // this._bridge.send('operations', operations, [operations.buffer]);


      this._bridge.send('operations', operations);

      if (this._persistedSelection !== null) {
        const rendererID = operations[0];

        if (this._persistedSelection.rendererID === rendererID) {
          // Check if we can select a deeper match for the persisted selection.
          const renderer = this._rendererInterfaces[rendererID];

          if (renderer == null) {
            console.warn(`Invalid renderer id "${rendererID}"`);
          } else {
            const prevMatch = this._persistedSelectionMatch;
            const nextMatch = renderer.getBestMatchForTrackedPath();
            this._persistedSelectionMatch = nextMatch;
            const prevMatchID = prevMatch !== null ? prevMatch.id : null;
            const nextMatchID = nextMatch !== null ? nextMatch.id : null;

            if (prevMatchID !== nextMatchID) {
              if (nextMatchID !== null) {
                // We moved forward, unlocking a deeper node.
                this._bridge.send('selectFiber', nextMatchID);
              }
            }

            if (nextMatch !== null && nextMatch.isFullMatch) {
              // We've just unlocked the innermost selected node.
              // There's no point tracking it further.
              this._persistedSelection = null;
              this._persistedSelectionMatch = null;
              renderer.setTrackedPath(null);
            }
          }
        }
      }
    });

    _defineProperty(this, "_throttledPersistSelection", lodash_throttle_default()((rendererID, id) => {
      // This is throttled, so both renderer and selected ID
      // might not be available by the time we read them.
      // This is why we need the defensive checks here.
      const renderer = this._rendererInterfaces[rendererID];
      const path = renderer != null ? renderer.getPathForElement(id) : null;

      if (path !== null) {
        Object(storage["e" /* sessionStorageSetItem */])(constants["e" /* SESSION_STORAGE_LAST_SELECTION_KEY */], JSON.stringify({
          rendererID,
          path
        }));
      } else {
        Object(storage["d" /* sessionStorageRemoveItem */])(constants["e" /* SESSION_STORAGE_LAST_SELECTION_KEY */]);
      }
    }, 1000));

    if (Object(storage["c" /* sessionStorageGetItem */])(constants["g" /* SESSION_STORAGE_RELOAD_AND_PROFILE_KEY */]) === 'true') {
      this._recordChangeDescriptions = Object(storage["c" /* sessionStorageGetItem */])(constants["f" /* SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY */]) === 'true';
      this._isProfiling = true;
      Object(storage["d" /* sessionStorageRemoveItem */])(constants["f" /* SESSION_STORAGE_RECORD_CHANGE_DESCRIPTIONS_KEY */]);
      Object(storage["d" /* sessionStorageRemoveItem */])(constants["g" /* SESSION_STORAGE_RELOAD_AND_PROFILE_KEY */]);
    }

    const persistedSelectionString = Object(storage["c" /* sessionStorageGetItem */])(constants["e" /* SESSION_STORAGE_LAST_SELECTION_KEY */]);

    if (persistedSelectionString != null) {
      this._persistedSelection = JSON.parse(persistedSelectionString);
    }

    this._bridge = bridge;
    bridge.addListener('clearErrorsAndWarnings', this.clearErrorsAndWarnings);
    bridge.addListener('clearErrorsForFiberID', this.clearErrorsForFiberID);
    bridge.addListener('clearWarningsForFiberID', this.clearWarningsForFiberID);
    bridge.addListener('copyElementPath', this.copyElementPath);
    bridge.addListener('deletePath', this.deletePath);
    bridge.addListener('getBridgeProtocol', this.getBridgeProtocol);
    bridge.addListener('getProfilingData', this.getProfilingData);
    bridge.addListener('getProfilingStatus', this.getProfilingStatus);
    bridge.addListener('getOwnersList', this.getOwnersList);
    bridge.addListener('inspectElement', this.inspectElement);
    bridge.addListener('logElementToConsole', this.logElementToConsole);
    bridge.addListener('overrideError', this.overrideError);
    bridge.addListener('overrideSuspense', this.overrideSuspense);
    bridge.addListener('overrideValueAtPath', this.overrideValueAtPath);
    bridge.addListener('reloadAndProfile', this.reloadAndProfile);
    bridge.addListener('renamePath', this.renamePath);
    bridge.addListener('setTraceUpdatesEnabled', this.setTraceUpdatesEnabled);
    bridge.addListener('startProfiling', this.startProfiling);
    bridge.addListener('stopProfiling', this.stopProfiling);
    bridge.addListener('storeAsGlobal', this.storeAsGlobal);
    bridge.addListener('syncSelectionFromNativeElementsPanel', this.syncSelectionFromNativeElementsPanel);
    bridge.addListener('shutdown', this.shutdown);
    bridge.addListener('updateConsolePatchSettings', this.updateConsolePatchSettings);
    bridge.addListener('updateComponentFilters', this.updateComponentFilters);
    bridge.addListener('viewAttributeSource', this.viewAttributeSource);
    bridge.addListener('viewElementSource', this.viewElementSource); // Temporarily support older standalone front-ends sending commands to newer embedded backends.
    // We do this because React Native embeds the React DevTools backend,
    // but cannot control which version of the frontend users use.

    bridge.addListener('overrideContext', this.overrideContext);
    bridge.addListener('overrideHookState', this.overrideHookState);
    bridge.addListener('overrideProps', this.overrideProps);
    bridge.addListener('overrideState', this.overrideState);

    if (this._isProfiling) {
      bridge.send('profilingStatus', true);
    } // Notify the frontend if the backend supports the Storage API (e.g. localStorage).
    // If not, features like reload-and-profile will not work correctly and must be disabled.


    let isBackendStorageAPISupported = false;

    try {
      localStorage.getItem('test');
      isBackendStorageAPISupported = true;
    } catch (error) {}

    bridge.send('isBackendStorageAPISupported', isBackendStorageAPISupported);
    bridge.send('isSynchronousXHRSupported', Object(utils["h" /* isSynchronousXHRSupported */])());
    setupHighlighter(bridge, this);
    TraceUpdates_initialize(this);

    // Hook for sending messages via record/replay evaluations.
    window.__RECORD_REPLAY_REACT_DEVTOOLS_SEND_MESSAGE__ = (inEvent, inData) => {
      let rv;
      this._bridge = {
        send(event, data) {
          rv = { event, data };
        }
      };
      this[inEvent](inData);
      return rv;
    };
  }

  get rendererInterfaces() {
    return this._rendererInterfaces;
  }

  getInstanceAndStyle({
    id,
    rendererID
  }) {
    const renderer = this._rendererInterfaces[rendererID];

    if (renderer == null) {
      console.warn(`Invalid renderer id "${rendererID}"`);
      return null;
    }

    return renderer.getInstanceAndStyle(id);
  }

  getIDForNode(node) {
    for (const rendererID in this._rendererInterfaces) {
      const renderer = this._rendererInterfaces[rendererID];

      try {
        const id = renderer.getFiberIDForNative(node, true);

        if (id !== null) {
          return id;
        }
      } catch (error) {// Some old React versions might throw if they can't find a match.
        // If so we should ignore it...
      }
    }

    return null;
  }

  selectNode(target) {
    const id = this.getIDForNode(target);

    if (id !== null) {
      this._bridge.send('selectFiber', id);
    }
  }

  setRendererInterface(rendererID, rendererInterface) {
    this._rendererInterfaces[rendererID] = rendererInterface;

    if (this._isProfiling) {
      rendererInterface.startProfiling(this._recordChangeDescriptions);
    }

    rendererInterface.setTraceUpdatesEnabled(this._traceUpdatesEnabled); // When the renderer is attached, we need to tell it whether
    // we remember the previous selection that we'd like to restore.
    // It'll start tracking mounts for matches to the last selection path.

    const selection = this._persistedSelection;

    if (selection !== null && selection.rendererID === rendererID) {
      rendererInterface.setTrackedPath(selection.path);
    }
  }

  onUnsupportedRenderer(rendererID) {
    this._bridge.send('unsupportedRendererVersion', rendererID);
  }

}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRIDGE_PROTOCOL", function() { return BRIDGE_PROTOCOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentBridgeProtocol", function() { return currentBridgeProtocol; });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const BATCH_DURATION = 100; // This message specifies the version of the DevTools protocol currently supported by the backend,
// as well as the earliest NPM version (e.g. "4.13.0") that protocol is supported by on the frontend.
// This enables an older frontend to display an upgrade message to users for a newer, unsupported backend.

// Bump protocol version whenever a backwards breaking change is made
// in the messages sent between BackendBridge and FrontendBridge.
// This mapping is embedded in both frontend and backend builds.
//
// The backend protocol will always be the latest entry in the BRIDGE_PROTOCOL array.
//
// When an older frontend connects to a newer backend,
// the backend can send the minNpmVersion and the frontend can display an NPM upgrade prompt.
//
// When a newer frontend connects with an older protocol version,
// the frontend can use the embedded minNpmVersion/maxNpmVersion values to display a downgrade prompt.
const BRIDGE_PROTOCOL = [// This version technically never existed,
// but a backwards breaking change was added in 4.11,
// so the safest guess to downgrade the frontend would be to version 4.10.
{
  version: 0,
  minNpmVersion: '"<4.11.0"',
  maxNpmVersion: '"<4.11.0"'
}, {
  version: 1,
  minNpmVersion: '4.13.0',
  maxNpmVersion: null
}];
const currentBridgeProtocol = BRIDGE_PROTOCOL[BRIDGE_PROTOCOL.length - 1];

class Bridge extends _events__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] {
  constructor(wall) {
    super();

    _defineProperty(this, "_isShutdown", false);

    _defineProperty(this, "_messageQueue", []);

    _defineProperty(this, "_timeoutID", null);

    _defineProperty(this, "_wallUnlisten", null);

    _defineProperty(this, "_flush", () => {
      // This method is used after the bridge is marked as destroyed in shutdown sequence,
      // so we do not bail out if the bridge marked as destroyed.
      // It is a private method that the bridge ensures is only called at the right times.
      if (this._timeoutID !== null) {
        clearTimeout(this._timeoutID);
        this._timeoutID = null;
      }

      if (this._messageQueue.length) {
        for (let i = 0; i < this._messageQueue.length; i += 2) {
          this._wall.send(this._messageQueue[i], ...this._messageQueue[i + 1]);
        }

        this._messageQueue.length = 0; // Check again for queued messages in BATCH_DURATION ms. This will keep
        // flushing in a loop as long as messages continue to be added. Once no
        // more are, the timer expires.

        this._timeoutID = setTimeout(this._flush, BATCH_DURATION);
      }
    });

    _defineProperty(this, "overrideValueAtPath", ({
      id,
      path,
      rendererID,
      type,
      value
    }) => {
      switch (type) {
        case 'context':
          this.send('overrideContext', {
            id,
            path,
            rendererID,
            wasForwarded: true,
            value
          });
          break;

        case 'hooks':
          this.send('overrideHookState', {
            id,
            path,
            rendererID,
            wasForwarded: true,
            value
          });
          break;

        case 'props':
          this.send('overrideProps', {
            id,
            path,
            rendererID,
            wasForwarded: true,
            value
          });
          break;

        case 'state':
          this.send('overrideState', {
            id,
            path,
            rendererID,
            wasForwarded: true,
            value
          });
          break;
      }
    });

    this._wall = wall;
    this._wallUnlisten = wall.listen(message => {
      this.emit(message.event, message.payload);
    }) || null; // Temporarily support older standalone front-ends sending commands to newer embedded backends.
    // We do this because React Native embeds the React DevTools backend,
    // but cannot control which version of the frontend users use.

    this.addListener('overrideValueAtPath', this.overrideValueAtPath);
  } // Listening directly to the wall isn't advised.
  // It can be used to listen for legacy (v3) messages (since they use a different format).


  get wall() {
    return this._wall;
  }

  send(event, ...payload) {
    if (this._isShutdown) {
      console.warn(`Cannot send message "${event}" through a Bridge that has been shutdown.`);
      return;
    } // When we receive a message:
    // - we add it to our queue of messages to be sent
    // - if there hasn't been a message recently, we set a timer for 0 ms in
    //   the future, allowing all messages created in the same tick to be sent
    //   together
    // - if there *has* been a message flushed in the last BATCH_DURATION ms
    //   (or we're waiting for our setTimeout-0 to fire), then _timeoutID will
    //   be set, and we'll simply add to the queue and wait for that


    this._messageQueue.push(event, payload);

    if (!this._timeoutID) {
      this._timeoutID = setTimeout(this._flush, 0);
    }
  }

  shutdown() {
    if (this._isShutdown) {
      console.warn('Bridge was already shutdown.');
      return;
    } // Queue the shutdown outgoing message for subscribers.


    this.send('shutdown'); // Mark this bridge as destroyed, i.e. disable its public API.

    this._isShutdown = true; // Disable the API inherited from EventEmitter that can add more listeners and send more messages.
    // $FlowFixMe This property is not writable.

    this.addListener = function () {}; // $FlowFixMe This property is not writable.


    this.emit = function () {}; // NOTE: There's also EventEmitter API like `on` and `prependListener` that we didn't add to our Flow type of EventEmitter.
    // Unsubscribe this bridge incoming message listeners to be sure, and so they don't have to do that.


    this.removeAllListeners(); // Stop accepting and emitting incoming messages from the wall.

    const wallUnlisten = this._wallUnlisten;

    if (wallUnlisten) {
      wallUnlisten();
    } // Synchronously flush all queued outgoing messages.
    // At this step the subscribers' code may run in this call stack.


    do {
      this._flush();
    } while (this._messageQueue.length); // Make sure once again that there is no dangling timer.


    if (this._timeoutID !== null) {
      clearTimeout(this._timeoutID);
      this._timeoutID = null;
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Bridge);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // A linked list to keep track of recently-used-ness

const Yallist = __webpack_require__(23);

const MAX = Symbol('max');
const LENGTH = Symbol('length');
const LENGTH_CALCULATOR = Symbol('lengthCalculator');
const ALLOW_STALE = Symbol('allowStale');
const MAX_AGE = Symbol('maxAge');
const DISPOSE = Symbol('dispose');
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet');
const LRU_LIST = Symbol('lruList');
const CACHE = Symbol('cache');
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet');

const naiveLength = () => 1; // lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.


class LRUCache {
  constructor(options) {
    if (typeof options === 'number') options = {
      max: options
    };
    if (!options) options = {};
    if (options.max && (typeof options.max !== 'number' || options.max < 0)) throw new TypeError('max must be a non-negative number'); // Kind of weird to have a default max of Infinity, but oh well.

    const max = this[MAX] = options.max || Infinity;
    const lc = options.length || naiveLength;
    this[LENGTH_CALCULATOR] = typeof lc !== 'function' ? naiveLength : lc;
    this[ALLOW_STALE] = options.stale || false;
    if (options.maxAge && typeof options.maxAge !== 'number') throw new TypeError('maxAge must be a number');
    this[MAX_AGE] = options.maxAge || 0;
    this[DISPOSE] = options.dispose;
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
    this.reset();
  } // resize the cache when the max changes.


  set max(mL) {
    if (typeof mL !== 'number' || mL < 0) throw new TypeError('max must be a non-negative number');
    this[MAX] = mL || Infinity;
    trim(this);
  }

  get max() {
    return this[MAX];
  }

  set allowStale(allowStale) {
    this[ALLOW_STALE] = !!allowStale;
  }

  get allowStale() {
    return this[ALLOW_STALE];
  }

  set maxAge(mA) {
    if (typeof mA !== 'number') throw new TypeError('maxAge must be a non-negative number');
    this[MAX_AGE] = mA;
    trim(this);
  }

  get maxAge() {
    return this[MAX_AGE];
  } // resize the cache when the lengthCalculator changes.


  set lengthCalculator(lC) {
    if (typeof lC !== 'function') lC = naiveLength;

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC;
      this[LENGTH] = 0;
      this[LRU_LIST].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
        this[LENGTH] += hit.length;
      });
    }

    trim(this);
  }

  get lengthCalculator() {
    return this[LENGTH_CALCULATOR];
  }

  get length() {
    return this[LENGTH];
  }

  get itemCount() {
    return this[LRU_LIST].length;
  }

  rforEach(fn, thisp) {
    thisp = thisp || this;

    for (let walker = this[LRU_LIST].tail; walker !== null;) {
      const prev = walker.prev;
      forEachStep(this, fn, walker, thisp);
      walker = prev;
    }
  }

  forEach(fn, thisp) {
    thisp = thisp || this;

    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next;
      forEachStep(this, fn, walker, thisp);
      walker = next;
    }
  }

  keys() {
    return this[LRU_LIST].toArray().map(k => k.key);
  }

  values() {
    return this[LRU_LIST].toArray().map(k => k.value);
  }

  reset() {
    if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
      this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value));
    }

    this[CACHE] = new Map(); // hash of items by key

    this[LRU_LIST] = new Yallist(); // list of items in order of use recency

    this[LENGTH] = 0; // length of items in the list
  }

  dump() {
    return this[LRU_LIST].map(hit => isStale(this, hit) ? false : {
      k: hit.key,
      v: hit.value,
      e: hit.now + (hit.maxAge || 0)
    }).toArray().filter(h => h);
  }

  dumpLru() {
    return this[LRU_LIST];
  }

  set(key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE];
    if (maxAge && typeof maxAge !== 'number') throw new TypeError('maxAge must be a number');
    const now = maxAge ? Date.now() : 0;
    const len = this[LENGTH_CALCULATOR](value, key);

    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key));
        return false;
      }

      const node = this[CACHE].get(key);
      const item = node.value; // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking

      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET]) this[DISPOSE](key, item.value);
      }

      item.now = now;
      item.maxAge = maxAge;
      item.value = value;
      this[LENGTH] += len - item.length;
      item.length = len;
      this.get(key);
      trim(this);
      return true;
    }

    const hit = new Entry(key, value, len, now, maxAge); // oversized objects fall out of cache automatically.

    if (hit.length > this[MAX]) {
      if (this[DISPOSE]) this[DISPOSE](key, value);
      return false;
    }

    this[LENGTH] += hit.length;
    this[LRU_LIST].unshift(hit);
    this[CACHE].set(key, this[LRU_LIST].head);
    trim(this);
    return true;
  }

  has(key) {
    if (!this[CACHE].has(key)) return false;
    const hit = this[CACHE].get(key).value;
    return !isStale(this, hit);
  }

  get(key) {
    return get(this, key, true);
  }

  peek(key) {
    return get(this, key, false);
  }

  pop() {
    const node = this[LRU_LIST].tail;
    if (!node) return null;
    del(this, node);
    return node.value;
  }

  del(key) {
    del(this, this[CACHE].get(key));
  }

  load(arr) {
    // reset the cache
    this.reset();
    const now = Date.now(); // A previous serialized cache has the most recent items first

    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l];
      const expiresAt = hit.e || 0;
      if (expiresAt === 0) // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v);else {
        const maxAge = expiresAt - now; // dont add already expired items

        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge);
        }
      }
    }
  }

  prune() {
    this[CACHE].forEach((value, key) => get(this, key, false));
  }

}

const get = (self, key, doUse) => {
  const node = self[CACHE].get(key);

  if (node) {
    const hit = node.value;

    if (isStale(self, hit)) {
      del(self, node);
      if (!self[ALLOW_STALE]) return undefined;
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET]) node.value.now = Date.now();
        self[LRU_LIST].unshiftNode(node);
      }
    }

    return hit.value;
  }
};

const isStale = (self, hit) => {
  if (!hit || !hit.maxAge && !self[MAX_AGE]) return false;
  const diff = Date.now() - hit.now;
  return hit.maxAge ? diff > hit.maxAge : self[MAX_AGE] && diff > self[MAX_AGE];
};

const trim = self => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail; self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev;
      del(self, walker);
      walker = prev;
    }
  }
};

const del = (self, node) => {
  if (node) {
    const hit = node.value;
    if (self[DISPOSE]) self[DISPOSE](hit.key, hit.value);
    self[LENGTH] -= hit.length;
    self[CACHE].delete(hit.key);
    self[LRU_LIST].removeNode(node);
  }
};

class Entry {
  constructor(key, value, length, now, maxAge) {
    this.key = key;
    this.value = value;
    this.length = length;
    this.now = now;
    this.maxAge = maxAge || 0;
  }

}

const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value;

  if (isStale(self, hit)) {
    del(self, node);
    if (!self[ALLOW_STALE]) hit = undefined;
  }

  if (hit) fn.call(thisp, hit.value, hit.key, self);
};

module.exports = LRUCache;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

//  Import support https://stackoverflow.com/questions/13673346/supporting-both-commonjs-and-amd
(function (name, definition) {
  if (true) {
    module.exports = definition();
  } else {}
})("clipboard", function () {
  if (typeof document === 'undefined' || !document.addEventListener) {
    return null;
  }

  var clipboard = {};

  clipboard.copy = function () {
    var _intercept = false;
    var _data = null; // Map from data type (e.g. "text/html") to value.

    var _bogusSelection = false;

    function cleanup() {
      _intercept = false;
      _data = null;

      if (_bogusSelection) {
        window.getSelection().removeAllRanges();
      }

      _bogusSelection = false;
    }

    document.addEventListener("copy", function (e) {
      if (_intercept) {
        for (var key in _data) {
          e.clipboardData.setData(key, _data[key]);
        }

        e.preventDefault();
      }
    }); // Workaround for Safari: https://bugs.webkit.org/show_bug.cgi?id=156529

    function bogusSelect() {
      var sel = document.getSelection(); // If "nothing" is selected...

      if (!document.queryCommandEnabled("copy") && sel.isCollapsed) {
        // ... temporarily select the entire body.
        //
        // We select the entire body because:
        // - it's guaranteed to exist,
        // - it works (unlike, say, document.head, or phantom element that is
        //   not inserted into the DOM),
        // - it doesn't seem to flicker (due to the synchronous copy event), and
        // - it avoids modifying the DOM (can trigger mutation observers).
        //
        // Because we can't do proper feature detection (we already checked
        // document.queryCommandEnabled("copy") , which actually gives a false
        // negative for Blink when nothing is selected) and UA sniffing is not
        // reliable (a lot of UA strings contain "Safari"), this will also
        // happen for some browsers other than Safari. :-()
        var range = document.createRange();
        range.selectNodeContents(document.body);
        sel.removeAllRanges();
        sel.addRange(range);
        _bogusSelection = true;
      }
    }

    ;
    return function (data) {
      return new Promise(function (resolve, reject) {
        _intercept = true;

        if (typeof data === "string") {
          _data = {
            "text/plain": data
          };
        } else if (data instanceof Node) {
          _data = {
            "text/html": new XMLSerializer().serializeToString(data)
          };
        } else if (data instanceof Object) {
          _data = data;
        } else {
          reject("Invalid data type. Must be string, DOM node, or an object mapping MIME types to strings.");
        }

        function triggerCopy(tryBogusSelect) {
          try {
            if (document.execCommand("copy")) {
              // document.execCommand is synchronous: http://www.w3.org/TR/2015/WD-clipboard-apis-20150421/#integration-with-rich-text-editing-apis
              // So we can call resolve() back here.
              cleanup();
              resolve();
            } else {
              if (!tryBogusSelect) {
                bogusSelect();
                triggerCopy(true);
              } else {
                cleanup();
                throw new Error("Unable to copy. Perhaps it's not available in your browser?");
              }
            }
          } catch (e) {
            cleanup();
            reject(e);
          }
        }

        triggerCopy(false);
      });
    };
  }();

  clipboard.paste = function () {
    var _intercept = false;

    var _resolve;

    var _dataType;

    document.addEventListener("paste", function (e) {
      if (_intercept) {
        _intercept = false;
        e.preventDefault();
        var resolve = _resolve;
        _resolve = null;
        resolve(e.clipboardData.getData(_dataType));
      }
    });
    return function (dataType) {
      return new Promise(function (resolve, reject) {
        _intercept = true;
        _resolve = resolve;
        _dataType = dataType || "text/plain";

        try {
          if (!document.execCommand("paste")) {
            _intercept = false;
            reject(new Error("Unable to paste. Pasting only works in Internet Explorer at the moment."));
          }
        } catch (e) {
          _intercept = false;
          reject(new Error(e));
        }
      });
    };
  }(); // Handle IE behaviour.


  if (typeof ClipboardEvent === "undefined" && typeof window.clipboardData !== "undefined" && typeof window.clipboardData.setData !== "undefined") {
    /*! promise-polyfill 2.0.1 */
    (function (a) {
      function b(a, b) {
        return function () {
          a.apply(b, arguments);
        };
      }

      function c(a) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof a) throw new TypeError("not a function");
        this._state = null, this._value = null, this._deferreds = [], i(a, b(e, this), b(f, this));
      }

      function d(a) {
        var b = this;
        return null === this._state ? void this._deferreds.push(a) : void j(function () {
          var c = b._state ? a.onFulfilled : a.onRejected;
          if (null === c) return void (b._state ? a.resolve : a.reject)(b._value);
          var d;

          try {
            d = c(b._value);
          } catch (e) {
            return void a.reject(e);
          }

          a.resolve(d);
        });
      }

      function e(a) {
        try {
          if (a === this) throw new TypeError("A promise cannot be resolved with itself.");

          if (a && ("object" == typeof a || "function" == typeof a)) {
            var c = a.then;
            if ("function" == typeof c) return void i(b(c, a), b(e, this), b(f, this));
          }

          this._state = !0, this._value = a, g.call(this);
        } catch (d) {
          f.call(this, d);
        }
      }

      function f(a) {
        this._state = !1, this._value = a, g.call(this);
      }

      function g() {
        for (var a = 0, b = this._deferreds.length; b > a; a++) d.call(this, this._deferreds[a]);

        this._deferreds = null;
      }

      function h(a, b, c, d) {
        this.onFulfilled = "function" == typeof a ? a : null, this.onRejected = "function" == typeof b ? b : null, this.resolve = c, this.reject = d;
      }

      function i(a, b, c) {
        var d = !1;

        try {
          a(function (a) {
            d || (d = !0, b(a));
          }, function (a) {
            d || (d = !0, c(a));
          });
        } catch (e) {
          if (d) return;
          d = !0, c(e);
        }
      }

      var j = c.immediateFn || "function" == typeof setImmediate && setImmediate || function (a) {
        setTimeout(a, 1);
      },
          k = Array.isArray || function (a) {
        return "[object Array]" === Object.prototype.toString.call(a);
      };

      c.prototype["catch"] = function (a) {
        return this.then(null, a);
      }, c.prototype.then = function (a, b) {
        var e = this;
        return new c(function (c, f) {
          d.call(e, new h(a, b, c, f));
        });
      }, c.all = function () {
        var a = Array.prototype.slice.call(1 === arguments.length && k(arguments[0]) ? arguments[0] : arguments);
        return new c(function (b, c) {
          function d(f, g) {
            try {
              if (g && ("object" == typeof g || "function" == typeof g)) {
                var h = g.then;
                if ("function" == typeof h) return void h.call(g, function (a) {
                  d(f, a);
                }, c);
              }

              a[f] = g, 0 === --e && b(a);
            } catch (i) {
              c(i);
            }
          }

          if (0 === a.length) return b([]);

          for (var e = a.length, f = 0; f < a.length; f++) d(f, a[f]);
        });
      }, c.resolve = function (a) {
        return a && "object" == typeof a && a.constructor === c ? a : new c(function (b) {
          b(a);
        });
      }, c.reject = function (a) {
        return new c(function (b, c) {
          c(a);
        });
      }, c.race = function (a) {
        return new c(function (b, c) {
          for (var d = 0, e = a.length; e > d; d++) a[d].then(b, c);
        });
      },  true && module.exports ? module.exports = c : a.Promise || (a.Promise = c);
    })(this);

    clipboard.copy = function (data) {
      return new Promise(function (resolve, reject) {
        // IE supports string and URL types: https://msdn.microsoft.com/en-us/library/ms536744(v=vs.85).aspx
        // We only support the string type for now.
        if (typeof data !== "string" && !("text/plain" in data)) {
          throw new Error("You must provide a text/plain type.");
        }

        var strData = typeof data === "string" ? data : data["text/plain"];
        var copySucceeded = window.clipboardData.setData("Text", strData);

        if (copySucceeded) {
          resolve();
        } else {
          reject(new Error("Copying was rejected."));
        }
      });
    };

    clipboard.paste = function () {
      return new Promise(function (resolve, reject) {
        var strData = window.clipboardData.getData("Text");

        if (strData) {
          resolve(strData);
        } else {
          // The user rejected the paste request.
          reject(new Error("Pasting was rejected."));
        }
      });
    };
  }

  return clipboard;
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(26);
} else {}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Do not use imports or top-level requires here!
// Running module factories is intentionally delayed until we know the hook exists.
// This is to avoid issues like: https://github.com/facebook/react-devtools/issues/1039


function welcome(event) {
  if (event.data.source !== 'react-devtools-content-script') {
    return;
  }

  window.removeEventListener('message', welcome);
  setup(window.__REACT_DEVTOOLS_GLOBAL_HOOK__);
}

window.addEventListener('message', welcome);

function setup(hook) {
  if (hook == null) {
    // DevTools didn't get injected into this page (maybe b'c of the contentType).
    return;
  }

  const Agent = __webpack_require__(15).default;

  const Bridge = __webpack_require__(16).default;

  const {
    initBackend
  } = __webpack_require__(31);

  const setupNativeStyleEditor = __webpack_require__(32).default;

  const bridge = new Bridge({
    listen(fn) {
      const listener = event => {
        if (event.source !== window || !event.data || event.data.source !== 'react-devtools-content-script' || !event.data.payload) {
          return;
        }

        fn(event.data.payload);
      };

      window.addEventListener('message', listener);
      return () => {
        window.removeEventListener('message', listener);
      };
    },

    send(event, payload, transferable) {
      // Synchronously notify the record/replay driver.
      window.__RECORD_REPLAY_REACT_DEVTOOLS_SEND_BRIDGE__(event, payload);
    }

  });
  const agent = new Agent(bridge);
  agent.addListener('shutdown', () => {
    // If we received 'shutdown' from `agent`, we assume the `bridge` is already shutting down,
    // and that caused the 'shutdown' event on the `agent`, so we don't need to call `bridge.shutdown()` here.
    hook.emit('shutdown');
  });
  initBackend(hook, agent, window); // Let the frontend know that the backend has attached listeners and is ready for messages.
  // This covers the case of syncing saved values after reloading/navigating while DevTools remain open.

  bridge.send('extensionBackendInitialized'); // Setup React Native style editor if a renderer like react-native-web has injected it.

  if (hook.resolveRNStyle) {
    setupNativeStyleEditor(bridge, agent, hook.resolveRNStyle, hook.nativeStyleEditorValidAttributes);
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Yallist;
Yallist.Node = Node;
Yallist.create = Yallist;

function Yallist(list) {
  var self = this;

  if (!(self instanceof Yallist)) {
    self = new Yallist();
  }

  self.tail = null;
  self.head = null;
  self.length = 0;

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item);
    });
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i]);
    }
  }

  return self;
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list');
  }

  var next = node.next;
  var prev = node.prev;

  if (next) {
    next.prev = prev;
  }

  if (prev) {
    prev.next = next;
  }

  if (node === this.head) {
    this.head = next;
  }

  if (node === this.tail) {
    this.tail = prev;
  }

  node.list.length--;
  node.next = null;
  node.prev = null;
  node.list = null;
  return next;
};

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return;
  }

  if (node.list) {
    node.list.removeNode(node);
  }

  var head = this.head;
  node.list = this;
  node.next = head;

  if (head) {
    head.prev = node;
  }

  this.head = node;

  if (!this.tail) {
    this.tail = node;
  }

  this.length++;
};

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return;
  }

  if (node.list) {
    node.list.removeNode(node);
  }

  var tail = this.tail;
  node.list = this;
  node.prev = tail;

  if (tail) {
    tail.next = node;
  }

  this.tail = node;

  if (!this.head) {
    this.head = node;
  }

  this.length++;
};

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i]);
  }

  return this.length;
};

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i]);
  }

  return this.length;
};

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined;
  }

  var res = this.tail.value;
  this.tail = this.tail.prev;

  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }

  this.length--;
  return res;
};

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined;
  }

  var res = this.head.value;
  this.head = this.head.next;

  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }

  this.length--;
  return res;
};

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this;

  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.next;
  }
};

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this;

  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.prev;
  }
};

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next;
  }

  if (i === n && walker !== null) {
    return walker.value;
  }
};

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev;
  }

  if (i === n && walker !== null) {
    return walker.value;
  }
};

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist();

  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.next;
  }

  return res;
};

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist();

  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.prev;
  }

  return res;
};

Yallist.prototype.reduce = function (fn, initial) {
  var acc;
  var walker = this.head;

  if (arguments.length > 1) {
    acc = initial;
  } else if (this.head) {
    walker = this.head.next;
    acc = this.head.value;
  } else {
    throw new TypeError('Reduce of empty list with no initial value');
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i);
    walker = walker.next;
  }

  return acc;
};

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc;
  var walker = this.tail;

  if (arguments.length > 1) {
    acc = initial;
  } else if (this.tail) {
    walker = this.tail.prev;
    acc = this.tail.value;
  } else {
    throw new TypeError('Reduce of empty list with no initial value');
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i);
    walker = walker.prev;
  }

  return acc;
};

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length);

  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.next;
  }

  return arr;
};

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length);

  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.prev;
  }

  return arr;
};

Yallist.prototype.slice = function (from, to) {
  to = to || this.length;

  if (to < 0) {
    to += this.length;
  }

  from = from || 0;

  if (from < 0) {
    from += this.length;
  }

  var ret = new Yallist();

  if (to < from || to < 0) {
    return ret;
  }

  if (from < 0) {
    from = 0;
  }

  if (to > this.length) {
    to = this.length;
  }

  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next;
  }

  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value);
  }

  return ret;
};

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length;

  if (to < 0) {
    to += this.length;
  }

  from = from || 0;

  if (from < 0) {
    from += this.length;
  }

  var ret = new Yallist();

  if (to < from || to < 0) {
    return ret;
  }

  if (from < 0) {
    from = 0;
  }

  if (to > this.length) {
    to = this.length;
  }

  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev;
  }

  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value);
  }

  return ret;
};

Yallist.prototype.splice = function (start, deleteCount
/*, ...nodes */
) {
  if (start > this.length) {
    start = this.length - 1;
  }

  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next;
  }

  var ret = [];

  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value);
    walker = this.removeNode(walker);
  }

  if (walker === null) {
    walker = this.tail;
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev;
  }

  for (var i = 2; i < arguments.length; i++) {
    walker = insert(this, walker, arguments[i]);
  }

  return ret;
};

Yallist.prototype.reverse = function () {
  var head = this.head;
  var tail = this.tail;

  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev;
    walker.prev = walker.next;
    walker.next = p;
  }

  this.head = tail;
  this.tail = head;
  return this;
};

function insert(self, node, value) {
  var inserted = node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);

  if (inserted.next === null) {
    self.tail = inserted;
  }

  if (inserted.prev === null) {
    self.head = inserted;
  }

  self.length++;
  return inserted;
}

function push(self, item) {
  self.tail = new Node(item, self.tail, null, self);

  if (!self.head) {
    self.head = self.tail;
  }

  self.length++;
}

function unshift(self, item) {
  self.head = new Node(item, null, self.head, self);

  if (!self.tail) {
    self.tail = self.head;
  }

  self.length++;
}

function Node(value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list);
  }

  this.list = list;
  this.value = value;

  if (prev) {
    prev.next = this;
    this.prev = prev;
  } else {
    this.prev = null;
  }

  if (next) {
    next.prev = this;
    this.next = next;
  } else {
    this.next = null;
  }
}

try {
  // add if support for Symbol.iterator is present
  __webpack_require__(24)(Yallist);
} catch (er) {}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value;
    }
  };
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var b = 60103,
    c = 60106,
    d = 60107,
    e = 60108,
    f = 60114,
    g = 60109,
    h = 60110,
    k = 60112,
    l = 60113,
    m = 60120,
    n = 60115,
    p = 60116,
    q = 60129,
    r = 60130,
    u = 60131,
    v = 60132;

if ("function" === typeof Symbol && Symbol.for) {
  var w = Symbol.for;
  b = w("react.element");
  c = w("react.portal");
  d = w("react.fragment");
  e = w("react.strict_mode");
  f = w("react.profiler");
  g = w("react.provider");
  h = w("react.context");
  k = w("react.forward_ref");
  l = w("react.suspense");
  m = w("react.suspense_list");
  n = w("react.memo");
  p = w("react.lazy");
  q = w("react.debug_trace_mode");
  r = w("react.offscreen");
  u = w("react.legacy_hidden");
  v = w("react.cache");
}

var x = 0;
"function" === typeof Symbol && (x = Symbol.for("react.module.reference"));

function y(a) {
  if ("object" === typeof a && null !== a) {
    var t = a.$$typeof;

    switch (t) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case l:
          case m:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case h:
              case k:
              case p:
              case n:
              case g:
                return a;

              default:
                return t;
            }

        }

      case c:
        return t;
    }
  }
}

var z = g,
    A = b,
    B = k,
    C = d,
    D = p,
    E = n,
    F = c,
    G = f,
    H = e,
    I = l,
    J = m;
exports.ContextConsumer = h;
exports.ContextProvider = z;
exports.Element = A;
exports.ForwardRef = B;
exports.Fragment = C;
exports.Lazy = D;
exports.Memo = E;
exports.Portal = F;
exports.Profiler = G;
exports.StrictMode = H;
exports.Suspense = I;
exports.SuspenseList = J;

exports.isAsyncMode = function () {
  return !1;
};

exports.isConcurrentMode = function () {
  return !1;
};

exports.isContextConsumer = function (a) {
  return y(a) === h;
};

exports.isContextProvider = function (a) {
  return y(a) === g;
};

exports.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === b;
};

exports.isForwardRef = function (a) {
  return y(a) === k;
};

exports.isFragment = function (a) {
  return y(a) === d;
};

exports.isLazy = function (a) {
  return y(a) === p;
};

exports.isMemo = function (a) {
  return y(a) === n;
};

exports.isPortal = function (a) {
  return y(a) === c;
};

exports.isProfiler = function (a) {
  return y(a) === f;
};

exports.isStrictMode = function (a) {
  return y(a) === e;
};

exports.isSuspense = function (a) {
  return y(a) === l;
};

exports.isSuspenseList = function (a) {
  return y(a) === m;
};

exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === q || a === e || a === l || a === m || a === u || a === r || a === v || "object" === typeof a && null !== a && (a.$$typeof === p || a.$$typeof === n || a.$$typeof === g || a.$$typeof === h || a.$$typeof === k || a.$$typeof === x || void 0 !== a.getModuleId) ? !0 : !1;
};

exports.typeOf = y;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * react-debug-tools.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var k = __webpack_require__(7),
    p = __webpack_require__(27);

function r(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, e = 1; e < arguments.length; e++) b += "&args[]=" + encodeURIComponent(arguments[e]);

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var w = __webpack_require__(29).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    x = 60128;

if ("function" === typeof Symbol && Symbol.for) {
  var y = Symbol.for;
  x = y("react.opaque.id");
}

var z = [],
    A = null,
    B = null;

function C() {
  if (null === A) {
    var a = new Map();

    try {
      D.useContext({
        _currentValue: null
      }), D.useState(null), D.useReducer(function (a) {
        return a;
      }, null), D.useRef(null), "function" === typeof D.useCacheRefresh && D.useCacheRefresh(), D.useLayoutEffect(function () {}), D.useEffect(function () {}), D.useImperativeHandle(void 0, function () {
        return null;
      }), D.useDebugValue(null), D.useCallback(function () {}), D.useMemo(function () {
        return null;
      });
    } finally {
      var b = z;
      z = [];
    }

    for (var e = 0; e < b.length; e++) {
      var f = b[e];
      a.set(f.primitive, p.parse(f.stackError));
    }

    A = a;
  }

  return A;
}

var E = null;

function F() {
  var a = E;
  null !== a && (E = a.next);
  return a;
}

var D = {
  getCacheForType: function () {
    throw Error(r(248));
  },
  readContext: function (a) {
    return a._currentValue;
  },
  useCacheRefresh: function () {
    var a = F();
    z.push({
      primitive: "CacheRefresh",
      stackError: Error(),
      value: null !== a ? a.memoizedState : function () {}
    });
    return function () {};
  },
  useCallback: function (a) {
    var b = F();
    z.push({
      primitive: "Callback",
      stackError: Error(),
      value: null !== b ? b.memoizedState[0] : a
    });
    return a;
  },
  useContext: function (a) {
    z.push({
      primitive: "Context",
      stackError: Error(),
      value: a._currentValue
    });
    return a._currentValue;
  },
  useEffect: function (a) {
    F();
    z.push({
      primitive: "Effect",
      stackError: Error(),
      value: a
    });
  },
  useImperativeHandle: function (a) {
    F();
    var b = void 0;
    null !== a && "object" === typeof a && (b = a.current);
    z.push({
      primitive: "ImperativeHandle",
      stackError: Error(),
      value: b
    });
  },
  useDebugValue: function (a, b) {
    z.push({
      primitive: "DebugValue",
      stackError: Error(),
      value: "function" === typeof b ? b(a) : a
    });
  },
  useLayoutEffect: function (a) {
    F();
    z.push({
      primitive: "LayoutEffect",
      stackError: Error(),
      value: a
    });
  },
  useMemo: function (a) {
    var b = F();
    a = null !== b ? b.memoizedState[0] : a();
    z.push({
      primitive: "Memo",
      stackError: Error(),
      value: a
    });
    return a;
  },
  useReducer: function (a, b, e) {
    a = F();
    b = null !== a ? a.memoizedState : void 0 !== e ? e(b) : b;
    z.push({
      primitive: "Reducer",
      stackError: Error(),
      value: b
    });
    return [b, function () {}];
  },
  useRef: function (a) {
    var b = F();
    a = null !== b ? b.memoizedState : {
      current: a
    };
    z.push({
      primitive: "Ref",
      stackError: Error(),
      value: a.current
    });
    return a;
  },
  useState: function (a) {
    var b = F();
    a = null !== b ? b.memoizedState : "function" === typeof a ? a() : a;
    z.push({
      primitive: "State",
      stackError: Error(),
      value: a
    });
    return [a, function () {}];
  },
  useTransition: function () {
    F();
    F();
    z.push({
      primitive: "Transition",
      stackError: Error(),
      value: void 0
    });
    return [!1, function () {}];
  },
  useMutableSource: function (a, b) {
    F();
    F();
    F();
    F();
    a = b(a._source);
    z.push({
      primitive: "MutableSource",
      stackError: Error(),
      value: a
    });
    return a;
  },
  useDeferredValue: function (a) {
    F();
    F();
    z.push({
      primitive: "DeferredValue",
      stackError: Error(),
      value: a
    });
    return a;
  },
  useOpaqueIdentifier: function () {
    var a = F();
    B && 0 === B.mode && F();
    (a = null === a ? void 0 : a.memoizedState) && a.$$typeof === x && (a = void 0);
    z.push({
      primitive: "OpaqueIdentifier",
      stackError: Error(),
      value: a
    });
    return a;
  }
},
    G = 0;

function H(a, b, e) {
  var f = b[e].source,
      c = 0;

  a: for (; c < a.length; c++) if (a[c].source === f) {
    for (var l = e + 1, q = c + 1; l < b.length && q < a.length; l++, q++) if (a[q].source !== b[l].source) continue a;

    return c;
  }

  return -1;
}

function I(a, b) {
  if (!a) return !1;
  b = "use" + b;
  return a.length < b.length ? !1 : a.lastIndexOf(b) === a.length - b.length;
}

function J(a, b, e) {
  for (var f = [], c = null, l = f, q = 0, t = [], v = 0; v < b.length; v++) {
    var u = b[v];
    var d = a;
    var h = p.parse(u.stackError);

    b: {
      var m = h,
          n = H(m, d, G);
      if (-1 !== n) d = n;else {
        for (var g = 0; g < d.length && 5 > g; g++) if (n = H(m, d, g), -1 !== n) {
          G = g;
          d = n;
          break b;
        }

        d = -1;
      }
    }

    b: {
      m = h;
      n = C().get(u.primitive);
      if (void 0 !== n) for (g = 0; g < n.length && g < m.length; g++) if (n[g].source !== m[g].source) {
        g < m.length - 1 && I(m[g].functionName, u.primitive) && g++;
        g < m.length - 1 && I(m[g].functionName, u.primitive) && g++;
        m = g;
        break b;
      }
      m = -1;
    }

    h = -1 === d || -1 === m || 2 > d - m ? null : h.slice(m, d - 1);

    if (null !== h) {
      d = 0;

      if (null !== c) {
        for (; d < h.length && d < c.length && h[h.length - d - 1].source === c[c.length - d - 1].source;) d++;

        for (c = c.length - 1; c > d; c--) l = t.pop();
      }

      for (c = h.length - d - 1; 1 <= c; c--) d = [], m = h[c], (n = h[c - 1].functionName) ? (g = n.lastIndexOf("."), -1 === g && (g = 0), "use" === n.substr(g, 3) && (g += 3), n = n.substr(g)) : n = "", n = {
        id: null,
        isStateEditable: !1,
        name: n,
        value: void 0,
        subHooks: d
      }, e && (n.hookSource = {
        lineNumber: m.lineNumber,
        columnNumber: m.columnNumber,
        functionName: m.functionName,
        fileName: m.fileName
      }), l.push(n), t.push(l), l = d;

      c = h;
    }

    d = u.primitive;
    u = {
      id: "Context" === d || "DebugValue" === d ? null : q++,
      isStateEditable: "Reducer" === d || "State" === d,
      name: d,
      value: u.value,
      subHooks: []
    };
    e && (d = {
      lineNumber: null,
      functionName: null,
      fileName: null,
      columnNumber: null
    }, h && 1 <= h.length && (h = h[0], d.lineNumber = h.lineNumber, d.functionName = h.functionName, d.fileName = h.fileName, d.columnNumber = h.columnNumber), u.hookSource = d);
    l.push(u);
  }

  K(f, null);
  return f;
}

function K(a, b) {
  for (var e = [], f = 0; f < a.length; f++) {
    var c = a[f];
    "DebugValue" === c.name && 0 === c.subHooks.length ? (a.splice(f, 1), f--, e.push(c)) : K(c.subHooks, c);
  }

  null !== b && (1 === e.length ? b.value = e[0].value : 1 < e.length && (b.value = e.map(function (a) {
    return a.value;
  })));
}

function L(a, b, e) {
  var f = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : !1;
  null == e && (e = w.ReactCurrentDispatcher);
  var c = e.current;
  e.current = D;

  try {
    var l = Error();
    a(b);
  } finally {
    var q = z;
    z = [];
    e.current = c;
  }

  c = p.parse(l);
  return J(c, q, f);
}

function M(a) {
  a.forEach(function (a, e) {
    return e._currentValue = a;
  });
}

exports.inspectHooks = L;

exports.inspectHooksOfFiber = function (a, b) {
  var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1;
  null == b && (b = w.ReactCurrentDispatcher);
  B = a;
  if (0 !== a.tag && 15 !== a.tag && 11 !== a.tag) throw Error("Unknown Fiber. Needs to be a function component to inspect hooks.");
  C();
  var f = a.type,
      c = a.memoizedProps;

  if (f !== a.elementType && f && f.defaultProps) {
    c = k({}, c);
    var l = f.defaultProps;

    for (q in l) void 0 === c[q] && (c[q] = l[q]);
  }

  E = a.memoizedState;
  var q = new Map();

  try {
    for (l = a; l;) {
      if (10 === l.tag) {
        var t = l.type._context;
        q.has(t) || (q.set(t, t._currentValue), t._currentValue = l.memoizedProps.value);
      }

      l = l.return;
    }

    if (11 === a.tag) {
      var v = f.render;
      f = c;
      var u = a.ref;
      t = b;
      var d = t.current;
      t.current = D;

      try {
        var h = Error();
        v(f, u);
      } finally {
        var m = z;
        z = [];
        t.current = d;
      }

      var n = p.parse(h);
      return J(n, m, e);
    }

    return L(f, c, b, e);
  } finally {
    E = null, M(q);
  }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(28)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function ErrorStackParser(StackFrame) {
  'use strict';

  var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
  var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
  var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
  return {
    /**
     * Given an Error object, extract the most information from it.
     *
     * @param {Error} error object
     * @return {Array} of StackFrames
     */
    parse: function ErrorStackParser$$parse(error) {
      if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
        return this.parseOpera(error);
      } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
        return this.parseV8OrIE(error);
      } else if (error.stack) {
        return this.parseFFOrSafari(error);
      } else {
        throw new Error('Cannot parse given Error object');
      }
    },
    // Separate line and column numbers from a string of the form: (URI:Line:Column)
    extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
      // Fail-fast but return locations like "(native)"
      if (urlLike.indexOf(':') === -1) {
        return [urlLike];
      }

      var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
      var parts = regExp.exec(urlLike.replace(/[()]/g, ''));
      return [parts[1], parts[2] || undefined, parts[3] || undefined];
    },
    parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
      var filtered = error.stack.split('\n').filter(function (line) {
        return !!line.match(CHROME_IE_STACK_REGEXP);
      }, this);
      return filtered.map(function (line) {
        if (line.indexOf('(eval ') > -1) {
          // Throw away eval information until we implement stacktrace.js/stackframe#8
          line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^()]*)|(\),.*$)/g, '');
        }

        var sanitizedLine = line.replace(/^\s+/, '').replace(/\(eval code/g, '('); // capture and preseve the parenthesized location "(/foo/my bar.js:12:87)" in
        // case it has spaces in it, as the string is split on \s+ later on

        var location = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/); // remove the parenthesized location from the line, if it was matched

        sanitizedLine = location ? sanitizedLine.replace(location[0], '') : sanitizedLine;
        var tokens = sanitizedLine.split(/\s+/).slice(1); // if a location was matched, pass it to extractLocation() otherwise pop the last token

        var locationParts = this.extractLocation(location ? location[1] : tokens.pop());
        var functionName = tokens.join(' ') || undefined;
        var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];
        return new StackFrame({
          functionName: functionName,
          fileName: fileName,
          lineNumber: locationParts[1],
          columnNumber: locationParts[2],
          source: line
        });
      }, this);
    },
    parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
      var filtered = error.stack.split('\n').filter(function (line) {
        return !line.match(SAFARI_NATIVE_CODE_REGEXP);
      }, this);
      return filtered.map(function (line) {
        // Throw away eval information until we implement stacktrace.js/stackframe#8
        if (line.indexOf(' > eval') > -1) {
          line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ':$1');
        }

        if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
          // Safari eval frames only have function names and nothing else
          return new StackFrame({
            functionName: line
          });
        } else {
          var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
          var matches = line.match(functionNameRegex);
          var functionName = matches && matches[1] ? matches[1] : undefined;
          var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));
          return new StackFrame({
            functionName: functionName,
            fileName: locationParts[0],
            lineNumber: locationParts[1],
            columnNumber: locationParts[2],
            source: line
          });
        }
      }, this);
    },
    parseOpera: function ErrorStackParser$$parseOpera(e) {
      if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
        return this.parseOpera9(e);
      } else if (!e.stack) {
        return this.parseOpera10(e);
      } else {
        return this.parseOpera11(e);
      }
    },
    parseOpera9: function ErrorStackParser$$parseOpera9(e) {
      var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
      var lines = e.message.split('\n');
      var result = [];

      for (var i = 2, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);

        if (match) {
          result.push(new StackFrame({
            fileName: match[2],
            lineNumber: match[1],
            source: lines[i]
          }));
        }
      }

      return result;
    },
    parseOpera10: function ErrorStackParser$$parseOpera10(e) {
      var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
      var lines = e.stacktrace.split('\n');
      var result = [];

      for (var i = 0, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);

        if (match) {
          result.push(new StackFrame({
            functionName: match[3] || undefined,
            fileName: match[2],
            lineNumber: match[1],
            source: lines[i]
          }));
        }
      }

      return result;
    },
    // Opera 10.65+ Error.stack very similar to FF/Safari
    parseOpera11: function ErrorStackParser$$parseOpera11(error) {
      var filtered = error.stack.split('\n').filter(function (line) {
        return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
      }, this);
      return filtered.map(function (line) {
        var tokens = line.split('@');
        var locationParts = this.extractLocation(tokens.pop());
        var functionCall = tokens.shift() || '';
        var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^)]*\)/g, '') || undefined;
        var argsRaw;

        if (functionCall.match(/\(([^)]*)\)/)) {
          argsRaw = functionCall.replace(/^[^(]+\(([^)]*)\)$/, '$1');
        }

        var args = argsRaw === undefined || argsRaw === '[arguments not available]' ? undefined : argsRaw.split(',');
        return new StackFrame({
          functionName: functionName,
          args: args,
          fileName: locationParts[0],
          lineNumber: locationParts[1],
          columnNumber: locationParts[2],
          source: line
        });
      }, this);
    }
  };
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  'use strict';

  function _isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }

  function _getter(p) {
    return function () {
      return this[p];
    };
  }

  var booleanProps = ['isConstructor', 'isEval', 'isNative', 'isToplevel'];
  var numericProps = ['columnNumber', 'lineNumber'];
  var stringProps = ['fileName', 'functionName', 'source'];
  var arrayProps = ['args'];
  var props = booleanProps.concat(numericProps, stringProps, arrayProps);

  function StackFrame(obj) {
    if (!obj) return;

    for (var i = 0; i < props.length; i++) {
      if (obj[props[i]] !== undefined) {
        this['set' + _capitalize(props[i])](obj[props[i]]);
      }
    }
  }

  StackFrame.prototype = {
    getArgs: function () {
      return this.args;
    },
    setArgs: function (v) {
      if (Object.prototype.toString.call(v) !== '[object Array]') {
        throw new TypeError('Args must be an Array');
      }

      this.args = v;
    },
    getEvalOrigin: function () {
      return this.evalOrigin;
    },
    setEvalOrigin: function (v) {
      if (v instanceof StackFrame) {
        this.evalOrigin = v;
      } else if (v instanceof Object) {
        this.evalOrigin = new StackFrame(v);
      } else {
        throw new TypeError('Eval Origin must be an Object or StackFrame');
      }
    },
    toString: function () {
      var fileName = this.getFileName() || '';
      var lineNumber = this.getLineNumber() || '';
      var columnNumber = this.getColumnNumber() || '';
      var functionName = this.getFunctionName() || '';

      if (this.getIsEval()) {
        if (fileName) {
          return '[eval] (' + fileName + ':' + lineNumber + ':' + columnNumber + ')';
        }

        return '[eval]:' + lineNumber + ':' + columnNumber;
      }

      if (functionName) {
        return functionName + ' (' + fileName + ':' + lineNumber + ':' + columnNumber + ')';
      }

      return fileName + ':' + lineNumber + ':' + columnNumber;
    }
  };

  StackFrame.fromString = function StackFrame$$fromString(str) {
    var argsStartIndex = str.indexOf('(');
    var argsEndIndex = str.lastIndexOf(')');
    var functionName = str.substring(0, argsStartIndex);
    var args = str.substring(argsStartIndex + 1, argsEndIndex).split(',');
    var locationString = str.substring(argsEndIndex + 1);

    if (locationString.indexOf('@') === 0) {
      var parts = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(locationString, '');
      var fileName = parts[1];
      var lineNumber = parts[2];
      var columnNumber = parts[3];
    }

    return new StackFrame({
      functionName: functionName,
      args: args || undefined,
      fileName: fileName,
      lineNumber: lineNumber || undefined,
      columnNumber: columnNumber || undefined
    });
  };

  for (var i = 0; i < booleanProps.length; i++) {
    StackFrame.prototype['get' + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);

    StackFrame.prototype['set' + _capitalize(booleanProps[i])] = function (p) {
      return function (v) {
        this[p] = Boolean(v);
      };
    }(booleanProps[i]);
  }

  for (var j = 0; j < numericProps.length; j++) {
    StackFrame.prototype['get' + _capitalize(numericProps[j])] = _getter(numericProps[j]);

    StackFrame.prototype['set' + _capitalize(numericProps[j])] = function (p) {
      return function (v) {
        if (!_isNumber(v)) {
          throw new TypeError(p + ' must be a Number');
        }

        this[p] = Number(v);
      };
    }(numericProps[j]);
  }

  for (var k = 0; k < stringProps.length; k++) {
    StackFrame.prototype['get' + _capitalize(stringProps[k])] = _getter(stringProps[k]);

    StackFrame.prototype['set' + _capitalize(stringProps[k])] = function (p) {
      return function (v) {
        this[p] = String(v);
      };
    }(stringProps[k]);
  }

  return StackFrame;
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(30);
} else {}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var l = __webpack_require__(7),
    m = 60103,
    p = 60106;

exports.Fragment = 60107;
exports.StrictMode = 60108;
exports.Profiler = 60114;
var q = 60109,
    r = 60110,
    t = 60112;
exports.Suspense = 60113;
exports.SuspenseList = 60120;
var u = 60115,
    v = 60116;
exports.unstable_DebugTracingMode = 60129;
exports.unstable_Offscreen = 60130;
exports.unstable_LegacyHidden = 60131;
exports.unstable_Cache = 60132;

if ("function" === typeof Symbol && Symbol.for) {
  var w = Symbol.for;
  m = w("react.element");
  p = w("react.portal");
  exports.Fragment = w("react.fragment");
  exports.StrictMode = w("react.strict_mode");
  exports.Profiler = w("react.profiler");
  q = w("react.provider");
  r = w("react.context");
  t = w("react.forward_ref");
  exports.Suspense = w("react.suspense");
  exports.SuspenseList = w("react.suspense_list");
  u = w("react.memo");
  v = w("react.lazy");
  exports.unstable_DebugTracingMode = w("react.debug_trace_mode");
  exports.unstable_Offscreen = w("react.offscreen");
  exports.unstable_LegacyHidden = w("react.legacy_hidden");
  exports.unstable_Cache = w("react.cache");
}

var x = "function" === typeof Symbol && Symbol.iterator;

function y(a) {
  if (null === a || "object" !== typeof a) return null;
  a = x && a[x] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}

function z(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var A = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
},
    B = {};

function C(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}

C.prototype.isReactComponent = {};

C.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(z(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};

C.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function D() {}

D.prototype = C.prototype;

function E(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}

var F = E.prototype = new D();
F.constructor = E;
l(F, C.prototype);
F.isPureReactComponent = !0;
var G = Array.isArray,
    H = Object.prototype.hasOwnProperty,
    I = {
  current: null
},
    J = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function K(a, b, c) {
  var e,
      d = {},
      k = null,
      h = null;
  if (null != b) for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) H.call(b, e) && !J.hasOwnProperty(e) && (d[e] = b[e]);
  var g = arguments.length - 2;
  if (1 === g) d.children = c;else if (1 < g) {
    for (var f = Array(g), n = 0; n < g; n++) f[n] = arguments[n + 2];

    d.children = f;
  }
  if (a && a.defaultProps) for (e in g = a.defaultProps, g) void 0 === d[e] && (d[e] = g[e]);
  return {
    $$typeof: m,
    type: a,
    key: k,
    ref: h,
    props: d,
    _owner: I.current
  };
}

function L(a, b) {
  return {
    $$typeof: m,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function M(a) {
  return "object" === typeof a && null !== a && a.$$typeof === m;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + a.replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var N = /\/+/g;

function O(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}

function P(a, b, c, e, d) {
  var k = typeof a;
  if ("undefined" === k || "boolean" === k) a = null;
  var h = !1;
  if (null === a) h = !0;else switch (k) {
    case "string":
    case "number":
      h = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case m:
        case p:
          h = !0;
      }

  }
  if (h) return h = a, d = d(h), a = "" === e ? "." + O(h, 0) : e, G(d) ? (c = "", null != a && (c = a.replace(N, "$&/") + "/"), P(d, b, c, "", function (a) {
    return a;
  })) : null != d && (M(d) && (d = L(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(N, "$&/") + "/") + a)), b.push(d)), 1;
  h = 0;
  e = "" === e ? "." : e + ":";
  if (G(a)) for (var g = 0; g < a.length; g++) {
    k = a[g];
    var f = e + O(k, g);
    h += P(k, b, c, f, d);
  } else if (f = y(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = e + O(k, g++), h += P(k, b, c, f, d);else if ("object" === k) throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h;
}

function Q(a, b, c) {
  if (null == a) return a;
  var e = [],
      d = 0;
  P(a, e, "", "", function (a) {
    return b.call(c, a, d++);
  });
  return e;
}

function R(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function (b) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
    }, function (b) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }

  if (1 === a._status) return a._result.default;
  throw a._result;
}

var S = {
  current: null
},
    T = {
  transition: 0
},
    U = {
  ReactCurrentDispatcher: S,
  ReactCurrentBatchConfig: T,
  ReactCurrentOwner: I,
  assign: l
};
exports.Children = {
  map: Q,
  forEach: function (a, b, c) {
    Q(a, function () {
      b.apply(this, arguments);
    }, c);
  },
  count: function (a) {
    var b = 0;
    Q(a, function () {
      b++;
    });
    return b;
  },
  toArray: function (a) {
    return Q(a, function (a) {
      return a;
    }) || [];
  },
  only: function (a) {
    if (!M(a)) throw Error(z(143));
    return a;
  }
};
exports.Component = C;
exports.PureComponent = E;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U;

exports.cloneElement = function (a, b, c) {
  if (null === a || void 0 === a) throw Error(z(267, a));
  var e = l({}, a.props),
      d = a.key,
      k = a.ref,
      h = a._owner;

  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = I.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;

    for (f in b) H.call(b, f) && !J.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
  }

  var f = arguments.length - 2;
  if (1 === f) e.children = c;else if (1 < f) {
    g = Array(f);

    for (var n = 0; n < f; n++) g[n] = arguments[n + 2];

    e.children = g;
  }
  return {
    $$typeof: m,
    type: a.type,
    key: d,
    ref: k,
    props: e,
    _owner: h
  };
};

exports.createContext = function (a) {
  a = {
    $$typeof: r,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  a.Provider = {
    $$typeof: q,
    _context: a
  };
  return a.Consumer = a;
};

exports.createElement = K;

exports.createFactory = function (a) {
  var b = K.bind(null, a);
  b.type = a;
  return b;
};

exports.createRef = function () {
  return {
    current: null
  };
};

exports.forwardRef = function (a) {
  return {
    $$typeof: t,
    render: a
  };
};

exports.isValidElement = M;

exports.lazy = function (a) {
  return {
    $$typeof: v,
    _payload: {
      _status: -1,
      _result: a
    },
    _init: R
  };
};

exports.memo = function (a, b) {
  return {
    $$typeof: u,
    type: a,
    compare: void 0 === b ? null : b
  };
};

exports.startTransition = function (a) {
  var b = T.transition;
  T.transition = 1;

  try {
    a();
  } finally {
    T.transition = b;
  }
};

exports.unstable_act = function () {
  throw Error(z(406));
};

exports.unstable_createMutableSource = function (a, b) {
  return {
    _getVersion: b,
    _source: a,
    _workInProgressVersionPrimary: null,
    _workInProgressVersionSecondary: null
  };
};

exports.unstable_getCacheForType = function (a) {
  return S.current.getCacheForType(a);
};

exports.unstable_useCacheRefresh = function () {
  return S.current.useCacheRefresh();
};

exports.unstable_useMutableSource = function (a, b, c) {
  return S.current.useMutableSource(a, b, c);
};

exports.unstable_useOpaqueIdentifier = function () {
  return S.current.useOpaqueIdentifier();
};

exports.useCallback = function (a, b) {
  return S.current.useCallback(a, b);
};

exports.useContext = function (a) {
  return S.current.useContext(a);
};

exports.useDebugValue = function () {};

exports.useDeferredValue = function (a) {
  return S.current.useDeferredValue(a);
};

exports.useEffect = function (a, b) {
  return S.current.useEffect(a, b);
};

exports.useImperativeHandle = function (a, b, c) {
  return S.current.useImperativeHandle(a, b, c);
};

exports.useLayoutEffect = function (a, b) {
  return S.current.useLayoutEffect(a, b);
};

exports.useMemo = function (a, b) {
  return S.current.useMemo(a, b);
};

exports.useReducer = function (a, b, c) {
  return S.current.useReducer(a, b, c);
};

exports.useRef = function (a) {
  return S.current.useRef(a);
};

exports.useState = function (a) {
  return S.current.useState(a);
};

exports.useTransition = function () {
  return S.current.useTransition();
};

exports.version = "17.0.3";

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "initBackend", function() { return /* binding */ initBackend; });

// EXTERNAL MODULE: ../react-devtools-shared/src/backend/agent.js + 7 modules
var backend_agent = __webpack_require__(15);

// EXTERNAL MODULE: ../react-devtools-shared/src/backend/renderer.js + 2 modules
var backend_renderer = __webpack_require__(14);

// EXTERNAL MODULE: ../react-devtools-shared/src/types.js
var types = __webpack_require__(0);

// EXTERNAL MODULE: ../react-devtools-shared/src/utils.js + 1 modules
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ../react-devtools-shared/src/backend/utils.js
var backend_utils = __webpack_require__(4);

// EXTERNAL MODULE: ../react-devtools-shared/src/constants.js
var constants = __webpack_require__(2);

// CONCATENATED MODULE: ../react-devtools-shared/src/backend/legacy/utils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function decorate(object, attr, fn) {
  const old = object[attr];

  object[attr] = function (instance) {
    return fn.call(this, old, arguments);
  };

  return old;
}
function decorateMany(source, fns) {
  const olds = {};

  for (const name in fns) {
    olds[name] = decorate(source, name, fns[name]);
  }

  return olds;
}
function restoreMany(source, olds) {
  for (const name in olds) {
    source[name] = olds[name];
  }
}
function forceUpdate(instance) {
  if (typeof instance.forceUpdate === 'function') {
    instance.forceUpdate();
  } else if (instance.updater != null && typeof instance.updater.enqueueForceUpdate === 'function') {
    instance.updater.enqueueForceUpdate(this, () => {}, 'forceUpdate');
  }
}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/legacy/renderer.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */







function getData(internalInstance) {
  let displayName = null;
  let key = null; // != used deliberately here to catch undefined and null

  if (internalInstance._currentElement != null) {
    if (internalInstance._currentElement.key) {
      key = '' + internalInstance._currentElement.key;
    }

    const elementType = internalInstance._currentElement.type;

    if (typeof elementType === 'string') {
      displayName = elementType;
    } else if (typeof elementType === 'function') {
      displayName = Object(utils["f" /* getDisplayName */])(elementType);
    }
  }

  return {
    displayName,
    key
  };
}

function getElementType(internalInstance) {
  // != used deliberately here to catch undefined and null
  if (internalInstance._currentElement != null) {
    const elementType = internalInstance._currentElement.type;

    if (typeof elementType === 'function') {
      const publicInstance = internalInstance.getPublicInstance();

      if (publicInstance !== null) {
        return types["e" /* ElementTypeClass */];
      } else {
        return types["h" /* ElementTypeFunction */];
      }
    } else if (typeof elementType === 'string') {
      return types["i" /* ElementTypeHostComponent */];
    }
  }

  return types["k" /* ElementTypeOtherOrUnknown */];
}

function getChildren(internalInstance) {
  const children = []; // If the parent is a native node without rendered children, but with
  // multiple string children, then the `element` that gets passed in here is
  // a plain value -- a string or number.

  if (typeof internalInstance !== 'object') {// No children
  } else if (internalInstance._currentElement === null || internalInstance._currentElement === false) {// No children
  } else if (internalInstance._renderedComponent) {
    const child = internalInstance._renderedComponent;

    if (getElementType(child) !== types["k" /* ElementTypeOtherOrUnknown */]) {
      children.push(child);
    }
  } else if (internalInstance._renderedChildren) {
    const renderedChildren = internalInstance._renderedChildren;

    for (const name in renderedChildren) {
      const child = renderedChildren[name];

      if (getElementType(child) !== types["k" /* ElementTypeOtherOrUnknown */]) {
        children.push(child);
      }
    }
  } // Note: we skip the case where children are just strings or numbers
  // because the new DevTools skips over host text nodes anyway.


  return children;
}

function attach(hook, rendererID, renderer, global) {
  const idToInternalInstanceMap = new Map();
  const internalInstanceToIDMap = new WeakMap();
  const internalInstanceToRootIDMap = new WeakMap();
  let getInternalIDForNative = null;
  let findNativeNodeForInternalID;

  if (renderer.ComponentTree) {
    getInternalIDForNative = (node, findNearestUnfilteredAncestor) => {
      const internalInstance = renderer.ComponentTree.getClosestInstanceFromNode(node);
      return internalInstanceToIDMap.get(internalInstance) || null;
    };

    findNativeNodeForInternalID = id => {
      const internalInstance = idToInternalInstanceMap.get(id);
      return renderer.ComponentTree.getNodeFromInstance(internalInstance);
    };
  } else if (renderer.Mount.getID && renderer.Mount.getNode) {
    getInternalIDForNative = (node, findNearestUnfilteredAncestor) => {
      // Not implemented.
      return null;
    };

    findNativeNodeForInternalID = id => {
      // Not implemented.
      return null;
    };
  }

  function getDisplayNameForFiberID(id) {
    const internalInstance = idToInternalInstanceMap.get(id);
    return internalInstance ? getData(internalInstance).displayName : null;
  }

  function getID(internalInstance) {
    if (typeof internalInstance !== 'object' || internalInstance === null) {
      throw new Error('Invalid internal instance: ' + internalInstance);
    }

    if (!internalInstanceToIDMap.has(internalInstance)) {
      const id = Object(utils["i" /* getUID */])();
      internalInstanceToIDMap.set(internalInstance, id);
      idToInternalInstanceMap.set(id, internalInstance);
    }

    return internalInstanceToIDMap.get(internalInstance);
  }

  function areEqualArrays(a, b) {
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }

    return true;
  } // This is shared mutable state that lets us keep track of where we are.


  let parentIDStack = [];
  let oldReconcilerMethods = null;

  if (renderer.Reconciler) {
    // React 15
    oldReconcilerMethods = decorateMany(renderer.Reconciler, {
      mountComponent(fn, args) {
        const internalInstance = args[0];
        const hostContainerInfo = args[3];

        if (getElementType(internalInstance) === types["k" /* ElementTypeOtherOrUnknown */]) {
          return fn.apply(this, args);
        }

        if (hostContainerInfo._topLevelWrapper === undefined) {
          // SSR
          return fn.apply(this, args);
        }

        const id = getID(internalInstance); // Push the operation.

        const parentID = parentIDStack.length > 0 ? parentIDStack[parentIDStack.length - 1] : 0;
        recordMount(internalInstance, id, parentID);
        parentIDStack.push(id); // Remember the root.

        internalInstanceToRootIDMap.set(internalInstance, getID(hostContainerInfo._topLevelWrapper));

        try {
          const result = fn.apply(this, args);
          parentIDStack.pop();
          return result;
        } catch (err) {
          parentIDStack = [];
          throw err;
        } finally {
          if (parentIDStack.length === 0) {
            const rootID = internalInstanceToRootIDMap.get(internalInstance);

            if (rootID === undefined) {
              throw new Error('Expected to find root ID.');
            }

            flushPendingEvents(rootID);
          }
        }
      },

      performUpdateIfNecessary(fn, args) {
        const internalInstance = args[0];

        if (getElementType(internalInstance) === types["k" /* ElementTypeOtherOrUnknown */]) {
          return fn.apply(this, args);
        }

        const id = getID(internalInstance);
        parentIDStack.push(id);
        const prevChildren = getChildren(internalInstance);

        try {
          const result = fn.apply(this, args);
          const nextChildren = getChildren(internalInstance);

          if (!areEqualArrays(prevChildren, nextChildren)) {
            // Push the operation
            recordReorder(internalInstance, id, nextChildren);
          }

          parentIDStack.pop();
          return result;
        } catch (err) {
          parentIDStack = [];
          throw err;
        } finally {
          if (parentIDStack.length === 0) {
            const rootID = internalInstanceToRootIDMap.get(internalInstance);

            if (rootID === undefined) {
              throw new Error('Expected to find root ID.');
            }

            flushPendingEvents(rootID);
          }
        }
      },

      receiveComponent(fn, args) {
        const internalInstance = args[0];

        if (getElementType(internalInstance) === types["k" /* ElementTypeOtherOrUnknown */]) {
          return fn.apply(this, args);
        }

        const id = getID(internalInstance);
        parentIDStack.push(id);
        const prevChildren = getChildren(internalInstance);

        try {
          const result = fn.apply(this, args);
          const nextChildren = getChildren(internalInstance);

          if (!areEqualArrays(prevChildren, nextChildren)) {
            // Push the operation
            recordReorder(internalInstance, id, nextChildren);
          }

          parentIDStack.pop();
          return result;
        } catch (err) {
          parentIDStack = [];
          throw err;
        } finally {
          if (parentIDStack.length === 0) {
            const rootID = internalInstanceToRootIDMap.get(internalInstance);

            if (rootID === undefined) {
              throw new Error('Expected to find root ID.');
            }

            flushPendingEvents(rootID);
          }
        }
      },

      unmountComponent(fn, args) {
        const internalInstance = args[0];

        if (getElementType(internalInstance) === types["k" /* ElementTypeOtherOrUnknown */]) {
          return fn.apply(this, args);
        }

        const id = getID(internalInstance);
        parentIDStack.push(id);

        try {
          const result = fn.apply(this, args);
          parentIDStack.pop(); // Push the operation.

          recordUnmount(internalInstance, id);
          return result;
        } catch (err) {
          parentIDStack = [];
          throw err;
        } finally {
          if (parentIDStack.length === 0) {
            const rootID = internalInstanceToRootIDMap.get(internalInstance);

            if (rootID === undefined) {
              throw new Error('Expected to find root ID.');
            }

            flushPendingEvents(rootID);
          }
        }
      }

    });
  }

  function cleanup() {
    if (oldReconcilerMethods !== null) {
      if (renderer.Component) {
        restoreMany(renderer.Component.Mixin, oldReconcilerMethods);
      } else {
        restoreMany(renderer.Reconciler, oldReconcilerMethods);
      }
    }

    oldReconcilerMethods = null;
  }

  function recordMount(internalInstance, id, parentID) {
    const isRoot = parentID === 0;

    if (constants["n" /* __DEBUG__ */]) {
      console.log('%crecordMount()', 'color: green; font-weight: bold;', id, getData(internalInstance).displayName);
    }

    if (isRoot) {
      // TODO Is this right? For all versions?
      const hasOwnerMetadata = internalInstance._currentElement != null && internalInstance._currentElement._owner != null;
      pushOperation(constants["h" /* TREE_OPERATION_ADD */]);
      pushOperation(id);
      pushOperation(types["m" /* ElementTypeRoot */]);
      pushOperation(0); // isProfilingSupported?

      pushOperation(hasOwnerMetadata ? 1 : 0);
    } else {
      const type = getElementType(internalInstance);
      const {
        displayName,
        key
      } = getData(internalInstance);
      const ownerID = internalInstance._currentElement != null && internalInstance._currentElement._owner != null ? getID(internalInstance._currentElement._owner) : 0;
      const displayNameStringID = getStringID(displayName);
      const keyStringID = getStringID(key);
      pushOperation(constants["h" /* TREE_OPERATION_ADD */]);
      pushOperation(id);
      pushOperation(type);
      pushOperation(parentID);
      pushOperation(ownerID);
      pushOperation(displayNameStringID);
      pushOperation(keyStringID);
    }
  }

  function recordReorder(internalInstance, id, nextChildren) {
    pushOperation(constants["k" /* TREE_OPERATION_REORDER_CHILDREN */]);
    pushOperation(id);
    const nextChildIDs = nextChildren.map(getID);
    pushOperation(nextChildIDs.length);

    for (let i = 0; i < nextChildIDs.length; i++) {
      pushOperation(nextChildIDs[i]);
    }
  }

  function recordUnmount(internalInstance, id) {
    pendingUnmountedIDs.push(id);
    idToInternalInstanceMap.delete(id);
  }

  function crawlAndRecordInitialMounts(id, parentID, rootID) {
    if (constants["n" /* __DEBUG__ */]) {
      console.group('crawlAndRecordInitialMounts() id:', id);
    }

    const internalInstance = idToInternalInstanceMap.get(id);

    if (internalInstance != null) {
      internalInstanceToRootIDMap.set(internalInstance, rootID);
      recordMount(internalInstance, id, parentID);
      getChildren(internalInstance).forEach(child => crawlAndRecordInitialMounts(getID(child), id, rootID));
    }

    if (constants["n" /* __DEBUG__ */]) {
      console.groupEnd();
    }
  }

  function flushInitialOperations() {
    // Crawl roots though and register any nodes that mounted before we were injected.
    const roots = renderer.Mount._instancesByReactRootID || renderer.Mount._instancesByContainerID;

    for (const key in roots) {
      const internalInstance = roots[key];
      const id = getID(internalInstance);
      crawlAndRecordInitialMounts(id, 0, id);
      flushPendingEvents(id);
    }
  }

  const pendingOperations = [];
  const pendingStringTable = new Map();
  let pendingUnmountedIDs = [];
  let pendingStringTableLength = 0;
  let pendingUnmountedRootID = null;

  function flushPendingEvents(rootID) {
    if (pendingOperations.length === 0 && pendingUnmountedIDs.length === 0 && pendingUnmountedRootID === null) {
      return;
    }

    const numUnmountIDs = pendingUnmountedIDs.length + (pendingUnmountedRootID === null ? 0 : 1);
    const operations = new Array( // Identify which renderer this update is coming from.
    2 + // [rendererID, rootFiberID]
    // How big is the string table?
    1 + // [stringTableLength]
    // Then goes the actual string table.
    pendingStringTableLength + ( // All unmounts are batched in a single message.
    // [TREE_OPERATION_REMOVE, removedIDLength, ...ids]
    numUnmountIDs > 0 ? 2 + numUnmountIDs : 0) + // Mount operations
    pendingOperations.length); // Identify which renderer this update is coming from.
    // This enables roots to be mapped to renderers,
    // Which in turn enables fiber properations, states, and hooks to be inspected.

    let i = 0;
    operations[i++] = rendererID;
    operations[i++] = rootID; // Now fill in the string table.
    // [stringTableLength, str1Length, ...str1, str2Length, ...str2, ...]

    operations[i++] = pendingStringTableLength;
    pendingStringTable.forEach((value, key) => {
      operations[i++] = key.length;
      const encodedKey = Object(utils["m" /* utfEncodeString */])(key);

      for (let j = 0; j < encodedKey.length; j++) {
        operations[i + j] = encodedKey[j];
      }

      i += key.length;
    });

    if (numUnmountIDs > 0) {
      // All unmounts except roots are batched in a single message.
      operations[i++] = constants["i" /* TREE_OPERATION_REMOVE */]; // The first number is how many unmounted IDs we're gonna send.

      operations[i++] = numUnmountIDs; // Fill in the unmounts

      for (let j = 0; j < pendingUnmountedIDs.length; j++) {
        operations[i++] = pendingUnmountedIDs[j];
      } // The root ID should always be unmounted last.


      if (pendingUnmountedRootID !== null) {
        operations[i] = pendingUnmountedRootID;
        i++;
      }
    } // Fill in the rest of the operations.


    for (let j = 0; j < pendingOperations.length; j++) {
      operations[i + j] = pendingOperations[j];
    }

    i += pendingOperations.length;

    if (constants["n" /* __DEBUG__ */]) {
      Object(utils["j" /* printOperationsArray */])(operations);
    } // If we've already connected to the frontend, just pass the operations through.


    hook.emit('operations', operations);
    pendingOperations.length = 0;
    pendingUnmountedIDs = [];
    pendingUnmountedRootID = null;
    pendingStringTable.clear();
    pendingStringTableLength = 0;
  }

  function pushOperation(op) {
    if (true) {
      if (!Number.isInteger(op)) {
        console.error('pushOperation() was called but the value is not an integer.', op);
      }
    }

    pendingOperations.push(op);
  }

  function getStringID(str) {
    if (str === null) {
      return 0;
    }

    const existingID = pendingStringTable.get(str);

    if (existingID !== undefined) {
      return existingID;
    }

    const stringID = pendingStringTable.size + 1;
    pendingStringTable.set(str, stringID); // The string table total length needs to account
    // both for the string length, and for the array item
    // that contains the length itself. Hence + 1.

    pendingStringTableLength += str.length + 1;
    return stringID;
  }

  let currentlyInspectedElementID = null;
  let currentlyInspectedPaths = {}; // Track the intersection of currently inspected paths,
  // so that we can send their data along if the element is re-rendered.

  function mergeInspectedPaths(path) {
    let current = currentlyInspectedPaths;
    path.forEach(key => {
      if (!current[key]) {
        current[key] = {};
      }

      current = current[key];
    });
  }

  function createIsPathAllowed(key) {
    // This function helps prevent previously-inspected paths from being dehydrated in updates.
    // This is important to avoid a bad user experience where expanded toggles collapse on update.
    return function isPathAllowed(path) {
      let current = currentlyInspectedPaths[key];

      if (!current) {
        return false;
      }

      for (let i = 0; i < path.length; i++) {
        current = current[path[i]];

        if (!current) {
          return false;
        }
      }

      return true;
    };
  } // Fast path props lookup for React Native style editor.


  function getInstanceAndStyle(id) {
    let instance = null;
    let style = null;
    const internalInstance = idToInternalInstanceMap.get(id);

    if (internalInstance != null) {
      instance = internalInstance._instance || null;
      const element = internalInstance._currentElement;

      if (element != null && element.props != null) {
        style = element.props.style || null;
      }
    }

    return {
      instance,
      style
    };
  }

  function updateSelectedElement(id) {
    const internalInstance = idToInternalInstanceMap.get(id);

    if (internalInstance == null) {
      console.warn(`Could not find instance with id "${id}"`);
      return;
    }

    switch (getElementType(internalInstance)) {
      case types["e" /* ElementTypeClass */]:
        global.$r = internalInstance._instance;
        break;

      case types["h" /* ElementTypeFunction */]:
        const element = internalInstance._currentElement;

        if (element == null) {
          console.warn(`Could not find element with id "${id}"`);
          return;
        }

        global.$r = {
          props: element.props,
          type: element.type
        };
        break;

      default:
        global.$r = null;
        break;
    }
  }

  function storeAsGlobal(id, path, count) {
    const inspectedElement = inspectElementRaw(id);

    if (inspectedElement !== null) {
      const value = Object(utils["h" /* getInObject */])(inspectedElement, path);
      const key = `$reactTemp${count}`;
      window[key] = value;
      console.log(key);
      console.log(value);
    }
  }

  function copyElementPath(id, path) {
    const inspectedElement = inspectElementRaw(id);

    if (inspectedElement !== null) {
      Object(backend_utils["b" /* copyToClipboard */])(Object(utils["h" /* getInObject */])(inspectedElement, path));
    }
  }

  function inspectElement(requestID, id, path) {
    if (currentlyInspectedElementID !== id) {
      currentlyInspectedElementID = id;
      currentlyInspectedPaths = {};
    }

    const inspectedElement = inspectElementRaw(id);

    if (inspectedElement === null) {
      return {
        id,
        responseID: requestID,
        type: 'not-found'
      };
    }

    if (path !== null) {
      mergeInspectedPaths(path);
    } // Any time an inspected element has an update,
    // we should update the selected $r value as wel.
    // Do this before dehyration (cleanForBridge).


    updateSelectedElement(id);
    inspectedElement.context = Object(backend_utils["a" /* cleanForBridge */])(inspectedElement.context, createIsPathAllowed('context'));
    inspectedElement.props = Object(backend_utils["a" /* cleanForBridge */])(inspectedElement.props, createIsPathAllowed('props'));
    inspectedElement.state = Object(backend_utils["a" /* cleanForBridge */])(inspectedElement.state, createIsPathAllowed('state'));
    return {
      id,
      responseID: requestID,
      type: 'full-data',
      value: inspectedElement
    };
  }

  function inspectElementRaw(id) {
    const internalInstance = idToInternalInstanceMap.get(id);

    if (internalInstance == null) {
      return null;
    }

    const {
      displayName,
      key
    } = getData(internalInstance);
    const type = getElementType(internalInstance);
    let context = null;
    let owners = null;
    let props = null;
    let state = null;
    let source = null;
    const element = internalInstance._currentElement;

    if (element !== null) {
      props = element.props;
      source = element._source != null ? element._source : null;
      let owner = element._owner;

      if (owner) {
        owners = [];

        while (owner != null) {
          owners.push({
            displayName: getData(owner).displayName || 'Unknown',
            id: getID(owner),
            key: element.key,
            type: getElementType(owner)
          });

          if (owner._currentElement) {
            owner = owner._currentElement._owner;
          }
        }
      }
    }

    const publicInstance = internalInstance._instance;

    if (publicInstance != null) {
      context = publicInstance.context || null;
      state = publicInstance.state || null;
    } // Not implemented


    const errors = [];
    const warnings = [];
    return {
      id,
      // Does the current renderer support editable hooks and function props?
      canEditHooks: false,
      canEditFunctionProps: false,
      // Does the current renderer support advanced editing interface?
      canEditHooksAndDeletePaths: false,
      canEditHooksAndRenamePaths: false,
      canEditFunctionPropsDeletePaths: false,
      canEditFunctionPropsRenamePaths: false,
      // Toggle error boundary did not exist in legacy versions
      canToggleError: false,
      isErrored: false,
      targetErrorBoundaryID: null,
      // Suspense did not exist in legacy versions
      canToggleSuspense: false,
      // Can view component source location.
      canViewSource: type === types["e" /* ElementTypeClass */] || type === types["h" /* ElementTypeFunction */],
      // Only legacy context exists in legacy versions.
      hasLegacyContext: true,
      displayName: displayName,
      type: type,
      key: key != null ? key : null,
      // Inspectable properties.
      context,
      hooks: null,
      props,
      state,
      errors,
      warnings,
      // List of owners
      owners,
      // Location of component in source code.
      source,
      rootType: null,
      rendererPackageName: null,
      rendererVersion: null
    };
  }

  function logElementToConsole(id) {
    const result = inspectElementRaw(id);

    if (result === null) {
      console.warn(`Could not find element with id "${id}"`);
      return;
    }

    const supportsGroup = typeof console.groupCollapsed === 'function';

    if (supportsGroup) {
      console.groupCollapsed(`[Click to expand] %c<${result.displayName || 'Component'} />`, // --dom-tag-name-color is the CSS variable Chrome styles HTML elements with in the console.
      'color: var(--dom-tag-name-color); font-weight: normal;');
    }

    if (result.props !== null) {
      console.log('Props:', result.props);
    }

    if (result.state !== null) {
      console.log('State:', result.state);
    }

    if (result.context !== null) {
      console.log('Context:', result.context);
    }

    const nativeNode = findNativeNodeForInternalID(id);

    if (nativeNode !== null) {
      console.log('Node:', nativeNode);
    }

    if (window.chrome || /firefox/i.test(navigator.userAgent)) {
      console.log('Right-click any value to save it as a global variable for further inspection.');
    }

    if (supportsGroup) {
      console.groupEnd();
    }
  }

  function prepareViewAttributeSource(id, path) {
    const inspectedElement = inspectElementRaw(id);

    if (inspectedElement !== null) {
      window.$attribute = Object(utils["h" /* getInObject */])(inspectedElement, path);
    }
  }

  function prepareViewElementSource(id) {
    const internalInstance = idToInternalInstanceMap.get(id);

    if (internalInstance == null) {
      console.warn(`Could not find instance with id "${id}"`);
      return;
    }

    const element = internalInstance._currentElement;

    if (element == null) {
      console.warn(`Could not find element with id "${id}"`);
      return;
    }

    global.$type = element.type;
  }

  function deletePath(type, id, hookID, path) {
    const internalInstance = idToInternalInstanceMap.get(id);

    if (internalInstance != null) {
      const publicInstance = internalInstance._instance;

      if (publicInstance != null) {
        switch (type) {
          case 'context':
            Object(utils["a" /* deletePathInObject */])(publicInstance.context, path);
            forceUpdate(publicInstance);
            break;

          case 'hooks':
            throw new Error('Hooks not supported by this renderer');

          case 'props':
            const element = internalInstance._currentElement;
            internalInstance._currentElement = { ...element,
              props: Object(backend_utils["c" /* copyWithDelete */])(element.props, path)
            };
            forceUpdate(publicInstance);
            break;

          case 'state':
            Object(utils["a" /* deletePathInObject */])(publicInstance.state, path);
            forceUpdate(publicInstance);
            break;
        }
      }
    }
  }

  function renamePath(type, id, hookID, oldPath, newPath) {
    const internalInstance = idToInternalInstanceMap.get(id);

    if (internalInstance != null) {
      const publicInstance = internalInstance._instance;

      if (publicInstance != null) {
        switch (type) {
          case 'context':
            Object(utils["k" /* renamePathInObject */])(publicInstance.context, oldPath, newPath);
            forceUpdate(publicInstance);
            break;

          case 'hooks':
            throw new Error('Hooks not supported by this renderer');

          case 'props':
            const element = internalInstance._currentElement;
            internalInstance._currentElement = { ...element,
              props: Object(backend_utils["d" /* copyWithRename */])(element.props, oldPath, newPath)
            };
            forceUpdate(publicInstance);
            break;

          case 'state':
            Object(utils["k" /* renamePathInObject */])(publicInstance.state, oldPath, newPath);
            forceUpdate(publicInstance);
            break;
        }
      }
    }
  }

  function overrideValueAtPath(type, id, hookID, path, value) {
    const internalInstance = idToInternalInstanceMap.get(id);

    if (internalInstance != null) {
      const publicInstance = internalInstance._instance;

      if (publicInstance != null) {
        switch (type) {
          case 'context':
            Object(utils["l" /* setInObject */])(publicInstance.context, path, value);
            forceUpdate(publicInstance);
            break;

          case 'hooks':
            throw new Error('Hooks not supported by this renderer');

          case 'props':
            const element = internalInstance._currentElement;
            internalInstance._currentElement = { ...element,
              props: Object(backend_utils["e" /* copyWithSet */])(element.props, path, value)
            };
            forceUpdate(publicInstance);
            break;

          case 'state':
            Object(utils["l" /* setInObject */])(publicInstance.state, path, value);
            forceUpdate(publicInstance);
            break;
        }
      }
    }
  } // v16+ only features


  const getProfilingData = () => {
    throw new Error('getProfilingData not supported by this renderer');
  };

  const handleCommitFiberRoot = () => {
    throw new Error('handleCommitFiberRoot not supported by this renderer');
  };

  const handleCommitFiberUnmount = () => {
    throw new Error('handleCommitFiberUnmount not supported by this renderer');
  };

  const handlePostCommitFiberRoot = () => {
    throw new Error('handlePostCommitFiberRoot not supported by this renderer');
  };

  const overrideError = () => {
    throw new Error('overrideError not supported by this renderer');
  };

  const overrideSuspense = () => {
    throw new Error('overrideSuspense not supported by this renderer');
  };

  const startProfiling = () => {// Do not throw, since this would break a multi-root scenario where v15 and v16 were both present.
  };

  const stopProfiling = () => {// Do not throw, since this would break a multi-root scenario where v15 and v16 were both present.
  };

  function getBestMatchForTrackedPath() {
    // Not implemented.
    return null;
  }

  function getPathForElement(id) {
    // Not implemented.
    return null;
  }

  function updateComponentFilters(componentFilters) {// Not implemented.
  }

  function setTraceUpdatesEnabled(enabled) {// Not implemented.
  }

  function setTrackedPath(path) {// Not implemented.
  }

  function getOwnersList(id) {
    // Not implemented.
    return null;
  }

  function clearErrorsAndWarnings() {// Not implemented
  }

  function clearErrorsForFiberID(id) {// Not implemented
  }

  function clearWarningsForFiberID(id) {// Not implemented
  }

  return {
    clearErrorsAndWarnings,
    clearErrorsForFiberID,
    clearWarningsForFiberID,
    cleanup,
    copyElementPath,
    deletePath,
    flushInitialOperations,
    getBestMatchForTrackedPath,
    getDisplayNameForFiberID,
    getFiberIDForNative: getInternalIDForNative,
    getInstanceAndStyle,
    findNativeNodesForFiberID: id => {
      const nativeNode = findNativeNodeForInternalID(id);
      return nativeNode == null ? null : [nativeNode];
    },
    getOwnersList,
    getPathForElement,
    getProfilingData,
    handleCommitFiberRoot,
    handleCommitFiberUnmount,
    handlePostCommitFiberRoot,
    inspectElement,
    logElementToConsole,
    overrideError,
    overrideSuspense,
    overrideValueAtPath,
    renamePath,
    prepareViewAttributeSource,
    prepareViewElementSource,
    renderer,
    setTraceUpdatesEnabled,
    setTrackedPath,
    startProfiling,
    stopProfiling,
    storeAsGlobal,
    updateComponentFilters
  };
}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



function initBackend(hook, agent, global) {
  if (hook == null) {
    // DevTools didn't get injected into this page (maybe b'c of the contentType).
    return () => {};
  }

  const subs = [hook.sub('renderer-attached', ({
    id,
    renderer,
    rendererInterface
  }) => {
    agent.setRendererInterface(id, rendererInterface); // Now that the Store and the renderer interface are connected,
    // it's time to flush the pending operation codes to the frontend.

    rendererInterface.flushInitialOperations();
  }), hook.sub('unsupported-renderer-version', id => {
    agent.onUnsupportedRenderer(id);
  }), hook.sub('fastRefreshScheduled', agent.onFastRefreshScheduled), hook.sub('operations', agent.onHookOperations), hook.sub('traceUpdates', agent.onTraceUpdates) // TODO Add additional subscriptions required for profiling mode
  ];

  const attachRenderer = (id, renderer) => {
    let rendererInterface = hook.rendererInterfaces.get(id); // Inject any not-yet-injected renderers (if we didn't reload-and-profile)

    if (rendererInterface == null) {
      if (typeof renderer.findFiberByHostInstance === 'function') {
        // react-reconciler v16+
        rendererInterface = Object(backend_renderer["a" /* attach */])(hook, id, renderer, global);
      } else if (renderer.ComponentTree) {
        // react-dom v15
        rendererInterface = attach(hook, id, renderer, global);
      } else {// Older react-dom or other unsupported renderer version
      }

      if (rendererInterface != null) {
        hook.rendererInterfaces.set(id, rendererInterface);
      }
    } // Notify the DevTools frontend about new renderers.
    // This includes any that were attached early (via __REACT_DEVTOOLS_ATTACH__).


    if (rendererInterface != null) {
      hook.emit('renderer-attached', {
        id,
        renderer,
        rendererInterface
      });
    } else {
      hook.emit('unsupported-renderer-version', id);
    }
  }; // Connect renderers that have already injected themselves.


  hook.renderers.forEach((renderer, id) => {
    attachRenderer(id, renderer);
  }); // Connect any new renderers that injected themselves.

  subs.push(hook.sub('renderer', ({
    id,
    renderer
  }) => {
    attachRenderer(id, renderer);
  }));
  hook.emit('react-devtools', agent);
  hook.reactDevtoolsAgent = agent;

  const onAgentShutdown = () => {
    subs.forEach(fn => fn());
    hook.rendererInterfaces.forEach(rendererInterface => {
      rendererInterface.cleanup();
    });
    hook.reactDevtoolsAgent = null;
  };

  agent.addListener('shutdown', onAgentShutdown);
  subs.push(() => {
    agent.removeListener('shutdown', onAgentShutdown);
  });
  return () => {
    subs.forEach(fn => fn());
  };
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ setupNativeStyleEditor; });

// EXTERNAL MODULE: ../react-devtools-shared/src/backend/agent.js + 7 modules
var backend_agent = __webpack_require__(15);

// CONCATENATED MODULE: ../react-devtools-shared/src/backend/NativeStyleEditor/resolveBoxStyle.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * This mirrors react-native/Libraries/Inspector/resolveBoxStyle.js (but without RTL support).
 *
 * Resolve a style property into it's component parts, e.g.
 *
 * resolveBoxStyle('margin', {margin: 5, marginBottom: 10})
 * -> {top: 5, left: 5, right: 5, bottom: 10}
 */
function resolveBoxStyle(prefix, style) {
  let hasParts = false;
  const result = {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0
  };
  const styleForAll = style[prefix];

  if (styleForAll != null) {
    // eslint-disable-next-line no-for-of-loops/no-for-of-loops
    for (const key of Object.keys(result)) {
      result[key] = styleForAll;
    }

    hasParts = true;
  }

  const styleForHorizontal = style[prefix + 'Horizontal'];

  if (styleForHorizontal != null) {
    result.left = styleForHorizontal;
    result.right = styleForHorizontal;
    hasParts = true;
  } else {
    const styleForLeft = style[prefix + 'Left'];

    if (styleForLeft != null) {
      result.left = styleForLeft;
      hasParts = true;
    }

    const styleForRight = style[prefix + 'Right'];

    if (styleForRight != null) {
      result.right = styleForRight;
      hasParts = true;
    }

    const styleForEnd = style[prefix + 'End'];

    if (styleForEnd != null) {
      // TODO RTL support
      result.right = styleForEnd;
      hasParts = true;
    }

    const styleForStart = style[prefix + 'Start'];

    if (styleForStart != null) {
      // TODO RTL support
      result.left = styleForStart;
      hasParts = true;
    }
  }

  const styleForVertical = style[prefix + 'Vertical'];

  if (styleForVertical != null) {
    result.bottom = styleForVertical;
    result.top = styleForVertical;
    hasParts = true;
  } else {
    const styleForBottom = style[prefix + 'Bottom'];

    if (styleForBottom != null) {
      result.bottom = styleForBottom;
      hasParts = true;
    }

    const styleForTop = style[prefix + 'Top'];

    if (styleForTop != null) {
      result.top = styleForTop;
      hasParts = true;
    }
  }

  return hasParts ? result : null;
}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/NativeStyleEditor/setupNativeStyleEditor.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


function setupNativeStyleEditor(bridge, agent, resolveNativeStyle, validAttributes) {
  bridge.addListener('NativeStyleEditor_measure', ({
    id,
    rendererID
  }) => {
    measureStyle(agent, bridge, resolveNativeStyle, id, rendererID);
  });
  bridge.addListener('NativeStyleEditor_renameAttribute', ({
    id,
    rendererID,
    oldName,
    newName,
    value
  }) => {
    renameStyle(agent, id, rendererID, oldName, newName, value);
    setTimeout(() => measureStyle(agent, bridge, resolveNativeStyle, id, rendererID));
  });
  bridge.addListener('NativeStyleEditor_setValue', ({
    id,
    rendererID,
    name,
    value
  }) => {
    setStyle(agent, id, rendererID, name, value);
    setTimeout(() => measureStyle(agent, bridge, resolveNativeStyle, id, rendererID));
  });
  bridge.send('isNativeStyleEditorSupported', {
    isSupported: true,
    validAttributes
  });
}
const EMPTY_BOX_STYLE = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};
const componentIDToStyleOverrides = new Map();

function measureStyle(agent, bridge, resolveNativeStyle, id, rendererID) {
  const data = agent.getInstanceAndStyle({
    id,
    rendererID
  });

  if (!data || !data.style) {
    bridge.send('NativeStyleEditor_styleAndLayout', {
      id,
      layout: null,
      style: null
    });
    return;
  }

  const {
    instance,
    style
  } = data;
  let resolvedStyle = resolveNativeStyle(style); // If it's a host component we edited before, amend styles.

  const styleOverrides = componentIDToStyleOverrides.get(id);

  if (styleOverrides != null) {
    resolvedStyle = Object.assign({}, resolvedStyle, styleOverrides);
  }

  if (!instance || typeof instance.measure !== 'function') {
    bridge.send('NativeStyleEditor_styleAndLayout', {
      id,
      layout: null,
      style: resolvedStyle || null
    });
    return;
  } // $FlowFixMe the parameter types of an unknown function are unknown


  instance.measure((x, y, width, height, left, top) => {
    // RN Android sometimes returns undefined here. Don't send measurements in this case.
    // https://github.com/jhen0409/react-native-debugger/issues/84#issuecomment-304611817
    if (typeof x !== 'number') {
      bridge.send('NativeStyleEditor_styleAndLayout', {
        id,
        layout: null,
        style: resolvedStyle || null
      });
      return;
    }

    const margin = resolvedStyle != null && resolveBoxStyle('margin', resolvedStyle) || EMPTY_BOX_STYLE;
    const padding = resolvedStyle != null && resolveBoxStyle('padding', resolvedStyle) || EMPTY_BOX_STYLE;
    bridge.send('NativeStyleEditor_styleAndLayout', {
      id,
      layout: {
        x,
        y,
        width,
        height,
        left,
        top,
        margin,
        padding
      },
      style: resolvedStyle || null
    });
  });
}

function shallowClone(object) {
  const cloned = {};

  for (const n in object) {
    cloned[n] = object[n];
  }

  return cloned;
}

function renameStyle(agent, id, rendererID, oldName, newName, value) {
  const data = agent.getInstanceAndStyle({
    id,
    rendererID
  });

  if (!data || !data.style) {
    return;
  }

  const {
    instance,
    style
  } = data;
  const newStyle = newName ? {
    [oldName]: undefined,
    [newName]: value
  } : {
    [oldName]: undefined
  };
  let customStyle; // TODO It would be nice if the renderer interface abstracted this away somehow.

  if (instance !== null && typeof instance.setNativeProps === 'function') {
    // In the case of a host component, we need to use setNativeProps().
    // Remember to "correct" resolved styles when we read them next time.
    const styleOverrides = componentIDToStyleOverrides.get(id);

    if (!styleOverrides) {
      componentIDToStyleOverrides.set(id, newStyle);
    } else {
      Object.assign(styleOverrides, newStyle);
    } // TODO Fabric does not support setNativeProps; chat with Sebastian or Eli


    instance.setNativeProps({
      style: newStyle
    });
  } else if (Array.isArray(style)) {
    const lastIndex = style.length - 1;

    if (typeof style[lastIndex] === 'object' && !Array.isArray(style[lastIndex])) {
      customStyle = shallowClone(style[lastIndex]);
      delete customStyle[oldName];

      if (newName) {
        customStyle[newName] = value;
      } else {
        customStyle[oldName] = undefined;
      }

      agent.overrideValueAtPath({
        type: 'props',
        id,
        rendererID,
        path: ['style', lastIndex],
        value: customStyle
      });
    } else {
      agent.overrideValueAtPath({
        type: 'props',
        id,
        rendererID,
        path: ['style'],
        value: style.concat([newStyle])
      });
    }
  } else if (typeof style === 'object') {
    customStyle = shallowClone(style);
    delete customStyle[oldName];

    if (newName) {
      customStyle[newName] = value;
    } else {
      customStyle[oldName] = undefined;
    }

    agent.overrideValueAtPath({
      type: 'props',
      id,
      rendererID,
      path: ['style'],
      value: customStyle
    });
  } else {
    agent.overrideValueAtPath({
      type: 'props',
      id,
      rendererID,
      path: ['style'],
      value: [style, newStyle]
    });
  }

  agent.emit('hideNativeHighlight');
}

function setStyle(agent, id, rendererID, name, value) {
  const data = agent.getInstanceAndStyle({
    id,
    rendererID
  });

  if (!data || !data.style) {
    return;
  }

  const {
    instance,
    style
  } = data;
  const newStyle = {
    [name]: value
  }; // TODO It would be nice if the renderer interface abstracted this away somehow.

  if (instance !== null && typeof instance.setNativeProps === 'function') {
    // In the case of a host component, we need to use setNativeProps().
    // Remember to "correct" resolved styles when we read them next time.
    const styleOverrides = componentIDToStyleOverrides.get(id);

    if (!styleOverrides) {
      componentIDToStyleOverrides.set(id, newStyle);
    } else {
      Object.assign(styleOverrides, newStyle);
    } // TODO Fabric does not support setNativeProps; chat with Sebastian or Eli


    instance.setNativeProps({
      style: newStyle
    });
  } else if (Array.isArray(style)) {
    const lastLength = style.length - 1;

    if (typeof style[lastLength] === 'object' && !Array.isArray(style[lastLength])) {
      agent.overrideValueAtPath({
        type: 'props',
        id,
        rendererID,
        path: ['style', lastLength, name],
        value
      });
    } else {
      agent.overrideValueAtPath({
        type: 'props',
        id,
        rendererID,
        path: ['style'],
        value: style.concat([newStyle])
      });
    }
  } else {
    agent.overrideValueAtPath({
      type: 'props',
      id,
      rendererID,
      path: ['style'],
      value: [style, newStyle]
    });
  }

  agent.emit('hideNativeHighlight');
}

/***/ })
/******/ ]);

}

exports.reactDevtoolsBackend = reactDevtoolsBackend;
