import { FoodItem, DataPlan, NetworkProvider } from './types';

export const FOOD_MENU: FoodItem[] = [
  {
    id: 'f1',
    name: 'Smoky Jollof Party Platter',
    description: 'Authentic firewood party Jollof rice, seasoned grilled chicken, sweet plantain (dodo), and spicy peppered sauce.',
    category: 'Food',
    price: 4500,
    emoji: '🍗',
    rating: 4.9,
    prepTime: '20-25 min',
    badge: 'Popular'
  },
  {
    id: 'f2',
    name: 'Charcoal Grilled Beef Suya',
    description: 'Sizzling spicy flank steak rub with authentic kuli-kuli pepper, fresh sliced red onions, tomatoes, and cabbage.',
    category: 'Food',
    price: 3800,
    emoji: '🍢',
    rating: 4.8,
    prepTime: '15-20 min',
    badge: 'Spicy'
  },
  {
    id: 'f3',
    name: 'Gourmet Efo Riro & Pounded Yam',
    description: 'Rich Yoruba spinach soup cooked with palm oil, locust beans, stockfish, shaki (tripe), served with hot pounded yam.',
    category: 'Food',
    price: 5200,
    emoji: '🍲',
    rating: 4.9,
    prepTime: '25-30 min'
  },
  {
    id: 'f4',
    name: 'Fiery Peppered Asun (Goat)',
    description: 'Slow-smoked goat meat, chopped and sautéed in spicy habanero peppers and local spices. For the brave!',
    category: 'Food',
    price: 4200,
    emoji: '🐐',
    rating: 4.7,
    prepTime: '15-22 min',
    badge: 'Hot'
  },
  {
    id: 'f5',
    name: 'Glazed Sausage Roll & Puff Puff Trio',
    description: 'Our signature jumbo meat pastry paired with three golden, pillowy-soft deep fried puff puff dough balls.',
    category: 'Snack',
    price: 1500,
    emoji: '🍩',
    rating: 4.6,
    prepTime: '5-10 min'
  },
  {
    id: 'f6',
    name: 'Signature Chilled Chapman',
    description: 'Classic Nigerian mocktail made with Angostura bitters, blackcurrant cordial, Fanta, Sprite, lemon, and fresh cucumber slices.',
    category: 'Drink',
    price: 1800,
    emoji: '🍹',
    rating: 4.9,
    prepTime: '5 min',
    badge: 'Best Seller'
  },
  {
    id: 'f7',
    name: 'Spiced Ginger Zobo Elixir',
    description: 'Refreshing cold hibiscus leaf herbal tea brewed with ginger, cloves, and sweet pineapple rinds.',
    category: 'Drink',
    price: 1200,
    emoji: '🍷',
    rating: 4.7,
    prepTime: '5 min'
  },
  {
    id: 'f8',
    name: 'Sweet Chilled Palm Wine',
    description: 'Freshly tapped, naturally sweet palm wine. Safely pasteurized and served ice-cold for maximum satisfaction.',
    category: 'Drink',
    price: 2000,
    emoji: '🧉',
    rating: 4.8,
    prepTime: '5 min'
  }
];

export const NETWORK_PROVIDERS: Record<NetworkProvider, { name: string; color: string; prefix: string; placeholder: string }> = {
  MTN: {
    name: 'MTN Nigeria',
    color: 'bg-amber-400 hover:bg-amber-500 text-slate-900 border-amber-300',
    prefix: '0803, 0806, 0813, 0903',
    placeholder: '0803 123 4567'
  },
  Airtel: {
    name: 'Airtel Nigeria',
    color: 'bg-red-600 hover:bg-red-700 text-white border-red-500',
    prefix: '0802, 0808, 0812, 0902',
    placeholder: '0802 123 4567'
  },
  GLO: {
    name: 'Glo Mobile',
    color: 'bg-green-600 hover:bg-green-700 text-white border-green-500',
    prefix: '0805, 0807, 0815, 0905',
    placeholder: '0805 123 4567'
  },
  '9mobile': {
    name: '9mobile',
    color: 'bg-teal-700 hover:bg-teal-800 text-white border-teal-600',
    prefix: '0809, 0817, 0818, 0909',
    placeholder: '0809 123 4567'
  }
};

export const DATA_PLANS: Record<NetworkProvider, DataPlan[]> = {
  MTN: [
    { id: 'm1', name: 'Daily Express', volume: '1.2GB', validity: '1 Day', price: 350 },
    { id: 'm2', name: 'Weekend Special', volume: '3.5GB', validity: '2 Days', price: 600 },
    { id: 'm3', name: 'Monthly Value', volume: '12GB', validity: '30 Days', price: 1500 },
    { id: 'm4', name: 'Monthly Mega', volume: '30GB', validity: '30 Days', price: 3500 },
    { id: 'm5', name: 'Heavy User', volume: '100GB', validity: '30 Days', price: 10000 }
  ],
  Airtel: [
    { id: 'a1', name: 'Binge Plan', volume: '1.5GB', validity: '1 Day', price: 350 },
    { id: 'a2', name: 'Mini Monthly', volume: '4.5GB', validity: '30 Days', price: 1200 },
    { id: 'a3', name: 'Standard Monthly', volume: '15GB', validity: '30 Days', price: 2000 },
    { id: 'a4', name: 'Premium Monthly', volume: '40GB', validity: '30 Days', price: 5000 },
    { id: 'a5', name: 'Unlimited Day', volume: 'Unlimited', validity: '1 Day', price: 1500 }
  ],
  GLO: [
    { id: 'g1', name: 'Glo Special', volume: '1.5GB', validity: '1 Day', price: 300 },
    { id: 'g2', name: 'Glo Biggy', volume: '5.8GB', validity: '30 Days', price: 1000 },
    { id: 'g3', name: 'Mega Plan', volume: '15GB', validity: '30 Days', price: 2000 },
    { id: 'g4', name: 'Super Giga', volume: '35GB', validity: '30 Days', price: 4000 },
    { id: 'g5', name: 'Glo Force', volume: '120GB', validity: '30 Days', price: 8000 }
  ],
  '9mobile': [
    { id: 'n1', name: 'Lite Data', volume: '1GB', validity: '1 Day', price: 300 },
    { id: 'n2', name: 'Weekly Surf', volume: '2.5GB', validity: '7 Days', price: 500 },
    { id: 'n3', name: 'Standard Surf', volume: '12GB', validity: '30 Days', price: 1500 },
    { id: 'n4', name: 'Heavy Surf', volume: '35GB', validity: '30 Days', price: 4000 },
    { id: 'n5', name: 'Giga Surf', volume: '85GB', validity: '30 Days', price: 8000 }
  ]
};
