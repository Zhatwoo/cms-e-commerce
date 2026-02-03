(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/landing/components/scrolling.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FrontLayerEntranceSpacer",
    ()=>FrontLayerEntranceSpacer,
    "FrontLayerWrapper",
    ()=>FrontLayerWrapper,
    "LandingScrollRoot",
    ()=>LandingScrollRoot,
    "ScrollGate",
    ()=>ScrollGate,
    "useLandingScroll",
    ()=>useLandingScroll,
    "useScrollGate",
    ()=>useScrollGate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
'use client';
;
;
// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------
const SCROLL_THRESHOLD_HEADER = 8;
/** Pixels of scroll after gate ends over which front layer "rises" and overlaps entirely. */ const FRONT_LAYER_ENTRANCE_PX = 420;
function getViewportHeight() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return window.innerHeight;
}
const LandingScrollContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    scrollY: 0,
    gateProgress: 0,
    gateEndScrollY: null,
    frontLayerProgress: 0,
    isScrolled: false,
    scrollContainerRef: {
        current: null
    }
});
function useLandingScroll() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "dc4d058a3c94c2dfbc93601f13dbac96c60650be87a36e288b34bbd88b16a88d") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dc4d058a3c94c2dfbc93601f13dbac96c60650be87a36e288b34bbd88b16a88d";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LandingScrollContext);
}
_s(useLandingScroll, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function useScrollGate() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "dc4d058a3c94c2dfbc93601f13dbac96c60650be87a36e288b34bbd88b16a88d") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dc4d058a3c94c2dfbc93601f13dbac96c60650be87a36e288b34bbd88b16a88d";
    }
    const { gateProgress, scrollContainerRef } = useLandingScroll();
    let t0;
    if ($[1] !== gateProgress || $[2] !== scrollContainerRef) {
        t0 = {
            progress: gateProgress,
            allowInnerScroll: false,
            scrollContainerRef
        };
        $[1] = gateProgress;
        $[2] = scrollContainerRef;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    return t0;
}
_s1(useScrollGate, "v+gVqFXZrHau0mEFL1HyUMje9Ig=", false, function() {
    return [
        useLandingScroll
    ];
});
function ScrollGate(t0) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "dc4d058a3c94c2dfbc93601f13dbac96c60650be87a36e288b34bbd88b16a88d") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dc4d058a3c94c2dfbc93601f13dbac96c60650be87a36e288b34bbd88b16a88d";
    }
    const { children } = t0;
    const gateContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { setGateProgress, setGateEndScrollY } = useLandingScrollSetter();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = getViewportHeight();
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [viewportHeight, setViewportHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [contentHeight, setContentHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const spacerHeight = Math.max(0, contentHeight - viewportHeight);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ScrollGate[measure]": ()=>{
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                setViewportHeight(getViewportHeight());
                const content = contentWrapperRef.current;
                if (content) {
                    const h = content.getBoundingClientRect().height;
                    setContentHeight(h);
                }
            }
        })["ScrollGate[measure]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const measure = t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ScrollGate[useEffect()]": ()=>{
                measure();
                window.addEventListener("resize", measure);
                return ()=>window.removeEventListener("resize", measure);
            }
        })["ScrollGate[useEffect()]"];
        t4 = [
            measure
        ];
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "ScrollGate[useEffect()]": ()=>{
                const content_0 = contentWrapperRef.current;
                if (!content_0) {
                    return;
                }
                const ro = new ResizeObserver(()=>{
                    setContentHeight(content_0.getBoundingClientRect().height);
                });
                ro.observe(content_0);
                return ()=>ro.disconnect();
            }
        })["ScrollGate[useEffect()]"];
        t6 = [];
        $[5] = t5;
        $[6] = t6;
    } else {
        t5 = $[5];
        t6 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    let t8;
    if ($[7] !== contentHeight || $[8] !== setGateEndScrollY || $[9] !== setGateProgress || $[10] !== spacerHeight) {
        t7 = ({
            "ScrollGate[useEffect()]": ()=>{
                const handleScroll = {
                    "ScrollGate[useEffect() > handleScroll]": ()=>{
                        const gate = gateContainerRef.current;
                        const scrollY = window.scrollY;
                        if (!gate || contentHeight <= 0 || spacerHeight <= 0) {
                            setProgress(0);
                            setGateProgress?.(0);
                            return;
                        }
                        const rect = gate.getBoundingClientRect();
                        const gateStartY = scrollY + rect.top;
                        const p = Math.min(1, Math.max(0, (scrollY - gateStartY) / spacerHeight));
                        setProgress(p);
                        setGateProgress?.(p);
                        if (p >= 1) {
                            setGateEndScrollY?.(scrollY);
                        }
                    }
                }["ScrollGate[useEffect() > handleScroll]"];
                handleScroll();
                window.addEventListener("scroll", handleScroll, {
                    passive: true
                });
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["ScrollGate[useEffect()]"];
        t8 = [
            contentHeight,
            spacerHeight,
            setGateProgress,
            setGateEndScrollY
        ];
        $[7] = contentHeight;
        $[8] = setGateEndScrollY;
        $[9] = setGateProgress;
        $[10] = spacerHeight;
        $[11] = t7;
        $[12] = t8;
    } else {
        t7 = $[11];
        t8 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t7, t8);
    const translateY = contentHeight > viewportHeight ? -progress * (contentHeight - viewportHeight) : 0;
    let t9;
    if ($[13] !== viewportHeight) {
        t9 = {
            top: 0,
            height: viewportHeight,
            minHeight: "100vh"
        };
        $[13] = viewportHeight;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    const t10 = `translateY(${translateY}px)`;
    let t11;
    if ($[15] !== t10) {
        t11 = {
            transform: t10
        };
        $[15] = t10;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== children || $[18] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: contentWrapperRef,
            className: "w-full will-change-transform",
            style: t11,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/scrolling.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[17] = children;
        $[18] = t11;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== t12 || $[21] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky w-full overflow-hidden rounded-t-3xl",
            style: t9,
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/scrolling.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[20] = t12;
        $[21] = t9;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== spacerHeight) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": true,
            className: "bg-[#092727]",
            style: {
                height: spacerHeight
            }
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/scrolling.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[23] = spacerHeight;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== t13 || $[26] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: gateContainerRef,
            className: "relative w-full",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/scrolling.tsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[25] = t13;
        $[26] = t14;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    return t15;
}
_s2(ScrollGate, "qB2cZpORMfU17Nyogjx58WdsQpk=", false, function() {
    return [
        useLandingScrollSetter
    ];
});
_c = ScrollGate;
/** Internal: context setter for gate progress and gate-end scroll (optional). */ const LandingScrollSetterContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
function useLandingScrollSetter() {
    _s3();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "dc4d058a3c94c2dfbc93601f13dbac96c60650be87a36e288b34bbd88b16a88d") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dc4d058a3c94c2dfbc93601f13dbac96c60650be87a36e288b34bbd88b16a88d";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LandingScrollSetterContext);
}
_s3(useLandingScrollSetter, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function FrontLayerEntranceSpacer() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "dc4d058a3c94c2dfbc93601f13dbac96c60650be87a36e288b34bbd88b16a88d") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dc4d058a3c94c2dfbc93601f13dbac96c60650be87a36e288b34bbd88b16a88d";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": true,
            className: "w-full bg-[#092727]",
            style: {
                height: FRONT_LAYER_ENTRANCE_PX
            }
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/scrolling.tsx",
            lineNumber: 308,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c1 = FrontLayerEntranceSpacer;
function FrontLayerWrapper(t0) {
    _s4();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "dc4d058a3c94c2dfbc93601f13dbac96c60650be87a36e288b34bbd88b16a88d") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dc4d058a3c94c2dfbc93601f13dbac96c60650be87a36e288b34bbd88b16a88d";
    }
    const { children } = t0;
    const { frontLayerProgress } = useLandingScroll();
    const [viewportHeight, setViewportHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(("TURBOPACK compile-time truthy", 1) ? window.innerHeight : "TURBOPACK unreachable");
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "FrontLayerWrapper[useEffect()]": ()=>{
                const onResize = {
                    "FrontLayerWrapper[useEffect() > onResize]": ()=>setViewportHeight(window.innerHeight)
                }["FrontLayerWrapper[useEffect() > onResize]"];
                onResize();
                window.addEventListener("resize", onResize);
                return ()=>window.removeEventListener("resize", onResize);
            }
        })["FrontLayerWrapper[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const entranceY = (1 - frontLayerProgress) * viewportHeight;
    const t3 = `translateY(${entranceY}px)`;
    let t4;
    if ($[3] !== t3) {
        t4 = {
            height: "100vh",
            minHeight: "100dvh",
            transform: t3,
            willChange: "transform"
        };
        $[3] = t3;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== children) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-full min-h-screen flex-col bg-[#020205]",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/scrolling.tsx",
            lineNumber: 372,
            columnNumber: 10
        }, this);
        $[5] = children;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t4 || $[8] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed left-0 right-0 top-0 z-20 overflow-y-auto overflow-x-hidden rounded-t-3xl bg-[#020205] transition-transform duration-500 ease-out",
            style: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/scrolling.tsx",
            lineNumber: 380,
            columnNumber: 10
        }, this);
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    return t6;
}
_s4(FrontLayerWrapper, "J98rHQjujEQeCcEtWRl/NPic2BQ=", false, function() {
    return [
        useLandingScroll
    ];
});
_c2 = FrontLayerWrapper;
function LandingScrollRoot(t0) {
    _s5();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "dc4d058a3c94c2dfbc93601f13dbac96c60650be87a36e288b34bbd88b16a88d") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dc4d058a3c94c2dfbc93601f13dbac96c60650be87a36e288b34bbd88b16a88d";
    }
    const { children, headerSlot } = t0;
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gateProgress, setGateProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [gateEndScrollY, setGateEndScrollYState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isScrolled = scrollY > SCROLL_THRESHOLD_HEADER;
    const frontFromGate = gateProgress >= 0.8 ? Math.min(1, (gateProgress - 0.8) / 0.2) : 0;
    const frontFromScroll = gateEndScrollY != null && scrollY >= gateEndScrollY ? Math.min(1, (scrollY - gateEndScrollY) / FRONT_LAYER_ENTRANCE_PX) : 0;
    const frontLayerProgress = Math.max(frontFromGate, frontFromScroll);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "LandingScrollRoot[setGateEndScrollY]": (y)=>{
                setGateEndScrollYState({
                    "LandingScrollRoot[setGateEndScrollY > setGateEndScrollYState()]": (prev)=>y != null && prev == null ? y : prev ?? null
                }["LandingScrollRoot[setGateEndScrollY > setGateEndScrollYState()]"]);
            }
        })["LandingScrollRoot[setGateEndScrollY]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const setGateEndScrollY = t1;
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "LandingScrollRoot[useEffect()]": ()=>{
                const onScroll = {
                    "LandingScrollRoot[useEffect() > onScroll]": ()=>{
                        setScrollY(("TURBOPACK compile-time truthy", 1) ? window.scrollY : "TURBOPACK unreachable");
                    }
                }["LandingScrollRoot[useEffect() > onScroll]"];
                onScroll();
                window.addEventListener("scroll", onScroll, {
                    passive: true
                });
                return ()=>window.removeEventListener("scroll", onScroll);
            }
        })["LandingScrollRoot[useEffect()]"];
        t3 = [];
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[4] !== frontLayerProgress || $[5] !== gateEndScrollY || $[6] !== gateProgress || $[7] !== isScrolled || $[8] !== scrollY) {
        t4 = {
            scrollY,
            gateProgress,
            gateEndScrollY,
            frontLayerProgress,
            isScrolled,
            scrollContainerRef
        };
        $[4] = frontLayerProgress;
        $[5] = gateEndScrollY;
        $[6] = gateProgress;
        $[7] = isScrolled;
        $[8] = scrollY;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const value = t4;
    let t5;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            setGateProgress,
            setGateEndScrollY
        };
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== headerSlot) {
        t6 = headerSlot != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 z-[100] h-0",
            children: headerSlot
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/scrolling.tsx",
            lineNumber: 490,
            columnNumber: 32
        }, this);
        $[11] = headerSlot;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== children || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LandingScrollSetterContext.Provider, {
            value: t5,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen scroll-smooth",
                ref: scrollContainerRef,
                children: [
                    t6,
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landing/components/scrolling.tsx",
                lineNumber: 498,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/scrolling.tsx",
            lineNumber: 498,
            columnNumber: 10
        }, this);
        $[13] = children;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t7 || $[17] !== value) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LandingScrollContext.Provider, {
            value: value,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/scrolling.tsx",
            lineNumber: 507,
            columnNumber: 10
        }, this);
        $[16] = t7;
        $[17] = value;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    return t8;
}
_s5(LandingScrollRoot, "1bYvGvCCvH0y9e/Yj6qxoHBjdQA=");
_c3 = LandingScrollRoot;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ScrollGate");
__turbopack_context__.k.register(_c1, "FrontLayerEntranceSpacer");
__turbopack_context__.k.register(_c2, "FrontLayerWrapper");
__turbopack_context__.k.register(_c3, "LandingScrollRoot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/ScrollGate.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/**
 * Re-exports from scrolling.tsx so the whole landing scroll is operated there.
 * Use ScrollGate and useScrollGate from here or from ./scrolling.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$scrolling$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/scrolling.tsx [app-client] (ecmascript)");
'use client';
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$ScrollGate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/landing/components/ScrollGate.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$scrolling$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/scrolling.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
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
    if ($[0] !== "16069c2391fb46025a20775a012b1a8ad93cab06f636be56fbb5c6320ef92ea9") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16069c2391fb46025a20775a012b1a8ad93cab06f636be56fbb5c6320ef92ea9";
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
    if ($[0] !== "16069c2391fb46025a20775a012b1a8ad93cab06f636be56fbb5c6320ef92ea9") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16069c2391fb46025a20775a012b1a8ad93cab06f636be56fbb5c6320ef92ea9";
    }
    const { sectionRef, progressIn, progressOut } = useScrollProgress();
    const { progress: gateProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$scrolling$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollGate"])();
    const dissolveOut = 1 - progressOut;
    const opacity = gateProgress <= 0.05 ? 1 : progressIn * dissolveOut;
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
        t1 = {
            ...moveInOut(0),
            backgroundColor: "#0A2727",
            borderTopLeftRadius: "1.5rem",
            borderTopRightRadius: "1.5rem"
        };
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
            lineNumber: 210,
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
            lineNumber: 217,
            columnNumber: 10
        }, this);
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-3xl text-center",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-6 text-lg leading-relaxed text-white/90 md:text-xl",
                    children: [
                        "Build, customize, and scale e-commerce websites with total control.",
                        t3,
                        "A flexible, modern system for building powerful online stores.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                            lineNumber: 224,
                            columnNumber: 263
                        }, this),
                        "Everything you need to create, manage, and grow your store."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 224,
                    columnNumber: 61
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 224,
            columnNumber: 10
        }, this);
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t1) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full overflow-hidden rounded-t-3xl px-6 py-12 md:px-10 md:py-16",
            style: t1,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 231,
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
                    lineNumber: 249,
                    columnNumber: 104
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-2 w-2 rounded-full bg-neutral-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 249,
                    columnNumber: 160
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-2 w-2 rounded-full bg-neutral-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 249,
                    columnNumber: 216
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 249,
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
            lineNumber: 256,
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
            lineNumber: 263,
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
                            lineNumber: 270,
                            columnNumber: 190
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 270,
                    columnNumber: 136
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 270,
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
            lineNumber: 277,
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
                    lineNumber: 293,
                    columnNumber: 105
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-2 w-2 rounded-full bg-neutral-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 293,
                    columnNumber: 161
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-2 w-2 rounded-full bg-neutral-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 293,
                    columnNumber: 217
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 293,
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
                    lineNumber: 302,
                    columnNumber: 79
                }, this),
                " today?"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xs text-neutral-600",
            children: "Design, generate, print, and work on anything."
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "mt-3 rounded-md bg-violet-500 px-3 py-1.5 text-xs font-medium text-white",
            children: "Start designing"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 304,
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
                            lineNumber: 315,
                            columnNumber: 200
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 315,
                    columnNumber: 139
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 315,
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
            lineNumber: 322,
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
                    lineNumber: 340,
                    columnNumber: 105
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-2 w-2 rounded-full bg-neutral-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 340,
                    columnNumber: 161
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-2 w-2 rounded-full bg-neutral-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 340,
                    columnNumber: 217
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 340,
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
                            lineNumber: 347,
                            columnNumber: 183
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-[10px] text-neutral-500",
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                            lineNumber: 347,
                            columnNumber: 282
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
                    lineNumber: 347,
                    columnNumber: 137
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 347,
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
            lineNumber: 354,
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
            lineNumber: 362,
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
            lineNumber: 380,
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
            lineNumber: 387,
            columnNumber: 11
        }, this);
        $[42] = t24;
        $[43] = t26;
    } else {
        t26 = $[43];
    }
    let t27;
    if ($[44] !== t23 || $[45] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-6 md:px-10",
            children: [
                t23,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 395,
            columnNumber: 11
        }, this);
        $[44] = t23;
        $[45] = t26;
        $[46] = t27;
    } else {
        t27 = $[46];
    }
    let t28;
    if ($[47] !== sectionRef || $[48] !== t27 || $[49] !== t5) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: sectionRef,
            className: "w-full bg-transparent pb-16 pt-0 md:pb-24 md:pt-0",
            children: [
                t5,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
            lineNumber: 404,
            columnNumber: 11
        }, this);
        $[47] = sectionRef;
        $[48] = t27;
        $[49] = t5;
        $[50] = t28;
    } else {
        t28 = $[50];
    }
    return t28;
}
_s1(CommercePlatform, "IbGx9glNxGZfLJNjF/SEQuH3IBA=", false, function() {
    return [
        useScrollProgress,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$scrolling$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollGate"]
    ];
});
_c = CommercePlatform;
function _CommercePlatformAnonymous4(i_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "aspect-square rounded bg-neutral-200",
        "aria-hidden": true
    }, i_1, false, {
        fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
        lineNumber: 415,
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
        lineNumber: 418,
        columnNumber: 10
    }, this);
}
function _CommercePlatformAnonymous2(i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "h-8 w-8 rounded-full bg-neutral-300",
        "aria-hidden": true
    }, i, false, {
        fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
        lineNumber: 423,
        columnNumber: 10
    }, this);
}
function _CommercePlatformAnonymous(cat) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded bg-neutral-200 px-2 py-0.5 text-xs text-neutral-700",
        children: cat
    }, cat, false, {
        fileName: "[project]/src/app/landing/components/commercePlatform.tsx",
        lineNumber: 426,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$scrolling$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/scrolling.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function LandingHeader() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "77e88189f117f9a822b06da75a9eb77d4c16879ad0befe8ce5d3b2effeaeeddd") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "77e88189f117f9a822b06da75a9eb77d4c16879ad0befe8ce5d3b2effeaeeddd";
    }
    const { isScrolled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$scrolling$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLandingScroll"])();
    const t0 = `absolute left-0 right-0 top-0 flex w-full items-center justify-between pl-[7.5rem] pr-[7.5rem] py-4 transition-[background-color,backdrop-filter] duration-300 ease-out md:pl-[15rem] md:pr-[15rem] md:py-5 ${isScrolled ? "bg-neutral-900/90 backdrop-blur-md" : "bg-transparent"}`;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "text-2xl font-medium tracking-wide text-white md:text-3xl",
            style: {
                fontFamily: "'Great Vibes', cursive"
            },
            children: "Mercato"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/header.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "flex items-center gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/login",
                    className: "text-sm font-medium text-white/95 transition hover:text-white",
                    children: "Log in"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/header.tsx",
                    lineNumber: 29,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/signup",
                    className: "rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-white/95",
                    children: "Start for free"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/header.tsx",
                    lineNumber: 29,
                    columnNumber: 158
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/header.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== t0) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: t0,
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/header.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[3] = t0;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_s(LandingHeader, "I8PgiHQN5naVNVxHrEnOWxdo5Sw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$scrolling$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLandingScroll"]
    ];
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$ScrollGate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/landing/components/ScrollGate.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$scrolling$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/landing/components/scrolling.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
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
    if ($[0] !== "8f23f6c4e06b50818928140db92b8cbfbaf91db4bc3391e36d1d03df32a1b790") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f23f6c4e06b50818928140db92b8cbfbaf91db4bc3391e36d1d03df32a1b790";
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(65);
    if ($[0] !== "8f23f6c4e06b50818928140db92b8cbfbaf91db4bc3391e36d1d03df32a1b790") {
        for(let $i = 0; $i < 65; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f23f6c4e06b50818928140db92b8cbfbaf91db4bc3391e36d1d03df32a1b790";
    }
    const { sectionRef, progressIn, progressOut } = useScrollProgress();
    const { progress: stackProgressRaw, allowInnerScroll } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$scrolling$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollGate"])();
    const stackProgress = allowInnerScroll ? stackProgressRaw : 0;
    const t0 = `translateY(${-stackProgress * 36}px) scale(${1 - stackProgress * 0.02})`;
    const t1 = 1 - stackProgress * 0.12;
    let t2;
    if ($[1] !== t0 || $[2] !== t1) {
        t2 = {
            transform: t0,
            opacity: t1,
            transition: "transform 300ms cubic-bezier(.2,.9,.2,1), opacity 300ms ease",
            willChange: "transform, opacity"
        };
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const stackStyle = t2;
    const dissolveOut = 1 - progressOut;
    const opacity = progressIn * dissolveOut;
    let t3;
    if ($[4] !== opacity || $[5] !== progressIn || $[6] !== progressOut) {
        t3 = ({
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
        $[4] = opacity;
        $[5] = progressIn;
        $[6] = progressOut;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const moveInOut = t3;
    let t4;
    if ($[8] !== moveInOut) {
        t4 = moveInOut(0);
        $[8] = moveInOut;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl",
            children: "Build Your Website With Mercato Exclusive Tools"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 256,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-6 text-lg leading-relaxed text-white/90 md:text-xl",
            children: "With Mercato's exclusive tools, you can design, launch, and grow your online store faster and smarter than ever before."
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 257,
            columnNumber: 10
        }, this);
        $[10] = t5;
        $[11] = t6;
    } else {
        t5 = $[10];
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t4) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-3xl text-center",
            style: t4,
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 266,
            columnNumber: 10
        }, this);
        $[12] = t4;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== moveInOut) {
        t8 = INTEGRATIONS.map({
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
                            lineNumber: 278,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm font-semibold",
                            children: item.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                            lineNumber: 278,
                            columnNumber: 73
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-0.5 text-xs text-neutral-400",
                            children: item.desc
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                            lineNumber: 278,
                            columnNumber: 130
                        }, this)
                    ]
                }, item.name, true, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 275,
                    columnNumber: 56
                }, this)
        }["MercatoTools[INTEGRATIONS.map()]"]);
        $[14] = moveInOut;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-3 md:col-span-5 md:grid-cols-4",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 287,
            columnNumber: 10
        }, this);
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== moveInOut) {
        t10 = moveInOut(STAGGER_MS * 2, {
            fromRight: true,
            fromBottom: false
        });
        $[18] = moveInOut;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-violet-600/90 px-4 py-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium text-white",
                children: "Custom frontend without custom code"
            }, void 0, false, {
                fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                lineNumber: 306,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = [
            1,
            2,
            3,
            4
        ].map(_MercatoToolsAnonymous);
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-neutral-600 bg-neutral-800 shadow-xl overflow-hidden h-full min-h-[220px]",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 space-y-2",
                    children: [
                        t12,
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
                            lineNumber: 320,
                            columnNumber: 168
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 320,
                    columnNumber: 132
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== t10) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-7",
            style: t10,
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== t14 || $[26] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-16 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6",
            children: [
                t9,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[25] = t14;
        $[26] = t9;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== moveInOut) {
        t16 = moveInOut(0, {
            fromLeft: true,
            fromBottom: false
        });
        $[28] = moveInOut;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    let t18;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between border-b border-neutral-200 pb-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm font-semibold text-neutral-800",
                    children: "Add elements"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 356,
                    columnNumber: 95
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-neutral-400",
                    "aria-hidden": true,
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 356,
                    columnNumber: 167
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 356,
            columnNumber: 11
        }, this);
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs text-neutral-600",
            children: "Drag and drop elements anywhere on your page"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 357,
            columnNumber: 11
        }, this);
        $[30] = t17;
        $[31] = t18;
    } else {
        t17 = $[30];
        t18 = $[31];
    }
    let t19;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "mt-4 space-y-2",
            children: ELEMENTS.slice(0, 10).map(_MercatoToolsAnonymous3)
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 366,
            columnNumber: 11
        }, this);
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    let t20;
    if ($[33] !== t16) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shrink-0 w-full max-w-[240px] rounded-xl border border-neutral-600 bg-white p-4 shadow-xl",
            style: t16,
            children: [
                t17,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[33] = t16;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    let t21;
    if ($[35] !== moveInOut) {
        t21 = moveInOut(STAGGER_MS, {
            fromBottom: true
        });
        $[35] = moveInOut;
        $[36] = t21;
    } else {
        t21 = $[36];
    }
    let t22;
    let t23;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-3 w-3/4 rounded bg-neutral-600 mb-2"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 392,
            columnNumber: 11
        }, this);
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-3 w-1/2 rounded bg-neutral-600 mb-4"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        $[37] = t22;
        $[38] = t23;
    } else {
        t22 = $[37];
        t23 = $[38];
    }
    let t24;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg bg-neutral-700/60 p-4 min-h-[180px]",
            children: [
                t22,
                t23,
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
                    lineNumber: 402,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 402,
            columnNumber: 11
        }, this);
        $[39] = t24;
    } else {
        t24 = $[39];
    }
    let t25;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            lineNumber: 409,
                            columnNumber: 117
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-medium text-white",
                            children: "HTML"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                            lineNumber: 409,
                            columnNumber: 172
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 409,
                    columnNumber: 67
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-2xl",
                    "aria-hidden": true,
                    children: "💻"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 409,
                    columnNumber: 238
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 409,
            columnNumber: 11
        }, this);
        $[40] = t25;
    } else {
        t25 = $[40];
    }
    let t26;
    if ($[41] !== t21) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 rounded-xl border border-neutral-600 bg-neutral-800/80 p-4 shadow-xl min-h-[280px]",
            style: t21,
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 416,
            columnNumber: 11
        }, this);
        $[41] = t21;
        $[42] = t26;
    } else {
        t26 = $[42];
    }
    let t27;
    if ($[43] !== t20 || $[44] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-7 flex gap-4",
            children: [
                t20,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 424,
            columnNumber: 11
        }, this);
        $[43] = t20;
        $[44] = t26;
        $[45] = t27;
    } else {
        t27 = $[45];
    }
    let t28;
    if ($[46] !== moveInOut) {
        t28 = moveInOut(STAGGER_MS * 2, {
            fromRight: true,
            fromBottom: false
        });
        $[46] = moveInOut;
        $[47] = t28;
    } else {
        t28 = $[47];
    }
    let t29;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex border-b border-neutral-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "px-4 py-2 text-xs font-medium text-white border-b-2 border-violet-500",
                    children: "Files"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 444,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "px-4 py-2 text-xs text-neutral-400",
                    children: "Layers"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 444,
                    columnNumber: 179
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, this);
        $[48] = t29;
    } else {
        t29 = $[48];
    }
    let t30;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = LAYOUT_OPTIONS.map(_MercatoToolsLAYOUT_OPTIONSMap);
        $[49] = t30;
    } else {
        t30 = $[49];
    }
    let t31;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-28 shrink-0 border-r border-neutral-600 p-2 space-y-1",
            children: [
                t30,
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
                    lineNumber: 458,
                    columnNumber: 89
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 458,
            columnNumber: 11
        }, this);
        $[50] = t31;
    } else {
        t31 = $[50];
    }
    let t32;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-neutral-600 bg-neutral-800/90 overflow-hidden shadow-xl h-full",
            children: [
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex",
                    children: [
                        t31,
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
                                        lineNumber: 465,
                                        columnNumber: 374
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                                    lineNumber: 465,
                                    columnNumber: 232
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 h-2 w-full max-w-[120px] rounded bg-neutral-600",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                                    lineNumber: 465,
                                    columnNumber: 459
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 h-2 w-2/3 max-w-[80px] rounded bg-neutral-600",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                                    lineNumber: 465,
                                    columnNumber: 550
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                            lineNumber: 465,
                            columnNumber: 148
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
                    lineNumber: 465,
                    columnNumber: 121
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 465,
            columnNumber: 11
        }, this);
        $[51] = t32;
    } else {
        t32 = $[51];
    }
    let t33;
    if ($[52] !== t28) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-5",
            style: t28,
            children: t32
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 472,
            columnNumber: 11
        }, this);
        $[52] = t28;
        $[53] = t33;
    } else {
        t33 = $[53];
    }
    let t34;
    if ($[54] !== t27 || $[55] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6",
            children: [
                t27,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 480,
            columnNumber: 11
        }, this);
        $[54] = t27;
        $[55] = t33;
        $[56] = t34;
    } else {
        t34 = $[56];
    }
    let t35;
    if ($[57] !== t15 || $[58] !== t34 || $[59] !== t7) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl",
            children: [
                t7,
                t15,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 489,
            columnNumber: 11
        }, this);
        $[57] = t15;
        $[58] = t34;
        $[59] = t7;
        $[60] = t35;
    } else {
        t35 = $[60];
    }
    let t36;
    if ($[61] !== sectionRef || $[62] !== stackStyle || $[63] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: sectionRef,
            className: "w-full px-6 py-16 md:px-10 md:py-24",
            style: stackStyle,
            children: t35
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
            lineNumber: 499,
            columnNumber: 11
        }, this);
        $[61] = sectionRef;
        $[62] = stackStyle;
        $[63] = t35;
        $[64] = t36;
    } else {
        t36 = $[64];
    }
    return t36;
}
_s1(MercatoTools, "tx8qs5NGZ5ci2t+/bRopkO4Ca+U=", false, function() {
    return [
        useScrollProgress,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$components$2f$scrolling$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollGate"]
    ];
});
_c = MercatoTools;
function _MercatoToolsAnonymous5(i_3) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-6 rounded bg-neutral-700/80",
        "aria-hidden": true
    }, i_3, false, {
        fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
        lineNumber: 510,
        columnNumber: 10
    }, this);
}
function _MercatoToolsLAYOUT_OPTIONSMap(label_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded py-1.5 text-center text-[10px] text-neutral-400",
        children: label_0
    }, label_0, false, {
        fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
        lineNumber: 513,
        columnNumber: 10
    }, this);
}
function _MercatoToolsAnonymous4(i_2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "aspect-video rounded bg-neutral-600/80",
        "aria-hidden": true
    }, i_2, false, {
        fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
        lineNumber: 516,
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
                lineNumber: 519,
                columnNumber: 124
            }, this),
            label
        ]
    }, label, true, {
        fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
        lineNumber: 519,
        columnNumber: 10
    }, this);
}
function _MercatoToolsAnonymous2(i_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-14 rounded bg-neutral-700/60",
        "aria-hidden": true
    }, i_1, false, {
        fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
        lineNumber: 522,
        columnNumber: 10
    }, this);
}
function _MercatoToolsAnonymous(i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-8 rounded bg-neutral-700/80",
        "aria-hidden": true
    }, i_0, false, {
        fileName: "[project]/src/app/landing/components/mercatoTools.tsx",
        lineNumber: 525,
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
    if ($[0] !== "d88292985ea64fecede4bcfab76cff4a7b65ed446519d88924a74ffbd3493609") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d88292985ea64fecede4bcfab76cff4a7b65ed446519d88924a74ffbd3493609";
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
            className: "flex-shrink-0 w-full rounded-t-3xl bg-transparent px-6 pt-16 pb-8 md:px-10 md:pt-24 md:pb-12",
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
                        columnNumber: 163
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-white/90 md:mt-10 md:text-lg",
                        children: "Get your business online faster! Take advantage of our 1-month free domain offer and start building your website today."
                    }, void 0, false, {
                        fileName: "[project]/src/app/landing/components/pricing.tsx",
                        lineNumber: 22,
                        columnNumber: 273
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/landing/components/pricing.tsx",
                lineNumber: 22,
                columnNumber: 124
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
                    lineNumber: 32,
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
                            lineNumber: 32,
                            columnNumber: 155
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-4xl font-bold tracking-tight text-white md:text-5xl",
                            children: "50"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/pricing.tsx",
                            lineNumber: 32,
                            columnNumber: 215
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg font-medium text-white/80",
                            children: "/mo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/pricing.tsx",
                            lineNumber: 32,
                            columnNumber: 299
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/pricing.tsx",
                    lineNumber: 32,
                    columnNumber: 90
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "mt-6 space-y-3",
                    children: CARD_FEATURES.map(_PricingAnonymousCARD_FEATURESMap)
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/pricing.tsx",
                    lineNumber: 32,
                    columnNumber: 367
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "mt-8 w-full rounded-lg bg-white py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/95",
                    children: "Button"
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/pricing.tsx",
                    lineNumber: 32,
                    columnNumber: 457
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/pricing.tsx",
            lineNumber: 30,
            columnNumber: 92
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
"[project]/src/app/landing/components/testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Testimonials",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "f1de9f9ae3ad64040287c84dcbae45632524c548b4baf1578eb4419cf8c53f45") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f1de9f9ae3ad64040287c84dcbae45632524c548b4baf1578eb4419cf8c53f45";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 z-0 w-full",
            style: {
                background: "linear-gradient(to right, #06143E 0%, transparent 50%), linear-gradient(to bottom, #0a2a7a 0%, #020b2a 28%, #020205 58%, #020205 100%)",
                clipPath: "polygon(0 20%, 100% 5%, 100% 100%, 0 100%)",
                transform: "translateY(10%)"
            },
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/testimonials.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                            lineNumber: 29,
                            columnNumber: 188
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/testimonials.tsx",
                    lineNumber: 29,
                    columnNumber: 135
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/testimonials.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            isolation: "isolate"
        };
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Globe3D, {
            className: "absolute inset-0 size-full"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/testimonials.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-[90%] top-24 z-10 -translate-x-1/2 -translate-y-[15%] md:top-32",
                    "aria-hidden": true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative aspect-square h-[64rem] w-[64rem] scale-[1.125] overflow-hidden rounded-full md:h-[80rem] md:w-[80rem]",
                        style: t2,
                        children: [
                            t3,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0 rounded-full",
                                style: {
                                    background: "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 32%, rgba(2, 11, 42, 0.25) 55%, rgba(0, 0, 0, 0.6) 78%, rgba(0, 0, 0, 0.92) 100%)"
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/app/landing/components/testimonials.tsx",
                                lineNumber: 49,
                                columnNumber: 298
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/landing/components/testimonials.tsx",
                        lineNumber: 49,
                        columnNumber: 154
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/landing/components/testimonials.tsx",
                    lineNumber: 49,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/testimonials.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-center text-2xl font-bold text-white md:text-3xl",
            children: "Contact Us"
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/testimonials.tsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
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
                            lineNumber: 65,
                            columnNumber: 76
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "first-name",
                            type: "text",
                            className: "w-full rounded-lg border border-neutral-600 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            placeholder: ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/testimonials.tsx",
                            lineNumber: 65,
                            columnNumber: 177
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/testimonials.tsx",
                    lineNumber: 65,
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
                            lineNumber: 65,
                            columnNumber: 435
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "last-name",
                            type: "text",
                            className: "w-full rounded-lg border border-neutral-600 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            placeholder: ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/testimonials.tsx",
                            lineNumber: 65,
                            columnNumber: 534
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/testimonials.tsx",
                    lineNumber: 65,
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
                            lineNumber: 65,
                            columnNumber: 791
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "company",
                            type: "text",
                            className: "w-full rounded-lg border border-neutral-600 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            placeholder: ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/testimonials.tsx",
                            lineNumber: 65,
                            columnNumber: 886
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/testimonials.tsx",
                    lineNumber: 65,
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
                            lineNumber: 65,
                            columnNumber: 1141
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "email",
                            type: "email",
                            className: "w-full rounded-lg border border-neutral-600 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500",
                            placeholder: ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/testimonials.tsx",
                            lineNumber: 65,
                            columnNumber: 1232
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/testimonials.tsx",
                    lineNumber: 65,
                    columnNumber: 1136
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/testimonials.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative flex-shrink-0 w-full overflow-hidden bg-transparent px-6 pt-8 pb-8 md:px-10 md:pt-12 md:pb-12",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 mx-auto max-w-6xl",
                    children: [
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-20 mb-6 mt-12 max-w-4xl translate-x-[-15%] translate-y-[12%] md:mt-16 md:mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto max-w-2xl rounded-2xl border-2 border-white bg-black p-8 shadow-xl md:p-10",
                                children: [
                                    t5,
                                    t6,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "rounded-lg border-2 border-white bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black",
                                            children: "Submit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/landing/components/testimonials.tsx",
                                            lineNumber: 72,
                                            columnNumber: 447
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/landing/components/testimonials.tsx",
                                        lineNumber: 72,
                                        columnNumber: 405
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/landing/components/testimonials.tsx",
                                lineNumber: 72,
                                columnNumber: 297
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/landing/components/testimonials.tsx",
                            lineNumber: 72,
                            columnNumber: 191
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/landing/components/testimonials.tsx",
                    lineNumber: 72,
                    columnNumber: 138
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/landing/components/testimonials.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    return t7;
}
_c1 = Testimonials;
var _c, _c1;
__turbopack_context__.k.register(_c, "Globe3D");
__turbopack_context__.k.register(_c1, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_landing_components_527bc7bc._.js.map