var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/core-js/internals/global-this.js"(exports, module) {
    "use strict";
    var check2 = function(it) {
      return it && it.Math === Math && it;
    };
    module.exports = // eslint-disable-next-line es/no-global-this -- safe
    check2(typeof globalThis == "object" && globalThis) || check2(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check2(typeof self == "object" && self) || check2(typeof global == "object" && global) || check2(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ (function() {
      return this;
    })() || Function("return this")();
  }
});

// node_modules/core-js/internals/path.js
var require_path = __commonJS({
  "node_modules/core-js/internals/path.js"(exports, module) {
    "use strict";
    var globalThis2 = require_global_this();
    module.exports = globalThis2;
  }
});

// node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/core-js/internals/fails.js"(exports, module) {
    "use strict";
    module.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  }
});

// node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/core-js/internals/function-bind-native.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    module.exports = !fails(function() {
      var test = (function() {
      }).bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/core-js/internals/is-null-or-undefined.js"(exports, module) {
    "use strict";
    module.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/core-js/internals/to-object.js"(exports, module) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/core-js/internals/has-own-property.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/core-js/internals/is-pure.js"(exports, module) {
    "use strict";
    module.exports = false;
  }
});

// node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/core-js/internals/define-global-property.js"(exports, module) {
    "use strict";
    var globalThis2 = require_global_this();
    var defineProperty = Object.defineProperty;
    module.exports = function(key, value) {
      try {
        defineProperty(globalThis2, key, { value, configurable: true, writable: true });
      } catch (error) {
        globalThis2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/core-js/internals/shared-store.js"(exports, module) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global_this();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.48.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "\xA9 2013\u20132025 Denis Pushkarev (zloirock.ru), 2025\u20132026 CoreJS Company (core-js.io). All rights reserved.",
      license: "https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/core-js/internals/shared.js"(exports, module) {
    "use strict";
    var store = require_shared_store();
    module.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/core-js/internals/uid.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString = uncurryThis(1.1.toString);
    module.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/core-js/internals/environment-user-agent.js"(exports, module) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator2 = globalThis2.navigator;
    var userAgent = navigator2 && navigator2.userAgent;
    module.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/core-js/internals/environment-v8-version.js"(exports, module) {
    "use strict";
    var globalThis2 = require_global_this();
    var userAgent = require_environment_user_agent();
    var process2 = globalThis2.process;
    var Deno = globalThis2.Deno;
    var versions = process2 && process2.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
      }
    }
    module.exports = version;
  }
});

// node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module) {
    "use strict";
    var V8_VERSION = require_environment_v8_version();
    var fails = require_fails();
    var globalThis2 = require_global_this();
    var $String = globalThis2.String;
    module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
    "use strict";
    var globalThis2 = require_global_this();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var Symbol2 = globalThis2.Symbol;
    var WellKnownSymbolsStore = shared("wks");
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/core-js/internals/well-known-symbol-wrapped.js
var require_well_known_symbol_wrapped = __commonJS({
  "node_modules/core-js/internals/well-known-symbol-wrapped.js"(exports) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    exports.f = wellKnownSymbol;
  }
});

// node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/core-js/internals/descriptors.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    module.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/core-js/internals/is-callable.js"(exports, module) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/core-js/internals/is-object.js"(exports, module) {
    "use strict";
    var isCallable = require_is_callable();
    module.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/core-js/internals/document-create-element.js"(exports, module) {
    "use strict";
    var globalThis2 = require_global_this();
    var isObject2 = require_is_object();
    var document2 = globalThis2.document;
    var EXISTS = isObject2(document2) && isObject2(document2.createElement);
    module.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var createElement = require_document_create_element();
    module.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a !== 7;
    });
  }
});

// node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    module.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype !== 42;
    });
  }
});

// node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/core-js/internals/an-object.js"(exports, module) {
    "use strict";
    var isObject2 = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isObject2(argument)) return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/core-js/internals/function-call.js"(exports, module) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/core-js/internals/get-built-in.js"(exports, module) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
    };
  }
});

// node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/core-js/internals/is-symbol.js"(exports, module) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/core-js/internals/try-to-string.js"(exports, module) {
    "use strict";
    var $String = String;
    module.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/core-js/internals/a-callable.js"(exports, module) {
    "use strict";
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isCallable(argument)) return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/core-js/internals/get-method.js"(exports, module) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject2 = require_is_object();
    var $TypeError = TypeError;
    module.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject2(val = call(fn, input))) return val;
      if (isCallable(fn = input.valueOf) && !isObject2(val = call(fn, input))) return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject2(val = call(fn, input))) return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/core-js/internals/to-primitive.js"(exports, module) {
    "use strict";
    var call = require_function_call();
    var isObject2 = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol = require_well_known_symbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module.exports = function(input, pref) {
      if (!isObject2(input) || isSymbol(input)) return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject2(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0) pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/core-js/internals/to-property-key.js"(exports, module) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/core-js/internals/object-define-property.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject = require_an_object();
    var toPropertyKey = require_to_property_key();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
      } catch (error) {
      }
      if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
      if ("value" in Attributes) O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/core-js/internals/well-known-symbol-define.js
var require_well_known_symbol_define = __commonJS({
  "node_modules/core-js/internals/well-known-symbol-define.js"(exports, module) {
    "use strict";
    var path = require_path();
    var hasOwn = require_has_own_property();
    var wrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
    var defineProperty = require_object_define_property().f;
    module.exports = function(NAME) {
      var Symbol2 = path.Symbol || (path.Symbol = {});
      if (!hasOwn(Symbol2, NAME)) defineProperty(Symbol2, NAME, {
        value: wrappedWellKnownSymbolModule.f(NAME)
      });
    };
  }
});

// node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
    "use strict";
    module.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/core-js/internals/classof-raw.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/core-js/internals/indexed-object.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var classof = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis("".split);
    module.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) === "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var call = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var hasOwn = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
      } catch (error) {
      }
      if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/core-js/modules/es.symbol.async-dispose.js
var require_es_symbol_async_dispose = __commonJS({
  "node_modules/core-js/modules/es.symbol.async-dispose.js"() {
    "use strict";
    var globalThis2 = require_global_this();
    var defineWellKnownSymbol = require_well_known_symbol_define();
    var defineProperty = require_object_define_property().f;
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var Symbol2 = globalThis2.Symbol;
    defineWellKnownSymbol("asyncDispose");
    if (Symbol2) {
      descriptor = getOwnPropertyDescriptor(Symbol2, "asyncDispose");
      if (descriptor.enumerable && descriptor.configurable && descriptor.writable) {
        defineProperty(Symbol2, "asyncDispose", { value: descriptor.value, enumerable: false, configurable: false, writable: false });
      }
    }
    var descriptor;
  }
});

// node_modules/core-js/modules/esnext.symbol.async-dispose.js
var require_esnext_symbol_async_dispose = __commonJS({
  "node_modules/core-js/modules/esnext.symbol.async-dispose.js"() {
    "use strict";
    require_es_symbol_async_dispose();
  }
});

// node_modules/core-js/modules/es.symbol.dispose.js
var require_es_symbol_dispose = __commonJS({
  "node_modules/core-js/modules/es.symbol.dispose.js"() {
    "use strict";
    var globalThis2 = require_global_this();
    var defineWellKnownSymbol = require_well_known_symbol_define();
    var defineProperty = require_object_define_property().f;
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var Symbol2 = globalThis2.Symbol;
    defineWellKnownSymbol("dispose");
    if (Symbol2) {
      descriptor = getOwnPropertyDescriptor(Symbol2, "dispose");
      if (descriptor.enumerable && descriptor.configurable && descriptor.writable) {
        defineProperty(Symbol2, "dispose", { value: descriptor.value, enumerable: false, configurable: false, writable: false });
      }
    }
    var descriptor;
  }
});

// node_modules/core-js/modules/esnext.symbol.dispose.js
var require_esnext_symbol_dispose = __commonJS({
  "node_modules/core-js/modules/esnext.symbol.dispose.js"() {
    "use strict";
    require_es_symbol_dispose();
  }
});

// node_modules/zod/v3/helpers/util.cjs
var require_util = __commonJS({
  "node_modules/zod/v3/helpers/util.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getParsedType = exports.ZodParsedType = exports.objectUtil = exports.util = void 0;
    var util;
    (function(util2) {
      util2.assertEqual = (_) => {
      };
      function assertIs(_arg) {
      }
      util2.assertIs = assertIs;
      function assertNever(_x) {
        throw new Error();
      }
      util2.assertNever = assertNever;
      util2.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
          obj[item] = item;
        }
        return obj;
      };
      util2.getValidEnumValues = (obj) => {
        const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
          filtered[k] = obj[k];
        }
        return util2.objectValues(filtered);
      };
      util2.objectValues = (obj) => {
        return util2.objectKeys(obj).map(function(e) {
          return obj[e];
        });
      };
      util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
        const keys = [];
        for (const key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            keys.push(key);
          }
        }
        return keys;
      };
      util2.find = (arr, checker) => {
        for (const item of arr) {
          if (checker(item))
            return item;
        }
        return void 0;
      };
      util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
      function joinValues(array, separator = " | ") {
        return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
      }
      util2.joinValues = joinValues;
      util2.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
          return value.toString();
        }
        return value;
      };
    })(util || (exports.util = util = {}));
    var objectUtil;
    (function(objectUtil2) {
      objectUtil2.mergeShapes = (first, second) => {
        return {
          ...first,
          ...second
          // second overwrites first
        };
      };
    })(objectUtil || (exports.objectUtil = objectUtil = {}));
    exports.ZodParsedType = util.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set"
    ]);
    var getParsedType = (data) => {
      const t = typeof data;
      switch (t) {
        case "undefined":
          return exports.ZodParsedType.undefined;
        case "string":
          return exports.ZodParsedType.string;
        case "number":
          return Number.isNaN(data) ? exports.ZodParsedType.nan : exports.ZodParsedType.number;
        case "boolean":
          return exports.ZodParsedType.boolean;
        case "function":
          return exports.ZodParsedType.function;
        case "bigint":
          return exports.ZodParsedType.bigint;
        case "symbol":
          return exports.ZodParsedType.symbol;
        case "object":
          if (Array.isArray(data)) {
            return exports.ZodParsedType.array;
          }
          if (data === null) {
            return exports.ZodParsedType.null;
          }
          if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
            return exports.ZodParsedType.promise;
          }
          if (typeof Map !== "undefined" && data instanceof Map) {
            return exports.ZodParsedType.map;
          }
          if (typeof Set !== "undefined" && data instanceof Set) {
            return exports.ZodParsedType.set;
          }
          if (typeof Date !== "undefined" && data instanceof Date) {
            return exports.ZodParsedType.date;
          }
          return exports.ZodParsedType.object;
        default:
          return exports.ZodParsedType.unknown;
      }
    };
    exports.getParsedType = getParsedType;
  }
});

// node_modules/zod/v3/ZodError.cjs
var require_ZodError = __commonJS({
  "node_modules/zod/v3/ZodError.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZodError = exports.quotelessJson = exports.ZodIssueCode = void 0;
    var util_js_1 = require_util();
    exports.ZodIssueCode = util_js_1.util.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite"
    ]);
    var quotelessJson = (obj) => {
      const json = JSON.stringify(obj, null, 2);
      return json.replace(/"([^"]+)":/g, "$1:");
    };
    exports.quotelessJson = quotelessJson;
    var ZodError = class _ZodError extends Error {
      get errors() {
        return this.issues;
      }
      constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub) => {
          this.issues = [...this.issues, sub];
        };
        this.addIssues = (subs = []) => {
          this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(this, actualProto);
        } else {
          this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
      }
      format(_mapper) {
        const mapper = _mapper || function(issue) {
          return issue.message;
        };
        const fieldErrors = { _errors: [] };
        const processError = (error) => {
          for (const issue of error.issues) {
            if (issue.code === "invalid_union") {
              issue.unionErrors.map(processError);
            } else if (issue.code === "invalid_return_type") {
              processError(issue.returnTypeError);
            } else if (issue.code === "invalid_arguments") {
              processError(issue.argumentsError);
            } else if (issue.path.length === 0) {
              fieldErrors._errors.push(mapper(issue));
            } else {
              let curr = fieldErrors;
              let i = 0;
              while (i < issue.path.length) {
                const el = issue.path[i];
                const terminal = i === issue.path.length - 1;
                if (!terminal) {
                  curr[el] = curr[el] || { _errors: [] };
                } else {
                  curr[el] = curr[el] || { _errors: [] };
                  curr[el]._errors.push(mapper(issue));
                }
                curr = curr[el];
                i++;
              }
            }
          }
        };
        processError(this);
        return fieldErrors;
      }
      static assert(value) {
        if (!(value instanceof _ZodError)) {
          throw new Error(`Not a ZodError: ${value}`);
        }
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, util_js_1.util.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return this.issues.length === 0;
      }
      flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues) {
          if (sub.path.length > 0) {
            const firstEl = sub.path[0];
            fieldErrors[firstEl] = fieldErrors[firstEl] || [];
            fieldErrors[firstEl].push(mapper(sub));
          } else {
            formErrors.push(mapper(sub));
          }
        }
        return { formErrors, fieldErrors };
      }
      get formErrors() {
        return this.flatten();
      }
    };
    exports.ZodError = ZodError;
    ZodError.create = (issues) => {
      const error = new ZodError(issues);
      return error;
    };
  }
});

// node_modules/zod/v3/locales/en.cjs
var require_en = __commonJS({
  "node_modules/zod/v3/locales/en.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ZodError_js_1 = require_ZodError();
    var util_js_1 = require_util();
    var errorMap = (issue, _ctx) => {
      let message2;
      switch (issue.code) {
        case ZodError_js_1.ZodIssueCode.invalid_type:
          if (issue.received === util_js_1.ZodParsedType.undefined) {
            message2 = "Required";
          } else {
            message2 = `Expected ${issue.expected}, received ${issue.received}`;
          }
          break;
        case ZodError_js_1.ZodIssueCode.invalid_literal:
          message2 = `Invalid literal value, expected ${JSON.stringify(issue.expected, util_js_1.util.jsonStringifyReplacer)}`;
          break;
        case ZodError_js_1.ZodIssueCode.unrecognized_keys:
          message2 = `Unrecognized key(s) in object: ${util_js_1.util.joinValues(issue.keys, ", ")}`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_union:
          message2 = `Invalid input`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_union_discriminator:
          message2 = `Invalid discriminator value. Expected ${util_js_1.util.joinValues(issue.options)}`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_enum_value:
          message2 = `Invalid enum value. Expected ${util_js_1.util.joinValues(issue.options)}, received '${issue.received}'`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_arguments:
          message2 = `Invalid function arguments`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_return_type:
          message2 = `Invalid function return type`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_date:
          message2 = `Invalid date`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_string:
          if (typeof issue.validation === "object") {
            if ("includes" in issue.validation) {
              message2 = `Invalid input: must include "${issue.validation.includes}"`;
              if (typeof issue.validation.position === "number") {
                message2 = `${message2} at one or more positions greater than or equal to ${issue.validation.position}`;
              }
            } else if ("startsWith" in issue.validation) {
              message2 = `Invalid input: must start with "${issue.validation.startsWith}"`;
            } else if ("endsWith" in issue.validation) {
              message2 = `Invalid input: must end with "${issue.validation.endsWith}"`;
            } else {
              util_js_1.util.assertNever(issue.validation);
            }
          } else if (issue.validation !== "regex") {
            message2 = `Invalid ${issue.validation}`;
          } else {
            message2 = "Invalid";
          }
          break;
        case ZodError_js_1.ZodIssueCode.too_small:
          if (issue.type === "array")
            message2 = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
          else if (issue.type === "string")
            message2 = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
          else if (issue.type === "number")
            message2 = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "bigint")
            message2 = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "date")
            message2 = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
          else
            message2 = "Invalid input";
          break;
        case ZodError_js_1.ZodIssueCode.too_big:
          if (issue.type === "array")
            message2 = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
          else if (issue.type === "string")
            message2 = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
          else if (issue.type === "number")
            message2 = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "bigint")
            message2 = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "date")
            message2 = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
          else
            message2 = "Invalid input";
          break;
        case ZodError_js_1.ZodIssueCode.custom:
          message2 = `Invalid input`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_intersection_types:
          message2 = `Intersection results could not be merged`;
          break;
        case ZodError_js_1.ZodIssueCode.not_multiple_of:
          message2 = `Number must be a multiple of ${issue.multipleOf}`;
          break;
        case ZodError_js_1.ZodIssueCode.not_finite:
          message2 = "Number must be finite";
          break;
        default:
          message2 = _ctx.defaultError;
          util_js_1.util.assertNever(issue);
      }
      return { message: message2 };
    };
    exports.default = errorMap;
  }
});

// node_modules/zod/v3/errors.cjs
var require_errors = __commonJS({
  "node_modules/zod/v3/errors.cjs"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultErrorMap = void 0;
    exports.setErrorMap = setErrorMap;
    exports.getErrorMap = getErrorMap;
    var en_js_1 = __importDefault(require_en());
    exports.defaultErrorMap = en_js_1.default;
    var overrideErrorMap = en_js_1.default;
    function setErrorMap(map) {
      overrideErrorMap = map;
    }
    function getErrorMap() {
      return overrideErrorMap;
    }
  }
});

// node_modules/zod/v3/helpers/parseUtil.cjs
var require_parseUtil = __commonJS({
  "node_modules/zod/v3/helpers/parseUtil.cjs"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isAsync = exports.isValid = exports.isDirty = exports.isAborted = exports.OK = exports.DIRTY = exports.INVALID = exports.ParseStatus = exports.EMPTY_PATH = exports.makeIssue = void 0;
    exports.addIssueToContext = addIssueToContext;
    var errors_js_1 = require_errors();
    var en_js_1 = __importDefault(require_en());
    var makeIssue = (params) => {
      const { data, path, errorMaps, issueData } = params;
      const fullPath = [...path, ...issueData.path || []];
      const fullIssue = {
        ...issueData,
        path: fullPath
      };
      if (issueData.message !== void 0) {
        return {
          ...issueData,
          path: fullPath,
          message: issueData.message
        };
      }
      let errorMessage = "";
      const maps = errorMaps.filter((m) => !!m).slice().reverse();
      for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
      }
      return {
        ...issueData,
        path: fullPath,
        message: errorMessage
      };
    };
    exports.makeIssue = makeIssue;
    exports.EMPTY_PATH = [];
    function addIssueToContext(ctx, issueData) {
      const overrideMap = (0, errors_js_1.getErrorMap)();
      const issue = (0, exports.makeIssue)({
        issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          // contextual error map is first priority
          ctx.schemaErrorMap,
          // then schema-bound map if available
          overrideMap,
          // then global override map
          overrideMap === en_js_1.default ? void 0 : en_js_1.default
          // then global default map
        ].filter((x) => !!x)
      });
      ctx.common.issues.push(issue);
    }
    var ParseStatus = class _ParseStatus {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        if (this.value === "valid")
          this.value = "dirty";
      }
      abort() {
        if (this.value !== "aborted")
          this.value = "aborted";
      }
      static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
          if (s.status === "aborted")
            return exports.INVALID;
          if (s.status === "dirty")
            status.dirty();
          arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
      }
      static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value
          });
        }
        return _ParseStatus.mergeObjectSync(status, syncPairs);
      }
      static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
          const { key, value } = pair;
          if (key.status === "aborted")
            return exports.INVALID;
          if (value.status === "aborted")
            return exports.INVALID;
          if (key.status === "dirty")
            status.dirty();
          if (value.status === "dirty")
            status.dirty();
          if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
            finalObject[key.value] = value.value;
          }
        }
        return { status: status.value, value: finalObject };
      }
    };
    exports.ParseStatus = ParseStatus;
    exports.INVALID = Object.freeze({
      status: "aborted"
    });
    var DIRTY = (value) => ({ status: "dirty", value });
    exports.DIRTY = DIRTY;
    var OK = (value) => ({ status: "valid", value });
    exports.OK = OK;
    var isAborted = (x) => x.status === "aborted";
    exports.isAborted = isAborted;
    var isDirty = (x) => x.status === "dirty";
    exports.isDirty = isDirty;
    var isValid = (x) => x.status === "valid";
    exports.isValid = isValid;
    var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
    exports.isAsync = isAsync;
  }
});

// node_modules/zod/v3/helpers/typeAliases.cjs
var require_typeAliases = __commonJS({
  "node_modules/zod/v3/helpers/typeAliases.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/zod/v3/helpers/errorUtil.cjs
var require_errorUtil = __commonJS({
  "node_modules/zod/v3/helpers/errorUtil.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.errorUtil = void 0;
    var errorUtil;
    (function(errorUtil2) {
      errorUtil2.errToObj = (message2) => typeof message2 === "string" ? { message: message2 } : message2 || {};
      errorUtil2.toString = (message2) => typeof message2 === "string" ? message2 : message2?.message;
    })(errorUtil || (exports.errorUtil = errorUtil = {}));
  }
});

// node_modules/zod/v3/types.cjs
var require_types = __commonJS({
  "node_modules/zod/v3/types.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.discriminatedUnion = exports.date = exports.boolean = exports.bigint = exports.array = exports.any = exports.coerce = exports.ZodFirstPartyTypeKind = exports.late = exports.ZodSchema = exports.Schema = exports.ZodReadonly = exports.ZodPipeline = exports.ZodBranded = exports.BRAND = exports.ZodNaN = exports.ZodCatch = exports.ZodDefault = exports.ZodNullable = exports.ZodOptional = exports.ZodTransformer = exports.ZodEffects = exports.ZodPromise = exports.ZodNativeEnum = exports.ZodEnum = exports.ZodLiteral = exports.ZodLazy = exports.ZodFunction = exports.ZodSet = exports.ZodMap = exports.ZodRecord = exports.ZodTuple = exports.ZodIntersection = exports.ZodDiscriminatedUnion = exports.ZodUnion = exports.ZodObject = exports.ZodArray = exports.ZodVoid = exports.ZodNever = exports.ZodUnknown = exports.ZodAny = exports.ZodNull = exports.ZodUndefined = exports.ZodSymbol = exports.ZodDate = exports.ZodBoolean = exports.ZodBigInt = exports.ZodNumber = exports.ZodString = exports.ZodType = void 0;
    exports.NEVER = exports.void = exports.unknown = exports.union = exports.undefined = exports.tuple = exports.transformer = exports.symbol = exports.string = exports.strictObject = exports.set = exports.record = exports.promise = exports.preprocess = exports.pipeline = exports.ostring = exports.optional = exports.onumber = exports.oboolean = exports.object = exports.number = exports.nullable = exports.null = exports.never = exports.nativeEnum = exports.nan = exports.map = exports.literal = exports.lazy = exports.intersection = exports.instanceof = exports.function = exports.enum = exports.effect = void 0;
    exports.datetimeRegex = datetimeRegex;
    exports.custom = custom;
    var ZodError_js_1 = require_ZodError();
    var errors_js_1 = require_errors();
    var errorUtil_js_1 = require_errorUtil();
    var parseUtil_js_1 = require_parseUtil();
    var util_js_1 = require_util();
    var ParseInputLazyPath = class {
      constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
      }
      get path() {
        if (!this._cachedPath.length) {
          if (Array.isArray(this._key)) {
            this._cachedPath.push(...this._path, ...this._key);
          } else {
            this._cachedPath.push(...this._path, this._key);
          }
        }
        return this._cachedPath;
      }
    };
    var handleResult = (ctx, result) => {
      if ((0, parseUtil_js_1.isValid)(result)) {
        return { success: true, data: result.value };
      } else {
        if (!ctx.common.issues.length) {
          throw new Error("Validation failed but no issues detected.");
        }
        return {
          success: false,
          get error() {
            if (this._error)
              return this._error;
            const error = new ZodError_js_1.ZodError(ctx.common.issues);
            this._error = error;
            return this._error;
          }
        };
      }
    };
    function processCreateParams(params) {
      if (!params)
        return {};
      const { errorMap, invalid_type_error, required_error, description } = params;
      if (errorMap && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
      }
      if (errorMap)
        return { errorMap, description };
      const customMap = (iss, ctx) => {
        const { message: message2 } = params;
        if (iss.code === "invalid_enum_value") {
          return { message: message2 ?? ctx.defaultError };
        }
        if (typeof ctx.data === "undefined") {
          return { message: message2 ?? required_error ?? ctx.defaultError };
        }
        if (iss.code !== "invalid_type")
          return { message: ctx.defaultError };
        return { message: message2 ?? invalid_type_error ?? ctx.defaultError };
      };
      return { errorMap: customMap, description };
    }
    var ZodType = class {
      get description() {
        return this._def.description;
      }
      _getType(input) {
        return (0, util_js_1.getParsedType)(input.data);
      }
      _getOrReturnCtx(input, ctx) {
        return ctx || {
          common: input.parent.common,
          data: input.data,
          parsedType: (0, util_js_1.getParsedType)(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        };
      }
      _processInputParams(input) {
        return {
          status: new parseUtil_js_1.ParseStatus(),
          ctx: {
            common: input.parent.common,
            data: input.data,
            parsedType: (0, util_js_1.getParsedType)(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
          }
        };
      }
      _parseSync(input) {
        const result = this._parse(input);
        if ((0, parseUtil_js_1.isAsync)(result)) {
          throw new Error("Synchronous parse encountered promise.");
        }
        return result;
      }
      _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
      }
      parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      safeParse(data, params) {
        const ctx = {
          common: {
            issues: [],
            async: params?.async ?? false,
            contextualErrorMap: params?.errorMap
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: (0, util_js_1.getParsedType)(data)
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
      }
      "~validate"(data) {
        const ctx = {
          common: {
            issues: [],
            async: !!this["~standard"].async
          },
          path: [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: (0, util_js_1.getParsedType)(data)
        };
        if (!this["~standard"].async) {
          try {
            const result = this._parseSync({ data, path: [], parent: ctx });
            return (0, parseUtil_js_1.isValid)(result) ? {
              value: result.value
            } : {
              issues: ctx.common.issues
            };
          } catch (err) {
            if (err?.message?.toLowerCase()?.includes("encountered")) {
              this["~standard"].async = true;
            }
            ctx.common = {
              issues: [],
              async: true
            };
          }
        }
        return this._parseAsync({ data, path: [], parent: ctx }).then((result) => (0, parseUtil_js_1.isValid)(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        });
      }
      async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      async safeParseAsync(data, params) {
        const ctx = {
          common: {
            issues: [],
            contextualErrorMap: params?.errorMap,
            async: true
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: (0, util_js_1.getParsedType)(data)
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await ((0, parseUtil_js_1.isAsync)(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
      }
      refine(check2, message2) {
        const getIssueProperties = (val) => {
          if (typeof message2 === "string" || typeof message2 === "undefined") {
            return { message: message2 };
          } else if (typeof message2 === "function") {
            return message2(val);
          } else {
            return message2;
          }
        };
        return this._refinement((val, ctx) => {
          const result = check2(val);
          const setError = () => ctx.addIssue({
            code: ZodError_js_1.ZodIssueCode.custom,
            ...getIssueProperties(val)
          });
          if (typeof Promise !== "undefined" && result instanceof Promise) {
            return result.then((data) => {
              if (!data) {
                setError();
                return false;
              } else {
                return true;
              }
            });
          }
          if (!result) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      refinement(check2, refinementData) {
        return this._refinement((val, ctx) => {
          if (!check2(val)) {
            ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
            return false;
          } else {
            return true;
          }
        });
      }
      _refinement(refinement) {
        return new ZodEffects({
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: { type: "refinement", refinement }
        });
      }
      superRefine(refinement) {
        return this._refinement(refinement);
      }
      constructor(def) {
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
          version: 1,
          vendor: "zod",
          validate: (data) => this["~validate"](data)
        };
      }
      optional() {
        return ZodOptional.create(this, this._def);
      }
      nullable() {
        return ZodNullable.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return ZodArray.create(this);
      }
      promise() {
        return ZodPromise.create(this, this._def);
      }
      or(option) {
        return ZodUnion.create([this, option], this._def);
      }
      and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
      }
      transform(transform) {
        return new ZodEffects({
          ...processCreateParams(this._def),
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: { type: "transform", transform }
        });
      }
      default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault({
          ...processCreateParams(this._def),
          innerType: this,
          defaultValue: defaultValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodDefault
        });
      }
      brand() {
        return new ZodBranded({
          typeName: ZodFirstPartyTypeKind.ZodBranded,
          type: this,
          ...processCreateParams(this._def)
        });
      }
      catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch({
          ...processCreateParams(this._def),
          innerType: this,
          catchValue: catchValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodCatch
        });
      }
      describe(description) {
        const This = this.constructor;
        return new This({
          ...this._def,
          description
        });
      }
      pipe(target) {
        return ZodPipeline.create(this, target);
      }
      readonly() {
        return ZodReadonly.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    };
    exports.ZodType = ZodType;
    exports.Schema = ZodType;
    exports.ZodSchema = ZodType;
    var cuidRegex = /^c[^\s-]{8,}$/i;
    var cuid2Regex = /^[0-9a-z]+$/;
    var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
    var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    var nanoidRegex = /^[a-z0-9_-]{21}$/i;
    var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
    var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
    var emojiRegex;
    var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
    var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
    var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
    var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
    var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
    var dateRegex = new RegExp(`^${dateRegexSource}$`);
    function timeRegexSource(args) {
      let secondsRegexSource = `[0-5]\\d`;
      if (args.precision) {
        secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
      } else if (args.precision == null) {
        secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
      }
      const secondsQuantifier = args.precision ? "+" : "?";
      return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
    }
    function timeRegex(args) {
      return new RegExp(`^${timeRegexSource(args)}$`);
    }
    function datetimeRegex(args) {
      let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
      const opts = [];
      opts.push(args.local ? `Z?` : `Z`);
      if (args.offset)
        opts.push(`([+-]\\d{2}:?\\d{2})`);
      regex = `${regex}(${opts.join("|")})`;
      return new RegExp(`^${regex}$`);
    }
    function isValidIP(ip, version) {
      if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
        return true;
      }
      if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
        return true;
      }
      return false;
    }
    function isValidJWT(jwt, alg) {
      if (!jwtRegex.test(jwt))
        return false;
      try {
        const [header] = jwt.split(".");
        if (!header)
          return false;
        const base642 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
        const decoded = JSON.parse(atob(base642));
        if (typeof decoded !== "object" || decoded === null)
          return false;
        if ("typ" in decoded && decoded?.typ !== "JWT")
          return false;
        if (!decoded.alg)
          return false;
        if (alg && decoded.alg !== alg)
          return false;
        return true;
      } catch {
        return false;
      }
    }
    function isValidCidr(ip, version) {
      if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
        return true;
      }
      if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
        return true;
      }
      return false;
    }
    var ZodString = class _ZodString extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.string) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx2, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.string,
            received: ctx2.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const status = new parseUtil_js_1.ParseStatus();
        let ctx = void 0;
        for (const check2 of this._def.checks) {
          if (check2.kind === "min") {
            if (input.data.length < check2.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_small,
                minimum: check2.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "max") {
            if (input.data.length > check2.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_big,
                maximum: check2.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "length") {
            const tooBig = input.data.length > check2.value;
            const tooSmall = input.data.length < check2.value;
            if (tooBig || tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              if (tooBig) {
                (0, parseUtil_js_1.addIssueToContext)(ctx, {
                  code: ZodError_js_1.ZodIssueCode.too_big,
                  maximum: check2.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check2.message
                });
              } else if (tooSmall) {
                (0, parseUtil_js_1.addIssueToContext)(ctx, {
                  code: ZodError_js_1.ZodIssueCode.too_small,
                  minimum: check2.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check2.message
                });
              }
              status.dirty();
            }
          } else if (check2.kind === "email") {
            if (!emailRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "email",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "emoji") {
            if (!emojiRegex) {
              emojiRegex = new RegExp(_emojiRegex, "u");
            }
            if (!emojiRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "emoji",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "uuid") {
            if (!uuidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "uuid",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "nanoid") {
            if (!nanoidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "nanoid",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "cuid") {
            if (!cuidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "cuid",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "cuid2") {
            if (!cuid2Regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "cuid2",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "ulid") {
            if (!ulidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "ulid",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "url") {
            try {
              new URL(input.data);
            } catch {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "url",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "regex") {
            check2.regex.lastIndex = 0;
            const testResult = check2.regex.test(input.data);
            if (!testResult) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "regex",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "trim") {
            input.data = input.data.trim();
          } else if (check2.kind === "includes") {
            if (!input.data.includes(check2.value, check2.position)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                validation: { includes: check2.value, position: check2.position },
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "toLowerCase") {
            input.data = input.data.toLowerCase();
          } else if (check2.kind === "toUpperCase") {
            input.data = input.data.toUpperCase();
          } else if (check2.kind === "startsWith") {
            if (!input.data.startsWith(check2.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                validation: { startsWith: check2.value },
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "endsWith") {
            if (!input.data.endsWith(check2.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                validation: { endsWith: check2.value },
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "datetime") {
            const regex = datetimeRegex(check2);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                validation: "datetime",
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "date") {
            const regex = dateRegex;
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                validation: "date",
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "time") {
            const regex = timeRegex(check2);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                validation: "time",
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "duration") {
            if (!durationRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "duration",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "ip") {
            if (!isValidIP(input.data, check2.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "ip",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "jwt") {
            if (!isValidJWT(input.data, check2.alg)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "jwt",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "cidr") {
            if (!isValidCidr(input.data, check2.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "cidr",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "base64") {
            if (!base64Regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "base64",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "base64url") {
            if (!base64urlRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "base64url",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check2.message
              });
              status.dirty();
            }
          } else {
            util_js_1.util.assertNever(check2);
          }
        }
        return { status: status.value, value: input.data };
      }
      _regex(regex, validation, message2) {
        return this.refinement((data) => regex.test(data), {
          validation,
          code: ZodError_js_1.ZodIssueCode.invalid_string,
          ...errorUtil_js_1.errorUtil.errToObj(message2)
        });
      }
      _addCheck(check2) {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, check2]
        });
      }
      email(message2) {
        return this._addCheck({ kind: "email", ...errorUtil_js_1.errorUtil.errToObj(message2) });
      }
      url(message2) {
        return this._addCheck({ kind: "url", ...errorUtil_js_1.errorUtil.errToObj(message2) });
      }
      emoji(message2) {
        return this._addCheck({ kind: "emoji", ...errorUtil_js_1.errorUtil.errToObj(message2) });
      }
      uuid(message2) {
        return this._addCheck({ kind: "uuid", ...errorUtil_js_1.errorUtil.errToObj(message2) });
      }
      nanoid(message2) {
        return this._addCheck({ kind: "nanoid", ...errorUtil_js_1.errorUtil.errToObj(message2) });
      }
      cuid(message2) {
        return this._addCheck({ kind: "cuid", ...errorUtil_js_1.errorUtil.errToObj(message2) });
      }
      cuid2(message2) {
        return this._addCheck({ kind: "cuid2", ...errorUtil_js_1.errorUtil.errToObj(message2) });
      }
      ulid(message2) {
        return this._addCheck({ kind: "ulid", ...errorUtil_js_1.errorUtil.errToObj(message2) });
      }
      base64(message2) {
        return this._addCheck({ kind: "base64", ...errorUtil_js_1.errorUtil.errToObj(message2) });
      }
      base64url(message2) {
        return this._addCheck({
          kind: "base64url",
          ...errorUtil_js_1.errorUtil.errToObj(message2)
        });
      }
      jwt(options) {
        return this._addCheck({ kind: "jwt", ...errorUtil_js_1.errorUtil.errToObj(options) });
      }
      ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil_js_1.errorUtil.errToObj(options) });
      }
      cidr(options) {
        return this._addCheck({ kind: "cidr", ...errorUtil_js_1.errorUtil.errToObj(options) });
      }
      datetime(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: false,
            local: false,
            message: options
          });
        }
        return this._addCheck({
          kind: "datetime",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          offset: options?.offset ?? false,
          local: options?.local ?? false,
          ...errorUtil_js_1.errorUtil.errToObj(options?.message)
        });
      }
      date(message2) {
        return this._addCheck({ kind: "date", message: message2 });
      }
      time(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "time",
            precision: null,
            message: options
          });
        }
        return this._addCheck({
          kind: "time",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          ...errorUtil_js_1.errorUtil.errToObj(options?.message)
        });
      }
      duration(message2) {
        return this._addCheck({ kind: "duration", ...errorUtil_js_1.errorUtil.errToObj(message2) });
      }
      regex(regex, message2) {
        return this._addCheck({
          kind: "regex",
          regex,
          ...errorUtil_js_1.errorUtil.errToObj(message2)
        });
      }
      includes(value, options) {
        return this._addCheck({
          kind: "includes",
          value,
          position: options?.position,
          ...errorUtil_js_1.errorUtil.errToObj(options?.message)
        });
      }
      startsWith(value, message2) {
        return this._addCheck({
          kind: "startsWith",
          value,
          ...errorUtil_js_1.errorUtil.errToObj(message2)
        });
      }
      endsWith(value, message2) {
        return this._addCheck({
          kind: "endsWith",
          value,
          ...errorUtil_js_1.errorUtil.errToObj(message2)
        });
      }
      min(minLength, message2) {
        return this._addCheck({
          kind: "min",
          value: minLength,
          ...errorUtil_js_1.errorUtil.errToObj(message2)
        });
      }
      max(maxLength, message2) {
        return this._addCheck({
          kind: "max",
          value: maxLength,
          ...errorUtil_js_1.errorUtil.errToObj(message2)
        });
      }
      length(len, message2) {
        return this._addCheck({
          kind: "length",
          value: len,
          ...errorUtil_js_1.errorUtil.errToObj(message2)
        });
      }
      /**
       * Equivalent to `.min(1)`
       */
      nonempty(message2) {
        return this.min(1, errorUtil_js_1.errorUtil.errToObj(message2));
      }
      trim() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "trim" }]
        });
      }
      toLowerCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toLowerCase" }]
        });
      }
      toUpperCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toUpperCase" }]
        });
      }
      get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
      }
      get isDate() {
        return !!this._def.checks.find((ch) => ch.kind === "date");
      }
      get isTime() {
        return !!this._def.checks.find((ch) => ch.kind === "time");
      }
      get isDuration() {
        return !!this._def.checks.find((ch) => ch.kind === "duration");
      }
      get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
      }
      get isNANOID() {
        return !!this._def.checks.find((ch) => ch.kind === "nanoid");
      }
      get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
      }
      get isCIDR() {
        return !!this._def.checks.find((ch) => ch.kind === "cidr");
      }
      get isBase64() {
        return !!this._def.checks.find((ch) => ch.kind === "base64");
      }
      get isBase64url() {
        return !!this._def.checks.find((ch) => ch.kind === "base64url");
      }
      get minLength() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxLength() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
    };
    exports.ZodString = ZodString;
    ZodString.create = (params) => {
      return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
      });
    };
    function floatSafeRemainder(val, step) {
      const valDecCount = (val.toString().split(".")[1] || "").length;
      const stepDecCount = (step.toString().split(".")[1] || "").length;
      const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
      const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
      const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
      return valInt % stepInt / 10 ** decCount;
    }
    var ZodNumber = class _ZodNumber extends ZodType {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.number) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx2, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.number,
            received: ctx2.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        let ctx = void 0;
        const status = new parseUtil_js_1.ParseStatus();
        for (const check2 of this._def.checks) {
          if (check2.kind === "int") {
            if (!util_js_1.util.isInteger(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_type,
                expected: "integer",
                received: "float",
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "min") {
            const tooSmall = check2.inclusive ? input.data < check2.value : input.data <= check2.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_small,
                minimum: check2.value,
                type: "number",
                inclusive: check2.inclusive,
                exact: false,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "max") {
            const tooBig = check2.inclusive ? input.data > check2.value : input.data >= check2.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_big,
                maximum: check2.value,
                type: "number",
                inclusive: check2.inclusive,
                exact: false,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "multipleOf") {
            if (floatSafeRemainder(input.data, check2.value) !== 0) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.not_multiple_of,
                multipleOf: check2.value,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "finite") {
            if (!Number.isFinite(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.not_finite,
                message: check2.message
              });
              status.dirty();
            }
          } else {
            util_js_1.util.assertNever(check2);
          }
        }
        return { status: status.value, value: input.data };
      }
      gte(value, message2) {
        return this.setLimit("min", value, true, errorUtil_js_1.errorUtil.toString(message2));
      }
      gt(value, message2) {
        return this.setLimit("min", value, false, errorUtil_js_1.errorUtil.toString(message2));
      }
      lte(value, message2) {
        return this.setLimit("max", value, true, errorUtil_js_1.errorUtil.toString(message2));
      }
      lt(value, message2) {
        return this.setLimit("max", value, false, errorUtil_js_1.errorUtil.toString(message2));
      }
      setLimit(kind, value, inclusive, message2) {
        return new _ZodNumber({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil_js_1.errorUtil.toString(message2)
            }
          ]
        });
      }
      _addCheck(check2) {
        return new _ZodNumber({
          ...this._def,
          checks: [...this._def.checks, check2]
        });
      }
      int(message2) {
        return this._addCheck({
          kind: "int",
          message: errorUtil_js_1.errorUtil.toString(message2)
        });
      }
      positive(message2) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: false,
          message: errorUtil_js_1.errorUtil.toString(message2)
        });
      }
      negative(message2) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: false,
          message: errorUtil_js_1.errorUtil.toString(message2)
        });
      }
      nonpositive(message2) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: true,
          message: errorUtil_js_1.errorUtil.toString(message2)
        });
      }
      nonnegative(message2) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: true,
          message: errorUtil_js_1.errorUtil.toString(message2)
        });
      }
      multipleOf(value, message2) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil_js_1.errorUtil.toString(message2)
        });
      }
      finite(message2) {
        return this._addCheck({
          kind: "finite",
          message: errorUtil_js_1.errorUtil.toString(message2)
        });
      }
      safe(message2) {
        return this._addCheck({
          kind: "min",
          inclusive: true,
          value: Number.MIN_SAFE_INTEGER,
          message: errorUtil_js_1.errorUtil.toString(message2)
        })._addCheck({
          kind: "max",
          inclusive: true,
          value: Number.MAX_SAFE_INTEGER,
          message: errorUtil_js_1.errorUtil.toString(message2)
        });
      }
      get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
      get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util_js_1.util.isInteger(ch.value));
      }
      get isFinite() {
        let max = null;
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
            return true;
          } else if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          } else if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return Number.isFinite(min) && Number.isFinite(max);
      }
    };
    exports.ZodNumber = ZodNumber;
    ZodNumber.create = (params) => {
      return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
      });
    };
    var ZodBigInt = class _ZodBigInt extends ZodType {
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
      }
      _parse(input) {
        if (this._def.coerce) {
          try {
            input.data = BigInt(input.data);
          } catch {
            return this._getInvalidInput(input);
          }
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.bigint) {
          return this._getInvalidInput(input);
        }
        let ctx = void 0;
        const status = new parseUtil_js_1.ParseStatus();
        for (const check2 of this._def.checks) {
          if (check2.kind === "min") {
            const tooSmall = check2.inclusive ? input.data < check2.value : input.data <= check2.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_small,
                type: "bigint",
                minimum: check2.value,
                inclusive: check2.inclusive,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "max") {
            const tooBig = check2.inclusive ? input.data > check2.value : input.data >= check2.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_big,
                type: "bigint",
                maximum: check2.value,
                inclusive: check2.inclusive,
                message: check2.message
              });
              status.dirty();
            }
          } else if (check2.kind === "multipleOf") {
            if (input.data % check2.value !== BigInt(0)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.not_multiple_of,
                multipleOf: check2.value,
                message: check2.message
              });
              status.dirty();
            }
          } else {
            util_js_1.util.assertNever(check2);
          }
        }
        return { status: status.value, value: input.data };
      }
      _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        (0, parseUtil_js_1.addIssueToContext)(ctx, {
          code: ZodError_js_1.ZodIssueCode.invalid_type,
          expected: util_js_1.ZodParsedType.bigint,
          received: ctx.parsedType
        });
        return parseUtil_js_1.INVALID;
      }
      gte(value, message2) {
        return this.setLimit("min", value, true, errorUtil_js_1.errorUtil.toString(message2));
      }
      gt(value, message2) {
        return this.setLimit("min", value, false, errorUtil_js_1.errorUtil.toString(message2));
      }
      lte(value, message2) {
        return this.setLimit("max", value, true, errorUtil_js_1.errorUtil.toString(message2));
      }
      lt(value, message2) {
        return this.setLimit("max", value, false, errorUtil_js_1.errorUtil.toString(message2));
      }
      setLimit(kind, value, inclusive, message2) {
        return new _ZodBigInt({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil_js_1.errorUtil.toString(message2)
            }
          ]
        });
      }
      _addCheck(check2) {
        return new _ZodBigInt({
          ...this._def,
          checks: [...this._def.checks, check2]
        });
      }
      positive(message2) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil_js_1.errorUtil.toString(message2)
        });
      }
      negative(message2) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil_js_1.errorUtil.toString(message2)
        });
      }
      nonpositive(message2) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil_js_1.errorUtil.toString(message2)
        });
      }
      nonnegative(message2) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil_js_1.errorUtil.toString(message2)
        });
      }
      multipleOf(value, message2) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil_js_1.errorUtil.toString(message2)
        });
      }
      get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
    };
    exports.ZodBigInt = ZodBigInt;
    ZodBigInt.create = (params) => {
      return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
      });
    };
    var ZodBoolean = class extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.boolean) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.boolean,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodBoolean = ZodBoolean;
    ZodBoolean.create = (params) => {
      return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
      });
    };
    var ZodDate = class _ZodDate extends ZodType {
      _parse(input) {
        if (this._def.coerce) {
          input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.date) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx2, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.date,
            received: ctx2.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        if (Number.isNaN(input.data.getTime())) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx2, {
            code: ZodError_js_1.ZodIssueCode.invalid_date
          });
          return parseUtil_js_1.INVALID;
        }
        const status = new parseUtil_js_1.ParseStatus();
        let ctx = void 0;
        for (const check2 of this._def.checks) {
          if (check2.kind === "min") {
            if (input.data.getTime() < check2.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_small,
                message: check2.message,
                inclusive: true,
                exact: false,
                minimum: check2.value,
                type: "date"
              });
              status.dirty();
            }
          } else if (check2.kind === "max") {
            if (input.data.getTime() > check2.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_big,
                message: check2.message,
                inclusive: true,
                exact: false,
                maximum: check2.value,
                type: "date"
              });
              status.dirty();
            }
          } else {
            util_js_1.util.assertNever(check2);
          }
        }
        return {
          status: status.value,
          value: new Date(input.data.getTime())
        };
      }
      _addCheck(check2) {
        return new _ZodDate({
          ...this._def,
          checks: [...this._def.checks, check2]
        });
      }
      min(minDate, message2) {
        return this._addCheck({
          kind: "min",
          value: minDate.getTime(),
          message: errorUtil_js_1.errorUtil.toString(message2)
        });
      }
      max(maxDate, message2) {
        return this._addCheck({
          kind: "max",
          value: maxDate.getTime(),
          message: errorUtil_js_1.errorUtil.toString(message2)
        });
      }
      get minDate() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min != null ? new Date(min) : null;
      }
      get maxDate() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max != null ? new Date(max) : null;
      }
    };
    exports.ZodDate = ZodDate;
    ZodDate.create = (params) => {
      return new ZodDate({
        checks: [],
        coerce: params?.coerce || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params)
      });
    };
    var ZodSymbol = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.symbol) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.symbol,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodSymbol = ZodSymbol;
    ZodSymbol.create = (params) => {
      return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params)
      });
    };
    var ZodUndefined = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.undefined,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodUndefined = ZodUndefined;
    ZodUndefined.create = (params) => {
      return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params)
      });
    };
    var ZodNull = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.null) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.null,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodNull = ZodNull;
    ZodNull.create = (params) => {
      return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params)
      });
    };
    var ZodAny = class extends ZodType {
      constructor() {
        super(...arguments);
        this._any = true;
      }
      _parse(input) {
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodAny = ZodAny;
    ZodAny.create = (params) => {
      return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params)
      });
    };
    var ZodUnknown = class extends ZodType {
      constructor() {
        super(...arguments);
        this._unknown = true;
      }
      _parse(input) {
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodUnknown = ZodUnknown;
    ZodUnknown.create = (params) => {
      return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params)
      });
    };
    var ZodNever = class extends ZodType {
      _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        (0, parseUtil_js_1.addIssueToContext)(ctx, {
          code: ZodError_js_1.ZodIssueCode.invalid_type,
          expected: util_js_1.ZodParsedType.never,
          received: ctx.parsedType
        });
        return parseUtil_js_1.INVALID;
      }
    };
    exports.ZodNever = ZodNever;
    ZodNever.create = (params) => {
      return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params)
      });
    };
    var ZodVoid = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.void,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodVoid = ZodVoid;
    ZodVoid.create = (params) => {
      return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params)
      });
    };
    var ZodArray = class _ZodArray extends ZodType {
      _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== util_js_1.ZodParsedType.array) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.array,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        if (def.exactLength !== null) {
          const tooBig = ctx.data.length > def.exactLength.value;
          const tooSmall = ctx.data.length < def.exactLength.value;
          if (tooBig || tooSmall) {
            (0, parseUtil_js_1.addIssueToContext)(ctx, {
              code: tooBig ? ZodError_js_1.ZodIssueCode.too_big : ZodError_js_1.ZodIssueCode.too_small,
              minimum: tooSmall ? def.exactLength.value : void 0,
              maximum: tooBig ? def.exactLength.value : void 0,
              type: "array",
              inclusive: true,
              exact: true,
              message: def.exactLength.message
            });
            status.dirty();
          }
        }
        if (def.minLength !== null) {
          if (ctx.data.length < def.minLength.value) {
            (0, parseUtil_js_1.addIssueToContext)(ctx, {
              code: ZodError_js_1.ZodIssueCode.too_small,
              minimum: def.minLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.minLength.message
            });
            status.dirty();
          }
        }
        if (def.maxLength !== null) {
          if (ctx.data.length > def.maxLength.value) {
            (0, parseUtil_js_1.addIssueToContext)(ctx, {
              code: ZodError_js_1.ZodIssueCode.too_big,
              maximum: def.maxLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.maxLength.message
            });
            status.dirty();
          }
        }
        if (ctx.common.async) {
          return Promise.all([...ctx.data].map((item, i) => {
            return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
          })).then((result2) => {
            return parseUtil_js_1.ParseStatus.mergeArray(status, result2);
          });
        }
        const result = [...ctx.data].map((item, i) => {
          return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return parseUtil_js_1.ParseStatus.mergeArray(status, result);
      }
      get element() {
        return this._def.type;
      }
      min(minLength, message2) {
        return new _ZodArray({
          ...this._def,
          minLength: { value: minLength, message: errorUtil_js_1.errorUtil.toString(message2) }
        });
      }
      max(maxLength, message2) {
        return new _ZodArray({
          ...this._def,
          maxLength: { value: maxLength, message: errorUtil_js_1.errorUtil.toString(message2) }
        });
      }
      length(len, message2) {
        return new _ZodArray({
          ...this._def,
          exactLength: { value: len, message: errorUtil_js_1.errorUtil.toString(message2) }
        });
      }
      nonempty(message2) {
        return this.min(1, message2);
      }
    };
    exports.ZodArray = ZodArray;
    ZodArray.create = (schema, params) => {
      return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params)
      });
    };
    function deepPartialify(schema) {
      if (schema instanceof ZodObject) {
        const newShape = {};
        for (const key in schema.shape) {
          const fieldSchema = schema.shape[key];
          newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
          ...schema._def,
          shape: () => newShape
        });
      } else if (schema instanceof ZodArray) {
        return new ZodArray({
          ...schema._def,
          type: deepPartialify(schema.element)
        });
      } else if (schema instanceof ZodOptional) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
      } else if (schema instanceof ZodNullable) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
      } else if (schema instanceof ZodTuple) {
        return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
      } else {
        return schema;
      }
    }
    var ZodObject = class _ZodObject extends ZodType {
      constructor() {
        super(...arguments);
        this._cached = null;
        this.nonstrict = this.passthrough;
        this.augment = this.extend;
      }
      _getCached() {
        if (this._cached !== null)
          return this._cached;
        const shape = this._def.shape();
        const keys = util_js_1.util.objectKeys(shape);
        this._cached = { shape, keys };
        return this._cached;
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.object) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx2, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.object,
            received: ctx2.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
          for (const key in ctx.data) {
            if (!shapeKeys.includes(key)) {
              extraKeys.push(key);
            }
          }
        }
        const pairs = [];
        for (const key of shapeKeys) {
          const keyValidator = shape[key];
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (this._def.catchall instanceof ZodNever) {
          const unknownKeys = this._def.unknownKeys;
          if (unknownKeys === "passthrough") {
            for (const key of extraKeys) {
              pairs.push({
                key: { status: "valid", value: key },
                value: { status: "valid", value: ctx.data[key] }
              });
            }
          } else if (unknownKeys === "strict") {
            if (extraKeys.length > 0) {
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.unrecognized_keys,
                keys: extraKeys
              });
              status.dirty();
            }
          } else if (unknownKeys === "strip") {
          } else {
            throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
          }
        } else {
          const catchall = this._def.catchall;
          for (const key of extraKeys) {
            const value = ctx.data[key];
            pairs.push({
              key: { status: "valid", value: key },
              value: catchall._parse(
                new ParseInputLazyPath(ctx, value, ctx.path, key)
                //, ctx.child(key), value, getParsedType(value)
              ),
              alwaysSet: key in ctx.data
            });
          }
        }
        if (ctx.common.async) {
          return Promise.resolve().then(async () => {
            const syncPairs = [];
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              syncPairs.push({
                key,
                value,
                alwaysSet: pair.alwaysSet
              });
            }
            return syncPairs;
          }).then((syncPairs) => {
            return parseUtil_js_1.ParseStatus.mergeObjectSync(status, syncPairs);
          });
        } else {
          return parseUtil_js_1.ParseStatus.mergeObjectSync(status, pairs);
        }
      }
      get shape() {
        return this._def.shape();
      }
      strict(message2) {
        errorUtil_js_1.errorUtil.errToObj;
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strict",
          ...message2 !== void 0 ? {
            errorMap: (issue, ctx) => {
              const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
              if (issue.code === "unrecognized_keys")
                return {
                  message: errorUtil_js_1.errorUtil.errToObj(message2).message ?? defaultError
                };
              return {
                message: defaultError
              };
            }
          } : {}
        });
      }
      strip() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strip"
        });
      }
      passthrough() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "passthrough"
        });
      }
      // const AugmentFactory =
      //   <Def extends ZodObjectDef>(def: Def) =>
      //   <Augmentation extends ZodRawShape>(
      //     augmentation: Augmentation
      //   ): ZodObject<
      //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
      //     Def["unknownKeys"],
      //     Def["catchall"]
      //   > => {
      //     return new ZodObject({
      //       ...def,
      //       shape: () => ({
      //         ...def.shape(),
      //         ...augmentation,
      //       }),
      //     }) as any;
      //   };
      extend(augmentation) {
        return new _ZodObject({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...augmentation
          })
        });
      }
      /**
       * Prior to zod@1.0.12 there was a bug in the
       * inferred type of merged objects. Please
       * upgrade if you are experiencing issues.
       */
      merge(merging) {
        const merged = new _ZodObject({
          unknownKeys: merging._def.unknownKeys,
          catchall: merging._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...merging._def.shape()
          }),
          typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
      }
      // merge<
      //   Incoming extends AnyZodObject,
      //   Augmentation extends Incoming["shape"],
      //   NewOutput extends {
      //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
      //       ? Augmentation[k]["_output"]
      //       : k extends keyof Output
      //       ? Output[k]
      //       : never;
      //   },
      //   NewInput extends {
      //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
      //       ? Augmentation[k]["_input"]
      //       : k extends keyof Input
      //       ? Input[k]
      //       : never;
      //   }
      // >(
      //   merging: Incoming
      // ): ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"],
      //   NewOutput,
      //   NewInput
      // > {
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      setKey(key, schema) {
        return this.augment({ [key]: schema });
      }
      // merge<Incoming extends AnyZodObject>(
      //   merging: Incoming
      // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
      // ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"]
      // > {
      //   // const mergedShape = objectUtil.mergeShapes(
      //   //   this._def.shape(),
      //   //   merging._def.shape()
      //   // );
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      catchall(index) {
        return new _ZodObject({
          ...this._def,
          catchall: index
        });
      }
      pick(mask) {
        const shape = {};
        for (const key of util_js_1.util.objectKeys(mask)) {
          if (mask[key] && this.shape[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      omit(mask) {
        const shape = {};
        for (const key of util_js_1.util.objectKeys(this.shape)) {
          if (!mask[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => shape
        });
      }
      /**
       * @deprecated
       */
      deepPartial() {
        return deepPartialify(this);
      }
      partial(mask) {
        const newShape = {};
        for (const key of util_js_1.util.objectKeys(this.shape)) {
          const fieldSchema = this.shape[key];
          if (mask && !mask[key]) {
            newShape[key] = fieldSchema;
          } else {
            newShape[key] = fieldSchema.optional();
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      required(mask) {
        const newShape = {};
        for (const key of util_js_1.util.objectKeys(this.shape)) {
          if (mask && !mask[key]) {
            newShape[key] = this.shape[key];
          } else {
            const fieldSchema = this.shape[key];
            let newField = fieldSchema;
            while (newField instanceof ZodOptional) {
              newField = newField._def.innerType;
            }
            newShape[key] = newField;
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: () => newShape
        });
      }
      keyof() {
        return createZodEnum(util_js_1.util.objectKeys(this.shape));
      }
    };
    exports.ZodObject = ZodObject;
    ZodObject.create = (shape, params) => {
      return new ZodObject({
        shape: () => shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodObject.strictCreate = (shape, params) => {
      return new ZodObject({
        shape: () => shape,
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodObject.lazycreate = (shape, params) => {
      return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    var ZodUnion = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
          for (const result of results) {
            if (result.result.status === "valid") {
              return result.result;
            }
          }
          for (const result of results) {
            if (result.result.status === "dirty") {
              ctx.common.issues.push(...result.ctx.common.issues);
              return result.result;
            }
          }
          const unionErrors = results.map((result) => new ZodError_js_1.ZodError(result.ctx.common.issues));
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_union,
            unionErrors
          });
          return parseUtil_js_1.INVALID;
        }
        if (ctx.common.async) {
          return Promise.all(options.map(async (option) => {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            return {
              result: await option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: childCtx
              }),
              ctx: childCtx
            };
          })).then(handleResults);
        } else {
          let dirty = void 0;
          const issues = [];
          for (const option of options) {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            const result = option._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            });
            if (result.status === "valid") {
              return result;
            } else if (result.status === "dirty" && !dirty) {
              dirty = { result, ctx: childCtx };
            }
            if (childCtx.common.issues.length) {
              issues.push(childCtx.common.issues);
            }
          }
          if (dirty) {
            ctx.common.issues.push(...dirty.ctx.common.issues);
            return dirty.result;
          }
          const unionErrors = issues.map((issues2) => new ZodError_js_1.ZodError(issues2));
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_union,
            unionErrors
          });
          return parseUtil_js_1.INVALID;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    exports.ZodUnion = ZodUnion;
    ZodUnion.create = (types2, params) => {
      return new ZodUnion({
        options: types2,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params)
      });
    };
    var getDiscriminator = (type) => {
      if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
      } else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
      } else if (type instanceof ZodLiteral) {
        return [type.value];
      } else if (type instanceof ZodEnum) {
        return type.options;
      } else if (type instanceof ZodNativeEnum) {
        return util_js_1.util.objectValues(type.enum);
      } else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
      } else if (type instanceof ZodUndefined) {
        return [void 0];
      } else if (type instanceof ZodNull) {
        return [null];
      } else if (type instanceof ZodOptional) {
        return [void 0, ...getDiscriminator(type.unwrap())];
      } else if (type instanceof ZodNullable) {
        return [null, ...getDiscriminator(type.unwrap())];
      } else if (type instanceof ZodBranded) {
        return getDiscriminator(type.unwrap());
      } else if (type instanceof ZodReadonly) {
        return getDiscriminator(type.unwrap());
      } else if (type instanceof ZodCatch) {
        return getDiscriminator(type._def.innerType);
      } else {
        return [];
      }
    };
    var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.object) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.object,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [discriminator]
          });
          return parseUtil_js_1.INVALID;
        }
        if (ctx.common.async) {
          return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        } else {
          return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        }
      }
      get discriminator() {
        return this._def.discriminator;
      }
      get options() {
        return this._def.options;
      }
      get optionsMap() {
        return this._def.optionsMap;
      }
      /**
       * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
       * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
       * have a different value for each object in the union.
       * @param discriminator the name of the discriminator property
       * @param types an array of object schemas
       * @param params
       */
      static create(discriminator, options, params) {
        const optionsMap = /* @__PURE__ */ new Map();
        for (const type of options) {
          const discriminatorValues = getDiscriminator(type.shape[discriminator]);
          if (!discriminatorValues.length) {
            throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
          }
          for (const value of discriminatorValues) {
            if (optionsMap.has(value)) {
              throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
            }
            optionsMap.set(value, type);
          }
        }
        return new _ZodDiscriminatedUnion({
          typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
          discriminator,
          options,
          optionsMap,
          ...processCreateParams(params)
        });
      }
    };
    exports.ZodDiscriminatedUnion = ZodDiscriminatedUnion;
    function mergeValues(a, b) {
      const aType = (0, util_js_1.getParsedType)(a);
      const bType = (0, util_js_1.getParsedType)(b);
      if (a === b) {
        return { valid: true, data: a };
      } else if (aType === util_js_1.ZodParsedType.object && bType === util_js_1.ZodParsedType.object) {
        const bKeys = util_js_1.util.objectKeys(b);
        const sharedKeys = util_js_1.util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        for (const key of sharedKeys) {
          const sharedValue = mergeValues(a[key], b[key]);
          if (!sharedValue.valid) {
            return { valid: false };
          }
          newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
      } else if (aType === util_js_1.ZodParsedType.array && bType === util_js_1.ZodParsedType.array) {
        if (a.length !== b.length) {
          return { valid: false };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
          const itemA = a[index];
          const itemB = b[index];
          const sharedValue = mergeValues(itemA, itemB);
          if (!sharedValue.valid) {
            return { valid: false };
          }
          newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
      } else if (aType === util_js_1.ZodParsedType.date && bType === util_js_1.ZodParsedType.date && +a === +b) {
        return { valid: true, data: a };
      } else {
        return { valid: false };
      }
    }
    var ZodIntersection = class extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = (parsedLeft, parsedRight) => {
          if ((0, parseUtil_js_1.isAborted)(parsedLeft) || (0, parseUtil_js_1.isAborted)(parsedRight)) {
            return parseUtil_js_1.INVALID;
          }
          const merged = mergeValues(parsedLeft.value, parsedRight.value);
          if (!merged.valid) {
            (0, parseUtil_js_1.addIssueToContext)(ctx, {
              code: ZodError_js_1.ZodIssueCode.invalid_intersection_types
            });
            return parseUtil_js_1.INVALID;
          }
          if ((0, parseUtil_js_1.isDirty)(parsedLeft) || (0, parseUtil_js_1.isDirty)(parsedRight)) {
            status.dirty();
          }
          return { status: status.value, value: merged.data };
        };
        if (ctx.common.async) {
          return Promise.all([
            this._def.left._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }),
            this._def.right._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            })
          ]).then(([left, right]) => handleParsed(left, right));
        } else {
          return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }));
        }
      }
    };
    exports.ZodIntersection = ZodIntersection;
    ZodIntersection.create = (left, right, params) => {
      return new ZodIntersection({
        left,
        right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params)
      });
    };
    var ZodTuple = class _ZodTuple extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.array) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.array,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.too_small,
            minimum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          return parseUtil_js_1.INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.too_big,
            maximum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          status.dirty();
        }
        const items = [...ctx.data].map((item, itemIndex) => {
          const schema = this._def.items[itemIndex] || this._def.rest;
          if (!schema)
            return null;
          return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter((x) => !!x);
        if (ctx.common.async) {
          return Promise.all(items).then((results) => {
            return parseUtil_js_1.ParseStatus.mergeArray(status, results);
          });
        } else {
          return parseUtil_js_1.ParseStatus.mergeArray(status, items);
        }
      }
      get items() {
        return this._def.items;
      }
      rest(rest) {
        return new _ZodTuple({
          ...this._def,
          rest
        });
      }
    };
    exports.ZodTuple = ZodTuple;
    ZodTuple.create = (schemas, params) => {
      if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      }
      return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params)
      });
    };
    var ZodRecord = class _ZodRecord extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.object) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.object,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
          pairs.push({
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
            value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (ctx.common.async) {
          return parseUtil_js_1.ParseStatus.mergeObjectAsync(status, pairs);
        } else {
          return parseUtil_js_1.ParseStatus.mergeObjectSync(status, pairs);
        }
      }
      get element() {
        return this._def.valueType;
      }
      static create(first, second, third) {
        if (second instanceof ZodType) {
          return new _ZodRecord({
            keyType: first,
            valueType: second,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(third)
          });
        }
        return new _ZodRecord({
          keyType: ZodString.create(),
          valueType: first,
          typeName: ZodFirstPartyTypeKind.ZodRecord,
          ...processCreateParams(second)
        });
      }
    };
    exports.ZodRecord = ZodRecord;
    var ZodMap = class extends ZodType {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.map) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.map,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
          return {
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
            value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
          };
        });
        if (ctx.common.async) {
          const finalMap = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              if (key.status === "aborted" || value.status === "aborted") {
                return parseUtil_js_1.INVALID;
              }
              if (key.status === "dirty" || value.status === "dirty") {
                status.dirty();
              }
              finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
          });
        } else {
          const finalMap = /* @__PURE__ */ new Map();
          for (const pair of pairs) {
            const key = pair.key;
            const value = pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return parseUtil_js_1.INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        }
      }
    };
    exports.ZodMap = ZodMap;
    ZodMap.create = (keyType, valueType, params) => {
      return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params)
      });
    };
    var ZodSet = class _ZodSet extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.set) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.set,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
          if (ctx.data.size < def.minSize.value) {
            (0, parseUtil_js_1.addIssueToContext)(ctx, {
              code: ZodError_js_1.ZodIssueCode.too_small,
              minimum: def.minSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.minSize.message
            });
            status.dirty();
          }
        }
        if (def.maxSize !== null) {
          if (ctx.data.size > def.maxSize.value) {
            (0, parseUtil_js_1.addIssueToContext)(ctx, {
              code: ZodError_js_1.ZodIssueCode.too_big,
              maximum: def.maxSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.maxSize.message
            });
            status.dirty();
          }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements2) {
          const parsedSet = /* @__PURE__ */ new Set();
          for (const element of elements2) {
            if (element.status === "aborted")
              return parseUtil_js_1.INVALID;
            if (element.status === "dirty")
              status.dirty();
            parsedSet.add(element.value);
          }
          return { status: status.value, value: parsedSet };
        }
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
          return Promise.all(elements).then((elements2) => finalizeSet(elements2));
        } else {
          return finalizeSet(elements);
        }
      }
      min(minSize, message2) {
        return new _ZodSet({
          ...this._def,
          minSize: { value: minSize, message: errorUtil_js_1.errorUtil.toString(message2) }
        });
      }
      max(maxSize, message2) {
        return new _ZodSet({
          ...this._def,
          maxSize: { value: maxSize, message: errorUtil_js_1.errorUtil.toString(message2) }
        });
      }
      size(size, message2) {
        return this.min(size, message2).max(size, message2);
      }
      nonempty(message2) {
        return this.min(1, message2);
      }
    };
    exports.ZodSet = ZodSet;
    ZodSet.create = (valueType, params) => {
      return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params)
      });
    };
    var ZodFunction = class _ZodFunction extends ZodType {
      constructor() {
        super(...arguments);
        this.validate = this.implement;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.function) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.function,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        function makeArgsIssue(args, error) {
          return (0, parseUtil_js_1.makeIssue)({
            data: args,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, (0, errors_js_1.getErrorMap)(), errors_js_1.defaultErrorMap].filter((x) => !!x),
            issueData: {
              code: ZodError_js_1.ZodIssueCode.invalid_arguments,
              argumentsError: error
            }
          });
        }
        function makeReturnsIssue(returns, error) {
          return (0, parseUtil_js_1.makeIssue)({
            data: returns,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, (0, errors_js_1.getErrorMap)(), errors_js_1.defaultErrorMap].filter((x) => !!x),
            issueData: {
              code: ZodError_js_1.ZodIssueCode.invalid_return_type,
              returnTypeError: error
            }
          });
        }
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
          const me = this;
          return (0, parseUtil_js_1.OK)(async function(...args) {
            const error = new ZodError_js_1.ZodError([]);
            const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
              error.addIssue(makeArgsIssue(args, e));
              throw error;
            });
            const result = await Reflect.apply(fn, this, parsedArgs);
            const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
              error.addIssue(makeReturnsIssue(result, e));
              throw error;
            });
            return parsedReturns;
          });
        } else {
          const me = this;
          return (0, parseUtil_js_1.OK)(function(...args) {
            const parsedArgs = me._def.args.safeParse(args, params);
            if (!parsedArgs.success) {
              throw new ZodError_js_1.ZodError([makeArgsIssue(args, parsedArgs.error)]);
            }
            const result = Reflect.apply(fn, this, parsedArgs.data);
            const parsedReturns = me._def.returns.safeParse(result, params);
            if (!parsedReturns.success) {
              throw new ZodError_js_1.ZodError([makeReturnsIssue(result, parsedReturns.error)]);
            }
            return parsedReturns.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...items) {
        return new _ZodFunction({
          ...this._def,
          args: ZodTuple.create(items).rest(ZodUnknown.create())
        });
      }
      returns(returnType) {
        return new _ZodFunction({
          ...this._def,
          returns: returnType
        });
      }
      implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      static create(args, returns, params) {
        return new _ZodFunction({
          args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
          returns: returns || ZodUnknown.create(),
          typeName: ZodFirstPartyTypeKind.ZodFunction,
          ...processCreateParams(params)
        });
      }
    };
    exports.ZodFunction = ZodFunction;
    var ZodLazy = class extends ZodType {
      get schema() {
        return this._def.getter();
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
      }
    };
    exports.ZodLazy = ZodLazy;
    ZodLazy.create = (getter, params) => {
      return new ZodLazy({
        getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params)
      });
    };
    var ZodLiteral = class extends ZodType {
      _parse(input) {
        if (input.data !== this._def.value) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            received: ctx.data,
            code: ZodError_js_1.ZodIssueCode.invalid_literal,
            expected: this._def.value
          });
          return parseUtil_js_1.INVALID;
        }
        return { status: "valid", value: input.data };
      }
      get value() {
        return this._def.value;
      }
    };
    exports.ZodLiteral = ZodLiteral;
    ZodLiteral.create = (value, params) => {
      return new ZodLiteral({
        value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params)
      });
    };
    function createZodEnum(values, params) {
      return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params)
      });
    }
    var ZodEnum = class _ZodEnum extends ZodType {
      _parse(input) {
        if (typeof input.data !== "string") {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            expected: util_js_1.util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodError_js_1.ZodIssueCode.invalid_type
          });
          return parseUtil_js_1.INVALID;
        }
        if (!this._cache) {
          this._cache = new Set(this._def.values);
        }
        if (!this._cache.has(input.data)) {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            received: ctx.data,
            code: ZodError_js_1.ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      extract(values, newDef = this._def) {
        return _ZodEnum.create(values, {
          ...this._def,
          ...newDef
        });
      }
      exclude(values, newDef = this._def) {
        return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
          ...this._def,
          ...newDef
        });
      }
    };
    exports.ZodEnum = ZodEnum;
    ZodEnum.create = createZodEnum;
    var ZodNativeEnum = class extends ZodType {
      _parse(input) {
        const nativeEnumValues = util_js_1.util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.string && ctx.parsedType !== util_js_1.ZodParsedType.number) {
          const expectedValues = util_js_1.util.objectValues(nativeEnumValues);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            expected: util_js_1.util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodError_js_1.ZodIssueCode.invalid_type
          });
          return parseUtil_js_1.INVALID;
        }
        if (!this._cache) {
          this._cache = new Set(util_js_1.util.getValidEnumValues(this._def.values));
        }
        if (!this._cache.has(input.data)) {
          const expectedValues = util_js_1.util.objectValues(nativeEnumValues);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            received: ctx.data,
            code: ZodError_js_1.ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    exports.ZodNativeEnum = ZodNativeEnum;
    ZodNativeEnum.create = (values, params) => {
      return new ZodNativeEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params)
      });
    };
    var ZodPromise = class extends ZodType {
      unwrap() {
        return this._def.type;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.promise && ctx.common.async === false) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.promise,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const promisified = ctx.parsedType === util_js_1.ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
        return (0, parseUtil_js_1.OK)(promisified.then((data) => {
          return this._def.type.parseAsync(data, {
            path: ctx.path,
            errorMap: ctx.common.contextualErrorMap
          });
        }));
      }
    };
    exports.ZodPromise = ZodPromise;
    ZodPromise.create = (schema, params) => {
      return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params)
      });
    };
    var ZodEffects = class extends ZodType {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
          addIssue: (arg) => {
            (0, parseUtil_js_1.addIssueToContext)(ctx, arg);
            if (arg.fatal) {
              status.abort();
            } else {
              status.dirty();
            }
          },
          get path() {
            return ctx.path;
          }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
          const processed = effect.transform(ctx.data, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(processed).then(async (processed2) => {
              if (status.value === "aborted")
                return parseUtil_js_1.INVALID;
              const result = await this._def.schema._parseAsync({
                data: processed2,
                path: ctx.path,
                parent: ctx
              });
              if (result.status === "aborted")
                return parseUtil_js_1.INVALID;
              if (result.status === "dirty")
                return (0, parseUtil_js_1.DIRTY)(result.value);
              if (status.value === "dirty")
                return (0, parseUtil_js_1.DIRTY)(result.value);
              return result;
            });
          } else {
            if (status.value === "aborted")
              return parseUtil_js_1.INVALID;
            const result = this._def.schema._parseSync({
              data: processed,
              path: ctx.path,
              parent: ctx
            });
            if (result.status === "aborted")
              return parseUtil_js_1.INVALID;
            if (result.status === "dirty")
              return (0, parseUtil_js_1.DIRTY)(result.value);
            if (status.value === "dirty")
              return (0, parseUtil_js_1.DIRTY)(result.value);
            return result;
          }
        }
        if (effect.type === "refinement") {
          const executeRefinement = (acc) => {
            const result = effect.refinement(acc, checkCtx);
            if (ctx.common.async) {
              return Promise.resolve(result);
            }
            if (result instanceof Promise) {
              throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            }
            return acc;
          };
          if (ctx.common.async === false) {
            const inner = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inner.status === "aborted")
              return parseUtil_js_1.INVALID;
            if (inner.status === "dirty")
              status.dirty();
            executeRefinement(inner.value);
            return { status: status.value, value: inner.value };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
              if (inner.status === "aborted")
                return parseUtil_js_1.INVALID;
              if (inner.status === "dirty")
                status.dirty();
              return executeRefinement(inner.value).then(() => {
                return { status: status.value, value: inner.value };
              });
            });
          }
        }
        if (effect.type === "transform") {
          if (ctx.common.async === false) {
            const base = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (!(0, parseUtil_js_1.isValid)(base))
              return parseUtil_js_1.INVALID;
            const result = effect.transform(base.value, checkCtx);
            if (result instanceof Promise) {
              throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
            }
            return { status: status.value, value: result };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
              if (!(0, parseUtil_js_1.isValid)(base))
                return parseUtil_js_1.INVALID;
              return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
                status: status.value,
                value: result
              }));
            });
          }
        }
        util_js_1.util.assertNever(effect);
      }
    };
    exports.ZodEffects = ZodEffects;
    exports.ZodTransformer = ZodEffects;
    ZodEffects.create = (schema, effect, params) => {
      return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params)
      });
    };
    ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
      return new ZodEffects({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params)
      });
    };
    var ZodOptional = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === util_js_1.ZodParsedType.undefined) {
          return (0, parseUtil_js_1.OK)(void 0);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    exports.ZodOptional = ZodOptional;
    ZodOptional.create = (type, params) => {
      return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params)
      });
    };
    var ZodNullable = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === util_js_1.ZodParsedType.null) {
          return (0, parseUtil_js_1.OK)(null);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    exports.ZodNullable = ZodNullable;
    ZodNullable.create = (type, params) => {
      return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params)
      });
    };
    var ZodDefault = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === util_js_1.ZodParsedType.undefined) {
          data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    exports.ZodDefault = ZodDefault;
    ZodDefault.create = (type, params) => {
      return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : () => params.default,
        ...processCreateParams(params)
      });
    };
    var ZodCatch = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const newCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          }
        };
        const result = this._def.innerType._parse({
          data: newCtx.data,
          path: newCtx.path,
          parent: {
            ...newCtx
          }
        });
        if ((0, parseUtil_js_1.isAsync)(result)) {
          return result.then((result2) => {
            return {
              status: "valid",
              value: result2.status === "valid" ? result2.value : this._def.catchValue({
                get error() {
                  return new ZodError_js_1.ZodError(newCtx.common.issues);
                },
                input: newCtx.data
              })
            };
          });
        } else {
          return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.catchValue({
              get error() {
                return new ZodError_js_1.ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        }
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    exports.ZodCatch = ZodCatch;
    ZodCatch.create = (type, params) => {
      return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams(params)
      });
    };
    var ZodNaN = class extends ZodType {
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.nan) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.nan,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        return { status: "valid", value: input.data };
      }
    };
    exports.ZodNaN = ZodNaN;
    ZodNaN.create = (params) => {
      return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params)
      });
    };
    exports.BRAND = Symbol("zod_brand");
    var ZodBranded = class extends ZodType {
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      unwrap() {
        return this._def.type;
      }
    };
    exports.ZodBranded = ZodBranded;
    var ZodPipeline = class _ZodPipeline extends ZodType {
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
          const handleAsync = async () => {
            const inResult = await this._def.in._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inResult.status === "aborted")
              return parseUtil_js_1.INVALID;
            if (inResult.status === "dirty") {
              status.dirty();
              return (0, parseUtil_js_1.DIRTY)(inResult.value);
            } else {
              return this._def.out._parseAsync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
              });
            }
          };
          return handleAsync();
        } else {
          const inResult = this._def.in._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return parseUtil_js_1.INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return {
              status: "dirty",
              value: inResult.value
            };
          } else {
            return this._def.out._parseSync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        }
      }
      static create(a, b) {
        return new _ZodPipeline({
          in: a,
          out: b,
          typeName: ZodFirstPartyTypeKind.ZodPipeline
        });
      }
    };
    exports.ZodPipeline = ZodPipeline;
    var ZodReadonly = class extends ZodType {
      _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = (data) => {
          if ((0, parseUtil_js_1.isValid)(data)) {
            data.value = Object.freeze(data.value);
          }
          return data;
        };
        return (0, parseUtil_js_1.isAsync)(result) ? result.then((data) => freeze(data)) : freeze(result);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    exports.ZodReadonly = ZodReadonly;
    ZodReadonly.create = (type, params) => {
      return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params)
      });
    };
    function cleanParams(params, data) {
      const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
      const p2 = typeof p === "string" ? { message: p } : p;
      return p2;
    }
    function custom(check2, _params = {}, fatal) {
      if (check2)
        return ZodAny.create().superRefine((data, ctx) => {
          const r = check2(data);
          if (r instanceof Promise) {
            return r.then((r2) => {
              if (!r2) {
                const params = cleanParams(_params, data);
                const _fatal = params.fatal ?? fatal ?? true;
                ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
              }
            });
          }
          if (!r) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
          return;
        });
      return ZodAny.create();
    }
    exports.late = {
      object: ZodObject.lazycreate
    };
    var ZodFirstPartyTypeKind;
    (function(ZodFirstPartyTypeKind2) {
      ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
      ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
      ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
      ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
      ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
      ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
      ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
      ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
      ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
      ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
      ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
      ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
      ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
      ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
      ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
      ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
      ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
      ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
      ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
      ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
      ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
      ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
      ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
      ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
      ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
      ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
      ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
      ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
      ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
      ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
      ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
      ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
      ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
      ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
      ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
      ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
    })(ZodFirstPartyTypeKind || (exports.ZodFirstPartyTypeKind = ZodFirstPartyTypeKind = {}));
    var instanceOfType = (cls, params = {
      message: `Input not instance of ${cls.name}`
    }) => custom((data) => data instanceof cls, params);
    exports.instanceof = instanceOfType;
    var stringType = ZodString.create;
    exports.string = stringType;
    var numberType = ZodNumber.create;
    exports.number = numberType;
    var nanType = ZodNaN.create;
    exports.nan = nanType;
    var bigIntType = ZodBigInt.create;
    exports.bigint = bigIntType;
    var booleanType = ZodBoolean.create;
    exports.boolean = booleanType;
    var dateType = ZodDate.create;
    exports.date = dateType;
    var symbolType = ZodSymbol.create;
    exports.symbol = symbolType;
    var undefinedType = ZodUndefined.create;
    exports.undefined = undefinedType;
    var nullType = ZodNull.create;
    exports.null = nullType;
    var anyType = ZodAny.create;
    exports.any = anyType;
    var unknownType = ZodUnknown.create;
    exports.unknown = unknownType;
    var neverType = ZodNever.create;
    exports.never = neverType;
    var voidType = ZodVoid.create;
    exports.void = voidType;
    var arrayType = ZodArray.create;
    exports.array = arrayType;
    var objectType = ZodObject.create;
    exports.object = objectType;
    var strictObjectType = ZodObject.strictCreate;
    exports.strictObject = strictObjectType;
    var unionType = ZodUnion.create;
    exports.union = unionType;
    var discriminatedUnionType = ZodDiscriminatedUnion.create;
    exports.discriminatedUnion = discriminatedUnionType;
    var intersectionType = ZodIntersection.create;
    exports.intersection = intersectionType;
    var tupleType = ZodTuple.create;
    exports.tuple = tupleType;
    var recordType = ZodRecord.create;
    exports.record = recordType;
    var mapType = ZodMap.create;
    exports.map = mapType;
    var setType = ZodSet.create;
    exports.set = setType;
    var functionType = ZodFunction.create;
    exports.function = functionType;
    var lazyType = ZodLazy.create;
    exports.lazy = lazyType;
    var literalType = ZodLiteral.create;
    exports.literal = literalType;
    var enumType = ZodEnum.create;
    exports.enum = enumType;
    var nativeEnumType = ZodNativeEnum.create;
    exports.nativeEnum = nativeEnumType;
    var promiseType = ZodPromise.create;
    exports.promise = promiseType;
    var effectsType = ZodEffects.create;
    exports.effect = effectsType;
    exports.transformer = effectsType;
    var optionalType = ZodOptional.create;
    exports.optional = optionalType;
    var nullableType = ZodNullable.create;
    exports.nullable = nullableType;
    var preprocessType = ZodEffects.createWithPreprocess;
    exports.preprocess = preprocessType;
    var pipelineType = ZodPipeline.create;
    exports.pipeline = pipelineType;
    var ostring = () => stringType().optional();
    exports.ostring = ostring;
    var onumber = () => numberType().optional();
    exports.onumber = onumber;
    var oboolean = () => booleanType().optional();
    exports.oboolean = oboolean;
    exports.coerce = {
      string: ((arg) => ZodString.create({ ...arg, coerce: true })),
      number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
      boolean: ((arg) => ZodBoolean.create({
        ...arg,
        coerce: true
      })),
      bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
      date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
    };
    exports.NEVER = parseUtil_js_1.INVALID;
  }
});

// node_modules/zod/v3/external.cjs
var require_external = __commonJS({
  "node_modules/zod/v3/external.cjs"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_errors(), exports);
    __exportStar(require_parseUtil(), exports);
    __exportStar(require_typeAliases(), exports);
    __exportStar(require_util(), exports);
    __exportStar(require_types(), exports);
    __exportStar(require_ZodError(), exports);
  }
});

// node_modules/zod/index.cjs
var require_zod = __commonJS({
  "node_modules/zod/index.cjs"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = void 0;
    var z = __importStar(require_external());
    exports.z = z;
    __exportStar(require_external(), exports);
    exports.default = z;
  }
});

// node_modules/@atproto/jwk/dist/errors.js
var require_errors2 = __commonJS({
  "node_modules/@atproto/jwk/dist/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JwtVerifyError = exports.JwtCreateError = exports.JwkError = exports.ERR_JWT_VERIFY = exports.ERR_JWT_CREATE = exports.ERR_JWT_INVALID = exports.ERR_JWK_NOT_FOUND = exports.ERR_JWK_INVALID = exports.ERR_JWKS_NO_MATCHING_KEY = void 0;
    exports.ERR_JWKS_NO_MATCHING_KEY = "ERR_JWKS_NO_MATCHING_KEY";
    exports.ERR_JWK_INVALID = "ERR_JWK_INVALID";
    exports.ERR_JWK_NOT_FOUND = "ERR_JWK_NOT_FOUND";
    exports.ERR_JWT_INVALID = "ERR_JWT_INVALID";
    exports.ERR_JWT_CREATE = "ERR_JWT_CREATE";
    exports.ERR_JWT_VERIFY = "ERR_JWT_VERIFY";
    var JwkError = class extends TypeError {
      constructor(message2 = "JWK error", code = exports.ERR_JWK_INVALID, options) {
        super(message2, options);
        Object.defineProperty(this, "code", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: code
        });
      }
    };
    exports.JwkError = JwkError;
    var JwtCreateError = class _JwtCreateError extends Error {
      constructor(message2 = "Unable to create JWT", code = exports.ERR_JWT_CREATE, options) {
        super(message2, options);
        Object.defineProperty(this, "code", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: code
        });
      }
      static from(cause, code, message2) {
        if (cause instanceof _JwtCreateError)
          return cause;
        if (cause instanceof JwkError) {
          return new _JwtCreateError(message2, cause.code, { cause });
        }
        return new _JwtCreateError(message2, code, { cause });
      }
    };
    exports.JwtCreateError = JwtCreateError;
    var JwtVerifyError = class _JwtVerifyError extends Error {
      constructor(message2 = "Invalid JWT", code = exports.ERR_JWT_VERIFY, options) {
        super(message2, options);
        Object.defineProperty(this, "code", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: code
        });
      }
      static from(cause, code, message2) {
        if (cause instanceof _JwtVerifyError)
          return cause;
        if (cause instanceof JwkError) {
          return new _JwtVerifyError(message2, cause.code, { cause });
        }
        return new _JwtVerifyError(message2, code, { cause });
      }
    };
    exports.JwtVerifyError = JwtVerifyError;
  }
});

// node_modules/multiformats/esm/vendor/base-x.js
var init_base_x = __esm({
  "node_modules/multiformats/esm/vendor/base-x.js"() {
  }
});

// node_modules/multiformats/esm/src/bytes.js
var empty;
var init_bytes = __esm({
  "node_modules/multiformats/esm/src/bytes.js"() {
    empty = new Uint8Array(0);
  }
});

// node_modules/multiformats/esm/src/bases/base.js
var Encoder, Decoder, ComposedDecoder, or, Codec, from, decode, encode, rfc4648;
var init_base = __esm({
  "node_modules/multiformats/esm/src/bases/base.js"() {
    init_base_x();
    init_bytes();
    Encoder = class {
      constructor(name, prefix, baseEncode) {
        this.name = name;
        this.prefix = prefix;
        this.baseEncode = baseEncode;
      }
      encode(bytes) {
        if (bytes instanceof Uint8Array) {
          return `${this.prefix}${this.baseEncode(bytes)}`;
        } else {
          throw Error("Unknown type, must be binary type");
        }
      }
    };
    Decoder = class {
      constructor(name, prefix, baseDecode) {
        this.name = name;
        this.prefix = prefix;
        if (prefix.codePointAt(0) === void 0) {
          throw new Error("Invalid prefix character");
        }
        this.prefixCodePoint = prefix.codePointAt(0);
        this.baseDecode = baseDecode;
      }
      decode(text) {
        if (typeof text === "string") {
          if (text.codePointAt(0) !== this.prefixCodePoint) {
            throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
          }
          return this.baseDecode(text.slice(this.prefix.length));
        } else {
          throw Error("Can only multibase decode strings");
        }
      }
      or(decoder2) {
        return or(this, decoder2);
      }
    };
    ComposedDecoder = class {
      constructor(decoders) {
        this.decoders = decoders;
      }
      or(decoder2) {
        return or(this, decoder2);
      }
      decode(input) {
        const prefix = input[0];
        const decoder2 = this.decoders[prefix];
        if (decoder2) {
          return decoder2.decode(input);
        } else {
          throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
        }
      }
    };
    or = (left, right) => new ComposedDecoder({
      ...left.decoders || { [left.prefix]: left },
      ...right.decoders || { [right.prefix]: right }
    });
    Codec = class {
      constructor(name, prefix, baseEncode, baseDecode) {
        this.name = name;
        this.prefix = prefix;
        this.baseEncode = baseEncode;
        this.baseDecode = baseDecode;
        this.encoder = new Encoder(name, prefix, baseEncode);
        this.decoder = new Decoder(name, prefix, baseDecode);
      }
      encode(input) {
        return this.encoder.encode(input);
      }
      decode(input) {
        return this.decoder.decode(input);
      }
    };
    from = ({ name, prefix, encode: encode4, decode: decode4 }) => new Codec(name, prefix, encode4, decode4);
    decode = (string, alphabet, bitsPerChar, name) => {
      const codes = {};
      for (let i = 0; i < alphabet.length; ++i) {
        codes[alphabet[i]] = i;
      }
      let end = string.length;
      while (string[end - 1] === "=") {
        --end;
      }
      const out = new Uint8Array(end * bitsPerChar / 8 | 0);
      let bits = 0;
      let buffer = 0;
      let written = 0;
      for (let i = 0; i < end; ++i) {
        const value = codes[string[i]];
        if (value === void 0) {
          throw new SyntaxError(`Non-${name} character`);
        }
        buffer = buffer << bitsPerChar | value;
        bits += bitsPerChar;
        if (bits >= 8) {
          bits -= 8;
          out[written++] = 255 & buffer >> bits;
        }
      }
      if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
        throw new SyntaxError("Unexpected end of data");
      }
      return out;
    };
    encode = (data, alphabet, bitsPerChar) => {
      const pad = alphabet[alphabet.length - 1] === "=";
      const mask = (1 << bitsPerChar) - 1;
      let out = "";
      let bits = 0;
      let buffer = 0;
      for (let i = 0; i < data.length; ++i) {
        buffer = buffer << 8 | data[i];
        bits += 8;
        while (bits > bitsPerChar) {
          bits -= bitsPerChar;
          out += alphabet[mask & buffer >> bits];
        }
      }
      if (bits) {
        out += alphabet[mask & buffer << bitsPerChar - bits];
      }
      if (pad) {
        while (out.length * bitsPerChar & 7) {
          out += "=";
        }
      }
      return out;
    };
    rfc4648 = ({ name, prefix, bitsPerChar, alphabet }) => {
      return from({
        prefix,
        name,
        encode(input) {
          return encode(input, alphabet, bitsPerChar);
        },
        decode(input) {
          return decode(input, alphabet, bitsPerChar, name);
        }
      });
    };
  }
});

// node_modules/multiformats/esm/src/bases/base64.js
var base64_exports = {};
__export(base64_exports, {
  base64: () => base64,
  base64pad: () => base64pad,
  base64url: () => base64url,
  base64urlpad: () => base64urlpad
});
var base64, base64pad, base64url, base64urlpad;
var init_base64 = __esm({
  "node_modules/multiformats/esm/src/bases/base64.js"() {
    init_base();
    base64 = rfc4648({
      prefix: "m",
      name: "base64",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      bitsPerChar: 6
    });
    base64pad = rfc4648({
      prefix: "M",
      name: "base64pad",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      bitsPerChar: 6
    });
    base64url = rfc4648({
      prefix: "u",
      name: "base64url",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
      bitsPerChar: 6
    });
    base64urlpad = rfc4648({
      prefix: "U",
      name: "base64urlpad",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
      bitsPerChar: 6
    });
  }
});

// node_modules/@atproto/jwk/dist/util.js
var require_util2 = __commonJS({
  "node_modules/@atproto/jwk/dist/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.segmentedStringRefinementFactory = exports.jwtCharsRefinement = exports.cachedGetter = exports.preferredOrderCmp = exports.isDefined = void 0;
    exports.matchesAny = matchesAny;
    exports.parseB64uJson = parseB64uJson;
    exports.isLastOccurrence = isLastOccurrence;
    var base64_1 = (init_base64(), __toCommonJS(base64_exports));
    var zod_1 = require_zod();
    var isDefined = (i) => i !== void 0;
    exports.isDefined = isDefined;
    var preferredOrderCmp = (order) => (a, b) => {
      const aIdx = order.indexOf(a);
      const bIdx = order.indexOf(b);
      if (aIdx === bIdx)
        return 0;
      if (aIdx === -1)
        return 1;
      if (bIdx === -1)
        return -1;
      return aIdx - bIdx;
    };
    exports.preferredOrderCmp = preferredOrderCmp;
    function matchesAny(value) {
      return value == null ? (v) => true : Array.isArray(value) ? (v) => value.includes(v) : (v) => v === value;
    }
    var cachedGetter = (target, _context) => {
      return function() {
        const value = target.call(this);
        Object.defineProperty(this, target.name, {
          get: () => value,
          enumerable: true,
          configurable: true
        });
        return value;
      };
    };
    exports.cachedGetter = cachedGetter;
    var decoder2 = new TextDecoder();
    function parseB64uJson(input) {
      const inputBytes = base64_1.base64url.baseDecode(input);
      const json = decoder2.decode(inputBytes);
      return JSON.parse(json);
    }
    var jwtCharsRefinement = (data, ctx) => {
      let char;
      for (let i = 0; i < data.length; i++) {
        char = data.charCodeAt(i);
        if (
          // Base64 URL encoding (most frequent)
          65 <= char && char <= 90 || // A-Z
          97 <= char && char <= 122 || // a-z
          48 <= char && char <= 57 || // 0-9
          char === 45 || // -
          char === 95 || // _
          // Boundary (least frequent, check last)
          char === 46
        ) {
        } else {
          const invalidChar = String.fromCodePoint(data.codePointAt(i));
          return ctx.addIssue({
            code: zod_1.ZodIssueCode.custom,
            message: `Invalid character "${invalidChar}" in JWT at position ${i}`
          });
        }
      }
    };
    exports.jwtCharsRefinement = jwtCharsRefinement;
    var segmentedStringRefinementFactory = (count, minPartLength = 2) => {
      if (!Number.isFinite(count) || count < 1 || (count | 0) !== count) {
        throw new TypeError(`Count must be a natural number (got ${count})`);
      }
      const minTotalLength = count * minPartLength + (count - 1);
      const errorPrefix = `Invalid JWT format`;
      return (data, ctx) => {
        if (data.length < minTotalLength) {
          ctx.addIssue({
            code: zod_1.ZodIssueCode.custom,
            message: `${errorPrefix}: too short`
          });
          return false;
        }
        let currentStart = 0;
        for (let i = 0; i < count - 1; i++) {
          const nextDot = data.indexOf(".", currentStart);
          if (nextDot === -1) {
            ctx.addIssue({
              code: zod_1.ZodIssueCode.custom,
              message: `${errorPrefix}: expected ${count} segments, got ${i + 1}`
            });
            return false;
          }
          if (nextDot - currentStart < minPartLength) {
            ctx.addIssue({
              code: zod_1.ZodIssueCode.custom,
              message: `${errorPrefix}: segment ${i + 1} is too short`
            });
            return false;
          }
          currentStart = nextDot + 1;
        }
        if (data.indexOf(".", currentStart) !== -1) {
          ctx.addIssue({
            code: zod_1.ZodIssueCode.custom,
            message: `${errorPrefix}: too many segments`
          });
          return false;
        }
        if (data.length - currentStart < minPartLength) {
          ctx.addIssue({
            code: zod_1.ZodIssueCode.custom,
            message: `${errorPrefix}: last segment is too short`
          });
          return false;
        }
        return true;
      };
    };
    exports.segmentedStringRefinementFactory = segmentedStringRefinementFactory;
    function isLastOccurrence(v, i, arr) {
      return arr.indexOf(v, i + 1) === -1;
    }
  }
});

// node_modules/@atproto/jwk/dist/jwk.js
var require_jwk = __commonJS({
  "node_modules/@atproto/jwk/dist/jwk.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.jwkPrivateSchema = exports.jwkPubSchema = exports.jwkValidator = exports.jwkSchema = exports.keyUsageSchema = exports.KEY_USAGE = exports.privateKeyUsageSchema = exports.PRIVATE_KEY_USAGE = exports.publicKeyUsageSchema = exports.PUBLIC_KEY_USAGE = void 0;
    exports.isPublicKeyUsage = isPublicKeyUsage;
    exports.isSigKeyUsage = isSigKeyUsage;
    exports.isEncKeyUsage = isEncKeyUsage;
    exports.isPrivateKeyUsage = isPrivateKeyUsage;
    exports.hasKid = hasKid;
    exports.hasSharedSecretJwk = hasSharedSecretJwk;
    exports.hasPrivateSecretJwk = hasPrivateSecretJwk;
    exports.isPrivateJwk = isPrivateJwk;
    exports.isPublicJwk = isPublicJwk;
    var zod_1 = require_zod();
    var util_1 = require_util2();
    exports.PUBLIC_KEY_USAGE = ["verify", "encrypt", "wrapKey"];
    exports.publicKeyUsageSchema = zod_1.z.enum(exports.PUBLIC_KEY_USAGE);
    function isPublicKeyUsage(usage) {
      return exports.PUBLIC_KEY_USAGE.includes(usage);
    }
    function isSigKeyUsage(v) {
      return v === "verify";
    }
    function isEncKeyUsage(v) {
      return v === "encrypt" || v === "wrapKey";
    }
    exports.PRIVATE_KEY_USAGE = [
      "sign",
      "decrypt",
      "unwrapKey",
      "deriveKey",
      "deriveBits"
    ];
    exports.privateKeyUsageSchema = zod_1.z.enum(exports.PRIVATE_KEY_USAGE);
    function isPrivateKeyUsage(usage) {
      return exports.PRIVATE_KEY_USAGE.includes(usage);
    }
    exports.KEY_USAGE = [...exports.PRIVATE_KEY_USAGE, ...exports.PUBLIC_KEY_USAGE];
    exports.keyUsageSchema = zod_1.z.enum(exports.KEY_USAGE);
    var jwkBaseSchema = zod_1.z.object({
      kty: zod_1.z.string().min(1),
      alg: zod_1.z.string().min(1).optional(),
      kid: zod_1.z.string().min(1).optional(),
      use: zod_1.z.enum(["sig", "enc"]).optional(),
      key_ops: zod_1.z.array(exports.keyUsageSchema).min(1, { message: "At least one key usage must be specified" }).refine((ops) => ops.every(util_1.isLastOccurrence), {
        message: "key_ops must not contain duplicates"
      }).optional(),
      x5c: zod_1.z.array(zod_1.z.string()).optional(),
      // X.509 Certificate Chain
      x5t: zod_1.z.string().min(1).optional(),
      // X.509 Certificate SHA-1 Thumbprint
      "x5t#S256": zod_1.z.string().min(1).optional(),
      // X.509 Certificate SHA-256 Thumbprint
      x5u: zod_1.z.string().url().optional(),
      // X.509 URL
      // https://www.w3.org/TR/webcrypto/
      ext: zod_1.z.boolean().optional(),
      // Extractable
      // Federation Historical Keys Response
      // https://openid.net/specs/openid-federation-1_0.html#name-federation-historical-keys-res
      iat: zod_1.z.number().int().optional(),
      // Issued At (timestamp)
      exp: zod_1.z.number().int().optional(),
      // Expiration Time (timestamp)
      nbf: zod_1.z.number().int().optional(),
      // Not Before (timestamp)
      revoked: zod_1.z.object({
        revoked_at: zod_1.z.number().int(),
        reason: zod_1.z.string().optional()
      }).optional()
    });
    var jwkRsaKeySchema = jwkBaseSchema.extend({
      kty: zod_1.z.literal("RSA"),
      alg: zod_1.z.enum(["RS256", "RS384", "RS512", "PS256", "PS384", "PS512"]).optional(),
      n: zod_1.z.string().min(1),
      // Modulus
      e: zod_1.z.string().min(1),
      // Exponent
      d: zod_1.z.string().min(1).optional(),
      // Private Exponent
      p: zod_1.z.string().min(1).optional(),
      // First Prime Factor
      q: zod_1.z.string().min(1).optional(),
      // Second Prime Factor
      dp: zod_1.z.string().min(1).optional(),
      // First Factor CRT Exponent
      dq: zod_1.z.string().min(1).optional(),
      // Second Factor CRT Exponent
      qi: zod_1.z.string().min(1).optional(),
      // First CRT Coefficient
      oth: zod_1.z.array(zod_1.z.object({
        r: zod_1.z.string().optional(),
        d: zod_1.z.string().optional(),
        t: zod_1.z.string().optional()
      })).min(1).optional()
      // Other Primes Info
    });
    var jwkEcKeySchema = jwkBaseSchema.extend({
      kty: zod_1.z.literal("EC"),
      alg: zod_1.z.enum(["ES256", "ES384", "ES512"]).optional(),
      crv: zod_1.z.enum(["P-256", "P-384", "P-521"]),
      x: zod_1.z.string().min(1),
      y: zod_1.z.string().min(1),
      d: zod_1.z.string().min(1).optional()
      // ECC Private Key
    });
    var jwkEcSecp256k1KeySchema = jwkBaseSchema.extend({
      kty: zod_1.z.literal("EC"),
      alg: zod_1.z.enum(["ES256K"]).optional(),
      crv: zod_1.z.enum(["secp256k1"]),
      x: zod_1.z.string().min(1),
      y: zod_1.z.string().min(1),
      d: zod_1.z.string().min(1).optional()
      // ECC Private Key
    });
    var jwkOkpKeySchema = jwkBaseSchema.extend({
      kty: zod_1.z.literal("OKP"),
      alg: zod_1.z.enum(["EdDSA"]).optional(),
      crv: zod_1.z.enum(["Ed25519", "Ed448"]),
      x: zod_1.z.string().min(1),
      d: zod_1.z.string().min(1).optional()
      // ECC Private Key
    });
    var jwkSymKeySchema = jwkBaseSchema.extend({
      kty: zod_1.z.literal("oct"),
      // Octet Sequence (used to represent symmetric keys)
      alg: zod_1.z.enum(["HS256", "HS384", "HS512"]).optional(),
      k: zod_1.z.string()
      // Key Value (base64url encoded)
    });
    exports.jwkSchema = zod_1.z.union([
      jwkRsaKeySchema,
      jwkEcKeySchema,
      jwkEcSecp256k1KeySchema,
      jwkOkpKeySchema,
      jwkSymKeySchema
    ]).refine(
      // https://datatracker.ietf.org/doc/html/rfc7517#section-4.2
      // > The "use" (public key use) parameter identifies the intended use of the
      // > public key
      (k) => k.use == null || isPublicJwk(k),
      {
        message: '"use" can only be used with public keys',
        path: ["use"]
      }
    ).refine((k) => !k.key_ops?.some(isPrivateKeyUsage) || isPrivateJwk(k), {
      message: "private key usage not allowed for public keys",
      path: ["key_ops"]
    }).refine(
      // https://datatracker.ietf.org/doc/html/rfc7517#section-4.3
      // > The "use" and "key_ops" JWK members SHOULD NOT be used together;
      // > however, if both are used, the information they convey MUST be
      // > consistent.
      (k) => k.use == null || k.key_ops == null || k.use === "sig" && k.key_ops.every(isSigKeyUsage) || k.use === "enc" && k.key_ops.every(isEncKeyUsage),
      {
        message: '"key_ops" must be consistent with "use"',
        path: ["key_ops"]
      }
    );
    exports.jwkValidator = exports.jwkSchema;
    exports.jwkPubSchema = exports.jwkSchema.refine(hasKid, {
      message: '"kid" is required',
      path: ["kid"]
    }).refine(isPublicJwk, {
      message: "private key not allowed"
    }).refine((k) => !k.key_ops || k.key_ops.every(isPublicKeyUsage), {
      message: '"key_ops" must not contain private key usage for public keys',
      path: ["key_ops"]
    });
    exports.jwkPrivateSchema = exports.jwkSchema.refine(isPrivateJwk, {
      message: "private key required"
    });
    function hasKid(jwk) {
      return "kid" in jwk && jwk.kid != null;
    }
    function hasSharedSecretJwk(jwk) {
      return "k" in jwk && jwk.k != null;
    }
    function hasPrivateSecretJwk(jwk) {
      return "d" in jwk && jwk.d != null;
    }
    function isPrivateJwk(jwk) {
      return hasPrivateSecretJwk(jwk) || hasSharedSecretJwk(jwk);
    }
    function isPublicJwk(jwk) {
      return !hasPrivateSecretJwk(jwk) && !hasSharedSecretJwk(jwk);
    }
  }
});

// node_modules/@atproto/jwk/dist/alg.js
var require_alg = __commonJS({
  "node_modules/@atproto/jwk/dist/alg.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.jwkAlgorithms = jwkAlgorithms;
    var errors_js_1 = require_errors2();
    var jwk_js_1 = require_jwk();
    var { process: process2 } = globalThis;
    var IS_NODE_RUNTIME = typeof process2 !== "undefined" && typeof process2?.versions?.node === "string";
    function* jwkAlgorithms(jwk) {
      if (typeof jwk.alg === "string") {
        yield jwk.alg;
        return;
      }
      switch (jwk.kty) {
        case "EC": {
          if (jwkSupportsEnc(jwk)) {
            yield "ECDH-ES";
            yield "ECDH-ES+A128KW";
            yield "ECDH-ES+A192KW";
            yield "ECDH-ES+A256KW";
          }
          if (jwkSupportsSig(jwk)) {
            const crv = "crv" in jwk ? jwk.crv : void 0;
            switch (crv) {
              case "P-256":
              case "P-384":
                yield `ES${crv.slice(-3)}`;
                break;
              case "P-521":
                yield "ES512";
                break;
              case "secp256k1":
                if (IS_NODE_RUNTIME)
                  yield "ES256K";
                break;
              default:
                throw new errors_js_1.JwkError(`Unsupported crv "${crv}"`);
            }
          }
          return;
        }
        case "OKP": {
          if (!jwk.use)
            throw new errors_js_1.JwkError('Missing "use" Parameter value');
          yield "ECDH-ES";
          yield "ECDH-ES+A128KW";
          yield "ECDH-ES+A192KW";
          yield "ECDH-ES+A256KW";
          return;
        }
        case "RSA": {
          if (jwkSupportsEnc(jwk)) {
            yield "RSA-OAEP";
            yield "RSA-OAEP-256";
            yield "RSA-OAEP-384";
            yield "RSA-OAEP-512";
            if (IS_NODE_RUNTIME)
              yield "RSA1_5";
          }
          if (jwkSupportsSig(jwk)) {
            yield "PS256";
            yield "PS384";
            yield "PS512";
            yield "RS256";
            yield "RS384";
            yield "RS512";
          }
          return;
        }
        case "oct": {
          if (jwkSupportsEnc(jwk)) {
            yield "A128GCMKW";
            yield "A192GCMKW";
            yield "A256GCMKW";
            yield "A128KW";
            yield "A192KW";
            yield "A256KW";
          }
          if (jwkSupportsSig(jwk)) {
            yield "HS256";
            yield "HS384";
            yield "HS512";
          }
          return;
        }
        default:
          throw new errors_js_1.JwkError(`Unsupported kty "${jwk.kty}"`);
      }
    }
    function jwkSupportsEnc(jwk) {
      return jwk.key_ops?.some(jwk_js_1.isEncKeyUsage) ?? (jwk.use == null || jwk.use === "enc");
    }
    function jwkSupportsSig(jwk) {
      return jwk.key_ops?.some(jwk_js_1.isSigKeyUsage) ?? (jwk.use == null || jwk.use === "sig");
    }
  }
});

// node_modules/@atproto/jwk/dist/jwks.js
var require_jwks = __commonJS({
  "node_modules/@atproto/jwk/dist/jwks.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.jwksPubSchema = exports.jwksSchema = void 0;
    var zod_1 = require_zod();
    var jwk_js_1 = require_jwk();
    exports.jwksSchema = zod_1.z.object({
      keys: zod_1.z.array(zod_1.z.unknown()).transform((input) => {
        return input.map((item) => jwk_js_1.jwkSchema.safeParse(item)).filter((res) => res.success).map((res) => res.data);
      })
    });
    exports.jwksPubSchema = zod_1.z.object({
      keys: zod_1.z.array(zod_1.z.unknown()).transform((input) => {
        return input.map((item) => jwk_js_1.jwkPubSchema.safeParse(item)).filter((res) => res.success).map((res) => res.data);
      })
    });
  }
});

// node_modules/@atproto/jwk/dist/jwt.js
var require_jwt = __commonJS({
  "node_modules/@atproto/jwk/dist/jwt.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.jwtPayloadSchema = exports.htuSchema = exports.jwtHeaderSchema = exports.isUnsignedJwt = exports.unsignedJwtSchema = exports.isSignedJwt = exports.signedJwtSchema = void 0;
    var zod_1 = require_zod();
    var jwk_js_1 = require_jwk();
    var util_js_1 = require_util2();
    exports.signedJwtSchema = zod_1.z.string().superRefine(util_js_1.jwtCharsRefinement).superRefine((0, util_js_1.segmentedStringRefinementFactory)(3));
    var isSignedJwt = (data) => exports.signedJwtSchema.safeParse(data).success;
    exports.isSignedJwt = isSignedJwt;
    exports.unsignedJwtSchema = zod_1.z.string().superRefine(util_js_1.jwtCharsRefinement).superRefine((0, util_js_1.segmentedStringRefinementFactory)(2));
    var isUnsignedJwt = (data) => exports.unsignedJwtSchema.safeParse(data).success;
    exports.isUnsignedJwt = isUnsignedJwt;
    exports.jwtHeaderSchema = zod_1.z.object({
      /** "alg" (Algorithm) Header Parameter */
      alg: zod_1.z.string(),
      /** "jku" (JWK Set URL) Header Parameter */
      jku: zod_1.z.string().url().optional(),
      /** "jwk" (JSON Web Key) Header Parameter */
      jwk: zod_1.z.object({
        kty: zod_1.z.string(),
        crv: zod_1.z.string().optional(),
        x: zod_1.z.string().optional(),
        y: zod_1.z.string().optional(),
        e: zod_1.z.string().optional(),
        n: zod_1.z.string().optional()
      }).optional(),
      /** "kid" (Key ID) Header Parameter */
      kid: zod_1.z.string().optional(),
      /** "x5u" (X.509 URL) Header Parameter */
      x5u: zod_1.z.string().optional(),
      /** "x5c" (X.509 Certificate Chain) Header Parameter */
      x5c: zod_1.z.array(zod_1.z.string()).optional(),
      /** "x5t" (X.509 Certificate SHA-1 Thumbprint) Header Parameter */
      x5t: zod_1.z.string().optional(),
      /** "x5t#S256" (X.509 Certificate SHA-256 Thumbprint) Header Parameter */
      "x5t#S256": zod_1.z.string().optional(),
      /** "typ" (Type) Header Parameter */
      typ: zod_1.z.string().optional(),
      /** "cty" (Content Type) Header Parameter */
      cty: zod_1.z.string().optional(),
      /** "crit" (Critical) Header Parameter */
      crit: zod_1.z.array(zod_1.z.string()).optional()
    }).passthrough();
    exports.htuSchema = zod_1.z.string().superRefine((value, ctx) => {
      try {
        const url = new URL(value);
        if (url.protocol !== "http:" && url.protocol !== "https:") {
          ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: "Only http: and https: protocols are allowed"
          });
        }
        if (url.username || url.password) {
          ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: "Credentials not allowed"
          });
        }
        if (url.search) {
          ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: "Query string not allowed"
          });
        }
        if (url.hash) {
          ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: "Fragment not allowed"
          });
        }
      } catch (err) {
        ctx.addIssue({
          code: zod_1.z.ZodIssueCode.invalid_string,
          validation: "url"
        });
      }
      return value;
    });
    exports.jwtPayloadSchema = zod_1.z.object({
      iss: zod_1.z.string().optional(),
      aud: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()).nonempty()]).optional(),
      sub: zod_1.z.string().optional(),
      exp: zod_1.z.number().int().optional(),
      nbf: zod_1.z.number().int().optional(),
      iat: zod_1.z.number().int().optional(),
      jti: zod_1.z.string().optional(),
      htm: zod_1.z.string().optional(),
      htu: exports.htuSchema.optional(),
      ath: zod_1.z.string().optional(),
      acr: zod_1.z.string().optional(),
      azp: zod_1.z.string().optional(),
      amr: zod_1.z.array(zod_1.z.string()).optional(),
      // https://datatracker.ietf.org/doc/html/rfc7800
      cnf: zod_1.z.object({
        kid: zod_1.z.string().optional(),
        // Key ID
        jwk: jwk_js_1.jwkPubSchema.optional(),
        // JWK
        jwe: zod_1.z.string().optional(),
        // Encrypted key
        jku: zod_1.z.string().url().optional(),
        // JWK Set URI ("kid" should also be provided)
        // https://datatracker.ietf.org/doc/html/rfc9449#section-6.1
        jkt: zod_1.z.string().optional(),
        // https://datatracker.ietf.org/doc/html/rfc8705
        "x5t#S256": zod_1.z.string().optional(),
        // X.509 Certificate SHA-256 Thumbprint
        // https://datatracker.ietf.org/doc/html/rfc9203
        osc: zod_1.z.string().optional()
        // OSCORE_Input_Material carrying the parameters for using OSCORE per-message security with implicit key confirmation
      }).optional(),
      client_id: zod_1.z.string().optional(),
      scope: zod_1.z.string().optional(),
      nonce: zod_1.z.string().optional(),
      at_hash: zod_1.z.string().optional(),
      c_hash: zod_1.z.string().optional(),
      s_hash: zod_1.z.string().optional(),
      auth_time: zod_1.z.number().int().optional(),
      // https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
      // OpenID: "profile" scope
      name: zod_1.z.string().optional(),
      family_name: zod_1.z.string().optional(),
      given_name: zod_1.z.string().optional(),
      middle_name: zod_1.z.string().optional(),
      nickname: zod_1.z.string().optional(),
      preferred_username: zod_1.z.string().optional(),
      gender: zod_1.z.string().optional(),
      // OpenID only defines "male" and "female" without forbidding other values
      picture: zod_1.z.string().url().optional(),
      profile: zod_1.z.string().url().optional(),
      website: zod_1.z.string().url().optional(),
      birthdate: zod_1.z.string().regex(/\d{4}-\d{2}-\d{2}/).optional(),
      zoneinfo: zod_1.z.string().regex(/^[A-Za-z0-9_/]+$/).optional(),
      locale: zod_1.z.string().regex(/^[a-z]{2,3}(-[A-Z]{2})?$/).optional(),
      updated_at: zod_1.z.number().int().optional(),
      // OpenID: "email" scope
      email: zod_1.z.string().optional(),
      email_verified: zod_1.z.boolean().optional(),
      // OpenID: "phone" scope
      phone_number: zod_1.z.string().optional(),
      phone_number_verified: zod_1.z.boolean().optional(),
      // OpenID: "address" scope
      // https://openid.net/specs/openid-connect-core-1_0.html#AddressClaim
      address: zod_1.z.object({
        formatted: zod_1.z.string().optional(),
        street_address: zod_1.z.string().optional(),
        locality: zod_1.z.string().optional(),
        region: zod_1.z.string().optional(),
        postal_code: zod_1.z.string().optional(),
        country: zod_1.z.string().optional()
      }).optional(),
      // https://datatracker.ietf.org/doc/html/rfc9396#section-14.2
      authorization_details: zod_1.z.array(zod_1.z.object({
        type: zod_1.z.string(),
        // https://datatracker.ietf.org/doc/html/rfc9396#section-2.2
        locations: zod_1.z.array(zod_1.z.string()).optional(),
        actions: zod_1.z.array(zod_1.z.string()).optional(),
        datatypes: zod_1.z.array(zod_1.z.string()).optional(),
        identifier: zod_1.z.string().optional(),
        privileges: zod_1.z.array(zod_1.z.string()).optional()
      }).passthrough()).optional()
    }).passthrough();
  }
});

// node_modules/@atproto/jwk/dist/jwt-decode.js
var require_jwt_decode = __commonJS({
  "node_modules/@atproto/jwk/dist/jwt-decode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unsafeDecodeJwt = unsafeDecodeJwt;
    var errors_js_1 = require_errors2();
    var jwt_js_1 = require_jwt();
    var util_js_1 = require_util2();
    function unsafeDecodeJwt(jwt) {
      const { 0: headerEnc, 1: payloadEnc, length } = jwt.split(".");
      if (length > 3 || length < 2) {
        throw new errors_js_1.JwtVerifyError(void 0, errors_js_1.ERR_JWT_INVALID);
      }
      const header = jwt_js_1.jwtHeaderSchema.parse((0, util_js_1.parseB64uJson)(headerEnc));
      if (length === 2 && header?.alg !== "none") {
        throw new errors_js_1.JwtVerifyError(void 0, errors_js_1.ERR_JWT_INVALID);
      }
      const payload = jwt_js_1.jwtPayloadSchema.parse((0, util_js_1.parseB64uJson)(payloadEnc));
      return { header, payload };
    }
  }
});

// node_modules/@atproto/jwk/dist/jwt-verify.js
var require_jwt_verify = __commonJS({
  "node_modules/@atproto/jwk/dist/jwt-verify.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@atproto/jwk/dist/key.js
var require_key = __commonJS({
  "node_modules/@atproto/jwk/dist/key.js"(exports) {
    "use strict";
    var __runInitializers = exports && exports.__runInitializers || function(thisArg, initializers, value) {
      var useValue = arguments.length > 2;
      for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
      }
      return useValue ? value : void 0;
    };
    var __esDecorate = exports && exports.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
      function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
      }
      var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
      var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
      var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
      var _, done = false;
      for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
          if (done) throw new TypeError("Cannot add initializers after decoration has completed");
          extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
        }
      }
      if (target) Object.defineProperty(target, contextIn.name, descriptor);
      done = true;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Key = void 0;
    var alg_js_1 = require_alg();
    var jwk_js_1 = require_jwk();
    var util_js_1 = require_util2();
    var Key = (() => {
      var _a;
      let _instanceExtraInitializers = [];
      let _get_isPrivate_decorators;
      let _get_isSymetric_decorators;
      let _get_publicJwk_decorators;
      let _get_bareJwk_decorators;
      let _get_algorithms_decorators;
      return _a = class Key {
        constructor(jwk) {
          Object.defineProperty(this, "jwk", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (__runInitializers(this, _instanceExtraInitializers), jwk)
          });
        }
        get isPrivate() {
          return (0, jwk_js_1.isPrivateJwk)(this.jwk);
        }
        get isSymetric() {
          return (0, jwk_js_1.hasSharedSecretJwk)(this.jwk);
        }
        get privateJwk() {
          if (!this.isPrivate)
            return void 0;
          return this.jwk;
        }
        get publicJwk() {
          if (this.isSymetric)
            return void 0;
          if (!this.isPrivate)
            return this.jwk;
          const validated = jwk_js_1.jwkPubSchema.safeParse({
            ...this.jwk,
            d: void 0,
            k: void 0,
            use: void 0,
            key_ops: buildPublicKeyOps(this.keyOps) ?? jwk_js_1.PUBLIC_KEY_USAGE
          });
          if (!validated.success)
            return void 0;
          return Object.freeze(validated.data);
        }
        get bareJwk() {
          if (this.isSymetric)
            return void 0;
          const { kty, crv, e, n, x, y } = this.jwk;
          return Object.freeze(jwk_js_1.jwkSchema.parse({ crv, e, kty, n, x, y }));
        }
        /**
         * @note Only defined on public keys
         */
        get use() {
          return this.jwk.use;
        }
        get keyOps() {
          return this.jwk.key_ops;
        }
        /**
         * The (forced) algorithm to use. If not provided, the key will be usable with
         * any of the algorithms in {@link algorithms}.
         *
         * @see {@link https://datatracker.ietf.org/doc/html/rfc7518#section-3.1 | "alg" (Algorithm) Header Parameter Values for JWS}
         */
        get alg() {
          return this.jwk.alg;
        }
        get kid() {
          return this.jwk.kid;
        }
        get crv() {
          return this.jwk.crv;
        }
        /**
         * All the algorithms that this key can be used with. If `alg` is provided,
         * this set will only contain that algorithm.
         */
        get algorithms() {
          return Object.freeze(Array.from((0, alg_js_1.jwkAlgorithms)(this.jwk)));
        }
        get isRevoked() {
          return this.jwk.revoked != null;
        }
        isActive(options) {
          if (!options?.allowRevoked && this.isRevoked)
            return false;
          const tolerance = options?.clockTolerance ?? 0;
          if (tolerance !== Infinity) {
            const now = options?.currentDate?.getTime() ?? Date.now();
            const { exp, nbf } = this.jwk;
            if (nbf != null && !(now >= nbf * 1e3 - tolerance))
              return false;
            if (exp != null && !(now < exp * 1e3 + tolerance))
              return false;
          }
          return true;
        }
        matches(opts) {
          if (opts.kid != null) {
            const matchesKid = Array.isArray(opts.kid) ? this.kid != null && opts.kid.includes(this.kid) : this.kid === opts.kid;
            if (!matchesKid)
              return false;
          }
          if (opts.alg != null) {
            const matchesAlg = Array.isArray(opts.alg) ? opts.alg.some((a) => this.algorithms.includes(a)) : this.algorithms.includes(opts.alg);
            if (!matchesAlg)
              return false;
          }
          if (opts.usage != null) {
            const matchesOps = this.keyOps == null || this.keyOps.includes(opts.usage) || // @NOTE Because this.jwk represents the private key (typically used for
            // private operations), the public counterpart operations are allowed.
            opts.usage === "verify" && this.keyOps.includes("sign") || opts.usage === "encrypt" && this.keyOps.includes("decrypt") || opts.usage === "wrapKey" && this.keyOps.includes("unwrapKey");
            if (!matchesOps)
              return false;
            const matchesUse = this.use == null || this.use === "sig" && (0, jwk_js_1.isSigKeyUsage)(opts.usage) || this.use === "enc" && (0, jwk_js_1.isEncKeyUsage)(opts.usage);
            if (!matchesUse)
              return false;
            const matchesKeyType = this.isPrivate || (0, jwk_js_1.isPublicKeyUsage)(opts.usage);
            if (!matchesKeyType)
              return false;
          }
          return true;
        }
      }, (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
        _get_isPrivate_decorators = [util_js_1.cachedGetter];
        _get_isSymetric_decorators = [util_js_1.cachedGetter];
        _get_publicJwk_decorators = [util_js_1.cachedGetter];
        _get_bareJwk_decorators = [util_js_1.cachedGetter];
        _get_algorithms_decorators = [util_js_1.cachedGetter];
        __esDecorate(_a, null, _get_isPrivate_decorators, { kind: "getter", name: "isPrivate", static: false, private: false, access: { has: (obj) => "isPrivate" in obj, get: (obj) => obj.isPrivate }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_a, null, _get_isSymetric_decorators, { kind: "getter", name: "isSymetric", static: false, private: false, access: { has: (obj) => "isSymetric" in obj, get: (obj) => obj.isSymetric }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_a, null, _get_publicJwk_decorators, { kind: "getter", name: "publicJwk", static: false, private: false, access: { has: (obj) => "publicJwk" in obj, get: (obj) => obj.publicJwk }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_a, null, _get_bareJwk_decorators, { kind: "getter", name: "bareJwk", static: false, private: false, access: { has: (obj) => "bareJwk" in obj, get: (obj) => obj.bareJwk }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_a, null, _get_algorithms_decorators, { kind: "getter", name: "algorithms", static: false, private: false, access: { has: (obj) => "algorithms" in obj, get: (obj) => obj.algorithms }, metadata: _metadata }, null, _instanceExtraInitializers);
        if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      })(), _a;
    })();
    exports.Key = Key;
    function buildPublicKeyOps(keyUsages) {
      if (keyUsages == null)
        return void 0;
      const publicOps = new Set(keyUsages.filter(jwk_js_1.isPublicKeyUsage));
      if (keyUsages.includes("sign"))
        publicOps.add("verify");
      if (keyUsages.includes("decrypt"))
        publicOps.add("encrypt");
      if (keyUsages.includes("unwrapKey"))
        publicOps.add("wrapKey");
      return Array.from(publicOps);
    }
  }
});

// node_modules/@atproto/jwk/dist/keyset.js
var require_keyset = __commonJS({
  "node_modules/@atproto/jwk/dist/keyset.js"(exports) {
    "use strict";
    var __runInitializers = exports && exports.__runInitializers || function(thisArg, initializers, value) {
      var useValue = arguments.length > 2;
      for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
      }
      return useValue ? value : void 0;
    };
    var __esDecorate = exports && exports.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
      function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
      }
      var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
      var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
      var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
      var _, done = false;
      for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
          if (done) throw new TypeError("Cannot add initializers after decoration has completed");
          extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
        }
      }
      if (target) Object.defineProperty(target, contextIn.name, descriptor);
      done = true;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Keyset = void 0;
    var errors_js_1 = require_errors2();
    var jwt_decode_js_1 = require_jwt_decode();
    var util_js_1 = require_util2();
    var extractPrivateJwk = (key) => key.privateJwk;
    var extractPublicJwk = (key) => key.publicJwk;
    var Keyset = (() => {
      var _a;
      let _instanceExtraInitializers = [];
      let _get_signAlgorithms_decorators;
      let _get_publicJwks_decorators;
      let _get_privateJwks_decorators;
      return _a = class Keyset {
        constructor(iterable, preferredSigningAlgorithms = iterable instanceof _a ? [...iterable.preferredSigningAlgorithms] : [
          // Prefer elliptic curve algorithms
          "EdDSA",
          "ES256K",
          "ES256",
          // https://datatracker.ietf.org/doc/html/rfc7518#section-3.5
          "PS256",
          "PS384",
          "PS512",
          "HS256",
          "HS384",
          "HS512"
        ]) {
          Object.defineProperty(this, "preferredSigningAlgorithms", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (__runInitializers(this, _instanceExtraInitializers), preferredSigningAlgorithms)
          });
          Object.defineProperty(this, "keys", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
          });
          const keys = [];
          const keyIds = /* @__PURE__ */ new Set();
          for (const key of iterable) {
            if (!key)
              continue;
            keys.push(key);
            if (key.kid) {
              if (keyIds.has(key.kid))
                throw new errors_js_1.JwkError(`Duplicate key: ${key.kid}`);
              else
                keyIds.add(key.kid);
            }
          }
          this.keys = Object.freeze(keys);
        }
        get size() {
          return this.keys.length;
        }
        get signAlgorithms() {
          const algorithms = /* @__PURE__ */ new Set();
          for (const key of this) {
            if (key.use !== "sig")
              continue;
            for (const alg of key.algorithms) {
              algorithms.add(alg);
            }
          }
          return Object.freeze([...algorithms].sort((0, util_js_1.preferredOrderCmp)(this.preferredSigningAlgorithms)));
        }
        get publicJwks() {
          return Object.freeze({
            keys: Object.freeze(Array.from(this, extractPublicJwk).filter(util_js_1.isDefined))
          });
        }
        get privateJwks() {
          return Object.freeze({
            keys: Object.freeze(Array.from(this, extractPrivateJwk).filter(util_js_1.isDefined))
          });
        }
        has(kid) {
          return this.keys.some((key) => key.kid === kid);
        }
        get(options) {
          const key = this.find(options);
          if (key)
            return key;
          throw new errors_js_1.JwkError(`Key not found ${options.kid ?? options.alg ?? options.usage ?? "<unknown>"}`, errors_js_1.ERR_JWK_NOT_FOUND);
        }
        find(options) {
          for (const key of this.list(options)) {
            return key;
          }
          return void 0;
        }
        *list(options) {
          for (const key of this) {
            if (key.isActive(options) && key.matches(options)) {
              yield key;
            }
          }
        }
        findPrivateKey({ kid, alg, usage, ...options }) {
          const matchingKeys = [];
          if (Array.isArray(alg) && alg.length === 1)
            alg = alg[0];
          for (const key of this.list({ ...options, kid, alg, usage })) {
            if (typeof alg === "string")
              return { key, alg };
            matchingKeys.push(key);
          }
          const isAllowedAlg = (0, util_js_1.matchesAny)(alg);
          const candidates = matchingKeys.map((key) => [key, key.algorithms.filter(isAllowedAlg)]);
          for (const prefAlg of this.preferredSigningAlgorithms) {
            for (const [matchingKey, matchingAlgs] of candidates) {
              if (matchingAlgs.includes(prefAlg)) {
                return { key: matchingKey, alg: prefAlg };
              }
            }
          }
          for (const [matchingKey, matchingAlgs] of candidates) {
            for (const alg2 of matchingAlgs) {
              return { key: matchingKey, alg: alg2 };
            }
          }
          throw new errors_js_1.JwkError(`No private key found for ${kid || alg || usage}`, errors_js_1.ERR_JWK_NOT_FOUND);
        }
        [(_get_signAlgorithms_decorators = [util_js_1.cachedGetter], _get_publicJwks_decorators = [util_js_1.cachedGetter], _get_privateJwks_decorators = [util_js_1.cachedGetter], Symbol.iterator)]() {
          return this.keys.values();
        }
        async createJwt({ alg: sAlg, kid: sKid, ...header }, payload) {
          try {
            const { key, alg } = this.findPrivateKey({
              alg: sAlg,
              kid: sKid,
              usage: "sign",
              allowRevoked: false
              // For explicitness (default value is false)
            });
            const protectedHeader = { ...header, alg, kid: key.kid };
            if (typeof payload === "function") {
              payload = await payload(protectedHeader, key);
            }
            return await key.createJwt(protectedHeader, payload);
          } catch (err) {
            throw errors_js_1.JwtCreateError.from(err);
          }
        }
        async verifyJwt(token, options) {
          const { header } = (0, jwt_decode_js_1.unsafeDecodeJwt)(token);
          const { kid, alg } = header;
          const errors = [];
          for (const key of this.list({ ...options, kid, alg, usage: "verify" })) {
            try {
              const result = await key.verifyJwt(token, options);
              return { ...result, key };
            } catch (err) {
              errors.push(err);
            }
          }
          switch (errors.length) {
            case 0:
              throw new errors_js_1.JwtVerifyError("No key matched", errors_js_1.ERR_JWKS_NO_MATCHING_KEY);
            case 1:
              throw errors_js_1.JwtVerifyError.from(errors[0], errors_js_1.ERR_JWT_INVALID);
            default:
              throw errors_js_1.JwtVerifyError.from(errors, errors_js_1.ERR_JWT_INVALID);
          }
        }
        toJSON() {
          return structuredClone(this.publicJwks);
        }
      }, (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
        __esDecorate(_a, null, _get_signAlgorithms_decorators, { kind: "getter", name: "signAlgorithms", static: false, private: false, access: { has: (obj) => "signAlgorithms" in obj, get: (obj) => obj.signAlgorithms }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_a, null, _get_publicJwks_decorators, { kind: "getter", name: "publicJwks", static: false, private: false, access: { has: (obj) => "publicJwks" in obj, get: (obj) => obj.publicJwks }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_a, null, _get_privateJwks_decorators, { kind: "getter", name: "privateJwks", static: false, private: false, access: { has: (obj) => "privateJwks" in obj, get: (obj) => obj.privateJwks }, metadata: _metadata }, null, _instanceExtraInitializers);
        if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      })(), _a;
    })();
    exports.Keyset = Keyset;
  }
});

// node_modules/@atproto/jwk/dist/index.js
var require_dist = __commonJS({
  "node_modules/@atproto/jwk/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValidationError = void 0;
    var zod_1 = require_zod();
    Object.defineProperty(exports, "ValidationError", { enumerable: true, get: function() {
      return zod_1.ZodError;
    } });
    __exportStar(require_alg(), exports);
    __exportStar(require_errors2(), exports);
    __exportStar(require_jwk(), exports);
    __exportStar(require_jwks(), exports);
    __exportStar(require_jwt_decode(), exports);
    __exportStar(require_jwt_verify(), exports);
    __exportStar(require_jwt(), exports);
    __exportStar(require_key(), exports);
    __exportStar(require_keyset(), exports);
  }
});

// node_modules/jose/dist/browser/runtime/webcrypto.js
var webcrypto_default, isCryptoKey;
var init_webcrypto = __esm({
  "node_modules/jose/dist/browser/runtime/webcrypto.js"() {
    webcrypto_default = crypto;
    isCryptoKey = (key) => key instanceof CryptoKey;
  }
});

// node_modules/jose/dist/browser/runtime/digest.js
var digest, digest_default;
var init_digest = __esm({
  "node_modules/jose/dist/browser/runtime/digest.js"() {
    init_webcrypto();
    digest = async (algorithm, data) => {
      const subtleDigest = `SHA-${algorithm.slice(-3)}`;
      return new Uint8Array(await webcrypto_default.subtle.digest(subtleDigest, data));
    };
    digest_default = digest;
  }
});

// node_modules/jose/dist/browser/lib/buffer_utils.js
function concat(...buffers) {
  const size = buffers.reduce((acc, { length }) => acc + length, 0);
  const buf = new Uint8Array(size);
  let i = 0;
  for (const buffer of buffers) {
    buf.set(buffer, i);
    i += buffer.length;
  }
  return buf;
}
function p2s(alg, p2sInput) {
  return concat(encoder.encode(alg), new Uint8Array([0]), p2sInput);
}
function writeUInt32BE(buf, value, offset) {
  if (value < 0 || value >= MAX_INT32) {
    throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
  }
  buf.set([value >>> 24, value >>> 16, value >>> 8, value & 255], offset);
}
function uint64be(value) {
  const high = Math.floor(value / MAX_INT32);
  const low = value % MAX_INT32;
  const buf = new Uint8Array(8);
  writeUInt32BE(buf, high, 0);
  writeUInt32BE(buf, low, 4);
  return buf;
}
function uint32be(value) {
  const buf = new Uint8Array(4);
  writeUInt32BE(buf, value);
  return buf;
}
function lengthAndInput(input) {
  return concat(uint32be(input.length), input);
}
async function concatKdf(secret, bits, value) {
  const iterations = Math.ceil((bits >> 3) / 32);
  const res = new Uint8Array(iterations * 32);
  for (let iter = 0; iter < iterations; iter++) {
    const buf = new Uint8Array(4 + secret.length + value.length);
    buf.set(uint32be(iter + 1));
    buf.set(secret, 4);
    buf.set(value, 4 + secret.length);
    res.set(await digest_default("sha256", buf), iter * 32);
  }
  return res.slice(0, bits >> 3);
}
var encoder, decoder, MAX_INT32;
var init_buffer_utils = __esm({
  "node_modules/jose/dist/browser/lib/buffer_utils.js"() {
    init_digest();
    encoder = new TextEncoder();
    decoder = new TextDecoder();
    MAX_INT32 = 2 ** 32;
  }
});

// node_modules/jose/dist/browser/runtime/base64url.js
var encodeBase64, encode2, decodeBase64, decode2;
var init_base64url = __esm({
  "node_modules/jose/dist/browser/runtime/base64url.js"() {
    init_buffer_utils();
    encodeBase64 = (input) => {
      let unencoded = input;
      if (typeof unencoded === "string") {
        unencoded = encoder.encode(unencoded);
      }
      const CHUNK_SIZE = 32768;
      const arr = [];
      for (let i = 0; i < unencoded.length; i += CHUNK_SIZE) {
        arr.push(String.fromCharCode.apply(null, unencoded.subarray(i, i + CHUNK_SIZE)));
      }
      return btoa(arr.join(""));
    };
    encode2 = (input) => {
      return encodeBase64(input).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    };
    decodeBase64 = (encoded) => {
      const binary = atob(encoded);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }
      return bytes;
    };
    decode2 = (input) => {
      let encoded = input;
      if (encoded instanceof Uint8Array) {
        encoded = decoder.decode(encoded);
      }
      encoded = encoded.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
      try {
        return decodeBase64(encoded);
      } catch {
        throw new TypeError("The input to be decoded is not correctly encoded.");
      }
    };
  }
});

// node_modules/jose/dist/browser/util/errors.js
var errors_exports = {};
__export(errors_exports, {
  JOSEAlgNotAllowed: () => JOSEAlgNotAllowed,
  JOSEError: () => JOSEError,
  JOSENotSupported: () => JOSENotSupported,
  JWEDecryptionFailed: () => JWEDecryptionFailed,
  JWEInvalid: () => JWEInvalid,
  JWKInvalid: () => JWKInvalid,
  JWKSInvalid: () => JWKSInvalid,
  JWKSMultipleMatchingKeys: () => JWKSMultipleMatchingKeys,
  JWKSNoMatchingKey: () => JWKSNoMatchingKey,
  JWKSTimeout: () => JWKSTimeout,
  JWSInvalid: () => JWSInvalid,
  JWSSignatureVerificationFailed: () => JWSSignatureVerificationFailed,
  JWTClaimValidationFailed: () => JWTClaimValidationFailed,
  JWTExpired: () => JWTExpired,
  JWTInvalid: () => JWTInvalid
});
var JOSEError, JWTClaimValidationFailed, JWTExpired, JOSEAlgNotAllowed, JOSENotSupported, JWEDecryptionFailed, JWEInvalid, JWSInvalid, JWTInvalid, JWKInvalid, JWKSInvalid, JWKSNoMatchingKey, JWKSMultipleMatchingKeys, JWKSTimeout, JWSSignatureVerificationFailed;
var init_errors = __esm({
  "node_modules/jose/dist/browser/util/errors.js"() {
    JOSEError = class extends Error {
      constructor(message2, options) {
        super(message2, options);
        this.code = "ERR_JOSE_GENERIC";
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
      }
    };
    JOSEError.code = "ERR_JOSE_GENERIC";
    JWTClaimValidationFailed = class extends JOSEError {
      constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
        super(message2, { cause: { claim, reason, payload } });
        this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
      }
    };
    JWTClaimValidationFailed.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    JWTExpired = class extends JOSEError {
      constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
        super(message2, { cause: { claim, reason, payload } });
        this.code = "ERR_JWT_EXPIRED";
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
      }
    };
    JWTExpired.code = "ERR_JWT_EXPIRED";
    JOSEAlgNotAllowed = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
      }
    };
    JOSEAlgNotAllowed.code = "ERR_JOSE_ALG_NOT_ALLOWED";
    JOSENotSupported = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JOSE_NOT_SUPPORTED";
      }
    };
    JOSENotSupported.code = "ERR_JOSE_NOT_SUPPORTED";
    JWEDecryptionFailed = class extends JOSEError {
      constructor(message2 = "decryption operation failed", options) {
        super(message2, options);
        this.code = "ERR_JWE_DECRYPTION_FAILED";
      }
    };
    JWEDecryptionFailed.code = "ERR_JWE_DECRYPTION_FAILED";
    JWEInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWE_INVALID";
      }
    };
    JWEInvalid.code = "ERR_JWE_INVALID";
    JWSInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWS_INVALID";
      }
    };
    JWSInvalid.code = "ERR_JWS_INVALID";
    JWTInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWT_INVALID";
      }
    };
    JWTInvalid.code = "ERR_JWT_INVALID";
    JWKInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWK_INVALID";
      }
    };
    JWKInvalid.code = "ERR_JWK_INVALID";
    JWKSInvalid = class extends JOSEError {
      constructor() {
        super(...arguments);
        this.code = "ERR_JWKS_INVALID";
      }
    };
    JWKSInvalid.code = "ERR_JWKS_INVALID";
    JWKSNoMatchingKey = class extends JOSEError {
      constructor(message2 = "no applicable key found in the JSON Web Key Set", options) {
        super(message2, options);
        this.code = "ERR_JWKS_NO_MATCHING_KEY";
      }
    };
    JWKSNoMatchingKey.code = "ERR_JWKS_NO_MATCHING_KEY";
    JWKSMultipleMatchingKeys = class extends JOSEError {
      constructor(message2 = "multiple matching keys found in the JSON Web Key Set", options) {
        super(message2, options);
        this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
      }
    };
    JWKSMultipleMatchingKeys.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
    JWKSTimeout = class extends JOSEError {
      constructor(message2 = "request timed out", options) {
        super(message2, options);
        this.code = "ERR_JWKS_TIMEOUT";
      }
    };
    JWKSTimeout.code = "ERR_JWKS_TIMEOUT";
    JWSSignatureVerificationFailed = class extends JOSEError {
      constructor(message2 = "signature verification failed", options) {
        super(message2, options);
        this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
      }
    };
    JWSSignatureVerificationFailed.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  }
});

// node_modules/jose/dist/browser/runtime/random.js
var random_default;
var init_random = __esm({
  "node_modules/jose/dist/browser/runtime/random.js"() {
    init_webcrypto();
    random_default = webcrypto_default.getRandomValues.bind(webcrypto_default);
  }
});

// node_modules/jose/dist/browser/lib/iv.js
function bitLength(alg) {
  switch (alg) {
    case "A128GCM":
    case "A128GCMKW":
    case "A192GCM":
    case "A192GCMKW":
    case "A256GCM":
    case "A256GCMKW":
      return 96;
    case "A128CBC-HS256":
    case "A192CBC-HS384":
    case "A256CBC-HS512":
      return 128;
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
  }
}
var iv_default;
var init_iv = __esm({
  "node_modules/jose/dist/browser/lib/iv.js"() {
    init_errors();
    init_random();
    iv_default = (alg) => random_default(new Uint8Array(bitLength(alg) >> 3));
  }
});

// node_modules/jose/dist/browser/lib/check_iv_length.js
var checkIvLength, check_iv_length_default;
var init_check_iv_length = __esm({
  "node_modules/jose/dist/browser/lib/check_iv_length.js"() {
    init_errors();
    init_iv();
    checkIvLength = (enc, iv) => {
      if (iv.length << 3 !== bitLength(enc)) {
        throw new JWEInvalid("Invalid Initialization Vector length");
      }
    };
    check_iv_length_default = checkIvLength;
  }
});

// node_modules/jose/dist/browser/runtime/check_cek_length.js
var checkCekLength, check_cek_length_default;
var init_check_cek_length = __esm({
  "node_modules/jose/dist/browser/runtime/check_cek_length.js"() {
    init_errors();
    checkCekLength = (cek, expected) => {
      const actual = cek.byteLength << 3;
      if (actual !== expected) {
        throw new JWEInvalid(`Invalid Content Encryption Key length. Expected ${expected} bits, got ${actual} bits`);
      }
    };
    check_cek_length_default = checkCekLength;
  }
});

// node_modules/jose/dist/browser/runtime/timing_safe_equal.js
var timingSafeEqual, timing_safe_equal_default;
var init_timing_safe_equal = __esm({
  "node_modules/jose/dist/browser/runtime/timing_safe_equal.js"() {
    timingSafeEqual = (a, b) => {
      if (!(a instanceof Uint8Array)) {
        throw new TypeError("First argument must be a buffer");
      }
      if (!(b instanceof Uint8Array)) {
        throw new TypeError("Second argument must be a buffer");
      }
      if (a.length !== b.length) {
        throw new TypeError("Input buffers must have the same length");
      }
      const len = a.length;
      let out = 0;
      let i = -1;
      while (++i < len) {
        out |= a[i] ^ b[i];
      }
      return out === 0;
    };
    timing_safe_equal_default = timingSafeEqual;
  }
});

// node_modules/jose/dist/browser/lib/crypto_key.js
function unusable(name, prop = "algorithm.name") {
  return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
function isAlgorithm(algorithm, name) {
  return algorithm.name === name;
}
function getHashLength(hash) {
  return parseInt(hash.name.slice(4), 10);
}
function getNamedCurve(alg) {
  switch (alg) {
    case "ES256":
      return "P-256";
    case "ES384":
      return "P-384";
    case "ES512":
      return "P-521";
    default:
      throw new Error("unreachable");
  }
}
function checkUsage(key, usages) {
  if (usages.length && !usages.some((expected) => key.usages.includes(expected))) {
    let msg = "CryptoKey does not support this operation, its usages must include ";
    if (usages.length > 2) {
      const last = usages.pop();
      msg += `one of ${usages.join(", ")}, or ${last}.`;
    } else if (usages.length === 2) {
      msg += `one of ${usages[0]} or ${usages[1]}.`;
    } else {
      msg += `${usages[0]}.`;
    }
    throw new TypeError(msg);
  }
}
function checkSigCryptoKey(key, alg, ...usages) {
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512": {
      if (!isAlgorithm(key.algorithm, "HMAC"))
        throw unusable("HMAC");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "RS256":
    case "RS384":
    case "RS512": {
      if (!isAlgorithm(key.algorithm, "RSASSA-PKCS1-v1_5"))
        throw unusable("RSASSA-PKCS1-v1_5");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "PS256":
    case "PS384":
    case "PS512": {
      if (!isAlgorithm(key.algorithm, "RSA-PSS"))
        throw unusable("RSA-PSS");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "EdDSA": {
      if (key.algorithm.name !== "Ed25519" && key.algorithm.name !== "Ed448") {
        throw unusable("Ed25519 or Ed448");
      }
      break;
    }
    case "Ed25519": {
      if (!isAlgorithm(key.algorithm, "Ed25519"))
        throw unusable("Ed25519");
      break;
    }
    case "ES256":
    case "ES384":
    case "ES512": {
      if (!isAlgorithm(key.algorithm, "ECDSA"))
        throw unusable("ECDSA");
      const expected = getNamedCurve(alg);
      const actual = key.algorithm.namedCurve;
      if (actual !== expected)
        throw unusable(expected, "algorithm.namedCurve");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(key, usages);
}
function checkEncCryptoKey(key, alg, ...usages) {
  switch (alg) {
    case "A128GCM":
    case "A192GCM":
    case "A256GCM": {
      if (!isAlgorithm(key.algorithm, "AES-GCM"))
        throw unusable("AES-GCM");
      const expected = parseInt(alg.slice(1, 4), 10);
      const actual = key.algorithm.length;
      if (actual !== expected)
        throw unusable(expected, "algorithm.length");
      break;
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      if (!isAlgorithm(key.algorithm, "AES-KW"))
        throw unusable("AES-KW");
      const expected = parseInt(alg.slice(1, 4), 10);
      const actual = key.algorithm.length;
      if (actual !== expected)
        throw unusable(expected, "algorithm.length");
      break;
    }
    case "ECDH": {
      switch (key.algorithm.name) {
        case "ECDH":
        case "X25519":
        case "X448":
          break;
        default:
          throw unusable("ECDH, X25519, or X448");
      }
      break;
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW":
      if (!isAlgorithm(key.algorithm, "PBKDF2"))
        throw unusable("PBKDF2");
      break;
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      if (!isAlgorithm(key.algorithm, "RSA-OAEP"))
        throw unusable("RSA-OAEP");
      const expected = parseInt(alg.slice(9), 10) || 1;
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(key, usages);
}
var init_crypto_key = __esm({
  "node_modules/jose/dist/browser/lib/crypto_key.js"() {
  }
});

// node_modules/jose/dist/browser/lib/invalid_key_input.js
function message(msg, actual, ...types2) {
  types2 = types2.filter(Boolean);
  if (types2.length > 2) {
    const last = types2.pop();
    msg += `one of type ${types2.join(", ")}, or ${last}.`;
  } else if (types2.length === 2) {
    msg += `one of type ${types2[0]} or ${types2[1]}.`;
  } else {
    msg += `of type ${types2[0]}.`;
  }
  if (actual == null) {
    msg += ` Received ${actual}`;
  } else if (typeof actual === "function" && actual.name) {
    msg += ` Received function ${actual.name}`;
  } else if (typeof actual === "object" && actual != null) {
    if (actual.constructor?.name) {
      msg += ` Received an instance of ${actual.constructor.name}`;
    }
  }
  return msg;
}
function withAlg(alg, actual, ...types2) {
  return message(`Key for the ${alg} algorithm must be `, actual, ...types2);
}
var invalid_key_input_default;
var init_invalid_key_input = __esm({
  "node_modules/jose/dist/browser/lib/invalid_key_input.js"() {
    invalid_key_input_default = (actual, ...types2) => {
      return message("Key must be ", actual, ...types2);
    };
  }
});

// node_modules/jose/dist/browser/runtime/is_key_like.js
var is_key_like_default, types;
var init_is_key_like = __esm({
  "node_modules/jose/dist/browser/runtime/is_key_like.js"() {
    init_webcrypto();
    is_key_like_default = (key) => {
      if (isCryptoKey(key)) {
        return true;
      }
      return key?.[Symbol.toStringTag] === "KeyObject";
    };
    types = ["CryptoKey"];
  }
});

// node_modules/jose/dist/browser/runtime/decrypt.js
async function cbcDecrypt(enc, cek, ciphertext, iv, tag2, aad) {
  if (!(cek instanceof Uint8Array)) {
    throw new TypeError(invalid_key_input_default(cek, "Uint8Array"));
  }
  const keySize = parseInt(enc.slice(1, 4), 10);
  const encKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(keySize >> 3), "AES-CBC", false, ["decrypt"]);
  const macKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(0, keySize >> 3), {
    hash: `SHA-${keySize << 1}`,
    name: "HMAC"
  }, false, ["sign"]);
  const macData = concat(aad, iv, ciphertext, uint64be(aad.length << 3));
  const expectedTag = new Uint8Array((await webcrypto_default.subtle.sign("HMAC", macKey, macData)).slice(0, keySize >> 3));
  let macCheckPassed;
  try {
    macCheckPassed = timing_safe_equal_default(tag2, expectedTag);
  } catch {
  }
  if (!macCheckPassed) {
    throw new JWEDecryptionFailed();
  }
  let plaintext;
  try {
    plaintext = new Uint8Array(await webcrypto_default.subtle.decrypt({ iv, name: "AES-CBC" }, encKey, ciphertext));
  } catch {
  }
  if (!plaintext) {
    throw new JWEDecryptionFailed();
  }
  return plaintext;
}
async function gcmDecrypt(enc, cek, ciphertext, iv, tag2, aad) {
  let encKey;
  if (cek instanceof Uint8Array) {
    encKey = await webcrypto_default.subtle.importKey("raw", cek, "AES-GCM", false, ["decrypt"]);
  } else {
    checkEncCryptoKey(cek, enc, "decrypt");
    encKey = cek;
  }
  try {
    return new Uint8Array(await webcrypto_default.subtle.decrypt({
      additionalData: aad,
      iv,
      name: "AES-GCM",
      tagLength: 128
    }, encKey, concat(ciphertext, tag2)));
  } catch {
    throw new JWEDecryptionFailed();
  }
}
var decrypt, decrypt_default;
var init_decrypt = __esm({
  "node_modules/jose/dist/browser/runtime/decrypt.js"() {
    init_buffer_utils();
    init_check_iv_length();
    init_check_cek_length();
    init_timing_safe_equal();
    init_errors();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    decrypt = async (enc, cek, ciphertext, iv, tag2, aad) => {
      if (!isCryptoKey(cek) && !(cek instanceof Uint8Array)) {
        throw new TypeError(invalid_key_input_default(cek, ...types, "Uint8Array"));
      }
      if (!iv) {
        throw new JWEInvalid("JWE Initialization Vector missing");
      }
      if (!tag2) {
        throw new JWEInvalid("JWE Authentication Tag missing");
      }
      check_iv_length_default(enc, iv);
      switch (enc) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          if (cek instanceof Uint8Array)
            check_cek_length_default(cek, parseInt(enc.slice(-3), 10));
          return cbcDecrypt(enc, cek, ciphertext, iv, tag2, aad);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          if (cek instanceof Uint8Array)
            check_cek_length_default(cek, parseInt(enc.slice(1, 4), 10));
          return gcmDecrypt(enc, cek, ciphertext, iv, tag2, aad);
        default:
          throw new JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
      }
    };
    decrypt_default = decrypt;
  }
});

// node_modules/jose/dist/browser/lib/is_disjoint.js
var isDisjoint, is_disjoint_default;
var init_is_disjoint = __esm({
  "node_modules/jose/dist/browser/lib/is_disjoint.js"() {
    isDisjoint = (...headers) => {
      const sources = headers.filter(Boolean);
      if (sources.length === 0 || sources.length === 1) {
        return true;
      }
      let acc;
      for (const header of sources) {
        const parameters = Object.keys(header);
        if (!acc || acc.size === 0) {
          acc = new Set(parameters);
          continue;
        }
        for (const parameter of parameters) {
          if (acc.has(parameter)) {
            return false;
          }
          acc.add(parameter);
        }
      }
      return true;
    };
    is_disjoint_default = isDisjoint;
  }
});

// node_modules/jose/dist/browser/lib/is_object.js
function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}
function isObject(input) {
  if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(input) === null) {
    return true;
  }
  let proto = input;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(input) === proto;
}
var init_is_object = __esm({
  "node_modules/jose/dist/browser/lib/is_object.js"() {
  }
});

// node_modules/jose/dist/browser/runtime/bogus.js
var bogusWebCrypto, bogus_default;
var init_bogus = __esm({
  "node_modules/jose/dist/browser/runtime/bogus.js"() {
    bogusWebCrypto = [
      { hash: "SHA-256", name: "HMAC" },
      true,
      ["sign"]
    ];
    bogus_default = bogusWebCrypto;
  }
});

// node_modules/jose/dist/browser/runtime/aeskw.js
function checkKeySize(key, alg) {
  if (key.algorithm.length !== parseInt(alg.slice(1, 4), 10)) {
    throw new TypeError(`Invalid key size for alg: ${alg}`);
  }
}
function getCryptoKey(key, alg, usage) {
  if (isCryptoKey(key)) {
    checkEncCryptoKey(key, alg, usage);
    return key;
  }
  if (key instanceof Uint8Array) {
    return webcrypto_default.subtle.importKey("raw", key, "AES-KW", true, [usage]);
  }
  throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
}
var wrap, unwrap;
var init_aeskw = __esm({
  "node_modules/jose/dist/browser/runtime/aeskw.js"() {
    init_bogus();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    wrap = async (alg, key, cek) => {
      const cryptoKey = await getCryptoKey(key, alg, "wrapKey");
      checkKeySize(cryptoKey, alg);
      const cryptoKeyCek = await webcrypto_default.subtle.importKey("raw", cek, ...bogus_default);
      return new Uint8Array(await webcrypto_default.subtle.wrapKey("raw", cryptoKeyCek, cryptoKey, "AES-KW"));
    };
    unwrap = async (alg, key, encryptedKey) => {
      const cryptoKey = await getCryptoKey(key, alg, "unwrapKey");
      checkKeySize(cryptoKey, alg);
      const cryptoKeyCek = await webcrypto_default.subtle.unwrapKey("raw", encryptedKey, cryptoKey, "AES-KW", ...bogus_default);
      return new Uint8Array(await webcrypto_default.subtle.exportKey("raw", cryptoKeyCek));
    };
  }
});

// node_modules/jose/dist/browser/runtime/ecdhes.js
async function deriveKey(publicKey, privateKey, algorithm, keyLength, apu = new Uint8Array(0), apv = new Uint8Array(0)) {
  if (!isCryptoKey(publicKey)) {
    throw new TypeError(invalid_key_input_default(publicKey, ...types));
  }
  checkEncCryptoKey(publicKey, "ECDH");
  if (!isCryptoKey(privateKey)) {
    throw new TypeError(invalid_key_input_default(privateKey, ...types));
  }
  checkEncCryptoKey(privateKey, "ECDH", "deriveBits");
  const value = concat(lengthAndInput(encoder.encode(algorithm)), lengthAndInput(apu), lengthAndInput(apv), uint32be(keyLength));
  let length;
  if (publicKey.algorithm.name === "X25519") {
    length = 256;
  } else if (publicKey.algorithm.name === "X448") {
    length = 448;
  } else {
    length = Math.ceil(parseInt(publicKey.algorithm.namedCurve.substr(-3), 10) / 8) << 3;
  }
  const sharedSecret = new Uint8Array(await webcrypto_default.subtle.deriveBits({
    name: publicKey.algorithm.name,
    public: publicKey
  }, privateKey, length));
  return concatKdf(sharedSecret, keyLength, value);
}
async function generateEpk(key) {
  if (!isCryptoKey(key)) {
    throw new TypeError(invalid_key_input_default(key, ...types));
  }
  return webcrypto_default.subtle.generateKey(key.algorithm, true, ["deriveBits"]);
}
function ecdhAllowed(key) {
  if (!isCryptoKey(key)) {
    throw new TypeError(invalid_key_input_default(key, ...types));
  }
  return ["P-256", "P-384", "P-521"].includes(key.algorithm.namedCurve) || key.algorithm.name === "X25519" || key.algorithm.name === "X448";
}
var init_ecdhes = __esm({
  "node_modules/jose/dist/browser/runtime/ecdhes.js"() {
    init_buffer_utils();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
  }
});

// node_modules/jose/dist/browser/lib/check_p2s.js
function checkP2s(p2s2) {
  if (!(p2s2 instanceof Uint8Array) || p2s2.length < 8) {
    throw new JWEInvalid("PBES2 Salt Input must be 8 or more octets");
  }
}
var init_check_p2s = __esm({
  "node_modules/jose/dist/browser/lib/check_p2s.js"() {
    init_errors();
  }
});

// node_modules/jose/dist/browser/runtime/pbes2kw.js
function getCryptoKey2(key, alg) {
  if (key instanceof Uint8Array) {
    return webcrypto_default.subtle.importKey("raw", key, "PBKDF2", false, ["deriveBits"]);
  }
  if (isCryptoKey(key)) {
    checkEncCryptoKey(key, alg, "deriveBits", "deriveKey");
    return key;
  }
  throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
}
async function deriveKey2(p2s2, alg, p2c, key) {
  checkP2s(p2s2);
  const salt = p2s(alg, p2s2);
  const keylen = parseInt(alg.slice(13, 16), 10);
  const subtleAlg = {
    hash: `SHA-${alg.slice(8, 11)}`,
    iterations: p2c,
    name: "PBKDF2",
    salt
  };
  const wrapAlg = {
    length: keylen,
    name: "AES-KW"
  };
  const cryptoKey = await getCryptoKey2(key, alg);
  if (cryptoKey.usages.includes("deriveBits")) {
    return new Uint8Array(await webcrypto_default.subtle.deriveBits(subtleAlg, cryptoKey, keylen));
  }
  if (cryptoKey.usages.includes("deriveKey")) {
    return webcrypto_default.subtle.deriveKey(subtleAlg, cryptoKey, wrapAlg, false, ["wrapKey", "unwrapKey"]);
  }
  throw new TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"');
}
var encrypt, decrypt2;
var init_pbes2kw = __esm({
  "node_modules/jose/dist/browser/runtime/pbes2kw.js"() {
    init_random();
    init_buffer_utils();
    init_base64url();
    init_aeskw();
    init_check_p2s();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    encrypt = async (alg, key, cek, p2c = 2048, p2s2 = random_default(new Uint8Array(16))) => {
      const derived = await deriveKey2(p2s2, alg, p2c, key);
      const encryptedKey = await wrap(alg.slice(-6), derived, cek);
      return { encryptedKey, p2c, p2s: encode2(p2s2) };
    };
    decrypt2 = async (alg, key, encryptedKey, p2c, p2s2) => {
      const derived = await deriveKey2(p2s2, alg, p2c, key);
      return unwrap(alg.slice(-6), derived, encryptedKey);
    };
  }
});

// node_modules/jose/dist/browser/runtime/subtle_rsaes.js
function subtleRsaEs(alg) {
  switch (alg) {
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      return "RSA-OAEP";
    default:
      throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
  }
}
var init_subtle_rsaes = __esm({
  "node_modules/jose/dist/browser/runtime/subtle_rsaes.js"() {
    init_errors();
  }
});

// node_modules/jose/dist/browser/runtime/check_key_length.js
var check_key_length_default;
var init_check_key_length = __esm({
  "node_modules/jose/dist/browser/runtime/check_key_length.js"() {
    check_key_length_default = (alg, key) => {
      if (alg.startsWith("RS") || alg.startsWith("PS")) {
        const { modulusLength } = key.algorithm;
        if (typeof modulusLength !== "number" || modulusLength < 2048) {
          throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
        }
      }
    };
  }
});

// node_modules/jose/dist/browser/runtime/rsaes.js
var encrypt2, decrypt3;
var init_rsaes = __esm({
  "node_modules/jose/dist/browser/runtime/rsaes.js"() {
    init_subtle_rsaes();
    init_bogus();
    init_webcrypto();
    init_crypto_key();
    init_check_key_length();
    init_invalid_key_input();
    init_is_key_like();
    encrypt2 = async (alg, key, cek) => {
      if (!isCryptoKey(key)) {
        throw new TypeError(invalid_key_input_default(key, ...types));
      }
      checkEncCryptoKey(key, alg, "encrypt", "wrapKey");
      check_key_length_default(alg, key);
      if (key.usages.includes("encrypt")) {
        return new Uint8Array(await webcrypto_default.subtle.encrypt(subtleRsaEs(alg), key, cek));
      }
      if (key.usages.includes("wrapKey")) {
        const cryptoKeyCek = await webcrypto_default.subtle.importKey("raw", cek, ...bogus_default);
        return new Uint8Array(await webcrypto_default.subtle.wrapKey("raw", cryptoKeyCek, key, subtleRsaEs(alg)));
      }
      throw new TypeError('RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation');
    };
    decrypt3 = async (alg, key, encryptedKey) => {
      if (!isCryptoKey(key)) {
        throw new TypeError(invalid_key_input_default(key, ...types));
      }
      checkEncCryptoKey(key, alg, "decrypt", "unwrapKey");
      check_key_length_default(alg, key);
      if (key.usages.includes("decrypt")) {
        return new Uint8Array(await webcrypto_default.subtle.decrypt(subtleRsaEs(alg), key, encryptedKey));
      }
      if (key.usages.includes("unwrapKey")) {
        const cryptoKeyCek = await webcrypto_default.subtle.unwrapKey("raw", encryptedKey, key, subtleRsaEs(alg), ...bogus_default);
        return new Uint8Array(await webcrypto_default.subtle.exportKey("raw", cryptoKeyCek));
      }
      throw new TypeError('RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation');
    };
  }
});

// node_modules/jose/dist/browser/lib/is_jwk.js
function isJWK(key) {
  return isObject(key) && typeof key.kty === "string";
}
function isPrivateJWK(key) {
  return key.kty !== "oct" && typeof key.d === "string";
}
function isPublicJWK(key) {
  return key.kty !== "oct" && typeof key.d === "undefined";
}
function isSecretJWK(key) {
  return isJWK(key) && key.kty === "oct" && typeof key.k === "string";
}
var init_is_jwk = __esm({
  "node_modules/jose/dist/browser/lib/is_jwk.js"() {
    init_is_object();
  }
});

// node_modules/jose/dist/browser/runtime/jwk_to_key.js
function subtleMapping(jwk) {
  let algorithm;
  let keyUsages;
  switch (jwk.kty) {
    case "RSA": {
      switch (jwk.alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          algorithm = { name: "RSA-PSS", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          algorithm = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
          };
          keyUsages = jwk.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "EC": {
      switch (jwk.alg) {
        case "ES256":
          algorithm = { name: "ECDSA", namedCurve: "P-256" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES384":
          algorithm = { name: "ECDSA", namedCurve: "P-384" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES512":
          algorithm = { name: "ECDSA", namedCurve: "P-521" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: "ECDH", namedCurve: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "OKP": {
      switch (jwk.alg) {
        case "Ed25519":
          algorithm = { name: "Ed25519" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "EdDSA":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
  }
  return { algorithm, keyUsages };
}
var parse, jwk_to_key_default;
var init_jwk_to_key = __esm({
  "node_modules/jose/dist/browser/runtime/jwk_to_key.js"() {
    init_webcrypto();
    init_errors();
    parse = async (jwk) => {
      if (!jwk.alg) {
        throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
      }
      const { algorithm, keyUsages } = subtleMapping(jwk);
      const rest = [
        algorithm,
        jwk.ext ?? false,
        jwk.key_ops ?? keyUsages
      ];
      const keyData = { ...jwk };
      delete keyData.alg;
      delete keyData.use;
      return webcrypto_default.subtle.importKey("jwk", keyData, ...rest);
    };
    jwk_to_key_default = parse;
  }
});

// node_modules/jose/dist/browser/runtime/normalize_key.js
var exportKeyValue, privCache, pubCache, isKeyObject, importAndCache, normalizePublicKey, normalizePrivateKey, normalize_key_default;
var init_normalize_key = __esm({
  "node_modules/jose/dist/browser/runtime/normalize_key.js"() {
    init_is_jwk();
    init_base64url();
    init_jwk_to_key();
    exportKeyValue = (k) => decode2(k);
    isKeyObject = (key) => {
      return key?.[Symbol.toStringTag] === "KeyObject";
    };
    importAndCache = async (cache, key, jwk, alg, freeze = false) => {
      let cached = cache.get(key);
      if (cached?.[alg]) {
        return cached[alg];
      }
      const cryptoKey = await jwk_to_key_default({ ...jwk, alg });
      if (freeze)
        Object.freeze(key);
      if (!cached) {
        cache.set(key, { [alg]: cryptoKey });
      } else {
        cached[alg] = cryptoKey;
      }
      return cryptoKey;
    };
    normalizePublicKey = (key, alg) => {
      if (isKeyObject(key)) {
        let jwk = key.export({ format: "jwk" });
        delete jwk.d;
        delete jwk.dp;
        delete jwk.dq;
        delete jwk.p;
        delete jwk.q;
        delete jwk.qi;
        if (jwk.k) {
          return exportKeyValue(jwk.k);
        }
        pubCache || (pubCache = /* @__PURE__ */ new WeakMap());
        return importAndCache(pubCache, key, jwk, alg);
      }
      if (isJWK(key)) {
        if (key.k)
          return decode2(key.k);
        pubCache || (pubCache = /* @__PURE__ */ new WeakMap());
        const cryptoKey = importAndCache(pubCache, key, key, alg, true);
        return cryptoKey;
      }
      return key;
    };
    normalizePrivateKey = (key, alg) => {
      if (isKeyObject(key)) {
        let jwk = key.export({ format: "jwk" });
        if (jwk.k) {
          return exportKeyValue(jwk.k);
        }
        privCache || (privCache = /* @__PURE__ */ new WeakMap());
        return importAndCache(privCache, key, jwk, alg);
      }
      if (isJWK(key)) {
        if (key.k)
          return decode2(key.k);
        privCache || (privCache = /* @__PURE__ */ new WeakMap());
        const cryptoKey = importAndCache(privCache, key, key, alg, true);
        return cryptoKey;
      }
      return key;
    };
    normalize_key_default = { normalizePublicKey, normalizePrivateKey };
  }
});

// node_modules/jose/dist/browser/lib/cek.js
function bitLength2(alg) {
  switch (alg) {
    case "A128GCM":
      return 128;
    case "A192GCM":
      return 192;
    case "A256GCM":
    case "A128CBC-HS256":
      return 256;
    case "A192CBC-HS384":
      return 384;
    case "A256CBC-HS512":
      return 512;
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg}`);
  }
}
var cek_default;
var init_cek = __esm({
  "node_modules/jose/dist/browser/lib/cek.js"() {
    init_errors();
    init_random();
    cek_default = (alg) => random_default(new Uint8Array(bitLength2(alg) >> 3));
  }
});

// node_modules/jose/dist/browser/lib/format_pem.js
var format_pem_default;
var init_format_pem = __esm({
  "node_modules/jose/dist/browser/lib/format_pem.js"() {
    format_pem_default = (b64, descriptor) => {
      const newlined = (b64.match(/.{1,64}/g) || []).join("\n");
      return `-----BEGIN ${descriptor}-----
${newlined}
-----END ${descriptor}-----`;
    };
  }
});

// node_modules/jose/dist/browser/runtime/asn1.js
function getElement(seq) {
  const result = [];
  let next = 0;
  while (next < seq.length) {
    const nextPart = parseElement(seq.subarray(next));
    result.push(nextPart);
    next += nextPart.byteLength;
  }
  return result;
}
function parseElement(bytes) {
  let position = 0;
  let tag2 = bytes[0] & 31;
  position++;
  if (tag2 === 31) {
    tag2 = 0;
    while (bytes[position] >= 128) {
      tag2 = tag2 * 128 + bytes[position] - 128;
      position++;
    }
    tag2 = tag2 * 128 + bytes[position] - 128;
    position++;
  }
  let length = 0;
  if (bytes[position] < 128) {
    length = bytes[position];
    position++;
  } else if (length === 128) {
    length = 0;
    while (bytes[position + length] !== 0 || bytes[position + length + 1] !== 0) {
      if (length > bytes.byteLength) {
        throw new TypeError("invalid indefinite form length");
      }
      length++;
    }
    const byteLength2 = position + length + 2;
    return {
      byteLength: byteLength2,
      contents: bytes.subarray(position, position + length),
      raw: bytes.subarray(0, byteLength2)
    };
  } else {
    const numberOfDigits = bytes[position] & 127;
    position++;
    length = 0;
    for (let i = 0; i < numberOfDigits; i++) {
      length = length * 256 + bytes[position];
      position++;
    }
  }
  const byteLength = position + length;
  return {
    byteLength,
    contents: bytes.subarray(position, byteLength),
    raw: bytes.subarray(0, byteLength)
  };
}
function spkiFromX509(buf) {
  const tbsCertificate = getElement(getElement(parseElement(buf).contents)[0].contents);
  return encodeBase64(tbsCertificate[tbsCertificate[0].raw[0] === 160 ? 6 : 5].raw);
}
function getSPKI(x509) {
  const pem = x509.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s)/g, "");
  const raw = decodeBase64(pem);
  return format_pem_default(spkiFromX509(raw), "PUBLIC KEY");
}
var genericExport, toSPKI, toPKCS8, findOid, getNamedCurve2, genericImport, fromPKCS8, fromSPKI, fromX509;
var init_asn1 = __esm({
  "node_modules/jose/dist/browser/runtime/asn1.js"() {
    init_webcrypto();
    init_invalid_key_input();
    init_base64url();
    init_format_pem();
    init_errors();
    init_is_key_like();
    genericExport = async (keyType, keyFormat, key) => {
      if (!isCryptoKey(key)) {
        throw new TypeError(invalid_key_input_default(key, ...types));
      }
      if (!key.extractable) {
        throw new TypeError("CryptoKey is not extractable");
      }
      if (key.type !== keyType) {
        throw new TypeError(`key is not a ${keyType} key`);
      }
      return format_pem_default(encodeBase64(new Uint8Array(await webcrypto_default.subtle.exportKey(keyFormat, key))), `${keyType.toUpperCase()} KEY`);
    };
    toSPKI = (key) => {
      return genericExport("public", "spki", key);
    };
    toPKCS8 = (key) => {
      return genericExport("private", "pkcs8", key);
    };
    findOid = (keyData, oid, from2 = 0) => {
      if (from2 === 0) {
        oid.unshift(oid.length);
        oid.unshift(6);
      }
      const i = keyData.indexOf(oid[0], from2);
      if (i === -1)
        return false;
      const sub = keyData.subarray(i, i + oid.length);
      if (sub.length !== oid.length)
        return false;
      return sub.every((value, index) => value === oid[index]) || findOid(keyData, oid, i + 1);
    };
    getNamedCurve2 = (keyData) => {
      switch (true) {
        case findOid(keyData, [42, 134, 72, 206, 61, 3, 1, 7]):
          return "P-256";
        case findOid(keyData, [43, 129, 4, 0, 34]):
          return "P-384";
        case findOid(keyData, [43, 129, 4, 0, 35]):
          return "P-521";
        case findOid(keyData, [43, 101, 110]):
          return "X25519";
        case findOid(keyData, [43, 101, 111]):
          return "X448";
        case findOid(keyData, [43, 101, 112]):
          return "Ed25519";
        case findOid(keyData, [43, 101, 113]):
          return "Ed448";
        default:
          throw new JOSENotSupported("Invalid or unsupported EC Key Curve or OKP Key Sub Type");
      }
    };
    genericImport = async (replace, keyFormat, pem, alg, options) => {
      let algorithm;
      let keyUsages;
      const keyData = new Uint8Array(atob(pem.replace(replace, "")).split("").map((c) => c.charCodeAt(0)));
      const isPublic = keyFormat === "spki";
      switch (alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          algorithm = { name: "RSA-PSS", hash: `SHA-${alg.slice(-3)}` };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${alg.slice(-3)}` };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          algorithm = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(alg.slice(-3), 10) || 1}`
          };
          keyUsages = isPublic ? ["encrypt", "wrapKey"] : ["decrypt", "unwrapKey"];
          break;
        case "ES256":
          algorithm = { name: "ECDSA", namedCurve: "P-256" };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        case "ES384":
          algorithm = { name: "ECDSA", namedCurve: "P-384" };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        case "ES512":
          algorithm = { name: "ECDSA", namedCurve: "P-521" };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW": {
          const namedCurve = getNamedCurve2(keyData);
          algorithm = namedCurve.startsWith("P-") ? { name: "ECDH", namedCurve } : { name: namedCurve };
          keyUsages = isPublic ? [] : ["deriveBits"];
          break;
        }
        case "Ed25519":
          algorithm = { name: "Ed25519" };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        case "EdDSA":
          algorithm = { name: getNamedCurve2(keyData) };
          keyUsages = isPublic ? ["verify"] : ["sign"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported "alg" (Algorithm) value');
      }
      return webcrypto_default.subtle.importKey(keyFormat, keyData, algorithm, options?.extractable ?? false, keyUsages);
    };
    fromPKCS8 = (pem, alg, options) => {
      return genericImport(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, "pkcs8", pem, alg, options);
    };
    fromSPKI = (pem, alg, options) => {
      return genericImport(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, "spki", pem, alg, options);
    };
    fromX509 = (pem, alg, options) => {
      let spki;
      try {
        spki = getSPKI(pem);
      } catch (cause) {
        throw new TypeError("Failed to parse the X.509 certificate", { cause });
      }
      return fromSPKI(spki, alg, options);
    };
  }
});

// node_modules/jose/dist/browser/key/import.js
async function importSPKI(spki, alg, options) {
  if (typeof spki !== "string" || spki.indexOf("-----BEGIN PUBLIC KEY-----") !== 0) {
    throw new TypeError('"spki" must be SPKI formatted string');
  }
  return fromSPKI(spki, alg, options);
}
async function importX509(x509, alg, options) {
  if (typeof x509 !== "string" || x509.indexOf("-----BEGIN CERTIFICATE-----") !== 0) {
    throw new TypeError('"x509" must be X.509 formatted string');
  }
  return fromX509(x509, alg, options);
}
async function importPKCS8(pkcs8, alg, options) {
  if (typeof pkcs8 !== "string" || pkcs8.indexOf("-----BEGIN PRIVATE KEY-----") !== 0) {
    throw new TypeError('"pkcs8" must be PKCS#8 formatted string');
  }
  return fromPKCS8(pkcs8, alg, options);
}
async function importJWK(jwk, alg) {
  if (!isObject(jwk)) {
    throw new TypeError("JWK must be an object");
  }
  alg || (alg = jwk.alg);
  switch (jwk.kty) {
    case "oct":
      if (typeof jwk.k !== "string" || !jwk.k) {
        throw new TypeError('missing "k" (Key Value) Parameter value');
      }
      return decode2(jwk.k);
    case "RSA":
      if ("oth" in jwk && jwk.oth !== void 0) {
        throw new JOSENotSupported('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
      }
    case "EC":
    case "OKP":
      return jwk_to_key_default({ ...jwk, alg });
    default:
      throw new JOSENotSupported('Unsupported "kty" (Key Type) Parameter value');
  }
}
var init_import = __esm({
  "node_modules/jose/dist/browser/key/import.js"() {
    init_base64url();
    init_asn1();
    init_jwk_to_key();
    init_errors();
    init_is_object();
  }
});

// node_modules/jose/dist/browser/lib/check_key_type.js
function checkKeyType(allowJwk, alg, key, usage) {
  const symmetric = alg.startsWith("HS") || alg === "dir" || alg.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(alg);
  if (symmetric) {
    symmetricTypeCheck(alg, key, usage, allowJwk);
  } else {
    asymmetricTypeCheck(alg, key, usage, allowJwk);
  }
}
var tag, jwkMatchesOp, symmetricTypeCheck, asymmetricTypeCheck, check_key_type_default, checkKeyTypeWithJwk;
var init_check_key_type = __esm({
  "node_modules/jose/dist/browser/lib/check_key_type.js"() {
    init_invalid_key_input();
    init_is_key_like();
    init_is_jwk();
    tag = (key) => key?.[Symbol.toStringTag];
    jwkMatchesOp = (alg, key, usage) => {
      if (key.use !== void 0 && key.use !== "sig") {
        throw new TypeError("Invalid key for this operation, when present its use must be sig");
      }
      if (key.key_ops !== void 0 && key.key_ops.includes?.(usage) !== true) {
        throw new TypeError(`Invalid key for this operation, when present its key_ops must include ${usage}`);
      }
      if (key.alg !== void 0 && key.alg !== alg) {
        throw new TypeError(`Invalid key for this operation, when present its alg must be ${alg}`);
      }
      return true;
    };
    symmetricTypeCheck = (alg, key, usage, allowJwk) => {
      if (key instanceof Uint8Array)
        return;
      if (allowJwk && isJWK(key)) {
        if (isSecretJWK(key) && jwkMatchesOp(alg, key, usage))
          return;
        throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
      }
      if (!is_key_like_default(key)) {
        throw new TypeError(withAlg(alg, key, ...types, "Uint8Array", allowJwk ? "JSON Web Key" : null));
      }
      if (key.type !== "secret") {
        throw new TypeError(`${tag(key)} instances for symmetric algorithms must be of type "secret"`);
      }
    };
    asymmetricTypeCheck = (alg, key, usage, allowJwk) => {
      if (allowJwk && isJWK(key)) {
        switch (usage) {
          case "sign":
            if (isPrivateJWK(key) && jwkMatchesOp(alg, key, usage))
              return;
            throw new TypeError(`JSON Web Key for this operation be a private JWK`);
          case "verify":
            if (isPublicJWK(key) && jwkMatchesOp(alg, key, usage))
              return;
            throw new TypeError(`JSON Web Key for this operation be a public JWK`);
        }
      }
      if (!is_key_like_default(key)) {
        throw new TypeError(withAlg(alg, key, ...types, allowJwk ? "JSON Web Key" : null));
      }
      if (key.type === "secret") {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithms must not be of type "secret"`);
      }
      if (usage === "sign" && key.type === "public") {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm signing must be of type "private"`);
      }
      if (usage === "decrypt" && key.type === "public") {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm decryption must be of type "private"`);
      }
      if (key.algorithm && usage === "verify" && key.type === "private") {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm verifying must be of type "public"`);
      }
      if (key.algorithm && usage === "encrypt" && key.type === "private") {
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm encryption must be of type "public"`);
      }
    };
    check_key_type_default = checkKeyType.bind(void 0, false);
    checkKeyTypeWithJwk = checkKeyType.bind(void 0, true);
  }
});

// node_modules/jose/dist/browser/runtime/encrypt.js
async function cbcEncrypt(enc, plaintext, cek, iv, aad) {
  if (!(cek instanceof Uint8Array)) {
    throw new TypeError(invalid_key_input_default(cek, "Uint8Array"));
  }
  const keySize = parseInt(enc.slice(1, 4), 10);
  const encKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(keySize >> 3), "AES-CBC", false, ["encrypt"]);
  const macKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(0, keySize >> 3), {
    hash: `SHA-${keySize << 1}`,
    name: "HMAC"
  }, false, ["sign"]);
  const ciphertext = new Uint8Array(await webcrypto_default.subtle.encrypt({
    iv,
    name: "AES-CBC"
  }, encKey, plaintext));
  const macData = concat(aad, iv, ciphertext, uint64be(aad.length << 3));
  const tag2 = new Uint8Array((await webcrypto_default.subtle.sign("HMAC", macKey, macData)).slice(0, keySize >> 3));
  return { ciphertext, tag: tag2, iv };
}
async function gcmEncrypt(enc, plaintext, cek, iv, aad) {
  let encKey;
  if (cek instanceof Uint8Array) {
    encKey = await webcrypto_default.subtle.importKey("raw", cek, "AES-GCM", false, ["encrypt"]);
  } else {
    checkEncCryptoKey(cek, enc, "encrypt");
    encKey = cek;
  }
  const encrypted = new Uint8Array(await webcrypto_default.subtle.encrypt({
    additionalData: aad,
    iv,
    name: "AES-GCM",
    tagLength: 128
  }, encKey, plaintext));
  const tag2 = encrypted.slice(-16);
  const ciphertext = encrypted.slice(0, -16);
  return { ciphertext, tag: tag2, iv };
}
var encrypt3, encrypt_default;
var init_encrypt = __esm({
  "node_modules/jose/dist/browser/runtime/encrypt.js"() {
    init_buffer_utils();
    init_check_iv_length();
    init_check_cek_length();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_iv();
    init_errors();
    init_is_key_like();
    encrypt3 = async (enc, plaintext, cek, iv, aad) => {
      if (!isCryptoKey(cek) && !(cek instanceof Uint8Array)) {
        throw new TypeError(invalid_key_input_default(cek, ...types, "Uint8Array"));
      }
      if (iv) {
        check_iv_length_default(enc, iv);
      } else {
        iv = iv_default(enc);
      }
      switch (enc) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          if (cek instanceof Uint8Array) {
            check_cek_length_default(cek, parseInt(enc.slice(-3), 10));
          }
          return cbcEncrypt(enc, plaintext, cek, iv, aad);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          if (cek instanceof Uint8Array) {
            check_cek_length_default(cek, parseInt(enc.slice(1, 4), 10));
          }
          return gcmEncrypt(enc, plaintext, cek, iv, aad);
        default:
          throw new JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
      }
    };
    encrypt_default = encrypt3;
  }
});

// node_modules/jose/dist/browser/lib/aesgcmkw.js
async function wrap2(alg, key, cek, iv) {
  const jweAlgorithm = alg.slice(0, 7);
  const wrapped = await encrypt_default(jweAlgorithm, cek, key, iv, new Uint8Array(0));
  return {
    encryptedKey: wrapped.ciphertext,
    iv: encode2(wrapped.iv),
    tag: encode2(wrapped.tag)
  };
}
async function unwrap2(alg, key, encryptedKey, iv, tag2) {
  const jweAlgorithm = alg.slice(0, 7);
  return decrypt_default(jweAlgorithm, key, encryptedKey, iv, tag2, new Uint8Array(0));
}
var init_aesgcmkw = __esm({
  "node_modules/jose/dist/browser/lib/aesgcmkw.js"() {
    init_encrypt();
    init_decrypt();
    init_base64url();
  }
});

// node_modules/jose/dist/browser/lib/decrypt_key_management.js
async function decryptKeyManagement(alg, key, encryptedKey, joseHeader, options) {
  check_key_type_default(alg, key, "decrypt");
  key = await normalize_key_default.normalizePrivateKey?.(key, alg) || key;
  switch (alg) {
    case "dir": {
      if (encryptedKey !== void 0)
        throw new JWEInvalid("Encountered unexpected JWE Encrypted Key");
      return key;
    }
    case "ECDH-ES":
      if (encryptedKey !== void 0)
        throw new JWEInvalid("Encountered unexpected JWE Encrypted Key");
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      if (!isObject(joseHeader.epk))
        throw new JWEInvalid(`JOSE Header "epk" (Ephemeral Public Key) missing or invalid`);
      if (!ecdhAllowed(key))
        throw new JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
      const epk = await importJWK(joseHeader.epk, alg);
      let partyUInfo;
      let partyVInfo;
      if (joseHeader.apu !== void 0) {
        if (typeof joseHeader.apu !== "string")
          throw new JWEInvalid(`JOSE Header "apu" (Agreement PartyUInfo) invalid`);
        try {
          partyUInfo = decode2(joseHeader.apu);
        } catch {
          throw new JWEInvalid("Failed to base64url decode the apu");
        }
      }
      if (joseHeader.apv !== void 0) {
        if (typeof joseHeader.apv !== "string")
          throw new JWEInvalid(`JOSE Header "apv" (Agreement PartyVInfo) invalid`);
        try {
          partyVInfo = decode2(joseHeader.apv);
        } catch {
          throw new JWEInvalid("Failed to base64url decode the apv");
        }
      }
      const sharedSecret = await deriveKey(epk, key, alg === "ECDH-ES" ? joseHeader.enc : alg, alg === "ECDH-ES" ? bitLength2(joseHeader.enc) : parseInt(alg.slice(-5, -2), 10), partyUInfo, partyVInfo);
      if (alg === "ECDH-ES")
        return sharedSecret;
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return unwrap(alg.slice(-6), sharedSecret, encryptedKey);
    }
    case "RSA1_5":
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return decrypt3(alg, key, encryptedKey);
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      if (typeof joseHeader.p2c !== "number")
        throw new JWEInvalid(`JOSE Header "p2c" (PBES2 Count) missing or invalid`);
      const p2cLimit = options?.maxPBES2Count || 1e4;
      if (joseHeader.p2c > p2cLimit)
        throw new JWEInvalid(`JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds`);
      if (typeof joseHeader.p2s !== "string")
        throw new JWEInvalid(`JOSE Header "p2s" (PBES2 Salt) missing or invalid`);
      let p2s2;
      try {
        p2s2 = decode2(joseHeader.p2s);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the p2s");
      }
      return decrypt2(alg, key, encryptedKey, joseHeader.p2c, p2s2);
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return unwrap(alg, key, encryptedKey);
    }
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      if (typeof joseHeader.iv !== "string")
        throw new JWEInvalid(`JOSE Header "iv" (Initialization Vector) missing or invalid`);
      if (typeof joseHeader.tag !== "string")
        throw new JWEInvalid(`JOSE Header "tag" (Authentication Tag) missing or invalid`);
      let iv;
      try {
        iv = decode2(joseHeader.iv);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the iv");
      }
      let tag2;
      try {
        tag2 = decode2(joseHeader.tag);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the tag");
      }
      return unwrap2(alg, key, encryptedKey, iv, tag2);
    }
    default: {
      throw new JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
    }
  }
}
var decrypt_key_management_default;
var init_decrypt_key_management = __esm({
  "node_modules/jose/dist/browser/lib/decrypt_key_management.js"() {
    init_aeskw();
    init_ecdhes();
    init_pbes2kw();
    init_rsaes();
    init_base64url();
    init_normalize_key();
    init_errors();
    init_cek();
    init_import();
    init_check_key_type();
    init_is_object();
    init_aesgcmkw();
    decrypt_key_management_default = decryptKeyManagement;
  }
});

// node_modules/jose/dist/browser/lib/validate_crit.js
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
  if (joseHeader.crit !== void 0 && protectedHeader?.crit === void 0) {
    throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
  }
  if (!protectedHeader || protectedHeader.crit === void 0) {
    return /* @__PURE__ */ new Set();
  }
  if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input !== "string" || input.length === 0)) {
    throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  }
  let recognized;
  if (recognizedOption !== void 0) {
    recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
  } else {
    recognized = recognizedDefault;
  }
  for (const parameter of protectedHeader.crit) {
    if (!recognized.has(parameter)) {
      throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
    }
    if (joseHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" is missing`);
    }
    if (recognized.get(parameter) && protectedHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
    }
  }
  return new Set(protectedHeader.crit);
}
var validate_crit_default;
var init_validate_crit = __esm({
  "node_modules/jose/dist/browser/lib/validate_crit.js"() {
    init_errors();
    validate_crit_default = validateCrit;
  }
});

// node_modules/jose/dist/browser/lib/validate_algorithms.js
var validateAlgorithms, validate_algorithms_default;
var init_validate_algorithms = __esm({
  "node_modules/jose/dist/browser/lib/validate_algorithms.js"() {
    validateAlgorithms = (option, algorithms) => {
      if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string"))) {
        throw new TypeError(`"${option}" option must be an array of strings`);
      }
      if (!algorithms) {
        return void 0;
      }
      return new Set(algorithms);
    };
    validate_algorithms_default = validateAlgorithms;
  }
});

// node_modules/jose/dist/browser/jwe/flattened/decrypt.js
async function flattenedDecrypt(jwe, key, options) {
  if (!isObject(jwe)) {
    throw new JWEInvalid("Flattened JWE must be an object");
  }
  if (jwe.protected === void 0 && jwe.header === void 0 && jwe.unprotected === void 0) {
    throw new JWEInvalid("JOSE Header missing");
  }
  if (jwe.iv !== void 0 && typeof jwe.iv !== "string") {
    throw new JWEInvalid("JWE Initialization Vector incorrect type");
  }
  if (typeof jwe.ciphertext !== "string") {
    throw new JWEInvalid("JWE Ciphertext missing or incorrect type");
  }
  if (jwe.tag !== void 0 && typeof jwe.tag !== "string") {
    throw new JWEInvalid("JWE Authentication Tag incorrect type");
  }
  if (jwe.protected !== void 0 && typeof jwe.protected !== "string") {
    throw new JWEInvalid("JWE Protected Header incorrect type");
  }
  if (jwe.encrypted_key !== void 0 && typeof jwe.encrypted_key !== "string") {
    throw new JWEInvalid("JWE Encrypted Key incorrect type");
  }
  if (jwe.aad !== void 0 && typeof jwe.aad !== "string") {
    throw new JWEInvalid("JWE AAD incorrect type");
  }
  if (jwe.header !== void 0 && !isObject(jwe.header)) {
    throw new JWEInvalid("JWE Shared Unprotected Header incorrect type");
  }
  if (jwe.unprotected !== void 0 && !isObject(jwe.unprotected)) {
    throw new JWEInvalid("JWE Per-Recipient Unprotected Header incorrect type");
  }
  let parsedProt;
  if (jwe.protected) {
    try {
      const protectedHeader2 = decode2(jwe.protected);
      parsedProt = JSON.parse(decoder.decode(protectedHeader2));
    } catch {
      throw new JWEInvalid("JWE Protected Header is invalid");
    }
  }
  if (!is_disjoint_default(parsedProt, jwe.header, jwe.unprotected)) {
    throw new JWEInvalid("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
  }
  const joseHeader = {
    ...parsedProt,
    ...jwe.header,
    ...jwe.unprotected
  };
  validate_crit_default(JWEInvalid, /* @__PURE__ */ new Map(), options?.crit, parsedProt, joseHeader);
  if (joseHeader.zip !== void 0) {
    throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
  }
  const { alg, enc } = joseHeader;
  if (typeof alg !== "string" || !alg) {
    throw new JWEInvalid("missing JWE Algorithm (alg) in JWE Header");
  }
  if (typeof enc !== "string" || !enc) {
    throw new JWEInvalid("missing JWE Encryption Algorithm (enc) in JWE Header");
  }
  const keyManagementAlgorithms = options && validate_algorithms_default("keyManagementAlgorithms", options.keyManagementAlgorithms);
  const contentEncryptionAlgorithms = options && validate_algorithms_default("contentEncryptionAlgorithms", options.contentEncryptionAlgorithms);
  if (keyManagementAlgorithms && !keyManagementAlgorithms.has(alg) || !keyManagementAlgorithms && alg.startsWith("PBES2")) {
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
  }
  if (contentEncryptionAlgorithms && !contentEncryptionAlgorithms.has(enc)) {
    throw new JOSEAlgNotAllowed('"enc" (Encryption Algorithm) Header Parameter value not allowed');
  }
  let encryptedKey;
  if (jwe.encrypted_key !== void 0) {
    try {
      encryptedKey = decode2(jwe.encrypted_key);
    } catch {
      throw new JWEInvalid("Failed to base64url decode the encrypted_key");
    }
  }
  let resolvedKey = false;
  if (typeof key === "function") {
    key = await key(parsedProt, jwe);
    resolvedKey = true;
  }
  let cek;
  try {
    cek = await decrypt_key_management_default(alg, key, encryptedKey, joseHeader, options);
  } catch (err) {
    if (err instanceof TypeError || err instanceof JWEInvalid || err instanceof JOSENotSupported) {
      throw err;
    }
    cek = cek_default(enc);
  }
  let iv;
  let tag2;
  if (jwe.iv !== void 0) {
    try {
      iv = decode2(jwe.iv);
    } catch {
      throw new JWEInvalid("Failed to base64url decode the iv");
    }
  }
  if (jwe.tag !== void 0) {
    try {
      tag2 = decode2(jwe.tag);
    } catch {
      throw new JWEInvalid("Failed to base64url decode the tag");
    }
  }
  const protectedHeader = encoder.encode(jwe.protected ?? "");
  let additionalData;
  if (jwe.aad !== void 0) {
    additionalData = concat(protectedHeader, encoder.encode("."), encoder.encode(jwe.aad));
  } else {
    additionalData = protectedHeader;
  }
  let ciphertext;
  try {
    ciphertext = decode2(jwe.ciphertext);
  } catch {
    throw new JWEInvalid("Failed to base64url decode the ciphertext");
  }
  const plaintext = await decrypt_default(enc, cek, ciphertext, iv, tag2, additionalData);
  const result = { plaintext };
  if (jwe.protected !== void 0) {
    result.protectedHeader = parsedProt;
  }
  if (jwe.aad !== void 0) {
    try {
      result.additionalAuthenticatedData = decode2(jwe.aad);
    } catch {
      throw new JWEInvalid("Failed to base64url decode the aad");
    }
  }
  if (jwe.unprotected !== void 0) {
    result.sharedUnprotectedHeader = jwe.unprotected;
  }
  if (jwe.header !== void 0) {
    result.unprotectedHeader = jwe.header;
  }
  if (resolvedKey) {
    return { ...result, key };
  }
  return result;
}
var init_decrypt2 = __esm({
  "node_modules/jose/dist/browser/jwe/flattened/decrypt.js"() {
    init_base64url();
    init_decrypt();
    init_errors();
    init_is_disjoint();
    init_is_object();
    init_decrypt_key_management();
    init_buffer_utils();
    init_cek();
    init_validate_crit();
    init_validate_algorithms();
  }
});

// node_modules/jose/dist/browser/jwe/compact/decrypt.js
async function compactDecrypt(jwe, key, options) {
  if (jwe instanceof Uint8Array) {
    jwe = decoder.decode(jwe);
  }
  if (typeof jwe !== "string") {
    throw new JWEInvalid("Compact JWE must be a string or Uint8Array");
  }
  const { 0: protectedHeader, 1: encryptedKey, 2: iv, 3: ciphertext, 4: tag2, length } = jwe.split(".");
  if (length !== 5) {
    throw new JWEInvalid("Invalid Compact JWE");
  }
  const decrypted = await flattenedDecrypt({
    ciphertext,
    iv: iv || void 0,
    protected: protectedHeader,
    tag: tag2 || void 0,
    encrypted_key: encryptedKey || void 0
  }, key, options);
  const result = { plaintext: decrypted.plaintext, protectedHeader: decrypted.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: decrypted.key };
  }
  return result;
}
var init_decrypt3 = __esm({
  "node_modules/jose/dist/browser/jwe/compact/decrypt.js"() {
    init_decrypt2();
    init_errors();
    init_buffer_utils();
  }
});

// node_modules/jose/dist/browser/jwe/general/decrypt.js
async function generalDecrypt(jwe, key, options) {
  if (!isObject(jwe)) {
    throw new JWEInvalid("General JWE must be an object");
  }
  if (!Array.isArray(jwe.recipients) || !jwe.recipients.every(isObject)) {
    throw new JWEInvalid("JWE Recipients missing or incorrect type");
  }
  if (!jwe.recipients.length) {
    throw new JWEInvalid("JWE Recipients has no members");
  }
  for (const recipient of jwe.recipients) {
    try {
      return await flattenedDecrypt({
        aad: jwe.aad,
        ciphertext: jwe.ciphertext,
        encrypted_key: recipient.encrypted_key,
        header: recipient.header,
        iv: jwe.iv,
        protected: jwe.protected,
        tag: jwe.tag,
        unprotected: jwe.unprotected
      }, key, options);
    } catch {
    }
  }
  throw new JWEDecryptionFailed();
}
var init_decrypt4 = __esm({
  "node_modules/jose/dist/browser/jwe/general/decrypt.js"() {
    init_decrypt2();
    init_errors();
    init_is_object();
  }
});

// node_modules/jose/dist/browser/lib/private_symbols.js
var unprotected;
var init_private_symbols = __esm({
  "node_modules/jose/dist/browser/lib/private_symbols.js"() {
    unprotected = Symbol();
  }
});

// node_modules/jose/dist/browser/runtime/key_to_jwk.js
var keyToJWK, key_to_jwk_default;
var init_key_to_jwk = __esm({
  "node_modules/jose/dist/browser/runtime/key_to_jwk.js"() {
    init_webcrypto();
    init_invalid_key_input();
    init_base64url();
    init_is_key_like();
    keyToJWK = async (key) => {
      if (key instanceof Uint8Array) {
        return {
          kty: "oct",
          k: encode2(key)
        };
      }
      if (!isCryptoKey(key)) {
        throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
      }
      if (!key.extractable) {
        throw new TypeError("non-extractable CryptoKey cannot be exported as a JWK");
      }
      const { ext, key_ops, alg, use, ...jwk } = await webcrypto_default.subtle.exportKey("jwk", key);
      return jwk;
    };
    key_to_jwk_default = keyToJWK;
  }
});

// node_modules/jose/dist/browser/key/export.js
async function exportSPKI(key) {
  return toSPKI(key);
}
async function exportPKCS8(key) {
  return toPKCS8(key);
}
async function exportJWK(key) {
  return key_to_jwk_default(key);
}
var init_export = __esm({
  "node_modules/jose/dist/browser/key/export.js"() {
    init_asn1();
    init_asn1();
    init_key_to_jwk();
  }
});

// node_modules/jose/dist/browser/lib/encrypt_key_management.js
async function encryptKeyManagement(alg, enc, key, providedCek, providedParameters = {}) {
  let encryptedKey;
  let parameters;
  let cek;
  check_key_type_default(alg, key, "encrypt");
  key = await normalize_key_default.normalizePublicKey?.(key, alg) || key;
  switch (alg) {
    case "dir": {
      cek = key;
      break;
    }
    case "ECDH-ES":
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      if (!ecdhAllowed(key)) {
        throw new JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
      }
      const { apu, apv } = providedParameters;
      let { epk: ephemeralKey } = providedParameters;
      ephemeralKey || (ephemeralKey = (await generateEpk(key)).privateKey);
      const { x, y, crv, kty } = await exportJWK(ephemeralKey);
      const sharedSecret = await deriveKey(key, ephemeralKey, alg === "ECDH-ES" ? enc : alg, alg === "ECDH-ES" ? bitLength2(enc) : parseInt(alg.slice(-5, -2), 10), apu, apv);
      parameters = { epk: { x, crv, kty } };
      if (kty === "EC")
        parameters.epk.y = y;
      if (apu)
        parameters.apu = encode2(apu);
      if (apv)
        parameters.apv = encode2(apv);
      if (alg === "ECDH-ES") {
        cek = sharedSecret;
        break;
      }
      cek = providedCek || cek_default(enc);
      const kwAlg = alg.slice(-6);
      encryptedKey = await wrap(kwAlg, sharedSecret, cek);
      break;
    }
    case "RSA1_5":
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      cek = providedCek || cek_default(enc);
      encryptedKey = await encrypt2(alg, key, cek);
      break;
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW": {
      cek = providedCek || cek_default(enc);
      const { p2c, p2s: p2s2 } = providedParameters;
      ({ encryptedKey, ...parameters } = await encrypt(alg, key, cek, p2c, p2s2));
      break;
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      cek = providedCek || cek_default(enc);
      encryptedKey = await wrap(alg, key, cek);
      break;
    }
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW": {
      cek = providedCek || cek_default(enc);
      const { iv } = providedParameters;
      ({ encryptedKey, ...parameters } = await wrap2(alg, key, cek, iv));
      break;
    }
    default: {
      throw new JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
    }
  }
  return { cek, encryptedKey, parameters };
}
var encrypt_key_management_default;
var init_encrypt_key_management = __esm({
  "node_modules/jose/dist/browser/lib/encrypt_key_management.js"() {
    init_aeskw();
    init_ecdhes();
    init_pbes2kw();
    init_rsaes();
    init_base64url();
    init_normalize_key();
    init_cek();
    init_errors();
    init_export();
    init_check_key_type();
    init_aesgcmkw();
    encrypt_key_management_default = encryptKeyManagement;
  }
});

// node_modules/jose/dist/browser/jwe/flattened/encrypt.js
var FlattenedEncrypt;
var init_encrypt2 = __esm({
  "node_modules/jose/dist/browser/jwe/flattened/encrypt.js"() {
    init_base64url();
    init_private_symbols();
    init_encrypt();
    init_encrypt_key_management();
    init_errors();
    init_is_disjoint();
    init_buffer_utils();
    init_validate_crit();
    FlattenedEncrypt = class {
      constructor(plaintext) {
        if (!(plaintext instanceof Uint8Array)) {
          throw new TypeError("plaintext must be an instance of Uint8Array");
        }
        this._plaintext = plaintext;
      }
      setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
          throw new TypeError("setKeyManagementParameters can only be called once");
        }
        this._keyManagementParameters = parameters;
        return this;
      }
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this._sharedUnprotectedHeader) {
          throw new TypeError("setSharedUnprotectedHeader can only be called once");
        }
        this._sharedUnprotectedHeader = sharedUnprotectedHeader;
        return this;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
      }
      setAdditionalAuthenticatedData(aad) {
        this._aad = aad;
        return this;
      }
      setContentEncryptionKey(cek) {
        if (this._cek) {
          throw new TypeError("setContentEncryptionKey can only be called once");
        }
        this._cek = cek;
        return this;
      }
      setInitializationVector(iv) {
        if (this._iv) {
          throw new TypeError("setInitializationVector can only be called once");
        }
        this._iv = iv;
        return this;
      }
      async encrypt(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) {
          throw new JWEInvalid("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
        }
        if (!is_disjoint_default(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) {
          throw new JWEInvalid("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
        }
        const joseHeader = {
          ...this._protectedHeader,
          ...this._unprotectedHeader,
          ...this._sharedUnprotectedHeader
        };
        validate_crit_default(JWEInvalid, /* @__PURE__ */ new Map(), options?.crit, this._protectedHeader, joseHeader);
        if (joseHeader.zip !== void 0) {
          throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
        }
        const { alg, enc } = joseHeader;
        if (typeof alg !== "string" || !alg) {
          throw new JWEInvalid('JWE "alg" (Algorithm) Header Parameter missing or invalid');
        }
        if (typeof enc !== "string" || !enc) {
          throw new JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
        }
        let encryptedKey;
        if (this._cek && (alg === "dir" || alg === "ECDH-ES")) {
          throw new TypeError(`setContentEncryptionKey cannot be called with JWE "alg" (Algorithm) Header ${alg}`);
        }
        let cek;
        {
          let parameters;
          ({ cek, encryptedKey, parameters } = await encrypt_key_management_default(alg, enc, key, this._cek, this._keyManagementParameters));
          if (parameters) {
            if (options && unprotected in options) {
              if (!this._unprotectedHeader) {
                this.setUnprotectedHeader(parameters);
              } else {
                this._unprotectedHeader = { ...this._unprotectedHeader, ...parameters };
              }
            } else if (!this._protectedHeader) {
              this.setProtectedHeader(parameters);
            } else {
              this._protectedHeader = { ...this._protectedHeader, ...parameters };
            }
          }
        }
        let additionalData;
        let protectedHeader;
        let aadMember;
        if (this._protectedHeader) {
          protectedHeader = encoder.encode(encode2(JSON.stringify(this._protectedHeader)));
        } else {
          protectedHeader = encoder.encode("");
        }
        if (this._aad) {
          aadMember = encode2(this._aad);
          additionalData = concat(protectedHeader, encoder.encode("."), encoder.encode(aadMember));
        } else {
          additionalData = protectedHeader;
        }
        const { ciphertext, tag: tag2, iv } = await encrypt_default(enc, this._plaintext, cek, this._iv, additionalData);
        const jwe = {
          ciphertext: encode2(ciphertext)
        };
        if (iv) {
          jwe.iv = encode2(iv);
        }
        if (tag2) {
          jwe.tag = encode2(tag2);
        }
        if (encryptedKey) {
          jwe.encrypted_key = encode2(encryptedKey);
        }
        if (aadMember) {
          jwe.aad = aadMember;
        }
        if (this._protectedHeader) {
          jwe.protected = decoder.decode(protectedHeader);
        }
        if (this._sharedUnprotectedHeader) {
          jwe.unprotected = this._sharedUnprotectedHeader;
        }
        if (this._unprotectedHeader) {
          jwe.header = this._unprotectedHeader;
        }
        return jwe;
      }
    };
  }
});

// node_modules/jose/dist/browser/jwe/general/encrypt.js
var IndividualRecipient, GeneralEncrypt;
var init_encrypt3 = __esm({
  "node_modules/jose/dist/browser/jwe/general/encrypt.js"() {
    init_encrypt2();
    init_private_symbols();
    init_errors();
    init_cek();
    init_is_disjoint();
    init_encrypt_key_management();
    init_base64url();
    init_validate_crit();
    IndividualRecipient = class {
      constructor(enc, key, options) {
        this.parent = enc;
        this.key = key;
        this.options = options;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this.unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this.unprotectedHeader = unprotectedHeader;
        return this;
      }
      addRecipient(...args) {
        return this.parent.addRecipient(...args);
      }
      encrypt(...args) {
        return this.parent.encrypt(...args);
      }
      done() {
        return this.parent;
      }
    };
    GeneralEncrypt = class {
      constructor(plaintext) {
        this._recipients = [];
        this._plaintext = plaintext;
      }
      addRecipient(key, options) {
        const recipient = new IndividualRecipient(this, key, { crit: options?.crit });
        this._recipients.push(recipient);
        return recipient;
      }
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this._unprotectedHeader) {
          throw new TypeError("setSharedUnprotectedHeader can only be called once");
        }
        this._unprotectedHeader = sharedUnprotectedHeader;
        return this;
      }
      setAdditionalAuthenticatedData(aad) {
        this._aad = aad;
        return this;
      }
      async encrypt() {
        if (!this._recipients.length) {
          throw new JWEInvalid("at least one recipient must be added");
        }
        if (this._recipients.length === 1) {
          const [recipient] = this._recipients;
          const flattened = await new FlattenedEncrypt(this._plaintext).setAdditionalAuthenticatedData(this._aad).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(recipient.unprotectedHeader).encrypt(recipient.key, { ...recipient.options });
          const jwe2 = {
            ciphertext: flattened.ciphertext,
            iv: flattened.iv,
            recipients: [{}],
            tag: flattened.tag
          };
          if (flattened.aad)
            jwe2.aad = flattened.aad;
          if (flattened.protected)
            jwe2.protected = flattened.protected;
          if (flattened.unprotected)
            jwe2.unprotected = flattened.unprotected;
          if (flattened.encrypted_key)
            jwe2.recipients[0].encrypted_key = flattened.encrypted_key;
          if (flattened.header)
            jwe2.recipients[0].header = flattened.header;
          return jwe2;
        }
        let enc;
        for (let i = 0; i < this._recipients.length; i++) {
          const recipient = this._recipients[i];
          if (!is_disjoint_default(this._protectedHeader, this._unprotectedHeader, recipient.unprotectedHeader)) {
            throw new JWEInvalid("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
          }
          const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader,
            ...recipient.unprotectedHeader
          };
          const { alg } = joseHeader;
          if (typeof alg !== "string" || !alg) {
            throw new JWEInvalid('JWE "alg" (Algorithm) Header Parameter missing or invalid');
          }
          if (alg === "dir" || alg === "ECDH-ES") {
            throw new JWEInvalid('"dir" and "ECDH-ES" alg may only be used with a single recipient');
          }
          if (typeof joseHeader.enc !== "string" || !joseHeader.enc) {
            throw new JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
          }
          if (!enc) {
            enc = joseHeader.enc;
          } else if (enc !== joseHeader.enc) {
            throw new JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter must be the same for all recipients');
          }
          validate_crit_default(JWEInvalid, /* @__PURE__ */ new Map(), recipient.options.crit, this._protectedHeader, joseHeader);
          if (joseHeader.zip !== void 0) {
            throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
          }
        }
        const cek = cek_default(enc);
        const jwe = {
          ciphertext: "",
          iv: "",
          recipients: [],
          tag: ""
        };
        for (let i = 0; i < this._recipients.length; i++) {
          const recipient = this._recipients[i];
          const target = {};
          jwe.recipients.push(target);
          const joseHeader = {
            ...this._protectedHeader,
            ...this._unprotectedHeader,
            ...recipient.unprotectedHeader
          };
          const p2c = joseHeader.alg.startsWith("PBES2") ? 2048 + i : void 0;
          if (i === 0) {
            const flattened = await new FlattenedEncrypt(this._plaintext).setAdditionalAuthenticatedData(this._aad).setContentEncryptionKey(cek).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(recipient.unprotectedHeader).setKeyManagementParameters({ p2c }).encrypt(recipient.key, {
              ...recipient.options,
              [unprotected]: true
            });
            jwe.ciphertext = flattened.ciphertext;
            jwe.iv = flattened.iv;
            jwe.tag = flattened.tag;
            if (flattened.aad)
              jwe.aad = flattened.aad;
            if (flattened.protected)
              jwe.protected = flattened.protected;
            if (flattened.unprotected)
              jwe.unprotected = flattened.unprotected;
            target.encrypted_key = flattened.encrypted_key;
            if (flattened.header)
              target.header = flattened.header;
            continue;
          }
          const { encryptedKey, parameters } = await encrypt_key_management_default(recipient.unprotectedHeader?.alg || this._protectedHeader?.alg || this._unprotectedHeader?.alg, enc, recipient.key, cek, { p2c });
          target.encrypted_key = encode2(encryptedKey);
          if (recipient.unprotectedHeader || parameters)
            target.header = { ...recipient.unprotectedHeader, ...parameters };
        }
        return jwe;
      }
    };
  }
});

// node_modules/jose/dist/browser/runtime/subtle_dsa.js
function subtleDsa(alg, algorithm) {
  const hash = `SHA-${alg.slice(-3)}`;
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512":
      return { hash, name: "HMAC" };
    case "PS256":
    case "PS384":
    case "PS512":
      return { hash, name: "RSA-PSS", saltLength: alg.slice(-3) >> 3 };
    case "RS256":
    case "RS384":
    case "RS512":
      return { hash, name: "RSASSA-PKCS1-v1_5" };
    case "ES256":
    case "ES384":
    case "ES512":
      return { hash, name: "ECDSA", namedCurve: algorithm.namedCurve };
    case "Ed25519":
      return { name: "Ed25519" };
    case "EdDSA":
      return { name: algorithm.name };
    default:
      throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
  }
}
var init_subtle_dsa = __esm({
  "node_modules/jose/dist/browser/runtime/subtle_dsa.js"() {
    init_errors();
  }
});

// node_modules/jose/dist/browser/runtime/get_sign_verify_key.js
async function getCryptoKey3(alg, key, usage) {
  if (usage === "sign") {
    key = await normalize_key_default.normalizePrivateKey(key, alg);
  }
  if (usage === "verify") {
    key = await normalize_key_default.normalizePublicKey(key, alg);
  }
  if (isCryptoKey(key)) {
    checkSigCryptoKey(key, alg, usage);
    return key;
  }
  if (key instanceof Uint8Array) {
    if (!alg.startsWith("HS")) {
      throw new TypeError(invalid_key_input_default(key, ...types));
    }
    return webcrypto_default.subtle.importKey("raw", key, { hash: `SHA-${alg.slice(-3)}`, name: "HMAC" }, false, [usage]);
  }
  throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array", "JSON Web Key"));
}
var init_get_sign_verify_key = __esm({
  "node_modules/jose/dist/browser/runtime/get_sign_verify_key.js"() {
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    init_normalize_key();
  }
});

// node_modules/jose/dist/browser/runtime/verify.js
var verify, verify_default;
var init_verify = __esm({
  "node_modules/jose/dist/browser/runtime/verify.js"() {
    init_subtle_dsa();
    init_webcrypto();
    init_check_key_length();
    init_get_sign_verify_key();
    verify = async (alg, key, signature, data) => {
      const cryptoKey = await getCryptoKey3(alg, key, "verify");
      check_key_length_default(alg, cryptoKey);
      const algorithm = subtleDsa(alg, cryptoKey.algorithm);
      try {
        return await webcrypto_default.subtle.verify(algorithm, cryptoKey, signature, data);
      } catch {
        return false;
      }
    };
    verify_default = verify;
  }
});

// node_modules/jose/dist/browser/jws/flattened/verify.js
async function flattenedVerify(jws, key, options) {
  if (!isObject(jws)) {
    throw new JWSInvalid("Flattened JWS must be an object");
  }
  if (jws.protected === void 0 && jws.header === void 0) {
    throw new JWSInvalid('Flattened JWS must have either of the "protected" or "header" members');
  }
  if (jws.protected !== void 0 && typeof jws.protected !== "string") {
    throw new JWSInvalid("JWS Protected Header incorrect type");
  }
  if (jws.payload === void 0) {
    throw new JWSInvalid("JWS Payload missing");
  }
  if (typeof jws.signature !== "string") {
    throw new JWSInvalid("JWS Signature missing or incorrect type");
  }
  if (jws.header !== void 0 && !isObject(jws.header)) {
    throw new JWSInvalid("JWS Unprotected Header incorrect type");
  }
  let parsedProt = {};
  if (jws.protected) {
    try {
      const protectedHeader = decode2(jws.protected);
      parsedProt = JSON.parse(decoder.decode(protectedHeader));
    } catch {
      throw new JWSInvalid("JWS Protected Header is invalid");
    }
  }
  if (!is_disjoint_default(parsedProt, jws.header)) {
    throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  }
  const joseHeader = {
    ...parsedProt,
    ...jws.header
  };
  const extensions = validate_crit_default(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options?.crit, parsedProt, joseHeader);
  let b64 = true;
  if (extensions.has("b64")) {
    b64 = parsedProt.b64;
    if (typeof b64 !== "boolean") {
      throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
    }
  }
  const { alg } = joseHeader;
  if (typeof alg !== "string" || !alg) {
    throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  }
  const algorithms = options && validate_algorithms_default("algorithms", options.algorithms);
  if (algorithms && !algorithms.has(alg)) {
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
  }
  if (b64) {
    if (typeof jws.payload !== "string") {
      throw new JWSInvalid("JWS Payload must be a string");
    }
  } else if (typeof jws.payload !== "string" && !(jws.payload instanceof Uint8Array)) {
    throw new JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
  }
  let resolvedKey = false;
  if (typeof key === "function") {
    key = await key(parsedProt, jws);
    resolvedKey = true;
    checkKeyTypeWithJwk(alg, key, "verify");
    if (isJWK(key)) {
      key = await importJWK(key, alg);
    }
  } else {
    checkKeyTypeWithJwk(alg, key, "verify");
  }
  const data = concat(encoder.encode(jws.protected ?? ""), encoder.encode("."), typeof jws.payload === "string" ? encoder.encode(jws.payload) : jws.payload);
  let signature;
  try {
    signature = decode2(jws.signature);
  } catch {
    throw new JWSInvalid("Failed to base64url decode the signature");
  }
  const verified = await verify_default(alg, key, signature, data);
  if (!verified) {
    throw new JWSSignatureVerificationFailed();
  }
  let payload;
  if (b64) {
    try {
      payload = decode2(jws.payload);
    } catch {
      throw new JWSInvalid("Failed to base64url decode the payload");
    }
  } else if (typeof jws.payload === "string") {
    payload = encoder.encode(jws.payload);
  } else {
    payload = jws.payload;
  }
  const result = { payload };
  if (jws.protected !== void 0) {
    result.protectedHeader = parsedProt;
  }
  if (jws.header !== void 0) {
    result.unprotectedHeader = jws.header;
  }
  if (resolvedKey) {
    return { ...result, key };
  }
  return result;
}
var init_verify2 = __esm({
  "node_modules/jose/dist/browser/jws/flattened/verify.js"() {
    init_base64url();
    init_verify();
    init_errors();
    init_buffer_utils();
    init_is_disjoint();
    init_is_object();
    init_check_key_type();
    init_validate_crit();
    init_validate_algorithms();
    init_is_jwk();
    init_import();
  }
});

// node_modules/jose/dist/browser/jws/compact/verify.js
async function compactVerify(jws, key, options) {
  if (jws instanceof Uint8Array) {
    jws = decoder.decode(jws);
  }
  if (typeof jws !== "string") {
    throw new JWSInvalid("Compact JWS must be a string or Uint8Array");
  }
  const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
  if (length !== 3) {
    throw new JWSInvalid("Invalid Compact JWS");
  }
  const verified = await flattenedVerify({ payload, protected: protectedHeader, signature }, key, options);
  const result = { payload: verified.payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}
var init_verify3 = __esm({
  "node_modules/jose/dist/browser/jws/compact/verify.js"() {
    init_verify2();
    init_errors();
    init_buffer_utils();
  }
});

// node_modules/jose/dist/browser/jws/general/verify.js
async function generalVerify(jws, key, options) {
  if (!isObject(jws)) {
    throw new JWSInvalid("General JWS must be an object");
  }
  if (!Array.isArray(jws.signatures) || !jws.signatures.every(isObject)) {
    throw new JWSInvalid("JWS Signatures missing or incorrect type");
  }
  for (const signature of jws.signatures) {
    try {
      return await flattenedVerify({
        header: signature.header,
        payload: jws.payload,
        protected: signature.protected,
        signature: signature.signature
      }, key, options);
    } catch {
    }
  }
  throw new JWSSignatureVerificationFailed();
}
var init_verify4 = __esm({
  "node_modules/jose/dist/browser/jws/general/verify.js"() {
    init_verify2();
    init_errors();
    init_is_object();
  }
});

// node_modules/jose/dist/browser/lib/epoch.js
var epoch_default;
var init_epoch = __esm({
  "node_modules/jose/dist/browser/lib/epoch.js"() {
    epoch_default = (date) => Math.floor(date.getTime() / 1e3);
  }
});

// node_modules/jose/dist/browser/lib/secs.js
var minute, hour, day, week, year, REGEX, secs_default;
var init_secs = __esm({
  "node_modules/jose/dist/browser/lib/secs.js"() {
    minute = 60;
    hour = minute * 60;
    day = hour * 24;
    week = day * 7;
    year = day * 365.25;
    REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
    secs_default = (str) => {
      const matched = REGEX.exec(str);
      if (!matched || matched[4] && matched[1]) {
        throw new TypeError("Invalid time period format");
      }
      const value = parseFloat(matched[2]);
      const unit = matched[3].toLowerCase();
      let numericDate;
      switch (unit) {
        case "sec":
        case "secs":
        case "second":
        case "seconds":
        case "s":
          numericDate = Math.round(value);
          break;
        case "minute":
        case "minutes":
        case "min":
        case "mins":
        case "m":
          numericDate = Math.round(value * minute);
          break;
        case "hour":
        case "hours":
        case "hr":
        case "hrs":
        case "h":
          numericDate = Math.round(value * hour);
          break;
        case "day":
        case "days":
        case "d":
          numericDate = Math.round(value * day);
          break;
        case "week":
        case "weeks":
        case "w":
          numericDate = Math.round(value * week);
          break;
        default:
          numericDate = Math.round(value * year);
          break;
      }
      if (matched[1] === "-" || matched[4] === "ago") {
        return -numericDate;
      }
      return numericDate;
    };
  }
});

// node_modules/jose/dist/browser/lib/jwt_claims_set.js
var normalizeTyp, checkAudiencePresence, jwt_claims_set_default;
var init_jwt_claims_set = __esm({
  "node_modules/jose/dist/browser/lib/jwt_claims_set.js"() {
    init_errors();
    init_buffer_utils();
    init_epoch();
    init_secs();
    init_is_object();
    normalizeTyp = (value) => value.toLowerCase().replace(/^application\//, "");
    checkAudiencePresence = (audPayload, audOption) => {
      if (typeof audPayload === "string") {
        return audOption.includes(audPayload);
      }
      if (Array.isArray(audPayload)) {
        return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
      }
      return false;
    };
    jwt_claims_set_default = (protectedHeader, encodedPayload, options = {}) => {
      let payload;
      try {
        payload = JSON.parse(decoder.decode(encodedPayload));
      } catch {
      }
      if (!isObject(payload)) {
        throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
      }
      const { typ } = options;
      if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
        throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', payload, "typ", "check_failed");
      }
      const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
      const presenceCheck = [...requiredClaims];
      if (maxTokenAge !== void 0)
        presenceCheck.push("iat");
      if (audience !== void 0)
        presenceCheck.push("aud");
      if (subject !== void 0)
        presenceCheck.push("sub");
      if (issuer !== void 0)
        presenceCheck.push("iss");
      for (const claim of new Set(presenceCheck.reverse())) {
        if (!(claim in payload)) {
          throw new JWTClaimValidationFailed(`missing required "${claim}" claim`, payload, claim, "missing");
        }
      }
      if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
        throw new JWTClaimValidationFailed('unexpected "iss" claim value', payload, "iss", "check_failed");
      }
      if (subject && payload.sub !== subject) {
        throw new JWTClaimValidationFailed('unexpected "sub" claim value', payload, "sub", "check_failed");
      }
      if (audience && !checkAudiencePresence(payload.aud, typeof audience === "string" ? [audience] : audience)) {
        throw new JWTClaimValidationFailed('unexpected "aud" claim value', payload, "aud", "check_failed");
      }
      let tolerance;
      switch (typeof options.clockTolerance) {
        case "string":
          tolerance = secs_default(options.clockTolerance);
          break;
        case "number":
          tolerance = options.clockTolerance;
          break;
        case "undefined":
          tolerance = 0;
          break;
        default:
          throw new TypeError("Invalid clockTolerance option type");
      }
      const { currentDate } = options;
      const now = epoch_default(currentDate || /* @__PURE__ */ new Date());
      if ((payload.iat !== void 0 || maxTokenAge) && typeof payload.iat !== "number") {
        throw new JWTClaimValidationFailed('"iat" claim must be a number', payload, "iat", "invalid");
      }
      if (payload.nbf !== void 0) {
        if (typeof payload.nbf !== "number") {
          throw new JWTClaimValidationFailed('"nbf" claim must be a number', payload, "nbf", "invalid");
        }
        if (payload.nbf > now + tolerance) {
          throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', payload, "nbf", "check_failed");
        }
      }
      if (payload.exp !== void 0) {
        if (typeof payload.exp !== "number") {
          throw new JWTClaimValidationFailed('"exp" claim must be a number', payload, "exp", "invalid");
        }
        if (payload.exp <= now - tolerance) {
          throw new JWTExpired('"exp" claim timestamp check failed', payload, "exp", "check_failed");
        }
      }
      if (maxTokenAge) {
        const age = now - payload.iat;
        const max = typeof maxTokenAge === "number" ? maxTokenAge : secs_default(maxTokenAge);
        if (age - tolerance > max) {
          throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', payload, "iat", "check_failed");
        }
        if (age < 0 - tolerance) {
          throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', payload, "iat", "check_failed");
        }
      }
      return payload;
    };
  }
});

// node_modules/jose/dist/browser/jwt/verify.js
async function jwtVerify(jwt, key, options) {
  const verified = await compactVerify(jwt, key, options);
  if (verified.protectedHeader.crit?.includes("b64") && verified.protectedHeader.b64 === false) {
    throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
  }
  const payload = jwt_claims_set_default(verified.protectedHeader, verified.payload, options);
  const result = { payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}
var init_verify5 = __esm({
  "node_modules/jose/dist/browser/jwt/verify.js"() {
    init_verify3();
    init_jwt_claims_set();
    init_errors();
  }
});

// node_modules/jose/dist/browser/jwt/decrypt.js
async function jwtDecrypt(jwt, key, options) {
  const decrypted = await compactDecrypt(jwt, key, options);
  const payload = jwt_claims_set_default(decrypted.protectedHeader, decrypted.plaintext, options);
  const { protectedHeader } = decrypted;
  if (protectedHeader.iss !== void 0 && protectedHeader.iss !== payload.iss) {
    throw new JWTClaimValidationFailed('replicated "iss" claim header parameter mismatch', payload, "iss", "mismatch");
  }
  if (protectedHeader.sub !== void 0 && protectedHeader.sub !== payload.sub) {
    throw new JWTClaimValidationFailed('replicated "sub" claim header parameter mismatch', payload, "sub", "mismatch");
  }
  if (protectedHeader.aud !== void 0 && JSON.stringify(protectedHeader.aud) !== JSON.stringify(payload.aud)) {
    throw new JWTClaimValidationFailed('replicated "aud" claim header parameter mismatch', payload, "aud", "mismatch");
  }
  const result = { payload, protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: decrypted.key };
  }
  return result;
}
var init_decrypt5 = __esm({
  "node_modules/jose/dist/browser/jwt/decrypt.js"() {
    init_decrypt3();
    init_jwt_claims_set();
    init_errors();
  }
});

// node_modules/jose/dist/browser/jwe/compact/encrypt.js
var CompactEncrypt;
var init_encrypt4 = __esm({
  "node_modules/jose/dist/browser/jwe/compact/encrypt.js"() {
    init_encrypt2();
    CompactEncrypt = class {
      constructor(plaintext) {
        this._flattened = new FlattenedEncrypt(plaintext);
      }
      setContentEncryptionKey(cek) {
        this._flattened.setContentEncryptionKey(cek);
        return this;
      }
      setInitializationVector(iv) {
        this._flattened.setInitializationVector(iv);
        return this;
      }
      setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
      }
      setKeyManagementParameters(parameters) {
        this._flattened.setKeyManagementParameters(parameters);
        return this;
      }
      async encrypt(key, options) {
        const jwe = await this._flattened.encrypt(key, options);
        return [jwe.protected, jwe.encrypted_key, jwe.iv, jwe.ciphertext, jwe.tag].join(".");
      }
    };
  }
});

// node_modules/jose/dist/browser/runtime/sign.js
var sign, sign_default;
var init_sign = __esm({
  "node_modules/jose/dist/browser/runtime/sign.js"() {
    init_subtle_dsa();
    init_webcrypto();
    init_check_key_length();
    init_get_sign_verify_key();
    sign = async (alg, key, data) => {
      const cryptoKey = await getCryptoKey3(alg, key, "sign");
      check_key_length_default(alg, cryptoKey);
      const signature = await webcrypto_default.subtle.sign(subtleDsa(alg, cryptoKey.algorithm), cryptoKey, data);
      return new Uint8Array(signature);
    };
    sign_default = sign;
  }
});

// node_modules/jose/dist/browser/jws/flattened/sign.js
var FlattenedSign;
var init_sign2 = __esm({
  "node_modules/jose/dist/browser/jws/flattened/sign.js"() {
    init_base64url();
    init_sign();
    init_is_disjoint();
    init_errors();
    init_buffer_utils();
    init_check_key_type();
    init_validate_crit();
    FlattenedSign = class {
      constructor(payload) {
        if (!(payload instanceof Uint8Array)) {
          throw new TypeError("payload must be an instance of Uint8Array");
        }
        this._payload = payload;
      }
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
      }
      async sign(key, options) {
        if (!this._protectedHeader && !this._unprotectedHeader) {
          throw new JWSInvalid("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
        }
        if (!is_disjoint_default(this._protectedHeader, this._unprotectedHeader)) {
          throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
        }
        const joseHeader = {
          ...this._protectedHeader,
          ...this._unprotectedHeader
        };
        const extensions = validate_crit_default(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options?.crit, this._protectedHeader, joseHeader);
        let b64 = true;
        if (extensions.has("b64")) {
          b64 = this._protectedHeader.b64;
          if (typeof b64 !== "boolean") {
            throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
          }
        }
        const { alg } = joseHeader;
        if (typeof alg !== "string" || !alg) {
          throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
        }
        checkKeyTypeWithJwk(alg, key, "sign");
        let payload = this._payload;
        if (b64) {
          payload = encoder.encode(encode2(payload));
        }
        let protectedHeader;
        if (this._protectedHeader) {
          protectedHeader = encoder.encode(encode2(JSON.stringify(this._protectedHeader)));
        } else {
          protectedHeader = encoder.encode("");
        }
        const data = concat(protectedHeader, encoder.encode("."), payload);
        const signature = await sign_default(alg, key, data);
        const jws = {
          signature: encode2(signature),
          payload: ""
        };
        if (b64) {
          jws.payload = decoder.decode(payload);
        }
        if (this._unprotectedHeader) {
          jws.header = this._unprotectedHeader;
        }
        if (this._protectedHeader) {
          jws.protected = decoder.decode(protectedHeader);
        }
        return jws;
      }
    };
  }
});

// node_modules/jose/dist/browser/jws/compact/sign.js
var CompactSign;
var init_sign3 = __esm({
  "node_modules/jose/dist/browser/jws/compact/sign.js"() {
    init_sign2();
    CompactSign = class {
      constructor(payload) {
        this._flattened = new FlattenedSign(payload);
      }
      setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
      }
      async sign(key, options) {
        const jws = await this._flattened.sign(key, options);
        if (jws.payload === void 0) {
          throw new TypeError("use the flattened module for creating JWS with b64: false");
        }
        return `${jws.protected}.${jws.payload}.${jws.signature}`;
      }
    };
  }
});

// node_modules/jose/dist/browser/jws/general/sign.js
var IndividualSignature, GeneralSign;
var init_sign4 = __esm({
  "node_modules/jose/dist/browser/jws/general/sign.js"() {
    init_sign2();
    init_errors();
    IndividualSignature = class {
      constructor(sig, key, options) {
        this.parent = sig;
        this.key = key;
        this.options = options;
      }
      setProtectedHeader(protectedHeader) {
        if (this.protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this.protectedHeader = protectedHeader;
        return this;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this.unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this.unprotectedHeader = unprotectedHeader;
        return this;
      }
      addSignature(...args) {
        return this.parent.addSignature(...args);
      }
      sign(...args) {
        return this.parent.sign(...args);
      }
      done() {
        return this.parent;
      }
    };
    GeneralSign = class {
      constructor(payload) {
        this._signatures = [];
        this._payload = payload;
      }
      addSignature(key, options) {
        const signature = new IndividualSignature(this, key, options);
        this._signatures.push(signature);
        return signature;
      }
      async sign() {
        if (!this._signatures.length) {
          throw new JWSInvalid("at least one signature must be added");
        }
        const jws = {
          signatures: [],
          payload: ""
        };
        for (let i = 0; i < this._signatures.length; i++) {
          const signature = this._signatures[i];
          const flattened = new FlattenedSign(this._payload);
          flattened.setProtectedHeader(signature.protectedHeader);
          flattened.setUnprotectedHeader(signature.unprotectedHeader);
          const { payload, ...rest } = await flattened.sign(signature.key, signature.options);
          if (i === 0) {
            jws.payload = payload;
          } else if (jws.payload !== payload) {
            throw new JWSInvalid("inconsistent use of JWS Unencoded Payload (RFC7797)");
          }
          jws.signatures.push(rest);
        }
        return jws;
      }
    };
  }
});

// node_modules/jose/dist/browser/jwt/produce.js
function validateInput(label, input) {
  if (!Number.isFinite(input)) {
    throw new TypeError(`Invalid ${label} input`);
  }
  return input;
}
var ProduceJWT;
var init_produce = __esm({
  "node_modules/jose/dist/browser/jwt/produce.js"() {
    init_epoch();
    init_is_object();
    init_secs();
    ProduceJWT = class {
      constructor(payload = {}) {
        if (!isObject(payload)) {
          throw new TypeError("JWT Claims Set MUST be an object");
        }
        this._payload = payload;
      }
      setIssuer(issuer) {
        this._payload = { ...this._payload, iss: issuer };
        return this;
      }
      setSubject(subject) {
        this._payload = { ...this._payload, sub: subject };
        return this;
      }
      setAudience(audience) {
        this._payload = { ...this._payload, aud: audience };
        return this;
      }
      setJti(jwtId) {
        this._payload = { ...this._payload, jti: jwtId };
        return this;
      }
      setNotBefore(input) {
        if (typeof input === "number") {
          this._payload = { ...this._payload, nbf: validateInput("setNotBefore", input) };
        } else if (input instanceof Date) {
          this._payload = { ...this._payload, nbf: validateInput("setNotBefore", epoch_default(input)) };
        } else {
          this._payload = { ...this._payload, nbf: epoch_default(/* @__PURE__ */ new Date()) + secs_default(input) };
        }
        return this;
      }
      setExpirationTime(input) {
        if (typeof input === "number") {
          this._payload = { ...this._payload, exp: validateInput("setExpirationTime", input) };
        } else if (input instanceof Date) {
          this._payload = { ...this._payload, exp: validateInput("setExpirationTime", epoch_default(input)) };
        } else {
          this._payload = { ...this._payload, exp: epoch_default(/* @__PURE__ */ new Date()) + secs_default(input) };
        }
        return this;
      }
      setIssuedAt(input) {
        if (typeof input === "undefined") {
          this._payload = { ...this._payload, iat: epoch_default(/* @__PURE__ */ new Date()) };
        } else if (input instanceof Date) {
          this._payload = { ...this._payload, iat: validateInput("setIssuedAt", epoch_default(input)) };
        } else if (typeof input === "string") {
          this._payload = {
            ...this._payload,
            iat: validateInput("setIssuedAt", epoch_default(/* @__PURE__ */ new Date()) + secs_default(input))
          };
        } else {
          this._payload = { ...this._payload, iat: validateInput("setIssuedAt", input) };
        }
        return this;
      }
    };
  }
});

// node_modules/jose/dist/browser/jwt/sign.js
var SignJWT;
var init_sign5 = __esm({
  "node_modules/jose/dist/browser/jwt/sign.js"() {
    init_sign3();
    init_errors();
    init_buffer_utils();
    init_produce();
    SignJWT = class extends ProduceJWT {
      setProtectedHeader(protectedHeader) {
        this._protectedHeader = protectedHeader;
        return this;
      }
      async sign(key, options) {
        const sig = new CompactSign(encoder.encode(JSON.stringify(this._payload)));
        sig.setProtectedHeader(this._protectedHeader);
        if (Array.isArray(this._protectedHeader?.crit) && this._protectedHeader.crit.includes("b64") && this._protectedHeader.b64 === false) {
          throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
        }
        return sig.sign(key, options);
      }
    };
  }
});

// node_modules/jose/dist/browser/jwt/encrypt.js
var EncryptJWT;
var init_encrypt5 = __esm({
  "node_modules/jose/dist/browser/jwt/encrypt.js"() {
    init_encrypt4();
    init_buffer_utils();
    init_produce();
    EncryptJWT = class extends ProduceJWT {
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
          throw new TypeError("setKeyManagementParameters can only be called once");
        }
        this._keyManagementParameters = parameters;
        return this;
      }
      setContentEncryptionKey(cek) {
        if (this._cek) {
          throw new TypeError("setContentEncryptionKey can only be called once");
        }
        this._cek = cek;
        return this;
      }
      setInitializationVector(iv) {
        if (this._iv) {
          throw new TypeError("setInitializationVector can only be called once");
        }
        this._iv = iv;
        return this;
      }
      replicateIssuerAsHeader() {
        this._replicateIssuerAsHeader = true;
        return this;
      }
      replicateSubjectAsHeader() {
        this._replicateSubjectAsHeader = true;
        return this;
      }
      replicateAudienceAsHeader() {
        this._replicateAudienceAsHeader = true;
        return this;
      }
      async encrypt(key, options) {
        const enc = new CompactEncrypt(encoder.encode(JSON.stringify(this._payload)));
        if (this._replicateIssuerAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, iss: this._payload.iss };
        }
        if (this._replicateSubjectAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, sub: this._payload.sub };
        }
        if (this._replicateAudienceAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, aud: this._payload.aud };
        }
        enc.setProtectedHeader(this._protectedHeader);
        if (this._iv) {
          enc.setInitializationVector(this._iv);
        }
        if (this._cek) {
          enc.setContentEncryptionKey(this._cek);
        }
        if (this._keyManagementParameters) {
          enc.setKeyManagementParameters(this._keyManagementParameters);
        }
        return enc.encrypt(key, options);
      }
    };
  }
});

// node_modules/jose/dist/browser/jwk/thumbprint.js
async function calculateJwkThumbprint(jwk, digestAlgorithm) {
  if (!isObject(jwk)) {
    throw new TypeError("JWK must be an object");
  }
  digestAlgorithm ?? (digestAlgorithm = "sha256");
  if (digestAlgorithm !== "sha256" && digestAlgorithm !== "sha384" && digestAlgorithm !== "sha512") {
    throw new TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
  }
  let components;
  switch (jwk.kty) {
    case "EC":
      check(jwk.crv, '"crv" (Curve) Parameter');
      check(jwk.x, '"x" (X Coordinate) Parameter');
      check(jwk.y, '"y" (Y Coordinate) Parameter');
      components = { crv: jwk.crv, kty: jwk.kty, x: jwk.x, y: jwk.y };
      break;
    case "OKP":
      check(jwk.crv, '"crv" (Subtype of Key Pair) Parameter');
      check(jwk.x, '"x" (Public Key) Parameter');
      components = { crv: jwk.crv, kty: jwk.kty, x: jwk.x };
      break;
    case "RSA":
      check(jwk.e, '"e" (Exponent) Parameter');
      check(jwk.n, '"n" (Modulus) Parameter');
      components = { e: jwk.e, kty: jwk.kty, n: jwk.n };
      break;
    case "oct":
      check(jwk.k, '"k" (Key Value) Parameter');
      components = { k: jwk.k, kty: jwk.kty };
      break;
    default:
      throw new JOSENotSupported('"kty" (Key Type) Parameter missing or unsupported');
  }
  const data = encoder.encode(JSON.stringify(components));
  return encode2(await digest_default(digestAlgorithm, data));
}
async function calculateJwkThumbprintUri(jwk, digestAlgorithm) {
  digestAlgorithm ?? (digestAlgorithm = "sha256");
  const thumbprint = await calculateJwkThumbprint(jwk, digestAlgorithm);
  return `urn:ietf:params:oauth:jwk-thumbprint:sha-${digestAlgorithm.slice(-3)}:${thumbprint}`;
}
var check;
var init_thumbprint = __esm({
  "node_modules/jose/dist/browser/jwk/thumbprint.js"() {
    init_digest();
    init_base64url();
    init_errors();
    init_buffer_utils();
    init_is_object();
    check = (value, description) => {
      if (typeof value !== "string" || !value) {
        throw new JWKInvalid(`${description} missing or invalid`);
      }
    };
  }
});

// node_modules/jose/dist/browser/jwk/embedded.js
async function EmbeddedJWK(protectedHeader, token) {
  const joseHeader = {
    ...protectedHeader,
    ...token?.header
  };
  if (!isObject(joseHeader.jwk)) {
    throw new JWSInvalid('"jwk" (JSON Web Key) Header Parameter must be a JSON object');
  }
  const key = await importJWK({ ...joseHeader.jwk, ext: true }, joseHeader.alg);
  if (key instanceof Uint8Array || key.type !== "public") {
    throw new JWSInvalid('"jwk" (JSON Web Key) Header Parameter must be a public key');
  }
  return key;
}
var init_embedded = __esm({
  "node_modules/jose/dist/browser/jwk/embedded.js"() {
    init_import();
    init_is_object();
    init_errors();
  }
});

// node_modules/jose/dist/browser/jwks/local.js
function getKtyFromAlg(alg) {
  switch (typeof alg === "string" && alg.slice(0, 2)) {
    case "RS":
    case "PS":
      return "RSA";
    case "ES":
      return "EC";
    case "Ed":
      return "OKP";
    default:
      throw new JOSENotSupported('Unsupported "alg" value for a JSON Web Key Set');
  }
}
function isJWKSLike(jwks) {
  return jwks && typeof jwks === "object" && Array.isArray(jwks.keys) && jwks.keys.every(isJWKLike);
}
function isJWKLike(key) {
  return isObject(key);
}
function clone(obj) {
  if (typeof structuredClone === "function") {
    return structuredClone(obj);
  }
  return JSON.parse(JSON.stringify(obj));
}
async function importWithAlgCache(cache, jwk, alg) {
  const cached = cache.get(jwk) || cache.set(jwk, {}).get(jwk);
  if (cached[alg] === void 0) {
    const key = await importJWK({ ...jwk, ext: true }, alg);
    if (key instanceof Uint8Array || key.type !== "public") {
      throw new JWKSInvalid("JSON Web Key Set members must be public keys");
    }
    cached[alg] = key;
  }
  return cached[alg];
}
function createLocalJWKSet(jwks) {
  const set = new LocalJWKSet(jwks);
  const localJWKSet = async (protectedHeader, token) => set.getKey(protectedHeader, token);
  Object.defineProperties(localJWKSet, {
    jwks: {
      value: () => clone(set._jwks),
      enumerable: true,
      configurable: false,
      writable: false
    }
  });
  return localJWKSet;
}
var LocalJWKSet;
var init_local = __esm({
  "node_modules/jose/dist/browser/jwks/local.js"() {
    init_import();
    init_errors();
    init_is_object();
    LocalJWKSet = class {
      constructor(jwks) {
        this._cached = /* @__PURE__ */ new WeakMap();
        if (!isJWKSLike(jwks)) {
          throw new JWKSInvalid("JSON Web Key Set malformed");
        }
        this._jwks = clone(jwks);
      }
      async getKey(protectedHeader, token) {
        const { alg, kid } = { ...protectedHeader, ...token?.header };
        const kty = getKtyFromAlg(alg);
        const candidates = this._jwks.keys.filter((jwk2) => {
          let candidate = kty === jwk2.kty;
          if (candidate && typeof kid === "string") {
            candidate = kid === jwk2.kid;
          }
          if (candidate && typeof jwk2.alg === "string") {
            candidate = alg === jwk2.alg;
          }
          if (candidate && typeof jwk2.use === "string") {
            candidate = jwk2.use === "sig";
          }
          if (candidate && Array.isArray(jwk2.key_ops)) {
            candidate = jwk2.key_ops.includes("verify");
          }
          if (candidate) {
            switch (alg) {
              case "ES256":
                candidate = jwk2.crv === "P-256";
                break;
              case "ES256K":
                candidate = jwk2.crv === "secp256k1";
                break;
              case "ES384":
                candidate = jwk2.crv === "P-384";
                break;
              case "ES512":
                candidate = jwk2.crv === "P-521";
                break;
              case "Ed25519":
                candidate = jwk2.crv === "Ed25519";
                break;
              case "EdDSA":
                candidate = jwk2.crv === "Ed25519" || jwk2.crv === "Ed448";
                break;
            }
          }
          return candidate;
        });
        const { 0: jwk, length } = candidates;
        if (length === 0) {
          throw new JWKSNoMatchingKey();
        }
        if (length !== 1) {
          const error = new JWKSMultipleMatchingKeys();
          const { _cached } = this;
          error[Symbol.asyncIterator] = async function* () {
            for (const jwk2 of candidates) {
              try {
                yield await importWithAlgCache(_cached, jwk2, alg);
              } catch {
              }
            }
          };
          throw error;
        }
        return importWithAlgCache(this._cached, jwk, alg);
      }
    };
  }
});

// node_modules/jose/dist/browser/runtime/fetch_jwks.js
var fetchJwks, fetch_jwks_default;
var init_fetch_jwks = __esm({
  "node_modules/jose/dist/browser/runtime/fetch_jwks.js"() {
    init_errors();
    fetchJwks = async (url, timeout, options) => {
      let controller;
      let id;
      let timedOut = false;
      if (typeof AbortController === "function") {
        controller = new AbortController();
        id = setTimeout(() => {
          timedOut = true;
          controller.abort();
        }, timeout);
      }
      const response = await fetch(url.href, {
        signal: controller ? controller.signal : void 0,
        redirect: "manual",
        headers: options.headers
      }).catch((err) => {
        if (timedOut)
          throw new JWKSTimeout();
        throw err;
      });
      if (id !== void 0)
        clearTimeout(id);
      if (response.status !== 200) {
        throw new JOSEError("Expected 200 OK from the JSON Web Key Set HTTP response");
      }
      try {
        return await response.json();
      } catch {
        throw new JOSEError("Failed to parse the JSON Web Key Set HTTP response as JSON");
      }
    };
    fetch_jwks_default = fetchJwks;
  }
});

// node_modules/jose/dist/browser/jwks/remote.js
function isCloudflareWorkers() {
  return typeof WebSocketPair !== "undefined" || typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers" || typeof EdgeRuntime !== "undefined" && EdgeRuntime === "vercel";
}
function isFreshJwksCache(input, cacheMaxAge) {
  if (typeof input !== "object" || input === null) {
    return false;
  }
  if (!("uat" in input) || typeof input.uat !== "number" || Date.now() - input.uat >= cacheMaxAge) {
    return false;
  }
  if (!("jwks" in input) || !isObject(input.jwks) || !Array.isArray(input.jwks.keys) || !Array.prototype.every.call(input.jwks.keys, isObject)) {
    return false;
  }
  return true;
}
function createRemoteJWKSet(url, options) {
  const set = new RemoteJWKSet(url, options);
  const remoteJWKSet = async (protectedHeader, token) => set.getKey(protectedHeader, token);
  Object.defineProperties(remoteJWKSet, {
    coolingDown: {
      get: () => set.coolingDown(),
      enumerable: true,
      configurable: false
    },
    fresh: {
      get: () => set.fresh(),
      enumerable: true,
      configurable: false
    },
    reload: {
      value: () => set.reload(),
      enumerable: true,
      configurable: false,
      writable: false
    },
    reloading: {
      get: () => !!set._pendingFetch,
      enumerable: true,
      configurable: false
    },
    jwks: {
      value: () => set._local?.jwks(),
      enumerable: true,
      configurable: false,
      writable: false
    }
  });
  return remoteJWKSet;
}
var USER_AGENT, jwksCache, RemoteJWKSet, experimental_jwksCache;
var init_remote = __esm({
  "node_modules/jose/dist/browser/jwks/remote.js"() {
    init_fetch_jwks();
    init_errors();
    init_local();
    init_is_object();
    if (typeof navigator === "undefined" || !navigator.userAgent?.startsWith?.("Mozilla/5.0 ")) {
      const NAME = "jose";
      const VERSION = "v5.10.0";
      USER_AGENT = `${NAME}/${VERSION}`;
    }
    jwksCache = Symbol();
    RemoteJWKSet = class {
      constructor(url, options) {
        if (!(url instanceof URL)) {
          throw new TypeError("url must be an instance of URL");
        }
        this._url = new URL(url.href);
        this._options = { agent: options?.agent, headers: options?.headers };
        this._timeoutDuration = typeof options?.timeoutDuration === "number" ? options?.timeoutDuration : 5e3;
        this._cooldownDuration = typeof options?.cooldownDuration === "number" ? options?.cooldownDuration : 3e4;
        this._cacheMaxAge = typeof options?.cacheMaxAge === "number" ? options?.cacheMaxAge : 6e5;
        if (options?.[jwksCache] !== void 0) {
          this._cache = options?.[jwksCache];
          if (isFreshJwksCache(options?.[jwksCache], this._cacheMaxAge)) {
            this._jwksTimestamp = this._cache.uat;
            this._local = createLocalJWKSet(this._cache.jwks);
          }
        }
      }
      coolingDown() {
        return typeof this._jwksTimestamp === "number" ? Date.now() < this._jwksTimestamp + this._cooldownDuration : false;
      }
      fresh() {
        return typeof this._jwksTimestamp === "number" ? Date.now() < this._jwksTimestamp + this._cacheMaxAge : false;
      }
      async getKey(protectedHeader, token) {
        if (!this._local || !this.fresh()) {
          await this.reload();
        }
        try {
          return await this._local(protectedHeader, token);
        } catch (err) {
          if (err instanceof JWKSNoMatchingKey) {
            if (this.coolingDown() === false) {
              await this.reload();
              return this._local(protectedHeader, token);
            }
          }
          throw err;
        }
      }
      async reload() {
        if (this._pendingFetch && isCloudflareWorkers()) {
          this._pendingFetch = void 0;
        }
        const headers = new Headers(this._options.headers);
        if (USER_AGENT && !headers.has("User-Agent")) {
          headers.set("User-Agent", USER_AGENT);
          this._options.headers = Object.fromEntries(headers.entries());
        }
        this._pendingFetch || (this._pendingFetch = fetch_jwks_default(this._url, this._timeoutDuration, this._options).then((json) => {
          this._local = createLocalJWKSet(json);
          if (this._cache) {
            this._cache.uat = Date.now();
            this._cache.jwks = json;
          }
          this._jwksTimestamp = Date.now();
          this._pendingFetch = void 0;
        }).catch((err) => {
          this._pendingFetch = void 0;
          throw err;
        }));
        await this._pendingFetch;
      }
    };
    experimental_jwksCache = jwksCache;
  }
});

// node_modules/jose/dist/browser/jwt/unsecured.js
var UnsecuredJWT;
var init_unsecured = __esm({
  "node_modules/jose/dist/browser/jwt/unsecured.js"() {
    init_base64url();
    init_buffer_utils();
    init_errors();
    init_jwt_claims_set();
    init_produce();
    UnsecuredJWT = class extends ProduceJWT {
      encode() {
        const header = encode2(JSON.stringify({ alg: "none" }));
        const payload = encode2(JSON.stringify(this._payload));
        return `${header}.${payload}.`;
      }
      static decode(jwt, options) {
        if (typeof jwt !== "string") {
          throw new JWTInvalid("Unsecured JWT must be a string");
        }
        const { 0: encodedHeader, 1: encodedPayload, 2: signature, length } = jwt.split(".");
        if (length !== 3 || signature !== "") {
          throw new JWTInvalid("Invalid Unsecured JWT");
        }
        let header;
        try {
          header = JSON.parse(decoder.decode(decode2(encodedHeader)));
          if (header.alg !== "none")
            throw new Error();
        } catch {
          throw new JWTInvalid("Invalid Unsecured JWT");
        }
        const payload = jwt_claims_set_default(header, decode2(encodedPayload), options);
        return { payload, header };
      }
    };
  }
});

// node_modules/jose/dist/browser/util/base64url.js
var base64url_exports2 = {};
__export(base64url_exports2, {
  decode: () => decode3,
  encode: () => encode3
});
var encode3, decode3;
var init_base64url2 = __esm({
  "node_modules/jose/dist/browser/util/base64url.js"() {
    init_base64url();
    encode3 = encode2;
    decode3 = decode2;
  }
});

// node_modules/jose/dist/browser/util/decode_protected_header.js
function decodeProtectedHeader(token) {
  let protectedB64u;
  if (typeof token === "string") {
    const parts = token.split(".");
    if (parts.length === 3 || parts.length === 5) {
      ;
      [protectedB64u] = parts;
    }
  } else if (typeof token === "object" && token) {
    if ("protected" in token) {
      protectedB64u = token.protected;
    } else {
      throw new TypeError("Token does not contain a Protected Header");
    }
  }
  try {
    if (typeof protectedB64u !== "string" || !protectedB64u) {
      throw new Error();
    }
    const result = JSON.parse(decoder.decode(decode3(protectedB64u)));
    if (!isObject(result)) {
      throw new Error();
    }
    return result;
  } catch {
    throw new TypeError("Invalid Token or Protected Header formatting");
  }
}
var init_decode_protected_header = __esm({
  "node_modules/jose/dist/browser/util/decode_protected_header.js"() {
    init_base64url2();
    init_buffer_utils();
    init_is_object();
  }
});

// node_modules/jose/dist/browser/util/decode_jwt.js
function decodeJwt(jwt) {
  if (typeof jwt !== "string")
    throw new JWTInvalid("JWTs must use Compact JWS serialization, JWT must be a string");
  const { 1: payload, length } = jwt.split(".");
  if (length === 5)
    throw new JWTInvalid("Only JWTs using Compact JWS serialization can be decoded");
  if (length !== 3)
    throw new JWTInvalid("Invalid JWT");
  if (!payload)
    throw new JWTInvalid("JWTs must contain a payload");
  let decoded;
  try {
    decoded = decode3(payload);
  } catch {
    throw new JWTInvalid("Failed to base64url decode the payload");
  }
  let result;
  try {
    result = JSON.parse(decoder.decode(decoded));
  } catch {
    throw new JWTInvalid("Failed to parse the decoded payload as JSON");
  }
  if (!isObject(result))
    throw new JWTInvalid("Invalid JWT Claims Set");
  return result;
}
var init_decode_jwt = __esm({
  "node_modules/jose/dist/browser/util/decode_jwt.js"() {
    init_base64url2();
    init_buffer_utils();
    init_is_object();
    init_errors();
  }
});

// node_modules/jose/dist/browser/runtime/generate.js
async function generateSecret(alg, options) {
  let length;
  let algorithm;
  let keyUsages;
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512":
      length = parseInt(alg.slice(-3), 10);
      algorithm = { name: "HMAC", hash: `SHA-${length}`, length };
      keyUsages = ["sign", "verify"];
      break;
    case "A128CBC-HS256":
    case "A192CBC-HS384":
    case "A256CBC-HS512":
      length = parseInt(alg.slice(-3), 10);
      return random_default(new Uint8Array(length >> 3));
    case "A128KW":
    case "A192KW":
    case "A256KW":
      length = parseInt(alg.slice(1, 4), 10);
      algorithm = { name: "AES-KW", length };
      keyUsages = ["wrapKey", "unwrapKey"];
      break;
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW":
    case "A128GCM":
    case "A192GCM":
    case "A256GCM":
      length = parseInt(alg.slice(1, 4), 10);
      algorithm = { name: "AES-GCM", length };
      keyUsages = ["encrypt", "decrypt"];
      break;
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
  }
  return webcrypto_default.subtle.generateKey(algorithm, options?.extractable ?? false, keyUsages);
}
function getModulusLengthOption(options) {
  const modulusLength = options?.modulusLength ?? 2048;
  if (typeof modulusLength !== "number" || modulusLength < 2048) {
    throw new JOSENotSupported("Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used");
  }
  return modulusLength;
}
async function generateKeyPair(alg, options) {
  let algorithm;
  let keyUsages;
  switch (alg) {
    case "PS256":
    case "PS384":
    case "PS512":
      algorithm = {
        name: "RSA-PSS",
        hash: `SHA-${alg.slice(-3)}`,
        publicExponent: new Uint8Array([1, 0, 1]),
        modulusLength: getModulusLengthOption(options)
      };
      keyUsages = ["sign", "verify"];
      break;
    case "RS256":
    case "RS384":
    case "RS512":
      algorithm = {
        name: "RSASSA-PKCS1-v1_5",
        hash: `SHA-${alg.slice(-3)}`,
        publicExponent: new Uint8Array([1, 0, 1]),
        modulusLength: getModulusLengthOption(options)
      };
      keyUsages = ["sign", "verify"];
      break;
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      algorithm = {
        name: "RSA-OAEP",
        hash: `SHA-${parseInt(alg.slice(-3), 10) || 1}`,
        publicExponent: new Uint8Array([1, 0, 1]),
        modulusLength: getModulusLengthOption(options)
      };
      keyUsages = ["decrypt", "unwrapKey", "encrypt", "wrapKey"];
      break;
    case "ES256":
      algorithm = { name: "ECDSA", namedCurve: "P-256" };
      keyUsages = ["sign", "verify"];
      break;
    case "ES384":
      algorithm = { name: "ECDSA", namedCurve: "P-384" };
      keyUsages = ["sign", "verify"];
      break;
    case "ES512":
      algorithm = { name: "ECDSA", namedCurve: "P-521" };
      keyUsages = ["sign", "verify"];
      break;
    case "Ed25519":
      algorithm = { name: "Ed25519" };
      keyUsages = ["sign", "verify"];
      break;
    case "EdDSA": {
      keyUsages = ["sign", "verify"];
      const crv = options?.crv ?? "Ed25519";
      switch (crv) {
        case "Ed25519":
        case "Ed448":
          algorithm = { name: crv };
          break;
        default:
          throw new JOSENotSupported("Invalid or unsupported crv option provided");
      }
      break;
    }
    case "ECDH-ES":
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      keyUsages = ["deriveKey", "deriveBits"];
      const crv = options?.crv ?? "P-256";
      switch (crv) {
        case "P-256":
        case "P-384":
        case "P-521": {
          algorithm = { name: "ECDH", namedCurve: crv };
          break;
        }
        case "X25519":
        case "X448":
          algorithm = { name: crv };
          break;
        default:
          throw new JOSENotSupported("Invalid or unsupported crv option provided, supported values are P-256, P-384, P-521, X25519, and X448");
      }
      break;
    }
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
  }
  return webcrypto_default.subtle.generateKey(algorithm, options?.extractable ?? false, keyUsages);
}
var init_generate = __esm({
  "node_modules/jose/dist/browser/runtime/generate.js"() {
    init_webcrypto();
    init_errors();
    init_random();
  }
});

// node_modules/jose/dist/browser/key/generate_key_pair.js
async function generateKeyPair2(alg, options) {
  return generateKeyPair(alg, options);
}
var init_generate_key_pair = __esm({
  "node_modules/jose/dist/browser/key/generate_key_pair.js"() {
    init_generate();
  }
});

// node_modules/jose/dist/browser/key/generate_secret.js
async function generateSecret2(alg, options) {
  return generateSecret(alg, options);
}
var init_generate_secret = __esm({
  "node_modules/jose/dist/browser/key/generate_secret.js"() {
    init_generate();
  }
});

// node_modules/jose/dist/browser/runtime/runtime.js
var runtime_default;
var init_runtime = __esm({
  "node_modules/jose/dist/browser/runtime/runtime.js"() {
    runtime_default = "WebCryptoAPI";
  }
});

// node_modules/jose/dist/browser/util/runtime.js
var runtime_default2;
var init_runtime2 = __esm({
  "node_modules/jose/dist/browser/util/runtime.js"() {
    init_runtime();
    runtime_default2 = runtime_default;
  }
});

// node_modules/jose/dist/browser/index.js
var browser_exports = {};
__export(browser_exports, {
  CompactEncrypt: () => CompactEncrypt,
  CompactSign: () => CompactSign,
  EmbeddedJWK: () => EmbeddedJWK,
  EncryptJWT: () => EncryptJWT,
  FlattenedEncrypt: () => FlattenedEncrypt,
  FlattenedSign: () => FlattenedSign,
  GeneralEncrypt: () => GeneralEncrypt,
  GeneralSign: () => GeneralSign,
  SignJWT: () => SignJWT,
  UnsecuredJWT: () => UnsecuredJWT,
  base64url: () => base64url_exports2,
  calculateJwkThumbprint: () => calculateJwkThumbprint,
  calculateJwkThumbprintUri: () => calculateJwkThumbprintUri,
  compactDecrypt: () => compactDecrypt,
  compactVerify: () => compactVerify,
  createLocalJWKSet: () => createLocalJWKSet,
  createRemoteJWKSet: () => createRemoteJWKSet,
  cryptoRuntime: () => runtime_default2,
  decodeJwt: () => decodeJwt,
  decodeProtectedHeader: () => decodeProtectedHeader,
  errors: () => errors_exports,
  experimental_jwksCache: () => experimental_jwksCache,
  exportJWK: () => exportJWK,
  exportPKCS8: () => exportPKCS8,
  exportSPKI: () => exportSPKI,
  flattenedDecrypt: () => flattenedDecrypt,
  flattenedVerify: () => flattenedVerify,
  generalDecrypt: () => generalDecrypt,
  generalVerify: () => generalVerify,
  generateKeyPair: () => generateKeyPair2,
  generateSecret: () => generateSecret2,
  importJWK: () => importJWK,
  importPKCS8: () => importPKCS8,
  importSPKI: () => importSPKI,
  importX509: () => importX509,
  jwksCache: () => jwksCache,
  jwtDecrypt: () => jwtDecrypt,
  jwtVerify: () => jwtVerify
});
var init_browser = __esm({
  "node_modules/jose/dist/browser/index.js"() {
    init_decrypt3();
    init_decrypt2();
    init_decrypt4();
    init_encrypt3();
    init_verify3();
    init_verify2();
    init_verify4();
    init_verify5();
    init_decrypt5();
    init_encrypt4();
    init_encrypt2();
    init_sign3();
    init_sign2();
    init_sign4();
    init_sign5();
    init_encrypt5();
    init_thumbprint();
    init_embedded();
    init_local();
    init_remote();
    init_unsecured();
    init_export();
    init_import();
    init_decode_protected_header();
    init_decode_jwt();
    init_errors();
    init_generate_key_pair();
    init_generate_secret();
    init_base64url2();
    init_runtime2();
  }
});

// node_modules/@atproto/jwk-jose/dist/util.js
var require_util3 = __commonJS({
  "node_modules/@atproto/jwk-jose/dist/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.either = either;
    function either(a, b) {
      if (a != null && b != null && a !== b) {
        throw new TypeError(`Expected "${b}", got "${a}"`);
      }
      return a ?? b ?? void 0;
    }
  }
});

// node_modules/@atproto/jwk-jose/dist/jose-key.js
var require_jose_key = __commonJS({
  "node_modules/@atproto/jwk-jose/dist/jose-key.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JoseKey = void 0;
    var jose_1 = (init_browser(), __toCommonJS(browser_exports));
    var jwk_1 = require_dist();
    var util_js_1 = require_util3();
    var { JOSEError: JOSEError2 } = jose_1.errors;
    var JoseKey = class _JoseKey extends jwk_1.Key {
      /**
       * Some runtimes (e.g. Bun) require an `alg` second argument to be set when
       * invoking `importJWK`. In order to be compatible with these runtimes, we
       * provide the following method to ensure the `alg` is always set. We also
       * take the opportunity to ensure that the `alg` is compatible with this key.
       */
      async getKeyObj(alg) {
        if (!this.algorithms.includes(alg)) {
          throw new jwk_1.JwkError(`Key cannot be used with algorithm "${alg}"`);
        }
        try {
          return await (0, jose_1.importJWK)(this.jwk, alg);
        } catch (cause) {
          throw new jwk_1.JwkError("Failed to import JWK", void 0, { cause });
        }
      }
      async createJwt(header, payload) {
        try {
          const { kid } = header;
          if (kid && kid !== this.kid) {
            throw new jwk_1.JwtCreateError(`Invalid "kid" (${kid}) used to sign with key "${this.kid}"`);
          }
          const { alg } = header;
          if (!alg) {
            throw new jwk_1.JwtCreateError('Missing "alg" in JWT header');
          }
          const keyObj = await this.getKeyObj(alg);
          const jwtBuilder = new jose_1.SignJWT(payload).setProtectedHeader({
            ...header,
            alg,
            kid: this.kid
          });
          const signedJwt = await jwtBuilder.sign(keyObj);
          return signedJwt;
        } catch (cause) {
          if (cause instanceof JOSEError2) {
            throw new jwk_1.JwtCreateError(cause.message, cause.code, { cause });
          } else {
            throw jwk_1.JwtCreateError.from(cause);
          }
        }
      }
      async verifyJwt(token, options) {
        try {
          const result = await (0, jose_1.jwtVerify)(token, async ({ alg }) => this.getKeyObj(alg), { ...options, algorithms: this.algorithms });
          const headerParsed = jwk_1.jwtHeaderSchema.safeParse(result.protectedHeader);
          if (!headerParsed.success) {
            throw new jwk_1.JwtVerifyError("Invalid JWT header", void 0, {
              cause: headerParsed.error
            });
          }
          const payloadParsed = jwk_1.jwtPayloadSchema.safeParse(result.payload);
          if (!payloadParsed.success) {
            throw new jwk_1.JwtVerifyError("Invalid JWT payload", void 0, {
              cause: payloadParsed.error
            });
          }
          return {
            protectedHeader: headerParsed.data,
            // "requiredClaims" enforced by jwtVerify()
            payload: payloadParsed.data
          };
        } catch (cause) {
          if (cause instanceof JOSEError2) {
            throw new jwk_1.JwtVerifyError(cause.message, cause.code, { cause });
          } else {
            throw jwk_1.JwtVerifyError.from(cause);
          }
        }
      }
      static async generateKeyPair(allowedAlgos = ["ES256"], options) {
        if (!allowedAlgos.length) {
          throw new jwk_1.JwkError("No algorithms provided for key generation");
        }
        const errors = [];
        for (const alg of allowedAlgos) {
          try {
            return await (0, jose_1.generateKeyPair)(alg, options);
          } catch (err) {
            errors.push(err);
          }
        }
        throw new jwk_1.JwkError("Failed to generate key pair", void 0, {
          cause: new AggregateError(errors, "None of the algorithms worked")
        });
      }
      static async generate(allowedAlgos = ["ES256"], kid, options) {
        const kp = await this.generateKeyPair(allowedAlgos, {
          ...options,
          extractable: true
        });
        return this.fromKeyLike(kp.privateKey, kid);
      }
      static async fromImportable(input, kid) {
        if (typeof input === "string") {
          if (input.startsWith("-----")) {
            return this.fromPKCS8(input, "", kid);
          }
          if (input.startsWith("{")) {
            return this.fromJWK(input, kid);
          }
          throw new jwk_1.JwkError("Invalid input");
        }
        if (typeof input === "object") {
          if ("kty" in input || "alg" in input) {
            return this.fromJWK(input, kid);
          }
          return this.fromKeyLike(input, kid);
        }
        throw new jwk_1.JwkError("Invalid input");
      }
      /**
       * @see {@link exportJWK}
       */
      static async fromKeyLike(keyLike, kid, alg) {
        const jwk = await (0, jose_1.exportJWK)(keyLike);
        if (alg) {
          if (!jwk.alg)
            jwk.alg = alg;
          else if (jwk.alg !== alg)
            throw new jwk_1.JwkError('Invalid "alg" in JWK');
        }
        return this.fromJWK(jwk, kid);
      }
      /**
       * @see {@link importPKCS8}
       */
      static async fromPKCS8(pem, alg, kid) {
        const keyLike = await (0, jose_1.importPKCS8)(pem, alg, { extractable: true });
        return this.fromKeyLike(keyLike, kid);
      }
      static async fromJWK(input, inputKid) {
        const jwk = typeof input === "string" ? JSON.parse(input) : input;
        if (!jwk || typeof jwk !== "object")
          throw new jwk_1.JwkError("Invalid JWK");
        const kid = (0, util_js_1.either)(jwk.kid, inputKid);
        if (jwk.use != null && (0, jwk_1.isPrivateJwk)(jwk)) {
          console.warn('Deprecation warning: Private JWK with a "use" property will be rejected in the future. Please remove replace "use" with (valid) "key_ops".');
          jwk.key_ops ??= jwk.use === "sig" ? ["sign"] : ["encrypt"];
          delete jwk.use;
        }
        return new _JoseKey(jwk_1.jwkSchema.parse({ ...jwk, kid }));
      }
    };
    exports.JoseKey = JoseKey;
  }
});

// node_modules/@atproto/jwk-jose/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@atproto/jwk-jose/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_jose_key(), exports);
  }
});

// node_modules/@atproto/jwk-webcrypto/dist/util.js
var require_util4 = __commonJS({
  "node_modules/@atproto/jwk-webcrypto/dist/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toSubtleAlgorithm = toSubtleAlgorithm;
    exports.fromSubtleAlgorithm = fromSubtleAlgorithm;
    exports.isCryptoKeyPair = isCryptoKeyPair;
    function toSubtleAlgorithm(alg, crv, options) {
      switch (alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          return {
            name: "RSA-PSS",
            hash: `SHA-${alg.slice(-3)}`,
            modulusLength: options?.modulusLength ?? 2048,
            publicExponent: new Uint8Array([1, 0, 1])
          };
        case "RS256":
        case "RS384":
        case "RS512":
          return {
            name: "RSASSA-PKCS1-v1_5",
            hash: `SHA-${alg.slice(-3)}`,
            modulusLength: options?.modulusLength ?? 2048,
            publicExponent: new Uint8Array([1, 0, 1])
          };
        case "ES256":
        case "ES384":
          return {
            name: "ECDSA",
            namedCurve: `P-${alg.slice(-3)}`
          };
        case "ES512":
          return {
            name: "ECDSA",
            namedCurve: "P-521"
          };
        default:
          throw new TypeError(`Unsupported alg "${alg}"`);
      }
    }
    function fromSubtleAlgorithm(algorithm) {
      switch (algorithm.name) {
        case "RSA-PSS":
        case "RSASSA-PKCS1-v1_5": {
          const hash = algorithm.hash.name;
          switch (hash) {
            case "SHA-256":
            case "SHA-384":
            case "SHA-512": {
              const prefix = algorithm.name === "RSA-PSS" ? "PS" : "RS";
              return `${prefix}${hash.slice(-3)}`;
            }
            default:
              throw new TypeError("unsupported RsaHashedKeyAlgorithm hash");
          }
        }
        case "ECDSA": {
          const namedCurve = algorithm.namedCurve;
          switch (namedCurve) {
            case "P-256":
            case "P-384":
            case "P-512":
              return `ES${namedCurve.slice(-3)}`;
            case "P-521":
              return "ES512";
            default:
              throw new TypeError("unsupported EcKeyAlgorithm namedCurve");
          }
        }
        case "Ed448":
        case "Ed25519":
          return "EdDSA";
        default:
          throw new TypeError(`Unexpected algorithm "${algorithm.name}"`);
      }
    }
    function isCryptoKeyPair(v, extractable) {
      return typeof v === "object" && v !== null && "privateKey" in v && v.privateKey instanceof CryptoKey && v.privateKey.type === "private" && (extractable == null || v.privateKey.extractable === extractable) && v.privateKey.usages.includes("sign") && "publicKey" in v && v.publicKey instanceof CryptoKey && v.publicKey.type === "public" && v.publicKey.extractable === true && v.publicKey.usages.includes("verify");
    }
  }
});

// node_modules/@atproto/jwk-webcrypto/dist/webcrypto-key.js
var require_webcrypto_key = __commonJS({
  "node_modules/@atproto/jwk-webcrypto/dist/webcrypto-key.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebcryptoKey = void 0;
    var jwk_1 = require_dist();
    var jwk_jose_1 = require_dist2();
    var util_js_1 = require_util4();
    var WebcryptoKey = class _WebcryptoKey extends jwk_jose_1.JoseKey {
      // We need to override the static method generate from JoseKey because
      // the browser needs both the private and public keys
      static async generate(allowedAlgos = ["ES256"], kid = crypto.randomUUID(), options) {
        const keyPair = await this.generateKeyPair(allowedAlgos, options);
        if (!(0, util_js_1.isCryptoKeyPair)(keyPair)) {
          throw new TypeError("Invalid CryptoKeyPair");
        }
        return this.fromKeypair(keyPair, kid);
      }
      static async fromKeypair(cryptoKeyPair, kid) {
        const { alg = (0, util_js_1.fromSubtleAlgorithm)(cryptoKeyPair.privateKey.algorithm), ...jwk } = await crypto.subtle.exportKey("jwk", cryptoKeyPair.privateKey.extractable ? cryptoKeyPair.privateKey : cryptoKeyPair.publicKey);
        return new _WebcryptoKey(jwk_1.jwkSchema.parse({ ...jwk, kid, alg }), cryptoKeyPair);
      }
      constructor(jwk, cryptoKeyPair) {
        if (!jwk.alg)
          throw new jwk_1.JwkError('JWK "alg" is required for Webcrypto keys');
        super(jwk);
        Object.defineProperty(this, "cryptoKeyPair", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: cryptoKeyPair
        });
      }
      get isPrivate() {
        return true;
      }
      async getKeyObj(alg) {
        if (this.jwk.alg !== alg) {
          throw new jwk_1.JwkError(`Key cannot be used with algorithm "${alg}"`);
        }
        return this.cryptoKeyPair.privateKey;
      }
    };
    exports.WebcryptoKey = WebcryptoKey;
  }
});

// node_modules/@atproto/jwk-webcrypto/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/@atproto/jwk-webcrypto/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_webcrypto_key(), exports);
  }
});

// node_modules/@atproto/did/dist/did-error.js
var require_did_error = __commonJS({
  "node_modules/@atproto/did/dist/did-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InvalidDidError = exports.DidError = void 0;
    var DidError = class _DidError extends Error {
      constructor(did, message2, code, status = 400, cause) {
        super(message2, { cause });
        Object.defineProperty(this, "did", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: did
        });
        Object.defineProperty(this, "code", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: code
        });
        Object.defineProperty(this, "status", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: status
        });
      }
      /**
       * For compatibility with error handlers in common HTTP frameworks.
       */
      get statusCode() {
        return this.status;
      }
      toString() {
        return `${this.constructor.name} ${this.code} (${this.did}): ${this.message}`;
      }
      static from(cause, did) {
        if (cause instanceof _DidError) {
          return cause;
        }
        const message2 = cause instanceof Error ? cause.message : typeof cause === "string" ? cause : "An unknown error occurred";
        const status = (typeof cause?.["statusCode"] === "number" ? cause["statusCode"] : void 0) ?? (typeof cause?.["status"] === "number" ? cause["status"] : void 0);
        return new _DidError(did, message2, "did-unknown-error", status, cause);
      }
    };
    exports.DidError = DidError;
    var InvalidDidError = class extends DidError {
      constructor(did, message2, cause) {
        super(did, message2, "did-invalid", 400, cause);
      }
    };
    exports.InvalidDidError = InvalidDidError;
  }
});

// node_modules/@atproto/did/dist/lib/uri.js
var require_uri = __commonJS({
  "node_modules/@atproto/did/dist/lib/uri.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.canParse = void 0;
    exports.isFragment = isFragment;
    exports.isHexDigit = isHexDigit;
    function isFragment(value, startIdx = 0, endIdx = value.length) {
      let charCode;
      for (let i = startIdx; i < endIdx; i++) {
        charCode = value.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122 || charCode >= 48 && charCode <= 57 || charCode === 45 || charCode === 46 || charCode === 95 || charCode === 126) {
        } else if (charCode === 33 || charCode === 36 || charCode === 38 || charCode === 39 || charCode === 40 || charCode === 41 || charCode === 42 || charCode === 43 || charCode === 44 || charCode === 59 || charCode === 61) {
        } else if (charCode === 58 || charCode === 64) {
        } else if (charCode === 47 || charCode === 63) {
        } else if (charCode === 37) {
          if (i + 2 >= endIdx)
            return false;
          if (!isHexDigit(value.charCodeAt(i + 1)))
            return false;
          if (!isHexDigit(value.charCodeAt(i + 2)))
            return false;
          i += 2;
        } else {
          return false;
        }
      }
      return true;
    }
    function isHexDigit(code) {
      return code >= 48 && code <= 57 || // 0-9
      code >= 65 && code <= 70 || // A-F
      code >= 97 && code <= 102;
    }
    exports.canParse = URL.canParse?.bind(URL) ?? ((url, base) => {
      try {
        new URL(url, base);
        return true;
      } catch {
        return false;
      }
    });
  }
});

// node_modules/@atproto/did/dist/methods/plc.js
var require_plc = __commonJS({
  "node_modules/@atproto/did/dist/methods/plc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DID_PLC_PREFIX = void 0;
    exports.isDidPlc = isDidPlc;
    exports.asDidPlc = asDidPlc;
    exports.assertDidPlc = assertDidPlc;
    var did_error_js_1 = require_did_error();
    var DID_PLC_PREFIX = `did:plc:`;
    exports.DID_PLC_PREFIX = DID_PLC_PREFIX;
    var DID_PLC_PREFIX_LENGTH = DID_PLC_PREFIX.length;
    var DID_PLC_LENGTH = 32;
    function isDidPlc(input) {
      if (typeof input !== "string")
        return false;
      if (input.length !== DID_PLC_LENGTH)
        return false;
      if (!input.startsWith(DID_PLC_PREFIX))
        return false;
      for (let i = DID_PLC_PREFIX_LENGTH; i < DID_PLC_LENGTH; i++) {
        if (!isBase32Char(input.charCodeAt(i)))
          return false;
      }
      return true;
    }
    function asDidPlc(input) {
      assertDidPlc(input);
      return input;
    }
    function assertDidPlc(input) {
      if (typeof input !== "string") {
        throw new did_error_js_1.InvalidDidError(typeof input, `DID must be a string`);
      }
      if (!input.startsWith(DID_PLC_PREFIX)) {
        throw new did_error_js_1.InvalidDidError(input, `Invalid did:plc prefix`);
      }
      if (input.length !== DID_PLC_LENGTH) {
        throw new did_error_js_1.InvalidDidError(input, `did:plc must be ${DID_PLC_LENGTH} characters long`);
      }
      for (let i = DID_PLC_PREFIX_LENGTH; i < DID_PLC_LENGTH; i++) {
        if (!isBase32Char(input.charCodeAt(i))) {
          throw new did_error_js_1.InvalidDidError(input, `Invalid character at position ${i}`);
        }
      }
    }
    var isBase32Char = (c) => c >= 97 && c <= 122 || c >= 50 && c <= 55;
  }
});

// node_modules/@atproto/did/dist/did.js
var require_did = __commonJS({
  "node_modules/@atproto/did/dist/did.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.didSchema = exports.DID_PREFIX = void 0;
    exports.assertDidMethod = assertDidMethod;
    exports.extractDidMethod = extractDidMethod;
    exports.assertDidMsid = assertDidMsid;
    exports.assertDid = assertDid;
    exports.isDid = isDid;
    exports.asDid = asDid;
    var zod_1 = require_zod();
    var did_error_js_1 = require_did_error();
    var DID_PREFIX = "did:";
    exports.DID_PREFIX = DID_PREFIX;
    var DID_PREFIX_LENGTH = DID_PREFIX.length;
    function assertDidMethod(input, start = 0, end = input.length) {
      if (!Number.isFinite(end) || !Number.isFinite(start) || end < start || end > input.length) {
        throw new TypeError("Invalid start or end position");
      }
      if (end === start) {
        throw new did_error_js_1.InvalidDidError(input, `Empty method name`);
      }
      let c;
      for (let i = start; i < end; i++) {
        c = input.charCodeAt(i);
        if ((c < 97 || c > 122) && // a-z
        (c < 48 || c > 57)) {
          throw new did_error_js_1.InvalidDidError(input, `Invalid character at position ${i} in DID method name`);
        }
      }
    }
    function extractDidMethod(did) {
      const msidSep = did.indexOf(":", DID_PREFIX_LENGTH);
      const method = did.slice(DID_PREFIX_LENGTH, msidSep);
      return method;
    }
    function assertDidMsid(input, start = 0, end = input.length) {
      if (!Number.isFinite(end) || !Number.isFinite(start) || end < start || end > input.length) {
        throw new TypeError("Invalid start or end position");
      }
      if (end === start) {
        throw new did_error_js_1.InvalidDidError(input, `DID method-specific id must not be empty`);
      }
      let c;
      for (let i = start; i < end; i++) {
        c = input.charCodeAt(i);
        if ((c < 97 || c > 122) && // a-z
        (c < 65 || c > 90) && // A-Z
        (c < 48 || c > 57) && // 0-9
        c !== 46 && // .
        c !== 45 && // -
        c !== 95) {
          if (c === 58) {
            if (i === end - 1) {
              throw new did_error_js_1.InvalidDidError(input, `DID cannot end with ":"`);
            }
            continue;
          }
          if (c === 37) {
            c = input.charCodeAt(++i);
            if ((c < 48 || c > 57) && (c < 65 || c > 70)) {
              throw new did_error_js_1.InvalidDidError(input, `Invalid pct-encoded character at position ${i}`);
            }
            c = input.charCodeAt(++i);
            if ((c < 48 || c > 57) && (c < 65 || c > 70)) {
              throw new did_error_js_1.InvalidDidError(input, `Invalid pct-encoded character at position ${i}`);
            }
            if (i >= end) {
              throw new did_error_js_1.InvalidDidError(input, `Incomplete pct-encoded character at position ${i - 2}`);
            }
            continue;
          }
          throw new did_error_js_1.InvalidDidError(input, `Disallowed character in DID at position ${i}`);
        }
      }
    }
    function assertDid(input) {
      if (typeof input !== "string") {
        throw new did_error_js_1.InvalidDidError(typeof input, `DID must be a string`);
      }
      const { length } = input;
      if (length > 2048) {
        throw new did_error_js_1.InvalidDidError(input, `DID is too long (2048 chars max)`);
      }
      if (!input.startsWith(DID_PREFIX)) {
        throw new did_error_js_1.InvalidDidError(input, `DID requires "${DID_PREFIX}" prefix`);
      }
      const idSep = input.indexOf(":", DID_PREFIX_LENGTH);
      if (idSep === -1) {
        throw new did_error_js_1.InvalidDidError(input, `Missing colon after method name`);
      }
      assertDidMethod(input, DID_PREFIX_LENGTH, idSep);
      assertDidMsid(input, idSep + 1, length);
    }
    function isDid(input) {
      try {
        assertDid(input);
        return true;
      } catch (err) {
        if (err instanceof did_error_js_1.DidError) {
          return false;
        }
        throw err;
      }
    }
    function asDid(input) {
      assertDid(input);
      return input;
    }
    exports.didSchema = zod_1.z.string().superRefine((value, ctx) => {
      try {
        assertDid(value);
        return true;
      } catch (err) {
        ctx.addIssue({
          code: zod_1.z.ZodIssueCode.custom,
          message: err instanceof Error ? err.message : "Unexpected error"
        });
        return false;
      }
    });
  }
});

// node_modules/@atproto/did/dist/methods/web.js
var require_web = __commonJS({
  "node_modules/@atproto/did/dist/methods/web.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DID_WEB_PREFIX = void 0;
    exports.isDidWeb = isDidWeb;
    exports.asDidWeb = asDidWeb;
    exports.assertDidWeb = assertDidWeb;
    exports.didWebToUrl = didWebToUrl;
    exports.urlToDidWeb = urlToDidWeb;
    exports.buildDidWebUrl = buildDidWebUrl;
    var did_error_js_1 = require_did_error();
    var did_js_1 = require_did();
    var uri_js_1 = require_uri();
    exports.DID_WEB_PREFIX = `did:web:`;
    function isDidWeb(input) {
      if (typeof input !== "string")
        return false;
      if (!input.startsWith(exports.DID_WEB_PREFIX))
        return false;
      if (input.charAt(exports.DID_WEB_PREFIX.length) === ":")
        return false;
      try {
        (0, did_js_1.assertDidMsid)(input, exports.DID_WEB_PREFIX.length);
      } catch {
        return false;
      }
      return (0, uri_js_1.canParse)(buildDidWebUrl(input));
    }
    function asDidWeb(input) {
      assertDidWeb(input);
      return input;
    }
    function assertDidWeb(input) {
      if (typeof input !== "string") {
        throw new did_error_js_1.InvalidDidError(typeof input, `DID must be a string`);
      }
      if (!input.startsWith(exports.DID_WEB_PREFIX)) {
        throw new did_error_js_1.InvalidDidError(input, `Invalid did:web prefix`);
      }
      if (input.charAt(exports.DID_WEB_PREFIX.length) === ":") {
        throw new did_error_js_1.InvalidDidError(input, "did:web MSID must not start with a colon");
      }
      (0, did_js_1.assertDidMsid)(input, exports.DID_WEB_PREFIX.length);
      if (!(0, uri_js_1.canParse)(buildDidWebUrl(input))) {
        throw new did_error_js_1.InvalidDidError(input, "Invalid Web DID");
      }
    }
    function didWebToUrl(did) {
      try {
        return new URL(buildDidWebUrl(did));
      } catch (cause) {
        throw new did_error_js_1.InvalidDidError(did, "Invalid Web DID", cause);
      }
    }
    function urlToDidWeb(url) {
      const port = url.port ? `%3A${url.port}` : "";
      const path = url.pathname === "/" ? "" : url.pathname.replaceAll("/", ":");
      return `did:web:${url.hostname}${port}${path}`;
    }
    function buildDidWebUrl(did) {
      const hostIdx = exports.DID_WEB_PREFIX.length;
      const pathIdx = did.indexOf(":", hostIdx);
      const hostEnc = pathIdx === -1 ? did.slice(hostIdx) : did.slice(hostIdx, pathIdx);
      const host = hostEnc.replaceAll("%3A", ":");
      const path = pathIdx === -1 ? "" : did.slice(pathIdx).replaceAll(":", "/");
      const proto = host.startsWith("localhost") && (host.length === 9 || host.charCodeAt(9) === 58) ? "http" : "https";
      return `${proto}://${host}${path}`;
    }
  }
});

// node_modules/@atproto/did/dist/methods.js
var require_methods = __commonJS({
  "node_modules/@atproto/did/dist/methods.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_plc(), exports);
    __exportStar(require_web(), exports);
  }
});

// node_modules/@atproto/did/dist/utils.js
var require_utils = __commonJS({
  "node_modules/@atproto/did/dist/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.matchesIdentifier = matchesIdentifier;
    function matchesIdentifier(did, id, candidate) {
      return candidate.charCodeAt(0) === 35 ? candidate.length === id.length + 1 && candidate.endsWith(id) : candidate.length === id.length + 1 + did.length && candidate.charCodeAt(did.length) === 35 && // '#'
      candidate.startsWith(did) && candidate.endsWith(id);
    }
  }
});

// node_modules/@atproto/did/dist/atproto.js
var require_atproto = __commonJS({
  "node_modules/@atproto/did/dist/atproto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ATPROTO_VERIFICATION_METHOD_TYPES = exports.isAtprotoAudience = exports.atprotoDidSchema = void 0;
    exports.isAtprotoDid = isAtprotoDid;
    exports.asAtprotoDid = asAtprotoDid;
    exports.assertAtprotoDid = assertAtprotoDid;
    exports.assertAtprotoDidWeb = assertAtprotoDidWeb;
    exports.isAtprotoDidWeb = isAtprotoDidWeb;
    exports.extractAtprotoData = extractAtprotoData;
    exports.extractPdsUrl = extractPdsUrl;
    exports.isAtprotoAka = isAtprotoAka;
    exports.isAtprotoPersonalDataServerService = isAtprotoPersonalDataServerService;
    exports.isAtprotoVerificationMethod = isAtprotoVerificationMethod;
    var zod_1 = require_zod();
    var did_error_js_1 = require_did_error();
    var uri_js_1 = require_uri();
    var methods_js_1 = require_methods();
    var utils_js_1 = require_utils();
    exports.atprotoDidSchema = zod_1.z.string().refine(isAtprotoDid, `Atproto only allows "plc" and "web" DID methods`);
    function isAtprotoDid(input) {
      return (0, methods_js_1.isDidPlc)(input) || isAtprotoDidWeb(input);
    }
    function asAtprotoDid(input) {
      assertAtprotoDid(input);
      return input;
    }
    function assertAtprotoDid(input) {
      if (typeof input !== "string") {
        throw new did_error_js_1.InvalidDidError(typeof input, `DID must be a string`);
      } else if (input.startsWith(methods_js_1.DID_PLC_PREFIX)) {
        (0, methods_js_1.assertDidPlc)(input);
      } else if (input.startsWith(methods_js_1.DID_WEB_PREFIX)) {
        assertAtprotoDidWeb(input);
      } else {
        throw new did_error_js_1.InvalidDidError(input, `Atproto only allows "plc" and "web" DID methods`);
      }
    }
    function assertAtprotoDidWeb(input) {
      (0, methods_js_1.assertDidWeb)(input);
      if (isDidWebWithPath(input)) {
        throw new did_error_js_1.InvalidDidError(input, `Atproto does not allow path components in Web DIDs`);
      }
      if (isDidWebWithHttpsPort(input)) {
        throw new did_error_js_1.InvalidDidError(input, `Atproto does not allow port numbers in Web DIDs, except for localhost`);
      }
    }
    function isAtprotoDidWeb(input) {
      if (!(0, methods_js_1.isDidWeb)(input)) {
        return false;
      }
      if (isDidWebWithPath(input)) {
        return false;
      }
      if (isDidWebWithHttpsPort(input)) {
        return false;
      }
      return true;
    }
    function isDidWebWithPath(did) {
      return did.includes(":", methods_js_1.DID_WEB_PREFIX.length);
    }
    function isLocalhostDid(did) {
      return did === "did:web:localhost" || did.startsWith("did:web:localhost:") || did.startsWith("did:web:localhost%3A");
    }
    function isDidWebWithHttpsPort(did) {
      if (isLocalhostDid(did))
        return false;
      const pathIdx = did.indexOf(":", methods_js_1.DID_WEB_PREFIX.length);
      const hasPort = pathIdx === -1 ? (
        // No path component, check if there's a port separator anywhere after
        // the "did:web:" prefix
        did.includes("%3A", methods_js_1.DID_WEB_PREFIX.length)
      ) : (
        // There is a path component; if there is an encoded colon *before* it,
        // then there is a port number
        did.lastIndexOf("%3A", pathIdx) !== -1
      );
      return hasPort;
    }
    var isAtprotoAudience = (value) => {
      if (typeof value !== "string")
        return false;
      const hashIndex = value.indexOf("#");
      if (hashIndex === -1)
        return false;
      if (value.indexOf("#", hashIndex + 1) !== -1)
        return false;
      return (0, uri_js_1.isFragment)(value, hashIndex + 1) && isAtprotoDid(value.slice(0, hashIndex));
    };
    exports.isAtprotoAudience = isAtprotoAudience;
    function extractAtprotoData(document2) {
      return {
        did: document2.id,
        aka: document2.alsoKnownAs?.find(isAtprotoAka)?.slice(5),
        key: document2.verificationMethod?.find(isAtprotoVerificationMethod, document2),
        pds: document2.service?.find(isAtprotoPersonalDataServerService, document2)
      };
    }
    function extractPdsUrl(document2) {
      const service = document2.service?.find(isAtprotoPersonalDataServerService, document2);
      if (!service) {
        throw new did_error_js_1.DidError(document2.id, `Document ${document2.id} does not contain a (valid) #atproto_pds service URL`, "did-service-not-found");
      }
      return new URL(service.serviceEndpoint);
    }
    function isAtprotoAka(value) {
      return value.startsWith("at://");
    }
    function isAtprotoPersonalDataServerService(service) {
      return service?.type === "AtprotoPersonalDataServer" && typeof service.serviceEndpoint === "string" && (0, uri_js_1.canParse)(service.serviceEndpoint) && (0, utils_js_1.matchesIdentifier)(this.id, "atproto_pds", service.id);
    }
    exports.ATPROTO_VERIFICATION_METHOD_TYPES = Object.freeze([
      "EcdsaSecp256r1VerificationKey2019",
      "EcdsaSecp256k1VerificationKey2019",
      "Multikey"
    ]);
    function isAtprotoVerificationMethod(method) {
      return typeof method === "object" && typeof method?.publicKeyMultibase === "string" && exports.ATPROTO_VERIFICATION_METHOD_TYPES.includes(method.type) && (0, utils_js_1.matchesIdentifier)(this.id, "atproto", method.id);
    }
  }
});

// node_modules/@atproto/did/dist/did-document.js
var require_did_document = __commonJS({
  "node_modules/@atproto/did/dist/did-document.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.didDocumentValidator = exports.didDocumentSchema = void 0;
    var zod_1 = require_zod();
    var did_js_1 = require_did();
    var uri_js_1 = require_uri();
    var rfc3968UriSchema = zod_1.z.string().url("RFC3968 compliant URI");
    var didControllerSchema = zod_1.z.union([did_js_1.didSchema, zod_1.z.array(did_js_1.didSchema)]);
    var didRelativeUriSchema = zod_1.z.union([
      rfc3968UriSchema.refine((value) => {
        const fragmentIndex = value.indexOf("#");
        if (fragmentIndex === -1)
          return false;
        return (0, uri_js_1.isFragment)(value, fragmentIndex + 1);
      }, {
        message: "Missing or invalid fragment in RFC3968 URI"
      }),
      zod_1.z.string().refine((value) => value.charCodeAt(0) === 35, {
        message: "Fragment must start with #"
      }).refine((value) => (0, uri_js_1.isFragment)(value, 1), {
        message: "Invalid char in URI fragment"
      })
    ]);
    var didVerificationMethodSchema = zod_1.z.object({
      id: didRelativeUriSchema,
      type: zod_1.z.string().min(1),
      controller: didControllerSchema,
      publicKeyJwk: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
      publicKeyMultibase: zod_1.z.string().optional()
    });
    var didServiceIdSchema = didRelativeUriSchema;
    var didServiceTypeSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]);
    var didServiceEndpointSchema = zod_1.z.union([
      rfc3968UriSchema,
      zod_1.z.record(zod_1.z.string(), rfc3968UriSchema),
      zod_1.z.array(zod_1.z.union([rfc3968UriSchema, zod_1.z.record(zod_1.z.string(), rfc3968UriSchema)])).nonempty()
    ]);
    var didServiceSchema = zod_1.z.object({
      id: didServiceIdSchema,
      type: didServiceTypeSchema,
      serviceEndpoint: didServiceEndpointSchema
    });
    var verificationMethodReference = zod_1.z.union([
      //
      didRelativeUriSchema,
      didVerificationMethodSchema
    ]);
    exports.didDocumentSchema = zod_1.z.object({
      "@context": zod_1.z.union([
        zod_1.z.literal("https://www.w3.org/ns/did/v1"),
        zod_1.z.array(zod_1.z.string().url()).nonempty().refine((data) => data[0] === "https://www.w3.org/ns/did/v1", {
          message: "First @context must be https://www.w3.org/ns/did/v1"
        })
      ]).optional(),
      id: did_js_1.didSchema,
      controller: didControllerSchema.optional(),
      alsoKnownAs: zod_1.z.array(rfc3968UriSchema).optional(),
      service: zod_1.z.array(didServiceSchema).optional(),
      authentication: zod_1.z.array(verificationMethodReference).optional(),
      verificationMethod: zod_1.z.array(didVerificationMethodSchema).optional()
    });
    exports.didDocumentValidator = exports.didDocumentSchema.superRefine(({ id: did, service }, ctx) => {
      if (service) {
        const visited = /* @__PURE__ */ new Set();
        for (let i = 0; i < service.length; i++) {
          const current = service[i];
          const serviceId = current.id.startsWith("#") ? `${did}${current.id}` : current.id;
          if (!visited.has(serviceId)) {
            visited.add(serviceId);
          } else {
            ctx.addIssue({
              code: zod_1.z.ZodIssueCode.custom,
              message: `Duplicate service id (${current.id}) found in the document`,
              path: ["service", i, "id"]
            });
          }
        }
      }
    });
  }
});

// node_modules/@atproto/did/dist/index.js
var require_dist4 = __commonJS({
  "node_modules/@atproto/did/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_atproto(), exports);
    __exportStar(require_did_document(), exports);
    __exportStar(require_did_error(), exports);
    __exportStar(require_did(), exports);
    __exportStar(require_methods(), exports);
    __exportStar(require_utils(), exports);
  }
});

// node_modules/@atproto-labs/simple-store/dist/cached-getter.js
var require_cached_getter = __commonJS({
  "node_modules/@atproto-labs/simple-store/dist/cached-getter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CachedGetter = void 0;
    var returnTrue = () => true;
    var returnFalse = () => false;
    var CachedGetter = class {
      constructor(getter, store, options = {}) {
        Object.defineProperty(this, "getter", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: getter
        });
        Object.defineProperty(this, "store", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: store
        });
        Object.defineProperty(this, "options", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: options
        });
        Object.defineProperty(this, "pending", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: /* @__PURE__ */ new Map()
        });
      }
      async get(key, { signal, context, allowStale = false, noCache = false } = {}) {
        signal?.throwIfAborted();
        const { isStale, deleteOnError } = this.options;
        const allowStored = noCache ? returnFalse : allowStale || isStale == null ? returnTrue : async (value2) => !await isStale(key, value2);
        let previousExecutionFlow;
        while (previousExecutionFlow = this.pending.get(key)) {
          try {
            const { isFresh, value: value2 } = await previousExecutionFlow;
            if (isFresh)
              return value2;
            if (await allowStored(value2))
              return value2;
          } catch {
          }
          signal?.throwIfAborted();
        }
        const currentExecutionFlow = Promise.resolve().then(async () => {
          const storedValue = await this.getStored(key, { signal });
          if (storedValue !== void 0 && await allowStored(storedValue)) {
            return { isFresh: false, value: storedValue };
          }
          return Promise.resolve().then(async () => {
            const options = { signal, noCache, context };
            return this.getter.call(null, key, options, storedValue);
          }).catch(async (err) => {
            if (storedValue !== void 0) {
              try {
                if (await deleteOnError?.(err, key, storedValue)) {
                  await this.delStored(key, err);
                }
              } catch (error) {
                throw new AggregateError([err, error], "Error while deleting stored value");
              }
            }
            throw err;
          }).then(async (value2) => {
            await this.setStored(key, value2);
            return { isFresh: true, value: value2 };
          });
        }).finally(() => {
          this.pending.delete(key);
        });
        if (this.pending.has(key)) {
          throw new Error("Concurrent request for the same key");
        }
        this.pending.set(key, currentExecutionFlow);
        const { value } = await currentExecutionFlow;
        return value;
      }
      async getStored(key, options) {
        try {
          return await this.store.get(key, options);
        } catch (err) {
          return void 0;
        }
      }
      async setStored(key, value) {
        try {
          await this.store.set(key, value);
        } catch (err) {
          const onStoreError = this.options?.onStoreError;
          await onStoreError?.(err, key, value);
        }
      }
      async delStored(key, _cause) {
        await this.store.del(key);
      }
    };
    exports.CachedGetter = CachedGetter;
  }
});

// node_modules/@atproto-labs/simple-store/dist/simple-store.js
var require_simple_store = __commonJS({
  "node_modules/@atproto-labs/simple-store/dist/simple-store.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@atproto-labs/simple-store/dist/util.js
var require_util5 = __commonJS({
  "node_modules/@atproto-labs/simple-store/dist/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@atproto-labs/simple-store/dist/index.js
var require_dist5 = __commonJS({
  "node_modules/@atproto-labs/simple-store/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_cached_getter(), exports);
    __exportStar(require_simple_store(), exports);
    __exportStar(require_util5(), exports);
  }
});

// node_modules/lru-cache/dist/commonjs/index.js
var require_commonjs = __commonJS({
  "node_modules/lru-cache/dist/commonjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LRUCache = void 0;
    var perf = typeof performance === "object" && performance && typeof performance.now === "function" ? performance : Date;
    var warned = /* @__PURE__ */ new Set();
    var PROCESS = typeof process === "object" && !!process ? process : {};
    var emitWarning = (msg, type, code, fn) => {
      typeof PROCESS.emitWarning === "function" ? PROCESS.emitWarning(msg, type, code, fn) : console.error(`[${code}] ${type}: ${msg}`);
    };
    var AC = globalThis.AbortController;
    var AS = globalThis.AbortSignal;
    if (typeof AC === "undefined") {
      AS = class AbortSignal {
        onabort;
        _onabort = [];
        reason;
        aborted = false;
        addEventListener(_, fn) {
          this._onabort.push(fn);
        }
      };
      AC = class AbortController {
        constructor() {
          warnACPolyfill();
        }
        signal = new AS();
        abort(reason) {
          if (this.signal.aborted)
            return;
          this.signal.reason = reason;
          this.signal.aborted = true;
          for (const fn of this.signal._onabort) {
            fn(reason);
          }
          this.signal.onabort?.(reason);
        }
      };
      let printACPolyfillWarning = PROCESS.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1";
      const warnACPolyfill = () => {
        if (!printACPolyfillWarning)
          return;
        printACPolyfillWarning = false;
        emitWarning("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", warnACPolyfill);
      };
    }
    var shouldWarn = (code) => !warned.has(code);
    var TYPE = Symbol("type");
    var isPosInt = (n) => n && n === Math.floor(n) && n > 0 && isFinite(n);
    var getUintArray = (max) => !isPosInt(max) ? null : max <= Math.pow(2, 8) ? Uint8Array : max <= Math.pow(2, 16) ? Uint16Array : max <= Math.pow(2, 32) ? Uint32Array : max <= Number.MAX_SAFE_INTEGER ? ZeroArray : null;
    var ZeroArray = class extends Array {
      constructor(size) {
        super(size);
        this.fill(0);
      }
    };
    var Stack = class _Stack {
      heap;
      length;
      // private constructor
      static #constructing = false;
      static create(max) {
        const HeapCls = getUintArray(max);
        if (!HeapCls)
          return [];
        _Stack.#constructing = true;
        const s = new _Stack(max, HeapCls);
        _Stack.#constructing = false;
        return s;
      }
      constructor(max, HeapCls) {
        if (!_Stack.#constructing) {
          throw new TypeError("instantiate Stack using Stack.create(n)");
        }
        this.heap = new HeapCls(max);
        this.length = 0;
      }
      push(n) {
        this.heap[this.length++] = n;
      }
      pop() {
        return this.heap[--this.length];
      }
    };
    var LRUCache = class _LRUCache {
      // options that cannot be changed without disaster
      #max;
      #maxSize;
      #dispose;
      #disposeAfter;
      #fetchMethod;
      #memoMethod;
      /**
       * {@link LRUCache.OptionsBase.ttl}
       */
      ttl;
      /**
       * {@link LRUCache.OptionsBase.ttlResolution}
       */
      ttlResolution;
      /**
       * {@link LRUCache.OptionsBase.ttlAutopurge}
       */
      ttlAutopurge;
      /**
       * {@link LRUCache.OptionsBase.updateAgeOnGet}
       */
      updateAgeOnGet;
      /**
       * {@link LRUCache.OptionsBase.updateAgeOnHas}
       */
      updateAgeOnHas;
      /**
       * {@link LRUCache.OptionsBase.allowStale}
       */
      allowStale;
      /**
       * {@link LRUCache.OptionsBase.noDisposeOnSet}
       */
      noDisposeOnSet;
      /**
       * {@link LRUCache.OptionsBase.noUpdateTTL}
       */
      noUpdateTTL;
      /**
       * {@link LRUCache.OptionsBase.maxEntrySize}
       */
      maxEntrySize;
      /**
       * {@link LRUCache.OptionsBase.sizeCalculation}
       */
      sizeCalculation;
      /**
       * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
       */
      noDeleteOnFetchRejection;
      /**
       * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
       */
      noDeleteOnStaleGet;
      /**
       * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
       */
      allowStaleOnFetchAbort;
      /**
       * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
       */
      allowStaleOnFetchRejection;
      /**
       * {@link LRUCache.OptionsBase.ignoreFetchAbort}
       */
      ignoreFetchAbort;
      // computed properties
      #size;
      #calculatedSize;
      #keyMap;
      #keyList;
      #valList;
      #next;
      #prev;
      #head;
      #tail;
      #free;
      #disposed;
      #sizes;
      #starts;
      #ttls;
      #hasDispose;
      #hasFetchMethod;
      #hasDisposeAfter;
      /**
       * Do not call this method unless you need to inspect the
       * inner workings of the cache.  If anything returned by this
       * object is modified in any way, strange breakage may occur.
       *
       * These fields are private for a reason!
       *
       * @internal
       */
      static unsafeExposeInternals(c) {
        return {
          // properties
          starts: c.#starts,
          ttls: c.#ttls,
          sizes: c.#sizes,
          keyMap: c.#keyMap,
          keyList: c.#keyList,
          valList: c.#valList,
          next: c.#next,
          prev: c.#prev,
          get head() {
            return c.#head;
          },
          get tail() {
            return c.#tail;
          },
          free: c.#free,
          // methods
          isBackgroundFetch: (p) => c.#isBackgroundFetch(p),
          backgroundFetch: (k, index, options, context) => c.#backgroundFetch(k, index, options, context),
          moveToTail: (index) => c.#moveToTail(index),
          indexes: (options) => c.#indexes(options),
          rindexes: (options) => c.#rindexes(options),
          isStale: (index) => c.#isStale(index)
        };
      }
      // Protected read-only members
      /**
       * {@link LRUCache.OptionsBase.max} (read-only)
       */
      get max() {
        return this.#max;
      }
      /**
       * {@link LRUCache.OptionsBase.maxSize} (read-only)
       */
      get maxSize() {
        return this.#maxSize;
      }
      /**
       * The total computed size of items in the cache (read-only)
       */
      get calculatedSize() {
        return this.#calculatedSize;
      }
      /**
       * The number of items stored in the cache (read-only)
       */
      get size() {
        return this.#size;
      }
      /**
       * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
       */
      get fetchMethod() {
        return this.#fetchMethod;
      }
      get memoMethod() {
        return this.#memoMethod;
      }
      /**
       * {@link LRUCache.OptionsBase.dispose} (read-only)
       */
      get dispose() {
        return this.#dispose;
      }
      /**
       * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
       */
      get disposeAfter() {
        return this.#disposeAfter;
      }
      constructor(options) {
        const { max = 0, ttl, ttlResolution = 1, ttlAutopurge, updateAgeOnGet, updateAgeOnHas, allowStale, dispose, disposeAfter, noDisposeOnSet, noUpdateTTL, maxSize = 0, maxEntrySize = 0, sizeCalculation, fetchMethod, memoMethod, noDeleteOnFetchRejection, noDeleteOnStaleGet, allowStaleOnFetchRejection, allowStaleOnFetchAbort, ignoreFetchAbort } = options;
        if (max !== 0 && !isPosInt(max)) {
          throw new TypeError("max option must be a nonnegative integer");
        }
        const UintArray = max ? getUintArray(max) : Array;
        if (!UintArray) {
          throw new Error("invalid max value: " + max);
        }
        this.#max = max;
        this.#maxSize = maxSize;
        this.maxEntrySize = maxEntrySize || this.#maxSize;
        this.sizeCalculation = sizeCalculation;
        if (this.sizeCalculation) {
          if (!this.#maxSize && !this.maxEntrySize) {
            throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
          }
          if (typeof this.sizeCalculation !== "function") {
            throw new TypeError("sizeCalculation set to non-function");
          }
        }
        if (memoMethod !== void 0 && typeof memoMethod !== "function") {
          throw new TypeError("memoMethod must be a function if defined");
        }
        this.#memoMethod = memoMethod;
        if (fetchMethod !== void 0 && typeof fetchMethod !== "function") {
          throw new TypeError("fetchMethod must be a function if specified");
        }
        this.#fetchMethod = fetchMethod;
        this.#hasFetchMethod = !!fetchMethod;
        this.#keyMap = /* @__PURE__ */ new Map();
        this.#keyList = new Array(max).fill(void 0);
        this.#valList = new Array(max).fill(void 0);
        this.#next = new UintArray(max);
        this.#prev = new UintArray(max);
        this.#head = 0;
        this.#tail = 0;
        this.#free = Stack.create(max);
        this.#size = 0;
        this.#calculatedSize = 0;
        if (typeof dispose === "function") {
          this.#dispose = dispose;
        }
        if (typeof disposeAfter === "function") {
          this.#disposeAfter = disposeAfter;
          this.#disposed = [];
        } else {
          this.#disposeAfter = void 0;
          this.#disposed = void 0;
        }
        this.#hasDispose = !!this.#dispose;
        this.#hasDisposeAfter = !!this.#disposeAfter;
        this.noDisposeOnSet = !!noDisposeOnSet;
        this.noUpdateTTL = !!noUpdateTTL;
        this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection;
        this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection;
        this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort;
        this.ignoreFetchAbort = !!ignoreFetchAbort;
        if (this.maxEntrySize !== 0) {
          if (this.#maxSize !== 0) {
            if (!isPosInt(this.#maxSize)) {
              throw new TypeError("maxSize must be a positive integer if specified");
            }
          }
          if (!isPosInt(this.maxEntrySize)) {
            throw new TypeError("maxEntrySize must be a positive integer if specified");
          }
          this.#initializeSizeTracking();
        }
        this.allowStale = !!allowStale;
        this.noDeleteOnStaleGet = !!noDeleteOnStaleGet;
        this.updateAgeOnGet = !!updateAgeOnGet;
        this.updateAgeOnHas = !!updateAgeOnHas;
        this.ttlResolution = isPosInt(ttlResolution) || ttlResolution === 0 ? ttlResolution : 1;
        this.ttlAutopurge = !!ttlAutopurge;
        this.ttl = ttl || 0;
        if (this.ttl) {
          if (!isPosInt(this.ttl)) {
            throw new TypeError("ttl must be a positive integer if specified");
          }
          this.#initializeTTLTracking();
        }
        if (this.#max === 0 && this.ttl === 0 && this.#maxSize === 0) {
          throw new TypeError("At least one of max, maxSize, or ttl is required");
        }
        if (!this.ttlAutopurge && !this.#max && !this.#maxSize) {
          const code = "LRU_CACHE_UNBOUNDED";
          if (shouldWarn(code)) {
            warned.add(code);
            const msg = "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.";
            emitWarning(msg, "UnboundedCacheWarning", code, _LRUCache);
          }
        }
      }
      /**
       * Return the number of ms left in the item's TTL. If item is not in cache,
       * returns `0`. Returns `Infinity` if item is in cache without a defined TTL.
       */
      getRemainingTTL(key) {
        return this.#keyMap.has(key) ? Infinity : 0;
      }
      #initializeTTLTracking() {
        const ttls = new ZeroArray(this.#max);
        const starts = new ZeroArray(this.#max);
        this.#ttls = ttls;
        this.#starts = starts;
        this.#setItemTTL = (index, ttl, start = perf.now()) => {
          starts[index] = ttl !== 0 ? start : 0;
          ttls[index] = ttl;
          if (ttl !== 0 && this.ttlAutopurge) {
            const t = setTimeout(() => {
              if (this.#isStale(index)) {
                this.#delete(this.#keyList[index], "expire");
              }
            }, ttl + 1);
            if (t.unref) {
              t.unref();
            }
          }
        };
        this.#updateItemAge = (index) => {
          starts[index] = ttls[index] !== 0 ? perf.now() : 0;
        };
        this.#statusTTL = (status, index) => {
          if (ttls[index]) {
            const ttl = ttls[index];
            const start = starts[index];
            if (!ttl || !start)
              return;
            status.ttl = ttl;
            status.start = start;
            status.now = cachedNow || getNow();
            const age = status.now - start;
            status.remainingTTL = ttl - age;
          }
        };
        let cachedNow = 0;
        const getNow = () => {
          const n = perf.now();
          if (this.ttlResolution > 0) {
            cachedNow = n;
            const t = setTimeout(() => cachedNow = 0, this.ttlResolution);
            if (t.unref) {
              t.unref();
            }
          }
          return n;
        };
        this.getRemainingTTL = (key) => {
          const index = this.#keyMap.get(key);
          if (index === void 0) {
            return 0;
          }
          const ttl = ttls[index];
          const start = starts[index];
          if (!ttl || !start) {
            return Infinity;
          }
          const age = (cachedNow || getNow()) - start;
          return ttl - age;
        };
        this.#isStale = (index) => {
          const s = starts[index];
          const t = ttls[index];
          return !!t && !!s && (cachedNow || getNow()) - s > t;
        };
      }
      // conditionally set private methods related to TTL
      #updateItemAge = () => {
      };
      #statusTTL = () => {
      };
      #setItemTTL = () => {
      };
      /* c8 ignore stop */
      #isStale = () => false;
      #initializeSizeTracking() {
        const sizes = new ZeroArray(this.#max);
        this.#calculatedSize = 0;
        this.#sizes = sizes;
        this.#removeItemSize = (index) => {
          this.#calculatedSize -= sizes[index];
          sizes[index] = 0;
        };
        this.#requireSize = (k, v, size, sizeCalculation) => {
          if (this.#isBackgroundFetch(v)) {
            return 0;
          }
          if (!isPosInt(size)) {
            if (sizeCalculation) {
              if (typeof sizeCalculation !== "function") {
                throw new TypeError("sizeCalculation must be a function");
              }
              size = sizeCalculation(v, k);
              if (!isPosInt(size)) {
                throw new TypeError("sizeCalculation return invalid (expect positive integer)");
              }
            } else {
              throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
            }
          }
          return size;
        };
        this.#addItemSize = (index, size, status) => {
          sizes[index] = size;
          if (this.#maxSize) {
            const maxSize = this.#maxSize - sizes[index];
            while (this.#calculatedSize > maxSize) {
              this.#evict(true);
            }
          }
          this.#calculatedSize += sizes[index];
          if (status) {
            status.entrySize = size;
            status.totalCalculatedSize = this.#calculatedSize;
          }
        };
      }
      #removeItemSize = (_i) => {
      };
      #addItemSize = (_i, _s, _st) => {
      };
      #requireSize = (_k, _v, size, sizeCalculation) => {
        if (size || sizeCalculation) {
          throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
        }
        return 0;
      };
      *#indexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
          for (let i = this.#tail; true; ) {
            if (!this.#isValidIndex(i)) {
              break;
            }
            if (allowStale || !this.#isStale(i)) {
              yield i;
            }
            if (i === this.#head) {
              break;
            } else {
              i = this.#prev[i];
            }
          }
        }
      }
      *#rindexes({ allowStale = this.allowStale } = {}) {
        if (this.#size) {
          for (let i = this.#head; true; ) {
            if (!this.#isValidIndex(i)) {
              break;
            }
            if (allowStale || !this.#isStale(i)) {
              yield i;
            }
            if (i === this.#tail) {
              break;
            } else {
              i = this.#next[i];
            }
          }
        }
      }
      #isValidIndex(index) {
        return index !== void 0 && this.#keyMap.get(this.#keyList[index]) === index;
      }
      /**
       * Return a generator yielding `[key, value]` pairs,
       * in order from most recently used to least recently used.
       */
      *entries() {
        for (const i of this.#indexes()) {
          if (this.#valList[i] !== void 0 && this.#keyList[i] !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
            yield [this.#keyList[i], this.#valList[i]];
          }
        }
      }
      /**
       * Inverse order version of {@link LRUCache.entries}
       *
       * Return a generator yielding `[key, value]` pairs,
       * in order from least recently used to most recently used.
       */
      *rentries() {
        for (const i of this.#rindexes()) {
          if (this.#valList[i] !== void 0 && this.#keyList[i] !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
            yield [this.#keyList[i], this.#valList[i]];
          }
        }
      }
      /**
       * Return a generator yielding the keys in the cache,
       * in order from most recently used to least recently used.
       */
      *keys() {
        for (const i of this.#indexes()) {
          const k = this.#keyList[i];
          if (k !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
            yield k;
          }
        }
      }
      /**
       * Inverse order version of {@link LRUCache.keys}
       *
       * Return a generator yielding the keys in the cache,
       * in order from least recently used to most recently used.
       */
      *rkeys() {
        for (const i of this.#rindexes()) {
          const k = this.#keyList[i];
          if (k !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
            yield k;
          }
        }
      }
      /**
       * Return a generator yielding the values in the cache,
       * in order from most recently used to least recently used.
       */
      *values() {
        for (const i of this.#indexes()) {
          const v = this.#valList[i];
          if (v !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
            yield this.#valList[i];
          }
        }
      }
      /**
       * Inverse order version of {@link LRUCache.values}
       *
       * Return a generator yielding the values in the cache,
       * in order from least recently used to most recently used.
       */
      *rvalues() {
        for (const i of this.#rindexes()) {
          const v = this.#valList[i];
          if (v !== void 0 && !this.#isBackgroundFetch(this.#valList[i])) {
            yield this.#valList[i];
          }
        }
      }
      /**
       * Iterating over the cache itself yields the same results as
       * {@link LRUCache.entries}
       */
      [Symbol.iterator]() {
        return this.entries();
      }
      /**
       * A String value that is used in the creation of the default string
       * description of an object. Called by the built-in method
       * `Object.prototype.toString`.
       */
      [Symbol.toStringTag] = "LRUCache";
      /**
       * Find a value for which the supplied fn method returns a truthy value,
       * similar to `Array.find()`. fn is called as `fn(value, key, cache)`.
       */
      find(fn, getOptions = {}) {
        for (const i of this.#indexes()) {
          const v = this.#valList[i];
          const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
          if (value === void 0)
            continue;
          if (fn(value, this.#keyList[i], this)) {
            return this.get(this.#keyList[i], getOptions);
          }
        }
      }
      /**
       * Call the supplied function on each item in the cache, in order from most
       * recently used to least recently used.
       *
       * `fn` is called as `fn(value, key, cache)`.
       *
       * If `thisp` is provided, function will be called in the `this`-context of
       * the provided object, or the cache if no `thisp` object is provided.
       *
       * Does not update age or recenty of use, or iterate over stale values.
       */
      forEach(fn, thisp = this) {
        for (const i of this.#indexes()) {
          const v = this.#valList[i];
          const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
          if (value === void 0)
            continue;
          fn.call(thisp, value, this.#keyList[i], this);
        }
      }
      /**
       * The same as {@link LRUCache.forEach} but items are iterated over in
       * reverse order.  (ie, less recently used items are iterated over first.)
       */
      rforEach(fn, thisp = this) {
        for (const i of this.#rindexes()) {
          const v = this.#valList[i];
          const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
          if (value === void 0)
            continue;
          fn.call(thisp, value, this.#keyList[i], this);
        }
      }
      /**
       * Delete any stale entries. Returns true if anything was removed,
       * false otherwise.
       */
      purgeStale() {
        let deleted = false;
        for (const i of this.#rindexes({ allowStale: true })) {
          if (this.#isStale(i)) {
            this.#delete(this.#keyList[i], "expire");
            deleted = true;
          }
        }
        return deleted;
      }
      /**
       * Get the extended info about a given entry, to get its value, size, and
       * TTL info simultaneously. Returns `undefined` if the key is not present.
       *
       * Unlike {@link LRUCache#dump}, which is designed to be portable and survive
       * serialization, the `start` value is always the current timestamp, and the
       * `ttl` is a calculated remaining time to live (negative if expired).
       *
       * Always returns stale values, if their info is found in the cache, so be
       * sure to check for expirations (ie, a negative {@link LRUCache.Entry#ttl})
       * if relevant.
       */
      info(key) {
        const i = this.#keyMap.get(key);
        if (i === void 0)
          return void 0;
        const v = this.#valList[i];
        const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
        if (value === void 0)
          return void 0;
        const entry = { value };
        if (this.#ttls && this.#starts) {
          const ttl = this.#ttls[i];
          const start = this.#starts[i];
          if (ttl && start) {
            const remain = ttl - (perf.now() - start);
            entry.ttl = remain;
            entry.start = Date.now();
          }
        }
        if (this.#sizes) {
          entry.size = this.#sizes[i];
        }
        return entry;
      }
      /**
       * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
       * passed to {@link LRLUCache#load}.
       *
       * The `start` fields are calculated relative to a portable `Date.now()`
       * timestamp, even if `performance.now()` is available.
       *
       * Stale entries are always included in the `dump`, even if
       * {@link LRUCache.OptionsBase.allowStale} is false.
       *
       * Note: this returns an actual array, not a generator, so it can be more
       * easily passed around.
       */
      dump() {
        const arr = [];
        for (const i of this.#indexes({ allowStale: true })) {
          const key = this.#keyList[i];
          const v = this.#valList[i];
          const value = this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
          if (value === void 0 || key === void 0)
            continue;
          const entry = { value };
          if (this.#ttls && this.#starts) {
            entry.ttl = this.#ttls[i];
            const age = perf.now() - this.#starts[i];
            entry.start = Math.floor(Date.now() - age);
          }
          if (this.#sizes) {
            entry.size = this.#sizes[i];
          }
          arr.unshift([key, entry]);
        }
        return arr;
      }
      /**
       * Reset the cache and load in the items in entries in the order listed.
       *
       * The shape of the resulting cache may be different if the same options are
       * not used in both caches.
       *
       * The `start` fields are assumed to be calculated relative to a portable
       * `Date.now()` timestamp, even if `performance.now()` is available.
       */
      load(arr) {
        this.clear();
        for (const [key, entry] of arr) {
          if (entry.start) {
            const age = Date.now() - entry.start;
            entry.start = perf.now() - age;
          }
          this.set(key, entry.value, entry);
        }
      }
      /**
       * Add a value to the cache.
       *
       * Note: if `undefined` is specified as a value, this is an alias for
       * {@link LRUCache#delete}
       *
       * Fields on the {@link LRUCache.SetOptions} options param will override
       * their corresponding values in the constructor options for the scope
       * of this single `set()` operation.
       *
       * If `start` is provided, then that will set the effective start
       * time for the TTL calculation. Note that this must be a previous
       * value of `performance.now()` if supported, or a previous value of
       * `Date.now()` if not.
       *
       * Options object may also include `size`, which will prevent
       * calling the `sizeCalculation` function and just use the specified
       * number if it is a positive integer, and `noDisposeOnSet` which
       * will prevent calling a `dispose` function in the case of
       * overwrites.
       *
       * If the `size` (or return value of `sizeCalculation`) for a given
       * entry is greater than `maxEntrySize`, then the item will not be
       * added to the cache.
       *
       * Will update the recency of the entry.
       *
       * If the value is `undefined`, then this is an alias for
       * `cache.delete(key)`. `undefined` is never stored in the cache.
       */
      set(k, v, setOptions = {}) {
        if (v === void 0) {
          this.delete(k);
          return this;
        }
        const { ttl = this.ttl, start, noDisposeOnSet = this.noDisposeOnSet, sizeCalculation = this.sizeCalculation, status } = setOptions;
        let { noUpdateTTL = this.noUpdateTTL } = setOptions;
        const size = this.#requireSize(k, v, setOptions.size || 0, sizeCalculation);
        if (this.maxEntrySize && size > this.maxEntrySize) {
          if (status) {
            status.set = "miss";
            status.maxEntrySizeExceeded = true;
          }
          this.#delete(k, "set");
          return this;
        }
        let index = this.#size === 0 ? void 0 : this.#keyMap.get(k);
        if (index === void 0) {
          index = this.#size === 0 ? this.#tail : this.#free.length !== 0 ? this.#free.pop() : this.#size === this.#max ? this.#evict(false) : this.#size;
          this.#keyList[index] = k;
          this.#valList[index] = v;
          this.#keyMap.set(k, index);
          this.#next[this.#tail] = index;
          this.#prev[index] = this.#tail;
          this.#tail = index;
          this.#size++;
          this.#addItemSize(index, size, status);
          if (status)
            status.set = "add";
          noUpdateTTL = false;
        } else {
          this.#moveToTail(index);
          const oldVal = this.#valList[index];
          if (v !== oldVal) {
            if (this.#hasFetchMethod && this.#isBackgroundFetch(oldVal)) {
              oldVal.__abortController.abort(new Error("replaced"));
              const { __staleWhileFetching: s } = oldVal;
              if (s !== void 0 && !noDisposeOnSet) {
                if (this.#hasDispose) {
                  this.#dispose?.(s, k, "set");
                }
                if (this.#hasDisposeAfter) {
                  this.#disposed?.push([s, k, "set"]);
                }
              }
            } else if (!noDisposeOnSet) {
              if (this.#hasDispose) {
                this.#dispose?.(oldVal, k, "set");
              }
              if (this.#hasDisposeAfter) {
                this.#disposed?.push([oldVal, k, "set"]);
              }
            }
            this.#removeItemSize(index);
            this.#addItemSize(index, size, status);
            this.#valList[index] = v;
            if (status) {
              status.set = "replace";
              const oldValue = oldVal && this.#isBackgroundFetch(oldVal) ? oldVal.__staleWhileFetching : oldVal;
              if (oldValue !== void 0)
                status.oldValue = oldValue;
            }
          } else if (status) {
            status.set = "update";
          }
        }
        if (ttl !== 0 && !this.#ttls) {
          this.#initializeTTLTracking();
        }
        if (this.#ttls) {
          if (!noUpdateTTL) {
            this.#setItemTTL(index, ttl, start);
          }
          if (status)
            this.#statusTTL(status, index);
        }
        if (!noDisposeOnSet && this.#hasDisposeAfter && this.#disposed) {
          const dt = this.#disposed;
          let task;
          while (task = dt?.shift()) {
            this.#disposeAfter?.(...task);
          }
        }
        return this;
      }
      /**
       * Evict the least recently used item, returning its value or
       * `undefined` if cache is empty.
       */
      pop() {
        try {
          while (this.#size) {
            const val = this.#valList[this.#head];
            this.#evict(true);
            if (this.#isBackgroundFetch(val)) {
              if (val.__staleWhileFetching) {
                return val.__staleWhileFetching;
              }
            } else if (val !== void 0) {
              return val;
            }
          }
        } finally {
          if (this.#hasDisposeAfter && this.#disposed) {
            const dt = this.#disposed;
            let task;
            while (task = dt?.shift()) {
              this.#disposeAfter?.(...task);
            }
          }
        }
      }
      #evict(free) {
        const head = this.#head;
        const k = this.#keyList[head];
        const v = this.#valList[head];
        if (this.#hasFetchMethod && this.#isBackgroundFetch(v)) {
          v.__abortController.abort(new Error("evicted"));
        } else if (this.#hasDispose || this.#hasDisposeAfter) {
          if (this.#hasDispose) {
            this.#dispose?.(v, k, "evict");
          }
          if (this.#hasDisposeAfter) {
            this.#disposed?.push([v, k, "evict"]);
          }
        }
        this.#removeItemSize(head);
        if (free) {
          this.#keyList[head] = void 0;
          this.#valList[head] = void 0;
          this.#free.push(head);
        }
        if (this.#size === 1) {
          this.#head = this.#tail = 0;
          this.#free.length = 0;
        } else {
          this.#head = this.#next[head];
        }
        this.#keyMap.delete(k);
        this.#size--;
        return head;
      }
      /**
       * Check if a key is in the cache, without updating the recency of use.
       * Will return false if the item is stale, even though it is technically
       * in the cache.
       *
       * Check if a key is in the cache, without updating the recency of
       * use. Age is updated if {@link LRUCache.OptionsBase.updateAgeOnHas} is set
       * to `true` in either the options or the constructor.
       *
       * Will return `false` if the item is stale, even though it is technically in
       * the cache. The difference can be determined (if it matters) by using a
       * `status` argument, and inspecting the `has` field.
       *
       * Will not update item age unless
       * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
       */
      has(k, hasOptions = {}) {
        const { updateAgeOnHas = this.updateAgeOnHas, status } = hasOptions;
        const index = this.#keyMap.get(k);
        if (index !== void 0) {
          const v = this.#valList[index];
          if (this.#isBackgroundFetch(v) && v.__staleWhileFetching === void 0) {
            return false;
          }
          if (!this.#isStale(index)) {
            if (updateAgeOnHas) {
              this.#updateItemAge(index);
            }
            if (status) {
              status.has = "hit";
              this.#statusTTL(status, index);
            }
            return true;
          } else if (status) {
            status.has = "stale";
            this.#statusTTL(status, index);
          }
        } else if (status) {
          status.has = "miss";
        }
        return false;
      }
      /**
       * Like {@link LRUCache#get} but doesn't update recency or delete stale
       * items.
       *
       * Returns `undefined` if the item is stale, unless
       * {@link LRUCache.OptionsBase.allowStale} is set.
       */
      peek(k, peekOptions = {}) {
        const { allowStale = this.allowStale } = peekOptions;
        const index = this.#keyMap.get(k);
        if (index === void 0 || !allowStale && this.#isStale(index)) {
          return;
        }
        const v = this.#valList[index];
        return this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v;
      }
      #backgroundFetch(k, index, options, context) {
        const v = index === void 0 ? void 0 : this.#valList[index];
        if (this.#isBackgroundFetch(v)) {
          return v;
        }
        const ac = new AC();
        const { signal } = options;
        signal?.addEventListener("abort", () => ac.abort(signal.reason), {
          signal: ac.signal
        });
        const fetchOpts = {
          signal: ac.signal,
          options,
          context
        };
        const cb = (v2, updateCache = false) => {
          const { aborted } = ac.signal;
          const ignoreAbort = options.ignoreFetchAbort && v2 !== void 0;
          if (options.status) {
            if (aborted && !updateCache) {
              options.status.fetchAborted = true;
              options.status.fetchError = ac.signal.reason;
              if (ignoreAbort)
                options.status.fetchAbortIgnored = true;
            } else {
              options.status.fetchResolved = true;
            }
          }
          if (aborted && !ignoreAbort && !updateCache) {
            return fetchFail(ac.signal.reason);
          }
          const bf2 = p;
          if (this.#valList[index] === p) {
            if (v2 === void 0) {
              if (bf2.__staleWhileFetching) {
                this.#valList[index] = bf2.__staleWhileFetching;
              } else {
                this.#delete(k, "fetch");
              }
            } else {
              if (options.status)
                options.status.fetchUpdated = true;
              this.set(k, v2, fetchOpts.options);
            }
          }
          return v2;
        };
        const eb = (er) => {
          if (options.status) {
            options.status.fetchRejected = true;
            options.status.fetchError = er;
          }
          return fetchFail(er);
        };
        const fetchFail = (er) => {
          const { aborted } = ac.signal;
          const allowStaleAborted = aborted && options.allowStaleOnFetchAbort;
          const allowStale = allowStaleAborted || options.allowStaleOnFetchRejection;
          const noDelete = allowStale || options.noDeleteOnFetchRejection;
          const bf2 = p;
          if (this.#valList[index] === p) {
            const del = !noDelete || bf2.__staleWhileFetching === void 0;
            if (del) {
              this.#delete(k, "fetch");
            } else if (!allowStaleAborted) {
              this.#valList[index] = bf2.__staleWhileFetching;
            }
          }
          if (allowStale) {
            if (options.status && bf2.__staleWhileFetching !== void 0) {
              options.status.returnedStale = true;
            }
            return bf2.__staleWhileFetching;
          } else if (bf2.__returned === bf2) {
            throw er;
          }
        };
        const pcall = (res, rej) => {
          const fmp = this.#fetchMethod?.(k, v, fetchOpts);
          if (fmp && fmp instanceof Promise) {
            fmp.then((v2) => res(v2 === void 0 ? void 0 : v2), rej);
          }
          ac.signal.addEventListener("abort", () => {
            if (!options.ignoreFetchAbort || options.allowStaleOnFetchAbort) {
              res(void 0);
              if (options.allowStaleOnFetchAbort) {
                res = (v2) => cb(v2, true);
              }
            }
          });
        };
        if (options.status)
          options.status.fetchDispatched = true;
        const p = new Promise(pcall).then(cb, eb);
        const bf = Object.assign(p, {
          __abortController: ac,
          __staleWhileFetching: v,
          __returned: void 0
        });
        if (index === void 0) {
          this.set(k, bf, { ...fetchOpts.options, status: void 0 });
          index = this.#keyMap.get(k);
        } else {
          this.#valList[index] = bf;
        }
        return bf;
      }
      #isBackgroundFetch(p) {
        if (!this.#hasFetchMethod)
          return false;
        const b = p;
        return !!b && b instanceof Promise && b.hasOwnProperty("__staleWhileFetching") && b.__abortController instanceof AC;
      }
      async fetch(k, fetchOptions = {}) {
        const {
          // get options
          allowStale = this.allowStale,
          updateAgeOnGet = this.updateAgeOnGet,
          noDeleteOnStaleGet = this.noDeleteOnStaleGet,
          // set options
          ttl = this.ttl,
          noDisposeOnSet = this.noDisposeOnSet,
          size = 0,
          sizeCalculation = this.sizeCalculation,
          noUpdateTTL = this.noUpdateTTL,
          // fetch exclusive options
          noDeleteOnFetchRejection = this.noDeleteOnFetchRejection,
          allowStaleOnFetchRejection = this.allowStaleOnFetchRejection,
          ignoreFetchAbort = this.ignoreFetchAbort,
          allowStaleOnFetchAbort = this.allowStaleOnFetchAbort,
          context,
          forceRefresh = false,
          status,
          signal
        } = fetchOptions;
        if (!this.#hasFetchMethod) {
          if (status)
            status.fetch = "get";
          return this.get(k, {
            allowStale,
            updateAgeOnGet,
            noDeleteOnStaleGet,
            status
          });
        }
        const options = {
          allowStale,
          updateAgeOnGet,
          noDeleteOnStaleGet,
          ttl,
          noDisposeOnSet,
          size,
          sizeCalculation,
          noUpdateTTL,
          noDeleteOnFetchRejection,
          allowStaleOnFetchRejection,
          allowStaleOnFetchAbort,
          ignoreFetchAbort,
          status,
          signal
        };
        let index = this.#keyMap.get(k);
        if (index === void 0) {
          if (status)
            status.fetch = "miss";
          const p = this.#backgroundFetch(k, index, options, context);
          return p.__returned = p;
        } else {
          const v = this.#valList[index];
          if (this.#isBackgroundFetch(v)) {
            const stale = allowStale && v.__staleWhileFetching !== void 0;
            if (status) {
              status.fetch = "inflight";
              if (stale)
                status.returnedStale = true;
            }
            return stale ? v.__staleWhileFetching : v.__returned = v;
          }
          const isStale = this.#isStale(index);
          if (!forceRefresh && !isStale) {
            if (status)
              status.fetch = "hit";
            this.#moveToTail(index);
            if (updateAgeOnGet) {
              this.#updateItemAge(index);
            }
            if (status)
              this.#statusTTL(status, index);
            return v;
          }
          const p = this.#backgroundFetch(k, index, options, context);
          const hasStale = p.__staleWhileFetching !== void 0;
          const staleVal = hasStale && allowStale;
          if (status) {
            status.fetch = isStale ? "stale" : "refresh";
            if (staleVal && isStale)
              status.returnedStale = true;
          }
          return staleVal ? p.__staleWhileFetching : p.__returned = p;
        }
      }
      async forceFetch(k, fetchOptions = {}) {
        const v = await this.fetch(k, fetchOptions);
        if (v === void 0)
          throw new Error("fetch() returned undefined");
        return v;
      }
      memo(k, memoOptions = {}) {
        const memoMethod = this.#memoMethod;
        if (!memoMethod) {
          throw new Error("no memoMethod provided to constructor");
        }
        const { context, forceRefresh, ...options } = memoOptions;
        const v = this.get(k, options);
        if (!forceRefresh && v !== void 0)
          return v;
        const vv = memoMethod(k, v, {
          options,
          context
        });
        this.set(k, vv, options);
        return vv;
      }
      /**
       * Return a value from the cache. Will update the recency of the cache
       * entry found.
       *
       * If the key is not found, get() will return `undefined`.
       */
      get(k, getOptions = {}) {
        const { allowStale = this.allowStale, updateAgeOnGet = this.updateAgeOnGet, noDeleteOnStaleGet = this.noDeleteOnStaleGet, status } = getOptions;
        const index = this.#keyMap.get(k);
        if (index !== void 0) {
          const value = this.#valList[index];
          const fetching = this.#isBackgroundFetch(value);
          if (status)
            this.#statusTTL(status, index);
          if (this.#isStale(index)) {
            if (status)
              status.get = "stale";
            if (!fetching) {
              if (!noDeleteOnStaleGet) {
                this.#delete(k, "expire");
              }
              if (status && allowStale)
                status.returnedStale = true;
              return allowStale ? value : void 0;
            } else {
              if (status && allowStale && value.__staleWhileFetching !== void 0) {
                status.returnedStale = true;
              }
              return allowStale ? value.__staleWhileFetching : void 0;
            }
          } else {
            if (status)
              status.get = "hit";
            if (fetching) {
              return value.__staleWhileFetching;
            }
            this.#moveToTail(index);
            if (updateAgeOnGet) {
              this.#updateItemAge(index);
            }
            return value;
          }
        } else if (status) {
          status.get = "miss";
        }
      }
      #connect(p, n) {
        this.#prev[n] = p;
        this.#next[p] = n;
      }
      #moveToTail(index) {
        if (index !== this.#tail) {
          if (index === this.#head) {
            this.#head = this.#next[index];
          } else {
            this.#connect(this.#prev[index], this.#next[index]);
          }
          this.#connect(this.#tail, index);
          this.#tail = index;
        }
      }
      /**
       * Deletes a key out of the cache.
       *
       * Returns true if the key was deleted, false otherwise.
       */
      delete(k) {
        return this.#delete(k, "delete");
      }
      #delete(k, reason) {
        let deleted = false;
        if (this.#size !== 0) {
          const index = this.#keyMap.get(k);
          if (index !== void 0) {
            deleted = true;
            if (this.#size === 1) {
              this.#clear(reason);
            } else {
              this.#removeItemSize(index);
              const v = this.#valList[index];
              if (this.#isBackgroundFetch(v)) {
                v.__abortController.abort(new Error("deleted"));
              } else if (this.#hasDispose || this.#hasDisposeAfter) {
                if (this.#hasDispose) {
                  this.#dispose?.(v, k, reason);
                }
                if (this.#hasDisposeAfter) {
                  this.#disposed?.push([v, k, reason]);
                }
              }
              this.#keyMap.delete(k);
              this.#keyList[index] = void 0;
              this.#valList[index] = void 0;
              if (index === this.#tail) {
                this.#tail = this.#prev[index];
              } else if (index === this.#head) {
                this.#head = this.#next[index];
              } else {
                const pi = this.#prev[index];
                this.#next[pi] = this.#next[index];
                const ni = this.#next[index];
                this.#prev[ni] = this.#prev[index];
              }
              this.#size--;
              this.#free.push(index);
            }
          }
        }
        if (this.#hasDisposeAfter && this.#disposed?.length) {
          const dt = this.#disposed;
          let task;
          while (task = dt?.shift()) {
            this.#disposeAfter?.(...task);
          }
        }
        return deleted;
      }
      /**
       * Clear the cache entirely, throwing away all values.
       */
      clear() {
        return this.#clear("delete");
      }
      #clear(reason) {
        for (const index of this.#rindexes({ allowStale: true })) {
          const v = this.#valList[index];
          if (this.#isBackgroundFetch(v)) {
            v.__abortController.abort(new Error("deleted"));
          } else {
            const k = this.#keyList[index];
            if (this.#hasDispose) {
              this.#dispose?.(v, k, reason);
            }
            if (this.#hasDisposeAfter) {
              this.#disposed?.push([v, k, reason]);
            }
          }
        }
        this.#keyMap.clear();
        this.#valList.fill(void 0);
        this.#keyList.fill(void 0);
        if (this.#ttls && this.#starts) {
          this.#ttls.fill(0);
          this.#starts.fill(0);
        }
        if (this.#sizes) {
          this.#sizes.fill(0);
        }
        this.#head = 0;
        this.#tail = 0;
        this.#free.length = 0;
        this.#calculatedSize = 0;
        this.#size = 0;
        if (this.#hasDisposeAfter && this.#disposed) {
          const dt = this.#disposed;
          let task;
          while (task = dt?.shift()) {
            this.#disposeAfter?.(...task);
          }
        }
      }
    };
    exports.LRUCache = LRUCache;
  }
});

// node_modules/@atproto-labs/simple-store-memory/dist/util.js
var require_util6 = __commonJS({
  "node_modules/@atproto-labs/simple-store-memory/dist/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.roughSizeOfObject = roughSizeOfObject;
    var knownSizes = /* @__PURE__ */ new WeakMap();
    function roughSizeOfObject(value) {
      const objectList = /* @__PURE__ */ new Set();
      const stack = [value];
      let bytes = 0;
      while (stack.length) {
        const value2 = stack.pop();
        switch (typeof value2) {
          // Types are ordered by frequency
          case "string":
            bytes += 12 + 4 * Math.ceil(value2.length / 4);
            break;
          case "number":
            bytes += 12;
            break;
          case "boolean":
            bytes += 4;
            break;
          case "object":
            bytes += 4;
            if (value2 === null) {
              break;
            }
            if (knownSizes.has(value2)) {
              bytes += knownSizes.get(value2);
              break;
            }
            if (objectList.has(value2))
              continue;
            objectList.add(value2);
            if (Array.isArray(value2)) {
              bytes += 4;
              stack.push(...value2);
            } else {
              bytes += 8;
              const keys = Object.getOwnPropertyNames(value2);
              for (let i = 0; i < keys.length; i++) {
                bytes += 4;
                const key = keys[i];
                const val = value2[key];
                if (val !== void 0)
                  stack.push(val);
                stack.push(key);
              }
            }
            break;
          case "function":
            bytes += 8;
            break;
          case "symbol":
            bytes += 8;
            break;
          case "bigint":
            bytes += 16;
            break;
        }
      }
      if (typeof value === "object" && value !== null) {
        knownSizes.set(value, bytes);
      }
      return bytes;
    }
  }
});

// node_modules/@atproto-labs/simple-store-memory/dist/index.js
var require_dist6 = __commonJS({
  "node_modules/@atproto-labs/simple-store-memory/dist/index.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _SimpleStoreMemory_cache;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SimpleStoreMemory = void 0;
    var lru_cache_1 = require_commonjs();
    var util_js_1 = require_util6();
    var nullSymbol = Symbol("nullItem");
    var toLruValue = (value) => value === null ? nullSymbol : value;
    var fromLruValue = (value) => value === nullSymbol ? null : value;
    var SimpleStoreMemory = class {
      constructor({ sizeCalculation, ...options }) {
        _SimpleStoreMemory_cache.set(this, void 0);
        __classPrivateFieldSet(this, _SimpleStoreMemory_cache, new lru_cache_1.LRUCache({
          ...options,
          allowStale: false,
          updateAgeOnGet: false,
          updateAgeOnHas: false,
          sizeCalculation: sizeCalculation ? (value, key) => sizeCalculation(fromLruValue(value), key) : options.maxEntrySize != null || options.maxSize != null ? (
            // maxEntrySize and maxSize require a size calculation function.
            util_js_1.roughSizeOfObject
          ) : void 0
        }), "f");
      }
      get(key) {
        const value = __classPrivateFieldGet(this, _SimpleStoreMemory_cache, "f").get(key);
        if (value === void 0)
          return void 0;
        return fromLruValue(value);
      }
      set(key, value) {
        __classPrivateFieldGet(this, _SimpleStoreMemory_cache, "f").set(key, toLruValue(value));
      }
      del(key) {
        __classPrivateFieldGet(this, _SimpleStoreMemory_cache, "f").delete(key);
      }
      clear() {
        __classPrivateFieldGet(this, _SimpleStoreMemory_cache, "f").clear();
      }
    };
    exports.SimpleStoreMemory = SimpleStoreMemory;
    _SimpleStoreMemory_cache = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/@atproto-labs/did-resolver/dist/did-cache-memory.js
var require_did_cache_memory = __commonJS({
  "node_modules/@atproto-labs/did-resolver/dist/did-cache-memory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DidCacheMemory = void 0;
    var simple_store_memory_1 = require_dist6();
    var DEFAULT_TTL = 3600 * 1e3;
    var DEFAULT_MAX_SIZE = 50 * 1024 * 1024;
    var DidCacheMemory = class extends simple_store_memory_1.SimpleStoreMemory {
      constructor(options) {
        super(options?.max == null ? { ttl: DEFAULT_TTL, maxSize: DEFAULT_MAX_SIZE, ...options } : { ttl: DEFAULT_TTL, ...options });
      }
    };
    exports.DidCacheMemory = DidCacheMemory;
  }
});

// node_modules/@atproto-labs/did-resolver/dist/did-cache.js
var require_did_cache = __commonJS({
  "node_modules/@atproto-labs/did-resolver/dist/did-cache.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DidResolverCached = void 0;
    var simple_store_1 = require_dist5();
    var did_cache_memory_js_1 = require_did_cache_memory();
    var DidResolverCached = class {
      constructor(resolver, cache = new did_cache_memory_js_1.DidCacheMemory()) {
        Object.defineProperty(this, "getter", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.getter = new simple_store_1.CachedGetter((did, options) => resolver.resolve(did, options), cache);
      }
      async resolve(did, options) {
        return this.getter.get(did, options);
      }
    };
    exports.DidResolverCached = DidResolverCached;
  }
});

// node_modules/@atproto-labs/fetch/dist/fetch-error.js
var require_fetch_error = __commonJS({
  "node_modules/@atproto-labs/fetch/dist/fetch-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FetchError = void 0;
    var FetchError = class extends Error {
      constructor(statusCode, message2, options) {
        super(message2, options);
        Object.defineProperty(this, "statusCode", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: statusCode
        });
      }
      get expose() {
        return true;
      }
    };
    exports.FetchError = FetchError;
  }
});

// node_modules/@atproto-labs/fetch/dist/fetch.js
var require_fetch = __commonJS({
  "node_modules/@atproto-labs/fetch/dist/fetch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toRequestTransformer = toRequestTransformer;
    exports.asRequest = asRequest;
    function toRequestTransformer(requestTransformer) {
      return function(input, init) {
        return requestTransformer.call(this, asRequest(input, init));
      };
    }
    function asRequest(input, init) {
      if (!init && input instanceof Request)
        return input;
      return new Request(input, init);
    }
  }
});

// node_modules/@atproto-labs/fetch/dist/util.js
var require_util7 = __commonJS({
  "node_modules/@atproto-labs/fetch/dist/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extractUrl = exports.MaxBytesTransformStream = exports.ifString = void 0;
    exports.isIp = isIp;
    exports.padLines = padLines;
    exports.cancelBody = cancelBody;
    exports.logCancellationError = logCancellationError;
    exports.stringifyMessage = stringifyMessage;
    function isIp(hostname) {
      if (hostname.match(/^\d+\.\d+\.\d+\.\d+$/))
        return true;
      if (hostname.startsWith("[") && hostname.endsWith("]"))
        return true;
      return false;
    }
    var ifString = (v) => typeof v === "string" ? v : void 0;
    exports.ifString = ifString;
    var MaxBytesTransformStream = class extends TransformStream {
      constructor(maxBytes) {
        if (!(maxBytes >= 0)) {
          throw new TypeError("maxBytes must be a non-negative number");
        }
        let bytesRead = 0;
        super({
          transform: (chunk, ctrl) => {
            if ((bytesRead += chunk.length) <= maxBytes) {
              ctrl.enqueue(chunk);
            } else {
              ctrl.error(new Error("Response too large"));
            }
          }
        });
      }
    };
    exports.MaxBytesTransformStream = MaxBytesTransformStream;
    var LINE_BREAK = /\r?\n/g;
    function padLines(input, pad) {
      if (!input)
        return input;
      return pad + input.replace(LINE_BREAK, `$&${pad}`);
    }
    async function cancelBody(body, onCancellationError) {
      if (body.body && !body.bodyUsed && !body.body.locked && // Support for alternative fetch implementations
      typeof body.body.cancel === "function") {
        if (typeof onCancellationError === "function") {
          void body.body.cancel().catch(onCancellationError);
        } else if (onCancellationError === "log") {
          void body.body.cancel().catch(logCancellationError);
        } else {
          await body.body.cancel();
        }
      }
    }
    function logCancellationError(err) {
      console.warn("Failed to cancel response body", err);
    }
    async function stringifyMessage(input) {
      try {
        const headers = stringifyHeaders(input.headers);
        const payload = await stringifyBody(input);
        return headers && payload ? `${headers}
${payload}` : headers || payload;
      } finally {
        void cancelBody(input, "log");
      }
    }
    function stringifyHeaders(headers) {
      return Array.from(headers).map(([name, value]) => `${name}: ${value}`).join("\n");
    }
    async function stringifyBody(body) {
      try {
        const blob = await body.blob();
        if (blob.type?.startsWith("text/")) {
          const text = await blob.text();
          return JSON.stringify(text);
        }
        if (/application\/(?:\w+\+)?json/.test(blob.type)) {
          const text = await blob.text();
          return text.includes("\n") ? JSON.stringify(JSON.parse(text)) : text;
        }
        return `[Body size: ${blob.size}, type: ${JSON.stringify(blob.type)} ]`;
      } catch {
        return "[Body could not be read]";
      }
    }
    var extractUrl = (input) => typeof input === "string" ? new URL(input) : input instanceof URL ? input : new URL(input.url);
    exports.extractUrl = extractUrl;
  }
});

// node_modules/@atproto-labs/fetch/dist/fetch-request.js
var require_fetch_request = __commonJS({
  "node_modules/@atproto-labs/fetch/dist/fetch-request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_FORBIDDEN_DOMAIN_NAMES = exports.FetchRequestError = void 0;
    exports.protocolCheckRequestTransform = protocolCheckRequestTransform;
    exports.explicitRedirectCheckRequestTransform = explicitRedirectCheckRequestTransform;
    exports.requireHostHeaderTransform = requireHostHeaderTransform;
    exports.forbiddenDomainNameRequestTransform = forbiddenDomainNameRequestTransform;
    var fetch_error_js_1 = require_fetch_error();
    var fetch_js_1 = require_fetch();
    var util_js_1 = require_util7();
    var FetchRequestError = class _FetchRequestError extends fetch_error_js_1.FetchError {
      constructor(request, statusCode, message2, options) {
        if (statusCode == null || !message2) {
          const info = extractInfo(extractRootCause(options?.cause));
          statusCode ?? (statusCode = info[0]);
          message2 || (message2 = info[1]);
        }
        super(statusCode, message2, options);
        Object.defineProperty(this, "request", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: request
        });
      }
      get expose() {
        return this.statusCode !== 500;
      }
      static from(request, cause) {
        if (cause instanceof _FetchRequestError)
          return cause;
        return new _FetchRequestError(request, void 0, void 0, { cause });
      }
    };
    exports.FetchRequestError = FetchRequestError;
    function extractRootCause(err) {
      if (err instanceof TypeError && err.message === "fetch failed" && err.cause !== void 0) {
        return err.cause;
      }
      return err;
    }
    function extractInfo(err) {
      if (typeof err === "string" && err.length > 0) {
        return [500, err];
      }
      if (!(err instanceof Error)) {
        return [500, "Failed to fetch"];
      }
      switch (err.message) {
        case "failed to fetch the data URL":
          return [400, err.message];
        case "unexpected redirect":
        case "cors failure":
        case "blocked":
        case "proxy authentication required":
          return [502, err.message];
      }
      const code = err["code"];
      if (typeof code === "string") {
        switch (true) {
          case code === "ENOTFOUND":
            return [400, "Invalid hostname"];
          case code === "ECONNREFUSED":
            return [502, "Connection refused"];
          case code === "DEPTH_ZERO_SELF_SIGNED_CERT":
            return [502, "Self-signed certificate"];
          case code.startsWith("ERR_TLS"):
            return [502, "TLS error"];
          case code.startsWith("ECONN"):
            return [502, "Connection error"];
          default:
            return [500, `${code} error`];
        }
      }
      return [500, err.message];
    }
    function protocolCheckRequestTransform(protocols) {
      return (input, init) => {
        const { protocol, port } = (0, util_js_1.extractUrl)(input);
        const request = (0, fetch_js_1.asRequest)(input, init);
        const config = Object.hasOwn(protocols, protocol) ? protocols[protocol] : void 0;
        if (!config) {
          throw new FetchRequestError(request, 400, `Forbidden protocol "${protocol}"`);
        } else if (config === true) {
        } else if (!config["allowCustomPort"] && port !== "") {
          throw new FetchRequestError(request, 400, `Custom ${protocol} ports not allowed`);
        }
        return request;
      };
    }
    function explicitRedirectCheckRequestTransform() {
      return (input, init) => {
        const request = (0, fetch_js_1.asRequest)(input, init);
        if (init?.redirect != null)
          return request;
        if (request.redirect === "follow") {
          throw new FetchRequestError(request, 500, 'Request redirect must be "error" or "manual"');
        }
        return request;
      };
    }
    function requireHostHeaderTransform() {
      return (input, init) => {
        const { protocol, hostname } = (0, util_js_1.extractUrl)(input);
        const request = (0, fetch_js_1.asRequest)(input, init);
        if (protocol !== "http:" && protocol !== "https:") {
          throw new FetchRequestError(request, 400, `"${protocol}" requests are not allowed`);
        }
        if (!hostname || (0, util_js_1.isIp)(hostname)) {
          throw new FetchRequestError(request, 400, "Invalid hostname");
        }
        return request;
      };
    }
    exports.DEFAULT_FORBIDDEN_DOMAIN_NAMES = [
      "example.com",
      "*.example.com",
      "example.org",
      "*.example.org",
      "example.net",
      "*.example.net",
      "googleusercontent.com",
      "*.googleusercontent.com"
    ];
    function forbiddenDomainNameRequestTransform(denyList = exports.DEFAULT_FORBIDDEN_DOMAIN_NAMES) {
      const denySet = new Set(denyList);
      if (denySet.size === 0) {
        return fetch_js_1.asRequest;
      }
      return async (input, init) => {
        const { hostname } = (0, util_js_1.extractUrl)(input);
        const request = (0, fetch_js_1.asRequest)(input, init);
        if (denySet.has(hostname)) {
          throw new FetchRequestError(request, 403, "Forbidden hostname");
        }
        let curDot = hostname.indexOf(".");
        while (curDot !== -1) {
          const subdomain = hostname.slice(curDot + 1);
          if (denySet.has(`*.${subdomain}`)) {
            throw new FetchRequestError(request, 403, "Forbidden hostname");
          }
          curDot = hostname.indexOf(".", curDot + 1);
        }
        return request;
      };
    }
  }
});

// node_modules/@atproto-labs/pipe/dist/pipe.js
var require_pipe = __commonJS({
  "node_modules/@atproto-labs/pipe/dist/pipe.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pipe = pipe;
    exports.pipeTwo = pipeTwo;
    function pipe(...pipeline) {
      return pipeline.reduce(pipeTwo);
    }
    function pipeTwo(first, second) {
      return async (...args) => second(await first(...args));
    }
  }
});

// node_modules/@atproto-labs/pipe/dist/index.js
var require_dist7 = __commonJS({
  "node_modules/@atproto-labs/pipe/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pipeTwo = exports.pipe = void 0;
    var pipe_js_1 = require_pipe();
    Object.defineProperty(exports, "pipe", { enumerable: true, get: function() {
      return pipe_js_1.pipe;
    } });
    Object.defineProperty(exports, "pipeTwo", { enumerable: true, get: function() {
      return pipe_js_1.pipeTwo;
    } });
  }
});

// node_modules/@atproto-labs/fetch/dist/transformed-response.js
var require_transformed_response = __commonJS({
  "node_modules/@atproto-labs/fetch/dist/transformed-response.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _TransformedResponse_response;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransformedResponse = void 0;
    var TransformedResponse = class extends Response {
      constructor(response, transform) {
        if (!response.body) {
          throw new TypeError("Response body is not available");
        }
        if (response.bodyUsed) {
          throw new TypeError("Response body is already used");
        }
        super(response.body.pipeThrough(transform), {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
        _TransformedResponse_response.set(this, void 0);
        __classPrivateFieldSet(this, _TransformedResponse_response, response, "f");
      }
      /**
       * Some props can't be set through ResponseInit, so we need to proxy them
       */
      get url() {
        return __classPrivateFieldGet(this, _TransformedResponse_response, "f").url;
      }
      get redirected() {
        return __classPrivateFieldGet(this, _TransformedResponse_response, "f").redirected;
      }
      get type() {
        return __classPrivateFieldGet(this, _TransformedResponse_response, "f").type;
      }
      get statusText() {
        return __classPrivateFieldGet(this, _TransformedResponse_response, "f").statusText;
      }
    };
    exports.TransformedResponse = TransformedResponse;
    _TransformedResponse_response = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/@atproto-labs/fetch/dist/fetch-response.js
var require_fetch_response = __commonJS({
  "node_modules/@atproto-labs/fetch/dist/fetch-response.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fetchJsonZodProcessor = exports.FetchResponseError = void 0;
    exports.peekJson = peekJson;
    exports.checkLength = checkLength;
    exports.extractLength = extractLength;
    exports.extractMime = extractMime;
    exports.cancelBodyOnError = cancelBodyOnError;
    exports.fetchOkProcessor = fetchOkProcessor;
    exports.fetchOkTransformer = fetchOkTransformer;
    exports.fetchMaxSizeProcessor = fetchMaxSizeProcessor;
    exports.fetchResponseMaxSizeChecker = fetchResponseMaxSizeChecker;
    exports.fetchTypeProcessor = fetchTypeProcessor;
    exports.fetchResponseTypeChecker = fetchResponseTypeChecker;
    exports.fetchResponseJsonTransformer = fetchResponseJsonTransformer;
    exports.fetchJsonProcessor = fetchJsonProcessor;
    exports.fetchJsonValidatorProcessor = fetchJsonValidatorProcessor;
    var pipe_1 = require_dist7();
    var fetch_error_js_1 = require_fetch_error();
    var transformed_response_js_1 = require_transformed_response();
    var util_js_1 = require_util7();
    var JSON_MIME = /^application\/(?:[^()<>@,;:/[\]\\?={} \t]+\+)?json$/i;
    var FetchResponseError = class _FetchResponseError extends fetch_error_js_1.FetchError {
      constructor(response, statusCode = response.status, message2 = response.statusText, options) {
        super(statusCode, message2, options);
        Object.defineProperty(this, "response", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: response
        });
      }
      static async from(response, customMessage = extractResponseMessage, statusCode = response.status, options) {
        const message2 = typeof customMessage === "string" ? customMessage : typeof customMessage === "function" ? await customMessage(response) : void 0;
        return new _FetchResponseError(response, statusCode, message2, options);
      }
    };
    exports.FetchResponseError = FetchResponseError;
    var extractResponseMessage = async (response) => {
      const mimeType = extractMime(response);
      if (!mimeType)
        return void 0;
      try {
        if (mimeType === "text/plain") {
          return await response.text();
        } else if (JSON_MIME.test(mimeType)) {
          const json = await response.json();
          if (typeof json === "string")
            return json;
          if (typeof json === "object" && json != null) {
            const errorDescription = (0, util_js_1.ifString)(json["error_description"]);
            if (errorDescription)
              return errorDescription;
            const error = (0, util_js_1.ifString)(json["error"]);
            if (error)
              return error;
            const message2 = (0, util_js_1.ifString)(json["message"]);
            if (message2)
              return message2;
          }
        }
      } catch {
      }
      return void 0;
    };
    async function peekJson(response, maxSize = Infinity) {
      const type = extractMime(response);
      if (type !== "application/json")
        return void 0;
      checkLength(response, maxSize);
      const clonedResponse = response.clone();
      const limitedResponse = response.body && maxSize < Infinity ? new transformed_response_js_1.TransformedResponse(clonedResponse, new util_js_1.MaxBytesTransformStream(maxSize)) : (
        // Note: some runtimes (e.g. react-native) don't expose a body property
        clonedResponse
      );
      return limitedResponse.json();
    }
    function checkLength(response, maxBytes) {
      if (!(maxBytes >= 0)) {
        throw new TypeError("maxBytes must be a non-negative number");
      }
      const length = extractLength(response);
      if (length != null && length > maxBytes) {
        throw new FetchResponseError(response, 502, "Response too large");
      }
      return length;
    }
    function extractLength(response) {
      const contentLength = response.headers.get("Content-Length");
      if (contentLength == null)
        return void 0;
      if (!/^\d+$/.test(contentLength)) {
        throw new FetchResponseError(response, 502, "Invalid Content-Length");
      }
      const length = Number(contentLength);
      if (!Number.isSafeInteger(length)) {
        throw new FetchResponseError(response, 502, "Content-Length too large");
      }
      return length;
    }
    function extractMime(response) {
      const contentType = response.headers.get("Content-Type");
      if (contentType == null)
        return void 0;
      return contentType.split(";", 1)[0].trim();
    }
    function cancelBodyOnError(transformer, onCancellationError = util_js_1.logCancellationError) {
      return async (response) => {
        try {
          return await transformer(response);
        } catch (err) {
          await (0, util_js_1.cancelBody)(response, onCancellationError ?? void 0);
          throw err;
        }
      };
    }
    function fetchOkProcessor(customMessage) {
      return cancelBodyOnError((response) => {
        return fetchOkTransformer(response, customMessage);
      });
    }
    async function fetchOkTransformer(response, customMessage) {
      if (response.ok)
        return response;
      throw await FetchResponseError.from(response, customMessage);
    }
    function fetchMaxSizeProcessor(maxBytes) {
      if (maxBytes === Infinity)
        return (response) => response;
      if (!Number.isFinite(maxBytes) || maxBytes < 0) {
        throw new TypeError("maxBytes must be a 0, Infinity or a positive number");
      }
      return cancelBodyOnError((response) => {
        return fetchResponseMaxSizeChecker(response, maxBytes);
      });
    }
    function fetchResponseMaxSizeChecker(response, maxBytes) {
      if (maxBytes === Infinity)
        return response;
      checkLength(response, maxBytes);
      if (!response.body)
        return response;
      const transform = new util_js_1.MaxBytesTransformStream(maxBytes);
      return new transformed_response_js_1.TransformedResponse(response, transform);
    }
    function fetchTypeProcessor(expectedMime, contentTypeRequired = true) {
      const isExpected = typeof expectedMime === "string" ? (mimeType) => mimeType === expectedMime : expectedMime instanceof RegExp ? (mimeType) => expectedMime.test(mimeType) : expectedMime;
      return cancelBodyOnError((response) => {
        return fetchResponseTypeChecker(response, isExpected, contentTypeRequired);
      });
    }
    async function fetchResponseTypeChecker(response, isExpectedMime, contentTypeRequired = true) {
      const mimeType = extractMime(response);
      if (mimeType) {
        if (!isExpectedMime(mimeType.toLowerCase())) {
          throw await FetchResponseError.from(response, `Unexpected response Content-Type (${mimeType})`, 502);
        }
      } else if (contentTypeRequired) {
        throw await FetchResponseError.from(response, "Missing response Content-Type header", 502);
      }
      return response;
    }
    async function fetchResponseJsonTransformer(response) {
      try {
        const json = await response.json();
        return { response, json };
      } catch (cause) {
        throw new FetchResponseError(response, 502, "Unable to parse response as JSON", { cause });
      }
    }
    function fetchJsonProcessor(expectedMime = JSON_MIME, contentTypeRequired = true) {
      return (0, pipe_1.pipe)(fetchTypeProcessor(expectedMime, contentTypeRequired), cancelBodyOnError(fetchResponseJsonTransformer));
    }
    function fetchJsonValidatorProcessor(schema, params) {
      if ("parseAsync" in schema && typeof schema.parseAsync === "function") {
        return async (jsonResponse) => schema.parseAsync(jsonResponse.json, params);
      }
      if ("parse" in schema && typeof schema.parse === "function") {
        return async (jsonResponse) => schema.parse(jsonResponse.json, params);
      }
      throw new TypeError("Invalid schema");
    }
    exports.fetchJsonZodProcessor = fetchJsonValidatorProcessor;
  }
});

// node_modules/@atproto-labs/fetch/dist/fetch-wrap.js
var require_fetch_wrap = __commonJS({
  "node_modules/@atproto-labs/fetch/dist/fetch-wrap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.timedFetch = void 0;
    exports.loggedFetch = loggedFetch;
    exports.bindFetch = bindFetch;
    var fetch_request_js_1 = require_fetch_request();
    var fetch_js_1 = require_fetch();
    var transformed_response_js_1 = require_transformed_response();
    var util_js_1 = require_util7();
    function loggedFetch({ fetch: fetch2 = globalThis.fetch, logRequest = true, logResponse = true, logError = true }) {
      const onRequest = logRequest === true ? async (request) => {
        const requestMessage = await (0, util_js_1.stringifyMessage)(request);
        console.info(`> ${request.method} ${request.url}
${(0, util_js_1.padLines)(requestMessage, "  ")}`);
      } : logRequest || void 0;
      const onResponse = logResponse === true ? async (response) => {
        const responseMessage = await (0, util_js_1.stringifyMessage)(response.clone());
        console.info(`< HTTP/1.1 ${response.status} ${response.statusText}
${(0, util_js_1.padLines)(responseMessage, "  ")}`);
      } : logResponse || void 0;
      const onError = logError === true ? async (error) => {
        console.error(`< Error:`, error);
      } : logError || void 0;
      if (!onRequest && !onResponse && !onError)
        return fetch2;
      return (0, fetch_js_1.toRequestTransformer)(async function(request) {
        if (onRequest)
          await onRequest(request);
        try {
          const response = await fetch2.call(this, request);
          if (onResponse)
            await onResponse(response, request);
          return response;
        } catch (error) {
          if (onError)
            await onError(error, request);
          throw error;
        }
      });
    }
    var timedFetch = (timeout = 6e4, fetch2 = globalThis.fetch) => {
      if (timeout === Infinity)
        return fetch2;
      if (!Number.isFinite(timeout) || timeout <= 0) {
        throw new TypeError("Timeout must be positive");
      }
      return (0, fetch_js_1.toRequestTransformer)(async function(request) {
        const controller = new AbortController();
        const signal = controller.signal;
        const abort = () => {
          controller.abort();
        };
        const cleanup = () => {
          clearTimeout(timer);
          request.signal?.removeEventListener("abort", abort);
        };
        const timer = setTimeout(abort, timeout);
        if (typeof timer === "object")
          timer.unref?.();
        request.signal?.addEventListener("abort", abort);
        signal.addEventListener("abort", cleanup);
        const response = await fetch2.call(this, request, { signal });
        if (!response.body) {
          cleanup();
          return response;
        } else {
          const transform = new TransformStream({ flush: cleanup });
          return new transformed_response_js_1.TransformedResponse(response, transform);
        }
      });
    };
    exports.timedFetch = timedFetch;
    function bindFetch(fetch2 = globalThis.fetch, context = globalThis) {
      return (0, fetch_js_1.toRequestTransformer)(async (request) => {
        try {
          return await fetch2.call(context, request);
        } catch (err) {
          throw fetch_request_js_1.FetchRequestError.from(request, err);
        }
      });
    }
  }
});

// node_modules/@atproto-labs/fetch/dist/index.js
var require_dist8 = __commonJS({
  "node_modules/@atproto-labs/fetch/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_fetch_error(), exports);
    __exportStar(require_fetch_request(), exports);
    __exportStar(require_fetch_response(), exports);
    __exportStar(require_fetch_wrap(), exports);
    __exportStar(require_fetch(), exports);
    __exportStar(require_util7(), exports);
  }
});

// node_modules/@atproto-labs/did-resolver/dist/did-resolver-base.js
var require_did_resolver_base = __commonJS({
  "node_modules/@atproto-labs/did-resolver/dist/did-resolver-base.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DidResolverBase = void 0;
    var zod_1 = require_zod();
    var did_1 = require_dist4();
    var fetch_1 = require_dist8();
    var DidResolverBase = class {
      constructor(methods) {
        Object.defineProperty(this, "methods", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.methods = new Map(Object.entries(methods));
      }
      async resolve(did, options) {
        options?.signal?.throwIfAborted();
        const method = (0, did_1.extractDidMethod)(did);
        const resolver = this.methods.get(method);
        if (!resolver) {
          throw new did_1.DidError(did, `Unsupported DID method`, "did-method-invalid", 400);
        }
        try {
          const document2 = await resolver.resolve(did, options);
          if (document2.id !== did) {
            throw new did_1.DidError(did, `DID document id (${document2.id}) does not match DID`, "did-document-id-mismatch", 400);
          }
          return document2;
        } catch (err) {
          if (err instanceof fetch_1.FetchResponseError) {
            const status = err.response.status >= 500 ? 502 : err.response.status;
            throw new did_1.DidError(did, err.message, "did-fetch-error", status, err);
          }
          if (err instanceof fetch_1.FetchError) {
            throw new did_1.DidError(did, err.message, "did-fetch-error", 400, err);
          }
          if (err instanceof zod_1.ZodError) {
            throw new did_1.DidError(did, err.message, "did-document-format-error", 503, err);
          }
          throw did_1.DidError.from(err, did);
        }
      }
    };
    exports.DidResolverBase = DidResolverBase;
  }
});

// node_modules/@atproto-labs/did-resolver/dist/methods/plc.js
var require_plc2 = __commonJS({
  "node_modules/@atproto-labs/did-resolver/dist/methods/plc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DidPlcMethod = void 0;
    var did_1 = require_dist4();
    var fetch_1 = require_dist8();
    var pipe_1 = require_dist7();
    var fetchSuccessHandler = (0, pipe_1.pipe)((0, fetch_1.fetchOkProcessor)(), (0, fetch_1.fetchJsonProcessor)(/^application\/(did\+ld\+)?json$/), (0, fetch_1.fetchJsonZodProcessor)(did_1.didDocumentValidator));
    var DidPlcMethod = class {
      constructor(options) {
        Object.defineProperty(this, "fetch", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "plcDirectoryUrl", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.plcDirectoryUrl = new URL(options?.plcDirectoryUrl || "https://plc.directory/");
        this.fetch = (0, fetch_1.bindFetch)(options?.fetch);
      }
      async resolve(did, options) {
        (0, did_1.assertDidPlc)(did);
        const url = new URL(`/${encodeURIComponent(did)}`, this.plcDirectoryUrl);
        return this.fetch(url, {
          redirect: "error",
          headers: { accept: "application/did+ld+json,application/json" },
          signal: options?.signal
        }).then(fetchSuccessHandler);
      }
    };
    exports.DidPlcMethod = DidPlcMethod;
  }
});

// node_modules/@atproto-labs/did-resolver/dist/methods/web.js
var require_web2 = __commonJS({
  "node_modules/@atproto-labs/did-resolver/dist/methods/web.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DidWebMethod = void 0;
    exports.buildDidWebDocumentUrl = buildDidWebDocumentUrl;
    var did_1 = require_dist4();
    var fetch_1 = require_dist8();
    var pipe_1 = require_dist7();
    var fetchSuccessHandler = (0, pipe_1.pipe)((0, fetch_1.fetchOkProcessor)(), (0, fetch_1.fetchJsonProcessor)(/^application\/(did\+ld\+)?json$/), (0, fetch_1.fetchJsonZodProcessor)(did_1.didDocumentValidator));
    var DidWebMethod = class {
      constructor({ fetch: fetch2 = globalThis.fetch, allowHttp = true } = {}) {
        Object.defineProperty(this, "fetch", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "allowHttp", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.fetch = (0, fetch_1.bindFetch)(fetch2);
        this.allowHttp = allowHttp;
      }
      async resolve(did, options) {
        const didDocumentUrl = buildDidWebDocumentUrl(did);
        if (!this.allowHttp && didDocumentUrl.protocol === "http:") {
          throw new did_1.DidError(did, 'Resolution of "http" did:web is not allowed', "did-web-http-not-allowed");
        }
        return this.fetch(didDocumentUrl, {
          redirect: "error",
          headers: { accept: "application/did+ld+json,application/json" },
          signal: options?.signal
        }).then(fetchSuccessHandler);
      }
    };
    exports.DidWebMethod = DidWebMethod;
    function buildDidWebDocumentUrl(did) {
      const url = (0, did_1.didWebToUrl)(did);
      if (url.pathname === "/") {
        return new URL(`/.well-known/did.json`, url);
      } else {
        return new URL(`${url.pathname}/did.json`, url);
      }
    }
  }
});

// node_modules/@atproto-labs/did-resolver/dist/did-resolver-common.js
var require_did_resolver_common = __commonJS({
  "node_modules/@atproto-labs/did-resolver/dist/did-resolver-common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DidResolverCommon = void 0;
    var did_resolver_base_js_1 = require_did_resolver_base();
    var plc_js_1 = require_plc2();
    var web_js_1 = require_web2();
    var DidResolverCommon = class extends did_resolver_base_js_1.DidResolverBase {
      constructor(options) {
        super({
          plc: new plc_js_1.DidPlcMethod(options),
          web: new web_js_1.DidWebMethod(options)
        });
      }
    };
    exports.DidResolverCommon = DidResolverCommon;
  }
});

// node_modules/@atproto-labs/did-resolver/dist/create-did-resolver.js
var require_create_did_resolver = __commonJS({
  "node_modules/@atproto-labs/did-resolver/dist/create-did-resolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDidResolver = createDidResolver;
    var did_cache_js_1 = require_did_cache();
    var did_resolver_common_js_1 = require_did_resolver_common();
    function createDidResolver(options) {
      const { didResolver, didCache } = options;
      if (didResolver instanceof did_cache_js_1.DidResolverCached && !didCache) {
        return didResolver;
      }
      return new did_cache_js_1.DidResolverCached(didResolver ?? new did_resolver_common_js_1.DidResolverCommon(options), didCache);
    }
  }
});

// node_modules/@atproto-labs/did-resolver/dist/did-method.js
var require_did_method = __commonJS({
  "node_modules/@atproto-labs/did-resolver/dist/did-method.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@atproto-labs/did-resolver/dist/did-resolver.js
var require_did_resolver = __commonJS({
  "node_modules/@atproto-labs/did-resolver/dist/did-resolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@atproto-labs/did-resolver/dist/methods.js
var require_methods2 = __commonJS({
  "node_modules/@atproto-labs/did-resolver/dist/methods.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_plc2(), exports);
    __exportStar(require_web2(), exports);
  }
});

// node_modules/@atproto-labs/did-resolver/dist/index.js
var require_dist9 = __commonJS({
  "node_modules/@atproto-labs/did-resolver/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_dist4(), exports);
    __exportStar(require_create_did_resolver(), exports);
    __exportStar(require_did_cache_memory(), exports);
    __exportStar(require_did_cache(), exports);
    __exportStar(require_did_method(), exports);
    __exportStar(require_did_resolver_common(), exports);
    __exportStar(require_did_resolver(), exports);
    __exportStar(require_methods2(), exports);
  }
});

// node_modules/@atproto-labs/handle-resolver/dist/handle-resolver-error.js
var require_handle_resolver_error = __commonJS({
  "node_modules/@atproto-labs/handle-resolver/dist/handle-resolver-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HandleResolverError = void 0;
    var HandleResolverError = class extends Error {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "HandleResolverError"
        });
      }
    };
    exports.HandleResolverError = HandleResolverError;
  }
});

// node_modules/@atproto-labs/handle-resolver/dist/types.js
var require_types2 = __commonJS({
  "node_modules/@atproto-labs/handle-resolver/dist/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isResolvedHandle = isResolvedHandle;
    exports.asResolvedHandle = asResolvedHandle;
    var did_1 = require_dist4();
    function isResolvedHandle(value) {
      return value === null || (0, did_1.isAtprotoDid)(value);
    }
    function asResolvedHandle(value) {
      return isResolvedHandle(value) ? value : null;
    }
  }
});

// node_modules/@atproto-labs/handle-resolver/dist/xrpc-handle-resolver.js
var require_xrpc_handle_resolver = __commonJS({
  "node_modules/@atproto-labs/handle-resolver/dist/xrpc-handle-resolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XrpcHandleResolver = exports.xrpcErrorSchema = void 0;
    var zod_1 = require_zod();
    var handle_resolver_error_js_1 = require_handle_resolver_error();
    var types_js_1 = require_types2();
    exports.xrpcErrorSchema = zod_1.z.object({
      error: zod_1.z.string(),
      message: zod_1.z.string().optional()
    });
    var XrpcHandleResolver = class {
      constructor(service, options) {
        Object.defineProperty(this, "serviceUrl", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "fetch", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.serviceUrl = new URL(service);
        this.fetch = options?.fetch ?? globalThis.fetch;
      }
      async resolve(handle, options) {
        const url = new URL("/xrpc/com.atproto.identity.resolveHandle", this.serviceUrl);
        url.searchParams.set("handle", handle);
        const response = await this.fetch.call(null, url, {
          cache: options?.noCache ? "no-cache" : void 0,
          signal: options?.signal,
          redirect: "error"
        });
        const payload = await response.json();
        if (response.status === 400) {
          const { error, data } = exports.xrpcErrorSchema.safeParse(payload);
          if (error) {
            throw new handle_resolver_error_js_1.HandleResolverError(`Invalid response from resolveHandle method: ${error.message}`, { cause: error });
          }
          if (data.error === "InvalidRequest" && data.message === "Unable to resolve handle") {
            return null;
          }
        }
        if (!response.ok) {
          throw new handle_resolver_error_js_1.HandleResolverError("Invalid status code from resolveHandle method");
        }
        const value = payload?.did;
        if (!(0, types_js_1.isResolvedHandle)(value)) {
          throw new handle_resolver_error_js_1.HandleResolverError("Invalid DID returned from resolveHandle method");
        }
        return value;
      }
    };
    exports.XrpcHandleResolver = XrpcHandleResolver;
  }
});

// node_modules/@atproto-labs/handle-resolver/dist/internal-resolvers/dns-handle-resolver.js
var require_dns_handle_resolver = __commonJS({
  "node_modules/@atproto-labs/handle-resolver/dist/internal-resolvers/dns-handle-resolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DnsHandleResolver = void 0;
    var types_1 = require_types2();
    var SUBDOMAIN = "_atproto";
    var PREFIX = "did=";
    var DnsHandleResolver = class {
      constructor(resolveTxt) {
        Object.defineProperty(this, "resolveTxt", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: resolveTxt
        });
      }
      async resolve(handle) {
        const results = await this.resolveTxt.call(null, `${SUBDOMAIN}.${handle}`);
        if (!results)
          return null;
        for (let i = 0; i < results.length; i++) {
          if (!results[i].startsWith(PREFIX))
            continue;
          for (let j = i + 1; j < results.length; j++) {
            if (results[j].startsWith(PREFIX))
              return null;
          }
          const did = results[i].slice(PREFIX.length);
          return (0, types_1.isResolvedHandle)(did) ? did : null;
        }
        return null;
      }
    };
    exports.DnsHandleResolver = DnsHandleResolver;
  }
});

// node_modules/@atproto-labs/handle-resolver/dist/internal-resolvers/well-known-handler-resolver.js
var require_well_known_handler_resolver = __commonJS({
  "node_modules/@atproto-labs/handle-resolver/dist/internal-resolvers/well-known-handler-resolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WellKnownHandleResolver = void 0;
    var types_js_1 = require_types2();
    var WellKnownHandleResolver = class {
      constructor(options) {
        Object.defineProperty(this, "fetch", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.fetch = options?.fetch ?? globalThis.fetch;
      }
      async resolve(handle, options) {
        const url = new URL("/.well-known/atproto-did", `https://${handle}`);
        try {
          const response = await this.fetch.call(null, url, {
            cache: options?.noCache ? "no-cache" : void 0,
            signal: options?.signal,
            redirect: "error"
          });
          const text = await response.text();
          const firstLine = text.split("\n")[0].trim();
          if ((0, types_js_1.isResolvedHandle)(firstLine))
            return firstLine;
          return null;
        } catch (err) {
          options?.signal?.throwIfAborted();
          return null;
        }
      }
    };
    exports.WellKnownHandleResolver = WellKnownHandleResolver;
  }
});

// node_modules/@atproto-labs/handle-resolver/dist/atproto-handle-resolver.js
var require_atproto_handle_resolver = __commonJS({
  "node_modules/@atproto-labs/handle-resolver/dist/atproto-handle-resolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AtprotoHandleResolver = void 0;
    var dns_handle_resolver_js_1 = require_dns_handle_resolver();
    var well_known_handler_resolver_js_1 = require_well_known_handler_resolver();
    var noop = () => {
    };
    var AtprotoHandleResolver = class {
      constructor(options) {
        Object.defineProperty(this, "httpResolver", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "dnsResolver", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "dnsResolverFallback", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.httpResolver = new well_known_handler_resolver_js_1.WellKnownHandleResolver(options);
        this.dnsResolver = new dns_handle_resolver_js_1.DnsHandleResolver(options.resolveTxt);
        this.dnsResolverFallback = options.resolveTxtFallback ? new dns_handle_resolver_js_1.DnsHandleResolver(options.resolveTxtFallback) : void 0;
      }
      async resolve(handle, options) {
        options?.signal?.throwIfAborted();
        const abortController = new AbortController();
        const { signal } = abortController;
        options?.signal?.addEventListener("abort", () => abortController.abort(), {
          signal
        });
        const wrappedOptions = { ...options, signal };
        try {
          const dnsPromise = this.dnsResolver.resolve(handle, wrappedOptions);
          const httpPromise = this.httpResolver.resolve(handle, wrappedOptions);
          httpPromise.catch(noop);
          const dnsRes = await dnsPromise;
          if (dnsRes)
            return dnsRes;
          signal.throwIfAborted();
          const res = await httpPromise;
          if (res)
            return res;
          signal.throwIfAborted();
          return this.dnsResolverFallback?.resolve(handle, wrappedOptions) ?? null;
        } finally {
          abortController.abort();
        }
      }
    };
    exports.AtprotoHandleResolver = AtprotoHandleResolver;
  }
});

// node_modules/@atproto-labs/handle-resolver/dist/atproto-doh-handle-resolver.js
var require_atproto_doh_handle_resolver = __commonJS({
  "node_modules/@atproto-labs/handle-resolver/dist/atproto-doh-handle-resolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AtprotoDohHandleResolver = void 0;
    var atproto_handle_resolver_js_1 = require_atproto_handle_resolver();
    var handle_resolver_error_js_1 = require_handle_resolver_error();
    var AtprotoDohHandleResolver = class extends atproto_handle_resolver_js_1.AtprotoHandleResolver {
      constructor(options) {
        super({
          ...options,
          resolveTxt: dohResolveTxtFactory(options),
          resolveTxtFallback: void 0
        });
      }
    };
    exports.AtprotoDohHandleResolver = AtprotoDohHandleResolver;
    function dohResolveTxtFactory({ dohEndpoint, fetch: fetch2 = globalThis.fetch }) {
      return async (hostname) => {
        const url = new URL(dohEndpoint);
        url.searchParams.set("type", "TXT");
        url.searchParams.set("name", hostname);
        const response = await fetch2(url, {
          method: "GET",
          headers: { accept: "application/dns-json" },
          redirect: "follow"
        });
        try {
          const contentType = response.headers.get("content-type")?.trim();
          if (!response.ok) {
            const message2 = contentType?.startsWith("text/plain") ? await response.text() : `Failed to resolve ${hostname}`;
            throw new handle_resolver_error_js_1.HandleResolverError(message2);
          } else if (contentType?.match(/application\/(dns-)?json/i) == null) {
            throw new handle_resolver_error_js_1.HandleResolverError("Unexpected response from DoH server");
          }
          const result = asResult(await response.json());
          return result.Answer?.filter(isAnswerTxt).map(extractTxtData) ?? null;
        } finally {
          if (response.bodyUsed === false) {
            void response.body?.cancel().catch(onCancelError);
          }
        }
      };
    }
    function onCancelError(err) {
      if (!(err instanceof DOMException) || err.name !== "AbortError") {
        console.error("An error occurred while cancelling the response body:", err);
      }
    }
    function isResult(result) {
      if (typeof result !== "object" || result === null)
        return false;
      if (!("Status" in result) || typeof result.Status !== "number")
        return false;
      if ("Answer" in result && !isArrayOf(result.Answer, isAnswer))
        return false;
      return true;
    }
    function asResult(result) {
      if (isResult(result))
        return result;
      throw new handle_resolver_error_js_1.HandleResolverError("Invalid DoH response");
    }
    function isArrayOf(value, predicate) {
      return Array.isArray(value) && value.every(predicate);
    }
    function isAnswer(answer) {
      return typeof answer === "object" && answer !== null && "name" in answer && typeof answer.name === "string" && "type" in answer && typeof answer.type === "number" && "data" in answer && typeof answer.data === "string" && "TTL" in answer && typeof answer.TTL === "number";
    }
    function isAnswerTxt(answer) {
      return answer.type === 16;
    }
    function extractTxtData(answer) {
      return answer.data.replace(/^"|"$/g, "").replace(/\\"/g, '"');
    }
  }
});

// node_modules/@atproto-labs/handle-resolver/dist/cached-handle-resolver.js
var require_cached_handle_resolver = __commonJS({
  "node_modules/@atproto-labs/handle-resolver/dist/cached-handle-resolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CachedHandleResolver = void 0;
    var simple_store_1 = require_dist5();
    var simple_store_memory_1 = require_dist6();
    var CachedHandleResolver = class {
      constructor(resolver, cache = new simple_store_memory_1.SimpleStoreMemory({
        max: 1e3,
        ttl: 10 * 6e4
      })) {
        Object.defineProperty(this, "getter", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.getter = new simple_store_1.CachedGetter((handle, options) => resolver.resolve(handle, options), cache);
      }
      async resolve(handle, options) {
        return this.getter.get(handle, options);
      }
    };
    exports.CachedHandleResolver = CachedHandleResolver;
  }
});

// node_modules/@atproto-labs/handle-resolver/dist/create-handle-resolver.js
var require_create_handle_resolver = __commonJS({
  "node_modules/@atproto-labs/handle-resolver/dist/create-handle-resolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createHandleResolver = createHandleResolver;
    var cached_handle_resolver_js_1 = require_cached_handle_resolver();
    var xrpc_handle_resolver_js_1 = require_xrpc_handle_resolver();
    function createHandleResolver(options) {
      const { handleResolver, handleCache } = options;
      if (handleResolver instanceof cached_handle_resolver_js_1.CachedHandleResolver && !handleCache) {
        return handleResolver;
      }
      return new cached_handle_resolver_js_1.CachedHandleResolver(typeof handleResolver === "string" || handleResolver instanceof URL ? new xrpc_handle_resolver_js_1.XrpcHandleResolver(handleResolver, options) : handleResolver, handleCache);
    }
  }
});

// node_modules/@atproto-labs/handle-resolver/dist/index.js
var require_dist10 = __commonJS({
  "node_modules/@atproto-labs/handle-resolver/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_handle_resolver_error(), exports);
    __exportStar(require_types2(), exports);
    __exportStar(require_xrpc_handle_resolver(), exports);
    __exportStar(require_atproto_doh_handle_resolver(), exports);
    __exportStar(require_atproto_handle_resolver(), exports);
    __exportStar(require_cached_handle_resolver(), exports);
    __exportStar(require_create_handle_resolver(), exports);
  }
});

// node_modules/@atproto/oauth-types/dist/constants.js
var require_constants = __commonJS({
  "node_modules/@atproto/oauth-types/dist/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CLIENT_ASSERTION_TYPE_JWT_BEARER = void 0;
    exports.CLIENT_ASSERTION_TYPE_JWT_BEARER = "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
  }
});

// node_modules/@atproto/oauth-types/dist/util.js
var require_util8 = __commonJS({
  "node_modules/@atproto/oauth-types/dist/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSpaceSeparatedValue = exports.numberPreprocess = exports.jsonObjectPreprocess = exports.canParseUrl = void 0;
    exports.isHostnameIP = isHostnameIP;
    exports.isLoopbackHost = isLoopbackHost;
    exports.isLocalHostname = isLocalHostname;
    exports.safeUrl = safeUrl;
    exports.extractUrlPath = extractUrlPath;
    exports.arrayEquivalent = arrayEquivalent;
    exports.includedIn = includedIn;
    exports.asArray = asArray;
    exports.canParseUrl = // eslint-disable-next-line n/no-unsupported-features/node-builtins
    URL.canParse?.bind(URL) ?? // URL.canParse is not available in Node.js < 18.7.0
    ((urlStr) => {
      try {
        new URL(urlStr);
        return true;
      } catch {
        return false;
      }
    });
    function isHostnameIP(hostname) {
      if (hostname.match(/^\d+\.\d+\.\d+\.\d+$/))
        return true;
      if (hostname.startsWith("[") && hostname.endsWith("]"))
        return true;
      return false;
    }
    function isLoopbackHost(host) {
      return host === "localhost" || host === "127.0.0.1" || host === "[::1]";
    }
    function isLocalHostname(hostname) {
      const parts = hostname.split(".");
      if (parts.length < 2)
        return true;
      const tld = parts.at(-1).toLowerCase();
      return tld === "test" || tld === "local" || tld === "localhost" || tld === "invalid" || tld === "example";
    }
    function safeUrl(input) {
      try {
        return new URL(input);
      } catch {
        return null;
      }
    }
    function extractUrlPath(url) {
      const endOfProtocol = url.startsWith("https://") ? 8 : url.startsWith("http://") ? 7 : -1;
      if (endOfProtocol === -1) {
        throw new TypeError('URL must use the "https:" or "http:" protocol');
      }
      const hashIdx = url.indexOf("#", endOfProtocol);
      const questionIdx = url.indexOf("?", endOfProtocol);
      const queryStrIdx = questionIdx !== -1 && (hashIdx === -1 || questionIdx < hashIdx) ? questionIdx : -1;
      const pathEnd = hashIdx === -1 ? queryStrIdx === -1 ? url.length : queryStrIdx : queryStrIdx === -1 ? hashIdx : Math.min(hashIdx, queryStrIdx);
      const slashIdx = url.indexOf("/", endOfProtocol);
      const pathStart = slashIdx === -1 || slashIdx > pathEnd ? pathEnd : slashIdx;
      if (endOfProtocol === pathStart) {
        throw new TypeError("URL must contain a host");
      }
      return url.substring(pathStart, pathEnd);
    }
    var jsonObjectPreprocess = (val) => {
      if (typeof val === "string" && val.startsWith("{") && val.endsWith("}")) {
        try {
          return JSON.parse(val);
        } catch {
          return val;
        }
      }
      return val;
    };
    exports.jsonObjectPreprocess = jsonObjectPreprocess;
    var numberPreprocess = (val) => {
      if (typeof val === "string") {
        const number = Number(val);
        if (!Number.isNaN(number))
          return number;
      }
      return val;
    };
    exports.numberPreprocess = numberPreprocess;
    function arrayEquivalent(a, b) {
      if (a === b)
        return true;
      return a.every(includedIn, b) && b.every(includedIn, a);
    }
    function includedIn(item) {
      return this.includes(item);
    }
    function asArray(value) {
      if (value == null)
        return void 0;
      if (Array.isArray(value))
        return value;
      return Array.from(value);
    }
    var isSpaceSeparatedValue = (value, input) => {
      if (value.length === 0)
        throw new TypeError("Value cannot be empty");
      if (value.includes(" "))
        throw new TypeError("Value cannot contain spaces");
      const inputLength = input.length;
      const valueLength = value.length;
      if (inputLength < valueLength)
        return false;
      let idx = input.indexOf(value);
      let idxEnd;
      while (idx !== -1) {
        idxEnd = idx + valueLength;
        if (
          // at beginning or preceded by space
          (idx === 0 || input.charCodeAt(idx - 1) === 32) && // at end or followed by space
          (idxEnd === inputLength || input.charCodeAt(idxEnd) === 32)
        ) {
          return true;
        }
        idx = input.indexOf(value, idxEnd + 1);
      }
      return false;
    };
    exports.isSpaceSeparatedValue = isSpaceSeparatedValue;
  }
});

// node_modules/@atproto/oauth-types/dist/uri.js
var require_uri2 = __commonJS({
  "node_modules/@atproto/oauth-types/dist/uri.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.privateUseUriSchema = exports.webUriSchema = exports.httpsUriSchema = exports.loopbackUriSchema = exports.dangerousUriSchema = void 0;
    var zod_1 = require_zod();
    var util_js_1 = require_util8();
    exports.dangerousUriSchema = zod_1.z.string().refine((data) => data.includes(":") && (0, util_js_1.canParseUrl)(data), {
      message: "Invalid URL"
    });
    exports.loopbackUriSchema = exports.dangerousUriSchema.superRefine((value, ctx) => {
      if (!value.startsWith("http://")) {
        ctx.addIssue({
          code: zod_1.ZodIssueCode.custom,
          message: 'URL must use the "http:" protocol'
        });
        return false;
      }
      const url = new URL(value);
      if (!(0, util_js_1.isLoopbackHost)(url.hostname)) {
        ctx.addIssue({
          code: zod_1.ZodIssueCode.custom,
          message: 'URL must use "localhost", "127.0.0.1" or "[::1]" as hostname'
        });
        return false;
      }
      return true;
    });
    exports.httpsUriSchema = exports.dangerousUriSchema.superRefine((value, ctx) => {
      if (!value.startsWith("https://")) {
        ctx.addIssue({
          code: zod_1.ZodIssueCode.custom,
          message: 'URL must use the "https:" protocol'
        });
        return false;
      }
      const url = new URL(value);
      if ((0, util_js_1.isLoopbackHost)(url.hostname)) {
        ctx.addIssue({
          code: zod_1.ZodIssueCode.custom,
          message: "https: URL must not use a loopback host"
        });
        return false;
      }
      if ((0, util_js_1.isHostnameIP)(url.hostname)) {
      } else {
        if (!url.hostname.includes(".")) {
          ctx.addIssue({
            code: zod_1.ZodIssueCode.custom,
            message: "Domain name must contain at least two segments"
          });
          return false;
        }
        if (url.hostname.endsWith(".local")) {
          ctx.addIssue({
            code: zod_1.ZodIssueCode.custom,
            message: 'Domain name must not end with ".local"'
          });
          return false;
        }
      }
      return true;
    });
    exports.webUriSchema = zod_1.z.string().superRefine((value, ctx) => {
      if (value.startsWith("http://")) {
        const result = exports.loopbackUriSchema.safeParse(value);
        if (!result.success)
          result.error.issues.forEach(ctx.addIssue, ctx);
        return result.success;
      }
      if (value.startsWith("https://")) {
        const result = exports.httpsUriSchema.safeParse(value);
        if (!result.success)
          result.error.issues.forEach(ctx.addIssue, ctx);
        return result.success;
      }
      ctx.addIssue({
        code: zod_1.ZodIssueCode.custom,
        message: 'URL must use the "http:" or "https:" protocol'
      });
      return false;
    });
    exports.privateUseUriSchema = exports.dangerousUriSchema.superRefine((value, ctx) => {
      const dotIdx = value.indexOf(".");
      const colonIdx = value.indexOf(":");
      if (dotIdx === -1 || colonIdx === -1 || dotIdx > colonIdx) {
        ctx.addIssue({
          code: zod_1.ZodIssueCode.custom,
          message: 'Private-use URI scheme requires a "." as part of the protocol'
        });
        return false;
      }
      const url = new URL(value);
      if (!url.protocol.includes(".")) {
        ctx.addIssue({
          code: zod_1.ZodIssueCode.custom,
          message: "Invalid private-use URI scheme"
        });
        return false;
      }
      const uriScheme = url.protocol.slice(0, -1);
      const urlDomain = uriScheme.split(".").reverse().join(".");
      if ((0, util_js_1.isLocalHostname)(urlDomain)) {
        ctx.addIssue({
          code: zod_1.ZodIssueCode.custom,
          message: `Private-use URI Scheme redirect URI must not be a local hostname`
        });
      }
      if (url.href.startsWith(`${url.protocol}//`) || url.username || url.password || url.hostname || url.port) {
        ctx.addIssue({
          code: zod_1.ZodIssueCode.custom,
          message: "Private-Use URI Scheme must be in the form <scheme>:/{path} (notice the single slash!) as per RFC 8252"
        });
        return false;
      }
      return true;
    });
  }
});

// node_modules/@atproto/oauth-types/dist/atproto-loopback-client-redirect-uris.js
var require_atproto_loopback_client_redirect_uris = __commonJS({
  "node_modules/@atproto/oauth-types/dist/atproto-loopback-client-redirect-uris.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_LOOPBACK_CLIENT_REDIRECT_URIS = void 0;
    exports.DEFAULT_LOOPBACK_CLIENT_REDIRECT_URIS = Object.freeze([
      `http://127.0.0.1/`,
      `http://[::1]/`
    ]);
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-scope.js
var require_oauth_scope = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-scope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthScopeSchema = exports.isOAuthScope = exports.OAUTH_SCOPE_REGEXP = void 0;
    var zod_1 = require_zod();
    exports.OAUTH_SCOPE_REGEXP = /^[\x21\x23-\x5B\x5D-\x7E]+(?: [\x21\x23-\x5B\x5D-\x7E]+)*$/;
    var isOAuthScope = (input) => exports.OAUTH_SCOPE_REGEXP.test(input);
    exports.isOAuthScope = isOAuthScope;
    exports.oauthScopeSchema = zod_1.z.string().refine(exports.isOAuthScope, {
      message: "Invalid OAuth scope"
    });
  }
});

// node_modules/@atproto/oauth-types/dist/atproto-oauth-scope.js
var require_atproto_oauth_scope = __commonJS({
  "node_modules/@atproto/oauth-types/dist/atproto-oauth-scope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_ATPROTO_OAUTH_SCOPE = exports.atprotoOAuthScopeSchema = exports.ATPROTO_SCOPE_VALUE = void 0;
    exports.isAtprotoOAuthScope = isAtprotoOAuthScope;
    exports.asAtprotoOAuthScope = asAtprotoOAuthScope;
    exports.assertAtprotoOAuthScope = assertAtprotoOAuthScope;
    var zod_1 = require_zod();
    var oauth_scope_js_1 = require_oauth_scope();
    var util_js_1 = require_util8();
    exports.ATPROTO_SCOPE_VALUE = "atproto";
    function isAtprotoOAuthScope(input) {
      return (0, oauth_scope_js_1.isOAuthScope)(input) && (0, util_js_1.isSpaceSeparatedValue)(exports.ATPROTO_SCOPE_VALUE, input);
    }
    function asAtprotoOAuthScope(input) {
      if (isAtprotoOAuthScope(input))
        return input;
      throw new TypeError(`Value must contain "${exports.ATPROTO_SCOPE_VALUE}" scope value`);
    }
    function assertAtprotoOAuthScope(input) {
      void asAtprotoOAuthScope(input);
    }
    exports.atprotoOAuthScopeSchema = zod_1.z.string().refine(isAtprotoOAuthScope, {
      message: "Invalid ATProto OAuth scope"
    });
    exports.DEFAULT_ATPROTO_OAUTH_SCOPE = exports.ATPROTO_SCOPE_VALUE;
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-client-id.js
var require_oauth_client_id = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-client-id.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthClientIdSchema = void 0;
    var zod_1 = require_zod();
    exports.oauthClientIdSchema = zod_1.z.string().min(1);
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-redirect-uri.js
var require_oauth_redirect_uri = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-redirect-uri.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthRedirectUriSchema = exports.oauthLoopbackClientRedirectUriSchema = exports.loopbackRedirectURISchema = void 0;
    var zod_1 = require_zod();
    var uri_js_1 = require_uri2();
    exports.loopbackRedirectURISchema = uri_js_1.loopbackUriSchema.superRefine((value, ctx) => {
      if (value.startsWith("http://localhost")) {
        ctx.addIssue({
          code: zod_1.ZodIssueCode.custom,
          message: 'Use of "localhost" hostname is not allowed (RFC 8252), use a loopback IP such as "127.0.0.1" instead'
        });
        return false;
      }
      return true;
    });
    exports.oauthLoopbackClientRedirectUriSchema = exports.loopbackRedirectURISchema;
    exports.oauthRedirectUriSchema = zod_1.z.string().superRefine((value, ctx) => {
      if (value.startsWith("https:")) {
        const result = uri_js_1.httpsUriSchema.safeParse(value);
        if (!result.success)
          result.error.issues.forEach(ctx.addIssue, ctx);
        return result.success;
      } else if (value.startsWith("http:")) {
        const result = exports.loopbackRedirectURISchema.safeParse(value);
        if (!result.success)
          result.error.issues.forEach(ctx.addIssue, ctx);
        return result.success;
      } else if (/^[^.:]+(?:\.[^.:]+)+:/.test(value)) {
        const result = uri_js_1.privateUseUriSchema.safeParse(value);
        if (!result.success)
          result.error.issues.forEach(ctx.addIssue, ctx);
        return result.success;
      } else {
        ctx.addIssue({
          code: zod_1.ZodIssueCode.custom,
          message: 'URL must use the "https:" or "http:" protocol, or a private-use URI scheme (RFC 8252)'
        });
        return false;
      }
    });
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-client-id-loopback.js
var require_oauth_client_id_loopback = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-client-id-loopback.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthClientIdLoopbackSchema = exports.LOOPBACK_CLIENT_ID_ORIGIN = void 0;
    exports.assertOAuthLoopbackClientId = assertOAuthLoopbackClientId;
    exports.isOAuthClientIdLoopback = isOAuthClientIdLoopback;
    exports.asOAuthClientIdLoopback = asOAuthClientIdLoopback;
    exports.parseOAuthLoopbackClientId = parseOAuthLoopbackClientId;
    exports.safeParseOAuthLoopbackClientId = safeParseOAuthLoopbackClientId;
    exports.safeParseOAuthLoopbackClientIdQueryString = safeParseOAuthLoopbackClientIdQueryString;
    var oauth_client_id_js_1 = require_oauth_client_id();
    var oauth_redirect_uri_js_1 = require_oauth_redirect_uri();
    var oauth_scope_js_1 = require_oauth_scope();
    exports.LOOPBACK_CLIENT_ID_ORIGIN = "http://localhost";
    exports.oauthClientIdLoopbackSchema = oauth_client_id_js_1.oauthClientIdSchema.superRefine((input, ctx) => {
      const result = safeParseOAuthLoopbackClientId(input);
      if (!result.success) {
        ctx.addIssue({ code: "custom", message: result.message });
      }
      return result.success;
    });
    function assertOAuthLoopbackClientId(input) {
      void parseOAuthLoopbackClientId(input);
    }
    function isOAuthClientIdLoopback(input) {
      return safeParseOAuthLoopbackClientId(input).success;
    }
    function asOAuthClientIdLoopback(input) {
      assertOAuthLoopbackClientId(input);
      return input;
    }
    function parseOAuthLoopbackClientId(input) {
      const result = safeParseOAuthLoopbackClientId(input);
      if (result.success)
        return result.value;
      throw new TypeError(`Invalid loopback client ID: ${result.message}`);
    }
    function safeParseOAuthLoopbackClientId(input) {
      if (!input.startsWith(exports.LOOPBACK_CLIENT_ID_ORIGIN)) {
        return {
          success: false,
          message: `Value must start with "${exports.LOOPBACK_CLIENT_ID_ORIGIN}"`
        };
      }
      if (input.includes("#", exports.LOOPBACK_CLIENT_ID_ORIGIN.length)) {
        return {
          success: false,
          message: "Value must not contain a hash component"
        };
      }
      const queryStringIdx = input.length > exports.LOOPBACK_CLIENT_ID_ORIGIN.length && input.charCodeAt(exports.LOOPBACK_CLIENT_ID_ORIGIN.length) === 47 ? exports.LOOPBACK_CLIENT_ID_ORIGIN.length + 1 : exports.LOOPBACK_CLIENT_ID_ORIGIN.length;
      if (input.length !== queryStringIdx && input.charCodeAt(queryStringIdx) !== 63) {
        return {
          success: false,
          message: "Value must not contain a path component"
        };
      }
      const queryString = input.slice(queryStringIdx + 1);
      return safeParseOAuthLoopbackClientIdQueryString(queryString);
    }
    function safeParseOAuthLoopbackClientIdQueryString(input) {
      const params = {};
      const it = typeof input === "string" ? new URLSearchParams(input) : input;
      for (const [key, value] of it) {
        if (key === "scope") {
          if ("scope" in params) {
            return {
              success: false,
              message: 'Duplicate "scope" query parameter'
            };
          }
          const res = oauth_scope_js_1.oauthScopeSchema.safeParse(value);
          if (!res.success) {
            const reason = res.error.issues.map((i) => i.message).join(", ");
            return {
              success: false,
              message: `Invalid "scope" query parameter: ${reason || "Validation failed"}`
            };
          }
          params.scope = res.data;
        } else if (key === "redirect_uri") {
          const res = oauth_redirect_uri_js_1.oauthLoopbackClientRedirectUriSchema.safeParse(value);
          if (!res.success) {
            const reason = res.error.issues.map((i) => i.message).join(", ");
            return {
              success: false,
              message: `Invalid "redirect_uri" query parameter: ${reason || "Validation failed"}`
            };
          }
          if (params.redirect_uris == null)
            params.redirect_uris = [res.data];
          else
            params.redirect_uris.push(res.data);
        } else {
          return {
            success: false,
            message: `Unexpected query parameter "${key}"`
          };
        }
      }
      return {
        success: true,
        value: params
      };
    }
  }
});

// node_modules/@atproto/oauth-types/dist/atproto-loopback-client-id.js
var require_atproto_loopback_client_id = __commonJS({
  "node_modules/@atproto/oauth-types/dist/atproto-loopback-client-id.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildAtprotoLoopbackClientId = buildAtprotoLoopbackClientId;
    exports.parseAtprotoLoopbackClientId = parseAtprotoLoopbackClientId;
    var atproto_loopback_client_redirect_uris_js_1 = require_atproto_loopback_client_redirect_uris();
    var atproto_oauth_scope_js_1 = require_atproto_oauth_scope();
    var oauth_client_id_loopback_js_1 = require_oauth_client_id_loopback();
    var oauth_redirect_uri_js_1 = require_oauth_redirect_uri();
    var util_js_1 = require_util8();
    function buildAtprotoLoopbackClientId(config) {
      if (config) {
        const params = new URLSearchParams();
        const { scope } = config;
        if (scope != null && scope !== atproto_oauth_scope_js_1.DEFAULT_ATPROTO_OAUTH_SCOPE) {
          params.set("scope", (0, atproto_oauth_scope_js_1.asAtprotoOAuthScope)(scope));
        }
        const redirectUris = (0, util_js_1.asArray)(config.redirect_uris);
        if (redirectUris && !(0, util_js_1.arrayEquivalent)(redirectUris, atproto_loopback_client_redirect_uris_js_1.DEFAULT_LOOPBACK_CLIENT_REDIRECT_URIS)) {
          if (!redirectUris.length) {
            throw new TypeError(`Unexpected empty "redirect_uris" config`);
          }
          for (const uri of redirectUris) {
            params.append("redirect_uri", oauth_redirect_uri_js_1.oauthLoopbackClientRedirectUriSchema.parse(uri));
          }
        }
        if (params.size) {
          return `${oauth_client_id_loopback_js_1.LOOPBACK_CLIENT_ID_ORIGIN}?${params.toString()}`;
        }
      }
      return oauth_client_id_loopback_js_1.LOOPBACK_CLIENT_ID_ORIGIN;
    }
    function parseAtprotoLoopbackClientId(clientId) {
      const { scope = atproto_oauth_scope_js_1.DEFAULT_ATPROTO_OAUTH_SCOPE, redirect_uris } = (0, oauth_client_id_loopback_js_1.parseOAuthLoopbackClientId)(clientId);
      if (!(0, atproto_oauth_scope_js_1.isAtprotoOAuthScope)(scope)) {
        throw new TypeError('ATProto Loopback ClientID must include "atproto" scope');
      }
      return {
        scope,
        redirect_uris: redirect_uris ?? [...atproto_loopback_client_redirect_uris_js_1.DEFAULT_LOOPBACK_CLIENT_REDIRECT_URIS]
      };
    }
  }
});

// node_modules/@atproto/oauth-types/dist/atproto-loopback-client-metadata.js
var require_atproto_loopback_client_metadata = __commonJS({
  "node_modules/@atproto/oauth-types/dist/atproto-loopback-client-metadata.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.atprotoLoopbackClientMetadata = atprotoLoopbackClientMetadata;
    exports.buildAtprotoLoopbackClientMetadata = buildAtprotoLoopbackClientMetadata;
    var atproto_loopback_client_id_js_1 = require_atproto_loopback_client_id();
    function atprotoLoopbackClientMetadata(clientId) {
      const params = (0, atproto_loopback_client_id_js_1.parseAtprotoLoopbackClientId)(clientId);
      return buildMetadataInternal(clientId, params);
    }
    function buildAtprotoLoopbackClientMetadata(config) {
      const clientId = (0, atproto_loopback_client_id_js_1.buildAtprotoLoopbackClientId)(config);
      return buildMetadataInternal(clientId, (0, atproto_loopback_client_id_js_1.parseAtprotoLoopbackClientId)(clientId));
    }
    function buildMetadataInternal(clientId, clientParams) {
      return {
        client_id: clientId,
        scope: clientParams.scope,
        redirect_uris: clientParams.redirect_uris,
        response_types: ["code"],
        grant_types: ["authorization_code", "refresh_token"],
        token_endpoint_auth_method: "none",
        application_type: "native",
        dpop_bound_access_tokens: true
      };
    }
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-authorization-details.js
var require_oauth_authorization_details = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-authorization-details.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthAuthorizationDetailsSchema = exports.oauthAuthorizationDetailSchema = void 0;
    var zod_1 = require_zod();
    var uri_js_1 = require_uri2();
    exports.oauthAuthorizationDetailSchema = zod_1.z.object({
      type: zod_1.z.string(),
      /**
       * An array of strings representing the location of the resource or RS. These
       * strings are typically URIs identifying the location of the RS.
       */
      locations: zod_1.z.array(uri_js_1.dangerousUriSchema).optional(),
      /**
       * An array of strings representing the kinds of actions to be taken at the
       * resource.
       */
      actions: zod_1.z.array(zod_1.z.string()).optional(),
      /**
       * An array of strings representing the kinds of data being requested from the
       * resource.
       */
      datatypes: zod_1.z.array(zod_1.z.string()).optional(),
      /**
       * A string identifier indicating a specific resource available at the API.
       */
      identifier: zod_1.z.string().optional(),
      /**
       * An array of strings representing the types or levels of privilege being
       * requested at the resource.
       */
      privileges: zod_1.z.array(zod_1.z.string()).optional()
    });
    exports.oauthAuthorizationDetailsSchema = zod_1.z.array(exports.oauthAuthorizationDetailSchema);
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-token-type.js
var require_oauth_token_type = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-token-type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthTokenTypeSchema = void 0;
    var zod_1 = require_zod();
    exports.oauthTokenTypeSchema = zod_1.z.union([
      zod_1.z.string().regex(/^DPoP$/i).transform(() => "DPoP"),
      zod_1.z.string().regex(/^Bearer$/i).transform(() => "Bearer")
    ]);
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-token-response.js
var require_oauth_token_response = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-token-response.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthTokenResponseSchema = void 0;
    var zod_1 = require_zod();
    var jwk_1 = require_dist();
    var oauth_authorization_details_js_1 = require_oauth_authorization_details();
    var oauth_token_type_js_1 = require_oauth_token_type();
    exports.oauthTokenResponseSchema = zod_1.z.object({
      // https://www.rfc-editor.org/rfc/rfc6749.html#section-5.1
      access_token: zod_1.z.string(),
      token_type: oauth_token_type_js_1.oauthTokenTypeSchema,
      scope: zod_1.z.string().optional(),
      refresh_token: zod_1.z.string().optional(),
      expires_in: zod_1.z.number().optional(),
      // https://openid.net/specs/openid-connect-core-1_0.html#TokenResponse
      id_token: jwk_1.signedJwtSchema.optional(),
      // https://datatracker.ietf.org/doc/html/rfc9396#name-enriched-authorization-deta
      authorization_details: oauth_authorization_details_js_1.oauthAuthorizationDetailsSchema.optional()
    }).passthrough();
  }
});

// node_modules/@atproto/oauth-types/dist/atproto-oauth-token-response.js
var require_atproto_oauth_token_response = __commonJS({
  "node_modules/@atproto/oauth-types/dist/atproto-oauth-token-response.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.atprotoOAuthTokenResponseSchema = void 0;
    var zod_1 = require_zod();
    var did_1 = require_dist4();
    var atproto_oauth_scope_1 = require_atproto_oauth_scope();
    var oauth_token_response_js_1 = require_oauth_token_response();
    exports.atprotoOAuthTokenResponseSchema = oauth_token_response_js_1.oauthTokenResponseSchema.extend({
      token_type: zod_1.z.literal("DPoP"),
      sub: did_1.atprotoDidSchema,
      scope: atproto_oauth_scope_1.atprotoOAuthScopeSchema,
      // OpenID is not compatible with atproto identities
      id_token: zod_1.z.never().optional()
    });
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-access-token.js
var require_oauth_access_token = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-access-token.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthAccessTokenSchema = void 0;
    var zod_1 = require_zod();
    exports.oauthAccessTokenSchema = zod_1.z.string().min(1);
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-authorization-code-grant-token-request.js
var require_oauth_authorization_code_grant_token_request = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-authorization-code-grant-token-request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthAuthorizationCodeGrantTokenRequestSchema = void 0;
    var zod_1 = require_zod();
    var oauth_redirect_uri_js_1 = require_oauth_redirect_uri();
    exports.oauthAuthorizationCodeGrantTokenRequestSchema = zod_1.z.object({
      grant_type: zod_1.z.literal("authorization_code"),
      code: zod_1.z.string().min(1),
      redirect_uri: oauth_redirect_uri_js_1.oauthRedirectUriSchema,
      /** @see {@link https://datatracker.ietf.org/doc/html/rfc7636#section-4.1} */
      code_verifier: zod_1.z.string().min(43).max(128).regex(/^[a-zA-Z0-9-._~]+$/).optional()
    });
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-authorization-request-jar.js
var require_oauth_authorization_request_jar = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-authorization-request-jar.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthAuthorizationRequestJarSchema = void 0;
    var zod_1 = require_zod();
    var jwk_1 = require_dist();
    exports.oauthAuthorizationRequestJarSchema = zod_1.z.object({
      /**
       * AuthorizationRequest inside a JWT:
       * - "iat" is required and **MUST** be less than one minute
       *
       * @see {@link https://datatracker.ietf.org/doc/html/rfc9101}
       */
      request: zod_1.z.union([jwk_1.signedJwtSchema, jwk_1.unsignedJwtSchema])
    });
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-code-challenge-method.js
var require_oauth_code_challenge_method = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-code-challenge-method.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthCodeChallengeMethodSchema = void 0;
    var zod_1 = require_zod();
    exports.oauthCodeChallengeMethodSchema = zod_1.z.enum(["S256", "plain"]);
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-prompt-mode.js
var require_oauth_prompt_mode = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-prompt-mode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthPromptModeSchema = void 0;
    var zod_1 = require_zod();
    exports.oauthPromptModeSchema = zod_1.z.enum([
      "none",
      "login",
      "consent",
      "select_account",
      "create"
    ]);
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-response-mode.js
var require_oauth_response_mode = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-response-mode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthResponseModeSchema = void 0;
    var zod_1 = require_zod();
    exports.oauthResponseModeSchema = zod_1.z.enum([
      "query",
      "fragment",
      "form_post"
    ]);
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-response-type.js
var require_oauth_response_type = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-response-type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthResponseTypeSchema = void 0;
    var zod_1 = require_zod();
    exports.oauthResponseTypeSchema = zod_1.z.enum([
      // OAuth2 (https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-10#section-4.1.1)
      "code",
      // Authorization Code Grant
      "token",
      // Implicit Grant
      // OIDC (https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html)
      "none",
      "code id_token token",
      "code id_token",
      "code token",
      "id_token token",
      "id_token"
    ]);
  }
});

// node_modules/@atproto/oauth-types/dist/oidc-claims-parameter.js
var require_oidc_claims_parameter = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oidc-claims-parameter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oidcClaimsParameterSchema = void 0;
    var zod_1 = require_zod();
    exports.oidcClaimsParameterSchema = zod_1.z.enum([
      // https://openid.net/specs/openid-provider-authentication-policy-extension-1_0.html#rfc.section.5.2
      // if client metadata "require_auth_time" is true, this *must* be provided
      "auth_time",
      // OIDC
      "nonce",
      "acr",
      // OpenID: "profile" scope
      "name",
      "family_name",
      "given_name",
      "middle_name",
      "nickname",
      "preferred_username",
      "gender",
      "picture",
      "profile",
      "website",
      "birthdate",
      "zoneinfo",
      "locale",
      "updated_at",
      // OpenID: "email" scope
      "email",
      "email_verified",
      // OpenID: "phone" scope
      "phone_number",
      "phone_number_verified",
      // OpenID: "address" scope
      "address"
    ]);
  }
});

// node_modules/@atproto/oauth-types/dist/oidc-claims-properties.js
var require_oidc_claims_properties = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oidc-claims-properties.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oidcClaimsPropertiesSchema = void 0;
    var zod_1 = require_zod();
    var oidcClaimsValueSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean()]);
    exports.oidcClaimsPropertiesSchema = zod_1.z.object({
      essential: zod_1.z.boolean().optional(),
      value: oidcClaimsValueSchema.optional(),
      values: zod_1.z.array(oidcClaimsValueSchema).optional()
    });
  }
});

// node_modules/@atproto/oauth-types/dist/oidc-entity-type.js
var require_oidc_entity_type = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oidc-entity-type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oidcEntityTypeSchema = void 0;
    var zod_1 = require_zod();
    exports.oidcEntityTypeSchema = zod_1.z.enum(["userinfo", "id_token"]);
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-authorization-request-parameters.js
var require_oauth_authorization_request_parameters = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-authorization-request-parameters.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthAuthorizationRequestParametersSchema = void 0;
    var zod_1 = require_zod();
    var jwk_1 = require_dist();
    var oauth_authorization_details_js_1 = require_oauth_authorization_details();
    var oauth_client_id_js_1 = require_oauth_client_id();
    var oauth_code_challenge_method_js_1 = require_oauth_code_challenge_method();
    var oauth_prompt_mode_js_1 = require_oauth_prompt_mode();
    var oauth_redirect_uri_js_1 = require_oauth_redirect_uri();
    var oauth_response_mode_js_1 = require_oauth_response_mode();
    var oauth_response_type_js_1 = require_oauth_response_type();
    var oauth_scope_js_1 = require_oauth_scope();
    var oidc_claims_parameter_js_1 = require_oidc_claims_parameter();
    var oidc_claims_properties_js_1 = require_oidc_claims_properties();
    var oidc_entity_type_js_1 = require_oidc_entity_type();
    var util_js_1 = require_util8();
    exports.oauthAuthorizationRequestParametersSchema = zod_1.z.object({
      client_id: oauth_client_id_js_1.oauthClientIdSchema,
      state: zod_1.z.string().optional(),
      redirect_uri: oauth_redirect_uri_js_1.oauthRedirectUriSchema.optional(),
      scope: oauth_scope_js_1.oauthScopeSchema.optional(),
      response_type: oauth_response_type_js_1.oauthResponseTypeSchema,
      // PKCE
      // https://datatracker.ietf.org/doc/html/rfc7636#section-4.3
      code_challenge: zod_1.z.string().optional(),
      code_challenge_method: oauth_code_challenge_method_js_1.oauthCodeChallengeMethodSchema.optional(),
      // DPOP
      // https://datatracker.ietf.org/doc/html/rfc9449#section-12.3
      dpop_jkt: zod_1.z.string().optional(),
      // OIDC
      // Default depend on response_type
      response_mode: oauth_response_mode_js_1.oauthResponseModeSchema.optional(),
      nonce: zod_1.z.string().optional(),
      // Specifies the allowable elapsed time in seconds since the last time the
      // End-User was actively authenticated by the OP. If the elapsed time is
      // greater than this value, the OP MUST attempt to actively re-authenticate
      // the End-User. (The max_age request parameter corresponds to the OpenID 2.0
      // PAPE [OpenID.PAPE] max_auth_age request parameter.) When max_age is used,
      // the ID Token returned MUST include an auth_time Claim Value. Note that
      // max_age=0 is equivalent to prompt=login.
      max_age: zod_1.z.preprocess(util_js_1.numberPreprocess, zod_1.z.number().int().min(0)).optional(),
      claims: zod_1.z.preprocess(util_js_1.jsonObjectPreprocess, zod_1.z.record(oidc_entity_type_js_1.oidcEntityTypeSchema, zod_1.z.record(oidc_claims_parameter_js_1.oidcClaimsParameterSchema, zod_1.z.union([zod_1.z.literal(null), oidc_claims_properties_js_1.oidcClaimsPropertiesSchema])))).optional(),
      // https://openid.net/specs/openid-connect-core-1_0.html#RegistrationParameter
      // Not supported by this library (yet?)
      // registration: clientMetadataSchema.optional(),
      login_hint: zod_1.z.string().min(1).optional(),
      ui_locales: zod_1.z.string().regex(/^[a-z]{2,3}(-[A-Z]{2})?( [a-z]{2,3}(-[A-Z]{2})?)*$/).optional(),
      // Previous ID Token, should be provided when prompt=none is used
      id_token_hint: jwk_1.signedJwtSchema.optional(),
      // Type of UI the AS is displayed on
      display: zod_1.z.enum(["page", "popup", "touch", "wap"]).optional(),
      // How the AS should prompt the user for authorization:
      prompt: oauth_prompt_mode_js_1.oauthPromptModeSchema.optional(),
      // https://datatracker.ietf.org/doc/html/rfc9396
      authorization_details: zod_1.z.preprocess(util_js_1.jsonObjectPreprocess, oauth_authorization_details_js_1.oauthAuthorizationDetailsSchema).optional()
    });
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-authorization-request-par.js
var require_oauth_authorization_request_par = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-authorization-request-par.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthAuthorizationRequestParSchema = void 0;
    var zod_1 = require_zod();
    var oauth_authorization_request_jar_js_1 = require_oauth_authorization_request_jar();
    var oauth_authorization_request_parameters_js_1 = require_oauth_authorization_request_parameters();
    exports.oauthAuthorizationRequestParSchema = zod_1.z.union([
      oauth_authorization_request_parameters_js_1.oauthAuthorizationRequestParametersSchema,
      oauth_authorization_request_jar_js_1.oauthAuthorizationRequestJarSchema
    ]);
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-request-uri.js
var require_oauth_request_uri = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-request-uri.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthRequestUriSchema = void 0;
    var zod_1 = require_zod();
    exports.oauthRequestUriSchema = zod_1.z.string().min(1);
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-authorization-request-uri.js
var require_oauth_authorization_request_uri = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-authorization-request-uri.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthAuthorizationRequestUriSchema = void 0;
    var zod_1 = require_zod();
    var oauth_request_uri_js_1 = require_oauth_request_uri();
    exports.oauthAuthorizationRequestUriSchema = zod_1.z.object({
      request_uri: oauth_request_uri_js_1.oauthRequestUriSchema
    });
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-authorization-request-query.js
var require_oauth_authorization_request_query = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-authorization-request-query.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthAuthorizationRequestQuerySchema = void 0;
    var zod_1 = require_zod();
    var oauth_authorization_request_jar_js_1 = require_oauth_authorization_request_jar();
    var oauth_authorization_request_parameters_js_1 = require_oauth_authorization_request_parameters();
    var oauth_authorization_request_uri_js_1 = require_oauth_authorization_request_uri();
    var oauth_client_id_js_1 = require_oauth_client_id();
    exports.oauthAuthorizationRequestQuerySchema = zod_1.z.intersection(zod_1.z.object({
      // REQUIRED. OAuth 2.0 [RFC6749] client_id.
      client_id: oauth_client_id_js_1.oauthClientIdSchema
    }), zod_1.z.union([
      oauth_authorization_request_parameters_js_1.oauthAuthorizationRequestParametersSchema,
      oauth_authorization_request_jar_js_1.oauthAuthorizationRequestJarSchema,
      oauth_authorization_request_uri_js_1.oauthAuthorizationRequestUriSchema
    ]));
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-authorization-response-error.js
var require_oauth_authorization_response_error = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-authorization-response-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthAuthorizationResponseErrorSchema = void 0;
    var zod_1 = require_zod();
    exports.oauthAuthorizationResponseErrorSchema = zod_1.z.enum([
      // The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed.
      "invalid_request",
      // The client is not authorized to request an authorization code using this method.
      "unauthorized_client",
      // The resource owner or authorization server denied the request.
      "access_denied",
      // The authorization server does not support obtaining an authorization code using this method.
      "unsupported_response_type",
      // The requested scope is invalid, unknown, or malformed.
      "invalid_scope",
      // The authorization server encountered an unexpected condition that prevented it from fulfilling the request. (This error code is needed because a 500 Internal Server Error HTTP status code cannot be returned to the client via an HTTP redirect.)
      "server_error",
      // The authorization server is currently unable to handle the request due to a temporary overloading or maintenance of the server. (This error code is needed because a 503 Service Unavailable HTTP status code cannot be returned to the client via an HTTP redirect.)
      "temporarily_unavailable"
    ]);
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-issuer-identifier.js
var require_oauth_issuer_identifier = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-issuer-identifier.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthIssuerIdentifierSchema = void 0;
    var zod_1 = require_zod();
    var uri_js_1 = require_uri2();
    exports.oauthIssuerIdentifierSchema = uri_js_1.webUriSchema.superRefine((value, ctx) => {
      if (value.endsWith("/")) {
        ctx.addIssue({
          code: zod_1.z.ZodIssueCode.custom,
          message: "Issuer URL must not end with a slash"
        });
        return false;
      }
      const url = new URL(value);
      if (url.username || url.password) {
        ctx.addIssue({
          code: zod_1.z.ZodIssueCode.custom,
          message: "Issuer URL must not contain a username or password"
        });
        return false;
      }
      if (url.hash || url.search) {
        ctx.addIssue({
          code: zod_1.z.ZodIssueCode.custom,
          message: "Issuer URL must not contain a query or fragment"
        });
        return false;
      }
      const canonicalValue = url.pathname === "/" ? url.origin : url.href;
      if (value !== canonicalValue) {
        ctx.addIssue({
          code: zod_1.z.ZodIssueCode.custom,
          message: "Issuer URL must be in the canonical form"
        });
        return false;
      }
      return true;
    });
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-authorization-server-metadata.js
var require_oauth_authorization_server_metadata = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-authorization-server-metadata.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthAuthorizationServerMetadataValidator = exports.oauthAuthorizationServerMetadataSchema = void 0;
    var zod_1 = require_zod();
    var oauth_code_challenge_method_js_1 = require_oauth_code_challenge_method();
    var oauth_issuer_identifier_js_1 = require_oauth_issuer_identifier();
    var oauth_prompt_mode_js_1 = require_oauth_prompt_mode();
    var uri_js_1 = require_uri2();
    exports.oauthAuthorizationServerMetadataSchema = zod_1.z.object({
      issuer: oauth_issuer_identifier_js_1.oauthIssuerIdentifierSchema,
      claims_supported: zod_1.z.array(zod_1.z.string()).optional(),
      claims_locales_supported: zod_1.z.array(zod_1.z.string()).optional(),
      claims_parameter_supported: zod_1.z.boolean().optional(),
      request_parameter_supported: zod_1.z.boolean().optional(),
      request_uri_parameter_supported: zod_1.z.boolean().optional(),
      require_request_uri_registration: zod_1.z.boolean().optional(),
      scopes_supported: zod_1.z.array(zod_1.z.string()).optional(),
      subject_types_supported: zod_1.z.array(zod_1.z.string()).optional(),
      response_types_supported: zod_1.z.array(zod_1.z.string()).optional(),
      response_modes_supported: zod_1.z.array(zod_1.z.string()).optional(),
      grant_types_supported: zod_1.z.array(zod_1.z.string()).optional(),
      code_challenge_methods_supported: zod_1.z.array(oauth_code_challenge_method_js_1.oauthCodeChallengeMethodSchema).min(1).optional(),
      ui_locales_supported: zod_1.z.array(zod_1.z.string()).optional(),
      id_token_signing_alg_values_supported: zod_1.z.array(zod_1.z.string()).optional(),
      display_values_supported: zod_1.z.array(zod_1.z.string()).optional(),
      request_object_signing_alg_values_supported: zod_1.z.array(zod_1.z.string()).optional(),
      authorization_response_iss_parameter_supported: zod_1.z.boolean().optional(),
      authorization_details_types_supported: zod_1.z.array(zod_1.z.string()).optional(),
      request_object_encryption_alg_values_supported: zod_1.z.array(zod_1.z.string()).optional(),
      request_object_encryption_enc_values_supported: zod_1.z.array(zod_1.z.string()).optional(),
      jwks_uri: uri_js_1.webUriSchema.optional(),
      authorization_endpoint: uri_js_1.webUriSchema,
      // .optional(),
      token_endpoint: uri_js_1.webUriSchema,
      // .optional(),
      // https://www.rfc-editor.org/rfc/rfc8414.html#section-2
      token_endpoint_auth_methods_supported: zod_1.z.array(zod_1.z.string()).default(["client_secret_basic"]),
      token_endpoint_auth_signing_alg_values_supported: zod_1.z.array(zod_1.z.string()).optional(),
      revocation_endpoint: uri_js_1.webUriSchema.optional(),
      introspection_endpoint: uri_js_1.webUriSchema.optional(),
      pushed_authorization_request_endpoint: uri_js_1.webUriSchema.optional(),
      require_pushed_authorization_requests: zod_1.z.boolean().optional(),
      userinfo_endpoint: uri_js_1.webUriSchema.optional(),
      end_session_endpoint: uri_js_1.webUriSchema.optional(),
      registration_endpoint: uri_js_1.webUriSchema.optional(),
      // https://datatracker.ietf.org/doc/html/rfc9449#section-5.1
      dpop_signing_alg_values_supported: zod_1.z.array(zod_1.z.string()).optional(),
      // https://www.rfc-editor.org/rfc/rfc9728.html#section-4
      protected_resources: zod_1.z.array(uri_js_1.webUriSchema).optional(),
      // https://www.ietf.org/archive/id/draft-ietf-oauth-client-id-metadata-document-00.html
      client_id_metadata_document_supported: zod_1.z.boolean().optional(),
      // https://openid.net/specs/openid-connect-prompt-create-1_0.html#section-4.2
      prompt_values_supported: zod_1.z.array(oauth_prompt_mode_js_1.oauthPromptModeSchema).optional()
    });
    exports.oauthAuthorizationServerMetadataValidator = exports.oauthAuthorizationServerMetadataSchema.superRefine((data, ctx) => {
      if (data.require_pushed_authorization_requests && !data.pushed_authorization_request_endpoint) {
        ctx.addIssue({
          code: zod_1.z.ZodIssueCode.custom,
          message: '"pushed_authorization_request_endpoint" required when "require_pushed_authorization_requests" is true'
        });
      }
    }).superRefine((data, ctx) => {
      if (data.response_types_supported) {
        if (!data.response_types_supported.includes("code")) {
          ctx.addIssue({
            code: zod_1.z.ZodIssueCode.custom,
            message: 'Response type "code" is required'
          });
        }
      }
    }).superRefine((data, ctx) => {
      if (data.token_endpoint_auth_signing_alg_values_supported?.includes("none")) {
        ctx.addIssue({
          code: zod_1.z.ZodIssueCode.custom,
          message: 'Client authentication method "none" is not allowed'
        });
      }
    });
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-client-credentials-grant-token-request.js
var require_oauth_client_credentials_grant_token_request = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-client-credentials-grant-token-request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthClientCredentialsGrantTokenRequestSchema = void 0;
    var zod_1 = require_zod();
    exports.oauthClientCredentialsGrantTokenRequestSchema = zod_1.z.object({
      grant_type: zod_1.z.literal("client_credentials")
    });
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-client-credentials.js
var require_oauth_client_credentials = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-client-credentials.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthClientCredentialsSchema = exports.oauthClientCredentialsNoneSchema = exports.oauthClientCredentialsSecretPostSchema = exports.oauthClientCredentialsJwtBearerSchema = void 0;
    var zod_1 = require_zod();
    var jwk_1 = require_dist();
    var constants_js_1 = require_constants();
    var oauth_client_id_js_1 = require_oauth_client_id();
    exports.oauthClientCredentialsJwtBearerSchema = zod_1.z.object({
      client_id: oauth_client_id_js_1.oauthClientIdSchema,
      client_assertion_type: zod_1.z.literal(constants_js_1.CLIENT_ASSERTION_TYPE_JWT_BEARER),
      /**
       * - "sub" the subject MUST be the "client_id" of the OAuth client
       * - "iat" is required and MUST be less than one minute
       * - "aud" must containing a value that identifies the authorization server
       * - The JWT MAY contain a "jti" (JWT ID) claim that provides a unique identifier for the token.
       * - Note that the authorization server may reject JWTs with an "exp" claim value that is unreasonably far in the future.
       *
       * @see {@link https://datatracker.ietf.org/doc/html/rfc7523#section-3}
       */
      client_assertion: jwk_1.signedJwtSchema
    });
    exports.oauthClientCredentialsSecretPostSchema = zod_1.z.object({
      client_id: oauth_client_id_js_1.oauthClientIdSchema,
      client_secret: zod_1.z.string()
    });
    exports.oauthClientCredentialsNoneSchema = zod_1.z.object({
      client_id: oauth_client_id_js_1.oauthClientIdSchema
    });
    exports.oauthClientCredentialsSchema = zod_1.z.union([
      exports.oauthClientCredentialsJwtBearerSchema,
      exports.oauthClientCredentialsSecretPostSchema,
      // Must be last since it is less specific
      exports.oauthClientCredentialsNoneSchema
    ]);
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-client-id-discoverable.js
var require_oauth_client_id_discoverable = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-client-id-discoverable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.conventionalOAuthClientIdSchema = exports.oauthClientIdDiscoverableSchema = void 0;
    exports.isOAuthClientIdDiscoverable = isOAuthClientIdDiscoverable;
    exports.isConventionalOAuthClientId = isConventionalOAuthClientId;
    exports.assertOAuthDiscoverableClientId = assertOAuthDiscoverableClientId;
    exports.parseOAuthDiscoverableClientId = parseOAuthDiscoverableClientId;
    var zod_1 = require_zod();
    var oauth_client_id_js_1 = require_oauth_client_id();
    var uri_js_1 = require_uri2();
    var util_js_1 = require_util8();
    exports.oauthClientIdDiscoverableSchema = zod_1.z.intersection(oauth_client_id_js_1.oauthClientIdSchema, uri_js_1.httpsUriSchema).superRefine((value, ctx) => {
      const url = new URL(value);
      if (url.username || url.password) {
        ctx.addIssue({
          code: zod_1.z.ZodIssueCode.custom,
          message: "ClientID must not contain credentials"
        });
        return false;
      }
      if (url.hash) {
        ctx.addIssue({
          code: zod_1.z.ZodIssueCode.custom,
          message: "ClientID must not contain a fragment"
        });
        return false;
      }
      if (url.pathname === "/") {
        ctx.addIssue({
          code: zod_1.z.ZodIssueCode.custom,
          message: 'ClientID must contain a path component (e.g. "/client-metadata.json")'
        });
        return false;
      }
      if (url.pathname.endsWith("/")) {
        ctx.addIssue({
          code: zod_1.z.ZodIssueCode.custom,
          message: "ClientID path must not end with a trailing slash"
        });
        return false;
      }
      if ((0, util_js_1.isHostnameIP)(url.hostname)) {
        ctx.addIssue({
          code: zod_1.z.ZodIssueCode.custom,
          message: "ClientID hostname must not be an IP address"
        });
        return false;
      }
      if ((0, util_js_1.extractUrlPath)(value) !== url.pathname) {
        ctx.addIssue({
          code: zod_1.z.ZodIssueCode.custom,
          message: `ClientID must be in canonical form ("${url.href}", got "${value}")`
        });
        return false;
      }
      return true;
    });
    function isOAuthClientIdDiscoverable(clientId) {
      return exports.oauthClientIdDiscoverableSchema.safeParse(clientId).success;
    }
    exports.conventionalOAuthClientIdSchema = exports.oauthClientIdDiscoverableSchema.superRefine((value, ctx) => {
      const url = new URL(value);
      if (url.port) {
        ctx.addIssue({
          code: zod_1.z.ZodIssueCode.custom,
          message: "ClientID must not contain a port"
        });
        return false;
      }
      if (url.search) {
        ctx.addIssue({
          code: zod_1.z.ZodIssueCode.custom,
          message: "ClientID must not contain a query string"
        });
        return false;
      }
      if (url.pathname !== "/oauth-client-metadata.json") {
        ctx.addIssue({
          code: zod_1.z.ZodIssueCode.custom,
          message: 'ClientID must be "/oauth-client-metadata.json"'
        });
        return false;
      }
      return true;
    });
    function isConventionalOAuthClientId(clientId) {
      return exports.conventionalOAuthClientIdSchema.safeParse(clientId).success;
    }
    function assertOAuthDiscoverableClientId(value) {
      void exports.oauthClientIdDiscoverableSchema.parse(value);
    }
    function parseOAuthDiscoverableClientId(clientId) {
      return new URL(exports.oauthClientIdDiscoverableSchema.parse(clientId));
    }
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-endpoint-auth-method.js
var require_oauth_endpoint_auth_method = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-endpoint-auth-method.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthEndpointAuthMethod = void 0;
    var zod_1 = require_zod();
    exports.oauthEndpointAuthMethod = zod_1.z.enum([
      "client_secret_basic",
      "client_secret_jwt",
      "client_secret_post",
      "none",
      "private_key_jwt",
      "self_signed_tls_client_auth",
      "tls_client_auth"
    ]);
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-grant-type.js
var require_oauth_grant_type = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-grant-type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthGrantTypeSchema = void 0;
    var zod_1 = require_zod();
    exports.oauthGrantTypeSchema = zod_1.z.enum([
      "authorization_code",
      "implicit",
      "refresh_token",
      "password",
      // Not part of OAuth 2.1
      "client_credentials",
      "urn:ietf:params:oauth:grant-type:jwt-bearer",
      "urn:ietf:params:oauth:grant-type:saml2-bearer"
    ]);
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-client-metadata.js
var require_oauth_client_metadata = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-client-metadata.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthClientMetadataSchema = void 0;
    var zod_1 = require_zod();
    var jwk_1 = require_dist();
    var oauth_client_id_js_1 = require_oauth_client_id();
    var oauth_endpoint_auth_method_js_1 = require_oauth_endpoint_auth_method();
    var oauth_grant_type_js_1 = require_oauth_grant_type();
    var oauth_redirect_uri_js_1 = require_oauth_redirect_uri();
    var oauth_response_type_js_1 = require_oauth_response_type();
    var oauth_scope_js_1 = require_oauth_scope();
    var uri_js_1 = require_uri2();
    exports.oauthClientMetadataSchema = zod_1.z.object({
      /**
       * @note redirect_uris require additional validation
       */
      // https://www.rfc-editor.org/rfc/rfc7591.html#section-2
      redirect_uris: zod_1.z.array(oauth_redirect_uri_js_1.oauthRedirectUriSchema).nonempty(),
      response_types: zod_1.z.array(oauth_response_type_js_1.oauthResponseTypeSchema).nonempty().default(["code"]),
      grant_types: zod_1.z.array(oauth_grant_type_js_1.oauthGrantTypeSchema).nonempty().default(["authorization_code"]),
      scope: oauth_scope_js_1.oauthScopeSchema.optional(),
      // https://www.rfc-editor.org/rfc/rfc7591.html#section-2
      token_endpoint_auth_method: oauth_endpoint_auth_method_js_1.oauthEndpointAuthMethod.default("client_secret_basic"),
      token_endpoint_auth_signing_alg: zod_1.z.string().optional(),
      userinfo_signed_response_alg: zod_1.z.string().optional(),
      userinfo_encrypted_response_alg: zod_1.z.string().optional(),
      jwks_uri: uri_js_1.webUriSchema.optional(),
      jwks: jwk_1.jwksPubSchema.optional(),
      application_type: zod_1.z.enum(["web", "native"]).default("web"),
      // default, per spec, is "web"
      subject_type: zod_1.z.enum(["public", "pairwise"]).default("public"),
      request_object_signing_alg: zod_1.z.string().optional(),
      id_token_signed_response_alg: zod_1.z.string().optional(),
      authorization_signed_response_alg: zod_1.z.string().default("RS256"),
      authorization_encrypted_response_enc: zod_1.z.enum(["A128CBC-HS256"]).optional(),
      authorization_encrypted_response_alg: zod_1.z.string().optional(),
      client_id: oauth_client_id_js_1.oauthClientIdSchema.optional(),
      client_name: zod_1.z.string().optional(),
      client_uri: uri_js_1.webUriSchema.optional(),
      policy_uri: uri_js_1.webUriSchema.optional(),
      tos_uri: uri_js_1.webUriSchema.optional(),
      logo_uri: uri_js_1.webUriSchema.optional(),
      // @TODO: allow data: uri ?
      /**
       * Default Maximum Authentication Age. Specifies that the End-User MUST be
       * actively authenticated if the End-User was authenticated longer ago than
       * the specified number of seconds. The max_age request parameter overrides
       * this default value. If omitted, no default Maximum Authentication Age is
       * specified.
       */
      default_max_age: zod_1.z.number().optional(),
      require_auth_time: zod_1.z.boolean().optional(),
      contacts: zod_1.z.array(zod_1.z.string().email()).optional(),
      tls_client_certificate_bound_access_tokens: zod_1.z.boolean().optional(),
      // https://datatracker.ietf.org/doc/html/rfc9449#section-5.2
      dpop_bound_access_tokens: zod_1.z.boolean().optional(),
      // https://datatracker.ietf.org/doc/html/rfc9396#section-14.5
      authorization_details_types: zod_1.z.array(zod_1.z.string()).optional()
    });
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-endpoint-name.js
var require_oauth_endpoint_name = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-endpoint-name.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAUTH_ENDPOINT_NAMES = void 0;
    exports.OAUTH_ENDPOINT_NAMES = [
      "token",
      "revocation",
      "introspection",
      "pushed_authorization_request"
    ];
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-introspection-response.js
var require_oauth_introspection_response = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-introspection-response.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-par-response.js
var require_oauth_par_response = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-par-response.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthParResponseSchema = void 0;
    var zod_1 = require_zod();
    exports.oauthParResponseSchema = zod_1.z.object({
      request_uri: zod_1.z.string(),
      expires_in: zod_1.z.number().int().positive()
    });
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-password-grant-token-request.js
var require_oauth_password_grant_token_request = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-password-grant-token-request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthPasswordGrantTokenRequestSchema = void 0;
    var zod_1 = require_zod();
    exports.oauthPasswordGrantTokenRequestSchema = zod_1.z.object({
      grant_type: zod_1.z.literal("password"),
      username: zod_1.z.string(),
      password: zod_1.z.string()
    });
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-protected-resource-metadata.js
var require_oauth_protected_resource_metadata = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-protected-resource-metadata.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthProtectedResourceMetadataSchema = void 0;
    var zod_1 = require_zod();
    var oauth_issuer_identifier_js_1 = require_oauth_issuer_identifier();
    var uri_js_1 = require_uri2();
    exports.oauthProtectedResourceMetadataSchema = zod_1.z.object({
      /**
       * REQUIRED. The protected resource's resource identifier, which is a URL that
       * uses the https scheme and has no query or fragment components. Using these
       * well-known resources is described in Section 3.
       *
       * @note This schema allows non https URLs for testing & development purposes.
       * Make sure to validate the URL before using it in a production environment.
       */
      resource: uri_js_1.webUriSchema.refine((url) => !url.includes("?"), {
        message: "Resource URL must not contain query parameters"
      }).refine((url) => !url.includes("#"), {
        message: "Resource URL must not contain a fragment"
      }),
      /**
       * OPTIONAL. JSON array containing a list of OAuth authorization server issuer
       * identifiers, as defined in [RFC8414], for authorization servers that can be
       * used with this protected resource. Protected resources MAY choose not to
       * advertise some supported authorization servers even when this parameter is
       * used. In some use cases, the set of authorization servers will not be
       * enumerable, in which case this metadata parameter would not be used.
       */
      authorization_servers: zod_1.z.array(oauth_issuer_identifier_js_1.oauthIssuerIdentifierSchema).optional(),
      /**
       * OPTIONAL. URL of the protected resource's JWK Set [JWK] document. This
       * contains public keys belonging to the protected resource, such as signing
       * key(s) that the resource server uses to sign resource responses. This URL
       * MUST use the https scheme. When both signing and encryption keys are made
       * available, a use (public key use) parameter value is REQUIRED for all keys
       * in the referenced JWK Set to indicate each key's intended usage.
       */
      jwks_uri: uri_js_1.webUriSchema.optional(),
      /**
       * RECOMMENDED. JSON array containing a list of the OAuth 2.0 [RFC6749] scope
       * values that are used in authorization requests to request access to this
       * protected resource. Protected resources MAY choose not to advertise some
       * scope values supported even when this parameter is used.
       */
      scopes_supported: zod_1.z.array(zod_1.z.string()).optional(),
      /**
       * OPTIONAL. JSON array containing a list of the supported methods of sending
       * an OAuth 2.0 Bearer Token [RFC6750] to the protected resource. Defined
       * values are ["header", "body", "query"], corresponding to Sections 2.1, 2.2,
       * and 2.3 of RFC 6750.
       */
      bearer_methods_supported: zod_1.z.array(zod_1.z.enum(["header", "body", "query"])).optional(),
      /**
       * OPTIONAL. JSON array containing a list of the JWS [JWS] signing algorithms
       * (alg values) [JWA] supported by the protected resource for signing resource
       * responses, for instance, as described in [FAPI.MessageSigning]. No default
       * algorithms are implied if this entry is omitted. The value none MUST NOT be
       * used.
       */
      resource_signing_alg_values_supported: zod_1.z.array(zod_1.z.string()).optional(),
      /**
       * OPTIONAL. URL of a page containing human-readable information that
       * developers might want or need to know when using the protected resource
       */
      resource_documentation: uri_js_1.webUriSchema.optional(),
      /**
       * OPTIONAL. URL that the protected resource provides to read about the
       * protected resource's requirements on how the client can use the data
       * provided by the protected resource
       */
      resource_policy_uri: uri_js_1.webUriSchema.optional(),
      /**
       * OPTIONAL. URL that the protected resource provides to read about the
       * protected resource's terms of service
       */
      resource_tos_uri: uri_js_1.webUriSchema.optional()
    });
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-refresh-token.js
var require_oauth_refresh_token = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-refresh-token.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthRefreshTokenSchema = void 0;
    var zod_1 = require_zod();
    exports.oauthRefreshTokenSchema = zod_1.z.string().min(1);
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-refresh-token-grant-token-request.js
var require_oauth_refresh_token_grant_token_request = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-refresh-token-grant-token-request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthRefreshTokenGrantTokenRequestSchema = void 0;
    var zod_1 = require_zod();
    var oauth_refresh_token_js_1 = require_oauth_refresh_token();
    exports.oauthRefreshTokenGrantTokenRequestSchema = zod_1.z.object({
      grant_type: zod_1.z.literal("refresh_token"),
      refresh_token: oauth_refresh_token_js_1.oauthRefreshTokenSchema
    });
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-token-identification.js
var require_oauth_token_identification = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-token-identification.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthTokenIdentificationSchema = void 0;
    var zod_1 = require_zod();
    var oauth_access_token_js_1 = require_oauth_access_token();
    var oauth_refresh_token_js_1 = require_oauth_refresh_token();
    exports.oauthTokenIdentificationSchema = zod_1.z.object({
      token: zod_1.z.union([oauth_access_token_js_1.oauthAccessTokenSchema, oauth_refresh_token_js_1.oauthRefreshTokenSchema]),
      token_type_hint: zod_1.z.enum(["access_token", "refresh_token"]).optional()
    });
  }
});

// node_modules/@atproto/oauth-types/dist/oauth-token-request.js
var require_oauth_token_request = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oauth-token-request.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oauthTokenRequestSchema = void 0;
    var zod_1 = require_zod();
    var oauth_authorization_code_grant_token_request_js_1 = require_oauth_authorization_code_grant_token_request();
    var oauth_client_credentials_grant_token_request_js_1 = require_oauth_client_credentials_grant_token_request();
    var oauth_password_grant_token_request_js_1 = require_oauth_password_grant_token_request();
    var oauth_refresh_token_grant_token_request_js_1 = require_oauth_refresh_token_grant_token_request();
    exports.oauthTokenRequestSchema = zod_1.z.discriminatedUnion("grant_type", [
      oauth_authorization_code_grant_token_request_js_1.oauthAuthorizationCodeGrantTokenRequestSchema,
      oauth_refresh_token_grant_token_request_js_1.oauthRefreshTokenGrantTokenRequestSchema,
      oauth_password_grant_token_request_js_1.oauthPasswordGrantTokenRequestSchema,
      oauth_client_credentials_grant_token_request_js_1.oauthClientCredentialsGrantTokenRequestSchema
    ]);
  }
});

// node_modules/@atproto/oauth-types/dist/oidc-authorization-error-response.js
var require_oidc_authorization_error_response = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oidc-authorization-error-response.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oidcAuthorizationResponseErrorSchema = void 0;
    var zod_1 = require_zod();
    exports.oidcAuthorizationResponseErrorSchema = zod_1.z.enum([
      // The Authorization Server requires End-User interaction of some form to proceed. This error MAY be returned when the prompt parameter value in the Authentication Request is none, but the Authentication Request cannot be completed without displaying a user interface for End-User interaction.
      "interaction_required",
      // The Authorization Server requires End-User authentication. This error MAY be returned when the prompt parameter value in the Authentication Request is none, but the Authentication Request cannot be completed without displaying a user interface for End-User authentication.
      "login_required",
      // The End-User is REQUIRED to select a session at the Authorization Server. The End-User MAY be authenticated at the Authorization Server with different associated accounts, but the End-User did not select a session. This error MAY be returned when the prompt parameter value in the Authentication Request is none, but the Authentication Request cannot be completed without displaying a user interface to prompt for a session to use.
      "account_selection_required",
      // The Authorization Server requires End-User consent. This error MAY be returned when the prompt parameter value in the Authentication Request is none, but the Authentication Request cannot be completed without displaying a user interface for End-User consent.
      "consent_required",
      // The request_uri in the Authorization Request returns an error or contains invalid data.
      "invalid_request_uri",
      // The request parameter contains an invalid Request Object.
      "invalid_request_object",
      // The OP does not support use of the request parameter defined in Section 6.
      "request_not_supported",
      // The OP does not support use of the request_uri parameter defined in Section 6.
      "request_uri_not_supported",
      // The OP does not support use of the registration parameter defined in Section 7.2.1.
      "registration_not_supported"
    ]);
  }
});

// node_modules/@atproto/oauth-types/dist/oidc-userinfo.js
var require_oidc_userinfo = __commonJS({
  "node_modules/@atproto/oauth-types/dist/oidc-userinfo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.oidcUserinfoSchema = void 0;
    var zod_1 = require_zod();
    exports.oidcUserinfoSchema = zod_1.z.object({
      sub: zod_1.z.string(),
      iss: zod_1.z.string().url().optional(),
      aud: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()).min(1)]).optional(),
      email: zod_1.z.string().email().optional(),
      email_verified: zod_1.z.boolean().optional(),
      name: zod_1.z.string().optional(),
      preferred_username: zod_1.z.string().optional(),
      picture: zod_1.z.string().url().optional()
    });
  }
});

// node_modules/@atproto/oauth-types/dist/index.js
var require_dist11 = __commonJS({
  "node_modules/@atproto/oauth-types/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_constants(), exports);
    __exportStar(require_uri2(), exports);
    __exportStar(require_util8(), exports);
    __exportStar(require_atproto_loopback_client_id(), exports);
    __exportStar(require_atproto_loopback_client_metadata(), exports);
    __exportStar(require_atproto_loopback_client_redirect_uris(), exports);
    __exportStar(require_atproto_oauth_scope(), exports);
    __exportStar(require_atproto_oauth_token_response(), exports);
    __exportStar(require_oauth_access_token(), exports);
    __exportStar(require_oauth_authorization_code_grant_token_request(), exports);
    __exportStar(require_oauth_authorization_details(), exports);
    __exportStar(require_oauth_authorization_request_jar(), exports);
    __exportStar(require_oauth_authorization_request_par(), exports);
    __exportStar(require_oauth_authorization_request_parameters(), exports);
    __exportStar(require_oauth_authorization_request_query(), exports);
    __exportStar(require_oauth_authorization_request_uri(), exports);
    __exportStar(require_oauth_authorization_response_error(), exports);
    __exportStar(require_oauth_authorization_server_metadata(), exports);
    __exportStar(require_oauth_client_credentials_grant_token_request(), exports);
    __exportStar(require_oauth_client_credentials(), exports);
    __exportStar(require_oauth_client_id_discoverable(), exports);
    __exportStar(require_oauth_client_id_loopback(), exports);
    __exportStar(require_oauth_client_id(), exports);
    __exportStar(require_oauth_client_metadata(), exports);
    __exportStar(require_oauth_endpoint_auth_method(), exports);
    __exportStar(require_oauth_endpoint_name(), exports);
    __exportStar(require_oauth_grant_type(), exports);
    __exportStar(require_oauth_introspection_response(), exports);
    __exportStar(require_oauth_issuer_identifier(), exports);
    __exportStar(require_oauth_par_response(), exports);
    __exportStar(require_oauth_password_grant_token_request(), exports);
    __exportStar(require_oauth_prompt_mode(), exports);
    __exportStar(require_oauth_protected_resource_metadata(), exports);
    __exportStar(require_oauth_redirect_uri(), exports);
    __exportStar(require_oauth_refresh_token_grant_token_request(), exports);
    __exportStar(require_oauth_refresh_token(), exports);
    __exportStar(require_oauth_request_uri(), exports);
    __exportStar(require_oauth_response_mode(), exports);
    __exportStar(require_oauth_response_type(), exports);
    __exportStar(require_oauth_scope(), exports);
    __exportStar(require_oauth_token_identification(), exports);
    __exportStar(require_oauth_token_request(), exports);
    __exportStar(require_oauth_token_response(), exports);
    __exportStar(require_oauth_token_type(), exports);
    __exportStar(require_oidc_authorization_error_response(), exports);
    __exportStar(require_oidc_claims_parameter(), exports);
    __exportStar(require_oidc_claims_properties(), exports);
    __exportStar(require_oidc_entity_type(), exports);
    __exportStar(require_oidc_userinfo(), exports);
  }
});

// node_modules/@atproto/oauth-client/dist/lock.js
var require_lock = __commonJS({
  "node_modules/@atproto/oauth-client/dist/lock.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.requestLocalLock = void 0;
    var locks = /* @__PURE__ */ new Map();
    function acquireLocalLock(name) {
      return new Promise((resolveAcquire) => {
        const prev = locks.get(name) ?? Promise.resolve();
        const next = prev.then(() => {
          return new Promise((resolveRelease) => {
            const release = () => {
              if (locks.get(name) === next)
                locks.delete(name);
              resolveRelease();
            };
            resolveAcquire(release);
          });
        });
        locks.set(name, next);
      });
    }
    var requestLocalLock = (name, fn) => {
      return acquireLocalLock(name).then(async (release) => {
        try {
          return await fn();
        } finally {
          release();
        }
      });
    };
    exports.requestLocalLock = requestLocalLock;
  }
});

// node_modules/@atproto/oauth-client/dist/util.js
var require_util9 = __commonJS({
  "node_modules/@atproto/oauth-client/dist/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ifString = void 0;
    exports.contentMime = contentMime;
    exports.combineSignals = combineSignals;
    var ifString = (v) => typeof v === "string" ? v : void 0;
    exports.ifString = ifString;
    function contentMime(headers) {
      return headers.get("content-type")?.split(";")[0].trim();
    }
    function combineSignals(signals) {
      const controller = new DisposableAbortController();
      const onAbort = function(_event) {
        const reason = new Error("This operation was aborted", {
          cause: this.reason
        });
        controller.abort(reason);
      };
      try {
        for (const sig of signals) {
          if (sig) {
            sig.throwIfAborted();
            sig.addEventListener("abort", onAbort, { signal: controller.signal });
          }
        }
        return controller;
      } catch (err) {
        controller.abort(err);
        throw err;
      }
    }
    var DisposableAbortController = class extends AbortController {
      [Symbol.dispose]() {
        this.abort(new Error("AbortController was disposed"));
      }
    };
  }
});

// node_modules/@atproto/oauth-client/dist/oauth-authorization-server-metadata-resolver.js
var require_oauth_authorization_server_metadata_resolver = __commonJS({
  "node_modules/@atproto/oauth-client/dist/oauth-authorization-server-metadata-resolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuthAuthorizationServerMetadataResolver = void 0;
    var oauth_types_1 = require_dist11();
    var fetch_1 = require_dist8();
    var simple_store_1 = require_dist5();
    var util_js_1 = require_util9();
    var OAuthAuthorizationServerMetadataResolver = class extends simple_store_1.CachedGetter {
      constructor(cache, fetch2, config) {
        super(async (issuer, options) => this.fetchMetadata(issuer, options), cache);
        Object.defineProperty(this, "fetch", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "allowHttpIssuer", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.fetch = (0, fetch_1.bindFetch)(fetch2);
        this.allowHttpIssuer = config?.allowHttpIssuer === true;
      }
      async get(input, options) {
        const issuer = oauth_types_1.oauthIssuerIdentifierSchema.parse(input);
        if (!this.allowHttpIssuer && issuer.startsWith("http:")) {
          throw new TypeError("Unsecure issuer URL protocol only allowed in development and test environments");
        }
        return super.get(issuer, options);
      }
      async fetchMetadata(issuer, options) {
        const url = new URL(`/.well-known/oauth-authorization-server`, issuer);
        const request = new Request(url, {
          headers: { accept: "application/json" },
          cache: options?.noCache ? "no-cache" : void 0,
          signal: options?.signal,
          redirect: "manual"
          // response must be 200 OK
        });
        const response = await this.fetch(request);
        if (response.status !== 200) {
          await (0, fetch_1.cancelBody)(response, "log");
          throw await fetch_1.FetchResponseError.from(response, `Unexpected status code ${response.status} for "${url}"`, void 0, { cause: request });
        }
        if ((0, util_js_1.contentMime)(response.headers) !== "application/json") {
          await (0, fetch_1.cancelBody)(response, "log");
          throw await fetch_1.FetchResponseError.from(response, `Unexpected content type for "${url}"`, void 0, { cause: request });
        }
        const metadata = oauth_types_1.oauthAuthorizationServerMetadataValidator.parse(await response.json());
        if (metadata.issuer !== issuer) {
          throw new TypeError(`Invalid issuer ${metadata.issuer}`);
        }
        if (metadata.client_id_metadata_document_supported !== true) {
          throw new TypeError(`Authorization server "${issuer}" does not support client_id_metadata_document`);
        }
        return metadata;
      }
    };
    exports.OAuthAuthorizationServerMetadataResolver = OAuthAuthorizationServerMetadataResolver;
  }
});

// node_modules/@atproto/oauth-client/dist/oauth-callback-error.js
var require_oauth_callback_error = __commonJS({
  "node_modules/@atproto/oauth-client/dist/oauth-callback-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuthCallbackError = void 0;
    var OAuthCallbackError = class _OAuthCallbackError extends Error {
      static from(err, params, state) {
        if (err instanceof _OAuthCallbackError)
          return err;
        const message2 = err instanceof Error ? err.message : void 0;
        return new _OAuthCallbackError(params, message2, state, err);
      }
      constructor(params, message2 = params.get("error_description") || "OAuth callback error", state, cause) {
        super(message2, { cause });
        Object.defineProperty(this, "params", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: params
        });
        Object.defineProperty(this, "state", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: state
        });
      }
    };
    exports.OAuthCallbackError = OAuthCallbackError;
  }
});

// node_modules/@atproto-labs/identity-resolver/dist/constants.js
var require_constants2 = __commonJS({
  "node_modules/@atproto-labs/identity-resolver/dist/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HANDLE_INVALID = void 0;
    exports.HANDLE_INVALID = "handle.invalid";
  }
});

// node_modules/@atproto-labs/identity-resolver/dist/identity-resolver-error.js
var require_identity_resolver_error = __commonJS({
  "node_modules/@atproto-labs/identity-resolver/dist/identity-resolver-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IdentityResolverError = void 0;
    var IdentityResolverError = class extends Error {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "IdentityResolverError"
        });
      }
    };
    exports.IdentityResolverError = IdentityResolverError;
  }
});

// node_modules/@atproto-labs/identity-resolver/dist/util.js
var require_util10 = __commonJS({
  "node_modules/@atproto-labs/identity-resolver/dist/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extractAtprotoHandle = extractAtprotoHandle;
    exports.extractNormalizedHandle = extractNormalizedHandle;
    exports.asNormalizedHandle = asNormalizedHandle;
    exports.normalizeHandle = normalizeHandle;
    exports.isValidHandle = isValidHandle;
    function extractAtprotoHandle(document2) {
      if (document2.alsoKnownAs) {
        for (const h of document2.alsoKnownAs) {
          if (h.startsWith("at://")) {
            return h.slice(5);
          }
        }
      }
      return void 0;
    }
    function extractNormalizedHandle(document2) {
      const handle = extractAtprotoHandle(document2);
      if (!handle)
        return void 0;
      return asNormalizedHandle(handle);
    }
    function asNormalizedHandle(input) {
      const handle = normalizeHandle(input);
      return isValidHandle(handle) ? handle : void 0;
    }
    function normalizeHandle(handle) {
      return handle.toLowerCase();
    }
    function isValidHandle(handle) {
      return handle.length > 0 && handle.length < 254 && /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$/.test(handle);
    }
  }
});

// node_modules/@atproto-labs/identity-resolver/dist/atproto-identity-resolver.js
var require_atproto_identity_resolver = __commonJS({
  "node_modules/@atproto-labs/identity-resolver/dist/atproto-identity-resolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AtprotoIdentityResolver = void 0;
    var did_resolver_1 = require_dist9();
    var constants_js_1 = require_constants2();
    var identity_resolver_error_js_1 = require_identity_resolver_error();
    var util_js_1 = require_util10();
    var AtprotoIdentityResolver = class {
      constructor(didResolver, handleResolver) {
        Object.defineProperty(this, "didResolver", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: didResolver
        });
        Object.defineProperty(this, "handleResolver", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: handleResolver
        });
      }
      async resolve(input, options) {
        return (0, did_resolver_1.isAtprotoDid)(input) ? this.resolveFromDid(input, options) : this.resolveFromHandle(input, options);
      }
      async resolveFromDid(did, options) {
        const document2 = await this.getDocumentFromDid(did, options);
        options?.signal?.throwIfAborted();
        const handle = (0, util_js_1.extractNormalizedHandle)(document2);
        const resolvedDid = handle ? await this.handleResolver.resolve(handle, options).catch(() => void 0) : void 0;
        return {
          did: document2.id,
          didDoc: document2,
          handle: handle && resolvedDid === did ? handle : constants_js_1.HANDLE_INVALID
        };
      }
      async resolveFromHandle(handle, options) {
        const document2 = await this.getDocumentFromHandle(handle, options);
        return {
          did: document2.id,
          didDoc: document2,
          handle: (0, util_js_1.extractNormalizedHandle)(document2) || constants_js_1.HANDLE_INVALID
        };
      }
      async getDocumentFromDid(did, options) {
        return this.didResolver.resolve(did, options);
      }
      async getDocumentFromHandle(input, options) {
        const handle = (0, util_js_1.asNormalizedHandle)(input);
        if (!handle) {
          throw new identity_resolver_error_js_1.IdentityResolverError(`Invalid handle "${input}" provided.`);
        }
        const did = await this.handleResolver.resolve(handle, options);
        if (!did) {
          throw new identity_resolver_error_js_1.IdentityResolverError(`Handle "${handle}" does not resolve to a DID`);
        }
        options?.signal?.throwIfAborted();
        const document2 = await this.didResolver.resolve(did, options);
        if (handle !== (0, util_js_1.extractNormalizedHandle)(document2)) {
          throw new identity_resolver_error_js_1.IdentityResolverError(`Did document for "${did}" does not include the handle "${handle}"`);
        }
        return document2;
      }
    };
    exports.AtprotoIdentityResolver = AtprotoIdentityResolver;
  }
});

// node_modules/@atproto-labs/identity-resolver/dist/create-identity-resolver.js
var require_create_identity_resolver = __commonJS({
  "node_modules/@atproto-labs/identity-resolver/dist/create-identity-resolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createIdentityResolver = createIdentityResolver;
    var did_resolver_1 = require_dist9();
    var handle_resolver_1 = require_dist10();
    var atproto_identity_resolver_js_1 = require_atproto_identity_resolver();
    function createIdentityResolver(options) {
      if ("identityResolver" in options && options.identityResolver != null) {
        return options.identityResolver;
      }
      if ("handleResolver" in options && options.handleResolver != null) {
        const didResolver = (0, did_resolver_1.createDidResolver)(options);
        const handleResolver = (0, handle_resolver_1.createHandleResolver)(options);
        return new atproto_identity_resolver_js_1.AtprotoIdentityResolver(didResolver, handleResolver);
      }
      throw new TypeError("identityResolver or handleResolver option is required");
    }
  }
});

// node_modules/@atproto-labs/identity-resolver/dist/identity-resolver.js
var require_identity_resolver = __commonJS({
  "node_modules/@atproto-labs/identity-resolver/dist/identity-resolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@atproto-labs/identity-resolver/dist/index.js
var require_dist12 = __commonJS({
  "node_modules/@atproto-labs/identity-resolver/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_atproto_identity_resolver(), exports);
    __exportStar(require_constants2(), exports);
    __exportStar(require_create_identity_resolver(), exports);
    __exportStar(require_identity_resolver_error(), exports);
    __exportStar(require_identity_resolver(), exports);
    __exportStar(require_util10(), exports);
  }
});

// node_modules/@atproto/oauth-client/dist/constants.js
var require_constants3 = __commonJS({
  "node_modules/@atproto/oauth-client/dist/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FALLBACK_ALG = void 0;
    exports.FALLBACK_ALG = "ES256";
  }
});

// node_modules/@atproto/oauth-client/dist/errors/auth-method-unsatisfiable-error.js
var require_auth_method_unsatisfiable_error = __commonJS({
  "node_modules/@atproto/oauth-client/dist/errors/auth-method-unsatisfiable-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuthMethodUnsatisfiableError = void 0;
    var AuthMethodUnsatisfiableError = class extends Error {
    };
    exports.AuthMethodUnsatisfiableError = AuthMethodUnsatisfiableError;
  }
});

// node_modules/@atproto/oauth-client/dist/errors/token-revoked-error.js
var require_token_revoked_error = __commonJS({
  "node_modules/@atproto/oauth-client/dist/errors/token-revoked-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TokenRevokedError = void 0;
    var TokenRevokedError = class extends Error {
      constructor(sub, message2 = `The session for "${sub}" was successfully revoked`, options) {
        super(message2, options);
        Object.defineProperty(this, "sub", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: sub
        });
      }
    };
    exports.TokenRevokedError = TokenRevokedError;
  }
});

// node_modules/@atproto/oauth-client/dist/identity-resolver.js
var require_identity_resolver2 = __commonJS({
  "node_modules/@atproto/oauth-client/dist/identity-resolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createIdentityResolver = void 0;
    var identity_resolver_1 = require_dist12();
    Object.defineProperty(exports, "createIdentityResolver", { enumerable: true, get: function() {
      return identity_resolver_1.createIdentityResolver;
    } });
  }
});

// node_modules/@atproto/oauth-client/dist/oauth-client-auth.js
var require_oauth_client_auth = __commonJS({
  "node_modules/@atproto/oauth-client/dist/oauth-client-auth.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.negotiateClientAuthMethod = negotiateClientAuthMethod;
    exports.createClientCredentialsFactory = createClientCredentialsFactory;
    var oauth_types_1 = require_dist11();
    var constants_js_1 = require_constants3();
    var auth_method_unsatisfiable_error_js_1 = require_auth_method_unsatisfiable_error();
    function negotiateClientAuthMethod(serverMetadata, clientMetadata, keyset) {
      const method = clientMetadata.token_endpoint_auth_method;
      const methods = supportedMethods(serverMetadata);
      if (!methods.includes(method)) {
        throw new Error(`The server does not support "${method}" authentication. Supported methods are: ${methods.join(", ")}.`);
      }
      if (method === "private_key_jwt") {
        if (!keyset)
          throw new Error("A keyset is required for private_key_jwt");
        const alg = supportedAlgs(serverMetadata);
        for (const key of keyset.list({ alg, usage: "sign" })) {
          if (key.kid)
            return { method: "private_key_jwt", kid: key.kid };
        }
        throw new Error(alg.includes(constants_js_1.FALLBACK_ALG) ? `Client authentication method "${method}" requires at least one "${constants_js_1.FALLBACK_ALG}" signing key with a "kid" property` : (
          // AS is not compliant with the ATproto OAuth spec.
          `Authorization server requires "${method}" authentication method, but does not support "${constants_js_1.FALLBACK_ALG}" algorithm.`
        ));
      }
      if (method === "none") {
        return { method: "none" };
      }
      throw new Error(`The ATProto OAuth spec requires that client use either "none" or "private_key_jwt" authentication method.` + (method === "client_secret_basic" ? ' You might want to explicitly set "token_endpoint_auth_method" to one of those values in the client metadata document.' : ` You set "${method}" which is not allowed.`));
    }
    function createClientCredentialsFactory(authMethod, serverMetadata, clientMetadata, runtime, keyset) {
      if (!supportedMethods(serverMetadata).includes(authMethod.method)) {
        throw new auth_method_unsatisfiable_error_js_1.AuthMethodUnsatisfiableError(`Client authentication method "${authMethod.method}" no longer supported`);
      }
      if (authMethod.method === "none") {
        return () => ({
          payload: {
            client_id: clientMetadata.client_id
          }
        });
      }
      if (authMethod.method === "private_key_jwt") {
        try {
          if (!keyset)
            throw new Error("A keyset is required for private_key_jwt");
          const { key, alg } = keyset.findPrivateKey({
            usage: "sign",
            kid: authMethod.kid,
            alg: supportedAlgs(serverMetadata)
          });
          return async () => ({
            payload: {
              client_id: clientMetadata.client_id,
              client_assertion_type: oauth_types_1.CLIENT_ASSERTION_TYPE_JWT_BEARER,
              client_assertion: await key.createJwt({ alg }, {
                // > The JWT MUST contain an "iss" (issuer) claim that contains a
                // > unique identifier for the entity that issued the JWT.
                iss: clientMetadata.client_id,
                // > For client authentication, the subject MUST be the
                // > "client_id" of the OAuth client.
                sub: clientMetadata.client_id,
                // > The JWT MUST contain an "aud" (audience) claim containing a value
                // > that identifies the authorization server as an intended audience.
                // > The token endpoint URL of the authorization server MAY be used as a
                // > value for an "aud" element to identify the authorization server as an
                // > intended audience of the JWT.
                aud: serverMetadata.issuer,
                // > The JWT MAY contain a "jti" (JWT ID) claim that provides a
                // > unique identifier for the token.
                jti: await runtime.generateNonce(),
                // > The JWT MAY contain an "iat" (issued at) claim that
                // > identifies the time at which the JWT was issued.
                iat: Math.floor(Date.now() / 1e3),
                // > The JWT MUST contain an "exp" (expiration time) claim that
                // > limits the time window during which the JWT can be used.
                exp: Math.floor(Date.now() / 1e3) + 60
                // 1 minute
              })
            }
          });
        } catch (cause) {
          throw new auth_method_unsatisfiable_error_js_1.AuthMethodUnsatisfiableError("Failed to load private key", {
            cause
          });
        }
      }
      throw new auth_method_unsatisfiable_error_js_1.AuthMethodUnsatisfiableError(
        // @ts-expect-error
        `Unsupported auth method ${authMethod.method}`
      );
    }
    function supportedMethods(serverMetadata) {
      return serverMetadata["token_endpoint_auth_methods_supported"];
    }
    function supportedAlgs(serverMetadata) {
      return serverMetadata["token_endpoint_auth_signing_alg_values_supported"] ?? [
        // @NOTE If not specified, assume that the server supports the ES256
        // algorithm, as prescribed by the spec:
        //
        // > Clients and Authorization Servers currently must support the ES256
        // > cryptographic system [for client authentication].
        //
        // https://atproto.com/specs/oauth#confidential-client-authentication
        constants_js_1.FALLBACK_ALG
      ];
    }
  }
});

// node_modules/@atproto/oauth-client/dist/oauth-protected-resource-metadata-resolver.js
var require_oauth_protected_resource_metadata_resolver = __commonJS({
  "node_modules/@atproto/oauth-client/dist/oauth-protected-resource-metadata-resolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuthProtectedResourceMetadataResolver = void 0;
    var oauth_types_1 = require_dist11();
    var fetch_1 = require_dist8();
    var simple_store_1 = require_dist5();
    var util_js_1 = require_util9();
    var OAuthProtectedResourceMetadataResolver = class extends simple_store_1.CachedGetter {
      constructor(cache, fetch2 = globalThis.fetch, config) {
        super(async (origin, options) => this.fetchMetadata(origin, options), cache);
        Object.defineProperty(this, "fetch", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "allowHttpResource", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.fetch = (0, fetch_1.bindFetch)(fetch2);
        this.allowHttpResource = config?.allowHttpResource === true;
      }
      async get(resource, options) {
        const { protocol, origin } = new URL(resource);
        if (protocol !== "https:" && protocol !== "http:") {
          throw new TypeError(`Invalid protected resource metadata URL protocol: ${protocol}`);
        }
        if (protocol === "http:" && !this.allowHttpResource) {
          throw new TypeError(`Unsecure resource metadata URL (${protocol}) only allowed in development and test environments`);
        }
        return super.get(origin, options);
      }
      async fetchMetadata(origin, options) {
        const url = new URL(`/.well-known/oauth-protected-resource`, origin);
        const request = new Request(url, {
          signal: options?.signal,
          headers: { accept: "application/json" },
          cache: options?.noCache ? "no-cache" : void 0,
          redirect: "manual"
          // response must be 200 OK
        });
        const response = await this.fetch(request);
        if (response.status !== 200) {
          await (0, fetch_1.cancelBody)(response, "log");
          throw await fetch_1.FetchResponseError.from(response, `Unexpected status code ${response.status} for "${url}"`, void 0, { cause: request });
        }
        if ((0, util_js_1.contentMime)(response.headers) !== "application/json") {
          await (0, fetch_1.cancelBody)(response, "log");
          throw await fetch_1.FetchResponseError.from(response, `Unexpected content type for "${url}"`, void 0, { cause: request });
        }
        const metadata = oauth_types_1.oauthProtectedResourceMetadataSchema.parse(await response.json());
        if (metadata.resource !== origin) {
          throw new TypeError(`Invalid issuer ${metadata.resource}`);
        }
        return metadata;
      }
    };
    exports.OAuthProtectedResourceMetadataResolver = OAuthProtectedResourceMetadataResolver;
  }
});

// node_modules/@atproto/oauth-client/dist/oauth-resolver-error.js
var require_oauth_resolver_error = __commonJS({
  "node_modules/@atproto/oauth-client/dist/oauth-resolver-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuthResolverError = void 0;
    var zod_1 = require_zod();
    var OAuthResolverError = class _OAuthResolverError extends Error {
      constructor(message2, options) {
        super(message2, options);
      }
      static from(cause, message2) {
        if (cause instanceof _OAuthResolverError)
          return cause;
        const validationReason = cause instanceof zod_1.ZodError ? `${cause.errors[0].path} ${cause.errors[0].message}` : null;
        const fullMessage = (message2 ?? `Unable to resolve identity`) + (validationReason ? ` (${validationReason})` : "");
        return new _OAuthResolverError(fullMessage, {
          cause
        });
      }
    };
    exports.OAuthResolverError = OAuthResolverError;
  }
});

// node_modules/@atproto/oauth-client/dist/oauth-resolver.js
var require_oauth_resolver = __commonJS({
  "node_modules/@atproto/oauth-client/dist/oauth-resolver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuthResolver = void 0;
    var did_1 = require_dist4();
    var oauth_types_1 = require_dist11();
    var oauth_resolver_error_js_1 = require_oauth_resolver_error();
    var OAuthResolver = class {
      constructor(identityResolver, protectedResourceMetadataResolver, authorizationServerMetadataResolver) {
        Object.defineProperty(this, "identityResolver", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: identityResolver
        });
        Object.defineProperty(this, "protectedResourceMetadataResolver", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: protectedResourceMetadataResolver
        });
        Object.defineProperty(this, "authorizationServerMetadataResolver", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: authorizationServerMetadataResolver
        });
      }
      /**
       * @param input - A handle, DID, PDS URL or Entryway URL
       */
      async resolve(input, options) {
        return /^https?:\/\//.test(input) ? this.resolveFromService(input, options) : this.resolveFromIdentity(input, options);
      }
      /**
       * @note this method can be used to verify if a particular uri supports OAuth
       * based sign-in (for compatibility with legacy implementation).
       */
      async resolveFromService(input, options) {
        try {
          const metadata = await this.getResourceServerMetadata(input, options);
          return { metadata };
        } catch (err) {
          if (!options?.signal?.aborted && err instanceof oauth_resolver_error_js_1.OAuthResolverError) {
            try {
              const result = oauth_types_1.oauthIssuerIdentifierSchema.safeParse(input);
              if (result.success) {
                const metadata = await this.getAuthorizationServerMetadata(result.data, options);
                return { metadata };
              }
            } catch {
            }
          }
          throw err;
        }
      }
      async resolveFromIdentity(input, options) {
        const identityInfo = await this.resolveIdentity(input, options);
        options?.signal?.throwIfAborted();
        const pds = (0, did_1.extractPdsUrl)(identityInfo.didDoc);
        const metadata = await this.getResourceServerMetadata(pds, options);
        return { identityInfo, metadata, pds };
      }
      async resolveIdentity(input, options) {
        try {
          return await this.identityResolver.resolve(input, options);
        } catch (cause) {
          throw oauth_resolver_error_js_1.OAuthResolverError.from(cause, `Failed to resolve identity: ${input}`);
        }
      }
      async getAuthorizationServerMetadata(issuer, options) {
        try {
          return await this.authorizationServerMetadataResolver.get(issuer, options);
        } catch (cause) {
          throw oauth_resolver_error_js_1.OAuthResolverError.from(cause, `Failed to resolve OAuth server metadata for issuer: ${issuer}`);
        }
      }
      async getResourceServerMetadata(pdsUrl, options) {
        try {
          const rsMetadata = await this.protectedResourceMetadataResolver.get(pdsUrl, options);
          if (rsMetadata.authorization_servers?.length !== 1) {
            throw new oauth_resolver_error_js_1.OAuthResolverError(rsMetadata.authorization_servers?.length ? `Unable to determine authorization server for PDS: ${pdsUrl}` : `No authorization servers found for PDS: ${pdsUrl}`);
          }
          const issuer = rsMetadata.authorization_servers[0];
          options?.signal?.throwIfAborted();
          const asMetadata = await this.getAuthorizationServerMetadata(issuer, options);
          if (asMetadata.protected_resources) {
            if (!asMetadata.protected_resources.includes(rsMetadata.resource)) {
              throw new oauth_resolver_error_js_1.OAuthResolverError(`PDS "${pdsUrl}" not protected by issuer "${issuer}"`);
            }
          }
          return asMetadata;
        } catch (cause) {
          throw oauth_resolver_error_js_1.OAuthResolverError.from(cause, `Failed to resolve OAuth server metadata for resource: ${pdsUrl}`);
        }
      }
    };
    exports.OAuthResolver = OAuthResolver;
  }
});

// node_modules/@atproto/oauth-client/dist/errors/token-refresh-error.js
var require_token_refresh_error = __commonJS({
  "node_modules/@atproto/oauth-client/dist/errors/token-refresh-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TokenRefreshError = void 0;
    var TokenRefreshError = class extends Error {
      constructor(sub, message2, options) {
        super(message2, options);
        Object.defineProperty(this, "sub", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: sub
        });
      }
    };
    exports.TokenRefreshError = TokenRefreshError;
  }
});

// node_modules/@atproto/oauth-client/dist/fetch-dpop.js
var require_fetch_dpop = __commonJS({
  "node_modules/@atproto/oauth-client/dist/fetch-dpop.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dpopFetchWrapper = dpopFetchWrapper;
    var base64_1 = (init_base64(), __toCommonJS(base64_exports));
    var fetch_1 = require_dist8();
    var subtle = globalThis.crypto?.subtle;
    var ReadableStream = globalThis.ReadableStream;
    function dpopFetchWrapper({
      key,
      // @TODO we should provide a default based on specs
      supportedAlgs,
      nonces,
      sha256 = typeof subtle !== "undefined" ? subtleSha256 : void 0,
      isAuthServer,
      fetch: fetch2 = globalThis.fetch
    }) {
      if (!sha256) {
        throw new TypeError(`crypto.subtle is not available in this environment. Please provide a sha256 function.`);
      }
      const alg = negotiateAlg(key, supportedAlgs);
      return async function(input, init) {
        const request = init == null && input instanceof Request ? input : new Request(input, init);
        const authorizationHeader = request.headers.get("Authorization");
        const ath = authorizationHeader?.startsWith("DPoP ") ? await sha256(authorizationHeader.slice(5)) : void 0;
        const { origin } = new URL(request.url);
        const htm = request.method;
        const htu = buildHtu(request.url);
        let initNonce;
        try {
          initNonce = await nonces.get(origin);
        } catch {
        }
        const initProof = await buildProof(key, alg, htm, htu, initNonce, ath);
        request.headers.set("DPoP", initProof);
        const initResponse = await fetch2.call(this, request);
        const nextNonce = initResponse.headers.get("DPoP-Nonce");
        if (!nextNonce || nextNonce === initNonce) {
          return initResponse;
        }
        try {
          await nonces.set(origin, nextNonce);
        } catch {
        }
        const shouldRetry = await isUseDpopNonceError(initResponse, isAuthServer);
        if (!shouldRetry) {
          return initResponse;
        }
        if (input === request) {
          return initResponse;
        }
        if (ReadableStream && init?.body instanceof ReadableStream) {
          return initResponse;
        }
        await (0, fetch_1.cancelBody)(initResponse, "log");
        const nextProof = await buildProof(key, alg, htm, htu, nextNonce, ath);
        const nextRequest = new Request(input, init);
        nextRequest.headers.set("DPoP", nextProof);
        const retryRequest = await fetch2.call(this, nextRequest);
        const retryNonce = retryRequest.headers.get("DPoP-Nonce");
        if (!retryNonce || retryNonce === initNonce) {
          return retryRequest;
        }
        try {
          await nonces.set(origin, retryNonce);
        } catch {
        }
        return retryRequest;
      };
    }
    function buildHtu(url) {
      const fragmentIndex = url.indexOf("#");
      const queryIndex = url.indexOf("?");
      const end = fragmentIndex === -1 ? queryIndex : queryIndex === -1 ? fragmentIndex : Math.min(fragmentIndex, queryIndex);
      return end === -1 ? url : url.slice(0, end);
    }
    async function buildProof(key, alg, htm, htu, nonce, ath) {
      const jwk = key.bareJwk;
      if (!jwk) {
        throw new Error("Only asymmetric keys can be used as DPoP proofs");
      }
      const now = Math.floor(Date.now() / 1e3);
      return key.createJwt(
        // https://datatracker.ietf.org/doc/html/rfc9449#section-4.2
        {
          alg,
          typ: "dpop+jwt",
          jwk
        },
        {
          iat: now,
          // Any collision will cause the request to be rejected by the server. no biggie.
          jti: Math.random().toString(36).slice(2),
          htm,
          htu,
          nonce,
          ath
        }
      );
    }
    async function isUseDpopNonceError(response, isAuthServer) {
      if (isAuthServer === void 0 || isAuthServer === false) {
        if (response.status === 401) {
          const wwwAuth = response.headers.get("WWW-Authenticate");
          if (wwwAuth?.startsWith("DPoP")) {
            return wwwAuth.includes('error="use_dpop_nonce"');
          }
        }
      }
      if (isAuthServer === void 0 || isAuthServer === true) {
        if (response.status === 400) {
          try {
            const json = await (0, fetch_1.peekJson)(response, 10 * 1024);
            return typeof json === "object" && json?.["error"] === "use_dpop_nonce";
          } catch {
            return false;
          }
        }
      }
      return false;
    }
    function negotiateAlg(key, supportedAlgs) {
      if (supportedAlgs) {
        const alg = supportedAlgs.find((a) => key.algorithms.includes(a));
        if (alg)
          return alg;
      } else {
        const [alg] = key.algorithms;
        if (alg)
          return alg;
      }
      throw new Error("Key does not match any alg supported by the server");
    }
    async function subtleSha256(input) {
      if (subtle == null) {
        throw new Error(`crypto.subtle is not available in this environment. Please provide a sha256 function.`);
      }
      const bytes = new TextEncoder().encode(input);
      const digest2 = await subtle.digest("SHA-256", bytes);
      const digestBytes = new Uint8Array(digest2);
      return base64_1.base64url.baseEncode(digestBytes);
    }
  }
});

// node_modules/@atproto/oauth-client/dist/oauth-response-error.js
var require_oauth_response_error = __commonJS({
  "node_modules/@atproto/oauth-client/dist/oauth-response-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuthResponseError = void 0;
    var util_js_1 = require_util9();
    var OAuthResponseError = class extends Error {
      constructor(response, payload) {
        const objPayload = typeof payload === "object" ? payload : void 0;
        const error = (0, util_js_1.ifString)(objPayload?.["error"]);
        const errorDescription = (0, util_js_1.ifString)(objPayload?.["error_description"]);
        const messageError = error ? `"${error}"` : "unknown";
        const messageDesc = errorDescription ? `: ${errorDescription}` : "";
        const message2 = `OAuth ${messageError} error${messageDesc}`;
        super(message2);
        Object.defineProperty(this, "response", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: response
        });
        Object.defineProperty(this, "payload", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: payload
        });
        Object.defineProperty(this, "error", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "errorDescription", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.error = error;
        this.errorDescription = errorDescription;
      }
      get status() {
        return this.response.status;
      }
      get headers() {
        return this.response.headers;
      }
    };
    exports.OAuthResponseError = OAuthResponseError;
  }
});

// node_modules/@atproto/oauth-client/dist/oauth-server-agent.js
var require_oauth_server_agent = __commonJS({
  "node_modules/@atproto/oauth-client/dist/oauth-server-agent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuthServerAgent = void 0;
    var oauth_types_1 = require_dist11();
    var fetch_1 = require_dist8();
    var token_refresh_error_js_1 = require_token_refresh_error();
    var fetch_dpop_js_1 = require_fetch_dpop();
    var oauth_client_auth_js_1 = require_oauth_client_auth();
    var oauth_response_error_js_1 = require_oauth_response_error();
    var OAuthServerAgent = class {
      /**
       * @throws see {@link createClientCredentialsFactory}
       */
      constructor(authMethod, dpopKey, serverMetadata, clientMetadata, dpopNonces, oauthResolver, runtime, keyset, fetch2) {
        Object.defineProperty(this, "authMethod", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: authMethod
        });
        Object.defineProperty(this, "dpopKey", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: dpopKey
        });
        Object.defineProperty(this, "serverMetadata", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: serverMetadata
        });
        Object.defineProperty(this, "clientMetadata", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: clientMetadata
        });
        Object.defineProperty(this, "dpopNonces", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: dpopNonces
        });
        Object.defineProperty(this, "oauthResolver", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: oauthResolver
        });
        Object.defineProperty(this, "runtime", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: runtime
        });
        Object.defineProperty(this, "keyset", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: keyset
        });
        Object.defineProperty(this, "dpopFetch", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "clientCredentialsFactory", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.clientCredentialsFactory = (0, oauth_client_auth_js_1.createClientCredentialsFactory)(authMethod, serverMetadata, clientMetadata, runtime, keyset);
        this.dpopFetch = (0, fetch_dpop_js_1.dpopFetchWrapper)({
          fetch: (0, fetch_1.bindFetch)(fetch2),
          key: dpopKey,
          supportedAlgs: serverMetadata.dpop_signing_alg_values_supported,
          sha256: async (v) => runtime.sha256(v),
          nonces: dpopNonces,
          isAuthServer: true
        });
      }
      get issuer() {
        return this.serverMetadata.issuer;
      }
      async revoke(token) {
        try {
          await this.request("revocation", { token });
        } catch {
        }
      }
      async exchangeCode(code, codeVerifier, redirectUri) {
        const now = Date.now();
        const tokenResponse = await this.request("token", {
          grant_type: "authorization_code",
          // redirectUri should always be passed by the calling code, but if it is
          // not, default to the first redirect_uri registered for the client:
          redirect_uri: redirectUri ?? this.clientMetadata.redirect_uris[0],
          code,
          code_verifier: codeVerifier
        });
        try {
          const aud = await this.verifyIssuer(tokenResponse.sub);
          return {
            aud,
            sub: tokenResponse.sub,
            iss: this.issuer,
            scope: tokenResponse.scope,
            refresh_token: tokenResponse.refresh_token,
            access_token: tokenResponse.access_token,
            token_type: tokenResponse.token_type,
            expires_at: typeof tokenResponse.expires_in === "number" ? new Date(now + tokenResponse.expires_in * 1e3).toISOString() : void 0
          };
        } catch (err) {
          await this.revoke(tokenResponse.access_token);
          throw err;
        }
      }
      async refresh(tokenSet) {
        if (!tokenSet.refresh_token) {
          throw new token_refresh_error_js_1.TokenRefreshError(tokenSet.sub, "No refresh token available");
        }
        const aud = await this.verifyIssuer(tokenSet.sub);
        const now = Date.now();
        const tokenResponse = await this.request("token", {
          grant_type: "refresh_token",
          refresh_token: tokenSet.refresh_token
        });
        return {
          aud,
          sub: tokenSet.sub,
          iss: this.issuer,
          scope: tokenResponse.scope,
          refresh_token: tokenResponse.refresh_token,
          access_token: tokenResponse.access_token,
          token_type: tokenResponse.token_type,
          expires_at: typeof tokenResponse.expires_in === "number" ? new Date(now + tokenResponse.expires_in * 1e3).toISOString() : void 0
        };
      }
      /**
       * VERY IMPORTANT ! Always call this to process token responses.
       *
       * Whenever an OAuth token response is received, we **MUST** verify that the
       * "sub" is a DID, whose issuer authority is indeed the server we just
       * obtained credentials from. This check is a critical step to actually be
       * able to use the "sub" (DID) as being the actual user's identifier.
       *
       * @returns The user's PDS URL (the resource server for the user)
       */
      async verifyIssuer(sub) {
        const resolved = await this.oauthResolver.resolveFromIdentity(sub, {
          noCache: true,
          allowStale: false,
          signal: AbortSignal.timeout(1e4)
        });
        if (this.issuer !== resolved.metadata.issuer) {
          throw new TypeError("Issuer mismatch");
        }
        return resolved.pds.href;
      }
      async request(endpoint, payload) {
        const url = this.serverMetadata[`${endpoint}_endpoint`];
        if (!url)
          throw new Error(`No ${endpoint} endpoint available`);
        const auth = await this.clientCredentialsFactory();
        const { response, json } = await this.dpopFetch(url, {
          method: "POST",
          headers: {
            ...auth.headers,
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: wwwFormUrlEncode({ ...payload, ...auth.payload })
        }).then((0, fetch_1.fetchJsonProcessor)());
        if (response.ok) {
          switch (endpoint) {
            case "token":
              return oauth_types_1.atprotoOAuthTokenResponseSchema.parse(json);
            case "pushed_authorization_request":
              return oauth_types_1.oauthParResponseSchema.parse(json);
            default:
              return json;
          }
        } else {
          throw new oauth_response_error_js_1.OAuthResponseError(response, json);
        }
      }
    };
    exports.OAuthServerAgent = OAuthServerAgent;
    function wwwFormUrlEncode(payload) {
      return new URLSearchParams(Object.entries(payload).filter(entryHasDefinedValue).map(stringifyEntryValue)).toString();
    }
    function entryHasDefinedValue(entry) {
      return entry[1] !== void 0;
    }
    function stringifyEntryValue(entry) {
      const name = entry[0];
      const value = entry[1];
      switch (typeof value) {
        case "string":
          return [name, value];
        case "number":
        case "boolean":
          return [name, String(value)];
        default: {
          const enc = JSON.stringify(value);
          if (enc === void 0) {
            throw new Error(`Unsupported value type for ${name}: ${String(value)}`);
          }
          return [name, enc];
        }
      }
    }
  }
});

// node_modules/@atproto/oauth-client/dist/oauth-server-factory.js
var require_oauth_server_factory = __commonJS({
  "node_modules/@atproto/oauth-client/dist/oauth-server-factory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuthServerFactory = void 0;
    var oauth_server_agent_js_1 = require_oauth_server_agent();
    var OAuthServerFactory = class {
      constructor(clientMetadata, runtime, resolver, fetch2, keyset, dpopNonceCache) {
        Object.defineProperty(this, "clientMetadata", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: clientMetadata
        });
        Object.defineProperty(this, "runtime", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: runtime
        });
        Object.defineProperty(this, "resolver", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: resolver
        });
        Object.defineProperty(this, "fetch", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: fetch2
        });
        Object.defineProperty(this, "keyset", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: keyset
        });
        Object.defineProperty(this, "dpopNonceCache", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: dpopNonceCache
        });
      }
      /**
       * @param authMethod `undefined` means that we are restoring a session that
       * was created before we started storing the `authMethod` in the session. In
       * that case, we will use the first key from the keyset.
       *
       * Support for this might be removed in the future.
       *
       * @throws see {@link OAuthServerFactory.fromMetadata}
       */
      async fromIssuer(issuer, authMethod, dpopKey, options) {
        const serverMetadata = await this.resolver.getAuthorizationServerMetadata(issuer, options);
        return this.fromMetadata(serverMetadata, authMethod, dpopKey);
      }
      /**
       * @throws see {@link OAuthServerAgent}
       */
      async fromMetadata(serverMetadata, authMethod, dpopKey) {
        return new oauth_server_agent_js_1.OAuthServerAgent(authMethod, dpopKey, serverMetadata, this.clientMetadata, this.dpopNonceCache, this.resolver, this.runtime, this.keyset, this.fetch);
      }
    };
    exports.OAuthServerFactory = OAuthServerFactory;
  }
});

// node_modules/@atproto/oauth-client/dist/errors/token-invalid-error.js
var require_token_invalid_error = __commonJS({
  "node_modules/@atproto/oauth-client/dist/errors/token-invalid-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TokenInvalidError = void 0;
    var TokenInvalidError = class extends Error {
      constructor(sub, message2 = `The session for "${sub}" is invalid`, options) {
        super(message2, options);
        Object.defineProperty(this, "sub", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: sub
        });
      }
    };
    exports.TokenInvalidError = TokenInvalidError;
  }
});

// node_modules/@atproto/oauth-client/dist/oauth-session.js
var require_oauth_session = __commonJS({
  "node_modules/@atproto/oauth-client/dist/oauth-session.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuthSession = void 0;
    var fetch_1 = require_dist8();
    var token_invalid_error_js_1 = require_token_invalid_error();
    var token_revoked_error_js_1 = require_token_revoked_error();
    var fetch_dpop_js_1 = require_fetch_dpop();
    var ReadableStream = globalThis.ReadableStream;
    var OAuthSession = class {
      constructor(server, sub, sessionGetter, fetch2 = globalThis.fetch) {
        Object.defineProperty(this, "server", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: server
        });
        Object.defineProperty(this, "sub", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: sub
        });
        Object.defineProperty(this, "sessionGetter", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: sessionGetter
        });
        Object.defineProperty(this, "dpopFetch", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.dpopFetch = (0, fetch_dpop_js_1.dpopFetchWrapper)({
          fetch: (0, fetch_1.bindFetch)(fetch2),
          key: server.dpopKey,
          supportedAlgs: server.serverMetadata.dpop_signing_alg_values_supported,
          sha256: async (v) => server.runtime.sha256(v),
          nonces: server.dpopNonces,
          isAuthServer: false
        });
      }
      get did() {
        return this.sub;
      }
      get serverMetadata() {
        return this.server.serverMetadata;
      }
      /**
       * @param refresh When `true`, the credentials will be refreshed even if they
       * are not expired. When `false`, the credentials will not be refreshed even
       * if they are expired. When `undefined`, the credentials will be refreshed
       * if, and only if, they are (about to be) expired. Defaults to `undefined`.
       */
      async getTokenSet(refresh) {
        const { tokenSet } = await this.sessionGetter.getSession(this.sub, refresh);
        return tokenSet;
      }
      async getTokenInfo(refresh = "auto") {
        const tokenSet = await this.getTokenSet(refresh);
        const expiresAt = tokenSet.expires_at == null ? void 0 : new Date(tokenSet.expires_at);
        return {
          expiresAt,
          get expired() {
            return expiresAt == null ? void 0 : expiresAt.getTime() < Date.now() - 5e3;
          },
          scope: tokenSet.scope,
          iss: tokenSet.iss,
          aud: tokenSet.aud,
          sub: tokenSet.sub
        };
      }
      async signOut() {
        try {
          const tokenSet = await this.getTokenSet(false);
          await this.server.revoke(tokenSet.access_token);
        } finally {
          await this.sessionGetter.delStored(this.sub, new token_revoked_error_js_1.TokenRevokedError(this.sub));
        }
      }
      async fetchHandler(pathname, init) {
        const tokenSet = await this.getTokenSet("auto");
        const initialUrl = new URL(pathname, tokenSet.aud);
        const initialAuth = `${tokenSet.token_type} ${tokenSet.access_token}`;
        const headers = new Headers(init?.headers);
        headers.set("Authorization", initialAuth);
        const initialResponse = await this.dpopFetch(initialUrl, {
          ...init,
          headers
        });
        if (!isInvalidTokenResponse(initialResponse)) {
          return initialResponse;
        }
        let tokenSetFresh;
        try {
          tokenSetFresh = await this.getTokenSet(true);
        } catch (err) {
          return initialResponse;
        }
        if (ReadableStream && init?.body instanceof ReadableStream) {
          return initialResponse;
        }
        const finalAuth = `${tokenSetFresh.token_type} ${tokenSetFresh.access_token}`;
        const finalUrl = new URL(pathname, tokenSetFresh.aud);
        headers.set("Authorization", finalAuth);
        const finalResponse = await this.dpopFetch(finalUrl, { ...init, headers });
        if (isInvalidTokenResponse(finalResponse)) {
          await this.sessionGetter.delStored(this.sub, new token_invalid_error_js_1.TokenInvalidError(this.sub));
        }
        return finalResponse;
      }
    };
    exports.OAuthSession = OAuthSession;
    function isInvalidTokenResponse(response) {
      if (response.status !== 401)
        return false;
      const wwwAuth = response.headers.get("WWW-Authenticate");
      return wwwAuth != null && (wwwAuth.startsWith("Bearer ") || wwwAuth.startsWith("DPoP ")) && wwwAuth.includes('error="invalid_token"');
    }
  }
});

// node_modules/@atproto/oauth-client/dist/runtime.js
var require_runtime = __commonJS({
  "node_modules/@atproto/oauth-client/dist/runtime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Runtime = void 0;
    var base64_1 = (init_base64(), __toCommonJS(base64_exports));
    var lock_js_1 = require_lock();
    var Runtime = class {
      constructor(implementation) {
        Object.defineProperty(this, "implementation", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: implementation
        });
        Object.defineProperty(this, "hasImplementationLock", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "usingLock", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        const { requestLock } = implementation;
        this.hasImplementationLock = requestLock != null;
        this.usingLock = requestLock?.bind(implementation) || // Falling back to a local lock
        lock_js_1.requestLocalLock;
      }
      async generateKey(algs) {
        const algsSorted = Array.from(algs).sort(compareAlgos);
        return this.implementation.createKey(algsSorted);
      }
      async sha256(text) {
        const bytes = new TextEncoder().encode(text);
        const digest2 = await this.implementation.digest(bytes, { name: "sha256" });
        return base64_1.base64url.baseEncode(digest2);
      }
      async generateNonce(length = 16) {
        const bytes = await this.implementation.getRandomValues(length);
        return base64_1.base64url.baseEncode(bytes);
      }
      async generatePKCE(byteLength) {
        const verifier = await this.generateVerifier(byteLength);
        return {
          verifier,
          challenge: await this.sha256(verifier),
          method: "S256"
        };
      }
      async calculateJwkThumbprint(jwk) {
        const components = extractJktComponents(jwk);
        const data = JSON.stringify(components);
        return this.sha256(data);
      }
      /**
       * @see {@link https://datatracker.ietf.org/doc/html/rfc7636#section-4.1}
       * @note It is RECOMMENDED that the output of a suitable random number generator
       * be used to create a 32-octet sequence. The octet sequence is then
       * base64url-encoded to produce a 43-octet URL safe string to use as the code
       * verifier.
       */
      async generateVerifier(byteLength = 32) {
        if (byteLength < 32 || byteLength > 96) {
          throw new TypeError("Invalid code_verifier length");
        }
        const bytes = await this.implementation.getRandomValues(byteLength);
        return base64_1.base64url.baseEncode(bytes);
      }
    };
    exports.Runtime = Runtime;
    function extractJktComponents(jwk) {
      const get = (field) => {
        const value = jwk[field];
        if (typeof value !== "string" || !value) {
          throw new TypeError(`"${field}" Parameter missing or invalid`);
        }
        return value;
      };
      switch (jwk.kty) {
        case "EC":
          return { crv: get("crv"), kty: get("kty"), x: get("x"), y: get("y") };
        case "OKP":
          return { crv: get("crv"), kty: get("kty"), x: get("x") };
        case "RSA":
          return { e: get("e"), kty: get("kty"), n: get("n") };
        case "oct":
          return { k: get("k"), kty: get("kty") };
        default:
          throw new TypeError('"kty" (Key Type) Parameter missing or unsupported');
      }
    }
    function compareAlgos(a, b) {
      if (a === "ES256K")
        return -1;
      if (b === "ES256K")
        return 1;
      for (const prefix of ["ES", "PS", "RS"]) {
        if (a.startsWith(prefix)) {
          if (b.startsWith(prefix)) {
            const aLen = parseInt(a.slice(2, 5));
            const bLen = parseInt(b.slice(2, 5));
            return aLen - bLen;
          }
          return -1;
        } else if (b.startsWith(prefix)) {
          return 1;
        }
      }
      return 0;
    }
  }
});

// node_modules/@atproto/oauth-client/dist/session-getter.js
var require_session_getter = __commonJS({
  "node_modules/@atproto/oauth-client/dist/session-getter.js"(exports) {
    "use strict";
    var __addDisposableResource = exports && exports.__addDisposableResource || function(env, value, async) {
      if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
          if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
          dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
          if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
          dispose = value[Symbol.dispose];
          if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
          try {
            inner.call(this);
          } catch (e) {
            return Promise.reject(e);
          }
        };
        env.stack.push({ value, dispose, async });
      } else if (async) {
        env.stack.push({ async: true });
      }
      return value;
    };
    var __disposeResources = exports && exports.__disposeResources || /* @__PURE__ */ (function(SuppressedError2) {
      return function(env) {
        function fail(e) {
          env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
          env.hasError = true;
        }
        var r, s = 0;
        function next() {
          while (r = env.stack.pop()) {
            try {
              if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
              if (r.dispose) {
                var result = r.dispose.call(r.value);
                if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                  fail(e);
                  return next();
                });
              } else s |= 1;
            } catch (e) {
              fail(e);
            }
          }
          if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
          if (env.hasError) throw env.error;
        }
        return next();
      };
    })(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message2) {
      var e = new Error(message2);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SessionGetter = void 0;
    exports.isExpectedSessionError = isExpectedSessionError;
    var simple_store_1 = require_dist5();
    var auth_method_unsatisfiable_error_js_1 = require_auth_method_unsatisfiable_error();
    var token_invalid_error_js_1 = require_token_invalid_error();
    var token_refresh_error_js_1 = require_token_refresh_error();
    var token_revoked_error_js_1 = require_token_revoked_error();
    var oauth_response_error_js_1 = require_oauth_response_error();
    var util_js_1 = require_util9();
    function isExpectedSessionError(err) {
      return err instanceof token_refresh_error_js_1.TokenRefreshError || err instanceof token_revoked_error_js_1.TokenRevokedError || err instanceof token_invalid_error_js_1.TokenInvalidError || err instanceof auth_method_unsatisfiable_error_js_1.AuthMethodUnsatisfiableError || // The stored session is invalid (e.g. missing properties) and cannot
      // be used properly
      err instanceof TypeError;
    }
    var SessionGetter = class extends simple_store_1.CachedGetter {
      constructor(sessionStore, serverFactory, runtime, hooks = {}) {
        super(async (sub, { signal }, storedSession) => {
          if (storedSession === void 0) {
            const msg = "The session was deleted by another process";
            const cause = new token_refresh_error_js_1.TokenRefreshError(sub, msg);
            await hooks.onDelete?.call(null, sub, cause);
            throw cause;
          }
          const { dpopKey, authMethod, tokenSet } = storedSession;
          if (sub !== tokenSet.sub) {
            throw new token_refresh_error_js_1.TokenRefreshError(sub, "Stored session sub mismatch");
          }
          if (!tokenSet.refresh_token) {
            throw new token_refresh_error_js_1.TokenRefreshError(sub, "No refresh token available");
          }
          const server = await serverFactory.fromIssuer(tokenSet.iss, authMethod, dpopKey);
          signal?.throwIfAborted();
          try {
            const newTokenSet = await server.refresh(tokenSet);
            if (sub !== newTokenSet.sub) {
              throw new token_refresh_error_js_1.TokenRefreshError(sub, "Token set sub mismatch");
            }
            return {
              dpopKey,
              tokenSet: newTokenSet,
              authMethod: server.authMethod
            };
          } catch (cause) {
            if (cause instanceof oauth_response_error_js_1.OAuthResponseError && cause.status === 400 && cause.error === "invalid_grant") {
              if (!runtime.hasImplementationLock) {
                await new Promise((r) => setTimeout(r, 1e3));
                const stored = await this.getStored(sub);
                if (stored === void 0) {
                  const msg2 = "The session was deleted by another process";
                  throw new token_refresh_error_js_1.TokenRefreshError(sub, msg2, { cause });
                } else if (stored.tokenSet.access_token !== tokenSet.access_token || stored.tokenSet.refresh_token !== tokenSet.refresh_token) {
                  return stored;
                } else {
                }
              }
              const msg = cause.errorDescription ?? "The session was revoked";
              throw new token_refresh_error_js_1.TokenRefreshError(sub, msg, { cause });
            }
            throw cause;
          }
        }, sessionStore, {
          isStale: (sub, { tokenSet }) => {
            return tokenSet.expires_at != null && new Date(tokenSet.expires_at).getTime() < Date.now() + // Add some lee way to ensure the token is not expired when it
            // reaches the server.
            1e4 + // Add some randomness to reduce the chances of multiple
            // instances trying to refresh the token at the same.
            3e4 * Math.random();
          },
          onStoreError: async (err, sub, { tokenSet, dpopKey, authMethod }) => {
            try {
              const server = await serverFactory.fromIssuer(tokenSet.iss, authMethod, dpopKey);
              await server.revoke(tokenSet.refresh_token ?? tokenSet.access_token);
            } catch {
            }
            try {
              await this.delStored(sub, err);
            } catch {
            }
            throw err;
          },
          deleteOnError: isExpectedSessionError
        });
        Object.defineProperty(this, "runtime", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: runtime
        });
        Object.defineProperty(this, "hooks", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: hooks
        });
      }
      async getStored(sub, options) {
        return super.getStored(sub, options);
      }
      async setStored(sub, session) {
        if (sub !== session.tokenSet.sub) {
          throw new TypeError("Token set does not match the expected sub");
        }
        await super.setStored(sub, session);
        await this.hooks.onUpdate?.call(null, sub, session);
      }
      async delStored(sub, cause) {
        await super.delStored(sub, cause);
        await this.hooks.onDelete?.call(null, sub, cause);
      }
      /**
       * @deprecated Use {@link getSession} instead
       * @internal (not really deprecated)
       */
      async get(sub, options) {
        const session = await this.runtime.usingLock(`@atproto-oauth-client-${sub}`, async () => {
          const env_1 = { stack: [], error: void 0, hasError: false };
          try {
            const signal = AbortSignal.timeout(3e4);
            const abortController = __addDisposableResource(env_1, (0, util_js_1.combineSignals)([options?.signal, signal]), false);
            return await super.get(sub, {
              ...options,
              signal: abortController.signal
            });
          } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
          } finally {
            __disposeResources(env_1);
          }
        });
        if (sub !== session.tokenSet.sub) {
          throw new Error("Token set does not match the expected sub");
        }
        return session;
      }
      /**
       * @param refresh When `true`, the credentials will be refreshed even if they
       * are not expired. When `false`, the credentials will not be refreshed even
       * if they are expired. When `undefined`, the credentials will be refreshed
       * if, and only if, they are (about to be) expired. Defaults to `undefined`.
       */
      async getSession(sub, refresh = "auto") {
        return this.get(sub, {
          noCache: refresh === true,
          allowStale: refresh === false
        });
      }
    };
    exports.SessionGetter = SessionGetter;
  }
});

// node_modules/@atproto/oauth-client/dist/types.js
var require_types3 = __commonJS({
  "node_modules/@atproto/oauth-client/dist/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.clientMetadataSchema = void 0;
    var zod_1 = require_zod();
    var oauth_types_1 = require_dist11();
    exports.clientMetadataSchema = oauth_types_1.oauthClientMetadataSchema.extend({
      client_id: zod_1.z.union([
        oauth_types_1.oauthClientIdDiscoverableSchema,
        oauth_types_1.oauthClientIdLoopbackSchema
      ])
    });
  }
});

// node_modules/@atproto/oauth-client/dist/validate-client-metadata.js
var require_validate_client_metadata = __commonJS({
  "node_modules/@atproto/oauth-client/dist/validate-client-metadata.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateClientMetadata = validateClientMetadata;
    var oauth_types_1 = require_dist11();
    var constants_js_1 = require_constants3();
    var types_js_1 = require_types3();
    function validateClientMetadata(input, keyset) {
      if (!input.jwks && !input.jwks_uri && keyset?.size) {
        input = { ...input, jwks: keyset.toJSON() };
      }
      const metadata = types_js_1.clientMetadataSchema.parse(input);
      if (metadata.client_id.startsWith("http:")) {
        (0, oauth_types_1.assertOAuthLoopbackClientId)(metadata.client_id);
      } else {
        (0, oauth_types_1.assertOAuthDiscoverableClientId)(metadata.client_id);
      }
      const scopes = metadata.scope?.split(" ");
      if (!scopes?.includes("atproto")) {
        throw new TypeError(`Client metadata must include the "atproto" scope`);
      }
      if (!metadata.response_types.includes("code")) {
        throw new TypeError(`"response_types" must include "code"`);
      }
      if (!metadata.grant_types.includes("authorization_code")) {
        throw new TypeError(`"grant_types" must include "authorization_code"`);
      }
      const method = metadata.token_endpoint_auth_method;
      const methodAlg = metadata.token_endpoint_auth_signing_alg;
      switch (method) {
        case "none":
          if (methodAlg) {
            throw new TypeError(`"token_endpoint_auth_signing_alg" must not be provided when "token_endpoint_auth_method" is "${method}"`);
          }
          break;
        case "private_key_jwt": {
          if (!methodAlg) {
            throw new TypeError(`"token_endpoint_auth_signing_alg" must be provided when "token_endpoint_auth_method" is "${method}"`);
          }
          if (!keyset) {
            throw new TypeError(`Client authentication method "${method}" requires a keyset`);
          }
          const signingKeys = Array.from(keyset.list({ usage: "sign" })).filter((key) => key.kid);
          if (!signingKeys.length) {
            throw new TypeError(`Client authentication method "${method}" requires at least one active signing key with a "kid" property`);
          }
          if (!signingKeys.some((key) => key.algorithms.includes(constants_js_1.FALLBACK_ALG))) {
            throw new TypeError(`Client authentication method "${method}" requires at least one active "${constants_js_1.FALLBACK_ALG}" signing key`);
          }
          if (metadata.jwks) {
            for (const key of signingKeys) {
              if (!metadata.jwks.keys.some((k) => k.kid === key.kid && !k.revoked)) {
                throw new TypeError(`Missing or inactive key "${key.kid}" in jwks. Make sure that every signing key of the Keyset is declared as an active key in the Metadata's JWKS.`);
              }
            }
          } else if (metadata.jwks_uri) {
          } else {
            throw new TypeError(`Client authentication method "${method}" requires a JWKS`);
          }
          break;
        }
        default:
          throw new TypeError(`Unsupported "token_endpoint_auth_method" value: ${method}`);
      }
      return metadata;
    }
  }
});

// node_modules/@atproto/oauth-client/dist/oauth-client.js
var require_oauth_client = __commonJS({
  "node_modules/@atproto/oauth-client/dist/oauth-client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OAuthClient = exports.Keyset = exports.Key = void 0;
    var jwk_1 = require_dist();
    Object.defineProperty(exports, "Key", { enumerable: true, get: function() {
      return jwk_1.Key;
    } });
    Object.defineProperty(exports, "Keyset", { enumerable: true, get: function() {
      return jwk_1.Keyset;
    } });
    var oauth_types_1 = require_dist11();
    var did_resolver_1 = require_dist9();
    var identity_resolver_1 = require_dist12();
    var simple_store_memory_1 = require_dist6();
    var constants_js_1 = require_constants3();
    var auth_method_unsatisfiable_error_js_1 = require_auth_method_unsatisfiable_error();
    var token_revoked_error_js_1 = require_token_revoked_error();
    var identity_resolver_js_1 = require_identity_resolver2();
    var oauth_authorization_server_metadata_resolver_js_1 = require_oauth_authorization_server_metadata_resolver();
    var oauth_callback_error_js_1 = require_oauth_callback_error();
    var oauth_client_auth_js_1 = require_oauth_client_auth();
    var oauth_protected_resource_metadata_resolver_js_1 = require_oauth_protected_resource_metadata_resolver();
    var oauth_resolver_js_1 = require_oauth_resolver();
    var oauth_server_factory_js_1 = require_oauth_server_factory();
    var oauth_session_js_1 = require_oauth_session();
    var runtime_js_1 = require_runtime();
    var session_getter_js_1 = require_session_getter();
    var validate_client_metadata_js_1 = require_validate_client_metadata();
    var OAuthClient = class {
      static async fetchMetadata({ clientId, fetch: fetch2 = globalThis.fetch, signal }) {
        signal?.throwIfAborted();
        const request = new Request(clientId, {
          redirect: "error",
          signal
        });
        const response = await fetch2(request);
        if (response.status !== 200) {
          response.body?.cancel?.();
          throw new TypeError(`Failed to fetch client metadata: ${response.status}`);
        }
        const mime = response.headers.get("content-type")?.split(";")[0].trim();
        if (mime !== "application/json") {
          response.body?.cancel?.();
          throw new TypeError(`Invalid client metadata content type: ${mime}`);
        }
        const json = await response.json();
        signal?.throwIfAborted();
        return oauth_types_1.oauthClientMetadataSchema.parse(json);
      }
      constructor(options) {
        Object.defineProperty(this, "clientMetadata", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "responseMode", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "keyset", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "runtime", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "fetch", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "oauthResolver", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "serverFactory", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "sessionGetter", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "stateStore", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        const { stateStore, sessionStore, dpopNonceCache = new simple_store_memory_1.SimpleStoreMemory({ ttl: 6e4, max: 100 }), authorizationServerMetadataCache = new simple_store_memory_1.SimpleStoreMemory({
          ttl: 6e4,
          max: 100
        }), protectedResourceMetadataCache = new simple_store_memory_1.SimpleStoreMemory({
          ttl: 6e4,
          max: 100
        }), responseMode, clientMetadata, runtimeImplementation, keyset } = options;
        this.keyset = keyset ? keyset instanceof jwk_1.Keyset ? keyset : new jwk_1.Keyset(keyset) : void 0;
        this.clientMetadata = (0, validate_client_metadata_js_1.validateClientMetadata)(clientMetadata, this.keyset);
        this.responseMode = responseMode;
        this.runtime = new runtime_js_1.Runtime(runtimeImplementation);
        this.fetch = options.fetch ?? globalThis.fetch;
        this.oauthResolver = new oauth_resolver_js_1.OAuthResolver((0, identity_resolver_js_1.createIdentityResolver)(options), new oauth_protected_resource_metadata_resolver_js_1.OAuthProtectedResourceMetadataResolver(protectedResourceMetadataCache, this.fetch, { allowHttpResource: options.allowHttp }), new oauth_authorization_server_metadata_resolver_js_1.OAuthAuthorizationServerMetadataResolver(authorizationServerMetadataCache, this.fetch, { allowHttpIssuer: options.allowHttp }));
        this.serverFactory = new oauth_server_factory_js_1.OAuthServerFactory(this.clientMetadata, this.runtime, this.oauthResolver, this.fetch, this.keyset, dpopNonceCache);
        this.stateStore = stateStore;
        this.sessionGetter = new session_getter_js_1.SessionGetter(sessionStore, this.serverFactory, this.runtime, options);
      }
      // Exposed as public API for convenience
      get identityResolver() {
        return this.oauthResolver.identityResolver;
      }
      get jwks() {
        return this.keyset?.publicJwks ?? { keys: [] };
      }
      async authorize(input, { signal, ...options } = {}) {
        const redirectUri = options?.redirect_uri ?? this.clientMetadata.redirect_uris[0];
        if (!this.clientMetadata.redirect_uris.includes(redirectUri)) {
          throw new TypeError("Invalid redirect_uri");
        }
        const { identityInfo, metadata } = await this.oauthResolver.resolve(input, {
          signal
        });
        const pkce = await this.runtime.generatePKCE();
        const dpopKey = await this.runtime.generateKey(metadata.dpop_signing_alg_values_supported || [constants_js_1.FALLBACK_ALG]);
        const authMethod = (0, oauth_client_auth_js_1.negotiateClientAuthMethod)(metadata, this.clientMetadata, this.keyset);
        const state = await this.runtime.generateNonce();
        await this.stateStore.set(state, {
          iss: metadata.issuer,
          dpopKey,
          authMethod,
          verifier: pkce.verifier,
          appState: options?.state
        });
        const parameters = {
          ...options,
          client_id: this.clientMetadata.client_id,
          redirect_uri: redirectUri,
          code_challenge: pkce.challenge,
          code_challenge_method: pkce.method,
          state,
          login_hint: identityInfo ? identityInfo.handle !== identity_resolver_1.HANDLE_INVALID ? identityInfo.handle : identityInfo.did : void 0,
          response_mode: this.responseMode,
          response_type: "code",
          scope: options?.scope ?? this.clientMetadata.scope
        };
        const authorizationUrl = new URL(metadata.authorization_endpoint);
        if (authorizationUrl.protocol !== "https:" && authorizationUrl.protocol !== "http:") {
          throw new TypeError(`Invalid authorization endpoint protocol: ${authorizationUrl.protocol}`);
        }
        if (metadata.pushed_authorization_request_endpoint) {
          const server = await this.serverFactory.fromMetadata(metadata, authMethod, dpopKey);
          const parResponse = await server.request("pushed_authorization_request", parameters);
          authorizationUrl.searchParams.set("client_id", this.clientMetadata.client_id);
          authorizationUrl.searchParams.set("request_uri", parResponse.request_uri);
          return authorizationUrl;
        } else if (metadata.require_pushed_authorization_requests) {
          throw new Error("Server requires pushed authorization requests (PAR) but no PAR endpoint is available");
        } else {
          for (const [key, value] of Object.entries(parameters)) {
            if (value)
              authorizationUrl.searchParams.set(key, String(value));
          }
          const urlLength = authorizationUrl.pathname.length + authorizationUrl.search.length;
          if (urlLength < 2048) {
            return authorizationUrl;
          } else if (!metadata.pushed_authorization_request_endpoint) {
            throw new Error("Login URL too long");
          }
        }
        throw new Error("Server does not support pushed authorization requests (PAR)");
      }
      /**
       * This method allows the client to proactively revoke the request_uri it
       * created through PAR.
       */
      async abortRequest(authorizeUrl) {
        const requestUri = authorizeUrl.searchParams.get("request_uri");
        if (!requestUri)
          return;
      }
      async callback(params, options = {}) {
        const responseJwt = params.get("response");
        if (responseJwt != null) {
          throw new oauth_callback_error_js_1.OAuthCallbackError(params, "JARM not supported");
        }
        const issuerParam = params.get("iss");
        const stateParam = params.get("state");
        const errorParam = params.get("error");
        const codeParam = params.get("code");
        if (!stateParam) {
          throw new oauth_callback_error_js_1.OAuthCallbackError(params, 'Missing "state" parameter');
        }
        const stateData = await this.stateStore.get(stateParam);
        if (stateData) {
          await this.stateStore.del(stateParam);
        } else {
          throw new oauth_callback_error_js_1.OAuthCallbackError(params, `Unknown authorization session "${stateParam}"`);
        }
        try {
          if (errorParam != null) {
            throw new oauth_callback_error_js_1.OAuthCallbackError(params, void 0, stateData.appState);
          }
          if (!codeParam) {
            throw new oauth_callback_error_js_1.OAuthCallbackError(params, 'Missing "code" query param', stateData.appState);
          }
          const server = await this.serverFactory.fromIssuer(stateData.iss, stateData.authMethod, stateData.dpopKey);
          if (issuerParam != null) {
            if (!server.issuer) {
              throw new oauth_callback_error_js_1.OAuthCallbackError(params, "Issuer not found in metadata", stateData.appState);
            }
            if (server.issuer !== issuerParam) {
              throw new oauth_callback_error_js_1.OAuthCallbackError(params, "Issuer mismatch", stateData.appState);
            }
          } else if (server.serverMetadata.authorization_response_iss_parameter_supported) {
            throw new oauth_callback_error_js_1.OAuthCallbackError(params, "iss missing from the response", stateData.appState);
          }
          const tokenSet = await server.exchangeCode(codeParam, stateData.verifier, options?.redirect_uri ?? server.clientMetadata.redirect_uris[0]);
          try {
            await this.revoke(tokenSet.sub);
          } catch {
          }
          try {
            await this.sessionGetter.setStored(tokenSet.sub, {
              dpopKey: stateData.dpopKey,
              authMethod: server.authMethod,
              tokenSet
            });
            const session = this.createSession(server, tokenSet.sub);
            return { session, state: stateData.appState ?? null };
          } catch (err) {
            await server.revoke(tokenSet.refresh_token || tokenSet.access_token);
            throw err;
          }
        } catch (err) {
          throw oauth_callback_error_js_1.OAuthCallbackError.from(err, params, stateData.appState);
        }
      }
      /**
       * Load a stored session. This will refresh the token only if needed (about to
       * expire) by default.
       *
       * @see {@link SessionGetter.restore}
       */
      async restore(sub, refresh = "auto") {
        (0, did_resolver_1.assertAtprotoDid)(sub);
        const { dpopKey, authMethod, tokenSet } = await this.sessionGetter.getSession(sub, refresh);
        try {
          const server = await this.serverFactory.fromIssuer(tokenSet.iss, authMethod, dpopKey, {
            noCache: refresh === true,
            allowStale: refresh === false
          });
          return this.createSession(server, sub);
        } catch (err) {
          if (err instanceof auth_method_unsatisfiable_error_js_1.AuthMethodUnsatisfiableError) {
            await this.sessionGetter.delStored(sub, err);
          }
          throw err;
        }
      }
      async revoke(sub) {
        (0, did_resolver_1.assertAtprotoDid)(sub);
        const res = await this.sessionGetter.getSession(sub, false).catch((err) => {
          if ((0, session_getter_js_1.isExpectedSessionError)(err))
            return null;
          throw err;
        });
        if (!res)
          return;
        const { dpopKey, authMethod, tokenSet } = res;
        try {
          const server = await this.serverFactory.fromIssuer(tokenSet.iss, authMethod, dpopKey);
          await server.revoke(tokenSet.access_token);
        } finally {
          await this.sessionGetter.delStored(sub, new token_revoked_error_js_1.TokenRevokedError(sub));
        }
      }
      createSession(server, sub) {
        return new oauth_session_js_1.OAuthSession(server, sub, this.sessionGetter, this.fetch);
      }
    };
    exports.OAuthClient = OAuthClient;
  }
});

// node_modules/@atproto/oauth-client/dist/runtime-implementation.js
var require_runtime_implementation = __commonJS({
  "node_modules/@atproto/oauth-client/dist/runtime-implementation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@atproto/oauth-client/dist/state-store.js
var require_state_store = __commonJS({
  "node_modules/@atproto/oauth-client/dist/state-store.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@atproto/oauth-client/dist/index.js
var require_dist13 = __commonJS({
  "node_modules/@atproto/oauth-client/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FetchResponseError = exports.FetchRequestError = exports.FetchError = void 0;
    require_es_symbol_dispose();
    __exportStar(require_dist9(), exports);
    var fetch_1 = require_dist8();
    Object.defineProperty(exports, "FetchError", { enumerable: true, get: function() {
      return fetch_1.FetchError;
    } });
    Object.defineProperty(exports, "FetchRequestError", { enumerable: true, get: function() {
      return fetch_1.FetchRequestError;
    } });
    Object.defineProperty(exports, "FetchResponseError", { enumerable: true, get: function() {
      return fetch_1.FetchResponseError;
    } });
    __exportStar(require_dist10(), exports);
    __exportStar(require_dist4(), exports);
    __exportStar(require_dist(), exports);
    __exportStar(require_dist11(), exports);
    __exportStar(require_lock(), exports);
    __exportStar(require_oauth_authorization_server_metadata_resolver(), exports);
    __exportStar(require_oauth_callback_error(), exports);
    __exportStar(require_oauth_client(), exports);
    __exportStar(require_oauth_protected_resource_metadata_resolver(), exports);
    __exportStar(require_oauth_resolver_error(), exports);
    __exportStar(require_oauth_response_error(), exports);
    __exportStar(require_oauth_server_agent(), exports);
    __exportStar(require_oauth_server_factory(), exports);
    __exportStar(require_oauth_session(), exports);
    __exportStar(require_runtime_implementation(), exports);
    __exportStar(require_session_getter(), exports);
    __exportStar(require_state_store(), exports);
    __exportStar(require_types3(), exports);
    __exportStar(require_token_invalid_error(), exports);
    __exportStar(require_token_refresh_error(), exports);
    __exportStar(require_token_revoked_error(), exports);
  }
});

// node_modules/@atproto/oauth-client-browser/dist/indexed-db/util.js
var require_util11 = __commonJS({
  "node_modules/@atproto/oauth-client-browser/dist/indexed-db/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.handleRequest = handleRequest;
    exports.promisify = promisify;
    function handleRequest(request, onSuccess, onError) {
      const cleanup = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error);
      };
      const success = () => {
        onSuccess(request.result);
        cleanup();
      };
      const error = () => {
        onError(request.error || new Error("Unknown error"));
        cleanup();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error);
    }
    function promisify(request) {
      return new Promise((resolve, reject) => {
        handleRequest(request, resolve, reject);
      });
    }
  }
});

// node_modules/@atproto/oauth-client-browser/dist/indexed-db/db-index.js
var require_db_index = __commonJS({
  "node_modules/@atproto/oauth-client-browser/dist/indexed-db/db-index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DBIndex = void 0;
    var util_js_1 = require_util11();
    var DBIndex = class {
      constructor(idbIndex) {
        Object.defineProperty(this, "idbIndex", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: idbIndex
        });
      }
      count(query) {
        return (0, util_js_1.promisify)(this.idbIndex.count(query));
      }
      get(query) {
        return (0, util_js_1.promisify)(this.idbIndex.get(query));
      }
      getKey(query) {
        return (0, util_js_1.promisify)(this.idbIndex.getKey(query));
      }
      getAll(query, count) {
        return (0, util_js_1.promisify)(this.idbIndex.getAll(query, count));
      }
      getAllKeys(query, count) {
        return (0, util_js_1.promisify)(this.idbIndex.getAllKeys(query, count));
      }
      deleteAll(query) {
        return new Promise((resolve, reject) => {
          const result = this.idbIndex.openCursor(query);
          result.onsuccess = function(event) {
            const cursor = event.target.result;
            if (cursor) {
              cursor.delete();
              cursor.continue();
            } else {
              resolve();
            }
          };
          result.onerror = function(event) {
            reject(event.target?.error || new Error("Unexpected error"));
          };
        });
      }
    };
    exports.DBIndex = DBIndex;
  }
});

// node_modules/@atproto/oauth-client-browser/dist/indexed-db/db-object-store.js
var require_db_object_store = __commonJS({
  "node_modules/@atproto/oauth-client-browser/dist/indexed-db/db-object-store.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DBObjectStore = void 0;
    var db_index_js_1 = require_db_index();
    var util_js_1 = require_util11();
    var DBObjectStore = class {
      constructor(idbObjStore) {
        Object.defineProperty(this, "idbObjStore", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: idbObjStore
        });
      }
      get name() {
        return this.idbObjStore.name;
      }
      index(name) {
        return new db_index_js_1.DBIndex(this.idbObjStore.index(name));
      }
      get(key) {
        return (0, util_js_1.promisify)(this.idbObjStore.get(key));
      }
      getKey(query) {
        return (0, util_js_1.promisify)(this.idbObjStore.getKey(query));
      }
      getAll(query, count) {
        return (0, util_js_1.promisify)(this.idbObjStore.getAll(query, count));
      }
      getAllKeys(query, count) {
        return (0, util_js_1.promisify)(this.idbObjStore.getAllKeys(query, count));
      }
      add(value, key) {
        return (0, util_js_1.promisify)(this.idbObjStore.add(value, key));
      }
      put(value, key) {
        return (0, util_js_1.promisify)(this.idbObjStore.put(value, key));
      }
      delete(key) {
        return (0, util_js_1.promisify)(this.idbObjStore.delete(key));
      }
      clear() {
        return (0, util_js_1.promisify)(this.idbObjStore.clear());
      }
    };
    exports.DBObjectStore = DBObjectStore;
  }
});

// node_modules/@atproto/oauth-client-browser/dist/indexed-db/db-transaction.js
var require_db_transaction = __commonJS({
  "node_modules/@atproto/oauth-client-browser/dist/indexed-db/db-transaction.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _DBTransaction_tx;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DBTransaction = void 0;
    require_esnext_symbol_dispose();
    var db_object_store_js_1 = require_db_object_store();
    var DBTransaction = class {
      constructor(tx) {
        _DBTransaction_tx.set(this, void 0);
        __classPrivateFieldSet(this, _DBTransaction_tx, tx, "f");
        const onAbort = () => {
          cleanup();
        };
        const onComplete = () => {
          cleanup();
        };
        const cleanup = () => {
          __classPrivateFieldSet(this, _DBTransaction_tx, null, "f");
          tx.removeEventListener("abort", onAbort);
          tx.removeEventListener("complete", onComplete);
        };
        tx.addEventListener("abort", onAbort);
        tx.addEventListener("complete", onComplete);
      }
      get tx() {
        if (!__classPrivateFieldGet(this, _DBTransaction_tx, "f"))
          throw new Error("Transaction already ended");
        return __classPrivateFieldGet(this, _DBTransaction_tx, "f");
      }
      async abort() {
        const { tx } = this;
        __classPrivateFieldSet(this, _DBTransaction_tx, null, "f");
        tx.abort();
      }
      async commit() {
        const { tx } = this;
        __classPrivateFieldSet(this, _DBTransaction_tx, null, "f");
        tx.commit?.();
      }
      objectStore(name) {
        const store = this.tx.objectStore(name);
        return new db_object_store_js_1.DBObjectStore(store);
      }
      [(_DBTransaction_tx = /* @__PURE__ */ new WeakMap(), Symbol.dispose)]() {
        if (__classPrivateFieldGet(this, _DBTransaction_tx, "f"))
          this.commit();
      }
    };
    exports.DBTransaction = DBTransaction;
  }
});

// node_modules/@atproto/oauth-client-browser/dist/indexed-db/db.js
var require_db = __commonJS({
  "node_modules/@atproto/oauth-client-browser/dist/indexed-db/db.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _DB_db;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DB = void 0;
    require_esnext_symbol_dispose();
    var db_transaction_js_1 = require_db_transaction();
    var DB = class _DB {
      static async open(dbName, migrations, txOptions) {
        const db = await new Promise((resolve, reject) => {
          const request = indexedDB.open(dbName, migrations.length);
          request.onerror = () => reject(request.error);
          request.onsuccess = () => resolve(request.result);
          request.onupgradeneeded = ({ oldVersion, newVersion }) => {
            const db2 = request.result;
            try {
              for (let version = oldVersion; version < (newVersion ?? migrations.length); ++version) {
                const migration = migrations[version];
                if (migration)
                  migration(db2);
                else
                  throw new Error(`Missing migration for version ${version}`);
              }
            } catch (err) {
              db2.close();
              reject(err);
            }
          };
        });
        return new _DB(db, txOptions);
      }
      constructor(db, txOptions) {
        Object.defineProperty(this, "txOptions", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: txOptions
        });
        _DB_db.set(this, void 0);
        __classPrivateFieldSet(this, _DB_db, db, "f");
        const cleanup = () => {
          __classPrivateFieldSet(this, _DB_db, null, "f");
          db.removeEventListener("versionchange", cleanup);
          db.removeEventListener("close", cleanup);
          db.close();
        };
        db.addEventListener("versionchange", cleanup);
        db.addEventListener("close", cleanup);
      }
      get db() {
        if (!__classPrivateFieldGet(this, _DB_db, "f"))
          throw new Error("Database closed");
        return __classPrivateFieldGet(this, _DB_db, "f");
      }
      get name() {
        return this.db.name;
      }
      get objectStoreNames() {
        return this.db.objectStoreNames;
      }
      get version() {
        return this.db.version;
      }
      async transaction(storeNames, mode, run) {
        return new Promise(async (resolve, reject) => {
          try {
            const tx = this.db.transaction(storeNames, mode, this.txOptions);
            let result = { done: false };
            tx.oncomplete = () => {
              if (result.done)
                resolve(result.value);
              else
                reject(new Error("Transaction completed without result"));
            };
            tx.onerror = () => reject(tx.error);
            tx.onabort = () => reject(tx.error || new Error("Transaction aborted"));
            try {
              const value = await run(new db_transaction_js_1.DBTransaction(tx));
              result = { done: true, value };
              tx.commit();
            } catch (err) {
              tx.abort();
              throw err;
            }
          } catch (err) {
            reject(err);
          }
        });
      }
      close() {
        const { db } = this;
        __classPrivateFieldSet(this, _DB_db, null, "f");
        db.close();
      }
      [(_DB_db = /* @__PURE__ */ new WeakMap(), Symbol.dispose)]() {
        if (__classPrivateFieldGet(this, _DB_db, "f"))
          return this.close();
      }
    };
    exports.DB = DB;
  }
});

// node_modules/@atproto/oauth-client-browser/dist/indexed-db/index.js
var require_indexed_db = __commonJS({
  "node_modules/@atproto/oauth-client-browser/dist/indexed-db/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_db(), exports);
    __exportStar(require_db_index(), exports);
    __exportStar(require_db_object_store(), exports);
    __exportStar(require_db_transaction(), exports);
  }
});

// node_modules/@atproto/oauth-client-browser/dist/browser-oauth-database.js
var require_browser_oauth_database = __commonJS({
  "node_modules/@atproto/oauth-client-browser/dist/browser-oauth-database.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _BrowserOAuthDatabase_dbPromise;
    var _BrowserOAuthDatabase_cleanupInterval;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BrowserOAuthDatabase = void 0;
    var jwk_webcrypto_1 = require_dist3();
    var index_js_1 = require_indexed_db();
    function encodeKey(key) {
      if (!(key instanceof jwk_webcrypto_1.WebcryptoKey) || !key.kid) {
        throw new Error("Invalid key object");
      }
      return {
        keyId: key.kid,
        keyPair: key.cryptoKeyPair
      };
    }
    async function decodeKey(encoded) {
      return jwk_webcrypto_1.WebcryptoKey.fromKeypair(encoded.keyPair, encoded.keyId);
    }
    var STORES = [
      "state",
      "session",
      "didCache",
      "dpopNonceCache",
      "handleCache",
      "authorizationServerMetadataCache",
      "protectedResourceMetadataCache"
    ];
    var BrowserOAuthDatabase = class {
      constructor(options) {
        _BrowserOAuthDatabase_dbPromise.set(this, void 0);
        _BrowserOAuthDatabase_cleanupInterval.set(this, void 0);
        __classPrivateFieldSet(this, _BrowserOAuthDatabase_dbPromise, index_js_1.DB.open(options?.name ?? "@atproto-oauth-client", [
          (db) => {
            for (const name of STORES) {
              const store = db.createObjectStore(name, { autoIncrement: true });
              store.createIndex("expiresAt", "expiresAt", { unique: false });
            }
          }
        ], { durability: options?.durability ?? "strict" }), "f");
        __classPrivateFieldSet(this, _BrowserOAuthDatabase_cleanupInterval, setInterval(() => {
          void this.cleanup();
        }, options?.cleanupInterval ?? 3e4), "f");
      }
      async run(storeName, mode, fn) {
        const db = await __classPrivateFieldGet(this, _BrowserOAuthDatabase_dbPromise, "f");
        return await db.transaction([storeName], mode, (tx) => fn(tx.objectStore(storeName)));
      }
      createStore(name, { encode: encode4, decode: decode4, expiresAt }) {
        return {
          get: async (key) => {
            const item = await this.run(name, "readonly", (store) => store.get(key));
            if (item === void 0)
              return void 0;
            if (item.expiresAt != null && new Date(item.expiresAt) < /* @__PURE__ */ new Date()) {
              await this.run(name, "readwrite", (store) => store.delete(key));
              return void 0;
            }
            return decode4(item.value);
          },
          set: async (key, value) => {
            const item = {
              value: await encode4(value),
              expiresAt: expiresAt(value)?.toISOString()
            };
            await this.run(name, "readwrite", (store) => store.put(item, key));
          },
          del: async (key) => {
            await this.run(name, "readwrite", (store) => store.delete(key));
          }
        };
      }
      getSessionStore() {
        return this.createStore("session", {
          expiresAt: ({ tokenSet }) => tokenSet.refresh_token || tokenSet.expires_at == null ? null : new Date(tokenSet.expires_at),
          encode: ({ dpopKey, ...session }) => ({
            ...session,
            dpopKey: encodeKey(dpopKey)
          }),
          decode: async ({ dpopKey, ...encoded }) => ({
            ...encoded,
            dpopKey: await decodeKey(dpopKey)
          })
        });
      }
      getStateStore() {
        return this.createStore("state", {
          expiresAt: (_value) => new Date(Date.now() + 10 * 6e4),
          encode: ({ dpopKey, ...session }) => ({
            ...session,
            dpopKey: encodeKey(dpopKey)
          }),
          decode: async ({ dpopKey, ...encoded }) => ({
            ...encoded,
            dpopKey: await decodeKey(dpopKey)
          })
        });
      }
      getDpopNonceCache() {
        return this.createStore("dpopNonceCache", {
          expiresAt: (_value) => new Date(Date.now() + 6e5),
          encode: (value) => value,
          decode: (encoded) => encoded
        });
      }
      getDidCache() {
        return this.createStore("didCache", {
          expiresAt: (_value) => new Date(Date.now() + 6e4),
          encode: (value) => value,
          decode: (encoded) => encoded
        });
      }
      getHandleCache() {
        return this.createStore("handleCache", {
          expiresAt: (_value) => new Date(Date.now() + 6e4),
          encode: (value) => value,
          decode: (encoded) => encoded
        });
      }
      getAuthorizationServerMetadataCache() {
        return this.createStore("authorizationServerMetadataCache", {
          expiresAt: (_value) => new Date(Date.now() + 6e4),
          encode: (value) => value,
          decode: (encoded) => encoded
        });
      }
      getProtectedResourceMetadataCache() {
        return this.createStore("protectedResourceMetadataCache", {
          expiresAt: (_value) => new Date(Date.now() + 6e4),
          encode: (value) => value,
          decode: (encoded) => encoded
        });
      }
      async cleanup() {
        const db = await __classPrivateFieldGet(this, _BrowserOAuthDatabase_dbPromise, "f");
        for (const name of STORES) {
          await db.transaction([name], "readwrite", (tx) => tx.objectStore(name).index("expiresAt").deleteAll(IDBKeyRange.upperBound(Date.now())));
        }
      }
      async [(_BrowserOAuthDatabase_dbPromise = /* @__PURE__ */ new WeakMap(), _BrowserOAuthDatabase_cleanupInterval = /* @__PURE__ */ new WeakMap(), Symbol.asyncDispose)]() {
        clearInterval(__classPrivateFieldGet(this, _BrowserOAuthDatabase_cleanupInterval, "f"));
        __classPrivateFieldSet(this, _BrowserOAuthDatabase_cleanupInterval, void 0, "f");
        const dbPromise = __classPrivateFieldGet(this, _BrowserOAuthDatabase_dbPromise, "f");
        __classPrivateFieldSet(this, _BrowserOAuthDatabase_dbPromise, Promise.reject(new Error("Database has been disposed")), "f");
        __classPrivateFieldGet(this, _BrowserOAuthDatabase_dbPromise, "f").catch(() => null);
        const db = await dbPromise.catch(() => null);
        if (db)
          await (db[Symbol.asyncDispose] || db[Symbol.dispose]).call(db);
      }
    };
    exports.BrowserOAuthDatabase = BrowserOAuthDatabase;
  }
});

// node_modules/@atproto/oauth-client-browser/dist/browser-runtime-implementation.js
var require_browser_runtime_implementation = __commonJS({
  "node_modules/@atproto/oauth-client-browser/dist/browser-runtime-implementation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BrowserRuntimeImplementation = void 0;
    var jwk_webcrypto_1 = require_dist3();
    var nativeRequestLock = typeof navigator !== "undefined" && navigator.locks?.request ? (name, fn) => navigator.locks.request(name, { mode: "exclusive" }, async () => fn()) : void 0;
    var BrowserRuntimeImplementation = class {
      constructor() {
        Object.defineProperty(this, "requestLock", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: nativeRequestLock
        });
        if (typeof crypto !== "object" || !crypto?.subtle) {
          throw new Error("Crypto with CryptoSubtle is required. If running in a browser, make sure the current page is loaded over HTTPS.");
        }
        if (!this.requestLock) {
          console.warn("Locks API not available. You should consider using a more recent browser.");
        }
      }
      async createKey(algs) {
        return jwk_webcrypto_1.WebcryptoKey.generate(algs);
      }
      getRandomValues(byteLength) {
        return crypto.getRandomValues(new Uint8Array(byteLength));
      }
      async digest(data, { name }) {
        switch (name) {
          case "sha256":
          case "sha384":
          case "sha512": {
            const buf = await crypto.subtle.digest(`SHA-${name.slice(3)}`, data);
            return new Uint8Array(buf);
          }
          default:
            throw new Error(`Unsupported digest algorithm: ${name}`);
        }
      }
    };
    exports.BrowserRuntimeImplementation = BrowserRuntimeImplementation;
  }
});

// node_modules/@atproto/oauth-client-browser/dist/errors.js
var require_errors3 = __commonJS({
  "node_modules/@atproto/oauth-client-browser/dist/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoginContinuedInParentWindowError = void 0;
    var LoginContinuedInParentWindowError = class extends Error {
      constructor() {
        super("Login complete, please close the popup window.");
        Object.defineProperty(this, "code", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "LOGIN_CONTINUED_IN_PARENT_WINDOW"
        });
      }
    };
    exports.LoginContinuedInParentWindowError = LoginContinuedInParentWindowError;
  }
});

// node_modules/@atproto/oauth-client-browser/dist/util.js
var require_util12 = __commonJS({
  "node_modules/@atproto/oauth-client-browser/dist/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildLoopbackClientId = buildLoopbackClientId;
    var oauth_types_1 = require_dist11();
    function buildLoopbackClientId(location2, localhost = "127.0.0.1") {
      if (!(0, oauth_types_1.isLoopbackHost)(location2.hostname)) {
        throw new TypeError(`Expected a loopback host, got ${location2.hostname}`);
      }
      const redirectUri = `http://${location2.hostname === "localhost" ? localhost : location2.hostname}${location2.port && !location2.port.startsWith(":") ? `:${location2.port}` : location2.port}${location2.pathname}`;
      return `http://localhost${location2.pathname === "/" ? "" : location2.pathname}?redirect_uri=${encodeURIComponent(redirectUri)}`;
    }
  }
});

// node_modules/@atproto/oauth-client-browser/dist/browser-oauth-client.js
var require_browser_oauth_client = __commonJS({
  "node_modules/@atproto/oauth-client-browser/dist/browser-oauth-client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BrowserOAuthClient = void 0;
    var oauth_client_1 = require_dist13();
    var oauth_types_1 = require_dist11();
    var browser_oauth_database_js_1 = require_browser_oauth_database();
    var browser_runtime_implementation_js_1 = require_browser_runtime_implementation();
    var errors_js_1 = require_errors3();
    var util_js_1 = require_util12();
    var NAMESPACE = `@@atproto/oauth-client-browser`;
    var POPUP_CHANNEL_NAME = `${NAMESPACE}(popup-channel)`;
    var POPUP_STATE_PREFIX = `${NAMESPACE}(popup-state):`;
    var syncChannel = new BroadcastChannel(`${NAMESPACE}(synchronization-channel:2)`);
    var runtimeImplementation = new browser_runtime_implementation_js_1.BrowserRuntimeImplementation();
    var BrowserOAuthClient2 = class _BrowserOAuthClient extends oauth_client_1.OAuthClient {
      static async load({ clientId, ...options }) {
        if (clientId.startsWith("http:")) {
          const clientMetadata = (0, oauth_types_1.atprotoLoopbackClientMetadata)(clientId);
          return new _BrowserOAuthClient({ clientMetadata, ...options });
        } else if (clientId.startsWith("https:")) {
          (0, oauth_types_1.assertOAuthDiscoverableClientId)(clientId);
          const clientMetadata = await oauth_client_1.OAuthClient.fetchMetadata({
            clientId,
            ...options
          });
          return new _BrowserOAuthClient({ ...options, clientMetadata });
        } else {
          throw new TypeError(`Invalid client id: ${clientId}`);
        }
      }
      constructor({
        clientMetadata = (0, oauth_types_1.atprotoLoopbackClientMetadata)((0, util_js_1.buildLoopbackClientId)(window.location)),
        // "fragment" is a safer default as the query params will not be sent to the server
        responseMode = "fragment",
        ...options
      }) {
        if (!globalThis.crypto?.subtle) {
          throw new Error("WebCrypto API is required");
        }
        if (!["query", "fragment"].includes(responseMode)) {
          throw new TypeError(`Invalid response mode: ${responseMode}`);
        }
        const database = new browser_oauth_database_js_1.BrowserOAuthDatabase();
        super({
          ...options,
          clientMetadata,
          responseMode,
          keyset: void 0,
          runtimeImplementation,
          sessionStore: database.getSessionStore(),
          stateStore: database.getStateStore(),
          didCache: database.getDidCache(),
          handleCache: database.getHandleCache(),
          dpopNonceCache: database.getDpopNonceCache(),
          authorizationServerMetadataCache: database.getAuthorizationServerMetadataCache(),
          protectedResourceMetadataCache: database.getProtectedResourceMetadataCache(),
          onDelete: async (sub, cause) => {
            if (localStorage.getItem(`${NAMESPACE}(sub)`) === sub) {
              localStorage.removeItem(`${NAMESPACE}(sub)`);
            }
            syncChannel.postMessage({
              name: "onDelete",
              args: [sub, cause]
            });
            return options.onDelete?.call(null, sub, cause);
          },
          onUpdate: async (sub, session) => {
            syncChannel.postMessage({
              name: "onUpdate",
              args: [sub, session]
            });
            return options.onUpdate?.call(null, sub, session);
          }
        });
        Object.defineProperty(this, "ac", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: new AbortController()
        });
        Object.defineProperty(this, "database", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.database = database;
        const { signal } = this.ac;
        syncChannel.addEventListener(
          "message",
          (event) => {
            if (event.source === window)
              return;
            const { name, args } = event.data;
            const hook = options[name];
            void hook?.(...args);
          },
          // Remove the listener when the client is disposed
          { signal }
        );
      }
      /**
       * This method will automatically restore any existing session, or attempt to
       * process login callback if the URL contains oauth parameters.
       *
       * Use {@link BrowserOAuthClient.initCallback} instead of this method if you
       * want to force a login callback. This can be esp. useful if you are using
       * this lib from a framework that has some kind of URL manipulation (like a
       * client side router).
       *
       * Use {@link BrowserOAuthClient.initRestore} instead of this method if you
       * want to only restore existing sessions, and bypass the automatic processing
       * of login callbacks.
       */
      async init(refresh) {
        const params = this.readCallbackParams();
        if (params) {
          const redirectUri = this.findRedirectUrl();
          if (redirectUri)
            return this.initCallback(params, redirectUri);
        }
        return this.initRestore(refresh);
      }
      async initRestore(refresh) {
        await fixLocation(this.clientMetadata);
        const sub = localStorage.getItem(`${NAMESPACE}(sub)`);
        if (sub) {
          try {
            const session = await this.restore(sub, refresh);
            return { session };
          } catch (err) {
            localStorage.removeItem(`${NAMESPACE}(sub)`);
            throw err;
          }
        }
      }
      async restore(sub, refresh) {
        const session = await super.restore(sub, refresh);
        localStorage.setItem(`${NAMESPACE}(sub)`, session.sub);
        return session;
      }
      async revoke(sub) {
        localStorage.removeItem(`${NAMESPACE}(sub)`);
        return super.revoke(sub);
      }
      async signIn(input, options) {
        if (options?.display === "popup") {
          return this.signInPopup(input, options);
        } else {
          return this.signInRedirect(input, options);
        }
      }
      async signInRedirect(input, options) {
        const url = await this.authorize(input, options);
        window.location.href = url.href;
        return new Promise((resolve, reject) => {
          setTimeout((err) => {
            this.abortRequest(url).then(() => reject(err), (reason) => reject(new AggregateError([err, reason])));
          }, 5e3, new Error("User navigated back"));
        });
      }
      async signInPopup(input, options) {
        const popupFeatures = "width=600,height=600,menubar=no,toolbar=no";
        let popup = window.open("about:blank", "_blank", popupFeatures);
        const stateKey = `${Math.random().toString(36).slice(2)}`;
        const url = await this.authorize(input, {
          ...options,
          state: `${POPUP_STATE_PREFIX}${stateKey}`,
          display: options?.display ?? "popup"
        });
        options?.signal?.throwIfAborted();
        if (popup) {
          popup.window.location.href = url.href;
        } else {
          popup = window.open(url.href, "_blank", popupFeatures);
        }
        popup?.focus();
        return new Promise((resolve, reject) => {
          const popupChannel = new BroadcastChannel(POPUP_CHANNEL_NAME);
          const cleanup = () => {
            clearTimeout(timeout);
            popupChannel.removeEventListener("message", onMessage);
            popupChannel.close();
            options?.signal?.removeEventListener("abort", cancel);
            popup?.close();
          };
          const cancel = () => {
            reject(new Error(options?.signal?.aborted ? "Aborted" : "Timeout"));
            cleanup();
          };
          options?.signal?.addEventListener("abort", cancel);
          const timeout = setTimeout(cancel, 5 * 6e4);
          const onMessage = async ({ data }) => {
            if (data.key !== stateKey)
              return;
            if (!("result" in data))
              return;
            popupChannel.postMessage({ key: stateKey, ack: true });
            cleanup();
            const { result } = data;
            if (result.status === "fulfilled") {
              const sub = result.value;
              try {
                options?.signal?.throwIfAborted();
                resolve(await this.restore(sub, false));
              } catch (err) {
                reject(err);
                void this.revoke(sub);
              }
            } else {
              const { message: message2, params } = result.reason;
              reject(new oauth_client_1.OAuthCallbackError(new URLSearchParams(params), message2));
            }
          };
          popupChannel.addEventListener("message", onMessage);
        });
      }
      findRedirectUrl() {
        for (const uri of this.clientMetadata.redirect_uris) {
          const url = new URL(uri);
          if (location.origin === url.origin && location.pathname === url.pathname) {
            return uri;
          }
        }
        return void 0;
      }
      readCallbackParams() {
        const params = this.responseMode === "fragment" ? new URLSearchParams(location.hash.slice(1)) : new URLSearchParams(location.search);
        if (!params.has("state") || !(params.has("code") || params.has("error"))) {
          return null;
        }
        return params;
      }
      async initCallback(params = this.readCallbackParams(), redirectUri = this.findRedirectUrl()) {
        if (!params) {
          throw new TypeError("No OAuth callback parameters found in the URL");
        }
        if (this.responseMode === "fragment") {
          history.replaceState(null, "", location.pathname + location.search);
        } else if (this.responseMode === "query") {
          history.replaceState(null, "", location.pathname);
        }
        const sendPopupResult = (message2) => {
          const popupChannel = new BroadcastChannel(POPUP_CHANNEL_NAME);
          return new Promise((resolve) => {
            const cleanup = (result) => {
              clearTimeout(timer);
              popupChannel.removeEventListener("message", onMessage);
              popupChannel.close();
              resolve(result);
            };
            const onMessage = ({ data }) => {
              if ("ack" in data && message2.key === data.key)
                cleanup(true);
            };
            popupChannel.addEventListener("message", onMessage);
            popupChannel.postMessage(message2);
            const timer = setTimeout(cleanup, 500, false);
          });
        };
        return this.callback(params, { redirect_uri: redirectUri }).then(async (result) => {
          if (result.state?.startsWith(POPUP_STATE_PREFIX)) {
            const receivedByParent = await sendPopupResult({
              key: result.state.slice(POPUP_STATE_PREFIX.length),
              result: {
                status: "fulfilled",
                value: result.session.sub
              }
            });
            if (!receivedByParent)
              await result.session.signOut();
            throw new errors_js_1.LoginContinuedInParentWindowError();
          }
          localStorage.setItem(`${NAMESPACE}(sub)`, result.session.sub);
          return result;
        }).catch(async (err) => {
          if (err instanceof oauth_client_1.OAuthCallbackError && err.state?.startsWith(POPUP_STATE_PREFIX)) {
            await sendPopupResult({
              key: err.state.slice(POPUP_STATE_PREFIX.length),
              result: {
                status: "rejected",
                reason: {
                  message: err.message,
                  params: Array.from(err.params.entries())
                }
              }
            });
            throw new errors_js_1.LoginContinuedInParentWindowError();
          }
          throw err;
        }).catch((err) => {
          if (err instanceof errors_js_1.LoginContinuedInParentWindowError) {
            window.close();
          }
          throw err;
        });
      }
      async [Symbol.asyncDispose]() {
        try {
          this.ac.abort();
        } finally {
          await this.database[Symbol.asyncDispose]();
        }
      }
      dispose() {
        this[Symbol.dispose]();
      }
    };
    exports.BrowserOAuthClient = BrowserOAuthClient2;
    function fixLocation(clientMetadata) {
      if (!(0, oauth_types_1.isOAuthClientIdLoopback)(clientMetadata.client_id))
        return;
      if (window.location.hostname !== "localhost")
        return;
      const locationUrl = new URL(window.location.href);
      for (const uri of clientMetadata.redirect_uris) {
        const url = new URL(uri);
        if ((url.hostname === "127.0.0.1" || url.hostname === "[::1]") && (!url.port || url.port === locationUrl.port) && url.protocol === locationUrl.protocol && url.pathname === locationUrl.pathname) {
          url.port = locationUrl.port;
          window.location.href = url.href;
          throw new Error("Redirecting to loopback IP...");
        }
      }
      throw new Error(`Please use the loopback IP address instead of ${locationUrl}`);
    }
  }
});

// node_modules/@atproto/oauth-client-browser/dist/index.js
var require_dist14 = __commonJS({
  "node_modules/@atproto/oauth-client-browser/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buildLoopbackClientId = void 0;
    require_esnext_symbol_async_dispose();
    require_esnext_symbol_dispose();
    __exportStar(require_dist3(), exports);
    __exportStar(require_dist13(), exports);
    __exportStar(require_browser_oauth_client(), exports);
    __exportStar(require_errors3(), exports);
    var util_js_1 = require_util12();
    Object.defineProperty(exports, "buildLoopbackClientId", { enumerable: true, get: function() {
      return util_js_1.buildLoopbackClientId;
    } });
  }
});

// assets/js/comments.js
var import_oauth_client_browser = __toESM(require_dist14());
var CLIENT_ID = `${window.location.origin}/client-metadata.json`;
async function getClient() {
  return import_oauth_client_browser.BrowserOAuthClient.load({ clientId: CLIENT_ID });
}
async function handleCallback(client) {
  const statusEl = document.getElementById("status");
  try {
    console.log("OAuth callback. href:", window.location.href);
    console.log("hash:", window.location.hash);
    const result = await client.init();
    if (result) {
      const returnUrl = sessionStorage.getItem("comment-return-url") || "/";
      sessionStorage.removeItem("comment-return-url");
      window.location.href = returnUrl;
    } else {
      console.error("init() returned undefined on callback page \u2014 URL may not match registered redirect_uri");
      if (statusEl) statusEl.innerHTML = "<p>Sign-in failed. Check the browser console for details.</p>";
    }
  } catch (err) {
    console.error("OAuth callback error:", err);
    if (statusEl) statusEl.innerHTML = `<p>Sign-in error: ${err.message}</p>`;
  }
}
async function initPostPage(client) {
  const formEl = document.getElementById("comment-form");
  if (!formEl) return;
  const result = await client.init();
  if (result) {
    renderSignedIn(formEl, result.session);
  } else {
    renderSignIn(formEl, client);
  }
}
function renderSignIn(container, client) {
  container.innerHTML = `
    <div class="comment-sign-in">
      <p>Sign in with your Bluesky account to leave a comment.</p>
      <form id="sign-in-form">
        <input type="text" id="handle-input" placeholder="you.bsky.social" autocomplete="username webauthn">
        <button type="submit">Sign in with Bluesky</button>
      </form>
    </div>
  `;
  document.getElementById("sign-in-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const handle = document.getElementById("handle-input").value.trim();
    if (!handle) return;
    sessionStorage.setItem("comment-return-url", window.location.href);
    try {
      await client.signInRedirect(handle, { scope: "atproto transition:generic" });
    } catch (err) {
      console.error("Sign-in error:", err);
      alert("Sign-in failed: " + err.message);
    }
  });
}
function renderSignedIn(container, session) {
  container.innerHTML = `
    <div class="comment-signed-in">
      <p>Signed in as <strong>${session.did}</strong>. <button id="sign-out-btn">Sign out</button></p>
      <p><em>Comment posting coming soon.</em></p>
    </div>
  `;
  document.getElementById("sign-out-btn").addEventListener("click", async () => {
    await session.signOut();
    window.location.reload();
  });
}
async function main() {
  const client = await getClient();
  if (document.getElementById("status")) {
    await handleCallback(client);
  } else {
    await initPostPage(client);
  }
}
main().catch(console.error);
