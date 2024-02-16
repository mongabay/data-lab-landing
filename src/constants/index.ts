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
    imageWidth: 545,
    imageHeight: 515,
    partners: [
      {
        name: 'Resource Watch',
        image: '/images/partners/resource-watch.svg',
        width: 201,
        height: 33,
        invert: false,
      },
    ],
    buttonText: 'Explore the Atlas',
    url: 'https://maps.mongabay.com',
    icon: SatelliteIcon,
  },
  {
    id: 'fire-weather',
    name: 'Fire Weather Almanac',
    subtitle: 'Fire weather charts',
    description:
      'Find shared stories of climate impact. Reveal and compare the annual cycles of fire on land and water in the atmosphere at national and sub-national scales.',
    color: COLORS[2],
    image: '/images/tools/fire-weather-almanac.png',
    imageWidth: 546,
    imageHeight: 463,
    partners: [
      {
        name: 'Global Forest Watch',
        image: '/images/partners/global-forest-watch.svg',
        width: 53,
        height: 53,
        invert: false,
      },
      {
        name: 'Google Earth Engine',
        image: '/images/partners/google-earth-engine.png',
        width: 170,
        height: 22,
        invert: false,
      },
    ],
    buttonText: 'Explore the Charts',
    url: 'https://charts.mongabay.com',
    icon: FireIcon,
  },
  {
    id: 'reforestation-app',
    name: 'Reforestation App',
    subtitle: 'Transparency in tree-planting',
    description:
      'Mongabay’s global directory of reforestation and tree-planting projects is a starting point for people wanting to learn how to support reforestation.',
    color: COLORS[0],
    image: '/images/tools/reforestation-app.png',
    imageWidth: 545,
    imageHeight: 472,
    partners: [
      {
        name: 'Mongabay',
        image: '/images/mongabay-logo.png',
        width: 167,
        height: 25,
        invert: true,
      },
    ],
    buttonText: 'Explore the Atlas',
    url: 'https://reforestation.app',
    icon: ReforestationIcon,
  },
  {
    id: 'trade-flow',
    name: 'Trade Flow Map',
    subtitle: 'Supply chain data tool',
    description:
      'Agricultural commodities move globally and cause deforestation. Find, follow, and create maps of their trail with data from Trase.earth.',
    color: COLORS[3],
    image: '/images/tools/trade-flow-map.png',
    imageWidth: 546,
    imageHeight: 444,
    partners: [
      {
        name: 'Trase',
        image: '/images/partners/trase.svg',
        width: 149,
        height: 34,
        invert: false,
      },
    ],
    buttonText: 'Explore Trade Flows',
    url: 'https://chains.mongabay.com',
    icon: SupplyIcon,
  },
];

export const menuLinks = [
  {
    title: 'Data Tools',
    link: '#data-tools',
  },
  {
    title: 'Data Journalism',
    link: '#data-journalism',
  },
  {
    title: 'People & Partners',
    link: '#people-partners',
  },
];
