(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/parallax/ParallaxLanding.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParallaxLanding",
    ()=>ParallaxLanding,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ParallaxLanding = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(322);
    if ($[0] !== "4463a2025532cee5490d183de1a99a1179e8bb2f712b83ad6a53695a5668d725") {
        for(let $i = 0; $i < 322; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4463a2025532cee5490d183de1a99a1179e8bb2f712b83ad6a53695a5668d725";
    }
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            x: 0,
            y: 0
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            setMounted(true);
            const handleScroll = ()=>{
                setScrollY(window.scrollY);
            };
            const handleMouseMove = (e)=>{
                setMousePos({
                    x: e.clientX,
                    y: e.clientY
                });
            };
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            window.addEventListener("mousemove", handleMouseMove, {
                passive: true
            });
            return ()=>{
                window.removeEventListener("scroll", handleScroll);
                window.removeEventListener("mousemove", handleMouseMove);
            };
        };
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== scrollY) {
        t3 = (startScroll, t4)=>{
            const duration = t4 === undefined ? 400 : t4;
            const progress = Math.min(1, Math.max(0, (scrollY - startScroll) / duration));
            return {
                opacity: progress,
                transform: `translateY(${Math.max(0, 60 * (1 - progress))}px)`
            };
        };
        $[4] = scrollY;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const getScrollAnimation = t3;
    if (!mounted) {
        return null;
    }
    const windowWidth = ("TURBOPACK compile-time truthy", 1) ? window.innerWidth : "TURBOPACK unreachable";
    const mouseX = windowWidth > 0 ? (mousePos.x / windowWidth - 0.5) * 20 : 0;
    const t4 = `translateY(${scrollY * 0.1}px) translateZ(0)`;
    let t5;
    if ($[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 w-full h-screen opacity-20",
            style: {
                backgroundImage: "\n              linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),\n              linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)\n            ",
                backgroundSize: "50px 50px",
                transform: t4
            }
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const t6 = `translateY(${scrollY * 0.1}px)`;
    let t7;
    if ($[8] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 w-full h-screen",
            style: {
                background: "linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 30%, #2d1f4e 60%, #4a2c6a 80%, #6b3a7d 100%)",
                transform: t6
            }
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 107,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t6;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const t8 = `translateY(${scrollY * 0.05}px) translateX(${mouseX * 0.5}px)`;
    let t9;
    if ($[10] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 w-full h-screen",
            style: {
                transform: t8,
                backgroundImage: "\n              radial-gradient(2px 2px at 20px 30px, white, transparent),\n              radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),\n              radial-gradient(1px 1px at 90px 40px, white, transparent),\n              radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.6), transparent),\n              radial-gradient(1px 1px at 160px 120px, white, transparent),\n              radial-gradient(3px 3px at 200px 50px, rgba(59, 130, 246, 0.8), transparent),\n              radial-gradient(1px 1px at 250px 160px, white, transparent),\n              radial-gradient(2px 2px at 300px 100px, rgba(139, 92, 246, 0.7), transparent)\n            ",
                backgroundSize: "350px 350px",
                opacity: 0.8
            }
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t8;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    const t10 = `translateY(${scrollY * 0.15}px) translateX(${mouseX}px) rotate(${scrollY * 0.02}deg)`;
    let t11;
    if ($[12] !== t10) {
        t11 = {
            transform: t10,
            zIndex: 2
        };
        $[12] = t10;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-6 bg-neutral-800/90 flex items-center gap-1.5 px-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2 h-2 rounded-full bg-red-500/60"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 144,
                    columnNumber: 81
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2 h-2 rounded-full bg-yellow-500/60"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 144,
                    columnNumber: 135
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-2 h-2 rounded-full bg-green-500/60"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 144,
                    columnNumber: 192
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-900/80 backdrop-blur-md rounded-lg border border-blue-500/20 overflow-hidden shadow-2xl",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-3 space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-2 bg-blue-500/30 rounded w-3/4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                            lineNumber: 151,
                            columnNumber: 163
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-2 bg-purple-500/20 rounded w-1/2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                            lineNumber: 151,
                            columnNumber: 215
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-2 bg-cyan-500/20 rounded w-2/3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                            lineNumber: 151,
                            columnNumber: 269
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 151,
                    columnNumber: 132
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 151,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    let t14;
    if ($[16] !== t11) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-[10%] left-[5%] w-64 opacity-30 pointer-events-none",
            style: t11,
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 158,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t11;
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    const t15 = `translateY(${scrollY * 0.25}px) translateX(${-mouseX}px) rotate(${-scrollY * 0.01}deg)`;
    let t16;
    if ($[18] !== t15) {
        t16 = {
            transform: t15,
            zIndex: 2
        };
        $[18] = t15;
        $[19] = t16;
    } else {
        t16 = $[19];
    }
    let t17;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-neutral-900/90 backdrop-blur-md rounded-lg border border-purple-500/20 p-4 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-green-400",
                    children: "<div className=\"hero\">"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 178,
                    columnNumber: 117
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-blue-400 ml-4",
                    children: "<h1>Build Amazing</h1>"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 178,
                    columnNumber: 183
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-cyan-400 ml-4",
                    children: "<p>Websites</p>"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 178,
                    columnNumber: 251
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-green-400",
                    children: "</div>"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 178,
                    columnNumber: 312
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t17;
    } else {
        t17 = $[20];
    }
    let t18;
    if ($[21] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-[20%] right-[8%] w-72 opacity-25 pointer-events-none font-mono text-xs",
            style: t16,
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t16;
        $[22] = t18;
    } else {
        t18 = $[22];
    }
    const t19 = `translateY(${scrollY * 0.3}px) translateX(${mouseX * 0.8}px) scale(${1 - scrollY * 0.0002})`;
    let t20;
    if ($[23] !== t19) {
        t20 = {
            transform: t19,
            zIndex: 1
        };
        $[23] = t19;
        $[24] = t20;
    } else {
        t20 = $[24];
    }
    let t21;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-blue-500/20 to-purple-500/10 backdrop-blur-sm rounded-xl border border-blue-400/30 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-8 bg-white/10 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                        lineNumber: 205,
                        columnNumber: 165
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 bg-white/5 rounded w-3/4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                        lineNumber: 205,
                        columnNumber: 208
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 bg-white/5 rounded w-1/2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                        lineNumber: 205,
                        columnNumber: 256
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 205,
                columnNumber: 138
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t21;
    } else {
        t21 = $[25];
    }
    let t22;
    if ($[26] !== t20) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-[50%] left-[3%] w-48 opacity-20 pointer-events-none",
            style: t20,
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t20;
        $[27] = t22;
    } else {
        t22 = $[27];
    }
    const t23 = `translateY(${scrollY * 0.2}px) translateX(${-mouseX * 0.6}px)`;
    let t24;
    if ($[28] !== t23) {
        t24 = {
            transform: t23,
            zIndex: 2
        };
        $[28] = t23;
        $[29] = t24;
    } else {
        t24 = $[29];
    }
    let t25;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-32 h-10 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-400/40 flex items-center justify-center text-white/60 text-xs font-semibold",
                    children: "Button"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 232,
                    columnNumber: 48
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-32 h-10 bg-purple-500/20 backdrop-blur-sm rounded-lg border border-purple-400/40 flex items-center justify-center text-white/60 text-xs font-semibold",
                    children: "Input"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 232,
                    columnNumber: 225
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t25;
    } else {
        t25 = $[30];
    }
    let t26;
    if ($[31] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-[60%] right-[5%] opacity-30 pointer-events-none",
            style: t24,
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t24;
        $[32] = t26;
    } else {
        t26 = $[32];
    }
    let t27;
    let t28;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = {
            zIndex: 3
        };
        t28 = [
            ...Array(15)
        ];
        $[33] = t27;
        $[34] = t28;
    } else {
        t27 = $[33];
        t28 = $[34];
    }
    let t29;
    if ($[35] !== scrollY || $[36] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 pointer-events-none",
            style: t27,
            children: t28.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute w-1 h-1 bg-blue-400/40 rounded-full",
                    style: {
                        left: `${(i * 13 + 10) % 100}%`,
                        top: `${(i * 17 + 20) % 100}%`,
                        transform: `translateY(${scrollY * (0.05 + i * 0.02)}px)`,
                        boxShadow: "0 0 4px rgba(59, 130, 246, 0.6)",
                        opacity: 0.3 + i % 3 * 0.2
                    }
                }, i, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 260,
                    columnNumber: 93
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 260,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = scrollY;
        $[36] = t28;
        $[37] = t29;
    } else {
        t29 = $[37];
    }
    const t30 = `translateY(${scrollY * 0.2}px)`;
    let t31;
    if ($[38] !== t30) {
        t31 = {
            transform: t30,
            zIndex: 1
        };
        $[38] = t30;
        $[39] = t31;
    } else {
        t31 = $[39];
    }
    let t32;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 1440 600",
            className: "absolute bottom-0 w-full h-full",
            preserveAspectRatio: "xMidYMax slice",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 600 L0 400 Q180 300 360 380 Q540 280 720 350 Q900 250 1080 320 Q1260 280 1440 360 L1440 600 Z",
                fill: "#2d2d4a",
                opacity: "0.6"
            }, void 0, false, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 287,
                columnNumber: 120
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t32;
    } else {
        t32 = $[40];
    }
    let t33;
    if ($[41] !== t31) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-0 left-0 right-0 h-[60vh]",
            style: t31,
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 294,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t31;
        $[42] = t33;
    } else {
        t33 = $[42];
    }
    const t34 = `translateY(${scrollY * 0.35}px)`;
    let t35;
    if ($[43] !== t34) {
        t35 = {
            transform: t34,
            zIndex: 2
        };
        $[43] = t34;
        $[44] = t35;
    } else {
        t35 = $[44];
    }
    let t36;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 1440 700",
            className: "absolute bottom-0 w-full h-full",
            preserveAspectRatio: "xMidYMax slice",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "mountainGrad1",
                        x1: "0%",
                        y1: "0%",
                        x2: "0%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#3d3d5c"
                            }, void 0, false, {
                                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                lineNumber: 314,
                                columnNumber: 195
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#1a1a2e"
                            }, void 0, false, {
                                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                lineNumber: 314,
                                columnNumber: 235
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                        lineNumber: 314,
                        columnNumber: 126
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 314,
                    columnNumber: 120
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0 700 L0 450 Q120 350 240 420 L360 280 Q420 320 480 300 L600 380 Q720 200 840 350 L960 250 Q1080 320 1200 280 L1320 360 Q1380 300 1440 340 L1440 700 Z",
                    fill: "url(#mountainGrad1)"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 314,
                    columnNumber: 301
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 314,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t36;
    } else {
        t36 = $[45];
    }
    let t37;
    if ($[46] !== t35) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-0 left-0 right-0 h-[70vh]",
            style: t35,
            children: t36
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 321,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[46] = t35;
        $[47] = t37;
    } else {
        t37 = $[47];
    }
    const t38 = `translateY(${scrollY * 0.5}px)`;
    let t39;
    if ($[48] !== t38) {
        t39 = {
            transform: t38,
            zIndex: 3
        };
        $[48] = t38;
        $[49] = t39;
    } else {
        t39 = $[49];
    }
    let t40;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 1440 800",
            className: "absolute bottom-0 w-full h-full",
            preserveAspectRatio: "xMidYMax slice",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "mountainGrad2",
                        x1: "0%",
                        y1: "0%",
                        x2: "0%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#252538"
                            }, void 0, false, {
                                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                lineNumber: 341,
                                columnNumber: 195
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#0f0f1a"
                            }, void 0, false, {
                                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                lineNumber: 341,
                                columnNumber: 235
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                        lineNumber: 341,
                        columnNumber: 126
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 341,
                    columnNumber: 120
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0 800 L0 500 L180 380 Q240 420 300 350 L480 480 L600 300 Q660 350 720 280 L900 420 L1020 320 Q1140 380 1260 300 L1380 400 L1440 350 L1440 800 Z",
                    fill: "url(#mountainGrad2)"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 341,
                    columnNumber: 301
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t40;
    } else {
        t40 = $[50];
    }
    let t41;
    if ($[51] !== t39) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-0 left-0 right-0 h-[80vh]",
            style: t39,
            children: t40
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 348,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = t39;
        $[52] = t41;
    } else {
        t41 = $[52];
    }
    const t42 = `translateY(${scrollY * 0.7}px)`;
    let t43;
    if ($[53] !== t42) {
        t43 = {
            transform: t42,
            zIndex: 4
        };
        $[53] = t42;
        $[54] = t43;
    } else {
        t43 = $[54];
    }
    let t44;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 1440 400",
            className: "absolute bottom-0 w-full h-full",
            preserveAspectRatio: "xMidYMax slice",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 400 L0 300 Q60 280 120 320 Q180 260 240 300 Q300 240 360 280 Q420 260 480 300 Q540 220 600 260 Q660 240 720 280 Q780 200 840 260 Q900 240 960 280 Q1020 220 1080 260 Q1140 240 1200 280 Q1260 260 1320 300 Q1380 280 1440 320 L1440 400 Z",
                fill: "#0a0a0f"
            }, void 0, false, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 368,
                columnNumber: 120
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 368,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[55] = t44;
    } else {
        t44 = $[55];
    }
    let t45;
    if ($[56] !== t43) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-0 left-0 right-0 h-[40vh]",
            style: t43,
            children: t44
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 375,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t43;
        $[57] = t45;
    } else {
        t45 = $[57];
    }
    const t46 = `translateY(${scrollY * 0.4}px)`;
    const t47 = Math.max(0, 1 - scrollY / 600);
    let t48;
    if ($[58] !== t46 || $[59] !== t47) {
        t48 = {
            transform: t46,
            zIndex: 5,
            opacity: t47
        };
        $[58] = t46;
        $[59] = t47;
        $[60] = t48;
    } else {
        t48 = $[60];
    }
    const t49 = `translate(-50%, -50%) scale(${1 + scrollY * 0.001})`;
    let t50;
    if ($[61] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none",
            style: {
                transform: t49
            }
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 399,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = t49;
        $[62] = t50;
    } else {
        t50 = $[62];
    }
    let t51;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-blue-400 text-sm md:text-base tracking-[0.3em] uppercase mb-4 relative",
            style: {
                fontFamily: "'Instrument Sans', sans-serif"
            },
            children: "Website Builder Platform"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 409,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[63] = t51;
    } else {
        t51 = $[63];
    }
    let t52;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = {
            fontFamily: "'Syne', sans-serif",
            textShadow: "0 4px 60px rgba(0,0,0,0.5), 0 0 80px rgba(59, 130, 246, 0.3)"
        };
        $[64] = t52;
    } else {
        t52 = $[64];
    }
    let t53;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 428,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[65] = t53;
    } else {
        t53 = $[65];
    }
    let t54;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient",
            children: "Dream Store"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 435,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[66] = t54;
    } else {
        t54 = $[66];
    }
    let t55;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M0 6 Q75 0 150 6 T300 6",
            fill: "none",
            stroke: "url(#heroGrad)",
            strokeWidth: "2",
            strokeLinecap: "round",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                attributeName: "d",
                dur: "3s",
                repeatCount: "indefinite",
                values: "M0 6 Q75 0 150 6 T300 6; M0 6 Q75 12 150 6 T300 6; M0 6 Q75 0 150 6 T300 6"
            }, void 0, false, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 442,
                columnNumber: 119
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 442,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[67] = t55;
    } else {
        t55 = $[67];
    }
    let t56;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-tight mb-6 relative",
            style: t52,
            children: [
                "Build Your",
                t53,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "relative inline-block",
                    children: [
                        t54,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "absolute -bottom-4 left-0 w-full h-4 opacity-60",
                            viewBox: "0 0 300 12",
                            preserveAspectRatio: "none",
                            children: [
                                t55,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "heroGrad",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "0%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#3b82f6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                                lineNumber: 449,
                                                columnNumber: 370
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "50%",
                                                stopColor: "#8b5cf6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                                lineNumber: 449,
                                                columnNumber: 410
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "100%",
                                                stopColor: "#06b6d4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                                lineNumber: 449,
                                                columnNumber: 451
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                        lineNumber: 449,
                                        columnNumber: 306
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                    lineNumber: 449,
                                    columnNumber: 300
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                            lineNumber: 449,
                            columnNumber: 182
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 449,
                    columnNumber: 137
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 449,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[68] = t56;
    } else {
        t56 = $[68];
    }
    let t57;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg md:text-xl text-white/60 max-w-xl mx-auto relative",
            style: {
                fontFamily: "'Instrument Sans', sans-serif"
            },
            children: "Create stunning e-commerce experiences with drag-and-drop simplicity"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 456,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = t57;
    } else {
        t57 = $[69];
    }
    let t58;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -left-12 top-0 opacity-40",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 border-2 border-dashed border-blue-400 rounded animate-pulse"
            }, void 0, false, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 465,
                columnNumber: 63
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 465,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[70] = t58;
    } else {
        t58 = $[70];
    }
    let t59;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -right-12 bottom-0 opacity-40",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-6 h-6 bg-purple-500/30 rounded-full animate-pulse",
                style: {
                    animationDelay: "0.5s"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 472,
                columnNumber: 67
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 472,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[71] = t59;
    } else {
        t59 = $[71];
    }
    let t60;
    if ($[72] !== t50) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center px-4 relative",
            children: [
                t50,
                t51,
                t56,
                t57,
                t58,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 481,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[72] = t50;
        $[73] = t60;
    } else {
        t60 = $[73];
    }
    let t61;
    if ($[74] !== t48 || $[75] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 flex items-center justify-center",
            style: t48,
            children: t60
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 489,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[74] = t48;
        $[75] = t60;
        $[76] = t61;
    } else {
        t61 = $[76];
    }
    const t62 = `translateY(${scrollY * 0.15}px) translateX(${-mouseX * 0.3}px)`;
    let t63;
    if ($[77] !== t62) {
        t63 = {
            transform: t62,
            zIndex: 1
        };
        $[77] = t62;
        $[78] = t63;
    } else {
        t63 = $[78];
    }
    let t64;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full rounded-full relative",
            style: {
                background: "radial-gradient(circle at 30% 30%, #fff8e7 0%, #ffd699 50%, #ffb347 100%)",
                boxShadow: "0 0 60px rgba(255, 183, 77, 0.6), 0 0 120px rgba(255, 183, 77, 0.3)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-[30%] right-[25%] w-2 h-2 bg-yellow-900/30 rounded-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 513,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-[35%] left-[30%] w-3 h-3 bg-yellow-900/20 rounded-full"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 513,
                    columnNumber: 96
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 510,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[79] = t64;
    } else {
        t64 = $[79];
    }
    let t65;
    if ($[80] !== t63) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-[12%] right-[12%] w-20 h-20 md:w-28 md:h-28",
            style: t63,
            children: t64
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 520,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[80] = t63;
        $[81] = t65;
    } else {
        t65 = $[81];
    }
    const t66 = Math.max(0, 1 - scrollY / 300);
    let t67;
    if ($[82] !== t66) {
        t67 = {
            zIndex: 10,
            opacity: t66
        };
        $[82] = t66;
        $[83] = t67;
    } else {
        t67 = $[83];
    }
    let t68;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white/40 text-xs tracking-[0.2em] uppercase",
            children: "Scroll to Explore"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 540,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[84] = t68;
    } else {
        t68 = $[84];
    }
    let t69;
    if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5 relative overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1 h-1 bg-white/50 rounded-full animate-bounce"
            }, void 0, false, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 547,
                columnNumber: 135
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 547,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[85] = t69;
    } else {
        t69 = $[85];
    }
    let t70;
    if ($[86] !== t67) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
            style: t67,
            children: [
                t68,
                t69
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 554,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[86] = t67;
        $[87] = t70;
    } else {
        t70 = $[87];
    }
    let t71;
    if ($[88] !== t14 || $[89] !== t18 || $[90] !== t22 || $[91] !== t26 || $[92] !== t29 || $[93] !== t33 || $[94] !== t37 || $[95] !== t41 || $[96] !== t45 || $[97] !== t5 || $[98] !== t61 || $[99] !== t65 || $[100] !== t7 || $[101] !== t70 || $[102] !== t9) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative h-[200vh] overflow-hidden",
            children: [
                t5,
                t7,
                t9,
                t14,
                t18,
                t22,
                t26,
                t29,
                t33,
                t37,
                t41,
                t45,
                t61,
                t65,
                t70
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 562,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[88] = t14;
        $[89] = t18;
        $[90] = t22;
        $[91] = t26;
        $[92] = t29;
        $[93] = t33;
        $[94] = t37;
        $[95] = t41;
        $[96] = t45;
        $[97] = t5;
        $[98] = t61;
        $[99] = t65;
        $[100] = t7;
        $[101] = t70;
        $[102] = t9;
        $[103] = t71;
    } else {
        t71 = $[103];
    }
    let t72;
    if ($[104] === Symbol.for("react.memo_cache_sentinel")) {
        t72 = {
            zIndex: 10
        };
        $[104] = t72;
    } else {
        t72 = $[104];
    }
    const t73 = `translateY(${(scrollY - 600) * 0.1}px)`;
    let t74;
    if ($[105] !== t73) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none",
            style: {
                background: "\n              radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),\n              radial-gradient(ellipse 60% 40% at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)\n            ",
                transform: t73
            }
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 594,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[105] = t73;
        $[106] = t74;
    } else {
        t74 = $[106];
    }
    const t75 = `translateY(${(scrollY - 600) * 0.15}px) rotate(${(scrollY - 600) * 0.05}deg)`;
    let t76;
    if ($[107] !== t75) {
        t76 = {
            transform: t75
        };
        $[107] = t75;
        $[108] = t76;
    } else {
        t76 = $[108];
    }
    let t77;
    if ($[109] === Symbol.for("react.memo_cache_sentinel")) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/10 rounded-xl border border-blue-400/40 backdrop-blur-sm"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 616,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[109] = t77;
    } else {
        t77 = $[109];
    }
    let t78;
    if ($[110] !== t76) {
        t78 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-[10%] right-[5%] w-32 h-32 opacity-20 pointer-events-none",
            style: t76,
            children: t77
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 623,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[110] = t76;
        $[111] = t78;
    } else {
        t78 = $[111];
    }
    const t79 = `translateY(${(scrollY - 600) * 0.2}px) rotate(${-(scrollY - 600) * 0.03}deg)`;
    let t80;
    if ($[112] !== t79) {
        t80 = {
            transform: t79
        };
        $[112] = t79;
        $[113] = t80;
    } else {
        t80 = $[113];
    }
    let t81;
    if ($[114] === Symbol.for("react.memo_cache_sentinel")) {
        t81 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-24 h-16 bg-cyan-500/20 rounded-lg border border-cyan-400/30"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 642,
                    columnNumber: 38
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-20 h-12 bg-purple-500/20 rounded-lg border border-purple-400/30"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 642,
                    columnNumber: 119
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 642,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[114] = t81;
    } else {
        t81 = $[114];
    }
    let t82;
    if ($[115] !== t80) {
        t82 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-[20%] left-[8%] opacity-15 pointer-events-none",
            style: t80,
            children: t81
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 649,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[115] = t80;
        $[116] = t82;
    } else {
        t82 = $[116];
    }
    let t83;
    if ($[117] !== getScrollAnimation) {
        t83 = getScrollAnimation(600);
        $[117] = getScrollAnimation;
        $[118] = t83;
    } else {
        t83 = $[118];
    }
    let t84;
    if ($[119] === Symbol.for("react.memo_cache_sentinel")) {
        t84 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-block mb-4 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-semibold tracking-wider uppercase",
            children: "Powerful Features"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 665,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[119] = t84;
    } else {
        t84 = $[119];
    }
    let t85;
    if ($[120] === Symbol.for("react.memo_cache_sentinel")) {
        t85 = {
            fontFamily: "'Syne', sans-serif"
        };
        $[120] = t85;
    } else {
        t85 = $[120];
    }
    let t86;
    let t87;
    if ($[121] === Symbol.for("react.memo_cache_sentinel")) {
        t86 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6",
            style: t85,
            children: [
                "Build Your Website With",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 682,
                    columnNumber: 125
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent",
                    children: "Mercato Exclusive Tools"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 682,
                    columnNumber: 131
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 682,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t87 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 max-w-2xl mx-auto text-base md:text-lg",
            children: "Drag, drop, and deploy. Our visual builder makes website creation as simple as moving blocks on a canvas."
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 683,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[121] = t86;
        $[122] = t87;
    } else {
        t86 = $[121];
        t87 = $[122];
    }
    let t88;
    if ($[123] !== t83) {
        t88 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16 md:mb-20",
            style: t83,
            children: [
                t84,
                t86,
                t87
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 692,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[123] = t83;
        $[124] = t88;
    } else {
        t88 = $[124];
    }
    let t89;
    if ($[125] === Symbol.for("react.memo_cache_sentinel")) {
        t89 = {
            zIndex: 0
        };
        $[125] = t89;
    } else {
        t89 = $[125];
    }
    let t90;
    if ($[126] === Symbol.for("react.memo_cache_sentinel")) {
        t90 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "33%",
            y1: "50%",
            x2: "66%",
            y2: "50%",
            stroke: "url(#lineGrad)",
            strokeWidth: "1",
            strokeDasharray: "4 4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                attributeName: "stroke-dashoffset",
                from: "0",
                to: "8",
                dur: "1s",
                repeatCount: "indefinite"
            }, void 0, false, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 709,
                columnNumber: 115
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 709,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[126] = t90;
    } else {
        t90 = $[126];
    }
    let t91;
    if ($[127] === Symbol.for("react.memo_cache_sentinel")) {
        t91 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "absolute inset-0 w-full h-full pointer-events-none opacity-10",
            style: t89,
            children: [
                t90,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "lineGrad",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#3b82f6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                lineNumber: 716,
                                columnNumber: 143
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#8b5cf6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                lineNumber: 716,
                                columnNumber: 183
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                        lineNumber: 716,
                        columnNumber: 113
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 716,
                    columnNumber: 107
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 716,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[127] = t91;
    } else {
        t91 = $[127];
    }
    let t92;
    if ($[128] !== getScrollAnimation) {
        t92 = {
            ...getScrollAnimation(700),
            zIndex: 1
        };
        $[128] = getScrollAnimation;
        $[129] = t92;
    } else {
        t92 = $[129];
    }
    let t93;
    if ($[130] === Symbol.for("react.memo_cache_sentinel")) {
        t93 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 right-0 w-16 h-16 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-8 h-8 bg-blue-500/20 rotate-45 transform origin-top-right group-hover:scale-150 transition-transform duration-500"
            }, void 0, false, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 734,
                columnNumber: 77
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 734,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[130] = t93;
    } else {
        t93 = $[130];
    }
    let t94;
    let t95;
    if ($[131] === Symbol.for("react.memo_cache_sentinel")) {
        t94 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-semibold mb-2 relative z-10",
            style: {
                fontFamily: "'Syne', sans-serif"
            },
            children: "Add elements"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 742,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t95 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-500 text-sm mb-6 relative z-10",
            children: "Drag and drop elements anywhere on your page"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 745,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[131] = t94;
        $[132] = t95;
    } else {
        t94 = $[131];
        t95 = $[132];
    }
    let t96;
    if ($[133] === Symbol.for("react.memo_cache_sentinel")) {
        t96 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            }, void 0, false, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 754,
                columnNumber: 112
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 754,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[133] = t96;
    } else {
        t96 = $[133];
    }
    let t97;
    if ($[134] === Symbol.for("react.memo_cache_sentinel")) {
        t97 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl p-4 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500",
            children: [
                t96,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 gap-2 relative z-10",
                    children: [
                        {
                            name: "Text",
                            icon: "T",
                            color: "blue"
                        },
                        {
                            name: "Button",
                            icon: "\u25A2",
                            color: "purple"
                        },
                        {
                            name: "Add to bag",
                            icon: "+",
                            color: "cyan"
                        },
                        {
                            name: "Image",
                            icon: "\u25A3",
                            color: "green"
                        },
                        {
                            name: "Gallery",
                            icon: "\u25A4",
                            color: "blue"
                        },
                        {
                            name: "Video",
                            icon: "\u25B6",
                            color: "purple"
                        },
                        {
                            name: "Shape",
                            icon: "\u25C7",
                            color: "pink"
                        },
                        {
                            name: "Map",
                            icon: "\u25CE",
                            color: "cyan"
                        },
                        {
                            name: "Feed",
                            icon: "\u25A5",
                            color: "blue"
                        }
                    ].map(_temp)
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 761,
                    columnNumber: 141
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 761,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[134] = t97;
    } else {
        t97 = $[134];
    }
    let t98;
    if ($[135] !== t92) {
        t98 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative bg-neutral-900/50 backdrop-blur-sm rounded-3xl border border-neutral-800 p-6 hover:border-blue-500/50 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20",
            style: t92,
            children: [
                t93,
                t94,
                t95,
                t97
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 804,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[135] = t92;
        $[136] = t98;
    } else {
        t98 = $[136];
    }
    let t99;
    if ($[137] !== getScrollAnimation) {
        t99 = {
            ...getScrollAnimation(800),
            zIndex: 1
        };
        $[137] = getScrollAnimation;
        $[138] = t99;
    } else {
        t99 = $[138];
    }
    let t100;
    let t101;
    if ($[139] === Symbol.for("react.memo_cache_sentinel")) {
        t100 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/b3af34c2c26f6abd6e071a9bb63bf0bd30ab8e5f.png",
            alt: "CMS Integrations",
            fill: true,
            className: "object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 824,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        t101 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 825,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[139] = t100;
        $[140] = t101;
    } else {
        t100 = $[139];
        t101 = $[140];
    }
    let t102;
    if ($[141] === Symbol.for("react.memo_cache_sentinel")) {
        t102 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent h-24 animate-scan"
            }, void 0, false, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 834,
                columnNumber: 112
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 834,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[141] = t102;
    } else {
        t102 = $[141];
    }
    let t103;
    if ($[142] === Symbol.for("react.memo_cache_sentinel")) {
        t103 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-blue-400 text-xs uppercase tracking-widest flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 841,
                    columnNumber: 102
                }, ("TURBOPACK compile-time value", void 0)),
                "Integrations"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 841,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[142] = t103;
    } else {
        t103 = $[142];
    }
    let t104;
    if ($[143] === Symbol.for("react.memo_cache_sentinel")) {
        t104 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 left-0 right-0 p-6",
            children: [
                t103,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-semibold mt-1",
                    style: {
                        fontFamily: "'Syne', sans-serif"
                    },
                    children: "Seamless Connections"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 848,
                    columnNumber: 72
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0",
                    children: "Connect with 100+ tools instantly"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 850,
                    columnNumber: 35
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 848,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[143] = t104;
    } else {
        t104 = $[143];
    }
    let t105;
    if ($[144] !== t99) {
        t105 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative rounded-3xl border border-neutral-800 overflow-hidden min-h-[320px] hover:border-purple-500/50 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20",
            style: t99,
            children: [
                t100,
                t101,
                t102,
                t104
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 857,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[144] = t99;
        $[145] = t105;
    } else {
        t105 = $[145];
    }
    let t106;
    if ($[146] !== getScrollAnimation) {
        t106 = {
            ...getScrollAnimation(900),
            zIndex: 1
        };
        $[146] = getScrollAnimation;
        $[147] = t106;
    } else {
        t106 = $[147];
    }
    let t107;
    let t108;
    if ($[148] === Symbol.for("react.memo_cache_sentinel")) {
        t107 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/53030d137532ba9ebe957e215b9f12359626d73f.png",
            alt: "Custom Frontend",
            fill: true,
            className: "object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 877,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        t108 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 878,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[148] = t107;
        $[149] = t108;
    } else {
        t107 = $[148];
        t108 = $[149];
    }
    let t109;
    if ($[150] === Symbol.for("react.memo_cache_sentinel")) {
        t109 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-neutral-900/80 backdrop-blur-md rounded-lg p-3 text-xs font-mono border border-cyan-500/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-green-400",
                        children: "<div className="
                    }, void 0, false, {
                        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                        lineNumber: 887,
                        columnNumber: 256
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-blue-400 ml-2",
                        children: '"custom-component"'
                    }, void 0, false, {
                        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                        lineNumber: 887,
                        columnNumber: 313
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-green-400",
                        children: ">"
                    }, void 0, false, {
                        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                        lineNumber: 887,
                        columnNumber: 373
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 887,
                columnNumber: 145
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 887,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[150] = t109;
    } else {
        t109 = $[150];
    }
    let t110;
    if ($[151] === Symbol.for("react.memo_cache_sentinel")) {
        t110 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 left-0 right-0 p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-semibold",
                    style: {
                        fontFamily: "'Syne', sans-serif"
                    },
                    children: "Custom frontend"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 894,
                    columnNumber: 66
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 text-sm mt-1",
                    children: "without custom code"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 896,
                    columnNumber: 30
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 894,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[151] = t110;
    } else {
        t110 = $[151];
    }
    let t111;
    if ($[152] !== t106) {
        t111 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative rounded-3xl border border-neutral-800 overflow-hidden min-h-[320px] hover:border-cyan-500/50 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20",
            style: t106,
            children: [
                t107,
                t108,
                t109,
                t110
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 903,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[152] = t106;
        $[153] = t111;
    } else {
        t111 = $[153];
    }
    let t112;
    if ($[154] !== t105 || $[155] !== t111 || $[156] !== t98) {
        t112 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative",
            children: [
                t91,
                t98,
                t105,
                t111
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 911,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[154] = t105;
        $[155] = t111;
        $[156] = t98;
        $[157] = t112;
    } else {
        t112 = $[157];
    }
    let t113;
    if ($[158] !== t112 || $[159] !== t88) {
        t113 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto relative",
            children: [
                t88,
                t112
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 921,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[158] = t112;
        $[159] = t88;
        $[160] = t113;
    } else {
        t113 = $[160];
    }
    let t114;
    if ($[161] !== t113 || $[162] !== t74 || $[163] !== t78 || $[164] !== t82) {
        t114 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative bg-black text-white py-24 md:py-32 px-4 md:px-8 overflow-hidden",
            style: t72,
            children: [
                t74,
                t78,
                t82,
                t113
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 930,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[161] = t113;
        $[162] = t74;
        $[163] = t78;
        $[164] = t82;
        $[165] = t114;
    } else {
        t114 = $[165];
    }
    let t115;
    if ($[166] === Symbol.for("react.memo_cache_sentinel")) {
        t115 = {
            zIndex: 10
        };
        $[166] = t115;
    } else {
        t115 = $[166];
    }
    const t116 = `translate(-50%, -50%) scale(${1 + Math.sin((scrollY - 1200) * 0.001) * 0.2})`;
    let t117;
    if ($[167] !== t116) {
        t117 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none",
            style: {
                transform: t116
            }
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 951,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[167] = t116;
        $[168] = t117;
    } else {
        t117 = $[168];
    }
    const t118 = `translateY(${(scrollY - 1200) * 0.12}px) rotate(${(scrollY - 1200) * -0.02}deg)`;
    let t119;
    if ($[169] !== t118) {
        t119 = {
            transform: t118
        };
        $[169] = t118;
        $[170] = t119;
    } else {
        t119 = $[170];
    }
    let t120;
    if ($[171] === Symbol.for("react.memo_cache_sentinel")) {
        t120 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aspect-[4/3] bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-white/10 p-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded"
            }, void 0, false, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 972,
                columnNumber: 115
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 972,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[171] = t120;
    } else {
        t120 = $[171];
    }
    let t121;
    if ($[172] !== t119) {
        t121 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-[15%] left-[3%] w-40 opacity-15 pointer-events-none",
            style: t119,
            children: t120
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 979,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[172] = t119;
        $[173] = t121;
    } else {
        t121 = $[173];
    }
    let t122;
    if ($[174] !== getScrollAnimation) {
        t122 = getScrollAnimation(1200);
        $[174] = getScrollAnimation;
        $[175] = t122;
    } else {
        t122 = $[175];
    }
    let t123;
    if ($[176] === Symbol.for("react.memo_cache_sentinel")) {
        t123 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-block mb-4 px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-xs font-semibold tracking-wider uppercase",
            children: "Pre-built Templates"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 995,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[176] = t123;
    } else {
        t123 = $[176];
    }
    let t124;
    if ($[177] === Symbol.for("react.memo_cache_sentinel")) {
        t124 = {
            fontFamily: "'Syne', sans-serif"
        };
        $[177] = t124;
    } else {
        t124 = $[177];
    }
    let t125;
    let t126;
    if ($[178] === Symbol.for("react.memo_cache_sentinel")) {
        t125 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6",
            style: t124,
            children: [
                "The commerce platform",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 1012,
                    columnNumber: 125
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent",
                    children: "behind everything we build"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 1012,
                    columnNumber: 131
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1012,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        t126 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 max-w-3xl mx-auto text-base md:text-lg",
            children: "Start with pixel-perfect templates designed by experts. Customize everything to match your brand in seconds."
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1013,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[178] = t125;
        $[179] = t126;
    } else {
        t125 = $[178];
        t126 = $[179];
    }
    let t127;
    if ($[180] !== t122) {
        t127 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16 md:mb-20",
            style: t122,
            children: [
                t123,
                t125,
                t126
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1022,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[180] = t122;
        $[181] = t127;
    } else {
        t127 = $[181];
    }
    let t128;
    let t129;
    if ($[182] !== getScrollAnimation) {
        t128 = getScrollAnimation(1400);
        t129 = getScrollAnimation(1400);
        $[182] = getScrollAnimation;
        $[183] = t128;
        $[184] = t129;
    } else {
        t128 = $[183];
        t129 = $[184];
    }
    const t130 = `${t129.transform} rotateY(${Math.min(10, (scrollY - 1400) * 0.01)}deg)`;
    let t131;
    if ($[185] !== t128 || $[186] !== t130) {
        t131 = {
            ...t128,
            transform: t130,
            transformStyle: "preserve-3d"
        };
        $[185] = t128;
        $[186] = t130;
        $[187] = t131;
    } else {
        t131 = $[187];
    }
    let t132;
    if ($[188] === Symbol.for("react.memo_cache_sentinel")) {
        t132 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aspect-[4/3] relative overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/4bbb146260379cd1fbea5a9afa3f9b66fa9091d4.png",
                    alt: "Template 1",
                    fill: true,
                    className: "object-cover group-hover:scale-110 transition-transform duration-1000"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 1056,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 1056,
                    columnNumber: 239
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-4 right-4 px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    children: "Preview"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 1056,
                    columnNumber: 403
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1056,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[188] = t132;
    } else {
        t132 = $[188];
    }
    let t133;
    if ($[189] !== t131) {
        t133 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-700",
            style: t131,
            children: t132
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1063,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[189] = t131;
        $[190] = t133;
    } else {
        t133 = $[190];
    }
    let t134;
    if ($[191] !== getScrollAnimation) {
        t134 = getScrollAnimation(1500);
        $[191] = getScrollAnimation;
        $[192] = t134;
    } else {
        t134 = $[192];
    }
    let t135;
    if ($[193] !== getScrollAnimation) {
        t135 = getScrollAnimation(1500);
        $[193] = getScrollAnimation;
        $[194] = t135;
    } else {
        t135 = $[194];
    }
    const t136 = `${t135.transform} scale(${1.05 + Math.sin((scrollY - 1500) * 0.002) * 0.02})`;
    let t137;
    if ($[195] !== t134 || $[196] !== t136) {
        t137 = {
            ...t134,
            boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.3)",
            transform: t136
        };
        $[195] = t134;
        $[196] = t136;
        $[197] = t137;
    } else {
        t137 = $[197];
    }
    let t138;
    let t139;
    let t140;
    if ($[198] === Symbol.for("react.memo_cache_sentinel")) {
        t138 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/0c0effe8ed665936fb95ad380db1b35b2129f967.png",
            alt: "Template 2 - Featured",
            fill: true,
            className: "object-cover group-hover:scale-110 transition-transform duration-1000"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1103,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        t139 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1104,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        t140 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-xs font-bold",
            children: "⭐ Featured"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1105,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[198] = t138;
        $[199] = t139;
        $[200] = t140;
    } else {
        t138 = $[198];
        t139 = $[199];
        t140 = $[200];
    }
    let t141;
    if ($[201] === Symbol.for("react.memo_cache_sentinel")) {
        t141 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aspect-[4/3] relative overflow-hidden",
            children: [
                t138,
                t139,
                t140,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 border-2 border-purple-500/50 rounded-2xl animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                        lineNumber: 1116,
                        columnNumber: 185
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 1116,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1116,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[201] = t141;
    } else {
        t141 = $[201];
    }
    let t142;
    if ($[202] !== t137) {
        t142 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative rounded-2xl overflow-hidden shadow-2xl md:-mt-8 transition-all duration-700",
            style: t137,
            children: t141
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1123,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[202] = t137;
        $[203] = t142;
    } else {
        t142 = $[203];
    }
    let t143;
    let t144;
    if ($[204] !== getScrollAnimation) {
        t143 = getScrollAnimation(1600);
        t144 = getScrollAnimation(1600);
        $[204] = getScrollAnimation;
        $[205] = t143;
        $[206] = t144;
    } else {
        t143 = $[205];
        t144 = $[206];
    }
    const t145 = `${t144.transform} rotateY(${Math.max(-10, -(scrollY - 1600) * 0.01)}deg)`;
    let t146;
    if ($[207] !== t143 || $[208] !== t145) {
        t146 = {
            ...t143,
            transform: t145,
            transformStyle: "preserve-3d"
        };
        $[207] = t143;
        $[208] = t145;
        $[209] = t146;
    } else {
        t146 = $[209];
    }
    let t147;
    if ($[210] === Symbol.for("react.memo_cache_sentinel")) {
        t147 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aspect-[4/3] relative overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/a6aecac5846f117f3c886e34bccaeac3d4920579.png",
                    alt: "Template 3",
                    fill: true,
                    className: "object-cover group-hover:scale-110 transition-transform duration-1000"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 1157,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 1157,
                    columnNumber: 239
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-4 right-4 px-3 py-1 bg-cyan-500/80 backdrop-blur-sm rounded-full text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    children: "Preview"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 1157,
                    columnNumber: 403
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1157,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[210] = t147;
    } else {
        t147 = $[210];
    }
    let t148;
    if ($[211] !== t146) {
        t148 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-700",
            style: t146,
            children: t147
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1164,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[211] = t146;
        $[212] = t148;
    } else {
        t148 = $[212];
    }
    let t149;
    if ($[213] !== t133 || $[214] !== t142 || $[215] !== t148) {
        t149 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center perspective-1000",
            children: [
                t133,
                t142,
                t148
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1172,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[213] = t133;
        $[214] = t142;
        $[215] = t148;
        $[216] = t149;
    } else {
        t149 = $[216];
    }
    let t150;
    if ($[217] !== getScrollAnimation) {
        t150 = getScrollAnimation(1700);
        $[217] = getScrollAnimation;
        $[218] = t150;
    } else {
        t150 = $[218];
    }
    let t151;
    let t152;
    if ($[219] === Symbol.for("react.memo_cache_sentinel")) {
        t151 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10 group-hover:text-black transition-colors duration-500",
            children: "Explore 50+ Templates"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1191,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        t152 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1192,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[219] = t151;
        $[220] = t152;
    } else {
        t151 = $[219];
        t152 = $[220];
    }
    let t153;
    if ($[221] === Symbol.for("react.memo_cache_sentinel")) {
        t153 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "group relative px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium overflow-hidden transition-all duration-500 hover:border-white/60 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105",
            children: [
                t151,
                t152,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M9 5l7 7-7 7"
                    }, void 0, false, {
                        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                        lineNumber: 1201,
                        columnNumber: 428
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 1201,
                    columnNumber: 271
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1201,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[221] = t153;
    } else {
        t153 = $[221];
    }
    let t154;
    if ($[222] !== t150) {
        t154 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mt-16",
            style: t150,
            children: t153
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1208,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[222] = t150;
        $[223] = t154;
    } else {
        t154 = $[223];
    }
    let t155;
    if ($[224] !== t127 || $[225] !== t149 || $[226] !== t154) {
        t155 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto relative",
            children: [
                t127,
                t149,
                t154
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1216,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[224] = t127;
        $[225] = t149;
        $[226] = t154;
        $[227] = t155;
    } else {
        t155 = $[227];
    }
    let t156;
    if ($[228] !== t117 || $[229] !== t121 || $[230] !== t155) {
        t156 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative bg-black text-white py-24 md:py-32 px-4 md:px-8 overflow-hidden",
            style: t115,
            children: [
                t117,
                t121,
                t155
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1226,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[228] = t117;
        $[229] = t121;
        $[230] = t155;
        $[231] = t156;
    } else {
        t156 = $[231];
    }
    let t157;
    if ($[232] === Symbol.for("react.memo_cache_sentinel")) {
        t157 = {
            zIndex: 10
        };
        $[232] = t157;
    } else {
        t157 = $[232];
    }
    const t158 = `translate(-50%, 0) scale(${1 + Math.sin((scrollY - 2000) * 0.0015) * 0.15})`;
    let t159;
    if ($[233] !== t158) {
        t159 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none",
            style: {
                transform: t158
            }
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1246,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[233] = t158;
        $[234] = t159;
    } else {
        t159 = $[234];
    }
    const t160 = `translateY(${(scrollY - 2000) * 0.08}px) rotate(${(scrollY - 2000) * 0.03}deg)`;
    let t161;
    if ($[235] !== t160) {
        t161 = {
            transform: t160
        };
        $[235] = t160;
        $[236] = t161;
    } else {
        t161 = $[236];
    }
    let t162;
    if ($[237] === Symbol.for("react.memo_cache_sentinel")) {
        t162 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-6xl font-bold text-blue-400",
            children: "$"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1267,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[237] = t162;
    } else {
        t162 = $[237];
    }
    let t163;
    if ($[238] !== t161) {
        t163 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-[20%] right-[10%] opacity-10 pointer-events-none",
            style: t161,
            children: t162
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1274,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[238] = t161;
        $[239] = t163;
    } else {
        t163 = $[239];
    }
    let t164;
    if ($[240] !== getScrollAnimation) {
        t164 = getScrollAnimation(2000);
        $[240] = getScrollAnimation;
        $[241] = t164;
    } else {
        t164 = $[241];
    }
    let t165;
    if ($[242] === Symbol.for("react.memo_cache_sentinel")) {
        t165 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-block mb-4 px-4 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold tracking-wider uppercase",
            children: "Simple Pricing"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1290,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[242] = t165;
    } else {
        t165 = $[242];
    }
    let t166;
    if ($[243] === Symbol.for("react.memo_cache_sentinel")) {
        t166 = {
            fontFamily: "'Syne', sans-serif"
        };
        $[243] = t166;
    } else {
        t166 = $[243];
    }
    let t167;
    let t168;
    if ($[244] === Symbol.for("react.memo_cache_sentinel")) {
        t167 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-4xl font-bold mb-4",
            style: t166,
            children: [
                "Take advantage of our 1 month free",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 1307,
                    columnNumber: 111
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",
                    children: "domain"
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 1307,
                    columnNumber: 117
                }, ("TURBOPACK compile-time value", void 0)),
                " offer"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1307,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        t168 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-400 max-w-xl mx-auto",
            children: "Start building today. No credit card required for the first month."
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1308,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[244] = t167;
        $[245] = t168;
    } else {
        t167 = $[244];
        t168 = $[245];
    }
    let t169;
    if ($[246] !== t164) {
        t169 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            style: t164,
            children: [
                t165,
                t167,
                t168
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1317,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[246] = t164;
        $[247] = t169;
    } else {
        t169 = $[247];
    }
    let t170;
    if ($[248] !== getScrollAnimation || $[249] !== scrollY) {
        t170 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8",
            children: [
                {
                    name: "Starter",
                    price: 29,
                    features: [
                        "Up to 100 products",
                        "Basic analytics",
                        "Email support",
                        "Custom domain",
                        "SSL certificate"
                    ],
                    popular: false,
                    color: "blue"
                },
                {
                    name: "Professional",
                    price: 79,
                    features: [
                        "Unlimited products",
                        "Advanced analytics",
                        "Priority support",
                        "API access",
                        "Custom integrations"
                    ],
                    popular: true,
                    color: "purple"
                },
                {
                    name: "Enterprise",
                    price: 199,
                    features: [
                        "Everything in Pro",
                        "Dedicated manager",
                        "Custom development",
                        "SLA guarantee",
                        "White-label options"
                    ],
                    popular: false,
                    color: "cyan"
                }
            ].map((plan, i_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `group relative rounded-3xl p-8 backdrop-blur-md border transition-all duration-700 hover:-translate-y-4 hover:scale-105 ${plan.popular ? "bg-gradient-to-b from-purple-900/50 to-black/80 border-purple-500/40 hover:border-purple-400 shadow-2xl shadow-purple-500/20" : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"}`,
                    style: {
                        ...getScrollAnimation(2100 + i_1 * 100),
                        transform: `${getScrollAnimation(2100 + i_1 * 100).transform} ${plan.popular ? `scale(1.05) translateY(${Math.sin((scrollY - 2200) * 0.003) * 5}px)` : ""}`
                    },
                    children: [
                        plan.popular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                            lineNumber: 1346,
                            columnNumber: 27
                        }, ("TURBOPACK compile-time value", void 0)),
                        plan.popular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-4 left-1/2 -translate-x-1/2 z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg animate-pulse",
                                children: "⚡ Most Popular"
                            }, void 0, false, {
                                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                lineNumber: 1346,
                                columnNumber: 282
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                            lineNumber: 1346,
                            columnNumber: 218
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-8 relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-medium mb-4",
                                    style: {
                                        fontFamily: "'Syne', sans-serif"
                                    },
                                    children: plan.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                    lineNumber: 1346,
                                    columnNumber: 535
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-baseline justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm align-top",
                                            children: "$"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                            lineNumber: 1348,
                                            columnNumber: 82
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-5xl font-bold transition-all duration-300 ${plan.popular ? "text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text" : ""}`,
                                            style: {
                                                fontFamily: "'Syne', sans-serif"
                                            },
                                            children: plan.price
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                            lineNumber: 1348,
                                            columnNumber: 126
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-400 ml-1",
                                            children: "/ mo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                            lineNumber: 1350,
                                            columnNumber: 35
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                    lineNumber: 1348,
                                    columnNumber: 30
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                            lineNumber: 1346,
                            columnNumber: 487
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-3 mb-8 relative z-10",
                            children: plan.features.map((feature, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-center gap-3 text-sm text-gray-300 opacity-0 animate-fade-in-up",
                                    style: {
                                        animationDelay: `${j * 100}ms`,
                                        animationFillMode: "forwards"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: `w-4 h-4 flex-shrink-0 ${plan.popular ? "text-purple-400" : "text-green-400"}`,
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M5 13l4 4L19 7"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                                lineNumber: 1353,
                                                columnNumber: 164
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                            lineNumber: 1353,
                                            columnNumber: 14
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        feature
                                    ]
                                }, j, true, {
                                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                    lineNumber: 1350,
                                    columnNumber: 183
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                            lineNumber: 1350,
                            columnNumber: 103
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `relative z-10 w-full py-3 rounded-full font-medium text-sm transition-all duration-500 overflow-hidden group/btn ${plan.popular ? "bg-white text-black hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]" : "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10",
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                    lineNumber: 1353,
                                    columnNumber: 590
                                }, ("TURBOPACK compile-time value", void 0)),
                                plan.popular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                    lineNumber: 1353,
                                    columnNumber: 657
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                            lineNumber: 1353,
                            columnNumber: 279
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, plan.name, true, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 1343,
                    columnNumber: 29
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1325,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[248] = getScrollAnimation;
        $[249] = scrollY;
        $[250] = t170;
    } else {
        t170 = $[250];
    }
    let t171;
    if ($[251] !== getScrollAnimation) {
        t171 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-gray-500 text-sm mt-12 max-w-2xl mx-auto",
            style: getScrollAnimation(2500),
            children: "All plans include 99.9% uptime SLA, automatic backups, and free SSL certificates. Cancel anytime."
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1362,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[251] = getScrollAnimation;
        $[252] = t171;
    } else {
        t171 = $[252];
    }
    let t172;
    if ($[253] !== t169 || $[254] !== t170 || $[255] !== t171) {
        t172 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto relative",
            children: [
                t169,
                t170,
                t171
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1370,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[253] = t169;
        $[254] = t170;
        $[255] = t171;
        $[256] = t172;
    } else {
        t172 = $[256];
    }
    let t173;
    if ($[257] !== t159 || $[258] !== t163 || $[259] !== t172) {
        t173 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative bg-black text-white py-24 md:py-32 px-4 md:px-8 overflow-hidden",
            style: t157,
            children: [
                t159,
                t163,
                t172
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1380,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[257] = t159;
        $[258] = t163;
        $[259] = t172;
        $[260] = t173;
    } else {
        t173 = $[260];
    }
    let t174;
    if ($[261] === Symbol.for("react.memo_cache_sentinel")) {
        t174 = {
            zIndex: 10
        };
        $[261] = t174;
    } else {
        t174 = $[261];
    }
    const t175 = `scale(${1 + Math.sin((scrollY - 2600) * 0.002) * 0.2})`;
    let t176;
    if ($[262] !== t175) {
        t176 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[500px] h-[500px] rounded-full",
            style: {
                background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)",
                filter: "blur(60px)",
                transform: t175
            }
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1400,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[262] = t175;
        $[263] = t176;
    } else {
        t176 = $[263];
    }
    let t177;
    if ($[264] === Symbol.for("react.memo_cache_sentinel")) {
        t177 = [
            400,
            550,
            700
        ];
        $[264] = t177;
    } else {
        t177 = $[264];
    }
    let t178;
    if ($[265] !== scrollY) {
        t178 = t177.map((size, i_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute border rounded-full",
                style: {
                    width: size,
                    height: size,
                    borderColor: i_2 === 0 ? "rgba(59, 130, 246, 0.2)" : i_2 === 1 ? "rgba(139, 92, 246, 0.15)" : "rgba(6, 182, 212, 0.1)",
                    transform: `rotate(${(scrollY - 2600) * (0.02 - i_2 * 0.005)}deg)`,
                    transition: "transform 0.1s linear"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full",
                    style: {
                        background: i_2 === 0 ? "#3b82f6" : i_2 === 1 ? "#8b5cf6" : "#06b6d4",
                        boxShadow: `0 0 10px ${i_2 === 0 ? "#3b82f6" : i_2 === 1 ? "#8b5cf6" : "#06b6d4"}`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 1425,
                    columnNumber: 8
                }, ("TURBOPACK compile-time value", void 0))
            }, i_2, false, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 1419,
                columnNumber: 36
            }, ("TURBOPACK compile-time value", void 0)));
        $[265] = scrollY;
        $[266] = t178;
    } else {
        t178 = $[266];
    }
    let t179;
    if ($[267] !== t176 || $[268] !== t178) {
        t179 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden",
            children: [
                t176,
                t178
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1436,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[267] = t176;
        $[268] = t178;
        $[269] = t179;
    } else {
        t179 = $[269];
    }
    let t180;
    if ($[270] !== getScrollAnimation) {
        t180 = getScrollAnimation(2700);
        $[270] = getScrollAnimation;
        $[271] = t180;
    } else {
        t180 = $[271];
    }
    let t181;
    if ($[272] === Symbol.for("react.memo_cache_sentinel")) {
        t181 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-block mb-4 px-4 py-1.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-400 text-xs font-semibold tracking-wider uppercase",
            children: "Testimonials"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1453,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[272] = t181;
    } else {
        t181 = $[272];
    }
    let t182;
    if ($[273] === Symbol.for("react.memo_cache_sentinel")) {
        t182 = {
            fontFamily: "'Syne', sans-serif"
        };
        $[273] = t182;
    } else {
        t182 = $[273];
    }
    let t183;
    let t184;
    if ($[274] === Symbol.for("react.memo_cache_sentinel")) {
        t183 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-5xl font-bold",
            style: t182,
            children: [
                "What they say",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
                    children: "about us."
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 1470,
                    columnNumber: 90
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1470,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        t184 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-4 rounded-full"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1471,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[274] = t183;
        $[275] = t184;
    } else {
        t183 = $[274];
        t184 = $[275];
    }
    let t185;
    if ($[276] !== t180) {
        t185 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-16",
            style: t180,
            children: [
                t181,
                t183,
                t184
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1480,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[276] = t180;
        $[277] = t185;
    } else {
        t185 = $[277];
    }
    let t186;
    if ($[278] === Symbol.for("react.memo_cache_sentinel")) {
        t186 = {
            quote: "Mercato transformed our online presence completely.",
            name: "Sarah Chen",
            role: "CEO, StyleHub",
            img: "/12daa53dadb8e6773c1817d0b2eefe5bb113b979.png",
            pos: {
                top: "0%",
                right: "5%"
            }
        };
        $[278] = t186;
    } else {
        t186 = $[278];
    }
    let t187;
    if ($[279] === Symbol.for("react.memo_cache_sentinel")) {
        t187 = {
            quote: "The easiest platform I've ever used. Incredible!",
            name: "Marcus Johnson",
            role: "Founder, TechGear",
            img: "/271552771aec4da87bb7e8aafd0c5bdf201cdd0a.png",
            pos: {
                top: "30%",
                left: "0%"
            }
        };
        $[279] = t187;
    } else {
        t187 = $[279];
    }
    let t188;
    if ($[280] === Symbol.for("react.memo_cache_sentinel")) {
        t188 = {
            quote: "Customer support helped us scale to 10,000 orders.",
            name: "Emily Rodriguez",
            role: "COO, FreshMarket",
            img: "/cad203cae6b1eb766de84b771c166580a3dad46d.png",
            pos: {
                bottom: "15%",
                right: "8%"
            }
        };
        $[280] = t188;
    } else {
        t188 = $[280];
    }
    let t189;
    if ($[281] === Symbol.for("react.memo_cache_sentinel")) {
        t189 = [
            t186,
            t187,
            t188,
            {
                quote: "Analytics dashboard is a complete game changer!",
                name: "David Park",
                role: "Marketing Director",
                img: "/2e855804e1e2b3a9aaa50e206da49e5cc18564a8.png",
                pos: {
                    bottom: "5%",
                    left: "12%"
                }
            }
        ];
        $[281] = t189;
    } else {
        t189 = $[281];
    }
    let t190;
    if ($[282] !== getScrollAnimation || $[283] !== scrollY) {
        t190 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-[550px] md:h-[500px]",
            children: t189.map((t, i_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute max-w-xs bg-gradient-to-br from-blue-900/40 to-purple-900/20 backdrop-blur-md border border-blue-500/30 p-5 rounded-2xl hover:border-blue-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 cursor-pointer group",
                    style: {
                        ...t.pos,
                        ...getScrollAnimation(2800 + i_3 * 100),
                        transform: `translateY(${(scrollY - 2800) * (0.015 + i_3 * 0.003) * (i_3 % 2 === 0 ? 1 : -1)}px)`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -top-3 -left-3 text-4xl text-blue-500/20 font-serif",
                            children: '"'
                        }, void 0, false, {
                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                            lineNumber: 1556,
                            columnNumber: 10
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-200 text-sm mb-4 relative z-10 leading-relaxed",
                            children: t.quote
                        }, void 0, false, {
                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                            lineNumber: 1556,
                            columnNumber: 95
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-11 h-11 rounded-full overflow-hidden relative border-2 border-blue-500/30 group-hover:border-blue-400 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: t.img,
                                        alt: t.name,
                                        fill: true,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                        lineNumber: 1556,
                                        columnNumber: 374
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                    lineNumber: 1556,
                                    columnNumber: 235
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-sm text-white",
                                            children: t.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                            lineNumber: 1556,
                                            columnNumber: 456
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400",
                                            children: t.role
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                            lineNumber: 1556,
                                            columnNumber: 514
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                    lineNumber: 1556,
                                    columnNumber: 451
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                            lineNumber: 1556,
                            columnNumber: 180
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10",
                            style: {
                                background: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                            lineNumber: 1556,
                            columnNumber: 575
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, i_3, true, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 1552,
                    columnNumber: 83
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1552,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[282] = getScrollAnimation;
        $[283] = scrollY;
        $[284] = t190;
    } else {
        t190 = $[284];
    }
    let t191;
    if ($[285] !== t185 || $[286] !== t190) {
        t191 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 relative",
            children: [
                t185,
                t190
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1567,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[285] = t185;
        $[286] = t190;
        $[287] = t191;
    } else {
        t191 = $[287];
    }
    let t192;
    if ($[288] !== t179 || $[289] !== t191) {
        t192 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative bg-black text-white py-24 md:py-32 overflow-hidden",
            style: t174,
            children: [
                t179,
                t191
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1576,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[288] = t179;
        $[289] = t191;
        $[290] = t192;
    } else {
        t192 = $[290];
    }
    let t193;
    if ($[291] === Symbol.for("react.memo_cache_sentinel")) {
        t193 = {
            zIndex: 10
        };
        $[291] = t193;
    } else {
        t193 = $[291];
    }
    let t194;
    if ($[292] !== getScrollAnimation) {
        t194 = getScrollAnimation(3200);
        $[292] = getScrollAnimation;
        $[293] = t194;
    } else {
        t194 = $[293];
    }
    const t195 = `scale(${1 + Math.sin((scrollY - 3200) * 0.003) * 0.3})`;
    let t196;
    if ($[294] !== t195) {
        t196 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-[80px]",
            style: {
                transform: t195
            }
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1603,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[294] = t195;
        $[295] = t196;
    } else {
        t196 = $[295];
    }
    const t197 = `scale(${1 + Math.cos((scrollY - 3200) * 0.003) * 0.3})`;
    let t198;
    if ($[296] !== t197) {
        t198 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-[80px]",
            style: {
                transform: t197
            }
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1614,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[296] = t197;
        $[297] = t198;
    } else {
        t198 = $[297];
    }
    let t199;
    if ($[298] === Symbol.for("react.memo_cache_sentinel")) {
        t199 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-5 pointer-events-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full",
                style: {
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "30px 30px"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 1624,
                columnNumber: 76
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1624,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[298] = t199;
    } else {
        t199 = $[298];
    }
    let t200;
    if ($[299] === Symbol.for("react.memo_cache_sentinel")) {
        t200 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-block mb-4 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold tracking-wider uppercase",
            children: "Get In Touch"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1634,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[299] = t200;
    } else {
        t200 = $[299];
    }
    let t201;
    if ($[300] === Symbol.for("react.memo_cache_sentinel")) {
        t201 = {
            fontFamily: "'Syne', sans-serif"
        };
        $[300] = t201;
    } else {
        t201 = $[300];
    }
    let t202;
    if ($[301] === Symbol.for("react.memo_cache_sentinel")) {
        t202 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-10 relative",
            children: [
                t200,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-bold",
                    style: t201,
                    children: [
                        "Contact",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",
                            children: "Us"
                        }, void 0, false, {
                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                            lineNumber: 1650,
                            columnNumber: 134
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 1650,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1650,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[301] = t202;
    } else {
        t202 = $[301];
    }
    let t203;
    if ($[302] === Symbol.for("react.memo_cache_sentinel")) {
        t203 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: [
                "First Name",
                "Last Name"
            ].map(_temp2)
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1657,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[302] = t203;
    } else {
        t203 = $[302];
    }
    let t204;
    if ($[303] === Symbol.for("react.memo_cache_sentinel")) {
        t204 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: [
                {
                    label: "Company",
                    type: "text"
                },
                {
                    label: "Email",
                    type: "email"
                }
            ].map(_temp3)
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1664,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[303] = t204;
    } else {
        t204 = $[303];
    }
    let t205;
    if ($[304] === Symbol.for("react.memo_cache_sentinel")) {
        t205 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10",
            children: "Send Message"
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1677,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[304] = t205;
    } else {
        t205 = $[304];
    }
    let t206;
    if ($[305] === Symbol.for("react.memo_cache_sentinel")) {
        t206 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "space-y-6 relative",
            children: [
                t203,
                t204,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center pt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "group/submit relative px-12 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-black transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden",
                        children: [
                            t205,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-0 group-hover/submit:opacity-100 transition-opacity duration-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/submit:translate-x-full transition-transform duration-1000"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                    lineNumber: 1684,
                                    columnNumber: 492
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                                lineNumber: 1684,
                                columnNumber: 385
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                        lineNumber: 1684,
                        columnNumber: 103
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                    lineNumber: 1684,
                    columnNumber: 61
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1684,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[305] = t206;
    } else {
        t206 = $[305];
    }
    let t207;
    if ($[306] !== t196 || $[307] !== t198) {
        t207 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border border-white/20 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm bg-white/5 hover:border-white/40 transition-all duration-500 group",
            children: [
                t196,
                t198,
                t199,
                t202,
                t206
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1691,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[306] = t196;
        $[307] = t198;
        $[308] = t207;
    } else {
        t207 = $[308];
    }
    let t208;
    if ($[309] !== t194 || $[310] !== t207) {
        t208 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative bg-black text-white py-24 md:py-32 px-4",
            style: t193,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-3xl mx-auto",
                style: t194,
                children: t207
            }, void 0, false, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 1700,
                columnNumber: 95
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1700,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[309] = t194;
        $[310] = t207;
        $[311] = t208;
    } else {
        t208 = $[311];
    }
    let t209;
    if ($[312] === Symbol.for("react.memo_cache_sentinel")) {
        t209 = {
            zIndex: 10
        };
        $[312] = t209;
    } else {
        t209 = $[312];
    }
    let t210;
    let t211;
    if ($[313] === Symbol.for("react.memo_cache_sentinel")) {
        t210 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "relative bg-black text-white py-12 px-4 border-t border-white/10",
            style: t209,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
                            style: {
                                fontFamily: "'Syne', sans-serif"
                            },
                            children: "Mercato"
                        }, void 0, false, {
                            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                            lineNumber: 1719,
                            columnNumber: 179
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                        lineNumber: 1719,
                        columnNumber: 157
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 text-sm mb-2",
                        children: "Built with Mercato CMS Platform"
                    }, void 0, false, {
                        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                        lineNumber: 1721,
                        columnNumber: 34
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-xs",
                        children: "© 2024 Mercato. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                        lineNumber: 1721,
                        columnNumber: 111
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 1719,
                columnNumber: 110
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1719,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        t211 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: "3462f65c6342b707",
            children: "@keyframes fade-in-up{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes scan{0%{transform:translateY(-100%)}to{transform:translateY(100%)}}.animate-fade-in-up.jsx-3462f65c6342b707{animation:.6s ease-out fade-in-up}.animate-scan.jsx-3462f65c6342b707{animation:3s ease-in-out infinite scan}.perspective-1000.jsx-3462f65c6342b707{perspective:1000px}"
        }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0));
        $[313] = t210;
        $[314] = t211;
    } else {
        t210 = $[313];
        t211 = $[314];
    }
    let t212;
    if ($[315] !== t114 || $[316] !== t156 || $[317] !== t173 || $[318] !== t192 || $[319] !== t208 || $[320] !== t71) {
        t212 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative bg-black overflow-x-hidden",
            children: [
                t71,
                t114,
                t156,
                t173,
                t192,
                t208,
                t210,
                t211
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
            lineNumber: 1731,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
        $[315] = t114;
        $[316] = t156;
        $[317] = t173;
        $[318] = t192;
        $[319] = t208;
        $[320] = t71;
        $[321] = t212;
    } else {
        t212 = $[321];
    }
    return t212;
};
_s(ParallaxLanding, "UXu91R5txWl08OhHgGhZ0Hf789s=");
_c = ParallaxLanding;
const __TURBOPACK__default__export__ = ParallaxLanding;
function _temp(item, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center p-2 border border-dashed border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 hover:scale-110 aspect-square transition-all duration-300 cursor-pointer group/item",
        style: {
            animationDelay: `${i_0 * 50}ms`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-gray-400 text-lg mb-1 group-hover/item:text-${item.color}-500 transition-colors`,
                children: item.icon
            }, void 0, false, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 1748,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-500 text-[10px] font-medium group-hover/item:text-gray-700 transition-colors",
                children: item.name
            }, void 0, false, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 1748,
                columnNumber: 129
            }, this)
        ]
    }, i_0, true, {
        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
        lineNumber: 1746,
        columnNumber: 10
    }, this);
}
function _temp2(label, i_4) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm text-gray-300 mb-2 block font-medium",
                children: [
                    label,
                    ":"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 1751,
                columnNumber: 27
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                className: "w-full h-12 rounded-lg bg-white/10 border border-white/20 text-white px-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:bg-white/15 backdrop-blur-sm",
                placeholder: label
            }, void 0, false, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 1751,
                columnNumber: 107
            }, this)
        ]
    }, label, true, {
        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
        lineNumber: 1751,
        columnNumber: 10
    }, this);
}
function _temp3(field) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm text-gray-300 mb-2 block font-medium",
                children: [
                    field.label,
                    ":"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 1754,
                columnNumber: 33
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: field.type,
                className: "w-full h-12 rounded-lg bg-white/10 border border-white/20 text-white px-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:bg-white/15 backdrop-blur-sm",
                placeholder: field.label
            }, void 0, false, {
                fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
                lineNumber: 1754,
                columnNumber: 119
            }, this)
        ]
    }, field.label, true, {
        fileName: "[project]/src/components/parallax/ParallaxLanding.tsx",
        lineNumber: 1754,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ParallaxLanding");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$parallax$2f$ParallaxLanding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/parallax/ParallaxLanding.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function Home() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "dea3567e30f1bb26bf57e4066b5818fd2e653ea2030b534096143a1c6991beca") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dea3567e30f1bb26bf57e4066b5818fd2e653ea2030b534096143a1c6991beca";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$parallax$2f$ParallaxLanding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParallaxLanding"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 15,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_bdcb8978._.js.map