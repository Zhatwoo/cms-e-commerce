'use client';

import { useEffect, useRef } from 'react';

const GLOBE_DATA_URL = '/globe-data-min.json';

const BASE_ARCS: { startLat: number; startLng: number; endLat: number; endLng: number }[] = [
  { startLat: 14.5995, startLng: 120.9842, endLat: 35.6762, endLng: 139.6503 },
  { startLat: 40.7128, startLng: -74.006, endLat: 51.5074, endLng: -0.1278 },
  { startLat: -33.8688, startLng: 151.2093, endLat: 34.0522, endLng: -118.2437 },
  { startLat: 1.3521, startLng: 103.8198, endLat: 25.2048, endLng: 55.2708 },
  { startLat: 55.7558, startLng: 37.6173, endLat: 39.9042, endLng: 116.4074 },
  { startLat: -23.5505, startLng: -46.6333, endLat: 19.4326, endLng: -99.1332 },
  { startLat: 41.9028, startLng: 12.4964, endLat: 48.8566, endLng: 2.3522 },
  { startLat: 28.6139, startLng: 77.209, endLat: 24.8607, endLng: 67.0011 },
  { startLat: -34.6037, startLng: -58.3816, endLat: 40.4168, endLng: -3.7038 },
  { startLat: 22.3193, startLng: 114.1694, endLat: 37.5665, endLng: 126.978 },
  { startLat: 19.076, startLng: 72.8777, endLat: 31.2304, endLng: 121.4737 },
  { startLat: 23.8103, startLng: 90.4125, endLat: 13.0827, endLng: 80.2707 },
  { startLat: 52.52, startLng: 13.405, endLat: 48.1351, endLng: 11.582 },
  { startLat: -15.7942, startLng: -47.8822, endLat: -12.0464, endLng: -77.0428 },
  { startLat: 35.6762, startLng: 139.6503, endLat: 37.7749, endLng: -122.4194 },
  { startLat: 51.5074, startLng: -0.1278, endLat: 55.7558, endLng: 37.6173 },
  // Philippines (Manila 14.5995,120.9842 | Cebu 10.3157,123.8854 | Davao 7.0731,125.6128)
  { startLat: 14.5995, startLng: 120.9842, endLat: 1.3521, endLng: 103.8198 },
  { startLat: 14.5995, startLng: 120.9842, endLat: -33.8688, endLng: 151.2093 },
  { startLat: 14.5995, startLng: 120.9842, endLat: 25.2048, endLng: 55.2708 },
  { startLat: 10.3157, startLng: 123.8854, endLat: 22.3193, endLng: 114.1694 },
  { startLat: 14.5995, startLng: 120.9842, endLat: 37.5665, endLng: 126.978 },
  { startLat: 14.5995, startLng: 120.9842, endLat: 34.0522, endLng: -118.2437 },
  { startLat: 10.3157, startLng: 123.8854, endLat: 35.6762, endLng: 139.6503 },
  { startLat: 14.5995, startLng: 120.9842, endLat: 13.7563, endLng: 100.5018 },
  { startLat: 7.0731, startLng: 125.6128, endLat: 1.3521, endLng: 103.8198 },
];

const SAMPLE_ARCS: ArcDatum[] = Array.from({ length: 4 }, (_, i) =>
  BASE_ARCS.map((arc, j) => ({ ...arc, order: i * BASE_ARCS.length + j }))
).flat();

const MINI_TESTIMONIALS = [
  { quote: 'Great platform.', title: 'Jane D.', description: 'CEO' },
  { quote: 'Smooth onboarding.', title: 'Mark T.', description: 'Founder' },
  { quote: 'Go global.', title: 'Sarah L.', description: 'Director' },
  { quote: 'Best decision.', title: 'Alex K.', description: 'Ops' },
  { quote: 'Reliable.', title: 'Chris M.', description: 'CTO' },
  { quote: 'Customers love it.', title: 'Pat R.', description: 'Product' },
];

type LandingDatum = {
  id: number;
  lat: number;
  lng: number;
  quote: string;
  title: string;
  description: string;
};

function createMiniCardEl(d: LandingDatum): HTMLElement {
  const el = document.createElement('div');
  el.className = 'globe-mini-card';
  el.style.cssText = [
    'width:144px;min-width:144px;max-width:144px;',
    'padding:12px;border-radius:16px;',
    'background:rgba(10,25,97,0.95);border:1px solid rgba(255,255,255,0.25);',
    'color:#fff;font-size:20px;line-height:1.25;text-align:left;',
    'box-shadow:0 4px 16px rgba(0,0,0,0.3);pointer-events:none;',
    'overflow:hidden;display:flex;flex-direction:column;gap:4px;',
    'transition:opacity 0.2s ease;',
  ].join(' ');
  el.innerHTML = [
    `<p style="margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="${escapeHtml(d.quote)}">&ldquo;${escapeHtml(d.quote)}&rdquo;</p>`,
    `<p style="margin:0;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(d.title)}</p>`,
    `<p style="margin:0;opacity:0.85;font-size:18px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(d.description)}</p>`,
  ].join('');
  return el;
}

function escapeHtml(s: string): string {
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}

type GeoJSONFeature = {
  type: string;
  properties?: { ISO_A2?: string; ISO_A3?: string };
  geometry?: { type: string; coordinates: unknown };
};

type GlobeData = {
  type: string;
  features: GeoJSONFeature[];
};

type ArcDatum = {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  order?: number;
};

interface GlobeApi {
  hexPolygonsData: (d: GeoJSONFeature[]) => GlobeApi;
  hexPolygonResolution: (n: number) => GlobeApi;
  hexPolygonMargin: (n: number) => GlobeApi;
  showAtmosphere: (b: boolean) => GlobeApi;
  atmosphereColor: (c: string) => GlobeApi;
  atmosphereAltitude: (n: number) => GlobeApi;
  hexPolygonColor: (fn: (e: { properties: { ISO_A3?: string } }) => string) => GlobeApi;
  arcsData: (d: ArcDatum[]) => GlobeApi;
  arcColor: (c: string | ((d: ArcDatum) => string)) => GlobeApi;
  arcAltitude: (n: number | ((d: ArcDatum) => number)) => GlobeApi;
  arcStroke: (n: number | ((d: ArcDatum) => number)) => GlobeApi;
  arcDashLength: (n: number) => GlobeApi;
  arcDashGap: (n: number) => GlobeApi;
  arcDashAnimateTime: (n: number) => GlobeApi;
  arcsTransitionDuration: (n: number) => GlobeApi;
  arcDashInitialGap: (n: number | ((d: ArcDatum) => number)) => GlobeApi;
  globeMaterial: () => { color: { setHex: (n: number) => void }; emissive: { setHex: (n: number) => void }; emissiveIntensity: number; shininess: number };
  rotateY: (n: number) => void;
  rotateZ: (n: number) => void;
  rendererSize: (v: unknown) => void;
  setPointOfView: (c: unknown) => void;
  htmlElementsData: (d: LandingDatum[]) => GlobeApi;
  htmlLat: (fn: (d: LandingDatum) => number) => GlobeApi;
  htmlLng: (fn: (d: LandingDatum) => number) => GlobeApi;
  htmlAltitude: (n: number | ((d: LandingDatum) => number)) => GlobeApi;
  htmlElement: (fn: (d: LandingDatum) => HTMLElement) => GlobeApi;
  htmlElementVisibilityModifier: (fn: (el: HTMLElement, isVisible: boolean) => void) => GlobeApi;
}

const ARC_LAND_INTERVAL_MS = 2000;
const MAX_LANDINGS_ON_GLOBE = 10;
const LANDING_SPREAD_DEG = 1.2;

export function Globe3D({ className, onArcLand }: { className?: string; onArcLand?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onArcLandRef = useRef(onArcLand);
  onArcLandRef.current = onArcLand;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frameId: number;
    let renderer: {
      setSize: (w: number, h: number) => void;
      setPixelRatio: (n: number) => void;
      setClearColor: (color: number, alpha?: number) => void;
      domElement: HTMLCanvasElement;
      dispose: () => void;
      render: (s: unknown, c: unknown) => void;
    };
    let globe: GlobeApi;

    let css2dRenderer: {
      setSize: (w: number, h: number) => void;
      domElement: HTMLElement;
      render: (s: unknown, c: unknown) => void;
      dispose: () => void;
    };

    const init = async () => {
      const [THREE, ThreeGlobe, controlsModule, css2dModule] = await Promise.all([
        import('three'),
        import('three-globe'),
        import('three/examples/jsm/controls/OrbitControls.js'),
        import('three/examples/jsm/renderers/CSS2DRenderer.js'),
      ]);

      const { OrbitControls } = controlsModule;
      const { CSS2DRenderer } = css2dModule as {
        CSS2DRenderer: new () => {
          setSize: (w: number, h: number) => void;
          domElement: HTMLElement;
          render: (s: unknown, c: unknown) => void;
          dispose: () => void;
        };
      };
      const rect = container.getBoundingClientRect();
      const size = Math.min(rect.width, rect.height) || 256;

      const scene = new THREE.Scene();
      scene.background = null;
      (scene as { fog: unknown }).fog = null;

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

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, premultipliedAlpha: false });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
      renderer.setSize(size, size);
      const canvas = renderer.domElement as HTMLCanvasElement;
      canvas.style.display = 'block';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      container.appendChild(renderer.domElement);

      css2dRenderer = new CSS2DRenderer();
      css2dRenderer.setSize(size, size);
      (css2dRenderer.domElement as HTMLElement).style.position = 'absolute';
      (css2dRenderer.domElement as HTMLElement).style.top = '0';
      (css2dRenderer.domElement as HTMLElement).style.left = '0';
      (css2dRenderer.domElement as HTMLElement).style.width = '100%';
      (css2dRenderer.domElement as HTMLElement).style.height = '100%';
      (css2dRenderer.domElement as HTMLElement).style.pointerEvents = 'none';
      container.appendChild(css2dRenderer.domElement);

      const GlobeClass = (ThreeGlobe as { default: new (opts?: object) => GlobeApi }).default;
      globe = new GlobeClass({
        waitForGlobeReady: true,
        animateIn: true,
      }) as GlobeApi;
      const g: GlobeApi = globe;

      const res = await fetch(GLOBE_DATA_URL);
      const data = (await res.json()) as GlobeData;
      const features = data?.features ?? [];

      g.hexPolygonsData(features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.500)
        .hexPolygonColor((e: { properties: { ISO_A3?: string } }) => {
          if (
            ['KGZ', 'KOR', 'THA', 'RUS', 'UZB', 'IDN', 'KAZ', 'MYS'].includes(
              e.properties?.ISO_A3 ?? ''
            )
          ) {
            return 'rgba(100, 255, 80, 1)';
          }
          return 'rgba(120, 255, 100, 1)';
        });

      g.rotateY(-Math.PI * (5 / 9));
      g.rotateZ(-Math.PI / 6);

      g.showAtmosphere(true)
        .atmosphereColor('rgba(120, 140, 255, 0.6)')
        .atmosphereAltitude(0.28);

      g.arcsData(SAMPLE_ARCS)
        .arcColor(() => 'rgba(255, 255, 255, 1)')
        .arcAltitude(0.3)
        .arcStroke(0.2)
        .arcDashLength(0.5)
        .arcDashGap(4)
        .arcDashAnimateTime(1500)
        .arcsTransitionDuration(1000)
        .arcDashInitialGap((d: ArcDatum) => (d.order ?? 0) * 0.6);

      // Cards on globe: one per arc landing (endLat, endLng + spread), hide when not on orbit screen (behind globe)
      const landings: LandingDatum[] = [];
      let arcLandIndex = 0;
      let landingId = 0;
      const spread = () => (Math.random() - 0.5) * 2 * LANDING_SPREAD_DEG;
      g.htmlElementsData(landings)
        .htmlLat((d: LandingDatum) => d.lat)
        .htmlLng((d: LandingDatum) => d.lng)
        .htmlAltitude(0.015)
        .htmlElement(createMiniCardEl)
        .htmlElementVisibilityModifier((el, isVisible) => {
          const style = (el as HTMLElement).style;
          style.opacity = isVisible ? '1' : '0';
          style.visibility = isVisible ? 'visible' : 'hidden';
          style.pointerEvents = 'none';
        });

      const globeMaterial = g.globeMaterial();
      globeMaterial.color.setHex(0x0a0621);
      globeMaterial.emissive.setHex(0x3a228a);
      globeMaterial.emissiveIntensity = 0.25;
      globeMaterial.shininess = 0.65;

      scene.add(g as never);

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
      const arcLandInterval = setInterval(() => {
        const arcIdx = (arcLandIndex * 7) % BASE_ARCS.length;
        const arc = BASE_ARCS[arcIdx];
        const testimonial = MINI_TESTIMONIALS[arcLandIndex % MINI_TESTIMONIALS.length];
        landings.push({
          id: landingId++,
          lat: arc.endLat + spread(),
          lng: arc.endLng + spread(),
          quote: testimonial.quote,
          title: testimonial.title,
          description: testimonial.description,
        });
        if (landings.length > MAX_LANDINGS_ON_GLOBE) landings.shift();
        g.htmlElementsData([...landings]);
        onArcLandRef.current?.();
        arcLandIndex++;
      }, ARC_LAND_INTERVAL_MS);

      const onResize = () => {
        if (!container.parentElement) return;
        const rect = container.getBoundingClientRect();
        const s = Math.min(rect.width, rect.height) || 256;
        camera.aspect = 1;
        camera.updateProjectionMatrix();
        renderer.setSize(s, s);
        css2dRenderer.setSize(s, s);
        g.rendererSize(new THREE.Vector2(s, s));
      };
      window.addEventListener('resize', onResize);

      const animate = () => {
        frameId = requestAnimationFrame(animate);
        controls.update();
        g.setPointOfView(camera);
        renderer.render(scene, camera);
        css2dRenderer.render(scene, camera);
      };
      // setPointOfView(camera) each frame: cards trace globe rotation and visibility (hide when behind orbit)
      animate();

      const addOneLanding = () => {
        const arcIdx = (arcLandIndex * 7) % BASE_ARCS.length;
        const arc = BASE_ARCS[arcIdx];
        const testimonial = MINI_TESTIMONIALS[arcLandIndex % MINI_TESTIMONIALS.length];
        landings.push({
          id: landingId++,
          lat: arc.endLat + spread(),
          lng: arc.endLng + spread(),
          quote: testimonial.quote,
          title: testimonial.title,
          description: testimonial.description,
        });
        if (landings.length > MAX_LANDINGS_ON_GLOBE) landings.shift();
        g.htmlElementsData([...landings]);
        onArcLandRef.current?.();
        arcLandIndex++;
      };
      setTimeout(addOneLanding, 400);

      return () => {
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
      };
    };

    let cleanup: (() => void) | void;
    init().then((fn) => {
      cleanup = fn;
    });

    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, []);

  return (
    <div
      className={className}
      style={{
        width: '100%',
        height: '100%',
        minHeight: 256,
        aspectRatio: '1',
        boxShadow: '0 0 120px 60px rgba(90, 120, 255, 0.25), 0 0 200px 80px rgba(58, 34, 138, 0.15), inset 0 0 0 1px rgba(120, 140, 255, 0.08)',
      }}
      aria-hidden
    >
      <div
        ref={containerRef}
        style={{ width: '100%', height: '100%', minHeight: 256, aspectRatio: '1' }}
        aria-hidden
      />
    </div>
  );
}
