module.exports = [
"[project]/my-react-app/node_modules/styled-jsx/dist/index/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

__turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/compiled/client-only/index.js [app-ssr] (ecmascript)");
var React = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
var isProd = typeof process !== "undefined" && process.env && ("TURBOPACK compile-time value", "development") === "production";
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
        var node = ("TURBOPACK compile-time value", "undefined") !== "undefined" && document.querySelector('meta[property="csp-nonce"]');
        this._nonce = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
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
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && this._optimizeForSpeed) //TURBOPACK unreachable
        ;
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
        if ("TURBOPACK compile-time truthy", 1) {
            if (typeof index !== "number") {
                index = this._serverSheet.cssRules.length;
            }
            this._serverSheet.insertRule(rule, index);
            return this._rulesCount++;
        }
        //TURBOPACK unreachable
        ;
        var sheet;
        var insertionPoint;
    };
    _proto.replaceRule = function replaceRule(index, rule) {
        if (this._optimizeForSpeed || ("TURBOPACK compile-time value", "undefined") === "undefined") {
            var sheet = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : this._serverSheet;
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
        } else //TURBOPACK unreachable
        {
            var tag;
        }
        return index;
    };
    _proto.deleteRule = function deleteRule(index) {
        if ("TURBOPACK compile-time truthy", 1) {
            this._serverSheet.deleteRule(index);
            return;
        }
        //TURBOPACK unreachable
        ;
        var tag;
    };
    _proto.flush = function flush() {
        this._injected = false;
        this._rulesCount = 0;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            // simpler on server
            this._serverSheet.cssRules = [];
        }
    };
    _proto.cssRules = function cssRules() {
        var _this = this;
        if ("TURBOPACK compile-time truthy", 1) {
            return this._serverSheet.cssRules;
        }
        //TURBOPACK unreachable
        ;
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
    if ("TURBOPACK compile-time truthy", 1) {
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
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && !this._fromServer) //TURBOPACK unreachable
        ;
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
    var ref = React.useState(function() {
        return rootRegistry || configuredRegistry || createStyleRegistry();
    }), registry = ref[0];
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
var defaultRegistry = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
function JSXStyle(props) {
    var registry = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : useStyleRegistry();
    // If `registry` does not exist, we do nothing here.
    if (!registry) {
        return null;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        registry.add(props);
        return null;
    }
    //TURBOPACK unreachable
    ;
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
"[project]/my-react-app/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/my-react-app/node_modules/styled-jsx/dist/index/index.js [app-ssr] (ecmascript)").style;
}),
"[project]/my-react-app/node_modules/@rive-app/react-canvas/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

Object.defineProperty(exports, "__esModule", {
    value: !0
});
var observer, React = __turbopack_context__.r("[project]/my-react-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"), canvas = __turbopack_context__.r("[project]/my-react-app/node_modules/@rive-app/canvas/rive.js [app-ssr] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
function useDevicePixelRatio(e) {
    var t = e || getDevicePixelRatio(), n = React.useState(t), a = n[0], r = n[1];
    return React.useEffect(function() {
        if ("u" > ("TURBOPACK compile-time value", "undefined") && "matchMedia" in window) {
            var t = function() {
                r(e || getDevicePixelRatio());
            }, n = window.matchMedia("screen and (resolution: " + a + "dppx)");
            return n.hasOwnProperty("addEventListener") ? n.addEventListener("change", t) : n.addListener(t), function() {
                n.hasOwnProperty("removeEventListener") ? n.removeEventListener("change", t) : n.removeListener(t);
            };
        }
    }, [
        a,
        e
    ]), a;
}
function getDevicePixelRatio() {
    return Math.min(Math.max(1, "u" > ("TURBOPACK compile-time value", "undefined") && "number" == typeof window.devicePixelRatio ? window.devicePixelRatio : 1), 3);
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
    React.useEffect(function() {
        if ("u" > ("TURBOPACK compile-time value", "undefined") && t) {
            var e = function() {
                r({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            };
            return useWindowListener && (e(), window.addEventListener("resize", e)), function() {
                return window.removeEventListener("resize", e);
            };
        }
    }, []);
    var u = React.useRef(new MyResizeObserver(throttle(function(e) {
        useResizeObserver && r({
            width: e[e.length - 1].contentRect.width,
            height: e[e.length - 1].contentRect.height
        });
    }, 0)));
    return React.useEffect(function() {
        var n = u.current;
        if (!t) return void n.disconnect();
        var a = e.current;
        return e.current && useResizeObserver && n.observe(e.current), function() {
            n.disconnect(), a && useResizeObserver && n.unobserve(a);
        };
    }, [
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
    }), R = p[0], b = R.height, h = R.width, g = p[1], w = React.useState(!0), y = w[0], m = w[1], I = s.fitCanvasToArtboardHeight, V = s.shouldResizeCanvasToContainer, C = s.useDevicePixelRatio, O = s.customDevicePixelRatio, M = useSize(r, V), x = useDevicePixelRatio(O), E = null != o ? o : {}, P = E.maxX, _ = E.maxY, k = React.useCallback(function() {
        var e, t, n, a, u = null != (e = null == (n = r.current) ? void 0 : n.clientWidth) ? e : 0, i = null != (t = null == (a = r.current) ? void 0 : a.clientHeight) ? t : 0;
        return I && o ? {
            width: u,
            height: o.maxY / o.maxX * u
        } : {
            width: u,
            height: i
        };
    }, [
        r,
        I,
        P,
        _
    ]);
    React.useEffect(function() {
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
    }, [
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
    ]), React.useEffect(function() {
        g({
            width: 0,
            height: 0
        });
    }, [
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
        observe: React.useCallback(function(e, t) {
            getObserver().registerCallback(e, t);
        }, []),
        unobserve: React.useCallback(function(e) {
            getObserver().removeCallback(e);
        }, [])
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
    var n = React.useState(null), a = n[0], r = n[1], u = React.useRef(null), i = React.useRef(null), o = React.useState(null), s = o[0], c = o[1], l = !!e, f = getOptions(t), d = useDevicePixelRatio(), v = React.useCallback(function() {
        if (s) {
            if (s.layout && s.layout.fit === canvas.Fit.Layout && a) {
                var e = d * s.layout.layoutScaleFactor;
                s.devicePixelRatioUsed = d, s.artboardWidth = (null == a ? void 0 : a.width) / e, s.artboardHeight = (null == a ? void 0 : a.height) / e;
            }
            s.startRendering(), s.resizeToCanvas();
        }
    }, [
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
    var p = React.useCallback(function(e) {
        null === e && a && (a.height = 0, a.width = 0), r(e);
    }, []);
    React.useEffect(function() {
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
                })), null != i.current && i.current.cleanup(), i.current = t, t.on(canvas.EventType.Load, function() {
                    n = !0, u && u(t), a ? c(t) : t.cleanup();
                });
            }
            return function() {
                n || null == t || t.cleanup();
            };
        }
    }, [
        a,
        l,
        s
    ]);
    var R = React.useCallback(function(e) {
        u.current = e;
    }, []), b = useIntersectionObserver(), h = b.observe, g = b.unobserve;
    React.useEffect(function() {
        var e, t = !1, n = function() {
            if (a && t) {
                var e = a.getBoundingClientRect();
                e.width > 0 && e.height > 0 && e.top < (window.innerHeight || document.documentElement.clientHeight) && e.bottom > 0 && e.left < (window.innerWidth || document.documentElement.clientWidth) && e.right > 0 && (null == s || s.startRendering(), t = !1);
            }
        };
        return a && !1 !== f.shouldUseIntersectionObserver && h(a, function(a) {
            a.isIntersecting ? s && s.startRendering() : s && s.stopRendering(), t = !a.isIntersecting, clearTimeout(e), a.isIntersecting || 0 !== a.boundingClientRect.width || (e = setTimeout(n, 10));
        }), function() {
            a && g(a);
        };
    }, [
        h,
        g,
        s,
        a,
        f.shouldUseIntersectionObserver
    ]), React.useEffect(function() {
        return function() {
            s && (s.cleanup(), c(null));
        };
    }, [
        s,
        a
    ]), React.useEffect(function() {
        return function() {
            null != i.current && i.current.cleanup();
        };
    }, []);
    var w = null == e ? void 0 : e.animations;
    React.useEffect(function() {
        s && w && (s.isPlaying ? (s.stop(s.animationNames), s.play(w)) : s.isPaused && (s.stop(s.animationNames), s.pause(w)));
    }, [
        w,
        s
    ]);
    var y = React.useCallback(function(e) {
        return /*#__PURE__*/ React__default.default.createElement(RiveComponent, _extends$1({
            setContainerRef: R,
            setCanvasRef: p
        }, e));
    }, [
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
    return React.useEffect(function() {
        var r = function() {
            if (e && t && n || i(null), e && t && n) {
                var r = e.stateMachineInputs(t);
                if (r) {
                    var u = r.find(function(e) {
                        return e.name === n;
                    });
                    void 0 !== a && u && (u.value = a), i(u || null);
                }
            } else i(null);
        };
        r(), e && e.on(canvas.EventType.Load, function() {
            r();
        });
    }, [
        e
    ]), u;
}
function useViewModel(e, t) {
    var n = null != t ? t : {}, a = n.name, r = n.useDefault, u = React.useState(null), i = u[0], o = u[1];
    return React.useEffect(function() {
        var t = function() {
            if (!e) return void o(null);
            var t = null;
            o(t = null != a ? (null == e.viewModelByName ? void 0 : e.viewModelByName.call(e, a)) || null : e.defaultViewModel() || null);
        };
        return t(), e && e.on(canvas.EventType.Load, t), function() {
            e && e.off(canvas.EventType.Load, t);
        };
    }, [
        e,
        a,
        void 0 !== r && r
    ]), i;
}
function useViewModelInstance(e, t) {
    var n = null != t ? t : {}, a = n.name, r = n.useDefault, u = void 0 !== r && r, i = n.useNew, o = void 0 !== i && i, s = n.rive, c = React.useState(null), l = c[0], f = c[1];
    return React.useEffect(function() {
        if (!e) return void f(null);
        var t = null;
        f(t = null != a ? e.instanceByName(a) || null : u ? (null == e.defaultInstance ? void 0 : e.defaultInstance.call(e)) || null : o ? (null == e.instance ? void 0 : e.instance.call(e)) || null : (null == e.defaultInstance ? void 0 : e.defaultInstance.call(e)) || null), s && t && s.viewModelInstance !== t && s.bindViewModelInstance(t);
    }, [
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
    React.useEffect(function() {
        p.current = n;
    }, [
        n
    ]);
    var R = React.useCallback(function() {
        var e = d.current, t = v.current, n = p.current;
        if (!e || !t) return u(null), s(n.defaultValue), f(null), function() {};
        var a = n.getProperty(e, t);
        if (a) {
            u(a), s(n.getValue(a)), n.getExtendedData && f(n.getExtendedData(a));
            var r = function() {
                s(n.getValue(a)), n.getExtendedData && f(n.getExtendedData(a)), n.onPropertyEvent && n.onPropertyEvent();
            };
            return a.on(r), function() {
                a.off(r);
            };
        }
        return function() {};
    }, []);
    React.useEffect(function() {
        return d.current = t, v.current = e, R();
    }, [
        t,
        e,
        R
    ]);
    var b = React.useCallback(function(e) {
        if (r && d.current === t) try {
            e(r), p.current.getExtendedData && f(p.current.getExtendedData(r));
            return;
        } catch (e) {}
        if (d.current) try {
            var n = p.current.getProperty(d.current, v.current);
            n && (u(n), e(n), p.current.getExtendedData && f(p.current.getExtendedData(n)));
        } catch (e) {}
    }, [
        r,
        t
    ]), h = React.useMemo(function() {
        return p.current.buildPropertyOperations(b);
    }, [
        b
    ]), g = _extends({
        value: o
    }, h);
    return n.getExtendedData && (g.extendedData = l), g;
}
function useViewModelInstanceNumber(e, t) {
    var n = useViewModelInstanceProperty(e, t, {
        getProperty: React.useCallback(function(e, t) {
            return e.number(t);
        }, []),
        getValue: React.useCallback(function(e) {
            return e.value;
        }, []),
        defaultValue: null,
        buildPropertyOperations: React.useCallback(function(e) {
            return {
                setValue: function(t) {
                    e(function(e) {
                        e.value = t;
                    });
                }
            };
        }, [])
    });
    return {
        value: n.value,
        setValue: n.setValue
    };
}
function useViewModelInstanceString(e, t) {
    var n = useViewModelInstanceProperty(e, t, {
        getProperty: React.useCallback(function(e, t) {
            return e.string(t);
        }, []),
        getValue: React.useCallback(function(e) {
            return e.value;
        }, []),
        defaultValue: null,
        buildPropertyOperations: React.useCallback(function(e) {
            return {
                setValue: function(t) {
                    e(function(e) {
                        e.value = t;
                    });
                }
            };
        }, [])
    });
    return {
        value: n.value,
        setValue: n.setValue
    };
}
function useViewModelInstanceBoolean(e, t) {
    var n = useViewModelInstanceProperty(e, t, {
        getProperty: React.useCallback(function(e, t) {
            return e.boolean(t);
        }, []),
        getValue: React.useCallback(function(e) {
            return e.value;
        }, []),
        defaultValue: null,
        buildPropertyOperations: React.useCallback(function(e) {
            return {
                setValue: function(t) {
                    e(function(e) {
                        e.value = t;
                    });
                }
            };
        }, [])
    });
    return {
        value: n.value,
        setValue: n.setValue
    };
}
function useViewModelInstanceColor(e, t) {
    var n = useViewModelInstanceProperty(e, t, {
        getProperty: React.useCallback(function(e, t) {
            return e.color(t);
        }, []),
        getValue: React.useCallback(function(e) {
            return e.value;
        }, []),
        defaultValue: null,
        buildPropertyOperations: React.useCallback(function(e) {
            return {
                setValue: function(t) {
                    e(function(e) {
                        e.value = t;
                    });
                },
                setRgb: function(t, n, a) {
                    e(function(e) {
                        e.rgb(t, n, a);
                    });
                },
                setRgba: function(t, n, a, r) {
                    e(function(e) {
                        e.rgba(t, n, a, r);
                    });
                },
                setAlpha: function(t) {
                    e(function(e) {
                        e.alpha(t);
                    });
                },
                setOpacity: function(t) {
                    e(function(e) {
                        e.opacity(t);
                    });
                }
            };
        }, [])
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
        getProperty: React.useCallback(function(e, t) {
            return e.enum(t);
        }, []),
        getValue: React.useCallback(function(e) {
            return e.value;
        }, []),
        defaultValue: null,
        getExtendedData: React.useCallback(function(e) {
            return e.values;
        }, []),
        buildPropertyOperations: React.useCallback(function(e) {
            return {
                setValue: function(t) {
                    e(function(e) {
                        e.value = t;
                    });
                }
            };
        }, [])
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
            getProperty: React.useCallback(function(e, t) {
                return e.trigger(t);
            }, []),
            getValue: React.useCallback(function() {}, []),
            defaultValue: null,
            onPropertyEvent: a,
            buildPropertyOperations: React.useCallback(function(e) {
                return {
                    trigger: function() {
                        e(function(e) {
                            e.trigger();
                        });
                    }
                };
            }, [])
        }).trigger
    };
}
function useViewModelInstanceImage(e, t) {
    return {
        setValue: useViewModelInstanceProperty(e, t, {
            getProperty: React.useCallback(function(e, t) {
                return e.image(t);
            }, []),
            getValue: React.useCallback(function() {}, []),
            defaultValue: null,
            buildPropertyOperations: React.useCallback(function(e) {
                return {
                    setValue: function(t) {
                        e(function(e) {
                            e.value = t;
                        });
                    }
                };
            }, [])
        }).setValue
    };
}
function useViewModelInstanceList(e, t) {
    var n, a = React.useState(0)[1], r = useViewModelInstanceProperty(e, t, {
        getProperty: React.useCallback(function(e, t) {
            return e.list(t);
        }, []),
        getValue: React.useCallback(function(e) {
            return e.length;
        }, []),
        defaultValue: null,
        onPropertyEvent: function() {
            a(function(e) {
                return e + 1;
            });
        },
        buildPropertyOperations: React.useCallback(function(e) {
            return {
                addInstance: function(t) {
                    e(function(e) {
                        return e.addInstance(t);
                    });
                },
                addInstanceAt: function(t, n) {
                    var a = !1;
                    return e(function(e) {
                        a = e.addInstanceAt(t, n);
                    }), a;
                },
                removeInstance: function(t) {
                    e(function(e) {
                        return e.removeInstance(t);
                    });
                },
                removeInstanceAt: function(t) {
                    e(function(e) {
                        return e.removeInstanceAt(t);
                    });
                },
                getInstanceAt: function(t) {
                    var n = null;
                    return e(function(e) {
                        n = e.instanceAt(t);
                    }), n;
                },
                swap: function(t, n) {
                    e(function(e) {
                        return e.swap(t, n);
                    });
                }
            };
        }, [])
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
    return React.useEffect(function() {
        var t = null;
        return _async_to_generator(function() {
            return _ts_generator(this, function(n) {
                try {
                    i("loading"), (t = new canvas.RiveFile(e)).init(), t.on(canvas.EventType.Load, function() {
                        null == t || t.getInstance(), a(t), i("success");
                    }), t.on(canvas.EventType.LoadError, function() {
                        i("failed");
                    }), a(t);
                } catch (e) {
                    console.error(e), i("failed");
                }
                return [
                    2
                ];
            });
        })(), function() {
            null == t || t.cleanup();
        };
    }, [
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
            getProperty: React.useCallback(function(e, t) {
                return e.artboard(t);
            }, []),
            getValue: React.useCallback(function() {}, []),
            defaultValue: null,
            buildPropertyOperations: React.useCallback(function(e) {
                return {
                    setValue: function(t) {
                        e(function(e) {
                            e.value = t;
                        });
                    }
                };
            }, [])
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
];

//# sourceMappingURL=1bwf_0q7x39n._.js.map