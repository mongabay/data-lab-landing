// Side-effect stylesheet imports (TypeScript 6 checks them: noUncheckedSideEffectImports)
declare module '*.css';

declare module '*.glsl' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const content: {
    id: string;
    viewBox: string;
    content: string;
    node: SVGSymbolElement;
  };
  export default content;
}
