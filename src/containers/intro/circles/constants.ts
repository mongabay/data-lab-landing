type getPositionsProps = {
    count: number;
    radius?: number;
    width?: number;
    height?: number;
    yOffset?: number;
}

export const STEPS = [
    {
        id: 0,
        animationStep: 0,
        getPositions: ({ radius, count, yOffset = 0 }: getPositionsProps) => {
            let pos = [];

            if (radius) {
                for (let i = 0; i < count; i++) {
                    const randomAngle = i * (360 / count) - 90 + Math.random() * 180;
                    const x = ((radius * 0.6) / 100) * Math.cos((-randomAngle * Math.PI) / 180);
                    const y = ((radius * 0.6) / 100) * Math.sin((-randomAngle * Math.PI) / 180) + yOffset;
                    const z = 0;
                    pos.push({ id: i, x, y, z });
                }
            }
            return pos;
        },
        getAnimations: () => {
            return {
                animate: {
                    y: 0.75,
                    rotateZ: -360 * (Math.PI / 180),
                },
                transition: {
                    duration: 0.1,
                    rotateZ: {
                        duration: 25,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'linear',
                    },
                },
            };
        },
        getNoise: () => {
            return 0.75;
        },
    },
    {
        id: 1,
        animationStep: 1,
        getPositions: ({ width = 1, height = 1, count }: getPositionsProps) => {
            let pos = [];

            const w = width * 0.8;
            const h = height * 0.8;

            for (let i = 0; i < count; i++) {
                const x = Math.random() * w - w / 2;
                const y = -0.75 + Math.random() * h - h / 2;
                const z = 0;
                pos.push({ id: i, x, y, z });
            }
            return pos;
        },
        getAnimations: () => {
            return {
                initial: {
                    y: 0.75,
                    rotateZ: 0,
                },
                animate: {
                    y: 0.75,
                    rotateZ: 0,
                },
                transition: {
                    duration: 0.1,
                },
            };
        },
        getNoise: () => {
            return 0.5;
        },
    },
];
