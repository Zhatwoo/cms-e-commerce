(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/landing/components/Globe3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Globe3D",
    ()=>Globe3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const GLOBE_DATA_URL = '/globe-data-min.json';
const BASE_ARCS = [
    {
        startLat: 14.5995,
        startLng: 120.9842,
        endLat: 35.6762,
        endLng: 139.6503
    },
    {
        startLat: 40.7128,
        startLng: -74.006,
        endLat: 51.5074,
        endLng: -0.1278
    },
    {
        startLat: -33.8688,
        startLng: 151.2093,
        endLat: 34.0522,
        endLng: -118.2437
    },
    {
        startLat: 1.3521,
        startLng: 103.8198,
        endLat: 25.2048,
        endLng: 55.2708
    },
    {
        startLat: 55.7558,
        startLng: 37.6173,
        endLat: 39.9042,
        endLng: 116.4074
    },
    {
        startLat: -23.5505,
        startLng: -46.6333,
        endLat: 19.4326,
        endLng: -99.1332
    },
    {
        startLat: 41.9028,
        startLng: 12.4964,
        endLat: 48.8566,
        endLng: 2.3522
    },
    {
        startLat: 28.6139,
        startLng: 77.209,
        endLat: 24.8607,
        endLng: 67.0011
    },
    {
        startLat: -34.6037,
        startLng: -58.3816,
        endLat: 40.4168,
        endLng: -3.7038
    },
    {
        startLat: 22.3193,
        startLng: 114.1694,
        endLat: 37.5665,
        endLng: 126.978
    },
    {
        startLat: 19.076,
        startLng: 72.8777,
        endLat: 31.2304,
        endLng: 121.4737
    },
    {
        startLat: 23.8103,
        startLng: 90.4125,
        endLat: 13.0827,
        endLng: 80.2707
    },
    {
        startLat: 52.52,
        startLng: 13.405,
        endLat: 48.1351,
        endLng: 11.582
    },
    {
        startLat: -15.7942,
        startLng: -47.8822,
        endLat: -12.0464,
        endLng: -77.0428
    },
    {
        startLat: 35.6762,
        startLng: 139.6503,
        endLat: 37.7749,
        endLng: -122.4194
    },
    {
        startLat: 51.5074,
        startLng: -0.1278,
        endLat: 55.7558,
        endLng: 37.6173
    },
    // Philippines (Manila 14.5995,120.9842 | Cebu 10.3157,123.8854 | Davao 7.0731,125.6128)
    {
        startLat: 14.5995,
        startLng: 120.9842,
        endLat: 1.3521,
        endLng: 103.8198
    },
    {
        startLat: 14.5995,
        startLng: 120.9842,
        endLat: -33.8688,
        endLng: 151.2093
    },
    {
        startLat: 14.5995,
        startLng: 120.9842,
        endLat: 25.2048,
        endLng: 55.2708
    },
    {
        startLat: 10.3157,
        startLng: 123.8854,
        endLat: 22.3193,
        endLng: 114.1694
    },
    {
        startLat: 14.5995,
        startLng: 120.9842,
        endLat: 37.5665,
        endLng: 126.978
    },
    {
        startLat: 14.5995,
        startLng: 120.9842,
        endLat: 34.0522,
        endLng: -118.2437
    },
    {
        startLat: 10.3157,
        startLng: 123.8854,
        endLat: 35.6762,
        endLng: 139.6503
    },
    {
        startLat: 14.5995,
        startLng: 120.9842,
        endLat: 13.7563,
        endLng: 100.5018
    },
    {
        startLat: 7.0731,
        startLng: 125.6128,
        endLat: 1.3521,
        endLng: 103.8198
    }
];
const SAMPLE_ARCS = Array.from({
    length: 4
}, (_, i)=>BASE_ARCS.map((arc, j)=>({
            ...arc,
            order: i * BASE_ARCS.length + j
        }))).flat();
const MINI_TESTIMONIALS = [
    {
        quote: 'Great platform.',
        title: 'Jane D.',
        description: 'CEO'
    },
    {
        quote: 'Smooth onboarding.',
        title: 'Mark T.',
        description: 'Founder'
    },
    {
        quote: 'Go global.',
        title: 'Sarah L.',
        description: 'Director'
    },
    {
        quote: 'Best decision.',
        title: 'Alex K.',
        description: 'Ops'
    },
    {
        quote: 'Reliable.',
        title: 'Chris M.',
        description: 'CTO'
    },
    {
        quote: 'Customers love it.',
        title: 'Pat R.',
        description: 'Product'
    }
];
function createMiniCardEl(d) {
    const el = document.createElement('div');
    el.className = 'globe-mini-card';
    el.style.cssText = [
        'width:144px;min-width:144px;max-width:144px;',
        'padding:12px;border-radius:16px;',
        'background:rgba(10,25,97,0.95);border:1px solid rgba(255,255,255,0.25);',
        'color:#fff;font-size:20px;line-height:1.25;text-align:left;',
        'box-shadow:0 4px 16px rgba(0,0,0,0.3);pointer-events:none;',
        'overflow:hidden;display:flex;flex-direction:column;gap:4px;',
        'transition:opacity 0.2s ease;'
    ].join(' ');
    el.innerHTML = [
        `<p style="margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="${escapeHtml(d.quote)}">&ldquo;${escapeHtml(d.quote)}&rdquo;</p>`,
        `<p style="margin:0;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(d.title)}</p>`,
        `<p style="margin:0;opacity:0.85;font-size:18px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(d.description)}</p>`
    ].join('');
    return el;
}
function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
}
const ARC_LAND_INTERVAL_MS = 2000;
const MAX_LANDINGS_ON_GLOBE = 10;
const LANDING_SPREAD_DEG = 1.2;
function Globe3D({ className, onArcLand }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onArcLandRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onArcLand);
    onArcLandRef.current = onArcLand;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Globe3D.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            let frameId;
            let renderer;
            let globe;
            let css2dRenderer;
            const init = {
                "Globe3D.useEffect.init": async ()=>{
                    const [THREE, ThreeGlobe, controlsModule, css2dModule] = await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/three-globe/dist/three-globe.mjs [app-client] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/three/examples/jsm/controls/OrbitControls.js [app-client] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/three/examples/jsm/renderers/CSS2DRenderer.js [app-client] (ecmascript, async loader)")
                    ]);
                    const { OrbitControls } = controlsModule;
                    const { CSS2DRenderer } = css2dModule;
                    const rect = container.getBoundingClientRect();
                    const size = Math.min(rect.width, rect.height) || 256;
                    const scene = new THREE.Scene();
                    scene.background = null;
                    scene.fog = null;
                    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 2000);
                    camera.position.z = 357;
                    camera.position.x = 0;
                    camera.position.y = 0;
                    scene.add(new THREE.AmbientLight(0xbbbbbb, 0.3));
                    const dLight = new THREE.DirectionalLight(0xffffff, 0.8);
                    dLight.position.set(-800, 2000, 400);
                    camera.add(dLight);
                    const dLight1 = new THREE.DirectionalLight(0x7982f6, 1);
                    dLight1.position.set(-200, 500, 200);
                    camera.add(dLight1);
                    const dLight2 = new THREE.PointLight(0x8566cc, 0.5);
                    dLight2.position.set(-200, 500, 200);
                    camera.add(dLight2);
                    scene.add(camera);
                    renderer = new THREE.WebGLRenderer({
                        antialias: true,
                        alpha: true,
                        premultipliedAlpha: false
                    });
                    renderer.setClearColor(0x000000, 0);
                    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
                    renderer.setSize(size, size);
                    const canvas = renderer.domElement;
                    canvas.style.display = 'block';
                    canvas.style.width = '100%';
                    canvas.style.height = '100%';
                    container.appendChild(renderer.domElement);
                    css2dRenderer = new CSS2DRenderer();
                    css2dRenderer.setSize(size, size);
                    css2dRenderer.domElement.style.position = 'absolute';
                    css2dRenderer.domElement.style.top = '0';
                    css2dRenderer.domElement.style.left = '0';
                    css2dRenderer.domElement.style.width = '100%';
                    css2dRenderer.domElement.style.height = '100%';
                    css2dRenderer.domElement.style.pointerEvents = 'none';
                    container.appendChild(css2dRenderer.domElement);
                    const GlobeClass = ThreeGlobe.default;
                    globe = new GlobeClass({
                        waitForGlobeReady: true,
                        animateIn: true
                    });
                    const g = globe;
                    const res = await fetch(GLOBE_DATA_URL);
                    const data = await res.json();
                    const features = data?.features ?? [];
                    g.hexPolygonsData(features).hexPolygonResolution(3).hexPolygonMargin(0.500).hexPolygonColor({
                        "Globe3D.useEffect.init": (e)=>{
                            if ([
                                'KGZ',
                                'KOR',
                                'THA',
                                'RUS',
                                'UZB',
                                'IDN',
                                'KAZ',
                                'MYS'
                            ].includes(e.properties?.ISO_A3 ?? '')) {
                                return 'rgba(100, 255, 80, 1)';
                            }
                            return 'rgba(120, 255, 100, 1)';
                        }
                    }["Globe3D.useEffect.init"]);
                    g.rotateY(-Math.PI * (5 / 9));
                    g.rotateZ(-Math.PI / 6);
                    g.showAtmosphere(true).atmosphereColor('rgba(120, 140, 255, 0.6)').atmosphereAltitude(0.28);
                    g.arcsData(SAMPLE_ARCS).arcColor({
                        "Globe3D.useEffect.init": ()=>'rgba(255, 255, 255, 1)'
                    }["Globe3D.useEffect.init"]).arcAltitude(0.3).arcStroke(0.2).arcDashLength(0.5).arcDashGap(4).arcDashAnimateTime(1500).arcsTransitionDuration(1000).arcDashInitialGap({
                        "Globe3D.useEffect.init": (d)=>(d.order ?? 0) * 0.6
                    }["Globe3D.useEffect.init"]);
                    // Cards on globe: one per arc landing (endLat, endLng + spread), hide when not on orbit screen (behind globe)
                    const landings = [];
                    let arcLandIndex = 0;
                    let landingId = 0;
                    const spread = {
                        "Globe3D.useEffect.init.spread": ()=>(Math.random() - 0.5) * 2 * LANDING_SPREAD_DEG
                    }["Globe3D.useEffect.init.spread"];
                    g.htmlElementsData(landings).htmlLat({
                        "Globe3D.useEffect.init": (d_0)=>d_0.lat
                    }["Globe3D.useEffect.init"]).htmlLng({
                        "Globe3D.useEffect.init": (d_1)=>d_1.lng
                    }["Globe3D.useEffect.init"]).htmlAltitude(0.015).htmlElement(createMiniCardEl).htmlElementVisibilityModifier({
                        "Globe3D.useEffect.init": (el, isVisible)=>{
                            const style = el.style;
                            style.opacity = isVisible ? '1' : '0';
                            style.visibility = isVisible ? 'visible' : 'hidden';
                            style.pointerEvents = 'none';
                        }
                    }["Globe3D.useEffect.init"]);
                    const globeMaterial = g.globeMaterial();
                    globeMaterial.color.setHex(0x0a0621);
                    globeMaterial.emissive.setHex(0x3a228a);
                    globeMaterial.emissiveIntensity = 0.25;
                    globeMaterial.shininess = 0.65;
                    scene.add(g);
                    const controls = new OrbitControls(camera, renderer.domElement);
                    controls.enableDamping = true;
                    controls.dynamicDampingFactor = 0.01;
                    controls.enablePan = false;
                    controls.enableZoom = false;
                    controls.minDistance = 357;
                    controls.maxDistance = 357;
                    controls.rotateSpeed = 0.8;
                    controls.autoRotate = true;
                    controls.autoRotateSpeed = 0.5;
                    controls.minPolarAngle = Math.PI / 3.5;
                    controls.maxPolarAngle = Math.PI - Math.PI / 3;
                    g.rendererSize(new THREE.Vector2(size, size));
                    g.setPointOfView(camera);
                    // Every interval: track next arc landing → place one card at that arc’s end (endLat, endLng) on the globe
                    const arcLandInterval = setInterval({
                        "Globe3D.useEffect.init.arcLandInterval": ()=>{
                            const arcIdx = arcLandIndex * 7 % BASE_ARCS.length;
                            const arc = BASE_ARCS[arcIdx];
                            const testimonial = MINI_TESTIMONIALS[arcLandIndex % MINI_TESTIMONIALS.length];
                            landings.push({
                                id: landingId++,
                                lat: arc.endLat + spread(),
                                lng: arc.endLng + spread(),
                                quote: testimonial.quote,
                                title: testimonial.title,
                                description: testimonial.description
                            });
                            if (landings.length > MAX_LANDINGS_ON_GLOBE) landings.shift();
                            g.htmlElementsData([
                                ...landings
                            ]);
                            onArcLandRef.current?.();
                            arcLandIndex++;
                        }
                    }["Globe3D.useEffect.init.arcLandInterval"], ARC_LAND_INTERVAL_MS);
                    const onResize = {
                        "Globe3D.useEffect.init.onResize": ()=>{
                            if (!container.parentElement) return;
                            const rect_0 = container.getBoundingClientRect();
                            const s = Math.min(rect_0.width, rect_0.height) || 256;
                            camera.aspect = 1;
                            camera.updateProjectionMatrix();
                            renderer.setSize(s, s);
                            css2dRenderer.setSize(s, s);
                            g.rendererSize(new THREE.Vector2(s, s));
                        }
                    }["Globe3D.useEffect.init.onResize"];
                    window.addEventListener('resize', onResize);
                    const animate = {
                        "Globe3D.useEffect.init.animate": ()=>{
                            frameId = requestAnimationFrame(animate);
                            controls.update();
                            g.setPointOfView(camera);
                            renderer.render(scene, camera);
                            css2dRenderer.render(scene, camera);
                        }
                    }["Globe3D.useEffect.init.animate"];
                    // setPointOfView(camera) each frame: cards trace globe rotation and visibility (hide when behind orbit)
                    animate();
                    const addOneLanding = {
                        "Globe3D.useEffect.init.addOneLanding": ()=>{
                            const arcIdx_0 = arcLandIndex * 7 % BASE_ARCS.length;
                            const arc_0 = BASE_ARCS[arcIdx_0];
                            const testimonial_0 = MINI_TESTIMONIALS[arcLandIndex % MINI_TESTIMONIALS.length];
                            landings.push({
                                id: landingId++,
                                lat: arc_0.endLat + spread(),
                                lng: arc_0.endLng + spread(),
                                quote: testimonial_0.quote,
                                title: testimonial_0.title,
                                description: testimonial_0.description
                            });
                            if (landings.length > MAX_LANDINGS_ON_GLOBE) landings.shift();
                            g.htmlElementsData([
                                ...landings
                            ]);
                            onArcLandRef.current?.();
                            arcLandIndex++;
                        }
                    }["Globe3D.useEffect.init.addOneLanding"];
                    setTimeout(addOneLanding, 400);
                    return ({
                        "Globe3D.useEffect.init": ()=>{
                            clearInterval(arcLandInterval);
                            window.removeEventListener('resize', onResize);
                            cancelAnimationFrame(frameId);
                            controls.dispose();
                            renderer.dispose();
                            if (typeof css2dRenderer?.dispose === 'function') css2dRenderer.dispose();
                            if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
                            if (css2dRenderer?.domElement && container.contains(css2dRenderer.domElement)) {
                                container.removeChild(css2dRenderer.domElement);
                            }
                        }
                    })["Globe3D.useEffect.init"];
                }
            }["Globe3D.useEffect.init"];
            let cleanup;
            init().then({
                "Globe3D.useEffect": (fn)=>{
                    cleanup = fn;
                }
            }["Globe3D.useEffect"]);
            return ({
                "Globe3D.useEffect": ()=>{
                    if (typeof cleanup === 'function') cleanup();
                }
            })["Globe3D.useEffect"];
        }
    }["Globe3D.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            width: '100%',
            height: '100%',
            minHeight: 256,
            aspectRatio: '1',
            boxShadow: '0 0 120px 60px rgba(90, 120, 255, 0.25), 0 0 200px 80px rgba(58, 34, 138, 0.15), inset 0 0 0 1px rgba(120, 140, 255, 0.08)'
        },
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            style: {
                width: '100%',
                height: '100%',
                minHeight: 256,
                aspectRatio: '1'
            },
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/app/landing/components/Globe3D.tsx",
            lineNumber: 486,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/landing/components/Globe3D.tsx",
        lineNumber: 479,
        columnNumber: 10
    }, this);
}
_s(Globe3D, "0/HAtTLxsiS3YaeMoyj6dIsQK9o=");
_c = Globe3D;
var _c;
__turbopack_context__.k.register(_c, "Globe3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/landing/components/Globe3D.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/landing/components/Globe3D.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_app_landing_components_Globe3D_tsx_20b0165f._.js.map