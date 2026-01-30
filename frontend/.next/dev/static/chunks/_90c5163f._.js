(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/landing/components/commercePlatform.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommercePlatform",
    ()=>CommercePlatform
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const STAGGER_MS = 100;
const IN_OFFSET_Y = 48;
const IN_OFFSET_X_LEFT = -24;
const IN_OFFSET_X_RIGHT = 24;
function useScrollProgress() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "fee486d86d622d213c800eb0a688b188e14c2297594c7b3e555e029d532017d9") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fee486d86d622d213c800eb0a688b188e14c2297594c7b3e555e029d532017d9";
    }
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [progressIn, setProgressIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progressOut, setProgressOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "useScrollProgress[useEffect()]": ()=>{
                const section = sectionRef.current;
                if (!section) {
                    return;
                }
                const getScrollParent = _useScrollProgressUseEffectGetScrollParent;
                const update = {
                    "useScrollProgress[useEffect() > update]": ()=>{
                        const scrollParent = getScrollParent(section);
                        const win = ("TURBOPACK compile-time truthy", 1) ? window : "TURBOPACK unreachable";
                        if (!win) {
                            return;
                        }
                        const rect = section.getBoundingClientRect();
                        const viewHeight = win.innerHeight;
                        const viewBottom = viewHeight;
                        const sectionTop = rect.top;
                        const sectionBottom = rect.bottom;
                        const sectionHeight = rect.height;
                        let inVal = 0;
                        if (scrollParent) {
                            const parentRect = scrollParent.getBoundingClientRect();
                            const parentTop = parentRect.top;
                            const parentBottom = parentTop + scrollParent.clientHeight;
                            if (sectionBottom > parentTop && sectionTop < parentBottom) {
                                const visibleStart = parentBottom - sectionTop;
                                const inRange = Math.min(sectionHeight * 0.5, scrollParent.clientHeight * 0.4);
                                inVal = Math.min(1, Math.max(0, visibleStart / inRange));
                            }
                            setProgressIn({
                                "useScrollProgress[useEffect() > update > setProgressIn()]": (p)=>Math.max(p, inVal)
                            }["useScrollProgress[useEffect() > update > setProgressIn()]"]);
                            let outVal = 0;
                            if (sectionBottom <= parentTop) {
                                outVal = 1;
                            } else {
                                if (sectionTop < parentTop && sectionBottom > parentTop) {
                                    outVal = Math.min(1, (parentTop - sectionTop) / sectionHeight);
                                }
                            }
                            setProgressOut(outVal);
                        } else {
                            if (sectionBottom > 0 && sectionTop < viewBottom) {
                                const visibleStart_0 = viewBottom - sectionTop;
                                const inRange_0 = Math.min(sectionHeight * 0.5, viewHeight * 0.4);
                                inVal = Math.min(1, Math.max(0, visibleStart_0 / inRange_0));
                            }
                            setProgressIn({
                                "useScrollProgress[useEffect() > update > setProgressIn()]": (p_0)=>Math.max(p_0, inVal)
                            }["useScrollProgress[useEffect() > update > setProgressIn()]"]);
                            if (sectionBottom <= 0) {
                                setProgressOut(1);
                            } else {
                                if (sectionTop < 0 && sectionBottom > 0) {
                                    setProgressOut(Math.min(1, (0 - sectionTop) / sectionHeight));
                                } else {
                                    setProgressOut(0);
                                }
                            }
                        }
                    }
                }["useScrollProgress[useEffect() > update]"];
                const updateFromWindowScroll = {
                    "useScrollProgress[useEffect() > updateFromWindowScroll]": ()=>{
                        const scrollY = window.scrollY;
                        const threshold = Math.max(200, window.innerHeight * 0.5 - 80);
                        const inVal_0 = Math.min(1, scrollY / threshold);
                        setProgressIn({
                            "useScrollProgress[useEffect() > updateFromWindowScroll > setProgressIn()]": (p_1)=>Math.max(p_1, inVal_0)
                        }["useScrollProgress[useEffect() > updateFromWindowScroll > setProgressIn()]"]);
                    }
                }["useScrollProgress[useEffect() > updateFromWindowScroll]"];
                update();
                updateFromWindowScroll();
                const scrollParent_0 = getScrollParent(section);
                scrollParent_0?.addEventListener("scroll", update, {
                    passive: true
                });
                window.addEventListener("scroll", updateFromWindowScroll, {
                    passive: true
                });
                window.addEventListener("resize", update);
                return ()=>{
                    scrollParent_0?.removeEventListener("scroll", update);
                    window.removeEventListener("scroll", updateFromWindowScroll);
                    window.removeEventListener("resize", update);
                };
            }
        })["useScrollProgress[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] !== progressIn || $[4] !== progressOut) {
        t2 = {
            sectionRef,
            progressIn,
            progressOut
        };
        $[3] = progressIn;
        $[4] = progressOut;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_s(useScrollProgress, "Sw87YbVNLjSYyMFyJauWVEVNOHo=");
function _useScrollProgressUseEffectGetScrollParent(el) {
    let parent = el.parentElement;
    while(parent){
        const { overflowY } = getComputedStyle(parent);
        if (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay" || overflowY === "hidden") {
            return parent;
        }
        parent = parent.parentElement;
    }
    return null;
}
function CommercePlatform() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "fee486d86d622d213c800eb0a688b188e14c2297594c7b3e555e029d532017d9") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fee486d86d622d213c800eb0a688b188e14c2297594c7b3e555e029d532017d9";
    }
    const { sectionRef, progressIn, progressOut } = useScrollProgress();
    const dissolveOut = 1 - progressOut;
    const opacity = progressIn * dissolveOut;
    let t0;
    if ($[1] !== opacity || $[2] !== progressIn || $[3] !== progressOut) {
        t0 = ({
            "CommercePlatform[moveInOut]": (delay, options)=>{
                const fromLeft = options?.fromLeft ?? false;
                const fromRight = options?.fromRight ?? false;
                const offsetX = fromLeft ? IN_OFFSET_X_LEFT : fromRight ? IN_OFFSET_X_RIGHT : 0;
                const translateX = (1 - progressIn) * offsetX;
                const translateY = (1 - progressIn) * IN_OFFSET_Y;
                const scale = 1 - progressOut * 0.08;
                return {
                    opacity,
                    transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                    transition: "opacity 0.25s ease-out, transform 0.35s ease-out",
                    transitionDelay: `${delay}ms`
                };
            }
        })["CommercePlatform[moveInOut]"];
        $[1] = opacity;
        $[2] = progressIn;
        $[3] = progressOut;
        $[4] = t0;
    } else {
        t0 = $[4];
    }
    const moveInOut = t0;
    let t1;
    if ($[5] !== moveInOut) {
        t1 = moveInOut(0);
        $[5] = moveInOut;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl",
            children: "The commerce platform behind everything we build"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 201,
            columnNumber: 10
        }, this);
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 208,
            columnNumber: 10
        }, this);
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-6 text-lg leading-relaxed text-white/90 md:text-xl",
            children: [
                "Build, customize, and scale e-commerce websites with total control.",
                t3,
                "A flexible, modern system for building powerful online stores.",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 215,
                    columnNumber: 212
                }, this),
                "Everything you need to create, manage, and grow your store."
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 215,
            columnNumber: 10
        }, this);
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t1) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-3xl text-center",
            style: t1,
            children: [
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 222,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== moveInOut) {
        t6 = moveInOut(STAGGER_MS, {
            fromLeft: true
        });
        $[12] = moveInOut;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 border-b border-neutral-200 bg-neutral-100 px-3 py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-2 w-2 rounded-full bg-neutral-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 240,
                    columnNumber: 104
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-2 w-2 rounded-full bg-neutral-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 240,
                    columnNumber: 160
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-2 w-2 rounded-full bg-neutral-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 240,
                    columnNumber: 216
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 240,
            columnNumber: 10
        }, this);
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-neutral-800",
            children: "Generate stock photos with various genders for creative testing"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 247,
            columnNumber: 10
        }, this);
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 flex flex-wrap gap-2",
            children: [
                "People",
                "Clothing",
                "Business",
                "Technology"
            ].map(_CommercePlatformAnonymous)
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 254,
            columnNumber: 10
        }, this);
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "translate-y-8 overflow-hidden rounded-lg border border-neutral-700 bg-white shadow-xl md:translate-y-12",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "aspect-4/3 bg-neutral-50 p-4",
                    children: [
                        t8,
                        t9,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex justify-end gap-2",
                            children: [
                                1,
                                2,
                                3
                            ].map(_CommercePlatformAnonymous2)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                            lineNumber: 261,
                            columnNumber: 190
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 261,
                    columnNumber: 136
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t6) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t6,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[18] = t6;
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== moveInOut) {
        t12 = moveInOut(STAGGER_MS * 2);
        $[20] = moveInOut;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 border-b border-neutral-200 bg-neutral-100 px-3 py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-2 w-2 rounded-full bg-neutral-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 284,
                    columnNumber: 105
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-2 w-2 rounded-full bg-neutral-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 284,
                    columnNumber: 161
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-2 w-2 rounded-full bg-neutral-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 284,
                    columnNumber: 217
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    let t15;
    let t16;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-neutral-800",
            children: [
                "What will you ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-blue-600",
                    children: "design"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 293,
                    columnNumber: 79
                }, this),
                " today?"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xs text-neutral-600",
            children: "Design, generate, print, and work on anything."
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 294,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "mt-3 rounded-md bg-violet-500 px-3 py-1.5 text-xs font-medium text-white",
            children: "Start designing"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[23] = t14;
        $[24] = t15;
        $[25] = t16;
    } else {
        t14 = $[23];
        t15 = $[24];
        t16 = $[25];
    }
    let t17;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "-translate-y-8 overflow-hidden rounded-lg border border-neutral-700 bg-white shadow-xl md:-translate-y-12",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "aspect-4/3 bg-neutral-50 p-4",
                    children: [
                        t14,
                        t15,
                        t16,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex gap-2",
                            children: [
                                "Research Doc",
                                "Presentation",
                                "Websites"
                            ].map(_CommercePlatformAnonymous3)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                            lineNumber: 306,
                            columnNumber: 200
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 306,
                    columnNumber: 139
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] !== t12) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t12,
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[27] = t12;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] !== moveInOut) {
        t19 = moveInOut(STAGGER_MS * 3, {
            fromRight: true
        });
        $[29] = moveInOut;
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    let t20;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 border-b border-neutral-200 bg-neutral-100 px-3 py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-2 w-2 rounded-full bg-neutral-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 331,
                    columnNumber: 105
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-2 w-2 rounded-full bg-neutral-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 331,
                    columnNumber: 161
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-2 w-2 rounded-full bg-neutral-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 331,
                    columnNumber: 217
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 331,
            columnNumber: 11
        }, this);
        $[31] = t20;
    } else {
        t20 = $[31];
    }
    let t21;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "translate-y-8 overflow-hidden rounded-lg border border-neutral-700 bg-white shadow-xl md:translate-y-12",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "aspect-4/3 bg-neutral-50 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-1",
                            children: [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6
                            ].map(_CommercePlatformAnonymous4)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                            lineNumber: 338,
                            columnNumber: 183
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-[10px] text-neutral-500",
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                            lineNumber: 338,
                            columnNumber: 282
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 338,
                    columnNumber: 137
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[32] = t21;
    } else {
        t21 = $[32];
    }
    let t22;
    if ($[33] !== t19) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t19,
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 345,
            columnNumber: 11
        }, this);
        $[33] = t19;
        $[34] = t22;
    } else {
        t22 = $[34];
    }
    let t23;
    if ($[35] !== t11 || $[36] !== t18 || $[37] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-16 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8",
            children: [
                t11,
                t18,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 353,
            columnNumber: 11
        }, this);
        $[35] = t11;
        $[36] = t18;
        $[37] = t22;
        $[38] = t23;
    } else {
        t23 = $[38];
    }
    let t24;
    if ($[39] !== moveInOut) {
        t24 = moveInOut(STAGGER_MS * 4);
        $[39] = moveInOut;
        $[40] = t24;
    } else {
        t24 = $[40];
    }
    let t25;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/templates",
            className: "inline-flex rounded-full border border-3 border-black bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white hover:text-black",
            children: "Explore Web Templates"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        $[41] = t25;
    } else {
        t25 = $[41];
    }
    let t26;
    if ($[42] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 flex justify-center md:mt-4",
            style: t24,
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 378,
            columnNumber: 11
        }, this);
        $[42] = t24;
        $[43] = t26;
    } else {
        t26 = $[43];
    }
    let t27;
    if ($[44] !== t23 || $[45] !== t26 || $[46] !== t5) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl",
            children: [
                t5,
                t23,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 386,
            columnNumber: 11
        }, this);
        $[44] = t23;
        $[45] = t26;
        $[46] = t5;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] !== sectionRef || $[49] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: sectionRef,
            className: "w-full px-6 py-16 md:px-10 md:py-24",
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 396,
            columnNumber: 11
        }, this);
        $[48] = sectionRef;
        $[49] = t27;
        $[50] = t28;
    } else {
        t28 = $[50];
    }
    return t28;
}
_s1(CommercePlatform, "VNqJ6ubvOeo+xVIaHwY0rSy+B5k=", false, function() {
    return [
        useScrollProgress
    ];
});
_c = CommercePlatform;
function _CommercePlatformAnonymous4(i_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "aspect-square rounded bg-neutral-200",
        "aria-hidden": true
    }, i_1, false, {
        fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
        lineNumber: 406,
        columnNumber: 10
    }, this);
}
function _CommercePlatformAnonymous3(label, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "h-12 flex-1 rounded bg-neutral-200 text-[10px] text-neutral-600",
        style: {
            backgroundColor: i_0 === 0 ? "#dcfce7" : i_0 === 1 ? "#ffedd5" : "#dbeafe"
        },
        children: label
    }, label, false, {
        fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
        lineNumber: 409,
        columnNumber: 10
    }, this);
}
function _CommercePlatformAnonymous2(i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "h-8 w-8 rounded-full bg-neutral-300",
        "aria-hidden": true
    }, i, false, {
        fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
        lineNumber: 414,
        columnNumber: 10
    }, this);
}
function _CommercePlatformAnonymous(cat) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded bg-neutral-200 px-2 py-0.5 text-xs text-neutral-700",
        children: cat
    }, cat, false, {
        fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
        lineNumber: 417,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CommercePlatform");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingHeader",
    ()=>LandingHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
function LandingHeader() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "686e038d43f382785961d376bcf7134cff48a16624dd8fd5170b20475d6a4934") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "686e038d43f382785961d376bcf7134cff48a16624dd8fd5170b20475d6a4934";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "text-2xl font-medium tracking-wide text-white md:text-3xl",
            style: {
                fontFamily: "'Great Vibes', cursive"
            },
            children: "Mercato"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/header.tsx",
            lineNumber: 15,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "fixed left-0 right-0 top-0 z-30 flex w-full items-center justify-between bg-transparent pl-[7.5rem] pr-[7.5rem] py-6 md:pl-[15rem] md:pr-[15rem] md:pb-32 md:pt-8",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex items-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/login",
                            className: "text-sm font-medium text-white/95 transition hover:text-white",
                            children: "Log in"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/header.tsx",
                            lineNumber: 24,
                            columnNumber: 237
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/signup",
                            className: "rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-white/95",
                            children: "Start for free"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/header.tsx",
                            lineNumber: 24,
                            columnNumber: 344
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/header.tsx",
                    lineNumber: 24,
                    columnNumber: 196
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/header.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = LandingHeader;
var _c;
__turbopack_context__.k.register(_c, "LandingHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/header.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const SCROLL_RANGE = 400; // px over which each element's fade/slide completes
const SLIDE_AMOUNT = 120; // px to slide left
const CHAIN_OFFSET = 80; // px scroll delay between each element
function getChainProgress(scrollY, index) {
    const start = index * CHAIN_OFFSET;
    const progress = (scrollY - start) / SCROLL_RANGE;
    return Math.min(Math.max(progress, 0), 1);
}
function Hero() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "79e4a6f06ce6a5b675279bac46392ce177914bcae231842e764e2057dd38b697") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "79e4a6f06ce6a5b675279bac46392ce177914bcae231842e764e2057dd38b697";
    }
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Hero[useEffect()]": ()=>{
                const handleScroll = {
                    "Hero[useEffect() > handleScroll]": ()=>{
                        setScrollY(("TURBOPACK compile-time truthy", 1) ? window.scrollY : "TURBOPACK unreachable");
                    }
                }["Hero[useEffect() > handleScroll]"];
                handleScroll();
                window.addEventListener("scroll", handleScroll, {
                    passive: true
                });
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["Hero[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const h1Progress = getChainProgress(scrollY, 0);
    const pProgress = getChainProgress(scrollY, 1);
    const linkProgress = getChainProgress(scrollY, 2);
    const t2 = 1 - h1Progress;
    const t3 = `translateX(${-h1Progress * SLIDE_AMOUNT}px)`;
    let t4;
    if ($[3] !== t2 || $[4] !== t3) {
        t4 = {
            opacity: t2,
            transform: t3
        };
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const h1Style = t4;
    const t5 = 1 - pProgress;
    const t6 = `translateX(${-pProgress * SLIDE_AMOUNT}px)`;
    let t7;
    if ($[6] !== t5 || $[7] !== t6) {
        t7 = {
            opacity: t5,
            transform: t6
        };
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const pStyle = t7;
    const t8 = 1 - linkProgress;
    const t9 = `translateX(${-linkProgress * SLIDE_AMOUNT}px)`;
    let t10;
    if ($[9] !== t8 || $[10] !== t9) {
        t10 = {
            opacity: t8,
            transform: t9
        };
        $[9] = t8;
        $[10] = t9;
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    const linkStyle = t10;
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingHeader"], {}, void 0, false, {
            fileName: "[project]/src/app/landing/components/hero.tsx",
            lineNumber: 100,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    let t13;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
            style: {
                backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/hero.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-black/60",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/hero.tsx",
            lineNumber: 111,
            columnNumber: 11
        }, this);
        $[13] = t12;
        $[14] = t13;
    } else {
        t12 = $[13];
        t13 = $[14];
    }
    let t14;
    if ($[15] !== h1Style) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "max-w-2xl text-4xl font-semibold uppercase tracking-tight text-white md:text-5xl lg:text-6xl",
            style: h1Style,
            children: "Build your website"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/hero.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[15] = h1Style;
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] !== pStyle) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 max-w-lg text-lg text-white/95 md:text-xl",
            style: pStyle,
            children: "Build powerful e-commerce websites without the complexity."
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/hero.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[17] = pStyle;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] !== linkStyle) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/signup",
            className: "mt-8 inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-white/95",
            style: linkStyle,
            children: "Start for free"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/hero.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[19] = linkStyle;
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    let t17;
    if ($[21] !== t14 || $[22] !== t15 || $[23] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "sticky top-0 z-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-neutral-900",
            children: [
                t11,
                t12,
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 flex flex-1 flex-col justify-center px-6 pl-30 -translate-y-[10%] md:pl-60 md:pb-32",
                    children: [
                        t14,
                        t15,
                        t16
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/hero.tsx",
                    lineNumber: 144,
                    columnNumber: 141
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/hero.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[21] = t14;
        $[22] = t15;
        $[23] = t16;
        $[24] = t17;
    } else {
        t17 = $[24];
    }
    return t17;
}
_s(Hero, "eTR5W6wH45bVtWbD0ho0jkNrbDM=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/ScrollGate.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollGate",
    ()=>ScrollGate,
    "useScrollGate",
    ()=>useScrollGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const ScrollGateContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    progress: 0,
    allowInnerScroll: false
});
function useScrollGate() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "6e5ac5d1fb05dde596b4aecf832e7f840738e73c07ed51d112fc6ebda1065c91") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6e5ac5d1fb05dde596b4aecf832e7f840738e73c07ed51d112fc6ebda1065c91";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ScrollGateContext);
}
_s(useScrollGate, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function ScrollGate({ children }) {
    _s1();
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [allowInnerScroll, setAllowInnerScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [innerProgress, setInnerProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollGate.useEffect": ()=>{
            const el = innerRef.current;
            if (!el) return;
            const onInnerScroll = {
                "ScrollGate.useEffect.onInnerScroll": ()=>{
                    const st = el.scrollTop;
                    const max = el.scrollHeight - el.clientHeight;
                    const p = max > 0 ? Math.min(1, Math.max(0, st / max)) : 0;
                    setInnerProgress(p);
                }
            }["ScrollGate.useEffect.onInnerScroll"];
            el.addEventListener('scroll', onInnerScroll, {
                passive: true
            });
            onInnerScroll();
            return ({
                "ScrollGate.useEffect": ()=>el.removeEventListener('scroll', onInnerScroll)
            })["ScrollGate.useEffect"];
        }
    }["ScrollGate.useEffect"], [
        allowInnerScroll
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollGate.useEffect": ()=>{
            const getThreshold = {
                "ScrollGate.useEffect.getThreshold": ()=>{
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    const vh = window.innerHeight;
                    const rem = 16;
                    // Activate inside scroll when dark section + pricing overlap is in view (~35vh)
                    return vh * 0.35 - 5 * rem;
                }
            }["ScrollGate.useEffect.getThreshold"];
            const handleScroll = {
                "ScrollGate.useEffect.handleScroll": ()=>{
                    const y = ("TURBOPACK compile-time truthy", 1) ? window.scrollY : "TURBOPACK unreachable";
                    const threshold = getThreshold();
                    setAllowInnerScroll(y >= Math.max(0, threshold - 20));
                }
            }["ScrollGate.useEffect.handleScroll"];
            handleScroll();
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "ScrollGate.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["ScrollGate.useEffect"];
        }
    }["ScrollGate.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollGateContext.Provider, {
        value: {
            progress: innerProgress,
            allowInnerScroll
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: innerRef,
            className: "scrollbar-hide sticky top-20 z-10 -mt-[40vh] h-[calc(100vh-5rem)] w-full bg-[#092727]",
            style: {
                overflowY: allowInnerScroll ? 'auto' : 'hidden',
                ['--scroll-progress']: innerProgress
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/ScrollGate.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/landing/components/ScrollGate.tsx",
        lineNumber: 71,
        columnNumber: 10
    }, this);
}
_s1(ScrollGate, "G+F7o2z0aIzoxhly0PE20FSpWxE=");
_c = ScrollGate;
var _c;
__turbopack_context__.k.register(_c, "ScrollGate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/mercatoTools.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/landing/components/mercatoTools.tsx'\n\nUnterminated string constant");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/app/landing/components/pricing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pricing",
    ()=>Pricing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const CARD_FEATURES = [
    'List item',
    'List item',
    'List item',
    'List item',
    'List item'
];
function Pricing() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "fc6a666a296cac348fc59cbf749f6fcac0ff9d9f2cb7a1facdd520f776742048") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fc6a666a296cac348fc59cbf749f6fcac0ff9d9f2cb7a1facdd520f776742048";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            backgroundColor: "#020205"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mx-auto max-w-3xl text-center text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl",
            children: "Take advantage in our   1 month free domain"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/pricing.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full px-6 py-16 md:px-10 md:py-24 rounded-t-3xl overflow-hidden",
            style: t0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8",
                        children: [
                            1,
                            2,
                            3
                        ].map(_PricingAnonymous)
                    }, void 0, false, {
                        fileName: "[project]/src/app/landing/components/pricing.tsx",
                        lineNumber: 31,
                        columnNumber: 147
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto mt-12 max-w-2xl text-center text-base leading-relaxed text-white/90 md:text-lg",
                        children: "Get your business online faster! Take advantage of our 1-month free domain offer and start building your website today."
                    }, void 0, false, {
                        fileName: "[project]/src/app/landing/components/pricing.tsx",
                        lineNumber: 31,
                        columnNumber: 257
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landing/components/pricing.tsx",
                lineNumber: 31,
                columnNumber: 108
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/pricing.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = Pricing;
function _PricingAnonymous(i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-3xl bg-gradient-to-b from-white to-black p-[3px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col overflow-hidden rounded-[calc(1.5rem-2px)] p-6 md:p-8",
            style: {
                background: "linear-gradient(180deg, rgba(30, 58, 138, 0.6) 0%, rgba(15, 23, 42, 0.95) 50%, #000 100%)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-center text-lg font-semibold text-white md:text-xl",
                    children: "Title"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/pricing.tsx",
                    lineNumber: 41,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex items-baseline justify-center gap-0.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg font-medium text-white/90",
                            children: "$"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/pricing.tsx",
                            lineNumber: 41,
                            columnNumber: 155
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-4xl font-bold tracking-tight text-white md:text-5xl",
                            children: "50"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/pricing.tsx",
                            lineNumber: 41,
                            columnNumber: 215
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg font-medium text-white/80",
                            children: "/mo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/pricing.tsx",
                            lineNumber: 41,
                            columnNumber: 299
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/pricing.tsx",
                    lineNumber: 41,
                    columnNumber: 90
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "mt-6 space-y-3",
                    children: CARD_FEATURES.map(_PricingAnonymousCARD_FEATURESMap)
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/pricing.tsx",
                    lineNumber: 41,
                    columnNumber: 367
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "mt-8 w-full rounded-lg bg-white py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/95",
                    children: "Button"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/pricing.tsx",
                    lineNumber: 41,
                    columnNumber: 457
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/pricing.tsx",
            lineNumber: 39,
            columnNumber: 92
        }, this)
    }, i, false, {
        fileName: "[project]/src/app/landing/components/pricing.tsx",
        lineNumber: 39,
        columnNumber: 10
    }, this);
}
function _PricingAnonymousCARD_FEATURESMap(item, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-center gap-2 text-sm text-white/90 md:text-base",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-1.5 w-1.5 shrink-0 rounded-full bg-white/80",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/app/landing/components/pricing.tsx",
                lineNumber: 44,
                columnNumber: 95
            }, this),
            item
        ]
    }, idx, true, {
        fileName: "[project]/src/app/landing/components/pricing.tsx",
        lineNumber: 44,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Pricing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Testimonials",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$ScrollGate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/ScrollGate.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const Globe3D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/landing/components/Globe3D.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.Globe3D), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/landing/components/Globe3D.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Globe3D;
function Testimonials() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "5cd3961767bdd2d353a6900edb98c2523a305eb82d298df5baa3977b9c8fe2c9") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5cd3961767bdd2d353a6900edb98c2523a305eb82d298df5baa3977b9c8fe2c9";
    }
    const { progress: stackProgressRaw, allowInnerScroll } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$ScrollGate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollGate"])();
    const stackProgress = allowInnerScroll ? stackProgressRaw : 0;
    const t0 = `translateY(${Math.max(40 - stackProgress * 40, 0)}px)`;
    let t1;
    if ($[1] !== t0) {
        t1 = {
            transform: t0,
            transition: "transform 320ms cubic-bezier(.2,.9,.2,1)"
        };
        $[1] = t0;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const stackStyle = t1;
    let t2;
    if ($[3] !== stackStyle) {
        t2 = {
            ...stackStyle,
            backgroundColor: "#020205"
        };
        $[3] = stackStyle;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-0 w-full",
            style: {
                background: "linear-gradient(to right, #06143E 0%, transparent 50%), linear-gradient(to bottom, #0a2a7a 0%, #020b2a 28%, #020205 58%, #020205 100%)",
                clipPath: "polygon(0 20%, 100% 5%, 100% 100%, 0 100%)",
                transform: "translateY(10%)"
            },
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/testimonials.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "relative z-20 text-center text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl",
            children: [
                "What they",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "relative inline-block",
                    children: [
                        "say about us.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute -bottom-1 left-0 h-0.5 w-full bg-blue-500",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/testimonials.tsx",
                            lineNumber: 59,
                            columnNumber: 188
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/testimonials.tsx",
                    lineNumber: 59,
                    columnNumber: 135
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/testimonials.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            isolation: "isolate"
        };
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Globe3D, {
            className: "absolute inset-0 size-full"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/testimonials.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[7] = t5;
        $[8] = t6;
    } else {
        t5 = $[7];
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-[100%] top-24 z-10 -translate-x-1/2 -translate-y-[5%] md:top-32",
                    "aria-hidden": true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-square h-[64rem] w-[64rem] scale-[1.25] overflow-hidden rounded-full md:h-[80rem] md:w-[80rem]",
                        style: t5,
                        children: [
                            t6,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0 rounded-full",
                                style: {
                                    background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 32%, rgba(2, 11, 42, 0.25) 55%, rgba(0, 0, 0, 0.6) 78%, rgba(0, 0, 0, 0.92) 100%)"
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/testimonials.tsx",
                                lineNumber: 79,
                                columnNumber: 297
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landing/components/testimonials.tsx",
                        lineNumber: 79,
                        columnNumber: 154
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/testimonials.tsx",
                    lineNumber: 79,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/testimonials.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-center text-2xl font-bold text-white md:text-3xl",
            children: "Contact Us"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/testimonials.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "mt-8 grid grid-cols-1 gap-6 md:grid-cols-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "first-name",
                            className: "mb-2 block text-sm font-medium text-white",
                            children: "First Name:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/testimonials.tsx",
                            lineNumber: 95,
                            columnNumber: 76
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "first-name",
                            type: "text",
                            className: "w-full rounded-lg border border-neutral-600 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            placeholder: ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/testimonials.tsx",
                            lineNumber: 95,
                            columnNumber: 177
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/testimonials.tsx",
                    lineNumber: 95,
                    columnNumber: 71
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "last-name",
                            className: "mb-2 block text-sm font-medium text-white",
                            children: "Last Name:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/testimonials.tsx",
                            lineNumber: 95,
                            columnNumber: 435
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "last-name",
                            type: "text",
                            className: "w-full rounded-lg border border-neutral-600 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            placeholder: ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/testimonials.tsx",
                            lineNumber: 95,
                            columnNumber: 534
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/testimonials.tsx",
                    lineNumber: 95,
                    columnNumber: 430
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "company",
                            className: "mb-2 block text-sm font-medium text-white",
                            children: "Company:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/testimonials.tsx",
                            lineNumber: 95,
                            columnNumber: 791
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "company",
                            type: "text",
                            className: "w-full rounded-lg border border-neutral-600 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            placeholder: ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/testimonials.tsx",
                            lineNumber: 95,
                            columnNumber: 886
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/testimonials.tsx",
                    lineNumber: 95,
                    columnNumber: 786
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "email",
                            className: "mb-2 block text-sm font-medium text-white",
                            children: "Email:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/testimonials.tsx",
                            lineNumber: 95,
                            columnNumber: 1141
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "email",
                            type: "email",
                            className: "w-full rounded-lg border border-neutral-600 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            placeholder: ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/testimonials.tsx",
                            lineNumber: 95,
                            columnNumber: 1232
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/testimonials.tsx",
                    lineNumber: 95,
                    columnNumber: 1136
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/testimonials.tsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 mx-auto max-w-6xl",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-20 mb-20 mt-20 max-w-4xl translate-x-[-15%] translate-y-[55%] md:mt-28 md:mb-28",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-2xl rounded-2xl border-2 border-white bg-black p-8 shadow-xl md:p-10",
                        children: [
                            t8,
                            t9,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "rounded-lg border-2 border-white bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black",
                                    children: "Submit"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/testimonials.tsx",
                                    lineNumber: 102,
                                    columnNumber: 322
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/testimonials.tsx",
                                lineNumber: 102,
                                columnNumber: 280
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landing/components/testimonials.tsx",
                        lineNumber: 102,
                        columnNumber: 172
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/testimonials.tsx",
                    lineNumber: 102,
                    columnNumber: 64
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/testimonials.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, this);
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== t2) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative w-full overflow-hidden px-6 py-16 pb-48 md:px-10 md:py-24 md:pb-64",
            style: t2,
            children: [
                t3,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/testimonials.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[13] = t2;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    return t11;
}
_s(Testimonials, "OW1Ic8ULBf/zzALjwUNpZlZxe+0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$ScrollGate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollGate"]
    ];
});
_c1 = Testimonials;
var _c, _c1;
__turbopack_context__.k.register(_c, "Globe3D");
__turbopack_context__.k.register(_c1, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR({ reason, children }) {
    if (typeof window === 'undefined') {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}),
"[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
} //# sourceMappingURL=encode-uri-path.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
function PreloadChunks({ moduleIds }) {
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const dplId = (0, _deploymentid.getDeploymentIdQueryOrEmptyString)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = `${workStore.assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(chunk)}${dplId}`;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style",
                    nonce: workStore.nonce
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low',
                    nonce: workStore.nonce
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map
}),
"[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: mergedOptions.loadableGenerated?.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map
}),
]);

//# sourceMappingURL=_90c5163f._.js.map