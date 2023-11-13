declare module 'glslify' {
    const glslify: (shader: string) => string
    export default glslify
}

declare module '*.glsl' {
    const value: string
    export default value
}

declare module '*.svg?sprite' {
    const content: {
        id: string;
        viewBox: string;
        content: string;
        node: SVGSymbolElement;
    };
    export default content;
}