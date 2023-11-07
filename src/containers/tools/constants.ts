import { COLORS } from "@/constants";

export const TOOLS = [
    {
        id: 'satellite',
        title: 'Satellite',
        description: 'Create images of maps using a wide set of basemaps, contextual layers and data layers or explore the map presets that provide information about topics like conservation.',
        color: COLORS[1],
        image: '/images/satellite-tool.png',
        icon: '/images/satellite-icon.png',
    },
    {
        id: 'fire',
        title: 'Fire Drought',
        description: 'Explore and report temporal interactions between annual precipitation and fire occurrences at national and subnational scales.',
        color: COLORS[2],
        image: '/images/fire-tool.png',
        icon: '/images/fire-icon.png',
    },
    {
        id: 'reforestation',
        title: 'Reforestation App',
        description: 'Mongabay’s global directory of reforestation and tree-planting projects is a starting point for people wanting to support reforestation.',
        color: COLORS[0],
        image: '/images/reforestation-tool.png',
        icon: '/images/reforestation-icon.png',
    },
    {
        id: 'supply',
        title: 'Supply Chain',
        description: 'Create images of maps with flows representing the exchange of a variety of commodities across the world.',
        color: COLORS[3],
        image: '/images/supply-tool.png',
        icon: '/images/supply-icon.png',
    },
]