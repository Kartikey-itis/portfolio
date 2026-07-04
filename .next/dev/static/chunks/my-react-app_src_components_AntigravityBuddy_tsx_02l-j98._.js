(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-react-app/src/components/AntigravityBuddy.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AntigravityBuddy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-react-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-react-app/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-react-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AntigravityBuddy() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nekoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [speechText, setSpeechText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showSpeech, setShowSpeech] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const speechTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AntigravityBuddy.useEffect": ()=>{
            const isReducedMotion = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
            if (isReducedMotion) return;
            const containerEl = containerRef.current;
            const nekoEl = nekoRef.current;
            if (!containerEl || !nekoEl) return;
            // Center cat initially
            let nekoPosX = window.innerWidth / 2;
            let nekoPosY = window.innerHeight / 2;
            let mousePosX = nekoPosX;
            let mousePosY = nekoPosY;
            let frameCount = 0;
            let idleTime = 0;
            let idleAnimation = null;
            let idleAnimationFrame = 0;
            const nekoSpeed = 10;
            const spriteSets = {
                idle: [
                    [
                        -3,
                        -3
                    ]
                ],
                alert: [
                    [
                        -7,
                        -3
                    ]
                ],
                scratchSelf: [
                    [
                        -5,
                        0
                    ],
                    [
                        -6,
                        0
                    ],
                    [
                        -7,
                        0
                    ]
                ],
                scratchWallN: [
                    [
                        0,
                        0
                    ],
                    [
                        0,
                        -1
                    ]
                ],
                scratchWallS: [
                    [
                        -7,
                        -1
                    ],
                    [
                        -6,
                        -2
                    ]
                ],
                scratchWallE: [
                    [
                        -2,
                        -2
                    ],
                    [
                        -2,
                        -3
                    ]
                ],
                scratchWallW: [
                    [
                        -4,
                        0
                    ],
                    [
                        -4,
                        -1
                    ]
                ],
                tired: [
                    [
                        -3,
                        -2
                    ]
                ],
                sleeping: [
                    [
                        -2,
                        0
                    ],
                    [
                        -2,
                        -1
                    ]
                ],
                N: [
                    [
                        -1,
                        -2
                    ],
                    [
                        -1,
                        -3
                    ]
                ],
                NE: [
                    [
                        0,
                        -2
                    ],
                    [
                        0,
                        -3
                    ]
                ],
                E: [
                    [
                        -3,
                        0
                    ],
                    [
                        -3,
                        -1
                    ]
                ],
                SE: [
                    [
                        -5,
                        -1
                    ],
                    [
                        -5,
                        -2
                    ]
                ],
                S: [
                    [
                        -6,
                        -3
                    ],
                    [
                        -7,
                        -2
                    ]
                ],
                SW: [
                    [
                        -5,
                        -3
                    ],
                    [
                        -6,
                        -1
                    ]
                ],
                W: [
                    [
                        -4,
                        -2
                    ],
                    [
                        -4,
                        -3
                    ]
                ],
                NW: [
                    [
                        -1,
                        0
                    ],
                    [
                        -1,
                        -1
                    ]
                ]
            };
            function setSprite(name, frame) {
                const set = spriteSets[name];
                if (!set) return;
                const sprite = set[frame % set.length];
                nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
            }
            function resetIdleAnimation() {
                idleAnimation = null;
                idleAnimationFrame = 0;
            }
            function idle() {
                idleTime += 1;
                // Randomly trigger sleeping or scratching animations when idle
                if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && idleAnimation === null) {
                    let availableIdleAnimations = [
                        "sleeping",
                        "scratchSelf"
                    ];
                    if (nekoPosX < 32) {
                        availableIdleAnimations.push("scratchWallW");
                    }
                    if (nekoPosY < 32) {
                        availableIdleAnimations.push("scratchWallN");
                    }
                    if (nekoPosX > window.innerWidth - 32) {
                        availableIdleAnimations.push("scratchWallE");
                    }
                    if (nekoPosY > window.innerHeight - 32) {
                        availableIdleAnimations.push("scratchWallS");
                    }
                    idleAnimation = availableIdleAnimations[Math.floor(Math.random() * availableIdleAnimations.length)];
                }
                switch(idleAnimation){
                    case "sleeping":
                        if (idleAnimationFrame < 8) {
                            setSprite("tired", 0);
                            break;
                        }
                        setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
                        if (idleAnimationFrame > 192) {
                            resetIdleAnimation();
                        }
                        break;
                    case "scratchWallN":
                    case "scratchWallS":
                    case "scratchWallE":
                    case "scratchWallW":
                    case "scratchSelf":
                        setSprite(idleAnimation, idleAnimationFrame);
                        if (idleAnimationFrame > 9) {
                            resetIdleAnimation();
                        }
                        break;
                    default:
                        setSprite("idle", 0);
                        return;
                }
                idleAnimationFrame += 1;
            }
            function frame() {
                frameCount += 1;
                const diffX = nekoPosX - mousePosX;
                const diffY = nekoPosY - mousePosY;
                const distance = Math.sqrt(diffX ** 2 + diffY ** 2);
                // Idle behavior when close to cursor
                if (distance < nekoSpeed || distance < 48) {
                    idle();
                    return;
                }
                idleAnimation = null;
                idleAnimationFrame = 0;
                // Alerted state before starting the chase
                if (idleTime > 1) {
                    setSprite("alert", 0);
                    idleTime = Math.min(idleTime, 7);
                    idleTime -= 1;
                    return;
                }
                let direction = "";
                if (diffY / distance > 0.5) direction = "N";
                else if (diffY / distance < -0.5) direction = "S";
                if (diffX / distance > 0.5) direction += "W";
                else if (diffX / distance < -0.5) direction += "E";
                if (!direction) direction = "E";
                setSprite(direction, frameCount);
                nekoPosX -= diffX / distance * nekoSpeed;
                nekoPosY -= diffY / distance * nekoSpeed;
                // Constrain position to viewport boundaries
                nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
                nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);
                containerEl.style.left = `${nekoPosX - 16}px`;
                containerEl.style.top = `${nekoPosY - 16}px`;
            }
            // Set initial position
            containerEl.style.left = `${nekoPosX - 16}px`;
            containerEl.style.top = `${nekoPosY - 16}px`;
            const handleMouseMove = {
                "AntigravityBuddy.useEffect.handleMouseMove": (e)=>{
                    mousePosX = e.clientX;
                    mousePosY = e.clientY;
                }
            }["AntigravityBuddy.useEffect.handleMouseMove"];
            document.addEventListener("mousemove", handleMouseMove);
            let lastFrameTimestamp = 0;
            let animationFrameId;
            function onAnimationFrame(timestamp) {
                if (!lastFrameTimestamp) {
                    lastFrameTimestamp = timestamp;
                }
                if (timestamp - lastFrameTimestamp > 100) {
                    lastFrameTimestamp = timestamp;
                    frame();
                }
                animationFrameId = window.requestAnimationFrame(onAnimationFrame);
            }
            animationFrameId = window.requestAnimationFrame(onAnimationFrame);
            return ({
                "AntigravityBuddy.useEffect": ()=>{
                    document.removeEventListener("mousemove", handleMouseMove);
                    window.cancelAnimationFrame(animationFrameId);
                }
            })["AntigravityBuddy.useEffect"];
        }
    }["AntigravityBuddy.useEffect"], []);
    const triggerSpeech = (text)=>{
        if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
        setSpeechText(text);
        setShowSpeech(true);
        speechTimeoutRef.current = setTimeout(()=>{
            setShowSpeech(false);
        }, 2500);
    };
    const handleNekoClick = ()=>{
        const meows = [
            "Meow! 🐾",
            "Purrr...",
            "Feeding on code! 💻",
            "Anti-gravity mode: ON! 🚀",
            "Catch me if you can! 🐱",
            "Need a bug catcher? 🐞",
            "Hello human! ⭐"
        ];
        const randomMeow = meows[Math.floor(Math.random() * meows.length)];
        triggerSpeech(randomMeow);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "a36507c3be4aca15",
                children: '.oneko-container{pointer-events:none;z-index:999999;transform-origin:50%;width:32px;height:32px;transition:transform .25s cubic-bezier(.175,.885,.32,1.275);position:fixed;transform:scale(2.2)}.oneko-sprite{width:32px;height:32px;image-rendering:pixelated;pointer-events:auto;cursor:pointer;background-image:url(/oneko.gif)}.oneko-speech{color:#f8fafc;white-space:nowrap;pointer-events:none;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);z-index:1000000;background:#0f172af2;border:1px solid #ffffff26;border-radius:12px;padding:6px 12px;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-size:10px;font-weight:600;animation:.25s cubic-bezier(.16,1,.3,1) oneko-fade-in-up;position:absolute;bottom:44px;left:50%;transform:translate(-50%);box-shadow:0 4px 12px #0000004d}.oneko-speech:after{content:"";border:5px solid #0000;border-top-color:#0f172af2;border-bottom:0 solid #0f172af2;width:0;display:block;position:absolute;bottom:-5px;left:50%;transform:translate(-50%)}@keyframes oneko-fade-in-up{0%{opacity:0;transform:translate(-50%,6px)}to{opacity:1;transform:translate(-50%)}}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "jsx-a36507c3be4aca15" + " " + "oneko-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: nekoRef,
                        onClick: handleNekoClick,
                        onMouseEnter: ()=>triggerSpeech("Meow? 😺"),
                        className: "jsx-a36507c3be4aca15" + " " + "oneko-sprite"
                    }, void 0, false, {
                        fileName: "[project]/my-react-app/src/components/AntigravityBuddy.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    showSpeech && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$react$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a36507c3be4aca15" + " " + "oneko-speech",
                        children: speechText
                    }, void 0, false, {
                        fileName: "[project]/my-react-app/src/components/AntigravityBuddy.tsx",
                        lineNumber: 343,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-react-app/src/components/AntigravityBuddy.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AntigravityBuddy, "00YKfGmw7+HamQeVx70AWnBknEI=");
_c = AntigravityBuddy;
var _c;
__turbopack_context__.k.register(_c, "AntigravityBuddy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=my-react-app_src_components_AntigravityBuddy_tsx_02l-j98._.js.map