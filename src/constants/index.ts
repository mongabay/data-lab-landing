import SatelliteIcon from '@/styles/icons/satellite.svg?sprite';
import FireIcon from '@/styles/icons/fire.svg?sprite';
import ReforestationIcon from '@/styles/icons/reforestation.svg?sprite';
import SupplyIcon from '@/styles/icons/supply.svg?sprite';

export const COLORS = ['#03755E', '#184B95', '#A01200', '#7E56D8'];

export const TOOLS = [
  {
    id: 'earth-atlas',
    name: 'Earth Atlas',
    subtitle: 'Map environmental change at a planetary scale',
    description:
      'Seeing patterns of planetary change is profound. Combine environmental, social, and satellite data aggregated from various reputable sources to create maps that add evidence and context to articles quickly.',
    color: COLORS[1],
    image: '/images/tools/earth-atlas.png',
    imageWidth: 596,
    imageHeight: 522,
    partners: [
      {
        name: 'Resource Watch',
        image: '/images/partners/resource-watch.svg',
        width: 201,
        height: 33,
      },
    ],
    url: 'https://maps.mongabay.com',
    icon: SatelliteIcon,
  },
  {
    id: 'fire-weather-almanac',
    name: 'Fire Weather Almanac',
    description:
      'Find shared stories of climate impact. Reveal and compare the annual cycles of fire on land and water in the atmosphere at national and sub-national scales.',
    color: COLORS[2],
    image: '/images/tools/fire-weather-almanac.png',
    imageWidth: 596,
    imageHeight: 482,
    partners: [
      {
        name: 'Global Forest Watch',
        image: '/images/partners/global-forest-watch.svg',
        width: 53,
        height: 53,
      },
      {
        name: 'Google Earth Engine',
        image: '/images/partners/google-earth-engine.png',
        width: 170,
        height: 22,
      },
    ],
    url: 'https://charts.mongabay.com',
    icon: FireIcon,
  },
  {
    id: 'reforestation-app',
    name: 'Reforestation App',
    description:
      'Mongabay’s global directory of reforestation and tree-planting projects is a starting point for people wanting to learn how to support reforestation.',
    color: COLORS[0],
    image: '/images/tools/reforestation-app.png',
    imageWidth: 662,
    imageHeight: 454,
    partners: [
      {
        name: 'Mongabay',
        image: '/images/mongabay-logo.png',
        width: 167,
        height: 25,
        invert: true,
      },
    ],
    url: 'https://reforestation.app',
    icon: ReforestationIcon,
  },
  {
    id: 'trade-flow-map',
    name: 'Trade flow map',
    description:
      'Agricultural commodities move globally and cause deforestation. Find, follow, and create maps of their trail with data from Trase.earth.',
    color: COLORS[3],
    image: '/images/tools/trade-flow-map.png',
    imageWidth: 596,
    imageHeight: 476,
    partners: [
      {
        name: 'Trase',
        image: '/images/partners/trase.svg',
        width: 149,
        height: 34,
      },
    ],
    url: 'https://chains.mongabay.com',
    icon: SupplyIcon,
  },
];
