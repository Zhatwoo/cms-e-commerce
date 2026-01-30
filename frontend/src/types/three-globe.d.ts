declare module 'three';

declare module 'three-globe' {
  const Globe: new (opts?: { waitForGlobeReady?: boolean; animateIn?: boolean }) => unknown;
  export default Globe;
}

declare module 'three/examples/jsm/controls/OrbitControls.js';

declare module 'three/examples/jsm/renderers/CSS2DRenderer.js' {
  export class CSS2DRenderer {
    constructor();
    domElement: HTMLElement;
    setSize(width: number, height: number): void;
    render(scene: unknown, camera: unknown): void;
    dispose(): void;
  }
}
