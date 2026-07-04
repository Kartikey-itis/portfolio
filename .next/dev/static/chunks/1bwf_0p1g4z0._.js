(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-react-app/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/my-react-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/my-react-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/my-react-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/my-react-app/node_modules/next/dist/compiled/client-only/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/my-react-app/node_modules/styled-jsx/dist/index/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/my-react-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
__turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/client-only/index.js [app-client] (ecmascript)");
var React = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/ function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var isProd = typeof __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && ("TURBOPACK compile-time value", "development") === "production";
var isString = function(o) {
    return Object.prototype.toString.call(o) === "[object String]";
};
var StyleSheet = /*#__PURE__*/ function() {
    function StyleSheet(param) {
        var ref = param === void 0 ? {} : param, _name = ref.name, name = _name === void 0 ? "stylesheet" : _name, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? isProd : _optimizeForSpeed;
        invariant$1(isString(name), "`name` must be a string");
        this._name = name;
        this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
        invariant$1(typeof optimizeForSpeed === "boolean", "`optimizeForSpeed` must be a boolean");
        this._optimizeForSpeed = optimizeForSpeed;
        this._serverSheet = undefined;
        this._tags = [];
        this._injected = false;
        this._rulesCount = 0;
        var node = typeof window !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = node ? node.getAttribute("content") : null;
    }
    var _proto = StyleSheet.prototype;
    _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
        invariant$1(typeof bool === "boolean", "`setOptimizeForSpeed` accepts a boolean");
        invariant$1(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted");
        this.flush();
        this._optimizeForSpeed = bool;
        this.inject();
    };
    _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
        return this._optimizeForSpeed;
    };
    _proto.inject = function inject() {
        var _this = this;
        invariant$1(!this._injected, "sheet already injected");
        this._injected = true;
        if (typeof window !== "undefined" && this._optimizeForSpeed) {
            this._tags[0] = this.makeStyleTag(this._name);
            this._optimizeForSpeed = "insertRule" in this.getSheet();
            if (!this._optimizeForSpeed) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");
                }
                this.flush();
                this._injected = true;
            }
            return;
        }
        this._serverSheet = {
            cssRules: [],
            insertRule: function(rule, index) {
                if (typeof index === "number") {
                    _this._serverSheet.cssRules[index] = {
                        cssText: rule
                    };
                } else {
                    _this._serverSheet.cssRules.push({
                        cssText: rule
                    });
                }
                return index;
            },
            deleteRule: function(index) {
                _this._serverSheet.cssRules[index] = null;
            }
        };
    };
    _proto.getSheetForTag = function getSheetForTag(tag) {
        if (tag.sheet) {
            return tag.sheet;
        }
        // this weirdness brought to you by firefox
        for(var i = 0; i < document.styleSheets.length; i++){
            if (document.styleSheets[i].ownerNode === tag) {
                return document.styleSheets[i];
            }
        }
    };
    _proto.getSheet = function getSheet() {
        return this.getSheetForTag(this._tags[this._tags.length - 1]);
    };
    _proto.insertRule = function insertRule(rule, index) {
        invariant$1(isString(rule), "`insertRule` accepts only strings");
        if (typeof window === "undefined") {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        if (this._optimizeForSpeed) {
            var sheet = this.getSheet();
            if (typeof index !== "number") {
                index = sheet.cssRules.length;
            }
            // this weirdness for perf, and chrome's weird bug
            // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                return -1;
            }
        } else {
            var insertionPoint = this._tags[index];
            this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
        }
        return this._rulesCount++;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || typeof window === "undefined") {
            var sheet = typeof window !== "undefined" ? this.getSheet() : this._serverSheet;
            if (!rule.trim()) {
                rule = this._deletedRulePlaceholder;
            }
            if (!sheet.cssRules[index]) {
                // @TBD Should we throw an error?
                return index;
            }
            sheet.deleteRule(index);
            try {
                sheet.insertRule(rule, index);
            } catch (error) {
                if ("TURBOPACK compile-time truthy", 1) {
                    console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
                }
                // In order to preserve the indices we insert a deleteRulePlaceholder
                sheet.insertRule(this._deletedRulePlaceholder, index);
            }
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "old rule at index `" + index + "` not found");
            tag.textContent = rule;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if (typeof window === "undefined") {
            this._serverSheet.deleteRule(index);
            return;
        }
        if (this._optimizeForSpeed) {
            this.replaceRule(index, "");
        } else {
            var tag = this._tags[index];
            invariant$1(tag, "rule at index `" + index + "` not found");
            tag.parentNode.removeChild(tag);
            this._tags[index] = null;
        }
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if (typeof window !== "undefined") {
            this._tags.forEach(function(tag) {
                return tag && tag.parentNode.removeChild(tag);
            });
            this._tags = [];
        } else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if (typeof window === "undefined") {
            return this._serverSheet.cssRules;
        }
        return this._tags.reduce(function(rules, tag) {
            if (tag) {
                rules = rules.concat(Array.prototype.map.call(_this.getSheetForTag(tag).cssRules, function(rule) {
                    return rule.cssText === _this._deletedRulePlaceholder ? null : rule;
                }));
            } else {
                rules.push(null);
            }
            return rules;
        }, []);
    };
    _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
        if (cssString) {
            invariant$1(isString(cssString), "makeStyleTag accepts only strings as second parameter");
        }
        var tag = document.createElement("style");
        if (this._nonce) tag.setAttribute("nonce", this._nonce);
        tag.type = "text/css";
        tag.setAttribute("data-" + name, "");
        if (cssString) {
            tag.appendChild(document.createTextNode(cssString));
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        if (relativeToTag) {
            head.insertBefore(tag, relativeToTag);
        } else {
            head.appendChild(tag);
        }
        return tag;
    };
    _createClass(StyleSheet, [
        {
            key: "length",
            get: function get() {
                return this._rulesCount;
            }
        }
    ]);
    return StyleSheet;
}();
function invariant$1(condition, message) {
    if (!condition) {
        throw new Error("StyleSheet: " + message + ".");
    }
}
function hash(str) {
    var _$hash = 5381, i = str.length;
    while(i){
        _$hash = _$hash * 33 ^ str.charCodeAt(--i);
    }
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */ return _$hash >>> 0;
}
var stringHash = hash;
var sanitize = function(rule) {
    return rule.replace(/\/style/gi, "\\/style");
};
var cache = {};
/**
 * computeId
 *
 * Compute and memoize a jsx id from a basedId and optionally props.
 */ function computeId(baseId, props) {
    if (!props) {
        return "jsx-" + baseId;
    }
    var propsToString = String(props);
    var key = baseId + propsToString;
    if (!cache[key]) {
        cache[key] = "jsx-" + stringHash(baseId + "-" + propsToString);
    }
    return cache[key];
}
/**
 * computeSelector
 *
 * Compute and memoize dynamic selectors.
 */ function computeSelector(id, css) {
    var selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    // Sanitize SSR-ed CSS.
    // Client side code doesn't need to be sanitized since we use
    // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
    if (typeof window === "undefined") {
        css = sanitize(css);
    }
    var idcss = id + css;
    if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
    }
    return cache[idcss];
}
function mapRulesToStyle(cssRules, options) {
    if (options === void 0) options = {};
    return cssRules.map(function(args) {
        var id = args[0];
        var css = args[1];
        return /*#__PURE__*/ React__default["default"].createElement("style", {
            id: "__" + id,
            // Avoid warnings upon render with a key
            key: "__" + id,
            nonce: options.nonce ? options.nonce : undefined,
            dangerouslySetInnerHTML: {
                __html: css
            }
        });
    });
}
var StyleSheetRegistry = /*#__PURE__*/ function() {
    function StyleSheetRegistry(param) {
        var ref = param === void 0 ? {} : param, _styleSheet = ref.styleSheet, styleSheet = _styleSheet === void 0 ? null : _styleSheet, _optimizeForSpeed = ref.optimizeForSpeed, optimizeForSpeed = _optimizeForSpeed === void 0 ? false : _optimizeForSpeed;
        this._sheet = styleSheet || new StyleSheet({
            name: "styled-jsx",
            optimizeForSpeed: optimizeForSpeed
        });
        this._sheet.inject();
        if (styleSheet && typeof optimizeForSpeed === "boolean") {
            this._sheet.setOptimizeForSpeed(optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    }
    var _proto = StyleSheetRegistry.prototype;
    _proto.add = function add(props) {
        var _this = this;
        if (undefined === this._optimizeForSpeed) {
            this._optimizeForSpeed = Array.isArray(props.children);
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
        }
        if (typeof window !== "undefined" && !this._fromServer) {
            this._fromServer = this.selectFromServer();
            this._instancesCounts = Object.keys(this._fromServer).reduce(function(acc, tagName) {
                acc[tagName] = 0;
                return acc;
            }, {});
        }
        var ref = this.getIdAndRules(props), styleId = ref.styleId, rules = ref.rules;
        // Deduping: just increase the instances count.
        if (styleId in this._instancesCounts) {
            this._instancesCounts[styleId] += 1;
            return;
        }
        var indices = rules.map(function(rule) {
            return _this._sheet.insertRule(rule);
        }) // Filter out invalid rules
        .filter(function(index) {
            return index !== -1;
        });
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
    };
    _proto.remove = function remove(props) {
        var _this = this;
        var styleId = this.getIdAndRules(props).styleId;
        invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
        this._instancesCounts[styleId] -= 1;
        if (this._instancesCounts[styleId] < 1) {
            var tagFromServer = this._fromServer && this._fromServer[styleId];
            if (tagFromServer) {
                tagFromServer.parentNode.removeChild(tagFromServer);
                delete this._fromServer[styleId];
            } else {
                this._indices[styleId].forEach(function(index) {
                    return _this._sheet.deleteRule(index);
                });
                delete this._indices[styleId];
            }
            delete this._instancesCounts[styleId];
        }
    };
    _proto.update = function update(props, nextProps) {
        this.add(nextProps);
        this.remove(props);
    };
    _proto.flush = function flush() {
        this._sheet.flush();
        this._sheet.inject();
        this._fromServer = undefined;
        this._indices = {};
        this._instancesCounts = {};
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function(styleId) {
            return [
                styleId,
                _this._fromServer[styleId]
            ];
        }) : [];
        var cssRules = this._sheet.cssRules();
        return fromServer.concat(Object.keys(this._indices).map(function(styleId) {
            return [
                styleId,
                _this._indices[styleId].map(function(index) {
                    return cssRules[index].cssText;
                }).join(_this._optimizeForSpeed ? "" : "\n")
            ];
        }) // filter out empty rules
        .filter(function(rule) {
            return Boolean(rule[1]);
        }));
    };
    _proto.styles = function styles(options) {
        return mapRulesToStyle(this.cssRules(), options);
    };
    _proto.getIdAndRules = function getIdAndRules(props) {
        var css = props.children, dynamic = props.dynamic, id = props.id;
        if (dynamic) {
            var styleId = computeId(id, dynamic);
            return {
                styleId: styleId,
                rules: Array.isArray(css) ? css.map(function(rule) {
                    return computeSelector(styleId, rule);
                }) : [
                    computeSelector(styleId, css)
                ]
            };
        }
        return {
            styleId: computeId(id),
            rules: Array.isArray(css) ? css : [
                css
            ]
        };
    };
    /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */ _proto.selectFromServer = function selectFromServer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
        return elements.reduce(function(acc, element) {
            var id = element.id.slice(2);
            acc[id] = element;
            return acc;
        }, {});
    };
    return StyleSheetRegistry;
}();
function invariant(condition, message) {
    if (!condition) {
        throw new Error("StyleSheetRegistry: " + message + ".");
    }
}
var StyleSheetContext = /*#__PURE__*/ React.createContext(null);
StyleSheetContext.displayName = "StyleSheetContext";
function createStyleRegistry() {
    return new StyleSheetRegistry();
}
function StyleRegistry(param) {
    var configuredRegistry = param.registry, children = param.children;
    var rootRegistry = React.useContext(StyleSheetContext);
    var ref = React.useState({
        "StyleRegistry.useState[ref]": function() {
            return rootRegistry || configuredRegistry || createStyleRegistry();
        }
    }["StyleRegistry.useState[ref]"]), registry = ref[0];
    return /*#__PURE__*/ React__default["default"].createElement(StyleSheetContext.Provider, {
        value: registry
    }, children);
}
function useStyleRegistry() {
    return React.useContext(StyleSheetContext);
}
// Opt-into the new `useInsertionEffect` API in React 18, fallback to `useLayoutEffect`.
// https://github.com/reactwg/react-18/discussions/110
var useInsertionEffect = React__default["default"].useInsertionEffect || React__default["default"].useLayoutEffect;
var defaultRegistry = typeof window !== "undefined" ? createStyleRegistry() : undefined;
function JSXStyle(props) {
    var registry = defaultRegistry ? defaultRegistry : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if (typeof window === "undefined") {
        registry.add(props);
        return null;
    }
    useInsertionEffect({
        "JSXStyle.useInsertionEffect": function() {
            registry.add(props);
            return ({
                "JSXStyle.useInsertionEffect": function() {
                    registry.remove(props);
                }
            })["JSXStyle.useInsertionEffect"];
        // props.children can be string[], will be striped since id is identical
        }
    }["JSXStyle.useInsertionEffect"], [
        props.id,
        String(props.dynamic)
    ]);
    return null;
}
JSXStyle.dynamic = function(info) {
    return info.map(function(tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return computeId(baseId, props);
    }).join(" ");
};
exports.StyleRegistry = StyleRegistry;
exports.createStyleRegistry = createStyleRegistry;
exports.style = JSXStyle;
exports.useStyleRegistry = useStyleRegistry;
}),
"[project]/my-react-app/node_modules/styled-jsx/style.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/my-react-app/node_modules/styled-jsx/dist/index/index.js [app-client] (ecmascript)").style;
}),
"[project]/my-react-app/node_modules/@rive-app/canvas/rive.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function webpackUniversalModuleDefinition(root, factory) {
    if ("TURBOPACK compile-time truthy", 1) module.exports = factory();
    else //TURBOPACK unreachable
    ;
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, ()=>{
    return /******/ (()=>{
        /******/ "use strict";
        /******/ var __webpack_modules__ = [
            ,
            (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Animation: ()=>/* reexport safe */ _Animation__WEBPACK_IMPORTED_MODULE_0__.Animation
                });
                /* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
            /***/ },
            (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ Animation: ()=>/* binding */ Animation
                });
                /**
 * Represents an animation that can be played on an Artboard.
 * Wraps animations and instances from the runtime and keeps track of playback state.
 *
 * The `Animation` class manages the state and behavior of a single animation instance,
 * including its current time, loop count, and ability to scrub to a specific time.
 *
 * The class provides methods to advance the animation, apply its interpolated keyframe
 * values to the Artboard, and clean up the underlying animation instance when the
 * animation is no longer needed.
 */ var Animation = function() {
                    /**
     * Constructs a new animation
     * @constructor
     * @param {any} animation: runtime animation object
     * @param {any} instance: runtime animation instance object
     */ function Animation(animation, artboard, runtime, playing) {
                        this.animation = animation;
                        this.artboard = artboard;
                        this.playing = playing;
                        this.loopCount = 0;
                        /**
         * The time to which the animation should move to on the next render.
         * If not null, the animation will scrub to this time instead of advancing by the given time.
         */ this.scrubTo = null;
                        this.instance = new runtime.LinearAnimationInstance(animation, artboard);
                    }
                    Object.defineProperty(Animation.prototype, "name", {
                        /**
         * Returns the animation's name
         */ get: function() {
                            return this.animation.name;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Animation.prototype, "time", {
                        /**
         * Returns the animation's name
         */ get: function() {
                            return this.instance.time;
                        },
                        /**
         * Sets the animation's current time
         */ set: function(value) {
                            this.instance.time = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Animation.prototype, "loopValue", {
                        /**
         * Returns the animation's loop type
         */ get: function() {
                            return this.animation.loopValue;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Animation.prototype, "needsScrub", {
                        /**
         * Indicates whether the animation needs to be scrubbed.
         * @returns `true` if the animation needs to be scrubbed, `false` otherwise.
         */ get: function() {
                            return this.scrubTo !== null;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    /**
     * Advances the animation by the give time. If the animation needs scrubbing,
     * time is ignored and the stored scrub value is used.
     * @param time the time to advance the animation by if no scrubbing required
     */ Animation.prototype.advance = function(time) {
                        if (this.scrubTo === null) {
                            this.instance.advance(time);
                        } else {
                            this.instance.time = 0;
                            this.instance.advance(this.scrubTo);
                            this.scrubTo = null;
                        }
                    };
                    /**
     * Apply interpolated keyframe values to the artboard. This should be called after calling
     * .advance() on an animation instance so that new values are applied to properties.
     *
     * Note: This does not advance the artboard, which updates all objects on the artboard
     * @param mix - Mix value for the animation from 0 to 1
     */ Animation.prototype.apply = function(mix) {
                        this.instance.apply(mix);
                    };
                    /**
     * Deletes the backing Wasm animation instance; once this is called, this
     * animation is no more.
     */ Animation.prototype.cleanup = function() {
                        this.instance.delete();
                    };
                    return Animation;
                }();
            /***/ },
            (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ RuntimeLoader: ()=>/* binding */ RuntimeLoader
                });
                /* harmony import */ var _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
                /* harmony import */ var package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
                var __assign = undefined && undefined.__assign || function() {
                    __assign = Object.assign || function(t) {
                        for(var s, i = 1, n = arguments.length; i < n; i++){
                            s = arguments[i];
                            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                        }
                        return t;
                    };
                    return __assign.apply(this, arguments);
                };
                // Runtime singleton; use getInstance to provide a callback that returns the
                // Rive runtime
                var RuntimeLoader = function() {
                    // Class is never instantiated
                    function RuntimeLoader() {}
                    // Rejects all pending awaitInstance() promises and resets loading state so
                    // the next call to getInstance() / awaitInstance() can retry with a new URL.
                    RuntimeLoader.notifyError = function(error) {
                        var _a;
                        RuntimeLoader.isLoading = false;
                        while(RuntimeLoader.errorCallbackQueue.length > 0){
                            (_a = RuntimeLoader.errorCallbackQueue.shift()) === null || _a === void 0 ? void 0 : _a(error);
                        }
                        RuntimeLoader.callBackQueue = [];
                    };
                    // Loads the runtime
                    RuntimeLoader.loadRuntime = function() {
                        // Capture the URL at call time so the catch closure always refers to the
                        // URL this particular attempt used, even if wasmURL is mutated for a retry.
                        var attemptedUrl = RuntimeLoader.wasmURL;
                        var wasmBinary = RuntimeLoader.wasmBinary;
                        if (RuntimeLoader.enablePerfMarks) performance.mark('rive:wasm-init:start');
                        _rive_advanced_mjs__WEBPACK_IMPORTED_MODULE_0__["default"](__assign({
                            // Loads Wasm bundle
                            locateFile: function() {
                                return attemptedUrl;
                            }
                        }, wasmBinary ? {
                            wasmBinary: wasmBinary
                        } : {})).then(function(rive) {
                            var _a;
                            if (RuntimeLoader.enablePerfMarks) {
                                performance.mark('rive:wasm-init:end');
                                performance.measure('rive:wasm-init', 'rive:wasm-init:start', 'rive:wasm-init:end');
                            }
                            RuntimeLoader.runtime = rive;
                            RuntimeLoader.errorCallbackQueue = [];
                            // Fire all the callbacks
                            while(RuntimeLoader.callBackQueue.length > 0){
                                (_a = RuntimeLoader.callBackQueue.shift()) === null || _a === void 0 ? void 0 : _a(RuntimeLoader.runtime);
                            }
                        }).catch(function(error) {
                            // Capture specific error details
                            var errorDetails = {
                                message: (error === null || error === void 0 ? void 0 : error.message) || "Unknown error",
                                type: (error === null || error === void 0 ? void 0 : error.name) || "Error",
                                // Some browsers may provide additional WebAssembly-specific details
                                wasmError: error instanceof WebAssembly.CompileError || error instanceof WebAssembly.RuntimeError,
                                originalError: error
                            };
                            // Log detailed error for debugging
                            console.debug("Rive WASM load error details:", errorDetails);
                            // In case the primary URL fails, or the wasm was not supported, try the
                            // fallback URL (a rive_fallback.wasm compiled for older architectures).
                            // The fallback can be customised or disabled via setWasmFallbackUrl().
                            // TODO: (Gordon): preemptively test browser support and load the correct wasm file. Then use the fallback only if the primary fails.
                            var fallbackUrl = RuntimeLoader.wasmFallbackURL;
                            var alreadyOnFallback = fallbackUrl !== null && attemptedUrl.toLowerCase() === fallbackUrl.toLowerCase();
                            if (fallbackUrl !== null && !alreadyOnFallback) {
                                console.warn("Failed to load WASM from ".concat(attemptedUrl, " (").concat(errorDetails.message, "), trying fallback URL: ").concat(fallbackUrl));
                                // Clear wasmBinary so the retry actually fetches via locateFile
                                // instead of re-using the same (failing) in-memory binary.
                                RuntimeLoader.wasmBinary = null;
                                RuntimeLoader.setWasmUrl(fallbackUrl);
                                RuntimeLoader.loadRuntime();
                            } else {
                                // When alreadyOnFallback is true, wasmURL has already been overwritten
                                // with the fallback URL, so we can no longer recover the original
                                // primary URL here. The primary URL was logged in the earlier warning.
                                var triedUrls = alreadyOnFallback ? "the configured WASM URL or its fallback (".concat(fallbackUrl, ")") : attemptedUrl;
                                var errorMessage = [
                                    "Could not load Rive WASM file from ".concat(triedUrls, "."),
                                    "Possible reasons:",
                                    "- Network connection is down",
                                    "- WebAssembly is not supported in this environment",
                                    "- The WASM file is corrupted or incompatible",
                                    "\nError details:",
                                    "- Type: ".concat(errorDetails.type),
                                    "- Message: ".concat(errorDetails.message),
                                    "- WebAssembly-specific error: ".concat(errorDetails.wasmError),
                                    "\nTo resolve, you may need to:",
                                    "1. Check your network connection",
                                    "2. Set a new WASM source via RuntimeLoader.setWasmUrl()",
                                    "3. Call RuntimeLoader.awaitInstance() again"
                                ].join("\n");
                                console.error(errorMessage);
                                RuntimeLoader.notifyError(new Error(errorMessage));
                            }
                        });
                    };
                    // Provides a runtime instance via a callback
                    RuntimeLoader.getInstance = function(callback, onError) {
                        // If it's not loading, start loading runtime
                        if (!RuntimeLoader.isLoading) {
                            RuntimeLoader.isLoading = true;
                            RuntimeLoader.loadRuntime();
                        }
                        if (!RuntimeLoader.runtime) {
                            RuntimeLoader.callBackQueue.push(callback);
                            if (onError) {
                                RuntimeLoader.errorCallbackQueue.push(onError);
                            }
                        } else {
                            callback(RuntimeLoader.runtime);
                        }
                    };
                    // Provides a runtime instance via a promise; rejects if WASM fails to load.
                    RuntimeLoader.awaitInstance = function() {
                        return new Promise(function(resolve, reject) {
                            return RuntimeLoader.getInstance(resolve, reject);
                        });
                    };
                    // Manually sets the wasm url
                    RuntimeLoader.setWasmUrl = function(url) {
                        RuntimeLoader.wasmURL = url;
                    };
                    // Gets the current wasm url
                    RuntimeLoader.getWasmUrl = function() {
                        return RuntimeLoader.wasmURL;
                    };
                    /**
     * Sets the URL used as a fallback when the primary WASM URL fails to load.
     * Pass `null` to disable the fallback entirely.
     *
     * Defaults to pulling from the jsdelivr CDN.
     */ RuntimeLoader.setWasmFallbackUrl = function(url) {
                        RuntimeLoader.wasmFallbackURL = url;
                    };
                    // Gets the current fallback wasm url (null means fallback is disabled)
                    RuntimeLoader.getWasmFallbackUrl = function() {
                        return RuntimeLoader.wasmFallbackURL;
                    };
                    // Manually sets the wasm binary or clears it with null
                    RuntimeLoader.setWasmBinary = function(value) {
                        if (value instanceof ArrayBuffer || value === null) {
                            RuntimeLoader.wasmBinary = value;
                            return;
                        }
                        console.error("setWasmBinary expects an ArrayBuffer or null");
                    };
                    // Gets the current wasm build as ArrayBuffer or null
                    RuntimeLoader.getWasmBinary = function() {
                        return RuntimeLoader.wasmBinary;
                    };
                    // Flag to indicate that loading has started/completed
                    RuntimeLoader.isLoading = false;
                    // List of callbacks for the runtime that come in while loading
                    RuntimeLoader.callBackQueue = [];
                    // Path to the Wasm file; default path works for testing only;
                    // if embedded wasm is used then this is never used.
                    RuntimeLoader.wasmURL = "https://unpkg.com/".concat(package_json__WEBPACK_IMPORTED_MODULE_1__.name, "@").concat(package_json__WEBPACK_IMPORTED_MODULE_1__.version, "/rive.wasm");
                    // Fallback WASM URL tried when the primary URL fails. Set to null to disable
                    // the fallback entirely. Defaults to pulling from the jsdelivr CDN.
                    RuntimeLoader.wasmFallbackURL = "https://cdn.jsdelivr.net/npm/".concat(package_json__WEBPACK_IMPORTED_MODULE_1__.name, "@").concat(package_json__WEBPACK_IMPORTED_MODULE_1__.version, "/rive_fallback.wasm");
                    RuntimeLoader.wasmBinary = null;
                    // Error callbacks enqueued from .getInstance()
                    RuntimeLoader.errorCallbackQueue = [];
                    /**
     * When true, performance.mark / performance.measure entries are emitted for
     * WASM initialization.
     */ RuntimeLoader.enablePerfMarks = false;
                    return RuntimeLoader;
                }();
            /***/ },
            (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__)=>{
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ "default": ()=>__WEBPACK_DEFAULT_EXPORT__
                });
                var Rive = (()=>{
                    var _scriptName = typeof document != 'undefined' ? document.currentScript?.src : undefined;
                    return function(moduleArg = {}) {
                        var moduleRtn;
                        var l = moduleArg, ca, da, ea = new Promise((a, b)=>{
                            ca = a;
                            da = b;
                        }), fa = "object" == typeof window, ia = "function" == typeof importScripts;
                        function ja() {
                            function a(g) {
                                const k = d;
                                c = b = 0;
                                d = new Map();
                                k.forEach((p)=>{
                                    try {
                                        p(g);
                                    } catch (n) {
                                        console.error(n);
                                    }
                                });
                                this.ob();
                                e && e.Rb();
                            }
                            let b = 0, c = 0, d = new Map(), e = null, f = null;
                            this.requestAnimationFrame = function(g) {
                                b ||= requestAnimationFrame(a.bind(this));
                                const k = ++c;
                                d.set(k, g);
                                return k;
                            };
                            this.cancelAnimationFrame = function(g) {
                                d.delete(g);
                                b && 0 == d.size && (cancelAnimationFrame(b), b = 0);
                            };
                            this.Pb = function(g) {
                                f && (document.body.remove(f), f = null);
                                g || (f = document.createElement("div"), f.style.backgroundColor = "black", f.style.position = "fixed", f.style.right = 0, f.style.top = 0, f.style.color = "white", f.style.padding = "4px", f.innerHTML = "RIVE FPS", g = function(k) {
                                    f.innerHTML = "RIVE FPS " + k.toFixed(1);
                                }, document.body.appendChild(f));
                                e = new function() {
                                    let k = 0, p = 0;
                                    this.Rb = function() {
                                        var n = performance.now();
                                        p ? (++k, n -= p, 1000 < n && (g(1000 * k / n), k = p = 0)) : (p = n, k = 0);
                                    };
                                }();
                            };
                            this.Mb = function() {
                                f && (document.body.remove(f), f = null);
                                e = null;
                            };
                            this.ob = function() {};
                        }
                        function ka(a) {
                            console.assert(!0);
                            const b = new Map();
                            let c = -Infinity;
                            this.push = function(d) {
                                d = d + ((1 << a) - 1) >> a;
                                b.has(d) && clearTimeout(b.get(d));
                                b.set(d, setTimeout(function() {
                                    b.delete(d);
                                    0 == b.length ? c = -Infinity : d == c && (c = Math.max(...b.keys()), console.assert(c < d));
                                }, 1000));
                                c = Math.max(d, c);
                                return c << a;
                            };
                        }
                        const la = l.onRuntimeInitialized;
                        l.onRuntimeInitialized = function() {
                            la && la();
                            let a = l.decodeAudio;
                            l.decodeAudio = function(f, g) {
                                f = a(f);
                                g(f);
                            };
                            let b = l.decodeFont;
                            l.decodeFont = function(f, g) {
                                f = b(f);
                                g(f);
                            };
                            let c = l.setFallbackFontCb;
                            l.setFallbackFontCallback = "function" === typeof c ? function(f) {
                                c(f);
                            } : function() {
                                console.warn("Module.setFallbackFontCallback called, but text support is not enabled in this build.");
                            };
                            const d = l.FileAssetLoader;
                            l.ptrToAsset = (f)=>{
                                let g = l.ptrToFileAsset(f);
                                return g.isImage ? l.ptrToImageAsset(f) : g.isFont ? l.ptrToFontAsset(f) : g.isAudio ? l.ptrToAudioAsset(f) : g;
                            };
                            l.CustomFileAssetLoader = d.extend("CustomFileAssetLoader", {
                                __construct: function({ loadContents: f }) {
                                    this.__parent.__construct.call(this);
                                    this.Eb = f;
                                },
                                loadContents: function(f, g) {
                                    f = l.ptrToAsset(f);
                                    return this.Eb(f, g);
                                }
                            });
                            l.CDNFileAssetLoader = d.extend("CDNFileAssetLoader", {
                                __construct: function() {
                                    this.__parent.__construct.call(this);
                                },
                                loadContents: function(f) {
                                    let g = l.ptrToAsset(f);
                                    f = g.cdnUuid;
                                    if ("" === f) {
                                        return !1;
                                    }
                                    (function(k, p) {
                                        var n = new XMLHttpRequest();
                                        n.responseType = "arraybuffer";
                                        n.onreadystatechange = function() {
                                            4 == n.readyState && 200 == n.status && p(n);
                                        };
                                        n.open("GET", k, !0);
                                        n.send(null);
                                    })(g.cdnBaseUrl + "/" + f, (k)=>{
                                        g.decode(new Uint8Array(k.response));
                                    });
                                    return !0;
                                }
                            });
                            l.FallbackFileAssetLoader = d.extend("FallbackFileAssetLoader", {
                                __construct: function() {
                                    this.__parent.__construct.call(this);
                                    this.kb = [];
                                },
                                addLoader: function(f) {
                                    this.kb.push(f);
                                },
                                loadContents: function(f, g) {
                                    for (let k of this.kb){
                                        if (k.loadContents(f, g)) {
                                            return !0;
                                        }
                                    }
                                    return !1;
                                }
                            });
                            let e = l.computeAlignment;
                            l.computeAlignment = function(f, g, k, p, n = 1.0) {
                                return e.call(this, f, g, k, p, n);
                            };
                        };
                        const ma = "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(" "), na = new function() {
                            function a() {
                                if (!b) {
                                    var m = document.createElement("canvas"), u = {
                                        alpha: 1,
                                        depth: 0,
                                        stencil: 0,
                                        antialias: 0,
                                        premultipliedAlpha: 1,
                                        preserveDrawingBuffer: 0,
                                        powerPreference: "high-performance",
                                        failIfMajorPerformanceCaveat: 0,
                                        enableExtensionsByDefault: 1,
                                        explicitSwapControl: 1,
                                        renderViaOffscreenBackBuffer: 1
                                    };
                                    let r;
                                    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                                        if (r = m.getContext("webgl", u), c = 1, !r) {
                                            return console.log("No WebGL support. Image mesh will not be drawn."), !1;
                                        }
                                    } else {
                                        if (r = m.getContext("webgl2", u)) {
                                            c = 2;
                                        } else {
                                            if (r = m.getContext("webgl", u)) {
                                                c = 1;
                                            } else {
                                                return console.log("No WebGL support. Image mesh will not be drawn."), !1;
                                            }
                                        }
                                    }
                                    r = new Proxy(r, {
                                        get (I, w) {
                                            if (I.isContextLost()) {
                                                if (p || (console.error("Cannot render the mesh because the GL Context was lost. Tried to invoke ", w), p = !0), "function" === typeof I[w]) {
                                                    return function() {};
                                                }
                                            } else {
                                                return "function" === typeof I[w] ? function(...L) {
                                                    return I[w].apply(I, L);
                                                } : I[w];
                                            }
                                        },
                                        set (I, w, L) {
                                            if (I.isContextLost()) {
                                                p || (console.error("Cannot render the mesh because the GL Context was lost. Tried to set property " + w), p = !0);
                                            } else {
                                                return I[w] = L, !0;
                                            }
                                        }
                                    });
                                    d = Math.min(r.getParameter(r.MAX_RENDERBUFFER_SIZE), r.getParameter(r.MAX_TEXTURE_SIZE));
                                    function D(I, w, L) {
                                        w = r.createShader(w);
                                        r.shaderSource(w, L);
                                        r.compileShader(w);
                                        L = r.getShaderInfoLog(w);
                                        if (0 < (L || "").length) {
                                            throw L;
                                        }
                                        r.attachShader(I, w);
                                    }
                                    m = r.createProgram();
                                    D(m, r.VERTEX_SHADER, "attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }");
                                    D(m, r.FRAGMENT_SHADER, "precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }");
                                    r.bindAttribLocation(m, 0, "vertex");
                                    r.bindAttribLocation(m, 1, "uv");
                                    r.linkProgram(m);
                                    u = r.getProgramInfoLog(m);
                                    if (0 < (u || "").trim().length) {
                                        throw u;
                                    }
                                    e = r.getUniformLocation(m, "mat");
                                    f = r.getUniformLocation(m, "translate");
                                    r.useProgram(m);
                                    r.bindBuffer(r.ARRAY_BUFFER, r.createBuffer());
                                    r.enableVertexAttribArray(0);
                                    r.enableVertexAttribArray(1);
                                    r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, r.createBuffer());
                                    r.uniform1i(r.getUniformLocation(m, "image"), 0);
                                    r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
                                    b = r;
                                }
                                return !0;
                            }
                            let b = null, c = 0, d = 0, e = null, f = null, g = 0, k = 0, p = !1;
                            a();
                            this.cc = function() {
                                a();
                                return d;
                            };
                            this.Lb = function(m) {
                                b.deleteTexture && b.deleteTexture(m);
                            };
                            this.Kb = function(m) {
                                if (!a()) {
                                    return null;
                                }
                                const u = b.createTexture();
                                if (!u) {
                                    return null;
                                }
                                b.bindTexture(b.TEXTURE_2D, u);
                                b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, m);
                                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
                                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
                                b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
                                2 == c ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR_MIPMAP_LINEAR), b.generateMipmap(b.TEXTURE_2D)) : b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
                                return u;
                            };
                            const n = new ka(8), t = new ka(8), x = new ka(10), y = new ka(10);
                            this.Ob = function(m, u, r, D, I) {
                                if (a()) {
                                    var w = n.push(m), L = t.push(u);
                                    if (b.canvas) {
                                        if (b.canvas.width != w || b.canvas.height != L) {
                                            b.canvas.width = w, b.canvas.height = L;
                                        }
                                        b.viewport(0, L - u, m, u);
                                        b.disable(b.SCISSOR_TEST);
                                        b.clearColor(0, 0, 0, 0);
                                        b.clear(b.COLOR_BUFFER_BIT);
                                        b.enable(b.SCISSOR_TEST);
                                        r.sort((K, aa)=>aa.vb - K.vb);
                                        w = x.push(D);
                                        g != w && (b.bufferData(b.ARRAY_BUFFER, 8 * w, b.DYNAMIC_DRAW), g = w);
                                        w = 0;
                                        for (var R of r){
                                            b.bufferSubData(b.ARRAY_BUFFER, w, R.Ta), w += 4 * R.Ta.length;
                                        }
                                        console.assert(w == 4 * D);
                                        for (var V of r){
                                            b.bufferSubData(b.ARRAY_BUFFER, w, V.Bb), w += 4 * V.Bb.length;
                                        }
                                        console.assert(w == 8 * D);
                                        w = y.push(I);
                                        k != w && (b.bufferData(b.ELEMENT_ARRAY_BUFFER, 2 * w, b.DYNAMIC_DRAW), k = w);
                                        R = 0;
                                        for (var qa of r){
                                            b.bufferSubData(b.ELEMENT_ARRAY_BUFFER, R, qa.indices), R += 2 * qa.indices.length;
                                        }
                                        console.assert(R == 2 * I);
                                        qa = 0;
                                        V = !0;
                                        w = R = 0;
                                        for (const K of r){
                                            K.image.Ja != qa && (b.bindTexture(b.TEXTURE_2D, K.image.Ia || null), qa = K.image.Ja);
                                            K.ic ? (b.scissor(K.Za, L - K.$a - K.jb, K.vc, K.jb), V = !0) : V && (b.scissor(0, L - u, m, u), V = !1);
                                            r = 2 / m;
                                            const aa = -2 / u;
                                            b.uniform4f(e, K.ha[0] * r * K.Aa, K.ha[1] * aa * K.Ba, K.ha[2] * r * K.Aa, K.ha[3] * aa * K.Ba);
                                            b.uniform2f(f, K.ha[4] * r * K.Aa + r * (K.Za - K.dc * K.Aa) - 1, K.ha[5] * aa * K.Ba + aa * (K.$a - K.ec * K.Ba) + 1);
                                            b.vertexAttribPointer(0, 2, b.FLOAT, !1, 0, w);
                                            b.vertexAttribPointer(1, 2, b.FLOAT, !1, 0, w + 4 * D);
                                            b.drawElements(b.TRIANGLES, K.indices.length, b.UNSIGNED_SHORT, R);
                                            w += 4 * K.Ta.length;
                                            R += 2 * K.indices.length;
                                        }
                                        console.assert(w == 4 * D);
                                        console.assert(R == 2 * I);
                                    }
                                }
                            };
                            this.canvas = function() {
                                return a() && b.canvas;
                            };
                        }(), oa = l.onRuntimeInitialized;
                        l.onRuntimeInitialized = function() {
                            function a(q) {
                                switch(q){
                                    case n.srcOver:
                                        return "source-over";
                                    case n.screen:
                                        return "screen";
                                    case n.overlay:
                                        return "overlay";
                                    case n.darken:
                                        return "darken";
                                    case n.lighten:
                                        return "lighten";
                                    case n.colorDodge:
                                        return "color-dodge";
                                    case n.colorBurn:
                                        return "color-burn";
                                    case n.hardLight:
                                        return "hard-light";
                                    case n.softLight:
                                        return "soft-light";
                                    case n.difference:
                                        return "difference";
                                    case n.exclusion:
                                        return "exclusion";
                                    case n.multiply:
                                        return "multiply";
                                    case n.hue:
                                        return "hue";
                                    case n.saturation:
                                        return "saturation";
                                    case n.color:
                                        return "color";
                                    case n.luminosity:
                                        return "luminosity";
                                }
                            }
                            function b(q) {
                                return "rgba(" + ((16711680 & q) >>> 16) + "," + ((65280 & q) >>> 8) + "," + ((255 & q) >>> 0) + "," + ((4278190080 & q) >>> 24) / 255 + ")";
                            }
                            function c() {
                                0 < L.length && (na.Ob(w.drawWidth(), w.drawHeight(), L, R, V), L = [], V = R = 0, w.reset(512, 512));
                                for (const q of I){
                                    for (const v of q.I){
                                        v();
                                    }
                                    q.I = [];
                                }
                                I.clear();
                            }
                            oa && oa();
                            var d = l.RenderPaintStyle;
                            const e = l.RenderPath, f = l.RenderPaint, g = l.Renderer, k = l.StrokeCap, p = l.StrokeJoin, n = l.BlendMode, t = d.fill, x = d.stroke, y = l.FillRule.evenOdd;
                            let m = 1;
                            var u = l.RenderImage.extend("CanvasRenderImage", {
                                __construct: function({ la: q, wa: v } = {}) {
                                    this.__parent.__construct.call(this);
                                    this.Ja = m;
                                    m = m + 1 & 2147483647 || 1;
                                    this.la = q;
                                    this.wa = v;
                                },
                                __destruct: function() {
                                    this.Ia && (na.Lb(this.Ia), URL.revokeObjectURL(this.Wa));
                                    this.__parent.__destruct.call(this);
                                },
                                decode: function(q) {
                                    var v = this;
                                    v.wa && v.wa(v);
                                    var J = new Image();
                                    v.Wa = URL.createObjectURL(new Blob([
                                        q
                                    ], {
                                        type: "image/png"
                                    }));
                                    J.onload = function() {
                                        v.Db = J;
                                        v.Ia = na.Kb(J);
                                        v.size(J.width, J.height);
                                        v.la && v.la(v);
                                    };
                                    J.src = v.Wa;
                                }
                            }), r = e.extend("CanvasRenderPath", {
                                __construct: function() {
                                    this.__parent.__construct.call(this);
                                    this.U = new Path2D();
                                },
                                rewind: function() {
                                    this.U = new Path2D();
                                },
                                addPath: function(q, v, J, G, A, H, E) {
                                    var M = this.U, ya = M.addPath;
                                    q = q.U;
                                    const T = new DOMMatrix();
                                    T.a = v;
                                    T.b = J;
                                    T.c = G;
                                    T.d = A;
                                    T.e = H;
                                    T.f = E;
                                    ya.call(M, q, T);
                                },
                                fillRule: function(q) {
                                    this.Va = q;
                                },
                                moveTo: function(q, v) {
                                    this.U.moveTo(q, v);
                                },
                                lineTo: function(q, v) {
                                    this.U.lineTo(q, v);
                                },
                                cubicTo: function(q, v, J, G, A, H) {
                                    this.U.bezierCurveTo(q, v, J, G, A, H);
                                },
                                close: function() {
                                    this.U.closePath();
                                }
                            }), D = f.extend("CanvasRenderPaint", {
                                color: function(q) {
                                    this.Xa = b(q);
                                },
                                thickness: function(q) {
                                    this.Hb = q;
                                },
                                join: function(q) {
                                    switch(q){
                                        case p.miter:
                                            this.Ha = "miter";
                                            break;
                                        case p.round:
                                            this.Ha = "round";
                                            break;
                                        case p.bevel:
                                            this.Ha = "bevel";
                                    }
                                },
                                cap: function(q) {
                                    switch(q){
                                        case k.butt:
                                            this.Ga = "butt";
                                            break;
                                        case k.round:
                                            this.Ga = "round";
                                            break;
                                        case k.square:
                                            this.Ga = "square";
                                    }
                                },
                                style: function(q) {
                                    this.Gb = q;
                                },
                                blendMode: function(q) {
                                    this.Cb = a(q);
                                },
                                clearGradient: function() {
                                    this.ja = null;
                                },
                                linearGradient: function(q, v, J, G) {
                                    this.ja = {
                                        xb: q,
                                        yb: v,
                                        cb: J,
                                        eb: G,
                                        Qa: []
                                    };
                                },
                                radialGradient: function(q, v, J, G) {
                                    this.ja = {
                                        xb: q,
                                        yb: v,
                                        cb: J,
                                        eb: G,
                                        Qa: [],
                                        bc: !0
                                    };
                                },
                                addStop: function(q, v) {
                                    this.ja.Qa.push({
                                        color: q,
                                        stop: v
                                    });
                                },
                                completeGradient: function() {},
                                draw: function(q, v, J, G) {
                                    let A = this.Gb;
                                    var H = this.Xa, E = this.ja;
                                    const M = q.globalCompositeOperation, ya = q.globalAlpha;
                                    q.globalCompositeOperation = this.Cb;
                                    q.globalAlpha = G;
                                    if (null != E) {
                                        H = E.xb;
                                        const X = E.yb, ha = E.cb;
                                        var T = E.eb;
                                        G = E.Qa;
                                        E.bc ? (E = ha - H, T -= X, H = q.createRadialGradient(H, X, 0, H, X, Math.sqrt(E * E + T * T))) : H = q.createLinearGradient(H, X, ha, T);
                                        for(let Y = 0, ba = G.length; Y < ba; Y++){
                                            E = G[Y], H.addColorStop(E.stop, b(E.color));
                                        }
                                        this.Xa = H;
                                        this.ja = null;
                                    }
                                    switch(A){
                                        case x:
                                            q.strokeStyle = H;
                                            q.lineWidth = this.Hb;
                                            q.lineCap = this.Ga;
                                            q.lineJoin = this.Ha;
                                            q.stroke(v);
                                            break;
                                        case t:
                                            q.fillStyle = H, q.fill(v, J);
                                    }
                                    q.globalCompositeOperation = M;
                                    q.globalAlpha = ya;
                                }
                            });
                            const I = new Set();
                            let w = null, L = [], R = 0, V = 0;
                            var qa = l.CanvasRenderer = g.extend("Renderer", {
                                __construct: function(q) {
                                    this.__parent.__construct.call(this);
                                    this.T = [
                                        1,
                                        0,
                                        0,
                                        1,
                                        0,
                                        0
                                    ];
                                    this.G = [
                                        1.0
                                    ];
                                    this.B = q.getContext("2d");
                                    this.Ua = q;
                                    this.I = [];
                                },
                                save: function() {
                                    this.T.push(...this.T.slice(this.T.length - 6));
                                    this.G.push(this.G[this.G.length - 1]);
                                    this.I.push(this.B.save.bind(this.B));
                                },
                                restore: function() {
                                    const q = this.T.length - 6;
                                    if (6 > q) {
                                        throw "restore() called without matching save().";
                                    }
                                    this.T.splice(q);
                                    this.G.pop();
                                    this.I.push(this.B.restore.bind(this.B));
                                },
                                transform: function(q, v, J, G, A, H) {
                                    const E = this.T, M = E.length - 6;
                                    E.splice(M, 6, E[M] * q + E[M + 2] * v, E[M + 1] * q + E[M + 3] * v, E[M] * J + E[M + 2] * G, E[M + 1] * J + E[M + 3] * G, E[M] * A + E[M + 2] * H + E[M + 4], E[M + 1] * A + E[M + 3] * H + E[M + 5]);
                                    this.I.push(this.B.transform.bind(this.B, q, v, J, G, A, H));
                                },
                                rotate: function(q) {
                                    const v = Math.sin(q);
                                    q = Math.cos(q);
                                    this.transform(q, v, -v, q, 0, 0);
                                },
                                modulateOpacity: function(q) {
                                    this.G[this.G.length - 1] *= q;
                                },
                                _drawPath: function(q, v) {
                                    this.I.push(v.draw.bind(v, this.B, q.U, q.Va === y ? "evenodd" : "nonzero", Math.max(0, this.G[this.G.length - 1])));
                                },
                                _drawRiveImage: function(q, v, J, G) {
                                    var A = q.Db;
                                    if (A) {
                                        var H = this.B, E = a(J), M = Math.max(0, G * this.G[this.G.length - 1]);
                                        this.I.push(function() {
                                            H.globalCompositeOperation = E;
                                            H.globalAlpha = M;
                                            H.drawImage(A, 0, 0);
                                            H.globalAlpha = 1;
                                        });
                                    }
                                },
                                _getMatrix: function(q) {
                                    const v = this.T, J = v.length - 6;
                                    for(let G = 0; 6 > G; ++G){
                                        q[G] = v[J + G];
                                    }
                                },
                                _drawImageMesh: function(q, v, J, G, A, H, E, M, ya, T, X, ha, Y, ba) {
                                    let ac, bc, cc;
                                    try {
                                        ac = l.HEAPF32.slice(A >> 2, (A >> 2) + H), bc = l.HEAPF32.slice(E >> 2, (E >> 2) + M), cc = l.HEAPU16.slice(ya >> 1, (ya >> 1) + T);
                                    } catch (tb) {
                                        console.error("[Rive] _drawImageMesh: failed to read mesh data from WASM heap. Mesh skipped for this frame.");
                                        return;
                                    }
                                    v = this.B.canvas.width;
                                    A = this.B.canvas.height;
                                    E = Y - X;
                                    M = ba - ha;
                                    X = Math.max(X, 0);
                                    ha = Math.max(ha, 0);
                                    Y = Math.min(Y, v);
                                    ba = Math.min(ba, A);
                                    const Ga = Y - X, Ha = ba - ha;
                                    console.assert(Ga <= Math.min(E, v));
                                    console.assert(Ha <= Math.min(M, A));
                                    if (!(0 >= Ga || 0 >= Ha)) {
                                        Y = Ga < E || Ha < M;
                                        v = ba = 1;
                                        var ra = Math.ceil(Ga * ba), sa = Math.ceil(Ha * v);
                                        A = na.cc();
                                        ra > A && (ba *= A / ra, ra = A);
                                        sa > A && (v *= A / sa, sa = A);
                                        w || (w = new l.DynamicRectanizer(A), w.reset(512, 512));
                                        A = w.addRect(ra, sa);
                                        0 > A && (c(), I.add(this), A = w.addRect(ra, sa), console.assert(0 <= A));
                                        var dc = A & 65535, ec = A >> 16;
                                        L.push({
                                            ha: this.T.slice(this.T.length - 6),
                                            image: q,
                                            Za: dc,
                                            $a: ec,
                                            dc: X,
                                            ec: ha,
                                            vc: ra,
                                            jb: sa,
                                            Aa: ba,
                                            Ba: v,
                                            Ta: ac,
                                            Bb: bc,
                                            indices: cc,
                                            ic: Y,
                                            vb: q.Ja << 1 | (Y ? 1 : 0)
                                        });
                                        R += H;
                                        V += T;
                                        var za = this.B, rd = a(J), sd = Math.max(0, G * this.G[this.G.length - 1]);
                                        this.I.push(function() {
                                            za.save();
                                            za.resetTransform();
                                            za.globalCompositeOperation = rd;
                                            za.globalAlpha = sd;
                                            const tb = na.canvas();
                                            tb && za.drawImage(tb, dc, ec, ra, sa, X, ha, Ga, Ha);
                                            za.restore();
                                        });
                                    }
                                },
                                _clipPath: function(q) {
                                    this.I.push(this.B.clip.bind(this.B, q.U, q.Va === y ? "evenodd" : "nonzero"));
                                },
                                clear: function() {
                                    I.add(this);
                                    this.I.push(this.B.clearRect.bind(this.B, 0, 0, this.Ua.width, this.Ua.height));
                                },
                                flush: function() {},
                                translate: function(q, v) {
                                    this.transform(1, 0, 0, 1, q, v);
                                }
                            });
                            l.makeRenderer = function(q) {
                                const v = new qa(q), J = v.B;
                                return new Proxy(v, {
                                    get (G, A) {
                                        if ("function" === typeof G[A]) {
                                            return function(...H) {
                                                return G[A].apply(G, H);
                                            };
                                        }
                                        if ("function" === typeof J[A]) {
                                            if (-1 < ma.indexOf(A)) {
                                                throw Error("RiveException: Method call to '" + A + "()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods.");
                                            }
                                            return function(...H) {
                                                v.I.push(J[A].bind(J, ...H));
                                            };
                                        }
                                        return G[A];
                                    },
                                    set (G, A, H) {
                                        if (A in J) {
                                            return v.I.push(()=>{
                                                J[A] = H;
                                            }), !0;
                                        }
                                    }
                                });
                            };
                            l.decodeImage = function(q, v) {
                                new u({
                                    la: v
                                }).decode(q);
                            };
                            l.renderFactory = {
                                makeRenderPaint: function() {
                                    return new D();
                                },
                                makeRenderPath: function() {
                                    return new r();
                                },
                                makeRenderImage: function() {
                                    let q = aa;
                                    return new u({
                                        wa: ()=>{
                                            q.total++;
                                        },
                                        la: ()=>{
                                            q.loaded++;
                                            if (q.loaded === q.total) {
                                                const v = q.ready;
                                                v && (v(), q.ready = null);
                                            }
                                        }
                                    });
                                }
                            };
                            let K = l.load, aa = null;
                            l.load = function(q, v, J = !0) {
                                const G = new l.FallbackFileAssetLoader();
                                void 0 !== v && G.addLoader(v);
                                J && (v = new l.CDNFileAssetLoader(), G.addLoader(v));
                                return new Promise(function(A) {
                                    let H = null;
                                    aa = {
                                        total: 0,
                                        loaded: 0,
                                        ready: function() {
                                            A(H);
                                        }
                                    };
                                    H = K(q, G);
                                    0 == aa.total && A(H);
                                });
                            };
                            let td = l.RendererWrapper.prototype.align;
                            l.RendererWrapper.prototype.align = function(q, v, J, G, A = 1.0) {
                                td.call(this, q, v, J, G, A);
                            };
                            d = new ja();
                            l.requestAnimationFrame = d.requestAnimationFrame.bind(d);
                            l.cancelAnimationFrame = d.cancelAnimationFrame.bind(d);
                            l.enableFPSCounter = d.Pb.bind(d);
                            l.disableFPSCounter = d.Mb;
                            d.ob = c;
                            l.resolveAnimationFrame = c;
                            l.cleanup = function() {
                                w && w.delete();
                            };
                        };
                        var pa = Object.assign({}, l), ta = "./this.program", ua = "", va, wa;
                        if (fa || ia) {
                            ia ? ua = self.location.href : "undefined" != typeof document && document.currentScript && (ua = document.currentScript.src), _scriptName && (ua = _scriptName), ua.startsWith("blob:") ? ua = "" : ua = ua.substr(0, ua.replace(/[?#].*/, "").lastIndexOf("/") + 1), ia && (wa = (a)=>{
                                var b = new XMLHttpRequest();
                                b.open("GET", a, !1);
                                b.responseType = "arraybuffer";
                                b.send(null);
                                return new Uint8Array(b.response);
                            }), va = (a, b, c)=>{
                                if (xa(a)) {
                                    var d = new XMLHttpRequest();
                                    d.open("GET", a, !0);
                                    d.responseType = "arraybuffer";
                                    d.onload = ()=>{
                                        200 == d.status || 0 == d.status && d.response ? b(d.response) : c();
                                    };
                                    d.onerror = c;
                                    d.send(null);
                                } else {
                                    fetch(a, {
                                        credentials: "same-origin"
                                    }).then((e)=>e.ok ? e.arrayBuffer() : Promise.reject(Error(e.status + " : " + e.url))).then(b, c);
                                }
                            };
                        }
                        var Aa = l.print || console.log.bind(console), Ba = l.printErr || console.error.bind(console);
                        Object.assign(l, pa);
                        pa = null;
                        l.thisProgram && (ta = l.thisProgram);
                        var Ca;
                        l.wasmBinary && (Ca = l.wasmBinary);
                        var Da, Ea = !1, z, B, Fa, Ia, C, F, Ja, Ka;
                        function La() {
                            var a = Da.buffer;
                            l.HEAP8 = z = new Int8Array(a);
                            l.HEAP16 = Fa = new Int16Array(a);
                            l.HEAPU8 = B = new Uint8Array(a);
                            l.HEAPU16 = Ia = new Uint16Array(a);
                            l.HEAP32 = C = new Int32Array(a);
                            l.HEAPU32 = F = new Uint32Array(a);
                            l.HEAPF32 = Ja = new Float32Array(a);
                            l.HEAPF64 = Ka = new Float64Array(a);
                        }
                        var Ma = [], Na = [], Oa = [];
                        function Pa() {
                            var a = l.preRun.shift();
                            Ma.unshift(a);
                        }
                        var Qa = 0, Ra = null, Sa = null;
                        function Ta(a) {
                            l.onAbort?.(a);
                            a = "Aborted(" + a + ")";
                            Ba(a);
                            Ea = !0;
                            a = new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
                            da(a);
                            throw a;
                        }
                        var Ua = (a)=>a.startsWith("data:application/octet-stream;base64,"), xa = (a)=>a.startsWith("file://"), Va;
                        function Wa(a) {
                            if (a == Va && Ca) {
                                return new Uint8Array(Ca);
                            }
                            if (wa) {
                                return wa(a);
                            }
                            throw "both async and sync fetching of the wasm failed";
                        }
                        function Xa(a) {
                            return Ca ? Promise.resolve().then(()=>Wa(a)) : new Promise((b, c)=>{
                                va(a, (d)=>b(new Uint8Array(d)), ()=>{
                                    try {
                                        b(Wa(a));
                                    } catch (d) {
                                        c(d);
                                    }
                                });
                            });
                        }
                        function Ya(a, b, c) {
                            return Xa(a).then((d)=>WebAssembly.instantiate(d, b)).then(c, (d)=>{
                                Ba(`failed to asynchronously prepare wasm: ${d}`);
                                Ta(d);
                            });
                        }
                        function Za(a, b) {
                            var c = Va;
                            return Ca || "function" != typeof WebAssembly.instantiateStreaming || Ua(c) || xa(c) || "function" != typeof fetch ? Ya(c, a, b) : fetch(c, {
                                credentials: "same-origin"
                            }).then((d)=>WebAssembly.instantiateStreaming(d, a).then(b, function(e) {
                                    Ba(`wasm streaming compile failed: ${e}`);
                                    Ba("falling back to ArrayBuffer instantiation");
                                    return Ya(c, a, b);
                                }));
                        }
                        var $a, ab, eb = {
                            486045: (a, b, c, d, e)=>{
                                if ("undefined" === typeof window || void 0 === (window.AudioContext || window.webkitAudioContext)) {
                                    return 0;
                                }
                                if ("undefined" === typeof window.h) {
                                    window.h = {
                                        za: 0
                                    };
                                    window.h.J = {};
                                    window.h.J.xa = a;
                                    window.h.J.capture = b;
                                    window.h.J.Ka = c;
                                    window.h.ga = {};
                                    window.h.ga.stopped = d;
                                    window.h.ga.wb = e;
                                    let f = window.h;
                                    f.D = [];
                                    f.tc = function(g) {
                                        for(var k = 0; k < f.D.length; ++k){
                                            if (null == f.D[k]) {
                                                return f.D[k] = g, k;
                                            }
                                        }
                                        f.D.push(g);
                                        return f.D.length - 1;
                                    };
                                    f.Ab = function(g) {
                                        for(f.D[g] = null; 0 < f.D.length;){
                                            if (null == f.D[f.D.length - 1]) {
                                                f.D.pop();
                                            } else {
                                                break;
                                            }
                                        }
                                    };
                                    f.Wc = function(g) {
                                        for(var k = 0; k < f.D.length; ++k){
                                            if (f.D[k] == g) {
                                                return f.Ab(k);
                                            }
                                        }
                                    };
                                    f.qa = function(g) {
                                        return f.D[g];
                                    };
                                    f.Sa = [
                                        "touchend",
                                        "click"
                                    ];
                                    f.unlock = function() {
                                        for(var g = 0; g < f.D.length; ++g){
                                            var k = f.D[g];
                                            null != k && null != k.L && k.state === f.ga.wb && k.L.resume().then(()=>{
                                                bb(k.pb);
                                            }, (p)=>{
                                                console.error("Failed to resume audiocontext", p);
                                            });
                                        }
                                        f.Sa.map(function(p) {
                                            document.removeEventListener(p, f.unlock, !0);
                                        });
                                    };
                                    f.Sa.map(function(g) {
                                        document.addEventListener(g, f.unlock, !0);
                                    });
                                }
                                window.h.za += 1;
                                return 1;
                            },
                            488223: ()=>{
                                "undefined" !== typeof window.h && (window.h.Sa.map(function(a) {
                                    document.removeEventListener(a, window.h.unlock, !0);
                                }), --window.h.za, 0 === window.h.za && delete window.h);
                            },
                            488527: ()=>void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia,
                            488631: ()=>{
                                try {
                                    var a = new (window.AudioContext || window.webkitAudioContext)(), b = a.sampleRate;
                                    a.close();
                                    return b;
                                } catch (c) {
                                    return 0;
                                }
                            },
                            488802: (a, b, c, d, e, f)=>{
                                if ("undefined" === typeof window.h) {
                                    return -1;
                                }
                                var g = {}, k = {};
                                a == window.h.J.xa && 0 != c && (k.sampleRate = c);
                                g.L = new (window.AudioContext || window.webkitAudioContext)(k);
                                g.L.suspend();
                                g.state = window.h.ga.stopped;
                                c = 0;
                                a != window.h.J.xa && (c = b);
                                g.Z = g.L.createScriptProcessor(d, c, b);
                                g.Z.onaudioprocess = function(p) {
                                    if (null == g.ra || 0 == g.ra.length) {
                                        g.ra = new Float32Array(Ja.buffer, e, d * b);
                                    }
                                    if (a == window.h.J.capture || a == window.h.J.Ka) {
                                        for(var n = 0; n < b; n += 1){
                                            for(var t = p.inputBuffer.getChannelData(n), x = g.ra, y = 0; y < d; y += 1){
                                                x[y * b + n] = t[y];
                                            }
                                        }
                                        cb(f, d, e);
                                    }
                                    if (a == window.h.J.xa || a == window.h.J.Ka) {
                                        for(db(f, d, e), n = 0; n < p.outputBuffer.numberOfChannels; ++n){
                                            for(t = p.outputBuffer.getChannelData(n), x = g.ra, y = 0; y < d; y += 1){
                                                t[y] = x[y * b + n];
                                            }
                                        }
                                    } else {
                                        for(n = 0; n < p.outputBuffer.numberOfChannels; ++n){
                                            p.outputBuffer.getChannelData(n).fill(0.0);
                                        }
                                    }
                                };
                                a != window.h.J.capture && a != window.h.J.Ka || navigator.mediaDevices.getUserMedia({
                                    audio: !0,
                                    video: !1
                                }).then(function(p) {
                                    g.Ca = g.L.createMediaStreamSource(p);
                                    g.Ca.connect(g.Z);
                                    g.Z.connect(g.L.destination);
                                }).catch(function(p) {
                                    console.log("Failed to get user media: " + p);
                                });
                                a == window.h.J.xa && g.Z.connect(g.L.destination);
                                g.pb = f;
                                return window.h.tc(g);
                            },
                            491679: (a)=>window.h.qa(a).L.sampleRate,
                            491752: (a)=>{
                                a = window.h.qa(a);
                                void 0 !== a.Z && (a.Z.onaudioprocess = function() {}, a.Z.disconnect(), a.Z = void 0);
                                void 0 !== a.Ca && (a.Ca.disconnect(), a.Ca = void 0);
                                a.L.close();
                                a.L = void 0;
                                a.pb = void 0;
                            },
                            492152: (a)=>{
                                window.h.Ab(a);
                            },
                            492202: (a)=>{
                                a = window.h.qa(a);
                                a.L.resume();
                                a.state = window.h.ga.wb;
                            },
                            492341: (a)=>{
                                a = window.h.qa(a);
                                a.L.suspend();
                                a.state = window.h.ga.stopped;
                            }
                        }, fb = (a)=>{
                            for(; 0 < a.length;){
                                a.shift()(l);
                            }
                        };
                        function gb() {
                            var a = C[+hb >> 2];
                            hb += 4;
                            return a;
                        }
                        var ib = (a, b)=>{
                            for(var c = 0, d = a.length - 1; 0 <= d; d--){
                                var e = a[d];
                                "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), c--);
                            }
                            if (b) {
                                for(; c; c--){
                                    a.unshift("..");
                                }
                            }
                            return a;
                        }, jb = (a)=>{
                            var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
                            (a = ib(a.split("/").filter((d)=>!!d), !b).join("/")) || b || (a = ".");
                            a && c && (a += "/");
                            return (b ? "/" : "") + a;
                        }, kb = (a)=>{
                            var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
                            a = b[0];
                            b = b[1];
                            if (!a && !b) {
                                return ".";
                            }
                            b &&= b.substr(0, b.length - 1);
                            return a + b;
                        }, lb = (a)=>{
                            if ("/" === a) {
                                return "/";
                            }
                            a = jb(a);
                            a = a.replace(/\/$/, "");
                            var b = a.lastIndexOf("/");
                            return -1 === b ? a : a.substr(b + 1);
                        }, mb = ()=>{
                            if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
                                return (a)=>crypto.getRandomValues(a);
                            }
                            Ta("initRandomDevice");
                        }, nb = (a)=>(nb = mb())(a), ob = (...a)=>{
                            for(var b = "", c = !1, d = a.length - 1; -1 <= d && !c; d--){
                                c = 0 <= d ? a[d] : "/";
                                if ("string" != typeof c) {
                                    throw new TypeError("Arguments to path.resolve must be strings");
                                }
                                if (!c) {
                                    return "";
                                }
                                b = c + "/" + b;
                                c = "/" === c.charAt(0);
                            }
                            b = ib(b.split("/").filter((e)=>!!e), !c).join("/");
                            return (c ? "/" : "") + b || ".";
                        }, pb = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0, qb = (a, b, c)=>{
                            var d = b + c;
                            for(c = b; a[c] && !(c >= d);){
                                ++c;
                            }
                            if (16 < c - b && a.buffer && pb) {
                                return pb.decode(a.subarray(b, c));
                            }
                            for(d = ""; b < c;){
                                var e = a[b++];
                                if (e & 128) {
                                    var f = a[b++] & 63;
                                    if (192 == (e & 224)) {
                                        d += String.fromCharCode((e & 31) << 6 | f);
                                    } else {
                                        var g = a[b++] & 63;
                                        e = 224 == (e & 240) ? (e & 15) << 12 | f << 6 | g : (e & 7) << 18 | f << 12 | g << 6 | a[b++] & 63;
                                        65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
                                    }
                                } else {
                                    d += String.fromCharCode(e);
                                }
                            }
                            return d;
                        }, rb = [], sb = (a)=>{
                            for(var b = 0, c = 0; c < a.length; ++c){
                                var d = a.charCodeAt(c);
                                127 >= d ? b++ : 2047 >= d ? b += 2 : 55296 <= d && 57343 >= d ? (b += 4, ++c) : b += 3;
                            }
                            return b;
                        }, ub = (a, b, c, d)=>{
                            if (!(0 < d)) {
                                return 0;
                            }
                            var e = c;
                            d = c + d - 1;
                            for(var f = 0; f < a.length; ++f){
                                var g = a.charCodeAt(f);
                                if (55296 <= g && 57343 >= g) {
                                    var k = a.charCodeAt(++f);
                                    g = 65536 + ((g & 1023) << 10) | k & 1023;
                                }
                                if (127 >= g) {
                                    if (c >= d) {
                                        break;
                                    }
                                    b[c++] = g;
                                } else {
                                    if (2047 >= g) {
                                        if (c + 1 >= d) {
                                            break;
                                        }
                                        b[c++] = 192 | g >> 6;
                                    } else {
                                        if (65535 >= g) {
                                            if (c + 2 >= d) {
                                                break;
                                            }
                                            b[c++] = 224 | g >> 12;
                                        } else {
                                            if (c + 3 >= d) {
                                                break;
                                            }
                                            b[c++] = 240 | g >> 18;
                                            b[c++] = 128 | g >> 12 & 63;
                                        }
                                        b[c++] = 128 | g >> 6 & 63;
                                    }
                                    b[c++] = 128 | g & 63;
                                }
                            }
                            b[c] = 0;
                            return c - e;
                        };
                        function vb(a, b) {
                            var c = Array(sb(a) + 1);
                            a = ub(a, c, 0, c.length);
                            b && (c.length = a);
                            return c;
                        }
                        var wb = [];
                        function xb(a, b) {
                            wb[a] = {
                                input: [],
                                H: [],
                                W: b
                            };
                            yb(a, zb);
                        }
                        var zb = {
                            open (a) {
                                var b = wb[a.node.ya];
                                if (!b) {
                                    throw new N(43);
                                }
                                a.s = b;
                                a.seekable = !1;
                            },
                            close (a) {
                                a.s.W.pa(a.s);
                            },
                            pa (a) {
                                a.s.W.pa(a.s);
                            },
                            read (a, b, c, d) {
                                if (!a.s || !a.s.W.ib) {
                                    throw new N(60);
                                }
                                for(var e = 0, f = 0; f < d; f++){
                                    try {
                                        var g = a.s.W.ib(a.s);
                                    } catch (k) {
                                        throw new N(29);
                                    }
                                    if (void 0 === g && 0 === e) {
                                        throw new N(6);
                                    }
                                    if (null === g || void 0 === g) {
                                        break;
                                    }
                                    e++;
                                    b[c + f] = g;
                                }
                                e && (a.node.timestamp = Date.now());
                                return e;
                            },
                            write (a, b, c, d) {
                                if (!a.s || !a.s.W.Na) {
                                    throw new N(60);
                                }
                                try {
                                    for(var e = 0; e < d; e++){
                                        a.s.W.Na(a.s, b[c + e]);
                                    }
                                } catch (f) {
                                    throw new N(29);
                                }
                                d && (a.node.timestamp = Date.now());
                                return e;
                            }
                        }, Ab = {
                            ib () {
                                a: {
                                    if (!rb.length) {
                                        var a = null;
                                        "undefined" != typeof window && "function" == typeof window.prompt && (a = window.prompt("Input: "), null !== a && (a += "\n"));
                                        if (!a) {
                                            a = null;
                                            break a;
                                        }
                                        rb = vb(a, !0);
                                    }
                                    a = rb.shift();
                                }
                                return a;
                            },
                            Na (a, b) {
                                null === b || 10 === b ? (Aa(qb(a.H, 0)), a.H = []) : 0 != b && a.H.push(b);
                            },
                            pa (a) {
                                a.H && 0 < a.H.length && (Aa(qb(a.H, 0)), a.H = []);
                            },
                            Zb () {
                                return {
                                    Fc: 25856,
                                    Hc: 5,
                                    Ec: 191,
                                    Gc: 35387,
                                    Dc: [
                                        3,
                                        28,
                                        127,
                                        21,
                                        4,
                                        0,
                                        1,
                                        0,
                                        17,
                                        19,
                                        26,
                                        0,
                                        18,
                                        15,
                                        23,
                                        22,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0,
                                        0
                                    ]
                                };
                            },
                            $b () {
                                return 0;
                            },
                            ac () {
                                return [
                                    24,
                                    80
                                ];
                            }
                        }, Bb = {
                            Na (a, b) {
                                null === b || 10 === b ? (Ba(qb(a.H, 0)), a.H = []) : 0 != b && a.H.push(b);
                            },
                            pa (a) {
                                a.H && 0 < a.H.length && (Ba(qb(a.H, 0)), a.H = []);
                            }
                        };
                        function Cb(a, b) {
                            var c = a.l ? a.l.length : 0;
                            c >= b || (b = Math.max(b, c * (1048576 > c ? 2.0 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.l, a.l = new Uint8Array(b), 0 < a.v && a.l.set(c.subarray(0, a.v), 0));
                        }
                        var O = {
                            O: null,
                            V () {
                                return O.createNode(null, "/", 16895, 0);
                            },
                            createNode (a, b, c, d) {
                                if (24576 === (c & 61440) || 4096 === (c & 61440)) {
                                    throw new N(63);
                                }
                                O.O || (O.O = {
                                    dir: {
                                        node: {
                                            Y: O.j.Y,
                                            R: O.j.R,
                                            ka: O.j.ka,
                                            ua: O.j.ua,
                                            tb: O.j.tb,
                                            zb: O.j.zb,
                                            ub: O.j.ub,
                                            sb: O.j.sb,
                                            Da: O.j.Da
                                        },
                                        stream: {
                                            ba: O.m.ba
                                        }
                                    },
                                    file: {
                                        node: {
                                            Y: O.j.Y,
                                            R: O.j.R
                                        },
                                        stream: {
                                            ba: O.m.ba,
                                            read: O.m.read,
                                            write: O.m.write,
                                            Ya: O.m.Ya,
                                            lb: O.m.lb,
                                            nb: O.m.nb
                                        }
                                    },
                                    link: {
                                        node: {
                                            Y: O.j.Y,
                                            R: O.j.R,
                                            ma: O.j.ma
                                        },
                                        stream: {}
                                    },
                                    ab: {
                                        node: {
                                            Y: O.j.Y,
                                            R: O.j.R
                                        },
                                        stream: Db
                                    }
                                });
                                c = Eb(a, b, c, d);
                                16384 === (c.mode & 61440) ? (c.j = O.O.dir.node, c.m = O.O.dir.stream, c.l = {}) : 32768 === (c.mode & 61440) ? (c.j = O.O.file.node, c.m = O.O.file.stream, c.v = 0, c.l = null) : 40960 === (c.mode & 61440) ? (c.j = O.O.link.node, c.m = O.O.link.stream) : 8192 === (c.mode & 61440) && (c.j = O.O.ab.node, c.m = O.O.ab.stream);
                                c.timestamp = Date.now();
                                a && (a.l[b] = c, a.timestamp = c.timestamp);
                                return c;
                            },
                            Lc (a) {
                                return a.l ? a.l.subarray ? a.l.subarray(0, a.v) : new Uint8Array(a.l) : new Uint8Array(0);
                            },
                            j: {
                                Y (a) {
                                    var b = {};
                                    b.Jc = 8192 === (a.mode & 61440) ? a.id : 1;
                                    b.Nc = a.id;
                                    b.mode = a.mode;
                                    b.Rc = 1;
                                    b.uid = 0;
                                    b.Mc = 0;
                                    b.ya = a.ya;
                                    16384 === (a.mode & 61440) ? b.size = 4096 : 32768 === (a.mode & 61440) ? b.size = a.v : 40960 === (a.mode & 61440) ? b.size = a.link.length : b.size = 0;
                                    b.Bc = new Date(a.timestamp);
                                    b.Qc = new Date(a.timestamp);
                                    b.Ic = new Date(a.timestamp);
                                    b.Ib = 4096;
                                    b.Cc = Math.ceil(b.size / b.Ib);
                                    return b;
                                },
                                R (a, b) {
                                    void 0 !== b.mode && (a.mode = b.mode);
                                    void 0 !== b.timestamp && (a.timestamp = b.timestamp);
                                    if (void 0 !== b.size && (b = b.size, a.v != b)) {
                                        if (0 == b) {
                                            a.l = null, a.v = 0;
                                        } else {
                                            var c = a.l;
                                            a.l = new Uint8Array(b);
                                            c && a.l.set(c.subarray(0, Math.min(b, a.v)));
                                            a.v = b;
                                        }
                                    }
                                },
                                ka () {
                                    throw Fb[44];
                                },
                                ua (a, b, c, d) {
                                    return O.createNode(a, b, c, d);
                                },
                                tb (a, b, c) {
                                    if (16384 === (a.mode & 61440)) {
                                        try {
                                            var d = Gb(b, c);
                                        } catch (f) {}
                                        if (d) {
                                            for(var e in d.l){
                                                throw new N(55);
                                            }
                                        }
                                    }
                                    delete a.parent.l[a.name];
                                    a.parent.timestamp = Date.now();
                                    a.name = c;
                                    b.l[c] = a;
                                    b.timestamp = a.parent.timestamp;
                                },
                                zb (a, b) {
                                    delete a.l[b];
                                    a.timestamp = Date.now();
                                },
                                ub (a, b) {
                                    var c = Gb(a, b), d;
                                    for(d in c.l){
                                        throw new N(55);
                                    }
                                    delete a.l[b];
                                    a.timestamp = Date.now();
                                },
                                sb (a) {
                                    var b = [
                                        ".",
                                        ".."
                                    ], c;
                                    for (c of Object.keys(a.l)){
                                        b.push(c);
                                    }
                                    return b;
                                },
                                Da (a, b, c) {
                                    a = O.createNode(a, b, 41471, 0);
                                    a.link = c;
                                    return a;
                                },
                                ma (a) {
                                    if (40960 !== (a.mode & 61440)) {
                                        throw new N(28);
                                    }
                                    return a.link;
                                }
                            },
                            m: {
                                read (a, b, c, d, e) {
                                    var f = a.node.l;
                                    if (e >= a.node.v) {
                                        return 0;
                                    }
                                    a = Math.min(a.node.v - e, d);
                                    if (8 < a && f.subarray) {
                                        b.set(f.subarray(e, e + a), c);
                                    } else {
                                        for(d = 0; d < a; d++){
                                            b[c + d] = f[e + d];
                                        }
                                    }
                                    return a;
                                },
                                write (a, b, c, d, e, f) {
                                    b.buffer === z.buffer && (f = !1);
                                    if (!d) {
                                        return 0;
                                    }
                                    a = a.node;
                                    a.timestamp = Date.now();
                                    if (b.subarray && (!a.l || a.l.subarray)) {
                                        if (f) {
                                            return a.l = b.subarray(c, c + d), a.v = d;
                                        }
                                        if (0 === a.v && 0 === e) {
                                            return a.l = b.slice(c, c + d), a.v = d;
                                        }
                                        if (e + d <= a.v) {
                                            return a.l.set(b.subarray(c, c + d), e), d;
                                        }
                                    }
                                    Cb(a, e + d);
                                    if (a.l.subarray && b.subarray) {
                                        a.l.set(b.subarray(c, c + d), e);
                                    } else {
                                        for(f = 0; f < d; f++){
                                            a.l[e + f] = b[c + f];
                                        }
                                    }
                                    a.v = Math.max(a.v, e + d);
                                    return d;
                                },
                                ba (a, b, c) {
                                    1 === c ? b += a.position : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.v);
                                    if (0 > b) {
                                        throw new N(28);
                                    }
                                    return b;
                                },
                                Ya (a, b, c) {
                                    Cb(a.node, b + c);
                                    a.node.v = Math.max(a.node.v, b + c);
                                },
                                lb (a, b, c, d, e) {
                                    if (32768 !== (a.node.mode & 61440)) {
                                        throw new N(43);
                                    }
                                    a = a.node.l;
                                    if (e & 2 || a.buffer !== z.buffer) {
                                        if (0 < c || c + b < a.length) {
                                            a.subarray ? a = a.subarray(c, c + b) : a = Array.prototype.slice.call(a, c, c + b);
                                        }
                                        c = !0;
                                        Ta();
                                        b = void 0;
                                        if (!b) {
                                            throw new N(48);
                                        }
                                        z.set(a, b);
                                    } else {
                                        c = !1, b = a.byteOffset;
                                    }
                                    return {
                                        o: b,
                                        Ac: c
                                    };
                                },
                                nb (a, b, c, d) {
                                    O.m.write(a, b, 0, d, c, !1);
                                    return 0;
                                }
                            }
                        }, Hb = (a, b)=>{
                            var c = 0;
                            a && (c |= 365);
                            b && (c |= 146);
                            return c;
                        }, Ib = null, Jb = {}, Kb = [], Lb = 1, Mb = null, Nb = !0, N = class {
                            constructor(a){
                                this.name = "ErrnoError";
                                this.aa = a;
                            }
                        }, Fb = {}, Ob = class {
                            constructor(){
                                this.h = {};
                                this.node = null;
                            }
                            get flags() {
                                return this.h.flags;
                            }
                            set flags(a) {
                                this.h.flags = a;
                            }
                            get position() {
                                return this.h.position;
                            }
                            set position(a) {
                                this.h.position = a;
                            }
                        }, Pb = class {
                            constructor(a, b, c, d){
                                a ||= this;
                                this.parent = a;
                                this.V = a.V;
                                this.va = null;
                                this.id = Lb++;
                                this.name = b;
                                this.mode = c;
                                this.j = {};
                                this.m = {};
                                this.ya = d;
                            }
                            get read() {
                                return 365 === (this.mode & 365);
                            }
                            set read(a) {
                                a ? this.mode |= 365 : this.mode &= -366;
                            }
                            get write() {
                                return 146 === (this.mode & 146);
                            }
                            set write(a) {
                                a ? this.mode |= 146 : this.mode &= -147;
                            }
                        };
                        function Qb(a, b = {}) {
                            a = ob(a);
                            if (!a) {
                                return {
                                    path: "",
                                    node: null
                                };
                            }
                            b = Object.assign({
                                hb: !0,
                                Pa: 0
                            }, b);
                            if (8 < b.Pa) {
                                throw new N(32);
                            }
                            a = a.split("/").filter((g)=>!!g);
                            for(var c = Ib, d = "/", e = 0; e < a.length; e++){
                                var f = e === a.length - 1;
                                if (f && b.parent) {
                                    break;
                                }
                                c = Gb(c, a[e]);
                                d = jb(d + "/" + a[e]);
                                c.va && (!f || f && b.hb) && (c = c.va.root);
                                if (!f || b.gb) {
                                    for(f = 0; 40960 === (c.mode & 61440);){
                                        if (c = Rb(d), d = ob(kb(d), c), c = Qb(d, {
                                            Pa: b.Pa + 1
                                        }).node, 40 < f++) {
                                            throw new N(32);
                                        }
                                    }
                                }
                            }
                            return {
                                path: d,
                                node: c
                            };
                        }
                        function Sb(a) {
                            for(var b;;){
                                if (a === a.parent) {
                                    return a = a.V.mb, b ? "/" !== a[a.length - 1] ? `${a}/${b}` : a + b : a;
                                }
                                b = b ? `${a.name}/${b}` : a.name;
                                a = a.parent;
                            }
                        }
                        function Tb(a, b) {
                            for(var c = 0, d = 0; d < b.length; d++){
                                c = (c << 5) - c + b.charCodeAt(d) | 0;
                            }
                            return (a + c >>> 0) % Mb.length;
                        }
                        function Gb(a, b) {
                            var c = 16384 === (a.mode & 61440) ? (c = Ub(a, "x")) ? c : a.j.ka ? 0 : 2 : 54;
                            if (c) {
                                throw new N(c);
                            }
                            for(c = Mb[Tb(a.id, b)]; c; c = c.hc){
                                var d = c.name;
                                if (c.parent.id === a.id && d === b) {
                                    return c;
                                }
                            }
                            return a.j.ka(a, b);
                        }
                        function Eb(a, b, c, d) {
                            a = new Pb(a, b, c, d);
                            b = Tb(a.parent.id, a.name);
                            a.hc = Mb[b];
                            return Mb[b] = a;
                        }
                        function Vb(a) {
                            var b = [
                                "r",
                                "w",
                                "rw"
                            ][a & 3];
                            a & 512 && (b += "w");
                            return b;
                        }
                        function Ub(a, b) {
                            if (Nb) {
                                return 0;
                            }
                            if (!b.includes("r") || a.mode & 292) {
                                if (b.includes("w") && !(a.mode & 146) || b.includes("x") && !(a.mode & 73)) {
                                    return 2;
                                }
                            } else {
                                return 2;
                            }
                            return 0;
                        }
                        function Wb(a, b) {
                            try {
                                return Gb(a, b), 20;
                            } catch (c) {}
                            return Ub(a, "wx");
                        }
                        function Xb(a) {
                            a = Kb[a];
                            if (!a) {
                                throw new N(8);
                            }
                            return a;
                        }
                        function Yb(a, b = -1) {
                            a = Object.assign(new Ob(), a);
                            if (-1 == b) {
                                a: {
                                    for(b = 0; 4096 >= b; b++){
                                        if (!Kb[b]) {
                                            break a;
                                        }
                                    }
                                    throw new N(33);
                                }
                            }
                            a.X = b;
                            return Kb[b] = a;
                        }
                        function Zb(a, b = -1) {
                            a = Yb(a, b);
                            a.m?.Kc?.(a);
                            return a;
                        }
                        var Db = {
                            open (a) {
                                a.m = Jb[a.node.ya].m;
                                a.m.open?.(a);
                            },
                            ba () {
                                throw new N(70);
                            }
                        };
                        function yb(a, b) {
                            Jb[a] = {
                                m: b
                            };
                        }
                        function $b(a, b) {
                            var c = "/" === b;
                            if (c && Ib) {
                                throw new N(10);
                            }
                            if (!c && b) {
                                var d = Qb(b, {
                                    hb: !1
                                });
                                b = d.path;
                                d = d.node;
                                if (d.va) {
                                    throw new N(10);
                                }
                                if (16384 !== (d.mode & 61440)) {
                                    throw new N(54);
                                }
                            }
                            b = {
                                type: a,
                                Tc: {},
                                mb: b,
                                fc: []
                            };
                            a = a.V(b);
                            a.V = b;
                            b.root = a;
                            c ? Ib = a : d && (d.va = b, d.V && d.V.fc.push(b));
                        }
                        function fc(a, b, c) {
                            var d = Qb(a, {
                                parent: !0
                            }).node;
                            a = lb(a);
                            if (!a || "." === a || ".." === a) {
                                throw new N(28);
                            }
                            var e = Wb(d, a);
                            if (e) {
                                throw new N(e);
                            }
                            if (!d.j.ua) {
                                throw new N(63);
                            }
                            return d.j.ua(d, a, b, c);
                        }
                        function gc(a) {
                            return fc(a, 16895, 0);
                        }
                        function hc(a, b, c) {
                            "undefined" == typeof c && (c = b, b = 438);
                            fc(a, b | 8192, c);
                        }
                        function ic(a, b) {
                            if (!ob(a)) {
                                throw new N(44);
                            }
                            var c = Qb(b, {
                                parent: !0
                            }).node;
                            if (!c) {
                                throw new N(44);
                            }
                            b = lb(b);
                            var d = Wb(c, b);
                            if (d) {
                                throw new N(d);
                            }
                            if (!c.j.Da) {
                                throw new N(63);
                            }
                            c.j.Da(c, b, a);
                        }
                        function Rb(a) {
                            a = Qb(a).node;
                            if (!a) {
                                throw new N(44);
                            }
                            if (!a.j.ma) {
                                throw new N(28);
                            }
                            return ob(Sb(a.parent), a.j.ma(a));
                        }
                        function jc(a, b, c) {
                            if ("" === a) {
                                throw new N(44);
                            }
                            if ("string" == typeof b) {
                                var d = {
                                    r: 0,
                                    "r+": 2,
                                    w: 577,
                                    "w+": 578,
                                    a: 1089,
                                    "a+": 1090
                                }[b];
                                if ("undefined" == typeof d) {
                                    throw Error(`Unknown file open mode: ${b}`);
                                }
                                b = d;
                            }
                            c = b & 64 ? ("undefined" == typeof c ? 438 : c) & 4095 | 32768 : 0;
                            if ("object" == typeof a) {
                                var e = a;
                            } else {
                                a = jb(a);
                                try {
                                    e = Qb(a, {
                                        gb: !(b & 131072)
                                    }).node;
                                } catch (f) {}
                            }
                            d = !1;
                            if (b & 64) {
                                if (e) {
                                    if (b & 128) {
                                        throw new N(20);
                                    }
                                } else {
                                    e = fc(a, c, 0), d = !0;
                                }
                            }
                            if (!e) {
                                throw new N(44);
                            }
                            8192 === (e.mode & 61440) && (b &= -513);
                            if (b & 65536 && 16384 !== (e.mode & 61440)) {
                                throw new N(54);
                            }
                            if (!d && (c = e ? 40960 === (e.mode & 61440) ? 32 : 16384 === (e.mode & 61440) && ("r" !== Vb(b) || b & 512) ? 31 : Ub(e, Vb(b)) : 44)) {
                                throw new N(c);
                            }
                            if (b & 512 && !d) {
                                c = e;
                                c = "string" == typeof c ? Qb(c, {
                                    gb: !0
                                }).node : c;
                                if (!c.j.R) {
                                    throw new N(63);
                                }
                                if (16384 === (c.mode & 61440)) {
                                    throw new N(31);
                                }
                                if (32768 !== (c.mode & 61440)) {
                                    throw new N(28);
                                }
                                if (d = Ub(c, "w")) {
                                    throw new N(d);
                                }
                                c.j.R(c, {
                                    size: 0,
                                    timestamp: Date.now()
                                });
                            }
                            b &= -131713;
                            e = Yb({
                                node: e,
                                path: Sb(e),
                                flags: b,
                                seekable: !0,
                                position: 0,
                                m: e.m,
                                uc: [],
                                error: !1
                            });
                            e.m.open && e.m.open(e);
                            !l.logReadFiles || b & 1 || (kc ||= {}, a in kc || (kc[a] = 1));
                            return e;
                        }
                        function lc(a, b, c) {
                            if (null === a.X) {
                                throw new N(8);
                            }
                            if (!a.seekable || !a.m.ba) {
                                throw new N(70);
                            }
                            if (0 != c && 1 != c && 2 != c) {
                                throw new N(28);
                            }
                            a.position = a.m.ba(a, b, c);
                            a.uc = [];
                        }
                        var mc;
                        function nc(a, b, c) {
                            a = jb("/dev/" + a);
                            var d = Hb(!!b, !!c);
                            oc ||= 64;
                            var e = oc++ << 8 | 0;
                            yb(e, {
                                open (f) {
                                    f.seekable = !1;
                                },
                                close () {
                                    c?.buffer?.length && c(10);
                                },
                                read (f, g, k, p) {
                                    for(var n = 0, t = 0; t < p; t++){
                                        try {
                                            var x = b();
                                        } catch (y) {
                                            throw new N(29);
                                        }
                                        if (void 0 === x && 0 === n) {
                                            throw new N(6);
                                        }
                                        if (null === x || void 0 === x) {
                                            break;
                                        }
                                        n++;
                                        g[k + t] = x;
                                    }
                                    n && (f.node.timestamp = Date.now());
                                    return n;
                                },
                                write (f, g, k, p) {
                                    for(var n = 0; n < p; n++){
                                        try {
                                            c(g[k + n]);
                                        } catch (t) {
                                            throw new N(29);
                                        }
                                    }
                                    p && (f.node.timestamp = Date.now());
                                    return n;
                                }
                            });
                            hc(a, d, e);
                        }
                        var oc, pc = {}, kc, hb = void 0, qc = (a, b)=>Object.defineProperty(b, "name", {
                                value: a
                            }), rc = [], sc = [], P, Q = (a)=>{
                            if (!a) {
                                throw new P("Cannot use deleted val. handle = " + a);
                            }
                            return sc[a];
                        }, tc = (a)=>{
                            switch(a){
                                case void 0:
                                    return 2;
                                case null:
                                    return 4;
                                case !0:
                                    return 6;
                                case !1:
                                    return 8;
                                default:
                                    const b = rc.pop() || sc.length;
                                    sc[b] = a;
                                    sc[b + 1] = 1;
                                    return b;
                            }
                        }, uc = (a)=>{
                            var b = Error, c = qc(a, function(d) {
                                this.name = a;
                                this.message = d;
                                d = Error(d).stack;
                                void 0 !== d && (this.stack = this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
                            });
                            c.prototype = Object.create(b.prototype);
                            c.prototype.constructor = c;
                            c.prototype.toString = function() {
                                return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
                            };
                            return c;
                        }, vc, wc, S = (a)=>{
                            for(var b = ""; B[a];){
                                b += wc[B[a++]];
                            }
                            return b;
                        }, xc = [], yc = ()=>{
                            for(; xc.length;){
                                var a = xc.pop();
                                a.g.fa = !1;
                                a["delete"]();
                            }
                        }, zc, Ac = {}, Bc = (a, b)=>{
                            if (void 0 === b) {
                                throw new P("ptr should not be undefined");
                            }
                            for(; a.C;){
                                b = a.na(b), a = a.C;
                            }
                            return b;
                        }, Cc = {}, Fc = (a)=>{
                            a = Dc(a);
                            var b = S(a);
                            Ec(a);
                            return b;
                        }, Gc = (a, b)=>{
                            var c = Cc[a];
                            if (void 0 === c) {
                                throw a = `${b} has unknown type ${Fc(a)}`, new P(a);
                            }
                            return c;
                        }, Hc = ()=>{}, Ic = !1, Jc = (a, b, c)=>{
                            if (b === c) {
                                return a;
                            }
                            if (void 0 === c.C) {
                                return null;
                            }
                            a = Jc(a, b, c.C);
                            return null === a ? null : c.Nb(a);
                        }, Kc = {}, Lc = (a, b)=>{
                            b = Bc(a, b);
                            return Ac[b];
                        }, Mc, Oc = (a, b)=>{
                            if (!b.u || !b.o) {
                                throw new Mc("makeClassHandle requires ptr and ptrType");
                            }
                            if (!!b.K !== !!b.F) {
                                throw new Mc("Both smartPtrType and smartPtr must be specified");
                            }
                            b.count = {
                                value: 1
                            };
                            return Nc(Object.create(a, {
                                g: {
                                    value: b,
                                    writable: !0
                                }
                            }));
                        }, Nc = (a)=>{
                            if ("undefined" === typeof FinalizationRegistry) {
                                return Nc = (b)=>b, a;
                            }
                            Ic = new FinalizationRegistry((b)=>{
                                b = b.g;
                                --b.count.value;
                                0 === b.count.value && (b.F ? b.K.P(b.F) : b.u.i.P(b.o));
                            });
                            Nc = (b)=>{
                                var c = b.g;
                                c.F && Ic.register(b, {
                                    g: c
                                }, b);
                                return b;
                            };
                            Hc = (b)=>{
                                Ic.unregister(b);
                            };
                            return Nc(a);
                        }, Pc = {}, Qc = (a)=>{
                            for(; a.length;){
                                var b = a.pop();
                                a.pop()(b);
                            }
                        };
                        function Rc(a) {
                            return this.fromWireType(F[a >> 2]);
                        }
                        var Sc = {}, Tc = {}, U = (a, b, c)=>{
                            function d(k) {
                                k = c(k);
                                if (k.length !== a.length) {
                                    throw new Mc("Mismatched type converter count");
                                }
                                for(var p = 0; p < a.length; ++p){
                                    Uc(a[p], k[p]);
                                }
                            }
                            a.forEach(function(k) {
                                Tc[k] = b;
                            });
                            var e = Array(b.length), f = [], g = 0;
                            b.forEach((k, p)=>{
                                Cc.hasOwnProperty(k) ? e[p] = Cc[k] : (f.push(k), Sc.hasOwnProperty(k) || (Sc[k] = []), Sc[k].push(()=>{
                                    e[p] = Cc[k];
                                    ++g;
                                    g === f.length && d(e);
                                }));
                            });
                            0 === f.length && d(e);
                        };
                        function Vc(a, b, c = {}) {
                            var d = b.name;
                            if (!a) {
                                throw new P(`type "${d}" must have a positive integer typeid pointer`);
                            }
                            if (Cc.hasOwnProperty(a)) {
                                if (c.Xb) {
                                    return;
                                }
                                throw new P(`Cannot register type '${d}' twice`);
                            }
                            Cc[a] = b;
                            delete Tc[a];
                            Sc.hasOwnProperty(a) && (b = Sc[a], delete Sc[a], b.forEach((e)=>e()));
                        }
                        function Uc(a, b, c = {}) {
                            if (!("argPackAdvance" in b)) {
                                throw new TypeError("registerType registeredInstance requires argPackAdvance");
                            }
                            return Vc(a, b, c);
                        }
                        var Wc = (a)=>{
                            throw new P(a.g.u.i.name + " instance already deleted");
                        };
                        function Xc() {}
                        var Yc = (a, b, c)=>{
                            if (void 0 === a[b].A) {
                                var d = a[b];
                                a[b] = function(...e) {
                                    if (!a[b].A.hasOwnProperty(e.length)) {
                                        throw new P(`Function '${c}' called with an invalid number of arguments (${e.length}) - expects one of (${a[b].A})!`);
                                    }
                                    return a[b].A[e.length].apply(this, e);
                                };
                                a[b].A = [];
                                a[b].A[d.ea] = d;
                            }
                        }, Zc = (a, b, c)=>{
                            if (l.hasOwnProperty(a)) {
                                if (void 0 === c || void 0 !== l[a].A && void 0 !== l[a].A[c]) {
                                    throw new P(`Cannot register public name '${a}' twice`);
                                }
                                Yc(l, a, a);
                                if (l.hasOwnProperty(c)) {
                                    throw new P(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`);
                                }
                                l[a].A[c] = b;
                            } else {
                                l[a] = b, void 0 !== c && (l[a].Sc = c);
                            }
                        }, $c = (a)=>{
                            if (void 0 === a) {
                                return "_unknown";
                            }
                            a = a.replace(/[^a-zA-Z0-9_]/g, "$");
                            var b = a.charCodeAt(0);
                            return 48 <= b && 57 >= b ? `_${a}` : a;
                        };
                        function ad(a, b, c, d, e, f, g, k) {
                            this.name = a;
                            this.constructor = b;
                            this.N = c;
                            this.P = d;
                            this.C = e;
                            this.Sb = f;
                            this.na = g;
                            this.Nb = k;
                            this.qb = [];
                        }
                        var bd = (a, b, c)=>{
                            for(; b !== c;){
                                if (!b.na) {
                                    throw new P(`Expected null or instance of ${c.name}, got an instance of ${b.name}`);
                                }
                                a = b.na(a);
                                b = b.C;
                            }
                            return a;
                        };
                        function cd(a, b) {
                            if (null === b) {
                                if (this.Ma) {
                                    throw new P(`null is not a valid ${this.name}`);
                                }
                                return 0;
                            }
                            if (!b.g) {
                                throw new P(`Cannot pass "${dd(b)}" as a ${this.name}`);
                            }
                            if (!b.g.o) {
                                throw new P(`Cannot pass deleted object as a pointer of type ${this.name}`);
                            }
                            return bd(b.g.o, b.g.u.i, this.i);
                        }
                        function ed(a, b) {
                            if (null === b) {
                                if (this.Ma) {
                                    throw new P(`null is not a valid ${this.name}`);
                                }
                                if (this.ta) {
                                    var c = this.Oa();
                                    null !== a && a.push(this.P, c);
                                    return c;
                                }
                                return 0;
                            }
                            if (!b || !b.g) {
                                throw new P(`Cannot pass "${dd(b)}" as a ${this.name}`);
                            }
                            if (!b.g.o) {
                                throw new P(`Cannot pass deleted object as a pointer of type ${this.name}`);
                            }
                            if (!this.sa && b.g.u.sa) {
                                throw new P(`Cannot convert argument of type ${b.g.K ? b.g.K.name : b.g.u.name} to parameter type ${this.name}`);
                            }
                            c = bd(b.g.o, b.g.u.i, this.i);
                            if (this.ta) {
                                if (void 0 === b.g.F) {
                                    throw new P("Passing raw pointer to smart pointer is illegal");
                                }
                                switch(this.oc){
                                    case 0:
                                        if (b.g.K === this) {
                                            c = b.g.F;
                                        } else {
                                            throw new P(`Cannot convert argument of type ${b.g.K ? b.g.K.name : b.g.u.name} to parameter type ${this.name}`);
                                        }
                                        break;
                                    case 1:
                                        c = b.g.F;
                                        break;
                                    case 2:
                                        if (b.g.K === this) {
                                            c = b.g.F;
                                        } else {
                                            var d = b.clone();
                                            c = this.kc(c, tc(()=>d["delete"]()));
                                            null !== a && a.push(this.P, c);
                                        }
                                        break;
                                    default:
                                        throw new P("Unsupporting sharing policy");
                                }
                            }
                            return c;
                        }
                        function fd(a, b) {
                            if (null === b) {
                                if (this.Ma) {
                                    throw new P(`null is not a valid ${this.name}`);
                                }
                                return 0;
                            }
                            if (!b.g) {
                                throw new P(`Cannot pass "${dd(b)}" as a ${this.name}`);
                            }
                            if (!b.g.o) {
                                throw new P(`Cannot pass deleted object as a pointer of type ${this.name}`);
                            }
                            if (b.g.u.sa) {
                                throw new P(`Cannot convert argument of type ${b.g.u.name} to parameter type ${this.name}`);
                            }
                            return bd(b.g.o, b.g.u.i, this.i);
                        }
                        function gd(a, b, c, d, e, f, g, k, p, n, t) {
                            this.name = a;
                            this.i = b;
                            this.Ma = c;
                            this.sa = d;
                            this.ta = e;
                            this.jc = f;
                            this.oc = g;
                            this.rb = k;
                            this.Oa = p;
                            this.kc = n;
                            this.P = t;
                            e || void 0 !== b.C ? this.toWireType = ed : (this.toWireType = d ? cd : fd, this.M = null);
                        }
                        var hd = (a, b, c)=>{
                            if (!l.hasOwnProperty(a)) {
                                throw new Mc("Replacing nonexistent public symbol");
                            }
                            void 0 !== l[a].A && void 0 !== c ? l[a].A[c] = b : (l[a] = b, l[a].ea = c);
                        }, jd = [], kd, ld = (a)=>{
                            var b = jd[a];
                            b || (a >= jd.length && (jd.length = a + 1), jd[a] = b = kd.get(a));
                            return b;
                        }, md = (a, b, c = [])=>{
                            a.includes("j") ? (a = a.replace(/p/g, "i"), b = (0, l["dynCall_" + a])(b, ...c)) : b = ld(b)(...c);
                            return b;
                        }, nd = (a, b)=>(...c)=>md(a, b, c), W = (a, b)=>{
                            a = S(a);
                            var c = a.includes("j") ? nd(a, b) : ld(b);
                            if ("function" != typeof c) {
                                throw new P(`unknown function pointer with signature ${a}: ${b}`);
                            }
                            return c;
                        }, od, pd = (a, b)=>{
                            function c(f) {
                                e[f] || Cc[f] || (Tc[f] ? Tc[f].forEach(c) : (d.push(f), e[f] = !0));
                            }
                            var d = [], e = {};
                            b.forEach(c);
                            throw new od(`${a}: ` + d.map(Fc).join([
                                ", "
                            ]));
                        };
                        function qd(a) {
                            for(var b = 1; b < a.length; ++b){
                                if (null !== a[b] && void 0 === a[b].M) {
                                    return !0;
                                }
                            }
                            return !1;
                        }
                        function ud(a, b, c, d, e) {
                            var f = b.length;
                            if (2 > f) {
                                throw new P("argTypes array size mismatch! Must at least get return value and 'this' types!");
                            }
                            var g = null !== b[1] && null !== c, k = qd(b), p = "void" !== b[0].name, n = f - 2, t = Array(n), x = [], y = [];
                            return qc(a, function(...m) {
                                if (m.length !== n) {
                                    throw new P(`function ${a} called with ${m.length} arguments, expected ${n}`);
                                }
                                y.length = 0;
                                x.length = g ? 2 : 1;
                                x[0] = e;
                                if (g) {
                                    var u = b[1].toWireType(y, this);
                                    x[1] = u;
                                }
                                for(var r = 0; r < n; ++r){
                                    t[r] = b[r + 2].toWireType(y, m[r]), x.push(t[r]);
                                }
                                m = d(...x);
                                if (k) {
                                    Qc(y);
                                } else {
                                    for(r = g ? 1 : 2; r < b.length; r++){
                                        var D = 1 === r ? u : t[r - 2];
                                        null !== b[r].M && b[r].M(D);
                                    }
                                }
                                u = p ? b[0].fromWireType(m) : void 0;
                                return u;
                            });
                        }
                        var vd = (a, b)=>{
                            for(var c = [], d = 0; d < a; d++){
                                c.push(F[b + 4 * d >> 2]);
                            }
                            return c;
                        }, wd = (a)=>{
                            a = a.trim();
                            const b = a.indexOf("(");
                            return -1 !== b ? a.substr(0, b) : a;
                        }, xd = (a, b, c)=>{
                            if (!(a instanceof Object)) {
                                throw new P(`${c} with invalid "this": ${a}`);
                            }
                            if (!(a instanceof b.i.constructor)) {
                                throw new P(`${c} incompatible with "this" of type ${a.constructor.name}`);
                            }
                            if (!a.g.o) {
                                throw new P(`cannot call emscripten binding method ${c} on deleted object`);
                            }
                            return bd(a.g.o, a.g.u.i, b.i);
                        }, yd = (a)=>{
                            9 < a && 0 === --sc[a + 1] && (sc[a] = void 0, rc.push(a));
                        }, zd = {
                            name: "emscripten::val",
                            fromWireType: (a)=>{
                                var b = Q(a);
                                yd(a);
                                return b;
                            },
                            toWireType: (a, b)=>tc(b),
                            argPackAdvance: 8,
                            readValueFromPointer: Rc,
                            M: null
                        }, Ad = (a, b, c)=>{
                            switch(b){
                                case 1:
                                    return c ? function(d) {
                                        return this.fromWireType(z[d]);
                                    } : function(d) {
                                        return this.fromWireType(B[d]);
                                    };
                                case 2:
                                    return c ? function(d) {
                                        return this.fromWireType(Fa[d >> 1]);
                                    } : function(d) {
                                        return this.fromWireType(Ia[d >> 1]);
                                    };
                                case 4:
                                    return c ? function(d) {
                                        return this.fromWireType(C[d >> 2]);
                                    } : function(d) {
                                        return this.fromWireType(F[d >> 2]);
                                    };
                                default:
                                    throw new TypeError(`invalid integer width (${b}): ${a}`);
                            }
                        }, dd = (a)=>{
                            if (null === a) {
                                return "null";
                            }
                            var b = typeof a;
                            return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
                        }, Bd = (a, b)=>{
                            switch(b){
                                case 4:
                                    return function(c) {
                                        return this.fromWireType(Ja[c >> 2]);
                                    };
                                case 8:
                                    return function(c) {
                                        return this.fromWireType(Ka[c >> 3]);
                                    };
                                default:
                                    throw new TypeError(`invalid float width (${b}): ${a}`);
                            }
                        }, Cd = (a, b, c)=>{
                            switch(b){
                                case 1:
                                    return c ? (d)=>z[d] : (d)=>B[d];
                                case 2:
                                    return c ? (d)=>Fa[d >> 1] : (d)=>Ia[d >> 1];
                                case 4:
                                    return c ? (d)=>C[d >> 2] : (d)=>F[d >> 2];
                                default:
                                    throw new TypeError(`invalid integer width (${b}): ${a}`);
                            }
                        }, Dd = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, Ed = (a, b)=>{
                            var c = a >> 1;
                            for(var d = c + b / 2; !(c >= d) && Ia[c];){
                                ++c;
                            }
                            c <<= 1;
                            if (32 < c - a && Dd) {
                                return Dd.decode(B.subarray(a, c));
                            }
                            c = "";
                            for(d = 0; !(d >= b / 2); ++d){
                                var e = Fa[a + 2 * d >> 1];
                                if (0 == e) {
                                    break;
                                }
                                c += String.fromCharCode(e);
                            }
                            return c;
                        }, Fd = (a, b, c)=>{
                            c ??= 2147483647;
                            if (2 > c) {
                                return 0;
                            }
                            c -= 2;
                            var d = b;
                            c = c < 2 * a.length ? c / 2 : a.length;
                            for(var e = 0; e < c; ++e){
                                Fa[b >> 1] = a.charCodeAt(e), b += 2;
                            }
                            Fa[b >> 1] = 0;
                            return b - d;
                        }, Gd = (a)=>2 * a.length, Hd = (a, b)=>{
                            for(var c = 0, d = ""; !(c >= b / 4);){
                                var e = C[a + 4 * c >> 2];
                                if (0 == e) {
                                    break;
                                }
                                ++c;
                                65536 <= e ? (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023)) : d += String.fromCharCode(e);
                            }
                            return d;
                        }, Id = (a, b, c)=>{
                            c ??= 2147483647;
                            if (4 > c) {
                                return 0;
                            }
                            var d = b;
                            c = d + c - 4;
                            for(var e = 0; e < a.length; ++e){
                                var f = a.charCodeAt(e);
                                if (55296 <= f && 57343 >= f) {
                                    var g = a.charCodeAt(++e);
                                    f = 65536 + ((f & 1023) << 10) | g & 1023;
                                }
                                C[b >> 2] = f;
                                b += 4;
                                if (b + 4 > c) {
                                    break;
                                }
                            }
                            C[b >> 2] = 0;
                            return b - d;
                        }, Jd = (a)=>{
                            for(var b = 0, c = 0; c < a.length; ++c){
                                var d = a.charCodeAt(c);
                                55296 <= d && 57343 >= d && ++c;
                                b += 4;
                            }
                            return b;
                        }, Kd = (a, b, c)=>{
                            var d = [];
                            a = a.toWireType(d, c);
                            d.length && (F[b >> 2] = tc(d));
                            return a;
                        }, Ld = [], Md = {}, Nd = (a)=>{
                            var b = Md[a];
                            return void 0 === b ? S(a) : b;
                        }, Od = (a)=>{
                            var b = Ld.length;
                            Ld.push(a);
                            return b;
                        }, Pd = (a, b)=>{
                            for(var c = Array(a), d = 0; d < a; ++d){
                                c[d] = Gc(F[b + 4 * d >> 2], "parameter " + d);
                            }
                            return c;
                        }, Qd = Reflect.construct, Rd = (a)=>0 === a % 4 && (0 !== a % 100 || 0 === a % 400), Sd = [
                            0,
                            31,
                            60,
                            91,
                            121,
                            152,
                            182,
                            213,
                            244,
                            274,
                            305,
                            335
                        ], Td = [
                            0,
                            31,
                            59,
                            90,
                            120,
                            151,
                            181,
                            212,
                            243,
                            273,
                            304,
                            334
                        ], Ud = [], Vd = {}, Xd = ()=>{
                            if (!Wd) {
                                var a = {
                                    USER: "web_user",
                                    LOGNAME: "web_user",
                                    PATH: "/",
                                    PWD: "/",
                                    HOME: "/home/web_user",
                                    LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                                    _: ta || "./this.program"
                                }, b;
                                for(b in Vd){
                                    void 0 === Vd[b] ? delete a[b] : a[b] = Vd[b];
                                }
                                var c = [];
                                for(b in a){
                                    c.push(`${b}=${a[b]}`);
                                }
                                Wd = c;
                            }
                            return Wd;
                        }, Wd, Yd = [
                            31,
                            29,
                            31,
                            30,
                            31,
                            30,
                            31,
                            31,
                            30,
                            31,
                            30,
                            31
                        ], Zd = [
                            31,
                            28,
                            31,
                            30,
                            31,
                            30,
                            31,
                            31,
                            30,
                            31,
                            30,
                            31
                        ], $d = (a, b, c, d)=>{
                            function e(m, u, r) {
                                for(m = "number" == typeof m ? m.toString() : m || ""; m.length < u;){
                                    m = r[0] + m;
                                }
                                return m;
                            }
                            function f(m, u) {
                                return e(m, u, "0");
                            }
                            function g(m, u) {
                                function r(I) {
                                    return 0 > I ? -1 : 0 < I ? 1 : 0;
                                }
                                var D;
                                0 === (D = r(m.getFullYear() - u.getFullYear())) && 0 === (D = r(m.getMonth() - u.getMonth())) && (D = r(m.getDate() - u.getDate()));
                                return D;
                            }
                            function k(m) {
                                switch(m.getDay()){
                                    case 0:
                                        return new Date(m.getFullYear() - 1, 11, 29);
                                    case 1:
                                        return m;
                                    case 2:
                                        return new Date(m.getFullYear(), 0, 3);
                                    case 3:
                                        return new Date(m.getFullYear(), 0, 2);
                                    case 4:
                                        return new Date(m.getFullYear(), 0, 1);
                                    case 5:
                                        return new Date(m.getFullYear() - 1, 11, 31);
                                    case 6:
                                        return new Date(m.getFullYear() - 1, 11, 30);
                                }
                            }
                            function p(m) {
                                var u = m.ca;
                                for(m = new Date(new Date(m.da + 1900, 0, 1).getTime()); 0 < u;){
                                    var r = m.getMonth(), D = (Rd(m.getFullYear()) ? Yd : Zd)[r];
                                    if (u > D - m.getDate()) {
                                        u -= D - m.getDate() + 1, m.setDate(1), 11 > r ? m.setMonth(r + 1) : (m.setMonth(0), m.setFullYear(m.getFullYear() + 1));
                                    } else {
                                        m.setDate(m.getDate() + u);
                                        break;
                                    }
                                }
                                r = new Date(m.getFullYear() + 1, 0, 4);
                                u = k(new Date(m.getFullYear(), 0, 4));
                                r = k(r);
                                return 0 >= g(u, m) ? 0 >= g(r, m) ? m.getFullYear() + 1 : m.getFullYear() : m.getFullYear() - 1;
                            }
                            var n = F[d + 40 >> 2];
                            d = {
                                rc: C[d >> 2],
                                qc: C[d + 4 >> 2],
                                Ea: C[d + 8 >> 2],
                                Ra: C[d + 12 >> 2],
                                Fa: C[d + 16 >> 2],
                                da: C[d + 20 >> 2],
                                S: C[d + 24 >> 2],
                                ca: C[d + 28 >> 2],
                                Vc: C[d + 32 >> 2],
                                pc: C[d + 36 >> 2],
                                sc: n ? n ? qb(B, n) : "" : ""
                            };
                            c = c ? qb(B, c) : "";
                            n = {
                                "%c": "%a %b %d %H:%M:%S %Y",
                                "%D": "%m/%d/%y",
                                "%F": "%Y-%m-%d",
                                "%h": "%b",
                                "%r": "%I:%M:%S %p",
                                "%R": "%H:%M",
                                "%T": "%H:%M:%S",
                                "%x": "%m/%d/%y",
                                "%X": "%H:%M:%S",
                                "%Ec": "%c",
                                "%EC": "%C",
                                "%Ex": "%m/%d/%y",
                                "%EX": "%H:%M:%S",
                                "%Ey": "%y",
                                "%EY": "%Y",
                                "%Od": "%d",
                                "%Oe": "%e",
                                "%OH": "%H",
                                "%OI": "%I",
                                "%Om": "%m",
                                "%OM": "%M",
                                "%OS": "%S",
                                "%Ou": "%u",
                                "%OU": "%U",
                                "%OV": "%V",
                                "%Ow": "%w",
                                "%OW": "%W",
                                "%Oy": "%y"
                            };
                            for(var t in n){
                                c = c.replace(new RegExp(t, "g"), n[t]);
                            }
                            var x = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), y = "January February March April May June July August September October November December".split(" ");
                            n = {
                                "%a": (m)=>x[m.S].substring(0, 3),
                                "%A": (m)=>x[m.S],
                                "%b": (m)=>y[m.Fa].substring(0, 3),
                                "%B": (m)=>y[m.Fa],
                                "%C": (m)=>f((m.da + 1900) / 100 | 0, 2),
                                "%d": (m)=>f(m.Ra, 2),
                                "%e": (m)=>e(m.Ra, 2, " "),
                                "%g": (m)=>p(m).toString().substring(2),
                                "%G": p,
                                "%H": (m)=>f(m.Ea, 2),
                                "%I": (m)=>{
                                    m = m.Ea;
                                    0 == m ? m = 12 : 12 < m && (m -= 12);
                                    return f(m, 2);
                                },
                                "%j": (m)=>{
                                    for(var u = 0, r = 0; r <= m.Fa - 1; u += (Rd(m.da + 1900) ? Yd : Zd)[r++]){}
                                    return f(m.Ra + u, 3);
                                },
                                "%m": (m)=>f(m.Fa + 1, 2),
                                "%M": (m)=>f(m.qc, 2),
                                "%n": ()=>"\n",
                                "%p": (m)=>0 <= m.Ea && 12 > m.Ea ? "AM" : "PM",
                                "%S": (m)=>f(m.rc, 2),
                                "%t": ()=>"\t",
                                "%u": (m)=>m.S || 7,
                                "%U": (m)=>f(Math.floor((m.ca + 7 - m.S) / 7), 2),
                                "%V": (m)=>{
                                    var u = Math.floor((m.ca + 7 - (m.S + 6) % 7) / 7);
                                    2 >= (m.S + 371 - m.ca - 2) % 7 && u++;
                                    if (u) {
                                        53 == u && (r = (m.S + 371 - m.ca) % 7, 4 == r || 3 == r && Rd(m.da) || (u = 1));
                                    } else {
                                        u = 52;
                                        var r = (m.S + 7 - m.ca - 1) % 7;
                                        (4 == r || 5 == r && Rd(m.da % 400 - 1)) && u++;
                                    }
                                    return f(u, 2);
                                },
                                "%w": (m)=>m.S,
                                "%W": (m)=>f(Math.floor((m.ca + 7 - (m.S + 6) % 7) / 7), 2),
                                "%y": (m)=>(m.da + 1900).toString().substring(2),
                                "%Y": (m)=>m.da + 1900,
                                "%z": (m)=>{
                                    m = m.pc;
                                    var u = 0 <= m;
                                    m = Math.abs(m) / 60;
                                    return (u ? "+" : "-") + String("0000" + (m / 60 * 100 + m % 60)).slice(-4);
                                },
                                "%Z": (m)=>m.sc,
                                "%%": ()=>"%"
                            };
                            c = c.replace(/%%/g, "\x00\x00");
                            for(t in n){
                                c.includes(t) && (c = c.replace(new RegExp(t, "g"), n[t](d)));
                            }
                            c = c.replace(/\0\0/g, "%");
                            t = vb(c, !1);
                            if (t.length > b) {
                                return 0;
                            }
                            z.set(t, a);
                            return t.length - 1;
                        };
                        [
                            44
                        ].forEach((a)=>{
                            Fb[a] = new N(a);
                            Fb[a].stack = "<generic error, no stack>";
                        });
                        Mb = Array(4096);
                        $b(O, "/");
                        gc("/tmp");
                        gc("/home");
                        gc("/home/web_user");
                        (function() {
                            gc("/dev");
                            yb(259, {
                                read: ()=>0,
                                write: (d, e, f, g)=>g
                            });
                            hc("/dev/null", 259);
                            xb(1280, Ab);
                            xb(1536, Bb);
                            hc("/dev/tty", 1280);
                            hc("/dev/tty1", 1536);
                            var a = new Uint8Array(1024), b = 0, c = ()=>{
                                0 === b && (b = nb(a).byteLength);
                                return a[--b];
                            };
                            nc("random", c);
                            nc("urandom", c);
                            gc("/dev/shm");
                            gc("/dev/shm/tmp");
                        })();
                        (function() {
                            gc("/proc");
                            var a = gc("/proc/self");
                            gc("/proc/self/fd");
                            $b({
                                V () {
                                    var b = Eb(a, "fd", 16895, 73);
                                    b.j = {
                                        ka (c, d) {
                                            var e = Xb(+d);
                                            c = {
                                                parent: null,
                                                V: {
                                                    mb: "fake"
                                                },
                                                j: {
                                                    ma: ()=>e.path
                                                }
                                            };
                                            return c.parent = c;
                                        }
                                    };
                                    return b;
                                }
                            }, "/proc/self/fd");
                        })();
                        P = l.BindingError = class extends Error {
                            constructor(a){
                                super(a);
                                this.name = "BindingError";
                            }
                        };
                        sc.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1);
                        l.count_emval_handles = ()=>sc.length / 2 - 5 - rc.length;
                        vc = l.PureVirtualError = uc("PureVirtualError");
                        for(var ae = Array(256), be = 0; 256 > be; ++be){
                            ae[be] = String.fromCharCode(be);
                        }
                        wc = ae;
                        l.getInheritedInstanceCount = ()=>Object.keys(Ac).length;
                        l.getLiveInheritedInstances = ()=>{
                            var a = [], b;
                            for(b in Ac){
                                Ac.hasOwnProperty(b) && a.push(Ac[b]);
                            }
                            return a;
                        };
                        l.flushPendingDeletes = yc;
                        l.setDelayFunction = (a)=>{
                            zc = a;
                            xc.length && zc && zc(yc);
                        };
                        Mc = l.InternalError = class extends Error {
                            constructor(a){
                                super(a);
                                this.name = "InternalError";
                            }
                        };
                        Object.assign(Xc.prototype, {
                            isAliasOf: function(a) {
                                if (!(this instanceof Xc && a instanceof Xc)) {
                                    return !1;
                                }
                                var b = this.g.u.i, c = this.g.o;
                                a.g = a.g;
                                var d = a.g.u.i;
                                for(a = a.g.o; b.C;){
                                    c = b.na(c), b = b.C;
                                }
                                for(; d.C;){
                                    a = d.na(a), d = d.C;
                                }
                                return b === d && c === a;
                            },
                            clone: function() {
                                this.g.o || Wc(this);
                                if (this.g.ia) {
                                    return this.g.count.value += 1, this;
                                }
                                var a = Nc, b = Object, c = b.create, d = Object.getPrototypeOf(this), e = this.g;
                                a = a(c.call(b, d, {
                                    g: {
                                        value: {
                                            count: e.count,
                                            fa: e.fa,
                                            ia: e.ia,
                                            o: e.o,
                                            u: e.u,
                                            F: e.F,
                                            K: e.K
                                        }
                                    }
                                }));
                                a.g.count.value += 1;
                                a.g.fa = !1;
                                return a;
                            },
                            ["delete"] () {
                                this.g.o || Wc(this);
                                if (this.g.fa && !this.g.ia) {
                                    throw new P("Object already scheduled for deletion");
                                }
                                Hc(this);
                                var a = this.g;
                                --a.count.value;
                                0 === a.count.value && (a.F ? a.K.P(a.F) : a.u.i.P(a.o));
                                this.g.ia || (this.g.F = void 0, this.g.o = void 0);
                            },
                            isDeleted: function() {
                                return !this.g.o;
                            },
                            deleteLater: function() {
                                this.g.o || Wc(this);
                                if (this.g.fa && !this.g.ia) {
                                    throw new P("Object already scheduled for deletion");
                                }
                                xc.push(this);
                                1 === xc.length && zc && zc(yc);
                                this.g.fa = !0;
                                return this;
                            }
                        });
                        Object.assign(gd.prototype, {
                            Tb (a) {
                                this.rb && (a = this.rb(a));
                                return a;
                            },
                            bb (a) {
                                this.P?.(a);
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: Rc,
                            fromWireType: function(a) {
                                function b() {
                                    return this.ta ? Oc(this.i.N, {
                                        u: this.jc,
                                        o: c,
                                        K: this,
                                        F: a
                                    }) : Oc(this.i.N, {
                                        u: this,
                                        o: a
                                    });
                                }
                                var c = this.Tb(a);
                                if (!c) {
                                    return this.bb(a), null;
                                }
                                var d = Lc(this.i, c);
                                if (void 0 !== d) {
                                    if (0 === d.g.count.value) {
                                        return d.g.o = c, d.g.F = a, d.clone();
                                    }
                                    d = d.clone();
                                    this.bb(a);
                                    return d;
                                }
                                d = this.i.Sb(c);
                                d = Kc[d];
                                if (!d) {
                                    return b.call(this);
                                }
                                d = this.sa ? d.Jb : d.pointerType;
                                var e = Jc(c, this.i, d.i);
                                return null === e ? b.call(this) : this.ta ? Oc(d.i.N, {
                                    u: d,
                                    o: e,
                                    K: this,
                                    F: a
                                }) : Oc(d.i.N, {
                                    u: d,
                                    o: e
                                });
                            }
                        });
                        od = l.UnboundTypeError = uc("UnboundTypeError");
                        var ee = {
                            __syscall_fcntl64: function(a, b, c) {
                                hb = c;
                                try {
                                    var d = Xb(a);
                                    switch(b){
                                        case 0:
                                            var e = gb();
                                            if (0 > e) {
                                                break;
                                            }
                                            for(; Kb[e];){
                                                e++;
                                            }
                                            return Zb(d, e).X;
                                        case 1:
                                        case 2:
                                            return 0;
                                        case 3:
                                            return d.flags;
                                        case 4:
                                            return e = gb(), d.flags |= e, 0;
                                        case 12:
                                            return e = gb(), Fa[e + 0 >> 1] = 2, 0;
                                        case 13:
                                        case 14:
                                            return 0;
                                    }
                                    return -28;
                                } catch (f) {
                                    if ("undefined" == typeof pc || "ErrnoError" !== f.name) {
                                        throw f;
                                    }
                                    return -f.aa;
                                }
                            },
                            __syscall_ioctl: function(a, b, c) {
                                hb = c;
                                try {
                                    var d = Xb(a);
                                    switch(b){
                                        case 21509:
                                            return d.s ? 0 : -59;
                                        case 21505:
                                            if (!d.s) {
                                                return -59;
                                            }
                                            if (d.s.W.Zb) {
                                                a = [
                                                    3,
                                                    28,
                                                    127,
                                                    21,
                                                    4,
                                                    0,
                                                    1,
                                                    0,
                                                    17,
                                                    19,
                                                    26,
                                                    0,
                                                    18,
                                                    15,
                                                    23,
                                                    22,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0,
                                                    0
                                                ];
                                                var e = gb();
                                                C[e >> 2] = 25856;
                                                C[e + 4 >> 2] = 5;
                                                C[e + 8 >> 2] = 191;
                                                C[e + 12 >> 2] = 35387;
                                                for(var f = 0; 32 > f; f++){
                                                    z[e + f + 17] = a[f] || 0;
                                                }
                                            }
                                            return 0;
                                        case 21510:
                                        case 21511:
                                        case 21512:
                                            return d.s ? 0 : -59;
                                        case 21506:
                                        case 21507:
                                        case 21508:
                                            if (!d.s) {
                                                return -59;
                                            }
                                            if (d.s.W.$b) {
                                                for(e = gb(), a = [], f = 0; 32 > f; f++){
                                                    a.push(z[e + f + 17]);
                                                }
                                            }
                                            return 0;
                                        case 21519:
                                            if (!d.s) {
                                                return -59;
                                            }
                                            e = gb();
                                            return C[e >> 2] = 0;
                                        case 21520:
                                            return d.s ? -28 : -59;
                                        case 21531:
                                            e = gb();
                                            if (!d.m.Yb) {
                                                throw new N(59);
                                            }
                                            return d.m.Yb(d, b, e);
                                        case 21523:
                                            if (!d.s) {
                                                return -59;
                                            }
                                            d.s.W.ac && (f = [
                                                24,
                                                80
                                            ], e = gb(), Fa[e >> 1] = f[0], Fa[e + 2 >> 1] = f[1]);
                                            return 0;
                                        case 21524:
                                            return d.s ? 0 : -59;
                                        case 21515:
                                            return d.s ? 0 : -59;
                                        default:
                                            return -28;
                                    }
                                } catch (g) {
                                    if ("undefined" == typeof pc || "ErrnoError" !== g.name) {
                                        throw g;
                                    }
                                    return -g.aa;
                                }
                            },
                            __syscall_openat: function(a, b, c, d) {
                                hb = d;
                                try {
                                    b = b ? qb(B, b) : "";
                                    var e = b;
                                    if ("/" === e.charAt(0)) {
                                        b = e;
                                    } else {
                                        var f = -100 === a ? "/" : Xb(a).path;
                                        if (0 == e.length) {
                                            throw new N(44);
                                        }
                                        b = jb(f + "/" + e);
                                    }
                                    var g = d ? gb() : 0;
                                    return jc(b, c, g).X;
                                } catch (k) {
                                    if ("undefined" == typeof pc || "ErrnoError" !== k.name) {
                                        throw k;
                                    }
                                    return -k.aa;
                                }
                            },
                            _abort_js: ()=>{
                                Ta("");
                            },
                            _embind_create_inheriting_constructor: (a, b, c)=>{
                                a = S(a);
                                b = Gc(b, "wrapper");
                                c = Q(c);
                                var d = b.i, e = d.N, f = d.C.N, g = d.C.constructor;
                                a = qc(a, function(...k) {
                                    d.C.qb.forEach((function(p) {
                                        if (this[p] === f[p]) {
                                            throw new vc(`Pure virtual function ${p} must be implemented in JavaScript`);
                                        }
                                    }).bind(this));
                                    Object.defineProperty(this, "__parent", {
                                        value: e
                                    });
                                    this.__construct(...k);
                                });
                                e.__construct = function(...k) {
                                    if (this === e) {
                                        throw new P("Pass correct 'this' to __construct");
                                    }
                                    k = g.implement(this, ...k);
                                    Hc(k);
                                    var p = k.g;
                                    k.notifyOnDestruction();
                                    p.ia = !0;
                                    Object.defineProperties(this, {
                                        g: {
                                            value: p
                                        }
                                    });
                                    Nc(this);
                                    k = p.o;
                                    k = Bc(d, k);
                                    if (Ac.hasOwnProperty(k)) {
                                        throw new P(`Tried to register registered instance: ${k}`);
                                    }
                                    Ac[k] = this;
                                };
                                e.__destruct = function() {
                                    if (this === e) {
                                        throw new P("Pass correct 'this' to __destruct");
                                    }
                                    Hc(this);
                                    var k = this.g.o;
                                    k = Bc(d, k);
                                    if (Ac.hasOwnProperty(k)) {
                                        delete Ac[k];
                                    } else {
                                        throw new P(`Tried to unregister unregistered instance: ${k}`);
                                    }
                                };
                                a.prototype = Object.create(e);
                                Object.assign(a.prototype, c);
                                return tc(a);
                            },
                            _embind_finalize_value_object: (a)=>{
                                var b = Pc[a];
                                delete Pc[a];
                                var c = b.Oa, d = b.P, e = b.fb, f = e.map((g)=>g.Wb).concat(e.map((g)=>g.mc));
                                U([
                                    a
                                ], f, (g)=>{
                                    var k = {};
                                    e.forEach((p, n)=>{
                                        var t = g[n], x = p.Ub, y = p.Vb, m = g[n + e.length], u = p.lc, r = p.nc;
                                        k[p.Qb] = {
                                            read: (D)=>t.fromWireType(x(y, D)),
                                            write: (D, I)=>{
                                                var w = [];
                                                u(r, D, m.toWireType(w, I));
                                                Qc(w);
                                            }
                                        };
                                    });
                                    return [
                                        {
                                            name: b.name,
                                            fromWireType: (p)=>{
                                                var n = {}, t;
                                                for(t in k){
                                                    n[t] = k[t].read(p);
                                                }
                                                d(p);
                                                return n;
                                            },
                                            toWireType: (p, n)=>{
                                                for(var t in k){
                                                    if (!(t in n)) {
                                                        throw new TypeError(`Missing field: "${t}"`);
                                                    }
                                                }
                                                var x = c();
                                                for(t in k){
                                                    k[t].write(x, n[t]);
                                                }
                                                null !== p && p.push(d, x);
                                                return x;
                                            },
                                            argPackAdvance: 8,
                                            readValueFromPointer: Rc,
                                            M: d
                                        }
                                    ];
                                });
                            },
                            _embind_register_bigint: ()=>{},
                            _embind_register_bool: (a, b, c, d)=>{
                                b = S(b);
                                Uc(a, {
                                    name: b,
                                    fromWireType: function(e) {
                                        return !!e;
                                    },
                                    toWireType: function(e, f) {
                                        return f ? c : d;
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: function(e) {
                                        return this.fromWireType(B[e]);
                                    },
                                    M: null
                                });
                            },
                            _embind_register_class: (a, b, c, d, e, f, g, k, p, n, t, x, y)=>{
                                t = S(t);
                                f = W(e, f);
                                k &&= W(g, k);
                                n &&= W(p, n);
                                y = W(x, y);
                                var m = $c(t);
                                Zc(m, function() {
                                    pd(`Cannot construct ${t} due to unbound types`, [
                                        d
                                    ]);
                                });
                                U([
                                    a,
                                    b,
                                    c
                                ], d ? [
                                    d
                                ] : [], (u)=>{
                                    u = u[0];
                                    if (d) {
                                        var r = u.i;
                                        var D = r.N;
                                    } else {
                                        D = Xc.prototype;
                                    }
                                    u = qc(t, function(...R) {
                                        if (Object.getPrototypeOf(this) !== I) {
                                            throw new P("Use 'new' to construct " + t);
                                        }
                                        if (void 0 === w.$) {
                                            throw new P(t + " has no accessible constructor");
                                        }
                                        var V = w.$[R.length];
                                        if (void 0 === V) {
                                            throw new P(`Tried to invoke ctor of ${t} with invalid number of parameters (${R.length}) - expected (${Object.keys(w.$).toString()}) parameters instead!`);
                                        }
                                        return V.apply(this, R);
                                    });
                                    var I = Object.create(D, {
                                        constructor: {
                                            value: u
                                        }
                                    });
                                    u.prototype = I;
                                    var w = new ad(t, u, I, y, r, f, k, n);
                                    if (w.C) {
                                        var L;
                                        (L = w.C).oa ?? (L.oa = []);
                                        w.C.oa.push(w);
                                    }
                                    r = new gd(t, w, !0, !1, !1);
                                    L = new gd(t + "*", w, !1, !1, !1);
                                    D = new gd(t + " const*", w, !1, !0, !1);
                                    Kc[a] = {
                                        pointerType: L,
                                        Jb: D
                                    };
                                    hd(m, u);
                                    return [
                                        r,
                                        L,
                                        D
                                    ];
                                });
                            },
                            _embind_register_class_class_function: (a, b, c, d, e, f, g)=>{
                                var k = vd(c, d);
                                b = S(b);
                                b = wd(b);
                                f = W(e, f);
                                U([], [
                                    a
                                ], (p)=>{
                                    function n() {
                                        pd(`Cannot call ${t} due to unbound types`, k);
                                    }
                                    p = p[0];
                                    var t = `${p.name}.${b}`;
                                    b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                                    var x = p.i.constructor;
                                    void 0 === x[b] ? (n.ea = c - 1, x[b] = n) : (Yc(x, b, t), x[b].A[c - 1] = n);
                                    U([], k, (y)=>{
                                        y = ud(t, [
                                            y[0],
                                            null
                                        ].concat(y.slice(1)), null, f, g);
                                        void 0 === x[b].A ? (y.ea = c - 1, x[b] = y) : x[b].A[c - 1] = y;
                                        if (p.i.oa) {
                                            for (const m of p.i.oa){
                                                m.constructor.hasOwnProperty(b) || (m.constructor[b] = y);
                                            }
                                        }
                                        return [];
                                    });
                                    return [];
                                });
                            },
                            _embind_register_class_class_property: (a, b, c, d, e, f, g, k)=>{
                                b = S(b);
                                f = W(e, f);
                                U([], [
                                    a
                                ], (p)=>{
                                    p = p[0];
                                    var n = `${p.name}.${b}`, t = {
                                        get () {
                                            pd(`Cannot access ${n} due to unbound types`, [
                                                c
                                            ]);
                                        },
                                        enumerable: !0,
                                        configurable: !0
                                    };
                                    t.set = k ? ()=>{
                                        pd(`Cannot access ${n} due to unbound types`, [
                                            c
                                        ]);
                                    } : ()=>{
                                        throw new P(`${n} is a read-only property`);
                                    };
                                    Object.defineProperty(p.i.constructor, b, t);
                                    U([], [
                                        c
                                    ], (x)=>{
                                        x = x[0];
                                        var y = {
                                            get () {
                                                return x.fromWireType(f(d));
                                            },
                                            enumerable: !0
                                        };
                                        k && (k = W(g, k), y.set = (m)=>{
                                            var u = [];
                                            k(d, x.toWireType(u, m));
                                            Qc(u);
                                        });
                                        Object.defineProperty(p.i.constructor, b, y);
                                        return [];
                                    });
                                    return [];
                                });
                            },
                            _embind_register_class_constructor: (a, b, c, d, e, f)=>{
                                var g = vd(b, c);
                                e = W(d, e);
                                U([], [
                                    a
                                ], (k)=>{
                                    k = k[0];
                                    var p = `constructor ${k.name}`;
                                    void 0 === k.i.$ && (k.i.$ = []);
                                    if (void 0 !== k.i.$[b - 1]) {
                                        throw new P(`Cannot register multiple constructors with identical number of parameters (${b - 1}) for class '${k.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
                                    }
                                    k.i.$[b - 1] = ()=>{
                                        pd(`Cannot construct ${k.name} due to unbound types`, g);
                                    };
                                    U([], g, (n)=>{
                                        n.splice(1, 0, null);
                                        k.i.$[b - 1] = ud(p, n, null, e, f);
                                        return [];
                                    });
                                    return [];
                                });
                            },
                            _embind_register_class_function: (a, b, c, d, e, f, g, k)=>{
                                var p = vd(c, d);
                                b = S(b);
                                b = wd(b);
                                f = W(e, f);
                                U([], [
                                    a
                                ], (n)=>{
                                    function t() {
                                        pd(`Cannot call ${x} due to unbound types`, p);
                                    }
                                    n = n[0];
                                    var x = `${n.name}.${b}`;
                                    b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                                    k && n.i.qb.push(b);
                                    var y = n.i.N, m = y[b];
                                    void 0 === m || void 0 === m.A && m.className !== n.name && m.ea === c - 2 ? (t.ea = c - 2, t.className = n.name, y[b] = t) : (Yc(y, b, x), y[b].A[c - 2] = t);
                                    U([], p, (u)=>{
                                        u = ud(x, u, n, f, g);
                                        void 0 === y[b].A ? (u.ea = c - 2, y[b] = u) : y[b].A[c - 2] = u;
                                        return [];
                                    });
                                    return [];
                                });
                            },
                            _embind_register_class_property: (a, b, c, d, e, f, g, k, p, n)=>{
                                b = S(b);
                                e = W(d, e);
                                U([], [
                                    a
                                ], (t)=>{
                                    t = t[0];
                                    var x = `${t.name}.${b}`, y = {
                                        get () {
                                            pd(`Cannot access ${x} due to unbound types`, [
                                                c,
                                                g
                                            ]);
                                        },
                                        enumerable: !0,
                                        configurable: !0
                                    };
                                    y.set = p ? ()=>pd(`Cannot access ${x} due to unbound types`, [
                                            c,
                                            g
                                        ]) : ()=>{
                                        throw new P(x + " is a read-only property");
                                    };
                                    Object.defineProperty(t.i.N, b, y);
                                    U([], p ? [
                                        c,
                                        g
                                    ] : [
                                        c
                                    ], (m)=>{
                                        var u = m[0], r = {
                                            get () {
                                                var I = xd(this, t, x + " getter");
                                                return u.fromWireType(e(f, I));
                                            },
                                            enumerable: !0
                                        };
                                        if (p) {
                                            p = W(k, p);
                                            var D = m[1];
                                            r.set = function(I) {
                                                var w = xd(this, t, x + " setter"), L = [];
                                                p(n, w, D.toWireType(L, I));
                                                Qc(L);
                                            };
                                        }
                                        Object.defineProperty(t.i.N, b, r);
                                        return [];
                                    });
                                    return [];
                                });
                            },
                            _embind_register_emval: (a)=>Uc(a, zd),
                            _embind_register_enum: (a, b, c, d)=>{
                                function e() {}
                                b = S(b);
                                e.values = {};
                                Uc(a, {
                                    name: b,
                                    constructor: e,
                                    fromWireType: function(f) {
                                        return this.constructor.values[f];
                                    },
                                    toWireType: (f, g)=>g.value,
                                    argPackAdvance: 8,
                                    readValueFromPointer: Ad(b, c, d),
                                    M: null
                                });
                                Zc(b, e);
                            },
                            _embind_register_enum_value: (a, b, c)=>{
                                var d = Gc(a, "enum");
                                b = S(b);
                                a = d.constructor;
                                d = Object.create(d.constructor.prototype, {
                                    value: {
                                        value: c
                                    },
                                    constructor: {
                                        value: qc(`${d.name}_${b}`, function() {})
                                    }
                                });
                                a.values[c] = d;
                                a[b] = d;
                            },
                            _embind_register_float: (a, b, c)=>{
                                b = S(b);
                                Uc(a, {
                                    name: b,
                                    fromWireType: (d)=>d,
                                    toWireType: (d, e)=>e,
                                    argPackAdvance: 8,
                                    readValueFromPointer: Bd(b, c),
                                    M: null
                                });
                            },
                            _embind_register_function: (a, b, c, d, e, f)=>{
                                var g = vd(b, c);
                                a = S(a);
                                a = wd(a);
                                e = W(d, e);
                                Zc(a, function() {
                                    pd(`Cannot call ${a} due to unbound types`, g);
                                }, b - 1);
                                U([], g, (k)=>{
                                    hd(a, ud(a, [
                                        k[0],
                                        null
                                    ].concat(k.slice(1)), null, e, f), b - 1);
                                    return [];
                                });
                            },
                            _embind_register_integer: (a, b, c, d, e)=>{
                                b = S(b);
                                -1 === e && (e = 4294967295);
                                e = (k)=>k;
                                if (0 === d) {
                                    var f = 32 - 8 * c;
                                    e = (k)=>k << f >>> f;
                                }
                                var g = b.includes("unsigned") ? function(k, p) {
                                    return p >>> 0;
                                } : function(k, p) {
                                    return p;
                                };
                                Uc(a, {
                                    name: b,
                                    fromWireType: e,
                                    toWireType: g,
                                    argPackAdvance: 8,
                                    readValueFromPointer: Cd(b, c, 0 !== d),
                                    M: null
                                });
                            },
                            _embind_register_memory_view: (a, b, c)=>{
                                function d(f) {
                                    return new e(z.buffer, F[f + 4 >> 2], F[f >> 2]);
                                }
                                var e = [
                                    Int8Array,
                                    Uint8Array,
                                    Int16Array,
                                    Uint16Array,
                                    Int32Array,
                                    Uint32Array,
                                    Float32Array,
                                    Float64Array
                                ][b];
                                c = S(c);
                                Uc(a, {
                                    name: c,
                                    fromWireType: d,
                                    argPackAdvance: 8,
                                    readValueFromPointer: d
                                }, {
                                    Xb: !0
                                });
                            },
                            _embind_register_std_string: (a, b)=>{
                                b = S(b);
                                var c = "std::string" === b;
                                Uc(a, {
                                    name: b,
                                    fromWireType: function(d) {
                                        var e = F[d >> 2], f = d + 4;
                                        if (c) {
                                            for(var g = f, k = 0; k <= e; ++k){
                                                var p = f + k;
                                                if (k == e || 0 == B[p]) {
                                                    g = g ? qb(B, g, p - g) : "";
                                                    if (void 0 === n) {
                                                        var n = g;
                                                    } else {
                                                        n += String.fromCharCode(0), n += g;
                                                    }
                                                    g = p + 1;
                                                }
                                            }
                                        } else {
                                            n = Array(e);
                                            for(k = 0; k < e; ++k){
                                                n[k] = String.fromCharCode(B[f + k]);
                                            }
                                            n = n.join("");
                                        }
                                        Ec(d);
                                        return n;
                                    },
                                    toWireType: function(d, e) {
                                        e instanceof ArrayBuffer && (e = new Uint8Array(e));
                                        var f = "string" == typeof e;
                                        if (!(f || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array)) {
                                            throw new P("Cannot pass non-string to std::string");
                                        }
                                        var g = c && f ? sb(e) : e.length;
                                        var k = ce(4 + g + 1), p = k + 4;
                                        F[k >> 2] = g;
                                        if (c && f) {
                                            ub(e, B, p, g + 1);
                                        } else {
                                            if (f) {
                                                for(f = 0; f < g; ++f){
                                                    var n = e.charCodeAt(f);
                                                    if (255 < n) {
                                                        throw Ec(p), new P("String has UTF-16 code units that do not fit in 8 bits");
                                                    }
                                                    B[p + f] = n;
                                                }
                                            } else {
                                                for(f = 0; f < g; ++f){
                                                    B[p + f] = e[f];
                                                }
                                            }
                                        }
                                        null !== d && d.push(Ec, k);
                                        return k;
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: Rc,
                                    M (d) {
                                        Ec(d);
                                    }
                                });
                            },
                            _embind_register_std_wstring: (a, b, c)=>{
                                c = S(c);
                                if (2 === b) {
                                    var d = Ed;
                                    var e = Fd;
                                    var f = Gd;
                                    var g = (k)=>Ia[k >> 1];
                                } else {
                                    4 === b && (d = Hd, e = Id, f = Jd, g = (k)=>F[k >> 2]);
                                }
                                Uc(a, {
                                    name: c,
                                    fromWireType: (k)=>{
                                        for(var p = F[k >> 2], n, t = k + 4, x = 0; x <= p; ++x){
                                            var y = k + 4 + x * b;
                                            if (x == p || 0 == g(y)) {
                                                t = d(t, y - t), void 0 === n ? n = t : (n += String.fromCharCode(0), n += t), t = y + b;
                                            }
                                        }
                                        Ec(k);
                                        return n;
                                    },
                                    toWireType: (k, p)=>{
                                        if ("string" != typeof p) {
                                            throw new P(`Cannot pass non-string to C++ string type ${c}`);
                                        }
                                        var n = f(p), t = ce(4 + n + b);
                                        F[t >> 2] = n / b;
                                        e(p, t + 4, n + b);
                                        null !== k && k.push(Ec, t);
                                        return t;
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: Rc,
                                    M (k) {
                                        Ec(k);
                                    }
                                });
                            },
                            _embind_register_value_object: (a, b, c, d, e, f)=>{
                                Pc[a] = {
                                    name: S(b),
                                    Oa: W(c, d),
                                    P: W(e, f),
                                    fb: []
                                };
                            },
                            _embind_register_value_object_field: (a, b, c, d, e, f, g, k, p, n)=>{
                                Pc[a].fb.push({
                                    Qb: S(b),
                                    Wb: c,
                                    Ub: W(d, e),
                                    Vb: f,
                                    mc: g,
                                    lc: W(k, p),
                                    nc: n
                                });
                            },
                            _embind_register_void: (a, b)=>{
                                b = S(b);
                                Uc(a, {
                                    Oc: !0,
                                    name: b,
                                    argPackAdvance: 0,
                                    fromWireType: ()=>{},
                                    toWireType: ()=>{}
                                });
                            },
                            _emscripten_get_now_is_monotonic: ()=>1,
                            _emscripten_memcpy_js: (a, b, c)=>B.copyWithin(a, b, b + c),
                            _emscripten_throw_longjmp: ()=>{
                                throw Infinity;
                            },
                            _emval_as: (a, b, c)=>{
                                a = Q(a);
                                b = Gc(b, "emval::as");
                                return Kd(b, c, a);
                            },
                            _emval_call: (a, b, c, d)=>{
                                a = Ld[a];
                                b = Q(b);
                                return a(null, b, c, d);
                            },
                            _emval_call_method: (a, b, c, d, e)=>{
                                a = Ld[a];
                                b = Q(b);
                                c = Nd(c);
                                return a(b, b[c], d, e);
                            },
                            _emval_decref: yd,
                            _emval_get_method_caller: (a, b, c)=>{
                                var d = Pd(a, b), e = d.shift();
                                a--;
                                var f = Array(a);
                                b = `methodCaller<(${d.map((g)=>g.name).join(", ")}) => ${e.name}>`;
                                return Od(qc(b, (g, k, p, n)=>{
                                    for(var t = 0, x = 0; x < a; ++x){
                                        f[x] = d[x].readValueFromPointer(n + t), t += d[x].argPackAdvance;
                                    }
                                    g = 1 === c ? Qd(k, f) : k.apply(g, f);
                                    return Kd(e, p, g);
                                }));
                            },
                            _emval_get_module_property: (a)=>{
                                a = Nd(a);
                                return tc(l[a]);
                            },
                            _emval_get_property: (a, b)=>{
                                a = Q(a);
                                b = Q(b);
                                return tc(a[b]);
                            },
                            _emval_incref: (a)=>{
                                9 < a && (sc[a + 1] += 1);
                            },
                            _emval_new_array: ()=>tc([]),
                            _emval_new_cstring: (a)=>tc(Nd(a)),
                            _emval_new_object: ()=>tc({}),
                            _emval_run_destructors: (a)=>{
                                var b = Q(a);
                                Qc(b);
                                yd(a);
                            },
                            _emval_set_property: (a, b, c)=>{
                                a = Q(a);
                                b = Q(b);
                                c = Q(c);
                                a[b] = c;
                            },
                            _emval_take_value: (a, b)=>{
                                a = Gc(a, "_emval_take_value");
                                a = a.readValueFromPointer(b);
                                return tc(a);
                            },
                            _gmtime_js: function(a, b, c) {
                                a = new Date(1000 * (b + 2097152 >>> 0 < 4194305 - !!a ? (a >>> 0) + 4294967296 * b : NaN));
                                C[c >> 2] = a.getUTCSeconds();
                                C[c + 4 >> 2] = a.getUTCMinutes();
                                C[c + 8 >> 2] = a.getUTCHours();
                                C[c + 12 >> 2] = a.getUTCDate();
                                C[c + 16 >> 2] = a.getUTCMonth();
                                C[c + 20 >> 2] = a.getUTCFullYear() - 1900;
                                C[c + 24 >> 2] = a.getUTCDay();
                                C[c + 28 >> 2] = (a.getTime() - Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0;
                            },
                            _localtime_js: function(a, b, c) {
                                a = new Date(1000 * (b + 2097152 >>> 0 < 4194305 - !!a ? (a >>> 0) + 4294967296 * b : NaN));
                                C[c >> 2] = a.getSeconds();
                                C[c + 4 >> 2] = a.getMinutes();
                                C[c + 8 >> 2] = a.getHours();
                                C[c + 12 >> 2] = a.getDate();
                                C[c + 16 >> 2] = a.getMonth();
                                C[c + 20 >> 2] = a.getFullYear() - 1900;
                                C[c + 24 >> 2] = a.getDay();
                                C[c + 28 >> 2] = (Rd(a.getFullYear()) ? Sd : Td)[a.getMonth()] + a.getDate() - 1 | 0;
                                C[c + 36 >> 2] = -(60 * a.getTimezoneOffset());
                                b = new Date(a.getFullYear(), 6, 1).getTimezoneOffset();
                                var d = new Date(a.getFullYear(), 0, 1).getTimezoneOffset();
                                C[c + 32 >> 2] = (b != d && a.getTimezoneOffset() == Math.min(d, b)) | 0;
                            },
                            _tzset_js: (a, b, c, d)=>{
                                var e = new Date().getFullYear(), f = new Date(e, 0, 1), g = new Date(e, 6, 1);
                                e = f.getTimezoneOffset();
                                var k = g.getTimezoneOffset();
                                F[a >> 2] = 60 * Math.max(e, k);
                                C[b >> 2] = Number(e != k);
                                a = (p)=>p.toLocaleTimeString(void 0, {
                                        hour12: !1,
                                        timeZoneName: "short"
                                    }).split(" ")[1];
                                f = a(f);
                                g = a(g);
                                k < e ? (ub(f, B, c, 17), ub(g, B, d, 17)) : (ub(f, B, d, 17), ub(g, B, c, 17));
                            },
                            emscripten_asm_const_int: (a, b, c)=>{
                                Ud.length = 0;
                                for(var d; d = B[b++];){
                                    var e = 105 != d;
                                    e &= 112 != d;
                                    c += e && c % 8 ? 4 : 0;
                                    Ud.push(112 == d ? F[c >> 2] : 105 == d ? C[c >> 2] : Ka[c >> 3]);
                                    c += e ? 8 : 4;
                                }
                                return eb[a](...Ud);
                            },
                            emscripten_date_now: ()=>Date.now(),
                            emscripten_get_now: ()=>performance.now(),
                            emscripten_resize_heap: (a)=>{
                                var b = B.length;
                                a >>>= 0;
                                if (2147483648 < a) {
                                    return !1;
                                }
                                for(var c = 1; 4 >= c; c *= 2){
                                    var d = b * (1 + 0.2 / c);
                                    d = Math.min(d, a + 100663296);
                                    var e = Math;
                                    d = Math.max(a, d);
                                    a: {
                                        e = (e.min.call(e, 2147483648, d + (65536 - d % 65536) % 65536) - Da.buffer.byteLength + 65535) / 65536;
                                        try {
                                            Da.grow(e);
                                            La();
                                            var f = 1;
                                            break a;
                                        } catch (g) {}
                                        f = void 0;
                                    }
                                    if (f) {
                                        return !0;
                                    }
                                }
                                return !1;
                            },
                            environ_get: (a, b)=>{
                                var c = 0;
                                Xd().forEach((d, e)=>{
                                    var f = b + c;
                                    e = F[a + 4 * e >> 2] = f;
                                    for(f = 0; f < d.length; ++f){
                                        z[e++] = d.charCodeAt(f);
                                    }
                                    z[e] = 0;
                                    c += d.length + 1;
                                });
                                return 0;
                            },
                            environ_sizes_get: (a, b)=>{
                                var c = Xd();
                                F[a >> 2] = c.length;
                                var d = 0;
                                c.forEach((e)=>d += e.length + 1);
                                F[b >> 2] = d;
                                return 0;
                            },
                            fd_close: function(a) {
                                try {
                                    var b = Xb(a);
                                    if (null === b.X) {
                                        throw new N(8);
                                    }
                                    b.La && (b.La = null);
                                    try {
                                        b.m.close && b.m.close(b);
                                    } catch (c) {
                                        throw c;
                                    } finally{
                                        Kb[b.X] = null;
                                    }
                                    b.X = null;
                                    return 0;
                                } catch (c) {
                                    if ("undefined" == typeof pc || "ErrnoError" !== c.name) {
                                        throw c;
                                    }
                                    return c.aa;
                                }
                            },
                            fd_read: function(a, b, c, d) {
                                try {
                                    a: {
                                        var e = Xb(a);
                                        a = b;
                                        for(var f, g = b = 0; g < c; g++){
                                            var k = F[a >> 2], p = F[a + 4 >> 2];
                                            a += 8;
                                            var n = e, t = f, x = z;
                                            if (0 > p || 0 > t) {
                                                throw new N(28);
                                            }
                                            if (null === n.X) {
                                                throw new N(8);
                                            }
                                            if (1 === (n.flags & 2097155)) {
                                                throw new N(8);
                                            }
                                            if (16384 === (n.node.mode & 61440)) {
                                                throw new N(31);
                                            }
                                            if (!n.m.read) {
                                                throw new N(28);
                                            }
                                            var y = "undefined" != typeof t;
                                            if (!y) {
                                                t = n.position;
                                            } else if (!n.seekable) {
                                                throw new N(70);
                                            }
                                            var m = n.m.read(n, x, k, p, t);
                                            y || (n.position += m);
                                            var u = m;
                                            if (0 > u) {
                                                var r = -1;
                                                break a;
                                            }
                                            b += u;
                                            if (u < p) {
                                                break;
                                            }
                                            "undefined" != typeof f && (f += u);
                                        }
                                        r = b;
                                    }
                                    F[d >> 2] = r;
                                    return 0;
                                } catch (D) {
                                    if ("undefined" == typeof pc || "ErrnoError" !== D.name) {
                                        throw D;
                                    }
                                    return D.aa;
                                }
                            },
                            fd_seek: function(a, b, c, d, e) {
                                b = c + 2097152 >>> 0 < 4194305 - !!b ? (b >>> 0) + 4294967296 * c : NaN;
                                try {
                                    if (isNaN(b)) {
                                        return 61;
                                    }
                                    var f = Xb(a);
                                    lc(f, b, d);
                                    ab = [
                                        f.position >>> 0,
                                        ($a = f.position, 1.0 <= +Math.abs($a) ? 0.0 < $a ? +Math.floor($a / 4294967296.0) >>> 0 : ~~+Math.ceil(($a - +(~~$a >>> 0)) / 4294967296.0) >>> 0 : 0)
                                    ];
                                    C[e >> 2] = ab[0];
                                    C[e + 4 >> 2] = ab[1];
                                    f.La && 0 === b && 0 === d && (f.La = null);
                                    return 0;
                                } catch (g) {
                                    if ("undefined" == typeof pc || "ErrnoError" !== g.name) {
                                        throw g;
                                    }
                                    return g.aa;
                                }
                            },
                            fd_write: function(a, b, c, d) {
                                try {
                                    a: {
                                        var e = Xb(a);
                                        a = b;
                                        for(var f, g = b = 0; g < c; g++){
                                            var k = F[a >> 2], p = F[a + 4 >> 2];
                                            a += 8;
                                            var n = e, t = k, x = p, y = f, m = z;
                                            if (0 > x || 0 > y) {
                                                throw new N(28);
                                            }
                                            if (null === n.X) {
                                                throw new N(8);
                                            }
                                            if (0 === (n.flags & 2097155)) {
                                                throw new N(8);
                                            }
                                            if (16384 === (n.node.mode & 61440)) {
                                                throw new N(31);
                                            }
                                            if (!n.m.write) {
                                                throw new N(28);
                                            }
                                            n.seekable && n.flags & 1024 && lc(n, 0, 2);
                                            var u = "undefined" != typeof y;
                                            if (!u) {
                                                y = n.position;
                                            } else if (!n.seekable) {
                                                throw new N(70);
                                            }
                                            var r = n.m.write(n, m, t, x, y, void 0);
                                            u || (n.position += r);
                                            var D = r;
                                            if (0 > D) {
                                                var I = -1;
                                                break a;
                                            }
                                            b += D;
                                            "undefined" != typeof f && (f += D);
                                        }
                                        I = b;
                                    }
                                    F[d >> 2] = I;
                                    return 0;
                                } catch (w) {
                                    if ("undefined" == typeof pc || "ErrnoError" !== w.name) {
                                        throw w;
                                    }
                                    return w.aa;
                                }
                            },
                            invoke_vii: de,
                            isWindowsBrowser: function() {
                                return -1 < navigator.platform.indexOf("Win");
                            },
                            strftime: $d,
                            strftime_l: (a, b, c, d)=>$d(a, b, c, d),
                            wasm_start_image_decode: function(a, b, c) {
                                b = l.HEAP8.subarray(b, b + c);
                                c = new Uint8Array(c);
                                c.set(b);
                                createImageBitmap(new Blob([
                                    c
                                ])).then(function(d) {
                                    var e = new OffscreenCanvas(d.width, d.height).getContext("2d");
                                    e.drawImage(d, 0, 0);
                                    e = e.getImageData(0, 0, d.width, d.height);
                                    var f = e.data.length, g = l.Fb(f);
                                    l.wc.set(e.data, g);
                                    l.yc(a, d.width, d.height, g, f);
                                }).catch(function(d) {
                                    d = d.message || "decode failed";
                                    var e = l.Pc(d) + 1, f = l.Fb(e);
                                    l.Uc(d, f, e);
                                    l.zc(a, f);
                                    l.xc(f);
                                });
                            }
                        }, Z = function() {
                            function a(c) {
                                Z = c.exports;
                                Da = Z.memory;
                                La();
                                kd = Z.__indirect_function_table;
                                Na.unshift(Z.__wasm_call_ctors);
                                Qa--;
                                l.monitorRunDependencies?.(Qa);
                                0 == Qa && (null !== Ra && (clearInterval(Ra), Ra = null), Sa && (c = Sa, Sa = null, c()));
                                return Z;
                            }
                            var b = {
                                env: ee,
                                wasi_snapshot_preview1: ee
                            };
                            Qa++;
                            l.monitorRunDependencies?.(Qa);
                            if (l.instantiateWasm) {
                                try {
                                    return l.instantiateWasm(b, a);
                                } catch (c) {
                                    Ba(`Module.instantiateWasm callback failed with error: ${c}`), da(c);
                                }
                            }
                            Va ||= Ua("canvas_advanced.wasm") ? "canvas_advanced.wasm" : l.locateFile ? l.locateFile("canvas_advanced.wasm", ua) : ua + "canvas_advanced.wasm";
                            Za(b, function(c) {
                                a(c.instance);
                            }).catch(da);
                            return {};
                        }(), Ec = (a)=>(Ec = Z.free)(a), ce = (a)=>(ce = Z.malloc)(a), Dc = (a)=>(Dc = Z.__getTypeName)(a);
                        l._wasm_image_decode_complete = (a, b, c, d, e)=>(l._wasm_image_decode_complete = Z.wasm_image_decode_complete)(a, b, c, d, e);
                        l._wasm_image_decode_error = (a, b)=>(l._wasm_image_decode_error = Z.wasm_image_decode_error)(a, b);
                        var bb = l._ma_device__on_notification_unlocked = (a)=>(bb = l._ma_device__on_notification_unlocked = Z.ma_device__on_notification_unlocked)(a);
                        l._ma_malloc_emscripten = (a, b)=>(l._ma_malloc_emscripten = Z.ma_malloc_emscripten)(a, b);
                        l._ma_free_emscripten = (a, b)=>(l._ma_free_emscripten = Z.ma_free_emscripten)(a, b);
                        var cb = l._ma_device_process_pcm_frames_capture__webaudio = (a, b, c)=>(cb = l._ma_device_process_pcm_frames_capture__webaudio = Z.ma_device_process_pcm_frames_capture__webaudio)(a, b, c), db = l._ma_device_process_pcm_frames_playback__webaudio = (a, b, c)=>(db = l._ma_device_process_pcm_frames_playback__webaudio = Z.ma_device_process_pcm_frames_playback__webaudio)(a, b, c), fe = (a, b)=>(fe = Z.setThrew)(a, b), ge = (a)=>(ge = Z._emscripten_stack_restore)(a), he = ()=>(he = Z.emscripten_stack_get_current)();
                        l.dynCall_iiji = (a, b, c, d, e)=>(l.dynCall_iiji = Z.dynCall_iiji)(a, b, c, d, e);
                        l.dynCall_jiji = (a, b, c, d, e)=>(l.dynCall_jiji = Z.dynCall_jiji)(a, b, c, d, e);
                        l.dynCall_iiiji = (a, b, c, d, e, f)=>(l.dynCall_iiiji = Z.dynCall_iiiji)(a, b, c, d, e, f);
                        l.dynCall_iij = (a, b, c, d)=>(l.dynCall_iij = Z.dynCall_iij)(a, b, c, d);
                        l.dynCall_jii = (a, b, c)=>(l.dynCall_jii = Z.dynCall_jii)(a, b, c);
                        l.dynCall_viijii = (a, b, c, d, e, f, g)=>(l.dynCall_viijii = Z.dynCall_viijii)(a, b, c, d, e, f, g);
                        l.dynCall_iiiiij = (a, b, c, d, e, f, g)=>(l.dynCall_iiiiij = Z.dynCall_iiiiij)(a, b, c, d, e, f, g);
                        l.dynCall_iiiiijj = (a, b, c, d, e, f, g, k, p)=>(l.dynCall_iiiiijj = Z.dynCall_iiiiijj)(a, b, c, d, e, f, g, k, p);
                        l.dynCall_iiiiiijj = (a, b, c, d, e, f, g, k, p, n)=>(l.dynCall_iiiiiijj = Z.dynCall_iiiiiijj)(a, b, c, d, e, f, g, k, p, n);
                        function de(a, b, c) {
                            var d = he();
                            try {
                                ld(a)(b, c);
                            } catch (e) {
                                ge(d);
                                if (e !== e + 0) {
                                    throw e;
                                }
                                fe(1, 0);
                            }
                        }
                        var ie;
                        Sa = function je() {
                            ie || ke();
                            ie || (Sa = je);
                        };
                        function ke() {
                            function a() {
                                if (!ie && (ie = !0, l.calledRun = !0, !Ea)) {
                                    l.noFSInit || mc || (mc = !0, l.stdin = l.stdin, l.stdout = l.stdout, l.stderr = l.stderr, l.stdin ? nc("stdin", l.stdin) : ic("/dev/tty", "/dev/stdin"), l.stdout ? nc("stdout", null, l.stdout) : ic("/dev/tty", "/dev/stdout"), l.stderr ? nc("stderr", null, l.stderr) : ic("/dev/tty1", "/dev/stderr"), jc("/dev/stdin", 0), jc("/dev/stdout", 1), jc("/dev/stderr", 1));
                                    Nb = !1;
                                    fb(Na);
                                    ca(l);
                                    if (l.onRuntimeInitialized) {
                                        l.onRuntimeInitialized();
                                    }
                                    if (l.postRun) {
                                        for("function" == typeof l.postRun && (l.postRun = [
                                            l.postRun
                                        ]); l.postRun.length;){
                                            var b = l.postRun.shift();
                                            Oa.unshift(b);
                                        }
                                    }
                                    fb(Oa);
                                }
                            }
                            if (!(0 < Qa)) {
                                if (l.preRun) {
                                    for("function" == typeof l.preRun && (l.preRun = [
                                        l.preRun
                                    ]); l.preRun.length;){
                                        Pa();
                                    }
                                }
                                fb(Ma);
                                0 < Qa || (l.setStatus ? (l.setStatus("Running..."), setTimeout(function() {
                                    setTimeout(function() {
                                        l.setStatus("");
                                    }, 1);
                                    a();
                                }, 1)) : a());
                            }
                        }
                        if (l.preInit) {
                            for("function" == typeof l.preInit && (l.preInit = [
                                l.preInit
                            ]); 0 < l.preInit.length;){
                                l.preInit.pop()();
                            }
                        }
                        ke();
                        moduleRtn = ea;
                        return moduleRtn;
                    };
                })();
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Rive;
            /***/ },
            (module1)=>{
                module1.exports = /*#__PURE__*/ JSON.parse('{"name":"@rive-app/canvas","version":"2.38.4","description":"Rive\'s canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive_fallback.wasm","rive.d.ts","rive_advanced.mjs.d.ts","runtimeLoader.d.ts","utils"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}');
            /***/ },
            (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ AudioAssetWrapper: ()=>/* reexport safe */ _finalizationRegistry__WEBPACK_IMPORTED_MODULE_3__.AudioAssetWrapper,
                    /* harmony export */ AudioWrapper: ()=>/* reexport safe */ _finalizationRegistry__WEBPACK_IMPORTED_MODULE_3__.AudioWrapper,
                    /* harmony export */ BLANK_URL: ()=>/* reexport safe */ _sanitizeUrl__WEBPACK_IMPORTED_MODULE_2__.BLANK_URL,
                    /* harmony export */ CustomFileAssetLoaderWrapper: ()=>/* reexport safe */ _finalizationRegistry__WEBPACK_IMPORTED_MODULE_3__.CustomFileAssetLoaderWrapper,
                    /* harmony export */ FileAssetWrapper: ()=>/* reexport safe */ _finalizationRegistry__WEBPACK_IMPORTED_MODULE_3__.FileAssetWrapper,
                    /* harmony export */ FileFinalizer: ()=>/* reexport safe */ _finalizationRegistry__WEBPACK_IMPORTED_MODULE_3__.FileFinalizer,
                    /* harmony export */ FocusSessionState: ()=>/* reexport safe */ _registerKeyboardInteractions__WEBPACK_IMPORTED_MODULE_1__.FocusSessionState,
                    /* harmony export */ FontAssetWrapper: ()=>/* reexport safe */ _finalizationRegistry__WEBPACK_IMPORTED_MODULE_3__.FontAssetWrapper,
                    /* harmony export */ FontWrapper: ()=>/* reexport safe */ _finalizationRegistry__WEBPACK_IMPORTED_MODULE_3__.FontWrapper,
                    /* harmony export */ ImageAssetWrapper: ()=>/* reexport safe */ _finalizationRegistry__WEBPACK_IMPORTED_MODULE_3__.ImageAssetWrapper,
                    /* harmony export */ ImageWrapper: ()=>/* reexport safe */ _finalizationRegistry__WEBPACK_IMPORTED_MODULE_3__.ImageWrapper,
                    /* harmony export */ KeyboardInteractions: ()=>/* reexport safe */ _registerKeyboardInteractions__WEBPACK_IMPORTED_MODULE_1__.KeyboardInteractions,
                    /* harmony export */ RiveFont: ()=>/* reexport safe */ _riveFont__WEBPACK_IMPORTED_MODULE_4__.RiveFont,
                    /* harmony export */ createFinalization: ()=>/* reexport safe */ _finalizationRegistry__WEBPACK_IMPORTED_MODULE_3__.createFinalization,
                    /* harmony export */ finalizationRegistry: ()=>/* reexport safe */ _finalizationRegistry__WEBPACK_IMPORTED_MODULE_3__.finalizationRegistry,
                    /* harmony export */ registerTouchInteractions: ()=>/* reexport safe */ _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__.registerTouchInteractions,
                    /* harmony export */ sanitizeUrl: ()=>/* reexport safe */ _sanitizeUrl__WEBPACK_IMPORTED_MODULE_2__.sanitizeUrl
                });
                /* harmony import */ var _registerTouchInteractions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
                /* harmony import */ var _registerKeyboardInteractions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
                /* harmony import */ var _sanitizeUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
                /* harmony import */ var _finalizationRegistry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
                /* harmony import */ var _riveFont__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
            /***/ },
            (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ registerTouchInteractions: ()=>/* binding */ registerTouchInteractions
                });
                var _this = undefined;
                /**
 * Extracts ClientCoordinates from a TouchList, respecting multi-touch vs.
 * single-touch mode. In single-touch mode, only the touch matching
 * primaryTouchId is returned (or the first touch when primaryTouchId is null).
 */ var getTouchCoordinates = function(changedTouches, enableMultiTouch, primaryTouchId) {
                    var _a;
                    var coordinates = [];
                    if (enableMultiTouch) {
                        for(var i = 0; i < changedTouches.length; i++){
                            var touch = changedTouches[i];
                            coordinates.push({
                                clientX: touch.clientX,
                                clientY: touch.clientY,
                                identifier: touch.identifier
                            });
                        }
                    } else {
                        // In "single-touch mode", only track the primary finger identified at touchstart.
                        // Search changedTouches for the touch matching the recorded primary touch identifier, or (on initial touchstart)
                        // take the first available touch identifier.
                        var primaryTouch = primaryTouchId !== null ? (_a = Array.from(changedTouches).find(function(t) {
                            return t.identifier === primaryTouchId;
                        })) !== null && _a !== void 0 ? _a : null : changedTouches[0];
                        if (primaryTouch) {
                            coordinates.push({
                                clientX: primaryTouch.clientX,
                                clientY: primaryTouch.clientY,
                                identifier: primaryTouch.identifier
                            });
                        }
                    }
                    return coordinates;
                };
                /**
 * Returns the clientX and clientY properties from touch or mouse events. Also
 * calls preventDefault() on the event if it is a touchstart or touchmove to prevent
 * scrolling the page on mobile devices
 * @param event - Either a TouchEvent or a MouseEvent
 * @param isTouchScrollEnabled - Whether touch scrolling is enabled
 * @param enableMultiTouch - Whether to process multiple simultaneous touches
 * @param primaryTouchId - When working with single touches, only process the touch
 *   with this identifier. Pass null to accept any touch (used during touchstart to
 *   capture the first finger down).
 * @returns - Coordinates of the clientX and clientY properties from the touch/mouse event
 */ var getClientCoordinates = function(event, isTouchScrollEnabled, enableMultiTouch, primaryTouchId) {
                    var _a;
                    var touchEvent = event;
                    if ((_a = touchEvent.changedTouches) === null || _a === void 0 ? void 0 : _a.length) {
                        // This flag, if false, prevents touch events on the canvas default behavior
                        // which may prevent scrolling if a drag motion on the canvas is performed
                        if (!isTouchScrollEnabled && [
                            "touchstart",
                            "touchmove"
                        ].includes(event.type)) {
                            event.preventDefault();
                        }
                        return getTouchCoordinates(touchEvent.changedTouches, enableMultiTouch, primaryTouchId);
                    }
                    return [
                        {
                            clientX: event.clientX,
                            clientY: event.clientY,
                            identifier: 0
                        }
                    ];
                };
                /**
 * Registers mouse move/up/down callback handlers on the canvas to send meaningful coordinates to
 * the state machine pointer move/up/down functions based on cursor interaction
 */ var registerTouchInteractions = function(_a) {
                    var canvas = _a.canvas, artboard = _a.artboard, _b = _a.stateMachines, stateMachines = _b === void 0 ? [] : _b, renderer = _a.renderer, rive = _a.rive, fit = _a.fit, alignment = _a.alignment, _c = _a.isTouchScrollEnabled, isTouchScrollEnabled = _c === void 0 ? false : _c, _d = _a.dispatchPointerExit, dispatchPointerExit = _d === void 0 ? true : _d, _e = _a.enableMultiTouch, enableMultiTouch = _e === void 0 ? false : _e, _f = _a.layoutScaleFactor, layoutScaleFactor = _f === void 0 ? 1.0 : _f, advanceAndDrain = _a.advanceAndDrain;
                    if (!canvas || !stateMachines.length || !renderer || !rive || !artboard || typeof window === "undefined") {
                        return null;
                    }
                    /**
     * After a touchend event, some browsers may fire synthetic mouse events
     * (mouseover, mousedown, mousemove, mouseup) if the touch interaction did not cause
     * any default action (such as scrolling).
     *
     * This is done to simulate the behavior of a mouse for applications that do not support
     * touch events.
     *
     * We're keeping track of the previous event to not send the synthetic mouse events if the
     * touch event was a click (touchstart -> touchend).
     *
     * This is only needed when `isTouchScrollEnabled` is false
     * When true, `preventDefault()` is called which prevents this behaviour.
     **/ var _prevEventType = null;
                    var _syntheticEventsActive = false;
                    /**
     * When enableMultiTouch is false ("single-touch mode"), we track the identifier of the first finger that touched down.
     * All subsequent touch events are filtered to this identifier so that a second finger
     * moving cannot displace the tracked pointer position.
     * Reset to null when the primary finger lifts (or touchcancel is called)
     */ var _primaryTouchId = null;
                    var processEventCallback = function(event) {
                        var _a;
                        // Exit early out of all synthetic mouse events
                        // https://stackoverflow.com/questions/9656990/how-to-prevent-simulated-mouse-events-in-mobile-browsers
                        // https://stackoverflow.com/questions/25572070/javascript-touchend-versus-click-dilemma
                        if (_syntheticEventsActive && event instanceof MouseEvent) {
                            // Synthetic event finished
                            if (event.type == "mouseup") {
                                _syntheticEventsActive = false;
                            }
                            return;
                        }
                        // Test if it's a "touch click". This could cause the browser to send
                        // synthetic mouse events.
                        _syntheticEventsActive = isTouchScrollEnabled && event.type === "touchend" && _prevEventType === "touchstart";
                        _prevEventType = event.type;
                        var boundingRect = event.currentTarget.getBoundingClientRect();
                        // On touchstart in single-touch mode, record the first new finger as the primary
                        // touch if we aren't already tracking one.
                        if (!enableMultiTouch && event.type === "touchstart" && _primaryTouchId === null) {
                            var firstTouch = (_a = event.changedTouches) === null || _a === void 0 ? void 0 : _a[0];
                            if (firstTouch) {
                                _primaryTouchId = firstTouch.identifier;
                            }
                        }
                        var coordinateSets = getClientCoordinates(event, isTouchScrollEnabled, enableMultiTouch, enableMultiTouch ? null : _primaryTouchId);
                        var forwardMatrix = rive.computeAlignment(fit, alignment, {
                            minX: 0,
                            minY: 0,
                            maxX: boundingRect.width,
                            maxY: boundingRect.height
                        }, artboard.bounds, layoutScaleFactor);
                        var invertedMatrix = new rive.Mat2D();
                        forwardMatrix.invert(invertedMatrix);
                        coordinateSets.forEach(function(coordinateSet) {
                            var clientX = coordinateSet.clientX;
                            var clientY = coordinateSet.clientY;
                            if (!clientX && !clientY) {
                                return;
                            }
                            var canvasX = clientX - boundingRect.left;
                            var canvasY = clientY - boundingRect.top;
                            var canvasCoordinatesVector = new rive.Vec2D(canvasX, canvasY);
                            var transformedVector = rive.mapXY(invertedMatrix, canvasCoordinatesVector);
                            var transformedX = transformedVector.x();
                            var transformedY = transformedVector.y();
                            coordinateSet.transformedX = transformedX;
                            coordinateSet.transformedY = transformedY;
                            transformedVector.delete();
                            canvasCoordinatesVector.delete();
                        });
                        invertedMatrix.delete();
                        forwardMatrix.delete();
                        switch(event.type){
                            /**
             * There's a 2px buffer for a hitRadius when translating the pointer coordinates
             * down to the state machine. In cases where the hitbox is about that much away
             * from the Artboard border, we don't have exact precision on determining pointer
             * exit. We're therefore adding to the translated coordinates on mouseout of a canvas
             * to ensure that we report the mouse has truly exited the hitarea.
             * https://github.com/rive-app/rive-cpp/blob/master/src/animation/state_machine_instance.cpp#L336
             *
             */ case "mouseout":
                                var _loop_1 = function(stateMachine) {
                                    if (dispatchPointerExit) {
                                        coordinateSets.forEach(function(coordinateSet) {
                                            stateMachine.pointerExit(coordinateSet.transformedX, coordinateSet.transformedY, coordinateSet.identifier);
                                        });
                                    } else {
                                        coordinateSets.forEach(function(coordinateSet) {
                                            stateMachine.pointerMove(coordinateSet.transformedX, coordinateSet.transformedY, coordinateSet.identifier);
                                        });
                                    }
                                };
                                for(var _i = 0, stateMachines_1 = stateMachines; _i < stateMachines_1.length; _i++){
                                    var stateMachine = stateMachines_1[_i];
                                    _loop_1(stateMachine);
                                }
                                break;
                            // Pointer moving/hovering on the canvas
                            case "touchmove":
                            case "mouseover":
                            case "mousemove":
                                {
                                    var _loop_2 = function(stateMachine) {
                                        coordinateSets.forEach(function(coordinateSet) {
                                            stateMachine.pointerMove(coordinateSet.transformedX, coordinateSet.transformedY, coordinateSet.identifier);
                                        });
                                    };
                                    for(var _b = 0, stateMachines_2 = stateMachines; _b < stateMachines_2.length; _b++){
                                        var stateMachine = stateMachines_2[_b];
                                        _loop_2(stateMachine);
                                    }
                                    break;
                                }
                            // Pointer click initiated but not released yet on the canvas
                            case "touchstart":
                            case "mousedown":
                                {
                                    var _loop_3 = function(stateMachine) {
                                        coordinateSets.forEach(function(coordinateSet) {
                                            stateMachine.pointerDown(coordinateSet.transformedX, coordinateSet.transformedY, coordinateSet.identifier);
                                        });
                                    };
                                    for(var _c = 0, stateMachines_3 = stateMachines; _c < stateMachines_3.length; _c++){
                                        var stateMachine = stateMachines_3[_c];
                                        _loop_3(stateMachine);
                                    }
                                    // Advance the state machine immediately so pointer down(s) takes effect synchronously
                                    advanceAndDrain(0);
                                    break;
                                }
                            // Pointer click released on the canvas
                            case "touchend":
                                {
                                    var _loop_4 = function(stateMachine) {
                                        coordinateSets.forEach(function(coordinateSet) {
                                            stateMachine.pointerUp(coordinateSet.transformedX, coordinateSet.transformedY, coordinateSet.identifier);
                                            stateMachine.pointerExit(coordinateSet.transformedX, coordinateSet.transformedY, coordinateSet.identifier);
                                        });
                                    };
                                    for(var _d = 0, stateMachines_4 = stateMachines; _d < stateMachines_4.length; _d++){
                                        var stateMachine = stateMachines_4[_d];
                                        _loop_4(stateMachine);
                                    }
                                    // Advance the state machine immediately so pointer up(s) takes effect synchronously
                                    advanceAndDrain(0);
                                    // Release the primary touch lock once that finger lifts so the next
                                    // touchstart can claim a new primary finger.
                                    if (!enableMultiTouch && coordinateSets.some(function(c) {
                                        return c.identifier === _primaryTouchId;
                                    })) {
                                        _primaryTouchId = null;
                                    }
                                    break;
                                }
                            case "mouseup":
                                {
                                    var _loop_5 = function(stateMachine) {
                                        coordinateSets.forEach(function(coordinateSet) {
                                            stateMachine.pointerUp(coordinateSet.transformedX, coordinateSet.transformedY, coordinateSet.identifier);
                                        });
                                    };
                                    for(var _e = 0, stateMachines_5 = stateMachines; _e < stateMachines_5.length; _e++){
                                        var stateMachine = stateMachines_5[_e];
                                        _loop_5(stateMachine);
                                    }
                                    // Advance the state machine immediately so pointer up(s) takes effect synchronously
                                    advanceAndDrain(0);
                                    break;
                                }
                            default:
                        }
                    };
                    var touchCancelCallback = function() {
                        _primaryTouchId = null;
                    };
                    var callback = processEventCallback.bind(_this);
                    canvas.addEventListener("mouseover", callback);
                    canvas.addEventListener("mouseout", callback);
                    canvas.addEventListener("mousemove", callback);
                    canvas.addEventListener("mousedown", callback);
                    canvas.addEventListener("mouseup", callback);
                    canvas.addEventListener("touchmove", callback, {
                        passive: isTouchScrollEnabled
                    });
                    canvas.addEventListener("touchstart", callback, {
                        passive: isTouchScrollEnabled
                    });
                    canvas.addEventListener("touchend", callback);
                    canvas.addEventListener("touchcancel", touchCancelCallback);
                    return function() {
                        canvas.removeEventListener("mouseover", callback);
                        canvas.removeEventListener("mouseout", callback);
                        canvas.removeEventListener("mousemove", callback);
                        canvas.removeEventListener("mousedown", callback);
                        canvas.removeEventListener("mouseup", callback);
                        canvas.removeEventListener("touchmove", callback);
                        canvas.removeEventListener("touchstart", callback);
                        canvas.removeEventListener("touchend", callback);
                        canvas.removeEventListener("touchcancel", touchCancelCallback);
                    };
                };
            /***/ },
            (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ FocusSessionState: ()=>/* binding */ FocusSessionState,
                    /* harmony export */ KeyboardInteractions: ()=>/* binding */ KeyboardInteractions
                });
                /**
 * Tracks the relationship between the canvas's DOM focus and Rive's internal focus for the
 * current focus session.
 *
 * NotFocused   — the canvas is not the active DOM element, or Rive entered and then released focus
 *                internally this session. Either way the next Tab should move on to the next page
 *                element, so Tab events are ignored.
 * EntryPending — the canvas has DOM focus but Rive holds no active focus node yet, and the next Tab should enter
 *                the focus tree. This is the resting state for pointer-driven focus (a click on the
 *                canvas), or an edge case for keyboard focus where initial focus action did not land on a focus node.
 * RiveFocused  — a Rive node currently holds focus. Tab/Shift+Tab are routed to the Rive focus
 *                manager and trapped inside the canvas until Rive notifies focus has ended.
 *
 * When keyboard focus lands on the canvas, onCanvasFocus reads the direction focus came from and
 * moves into the focus tree immediately, going straight to RiveFocused. EntryPending is only set via pointer focus (or keyboard focus
 * where focusNext()/focusPrevious() return false but respects tabindex).
 */ var FocusSessionState;
                (function(FocusSessionState) {
                    FocusSessionState["NotFocused"] = "notFocused";
                    FocusSessionState["EntryPending"] = "entryPending";
                    FocusSessionState["RiveFocused"] = "riveFocused";
                })(FocusSessionState || (FocusSessionState = {}));
                /**
 * Manages keyboard and DOM focus interactions for a Rive canvas.
 *
 * Tracks the canvas focus session state (focusSessionState) and routes
 * Tab/Shift+Tab to the Rive state machine's focus manager. Exposes shared
 * state as properties so the Rive render loop can read them directly.
 */ var KeyboardInteractions = function() {
                    function KeyboardInteractions(_a) {
                        var canvas = _a.canvas, stateMachine = _a.stateMachine, hasFocusNodes = _a.hasFocusNodes;
                        var _this = this;
                        this.focusSessionState = FocusSessionState.NotFocused;
                        /**
         * Handles the canvas gaining browser focus. The behavior differs based on how focus was gained -
         *
         * Pointer-driven focus: the canvas now has focus but Rive holds nothing yet, so we move to EntryPending — this lets the
         * next Tab enter the focus tree even when the focus is pointer-driven
         *
         * Keyboard-driven focus: we enter the Rive focus tree immediately once canvas gains focus.
         * The direction is inferred from where focus came from: an element before the canvas in DOM order
         * means a forward Tab (focusNext), one after means a Shift+Tab (focusPrevious). :focus-visible
         * gates this so a click doesn't yank Rive focus to the first node on the focus event itself.
         */ this.onCanvasFocus = function(event) {
                            if (!_this.hasFocusNodes) return;
                            if (_this.mainSm.focusState().hasFocus) return;
                            _this.focusSessionState = FocusSessionState.EntryPending;
                            // Pointer focus waits for the user's next Tab (handled in onKeyDown). Keyboard focus enters now.
                            if (!_this.isKeyboardDrivenFocus()) return;
                            var forward = _this.cameFromBeforeCanvas(event.relatedTarget);
                            if (forward ? _this.mainSm.focusNext() : _this.mainSm.focusPrevious()) {
                                _this.focusSessionState = FocusSessionState.RiveFocused;
                            }
                        };
                        this.onCanvasBlur = function(_event) {
                            _this.focusSessionState = FocusSessionState.NotFocused;
                        };
                        this.onKeyDown = function(event) {
                            if (_this.focusSessionState === FocusSessionState.NotFocused) return;
                            if (event.code === "Tab" && _this.hasFocusNodes) {
                                var forward = !event.shiftKey;
                                var focusMoved = forward ? _this.mainSm.focusNext() : _this.mainSm.focusPrevious();
                                if (focusMoved) {
                                    // A Rive node accepted focus — keep trapping Tab inside the canvas.
                                    _this.focusSessionState = FocusSessionState.RiveFocused;
                                    event.preventDefault();
                                } else {
                                    // No more traversable nodes — release Tab to the page.
                                    // Set state immediately; onCanvasBlur will also fire naturally.
                                    _this.focusSessionState = FocusSessionState.NotFocused;
                                }
                            }
                        };
                        this.canvas = canvas;
                        this.mainSm = stateMachine;
                        this.hasFocusNodes = hasFocusNodes;
                        canvas.addEventListener("focus", this.onCanvasFocus);
                        canvas.addEventListener("blur", this.onCanvasBlur);
                        canvas.addEventListener("keydown", this.onKeyDown);
                    }
                    /**
     * Set the FocusSessionState. Useful for invoking a Rive "blur" without actually blurring from the <canvas>. This
     * helps put the DOM focus state on the canvas rather than the <body>, so the user doesn't lose the spot in page navigation
     *
     * @param state FocusSessionState enum
     */ KeyboardInteractions.prototype.setFocusSessionState = function(state) {
                        this.focusSessionState = state;
                    };
                    /**
     * Called by pollFocusState on the Rive instance when it observes hasFocus=true. Rive acquired
     * focus internally (e.g. via a listener action or state transition) without a DOM focus event,
     * so mark the session RiveFocused.
     */ KeyboardInteractions.prototype.notifyRiveFocused = function() {
                        this.focusSessionState = FocusSessionState.RiveFocused;
                    };
                    /**
     * Whether the canvas currently matches :focus-visible — the browser's heuristic for keyboard-
     * (vs pointer-) driven focus. For older browser versions that don't support this selector, return false
     * so that we don't incorrectly assume pointer vs keyboard focus. Next tab would enter the focus tree in those edge cases.
     */ KeyboardInteractions.prototype.isKeyboardDrivenFocus = function() {
                        try {
                            return this.canvas.matches(":focus-visible");
                        } catch (_a) {
                            return false;
                        }
                    };
                    KeyboardInteractions.prototype.cameFromBeforeCanvas = function(from) {
                        if (!from) return true;
                        var position = this.canvas.compareDocumentPosition(from);
                        if (position & Node.DOCUMENT_POSITION_PRECEDING) return true;
                        if (position & Node.DOCUMENT_POSITION_FOLLOWING) return false;
                        return true;
                    };
                    KeyboardInteractions.prototype.cleanup = function() {
                        this.canvas.removeEventListener("focus", this.onCanvasFocus);
                        this.canvas.removeEventListener("blur", this.onCanvasBlur);
                        this.canvas.removeEventListener("keydown", this.onKeyDown);
                    };
                    return KeyboardInteractions;
                }();
            /***/ },
            (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ BLANK_URL: ()=>/* binding */ BLANK_URL,
                    /* harmony export */ sanitizeUrl: ()=>/* binding */ sanitizeUrl
                });
                // Reference: https://github.com/braintree/sanitize-url/tree/main
                var invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
                var htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
                var htmlCtrlEntityRegex = /&(newline|tab);/gi;
                var ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
                var urlSchemeRegex = /^.+(:|&colon;)/gim;
                var relativeFirstCharacters = [
                    ".",
                    "/"
                ];
                var BLANK_URL = "about:blank";
                function isRelativeUrlWithoutProtocol(url) {
                    return relativeFirstCharacters.indexOf(url[0]) > -1;
                }
                // adapted from https://stackoverflow.com/a/29824550/2601552
                function decodeHtmlCharacters(str) {
                    var removedNullByte = str.replace(ctrlCharactersRegex, "");
                    return removedNullByte.replace(htmlEntitiesRegex, function(match, dec) {
                        return String.fromCharCode(dec);
                    });
                }
                function sanitizeUrl(url) {
                    if (!url) {
                        return BLANK_URL;
                    }
                    var sanitizedUrl = decodeHtmlCharacters(url).replace(htmlCtrlEntityRegex, "").replace(ctrlCharactersRegex, "").trim();
                    if (!sanitizedUrl) {
                        return BLANK_URL;
                    }
                    if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {
                        return sanitizedUrl;
                    }
                    var urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
                    if (!urlSchemeParseResults) {
                        return sanitizedUrl;
                    }
                    var urlScheme = urlSchemeParseResults[0];
                    if (invalidProtocolRegex.test(urlScheme)) {
                        return BLANK_URL;
                    }
                    return sanitizedUrl;
                }
            /***/ },
            (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ AudioAssetWrapper: ()=>/* binding */ AudioAssetWrapper,
                    /* harmony export */ AudioWrapper: ()=>/* binding */ AudioWrapper,
                    /* harmony export */ CustomFileAssetLoaderWrapper: ()=>/* binding */ CustomFileAssetLoaderWrapper,
                    /* harmony export */ FileAssetWrapper: ()=>/* binding */ FileAssetWrapper,
                    /* harmony export */ FileFinalizer: ()=>/* binding */ FileFinalizer,
                    /* harmony export */ FontAssetWrapper: ()=>/* binding */ FontAssetWrapper,
                    /* harmony export */ FontWrapper: ()=>/* binding */ FontWrapper,
                    /* harmony export */ ImageAssetWrapper: ()=>/* binding */ ImageAssetWrapper,
                    /* harmony export */ ImageWrapper: ()=>/* binding */ ImageWrapper,
                    /* harmony export */ createFinalization: ()=>/* binding */ createFinalization,
                    /* harmony export */ finalizationRegistry: ()=>/* binding */ finalizationRegistry
                });
                var __extends = undefined && undefined.__extends || function() {
                    var extendStatics = function(d, b) {
                        extendStatics = Object.setPrototypeOf || ({
                            __proto__: []
                        }) instanceof Array && function(d, b) {
                            d.__proto__ = b;
                        } || function(d, b) {
                            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                        };
                        return extendStatics(d, b);
                    };
                    return function(d, b) {
                        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                        extendStatics(d, b);
                        function __() {
                            this.constructor = d;
                        }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                }();
                var FileFinalizer = function() {
                    function FileFinalizer(file) {
                        this.selfUnref = false;
                        this._file = file;
                    }
                    FileFinalizer.prototype.unref = function() {
                        if (this._file) {
                            this._file.unref();
                        }
                    };
                    return FileFinalizer;
                }();
                var ObjectFinalizer = function() {
                    function ObjectFinalizer(finalizableObject) {
                        this._finalizableObject = finalizableObject;
                    }
                    ObjectFinalizer.prototype.unref = function() {
                        this._finalizableObject.unref();
                    };
                    return ObjectFinalizer;
                }();
                var AssetWrapper = function() {
                    function AssetWrapper() {
                        this.selfUnref = false;
                    }
                    AssetWrapper.prototype.unref = function() {};
                    return AssetWrapper;
                }();
                var ImageWrapper = function(_super) {
                    __extends(ImageWrapper, _super);
                    function ImageWrapper(image) {
                        var _this = _super.call(this) || this;
                        _this._nativeImage = image;
                        return _this;
                    }
                    Object.defineProperty(ImageWrapper.prototype, "nativeImage", {
                        get: function() {
                            return this._nativeImage;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    ImageWrapper.prototype.unref = function() {
                        if (this.selfUnref) {
                            this._nativeImage.unref();
                        }
                    };
                    return ImageWrapper;
                }(AssetWrapper);
                var AudioWrapper = function(_super) {
                    __extends(AudioWrapper, _super);
                    function AudioWrapper(audio) {
                        var _this = _super.call(this) || this;
                        _this._nativeAudio = audio;
                        return _this;
                    }
                    Object.defineProperty(AudioWrapper.prototype, "nativeAudio", {
                        get: function() {
                            return this._nativeAudio;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    AudioWrapper.prototype.unref = function() {
                        if (this.selfUnref) {
                            this._nativeAudio.unref();
                        }
                    };
                    return AudioWrapper;
                }(AssetWrapper);
                var FontWrapper = function(_super) {
                    __extends(FontWrapper, _super);
                    function FontWrapper(font) {
                        var _this = _super.call(this) || this;
                        _this._nativeFont = font;
                        return _this;
                    }
                    Object.defineProperty(FontWrapper.prototype, "nativeFont", {
                        get: function() {
                            return this._nativeFont;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    FontWrapper.prototype.unref = function() {
                        if (this.selfUnref) {
                            this._nativeFont.unref();
                        }
                    };
                    return FontWrapper;
                }(AssetWrapper);
                var CustomFileAssetLoaderWrapper = function() {
                    function CustomFileAssetLoaderWrapper(runtime, loaderCallback) {
                        this._assetLoaderCallback = loaderCallback;
                        this.assetLoader = new runtime.CustomFileAssetLoader({
                            loadContents: this.loadContents.bind(this)
                        });
                    }
                    CustomFileAssetLoaderWrapper.prototype.loadContents = function(asset, bytes) {
                        var assetWrapper;
                        if (asset.isImage) {
                            assetWrapper = new ImageAssetWrapper(asset);
                        } else if (asset.isAudio) {
                            assetWrapper = new AudioAssetWrapper(asset);
                        } else if (asset.isFont) {
                            assetWrapper = new FontAssetWrapper(asset);
                        } else {
                            return false;
                        }
                        return this._assetLoaderCallback(assetWrapper, bytes);
                    };
                    return CustomFileAssetLoaderWrapper;
                }();
                /**
 * Rive class representing a FileAsset with relevant metadata fields to describe
 * an asset associated wtih the Rive File
 */ var FileAssetWrapper = function() {
                    function FileAssetWrapper(nativeAsset) {
                        this._nativeFileAsset = nativeAsset;
                    }
                    FileAssetWrapper.prototype.decode = function(bytes) {
                        this._nativeFileAsset.decode(bytes);
                    };
                    Object.defineProperty(FileAssetWrapper.prototype, "name", {
                        get: function() {
                            return this._nativeFileAsset.name;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(FileAssetWrapper.prototype, "fileExtension", {
                        get: function() {
                            return this._nativeFileAsset.fileExtension;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(FileAssetWrapper.prototype, "uniqueFilename", {
                        get: function() {
                            return this._nativeFileAsset.uniqueFilename;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(FileAssetWrapper.prototype, "isAudio", {
                        get: function() {
                            return this._nativeFileAsset.isAudio;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(FileAssetWrapper.prototype, "isImage", {
                        get: function() {
                            return this._nativeFileAsset.isImage;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(FileAssetWrapper.prototype, "isFont", {
                        get: function() {
                            return this._nativeFileAsset.isFont;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(FileAssetWrapper.prototype, "cdnUuid", {
                        get: function() {
                            return this._nativeFileAsset.cdnUuid;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(FileAssetWrapper.prototype, "nativeFileAsset", {
                        get: function() {
                            return this._nativeFileAsset;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    return FileAssetWrapper;
                }();
                /**
 * Rive class extending the FileAsset that exposes a `setRenderImage()` API with a
 * decoded Image (via the `decodeImage()` API) to set a new Image on the Rive FileAsset
 */ var ImageAssetWrapper = function(_super) {
                    __extends(ImageAssetWrapper, _super);
                    function ImageAssetWrapper() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    ImageAssetWrapper.prototype.setRenderImage = function(image) {
                        this._nativeFileAsset.setRenderImage(image.nativeImage);
                    };
                    return ImageAssetWrapper;
                }(FileAssetWrapper);
                /**
 * Rive class extending the FileAsset that exposes a `setAudioSource()` API with a
 * decoded Audio (via the `decodeAudio()` API) to set a new Audio on the Rive FileAsset
 */ var AudioAssetWrapper = function(_super) {
                    __extends(AudioAssetWrapper, _super);
                    function AudioAssetWrapper() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    AudioAssetWrapper.prototype.setAudioSource = function(audio) {
                        this._nativeFileAsset.setAudioSource(audio.nativeAudio);
                    };
                    return AudioAssetWrapper;
                }(FileAssetWrapper);
                /**
 * Rive class extending the FileAsset that exposes a `setFont()` API with a
 * decoded Font (via the `decodeFont()` API) to set a new Font on the Rive FileAsset
 */ var FontAssetWrapper = function(_super) {
                    __extends(FontAssetWrapper, _super);
                    function FontAssetWrapper() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    FontAssetWrapper.prototype.setFont = function(font) {
                        this._nativeFileAsset.setFont(font.nativeFont);
                    };
                    return FontAssetWrapper;
                }(FileAssetWrapper);
                var FakeFinalizationRegistry = function() {
                    function FakeFinalizationRegistry(_) {}
                    FakeFinalizationRegistry.prototype.register = function(object) {
                        object.selfUnref = true;
                    };
                    FakeFinalizationRegistry.prototype.unregister = function(_) {};
                    return FakeFinalizationRegistry;
                }();
                var MyFinalizationRegistry = typeof FinalizationRegistry !== "undefined" ? FinalizationRegistry : FakeFinalizationRegistry;
                var finalizationRegistry = new MyFinalizationRegistry(function(ob) {
                    ob === null || ob === void 0 ? void 0 : ob.unref();
                });
                var createFinalization = function(target, finalizable) {
                    var finalizer = new ObjectFinalizer(finalizable);
                    finalizationRegistry.register(target, finalizer);
                };
            /***/ },
            (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ RiveFont: ()=>/* binding */ RiveFont
                });
                /* harmony import */ var _runtimeLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
                // Class to manage fallback fonts for Rive.
                var RiveFont = function() {
                    // Class is never instantiated
                    function RiveFont() {}
                    /**
     * Set a callback to dynamically set a list of fallback fonts based on the missing glyph and/or style of the default font.
     * Set null to clear the callback.
     * @param fontCallback Callback to set a list of fallback fonts.
     */ RiveFont.setFallbackFontCallback = function(fontCallback) {
                        RiveFont._fallbackFontCallback = fontCallback !== null && fontCallback !== void 0 ? fontCallback : null;
                        RiveFont._wireFallbackProc();
                    };
                    // Get the pointer value to the Embind Font object from FontWrapper
                    RiveFont._fontToPtr = function(fontWrapper) {
                        var _a;
                        if (fontWrapper == null) return null;
                        var embindFont = fontWrapper.nativeFont;
                        var ptr = (_a = embindFont === null || embindFont === void 0 ? void 0 : embindFont.ptr) === null || _a === void 0 ? void 0 : _a.call(embindFont);
                        return ptr !== null && ptr !== void 0 ? ptr : null;
                    };
                    RiveFont._getFallbackPtr = function(fonts, index) {
                        if (index < 0 || index >= fonts.length) return null;
                        return RiveFont._fontToPtr(fonts[index]);
                    };
                    // Create the callback Rive expects to use for fallback fonts (regardless if set via a user-supplied static list, or callback)
                    // 1. Ensure WASM is ready
                    // 2. Bias for checking user callback over static list of fonts and pass it down to Rive to store as reference
                    //    - When calling the user callback, check if we have any fonts left to check, and if not, return null to indicate there are no more fallbacks to try.
                    //    - If the user callback returns an array of fonts, pass the pointer value to Rive of the font to try
                    // 3. If no callback is provided, or the callback returns null, try the static list of fonts if they set any
                    // 4. If no fallback method is set, return null.
                    RiveFont._wireFallbackProc = function() {
                        _runtimeLoader__WEBPACK_IMPORTED_MODULE_0__.RuntimeLoader.getInstance(function(rive) {
                            var cb = RiveFont._fallbackFontCallback;
                            if (cb) {
                                rive.setFallbackFontCallback(function(missingGlyph, fallbackFontIndex, weight) {
                                    var fontsReturned = cb(missingGlyph, weight);
                                    if (fontsReturned) {
                                        if (Array.isArray(fontsReturned)) {
                                            return RiveFont._getFallbackPtr(fontsReturned, fallbackFontIndex);
                                        }
                                        // If the user callback only returns a single font, provide it to Rive the first time, otherwise if Rive
                                        // calls back a second time, return null to indicate there are no more fallbacks to try.
                                        return fallbackFontIndex === 0 ? RiveFont._fontToPtr(fontsReturned) : null;
                                    }
                                    return null;
                                });
                            } else {
                                rive.setFallbackFontCallback(null);
                            }
                        });
                    };
                    RiveFont._fallbackFontCallback = null;
                    return RiveFont;
                }();
            /***/ }
        ];
        /************************************************************************/ /******/ // The module cache
        /******/ var __webpack_module_cache__ = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ var cachedModule = __webpack_module_cache__[moduleId];
            /******/ if (cachedModule !== undefined) {
                /******/ return cachedModule.exports;
            /******/ }
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = __webpack_module_cache__[moduleId] = {
                /******/ // no module.id needed
                /******/ // no module.loaded needed
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ __webpack_modules__[moduleId](module1, module1.exports, __webpack_require__);
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /************************************************************************/ /******/ /* webpack/runtime/define property getters */ /******/ (()=>{
            /******/ // define getter functions for harmony exports
            /******/ __webpack_require__.d = (exports, definition)=>{
                /******/ for(var key in definition){
                    /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                        /******/ Object.defineProperty(exports, key, {
                            enumerable: true,
                            get: definition[key]
                        });
                    /******/ }
                /******/ }
            /******/ };
        /******/ })();
        /******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/ (()=>{
            /******/ __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
        /******/ })();
        /******/ /******/ /* webpack/runtime/make namespace object */ /******/ (()=>{
            /******/ // define __esModule on exports
            /******/ __webpack_require__.r = (exports)=>{
                /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                        value: 'Module'
                    });
                /******/ }
                /******/ Object.defineProperty(exports, '__esModule', {
                    value: true
                });
            /******/ };
        /******/ })();
        /******/ /************************************************************************/ var __webpack_exports__ = {};
        // This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
        (()=>{
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                /* harmony export */ Alignment: ()=>/* binding */ Alignment,
                /* harmony export */ DataEnum: ()=>/* binding */ DataEnum,
                /* harmony export */ DataType: ()=>/* binding */ DataType,
                /* harmony export */ DrawOptimizationOptions: ()=>/* binding */ DrawOptimizationOptions,
                /* harmony export */ EventType: ()=>/* binding */ EventType,
                /* harmony export */ Fit: ()=>/* binding */ Fit,
                /* harmony export */ Layout: ()=>/* binding */ Layout,
                /* harmony export */ LoopType: ()=>/* binding */ LoopType,
                /* harmony export */ Rive: ()=>/* binding */ Rive,
                /* harmony export */ RiveEventType: ()=>/* binding */ RiveEventType,
                /* harmony export */ RiveFile: ()=>/* binding */ RiveFile,
                /* harmony export */ RiveFont: ()=>/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.RiveFont,
                /* harmony export */ RuntimeLoader: ()=>/* reexport safe */ _runtimeLoader__WEBPACK_IMPORTED_MODULE_1__.RuntimeLoader,
                /* harmony export */ StateMachineInput: ()=>/* binding */ StateMachineInput,
                /* harmony export */ StateMachineInputType: ()=>/* binding */ StateMachineInputType,
                /* harmony export */ Testing: ()=>/* binding */ Testing,
                /* harmony export */ ViewModel: ()=>/* binding */ ViewModel,
                /* harmony export */ ViewModelInstance: ()=>/* binding */ ViewModelInstance,
                /* harmony export */ ViewModelInstanceArtboard: ()=>/* binding */ ViewModelInstanceArtboard,
                /* harmony export */ ViewModelInstanceAssetImage: ()=>/* binding */ ViewModelInstanceAssetImage,
                /* harmony export */ ViewModelInstanceBoolean: ()=>/* binding */ ViewModelInstanceBoolean,
                /* harmony export */ ViewModelInstanceColor: ()=>/* binding */ ViewModelInstanceColor,
                /* harmony export */ ViewModelInstanceEnum: ()=>/* binding */ ViewModelInstanceEnum,
                /* harmony export */ ViewModelInstanceList: ()=>/* binding */ ViewModelInstanceList,
                /* harmony export */ ViewModelInstanceNumber: ()=>/* binding */ ViewModelInstanceNumber,
                /* harmony export */ ViewModelInstanceString: ()=>/* binding */ ViewModelInstanceString,
                /* harmony export */ ViewModelInstanceTrigger: ()=>/* binding */ ViewModelInstanceTrigger,
                /* harmony export */ ViewModelInstanceValue: ()=>/* binding */ ViewModelInstanceValue,
                /* harmony export */ decodeAudio: ()=>/* binding */ decodeAudio,
                /* harmony export */ decodeFont: ()=>/* binding */ decodeFont,
                /* harmony export */ decodeImage: ()=>/* binding */ decodeImage
            });
            /* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
            /* harmony import */ var _runtimeLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
            /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
            var __extends = undefined && undefined.__extends || function() {
                var extendStatics = function(d, b) {
                    extendStatics = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(d, b) {
                        d.__proto__ = b;
                    } || function(d, b) {
                        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                    };
                    return extendStatics(d, b);
                };
                return function(d, b) {
                    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                    extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }();
            var __assign = undefined && undefined.__assign || function() {
                __assign = Object.assign || function(t) {
                    for(var s, i = 1, n = arguments.length; i < n; i++){
                        s = arguments[i];
                        for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
                function adopt(value) {
                    return value instanceof P ? value : new P(function(resolve) {
                        resolve(value);
                    });
                }
                return new (P || (P = Promise))(function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            };
            var __generator = undefined && undefined.__generator || function(thisArg, body) {
                var _ = {
                    label: 0,
                    sent: function() {
                        if (t[0] & 1) throw t[1];
                        return t[1];
                    },
                    trys: [],
                    ops: []
                }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
                return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                    return this;
                }), g;
                //TURBOPACK unreachable
                ;
                function verb(n) {
                    return function(v) {
                        return step([
                            n,
                            v
                        ]);
                    };
                }
                function step(op) {
                    if (f) throw new TypeError("Generator is already executing.");
                    while(g && (g = 0, op[0] && (_ = 0)), _)try {
                        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                        if (y = 0, t) op = [
                            op[0] & 2,
                            t.value
                        ];
                        switch(op[0]){
                            case 0:
                            case 1:
                                t = op;
                                break;
                            case 4:
                                _.label++;
                                return {
                                    value: op[1],
                                    done: false
                                };
                            case 5:
                                _.label++;
                                y = op[1];
                                op = [
                                    0
                                ];
                                continue;
                            case 7:
                                op = _.ops.pop();
                                _.trys.pop();
                                continue;
                            default:
                                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                    _ = 0;
                                    continue;
                                }
                                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                                    _.label = op[1];
                                    break;
                                }
                                if (op[0] === 6 && _.label < t[1]) {
                                    _.label = t[1];
                                    t = op;
                                    break;
                                }
                                if (t && _.label < t[2]) {
                                    _.label = t[2];
                                    _.ops.push(op);
                                    break;
                                }
                                if (t[2]) _.ops.pop();
                                _.trys.pop();
                                continue;
                        }
                        op = body.call(thisArg, _);
                    } catch (e) {
                        op = [
                            6,
                            e
                        ];
                        y = 0;
                    } finally{
                        f = t = 0;
                    }
                    if (op[0] & 5) throw op[1];
                    return {
                        value: op[0] ? op[1] : void 0,
                        done: true
                    };
                }
            };
            var __spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
                if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
                    if (ar || !(i in from)) {
                        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                        ar[i] = from[i];
                    }
                }
                return to.concat(ar || Array.prototype.slice.call(from));
            };
            var RiveError = function(_super) {
                __extends(RiveError, _super);
                function RiveError() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.isHandledError = true;
                    return _this;
                }
                return RiveError;
            }(Error);
            // #regions helpers
            var resolveErrorMessage = function(error) {
                return error && error.isHandledError ? error.message : "Problem loading file; may be corrupt!";
            };
            // #region layout
            // Fit options for the canvas
            var Fit;
            (function(Fit) {
                Fit["Cover"] = "cover";
                Fit["Contain"] = "contain";
                Fit["Fill"] = "fill";
                Fit["FitWidth"] = "fitWidth";
                Fit["FitHeight"] = "fitHeight";
                Fit["None"] = "none";
                Fit["ScaleDown"] = "scaleDown";
                Fit["Layout"] = "layout";
            })(Fit || (Fit = {}));
            // Alignment options for the canvas
            var Alignment;
            (function(Alignment) {
                Alignment["Center"] = "center";
                Alignment["TopLeft"] = "topLeft";
                Alignment["TopCenter"] = "topCenter";
                Alignment["TopRight"] = "topRight";
                Alignment["CenterLeft"] = "centerLeft";
                Alignment["CenterRight"] = "centerRight";
                Alignment["BottomLeft"] = "bottomLeft";
                Alignment["BottomCenter"] = "bottomCenter";
                Alignment["BottomRight"] = "bottomRight";
            })(Alignment || (Alignment = {}));
            // Drawing optimization options
            var DrawOptimizationOptions;
            (function(DrawOptimizationOptions) {
                DrawOptimizationOptions["AlwaysDraw"] = "alwaysDraw";
                DrawOptimizationOptions["DrawOnChanged"] = "drawOnChanged";
            })(DrawOptimizationOptions || (DrawOptimizationOptions = {}));
            // Alignment options for Rive animations in a HTML canvas
            var Layout = function() {
                function Layout(params) {
                    var _a, _b, _c, _d, _e, _f, _g;
                    this.fit = (_a = params === null || params === void 0 ? void 0 : params.fit) !== null && _a !== void 0 ? _a : Fit.Contain;
                    this.alignment = (_b = params === null || params === void 0 ? void 0 : params.alignment) !== null && _b !== void 0 ? _b : Alignment.Center;
                    this.layoutScaleFactor = (_c = params === null || params === void 0 ? void 0 : params.layoutScaleFactor) !== null && _c !== void 0 ? _c : 1;
                    this.minX = (_d = params === null || params === void 0 ? void 0 : params.minX) !== null && _d !== void 0 ? _d : 0;
                    this.minY = (_e = params === null || params === void 0 ? void 0 : params.minY) !== null && _e !== void 0 ? _e : 0;
                    this.maxX = (_f = params === null || params === void 0 ? void 0 : params.maxX) !== null && _f !== void 0 ? _f : 0;
                    this.maxY = (_g = params === null || params === void 0 ? void 0 : params.maxY) !== null && _g !== void 0 ? _g : 0;
                }
                // Alternative constructor to build a Layout from an interface/object
                Layout.new = function(_a) {
                    var fit = _a.fit, alignment = _a.alignment, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
                    console.warn("This function is deprecated: please use `new Layout({})` instead");
                    return new Layout({
                        fit: fit,
                        alignment: alignment,
                        minX: minX,
                        minY: minY,
                        maxX: maxX,
                        maxY: maxY
                    });
                };
                /**
     * Makes a copy of the layout, replacing any specified parameters
     */ Layout.prototype.copyWith = function(_a) {
                    var fit = _a.fit, alignment = _a.alignment, layoutScaleFactor = _a.layoutScaleFactor, minX = _a.minX, minY = _a.minY, maxX = _a.maxX, maxY = _a.maxY;
                    return new Layout({
                        fit: fit !== null && fit !== void 0 ? fit : this.fit,
                        alignment: alignment !== null && alignment !== void 0 ? alignment : this.alignment,
                        layoutScaleFactor: layoutScaleFactor !== null && layoutScaleFactor !== void 0 ? layoutScaleFactor : this.layoutScaleFactor,
                        minX: minX !== null && minX !== void 0 ? minX : this.minX,
                        minY: minY !== null && minY !== void 0 ? minY : this.minY,
                        maxX: maxX !== null && maxX !== void 0 ? maxX : this.maxX,
                        maxY: maxY !== null && maxY !== void 0 ? maxY : this.maxY
                    });
                };
                // Returns fit for the Wasm runtime format
                Layout.prototype.runtimeFit = function(rive) {
                    if (this.cachedRuntimeFit) return this.cachedRuntimeFit;
                    var fit;
                    if (this.fit === Fit.Cover) fit = rive.Fit.cover;
                    else if (this.fit === Fit.Contain) fit = rive.Fit.contain;
                    else if (this.fit === Fit.Fill) fit = rive.Fit.fill;
                    else if (this.fit === Fit.FitWidth) fit = rive.Fit.fitWidth;
                    else if (this.fit === Fit.FitHeight) fit = rive.Fit.fitHeight;
                    else if (this.fit === Fit.ScaleDown) fit = rive.Fit.scaleDown;
                    else if (this.fit === Fit.Layout) fit = rive.Fit.layout;
                    else fit = rive.Fit.none;
                    this.cachedRuntimeFit = fit;
                    return fit;
                };
                // Returns alignment for the Wasm runtime format
                Layout.prototype.runtimeAlignment = function(rive) {
                    if (this.cachedRuntimeAlignment) return this.cachedRuntimeAlignment;
                    var alignment;
                    if (this.alignment === Alignment.TopLeft) alignment = rive.Alignment.topLeft;
                    else if (this.alignment === Alignment.TopCenter) alignment = rive.Alignment.topCenter;
                    else if (this.alignment === Alignment.TopRight) alignment = rive.Alignment.topRight;
                    else if (this.alignment === Alignment.CenterLeft) alignment = rive.Alignment.centerLeft;
                    else if (this.alignment === Alignment.CenterRight) alignment = rive.Alignment.centerRight;
                    else if (this.alignment === Alignment.BottomLeft) alignment = rive.Alignment.bottomLeft;
                    else if (this.alignment === Alignment.BottomCenter) alignment = rive.Alignment.bottomCenter;
                    else if (this.alignment === Alignment.BottomRight) alignment = rive.Alignment.bottomRight;
                    else alignment = rive.Alignment.center;
                    this.cachedRuntimeAlignment = alignment;
                    return alignment;
                };
                return Layout;
            }();
            // #endregion
            // #region runtime
            // #endregion
            // #region state machines
            var StateMachineInputType;
            (function(StateMachineInputType) {
                StateMachineInputType[StateMachineInputType["Number"] = 56] = "Number";
                StateMachineInputType[StateMachineInputType["Trigger"] = 58] = "Trigger";
                StateMachineInputType[StateMachineInputType["Boolean"] = 59] = "Boolean";
            })(StateMachineInputType || (StateMachineInputType = {}));
            /**
 * An input for a state machine
 */ var StateMachineInput = function() {
                function StateMachineInput(type, runtimeInput) {
                    this.type = type;
                    this.runtimeInput = runtimeInput;
                }
                Object.defineProperty(StateMachineInput.prototype, "name", {
                    /**
         * Returns the name of the input
         */ get: function() {
                        return this.runtimeInput.name;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(StateMachineInput.prototype, "value", {
                    /**
         * Returns the current value of the input
         */ get: function() {
                        return this.runtimeInput.value;
                    },
                    /**
         * Sets the value of the input
         */ set: function(value) {
                        this.runtimeInput.value = value;
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Fires a trigger; does nothing on Number or Boolean input types
     */ StateMachineInput.prototype.fire = function() {
                    if (this.type === StateMachineInputType.Trigger) {
                        this.runtimeInput.fire();
                    }
                };
                /**
     * Deletes the input
     */ StateMachineInput.prototype.delete = function() {
                    this.runtimeInput = null;
                };
                return StateMachineInput;
            }();
            var RiveEventType;
            (function(RiveEventType) {
                RiveEventType[RiveEventType["General"] = 128] = "General";
                RiveEventType[RiveEventType["OpenUrl"] = 131] = "OpenUrl";
            })(RiveEventType || (RiveEventType = {}));
            var BaseArtboard = function() {
                function BaseArtboard(_isBindableArtboard) {
                    this.isBindableArtboard = false;
                    this.isBindableArtboard = _isBindableArtboard;
                }
                return BaseArtboard;
            }();
            var Artboard = function(_super) {
                __extends(Artboard, _super);
                function Artboard(artboard, _file) {
                    var _this = _super.call(this, false) || this;
                    _this.nativeArtboard = artboard;
                    _this.file = _file;
                    return _this;
                }
                return Artboard;
            }(BaseArtboard);
            var BindableArtboard = function(_super) {
                __extends(BindableArtboard, _super);
                function BindableArtboard(artboard) {
                    var _this = _super.call(this, true) || this;
                    _this.selfUnref = false;
                    _this.nativeArtboard = artboard;
                    return _this;
                }
                Object.defineProperty(BindableArtboard.prototype, "viewModel", {
                    set: function(value) {
                        this.nativeViewModel = value.nativeInstance;
                    },
                    enumerable: false,
                    configurable: true
                });
                BindableArtboard.prototype.destroy = function() {
                    var _a;
                    if (this.selfUnref) {
                        this.nativeArtboard.unref();
                        (_a = this.nativeViewModel) === null || _a === void 0 ? void 0 : _a.unref();
                    }
                };
                return BindableArtboard;
            }(BaseArtboard);
            var StateMachine = function() {
                /**
     * @constructor
     * @param stateMachine runtime state machine object
     * @param instance runtime state machine instance object
     */ function StateMachine(stateMachine, runtime, playing, artboard) {
                    this.stateMachine = stateMachine;
                    this.playing = playing;
                    this.artboard = artboard;
                    /**
         * Caches the inputs from the runtime
         */ this.inputs = [];
                    this.instance = new runtime.StateMachineInstance(stateMachine, artboard);
                    this.initInputs(runtime);
                    this.hasFocusNodes = this.instance.hasFocusNodes();
                }
                Object.defineProperty(StateMachine.prototype, "name", {
                    get: function() {
                        return this.stateMachine.name;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(StateMachine.prototype, "statesChanged", {
                    /**
         * Returns a list of state names that have changed on this frame
         */ get: function() {
                        var names = [];
                        for(var i = 0; i < this.instance.stateChangedCount(); i++){
                            names.push(this.instance.stateChangedNameByIndex(i));
                        }
                        return names;
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Advances the state machine instance by a given time.
     * @param time - the time to advance the animation by in seconds
     */ StateMachine.prototype.advance = function(time) {
                    this.instance.advance(time);
                };
                /**
     * Advances the state machine instance by a given time and apply changes to artboard.
     * @param time - the time to advance the animation by in seconds
     */ StateMachine.prototype.advanceAndApply = function(time) {
                    this.instance.advanceAndApply(time);
                };
                /**
     * Returns the number of events reported from the last advance call
     * @returns Number of events reported
     */ StateMachine.prototype.reportedEventCount = function() {
                    return this.instance.reportedEventCount();
                };
                /**
     * Returns a RiveEvent object emitted from the last advance call at the given index
     * of a list of potentially multiple events. If an event at the index is not found,
     * undefined is returned.
     * @param i index of the event reported in a list of potentially multiple events
     * @returns RiveEvent or extended RiveEvent object returned, or undefined
     */ StateMachine.prototype.reportedEventAt = function(i) {
                    return this.instance.reportedEventAt(i);
                };
                /**
     * Fetches references to the state machine's inputs and caches them
     * @param runtime an instance of the runtime; needed for the SMIInput types
     */ StateMachine.prototype.initInputs = function(runtime) {
                    // Fetch the inputs from the runtime if we don't have them
                    for(var i = 0; i < this.instance.inputCount(); i++){
                        var input = this.instance.input(i);
                        this.inputs.push(this.mapRuntimeInput(input, runtime));
                    }
                };
                /**
     * Maps a runtime input to it's appropriate type
     * @param input
     */ StateMachine.prototype.mapRuntimeInput = function(input, runtime) {
                    if (input.type === runtime.SMIInput.bool) {
                        return new StateMachineInput(StateMachineInputType.Boolean, input.asBool());
                    } else if (input.type === runtime.SMIInput.number) {
                        return new StateMachineInput(StateMachineInputType.Number, input.asNumber());
                    } else if (input.type === runtime.SMIInput.trigger) {
                        return new StateMachineInput(StateMachineInputType.Trigger, input.asTrigger());
                    }
                };
                /**
     * Deletes the backing Wasm state machine instance; once this is called, this
     * state machine is no more.
     */ StateMachine.prototype.cleanup = function() {
                    this.inputs.forEach(function(input) {
                        input.delete();
                    });
                    this.inputs.length = 0;
                    this.instance.delete();
                };
                StateMachine.prototype.bindViewModelInstance = function(viewModelInstance) {
                    if (viewModelInstance.runtimeInstance != null) {
                        this.instance.bindViewModelInstance(viewModelInstance.runtimeInstance);
                    }
                };
                /**
     * Get metadata about the state of focus if applicable for this state machine.
     * @returns FocusState - { hasFocus: boolean, expectsKeyboardInput: boolean }
     */ StateMachine.prototype.focusState = function() {
                    return this.instance.focusState();
                };
                /**
     * Clear focus from the Rive focus node tree.
     */ StateMachine.prototype.clearFocus = function() {
                    this.instance.clearFocus();
                };
                return StateMachine;
            }();
            // #endregion
            // #region animator
            /**
 * Manages animation
 */ var Animator = function() {
                /**
     * Constructs a new animator
     * @constructor
     * @param runtime Rive runtime; needed to instance animations & state machines
     * @param artboard the artboard that holds all animations and state machines
     * @param animations optional list of animations
     * @param stateMachines optional list of state machines
     */ function Animator(runtime, artboard, eventManager, animations, stateMachines) {
                    if (animations === void 0) {
                        animations = [];
                    }
                    if (stateMachines === void 0) {
                        stateMachines = [];
                    }
                    this.runtime = runtime;
                    this.artboard = artboard;
                    this.eventManager = eventManager;
                    this.animations = animations;
                    this.stateMachines = stateMachines;
                }
                /**
     * Adds animations and state machines by their names. If names are shared
     * between animations & state machines, then the first one found will be
     * created. Best not to use the same names for these in your Rive file.
     * @param animatable the name(s) of animations and state machines to add
     * @returns a list of names of the playing animations and state machines
     */ Animator.prototype.add = function(animatables, playing, fireEvent) {
                    if (fireEvent === void 0) {
                        fireEvent = true;
                    }
                    animatables = mapToStringArray(animatables);
                    // If animatables is empty, play or pause everything
                    if (animatables.length === 0) {
                        this.animations.forEach(function(a) {
                            return a.playing = playing;
                        });
                        this.stateMachines.forEach(function(m) {
                            return m.playing = playing;
                        });
                    } else {
                        // Play/pause already instanced items, or create new instances
                        var instancedAnimationNames = this.animations.map(function(a) {
                            return a.name;
                        });
                        var instancedMachineNames = this.stateMachines.map(function(m) {
                            return m.name;
                        });
                        for(var i = 0; i < animatables.length; i++){
                            var aIndex = instancedAnimationNames.indexOf(animatables[i]);
                            var mIndex = instancedMachineNames.indexOf(animatables[i]);
                            if (aIndex >= 0 || mIndex >= 0) {
                                if (aIndex >= 0) {
                                    // Animation is instanced, play/pause it
                                    this.animations[aIndex].playing = playing;
                                } else {
                                    // State machine is instanced, play/pause it
                                    this.stateMachines[mIndex].playing = playing;
                                }
                            } else {
                                // Try to create a new animation instance
                                var anim = this.artboard.animationByName(animatables[i]);
                                if (anim) {
                                    var newAnimation = new _animation__WEBPACK_IMPORTED_MODULE_0__.Animation(anim, this.artboard, this.runtime, playing);
                                    // Display the first frame of the specified animation
                                    newAnimation.advance(0);
                                    newAnimation.apply(1.0);
                                    this.animations.push(newAnimation);
                                } else {
                                    // Try to create a new state machine instance
                                    var sm = this.artboard.stateMachineByName(animatables[i]);
                                    if (sm) {
                                        var newStateMachine = new StateMachine(sm, this.runtime, playing, this.artboard);
                                        this.stateMachines.push(newStateMachine);
                                    }
                                }
                            }
                        }
                    }
                    // Fire play/paused events for animations
                    if (fireEvent) {
                        if (playing) {
                            this.eventManager.fire({
                                type: EventType.Play,
                                data: this.playing
                            });
                        } else {
                            this.eventManager.fire({
                                type: EventType.Pause,
                                data: this.paused
                            });
                        }
                    }
                    return playing ? this.playing : this.paused;
                };
                /**
     * Adds linear animations by their names.
     * @param animatables the name(s) of animations to add
     * @param playing whether animations should play on instantiation
     */ Animator.prototype.initLinearAnimations = function(animatables, playing, isFallingBackFromStateMachines) {
                    if (isFallingBackFromStateMachines === void 0) {
                        isFallingBackFromStateMachines = false;
                    }
                    // Play/pause already instanced items, or create new instances
                    // This validation is kept to maintain compatibility with current behavior.
                    // But given that it this is called during artboard initialization
                    // it should probably be safe to remove.
                    var instancedAnimationNames = this.animations.map(function(a) {
                        return a.name;
                    });
                    for(var i = 0; i < animatables.length; i++){
                        var aIndex = instancedAnimationNames.indexOf(animatables[i]);
                        if (aIndex >= 0) {
                            this.animations[aIndex].playing = playing;
                        } else {
                            // Try to create a new animation instance
                            var anim = this.artboard.animationByName(animatables[i]);
                            if (anim) {
                                var newAnimation = new _animation__WEBPACK_IMPORTED_MODULE_0__.Animation(anim, this.artboard, this.runtime, playing);
                                // Display the first frame of the specified animation
                                newAnimation.advance(0);
                                newAnimation.apply(1.0);
                                this.animations.push(newAnimation);
                            } else if (isFallingBackFromStateMachines) {
                                var smInitializationMessage = "State Machine with name ".concat(animatables[i], " not found");
                                throw new RiveError(smInitializationMessage);
                            } else {
                                console.error("Animation with name ".concat(animatables[i], " not found."));
                            }
                        }
                    }
                };
                /**
     * Adds state machines by their names.
     * @param animatables the name(s) of state machines to add
     * @param playing whether state machines should play on instantiation
     */ Animator.prototype.initStateMachines = function(animatables, playing) {
                    // Play/pause already instanced items, or create new instances
                    // This validation is kept to maintain compatibility with current behavior.
                    // But given that it this is called during artboard initialization
                    // it should probably be safe to remove.
                    var instancedStateMachineNames = this.stateMachines.map(function(a) {
                        return a.name;
                    });
                    for(var i = 0; i < animatables.length; i++){
                        var aIndex = instancedStateMachineNames.indexOf(animatables[i]);
                        if (aIndex >= 0) {
                            this.stateMachines[aIndex].playing = playing;
                        } else {
                            // Try to create a new state machine instance
                            var sm = this.artboard.stateMachineByName(animatables[i]);
                            if (sm) {
                                var newStateMachine = new StateMachine(sm, this.runtime, playing, this.artboard);
                                this.stateMachines.push(newStateMachine);
                            } else {
                                console.warn("State Machine with name ".concat(animatables[i], " not found. Falling back to find an animation with the same name."));
                                // TODO: Remove this fallback in next major release as it complicates initialization.
                                // In order to maintain compatibility with current behavior, if a state machine is not found
                                // we look for an animation with the same name
                                this.initLinearAnimations([
                                    animatables[i]
                                ], playing, true);
                            }
                        }
                    }
                };
                /**
     * Play the named animations/state machines
     * @param animatables the names of the animations/machines to play; plays all if empty
     * @returns a list of the playing items
     */ Animator.prototype.play = function(animatables) {
                    return this.add(animatables, true);
                };
                /**
     * Advance state machines if they are paused after initialization
     */ Animator.prototype.advanceIfPaused = function() {
                    this.stateMachines.forEach(function(sm) {
                        if (!sm.playing) {
                            sm.advanceAndApply(0);
                        }
                    });
                };
                /**
     * Pauses named animations and state machines, or everything if nothing is
     * specified
     * @param animatables names of the animations and state machines to pause
     * @returns a list of names of the animations and state machines paused
     */ Animator.prototype.pause = function(animatables) {
                    return this.add(animatables, false);
                };
                /**
     * Set time of named animations
     * @param animations names of the animations to scrub
     * @param value time scrub value, a floating point number to which the playhead is jumped
     * @returns a list of names of the animations that were scrubbed
     */ Animator.prototype.scrub = function(animatables, value) {
                    var forScrubbing = this.animations.filter(function(a) {
                        return animatables.includes(a.name);
                    });
                    forScrubbing.forEach(function(a) {
                        return a.scrubTo = value;
                    });
                    return forScrubbing.map(function(a) {
                        return a.name;
                    });
                };
                Object.defineProperty(Animator.prototype, "playing", {
                    /**
         * Returns a list of names of all animations and state machines currently
         * playing
         */ get: function() {
                        return this.animations.filter(function(a) {
                            return a.playing;
                        }).map(function(a) {
                            return a.name;
                        }).concat(this.stateMachines.filter(function(m) {
                            return m.playing;
                        }).map(function(m) {
                            return m.name;
                        }));
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Animator.prototype, "paused", {
                    /**
         * Returns a list of names of all animations and state machines currently
         * paused
         */ get: function() {
                        return this.animations.filter(function(a) {
                            return !a.playing;
                        }).map(function(a) {
                            return a.name;
                        }).concat(this.stateMachines.filter(function(m) {
                            return !m.playing;
                        }).map(function(m) {
                            return m.name;
                        }));
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Stops and removes all named animations and state machines
     * @param animatables animations and state machines to remove
     * @returns a list of names of removed items
     */ Animator.prototype.stop = function(animatables) {
                    var _this = this;
                    animatables = mapToStringArray(animatables);
                    // If nothing's specified, wipe them out, all of them
                    var removedNames = [];
                    // Stop everything
                    if (animatables.length === 0) {
                        removedNames = this.animations.map(function(a) {
                            return a.name;
                        }).concat(this.stateMachines.map(function(m) {
                            return m.name;
                        }));
                        // Clean up before emptying the arrays
                        this.animations.forEach(function(a) {
                            return a.cleanup();
                        });
                        this.stateMachines.forEach(function(m) {
                            return m.cleanup();
                        });
                        // Empty out the arrays
                        this.animations.splice(0, this.animations.length);
                        this.stateMachines.splice(0, this.stateMachines.length);
                    } else {
                        // Remove only the named animations/state machines
                        var animationsToRemove = this.animations.filter(function(a) {
                            return animatables.includes(a.name);
                        });
                        animationsToRemove.forEach(function(a) {
                            a.cleanup();
                            _this.animations.splice(_this.animations.indexOf(a), 1);
                        });
                        var machinesToRemove = this.stateMachines.filter(function(m) {
                            return animatables.includes(m.name);
                        });
                        machinesToRemove.forEach(function(m) {
                            m.cleanup();
                            _this.stateMachines.splice(_this.stateMachines.indexOf(m), 1);
                        });
                        removedNames = animationsToRemove.map(function(a) {
                            return a.name;
                        }).concat(machinesToRemove.map(function(m) {
                            return m.name;
                        }));
                    }
                    this.eventManager.fire({
                        type: EventType.Stop,
                        data: removedNames
                    });
                    // Return the list of animations removed
                    return removedNames;
                };
                Object.defineProperty(Animator.prototype, "isPlaying", {
                    /**
         * Returns true if at least one animation is active
         */ get: function() {
                        return this.animations.reduce(function(acc, curr) {
                            return acc || curr.playing;
                        }, false) || this.stateMachines.reduce(function(acc, curr) {
                            return acc || curr.playing;
                        }, false);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Animator.prototype, "isPaused", {
                    /**
         * Returns true if all animations are paused and there's at least one animation
         */ get: function() {
                        return !this.isPlaying && (this.animations.length > 0 || this.stateMachines.length > 0);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Animator.prototype, "isStopped", {
                    /**
         * Returns true if there are no playing or paused animations/state machines
         */ get: function() {
                        return this.animations.length === 0 && this.stateMachines.length === 0;
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * If there are no animations or state machines, add the first one found
     * @returns the name of the animation or state machine instanced
     */ Animator.prototype.atLeastOne = function(playing, fireEvent) {
                    if (fireEvent === void 0) {
                        fireEvent = true;
                    }
                    var instancedName;
                    if (this.animations.length === 0 && this.stateMachines.length === 0) {
                        if (this.artboard.animationCount() > 0) {
                            // Add the first animation
                            this.add([
                                instancedName = this.artboard.animationByIndex(0).name
                            ], playing, fireEvent);
                        } else if (this.artboard.stateMachineCount() > 0) {
                            // Add the first state machine
                            this.add([
                                instancedName = this.artboard.stateMachineByIndex(0).name
                            ], playing, fireEvent);
                        }
                    }
                    return instancedName;
                };
                /**
     * Checks if any animations have looped and if so, fire the appropriate event
     */ Animator.prototype.handleLooping = function() {
                    for(var _i = 0, _a = this.animations.filter(function(a) {
                        return a.playing;
                    }); _i < _a.length; _i++){
                        var animation = _a[_i];
                        // Emit if the animation looped
                        if (animation.loopValue === 0 && animation.loopCount) {
                            animation.loopCount = 0;
                            // This is a one-shot; if it has ended, delete the instance
                            this.stop(animation.name);
                        } else if (animation.loopValue === 1 && animation.loopCount) {
                            this.eventManager.fire({
                                type: EventType.Loop,
                                data: {
                                    animation: animation.name,
                                    type: LoopType.Loop
                                }
                            });
                            animation.loopCount = 0;
                        } else if (animation.loopValue === 2 && animation.loopCount > 1) {
                            this.eventManager.fire({
                                type: EventType.Loop,
                                data: {
                                    animation: animation.name,
                                    type: LoopType.PingPong
                                }
                            });
                            animation.loopCount = 0;
                        }
                    }
                };
                /**
     * Checks if states have changed in state machines and fires a statechange
     * event
     */ Animator.prototype.handleStateChanges = function() {
                    var statesChanged = [];
                    for(var _i = 0, _a = this.stateMachines.filter(function(sm) {
                        return sm.playing;
                    }); _i < _a.length; _i++){
                        var stateMachine = _a[_i];
                        statesChanged.push.apply(statesChanged, stateMachine.statesChanged);
                    }
                    if (statesChanged.length > 0) {
                        this.eventManager.fire({
                            type: EventType.StateChange,
                            data: statesChanged
                        });
                    }
                };
                Animator.prototype.handleAdvancing = function(time) {
                    this.eventManager.fire({
                        type: EventType.Advance,
                        data: time
                    });
                };
                return Animator;
            }();
            // #endregion
            // #region events
            /**
 * Supported event types triggered in Rive
 */ var EventType;
            (function(EventType) {
                EventType["Load"] = "load";
                EventType["LoadError"] = "loaderror";
                EventType["Play"] = "play";
                EventType["Pause"] = "pause";
                EventType["Stop"] = "stop";
                EventType["Loop"] = "loop";
                EventType["Draw"] = "draw";
                EventType["Advance"] = "advance";
                EventType["StateChange"] = "statechange";
                EventType["RiveEvent"] = "riveevent";
                EventType["AudioStatusChange"] = "audiostatuschange";
            })(EventType || (EventType = {}));
            /**
 * Looping types: one-shot, loop, and ping-pong
 */ var LoopType;
            (function(LoopType) {
                LoopType["OneShot"] = "oneshot";
                LoopType["Loop"] = "loop";
                LoopType["PingPong"] = "pingpong";
            })(LoopType || (LoopType = {}));
            // Manages Rive events and listeners
            var EventManager = function() {
                function EventManager(listeners) {
                    if (listeners === void 0) {
                        listeners = [];
                    }
                    this.listeners = listeners;
                }
                // Gets listeners of specified type
                EventManager.prototype.getListeners = function(type) {
                    return this.listeners.filter(function(e) {
                        return e.type === type;
                    });
                };
                // Adds a listener
                EventManager.prototype.add = function(listener) {
                    if (!this.listeners.includes(listener)) {
                        this.listeners.push(listener);
                    }
                };
                /**
     * Removes a listener
     * @param listener the listener with the callback to be removed
     */ EventManager.prototype.remove = function(listener) {
                    // We can't simply look for the listener as it'll be a different instance to
                    // one originally subscribed. Find all the listeners of the right type and
                    // then check their callbacks which should match.
                    for(var i = 0; i < this.listeners.length; i++){
                        var currentListener = this.listeners[i];
                        if (currentListener.type === listener.type) {
                            if (currentListener.callback === listener.callback) {
                                this.listeners.splice(i, 1);
                                break;
                            }
                        }
                    }
                };
                /**
     * Clears all listeners of specified type, or every listener if no type is
     * specified
     * @param type the type of listeners to clear, or all listeners if not
     * specified
     */ EventManager.prototype.removeAll = function(type) {
                    var _this = this;
                    if (!type) {
                        this.listeners.splice(0, this.listeners.length);
                    } else {
                        this.listeners.filter(function(l) {
                            return l.type === type;
                        }).forEach(function(l) {
                            return _this.remove(l);
                        });
                    }
                };
                // Fires an event
                EventManager.prototype.fire = function(event) {
                    var eventListeners = this.getListeners(event.type);
                    eventListeners.forEach(function(listener) {
                        return listener.callback(event);
                    });
                };
                return EventManager;
            }();
            // Manages a queue of tasks
            var TaskQueueManager = function() {
                function TaskQueueManager(eventManager) {
                    this.eventManager = eventManager;
                    this.queue = [];
                }
                // Adds a task top the queue
                TaskQueueManager.prototype.add = function(task) {
                    this.queue.push(task);
                };
                // Processes all tasks in the queue
                TaskQueueManager.prototype.process = function() {
                    while(this.queue.length > 0){
                        var task = this.queue.shift();
                        if (task === null || task === void 0 ? void 0 : task.action) {
                            task.action();
                        }
                        if (task === null || task === void 0 ? void 0 : task.event) {
                            this.eventManager.fire(task.event);
                        }
                    }
                };
                return TaskQueueManager;
            }();
            // #endregion
            // #region Audio
            var SystemAudioStatus;
            (function(SystemAudioStatus) {
                SystemAudioStatus[SystemAudioStatus["AVAILABLE"] = 0] = "AVAILABLE";
                SystemAudioStatus[SystemAudioStatus["UNAVAILABLE"] = 1] = "UNAVAILABLE";
            })(SystemAudioStatus || (SystemAudioStatus = {}));
            // Class to handle audio context availability and status changes
            var AudioManager = function(_super) {
                __extends(AudioManager, _super);
                function AudioManager() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this._started = false;
                    _this._enabled = false;
                    _this._status = SystemAudioStatus.UNAVAILABLE;
                    return _this;
                }
                AudioManager.prototype.delay = function(time) {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                            return [
                                2 /*return*/ ,
                                new Promise(function(resolve) {
                                    return setTimeout(resolve, time);
                                })
                            ];
                        });
                    });
                };
                AudioManager.prototype.timeout = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                            return [
                                2 /*return*/ ,
                                new Promise(function(_, reject) {
                                    return setTimeout(reject, 50);
                                })
                            ];
                        });
                    });
                };
                // Alerts animations on status changes and removes the listeners to avoid alerting twice.
                AudioManager.prototype.reportToListeners = function() {
                    this.fire({
                        type: EventType.AudioStatusChange
                    });
                    this.removeAll();
                };
                /**
     * The audio context has been resolved.
     * Alert any listeners that we can now play audio.
     * Rive will now play audio at the configured volume.
     */ AudioManager.prototype.enableAudio = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                            if (!this._enabled) {
                                this._enabled = true;
                                this._status = SystemAudioStatus.AVAILABLE;
                                this.reportToListeners();
                            }
                            return [
                                2 /*return*/ 
                            ];
                        });
                    });
                };
                /**
     * Check if we are able to play audio.
     *
     * We currently check the audio context, when resume() returns before a timeout we know that the
     * audio context is running and we can enable audio.
     */ AudioManager.prototype.testAudio = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var _a;
                        return __generator(this, function(_b) {
                            switch(_b.label){
                                case 0:
                                    if (!(this._status === SystemAudioStatus.UNAVAILABLE && this._audioContext !== null)) return [
                                        3 /*break*/ ,
                                        4
                                    ];
                                    _b.label = 1;
                                case 1:
                                    _b.trys.push([
                                        1,
                                        3,
                                        ,
                                        4
                                    ]);
                                    return [
                                        4 /*yield*/ ,
                                        Promise.race([
                                            this._audioContext.resume(),
                                            this.timeout()
                                        ])
                                    ];
                                case 2:
                                    _b.sent();
                                    this.enableAudio();
                                    return [
                                        3 /*break*/ ,
                                        4
                                    ];
                                case 3:
                                    _a = _b.sent();
                                    return [
                                        3 /*break*/ ,
                                        4
                                    ];
                                case 4:
                                    return [
                                        2 /*return*/ 
                                    ];
                            }
                        });
                    });
                };
                /**
     * Establish audio for use with rive.
     * We both test if we can use audio intermittently and listen for user interaction.
     * The aim is to enable audio playback as soon as the browser allows this.
     */ AudioManager.prototype._establishAudio = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                            switch(_a.label){
                                case 0:
                                    if (!!this._started) return [
                                        3 /*break*/ ,
                                        5
                                    ];
                                    this._started = true;
                                    if (!(typeof window == "undefined")) return [
                                        3 /*break*/ ,
                                        1
                                    ];
                                    this.enableAudio();
                                    return [
                                        3 /*break*/ ,
                                        5
                                    ];
                                case 1:
                                    this._audioContext = new AudioContext();
                                    this.listenForUserAction();
                                    _a.label = 2;
                                case 2:
                                    if (!(this._status === SystemAudioStatus.UNAVAILABLE)) return [
                                        3 /*break*/ ,
                                        5
                                    ];
                                    return [
                                        4 /*yield*/ ,
                                        this.testAudio()
                                    ];
                                case 3:
                                    _a.sent();
                                    return [
                                        4 /*yield*/ ,
                                        this.delay(1000)
                                    ];
                                case 4:
                                    _a.sent();
                                    return [
                                        3 /*break*/ ,
                                        2
                                    ];
                                case 5:
                                    return [
                                        2 /*return*/ 
                                    ];
                            }
                        });
                    });
                };
                AudioManager.prototype.listenForUserAction = function() {
                    var _this = this;
                    // NOTE: AudioContexts are ready immediately if requested in a ui callback
                    // we *could* re request one in this listener.
                    var _clickListener = function() {
                        return __awaiter(_this, void 0, void 0, function() {
                            return __generator(this, function(_a) {
                                // note this has "better" results than calling `await this.testAudio()`
                                // as we force audio to be enabled in the current thread, rather than chancing
                                // the thread to be passed over for some other async context
                                this.enableAudio();
                                return [
                                    2 /*return*/ 
                                ];
                            });
                        });
                    };
                    // NOTE: we should test this on mobile/pads
                    document.addEventListener("pointerdown", _clickListener, {
                        once: true
                    });
                };
                /**
     * Establish the audio context for rive, this lets rive know that we can play audio.
     */ AudioManager.prototype.establishAudio = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                            this._establishAudio();
                            return [
                                2 /*return*/ 
                            ];
                        });
                    });
                };
                Object.defineProperty(AudioManager.prototype, "systemVolume", {
                    get: function() {
                        if (this._status === SystemAudioStatus.UNAVAILABLE) {
                            // We do an immediate test to avoid depending on the delay of the running test
                            this.testAudio();
                            return 0;
                        }
                        return 1;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(AudioManager.prototype, "status", {
                    get: function() {
                        return this._status;
                    },
                    enumerable: false,
                    configurable: true
                });
                return AudioManager;
            }(EventManager);
            var audioManager = new AudioManager();
            var FakeResizeObserver = function() {
                function FakeResizeObserver() {}
                FakeResizeObserver.prototype.observe = function() {};
                FakeResizeObserver.prototype.unobserve = function() {};
                FakeResizeObserver.prototype.disconnect = function() {};
                return FakeResizeObserver;
            }();
            var MyResizeObserver = globalThis.ResizeObserver || FakeResizeObserver;
            /**
 * This class takes care of any observers that will be attached to an animation.
 * It should be treated as a singleton because observers are much more performant
 * when used for observing multiple elements by a single instance.
 */ var ObjectObservers = function() {
                function ObjectObservers() {
                    var _this = this;
                    this._elementsMap = new Map();
                    /**
         * Resize observers trigger both when the element changes its size and also when the
         * element is added or removed from the document.
         */ this._onObservedEntry = function(entry) {
                        var observed = _this._elementsMap.get(entry.target);
                        if (observed !== null) {
                            observed.onResize(entry.target.clientWidth == 0 || entry.target.clientHeight == 0);
                        } else {
                            _this._resizeObserver.unobserve(entry.target);
                        }
                    };
                    this._onObserved = function(entries) {
                        entries.forEach(_this._onObservedEntry);
                    };
                    this._resizeObserver = new MyResizeObserver(this._onObserved);
                }
                // Adds an observable element
                ObjectObservers.prototype.add = function(element, onResize) {
                    var observed = {
                        onResize: onResize,
                        element: element
                    };
                    this._elementsMap.set(element, observed);
                    this._resizeObserver.observe(element);
                    return observed;
                };
                // Removes an observable element
                ObjectObservers.prototype.remove = function(observed) {
                    this._resizeObserver.unobserve(observed.element);
                    this._elementsMap.delete(observed.element);
                };
                return ObjectObservers;
            }();
            var observers = new ObjectObservers();
            var RiveFile = function() {
                function RiveFile(params) {
                    // Allow the runtime to automatically load assets hosted in Rive's runtime.
                    this.enableRiveAssetCDN = true;
                    // When true, emits performance.mark/measure entries during RiveFile load.
                    this.enablePerfMarks = false;
                    this.referenceCount = 0;
                    this.destroyed = false;
                    this.selfUnref = false;
                    this.bindableArtboards = [];
                    this.src = params.src;
                    this.buffer = params.buffer;
                    if (params.assetLoader) this.assetLoader = params.assetLoader;
                    this.enableRiveAssetCDN = typeof params.enableRiveAssetCDN == "boolean" ? params.enableRiveAssetCDN : true;
                    this.enablePerfMarks = !!params.enablePerfMarks;
                    if (this.enablePerfMarks) _runtimeLoader__WEBPACK_IMPORTED_MODULE_1__.RuntimeLoader.enablePerfMarks = true;
                    // New event management system
                    this.eventManager = new EventManager();
                    if (params.onLoad) this.on(EventType.Load, params.onLoad);
                    if (params.onLoadError) this.on(EventType.LoadError, params.onLoadError);
                }
                RiveFile.prototype.releaseFile = function() {
                    var _a;
                    if (this.selfUnref) {
                        (_a = this.file) === null || _a === void 0 ? void 0 : _a.unref();
                    }
                    this.file = null;
                };
                RiveFile.prototype.releaseBindableArtboards = function() {
                    this.bindableArtboards.forEach(function(bindableArtboard) {
                        return bindableArtboard.destroy();
                    });
                };
                RiveFile.prototype.initData = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var _a, error_1, loader, loaderWrapper, _b, fileFinalizer;
                        return __generator(this, function(_c) {
                            switch(_c.label){
                                case 0:
                                    if (!(this.src && !this.buffer)) return [
                                        3 /*break*/ ,
                                        4
                                    ];
                                    _c.label = 1;
                                case 1:
                                    _c.trys.push([
                                        1,
                                        3,
                                        ,
                                        4
                                    ]);
                                    _a = this;
                                    return [
                                        4 /*yield*/ ,
                                        loadRiveFile(this.src)
                                    ];
                                case 2:
                                    _a.buffer = _c.sent();
                                    return [
                                        3 /*break*/ ,
                                        4
                                    ];
                                case 3:
                                    error_1 = _c.sent();
                                    if (error_1 instanceof Error) {
                                        throw error_1;
                                    }
                                    throw new RiveError(RiveFile.fileLoadErrorMessage);
                                case 4:
                                    if (this.destroyed) {
                                        return [
                                            2 /*return*/ 
                                        ];
                                    }
                                    if (this.assetLoader) {
                                        loaderWrapper = new _utils__WEBPACK_IMPORTED_MODULE_2__.CustomFileAssetLoaderWrapper(this.runtime, this.assetLoader);
                                        loader = loaderWrapper.assetLoader;
                                    }
                                    // Load the Rive file
                                    if (this.enablePerfMarks) performance.mark('rive:file-load:start');
                                    _b = this;
                                    return [
                                        4 /*yield*/ ,
                                        this.runtime.load(new Uint8Array(this.buffer), loader, this.enableRiveAssetCDN)
                                    ];
                                case 5:
                                    _b.file = _c.sent();
                                    if (this.enablePerfMarks) {
                                        performance.mark('rive:file-load:end');
                                        performance.measure('rive:file-load', 'rive:file-load:start', 'rive:file-load:end');
                                    }
                                    fileFinalizer = new _utils__WEBPACK_IMPORTED_MODULE_2__.FileFinalizer(this.file);
                                    _utils__WEBPACK_IMPORTED_MODULE_2__.finalizationRegistry.register(this, fileFinalizer);
                                    if (this.destroyed) {
                                        this.releaseFile();
                                        return [
                                            2 /*return*/ 
                                        ];
                                    }
                                    if (this.file !== null) {
                                        this.eventManager.fire({
                                            type: EventType.Load,
                                            data: this
                                        });
                                    } else {
                                        this.fireLoadError(RiveFile.fileLoadErrorMessage);
                                    }
                                    return [
                                        2 /*return*/ 
                                    ];
                            }
                        });
                    });
                };
                RiveFile.prototype.loadRiveFileBytes = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var bufferPromise;
                        return __generator(this, function(_a) {
                            if (this.enablePerfMarks) performance.mark('rive:fetch-riv:start');
                            bufferPromise = this.src ? loadRiveFile(this.src) : Promise.resolve(this.buffer);
                            if (this.enablePerfMarks && this.src) {
                                bufferPromise.then(function() {
                                    performance.mark('rive:fetch-riv:end');
                                    performance.measure('rive:fetch-riv', 'rive:fetch-riv:start', 'rive:fetch-riv:end');
                                });
                            }
                            return [
                                2 /*return*/ ,
                                bufferPromise
                            ];
                        });
                    });
                };
                RiveFile.prototype.loadRuntime = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var runtimePromise;
                        return __generator(this, function(_a) {
                            if (this.enablePerfMarks) performance.mark('rive:await-wasm:start');
                            runtimePromise = _runtimeLoader__WEBPACK_IMPORTED_MODULE_1__.RuntimeLoader.awaitInstance();
                            if (this.enablePerfMarks) {
                                runtimePromise.then(function() {
                                    performance.mark('rive:await-wasm:end');
                                    performance.measure('rive:await-wasm', 'rive:await-wasm:start', 'rive:await-wasm:end');
                                });
                            }
                            return [
                                2 /*return*/ ,
                                runtimePromise
                            ];
                        });
                    });
                };
                RiveFile.prototype.init = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var _a, bufferResolved, runtimeResolved, error_2;
                        return __generator(this, function(_b) {
                            switch(_b.label){
                                case 0:
                                    // If no source file url specified, it's a bust
                                    if (!this.src && !this.buffer) {
                                        this.fireLoadError(RiveFile.missingErrorMessage);
                                        return [
                                            2 /*return*/ 
                                        ];
                                    }
                                    _b.label = 1;
                                case 1:
                                    _b.trys.push([
                                        1,
                                        4,
                                        ,
                                        5
                                    ]);
                                    return [
                                        4 /*yield*/ ,
                                        Promise.all([
                                            this.loadRiveFileBytes(),
                                            this.loadRuntime()
                                        ])
                                    ];
                                case 2:
                                    _a = _b.sent(), bufferResolved = _a[0], runtimeResolved = _a[1];
                                    if (this.destroyed) {
                                        return [
                                            2 /*return*/ 
                                        ];
                                    }
                                    // .riv file buffer and WASM runtime instance
                                    this.buffer = bufferResolved;
                                    this.runtime = runtimeResolved;
                                    if (this.enablePerfMarks) performance.mark('rive:init-data:start');
                                    return [
                                        4 /*yield*/ ,
                                        this.initData()
                                    ];
                                case 3:
                                    _b.sent();
                                    if (this.enablePerfMarks) {
                                        performance.mark('rive:init-data:end');
                                        performance.measure('rive:init-data', 'rive:init-data:start', 'rive:init-data:end');
                                    }
                                    return [
                                        3 /*break*/ ,
                                        5
                                    ];
                                case 4:
                                    error_2 = _b.sent();
                                    this.fireLoadError(error_2 instanceof Error ? error_2.message : RiveFile.fileLoadErrorMessage);
                                    return [
                                        3 /*break*/ ,
                                        5
                                    ];
                                case 5:
                                    return [
                                        2 /*return*/ 
                                    ];
                            }
                        });
                    });
                };
                RiveFile.prototype.fireLoadError = function(message) {
                    this.eventManager.fire({
                        type: EventType.LoadError,
                        data: message
                    });
                    throw new RiveError(message);
                };
                /**
     * Subscribe to Rive-generated events
     * @param type the type of event to subscribe to
     * @param callback callback to fire when the event occurs
     */ RiveFile.prototype.on = function(type, callback) {
                    this.eventManager.add({
                        type: type,
                        callback: callback
                    });
                };
                /**
     * Unsubscribes from a Rive-generated event
     * @param type the type of event to unsubscribe from
     * @param callback the callback to unsubscribe
     */ RiveFile.prototype.off = function(type, callback) {
                    this.eventManager.remove({
                        type: type,
                        callback: callback
                    });
                };
                RiveFile.prototype.cleanup = function() {
                    this.referenceCount -= 1;
                    if (this.referenceCount <= 0) {
                        this.removeAllRiveEventListeners();
                        this.releaseFile();
                        this.releaseBindableArtboards();
                        this.destroyed = true;
                    }
                };
                /**
     * Unsubscribes all Rive listeners from an event type, or everything if no type is
     * given
     * @param type the type of event to unsubscribe from, or all types if
     * undefined
     */ RiveFile.prototype.removeAllRiveEventListeners = function(type) {
                    this.eventManager.removeAll(type);
                };
                RiveFile.prototype.getInstance = function() {
                    if (this.file !== null) {
                        this.referenceCount += 1;
                        return this.file;
                    }
                };
                RiveFile.prototype.destroyIfUnused = function() {
                    if (this.referenceCount <= 0) {
                        this.cleanup();
                    }
                };
                RiveFile.prototype.createBindableArtboard = function(nativeBindableArtboard) {
                    if (nativeBindableArtboard != null) {
                        var bindableArtboard = new BindableArtboard(nativeBindableArtboard);
                        (0, _utils__WEBPACK_IMPORTED_MODULE_2__.createFinalization)(bindableArtboard, bindableArtboard.nativeArtboard);
                        this.bindableArtboards.push(bindableArtboard);
                        return bindableArtboard;
                    }
                    return null;
                };
                /**
     * @deprecated This function is deprecated. For better stability and memory management
     * use `getBindableArtboard()` instead.
     * @param {string} name - The name of the artboard.
     * @returns {Artboard} The artboard to bind to.
     */ RiveFile.prototype.getArtboard = function(name) {
                    var nativeArtboard = this.file.artboardByName(name);
                    if (nativeArtboard != null) {
                        return new Artboard(nativeArtboard, this);
                    }
                };
                RiveFile.prototype.getBindableArtboard = function(name) {
                    var nativeArtboard = this.file.bindableArtboardByName(name);
                    return this.createBindableArtboard(nativeArtboard);
                };
                RiveFile.prototype.getDefaultBindableArtboard = function() {
                    var nativeArtboard = this.file.bindableArtboardDefault();
                    return this.createBindableArtboard(nativeArtboard);
                };
                RiveFile.prototype.internalBindableArtboardFromArtboard = function(artboard) {
                    var nativeBindableArtboard = this.file.internalBindableArtboardFromArtboard(artboard);
                    return this.createBindableArtboard(nativeBindableArtboard);
                };
                RiveFile.prototype.viewModelByName = function(name) {
                    var viewModel = this.file.viewModelByName(name);
                    if (viewModel !== null) {
                        return new ViewModel(viewModel);
                    }
                    return null;
                };
                // Error message for missing source or buffer
                RiveFile.missingErrorMessage = "Rive source file or data buffer required";
                // Error message for file load error
                RiveFile.fileLoadErrorMessage = "The file failed to load";
                return RiveFile;
            }();
            var Rive = function() {
                function Rive(params) {
                    var _this = this;
                    var _a, _b, _c;
                    // Tracks if a Rive file is loaded
                    this.loaded = false;
                    // Tracks if a Rive file is destroyed
                    this.destroyed = false;
                    // Reference of an object that handles any observers for the animation
                    this._observed = null;
                    /**
         * Tracks if a Rive file is loaded; we need this in addition to loaded as some
         * commands (e.g. contents) can be called as soon as the file is loaded.
         * However, playback commands need to be queued and run in order once initial
         * animations and autoplay has been sorted out. This applies to play, pause,
         * and start.
         */ this.readyForPlaying = false;
                    // Runtime artboard
                    this.artboard = null;
                    // place to clear up pointer/touch event listeners
                    this.eventCleanup = null;
                    // Manages keyboard and DOM-focus interactions for the canvas.
                    this._keyboardInteractions = null;
                    this.shouldDisableRiveListeners = false;
                    this.automaticallyHandleEvents = false;
                    this.dispatchPointerExit = true;
                    // Allow all pointers to be passed to the runtime
                    this.enableMultiTouch = false;
                    // Allow the runtime to automatically load assets hosted in Rive's runtime.
                    this.enableRiveAssetCDN = true;
                    // Keep a local value of the set volume to update it asynchronously
                    this._volume = 1;
                    // Keep a local value of the set width to update it asynchronously
                    this._artboardWidth = undefined;
                    // Keep a local value of the set height to update it asynchronously
                    this._artboardHeight = undefined;
                    // Keep a local value of the device pixel ratio used in rendering and canvas/artboard resizing
                    this._devicePixelRatioUsed = 1;
                    // Whether the canvas element's size is 0
                    this._hasZeroSize = false;
                    // Whether a draw operation needs to be forced
                    this._needsRedraw = false;
                    // Canvas width and height. Values are lazily updated so they might
                    // not be in sync with current canvas size.
                    this._currentCanvasWidth = 0;
                    this._currentCanvasHeight = 0;
                    // Audio event listener
                    this._audioEventListener = null;
                    // draw method bound to the class
                    this._boundDraw = null;
                    // Page visibility handler — prevents state machine advancing / rAF from being invoked with large time delta
                    // when the browser tab is switched back to after being hidden.
                    this._pageVisibilityHandler = null;
                    // True only when the page visibility handler itself cancelled an active frame.
                    // Set by stopRendering(), cleared by startRendering(). Prevents the
                    // visibilitychange handler from restarting a rendering loop the caller intentionally stopped.
                    this._explicitlyStoppedRendering = false;
                    this._viewModelInstance = null;
                    this._dataEnums = null;
                    this._tabIndex = null;
                    this._prevHasFocus = false;
                    this._focusOptions = {
                        allowFocusInterrupt: false
                    };
                    this.drawOptimization = DrawOptimizationOptions.DrawOnChanged;
                    // When true, emits performance.mark/measure entries for load and render.
                    this.enablePerfMarks = false;
                    // Durations to generate a frame for the last second. Used for performance profiling.
                    this.durations = [];
                    this.frameTimes = [];
                    this.frameCount = 0;
                    this.isTouchScrollEnabled = false;
                    this.onCanvasResize = function(hasZeroSize) {
                        var toggledDisplay = _this._hasZeroSize !== hasZeroSize;
                        _this._hasZeroSize = hasZeroSize;
                        if (!hasZeroSize) {
                            if (toggledDisplay) {
                                _this.resizeDrawingSurfaceToCanvas();
                            }
                        } else if (!_this._layout.maxX || !_this._layout.maxY) {
                            _this.resizeToCanvas();
                        }
                    };
                    // Tracks the current animation frame request
                    this.frameRequestId = null;
                    /**
         * Used be draw to track when a second of active rendering time has passed.
         * Used for debugging purposes
         */ this.renderSecondTimer = 0;
                    this._boundDraw = this.draw.bind(this);
                    if (typeof document !== 'undefined') {
                        this._pageVisibilityHandler = this._onPageVisibilityChange.bind(this);
                        document.addEventListener('visibilitychange', this._pageVisibilityHandler);
                    }
                    this.canvas = params.canvas;
                    if (params.canvas.constructor === HTMLCanvasElement) {
                        this._observed = observers.add(this.canvas, this.onCanvasResize);
                    }
                    this._currentCanvasWidth = this.canvas.width;
                    this._currentCanvasHeight = this.canvas.height;
                    this.src = params.src;
                    this.buffer = params.buffer;
                    this.riveFile = params.riveFile;
                    this.layout = (_a = params.layout) !== null && _a !== void 0 ? _a : new Layout();
                    this.shouldDisableRiveListeners = !!params.shouldDisableRiveListeners;
                    this.isTouchScrollEnabled = !!params.isTouchScrollEnabled;
                    this.automaticallyHandleEvents = !!params.automaticallyHandleEvents;
                    this.dispatchPointerExit = params.dispatchPointerExit === false ? params.dispatchPointerExit : this.dispatchPointerExit;
                    this.enableMultiTouch = !!params.enableMultiTouch;
                    this.drawOptimization = (_b = params.drawingOptions) !== null && _b !== void 0 ? _b : this.drawOptimization;
                    this.enableRiveAssetCDN = params.enableRiveAssetCDN === undefined ? true : params.enableRiveAssetCDN;
                    this.enablePerfMarks = !!params.enablePerfMarks;
                    if (this.enablePerfMarks) _runtimeLoader__WEBPACK_IMPORTED_MODULE_1__.RuntimeLoader.enablePerfMarks = true;
                    this._focusOptions = (_c = params.focusOptions) !== null && _c !== void 0 ? _c : this._focusOptions;
                    // New event management system
                    this.eventManager = new EventManager();
                    if (params.onLoad) this.on(EventType.Load, params.onLoad);
                    if (params.onLoadError) this.on(EventType.LoadError, params.onLoadError);
                    if (params.onPlay) this.on(EventType.Play, params.onPlay);
                    if (params.onPause) this.on(EventType.Pause, params.onPause);
                    if (params.onStop) this.on(EventType.Stop, params.onStop);
                    if (params.onLoop) this.on(EventType.Loop, params.onLoop);
                    if (params.onStateChange) this.on(EventType.StateChange, params.onStateChange);
                    if (params.onAdvance) this.on(EventType.Advance, params.onAdvance);
                    /**
         * @deprecated Use camelCase'd versions instead.
         */ if (params.onload && !params.onLoad) this.on(EventType.Load, params.onload);
                    if (params.onloaderror && !params.onLoadError) this.on(EventType.LoadError, params.onloaderror);
                    if (params.onplay && !params.onPlay) this.on(EventType.Play, params.onplay);
                    if (params.onpause && !params.onPause) this.on(EventType.Pause, params.onpause);
                    if (params.onstop && !params.onStop) this.on(EventType.Stop, params.onstop);
                    if (params.onloop && !params.onLoop) this.on(EventType.Loop, params.onloop);
                    if (params.onstatechange && !params.onStateChange) this.on(EventType.StateChange, params.onstatechange);
                    /**
         * Asset loading
         */ if (params.assetLoader) this.assetLoader = params.assetLoader;
                    // Hook up the task queue
                    this.taskQueue = new TaskQueueManager(this.eventManager);
                    this.init({
                        src: this.src,
                        buffer: this.buffer,
                        riveFile: this.riveFile,
                        autoplay: params.autoplay,
                        autoBind: params.autoBind,
                        animations: params.animations,
                        stateMachines: params.stateMachines,
                        artboard: params.artboard,
                        useOffscreenRenderer: params.useOffscreenRenderer,
                        tabIndex: params.tabIndex
                    });
                }
                Object.defineProperty(Rive.prototype, "viewModelCount", {
                    get: function() {
                        return this.file.viewModelCount();
                    },
                    enumerable: false,
                    configurable: true
                });
                // Alternative constructor to build a Rive instance from an interface/object
                Rive.new = function(params) {
                    console.warn("This function is deprecated: please use `new Rive({})` instead");
                    return new Rive(params);
                };
                // Event handler for when audio context becomes available
                Rive.prototype.onSystemAudioChanged = function() {
                    this.volume = this._volume;
                };
                // Initializes the Rive object either from constructor or load()
                Rive.prototype.init = function(_a) {
                    var _this = this;
                    var src = _a.src, buffer = _a.buffer, riveFile = _a.riveFile, animations = _a.animations, stateMachines = _a.stateMachines, artboard = _a.artboard, _b = _a.autoplay, autoplay = _b === void 0 ? false : _b, _c = _a.useOffscreenRenderer, useOffscreenRenderer = _c === void 0 ? false : _c, _d = _a.autoBind, autoBind = _d === void 0 ? false : _d, tabIndex = _a.tabIndex;
                    if (this.destroyed) {
                        return;
                    }
                    this.src = src;
                    this.buffer = buffer;
                    this.riveFile = riveFile;
                    this._tabIndex = tabIndex !== null && tabIndex !== void 0 ? tabIndex : null;
                    // If no source file url specified, it's a bust
                    if (!this.src && !this.buffer && !this.riveFile) {
                        throw new RiveError(Rive.missingErrorMessage);
                    }
                    // List of animations that should be initialized.
                    var startingAnimationNames = mapToStringArray(animations);
                    // List of state machines that should be initialized
                    var startingStateMachineNames = mapToStringArray(stateMachines);
                    // Ensure loaded is marked as false if loading new file
                    this.loaded = false;
                    this.readyForPlaying = false;
                    // Ensure the runtime is loaded
                    _runtimeLoader__WEBPACK_IMPORTED_MODULE_1__.RuntimeLoader.awaitInstance().then(function(runtime) {
                        if (_this.destroyed) {
                            return;
                        }
                        _this.runtime = runtime;
                        _this.removeRiveListeners();
                        _this.deleteRiveRenderer();
                        // Get the canvas where you want to render the animation and create a renderer
                        if (_this.enablePerfMarks) performance.mark('rive:make-renderer:start');
                        try {
                            _this.renderer = _this.runtime.makeRenderer(_this.canvas, useOffscreenRenderer);
                            if (!_this.renderer) {
                                throw new Error("Renderer is null, cannot render Rive on the canvas.");
                            }
                        } catch (e) {
                            console.error(e);
                            throw new RiveError("Unable to create the renderer, your environment may not support WebGL. Try the @rive-app/canvas runtime as an alternative.");
                        }
                        if (_this.enablePerfMarks) {
                            performance.mark('rive:make-renderer:end');
                            performance.measure('rive:make-renderer', 'rive:make-renderer:start', 'rive:make-renderer:end');
                        }
                        // Initial size adjustment based on devicePixelRatio if no width/height are
                        // specified explicitly
                        if (!(_this.canvas.width || _this.canvas.height)) {
                            _this.resizeDrawingSurfaceToCanvas();
                        }
                        // Load Rive data from a source uri or a data buffer
                        _this.initData(artboard, startingAnimationNames, startingStateMachineNames, autoplay, autoBind).then(function(hasInitialized) {
                            if (hasInitialized) {
                                return _this.setupRiveListeners();
                            }
                        }).catch(function(e) {
                            // initData already catches RiveErrors for load issues like artboard/state machine initialization
                            // failures, so just console error and catch here so we don't double-fire the LoadError event
                            console.error(e);
                        });
                    }).catch(function(e) {
                        _this.eventManager.fire({
                            type: EventType.LoadError,
                            data: e.message
                        });
                    });
                };
                /**
     * Setup Rive Listeners on the canvas
     * @param riveListenerOptions - Enables TouchEvent events on the canvas. Set to true to allow
     * touch scrolling on the canvas element on touch-enabled devices
     * i.e. { isTouchScrollEnabled: true }
     */ Rive.prototype.setupRiveListeners = function(riveListenerOptions) {
                    var _this = this;
                    if (this.eventCleanup) {
                        this.eventCleanup();
                    }
                    this.cleanupKeyboardInteractions();
                    if (!this.shouldDisableRiveListeners) {
                        var playingStateMachines = this.animator.stateMachines.filter(function(sm) {
                            return sm.playing;
                        });
                        var activeStateMachines = playingStateMachines.filter(function(sm) {
                            return _this.runtime.hasListeners(sm.instance);
                        }).map(function(sm) {
                            return sm.instance;
                        });
                        var touchScrollEnabledOption = this.isTouchScrollEnabled;
                        var dispatchPointerExit = this.dispatchPointerExit;
                        var enableMultiTouch = this.enableMultiTouch;
                        if (riveListenerOptions && "isTouchScrollEnabled" in riveListenerOptions) {
                            touchScrollEnabledOption = riveListenerOptions.isTouchScrollEnabled;
                        }
                        this.eventCleanup = (0, _utils__WEBPACK_IMPORTED_MODULE_2__.registerTouchInteractions)({
                            canvas: this.canvas,
                            artboard: this.artboard,
                            stateMachines: activeStateMachines,
                            renderer: this.renderer,
                            rive: this.runtime,
                            fit: this._layout.runtimeFit(this.runtime),
                            alignment: this._layout.runtimeAlignment(this.runtime),
                            isTouchScrollEnabled: touchScrollEnabledOption,
                            dispatchPointerExit: dispatchPointerExit,
                            enableMultiTouch: enableMultiTouch,
                            layoutScaleFactor: this._layout.layoutScaleFactor,
                            advanceAndDrain: this.advanceAndReportChanges.bind(this)
                        });
                        // Wire up keyboard interactions for state machines that have focus nodes.
                        //   hasFocusNodes — unified focus tree check, gates tab traversal
                        var smWithFocusNodes = playingStateMachines.filter(function(sm) {
                            return sm.hasFocusNodes;
                        });
                        if (smWithFocusNodes.length) {
                            // Set the canvas as a tabbable element if there are any focus nodes.
                            // Prefer the tabIndex param set by the user, otherwise use 0.
                            // But do not override any explicit tabIndex already set on the canvas, if any.
                            var currentCanvasTabIndex = this.canvas.tabIndex;
                            // By default, canvas elements have a tabIndex of -1
                            if (currentCanvasTabIndex === -1 || isNaN(currentCanvasTabIndex)) {
                                this.canvas.tabIndex = this._tabIndex !== null ? this._tabIndex : 0;
                            }
                            if (typeof window !== "undefined") {
                                this._keyboardInteractions = new _utils__WEBPACK_IMPORTED_MODULE_2__.KeyboardInteractions({
                                    canvas: this.canvas,
                                    stateMachine: smWithFocusNodes[0].instance,
                                    hasFocusNodes: true
                                });
                            }
                        }
                    }
                };
                Rive.prototype.cleanupKeyboardInteractions = function() {
                    if (this._keyboardInteractions) {
                        this._keyboardInteractions.cleanup();
                        this._keyboardInteractions = null;
                    }
                };
                /**
     * Remove Rive Listeners setup on the canvas
     */ Rive.prototype.removeRiveListeners = function() {
                    if (this.eventCleanup) {
                        this.eventCleanup();
                        this.eventCleanup = null;
                    }
                    this.cleanupKeyboardInteractions();
                };
                /**
     * If the instance has audio and the system audio is not ready
     * we hook the instance to the audio manager
     */ Rive.prototype.initializeAudio = function() {
                    var _this = this;
                    var _a;
                    // Initialize audio if needed
                    if (audioManager.status == SystemAudioStatus.UNAVAILABLE) {
                        if (this.file.hasAudio || ((_a = this.artboard) === null || _a === void 0 ? void 0 : _a.hasAudio) && this._audioEventListener === null) {
                            this._audioEventListener = {
                                type: EventType.AudioStatusChange,
                                callback: function() {
                                    return _this.onSystemAudioChanged();
                                }
                            };
                            audioManager.add(this._audioEventListener);
                            audioManager.establishAudio();
                        }
                    }
                };
                Rive.prototype.initArtboardSize = function() {
                    if (!this.artboard) return;
                    // Use preset values if they are not undefined
                    this._artboardWidth = this.artboard.width = this._artboardWidth || this.artboard.width;
                    this._artboardHeight = this.artboard.height = this._artboardHeight || this.artboard.height;
                };
                // Initializes runtime with Rive data and preps for playing.
                // Returns true for successful initialization.
                Rive.prototype.initData = function(artboardName, animationNames, stateMachineNames, autoplay, autoBind) {
                    return __awaiter(this, void 0, void 0, function() {
                        var riveFile, error_3, msg;
                        var _a;
                        return __generator(this, function(_b) {
                            switch(_b.label){
                                case 0:
                                    _b.trys.push([
                                        0,
                                        3,
                                        ,
                                        4
                                    ]);
                                    if (!(this.riveFile == null)) return [
                                        3 /*break*/ ,
                                        2
                                    ];
                                    riveFile = new RiveFile({
                                        src: this.src,
                                        buffer: this.buffer,
                                        enableRiveAssetCDN: this.enableRiveAssetCDN,
                                        assetLoader: this.assetLoader,
                                        enablePerfMarks: this.enablePerfMarks
                                    });
                                    this.riveFile = riveFile;
                                    return [
                                        4 /*yield*/ ,
                                        riveFile.init()
                                    ];
                                case 1:
                                    _b.sent();
                                    if (this.destroyed) {
                                        // In the very unlikely scenario where the rive file created by this Rive is shared by
                                        // another rive file, we only want to destroy it if this file is the only owner.
                                        riveFile.destroyIfUnused();
                                        return [
                                            2 /*return*/ ,
                                            false
                                        ];
                                    }
                                    _b.label = 2;
                                case 2:
                                    this.file = this.riveFile.getInstance();
                                    // Initialize and draw frame
                                    this.initArtboard(artboardName, animationNames, stateMachineNames, autoplay, autoBind);
                                    // Initialize the artboard size
                                    this.initArtboardSize();
                                    // Check for audio
                                    this.initializeAudio();
                                    // Everything's set up, emit a load event
                                    try {
                                        this.loaded = true;
                                        this.eventManager.fire({
                                            type: EventType.Load,
                                            data: (_a = this.src) !== null && _a !== void 0 ? _a : "buffer"
                                        });
                                    } catch (e) {
                                        // If any synchronous errors surface from the user-supplied onLoad callback,
                                        // this will console.error the error but will not invoke LoadError (onLoadError).
                                        // Notably, this will not interfere with Rive rendering
                                        console.error(e);
                                    }
                                    // Only initialize paused state machines after the load event has been fired
                                    // to allow users to initialize inputs and view models before the first advance
                                    this.animator.advanceIfPaused();
                                    // Flag ready for playback commands and clear the task queue; this order
                                    // is important or it may infinitely recurse
                                    this.readyForPlaying = true;
                                    this.taskQueue.process();
                                    this.drawFrame();
                                    return [
                                        2 /*return*/ ,
                                        true
                                    ];
                                case 3:
                                    error_3 = _b.sent();
                                    msg = resolveErrorMessage(error_3);
                                    this.eventManager.fire({
                                        type: EventType.LoadError,
                                        data: msg
                                    });
                                    return [
                                        2 /*return*/ ,
                                        Promise.reject(msg)
                                    ];
                                case 4:
                                    return [
                                        2 /*return*/ 
                                    ];
                            }
                        });
                    });
                };
                // Initialize for playback
                Rive.prototype.initArtboard = function(artboardName, animationNames, stateMachineNames, autoplay, autoBind) {
                    if (!this.file) {
                        return;
                    }
                    // Fetch the artboard
                    var rootArtboard = artboardName ? this.file.artboardByName(artboardName) : this.file.defaultArtboard();
                    // Check we have a working artboard
                    if (!rootArtboard) {
                        throw new RiveError("Invalid artboard name or no default artboard");
                    }
                    this.artboard = rootArtboard;
                    rootArtboard.volume = this._volume * audioManager.systemVolume;
                    // Initialize the animator
                    this.animator = new Animator(this.runtime, this.artboard, this.eventManager);
                    // Initialize the animations; as loaded hasn't happened yet, we need to
                    // suppress firing the play/pause events until the load event has fired. To
                    // do this we tell the animator to suppress firing events, and add event
                    // firing to the task queue.
                    var instanceNames;
                    if (animationNames.length > 0 || stateMachineNames.length > 0) {
                        instanceNames = animationNames.concat(stateMachineNames);
                        this.animator.initLinearAnimations(animationNames, autoplay);
                        this.animator.initStateMachines(stateMachineNames, autoplay);
                    } else {
                        instanceNames = [
                            this.animator.atLeastOne(autoplay, false)
                        ];
                    }
                    // Queue up firing the playback events
                    this.taskQueue.add({
                        event: {
                            type: autoplay ? EventType.Play : EventType.Pause,
                            data: instanceNames
                        }
                    });
                    if (autoBind) {
                        var viewModel = this.file.defaultArtboardViewModel(rootArtboard);
                        if (viewModel !== null) {
                            var runtimeInstance = viewModel.defaultInstance();
                            if (runtimeInstance !== null) {
                                var viewModelInstance = new ViewModelInstance(runtimeInstance, null);
                                (0, _utils__WEBPACK_IMPORTED_MODULE_2__.createFinalization)(viewModelInstance, viewModelInstance.runtimeInstance);
                                this.bindViewModelInstance(viewModelInstance);
                            }
                        }
                    }
                };
                // Draws the current artboard frame
                Rive.prototype.drawFrame = function() {
                    var _a, _b;
                    if ((_a = document === null || document === void 0 ? void 0 : document.timeline) === null || _a === void 0 ? void 0 : _a.currentTime) {
                        if (this.loaded && this.artboard && !this.frameRequestId) {
                            this._boundDraw(document.timeline.currentTime);
                            (_b = this.runtime) === null || _b === void 0 ? void 0 : _b.resolveAnimationFrame();
                        }
                    } else {
                        this.scheduleRendering();
                    }
                };
                Rive.prototype._canvasSizeChanged = function() {
                    var changed = false;
                    if (this.canvas) {
                        if (this.canvas.width !== this._currentCanvasWidth) {
                            this._currentCanvasWidth = this.canvas.width;
                            changed = true;
                        }
                        if (this.canvas.height !== this._currentCanvasHeight) {
                            this._currentCanvasHeight = this.canvas.height;
                            changed = true;
                        }
                    }
                    return changed;
                };
                /**
     * Poll focus state each frame to see if we should focus/blur the canvas in case
     * Rive internally updated focus outside of user interaction (e.g., via listener action)
     */ Rive.prototype.pollFocusState = function() {
                    if (!this._keyboardInteractions) {
                        this._prevHasFocus = false;
                        return;
                    }
                    var activeSm = this.animator.stateMachines.find(function(sm) {
                        return sm.playing && sm.hasFocusNodes;
                    }); // work off assumption of single state machine
                    if (!activeSm) {
                        this._prevHasFocus = false;
                        return;
                    }
                    if (this.canvas instanceof HTMLCanvasElement) {
                        var hasFocus = activeSm.focusState().hasFocus;
                        if (hasFocus) {
                            // Rive has an active focus node. Mark the session RiveFocused so Tab stays
                            // trapped and a later internal release (hasFocus true → false) is detected.
                            this._keyboardInteractions.notifyRiveFocused();
                            // Only steal DOM focus on the false→true transition. If hasFocus stays
                            // true across frames and the user clicks away, do not re-focus the canvas again.
                            if (!this._prevHasFocus) {
                                if (this.canvas !== document.activeElement && this._focusOptions.allowFocusInterrupt) {
                                    this.canvas.focus();
                                }
                                this._prevHasFocus = true;
                            }
                            return;
                        }
                        this._prevHasFocus = false;
                        // hasFocus is false — only act when Rive previously held focus and released it internally
                        // (state change clears focus). Release the DOM Tab trap so the next Tab moves to the next
                        // page element. EntryPending and NotFocused cases are intentional no-ops — EntryPending in
                        // particular must stay in its state (a click awaiting its first Tab) rather than be reset here.
                        if (this._keyboardInteractions.focusSessionState === _utils__WEBPACK_IMPORTED_MODULE_2__.FocusSessionState.RiveFocused) {
                            this._keyboardInteractions.setFocusSessionState(_utils__WEBPACK_IMPORTED_MODULE_2__.FocusSessionState.NotFocused);
                        }
                    }
                };
                /**
     * Handles important sequence of reporting Rive events, advancing the state machine or animation, and invoking various callbacks
     * due to state changes, view model property changes, etc.
     *
     * @param elapsedTime time to advance the state machine by
     */ Rive.prototype.advanceAndReportChanges = function(elapsedTime) {
                    var _a;
                    // - Advance non-paused animations by the elapsed number of seconds
                    // - Advance any animations that require scrubbing
                    // - Advance to the first frame even when autoplay is false
                    var activeAnimations = this.animator.animations.filter(function(a) {
                        return a.playing || a.needsScrub;
                    })// The scrubbed animations must be applied first to prevent weird artifacts
                    // if the playing animations conflict with the scrubbed animating attribuates.
                    .sort(function(first) {
                        return first.needsScrub ? -1 : 1;
                    });
                    for(var _i = 0, activeAnimations_1 = activeAnimations; _i < activeAnimations_1.length; _i++){
                        var animation = activeAnimations_1[_i];
                        animation.advance(elapsedTime);
                        if (animation.instance.didLoop) {
                            animation.loopCount += 1;
                        }
                        animation.apply(1.0);
                    }
                    // - Advance non-paused state machines by the elapsed number of seconds
                    // - Advance to the first frame even when autoplay is false
                    var activeStateMachines = this.animator.stateMachines.filter(function(a) {
                        return a.playing;
                    });
                    // Instrument the first 3 frames so the Performance timeline shows precise
                    // per-call latency for advance, draw, and flush without polluting the trace.
                    var _perfFrame = this.enablePerfMarks && this.frameCount < 3 ? this.frameCount : -1;
                    for(var _b = 0, activeStateMachines_1 = activeStateMachines; _b < activeStateMachines_1.length; _b++){
                        var stateMachine = activeStateMachines_1[_b];
                        // Check for events before the current frame's state machine advance
                        var numEventsReported = stateMachine.reportedEventCount();
                        if (numEventsReported) {
                            for(var i = 0; i < numEventsReported; i++){
                                var event_1 = stateMachine.reportedEventAt(i);
                                if (event_1) {
                                    if (event_1.type === RiveEventType.OpenUrl) {
                                        this.eventManager.fire({
                                            type: EventType.RiveEvent,
                                            data: event_1
                                        });
                                        // Handle the event side effect if explicitly enabled
                                        if (this.automaticallyHandleEvents) {
                                            var newAnchorTag = document.createElement("a");
                                            var _c = event_1, url = _c.url, target = _c.target;
                                            var sanitizedUrl = (0, _utils__WEBPACK_IMPORTED_MODULE_2__.sanitizeUrl)(url);
                                            url && newAnchorTag.setAttribute("href", sanitizedUrl);
                                            target && newAnchorTag.setAttribute("target", target);
                                            if (sanitizedUrl && sanitizedUrl !== _utils__WEBPACK_IMPORTED_MODULE_2__.BLANK_URL) {
                                                newAnchorTag.click();
                                            }
                                        }
                                    } else {
                                        this.eventManager.fire({
                                            type: EventType.RiveEvent,
                                            data: event_1
                                        });
                                    }
                                }
                            }
                        }
                        if (_perfFrame >= 0) performance.mark("rive:sm-advance:start:f".concat(_perfFrame));
                        stateMachine.advanceAndApply(elapsedTime);
                        if (_perfFrame >= 0) {
                            performance.mark("rive:sm-advance:end:f".concat(_perfFrame));
                            performance.measure("rive:sm-advance:f".concat(_perfFrame), "rive:sm-advance:start:f".concat(_perfFrame), "rive:sm-advance:end:f".concat(_perfFrame));
                        }
                    }
                    // For linear animations that have been applied to the artboard, advance it
                    // by the elapsed time.
                    if (this.animator.stateMachines.length == 0) {
                        this.artboard.advance(elapsedTime);
                    }
                    // Check for any animations that looped
                    this.animator.handleLooping();
                    // Check for any state machines that had a state change
                    this.animator.handleStateChanges();
                    // Report advanced time
                    this.animator.handleAdvancing(elapsedTime);
                    // Poll focus state to see whether or not to blur or pull up a virtual keyboard for any change to a text input node.
                    this.pollFocusState();
                    // Handle callbacks for view model property changes
                    (_a = this._viewModelInstance) === null || _a === void 0 ? void 0 : _a.handleCallbacks();
                };
                /**
     * Draw rendering loop; renders animation frames at the correct time interval.
     * @param time the time at which to render a frame
     */ Rive.prototype.draw = function(time, onSecond) {
                    // Clear the frameRequestId, as we're now rendering a fresh frame
                    this.frameRequestId = null;
                    var before = performance.now();
                    // Instrument the first 3 frames so the Performance timeline shows precise
                    // per-call latency for advance, draw, and flush without polluting the trace.
                    var _perfFrame = this.enablePerfMarks && this.frameCount < 3 ? this.frameCount : -1;
                    // On the first pass, make sure lastTime has a valid value
                    if (!this.lastRenderTime) {
                        this.lastRenderTime = time;
                    }
                    // Handle the onSecond callback
                    this.renderSecondTimer += time - this.lastRenderTime;
                    if (this.renderSecondTimer > 5000) {
                        this.renderSecondTimer = 0;
                        onSecond === null || onSecond === void 0 ? void 0 : onSecond();
                    }
                    // Calculate the elapsed time between frames in seconds
                    var elapsedTime = (time - this.lastRenderTime) / 1000;
                    this.lastRenderTime = time;
                    this.advanceAndReportChanges(elapsedTime);
                    var renderer = this.renderer;
                    // Do not draw on 0 canvas size
                    if (!this._hasZeroSize) {
                        // If there was no dirt on this frame, do not clear and draw
                        if (this.drawOptimization == DrawOptimizationOptions.AlwaysDraw || this.artboard.didChange() || this._needsRedraw || this._canvasSizeChanged()) {
                            // Canvas must be wiped to prevent artifacts
                            renderer.clear();
                            renderer.save();
                            // Update the renderer alignment if necessary
                            if (_perfFrame >= 0) performance.mark("rive:align-renderer:start:f".concat(_perfFrame));
                            this.alignRenderer();
                            if (_perfFrame >= 0) {
                                performance.mark("rive:align-renderer:end:f".concat(_perfFrame));
                                performance.measure("rive:align-renderer:f".concat(_perfFrame), "rive:align-renderer:start:f".concat(_perfFrame), "rive:align-renderer:end:f".concat(_perfFrame));
                            }
                            if (_perfFrame >= 0) performance.mark("rive:artboard-draw:start:f".concat(_perfFrame));
                            this.artboard.draw(renderer);
                            if (_perfFrame >= 0) {
                                performance.mark("rive:artboard-draw:end:f".concat(_perfFrame));
                                performance.measure("rive:artboard-draw:f".concat(_perfFrame), "rive:artboard-draw:start:f".concat(_perfFrame), "rive:artboard-draw:end:f".concat(_perfFrame));
                            }
                            renderer.restore();
                            if (_perfFrame >= 0) performance.mark("rive:renderer-flush:start:f".concat(_perfFrame));
                            renderer.flush();
                            if (_perfFrame >= 0) {
                                performance.mark("rive:renderer-flush:end:f".concat(_perfFrame));
                                performance.measure("rive:renderer-flush:f".concat(_perfFrame), "rive:renderer-flush:start:f".concat(_perfFrame), "rive:renderer-flush:end:f".concat(_perfFrame));
                            }
                            this._needsRedraw = false;
                        }
                    }
                    // Add duration to create frame to durations array
                    this.frameCount++;
                    var after = performance.now();
                    this.frameTimes.push(after);
                    this.durations.push(after - before);
                    while(this.frameTimes[0] <= after - 1000){
                        this.frameTimes.shift();
                        this.durations.shift();
                    }
                    // Calling requestAnimationFrame will rerun draw() at the correct rate:
                    // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
                    if (this.animator.isPlaying) {
                        // Request a new rendering frame
                        this.scheduleRendering();
                    } else if (this.animator.isPaused) {
                        // Reset the end time so on playback it starts at the correct frame
                        this.lastRenderTime = 0;
                    } else if (this.animator.isStopped) {
                        // Reset animation instances, artboard and time
                        // TODO: implement this properly when we have instancing
                        // this.initArtboard();
                        // this.drawFrame();
                        this.lastRenderTime = 0;
                    }
                };
                /**
     * Align the renderer
     */ Rive.prototype.alignRenderer = function() {
                    var _a = this, renderer = _a.renderer, runtime = _a.runtime, _layout = _a._layout, artboard = _a.artboard;
                    // Align things up safe in the knowledge we can restore if changed
                    renderer.align(_layout.runtimeFit(runtime), _layout.runtimeAlignment(runtime), {
                        minX: _layout.minX,
                        minY: _layout.minY,
                        maxX: _layout.maxX,
                        maxY: _layout.maxY
                    }, artboard.bounds, this._devicePixelRatioUsed * _layout.layoutScaleFactor);
                };
                Object.defineProperty(Rive.prototype, "fps", {
                    get: function() {
                        return this.durations.length;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "frameTime", {
                    get: function() {
                        if (this.durations.length === 0) {
                            return 0;
                        }
                        return (this.durations.reduce(function(a, b) {
                            return a + b;
                        }, 0) / this.durations.length).toFixed(4);
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Cleans up all Wasm-generated objects that need to be manually destroyed:
     * artboard instances, animation instances, state machine instances,
     * renderer instance, file and runtime.
     *
     * Once this is called, you will need to initialise a new instance of the
     * Rive class
     */ Rive.prototype.cleanup = function() {
                    var _a, _b, _c, _d;
                    this.destroyed = true;
                    // Stop the renderer if it hasn't already been stopped.
                    this.stopRendering();
                    // Make the GL context backing this renderer current before any WASM teardown
                    // that frees GPU resources. Binding here covers the artboard/file deletes;
                    // deleteRiveRenderer() re-binds for the renderer's own delete. No-op on the
                    // canvas2d build
                    (_b = (_a = this.renderer) === null || _a === void 0 ? void 0 : _a.bindContext) === null || _b === void 0 ? void 0 : _b.call(_a);
                    // Clean up any artboard, animation or state machine instances.
                    this.cleanupInstances();
                    // Remove from observer
                    if (this._observed !== null) {
                        observers.remove(this._observed);
                    }
                    this.removeRiveListeners();
                    if (this.file) {
                        (_c = this.riveFile) === null || _c === void 0 ? void 0 : _c.cleanup();
                        this.file = null;
                    }
                    this.riveFile = null;
                    this.deleteRiveRenderer();
                    if (this._audioEventListener !== null) {
                        audioManager.remove(this._audioEventListener);
                        this._audioEventListener = null;
                    }
                    if (this._pageVisibilityHandler) {
                        document.removeEventListener('visibilitychange', this._pageVisibilityHandler);
                        this._pageVisibilityHandler = null;
                    }
                    (_d = this._viewModelInstance) === null || _d === void 0 ? void 0 : _d.cleanup();
                    this._viewModelInstance = null;
                    this._dataEnums = null;
                };
                /**
     * Cleans up the Renderer object. Only call this API if you no longer
     * need to render Rive content in your session.
     */ Rive.prototype.deleteRiveRenderer = function() {
                    var _a;
                    (_a = this.renderer) === null || _a === void 0 ? void 0 : _a.delete();
                    this.renderer = null;
                };
                /**
     * Cleans up any Wasm-generated objects that need to be manually destroyed:
     * artboard instances, animation instances, state machine instances.
     *
     * Once this is called, things will need to be reinitialized or bad things
     * might happen.
     */ Rive.prototype.cleanupInstances = function() {
                    if (this.eventCleanup !== null) {
                        this.eventCleanup();
                    }
                    this.cleanupKeyboardInteractions();
                    // Delete all animation and state machine instances
                    this.stop();
                    if (this.artboard) {
                        this.artboard.delete();
                        this.artboard = null;
                    }
                };
                /**
     * Tries to query the setup Artboard for a text run node with the given name.
     *
     * @param textRunName - Name of the text run node associated with a text object
     * @returns - TextValueRun node or undefined if the text run cannot be queried
     */ Rive.prototype.retrieveTextRun = function(textRunName) {
                    var _a;
                    if (!textRunName) {
                        console.warn("No text run name provided");
                        return;
                    }
                    if (!this.artboard) {
                        console.warn("Tried to access text run, but the Artboard is null");
                        return;
                    }
                    var textRun = this.artboard.textRun(textRunName);
                    if (!textRun) {
                        console.warn("Could not access a text run with name '".concat(textRunName, "' in the '").concat((_a = this.artboard) === null || _a === void 0 ? void 0 : _a.name, "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."));
                        return;
                    }
                    return textRun;
                };
                /**
     * Returns a string from a given text run node name, or undefined if the text run
     * cannot be queried.
     *
     * @param textRunName - Name of the text run node associated with a text object
     * @returns - String value of the text run node or undefined
     */ Rive.prototype.getTextRunValue = function(textRunName) {
                    var textRun = this.retrieveTextRun(textRunName);
                    return textRun ? textRun.text : undefined;
                };
                /**
     * Sets a text value for a given text run node name if possible
     *
     * @param textRunName - Name of the text run node associated with a text object
     * @param textRunValue - String value to set on the text run node
     */ Rive.prototype.setTextRunValue = function(textRunName, textRunValue) {
                    var textRun = this.retrieveTextRun(textRunName);
                    if (textRun) {
                        textRun.text = textRunValue;
                    }
                };
                // Plays specified animations; if none specified, it unpauses everything.
                Rive.prototype.play = function(animationNames, autoplay) {
                    var _this = this;
                    animationNames = mapToStringArray(animationNames);
                    // If the file's not loaded, queue up the play
                    if (!this.readyForPlaying) {
                        this.taskQueue.add({
                            action: function() {
                                return _this.play(animationNames, autoplay);
                            }
                        });
                        return;
                    }
                    this.animator.play(animationNames);
                    if (this.eventCleanup) {
                        this.eventCleanup();
                    }
                    this.cleanupKeyboardInteractions();
                    this.setupRiveListeners();
                    this.startRendering();
                };
                // Pauses specified animations; if none specified, pauses all.
                Rive.prototype.pause = function(animationNames) {
                    var _this = this;
                    animationNames = mapToStringArray(animationNames);
                    // If the file's not loaded, early out, nothing to pause
                    if (!this.readyForPlaying) {
                        this.taskQueue.add({
                            action: function() {
                                return _this.pause(animationNames);
                            }
                        });
                        return;
                    }
                    if (this.eventCleanup) {
                        this.eventCleanup();
                    }
                    this.cleanupKeyboardInteractions();
                    this.animator.pause(animationNames);
                };
                Rive.prototype.scrub = function(animationNames, value) {
                    var _this = this;
                    animationNames = mapToStringArray(animationNames);
                    // If the file's not loaded, early out, nothing to pause
                    if (!this.readyForPlaying) {
                        this.taskQueue.add({
                            action: function() {
                                return _this.scrub(animationNames, value);
                            }
                        });
                        return;
                    }
                    // Scrub the animation time; we draw a single frame here so that if
                    // nothing's currently playing, the scrubbed animation is still rendered/
                    this.animator.scrub(animationNames, value || 0);
                    this.drawFrame();
                };
                // Stops specified animations; if none specifies, stops them all.
                Rive.prototype.stop = function(animationNames) {
                    var _this = this;
                    animationNames = mapToStringArray(animationNames);
                    // If the file's not loaded, early out, nothing to pause
                    if (!this.readyForPlaying) {
                        this.taskQueue.add({
                            action: function() {
                                return _this.stop(animationNames);
                            }
                        });
                        return;
                    }
                    // If there is no artboard, this.animator will be undefined
                    if (this.animator) {
                        this.animator.stop(animationNames);
                    }
                    if (this.eventCleanup) {
                        this.eventCleanup();
                    }
                    this.cleanupKeyboardInteractions();
                };
                /**
     * Resets the animation
     * @param artboard the name of the artboard, or default if none given
     * @param animations the names of animations for playback
     * @param stateMachines the names of state machines for playback
     * @param autoplay whether to autoplay when reset, defaults to false
     *
     */ Rive.prototype.reset = function(params) {
                    var _a, _b;
                    // Get the current artboard, animations, state machines, and playback states
                    var artBoardName = params === null || params === void 0 ? void 0 : params.artboard;
                    var animationNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.animations);
                    var stateMachineNames = mapToStringArray(params === null || params === void 0 ? void 0 : params.stateMachines);
                    var autoplay = (_a = params === null || params === void 0 ? void 0 : params.autoplay) !== null && _a !== void 0 ? _a : false;
                    var autoBind = (_b = params === null || params === void 0 ? void 0 : params.autoBind) !== null && _b !== void 0 ? _b : false;
                    // Stop everything and clean up
                    this.cleanupInstances();
                    // Reinitialize an artboard instance with the state
                    this.initArtboard(artBoardName, animationNames, stateMachineNames, autoplay, autoBind);
                    this.taskQueue.process();
                };
                // Loads a new Rive file, keeping listeners in place
                Rive.prototype.load = function(params) {
                    this.file = null;
                    // Stop all animations
                    this.stop();
                    // Reinitialize
                    this.init(params);
                };
                Object.defineProperty(Rive.prototype, "layout", {
                    /**
         * Returns the current layout. Note that layout should be treated as
         * immutable. If you want to change the layout, create a new one use the
         * layout setter
         */ get: function() {
                        return this._layout;
                    },
                    // Sets a new layout
                    set: function(layout) {
                        this._layout = layout;
                        // If the maxX or maxY are 0, then set them to the canvas width and height
                        if (!layout.maxX || !layout.maxY) {
                            this.resizeToCanvas();
                        }
                        if (this.loaded && !this.animator.isPlaying) {
                            this.drawFrame();
                        }
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Sets the layout bounds to the current canvas size; this is typically called
     * when the canvas is resized
     */ Rive.prototype.resizeToCanvas = function() {
                    this._layout = this.layout.copyWith({
                        minX: 0,
                        minY: 0,
                        maxX: this.canvas.width,
                        maxY: this.canvas.height
                    });
                };
                /**
     * Accounts for devicePixelRatio as a multiplier to render the size of the canvas drawing surface.
     * Uses the size of the backing canvas to set new width/height attributes. Need to re-render
     * and resize the layout to match the new drawing surface afterwards.
     * Useful function for consumers to include in a window resize listener.
     *
     * This method will set the {@link devicePixelRatioUsed} property.
     *
     * Optionally, you can provide a {@link customDevicePixelRatio} to provide a
     * custom value.
     */ Rive.prototype.resizeDrawingSurfaceToCanvas = function(customDevicePixelRatio) {
                    if (this.canvas instanceof HTMLCanvasElement && !!window) {
                        var _a = this.canvas.getBoundingClientRect(), width = _a.width, height = _a.height;
                        var dpr = customDevicePixelRatio || window.devicePixelRatio || 1;
                        this.devicePixelRatioUsed = dpr;
                        this.canvas.width = dpr * width;
                        this.canvas.height = dpr * height;
                        this._needsRedraw = true;
                        this.resizeToCanvas();
                        this.drawFrame();
                        if (this.layout.fit === Fit.Layout) {
                            var scaleFactor = this._layout.layoutScaleFactor;
                            this.artboard.width = width / scaleFactor;
                            this.artboard.height = height / scaleFactor;
                        }
                    }
                };
                Object.defineProperty(Rive.prototype, "source", {
                    // Returns the animation source, which may be undefined
                    get: function() {
                        return this.src;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "activeArtboard", {
                    /**
         * Returns the name of the active artboard
         */ get: function() {
                        return this.artboard ? this.artboard.name : "";
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "animationNames", {
                    // Returns a list of animation names on the chosen artboard
                    get: function() {
                        // If the file's not loaded, we got nothing to return
                        if (!this.loaded || !this.artboard) {
                            return [];
                        }
                        var animationNames = [];
                        for(var i = 0; i < this.artboard.animationCount(); i++){
                            animationNames.push(this.artboard.animationByIndex(i).name);
                        }
                        return animationNames;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "stateMachineNames", {
                    /**
         * Returns a list of state machine names from the current artboard
         */ get: function() {
                        // If the file's not loaded, we got nothing to return
                        if (!this.loaded || !this.artboard) {
                            return [];
                        }
                        var stateMachineNames = [];
                        for(var i = 0; i < this.artboard.stateMachineCount(); i++){
                            stateMachineNames.push(this.artboard.stateMachineByIndex(i).name);
                        }
                        return stateMachineNames;
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Returns the inputs for the specified instanced state machine, or an empty
     * list if the name is invalid or the state machine is not instanced
     * @param name the state machine name
     * @returns the inputs for the named state machine
     */ Rive.prototype.stateMachineInputs = function(name) {
                    // If the file's not loaded, early out, nothing to pause
                    if (!this.loaded) {
                        return;
                    }
                    var stateMachine = this.animator.stateMachines.find(function(m) {
                        return m.name === name;
                    });
                    return stateMachine === null || stateMachine === void 0 ? void 0 : stateMachine.inputs;
                };
                // Returns the input with the provided name at the given path
                Rive.prototype.retrieveInputAtPath = function(name, path) {
                    if (!name) {
                        console.warn("No input name provided for path '".concat(path, "'"));
                        return;
                    }
                    if (!this.artboard) {
                        console.warn("Tried to access input: '".concat(name, "', at path: '").concat(path, "', but the Artboard is null"));
                        return;
                    }
                    var input = this.artboard.inputByPath(name, path);
                    if (!input) {
                        console.warn("Could not access an input with name: '".concat(name, "', at path:'").concat(path, "'"));
                        return;
                    }
                    return input;
                };
                /**
     * Set the boolean input with the provided name at the given path with value
     * @param input the state machine input name
     * @param value the value to set the input to
     * @param path the path the input is located at an artboard level
     */ Rive.prototype.setBooleanStateAtPath = function(inputName, value, path) {
                    var input = this.retrieveInputAtPath(inputName, path);
                    if (!input) return;
                    if (input.type === StateMachineInputType.Boolean) {
                        input.asBool().value = value;
                    } else {
                        console.warn("Input with name: '".concat(inputName, "', at path:'").concat(path, "' is not a boolean"));
                    }
                };
                /**
     * Set the number input with the provided name at the given path with value
     * @param input the state machine input name
     * @param value the value to set the input to
     * @param path the path the input is located at an artboard level
     */ Rive.prototype.setNumberStateAtPath = function(inputName, value, path) {
                    var input = this.retrieveInputAtPath(inputName, path);
                    if (!input) return;
                    if (input.type === StateMachineInputType.Number) {
                        input.asNumber().value = value;
                    } else {
                        console.warn("Input with name: '".concat(inputName, "', at path:'").concat(path, "' is not a number"));
                    }
                };
                /**
     * Fire the trigger with the provided name at the given path
     * @param input the state machine input name
     * @param path the path the input is located at an artboard level
     */ Rive.prototype.fireStateAtPath = function(inputName, path) {
                    var input = this.retrieveInputAtPath(inputName, path);
                    if (!input) return;
                    if (input.type === StateMachineInputType.Trigger) {
                        input.asTrigger().fire();
                    } else {
                        console.warn("Input with name: '".concat(inputName, "', at path:'").concat(path, "' is not a trigger"));
                    }
                };
                // Returns the TextValueRun object for the provided name at the given path
                Rive.prototype.retrieveTextAtPath = function(name, path) {
                    if (!name) {
                        console.warn("No text name provided for path '".concat(path, "'"));
                        return;
                    }
                    if (!path) {
                        console.warn("No path provided for text '".concat(name, "'"));
                        return;
                    }
                    if (!this.artboard) {
                        console.warn("Tried to access text: '".concat(name, "', at path: '").concat(path, "', but the Artboard is null"));
                        return;
                    }
                    var text = this.artboard.textByPath(name, path);
                    if (!text) {
                        console.warn("Could not access text with name: '".concat(name, "', at path:'").concat(path, "'"));
                        return;
                    }
                    return text;
                };
                /**
     * Retrieves the text value for a specified text run at a given path
     * @param textName The name of the text run
     * @param path The path to the text run within the artboard
     * @returns The text value of the text run, or undefined if not found
     *
     * @example
     * // Get the text value for a text run named "title" at one nested artboard deep
     * const titleText = riveInstance.getTextRunValueAtPath("title", "artboard1");
     *
     * @example
     * // Get the text value for a text run named "subtitle" within a nested group two artboards deep
     * const subtitleText = riveInstance.getTextRunValueAtPath("subtitle", "group/nestedGroup");
     *
     * @remarks
     * If the text run cannot be found at the specified path, a warning will be logged to the console.
     */ Rive.prototype.getTextRunValueAtPath = function(textName, path) {
                    var run = this.retrieveTextAtPath(textName, path);
                    if (!run) {
                        console.warn("Could not get text with name: '".concat(textName, "', at path:'").concat(path, "'"));
                        return;
                    }
                    return run.text;
                };
                /**
     * Sets the text value for a specified text run at a given path
     * @param textName The name of the text run
     * @param value The new text value to set
     * @param path The path to the text run within the artboard
     * @returns void
     *
     * @example
     * // Set the text value for a text run named "title" at one nested artboard deep
     * riveInstance.setTextRunValueAtPath("title", "New Title", "artboard1");
     *
     * @example
     * // Set the text value for a text run named "subtitle" within a nested group two artboards deep
     * riveInstance.setTextRunValueAtPath("subtitle", "New Subtitle", "group/nestedGroup");
     *
     * @remarks
     * If the text run cannot be found at the specified path, a warning will be logged to the console.
     */ Rive.prototype.setTextRunValueAtPath = function(textName, value, path) {
                    var run = this.retrieveTextAtPath(textName, path);
                    if (!run) {
                        console.warn("Could not set text with name: '".concat(textName, "', at path:'").concat(path, "'"));
                        return;
                    }
                    run.text = value;
                };
                Object.defineProperty(Rive.prototype, "playingStateMachineNames", {
                    // Returns a list of playing machine names
                    get: function() {
                        // If the file's not loaded, we got nothing to return
                        if (!this.loaded) {
                            return [];
                        }
                        return this.animator.stateMachines.filter(function(m) {
                            return m.playing;
                        }).map(function(m) {
                            return m.name;
                        });
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "playingAnimationNames", {
                    // Returns a list of playing animation names
                    get: function() {
                        // If the file's not loaded, we got nothing to return
                        if (!this.loaded) {
                            return [];
                        }
                        return this.animator.animations.filter(function(a) {
                            return a.playing;
                        }).map(function(a) {
                            return a.name;
                        });
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "pausedAnimationNames", {
                    // Returns a list of paused animation names
                    get: function() {
                        // If the file's not loaded, we got nothing to return
                        if (!this.loaded) {
                            return [];
                        }
                        return this.animator.animations.filter(function(a) {
                            return !a.playing;
                        }).map(function(a) {
                            return a.name;
                        });
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "pausedStateMachineNames", {
                    /**
         *  Returns a list of paused machine names
         * @returns a list of state machine names that are paused
         */ get: function() {
                        // If the file's not loaded, we got nothing to return
                        if (!this.loaded) {
                            return [];
                        }
                        return this.animator.stateMachines.filter(function(m) {
                            return !m.playing;
                        }).map(function(m) {
                            return m.name;
                        });
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "isPlaying", {
                    /**
         * @returns true if any animation is playing
         */ get: function() {
                        return this.animator.isPlaying;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "isPaused", {
                    /**
         * @returns true if all instanced animations are paused
         */ get: function() {
                        return this.animator.isPaused;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "isStopped", {
                    /**
         * @returns true if no animations are playing or paused
         */ get: function() {
                        var _a, _b;
                        return (_b = (_a = this.animator) === null || _a === void 0 ? void 0 : _a.isStopped) !== null && _b !== void 0 ? _b : true;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "bounds", {
                    /**
         * @returns the bounds of the current artboard, or undefined if the artboard
         * isn't loaded yet.
         */ get: function() {
                        return this.artboard ? this.artboard.bounds : undefined;
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Subscribe to Rive-generated events
     * @param type the type of event to subscribe to
     * @param callback callback to fire when the event occurs
     */ Rive.prototype.on = function(type, callback) {
                    this.eventManager.add({
                        type: type,
                        callback: callback
                    });
                };
                /**
     * Unsubscribes from a Rive-generated event
     * @param type the type of event to unsubscribe from
     * @param callback the callback to unsubscribe
     */ Rive.prototype.off = function(type, callback) {
                    this.eventManager.remove({
                        type: type,
                        callback: callback
                    });
                };
                /**
     * Unsubscribes from a Rive-generated event
     * @deprecated
     * @param callback the callback to unsubscribe from
     */ Rive.prototype.unsubscribe = function(type, callback) {
                    console.warn("This function is deprecated: please use `off()` instead.");
                    this.off(type, callback);
                };
                /**
     * Unsubscribes all Rive listeners from an event type, or everything if no type is
     * given
     * @param type the type of event to unsubscribe from, or all types if
     * undefined
     */ Rive.prototype.removeAllRiveEventListeners = function(type) {
                    this.eventManager.removeAll(type);
                };
                /**
     * Unsubscribes all listeners from an event type, or everything if no type is
     * given
     * @deprecated
     * @param type the type of event to unsubscribe from, or all types if
     * undefined
     */ Rive.prototype.unsubscribeAll = function(type) {
                    console.warn("This function is deprecated: please use `removeAllRiveEventListeners()` instead.");
                    this.removeAllRiveEventListeners(type);
                };
                /**
     * Stops the rendering loop; this is different from pausing in that it doesn't
     * change the state of any animation. It stops rendering from occurring. This
     * is designed for situations such as when Rive isn't visible.
     *
     * The only way to start rendering again is to call `startRendering`.
     * Animations that are marked as playing will start from the position that
     * they would have been at if rendering had not been stopped.
     */ Rive.prototype.stopRendering = function() {
                    this._explicitlyStoppedRendering = true;
                    if (this.loaded && this.frameRequestId) {
                        if (this.runtime.cancelAnimationFrame) {
                            this.runtime.cancelAnimationFrame(this.frameRequestId);
                        } else {
                            cancelAnimationFrame(this.frameRequestId);
                        }
                        this.frameRequestId = null;
                    }
                };
                /**
     * Starts the rendering loop if it has been previously stopped. If the
     * renderer is already active, then this will have zero effect.
     */ Rive.prototype.startRendering = function() {
                    this._explicitlyStoppedRendering = false;
                    this.drawFrame();
                };
                Rive.prototype.scheduleRendering = function() {
                    if (this.loaded && this.artboard && !this.frameRequestId) {
                        if (this.runtime.requestAnimationFrame) {
                            this.frameRequestId = this.runtime.requestAnimationFrame(this._boundDraw);
                        } else {
                            this.frameRequestId = requestAnimationFrame(this._boundDraw);
                        }
                    }
                };
                /**
     * Called when document.visibilitychange fires (tab change, window minimize, etc.).
     * Cancels the rAF loop on hide and resets the time reference so that no accumulated time is
     * applied to state machines when the tab becomes visible again. This prevents state machine
     * advances with large time deltas when rAF starts up again.
     */ Rive.prototype._onPageVisibilityChange = function() {
                    var _a, _b;
                    if (document.hidden) {
                        if (this.frameRequestId !== null) {
                            if ((_a = this.runtime) === null || _a === void 0 ? void 0 : _a.cancelAnimationFrame) {
                                this.runtime.cancelAnimationFrame(this.frameRequestId);
                            } else {
                                cancelAnimationFrame(this.frameRequestId);
                            }
                            this.frameRequestId = null;
                        }
                        // Reset so the first resumed frame starts with elapsedTime === 0.
                        this.lastRenderTime = 0;
                    } else if (((_b = this.animator) === null || _b === void 0 ? void 0 : _b.isPlaying) && !this._explicitlyStoppedRendering) {
                        this.scheduleRendering();
                    }
                };
                /**
     * Enables frames-per-second (FPS) reporting for the runtime
     * If no callback is provided, Rive will append a fixed-position div at the top-right corner of
     * the page with the FPS reading
     * @param fpsCallback - Callback from the runtime during the RAF loop that supplies the FPS value
     */ Rive.prototype.enableFPSCounter = function(fpsCallback) {
                    this.runtime.enableFPSCounter(fpsCallback);
                };
                /**
     * Disables frames-per-second (FPS) reporting for the runtime
     */ Rive.prototype.disableFPSCounter = function() {
                    this.runtime.disableFPSCounter();
                };
                Object.defineProperty(Rive.prototype, "contents", {
                    /**
         * Returns the contents of a Rive file: the artboards, animations, and state machines
         */ get: function() {
                        if (!this.loaded) {
                            return undefined;
                        }
                        var riveContents = {
                            artboards: []
                        };
                        for(var i = 0; i < this.file.artboardCount(); i++){
                            var artboard = this.file.artboardByIndex(i);
                            var artboardContents = {
                                name: artboard.name,
                                animations: [],
                                stateMachines: []
                            };
                            for(var j = 0; j < artboard.animationCount(); j++){
                                var animation = artboard.animationByIndex(j);
                                artboardContents.animations.push(animation.name);
                            }
                            for(var k = 0; k < artboard.stateMachineCount(); k++){
                                var stateMachine = artboard.stateMachineByIndex(k);
                                var name_1 = stateMachine.name;
                                var instance = new this.runtime.StateMachineInstance(stateMachine, artboard);
                                var inputContents = [];
                                for(var l = 0; l < instance.inputCount(); l++){
                                    var input = instance.input(l);
                                    inputContents.push({
                                        name: input.name,
                                        type: input.type
                                    });
                                }
                                artboardContents.stateMachines.push({
                                    name: name_1,
                                    inputs: inputContents
                                });
                            }
                            riveContents.artboards.push(artboardContents);
                        }
                        return riveContents;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "volume", {
                    /**
         * Getter / Setter for the volume of the artboard
         */ get: function() {
                        if (this.artboard && this.artboard.volume !== this._volume) {
                            this._volume = this.artboard.volume;
                        }
                        return this._volume;
                    },
                    set: function(value) {
                        this._volume = value;
                        if (this.artboard) {
                            this.artboard.volume = value * audioManager.systemVolume;
                        }
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "artboardWidth", {
                    /**
         * The width of the artboard.
         *
         * This will return 0 if the artboard is not loaded yet and a custom
         * width has not been set.
         *
         * Do not set this value manually when using {@link resizeDrawingSurfaceToCanvas}
         * with a {@link Layout.fit} of {@link Fit.Layout}, as the artboard width is
         * automatically set.
         */ get: function() {
                        var _a;
                        if (this.artboard) {
                            return this.artboard.width;
                        }
                        return (_a = this._artboardWidth) !== null && _a !== void 0 ? _a : 0;
                    },
                    set: function(value) {
                        this._artboardWidth = value;
                        if (this.artboard) {
                            this.artboard.width = value;
                        }
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Rive.prototype, "artboardHeight", {
                    /**
         * The height of the artboard.
         *
         * This will return 0 if the artboard is not loaded yet and a custom
         * height has not been set.
         *
         * Do not set this value manually when using {@link resizeDrawingSurfaceToCanvas}
         * with a {@link Layout.fit} of {@link Fit.Layout}, as the artboard height is
         * automatically set.
         */ get: function() {
                        var _a;
                        if (this.artboard) {
                            return this.artboard.height;
                        }
                        return (_a = this._artboardHeight) !== null && _a !== void 0 ? _a : 0;
                    },
                    set: function(value) {
                        this._artboardHeight = value;
                        if (this.artboard) {
                            this.artboard.height = value;
                        }
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Reset the artboard size to its original values.
     */ Rive.prototype.resetArtboardSize = function() {
                    if (this.artboard) {
                        this.artboard.resetArtboardSize();
                        this._artboardWidth = this.artboard.width;
                        this._artboardHeight = this.artboard.height;
                    } else {
                        // If the artboard isn't loaded, we need to reset the custom width and height
                        this._artboardWidth = undefined;
                        this._artboardHeight = undefined;
                    }
                };
                Object.defineProperty(Rive.prototype, "devicePixelRatioUsed", {
                    /**
         * The device pixel ratio used in rendering and canvas/artboard resizing.
         *
         * This value will be overidden by the device pixel ratio used in
         * {@link resizeDrawingSurfaceToCanvas}. If you use that method, do not set this value.
         */ get: function() {
                        return this._devicePixelRatioUsed;
                    },
                    set: function(value) {
                        this._devicePixelRatioUsed = value;
                    },
                    enumerable: false,
                    configurable: true
                });
                /**
     * Initialize the data context with the view model instance.
     */ Rive.prototype.bindViewModelInstance = function(viewModelInstance) {
                    var _a;
                    if (this.artboard && !this.destroyed) {
                        if (viewModelInstance && viewModelInstance.runtimeInstance) {
                            viewModelInstance.internalIncrementReferenceCount();
                            (_a = this._viewModelInstance) === null || _a === void 0 ? void 0 : _a.cleanup();
                            this._viewModelInstance = viewModelInstance;
                            if (this.animator.stateMachines.length > 0) {
                                this.animator.stateMachines.forEach(function(stateMachine) {
                                    return stateMachine.bindViewModelInstance(viewModelInstance);
                                });
                            } else {
                                this.artboard.bindViewModelInstance(viewModelInstance.runtimeInstance);
                            }
                        }
                    }
                };
                Object.defineProperty(Rive.prototype, "viewModelInstance", {
                    get: function() {
                        return this._viewModelInstance;
                    },
                    enumerable: false,
                    configurable: true
                });
                Rive.prototype.viewModelByIndex = function(index) {
                    var viewModel = this.file.viewModelByIndex(index);
                    if (viewModel !== null) {
                        return new ViewModel(viewModel);
                    }
                    return null;
                };
                Rive.prototype.viewModelByName = function(name) {
                    var _a;
                    return (_a = this.riveFile) === null || _a === void 0 ? void 0 : _a.viewModelByName(name);
                };
                Rive.prototype.enums = function() {
                    if (this._dataEnums === null) {
                        var dataEnums = this.file.enums();
                        this._dataEnums = dataEnums.map(function(dataEnum) {
                            return new DataEnum(dataEnum);
                        });
                    }
                    return this._dataEnums;
                };
                Rive.prototype.defaultViewModel = function() {
                    if (this.artboard) {
                        var viewModel = this.file.defaultArtboardViewModel(this.artboard);
                        if (viewModel) {
                            return new ViewModel(viewModel);
                        }
                    }
                    return null;
                };
                /**
     * @deprecated This function is deprecated. For better stability and memory management
     * use `getBindableArtboard()` instead.
     * @param {string} name - The name of the artboard.
     * @returns {Artboard} The artboard to bind to.
     */ Rive.prototype.getArtboard = function(name) {
                    var _a, _b;
                    return (_b = (_a = this.riveFile) === null || _a === void 0 ? void 0 : _a.getArtboard(name)) !== null && _b !== void 0 ? _b : null;
                };
                Rive.prototype.getBindableArtboard = function(name) {
                    var _a, _b;
                    return (_b = (_a = this.riveFile) === null || _a === void 0 ? void 0 : _a.getBindableArtboard(name)) !== null && _b !== void 0 ? _b : null;
                };
                Rive.prototype.getDefaultBindableArtboard = function() {
                    var _a, _b;
                    return (_b = (_a = this.riveFile) === null || _a === void 0 ? void 0 : _a.getDefaultBindableArtboard()) !== null && _b !== void 0 ? _b : null;
                };
                /**
     * Clear focus applicable to active state machines with focus nodes. Useful if users want to
     * reset focus state and behavior within the Rive graphic at any point (i.e. blurring off the canvas)
     */ Rive.prototype.clearFocus = function() {
                    var playingStateMachines = this.animator.stateMachines.filter(function(sm) {
                        return sm.playing && sm.hasFocusNodes;
                    });
                    playingStateMachines.forEach(function(sm) {
                        return sm.clearFocus();
                    });
                };
                // Error message for missing source or buffer
                Rive.missingErrorMessage = "Rive source file or data buffer required";
                // Error message for removed rive file
                Rive.cleanupErrorMessage = "Attempt to use file after calling cleanup.";
                return Rive;
            }();
            var DataType;
            (function(DataType) {
                DataType["none"] = "none";
                DataType["string"] = "string";
                DataType["number"] = "number";
                DataType["boolean"] = "boolean";
                DataType["color"] = "color";
                DataType["list"] = "list";
                DataType["enumType"] = "enumType";
                DataType["trigger"] = "trigger";
                DataType["viewModel"] = "viewModel";
                DataType["integer"] = "integer";
                DataType["listIndex"] = "listIndex";
                DataType["image"] = "image";
                DataType["artboard"] = "artboard";
            })(DataType || (DataType = {}));
            var ViewModel = function() {
                function ViewModel(viewModel) {
                    this._viewModel = viewModel;
                }
                Object.defineProperty(ViewModel.prototype, "instanceCount", {
                    get: function() {
                        return this._viewModel.instanceCount;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ViewModel.prototype, "name", {
                    get: function() {
                        return this._viewModel.name;
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModel.prototype.instanceByIndex = function(index) {
                    var instance = this._viewModel.instanceByIndex(index);
                    if (instance !== null) {
                        var viewModelInstance = new ViewModelInstance(instance, null);
                        (0, _utils__WEBPACK_IMPORTED_MODULE_2__.createFinalization)(viewModelInstance, instance);
                        return viewModelInstance;
                    }
                    return null;
                };
                ViewModel.prototype.instanceByName = function(name) {
                    var instance = this._viewModel.instanceByName(name);
                    if (instance !== null) {
                        var viewModelInstance = new ViewModelInstance(instance, null);
                        (0, _utils__WEBPACK_IMPORTED_MODULE_2__.createFinalization)(viewModelInstance, instance);
                        return viewModelInstance;
                    }
                    return null;
                };
                ViewModel.prototype.defaultInstance = function() {
                    var runtimeInstance = this._viewModel.defaultInstance();
                    if (runtimeInstance !== null) {
                        var viewModelInstance = new ViewModelInstance(runtimeInstance, null);
                        (0, _utils__WEBPACK_IMPORTED_MODULE_2__.createFinalization)(viewModelInstance, runtimeInstance);
                        return viewModelInstance;
                    }
                    return null;
                };
                ViewModel.prototype.instance = function() {
                    var runtimeInstance = this._viewModel.instance();
                    if (runtimeInstance !== null) {
                        var viewModelInstance = new ViewModelInstance(runtimeInstance, null);
                        (0, _utils__WEBPACK_IMPORTED_MODULE_2__.createFinalization)(viewModelInstance, runtimeInstance);
                        return viewModelInstance;
                    }
                    return null;
                };
                Object.defineProperty(ViewModel.prototype, "properties", {
                    get: function() {
                        return this._viewModel.getProperties();
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ViewModel.prototype, "instanceNames", {
                    get: function() {
                        return this._viewModel.getInstanceNames();
                    },
                    enumerable: false,
                    configurable: true
                });
                return ViewModel;
            }();
            var DataEnum = function() {
                function DataEnum(dataEnum) {
                    this._dataEnum = dataEnum;
                }
                Object.defineProperty(DataEnum.prototype, "name", {
                    get: function() {
                        return this._dataEnum.name;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(DataEnum.prototype, "values", {
                    get: function() {
                        return this._dataEnum.values;
                    },
                    enumerable: false,
                    configurable: true
                });
                return DataEnum;
            }();
            var PropertyType;
            (function(PropertyType) {
                PropertyType["Number"] = "number";
                PropertyType["String"] = "string";
                PropertyType["Boolean"] = "boolean";
                PropertyType["Color"] = "color";
                PropertyType["Trigger"] = "trigger";
                PropertyType["Enum"] = "enum";
                PropertyType["List"] = "list";
                PropertyType["Image"] = "image";
                PropertyType["Artboard"] = "artboard";
            })(PropertyType || (PropertyType = {}));
            var ViewModelInstance = function() {
                function ViewModelInstance(runtimeInstance, parent) {
                    this._parents = [];
                    this._children = [];
                    this._viewModelInstances = new Map();
                    this._propertiesWithCallbacks = [];
                    this._referenceCount = 0;
                    this.selfUnref = false;
                    this._runtimeInstance = runtimeInstance;
                    if (parent !== null) {
                        this._parents.push(parent);
                    }
                }
                Object.defineProperty(ViewModelInstance.prototype, "runtimeInstance", {
                    get: function() {
                        return this._runtimeInstance;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ViewModelInstance.prototype, "nativeInstance", {
                    get: function() {
                        return this._runtimeInstance;
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModelInstance.prototype.handleCallbacks = function() {
                    if (this._propertiesWithCallbacks.length !== 0) {
                        this._propertiesWithCallbacks.forEach(function(property) {
                            property.handleCallbacks();
                        });
                        this._propertiesWithCallbacks.forEach(function(property) {
                            property.clearChanges();
                        });
                    }
                    this._children.forEach(function(child) {
                        return child.handleCallbacks();
                    });
                };
                ViewModelInstance.prototype.addParent = function(parent) {
                    if (!this._parents.includes(parent)) {
                        this._parents.push(parent);
                        if (this._propertiesWithCallbacks.length > 0 || this._children.length > 0) {
                            parent.addToViewModelCallbacks(this);
                        }
                    }
                };
                ViewModelInstance.prototype.removeParent = function(parent) {
                    var index = this._parents.indexOf(parent);
                    if (index !== -1) {
                        var parent_1 = this._parents[index];
                        parent_1.removeFromViewModelCallbacks(this);
                        this._parents.splice(index, 1);
                    }
                };
                /*
     * method for internal use, it shouldn't be called externally
     */ ViewModelInstance.prototype.addToPropertyCallbacks = function(property) {
                    var _this = this;
                    if (!this._propertiesWithCallbacks.includes(property)) {
                        this._propertiesWithCallbacks.push(property);
                        if (this._propertiesWithCallbacks.length > 0) {
                            this._parents.forEach(function(parent) {
                                parent.addToViewModelCallbacks(_this);
                            });
                        }
                    }
                };
                /*
     * method for internal use, it shouldn't be called externally
     */ ViewModelInstance.prototype.removeFromPropertyCallbacks = function(property) {
                    var _this = this;
                    if (this._propertiesWithCallbacks.includes(property)) {
                        this._propertiesWithCallbacks = this._propertiesWithCallbacks.filter(function(prop) {
                            return prop !== property;
                        });
                        if (this._children.length === 0 && this._propertiesWithCallbacks.length === 0) {
                            this._parents.forEach(function(parent) {
                                parent.removeFromViewModelCallbacks(_this);
                            });
                        }
                    }
                };
                /*
     * method for internal use, it shouldn't be called externally
     */ ViewModelInstance.prototype.addToViewModelCallbacks = function(instance) {
                    var _this = this;
                    if (!this._children.includes(instance)) {
                        this._children.push(instance);
                        this._parents.forEach(function(parent) {
                            parent.addToViewModelCallbacks(_this);
                        });
                    }
                };
                /*
     * method for internal use, it shouldn't be called externally
     */ ViewModelInstance.prototype.removeFromViewModelCallbacks = function(instance) {
                    var _this = this;
                    if (this._children.includes(instance)) {
                        this._children = this._children.filter(function(child) {
                            return child !== instance;
                        });
                        if (this._children.length === 0 && this._propertiesWithCallbacks.length === 0) {
                            this._parents.forEach(function(parent) {
                                parent.removeFromViewModelCallbacks(_this);
                            });
                        }
                    }
                };
                ViewModelInstance.prototype.clearCallbacks = function() {
                    this._propertiesWithCallbacks.forEach(function(property) {
                        property.clearCallbacks();
                    });
                };
                ViewModelInstance.prototype.propertyFromPath = function(path, type) {
                    var pathSegments = path.split("/");
                    return this.propertyFromPathSegments(pathSegments, 0, type);
                };
                ViewModelInstance.prototype.viewModelFromPathSegments = function(pathSegments, index) {
                    var viewModelInstance = this.internalViewModelInstance(pathSegments[index]);
                    if (viewModelInstance !== null) {
                        if (index == pathSegments.length - 1) {
                            return viewModelInstance;
                        } else {
                            return viewModelInstance.viewModelFromPathSegments(pathSegments, index++);
                        }
                    }
                    return null;
                };
                ViewModelInstance.prototype.propertyFromPathSegments = function(pathSegments, index, type) {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
                    if (index < pathSegments.length - 1) {
                        var viewModelInstance = this.internalViewModelInstance(pathSegments[index]);
                        if (viewModelInstance !== null) {
                            return viewModelInstance.propertyFromPathSegments(pathSegments, index + 1, type);
                        } else {
                            return null;
                        }
                    }
                    var instance = null;
                    switch(type){
                        case PropertyType.Number:
                            instance = (_b = (_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.number(pathSegments[index])) !== null && _b !== void 0 ? _b : null;
                            if (instance !== null) {
                                return new ViewModelInstanceNumber(instance, this);
                            }
                            break;
                        case PropertyType.String:
                            instance = (_d = (_c = this._runtimeInstance) === null || _c === void 0 ? void 0 : _c.string(pathSegments[index])) !== null && _d !== void 0 ? _d : null;
                            if (instance !== null) {
                                return new ViewModelInstanceString(instance, this);
                            }
                            break;
                        case PropertyType.Boolean:
                            instance = (_f = (_e = this._runtimeInstance) === null || _e === void 0 ? void 0 : _e.boolean(pathSegments[index])) !== null && _f !== void 0 ? _f : null;
                            if (instance !== null) {
                                return new ViewModelInstanceBoolean(instance, this);
                            }
                            break;
                        case PropertyType.Color:
                            instance = (_h = (_g = this._runtimeInstance) === null || _g === void 0 ? void 0 : _g.color(pathSegments[index])) !== null && _h !== void 0 ? _h : null;
                            if (instance !== null) {
                                return new ViewModelInstanceColor(instance, this);
                            }
                            break;
                        case PropertyType.Trigger:
                            instance = (_k = (_j = this._runtimeInstance) === null || _j === void 0 ? void 0 : _j.trigger(pathSegments[index])) !== null && _k !== void 0 ? _k : null;
                            if (instance !== null) {
                                return new ViewModelInstanceTrigger(instance, this);
                            }
                            break;
                        case PropertyType.Enum:
                            instance = (_m = (_l = this._runtimeInstance) === null || _l === void 0 ? void 0 : _l.enum(pathSegments[index])) !== null && _m !== void 0 ? _m : null;
                            if (instance !== null) {
                                return new ViewModelInstanceEnum(instance, this);
                            }
                            break;
                        case PropertyType.List:
                            instance = (_p = (_o = this._runtimeInstance) === null || _o === void 0 ? void 0 : _o.list(pathSegments[index])) !== null && _p !== void 0 ? _p : null;
                            if (instance !== null) {
                                return new ViewModelInstanceList(instance, this);
                            }
                            break;
                        case PropertyType.Image:
                            instance = (_r = (_q = this._runtimeInstance) === null || _q === void 0 ? void 0 : _q.image(pathSegments[index])) !== null && _r !== void 0 ? _r : null;
                            if (instance !== null) {
                                return new ViewModelInstanceAssetImage(instance, this);
                            }
                            break;
                        case PropertyType.Artboard:
                            instance = (_t = (_s = this._runtimeInstance) === null || _s === void 0 ? void 0 : _s.artboard(pathSegments[index])) !== null && _t !== void 0 ? _t : null;
                            if (instance !== null) {
                                return new ViewModelInstanceArtboard(instance, this);
                            }
                            break;
                    }
                    return null;
                };
                ViewModelInstance.prototype.internalViewModelInstance = function(name) {
                    var _a;
                    if (this._viewModelInstances.has(name)) {
                        return this._viewModelInstances.get(name);
                    }
                    var viewModelRuntimeInstance = (_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.viewModel(name);
                    if (viewModelRuntimeInstance !== null) {
                        var viewModelInstance = new ViewModelInstance(viewModelRuntimeInstance, this);
                        (0, _utils__WEBPACK_IMPORTED_MODULE_2__.createFinalization)(viewModelInstance, viewModelRuntimeInstance);
                        viewModelInstance.internalIncrementReferenceCount();
                        this._viewModelInstances.set(name, viewModelInstance);
                        return viewModelInstance;
                    }
                    return null;
                };
                /**
     * method to access a property instance of type number belonging
     * to the view model instance or to a nested view model instance
     * @param path - path to the number property
     */ ViewModelInstance.prototype.number = function(path) {
                    var viewmodelInstanceValue = this.propertyFromPath(path, PropertyType.Number);
                    return viewmodelInstanceValue;
                };
                /**
     * method to access a property instance of type string belonging
     * to the view model instance or to a nested view model instance
     * @param path - path to the string property
     */ ViewModelInstance.prototype.string = function(path) {
                    var viewmodelInstanceValue = this.propertyFromPath(path, PropertyType.String);
                    return viewmodelInstanceValue;
                };
                /**
     * method to access a property instance of type boolean belonging
     * to the view model instance or to a nested view model instance
     * @param path - path to the boolean property
     */ ViewModelInstance.prototype.boolean = function(path) {
                    var viewmodelInstanceValue = this.propertyFromPath(path, PropertyType.Boolean);
                    return viewmodelInstanceValue;
                };
                /**
     * method to access a property instance of type color belonging
     * to the view model instance or to a nested view model instance
     * @param path - path to the ttrigger property
     */ ViewModelInstance.prototype.color = function(path) {
                    var viewmodelInstanceValue = this.propertyFromPath(path, PropertyType.Color);
                    return viewmodelInstanceValue;
                };
                /**
     * method to access a property instance of type trigger belonging
     * to the view model instance or to a nested view model instance
     * @param path - path to the trigger property
     */ ViewModelInstance.prototype.trigger = function(path) {
                    var viewmodelInstanceValue = this.propertyFromPath(path, PropertyType.Trigger);
                    return viewmodelInstanceValue;
                };
                /**
     * method to access a property instance of type enum belonging
     * to the view model instance or to a nested view model instance
     * @param path - path to the enum property
     */ ViewModelInstance.prototype.enum = function(path) {
                    var viewmodelInstanceValue = this.propertyFromPath(path, PropertyType.Enum);
                    return viewmodelInstanceValue;
                };
                /**
     * method to access a property instance of type list belonging
     * to the view model instance or to a nested view model instance
     * @param path - path to the list property
     */ ViewModelInstance.prototype.list = function(path) {
                    var viewmodelInstanceValue = this.propertyFromPath(path, PropertyType.List);
                    return viewmodelInstanceValue;
                };
                /**
     * method to access a view model property instance belonging
     * to the view model instance or to a nested view model instance
     * @param path - path to the image property
     */ ViewModelInstance.prototype.image = function(path) {
                    var viewmodelInstanceValue = this.propertyFromPath(path, PropertyType.Image);
                    return viewmodelInstanceValue;
                };
                /**
     * method to access an artboard property instance belonging
     * to the view model instance or to a nested view model instance
     * @param path - path to the image property
     */ ViewModelInstance.prototype.artboard = function(path) {
                    var viewmodelInstanceValue = this.propertyFromPath(path, PropertyType.Artboard);
                    return viewmodelInstanceValue;
                };
                /**
     * method to access a view model property instance belonging
     * to the view model instance or to a nested view model instance
     * @param path - path to the view model property
     */ ViewModelInstance.prototype.viewModel = function(path) {
                    var pathSegments = path.split("/");
                    var parentViewModelInstance = pathSegments.length > 1 ? this.viewModelFromPathSegments(pathSegments.slice(0, pathSegments.length - 1), 0) : this;
                    if (parentViewModelInstance != null) {
                        return parentViewModelInstance.internalViewModelInstance(pathSegments[pathSegments.length - 1]);
                    }
                    return null;
                };
                ViewModelInstance.prototype.internalReplaceViewModel = function(name, value) {
                    var _a;
                    if (value.runtimeInstance !== null) {
                        var result = ((_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.replaceViewModel(name, value.runtimeInstance)) || false;
                        if (result) {
                            value.internalIncrementReferenceCount();
                            var oldInstance_1 = this.internalViewModelInstance(name);
                            if (oldInstance_1 !== null) {
                                oldInstance_1.removeParent(this);
                                if (this._children.includes(oldInstance_1)) {
                                    this._children = this._children.filter(function(child) {
                                        return child !== oldInstance_1;
                                    });
                                }
                                oldInstance_1.cleanup();
                            }
                            this._viewModelInstances.set(name, value);
                            value.addParent(this);
                        }
                        return result;
                    }
                    return false;
                };
                /**
     * method to replace a view model property with another view model value
     * @param path - path to the view model property
     * @param value - view model that will replace the original
     */ ViewModelInstance.prototype.replaceViewModel = function(path, value) {
                    var _a;
                    var pathSegments = path.split("/");
                    var viewModelInstance = pathSegments.length > 1 ? this.viewModelFromPathSegments(pathSegments.slice(0, pathSegments.length - 1), 0) : this;
                    return (_a = viewModelInstance === null || viewModelInstance === void 0 ? void 0 : viewModelInstance.internalReplaceViewModel(pathSegments[pathSegments.length - 1], value)) !== null && _a !== void 0 ? _a : false;
                };
                /*
     * method to add one to the reference counter of the instance.
     * Use if the file owning the reference is destroyed but the instance needs to stay around
     */ ViewModelInstance.prototype.incrementReferenceCount = function() {
                    var _a;
                    this._referenceCount++;
                    (_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.incrementReferenceCount();
                };
                /*
     * method to subtract one to the reference counter of the instance.
     * Use if incrementReferenceCount has been called
     */ ViewModelInstance.prototype.decrementReferenceCount = function() {
                    var _a;
                    this._referenceCount--;
                    (_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.decrementReferenceCount();
                };
                Object.defineProperty(ViewModelInstance.prototype, "properties", {
                    get: function() {
                        var _a;
                        return ((_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.getProperties().map(function(prop) {
                            return __assign({}, prop);
                        })) || [];
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ViewModelInstance.prototype, "viewModelName", {
                    /**
         * Get the name of the ViewModel definition this instance was created from.
         */ get: function() {
                        var _a, _b;
                        return (_b = (_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.getViewModelName()) !== null && _b !== void 0 ? _b : "";
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModelInstance.prototype.internalIncrementReferenceCount = function() {
                    this._referenceCount++;
                };
                ViewModelInstance.prototype.cleanup = function() {
                    var _this = this;
                    var _a;
                    this._referenceCount--;
                    if (this._referenceCount <= 0) {
                        if (this.selfUnref) {
                            (_a = this._runtimeInstance) === null || _a === void 0 ? void 0 : _a.unref();
                        }
                        this._runtimeInstance = null;
                        this.clearCallbacks();
                        this._propertiesWithCallbacks = [];
                        this._viewModelInstances.forEach(function(value) {
                            value.cleanup();
                        });
                        this._viewModelInstances.clear();
                        var children = __spreadArray([], this._children, true);
                        this._children.length = 0;
                        var parents = __spreadArray([], this._parents, true);
                        this._parents.length = 0;
                        children.forEach(function(child) {
                            child.removeParent(_this);
                        });
                        parents.forEach(function(parent) {
                            parent.removeFromViewModelCallbacks(_this);
                        });
                    }
                };
                return ViewModelInstance;
            }();
            var ViewModelInstanceValue = function() {
                function ViewModelInstanceValue(instance, parent) {
                    this.callbacks = [];
                    this._viewModelInstanceValue = instance;
                    this._parentViewModel = parent;
                }
                ViewModelInstanceValue.prototype.on = function(callback) {
                    // Since we don't clean the changed flag for properties that don't have listeners,
                    // we clean it the first time we add a listener to it
                    if (this.callbacks.length === 0) {
                        this._viewModelInstanceValue.clearChanges();
                    }
                    if (!this.callbacks.includes(callback)) {
                        this.callbacks.push(callback);
                        this._parentViewModel.addToPropertyCallbacks(this);
                    }
                };
                ViewModelInstanceValue.prototype.off = function(callback) {
                    if (!callback) {
                        this.callbacks.length = 0;
                    } else {
                        this.callbacks = this.callbacks.filter(function(cb) {
                            return cb !== callback;
                        });
                    }
                    if (this.callbacks.length === 0) {
                        this._parentViewModel.removeFromPropertyCallbacks(this);
                    }
                };
                ViewModelInstanceValue.prototype.internalHandleCallback = function(callback) {};
                ViewModelInstanceValue.prototype.handleCallbacks = function() {
                    var _this = this;
                    if (this._viewModelInstanceValue.hasChanged) {
                        this.callbacks.forEach(function(callback) {
                            _this.internalHandleCallback(callback);
                        });
                    }
                };
                ViewModelInstanceValue.prototype.clearChanges = function() {
                    this._viewModelInstanceValue.clearChanges();
                };
                ViewModelInstanceValue.prototype.clearCallbacks = function() {
                    this.callbacks.length = 0;
                };
                Object.defineProperty(ViewModelInstanceValue.prototype, "name", {
                    get: function() {
                        return this._viewModelInstanceValue.name;
                    },
                    enumerable: false,
                    configurable: true
                });
                return ViewModelInstanceValue;
            }();
            var ViewModelInstanceString = function(_super) {
                __extends(ViewModelInstanceString, _super);
                function ViewModelInstanceString(instance, parent) {
                    return _super.call(this, instance, parent) || this;
                }
                Object.defineProperty(ViewModelInstanceString.prototype, "value", {
                    get: function() {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function(val) {
                        this._viewModelInstanceValue.value = val;
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModelInstanceString.prototype.internalHandleCallback = function(callback) {
                    callback(this.value);
                };
                return ViewModelInstanceString;
            }(ViewModelInstanceValue);
            var ViewModelInstanceNumber = function(_super) {
                __extends(ViewModelInstanceNumber, _super);
                function ViewModelInstanceNumber(instance, parent) {
                    return _super.call(this, instance, parent) || this;
                }
                Object.defineProperty(ViewModelInstanceNumber.prototype, "value", {
                    get: function() {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function(val) {
                        this._viewModelInstanceValue.value = val;
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModelInstanceNumber.prototype.internalHandleCallback = function(callback) {
                    callback(this.value);
                };
                return ViewModelInstanceNumber;
            }(ViewModelInstanceValue);
            var ViewModelInstanceBoolean = function(_super) {
                __extends(ViewModelInstanceBoolean, _super);
                function ViewModelInstanceBoolean(instance, parent) {
                    return _super.call(this, instance, parent) || this;
                }
                Object.defineProperty(ViewModelInstanceBoolean.prototype, "value", {
                    get: function() {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function(val) {
                        this._viewModelInstanceValue.value = val;
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModelInstanceBoolean.prototype.internalHandleCallback = function(callback) {
                    callback(this.value);
                };
                return ViewModelInstanceBoolean;
            }(ViewModelInstanceValue);
            var ViewModelInstanceTrigger = function(_super) {
                __extends(ViewModelInstanceTrigger, _super);
                function ViewModelInstanceTrigger(instance, parent) {
                    return _super.call(this, instance, parent) || this;
                }
                ViewModelInstanceTrigger.prototype.trigger = function() {
                    return this._viewModelInstanceValue.trigger();
                };
                ViewModelInstanceTrigger.prototype.internalHandleCallback = function(callback) {
                    callback();
                };
                return ViewModelInstanceTrigger;
            }(ViewModelInstanceValue);
            var ViewModelInstanceEnum = function(_super) {
                __extends(ViewModelInstanceEnum, _super);
                function ViewModelInstanceEnum(instance, parent) {
                    return _super.call(this, instance, parent) || this;
                }
                Object.defineProperty(ViewModelInstanceEnum.prototype, "value", {
                    get: function() {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function(val) {
                        this._viewModelInstanceValue.value = val;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ViewModelInstanceEnum.prototype, "valueIndex", {
                    get: function() {
                        return this._viewModelInstanceValue.valueIndex;
                    },
                    set: function(val) {
                        this._viewModelInstanceValue.valueIndex = val;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ViewModelInstanceEnum.prototype, "values", {
                    get: function() {
                        return this._viewModelInstanceValue.values;
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModelInstanceEnum.prototype.internalHandleCallback = function(callback) {
                    callback(this.value);
                };
                return ViewModelInstanceEnum;
            }(ViewModelInstanceValue);
            var ViewModelInstanceList = function(_super) {
                __extends(ViewModelInstanceList, _super);
                function ViewModelInstanceList(instance, parent) {
                    return _super.call(this, instance, parent) || this;
                }
                Object.defineProperty(ViewModelInstanceList.prototype, "length", {
                    get: function() {
                        return this._viewModelInstanceValue.size;
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModelInstanceList.prototype.addInstance = function(instance) {
                    if (instance.runtimeInstance != null) {
                        this._viewModelInstanceValue.addInstance(instance.runtimeInstance);
                        instance.addParent(this._parentViewModel);
                    }
                };
                ViewModelInstanceList.prototype.addInstanceAt = function(instance, index) {
                    if (instance.runtimeInstance != null) {
                        if (this._viewModelInstanceValue.addInstanceAt(instance.runtimeInstance, index)) {
                            instance.addParent(this._parentViewModel);
                            return true;
                        }
                    }
                    return false;
                };
                ViewModelInstanceList.prototype.removeInstance = function(instance) {
                    if (instance.runtimeInstance != null) {
                        this._viewModelInstanceValue.removeInstance(instance.runtimeInstance);
                        instance.removeParent(this._parentViewModel);
                    }
                };
                ViewModelInstanceList.prototype.removeInstanceAt = function(index) {
                    this._viewModelInstanceValue.removeInstanceAt(index);
                };
                ViewModelInstanceList.prototype.instanceAt = function(index) {
                    var runtimeInstance = this._viewModelInstanceValue.instanceAt(index);
                    if (runtimeInstance != null) {
                        var viewModelInstance = new ViewModelInstance(runtimeInstance, this._parentViewModel);
                        (0, _utils__WEBPACK_IMPORTED_MODULE_2__.createFinalization)(viewModelInstance, runtimeInstance);
                        return viewModelInstance;
                    }
                    return null;
                };
                ViewModelInstanceList.prototype.swap = function(a, b) {
                    this._viewModelInstanceValue.swap(a, b);
                };
                ViewModelInstanceList.prototype.internalHandleCallback = function(callback) {
                    callback();
                };
                return ViewModelInstanceList;
            }(ViewModelInstanceValue);
            var ViewModelInstanceColor = function(_super) {
                __extends(ViewModelInstanceColor, _super);
                function ViewModelInstanceColor(instance, parent) {
                    return _super.call(this, instance, parent) || this;
                }
                Object.defineProperty(ViewModelInstanceColor.prototype, "value", {
                    get: function() {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function(val) {
                        this._viewModelInstanceValue.value = val;
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModelInstanceColor.prototype.rgb = function(r, g, b) {
                    this._viewModelInstanceValue.rgb(r, g, b);
                };
                ViewModelInstanceColor.prototype.rgba = function(r, g, b, a) {
                    this._viewModelInstanceValue.argb(a, r, g, b);
                };
                ViewModelInstanceColor.prototype.argb = function(a, r, g, b) {
                    this._viewModelInstanceValue.argb(a, r, g, b);
                };
                // Value 0 to 255
                ViewModelInstanceColor.prototype.alpha = function(a) {
                    this._viewModelInstanceValue.alpha(a);
                };
                // Value 0 to 1
                ViewModelInstanceColor.prototype.opacity = function(o) {
                    this._viewModelInstanceValue.alpha(Math.round(Math.max(0, Math.min(1, o)) * 255));
                };
                ViewModelInstanceColor.prototype.internalHandleCallback = function(callback) {
                    callback(this.value);
                };
                return ViewModelInstanceColor;
            }(ViewModelInstanceValue);
            var ViewModelInstanceAssetImage = function(_super) {
                __extends(ViewModelInstanceAssetImage, _super);
                function ViewModelInstanceAssetImage(instance, root) {
                    return _super.call(this, instance, root) || this;
                }
                Object.defineProperty(ViewModelInstanceAssetImage.prototype, "value", {
                    set: function(image) {
                        var _a;
                        this._viewModelInstanceValue.value((_a = image === null || image === void 0 ? void 0 : image.nativeImage) !== null && _a !== void 0 ? _a : null);
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModelInstanceAssetImage.prototype.internalHandleCallback = function(callback) {
                    callback();
                };
                return ViewModelInstanceAssetImage;
            }(ViewModelInstanceValue);
            var ViewModelInstanceArtboard = function(_super) {
                __extends(ViewModelInstanceArtboard, _super);
                function ViewModelInstanceArtboard(instance, root) {
                    return _super.call(this, instance, root) || this;
                }
                Object.defineProperty(ViewModelInstanceArtboard.prototype, "value", {
                    set: function(artboard) {
                        var _a, _b;
                        var bindableArtboard;
                        if (artboard.isBindableArtboard) {
                            bindableArtboard = artboard;
                        } else {
                            bindableArtboard = artboard.file.internalBindableArtboardFromArtboard(artboard.nativeArtboard);
                        }
                        this._viewModelInstanceValue.value((_a = bindableArtboard === null || bindableArtboard === void 0 ? void 0 : bindableArtboard.nativeArtboard) !== null && _a !== void 0 ? _a : null);
                        if (bindableArtboard === null || bindableArtboard === void 0 ? void 0 : bindableArtboard.nativeViewModel) {
                            this._viewModelInstanceValue.viewModelInstance((_b = bindableArtboard === null || bindableArtboard === void 0 ? void 0 : bindableArtboard.nativeViewModel) !== null && _b !== void 0 ? _b : null);
                        }
                    },
                    enumerable: false,
                    configurable: true
                });
                ViewModelInstanceArtboard.prototype.internalHandleCallback = function(callback) {
                    callback();
                };
                return ViewModelInstanceArtboard;
            }(ViewModelInstanceValue);
            // Loads Rive data from a URI via fetch.
            var loadRiveFile = function(src) {
                return __awaiter(void 0, void 0, void 0, function() {
                    var req, res, buffer;
                    return __generator(this, function(_a) {
                        switch(_a.label){
                            case 0:
                                req = new Request(src);
                                return [
                                    4 /*yield*/ ,
                                    fetch(req)
                                ];
                            case 1:
                                res = _a.sent();
                                if (!res.ok) {
                                    throw new Error("Failed to fetch the Rive file: HTTP ".concat(res.status));
                                }
                                return [
                                    4 /*yield*/ ,
                                    res.arrayBuffer()
                                ];
                            case 2:
                                buffer = _a.sent();
                                return [
                                    2 /*return*/ ,
                                    buffer
                                ];
                        }
                    });
                });
            };
            // #endregion
            // #region utility functions
            /*
 * Utility function to ensure an object is a string array
 */ var mapToStringArray = function(obj) {
                if (typeof obj === "string") {
                    return [
                        obj
                    ];
                } else if (obj instanceof Array) {
                    return obj;
                }
                // If obj is undefined, return empty array
                return [];
            };
            // #endregion
            // #region testing utilities
            // Exports to only be used for tests
            var Testing = {
                EventManager: EventManager,
                TaskQueueManager: TaskQueueManager
            };
            // #endregion
            // #region asset loaders
            /**
 * Decodes bytes into an audio asset.
 *
 * Be sure to call `.unref()` on the audio once it is no longer needed. This
 * allows the engine to clean it up when it is not used by any more animations.
 */ var decodeAudio = function(bytes) {
                return __awaiter(void 0, void 0, void 0, function() {
                    var decodedPromise, audio, audioWrapper;
                    return __generator(this, function(_a) {
                        switch(_a.label){
                            case 0:
                                decodedPromise = new Promise(function(resolve) {
                                    return _runtimeLoader__WEBPACK_IMPORTED_MODULE_1__.RuntimeLoader.getInstance(function(rive) {
                                        rive.decodeAudio(bytes, resolve);
                                    });
                                });
                                return [
                                    4 /*yield*/ ,
                                    decodedPromise
                                ];
                            case 1:
                                audio = _a.sent();
                                audioWrapper = new _utils__WEBPACK_IMPORTED_MODULE_2__.AudioWrapper(audio);
                                _utils__WEBPACK_IMPORTED_MODULE_2__.finalizationRegistry.register(audioWrapper, audio);
                                return [
                                    2 /*return*/ ,
                                    audioWrapper
                                ];
                        }
                    });
                });
            };
            /**
 * Decodes bytes into an image.
 *
 * Be sure to call `.unref()` on the image once it is no longer needed. This
 * allows the engine to clean it up when it is not used by any more animations.
 */ var decodeImage = function(bytes) {
                return __awaiter(void 0, void 0, void 0, function() {
                    var decodedPromise, image, imageWrapper;
                    return __generator(this, function(_a) {
                        switch(_a.label){
                            case 0:
                                decodedPromise = new Promise(function(resolve) {
                                    return _runtimeLoader__WEBPACK_IMPORTED_MODULE_1__.RuntimeLoader.getInstance(function(rive) {
                                        rive.decodeImage(bytes, resolve);
                                    });
                                });
                                return [
                                    4 /*yield*/ ,
                                    decodedPromise
                                ];
                            case 1:
                                image = _a.sent();
                                imageWrapper = new _utils__WEBPACK_IMPORTED_MODULE_2__.ImageWrapper(image);
                                _utils__WEBPACK_IMPORTED_MODULE_2__.finalizationRegistry.register(imageWrapper, image);
                                return [
                                    2 /*return*/ ,
                                    imageWrapper
                                ];
                        }
                    });
                });
            };
            /**
 * Decodes bytes into a font.
 *
 * Be sure to call `.unref()` on the font once it is no longer needed. This
 * allows the engine to clean it up when it is not used by any more animations.
 */ var decodeFont = function(bytes) {
                return __awaiter(void 0, void 0, void 0, function() {
                    var decodedPromise, font, fontWrapper;
                    return __generator(this, function(_a) {
                        switch(_a.label){
                            case 0:
                                decodedPromise = new Promise(function(resolve) {
                                    return _runtimeLoader__WEBPACK_IMPORTED_MODULE_1__.RuntimeLoader.getInstance(function(rive) {
                                        rive.decodeFont(bytes, resolve);
                                    });
                                });
                                return [
                                    4 /*yield*/ ,
                                    decodedPromise
                                ];
                            case 1:
                                font = _a.sent();
                                fontWrapper = new _utils__WEBPACK_IMPORTED_MODULE_2__.FontWrapper(font);
                                _utils__WEBPACK_IMPORTED_MODULE_2__.finalizationRegistry.register(fontWrapper, font);
                                return [
                                    2 /*return*/ ,
                                    fontWrapper
                                ];
                        }
                    });
                });
            };
        // #endregion
        })();
        /******/ return __webpack_exports__;
    /******/ })();
});
}),
"[project]/my-react-app/node_modules/@rive-app/react-canvas/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, "__esModule", {
    value: !0
});
var observer, React = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), canvas = __turbopack_context__.r("[project]/my-react-app/node_modules/@rive-app/canvas/rive.js [app-client] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
function useDevicePixelRatio(e) {
    var t = e || getDevicePixelRatio(), n = React.useState(t), a = n[0], r = n[1];
    return React.useEffect({
        "useDevicePixelRatio.useEffect": function() {
            if ("u" > typeof window && "matchMedia" in window) {
                var t = {
                    "useDevicePixelRatio.useEffect.t": function() {
                        r(e || getDevicePixelRatio());
                    }
                }["useDevicePixelRatio.useEffect.t"], n = window.matchMedia("screen and (resolution: " + a + "dppx)");
                return n.hasOwnProperty("addEventListener") ? n.addEventListener("change", t) : n.addListener(t), ({
                    "useDevicePixelRatio.useEffect": function() {
                        n.hasOwnProperty("removeEventListener") ? n.removeEventListener("change", t) : n.removeListener(t);
                    }
                })["useDevicePixelRatio.useEffect"];
            }
        }
    }["useDevicePixelRatio.useEffect"], [
        a,
        e
    ]), a;
}
function getDevicePixelRatio() {
    return Math.min(Math.max(1, "u" > typeof window && "number" == typeof window.devicePixelRatio ? window.devicePixelRatio : 1), 3);
}
var FakeResizeObserver = /*#__PURE__*/ function() {
    function e() {}
    var t = e.prototype;
    return t.observe = function() {}, t.unobserve = function() {}, t.disconnect = function() {}, e;
}();
function throttle(e, t) {
    var n = 0;
    return function() {
        for(var a = this, r = arguments.length, u = Array(r), i = 0; i < r; i++)u[i] = arguments[i];
        clearTimeout(n), n = window.setTimeout(function() {
            return e.apply(a, u);
        }, t);
    };
}
var MyResizeObserver = globalThis.ResizeObserver || FakeResizeObserver, hasResizeObserver = void 0 !== globalThis.ResizeObserver, useResizeObserver = hasResizeObserver, useWindowListener = !useResizeObserver;
function useSize(e, t) {
    void 0 === t && (t = !0);
    var n = React.useState({
        width: 0,
        height: 0
    }), a = n[0], r = n[1];
    React.useEffect({
        "useSize.useEffect": function() {
            if ("u" > typeof window && t) {
                var e = {
                    "useSize.useEffect.e": function() {
                        r({
                            width: window.innerWidth,
                            height: window.innerHeight
                        });
                    }
                }["useSize.useEffect.e"];
                return useWindowListener && (e(), window.addEventListener("resize", e)), ({
                    "useSize.useEffect": function() {
                        return window.removeEventListener("resize", e);
                    }
                })["useSize.useEffect"];
            }
        }
    }["useSize.useEffect"], []);
    var u = React.useRef(new MyResizeObserver(throttle({
        "useSize.useRef[u]": function(e) {
            useResizeObserver && r({
                width: e[e.length - 1].contentRect.width,
                height: e[e.length - 1].contentRect.height
            });
        }
    }["useSize.useRef[u]"], 0)));
    return React.useEffect({
        "useSize.useEffect": function() {
            var n = u.current;
            if (!t) return void n.disconnect();
            var a = e.current;
            return e.current && useResizeObserver && n.observe(e.current), ({
                "useSize.useEffect": function() {
                    n.disconnect(), a && useResizeObserver && n.unobserve(a);
                }
            })["useSize.useEffect"];
        }
    }["useSize.useEffect"], [
        e,
        u
    ]), a;
}
var defaultOptions = {
    useDevicePixelRatio: !0,
    fitCanvasToArtboardHeight: !1,
    useOffscreenRenderer: !0,
    shouldResizeCanvasToContainer: !0
};
function getOptions(e) {
    return Object.assign({}, defaultOptions, e);
}
function useResizeCanvas(e) {
    var t = e.riveLoaded, n = void 0 !== t && t, a = e.canvasElem, r = e.containerRef, u = e.options, i = e.onCanvasHasResized, o = e.artboardBounds, s = getOptions(void 0 === u ? {} : u), c = React.useState({
        height: 0,
        width: 0
    }), l = c[0], f = l.height, d = l.width, v = c[1], p = React.useState({
        height: 0,
        width: 0
    }), R = p[0], b = R.height, h = R.width, g = p[1], w = React.useState(!0), y = w[0], m = w[1], I = s.fitCanvasToArtboardHeight, V = s.shouldResizeCanvasToContainer, C = s.useDevicePixelRatio, O = s.customDevicePixelRatio, M = useSize(r, V), x = useDevicePixelRatio(O), E = null != o ? o : {}, P = E.maxX, _ = E.maxY, k = React.useCallback({
        "useResizeCanvas.useCallback[k]": function() {
            var e, t, n, a, u = null != (e = null == (n = r.current) ? void 0 : n.clientWidth) ? e : 0, i = null != (t = null == (a = r.current) ? void 0 : a.clientHeight) ? t : 0;
            return I && o ? {
                width: u,
                height: o.maxY / o.maxX * u
            } : {
                width: u,
                height: i
            };
        }
    }["useResizeCanvas.useCallback[k]"], [
        r,
        I,
        P,
        _
    ]);
    React.useEffect({
        "useResizeCanvas.useEffect": function() {
            if (V && r.current && n) {
                var e = k(), t = e.width, u = e.height, o = !1;
                if (a) {
                    var c = t !== d || u !== f;
                    if (s.fitCanvasToArtboardHeight && c && (r.current.style.height = u + "px", o = !0), s.useDevicePixelRatio) {
                        var l = t * x !== h || u * x !== b;
                        if (c || l) {
                            var p = x * t, R = x * u;
                            a.width = p, a.height = R, a.style.width = t + "px", a.style.height = u + "px", g({
                                width: p,
                                height: R
                            }), o = !0;
                        }
                    } else c && (a.width = t, a.height = u, g({
                        width: t,
                        height: u
                    }), o = !0);
                    v({
                        width: t,
                        height: u
                    });
                }
                i && (y || o) && i && i(), y && m(!1);
            }
        }
    }["useResizeCanvas.useEffect"], [
        a,
        r,
        M,
        x,
        k,
        y,
        m,
        b,
        h,
        f,
        d,
        i,
        V,
        I,
        C,
        n
    ]), React.useEffect({
        "useResizeCanvas.useEffect": function() {
            g({
                width: 0,
                height: 0
            });
        }
    }["useResizeCanvas.useEffect"], [
        a
    ]);
}
var FakeIntersectionObserver = /*#__PURE__*/ function() {
    function e() {}
    var t = e.prototype;
    return t.observe = function() {}, t.unobserve = function() {}, t.disconnect = function() {}, e;
}(), MyIntersectionObserver = globalThis.IntersectionObserver || FakeIntersectionObserver, ElementObserver = /*#__PURE__*/ function() {
    function e() {
        var e = this;
        this.elementsMap = new Map, this.onObserved = function(t) {
            t.forEach(function(t) {
                var n = e.elementsMap.get(t.target);
                n && n(t);
            });
        }, this.observer = new MyIntersectionObserver(this.onObserved);
    }
    var t = e.prototype;
    return t.registerCallback = function(e, t) {
        this.observer.observe(e), this.elementsMap.set(e, t);
    }, t.removeCallback = function(e) {
        this.observer.unobserve(e), this.elementsMap.delete(e);
    }, e;
}(), getObserver = function() {
    return observer || (observer = new ElementObserver), observer;
};
function useIntersectionObserver() {
    return {
        observe: React.useCallback({
            "useIntersectionObserver.useCallback": function(e, t) {
                getObserver().registerCallback(e, t);
            }
        }["useIntersectionObserver.useCallback"], []),
        unobserve: React.useCallback({
            "useIntersectionObserver.useCallback": function(e) {
                getObserver().removeCallback(e);
            }
        }["useIntersectionObserver.useCallback"], [])
    };
}
function _extends$1() {
    return (_extends$1 = Object.assign || function(e) {
        for(var t = 1; t < arguments.length; t++){
            var n = arguments[t];
            for(var a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
        }
        return e;
    }).apply(this, arguments);
}
function _object_without_properties_loose$1(e, t) {
    if (null == e) return {};
    var n, a, r = {}, u = Object.getOwnPropertyNames(e);
    for(a = 0; a < u.length; a++)n = u[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    return r;
}
function RiveComponent(e) {
    var t = e.setContainerRef, n = e.setCanvasRef, a = e.className, r = void 0 === a ? "" : a, u = e.style, i = e.children, o = _object_without_properties_loose$1(e, [
        "setContainerRef",
        "setCanvasRef",
        "className",
        "style",
        "children"
    ]), s = _extends$1({
        width: "100%",
        height: "100%"
    }, u);
    return /*#__PURE__*/ React__default.default.createElement("div", _extends$1({
        ref: t,
        className: r
    }, !r && {
        style: s
    }), /*#__PURE__*/ React__default.default.createElement("canvas", _extends$1({
        ref: n,
        style: {
            verticalAlign: "top",
            width: 0,
            height: 0
        }
    }, o), i));
}
function useRive(e, t) {
    void 0 === t && (t = {});
    var n = React.useState(null), a = n[0], r = n[1], u = React.useRef(null), i = React.useRef(null), o = React.useState(null), s = o[0], c = o[1], l = !!e, f = getOptions(t), d = useDevicePixelRatio(), v = React.useCallback({
        "useRive.useCallback[v]": function() {
            if (s) {
                if (s.layout && s.layout.fit === canvas.Fit.Layout && a) {
                    var e = d * s.layout.layoutScaleFactor;
                    s.devicePixelRatioUsed = d, s.artboardWidth = (null == a ? void 0 : a.width) / e, s.artboardHeight = (null == a ? void 0 : a.height) / e;
                }
                s.startRendering(), s.resizeToCanvas();
            }
        }
    }["useRive.useCallback[v]"], [
        s,
        d
    ]);
    useResizeCanvas({
        riveLoaded: !!s,
        canvasElem: a,
        containerRef: u,
        options: f,
        onCanvasHasResized: v,
        artboardBounds: null == s ? void 0 : s.bounds
    });
    var p = React.useCallback({
        "useRive.useCallback[p]": function(e) {
            null === e && a && (a.height = 0, a.width = 0), r(e);
        }
    }["useRive.useCallback[p]"], []);
    React.useEffect({
        "useRive.useEffect": function() {
            if (a && e) {
                var t, n = null != s;
                if (null == s) {
                    var r = f.useOffscreenRenderer, u = e.onRiveReady, o = _object_without_properties_loose$1(e, [
                        "onRiveReady"
                    ]);
                    t = new canvas.Rive(_extends$1({
                        useOffscreenRenderer: r
                    }, o, {
                        canvas: a
                    })), null != i.current && i.current.cleanup(), i.current = t, t.on(canvas.EventType.Load, {
                        "useRive.useEffect": function() {
                            n = !0, u && u(t), a ? c(t) : t.cleanup();
                        }
                    }["useRive.useEffect"]);
                }
                return ({
                    "useRive.useEffect": function() {
                        n || null == t || t.cleanup();
                    }
                })["useRive.useEffect"];
            }
        }
    }["useRive.useEffect"], [
        a,
        l,
        s
    ]);
    var R = React.useCallback({
        "useRive.useCallback[R]": function(e) {
            u.current = e;
        }
    }["useRive.useCallback[R]"], []), b = useIntersectionObserver(), h = b.observe, g = b.unobserve;
    React.useEffect({
        "useRive.useEffect": function() {
            var e, t = !1, n = {
                "useRive.useEffect.n": function() {
                    if (a && t) {
                        var e = a.getBoundingClientRect();
                        e.width > 0 && e.height > 0 && e.top < (window.innerHeight || document.documentElement.clientHeight) && e.bottom > 0 && e.left < (window.innerWidth || document.documentElement.clientWidth) && e.right > 0 && (null == s || s.startRendering(), t = !1);
                    }
                }
            }["useRive.useEffect.n"];
            return a && !1 !== f.shouldUseIntersectionObserver && h(a, {
                "useRive.useEffect": function(a) {
                    a.isIntersecting ? s && s.startRendering() : s && s.stopRendering(), t = !a.isIntersecting, clearTimeout(e), a.isIntersecting || 0 !== a.boundingClientRect.width || (e = setTimeout(n, 10));
                }
            }["useRive.useEffect"]), ({
                "useRive.useEffect": function() {
                    a && g(a);
                }
            })["useRive.useEffect"];
        }
    }["useRive.useEffect"], [
        h,
        g,
        s,
        a,
        f.shouldUseIntersectionObserver
    ]), React.useEffect({
        "useRive.useEffect": function() {
            return ({
                "useRive.useEffect": function() {
                    s && (s.cleanup(), c(null));
                }
            })["useRive.useEffect"];
        }
    }["useRive.useEffect"], [
        s,
        a
    ]), React.useEffect({
        "useRive.useEffect": function() {
            return ({
                "useRive.useEffect": function() {
                    null != i.current && i.current.cleanup();
                }
            })["useRive.useEffect"];
        }
    }["useRive.useEffect"], []);
    var w = null == e ? void 0 : e.animations;
    React.useEffect({
        "useRive.useEffect": function() {
            s && w && (s.isPlaying ? (s.stop(s.animationNames), s.play(w)) : s.isPaused && (s.stop(s.animationNames), s.pause(w)));
        }
    }["useRive.useEffect"], [
        w,
        s
    ]);
    var y = React.useCallback({
        "useRive.useCallback[y]": function(e) {
            return /*#__PURE__*/ React__default.default.createElement(RiveComponent, _extends$1({
                setContainerRef: R,
                setCanvasRef: p
            }, e));
        }
    }["useRive.useCallback[y]"], [
        p,
        R
    ]);
    return {
        canvas: a,
        container: u.current,
        setCanvasRef: p,
        setContainerRef: R,
        rive: s,
        RiveComponent: y
    };
}
function _object_without_properties_loose(e, t) {
    if (null == e) return {};
    var n, a, r = {}, u = Object.getOwnPropertyNames(e);
    for(a = 0; a < u.length; a++)n = u[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    return r;
}
var Rive = function(e) {
    var t = e.src, n = e.artboard, a = e.animations, r = e.stateMachines, u = e.layout, i = e.useOffscreenRenderer, o = e.shouldDisableRiveListeners, s = e.shouldResizeCanvasToContainer, c = e.automaticallyHandleEvents, l = e.children, f = _object_without_properties_loose(e, [
        "src",
        "artboard",
        "animations",
        "stateMachines",
        "layout",
        "useOffscreenRenderer",
        "shouldDisableRiveListeners",
        "shouldResizeCanvasToContainer",
        "automaticallyHandleEvents",
        "children"
    ]), d = useRive({
        src: t,
        artboard: n,
        animations: a,
        layout: u,
        stateMachines: r,
        autoplay: !0,
        shouldDisableRiveListeners: void 0 !== o && o,
        automaticallyHandleEvents: void 0 !== c && c
    }, {
        useOffscreenRenderer: void 0 === i || i,
        shouldResizeCanvasToContainer: void 0 === s || s
    }).RiveComponent;
    return /*#__PURE__*/ React__default.default.createElement(d, f, l);
};
function useStateMachineInput(e, t, n, a) {
    var r = React.useState(null), u = r[0], i = r[1];
    return React.useEffect({
        "useStateMachineInput.useEffect": function() {
            var r = {
                "useStateMachineInput.useEffect.r": function() {
                    if (e && t && n || i(null), e && t && n) {
                        var r = e.stateMachineInputs(t);
                        if (r) {
                            var u = r.find({
                                "useStateMachineInput.useEffect.r.u": function(e) {
                                    return e.name === n;
                                }
                            }["useStateMachineInput.useEffect.r.u"]);
                            void 0 !== a && u && (u.value = a), i(u || null);
                        }
                    } else i(null);
                }
            }["useStateMachineInput.useEffect.r"];
            r(), e && e.on(canvas.EventType.Load, {
                "useStateMachineInput.useEffect": function() {
                    r();
                }
            }["useStateMachineInput.useEffect"]);
        }
    }["useStateMachineInput.useEffect"], [
        e
    ]), u;
}
function useViewModel(e, t) {
    var n = null != t ? t : {}, a = n.name, r = n.useDefault, u = React.useState(null), i = u[0], o = u[1];
    return React.useEffect({
        "useViewModel.useEffect": function() {
            var t = {
                "useViewModel.useEffect.t": function() {
                    if (!e) return void o(null);
                    var t = null;
                    o(t = null != a ? (null == e.viewModelByName ? void 0 : e.viewModelByName.call(e, a)) || null : e.defaultViewModel() || null);
                }
            }["useViewModel.useEffect.t"];
            return t(), e && e.on(canvas.EventType.Load, t), ({
                "useViewModel.useEffect": function() {
                    e && e.off(canvas.EventType.Load, t);
                }
            })["useViewModel.useEffect"];
        }
    }["useViewModel.useEffect"], [
        e,
        a,
        void 0 !== r && r
    ]), i;
}
function useViewModelInstance(e, t) {
    var n = null != t ? t : {}, a = n.name, r = n.useDefault, u = void 0 !== r && r, i = n.useNew, o = void 0 !== i && i, s = n.rive, c = React.useState(null), l = c[0], f = c[1];
    return React.useEffect({
        "useViewModelInstance.useEffect": function() {
            if (!e) return void f(null);
            var t = null;
            f(t = null != a ? e.instanceByName(a) || null : u ? (null == e.defaultInstance ? void 0 : e.defaultInstance.call(e)) || null : o ? (null == e.instance ? void 0 : e.instance.call(e)) || null : (null == e.defaultInstance ? void 0 : e.defaultInstance.call(e)) || null), s && t && s.viewModelInstance !== t && s.bindViewModelInstance(t);
        }
    }["useViewModelInstance.useEffect"], [
        e,
        a,
        u,
        o,
        s
    ]), l;
}
function _extends() {
    return (_extends = Object.assign || function(e) {
        for(var t = 1; t < arguments.length; t++){
            var n = arguments[t];
            for(var a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
        }
        return e;
    }).apply(this, arguments);
}
function useViewModelInstanceProperty(e, t, n) {
    var a = React.useState(null), r = a[0], u = a[1], i = React.useState(n.defaultValue), o = i[0], s = i[1], c = React.useState(null), l = c[0], f = c[1], d = React.useRef(null), v = React.useRef(e), p = React.useRef(n);
    React.useEffect({
        "useViewModelInstanceProperty.useEffect": function() {
            p.current = n;
        }
    }["useViewModelInstanceProperty.useEffect"], [
        n
    ]);
    var R = React.useCallback({
        "useViewModelInstanceProperty.useCallback[R]": function() {
            var e = d.current, t = v.current, n = p.current;
            if (!e || !t) return u(null), s(n.defaultValue), f(null), ({
                "useViewModelInstanceProperty.useCallback[R]": function() {}
            })["useViewModelInstanceProperty.useCallback[R]"];
            var a = n.getProperty(e, t);
            if (a) {
                u(a), s(n.getValue(a)), n.getExtendedData && f(n.getExtendedData(a));
                var r = {
                    "useViewModelInstanceProperty.useCallback[R].r": function() {
                        s(n.getValue(a)), n.getExtendedData && f(n.getExtendedData(a)), n.onPropertyEvent && n.onPropertyEvent();
                    }
                }["useViewModelInstanceProperty.useCallback[R].r"];
                return a.on(r), ({
                    "useViewModelInstanceProperty.useCallback[R]": function() {
                        a.off(r);
                    }
                })["useViewModelInstanceProperty.useCallback[R]"];
            }
            return ({
                "useViewModelInstanceProperty.useCallback[R]": function() {}
            })["useViewModelInstanceProperty.useCallback[R]"];
        }
    }["useViewModelInstanceProperty.useCallback[R]"], []);
    React.useEffect({
        "useViewModelInstanceProperty.useEffect": function() {
            return d.current = t, v.current = e, R();
        }
    }["useViewModelInstanceProperty.useEffect"], [
        t,
        e,
        R
    ]);
    var b = React.useCallback({
        "useViewModelInstanceProperty.useCallback[b]": function(e) {
            if (r && d.current === t) try {
                e(r), p.current.getExtendedData && f(p.current.getExtendedData(r));
                return;
            } catch (e) {}
            if (d.current) try {
                var n = p.current.getProperty(d.current, v.current);
                n && (u(n), e(n), p.current.getExtendedData && f(p.current.getExtendedData(n)));
            } catch (e) {}
        }
    }["useViewModelInstanceProperty.useCallback[b]"], [
        r,
        t
    ]), h = React.useMemo({
        "useViewModelInstanceProperty.useMemo[h]": function() {
            return p.current.buildPropertyOperations(b);
        }
    }["useViewModelInstanceProperty.useMemo[h]"], [
        b
    ]), g = _extends({
        value: o
    }, h);
    return n.getExtendedData && (g.extendedData = l), g;
}
function useViewModelInstanceNumber(e, t) {
    var n = useViewModelInstanceProperty(e, t, {
        getProperty: React.useCallback({
            "useViewModelInstanceNumber.useViewModelInstanceProperty[n]": function(e, t) {
                return e.number(t);
            }
        }["useViewModelInstanceNumber.useViewModelInstanceProperty[n]"], []),
        getValue: React.useCallback({
            "useViewModelInstanceNumber.useViewModelInstanceProperty[n]": function(e) {
                return e.value;
            }
        }["useViewModelInstanceNumber.useViewModelInstanceProperty[n]"], []),
        defaultValue: null,
        buildPropertyOperations: React.useCallback({
            "useViewModelInstanceNumber.useViewModelInstanceProperty[n]": function(e) {
                return {
                    setValue: ({
                        "useViewModelInstanceNumber.useViewModelInstanceProperty[n]": function(t) {
                            e({
                                "useViewModelInstanceNumber.useViewModelInstanceProperty[n]": function(e) {
                                    e.value = t;
                                }
                            }["useViewModelInstanceNumber.useViewModelInstanceProperty[n]"]);
                        }
                    })["useViewModelInstanceNumber.useViewModelInstanceProperty[n]"]
                };
            }
        }["useViewModelInstanceNumber.useViewModelInstanceProperty[n]"], [])
    });
    return {
        value: n.value,
        setValue: n.setValue
    };
}
function useViewModelInstanceString(e, t) {
    var n = useViewModelInstanceProperty(e, t, {
        getProperty: React.useCallback({
            "useViewModelInstanceString.useViewModelInstanceProperty[n]": function(e, t) {
                return e.string(t);
            }
        }["useViewModelInstanceString.useViewModelInstanceProperty[n]"], []),
        getValue: React.useCallback({
            "useViewModelInstanceString.useViewModelInstanceProperty[n]": function(e) {
                return e.value;
            }
        }["useViewModelInstanceString.useViewModelInstanceProperty[n]"], []),
        defaultValue: null,
        buildPropertyOperations: React.useCallback({
            "useViewModelInstanceString.useViewModelInstanceProperty[n]": function(e) {
                return {
                    setValue: ({
                        "useViewModelInstanceString.useViewModelInstanceProperty[n]": function(t) {
                            e({
                                "useViewModelInstanceString.useViewModelInstanceProperty[n]": function(e) {
                                    e.value = t;
                                }
                            }["useViewModelInstanceString.useViewModelInstanceProperty[n]"]);
                        }
                    })["useViewModelInstanceString.useViewModelInstanceProperty[n]"]
                };
            }
        }["useViewModelInstanceString.useViewModelInstanceProperty[n]"], [])
    });
    return {
        value: n.value,
        setValue: n.setValue
    };
}
function useViewModelInstanceBoolean(e, t) {
    var n = useViewModelInstanceProperty(e, t, {
        getProperty: React.useCallback({
            "useViewModelInstanceBoolean.useViewModelInstanceProperty[n]": function(e, t) {
                return e.boolean(t);
            }
        }["useViewModelInstanceBoolean.useViewModelInstanceProperty[n]"], []),
        getValue: React.useCallback({
            "useViewModelInstanceBoolean.useViewModelInstanceProperty[n]": function(e) {
                return e.value;
            }
        }["useViewModelInstanceBoolean.useViewModelInstanceProperty[n]"], []),
        defaultValue: null,
        buildPropertyOperations: React.useCallback({
            "useViewModelInstanceBoolean.useViewModelInstanceProperty[n]": function(e) {
                return {
                    setValue: ({
                        "useViewModelInstanceBoolean.useViewModelInstanceProperty[n]": function(t) {
                            e({
                                "useViewModelInstanceBoolean.useViewModelInstanceProperty[n]": function(e) {
                                    e.value = t;
                                }
                            }["useViewModelInstanceBoolean.useViewModelInstanceProperty[n]"]);
                        }
                    })["useViewModelInstanceBoolean.useViewModelInstanceProperty[n]"]
                };
            }
        }["useViewModelInstanceBoolean.useViewModelInstanceProperty[n]"], [])
    });
    return {
        value: n.value,
        setValue: n.setValue
    };
}
function useViewModelInstanceColor(e, t) {
    var n = useViewModelInstanceProperty(e, t, {
        getProperty: React.useCallback({
            "useViewModelInstanceColor.useViewModelInstanceProperty[n]": function(e, t) {
                return e.color(t);
            }
        }["useViewModelInstanceColor.useViewModelInstanceProperty[n]"], []),
        getValue: React.useCallback({
            "useViewModelInstanceColor.useViewModelInstanceProperty[n]": function(e) {
                return e.value;
            }
        }["useViewModelInstanceColor.useViewModelInstanceProperty[n]"], []),
        defaultValue: null,
        buildPropertyOperations: React.useCallback({
            "useViewModelInstanceColor.useViewModelInstanceProperty[n]": function(e) {
                return {
                    setValue: ({
                        "useViewModelInstanceColor.useViewModelInstanceProperty[n]": function(t) {
                            e({
                                "useViewModelInstanceColor.useViewModelInstanceProperty[n]": function(e) {
                                    e.value = t;
                                }
                            }["useViewModelInstanceColor.useViewModelInstanceProperty[n]"]);
                        }
                    })["useViewModelInstanceColor.useViewModelInstanceProperty[n]"],
                    setRgb: ({
                        "useViewModelInstanceColor.useViewModelInstanceProperty[n]": function(t, n, a) {
                            e({
                                "useViewModelInstanceColor.useViewModelInstanceProperty[n]": function(e) {
                                    e.rgb(t, n, a);
                                }
                            }["useViewModelInstanceColor.useViewModelInstanceProperty[n]"]);
                        }
                    })["useViewModelInstanceColor.useViewModelInstanceProperty[n]"],
                    setRgba: ({
                        "useViewModelInstanceColor.useViewModelInstanceProperty[n]": function(t, n, a, r) {
                            e({
                                "useViewModelInstanceColor.useViewModelInstanceProperty[n]": function(e) {
                                    e.rgba(t, n, a, r);
                                }
                            }["useViewModelInstanceColor.useViewModelInstanceProperty[n]"]);
                        }
                    })["useViewModelInstanceColor.useViewModelInstanceProperty[n]"],
                    setAlpha: ({
                        "useViewModelInstanceColor.useViewModelInstanceProperty[n]": function(t) {
                            e({
                                "useViewModelInstanceColor.useViewModelInstanceProperty[n]": function(e) {
                                    e.alpha(t);
                                }
                            }["useViewModelInstanceColor.useViewModelInstanceProperty[n]"]);
                        }
                    })["useViewModelInstanceColor.useViewModelInstanceProperty[n]"],
                    setOpacity: ({
                        "useViewModelInstanceColor.useViewModelInstanceProperty[n]": function(t) {
                            e({
                                "useViewModelInstanceColor.useViewModelInstanceProperty[n]": function(e) {
                                    e.opacity(t);
                                }
                            }["useViewModelInstanceColor.useViewModelInstanceProperty[n]"]);
                        }
                    })["useViewModelInstanceColor.useViewModelInstanceProperty[n]"]
                };
            }
        }["useViewModelInstanceColor.useViewModelInstanceProperty[n]"], [])
    });
    return {
        value: n.value,
        setValue: n.setValue,
        setRgb: n.setRgb,
        setRgba: n.setRgba,
        setAlpha: n.setAlpha,
        setOpacity: n.setOpacity
    };
}
function useViewModelInstanceEnum(e, t) {
    var n = useViewModelInstanceProperty(e, t, {
        getProperty: React.useCallback({
            "useViewModelInstanceEnum.useViewModelInstanceProperty[n]": function(e, t) {
                return e.enum(t);
            }
        }["useViewModelInstanceEnum.useViewModelInstanceProperty[n]"], []),
        getValue: React.useCallback({
            "useViewModelInstanceEnum.useViewModelInstanceProperty[n]": function(e) {
                return e.value;
            }
        }["useViewModelInstanceEnum.useViewModelInstanceProperty[n]"], []),
        defaultValue: null,
        getExtendedData: React.useCallback({
            "useViewModelInstanceEnum.useViewModelInstanceProperty[n]": function(e) {
                return e.values;
            }
        }["useViewModelInstanceEnum.useViewModelInstanceProperty[n]"], []),
        buildPropertyOperations: React.useCallback({
            "useViewModelInstanceEnum.useViewModelInstanceProperty[n]": function(e) {
                return {
                    setValue: ({
                        "useViewModelInstanceEnum.useViewModelInstanceProperty[n]": function(t) {
                            e({
                                "useViewModelInstanceEnum.useViewModelInstanceProperty[n]": function(e) {
                                    e.value = t;
                                }
                            }["useViewModelInstanceEnum.useViewModelInstanceProperty[n]"]);
                        }
                    })["useViewModelInstanceEnum.useViewModelInstanceProperty[n]"]
                };
            }
        }["useViewModelInstanceEnum.useViewModelInstanceProperty[n]"], [])
    });
    return {
        value: n.value,
        values: n.extendedData || [],
        setValue: n.setValue
    };
}
function useViewModelInstanceTrigger(e, t, n) {
    var a = (null != n ? n : {}).onTrigger;
    return {
        trigger: useViewModelInstanceProperty(e, t, {
            getProperty: React.useCallback({
                "useViewModelInstanceTrigger.useViewModelInstanceProperty.useCallback": function(e, t) {
                    return e.trigger(t);
                }
            }["useViewModelInstanceTrigger.useViewModelInstanceProperty.useCallback"], []),
            getValue: React.useCallback({
                "useViewModelInstanceTrigger.useViewModelInstanceProperty.useCallback": function() {}
            }["useViewModelInstanceTrigger.useViewModelInstanceProperty.useCallback"], []),
            defaultValue: null,
            onPropertyEvent: a,
            buildPropertyOperations: React.useCallback({
                "useViewModelInstanceTrigger.useViewModelInstanceProperty.useCallback": function(e) {
                    return {
                        trigger: ({
                            "useViewModelInstanceTrigger.useViewModelInstanceProperty.useCallback": function() {
                                e({
                                    "useViewModelInstanceTrigger.useViewModelInstanceProperty.useCallback": function(e) {
                                        e.trigger();
                                    }
                                }["useViewModelInstanceTrigger.useViewModelInstanceProperty.useCallback"]);
                            }
                        })["useViewModelInstanceTrigger.useViewModelInstanceProperty.useCallback"]
                    };
                }
            }["useViewModelInstanceTrigger.useViewModelInstanceProperty.useCallback"], [])
        }).trigger
    };
}
function useViewModelInstanceImage(e, t) {
    return {
        setValue: useViewModelInstanceProperty(e, t, {
            getProperty: React.useCallback({
                "useViewModelInstanceImage.useViewModelInstanceProperty.useCallback": function(e, t) {
                    return e.image(t);
                }
            }["useViewModelInstanceImage.useViewModelInstanceProperty.useCallback"], []),
            getValue: React.useCallback({
                "useViewModelInstanceImage.useViewModelInstanceProperty.useCallback": function() {}
            }["useViewModelInstanceImage.useViewModelInstanceProperty.useCallback"], []),
            defaultValue: null,
            buildPropertyOperations: React.useCallback({
                "useViewModelInstanceImage.useViewModelInstanceProperty.useCallback": function(e) {
                    return {
                        setValue: ({
                            "useViewModelInstanceImage.useViewModelInstanceProperty.useCallback": function(t) {
                                e({
                                    "useViewModelInstanceImage.useViewModelInstanceProperty.useCallback": function(e) {
                                        e.value = t;
                                    }
                                }["useViewModelInstanceImage.useViewModelInstanceProperty.useCallback"]);
                            }
                        })["useViewModelInstanceImage.useViewModelInstanceProperty.useCallback"]
                    };
                }
            }["useViewModelInstanceImage.useViewModelInstanceProperty.useCallback"], [])
        }).setValue
    };
}
function useViewModelInstanceList(e, t) {
    var n, a = React.useState(0)[1], r = useViewModelInstanceProperty(e, t, {
        getProperty: React.useCallback({
            "useViewModelInstanceList.useViewModelInstanceProperty[r]": function(e, t) {
                return e.list(t);
            }
        }["useViewModelInstanceList.useViewModelInstanceProperty[r]"], []),
        getValue: React.useCallback({
            "useViewModelInstanceList.useViewModelInstanceProperty[r]": function(e) {
                return e.length;
            }
        }["useViewModelInstanceList.useViewModelInstanceProperty[r]"], []),
        defaultValue: null,
        onPropertyEvent: {
            "useViewModelInstanceList.useViewModelInstanceProperty[r]": function() {
                a({
                    "useViewModelInstanceList.useViewModelInstanceProperty[r]": function(e) {
                        return e + 1;
                    }
                }["useViewModelInstanceList.useViewModelInstanceProperty[r]"]);
            }
        }["useViewModelInstanceList.useViewModelInstanceProperty[r]"],
        buildPropertyOperations: React.useCallback({
            "useViewModelInstanceList.useViewModelInstanceProperty[r]": function(e) {
                return {
                    addInstance: ({
                        "useViewModelInstanceList.useViewModelInstanceProperty[r]": function(t) {
                            e({
                                "useViewModelInstanceList.useViewModelInstanceProperty[r]": function(e) {
                                    return e.addInstance(t);
                                }
                            }["useViewModelInstanceList.useViewModelInstanceProperty[r]"]);
                        }
                    })["useViewModelInstanceList.useViewModelInstanceProperty[r]"],
                    addInstanceAt: ({
                        "useViewModelInstanceList.useViewModelInstanceProperty[r]": function(t, n) {
                            var a = !1;
                            return e({
                                "useViewModelInstanceList.useViewModelInstanceProperty[r]": function(e) {
                                    a = e.addInstanceAt(t, n);
                                }
                            }["useViewModelInstanceList.useViewModelInstanceProperty[r]"]), a;
                        }
                    })["useViewModelInstanceList.useViewModelInstanceProperty[r]"],
                    removeInstance: ({
                        "useViewModelInstanceList.useViewModelInstanceProperty[r]": function(t) {
                            e({
                                "useViewModelInstanceList.useViewModelInstanceProperty[r]": function(e) {
                                    return e.removeInstance(t);
                                }
                            }["useViewModelInstanceList.useViewModelInstanceProperty[r]"]);
                        }
                    })["useViewModelInstanceList.useViewModelInstanceProperty[r]"],
                    removeInstanceAt: ({
                        "useViewModelInstanceList.useViewModelInstanceProperty[r]": function(t) {
                            e({
                                "useViewModelInstanceList.useViewModelInstanceProperty[r]": function(e) {
                                    return e.removeInstanceAt(t);
                                }
                            }["useViewModelInstanceList.useViewModelInstanceProperty[r]"]);
                        }
                    })["useViewModelInstanceList.useViewModelInstanceProperty[r]"],
                    getInstanceAt: ({
                        "useViewModelInstanceList.useViewModelInstanceProperty[r]": function(t) {
                            var n = null;
                            return e({
                                "useViewModelInstanceList.useViewModelInstanceProperty[r]": function(e) {
                                    n = e.instanceAt(t);
                                }
                            }["useViewModelInstanceList.useViewModelInstanceProperty[r]"]), n;
                        }
                    })["useViewModelInstanceList.useViewModelInstanceProperty[r]"],
                    swap: ({
                        "useViewModelInstanceList.useViewModelInstanceProperty[r]": function(t, n) {
                            e({
                                "useViewModelInstanceList.useViewModelInstanceProperty[r]": function(e) {
                                    return e.swap(t, n);
                                }
                            }["useViewModelInstanceList.useViewModelInstanceProperty[r]"]);
                        }
                    })["useViewModelInstanceList.useViewModelInstanceProperty[r]"]
                };
            }
        }["useViewModelInstanceList.useViewModelInstanceProperty[r]"], [])
    });
    return {
        length: null != (n = r.value) ? n : 0,
        addInstance: r.addInstance,
        addInstanceAt: r.addInstanceAt,
        removeInstance: r.removeInstance,
        removeInstanceAt: r.removeInstanceAt,
        getInstanceAt: r.getInstanceAt,
        swap: r.swap
    };
}
function asyncGeneratorStep(e, t, n, a, r, u, i) {
    try {
        var o = e[u](i), s = o.value;
    } catch (e) {
        n(e);
        return;
    }
    o.done ? t(s) : Promise.resolve(s).then(a, r);
}
function _async_to_generator(e) {
    return function() {
        var t = this, n = arguments;
        return new Promise(function(a, r) {
            var u = e.apply(t, n);
            function i(e) {
                asyncGeneratorStep(u, a, r, i, o, "next", e);
            }
            function o(e) {
                asyncGeneratorStep(u, a, r, i, o, "throw", e);
            }
            i(void 0);
        });
    };
}
function _ts_generator(e, t) {
    var n, a, r, u = {
        label: 0,
        sent: function() {
            if (1 & r[0]) throw r[1];
            return r[1];
        },
        trys: [],
        ops: []
    }, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype), o = Object.defineProperty;
    return o(i, "next", {
        value: s(0)
    }), o(i, "throw", {
        value: s(1)
    }), o(i, "return", {
        value: s(2)
    }), "function" == typeof Symbol && o(i, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), i;
    //TURBOPACK unreachable
    ;
    function s(o) {
        return function(s) {
            var c = [
                o,
                s
            ];
            if (n) throw TypeError("Generator is already executing.");
            for(; i && (i = 0, c[0] && (u = 0)), u;)try {
                if (n = 1, a && (r = 2 & c[0] ? a.return : c[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, c[1])).done) return r;
                switch(a = 0, r && (c = [
                    2 & c[0],
                    r.value
                ]), c[0]){
                    case 0:
                    case 1:
                        r = c;
                        break;
                    case 4:
                        return u.label++, {
                            value: c[1],
                            done: !1
                        };
                    case 5:
                        u.label++, a = c[1], c = [
                            0
                        ];
                        continue;
                    case 7:
                        c = u.ops.pop(), u.trys.pop();
                        continue;
                    default:
                        if (!(r = (r = u.trys).length > 0 && r[r.length - 1]) && (6 === c[0] || 2 === c[0])) {
                            u = 0;
                            continue;
                        }
                        if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                            u.label = c[1];
                            break;
                        }
                        if (6 === c[0] && u.label < r[1]) {
                            u.label = r[1], r = c;
                            break;
                        }
                        if (r && u.label < r[2]) {
                            u.label = r[2], u.ops.push(c);
                            break;
                        }
                        r[2] && u.ops.pop(), u.trys.pop();
                        continue;
                }
                c = t.call(e, u);
            } catch (e) {
                c = [
                    6,
                    e
                ], a = 0;
            } finally{
                n = r = 0;
            }
            if (5 & c[0]) throw c[1];
            return {
                value: c[0] ? c[1] : void 0,
                done: !0
            };
        };
    }
}
function useRiveFile(e) {
    var t = React.useState(null), n = t[0], a = t[1], r = React.useState("idle"), u = r[0], i = r[1];
    return React.useEffect({
        "useRiveFile.useEffect": function() {
            var t = null;
            return _async_to_generator({
                "useRiveFile.useEffect": function() {
                    return _ts_generator(this, {
                        "useRiveFile.useEffect": function(n) {
                            try {
                                i("loading"), (t = new canvas.RiveFile(e)).init(), t.on(canvas.EventType.Load, {
                                    "useRiveFile.useEffect": function() {
                                        null == t || t.getInstance(), a(t), i("success");
                                    }
                                }["useRiveFile.useEffect"]), t.on(canvas.EventType.LoadError, {
                                    "useRiveFile.useEffect": function() {
                                        i("failed");
                                    }
                                }["useRiveFile.useEffect"]), a(t);
                            } catch (e) {
                                console.error(e), i("failed");
                            }
                            return [
                                2
                            ];
                        }
                    }["useRiveFile.useEffect"]);
                }
            }["useRiveFile.useEffect"])(), ({
                "useRiveFile.useEffect": function() {
                    null == t || t.cleanup();
                }
            })["useRiveFile.useEffect"];
        }
    }["useRiveFile.useEffect"], [
        e.src,
        e.buffer
    ]), {
        riveFile: n,
        status: u
    };
}
function useViewModelInstanceArtboard(e, t) {
    return {
        setValue: useViewModelInstanceProperty(e, t, {
            getProperty: React.useCallback({
                "useViewModelInstanceArtboard.useViewModelInstanceProperty.useCallback": function(e, t) {
                    return e.artboard(t);
                }
            }["useViewModelInstanceArtboard.useViewModelInstanceProperty.useCallback"], []),
            getValue: React.useCallback({
                "useViewModelInstanceArtboard.useViewModelInstanceProperty.useCallback": function() {}
            }["useViewModelInstanceArtboard.useViewModelInstanceProperty.useCallback"], []),
            defaultValue: null,
            buildPropertyOperations: React.useCallback({
                "useViewModelInstanceArtboard.useViewModelInstanceProperty.useCallback": function(e) {
                    return {
                        setValue: ({
                            "useViewModelInstanceArtboard.useViewModelInstanceProperty.useCallback": function(t) {
                                e({
                                    "useViewModelInstanceArtboard.useViewModelInstanceProperty.useCallback": function(e) {
                                        e.value = t;
                                    }
                                }["useViewModelInstanceArtboard.useViewModelInstanceProperty.useCallback"]);
                            }
                        })["useViewModelInstanceArtboard.useViewModelInstanceProperty.useCallback"]
                    };
                }
            }["useViewModelInstanceArtboard.useViewModelInstanceProperty.useCallback"], [])
        }).setValue
    };
}
exports.default = Rive, exports.useResizeCanvas = useResizeCanvas, exports.useRive = useRive, exports.useRiveFile = useRiveFile, exports.useStateMachineInput = useStateMachineInput, exports.useViewModel = useViewModel, exports.useViewModelInstance = useViewModelInstance, exports.useViewModelInstanceArtboard = useViewModelInstanceArtboard, exports.useViewModelInstanceBoolean = useViewModelInstanceBoolean, exports.useViewModelInstanceColor = useViewModelInstanceColor, exports.useViewModelInstanceEnum = useViewModelInstanceEnum, exports.useViewModelInstanceImage = useViewModelInstanceImage, exports.useViewModelInstanceList = useViewModelInstanceList, exports.useViewModelInstanceNumber = useViewModelInstanceNumber, exports.useViewModelInstanceString = useViewModelInstanceString, exports.useViewModelInstanceTrigger = useViewModelInstanceTrigger, Object.keys(canvas).forEach(function(e) {
    "default" === e || exports.hasOwnProperty(e) || Object.defineProperty(exports, e, {
        enumerable: !0,
        get: function() {
            return canvas[e];
        }
    });
});
}),
"[project]/my-react-app/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/my-react-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "disableSmoothScrollDuringRouteTransition", {
    enumerable: true,
    get: function() {
        return disableSmoothScrollDuringRouteTransition;
    }
});
const _warnonce = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
function disableSmoothScrollDuringRouteTransition(fn, options = {}) {
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const hasDataAttribute = htmlElement.dataset.scrollBehavior === 'smooth';
    if (!hasDataAttribute) {
        // Warn if smooth scrolling is detected but no data attribute is present
        if (("TURBOPACK compile-time value", "development") === 'development' && getComputedStyle(htmlElement).scrollBehavior === 'smooth') {
            (0, _warnonce.warnOnce)('Detected `scroll-behavior: smooth` on the `<html>` element. To disable smooth scrolling during route transitions, ' + 'add `data-scroll-behavior="smooth"` to your <html> element. ' + 'Learn more: https://nextjs.org/docs/messages/missing-data-scroll-behavior');
        }
        // No smooth scrolling configured, run directly without style manipulation
        fn();
        return;
    }
    // Proceed with temporarily disabling smooth scrolling
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
}
}),
"[project]/my-react-app/node_modules/next/dist/client/components/bfcache-state-manager.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/my-react-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useRouterBFCache", {
    enumerable: true,
    get: function() {
        return useRouterBFCache;
    }
});
const _react = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// When the flag is disabled, only track the currently active tree
const MAX_BF_CACHE_ENTRIES = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1;
function useRouterBFCache(activeTree, activeCacheNode, activeStateKey) {
    // The currently active entry. The entries form a linked list, sorted in
    // order of most recently active. This allows us to reuse parts of the list
    // without cloning, unless there's a reordering or removal.
    // TODO: Once we start tracking back/forward history at each route level,
    // we should use the history order instead. In other words, when traversing
    // to an existing entry as a result of a popstate event, we should maintain
    // the existing order instead of moving it to the front of the list. I think
    // an initial implementation of this could be to pass an incrementing id
    // to history.pushState/replaceState, then use that here for ordering.
    const [prevActiveEntry, setPrevActiveEntry] = (0, _react.useState)(()=>{
        const initialEntry = {
            tree: activeTree,
            cacheNode: activeCacheNode,
            stateKey: activeStateKey,
            next: null
        };
        return initialEntry;
    });
    if (prevActiveEntry.tree === activeTree) {
        // Fast path. The active tree hasn't changed, so we can reuse the
        // existing state.
        return prevActiveEntry;
    }
    // The route tree changed. Note that this doesn't mean that the tree changed
    // *at this level* — the change may be due to a child route. Either way, we
    // need to either add or update the router tree in the bfcache.
    //
    // The rest of the code looks more complicated than it actually is because we
    // can't mutate the state in place; we have to copy-on-write.
    // Create a new entry for the active cache key. This is the head of the new
    // linked list.
    const newActiveEntry = {
        tree: activeTree,
        cacheNode: activeCacheNode,
        stateKey: activeStateKey,
        next: null
    };
    // We need to append the old list onto the new list. If the head of the new
    // list was already present in the cache, then we'll need to clone everything
    // that came before it. Then we can reuse the rest.
    let n = 1;
    let oldEntry = prevActiveEntry;
    let clonedEntry = newActiveEntry;
    while(oldEntry !== null && n < MAX_BF_CACHE_ENTRIES){
        if (oldEntry.stateKey === activeStateKey) {
            // Fast path. This entry in the old list that corresponds to the key that
            // is now active. We've already placed a clone of this entry at the front
            // of the new list. We can reuse the rest of the old list without cloning.
            // NOTE: We don't need to worry about eviction in this case because we
            // haven't increased the size of the cache, and we assume the max size
            // is constant across renders. If we were to change it to a dynamic limit,
            // then the implementation would need to account for that.
            clonedEntry.next = oldEntry.next;
            break;
        } else {
            // Clone the entry and append it to the list.
            n++;
            const entry = {
                tree: oldEntry.tree,
                cacheNode: oldEntry.cacheNode,
                stateKey: oldEntry.stateKey,
                next: null
            };
            clonedEntry.next = entry;
            clonedEntry = entry;
        }
        oldEntry = oldEntry.next;
    }
    setPrevActiveEntry(newActiveEntry);
    return newActiveEntry;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/my-react-app/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/my-react-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    LoadingBoundaryProvider: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    LoadingBoundaryProvider: function() {
        return LoadingBoundaryProvider;
    },
    /**
 * OuterLayoutRouter handles the current segment as well as <Offscreen> rendering of other segments.
 * It can be rendered next to each other with a different `parallelRouterKey`, allowing for Parallel routes.
 */ default: function() {
        return OuterLayoutRouter;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/my-react-app/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/my-react-app/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _unresolvedthenable = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)");
const _errorboundary = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _disablesmoothscroll = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)");
const _redirectboundary = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)");
const _errorboundary1 = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _bfcachestatemanager = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/client/components/bfcache-state-manager.js [app-client] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
const enableNewScrollHandler = ("TURBOPACK compile-time value", false);
const __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _reactdom.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (typeof window === 'undefined') return null;
    // __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode is null during module init.
    // We need to lazily reference it.
    const internal_reactDOMfindDOMNode = __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode;
    return internal_reactDOMfindDOMNode(instance);
}
const rectProperties = [
    'bottom',
    'height',
    'left',
    'right',
    'top',
    'width',
    'x',
    'y'
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        'sticky',
        'fixed'
    ].includes(getComputedStyle(element).position)) {
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(instance, viewportHeight) {
    const rects = instance.getClientRects();
    if (rects.length === 0) {
        // Just to be explicit.
        return false;
    }
    let elementTop = Number.POSITIVE_INFINITY;
    for(let i = 0; i < rects.length; i++){
        const rect = rects[i];
        if (rect.top < elementTop) {
            elementTop = rect.top;
        }
    }
    return elementTop >= 0 && elementTop <= viewportHeight;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === 'top') {
        return document.body;
    }
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return document.getElementById(hashFragment) ?? // If the hash fragment is a name, the page has to scroll to the first element with that name.
    document.getElementsByName(hashFragment)[0];
}
class InnerScrollAndFocusHandlerOld extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        this.handlePotentialScroll();
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args), this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once.
            const { focusAndScrollRef, cacheNode } = this.props;
            const scrollRef = focusAndScrollRef.forceScroll ? focusAndScrollRef.scrollRef : cacheNode.scrollRef;
            if (scrollRef === null || !scrollRef.current) return;
            let domNode = null;
            const hashFragment = focusAndScrollRef.hashFragment;
            if (hashFragment) {
                domNode = getHashFragmentDomNode(hashFragment);
            }
            // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
            // This already caused a bug where the first child was a <link/> in head.
            if (!domNode) {
                domNode = findDOMNode(this);
            }
            // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
            if (!(domNode instanceof Element)) {
                return;
            }
            // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
            // If the element is skipped, try to select the next sibling and try again.
            while(!(domNode instanceof HTMLElement) || shouldSkipElement(domNode)){
                if ("TURBOPACK compile-time truthy", 1) {
                    if (domNode.parentElement?.localName === 'head') {
                    // We enter this state when metadata was rendered as part of the page or via Next.js.
                    // This is always a bug in Next.js and caused by React hoisting metadata.
                    // Fixed with `experimental.appNewScrollHandler`
                    }
                }
                // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                if (domNode.nextElementSibling === null) {
                    return;
                }
                domNode = domNode.nextElementSibling;
            }
            // Mark as scrolled so no other segment scrolls for this navigation.
            scrollRef.current = false;
            (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
                // In case of hash scroll, we only need to scroll the element into view
                if (hashFragment) {
                    domNode.scrollIntoView();
                    return;
                }
                // Store the current viewport height because reading `clientHeight` causes a reflow,
                // and it won't change during this function.
                const htmlElement = document.documentElement;
                const viewportHeight = htmlElement.clientHeight;
                // If the element's top edge is already in the viewport, exit early.
                if (topOfElementInViewport(domNode, viewportHeight)) {
                    return;
                }
                // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                htmlElement.scrollTop = 0;
                // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                if (!topOfElementInViewport(domNode, viewportHeight)) {
                    // Scroll into view doesn't scroll horizontally by default when not needed
                    domNode.scrollIntoView();
                }
            }, {
                // We will force layout by querying domNode position
                dontForceLayout: true,
                onlyHashChange: focusAndScrollRef.onlyHashChange
            });
            // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
            focusAndScrollRef.onlyHashChange = false;
            focusAndScrollRef.hashFragment = null;
            // Set focus on the element
            domNode.focus();
        };
    }
}
/**
 * Fork of InnerScrollAndFocusHandlerOld using Fragment refs for scrolling.
 * No longer focuses the first host descendant.
 */ function InnerScrollHandlerNew(props) {
    const childrenRef = _react.default.useRef(null);
    (0, _react.useLayoutEffect)(()=>{
        const { focusAndScrollRef, cacheNode } = props;
        const scrollRef = focusAndScrollRef.forceScroll ? focusAndScrollRef.scrollRef : cacheNode.scrollRef;
        if (scrollRef === null || !scrollRef.current) return;
        let instance = null;
        const hashFragment = focusAndScrollRef.hashFragment;
        if (hashFragment) {
            instance = getHashFragmentDomNode(hashFragment);
        }
        if (!instance) {
            instance = childrenRef.current;
        }
        // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
        if (instance === null) {
            return;
        }
        // Mark as scrolled so no other segment scrolls for this navigation.
        scrollRef.current = false;
        const activeElement = document.activeElement;
        if (activeElement !== null && 'blur' in activeElement && typeof activeElement.blur === 'function') {
            // Trying to match hard navigations.
            // Ideally we'd move the internal focus cursor either to the top
            // or at least before the segment. But there's no DOM API to do that,
            // so we just blur.
            // We could workaround this by moving focus to a temporary element in
            // the body. But adding elements might trigger layout or other effects
            // so it should be well motivated.
            activeElement.blur();
        }
        (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
            // In case of hash scroll, we only need to scroll the element into view
            if (hashFragment) {
                instance.scrollIntoView();
                return;
            }
            // Store the current viewport height because reading `clientHeight` causes a reflow,
            // and it won't change during this function.
            const htmlElement = document.documentElement;
            const viewportHeight = htmlElement.clientHeight;
            // If the element's top edge is already in the viewport, exit early.
            if (topOfElementInViewport(instance, viewportHeight)) {
                return;
            }
            // Otherwise, try scrolling go the top of the document to be backward compatible with pages
            // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
            // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
            // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
            htmlElement.scrollTop = 0;
            // Scroll to domNode if domNode is not in viewport when scrolled to top of document
            if (!topOfElementInViewport(instance, viewportHeight)) {
                // Scroll into view doesn't scroll horizontally by default when not needed
                instance.scrollIntoView();
            }
        }, {
            // We will force layout by querying domNode position
            dontForceLayout: true,
            onlyHashChange: focusAndScrollRef.onlyHashChange
        });
        // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
        focusAndScrollRef.onlyHashChange = false;
        focusAndScrollRef.hashFragment = null;
    }, // but be prepared for lots of manual testing.
    undefined);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Fragment, {
        ref: childrenRef,
        children: props.children
    });
}
const InnerScrollAndMaybeFocusHandler = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : InnerScrollAndFocusHandlerOld;
function ScrollAndMaybeFocusHandler({ children, cacheNode }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerScrollAndMaybeFocusHandler, {
        focusAndScrollRef: context.focusAndScrollRef,
        cacheNode: cacheNode,
        children: children
    });
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter({ tree, segmentPath, debugNameContext, cacheNode: maybeCacheNode, params, url, isActive }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    const parentNavPromises = (0, _react.useContext)(_hooksclientcontextsharedruntime.NavigationPromisesContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    const cacheNode = maybeCacheNode !== null ? maybeCacheNode : // This should only be reachable for inactive/hidden segments, during
    // prerendering The active segment should always be consistent with the
    // CacheNode tree. Regardless, if we don't have a matching CacheNode, we
    // must suspend rather than render nothing, to prevent showing an
    // inconsistent route.
    (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    // `rsc` represents the renderable node for this segment.
    // If this segment has a `prefetchRsc`, it's the statically prefetched data.
    // We should use that on initial render instead of `rsc`. Then we'll switch
    // to `rsc` when the dynamic response streams in.
    //
    // If no prefetch data is available, then we go straight to rendering `rsc`.
    const resolvedPrefetchRsc = cacheNode.prefetchRsc !== null ? cacheNode.prefetchRsc : cacheNode.rsc;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    const rsc = (0, _react.useDeferredValue)(cacheNode.rsc, resolvedPrefetchRsc);
    // `rsc` is either a React node or a promise for a React node, except we
    // special case `null` to represent that this segment's data is missing. If
    // it's a promise, we need to unwrap it so we can determine whether or not the
    // data is missing.
    let resolvedRsc;
    if ((0, _pprnavigations.isDeferredRsc)(rsc)) {
        const unwrappedRsc = (0, _react.use)(rsc);
        if (unwrappedRsc === null) {
            // If the promise was resolved to `null`, it means the data for this
            // segment was not returned by the server. Suspend indefinitely. When this
            // happens, the router is responsible for triggering a new state update to
            // un-suspend this segment.
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = unwrappedRsc;
    } else {
        // This is not a deferred RSC promise. Don't need to unwrap it.
        if (rsc === null) {
            (0, _react.use)(_unresolvedthenable.unresolvedThenable);
        }
        resolvedRsc = rsc;
    }
    // In dev, we create a NavigationPromisesContext containing the instrumented promises that provide
    // `useSelectedLayoutSegment` and `useSelectedLayoutSegments`.
    // Promises are cached outside of render to survive suspense retries.
    let navigationPromises = null;
    if ("TURBOPACK compile-time truthy", 1) {
        const { createNestedLayoutNavigationPromises } = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/client/components/navigation-devtools.js [app-client] (ecmascript)");
        navigationPromises = createNestedLayoutNavigationPromises(tree, parentNavPromises);
    }
    let children = resolvedRsc;
    if (navigationPromises) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.NavigationPromisesContext.Provider, {
            value: navigationPromises,
            children: resolvedRsc
        });
    }
    children = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: tree,
            parentCacheNode: cacheNode,
            parentSegmentPath: segmentPath,
            parentParams: params,
            // This is always set to null as we enter a child segment. It's
            // populated by LoadingBoundaryProvider the next time we reach a
            // loading boundary.
            parentLoadingData: null,
            debugNameContext: debugNameContext,
            // TODO-APP: overriding of url for parallel routes
            url: url,
            isActive: isActive
        },
        children: children
    });
    return children;
}
function LoadingBoundaryProvider({ loading, children }) {
    // Provides the data needed to render a loading.tsx boundary, via context.
    //
    // loading.tsx creates a Suspense boundary around each of a layout's child
    // slots. (Might be bit confusing to think about the data flow, but: if
    // loading.tsx and layout.tsx are in the same directory, they are assigned
    // to the same CacheNode.)
    //
    // This provider component does not render the Suspense boundary directly;
    // that's handled by LoadingBoundary.
    //
    // TODO: For simplicity, we should combine this provider with LoadingBoundary
    // and render the Suspense boundary directly. The only real benefit of doing
    // it separately is so that when there are multiple parallel routes, we only
    // send the boundary data once, rather than once per child. But that's a
    // negligible benefit and can be achieved via caching instead.
    const parentContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
    if (parentContext === null) {
        return children;
    }
    // All values except for parentLoadingData are the same as the parent context.
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: parentContext.parentTree,
            parentCacheNode: parentContext.parentCacheNode,
            parentSegmentPath: parentContext.parentSegmentPath,
            parentParams: parentContext.parentParams,
            parentLoadingData: loading,
            debugNameContext: parentContext.debugNameContext,
            url: parentContext.url,
            isActive: parentContext.isActive
        },
        children: children
    });
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary({ name, loading, children }) {
    // TODO: For LoadingBoundary, and the other built-in boundary types, don't
    // wrap in an extra function component if no user-defined boundary is
    // provided. In other words, inline this conditional wrapping logic into
    // the parent component. More efficient and keeps unnecessary junk out of
    // the component stack.
    if (loading !== null) {
        const loadingRsc = loading[0];
        const loadingStyles = loading[1];
        const loadingScripts = loading[2];
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            name: name,
            fallback: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    loadingStyles,
                    loadingScripts,
                    loadingRsc
                ]
            }),
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
function OuterLayoutRouter({ parallelRouterKey, error, errorStyles, errorScripts, templateStyles, templateScripts, template, notFound, forbidden, unauthorized, segmentViewBoundaries }) {
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant expected layout router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E56",
            enumerable: false,
            configurable: true
        });
    }
    const { parentTree, parentCacheNode, parentSegmentPath, parentParams, parentLoadingData, url, isActive, debugNameContext } = context;
    // Get the CacheNode for this segment by reading it from the parent segment's
    // child map.
    const parentTreeSegment = parentTree[0];
    const segmentPath = parentSegmentPath === null ? // the code. We should clean this up.
    [
        parallelRouterKey
    ] : parentSegmentPath.concat([
        parentTreeSegment,
        parallelRouterKey
    ]);
    // The "state" key of a segment is the one passed to React — it represents the
    // identity of the UI tree. Whenever the state key changes, the tree is
    // recreated and the state is reset. In the App Router model, search params do
    // not cause state to be lost, so two segments with the same segment path but
    // different search params should have the same state key.
    //
    // The "cache" key of a segment, however, *does* include the search params, if
    // it's possible that the segment accessed the search params on the server.
    // (This only applies to page segments; layout segments cannot access search
    // params on the server.)
    const activeTree = parentTree[1][parallelRouterKey];
    const maybeParentSlots = parentCacheNode.slots;
    if (activeTree === undefined || maybeParentSlots === null) {
        // Could not find a matching segment. The client tree is inconsistent with
        // the server tree. Suspend indefinitely; the router will have already
        // detected the inconsistency when handling the server response, and
        // triggered a refresh of the page to recover.
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    let maybeValidationBoundaryId = null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const activeSegment = activeTree[0];
    const activeCacheNode = maybeParentSlots[parallelRouterKey] ?? null;
    const activeStateKey = (0, _createroutercachekey.createRouterCacheKey)(activeSegment, true) // no search params
    ;
    // At each level of the route tree, not only do we render the currently
    // active segment — we also render the last N segments that were active at
    // this level inside a hidden <Activity> boundary, to preserve their state
    // if or when the user navigates to them again.
    //
    // bfcacheEntry is a linked list of FlightRouterStates.
    let bfcacheEntry = (0, _bfcachestatemanager.useRouterBFCache)(activeTree, activeCacheNode, activeStateKey);
    let children = [];
    do {
        const tree = bfcacheEntry.tree;
        const cacheNode = bfcacheEntry.cacheNode;
        const stateKey = bfcacheEntry.stateKey;
        const segment = tree[0];
        /*
    - Error boundary
      - Only renders error boundary if error component is provided.
      - Rendered for each segment to ensure they have their own error state.
      - When gracefully degrade for bots, skip rendering error boundary.
    - Loading boundary
      - Only renders suspense boundary if loading components is provided.
      - Rendered for each segment to ensure they have their own loading state.
      - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
  */ let segmentBoundaryTriggerNode = null;
        let segmentViewStateNode = null;
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentBoundaryTriggerNode, SegmentViewStateNode } = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            const pagePrefix = (0, _apppaths.normalizeAppPath)(url);
            segmentViewStateNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentViewStateNode, {
                page: pagePrefix
            }, pagePrefix);
            segmentBoundaryTriggerNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentBoundaryTriggerNode, {})
            });
        }
        let params = parentParams;
        if (Array.isArray(segment)) {
            // This segment contains a route param. Accumulate these as we traverse
            // down the router tree. The result represents the set of params that
            // the layout/page components are permitted to access below this point.
            const paramName = segment[0];
            const paramCacheKey = segment[1];
            const paramType = segment[2];
            const paramValue = (0, _routeparams.getParamValueFromCacheKey)(paramCacheKey, paramType);
            if (paramValue !== null) {
                params = {
                    ...parentParams,
                    [paramName]: paramValue
                };
            }
        }
        const debugName = getBoundaryDebugNameFromSegment(segment);
        // `debugNameContext` represents the nearest non-"virtual" parent segment.
        // `getBoundaryDebugNameFromSegment` returns undefined for virtual segments.
        // So if `debugName` is undefined, the context is passed through unchanged.
        const childDebugNameContext = debugName ?? debugNameContext;
        // In practical terms, clicking this name in the Suspense DevTools
        // should select the child slots of that layout.
        //
        // So the name we apply to the Activity boundary is actually based on
        // the nearest parent segments.
        //
        // We skip over "virtual" parents, i.e. ones inserted by Next.js that
        // don't correspond to application-defined code.
        const isVirtual = debugName === undefined;
        const debugNameToDisplay = isVirtual ? undefined : debugNameContext;
        let templateValue = /*#__PURE__*/ (0, _jsxruntime.jsxs)(ScrollAndMaybeFocusHandler, {
            cacheNode: cacheNode,
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
                    errorComponent: error,
                    errorStyles: errorStyles,
                    errorScripts: errorScripts,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingBoundary, {
                        name: debugNameToDisplay,
                        // TODO: The loading module data for a segment is stored on the
                        // parent, then applied to each of that parent segment's
                        // parallel route slots. In the simple case where there's only
                        // one parallel route (the `children` slot), this is no
                        // different from if the loading module data were stored on the
                        // child directly. But I'm not sure this actually makes sense
                        // when there are multiple parallel routes. It's not a huge
                        // issue because you always have the option to define a narrower
                        // loading boundary for a particular slot. But this sort of
                        // smells like an implementation accident to me.
                        loading: parentLoadingData,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary1.HTTPAccessFallbackBoundary, {
                            notFound: notFound,
                            forbidden: forbidden,
                            unauthorized: unauthorized,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerLayoutRouter, {
                                        url: url,
                                        tree: tree,
                                        params: params,
                                        cacheNode: cacheNode,
                                        segmentPath: segmentPath,
                                        debugNameContext: childDebugNameContext,
                                        isActive: isActive && stateKey === activeStateKey
                                    }),
                                    segmentBoundaryTriggerNode
                                ]
                            })
                        })
                    })
                }),
                segmentViewStateNode
            ]
        });
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        let child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_approutercontextsharedruntime.TemplateContext.Provider, {
            value: templateValue,
            children: [
                templateStyles,
                templateScripts,
                template
            ]
        }, stateKey);
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentStateProvider } = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.js [app-client] (ecmascript)");
            child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(SegmentStateProvider, {
                children: [
                    child,
                    segmentViewBoundaries
                ]
            }, stateKey);
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        children.push(child);
        bfcacheEntry = bfcacheEntry.next;
    }while (bfcacheEntry !== null)
    return children;
}
function getBoundaryDebugNameFromSegment(segment) {
    if (segment === '/') {
        // Reached the root
        return '/';
    }
    if (typeof segment === 'string') {
        if (isVirtualLayout(segment)) {
            return undefined;
        } else {
            return segment + '/';
        }
    }
    const paramCacheKey = segment[1];
    return paramCacheKey + '/';
}
function isVirtualLayout(segment) {
    return(// (like __PAGE__ and __DEFAULT__) to avoid collisions with
    // user-defined route groups.
    segment === '(__SLOT__)');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/my-react-app/node_modules/next/dist/client/components/render-from-template-context.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RenderFromTemplateContext;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/my-react-app/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
function RenderFromTemplateContext() {
    const children = (0, _react.useContext)(_approutercontextsharedruntime.TemplateContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/my-react-app/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
}
}),
"[project]/my-react-app/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This regex will have fast negatives meaning valid identifiers may not pass
// this test. However this is only used during static generation to provide hints
// about why a page bailed out of some or all prerendering and we can use bracket notation
// for example while `ಠ_ಠ` is a valid identifier it's ok to print `searchParams['ಠ_ಠ']`
// even if this would have been fine too `searchParams.ಠ_ಠ`
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    describeHasCheckingStringProperty: null,
    describeStringPropertyAccess: null,
    wellKnownProperties: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
    },
    describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
    },
    wellKnownProperties: function() {
        return wellKnownProperties;
    }
});
const isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
function describeStringPropertyAccess(target, prop) {
    if (isDefinitelyAValidIdentifier.test(prop)) {
        return `\`${target}.${prop}\``;
    }
    return `\`${target}[${JSON.stringify(prop)}]\``;
}
function describeHasCheckingStringProperty(target, prop) {
    const stringifiedProp = JSON.stringify(prop);
    return `\`Reflect.has(${target}, ${stringifiedProp})\`, \`${stringifiedProp} in ${target}\`, or similar`;
}
const wellKnownProperties = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toString',
    'valueOf',
    'toLocaleString',
    // Promise prototype
    'then',
    'catch',
    'finally',
    // React Promise extension
    'status',
    // 'value',
    // 'error',
    // React introspection
    'displayName',
    '_debugInfo',
    // Common tested properties
    'toJSON',
    '$$typeof',
    '__esModule',
    // Tested by flight when checking for iterables
    '@@iterator'
]);
}),
"[project]/my-react-app/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedSearchParams = new WeakMap();
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const proxiedProperties = new Set();
    const promise = Promise.resolve(underlyingSearchParams);
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            warnForSyncSpread();
            return Reflect.ownKeys(target);
        }
    });
    CachedSearchParams.set(underlyingSearchParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A searchParam property was accessed directly with ${expression}. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForSyncSpread() {
    console.error(`The keys of \`searchParams\` were accessed directly. ` + `\`searchParams\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderSearchParamsFromClient(underlyingSearchParams) {
    return makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/my-react-app/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/my-react-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderSearchParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderSearchParamsFromClient;
    }
});
const createRenderSearchParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/client/request/search-params.browser.dev.js [app-client] (ecmascript)").createRenderSearchParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/my-react-app/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const _reflect = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const CachedParams = new WeakMap();
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(underlyingParams);
    const proxiedProperties = new Set();
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            warnForEnumeration();
            return Reflect.ownKeys(target);
        }
    });
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function warnForSyncAccess(expression) {
    console.error(`A param property was accessed directly with ${expression}. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function warnForEnumeration() {
    console.error(`params are being enumerated. ` + `\`params\` is a Promise and must be unwrapped with \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`);
}
function createRenderParamsFromClient(clientParams) {
    return makeDynamicallyTrackedParamsWithDevWarnings(clientParams);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/my-react-app/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/my-react-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRenderParamsFromClient", {
    enumerable: true,
    get: function() {
        return createRenderParamsFromClient;
    }
});
const createRenderParamsFromClient = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/client/request/params.browser.dev.js [app-client] (ecmascript)").createRenderParamsFromClient : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/my-react-app/node_modules/next/dist/server/app-render/vary-params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    accumulateRootVaryParam: null,
    accumulateVaryParam: null,
    createResponseVaryParamsAccumulator: null,
    createVaryParamsAccumulator: null,
    createVaryingParams: null,
    createVaryingSearchParams: null,
    emptyVaryParamsAccumulator: null,
    finishAccumulatingVaryParams: null,
    getMetadataVaryParamsAccumulator: null,
    getMetadataVaryParamsThenable: null,
    getRootParamsVaryParamsAccumulator: null,
    getVaryParamsThenable: null,
    getViewportVaryParamsAccumulator: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    accumulateRootVaryParam: function() {
        return accumulateRootVaryParam;
    },
    accumulateVaryParam: function() {
        return accumulateVaryParam;
    },
    createResponseVaryParamsAccumulator: function() {
        return createResponseVaryParamsAccumulator;
    },
    createVaryParamsAccumulator: function() {
        return createVaryParamsAccumulator;
    },
    createVaryingParams: function() {
        return createVaryingParams;
    },
    createVaryingSearchParams: function() {
        return createVaryingSearchParams;
    },
    emptyVaryParamsAccumulator: function() {
        return emptyVaryParamsAccumulator;
    },
    finishAccumulatingVaryParams: function() {
        return finishAccumulatingVaryParams;
    },
    getMetadataVaryParamsAccumulator: function() {
        return getMetadataVaryParamsAccumulator;
    },
    getMetadataVaryParamsThenable: function() {
        return getMetadataVaryParamsThenable;
    },
    getRootParamsVaryParamsAccumulator: function() {
        return getRootParamsVaryParamsAccumulator;
    },
    getVaryParamsThenable: function() {
        return getVaryParamsThenable;
    },
    getViewportVaryParamsAccumulator: function() {
        return getViewportVaryParamsAccumulator;
    }
});
const _workunitasyncstorageexternal = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
function createSegmentVaryParamsAccumulator() {
    const accumulator = {
        varyParams: new Set(),
        status: 'pending',
        value: new Set(),
        then (onfulfilled) {
            if (onfulfilled) {
                if (accumulator.status === 'pending') {
                    accumulator.resolvers.push(onfulfilled);
                } else {
                    onfulfilled(accumulator.value);
                }
            }
        },
        resolvers: []
    };
    return accumulator;
}
/**
 * A singleton accumulator that's already resolved to an empty Set. Use this for
 * segments where we know upfront that no params will be accessed, such as
 * client components or segments without user code.
 *
 * Benefits:
 * - No need to accumulate or resolve later
 * - Resilient: resolves correctly even if other tracking fails
 * - Memory efficient: reuses the same object
 */ const emptySet = new Set();
const emptyVaryParamsAccumulator = {
    varyParams: emptySet,
    status: 'fulfilled',
    value: emptySet,
    then (onfulfilled) {
        if (onfulfilled) {
            onfulfilled(emptySet);
        }
    },
    resolvers: []
};
function createResponseVaryParamsAccumulator() {
    // Create the head and rootParams accumulators as top-level fields.
    // Segment accumulators are added to the segments set as they are created.
    const head = createSegmentVaryParamsAccumulator();
    const rootParams = createSegmentVaryParamsAccumulator();
    const segments = new Set();
    return {
        head,
        rootParams,
        segments
    };
}
function createVaryParamsAccumulator() {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-runtime':
                {
                    const responseAccumulator = workUnitStore.varyParamsAccumulator;
                    if (responseAccumulator !== null) {
                        const accumulator = createSegmentVaryParamsAccumulator();
                        responseAccumulator.segments.add(accumulator);
                        return accumulator;
                    }
                    return null;
                }
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'request':
            case 'cache':
            case 'private-cache':
            case 'prerender-client':
            case 'validation-client':
            case 'unstable-cache':
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
    }
    return null;
}
function getMetadataVaryParamsAccumulator() {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-runtime':
                {
                    const responseAccumulator = workUnitStore.varyParamsAccumulator;
                    if (responseAccumulator !== null) {
                        return responseAccumulator.head;
                    }
                    return null;
                }
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'request':
            case 'cache':
            case 'private-cache':
            case 'prerender-client':
            case 'validation-client':
            case 'unstable-cache':
            case 'generate-static-params':
                return null;
            default:
                workUnitStore;
        }
    }
    return null;
}
function getVaryParamsThenable(accumulator) {
    return accumulator;
}
function getMetadataVaryParamsThenable() {
    const accumulator = getMetadataVaryParamsAccumulator();
    if (accumulator !== null) {
        return getVaryParamsThenable(accumulator);
    }
    return null;
}
const getViewportVaryParamsAccumulator = getMetadataVaryParamsAccumulator;
function getRootParamsVaryParamsAccumulator() {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-runtime':
                {
                    const responseAccumulator = workUnitStore.varyParamsAccumulator;
                    if (responseAccumulator !== null) {
                        return responseAccumulator.rootParams;
                    }
                    return null;
                }
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'request':
            case 'cache':
            case 'private-cache':
            case 'prerender-client':
            case 'validation-client':
            case 'unstable-cache':
            case 'generate-static-params':
                return null;
            default:
                workUnitStore;
        }
    }
    return null;
}
function accumulateVaryParam(accumulator, paramName) {
    accumulator.varyParams.add(paramName);
}
function accumulateRootVaryParam(paramName) {
    const rootParamsAccumulator = getRootParamsVaryParamsAccumulator();
    if (rootParamsAccumulator !== null) {
        accumulateVaryParam(rootParamsAccumulator, paramName);
    }
}
function createVaryingParams(accumulator, originalParamsObject, optionalCatchAllParamName) {
    if (optionalCatchAllParamName !== null) {
        // When there's an optional catch-all param with no value (e.g.,
        // [[...slug]] at /), the param doesn't exist as a property on the params
        // object. Use a Proxy to track all param access — both existing params
        // and the missing optional param — including enumeration patterns like
        // Object.keys(), spread, for...in, and `in` checks.
        return new Proxy(originalParamsObject, {
            get (target, prop, receiver) {
                if (typeof prop === 'string') {
                    if (prop === optionalCatchAllParamName || Object.prototype.hasOwnProperty.call(target, prop)) {
                        accumulateVaryParam(accumulator, prop);
                    }
                }
                return Reflect.get(target, prop, receiver);
            },
            has (target, prop) {
                if (prop === optionalCatchAllParamName) {
                    accumulateVaryParam(accumulator, optionalCatchAllParamName);
                }
                return Reflect.has(target, prop);
            },
            ownKeys (target) {
                // Enumerating the params object means the user's code may depend on
                // which params are present, so conservatively track the optional
                // param as accessed.
                accumulateVaryParam(accumulator, optionalCatchAllParamName);
                return Reflect.ownKeys(target);
            }
        });
    }
    // When there's no optional catch-all, all params exist as properties on the
    // object, so we can use defineProperty getters instead of a Proxy. This is
    // faster because the engine can optimize property access on regular objects
    // more aggressively than Proxy trap calls.
    const underlyingParamsWithVarying = {};
    for(const paramName in originalParamsObject){
        Object.defineProperty(underlyingParamsWithVarying, paramName, {
            get () {
                accumulateVaryParam(accumulator, paramName);
                return originalParamsObject[paramName];
            },
            enumerable: true
        });
    }
    return underlyingParamsWithVarying;
}
function createVaryingSearchParams(accumulator, originalSearchParamsObject) {
    const underlyingSearchParamsWithVarying = {};
    for(const searchParamName in originalSearchParamsObject){
        Object.defineProperty(underlyingSearchParamsWithVarying, searchParamName, {
            get () {
                // TODO: Unlike path params, we don't vary track each search param
                // individually. The entire search string is treated as a single param.
                // This may change in the future.
                accumulateVaryParam(accumulator, '?');
                return originalSearchParamsObject[searchParamName];
            },
            enumerable: true
        });
    }
    return underlyingSearchParamsWithVarying;
}
async function finishAccumulatingVaryParams(responseAccumulator) {
    const rootVaryParams = responseAccumulator.rootParams.varyParams;
    // Resolve head
    finishSegmentAccumulator(responseAccumulator.head, rootVaryParams);
    // Resolve each segment
    for (const segmentAccumulator of responseAccumulator.segments){
        finishSegmentAccumulator(segmentAccumulator, rootVaryParams);
    }
    // Now that the thenables are resolved, Flight should be able to flush the
    // vary params into the response stream. This work gets scheduled internally
    // by Flight using a microtask as soon as we notify the thenable listeners.
    //
    // We need to ensure that Flight's pending queues are emptied before this
    // function returns; the caller will abort the prerender immediately after.
    // We can't use a macrotask, because that would allow dynamic IO to sneak
    // into the response. So we use microtasks instead.
    //
    // The exact number of awaits here isn't important (indeed, one seems to be
    // sufficient, at the time of writing), as long as we wait enough ticks for
    // Flight to finish writing the response.
    //
    // Anything that remains in Flight's internal queue after these awaits must
    // be actual dynamic IO, not caused by pending vary params tasks. In other
    // words, failing to do this would cause us to treat a fully static prerender
    // as if it were partially dynamic.
    await Promise.resolve();
    await Promise.resolve();
    await Promise.resolve();
}
function finishSegmentAccumulator(accumulator, rootVaryParams) {
    if (accumulator.status !== 'pending') {
        return;
    }
    const merged = new Set(accumulator.varyParams);
    for (const param of rootVaryParams){
        merged.add(param);
    }
    accumulator.value = merged;
    accumulator.status = 'fulfilled';
    for (const resolver of accumulator.resolvers){
        resolver(merged);
    }
    accumulator.resolvers = [];
}
}),
"[project]/my-react-app/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/my-react-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createDedupedByCallsiteServerErrorLoggerDev", {
    enumerable: true,
    get: function() {
        return createDedupedByCallsiteServerErrorLoggerDev;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const errorRef = {
    current: null
};
// React.cache is currently only available in canary/experimental React channels.
const cache = typeof _react.cache === 'function' ? _react.cache : (fn)=>fn;
// When Cache Components is enabled, we record these as errors so that they
// are captured by the dev overlay as it's more critical to fix these
// when enabled.
const logErrorOrWarn = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : console.warn;
// We don't want to dedupe across requests.
// The developer might've just attempted to fix the warning so we should warn again if it still happens.
const flushCurrentErrorIfNew = cache((key)=>{
    try {
        logErrorOrWarn(errorRef.current);
    } finally{
        errorRef.current = null;
    }
});
function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError(...args) {
        const message = getMessage(...args);
        if ("TURBOPACK compile-time truthy", 1) {
            var _stack;
            const callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split('\n');
            if (callStackFrames === undefined || callStackFrames.length < 4) {
                logErrorOrWarn(message);
            } else {
                // Error:
                //   logDedupedError
                //   asyncApiBeingAccessedSynchronously
                //   <userland callsite>
                // TODO: This breaks if sourcemaps with ignore lists are enabled.
                const key = callStackFrames[4];
                errorRef.current = message;
                flushCurrentErrorIfNew(key);
            }
        } else //TURBOPACK unreachable
        ;
    };
}
}),
"[project]/my-react-app/node_modules/next/dist/server/app-render/after-task-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "afterTaskAsyncStorageInstance", {
    enumerable: true,
    get: function() {
        return afterTaskAsyncStorageInstance;
    }
});
const _asynclocalstorage = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
const afterTaskAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
}),
"[project]/my-react-app/node_modules/next/dist/server/app-render/after-task-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "afterTaskAsyncStorage", {
    enumerable: true,
    get: function() {
        return _aftertaskasyncstorageinstance.afterTaskAsyncStorageInstance;
    }
});
const _aftertaskasyncstorageinstance = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/after-task-async-storage-instance.js [app-client] (ecmascript)");
}),
"[project]/my-react-app/node_modules/next/dist/server/request/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isRequestAPICallableInsideAfter: null,
    throwForSearchParamsAccessInUseCache: null,
    throwWithStaticGenerationBailoutErrorWithDynamicError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isRequestAPICallableInsideAfter: function() {
        return isRequestAPICallableInsideAfter;
    },
    throwForSearchParamsAccessInUseCache: function() {
        return throwForSearchParamsAccessInUseCache;
    },
    throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
        return throwWithStaticGenerationBailoutErrorWithDynamicError;
    }
});
const _staticgenerationbailout = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/client/components/static-generation-bailout.js [app-client] (ecmascript)");
const _aftertaskasyncstorageexternal = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/after-task-async-storage.external.js [app-client] (ecmascript)");
function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E543",
        enumerable: false,
        configurable: true
    });
}
function throwForSearchParamsAccessInUseCache(workStore, constructorOpt) {
    const error = Object.defineProperty(new Error(`Route ${workStore.route} used \`searchParams\` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await \`searchParams\` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
        value: "E842",
        enumerable: false,
        configurable: true
    });
    Error.captureStackTrace(error, constructorOpt);
    workStore.invalidDynamicUsageError ??= error;
    throw error;
}
function isRequestAPICallableInsideAfter() {
    const afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
    return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
}
}),
"[project]/my-react-app/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "partitioned" in c && c.partitioned && "Partitioned",
        "priority" in c && c.priority && `Priority=${c.priority}`
    ].filter(Boolean);
    const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
    return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure, partitioned, priority } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase().replace(/-/g, ""),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        },
        ...priority && {
            priority: parsePriority(priority)
        },
        ...partitioned && {
            partitioned: true
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = [
    "low",
    "medium",
    "high"
];
function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, options] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0]
        ];
        return this.set({
            ...options,
            name,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    RequestCookies,
    ResponseCookies,
    parseCookie,
    parseSetCookie,
    stringifyCookie
});
}),
"[project]/my-react-app/node_modules/next/dist/server/web/spec-extension/cookies.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RequestCookies: null,
    ResponseCookies: null,
    stringifyCookie: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RequestCookies: function() {
        return _cookies.RequestCookies;
    },
    ResponseCookies: function() {
        return _cookies.ResponseCookies;
    },
    stringifyCookie: function() {
        return _cookies.stringifyCookie;
    }
});
const _cookies = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-client] (ecmascript)");
}),
"[project]/my-react-app/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    MutableRequestCookiesAdapter: null,
    ReadonlyRequestCookiesError: null,
    RequestCookiesAdapter: null,
    appendMutableCookies: null,
    areCookiesMutableInCurrentPhase: null,
    createCookiesWithMutableAccessCheck: null,
    getModifiedCookieValues: null,
    responseCookiesToRequestCookies: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MutableRequestCookiesAdapter: function() {
        return MutableRequestCookiesAdapter;
    },
    ReadonlyRequestCookiesError: function() {
        return ReadonlyRequestCookiesError;
    },
    RequestCookiesAdapter: function() {
        return RequestCookiesAdapter;
    },
    appendMutableCookies: function() {
        return appendMutableCookies;
    },
    areCookiesMutableInCurrentPhase: function() {
        return areCookiesMutableInCurrentPhase;
    },
    createCookiesWithMutableAccessCheck: function() {
        return createCookiesWithMutableAccessCheck;
    },
    getModifiedCookieValues: function() {
        return getModifiedCookieValues;
    },
    responseCookiesToRequestCookies: function() {
        return responseCookiesToRequestCookies;
    }
});
const _cookies = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/web/spec-extension/cookies.js [app-client] (ecmascript)");
const _reflect = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _actionrevalidationkind = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/action-revalidation-kind.js [app-client] (ecmascript)");
class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super('Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options');
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'clear':
                    case 'delete':
                    case 'set':
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for('next.mutated.cookies');
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    const resCookies = new _cookies.ResponseCookies(headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookies = new _cookies.ResponseCookies(new Headers());
        for (const cookie of cookies.getAll()){
            responseCookies.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            // TODO-APP: change method of getting workStore
            const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
            if (workStore) {
                workStore.pathWasRevalidated = _actionrevalidationkind.ActionDidRevalidateStaticAndDynamic;
            }
            const allCookies = responseCookies.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new _cookies.ResponseCookies(new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        const wrappedCookies = new Proxy(responseCookies, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case 'delete':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case 'set':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.set(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
        return wrappedCookies;
    }
}
function createCookiesWithMutableAccessCheck(requestStore) {
    const wrappedCookies = new Proxy(requestStore.mutableCookies, {
        get (target, prop, receiver) {
            switch(prop){
                case 'delete':
                    return function(...args) {
                        ensureCookiesAreStillMutable(requestStore, 'cookies().delete');
                        target.delete(...args);
                        return wrappedCookies;
                    };
                case 'set':
                    return function(...args) {
                        ensureCookiesAreStillMutable(requestStore, 'cookies().set');
                        target.set(...args);
                        return wrappedCookies;
                    };
                default:
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
        }
    });
    return wrappedCookies;
}
function areCookiesMutableInCurrentPhase(requestStore) {
    return requestStore.phase === 'action';
}
/** Ensure that cookies() starts throwing on mutation
 * if we changed phases and can no longer mutate.
 *
 * This can happen when going:
 *   'render' -> 'after'
 *   'action' -> 'render'
 * */ function ensureCookiesAreStillMutable(requestStore, _callingExpression) {
    if (!areCookiesMutableInCurrentPhase(requestStore)) {
        // TODO: maybe we can give a more precise error message based on callingExpression?
        throw new ReadonlyRequestCookiesError();
    }
}
function responseCookiesToRequestCookies(responseCookies) {
    const requestCookies = new _cookies.RequestCookies(new Headers());
    for (const cookie of responseCookies.getAll()){
        requestCookies.set(cookie);
    }
    return requestCookies;
}
}),
"[project]/my-react-app/node_modules/next/dist/server/web/spec-extension/adapters/headers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HeadersAdapter: null,
    ReadonlyHeadersError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HeadersAdapter: function() {
        return HeadersAdapter;
    },
    ReadonlyHeadersError: function() {
        return ReadonlyHeadersError;
    }
});
const _reflect = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
class ReadonlyHeadersError extends Error {
    constructor(){
        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return _reflect.ReflectAdapter.get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                    return _reflect.ReflectAdapter.set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return _reflect.ReflectAdapter.set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === 'symbol') return _reflect.ReflectAdapter.has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return _reflect.ReflectAdapter.has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === 'symbol') return _reflect.ReflectAdapter.deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return _reflect.ReflectAdapter.deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'append':
                    case 'delete':
                    case 'set':
                        return ReadonlyHeadersError.callable;
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== 'undefined';
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
}
}),
"[project]/my-react-app/node_modules/next/dist/shared/lib/router/utils/get-segment-param.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getParamProperties: null,
    getSegmentParam: null,
    isCatchAll: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getParamProperties: function() {
        return getParamProperties;
    },
    getSegmentParam: function() {
        return getSegmentParam;
    },
    isCatchAll: function() {
        return isCatchAll;
    }
});
const _interceptionroutes = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-client] (ecmascript)");
function getSegmentParam(segment) {
    const interceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((marker)=>segment.startsWith(marker));
    // if an interception marker is part of the path segment, we need to jump ahead
    // to the relevant portion for param parsing
    if (interceptionMarker) {
        segment = segment.slice(interceptionMarker.length);
    }
    if (segment.startsWith('[[...') && segment.endsWith(']]')) {
        return {
            // TODO-APP: Optional catchall does not currently work with parallel routes,
            // so for now aren't handling a potential interception marker.
            paramType: 'optional-catchall',
            paramName: segment.slice(5, -2)
        };
    }
    if (segment.startsWith('[...') && segment.endsWith(']')) {
        return {
            paramType: interceptionMarker ? `catchall-intercepted-${interceptionMarker}` : 'catchall',
            paramName: segment.slice(4, -1)
        };
    }
    if (segment.startsWith('[') && segment.endsWith(']')) {
        return {
            paramType: interceptionMarker ? `dynamic-intercepted-${interceptionMarker}` : 'dynamic',
            paramName: segment.slice(1, -1)
        };
    }
    return null;
}
function isCatchAll(type) {
    return type === 'catchall' || type === 'catchall-intercepted-(..)(..)' || type === 'catchall-intercepted-(.)' || type === 'catchall-intercepted-(..)' || type === 'catchall-intercepted-(...)' || type === 'optional-catchall';
}
function getParamProperties(paramType) {
    let repeat = false;
    let optional = false;
    switch(paramType){
        case 'catchall':
        case 'catchall-intercepted-(..)(..)':
        case 'catchall-intercepted-(.)':
        case 'catchall-intercepted-(..)':
        case 'catchall-intercepted-(...)':
            repeat = true;
            break;
        case 'optional-catchall':
            repeat = true;
            optional = true;
            break;
        case 'dynamic':
        case 'dynamic-intercepted-(..)(..)':
        case 'dynamic-intercepted-(.)':
        case 'dynamic-intercepted-(..)':
        case 'dynamic-intercepted-(...)':
            break;
        default:
            paramType;
    }
    return {
        repeat,
        optional
    };
}
}),
"[project]/my-react-app/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/my-react-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E1035",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1025",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
}
}),
"[project]/my-react-app/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
}
}),
"[project]/my-react-app/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseRelativeUrl", {
    enumerable: true,
    get: function() {
        return parseRelativeUrl;
    }
});
const _utils = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _querystring = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)");
function parseRelativeUrl(url, base, parseQuery = true) {
    const globalBase = new URL(typeof window === 'undefined' ? 'http://n' : (0, _utils.getLocationOrigin)());
    const resolvedBase = base ? new URL(base, globalBase) : url.startsWith('.') ? new URL(typeof window === 'undefined' ? 'http://n' : window.location.href) : globalBase;
    const { pathname, searchParams, search, hash, href, origin } = url.startsWith('/') ? // Not using `origin` to support other protocols
    new URL(`${resolvedBase.protocol}//${resolvedBase.host}${url}`) : new URL(url, resolvedBase);
    if (origin !== globalBase.origin) {
        throw Object.defineProperty(new Error(`invariant: invalid relative URL, router received ${url}`), "__NEXT_ERROR_CODE", {
            value: "E159",
            enumerable: false,
            configurable: true
        });
    }
    return {
        auth: null,
        host: null,
        hostname: null,
        pathname,
        port: null,
        protocol: null,
        query: parseQuery ? (0, _querystring.searchParamsToUrlQuery)(searchParams) : undefined,
        search,
        hash,
        href: href.slice(origin.length),
        // We don't know for relative URLs at this point since we set a custom, internal
        // base that isn't surfaced to users.
        slashes: null
    };
}
}),
"[project]/my-react-app/node_modules/next/dist/server/app-render/instant-validation/instant-validation-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    InstantValidationError: null,
    isInstantValidationError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    InstantValidationError: function() {
        return InstantValidationError;
    },
    isInstantValidationError: function() {
        return isInstantValidationError;
    }
});
const INSTANT_VALIDATION_ERROR_DIGEST = 'INSTANT_VALIDATION_ERROR';
function isInstantValidationError(err) {
    return !!(err && typeof err === 'object' && err instanceof Error && err.digest === INSTANT_VALIDATION_ERROR_DIGEST);
}
class InstantValidationError extends Error {
    constructor(...args){
        super(...args), this.digest = INSTANT_VALIDATION_ERROR_DIGEST;
    }
}
}),
"[project]/my-react-app/node_modules/next/dist/server/app-render/instant-validation/instant-samples.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assertRootParamInSamples: null,
    createCookiesFromSample: null,
    createDraftModeForValidation: null,
    createExhaustiveParamsProxy: null,
    createExhaustiveSearchParamsProxy: null,
    createExhaustiveURLSearchParamsProxy: null,
    createHeadersFromSample: null,
    createRelativeURLFromSamples: null,
    createValidationSampleTracking: null,
    trackMissingSampleError: null,
    trackMissingSampleErrorAndThrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assertRootParamInSamples: function() {
        return assertRootParamInSamples;
    },
    createCookiesFromSample: function() {
        return createCookiesFromSample;
    },
    createDraftModeForValidation: function() {
        return createDraftModeForValidation;
    },
    createExhaustiveParamsProxy: function() {
        return createExhaustiveParamsProxy;
    },
    createExhaustiveSearchParamsProxy: function() {
        return createExhaustiveSearchParamsProxy;
    },
    createExhaustiveURLSearchParamsProxy: function() {
        return createExhaustiveURLSearchParamsProxy;
    },
    createHeadersFromSample: function() {
        return createHeadersFromSample;
    },
    createRelativeURLFromSamples: function() {
        return createRelativeURLFromSamples;
    },
    createValidationSampleTracking: function() {
        return createValidationSampleTracking;
    },
    trackMissingSampleError: function() {
        return trackMissingSampleError;
    },
    trackMissingSampleErrorAndThrow: function() {
        return trackMissingSampleErrorAndThrow;
    }
});
const _cookies = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/web/spec-extension/cookies.js [app-client] (ecmascript)");
const _requestcookies = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js [app-client] (ecmascript)");
const _headers = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/web/spec-extension/adapters/headers.js [app-client] (ecmascript)");
const _getsegmentparam = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/router/utils/get-segment-param.js [app-client] (ecmascript)");
const _parserelativeurl = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _instantvalidationerror = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/instant-validation/instant-validation-error.js [app-client] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
function createValidationSampleTracking() {
    return {
        missingSampleErrors: []
    };
}
function getExpectedSampleTracking() {
    let validationSampleTracking = null;
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'request':
            case 'validation-client':
                // TODO(instant-validation-build): do we need any special handling for caches?
                validationSampleTracking = workUnitStore.validationSampleTracking ?? null;
                break;
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
            case 'prerender-legacy':
            case 'prerender-ppr':
            case 'prerender-client':
            case 'prerender':
            case 'prerender-runtime':
            case 'generate-static-params':
                break;
            default:
                workUnitStore;
        }
    }
    if (!validationSampleTracking) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Expected to have a workUnitStore that provides validationSampleTracking'), "__NEXT_ERROR_CODE", {
            value: "E1110",
            enumerable: false,
            configurable: true
        });
    }
    return validationSampleTracking;
}
function trackMissingSampleError(error) {
    const validationSampleTracking = getExpectedSampleTracking();
    validationSampleTracking.missingSampleErrors.push(error);
}
function trackMissingSampleErrorAndThrow(error) {
    // TODO(instant-validation-build): this should abort the render
    trackMissingSampleError(error);
    throw error;
}
function createCookiesFromSample(sampleCookies, route) {
    const declaredNames = new Set();
    const cookies = new _cookies.RequestCookies(new Headers());
    if (sampleCookies) {
        for (const cookie of sampleCookies){
            declaredNames.add(cookie.name);
            if (cookie.value !== null) {
                cookies.set(cookie.name, cookie.value);
            }
        }
    }
    const sealed = _requestcookies.RequestCookiesAdapter.seal(cookies);
    return new Proxy(sealed, {
        get (target, prop, receiver) {
            if (prop === 'has') {
                const originalMethod = Reflect.get(target, prop, receiver);
                const wrappedMethod = function(name) {
                    if (!declaredNames.has(name)) {
                        trackMissingSampleErrorAndThrow(createMissingCookieSampleError(route, name));
                    }
                    return originalMethod.call(target, name);
                };
                return wrappedMethod;
            }
            if (prop === 'get') {
                const originalMethod = Reflect.get(target, prop, receiver);
                const wrappedMethod = function(nameOrCookie) {
                    let name;
                    if (typeof nameOrCookie === 'string') {
                        name = nameOrCookie;
                    } else if (nameOrCookie && typeof nameOrCookie === 'object' && typeof nameOrCookie.name === 'string') {
                        name = nameOrCookie.name;
                    } else {
                        // This is an invalid input. Pass it through to the original method so it can error.
                        return originalMethod.call(target, nameOrCookie);
                    }
                    if (!declaredNames.has(name)) {
                        trackMissingSampleErrorAndThrow(createMissingCookieSampleError(route, name));
                    }
                    return originalMethod.call(target, name);
                };
                return wrappedMethod;
            }
            // TODO(instant-validation-build): what should getAll do?
            // Maybe we should only allow it if there's an array (possibly empty?)
            return Reflect.get(target, prop, receiver);
        }
    });
}
function createMissingCookieSampleError(route, name) {
    return Object.defineProperty(new _instantvalidationerror.InstantValidationError(`Route "${route}" accessed cookie "${name}" which is not defined in the \`samples\` ` + `of \`unstable_instant\`. Add it to the sample's \`cookies\` array, ` + `or \`{ name: "${name}", value: null }\` if it should be absent.`), "__NEXT_ERROR_CODE", {
        value: "E1115",
        enumerable: false,
        configurable: true
    });
}
function createHeadersFromSample(rawSampleHeaders, sampleCookies, route) {
    // If we have cookie samples, add a `cookie` header to match.
    // Accessing it will be implicitly allowed by the proxy --
    // if the user defined some cookies, accessing the "cookie" header is also fine.
    const sampleHeaders = rawSampleHeaders ? [
        ...rawSampleHeaders
    ] : [];
    if (sampleHeaders.find(([name])=>name.toLowerCase() === 'cookie')) {
        throw Object.defineProperty(new _instantvalidationerror.InstantValidationError('Invalid sample: Defining cookies via a "cookie" header is not supported. Use `cookies: [{ name: ..., value: ... }]` instead.'), "__NEXT_ERROR_CODE", {
            value: "E1111",
            enumerable: false,
            configurable: true
        });
    }
    if (sampleCookies) {
        const cookieHeaderValue = sampleCookies.toString();
        sampleHeaders.push([
            'cookie',
            // if the `cookies` samples were empty, or they were all `null`, then we have no cookies,
            // and the header isn't present, but should remains readable, so we set it to null.
            cookieHeaderValue !== '' ? cookieHeaderValue : null
        ]);
    }
    const declaredNames = new Set();
    const headersInit = {};
    for (const [name, value] of sampleHeaders){
        declaredNames.add(name.toLowerCase());
        if (value !== null) {
            headersInit[name.toLowerCase()] = value;
        }
    }
    const sealed = _headers.HeadersAdapter.seal(_headers.HeadersAdapter.from(headersInit));
    return new Proxy(sealed, {
        get (target, prop, receiver) {
            if (prop === 'get' || prop === 'has') {
                const originalMethod = Reflect.get(target, prop, receiver);
                const patchedMethod = function(rawName) {
                    const name = rawName.toLowerCase();
                    if (!declaredNames.has(name)) {
                        trackMissingSampleErrorAndThrow(Object.defineProperty(new _instantvalidationerror.InstantValidationError(`Route "${route}" accessed header "${name}" which is not defined in the \`samples\` ` + `of \`unstable_instant\`. Add it to the sample's \`headers\` array, ` + `or \`["${name}", null]\` if it should be absent.`), "__NEXT_ERROR_CODE", {
                            value: "E1116",
                            enumerable: false,
                            configurable: true
                        }));
                    }
                    // typescript can't reconcile a union of functions with a union of return types,
                    // so we have to cast the original return type away
                    return originalMethod.call(target, name);
                };
                return patchedMethod;
            }
            return Reflect.get(target, prop, receiver);
        }
    });
}
function createDraftModeForValidation() {
    // Create a minimal DraftModeProvider-compatible object
    // that always reports draft mode as disabled.
    //
    // private properties that can't be set from outside the class.
    return {
        get isEnabled () {
            return false;
        },
        enable () {
            throw Object.defineProperty(new Error('Draft mode cannot be enabled during build-time instant validation.'), "__NEXT_ERROR_CODE", {
                value: "E1092",
                enumerable: false,
                configurable: true
            });
        },
        disable () {
            throw Object.defineProperty(new Error('Draft mode cannot be disabled during build-time instant validation.'), "__NEXT_ERROR_CODE", {
                value: "E1094",
                enumerable: false,
                configurable: true
            });
        }
    };
}
function createExhaustiveParamsProxy(underlyingParams, declaredParamNames, route) {
    return new Proxy(underlyingParams, {
        get (target, prop, receiver) {
            if (typeof prop === 'string' && !_reflectutils.wellKnownProperties.has(prop) && // Only error when accessing a param that is part of the route but wasn't provided.
            // accessing properties that aren't expected to be a valid param value is fine.
            prop in underlyingParams && !declaredParamNames.has(prop)) {
                trackMissingSampleErrorAndThrow(Object.defineProperty(new _instantvalidationerror.InstantValidationError(`Route "${route}" accessed param "${prop}" which is not defined in the \`samples\` ` + `of \`unstable_instant\`. Add it to the sample's \`params\` object.`), "__NEXT_ERROR_CODE", {
                    value: "E1095",
                    enumerable: false,
                    configurable: true
                }));
            }
            return Reflect.get(target, prop, receiver);
        }
    });
}
function createExhaustiveSearchParamsProxy(searchParams, declaredSearchParamNames, route) {
    return new Proxy(searchParams, {
        get (target, prop, receiver) {
            if (typeof prop === 'string' && !_reflectutils.wellKnownProperties.has(prop) && !declaredSearchParamNames.has(prop)) {
                trackMissingSampleErrorAndThrow(createMissingSearchParamSampleError(route, prop));
            }
            return Reflect.get(target, prop, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string' && !_reflectutils.wellKnownProperties.has(prop) && !declaredSearchParamNames.has(prop)) {
                trackMissingSampleErrorAndThrow(createMissingSearchParamSampleError(route, prop));
            }
            return Reflect.has(target, prop);
        }
    });
}
function createExhaustiveURLSearchParamsProxy(searchParams, declaredSearchParamNames, route) {
    return new Proxy(searchParams, {
        get (target, prop, receiver) {
            // Intercept method calls that access specific param names
            if (prop === 'get' || prop === 'getAll' || prop === 'has') {
                const originalMathod = Reflect.get(target, prop, receiver);
                return (name)=>{
                    if (typeof name === 'string' && !declaredSearchParamNames.has(name)) {
                        trackMissingSampleErrorAndThrow(createMissingSearchParamSampleError(route, name));
                    }
                    return originalMathod.call(target, name);
                };
            }
            const value = Reflect.get(target, prop, receiver);
            // Prevent `TypeError: Value of "this" must be of type URLSearchParams` for methods
            if (typeof value === 'function' && !Object.hasOwn(target, prop)) {
                return value.bind(target);
            }
            return value;
        }
    });
}
function createMissingSearchParamSampleError(route, name) {
    return Object.defineProperty(new _instantvalidationerror.InstantValidationError(`Route "${route}" accessed searchParam "${name}" which is not defined in the \`samples\` ` + `of \`unstable_instant\`. Add it to the sample's \`searchParams\` object, ` + `or \`{ "${name}": null }\` if it should be absent.`), "__NEXT_ERROR_CODE", {
        value: "E1098",
        enumerable: false,
        configurable: true
    });
}
function createRelativeURLFromSamples(route, sampleParams, sampleSearchParams) {
    // Build searchParams query object and URL search string from sample
    const pathname = createPathnameFromRouteAndSampleParams(route, sampleParams ?? {});
    let search = '';
    if (sampleSearchParams) {
        const qs = createURLSearchParamsFromSample(sampleSearchParams).toString();
        if (qs) {
            search = '?' + qs;
        }
    }
    return (0, _parserelativeurl.parseRelativeUrl)(pathname + search, undefined, true);
}
function createURLSearchParamsFromSample(sampleSearchParams) {
    const result = new URLSearchParams();
    if (sampleSearchParams) {
        for (const [key, value] of Object.entries(sampleSearchParams)){
            if (value === null || value === undefined) continue;
            if (Array.isArray(value)) {
                for (const v of value){
                    result.append(key, v);
                }
            } else {
                result.set(key, value);
            }
        }
    }
    return result;
}
/**
 * Substitute sample params into `workStore.route` to create a plausible pathname.
 * TODO(instant-validation-build): this logic is somewhat hacky and likely incomplete,
 * but it should be good enough for some initial testing.
 */ function createPathnameFromRouteAndSampleParams(route, params) {
    let interpolatedSegments = [];
    const rawSegments = route.split('/');
    for (const rawSegment of rawSegments){
        const param = (0, _getsegmentparam.getSegmentParam)(rawSegment);
        if (param) {
            switch(param.paramType){
                case 'catchall':
                case 'optional-catchall':
                    {
                        let paramValue = params[param.paramName];
                        if (paramValue === undefined) {
                            // The value for the param was not provided. `usePathname` will detect this and throw
                            // before this can surface to userspace. Use `[...NAME]` as a placeholder for the param value
                            // in case it pops up somewhere unexpectedly.
                            paramValue = [
                                rawSegment
                            ];
                        } else if (!Array.isArray(paramValue)) {
                            // NOTE: this happens outside of render, so we don't need `trackMissingSampleErrorAndThrow`
                            throw Object.defineProperty(new _instantvalidationerror.InstantValidationError(`Expected sample param value for segment '${rawSegment}' to be an array of strings, got ${typeof paramValue}`), "__NEXT_ERROR_CODE", {
                                value: "E1104",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        interpolatedSegments.push(...paramValue.map((v)=>encodeURIComponent(v)));
                        break;
                    }
                case 'dynamic':
                    {
                        let paramValue = params[param.paramName];
                        if (paramValue === undefined) {
                            // The value for the param was not provided. `usePathname` will detect this and throw
                            // before this can surface to userspace. Use `[NAME]` as a placeholder for the param value
                            // in case it pops up somewhere unexpectedly.
                            paramValue = rawSegment;
                        } else if (typeof paramValue !== 'string') {
                            // NOTE: this happens outside of render, so we don't need `trackMissingSampleErrorAndThrow`
                            throw Object.defineProperty(new _instantvalidationerror.InstantValidationError(`Expected sample param value for segment '${rawSegment}' to be a string, got ${typeof paramValue}`), "__NEXT_ERROR_CODE", {
                                value: "E1108",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        interpolatedSegments.push(encodeURIComponent(paramValue));
                        break;
                    }
                case 'catchall-intercepted-(..)(..)':
                case 'catchall-intercepted-(.)':
                case 'catchall-intercepted-(..)':
                case 'catchall-intercepted-(...)':
                case 'dynamic-intercepted-(..)(..)':
                case 'dynamic-intercepted-(.)':
                case 'dynamic-intercepted-(..)':
                case 'dynamic-intercepted-(...)':
                    {
                        // TODO(instant-validation-build): i don't know how these are supposed to work, or if we can even get them here
                        throw Object.defineProperty(new _invarianterror.InvariantError('Not implemented: Validation of interception routes'), "__NEXT_ERROR_CODE", {
                            value: "E1106",
                            enumerable: false,
                            configurable: true
                        });
                    }
                default:
                    {
                        param.paramType;
                    }
            }
        } else {
            interpolatedSegments.push(rawSegment);
        }
    }
    return interpolatedSegments.join('/');
}
function assertRootParamInSamples(workStore, sampleParams, paramName) {
    if (sampleParams && paramName in sampleParams) {
    // The param is defined in the samples.
    } else {
        const route = workStore.route;
        trackMissingSampleErrorAndThrow(Object.defineProperty(new _instantvalidationerror.InstantValidationError(`Route "${route}" accessed root param "${paramName}" which is not defined in the \`samples\` ` + `of \`unstable_instant\`. Add it to the sample's \`params\` object.`), "__NEXT_ERROR_CODE", {
            value: "E1114",
            enumerable: false,
            configurable: true
        }));
    }
}
}),
"[project]/my-react-app/node_modules/next/dist/server/request/search-params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/my-react-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createPrerenderSearchParamsForClientPage: null,
    createSearchParamsFromClient: null,
    createServerSearchParamsForMetadata: null,
    createServerSearchParamsForServerPage: null,
    makeErroringSearchParamsForUseCache: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createPrerenderSearchParamsForClientPage: function() {
        return createPrerenderSearchParamsForClientPage;
    },
    createSearchParamsFromClient: function() {
        return createSearchParamsFromClient;
    },
    createServerSearchParamsForMetadata: function() {
        return createServerSearchParamsForMetadata;
    },
    createServerSearchParamsForServerPage: function() {
        return createServerSearchParamsForServerPage;
    },
    makeErroringSearchParamsForUseCache: function() {
        return makeErroringSearchParamsForUseCache;
    }
});
const _workasyncstorageexternal = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _varyparams = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/vary-params.js [app-client] (ecmascript)");
const _reflect = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/request/utils.js [app-client] (ecmascript)");
const _stagedrendering = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/staged-rendering.js [app-client] (ecmascript)");
function createSearchParamsFromClient(underlyingSearchParams) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to be initialized'), "__NEXT_ERROR_CODE", {
            value: "E1068",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderSearchParams(workStore, workUnitStore);
            case 'validation-client':
                {
                    return createClientSearchParamsInValidation(underlyingSearchParams, workStore, workUnitStore);
                }
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError('createSearchParamsFromClient should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
                    value: "E769",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createSearchParamsFromClient should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E739",
                    enumerable: false,
                    configurable: true
                });
            case 'generate-static-params':
                throw Object.defineProperty(new _invarianterror.InvariantError('createSearchParamsFromClient should not be called inside generateStaticParams.'), "__NEXT_ERROR_CODE", {
                    value: "E1133",
                    enumerable: false,
                    configurable: true
                });
            case 'request':
                // Client searchParams are not runtime prefetchable
                const isRuntimePrefetchable = false;
                return createRenderSearchParams(underlyingSearchParams, workStore, workUnitStore, isRuntimePrefetchable);
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createServerSearchParamsForMetadata(underlyingSearchParams, isRuntimePrefetchable) {
    const metadataVaryParamsAccumulator = (0, _varyparams.getMetadataVaryParamsAccumulator)();
    return createServerSearchParamsForServerPage(underlyingSearchParams, metadataVaryParamsAccumulator, isRuntimePrefetchable);
}
function createServerSearchParamsForServerPage(underlyingSearchParams, varyParamsAccumulator, isRuntimePrefetchable) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to be initialized'), "__NEXT_ERROR_CODE", {
            value: "E1068",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderSearchParams(workStore, workUnitStore);
            case 'validation-client':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerSearchParamsForServerPage should not be called in a client validation.'), "__NEXT_ERROR_CODE", {
                    value: "E1066",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerSearchParamsForServerPage should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E747",
                    enumerable: false,
                    configurable: true
                });
            case 'generate-static-params':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerSearchParamsForServerPage should not be called inside generateStaticParams.'), "__NEXT_ERROR_CODE", {
                    value: "E1128",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                return createRuntimePrerenderSearchParams(underlyingSearchParams, workUnitStore, varyParamsAccumulator, isRuntimePrefetchable);
            case 'request':
                return createRenderSearchParams(underlyingSearchParams, workStore, workUnitStore, isRuntimePrefetchable);
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createPrerenderSearchParamsForClientPage() {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to be initialized'), "__NEXT_ERROR_CODE", {
            value: "E1068",
            enumerable: false,
            configurable: true
        });
    }
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
                // We're prerendering in a mode that aborts (cacheComponents) and should stall
                // the promise to ensure the RSC side is considered dynamic
                return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, '`searchParams`');
            case 'validation-client':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderSearchParamsForClientPage should not be called in a client validation.'), "__NEXT_ERROR_CODE", {
                    value: "E1061",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderSearchParamsForClientPage should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
                    value: "E768",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderSearchParamsForClientPage should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E746",
                    enumerable: false,
                    configurable: true
                });
            case 'generate-static-params':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderSearchParamsForClientPage should not be called inside generateStaticParams.'), "__NEXT_ERROR_CODE", {
                    value: "E1124",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'request':
                return Promise.resolve({});
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createStaticPrerenderSearchParams(workStore, prerenderStore) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    }
    switch(prerenderStore.type){
        case 'prerender':
        case 'prerender-client':
            // We are in a cacheComponents (PPR or otherwise) prerender
            return makeHangingSearchParams(workStore, prerenderStore);
        case 'prerender-ppr':
        case 'prerender-legacy':
            // We are in a legacy static generation and need to interrupt the
            // prerender when search params are accessed.
            return makeErroringSearchParams(workStore, prerenderStore);
        default:
            return prerenderStore;
    }
}
function createRuntimePrerenderSearchParams(underlyingSearchParams, workUnitStore, varyParamsAccumulator, isRuntimePrefetchable) {
    const underlyingSearchParamsWithVarying = varyParamsAccumulator !== null ? (0, _varyparams.createVaryingSearchParams)(varyParamsAccumulator, underlyingSearchParams) : underlyingSearchParams;
    const result = makeUntrackedSearchParams(underlyingSearchParamsWithVarying);
    const { stagedRendering } = workUnitStore;
    if (!stagedRendering) {
        return result;
    }
    const stage = isRuntimePrefetchable ? _stagedrendering.RenderStage.EarlyRuntime : _stagedrendering.RenderStage.Runtime;
    return stagedRendering.waitForStage(stage).then(()=>result);
}
function createRenderSearchParams(underlyingSearchParams, workStore, requestStore, isRuntimePrefetchable) {
    if (workStore.forceStatic) {
        // When using forceStatic we override all other logic and always just return an empty
        // dictionary object.
        return Promise.resolve({});
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            // Semantically we only need the dev tracking when running in `next dev`
            // but since you would never use next dev with production NODE_ENV we use this
            // as a proxy so we can statically exclude this code from production builds.
            return makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams, workStore, requestStore, isRuntimePrefetchable);
        } else //TURBOPACK unreachable
        ;
    }
}
const CachedSearchParams = new WeakMap();
const CachedSearchParamsForUseCache = new WeakMap();
function makeHangingSearchParams(workStore, prerenderStore) {
    const cachedSearchParams = CachedSearchParams.get(prerenderStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`searchParams`');
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it.
                // We know it isn't a dynamic access because it can only be something
                // that was previously written to the promise and thus not an underlying searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            switch(prop){
                case 'then':
                    {
                        const expression = '`await searchParams`, `searchParams.then`, or similar';
                        (0, _dynamicrendering.annotateDynamicAccess)(expression, prerenderStore);
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
                case 'status':
                    {
                        const expression = '`use(searchParams)`, `searchParams.status`, or similar';
                        (0, _dynamicrendering.annotateDynamicAccess)(expression, prerenderStore);
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
                default:
                    {
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                    }
            }
        }
    });
    CachedSearchParams.set(prerenderStore, proxiedPromise);
    return proxiedPromise;
}
function makeErroringSearchParams(workStore, prerenderStore) {
    const cachedSearchParams = CachedSearchParams.get(workStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const underlyingSearchParams = {};
    // For search params we don't construct a ReactPromise because we want to interrupt
    // rendering on any property access that was not set from outside and so we only want
    // to have properties like value and status if React sets them.
    const promise = Promise.resolve(underlyingSearchParams);
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it.
                // We know it isn't a dynamic access because it can only be something
                // that was previously written to the promise and thus not an underlying searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            if (typeof prop === 'string' && prop === 'then') {
                const expression = '`await searchParams`, `searchParams.then`, or similar';
                if (workStore.dynamicShouldError) {
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                } else if (prerenderStore.type === 'prerender-ppr') {
                    // PPR Prerender (no cacheComponents)
                    (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                } else {
                    // Legacy Prerender
                    (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
    });
    CachedSearchParams.set(workStore, proxiedPromise);
    return proxiedPromise;
}
function makeErroringSearchParamsForUseCache() {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to be initialized'), "__NEXT_ERROR_CODE", {
            value: "E1068",
            enumerable: false,
            configurable: true
        });
    }
    const cachedSearchParams = CachedSearchParamsForUseCache.get(workStore);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = Promise.resolve({});
    const proxiedPromise = new Proxy(promise, {
        get: function get(target, prop, receiver) {
            if (Object.hasOwn(promise, prop)) {
                // The promise has this property directly. we must return it. We know it
                // isn't a dynamic access because it can only be something that was
                // previously written to the promise and thus not an underlying
                // searchParam value
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            if (typeof prop === 'string' && (prop === 'then' || !_reflectutils.wellKnownProperties.has(prop))) {
                (0, _utils.throwForSearchParamsAccessInUseCache)(workStore, get);
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
    });
    CachedSearchParamsForUseCache.set(workStore, proxiedPromise);
    return proxiedPromise;
}
function makeUntrackedSearchParams(underlyingSearchParams) {
    const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
    if (cachedSearchParams) {
        return cachedSearchParams;
    }
    const promise = Promise.resolve(underlyingSearchParams);
    CachedSearchParams.set(underlyingSearchParams, promise);
    return promise;
}
function makeUntrackedSearchParamsWithDevWarnings(underlyingSearchParams, workStore, requestStore, isRuntimePrefetchable) {
    if (requestStore.asyncApiPromises) {
        // Do not cache the resulting promise. If we do, we'll only show the first "awaited at"
        // across all segments that receive searchParams.
        return makeUntrackedSearchParamsWithDevWarningsImpl(underlyingSearchParams, workStore, requestStore, isRuntimePrefetchable);
    } else {
        const cachedSearchParams = CachedSearchParams.get(underlyingSearchParams);
        if (cachedSearchParams) {
            return cachedSearchParams;
        }
        const promise = makeUntrackedSearchParamsWithDevWarningsImpl(underlyingSearchParams, workStore, requestStore, isRuntimePrefetchable);
        CachedSearchParams.set(requestStore, promise);
        return promise;
    }
}
function makeUntrackedSearchParamsWithDevWarningsImpl(underlyingSearchParams, workStore, requestStore, isRuntimePrefetchable) {
    const promiseInitialized = {
        current: false
    };
    const proxiedUnderlying = instrumentSearchParamsObjectWithDevWarnings(underlyingSearchParams, workStore, promiseInitialized);
    let promise;
    if (requestStore.asyncApiPromises) {
        // We wrap each instance of searchParams in a `new Promise()`.
        // This is important when all awaits are in third party which would otherwise
        // track all the way to the internal params.
        const sharedSearchParamsParent = isRuntimePrefetchable ? requestStore.asyncApiPromises.earlySharedSearchParamsParent : requestStore.asyncApiPromises.sharedSearchParamsParent;
        promise = new Promise((resolve, reject)=>{
            sharedSearchParamsParent.then(()=>resolve(proxiedUnderlying), reject);
        });
        // @ts-expect-error
        promise.displayName = 'searchParams';
    } else {
        promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(proxiedUnderlying, requestStore, _stagedrendering.RenderStage.Runtime);
    }
    promise.then(()=>{
        promiseInitialized.current = true;
    }, // is aborted before it can reach the runtime stage.
    // In that case, we have to prevent an unhandled rejection from the promise
    // created by this `.then()` call.
    // This does not affect the `promiseInitialized` logic above,
    // because `proxiedUnderlying` will not be used to resolve the promise,
    // so there's no risk of any of its properties being accessed and triggering
    // an undesireable warning.
    ignoreReject);
    return instrumentSearchParamsPromiseWithDevWarnings(underlyingSearchParams, promise, workStore);
}
function ignoreReject() {}
function instrumentSearchParamsObjectWithDevWarnings(underlyingSearchParams, workStore, promiseInitialized) {
    // We have an unfortunate sequence of events that requires this initialization logic. We want to instrument the underlying
    // searchParams object to detect if you are accessing values in dev. This is used for warnings and for things like the static prerender
    // indicator. However when we pass this proxy to our Promise.resolve() below the VM checks if the resolved value is a promise by looking
    // at the `.then` property. To our dynamic tracking logic this is indistinguishable from a `then` searchParam and so we would normally trigger
    // dynamic tracking. However we know that this .then is not real dynamic access, it's just how thenables resolve in sequence. So we introduce
    // this initialization concept so we omit the dynamic check until after we've constructed our resolved promise.
    return new Proxy(underlyingSearchParams, {
        get (target, prop, receiver) {
            if (typeof prop === 'string' && promiseInitialized.current) {
                if (workStore.dynamicShouldError) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (workStore.dynamicShouldError) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            if (workStore.dynamicShouldError) {
                const expression = '`{...searchParams}`, `Object.keys(searchParams)`, or similar';
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
            }
            return Reflect.ownKeys(target);
        }
    });
}
function instrumentSearchParamsPromiseWithDevWarnings(underlyingSearchParams, promise, workStore) {
    // Track which properties we should warn for.
    const proxiedProperties = new Set();
    Object.keys(underlyingSearchParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    return new Proxy(promise, {
        get (target, prop, receiver) {
            if (prop === 'then' && workStore.dynamicShouldError) {
                const expression = '`searchParams.then`';
                (0, _utils.throwWithStaticGenerationBailoutErrorWithDynamicError)(workStore.route, expression);
            }
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('searchParams', prop);
                    warnForSyncAccess(workStore.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return Reflect.set(target, prop, value, receiver);
        },
        has (target, prop) {
            if (typeof prop === 'string') {
                if (!_reflectutils.wellKnownProperties.has(prop) && (proxiedProperties.has(prop) || // We are accessing a property that doesn't exist on the promise nor
                // the underlying searchParams.
                Reflect.has(target, prop) === false)) {
                    const expression = (0, _reflectutils.describeHasCheckingStringProperty)('searchParams', prop);
                    warnForSyncAccess(workStore.route, expression);
                }
            }
            return Reflect.has(target, prop);
        },
        ownKeys (target) {
            const expression = '`Object.keys(searchParams)` or similar';
            warnForSyncAccess(workStore.route, expression);
            return Reflect.ownKeys(target);
        }
    });
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createSearchAccessError);
function createSearchAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`searchParams\` is a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E848",
        enumerable: false,
        configurable: true
    });
}
function createClientSearchParamsInValidation(underlyingSearchParams, workStore, workUnitStore) {
    var _workUnitStore_validationSamples;
    const { createExhaustiveSearchParamsProxy } = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/instant-validation/instant-samples.js [app-client] (ecmascript)");
    const declaredKeys = new Set(Object.keys(((_workUnitStore_validationSamples = workUnitStore.validationSamples) == null ? void 0 : _workUnitStore_validationSamples.searchParams) ?? {}));
    underlyingSearchParams = createExhaustiveSearchParamsProxy(underlyingSearchParams, declaredKeys, workStore.route);
    return Promise.resolve(underlyingSearchParams);
}
}),
"[project]/my-react-app/node_modules/next/dist/server/app-render/dynamic-access-async-storage-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dynamicAccessAsyncStorageInstance", {
    enumerable: true,
    get: function() {
        return dynamicAccessAsyncStorageInstance;
    }
});
const _asynclocalstorage = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/async-local-storage.js [app-client] (ecmascript)");
const dynamicAccessAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
}),
"[project]/my-react-app/node_modules/next/dist/server/app-render/dynamic-access-async-storage.external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dynamicAccessAsyncStorage", {
    enumerable: true,
    get: function() {
        return _dynamicaccessasyncstorageinstance.dynamicAccessAsyncStorageInstance;
    }
});
const _dynamicaccessasyncstorageinstance = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/dynamic-access-async-storage-instance.js [app-client] (ecmascript)");
}),
"[project]/my-react-app/node_modules/next/dist/server/request/params.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/my-react-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createParamsFromClient: null,
    createPrerenderParamsForClientSegment: null,
    createServerParamsForMetadata: null,
    createServerParamsForRoute: null,
    createServerParamsForServerSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createParamsFromClient: function() {
        return createParamsFromClient;
    },
    createPrerenderParamsForClientSegment: function() {
        return createPrerenderParamsForClientSegment;
    },
    createServerParamsForMetadata: function() {
        return createServerParamsForMetadata;
    },
    createServerParamsForRoute: function() {
        return createServerParamsForRoute;
    },
    createServerParamsForServerSegment: function() {
        return createServerParamsForServerSegment;
    }
});
const _workasyncstorageexternal = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _varyparams = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/vary-params.js [app-client] (ecmascript)");
const _reflect = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-client] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
const _reflectutils = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/utils/reflect-utils.js [app-client] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/dynamic-rendering-utils.js [app-client] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-client] (ecmascript)");
const _dynamicaccessasyncstorageexternal = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/dynamic-access-async-storage.external.js [app-client] (ecmascript)");
const _stagedrendering = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/staged-rendering.js [app-client] (ecmascript)");
function createParamsFromClient(underlyingParams) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to be initialized'), "__NEXT_ERROR_CODE", {
            value: "E1068",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                // Client params don't need additional vary tracking because by the
                // time they reach the client, the access would have already been
                // tracked by the server.
                const varyParamsAccumulator = null;
                return createStaticPrerenderParams(underlyingParams, null, workStore, workUnitStore, varyParamsAccumulator);
            case 'validation-client':
                return createClientParamsInInstantValidation(underlyingParams, workStore, workUnitStore.validationSamples);
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createParamsFromClient should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E736",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError('createParamsFromClient should not be called in a runtime prerender.'), "__NEXT_ERROR_CODE", {
                    value: "E770",
                    enumerable: false,
                    configurable: true
                });
            case 'generate-static-params':
                throw Object.defineProperty(new _invarianterror.InvariantError('createParamsFromClient should not be called inside generateStaticParams.'), "__NEXT_ERROR_CODE", {
                    value: "E1122",
                    enumerable: false,
                    configurable: true
                });
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // Semantically we only need the dev tracking when running in `next dev`
                    // but since you would never use next dev with production NODE_ENV we use this
                    // as a proxy so we can statically exclude this code from production builds.
                    const fallbackParams = workUnitStore.fallbackParams;
                    // Client params are not runtime prefetchable
                    const isRuntimePrefetchable = false;
                    return createRenderParamsInDev(underlyingParams, fallbackParams, workStore, workUnitStore, isRuntimePrefetchable);
                } else //TURBOPACK unreachable
                ;
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createServerParamsForMetadata(underlyingParams, optionalCatchAllParamName, isRuntimePrefetchable) {
    const metadataVaryParamsAccumulator = (0, _varyparams.getMetadataVaryParamsAccumulator)();
    return createServerParamsForServerSegment(underlyingParams, optionalCatchAllParamName, metadataVaryParamsAccumulator, isRuntimePrefetchable);
}
function createServerParamsForRoute(underlyingParams, varyParamsAccumulator = null) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to be initialized'), "__NEXT_ERROR_CODE", {
            value: "E1068",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderParams(underlyingParams, null, workStore, workUnitStore, varyParamsAccumulator);
            case 'prerender-client':
            case 'validation-client':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForRoute should not be called in client contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E1064",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForRoute should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E738",
                    enumerable: false,
                    configurable: true
                });
            case 'generate-static-params':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForRoute should not be called inside generateStaticParams.'), "__NEXT_ERROR_CODE", {
                    value: "E1131",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                {
                    // Route params are not runtime prefetchable
                    const isRuntimePrefetchable = false;
                    return createRuntimePrerenderParams(underlyingParams, null, workUnitStore, varyParamsAccumulator, isRuntimePrefetchable);
                }
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // Semantically we only need the dev tracking when running in `next dev`
                    // but since you would never use next dev with production NODE_ENV we use this
                    // as a proxy so we can statically exclude this code from production builds.
                    const fallbackParams = workUnitStore.fallbackParams;
                    // Route params are not runtime prefetchable
                    const isRuntimePrefetchable = false;
                    return createRenderParamsInDev(underlyingParams, fallbackParams, workStore, workUnitStore, isRuntimePrefetchable);
                } else //TURBOPACK unreachable
                ;
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createServerParamsForServerSegment(underlyingParams, optionalCatchAllParamName, varyParamsAccumulator, isRuntimePrefetchable) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to be initialized'), "__NEXT_ERROR_CODE", {
            value: "E1068",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                return createStaticPrerenderParams(underlyingParams, optionalCatchAllParamName, workStore, workUnitStore, varyParamsAccumulator);
            case 'validation-client':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForServerSegment should not be called in client contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E1101",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForServerSegment should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E743",
                    enumerable: false,
                    configurable: true
                });
            case 'generate-static-params':
                throw Object.defineProperty(new _invarianterror.InvariantError('createServerParamsForServerSegment should not be called inside generateStaticParams.'), "__NEXT_ERROR_CODE", {
                    value: "E1120",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-runtime':
                return createRuntimePrerenderParams(underlyingParams, optionalCatchAllParamName, workUnitStore, varyParamsAccumulator, isRuntimePrefetchable);
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    // Semantically we only need the dev tracking when running in `next dev`
                    // but since you would never use next dev with production NODE_ENV we use this
                    // as a proxy so we can statically exclude this code from production builds.
                    const fallbackParams = workUnitStore.fallbackParams;
                    return createRenderParamsInDev(underlyingParams, fallbackParams, workStore, workUnitStore, isRuntimePrefetchable);
                } else //TURBOPACK unreachable
                ;
            default:
                workUnitStore;
        }
    }
    (0, _workunitasyncstorageexternal.throwInvariantForMissingStore)();
}
function createPrerenderParamsForClientSegment(underlyingParams) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError('Missing workStore in createPrerenderParamsForClientSegment'), "__NEXT_ERROR_CODE", {
            value: "E773",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
                const fallbackParams = workUnitStore.fallbackRouteParams;
                if (fallbackParams) {
                    for(let key in underlyingParams){
                        if (fallbackParams.has(key)) {
                            // This params object has one or more fallback params, so we need
                            // to consider the awaiting of this params object "dynamic". Since
                            // we are in cacheComponents mode we encode this as a promise that never
                            // resolves.
                            return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, '`params`');
                        }
                    }
                }
                break;
            case 'validation-client':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderParamsForClientSegment should not be called in validation contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E1099",
                    enumerable: false,
                    configurable: true
                });
                break;
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderParamsForClientSegment should not be called in cache contexts.'), "__NEXT_ERROR_CODE", {
                    value: "E734",
                    enumerable: false,
                    configurable: true
                });
            case 'generate-static-params':
                throw Object.defineProperty(new _invarianterror.InvariantError('createPrerenderParamsForClientSegment should not be called inside generateStaticParams.'), "__NEXT_ERROR_CODE", {
                    value: "E1126",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'prerender-runtime':
            case 'request':
                break;
            default:
                workUnitStore;
        }
    }
    // We're prerendering in a mode that does not abort. We resolve the promise without
    // any tracking because we're just transporting a value from server to client where the tracking
    // will be applied.
    return Promise.resolve(underlyingParams);
}
function createStaticPrerenderParams(underlyingParams, optionalCatchAllParamName, workStore, prerenderStore, varyParamsAccumulator) {
    const underlyingParamsWithVarying = varyParamsAccumulator !== null ? (0, _varyparams.createVaryingParams)(varyParamsAccumulator, underlyingParams, optionalCatchAllParamName) : underlyingParams;
    switch(prerenderStore.type){
        case 'prerender':
        case 'prerender-client':
            {
                const fallbackParams = prerenderStore.fallbackRouteParams;
                if (fallbackParams) {
                    for(const key in underlyingParams){
                        if (fallbackParams.has(key)) {
                            // This params object has one or more fallback params, so we need
                            // to consider the awaiting of this params object "dynamic". Since
                            // we are in cacheComponents mode we encode this as a promise that never
                            // resolves.
                            return makeHangingParams(underlyingParamsWithVarying, workStore, prerenderStore);
                        }
                    }
                }
                break;
            }
        case 'prerender-ppr':
            {
                const fallbackParams = prerenderStore.fallbackRouteParams;
                if (fallbackParams) {
                    for(const key in underlyingParams){
                        if (fallbackParams.has(key)) {
                            return makeErroringParams(underlyingParamsWithVarying, fallbackParams, workStore, prerenderStore);
                        }
                    }
                }
                break;
            }
        case 'prerender-legacy':
            break;
        default:
            prerenderStore;
    }
    return makeUntrackedParams(underlyingParamsWithVarying);
}
function createRuntimePrerenderParams(underlyingParams, optionalCatchAllParamName, workUnitStore, varyParamsAccumulator, isRuntimePrefetchable) {
    const underlyingParamsWithVarying = varyParamsAccumulator !== null ? (0, _varyparams.createVaryingParams)(varyParamsAccumulator, underlyingParams, optionalCatchAllParamName) : underlyingParams;
    const result = makeUntrackedParams(underlyingParamsWithVarying);
    const { stagedRendering } = workUnitStore;
    if (!stagedRendering) {
        return result;
    }
    const stage = isRuntimePrefetchable ? _stagedrendering.RenderStage.EarlyRuntime : _stagedrendering.RenderStage.Runtime;
    return stagedRendering.waitForStage(stage).then(()=>result);
}
function hasFallbackRouteParams(underlyingParams, fallbackParams) {
    if (fallbackParams) {
        for(let key in underlyingParams){
            if (fallbackParams.has(key)) {
                return true;
            }
        }
    }
    return false;
}
function createServerParamsInInstantValidation(underlyingParams, workStore, validationSamples, asyncApiPromises, isRuntimePrefetchable) {
    const { createExhaustiveParamsProxy } = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/instant-validation/instant-samples.js [app-client] (ecmascript)");
    const declaredParams = new Set(Object.keys(validationSamples.params ?? {}));
    const proxiedUnderlying = createExhaustiveParamsProxy(underlyingParams, declaredParams, workStore.route);
    return (isRuntimePrefetchable ? asyncApiPromises.earlySharedParamsParent : asyncApiPromises.sharedParamsParent).then(()=>proxiedUnderlying);
}
function createClientParamsInInstantValidation(underlyingParams, workStore, validationSamples) {
    const { createExhaustiveParamsProxy } = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/app-render/instant-validation/instant-samples.js [app-client] (ecmascript)");
    const declaredParams = new Set(Object.keys((validationSamples == null ? void 0 : validationSamples.params) ?? {}));
    const proxiedUnderlying = createExhaustiveParamsProxy(underlyingParams, declaredParams, workStore.route);
    return Promise.resolve(proxiedUnderlying);
}
function createRenderParamsInProd(underlyingParams) {
    return makeUntrackedParams(underlyingParams);
}
function createRenderParamsInDev(underlyingParams, fallbackParams, workStore, requestStore, isRuntimePrefetchable) {
    return makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams, hasFallbackRouteParams(underlyingParams, fallbackParams), workStore, requestStore, isRuntimePrefetchable);
}
const CachedParams = new WeakMap();
const fallbackParamsProxyHandler = {
    get: function get(target, prop, receiver) {
        if (prop === 'then' || prop === 'catch' || prop === 'finally') {
            const originalMethod = _reflect.ReflectAdapter.get(target, prop, receiver);
            return ({
                [prop]: (...args)=>{
                    const store = _dynamicaccessasyncstorageexternal.dynamicAccessAsyncStorage.getStore();
                    if (store) {
                        store.abortController.abort(Object.defineProperty(new Error(`Accessed fallback \`params\` during prerendering.`), "__NEXT_ERROR_CODE", {
                            value: "E691",
                            enumerable: false,
                            configurable: true
                        }));
                    }
                    return new Proxy(originalMethod.apply(target, args), fallbackParamsProxyHandler);
                }
            })[prop];
        }
        return _reflect.ReflectAdapter.get(target, prop, receiver);
    }
};
function makeHangingParams(underlyingParams, workStore, prerenderStore) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const promise = new Proxy((0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`params`'), fallbackParamsProxyHandler);
    CachedParams.set(underlyingParams, promise);
    return promise;
}
function makeErroringParams(underlyingParams, fallbackParams, workStore, prerenderStore) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const augmentedUnderlying = {
        ...underlyingParams
    };
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = Promise.resolve(augmentedUnderlying);
    CachedParams.set(underlyingParams, promise);
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            if (fallbackParams.has(prop)) {
                Object.defineProperty(augmentedUnderlying, prop, {
                    get () {
                        const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                        // In most dynamic APIs we also throw if `dynamic = "error"` however
                        // for params is only dynamic when we're generating a fallback shell
                        // and even when `dynamic = "error"` we still support generating dynamic
                        // fallback shells
                        // TODO remove this comment when cacheComponents is the default since there
                        // will be no `dynamic = "error"`
                        if (prerenderStore.type === 'prerender-ppr') {
                            // PPR Prerender (no cacheComponents)
                            (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                        } else {
                            // Legacy Prerender
                            (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                        }
                    },
                    enumerable: true
                });
            }
        }
    });
    return promise;
}
function makeUntrackedParams(underlyingParams) {
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    const promise = Promise.resolve(underlyingParams);
    CachedParams.set(underlyingParams, promise);
    return promise;
}
function makeDynamicallyTrackedParamsWithDevWarnings(underlyingParams, hasFallbackParams, workStore, requestStore, isRuntimePrefetchable) {
    if (requestStore.asyncApiPromises && hasFallbackParams) {
        // We wrap each instance of params in a `new Promise()`, because deduping
        // them across requests doesn't work anyway and this let us show each
        // await a different set of values. This is important when all awaits
        // are in third party which would otherwise track all the way to the
        // internal params.
        const sharedParamsParent = isRuntimePrefetchable ? requestStore.asyncApiPromises.earlySharedParamsParent : requestStore.asyncApiPromises.sharedParamsParent;
        const promise = new Promise((resolve, reject)=>{
            sharedParamsParent.then(()=>resolve(underlyingParams), reject);
        });
        // @ts-expect-error
        promise.displayName = 'params';
        return instrumentParamsPromiseWithDevWarnings(underlyingParams, promise, workStore);
    }
    const cachedParams = CachedParams.get(underlyingParams);
    if (cachedParams) {
        return cachedParams;
    }
    // We don't use makeResolvedReactPromise here because params
    // supports copying with spread and we don't want to unnecessarily
    // instrument the promise with spreadable properties of ReactPromise.
    const promise = hasFallbackParams ? (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingParams, requestStore, _stagedrendering.RenderStage.Runtime) : Promise.resolve(underlyingParams);
    const proxiedPromise = instrumentParamsPromiseWithDevWarnings(underlyingParams, promise, workStore);
    CachedParams.set(underlyingParams, proxiedPromise);
    return proxiedPromise;
}
function instrumentParamsPromiseWithDevWarnings(underlyingParams, promise, workStore) {
    // Track which properties we should warn for.
    const proxiedProperties = new Set();
    Object.keys(underlyingParams).forEach((prop)=>{
        if (_reflectutils.wellKnownProperties.has(prop)) {
        // These properties cannot be shadowed because they need to be the
        // true underlying value for Promises to work correctly at runtime
        } else {
            proxiedProperties.add(prop);
        }
    });
    return new Proxy(promise, {
        get (target, prop, receiver) {
            if (typeof prop === 'string') {
                if (proxiedProperties.has(prop)) {
                    const expression = (0, _reflectutils.describeStringPropertyAccess)('params', prop);
                    warnForSyncAccess(workStore.route, expression);
                }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        },
        set (target, prop, value, receiver) {
            if (typeof prop === 'string') {
                proxiedProperties.delete(prop);
            }
            return _reflect.ReflectAdapter.set(target, prop, value, receiver);
        },
        ownKeys (target) {
            const expression = '`...params` or similar expression';
            warnForSyncAccess(workStore.route, expression);
            return Reflect.ownKeys(target);
        }
    });
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createParamsAccessError);
function createParamsAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`params\` is a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E834",
        enumerable: false,
        configurable: true
    });
}
}),
"[project]/my-react-app/node_modules/next/dist/client/components/client-page.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientPageRoot", {
    enumerable: true,
    get: function() {
        return ClientPageRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _routeparams = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/client/route-params.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
function ClientPageRoot({ Component, serverProvidedParams }) {
    let searchParams;
    let params;
    if (serverProvidedParams !== null) {
        searchParams = serverProvidedParams.searchParams;
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params as
        // props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
        // This is an intentional behavior change: when Cache Components is enabled,
        // client segments receive the "canonical" search params, not the
        // rewritten ones. Users should either call useSearchParams directly or pass
        // the rewritten ones in from a Server Component.
        // TODO: Log a deprecation error when this object is accessed
        searchParams = (0, _routeparams.urlSearchParamsToParsedUrlQuery)((0, _react.use)(_hooksclientcontextsharedruntime.SearchParamsContext));
    }
    if (typeof window === 'undefined') {
        let clientSearchParams;
        let clientParams;
        const { createSearchParamsFromClient } = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/request/search-params.js [app-client] (ecmascript)");
        clientSearchParams = createSearchParamsFromClient(searchParams);
        const { createParamsFromClient } = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/request/params.js [app-client] (ecmascript)");
        clientParams = createParamsFromClient(params);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            params: clientParams,
            searchParams: clientSearchParams
        });
    } else {
        const { createRenderSearchParamsFromClient } = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/client/request/search-params.browser.js [app-client] (ecmascript)");
        const clientSearchParams = createRenderSearchParamsFromClient(searchParams);
        const { createRenderParamsFromClient } = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)");
        const clientParams = createRenderParamsFromClient(params);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            params: clientParams,
            searchParams: clientSearchParams
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/my-react-app/node_modules/next/dist/client/components/client-segment.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientSegmentRoot", {
    enumerable: true,
    get: function() {
        return ClientSegmentRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function ClientSegmentRoot({ Component, slots, serverProvidedParams }) {
    let params;
    if (serverProvidedParams !== null) {
        params = serverProvidedParams.params;
    } else {
        // When Cache Components is enabled, the server does not pass the params
        // as props; they are parsed on the client and passed via context.
        const layoutRouterContext = (0, _react.use)(_approutercontextsharedruntime.LayoutRouterContext);
        params = layoutRouterContext !== null ? layoutRouterContext.parentParams : {};
    }
    if (typeof window === 'undefined') {
        const { createParamsFromClient } = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/request/params.js [app-client] (ecmascript)");
        const clientParams = createParamsFromClient(params);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...slots,
            params: clientParams
        });
    } else {
        const { createRenderParamsFromClient } = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/client/request/params.browser.js [app-client] (ecmascript)");
        const clientParams = createRenderParamsFromClient(params);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...slots,
            params: clientParams
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/my-react-app/node_modules/next/dist/lib/metadata/generate/icon-mark.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IconMark", {
    enumerable: true,
    get: function() {
        return IconMark;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const IconMark = ()=>{
    if (typeof window !== 'undefined') {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
        name: "\xabnxt-icon\xbb"
    });
};
}),
]);

//# sourceMappingURL=1bwf_0p1g4z0._.js.map