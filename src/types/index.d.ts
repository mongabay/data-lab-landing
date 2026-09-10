// Side-effect stylesheet imports (TypeScript 6 checks them: noUncheckedSideEffectImports)
declare module '*.css';

declare module '*.glsl' {
  const value: string;
  export default value;
}

// *.svg imports are React components via @svgr/webpack (see next.config.js);
// *.svg?url keeps the file URL.
declare module '*.svg' {
  import type { FC, SVGProps } from 'react';
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.svg?url' {
  const src: string;
  export default src;
}
