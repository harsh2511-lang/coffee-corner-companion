export interface Coffee {
  id: string;
  name: string;
  origin: string;
  description: string;
  strength: number; // 1-5
  roastLevel: 'Light' | 'Medium' | 'Dark';
  flavorNotes: string[];
  brewingTime: string;
  ingredients: string[];
  image: string;
}

export interface BrewingMethod {
  id: string;
  name: string;
  description: string;
  equipment: string[];
  steps: string[];
  tips: string[];
  brewTime: string;
  icon: string;
}

export interface CoffeeFact {
  id: string;
  title: string;
  content: string;
  category: 'history' | 'trivia' | 'tip';
}

export const coffees: Coffee[] = [
  {
    id: '1',
    name: 'Ethiopian Yirgacheffe',
    origin: 'Ethiopia',
    description: 'A bright and fruity coffee with wine-like acidity. Known for its complex flavor profile featuring jasmine, bergamot, and stone fruit notes. This high-altitude grown coffee is considered one of the finest in the world.',
    strength: 3,
    roastLevel: 'Light',
    flavorNotes: ['Blueberry', 'Jasmine', 'Bergamot', 'Honey'],
    brewingTime: '3-4 minutes',
    ingredients: ['100% Arabica beans', 'Freshly filtered water'],
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
  },
  {
    id: '2',
    name: 'Colombian Supremo',
    origin: 'Colombia',
    description: 'A well-balanced coffee with medium body and bright acidity. Features caramel sweetness with subtle notes of nuts and a clean finish. Perfect for those who appreciate a classic coffee experience.',
    strength: 4,
    roastLevel: 'Medium',
    flavorNotes: ['Caramel', 'Nuts', 'Citrus', 'Chocolate'],
    brewingTime: '4-5 minutes',
    ingredients: ['100% Colombian Arabica', 'Spring water recommended'],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
  },
  {
    id: '3',
    name: 'Italian Espresso Blend',
    origin: 'Italy',
    description: 'A bold and intense blend crafted for espresso. Features a rich crema, full body, and notes of dark chocolate and roasted nuts. The quintessential Italian coffee experience.',
    strength: 5,
    roastLevel: 'Dark',
    flavorNotes: ['Dark Chocolate', 'Roasted Nuts', 'Caramel', 'Tobacco'],
    brewingTime: '25-30 seconds',
    ingredients: ['Arabica & Robusta blend', 'Filtered water at 200°F'],
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&q=80',
  },
  {
    id: '4',
    name: 'Jamaican Blue Mountain',
    origin: 'Jamaica',
    description: 'One of the rarest and most sought-after coffees. Grown in the Blue Mountains of Jamaica, it offers a mild flavor with virtually no bitterness and a bright, clean taste.',
    strength: 2,
    roastLevel: 'Light',
    flavorNotes: ['Floral', 'Nutty', 'Sweet Herbs', 'Milk Chocolate'],
    brewingTime: '3-4 minutes',
    ingredients: ['100% Blue Mountain Arabica', 'Soft filtered water'],
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
  },
  {
    id: '5',
    name: 'Sumatra Mandheling',
    origin: 'Indonesia',
    description: 'A full-bodied, earthy coffee with low acidity. Known for its syrupy body and complex flavor profile featuring notes of cocoa, tobacco, and exotic spices.',
    strength: 4,
    roastLevel: 'Dark',
    flavorNotes: ['Earthy', 'Cocoa', 'Tobacco', 'Exotic Spices'],
    brewingTime: '4-5 minutes',
    ingredients: ['100% Sumatra Arabica', 'Filtered water'],
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80',
  },
  {
    id: '6',
    name: 'Costa Rican Tarrazú',
    origin: 'Costa Rica',
    description: 'A bright, clean coffee with excellent balance. Grown at high altitudes in the Tarrazú region, it features citrus notes with a honey-like sweetness and smooth finish.',
    strength: 3,
    roastLevel: 'Medium',
    flavorNotes: ['Citrus', 'Honey', 'Brown Sugar', 'Apple'],
    brewingTime: '3-4 minutes',
    ingredients: ['100% Arabica beans', 'Fresh mountain water ideal'],
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
  },
];

export const brewingMethods: BrewingMethod[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'A concentrated coffee brewing method that forces hot water through finely-ground coffee under pressure, creating a rich, full-bodied shot with crema.',
    equipment: ['Espresso machine', 'Portafilter', 'Tamper', 'Coffee grinder', 'Scale'],
    steps: [
      'Grind 18-20g of coffee to a fine consistency',
      'Distribute grounds evenly in the portafilter',
      'Tamp with 30lbs of pressure at a level angle',
      'Lock portafilter into the group head',
      'Start extraction - aim for 25-30 seconds',
      'Stop when you have 36-40ml of espresso',
    ],
    tips: [
      'Use freshly roasted beans (within 2-4 weeks)',
      'Water temperature should be 195-205°F (90-96°C)',
      'Clean your machine regularly for best results',
    ],
    brewTime: '25-30 seconds',
    icon: '☕',
  },
  {
    id: 'french-press',
    name: 'French Press',
    description: 'An immersion brewing method that steeps coarse coffee grounds in hot water, then separates them with a metal mesh filter for a full-bodied cup.',
    equipment: ['French press', 'Kettle', 'Coffee grinder', 'Timer', 'Spoon'],
    steps: [
      'Heat water to 200°F (93°C)',
      'Grind 30g of coffee coarsely (like sea salt)',
      'Add grounds to the French press',
      'Pour hot water and start timer',
      'Stir gently after 1 minute',
      'At 4 minutes, press plunger slowly',
      'Pour immediately to avoid over-extraction',
    ],
    tips: [
      'Use a 1:15 coffee-to-water ratio',
      'Don\'t press too hard - let gravity help',
      'Decant all coffee to stop extraction',
    ],
    brewTime: '4 minutes',
    icon: '🫖',
  },
  {
    id: 'drip',
    name: 'Drip Coffee',
    description: 'The most popular brewing method using gravity to pass hot water through a bed of ground coffee held in a filter, producing a clean and consistent cup.',
    equipment: ['Drip coffee maker or pour-over', 'Paper filter', 'Coffee grinder', 'Kettle', 'Scale'],
    steps: [
      'Grind coffee to medium consistency',
      'Place filter and rinse with hot water',
      'Add 25g of coffee per 400ml water',
      'Heat water to 200°F (93°C)',
      'Pour water in slow circles over grounds',
      'Allow all water to drip through',
      'Total brew time should be 3-4 minutes',
    ],
    tips: [
      'Bloom the coffee first with a small amount of water',
      'Pour in concentric circles for even extraction',
      'Keep the water level consistent',
    ],
    brewTime: '3-4 minutes',
    icon: '⏳',
  },
];

export const coffeeFacts: CoffeeFact[] = [
  {
    id: '1',
    title: 'The Discovery of Coffee',
    content: 'Legend has it that coffee was discovered by a goat herder named Kaldi in Ethiopia around 850 AD. He noticed his goats became energetic after eating berries from a certain tree.',
    category: 'history',
  },
  {
    id: '2',
    title: 'Coffee is the Second Most Traded Commodity',
    content: 'After crude oil, coffee is the second most traded commodity in the world. Over 2.25 billion cups of coffee are consumed every day globally.',
    category: 'trivia',
  },
  {
    id: '3',
    title: 'Store Beans Properly',
    content: 'Keep your coffee beans in an airtight container at room temperature. Avoid storing them in the refrigerator as they can absorb odors from other foods.',
    category: 'tip',
  },
  {
    id: '4',
    title: 'The Word "Coffee" Origin',
    content: 'The word "coffee" comes from the Arabic word "qahwa," which originally referred to a type of wine. It later evolved through Turkish "kahve" and Italian "caffè."',
    category: 'history',
  },
  {
    id: '5',
    title: 'Finland Drinks the Most Coffee',
    content: 'Finland has the highest coffee consumption per capita in the world, with the average Finnish person consuming about 12 kg of coffee per year!',
    category: 'trivia',
  },
  {
    id: '6',
    title: 'Grind Just Before Brewing',
    content: 'For the freshest taste, grind your coffee beans just before brewing. Pre-ground coffee starts losing its flavor within 30 minutes of grinding.',
    category: 'tip',
  },
  {
    id: '7',
    title: 'Coffee Plants Can Live 100 Years',
    content: 'A coffee plant can live up to 100 years, but it produces the most coffee beans between ages 7 and 20. Each plant produces about one pound of coffee per year.',
    category: 'trivia',
  },
  {
    id: '8',
    title: 'The Boston Tea Party Connection',
    content: 'After the Boston Tea Party in 1773, drinking coffee became a patriotic act in America. It was seen as an alternative to British tea.',
    category: 'history',
  },
];
