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
"[project]/src/app/landing/components/mercatoTools.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MercatoTools",
    ()=>MercatoTools
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const ELEMENTS = [
    'Text',
    'Button',
    'Add to bag',
    'Image',
    'Gallery',
    'Video',
    'Shape',
    'Map',
    'Instagram Feed',
    'Contact form',
    'Subscribe',
    'Social icons',
    'Embed code'
];
const INTEGRATIONS = [
    {
        name: 'Gluel',
        desc: 'Open Source | Free Tier',
        icon: '○'
    },
    {
        name: 'Baserow',
        desc: 'Open Source | Free Tier',
        icon: '⊞'
    },
    {
        name: 'Strapi',
        desc: 'Open Source | Free Tier',
        icon: '▣'
    },
    {
        name: 'Airtable',
        desc: 'Open Source | Free Tier',
        icon: '◇'
    }
];
const LAYOUT_OPTIONS = [
    'Fill',
    'Contents',
    'Layout',
    'Flex',
    'Grid',
    'Rows'
];
const STAGGER_MS = 80;
const IN_OFFSET_Y = 40;
const IN_OFFSET_X = 32;
function useScrollProgress() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "508104766b478d6c16ac413306021f05680af04baa9c1461c86a4237a72d6c9a") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "508104766b478d6c16ac413306021f05680af04baa9c1461c86a4237a72d6c9a";
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
                        const sectionCenter = sectionTop + sectionHeight / 2;
                        let inVal = 0;
                        if (scrollParent) {
                            const parentRect = scrollParent.getBoundingClientRect();
                            const parentTop = parentRect.top;
                            const parentHeight = scrollParent.clientHeight;
                            const parentBottom = parentTop + parentHeight;
                            const parentCenter = parentTop + parentHeight / 2;
                            if (sectionBottom > parentTop && sectionTop < parentBottom) {
                                const sectionTopStart = parentBottom - sectionHeight;
                                const sectionTopEnd = parentCenter - sectionHeight / 2;
                                const inRange = sectionTopStart - sectionTopEnd;
                                if (inRange > 0) {
                                    inVal = (sectionTopStart - sectionTop) / inRange;
                                } else {
                                    inVal = sectionCenter <= parentCenter ? 1 : 0;
                                }
                                inVal = Math.min(1, Math.max(0, inVal));
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
                                const sectionTopStart_0 = viewHeight - sectionHeight;
                                const sectionTopEnd_0 = viewHeight / 2 - sectionHeight / 2;
                                let inRange_0 = sectionTopStart_0 - sectionTopEnd_0;
                                if (inRange_0 <= 0) {
                                    inRange_0 = viewHeight * 0.5;
                                }
                                inVal = (sectionTopStart_0 - sectionTop) / inRange_0;
                                inVal = Math.min(1, Math.max(0, inVal));
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
function MercatoTools() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(61);
    if ($[0] !== "508104766b478d6c16ac413306021f05680af04baa9c1461c86a4237a72d6c9a") {
        for(let $i = 0; $i < 61; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "508104766b478d6c16ac413306021f05680af04baa9c1461c86a4237a72d6c9a";
    }
    const { sectionRef, progressIn, progressOut } = useScrollProgress();
    const dissolveOut = 1 - progressOut;
    const opacity = progressIn * dissolveOut;
    let t0;
    if ($[1] !== opacity || $[2] !== progressIn || $[3] !== progressOut) {
        t0 = ({
            "MercatoTools[moveInOut]": (delay, options)=>{
                const fromLeft = options?.fromLeft ?? false;
                const fromRight = options?.fromRight ?? false;
                const fromBottom = options?.fromBottom ?? true;
                const translateX = fromLeft ? (1 - progressIn) * -IN_OFFSET_X : fromRight ? (1 - progressIn) * IN_OFFSET_X : 0;
                const translateY = fromBottom ? (1 - progressIn) * IN_OFFSET_Y : 0;
                const scale = 1 - progressOut * 0.06;
                return {
                    opacity,
                    transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                    transition: "opacity 0.25s ease-out, transform 0.35s ease-out",
                    transitionDelay: `${delay}ms`
                };
            }
        })["MercatoTools[moveInOut]"];
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
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl",
            children: "Build Your Website With Mercato Exclusive Tools"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 233,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-6 text-lg leading-relaxed text-white/90 md:text-xl",
            children: "With Mercato's exclusive tools, you can design, launch, and grow your online store faster and smarter than ever before."
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 234,
            columnNumber: 10
        }, this);
        $[7] = t2;
        $[8] = t3;
    } else {
        t2 = $[7];
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t1) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-3xl text-center",
            style: t1,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 243,
            columnNumber: 10
        }, this);
        $[9] = t1;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== moveInOut) {
        t5 = INTEGRATIONS.map({
            "MercatoTools[INTEGRATIONS.map()]": (item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl border border-neutral-600 bg-neutral-800/90 p-4 text-white shadow-lg",
                    style: moveInOut(i * STAGGER_MS, {
                        fromLeft: true,
                        fromBottom: false
                    }),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-2xl text-neutral-400",
                            children: item.icon
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm font-semibold",
                            children: item.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                            lineNumber: 255,
                            columnNumber: 73
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-0.5 text-xs text-neutral-400",
                            children: item.desc
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                            lineNumber: 255,
                            columnNumber: 130
                        }, this)
                    ]
                }, item.name, true, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 252,
                    columnNumber: 56
                }, this)
        }["MercatoTools[INTEGRATIONS.map()]"]);
        $[11] = moveInOut;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-3 md:col-span-5 md:grid-cols-4",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 264,
            columnNumber: 10
        }, this);
        $[13] = t5;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== moveInOut) {
        t7 = moveInOut(STAGGER_MS * 2, {
            fromRight: true,
            fromBottom: false
        });
        $[15] = moveInOut;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-violet-600/90 px-4 py-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium text-white",
                children: "Custom frontend without custom code"
            }, void 0, false, {
                fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                lineNumber: 283,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 283,
            columnNumber: 10
        }, this);
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = [
            1,
            2,
            3,
            4
        ].map(_MercatoToolsAnonymous);
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-neutral-600 bg-neutral-800 shadow-xl overflow-hidden h-full min-h-[220px]",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-2",
                    children: [
                        t9,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2 mt-3",
                            children: [
                                1,
                                2,
                                3,
                                4
                            ].map(_MercatoToolsAnonymous2)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                            lineNumber: 297,
                            columnNumber: 166
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 297,
                    columnNumber: 131
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-7",
            style: t7,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[20] = t7;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t11 || $[23] !== t6) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-16 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6",
            children: [
                t6,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[22] = t11;
        $[23] = t6;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== moveInOut) {
        t13 = moveInOut(0, {
            fromLeft: true,
            fromBottom: false
        });
        $[25] = moveInOut;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    let t15;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between border-b border-neutral-200 pb-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm font-semibold text-neutral-800",
                    children: "Add elements"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 333,
                    columnNumber: 95
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-neutral-400",
                    "aria-hidden": true,
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 333,
                    columnNumber: 167
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs text-neutral-600",
            children: "Drag and drop elements anywhere on your page"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 334,
            columnNumber: 11
        }, this);
        $[27] = t14;
        $[28] = t15;
    } else {
        t14 = $[27];
        t15 = $[28];
    }
    let t16;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "mt-4 space-y-2",
            children: ELEMENTS.slice(0, 10).map(_MercatoToolsAnonymous3)
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 343,
            columnNumber: 11
        }, this);
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] !== t13) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shrink-0 w-full max-w-[240px] rounded-xl border border-neutral-600 bg-white p-4 shadow-xl",
            style: t13,
            children: [
                t14,
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 350,
            columnNumber: 11
        }, this);
        $[30] = t13;
        $[31] = t17;
    } else {
        t17 = $[31];
    }
    let t18;
    if ($[32] !== moveInOut) {
        t18 = moveInOut(STAGGER_MS, {
            fromBottom: true
        });
        $[32] = moveInOut;
        $[33] = t18;
    } else {
        t18 = $[33];
    }
    let t19;
    let t20;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-3 w-3/4 rounded bg-neutral-600 mb-2"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 369,
            columnNumber: 11
        }, this);
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-3 w-1/2 rounded bg-neutral-600 mb-4"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 370,
            columnNumber: 11
        }, this);
        $[34] = t19;
        $[35] = t20;
    } else {
        t19 = $[34];
        t20 = $[35];
    }
    let t21;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg bg-neutral-700/60 p-4 min-h-[180px]",
            children: [
                t19,
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 gap-2",
                    children: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ].map(_MercatoToolsAnonymous4)
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 379,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 379,
            columnNumber: 11
        }, this);
        $[36] = t21;
    } else {
        t21 = $[36];
    }
    let t22;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-2xl",
                            "aria-hidden": true,
                            children: "🏗"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                            lineNumber: 386,
                            columnNumber: 117
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-medium text-white",
                            children: "HTML"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                            lineNumber: 386,
                            columnNumber: 172
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 386,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-2xl",
                    "aria-hidden": true,
                    children: "💻"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 386,
                    columnNumber: 238
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 386,
            columnNumber: 11
        }, this);
        $[37] = t22;
    } else {
        t22 = $[37];
    }
    let t23;
    if ($[38] !== t18) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 rounded-xl border border-neutral-600 bg-neutral-800/80 p-4 shadow-xl min-h-[280px]",
            style: t18,
            children: [
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        $[38] = t18;
        $[39] = t23;
    } else {
        t23 = $[39];
    }
    let t24;
    if ($[40] !== t17 || $[41] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-7 flex gap-4",
            children: [
                t17,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, this);
        $[40] = t17;
        $[41] = t23;
        $[42] = t24;
    } else {
        t24 = $[42];
    }
    let t25;
    if ($[43] !== moveInOut) {
        t25 = moveInOut(STAGGER_MS * 2, {
            fromRight: true,
            fromBottom: false
        });
        $[43] = moveInOut;
        $[44] = t25;
    } else {
        t25 = $[44];
    }
    let t26;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex border-b border-neutral-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "px-4 py-2 text-xs font-medium text-white border-b-2 border-violet-500",
                    children: "Files"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 421,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "px-4 py-2 text-xs text-neutral-400",
                    children: "Layers"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 421,
                    columnNumber: 179
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 421,
            columnNumber: 11
        }, this);
        $[45] = t26;
    } else {
        t26 = $[45];
    }
    let t27;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = LAYOUT_OPTIONS.map(_MercatoToolsLAYOUT_OPTIONSMap);
        $[46] = t27;
    } else {
        t27 = $[46];
    }
    let t28;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-28 shrink-0 border-r border-neutral-600 p-2 space-y-1",
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-0.5 pt-2",
                    children: [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                    ].map(_MercatoToolsAnonymous5)
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 435,
                    columnNumber: 89
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 435,
            columnNumber: 11
        }, this);
        $[47] = t28;
    } else {
        t28 = $[47];
    }
    let t29;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-neutral-600 bg-neutral-800/90 overflow-hidden shadow-xl h-full",
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex",
                    children: [
                        t28,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 p-4 flex flex-col items-center justify-center min-h-[200px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg border border-neutral-600 bg-neutral-700/50 p-6 w-full max-w-[160px] aspect-9/16 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-16 w-16 rounded-full bg-orange-500/90",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                                        lineNumber: 442,
                                        columnNumber: 374
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                                    lineNumber: 442,
                                    columnNumber: 232
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 h-2 w-full max-w-[120px] rounded bg-neutral-600",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                                    lineNumber: 442,
                                    columnNumber: 459
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 h-2 w-2/3 max-w-[80px] rounded bg-neutral-600",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                                    lineNumber: 442,
                                    columnNumber: 550
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                            lineNumber: 442,
                            columnNumber: 148
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 442,
                    columnNumber: 121
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 442,
            columnNumber: 11
        }, this);
        $[48] = t29;
    } else {
        t29 = $[48];
    }
    let t30;
    if ($[49] !== t25) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-5",
            style: t25,
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, this);
        $[49] = t25;
        $[50] = t30;
    } else {
        t30 = $[50];
    }
    let t31;
    if ($[51] !== t24 || $[52] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6",
            children: [
                t24,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 457,
            columnNumber: 11
        }, this);
        $[51] = t24;
        $[52] = t30;
        $[53] = t31;
    } else {
        t31 = $[53];
    }
    let t32;
    if ($[54] !== t12 || $[55] !== t31 || $[56] !== t4) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl",
            children: [
                t4,
                t12,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 466,
            columnNumber: 11
        }, this);
        $[54] = t12;
        $[55] = t31;
        $[56] = t4;
        $[57] = t32;
    } else {
        t32 = $[57];
    }
    let t33;
    if ($[58] !== sectionRef || $[59] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: sectionRef,
            className: "w-full px-6 py-16 md:px-10 md:py-24",
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 476,
            columnNumber: 11
        }, this);
        $[58] = sectionRef;
        $[59] = t32;
        $[60] = t33;
    } else {
        t33 = $[60];
    }
    return t33;
}
_s1(MercatoTools, "VNqJ6ubvOeo+xVIaHwY0rSy+B5k=", false, function() {
    return [
        useScrollProgress
    ];
});
_c = MercatoTools;
function _MercatoToolsAnonymous5(i_3) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-6 rounded bg-neutral-700/80",
        "aria-hidden": true
    }, i_3, false, {
        fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
        lineNumber: 486,
        columnNumber: 10
    }, this);
}
function _MercatoToolsLAYOUT_OPTIONSMap(label_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded py-1.5 text-center text-[10px] text-neutral-400",
        children: label_0
    }, label_0, false, {
        fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
        lineNumber: 489,
        columnNumber: 10
    }, this);
}
function _MercatoToolsAnonymous4(i_2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "aspect-video rounded bg-neutral-600/80",
        "aria-hidden": true
    }, i_2, false, {
        fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
        lineNumber: 492,
        columnNumber: 10
    }, this);
}
function _MercatoToolsAnonymous3(label) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-center gap-2 rounded-md bg-neutral-50 px-2 py-1.5 text-xs text-neutral-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex h-5 w-5 items-center justify-center rounded bg-neutral-200 text-[10px]",
                children: "T"
            }, void 0, false, {
                fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                lineNumber: 495,
                columnNumber: 124
            }, this),
            label
        ]
    }, label, true, {
        fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
        lineNumber: 495,
        columnNumber: 10
    }, this);
}
function _MercatoToolsAnonymous2(i_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-14 rounded bg-neutral-700/60",
        "aria-hidden": true
    }, i_1, false, {
        fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
        lineNumber: 498,
        columnNumber: 10
    }, this);
}
function _MercatoToolsAnonymous(i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-8 rounded bg-neutral-700/80",
        "aria-hidden": true
    }, i_0, false, {
        fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
        lineNumber: 501,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "MercatoTools");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "227aeaab14e1956a2cf36855c346d15aad44cd5c378bfc65e446a76143387a3a") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "227aeaab14e1956a2cf36855c346d15aad44cd5c378bfc65e446a76143387a3a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mx-auto max-w-3xl text-center text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl",
            children: "Take advantage in our   1 month free domain"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/pricing.tsx",
            lineNumber: 15,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full rounded-t-4xl bg-[#020A0A] px-6 py-16 md:px-10 md:py-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8",
                        children: [
                            1,
                            2,
                            3
                        ].map(_PricingAnonymous)
                    }, void 0, false, {
                        fileName: "[project]/src/app/landing/components/pricing.tsx",
                        lineNumber: 22,
                        columnNumber: 133
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto mt-12 max-w-2xl text-center text-base leading-relaxed text-white/90 md:text-lg",
                        children: "Get your business online faster! Take advantage of our 1-month free domain offer and start building your website today."
                    }, void 0, false, {
                        fileName: "[project]/src/app/landing/components/pricing.tsx",
                        lineNumber: 22,
                        columnNumber: 243
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landing/components/pricing.tsx",
                lineNumber: 22,
                columnNumber: 94
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/pricing.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = Pricing;
function _PricingAnonymous(i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden rounded-xl border border-white/20 shadow-[0_0_24px_rgba(255,255,255,0.06)]",
        style: {
            background: "linear-gradient(180deg, rgba(30, 58, 138, 0.6) 0%, rgba(15, 23, 42, 0.95) 50%, #020A0A 100%)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col p-6 md:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-center text-lg font-semibold text-white md:text-xl",
                    children: "Title"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/pricing.tsx",
                    lineNumber: 32,
                    columnNumber: 48
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex items-baseline justify-center gap-0.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg font-medium text-white/90",
                            children: "$"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/pricing.tsx",
                            lineNumber: 32,
                            columnNumber: 195
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-4xl font-bold tracking-tight text-white md:text-5xl",
                            children: "50"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/pricing.tsx",
                            lineNumber: 32,
                            columnNumber: 255
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg font-medium text-white/80",
                            children: "/mo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/pricing.tsx",
                            lineNumber: 32,
                            columnNumber: 339
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/pricing.tsx",
                    lineNumber: 32,
                    columnNumber: 130
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "mt-6 space-y-3",
                    children: CARD_FEATURES.map(_PricingAnonymousCARD_FEATURESMap)
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/pricing.tsx",
                    lineNumber: 32,
                    columnNumber: 407
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "mt-8 w-full rounded-lg bg-white py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/95",
                    children: "Button"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/pricing.tsx",
                    lineNumber: 32,
                    columnNumber: 497
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/pricing.tsx",
            lineNumber: 32,
            columnNumber: 6
        }, this)
    }, i, false, {
        fileName: "[project]/src/app/landing/components/pricing.tsx",
        lineNumber: 30,
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
                lineNumber: 35,
                columnNumber: 95
            }, this),
            item
        ]
    }, idx, true, {
        fileName: "[project]/src/app/landing/components/pricing.tsx",
        lineNumber: 35,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Pricing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/ScrollGate.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollGate",
    ()=>ScrollGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ScrollGate(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "64b4f1822a5d3da2164dee025d2a8a8a7fe7d85901cff6dc71013d4286626d6f") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "64b4f1822a5d3da2164dee025d2a8a8a7fe7d85901cff6dc71013d4286626d6f";
    }
    const { children } = t0;
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [allowInnerScroll, setAllowInnerScroll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ScrollGate[useEffect()]": ()=>{
                const getThreshold = _ScrollGateUseEffectGetThreshold;
                const handleScroll = {
                    "ScrollGate[useEffect() > handleScroll]": ()=>{
                        const y = ("TURBOPACK compile-time truthy", 1) ? window.scrollY : "TURBOPACK unreachable";
                        const threshold = getThreshold();
                        setAllowInnerScroll(y >= threshold - 20);
                    }
                }["ScrollGate[useEffect() > handleScroll]"];
                handleScroll();
                window.addEventListener("scroll", handleScroll, {
                    passive: true
                });
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["ScrollGate[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const t3 = allowInnerScroll ? "auto" : "hidden";
    let t4;
    if ($[3] !== t3) {
        t4 = {
            overflowY: t3
        };
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== children || $[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: innerRef,
            className: "scrollbar-hide sticky top-20 z-10 -mt-[40vh] h-[calc(100vh-5rem)] w-full rounded-t-4xl bg-[#092727]",
            style: t4,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/ScrollGate.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[5] = children;
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    return t5;
}
_s(ScrollGate, "/fRh7wEXzKhH6rUdgNcvHz5p/0Y=");
_c = ScrollGate;
function _ScrollGateUseEffectGetThreshold() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const vh = window.innerHeight;
    return vh * 0.6 - 80;
}
var _c;
__turbopack_context__.k.register(_c, "ScrollGate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_landing_components_62870339._.js.map