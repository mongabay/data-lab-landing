import SatelliteIcon from '@/styles/icons/satellite.svg?sprite';
import FireIcon from '@/styles/icons/fire.svg?sprite';
import ReforestationIcon from '@/styles/icons/reforestation.svg?sprite';
import SupplyIcon from '@/styles/icons/supply.svg?sprite';


export const COLORS = [
    "#03755E",
    "#184B95",
    "#A01200",
    "#7E56D8",
]

export const TOOLS = [
    {
        id: 'satellite',
        title: 'Satellite',
        description: 'Create images of maps using a wide set of basemaps, contextual layers and data layers or explore the map presets that provide information about topics like conservation.',
        color: COLORS[1],
        image: '/images/satellite-tool.png',
        name: "Satellite Tool",
        url: "https://maps.mongabay.com",
        icon: SatelliteIcon,
    },
    {
        id: 'fire',
        title: 'Fire Drought',
        description: 'Explore and report temporal interactions between annual precipitation and fire occurrences at national and subnational scales.',
        color: COLORS[2],
        image: '/images/fire-tool.png',
        name: "Fire Drought",
        url: "https://charts.mongabay.com",
        icon: FireIcon,
    },
    {
        id: 'reforestation',
        title: 'Reforestation App',
        description: 'Mongabay’s global directory of reforestation and tree-planting projects is a starting point for people wanting to support reforestation.',
        color: COLORS[0],
        image: '/images/reforestation-tool.png',
        name: "Reforestation App",
        url: "https://reforestation.app",
        icon: ReforestationIcon,
    },
    {
        id: 'supply',
        title: 'Supply Chain',
        description: 'Create images of maps with flows representing the exchange of a variety of commodities across the world.',
        color: COLORS[3],
        image: '/images/supply-tool.png',
        name: "Supply Chain",
        url: "https://chains.mongabay.com",
        icon: SupplyIcon,
    },
]