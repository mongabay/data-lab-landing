import SatelliteIcon from '@/styles/icons/satellite.svg?sprite';
import FireIcon from '@/styles/icons/fire.svg?sprite';
import ReforestationIcon from '@/styles/icons/reforestation.svg?sprite';
import SupplyIcon from '@/styles/icons/supply.svg?sprite';

export const COLORS = ['#03755E', '#184B95', '#A01200', '#7E56D8'];

export const TOOLS = [
  {
    id: 'satellite',
    title: 'Satellite',
    description:
      'Seeing patterns of planetary change is profound. Combine environmental, social, and satellite data aggregated from various reputable sources to create maps that add evidence and context to articles quickly.',
    color: COLORS[1],
    image: '/images/tools/satellite.png',
    imageWidth: 596,
    imageHeight: 522,
    name: 'Satellite Tool',
    url: 'https://maps.mongabay.com',
    icon: SatelliteIcon,
  },
  {
    id: 'fire',
    title: 'Fire Drought',
    description:
      'Find shared stories of climate impact. Reveal and compare the annual cycles of fire on land and water in the atmosphere at national and sub-national scales.',
    color: COLORS[2],
    image: '/images/tools/fire-drought-data.png',
    imageWidth: 596,
    imageHeight: 482,
    name: 'Fire Drought',
    url: 'https://charts.mongabay.com',
    icon: FireIcon,
  },
  {
    id: 'reforestation',
    title: 'Reforestation App',
    description:
      'Mongabay’s global directory of reforestation and tree-planting projects is a starting point for people wanting to learn how to support reforestation.',
    color: COLORS[0],
    image: '/images/tools/reforestation-app.png',
    imageWidth: 662,
    imageHeight: 454,
    name: 'Reforestation App',
    url: 'https://reforestation.app',
    icon: ReforestationIcon,
  },
  {
    id: 'supply',
    title: 'Supply Chain',
    description:
      'Agricultural commodities move globally and cause deforestation. Find, follow, and create maps of their trail with data from Trase.earth.',
    color: COLORS[3],
    image: '/images/tools/supply-chain.png',
    imageWidth: 596,
    imageHeight: 476,
    name: 'Supply Chain',
    url: 'https://chains.mongabay.com',
    icon: SupplyIcon,
  },
];
