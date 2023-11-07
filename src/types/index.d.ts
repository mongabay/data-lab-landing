declare module 'glslify' {
    const glslify: (shader: string) => string
    export default glslify
}

declare module '*.glsl' {
    const value: string
    export default value
}