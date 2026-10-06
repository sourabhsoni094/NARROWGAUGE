import { ExperienceInfo, MenuItem, CateringService, GalleryItem } from '../types';

export const BRAND_INFO = {
  name: 'NARROW GAUGE',
  tagline: 'Three Experiences. One Love for Food.',
  introHeading: 'More Than a Restaurant.\nAn Experience.',
  introDescription:
    'Narrow Gauge brings together three distinct hospitality experiences under one roof of ideas — crafted for dining, celebrations, conversations and everyday moments in Sheopur.',
  storyHeading: 'The Story Behind Narrow Gauge',
  storyQuote: 'Built around a simple idea — great food brings people together.',
  storyText1:
    'Named with pride after Sheopur’s historic narrow-gauge railway heritage, Narrow Gauge brings together dining, catering and café culture through three distinct experiences, each designed around food, hospitality and people.',
  storyText2:
    'From authentic North Indian feasts and sizzling Chinese woks to bespoke wedding catering by NG Catters and artisanal coffee moments at Uknow Café — our doors welcome you for comfort, celebrations and everyday delights.',
  rating: {
    score: '4.1',
    reviewCount: '364',
    stars: 4.1,
  },
  hours: {
    display: '11:00 AM – 10:45 PM',
    details: 'Monday to Sunday (Open 7 Days)',
  },
  stats: {
    googleRating: '4.1',
    maxRating: '5.0',
    reviewsCount: '364',
    cuisines: 'North Indian, Chinese, Fast Food, Pizza & more',
    hours: '11:00 AM – 10:45 PM',
  },
  contact: {
    address: 'Opposite Badminton Court, Shivpuri Road, Sheopur, Madhya Pradesh',
    addressPlaceholder: 'Opposite Badminton Court, Shivpuri Road, Sheopur, Madhya Pradesh',
    shortLocation: 'Shivpuri Road, Sheopur, MP',
    landmark: 'Opposite Badminton Court',
    city: 'Sheopur, Madhya Pradesh',
    phone: '+91 93004 21131',
    whatsapp: '+91 93004 21131',
    email: 'contact@narrowgaugehospitality.com',
    hours: '11:00 AM – 10:45 PM',
    restaurantHours: 'Daily: 11:00 AM – 10:45 PM',
    cafeHours: 'Daily: 11:00 AM – 10:45 PM',
    cateringHours: 'Consultations: 10:00 AM – 09:00 PM',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.3592186985474!2d76.690807!3d25.666992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3971e5491e84a28d%3A0x6b6c20ec1dcbcecf!2sShivpuri%20Road%2C%20Sheopur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
    googleMapsDirectLink: 'https://maps.app.goo.gl/8xw5Zs2vndMi1Dbq5',
  },
  socialLinks: {
    restaurant: 'https://www.instagram.com/narrowgaugeofficial/',
    catering: 'https://www.instagram.com/ngcaterers/',
    cafe: 'https://www.instagram.com/cafeuknow/',
    instagram: 'https://www.instagram.com/narrowgaugeofficial/',
    facebook: 'https://facebook.com',
  },
  instagramAccounts: [
    {
      name: 'Narrow Gauge Restaurant',
      handle: '@narrowgaugeofficial',
      url: 'https://www.instagram.com/narrowgaugeofficial/',
      tagline: 'Multi-Cuisine Dining & Celebrations',
      accent: '#D99B59',
    },
    {
      name: 'NG Catters',
      handle: '@ngcaterers',
      url: 'https://www.instagram.com/ngcaterers/',
      tagline: 'Bespoke Outdoor & Wedding Catering',
      accent: '#D4AF37',
    },
    {
      name: 'Uknow Café',
      handle: '@cafeuknow',
      url: 'https://www.instagram.com/cafeuknow/',
      tagline: 'Shakes, Coffee & Hangouts',
      accent: '#C89666',
    },
  ],
};

export const EXPERIENCES: ExperienceInfo[] = [
  {
    id: 'restaurant',
    category: 'RESTAURANT',
    title: 'Narrow Gauge Restaurant',
    subtitle: 'Good food. Good company. No occasion required.',
    description:
      'A contemporary dining destination in Sheopur serving comforting North Indian curries, sizzlers, Chinese delicacies, and crowd-pleasing pizzas and beverages.',
    highlight: 'Dine. Gather. Enjoy.',
    ctaText: 'Explore Restaurant →',
    sectionId: 'restaurant',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80',
    accentColor: '#D99B59',
    accentBorder: 'rgba(217, 155, 89, 0.4)',
    accentBg: 'rgba(217, 155, 89, 0.1)',
    visualDirectionNotes: 'Rich food photography, warm lighting, dining table and plated food imagery with dark cinematic depth.',
    instagramUrl: 'https://www.instagram.com/narrowgaugeofficial/',
    instagramHandle: '@narrowgaugeofficial',
  },
  {
    id: 'catering',
    category: 'CATERING & EVENTS',
    title: 'NG Catters',
    subtitle: 'We bring the experience to you.',
    description:
      'From grand weddings across Madhya Pradesh to intimate family gatherings, NG Catters brings the Narrow Gauge culinary magic to your venue with impeccable presentation.',
    highlight: 'Your Event. Our Kitchen.',
    ctaText: 'Explore Catering →',
    sectionId: 'catering',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80',
    accentColor: '#D4AF37',
    accentBorder: 'rgba(212, 175, 55, 0.4)',
    accentBg: 'rgba(212, 175, 55, 0.1)',
    visualDirectionNotes: 'Event setup, elegant buffet stations, celebration ambience, professional catering presentation.',
    instagramUrl: 'https://www.instagram.com/ngcaterers/',
    instagramHandle: '@ngcaterers',
  },
  {
    id: 'cafe',
    category: 'CAFÉ',
    title: 'Uknow Café',
    subtitle: 'A place for coffee, conversations & cravings.',
    description:
      'A relaxed café experience by Narrow Gauge featuring thick handcrafted shakes, iced coffees, cooling mojitos, and quick bites made for slow moments.',
    highlight: 'Coffee. Conversations. Everyday Moments.',
    ctaText: 'Explore Uknow Café →',
    sectionId: 'cafe',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80',
    accentColor: '#C89666',
    accentBorder: 'rgba(200, 150, 102, 0.4)',
    accentBg: 'rgba(200, 150, 102, 0.1)',
    visualDirectionNotes: 'Artisan coffee, warm café interiors, decadent desserts, relaxed evening conversations.',
    instagramUrl: 'https://www.instagram.com/cafeuknow/',
    instagramHandle: '@cafeuknow',
  }
];

export const RESTAURANT_CATEGORIES = [
  { id: 'beverages', label: 'Beverages & Shakes', count: 'Original Drinks, Shakes, Lassi & Mojitos' },
  { id: 'mains', label: 'Main Course', count: 'North Indian Signature Curries, Dal & Breads' },
  { id: 'starters', label: 'Starters & Fast Food', count: 'Paneer Tikkas, Crispy Bites & Chaats' },
  { id: 'chinese', label: 'Chinese', count: 'Hakka Noodles, Manchurian, Fried Rice & Momos' },
  { id: 'pizza-cafe', label: 'Pizza & Café Favourites', count: 'Cheesy Pizzas, Pastas & Sandwiches' },
];

// Complete official beverages & food menu with exact prices as provided
export const OFFICIAL_BEVERAGES_MENU: MenuItem[] = [
  {
    id: 'bev-1',
    name: 'Lassi (Sweet / Salted)',
    description: 'Traditional thick churned yogurt lassi served chilled with a creamy malai topping.',
    category: 'beverages',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹80',
    tags: ['Traditional Favorite', 'Chilled']
  },
  {
    id: 'bev-2',
    name: 'Chaas',
    description: 'Refreshing spiced buttermilk tempered with roasted cumin, rock salt, and fresh coriander.',
    category: 'beverages',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹50',
    tags: ['Cooling', 'Digestive']
  },
  {
    id: 'bev-3',
    name: 'Lemon Water',
    description: 'Freshly squeezed lemon infused water with your choice of sweet, salted or mixed seasoning.',
    category: 'beverages',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹40',
    tags: ['Hydrating']
  },
  {
    id: 'bev-4',
    name: 'Lemon Soda',
    description: 'Fizzy carbonated soda with fresh lime juice, black salt, and roasted cumin.',
    category: 'beverages',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹70',
    tags: ['Sparkling']
  },
  {
    id: 'bev-5',
    name: 'Mineral Water Bottle',
    description: 'Packaged premium drinking water.',
    category: 'beverages',
    dietary: 'veg',
    experience: 'restaurant',
    price: 'MRP',
    tags: ['Standard']
  },
  {
    id: 'bev-6',
    name: 'Banana Lassi',
    description: 'Rich thick yogurt churned with ripe sweet bananas and subtle cardamom fragrance.',
    category: 'beverages',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹100',
    tags: ['House Special']
  },
  {
    id: 'bev-7',
    name: 'Canned Juice',
    description: 'Chilled packaged fruit juice in assorted seasonal flavors.',
    category: 'beverages',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹60',
    tags: ['Fruit']
  },
  {
    id: 'bev-8',
    name: 'Banana Shake',
    description: 'Creamy wholesome banana milk shake blended with vanilla extract and chilled milk.',
    category: 'shakes',
    dietary: 'veg',
    experience: 'cafe',
    price: '₹90',
    tags: ['Rich & Creamy']
  },
  {
    id: 'bev-9',
    name: 'Vanilla Shake',
    description: 'Classic velvety Madagascar vanilla shake topped with whipped cream.',
    category: 'shakes',
    dietary: 'veg',
    experience: 'cafe',
    price: '₹90',
    tags: ['Classic']
  },
  {
    id: 'bev-10',
    name: 'Chocolate Shake',
    description: 'Indulgent rich cocoa and chocolate ganache shake finished with chocolate drizzle.',
    category: 'shakes',
    dietary: 'veg',
    experience: 'cafe',
    price: '₹110',
    tags: ['All-Time Favorite']
  },
  {
    id: 'bev-11',
    name: 'Mango Shake',
    description: 'Luscious tropical mango pulp blended thick with full-cream milk.',
    category: 'shakes',
    dietary: 'veg',
    experience: 'cafe',
    price: '₹120',
    tags: ['Seasonal King']
  },
  {
    id: 'bev-12',
    name: 'Strawberry Shake',
    description: 'Sweet pink berry shake crafted with ripe strawberry puree and ice cream.',
    category: 'shakes',
    dietary: 'veg',
    experience: 'cafe',
    price: '₹100',
    tags: ['Berry Delight']
  },
  {
    id: 'bev-13',
    name: 'Butterscotch Shake',
    description: 'Creamy caramel-infused shake loaded with crunchy butterscotch praline morsels.',
    category: 'shakes',
    dietary: 'veg',
    experience: 'cafe',
    price: '₹100',
    tags: ['Crunchy']
  },
  {
    id: 'bev-14',
    name: 'Kesar Pista Shake',
    description: 'Royal saffron infused milkshake loaded with crushed pistachio slivers and cardamom.',
    category: 'shakes',
    dietary: 'veg',
    experience: 'cafe',
    price: '₹120',
    tags: ['Royal Heritage']
  },
  {
    id: 'bev-15',
    name: 'Kitkat Shake',
    description: 'Crispy KitKat wafer bars blended into rich milk and topped with KitKat crunch.',
    category: 'shakes',
    dietary: 'veg',
    experience: 'cafe',
    price: '₹130',
    tags: ['Café Special']
  },
  {
    id: 'bev-16',
    name: 'Oreo Shake',
    description: 'Dark cocoa Oreo cookies crushed into a thick creamy cookies-and-cream shake.',
    category: 'shakes',
    dietary: 'veg',
    experience: 'cafe',
    price: '₹120',
    tags: ['Top Rated']
  },
  {
    id: 'bev-17',
    name: 'Cold Coffee',
    description: 'Classic handcrafted cold coffee with bold espresso roast, chilled milk and froth.',
    category: 'coffee',
    dietary: 'veg',
    experience: 'cafe',
    price: '₹90',
    tags: ['Espresso Boost']
  },
  {
    id: 'bev-18',
    name: 'Cold Coffee With Ice Cream',
    description: 'Our signature cold coffee crowned with a generous scoop of vanilla ice cream.',
    category: 'coffee',
    dietary: 'veg',
    experience: 'cafe',
    price: '₹110',
    tags: ['Signature Café']
  },
  {
    id: 'bev-19',
    name: 'Virgin Mojito',
    description: 'Classic cooling mint leaves muddled with lime wedges, simple syrup and sparkling soda.',
    category: 'beverages',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹70',
    tags: ['Refreshing']
  },
  {
    id: 'bev-20',
    name: 'Blue Curacao',
    description: 'Vibrant oceanic citrus cooler with blue curaçao syrup, lime juice and effervescence.',
    category: 'beverages',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹80',
    tags: ['Citrus Cooler']
  },
  {
    id: 'bev-21',
    name: 'Green Mojito Mint',
    description: 'Double mint blast with fresh garden mint, zesty lime, crushed ice and bubbly soda.',
    category: 'beverages',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹90',
    tags: ['Summer Tonic']
  }
];

// Additional popular food menu items for the restaurant
export const RESTAURANT_FOOD_ITEMS: MenuItem[] = [
  {
    id: 'rf-1',
    name: 'Paneer Butter Masala',
    description: 'Tender cottage cheese simmered in a velvety buttery tomato-cashew gravy.',
    category: 'mains',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹220',
    tags: ['North Indian Classic']
  },
  {
    id: 'rf-2',
    name: 'Dal Tadka Special',
    description: 'Yellow lentils slow cooked with garlic, whole red chilies, and aromatic desi ghee tadka.',
    category: 'mains',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹160',
    tags: ['Homestyle Favorite']
  },
  {
    id: 'rf-3',
    name: 'Kadhai Paneer',
    description: 'Fresh paneer tossed with crunchy capsicum, onions, and freshly pounded kadhai spices.',
    category: 'mains',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹230',
    tags: ['Spiced Wok']
  },
  {
    id: 'rf-4',
    name: 'Chilli Paneer Dry / Gravy',
    description: 'Golden paneer cubes tossed with capsicum, spring onions, dark soy and hot chili sauce.',
    category: 'chinese',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹180',
    tags: ['Indo-Chinese']
  },
  {
    id: 'rf-5',
    name: 'Veg Hakka Noodles',
    description: 'Wok tossed noodles with shredded carrots, cabbage, scallions and white pepper.',
    category: 'chinese',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹140',
    tags: ['Street Style']
  },
  {
    id: 'rf-6',
    name: 'Veg Manchurian',
    description: 'Crispy vegetable dumplings coated in a savoury ginger-garlic and coriander sauce.',
    category: 'chinese',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹160',
    tags: ['Crowd Favourite']
  },
  {
    id: 'rf-7',
    name: 'Paneer Tikka Sizzler',
    description: 'Charcoal grilled cottage cheese chunks with mint chutney and roasted onions.',
    category: 'starters',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹210',
    tags: ['Tandoor']
  },
  {
    id: 'rf-8',
    name: 'French Fries (Classic / Peri-Peri)',
    description: 'Crispy golden potato fries seasoned with salt or fiery peri-peri masala.',
    category: 'starters',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹100',
    tags: ['Fast Food']
  },
  {
    id: 'rf-9',
    name: 'Farmhouse Cheesy Pizza',
    description: 'Crispy base topped with fresh tomato sauce, mozzarella, bell peppers, sweet corn and onions.',
    category: 'pizza-cafe',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹240',
    tags: ['Cheesy Delight']
  },
  {
    id: 'rf-10',
    name: 'Grilled Cheese Sandwich',
    description: 'Golden toasted bread stuffed with molten cheese, herbs and crunchy vegetables.',
    category: 'pizza-cafe',
    dietary: 'veg',
    experience: 'restaurant',
    price: '₹120',
    tags: ['Café Favorite']
  }
];

export const ALL_MENU_ITEMS: MenuItem[] = [
  ...OFFICIAL_BEVERAGES_MENU,
  ...RESTAURANT_FOOD_ITEMS
];

export const RESTAURANT_MENU_ITEMS: MenuItem[] = ALL_MENU_ITEMS;

export const CATERING_SERVICES: CateringService[] = [
  {
    id: 'c-1',
    name: 'Weddings & Receptions',
    description: 'Bespoke grand buffets, live culinary counters, and courteous hospitality designed for your most cherished celebration.',
    iconName: 'HeartHandshake',
    suitableFor: '100 – 1000+ Guests',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c-2',
    name: 'Birthday & Anniversary Celebrations',
    description: 'Lively themed menus, finger food stations, decadent dessert bars, and tailored courses for family and friends.',
    iconName: 'Cake',
    suitableFor: '25 – 150 Guests',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c-3',
    name: 'Corporate Events & Summits',
    description: 'Punctual, professional corporate spreads, working luncheon boxes, coffee break setups, and gala dinners.',
    iconName: 'Briefcase',
    suitableFor: '50 – 500 Guests',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c-4',
    name: 'Private Dinners & House Parties',
    description: 'Intimate dining experiences with on-site chefs and personalized course pairings right inside your home or private venue.',
    iconName: 'Wine',
    suitableFor: '15 – 50 Guests',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c-5',
    name: 'Social Gatherings & Get-Togethers',
    description: 'Curated high-tea counters, festive spreads, and regional comforting delicacies that make social hostings effortless.',
    iconName: 'Users',
    suitableFor: '30 – 200 Guests',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c-6',
    name: 'Custom Catering Experiences',
    description: 'Fully customized concept menus tailored to dietary preferences, multi-cuisine fusions, and unique theme requirements.',
    iconName: 'Sparkles',
    suitableFor: 'Flexible Custom Sizes',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80'
  }
];

export const CATERING_PROCESS = [
  {
    step: '01',
    title: 'Tell Us About Your Event',
    desc: 'Share your event date, expected guest count, venue preferences and culinary vision with our dedicated team.'
  },
  {
    step: '02',
    title: 'Build Your Menu',
    desc: 'Collaborate with our culinary specialists to taste, select and customize signature dishes and live counter experiences.'
  },
  {
    step: '03',
    title: 'We Take Care of the Rest',
    desc: 'From fresh kitchen prep to elegant buffet presentation and flawless service, relax and enjoy your celebration.'
  }
];

export const CAFE_CATEGORIES = [
  {
    name: 'Coffee & Chillers',
    subtitle: 'Cold coffees, handcrafted iced brews & refreshing sodas',
    items: [
      { name: 'Cold Coffee', price: '₹90' },
      { name: 'Cold Coffee With Ice Cream', price: '₹110' },
      { name: 'Virgin Mojito', price: '₹70' },
      { name: 'Blue Curacao', price: '₹80' },
      { name: 'Green Mojito Mint', price: '₹90' },
    ]
  },
  {
    name: 'Specialty Shakes',
    subtitle: 'Thick handcrafted shakes made with rich ice cream & crunches',
    items: [
      { name: 'Kitkat Shake', price: '₹130' },
      { name: 'Oreo Shake', price: '₹120' },
      { name: 'Mango Shake', price: '₹120' },
      { name: 'Kesar Pista Shake', price: '₹120' },
      { name: 'Chocolate Shake', price: '₹110' },
      { name: 'Strawberry Shake', price: '₹100' },
      { name: 'Butterscotch Shake', price: '₹100' },
      { name: 'Banana Shake', price: '₹90' },
      { name: 'Vanilla Shake', price: '₹90' },
    ]
  },
  {
    name: 'Traditional Coolers & Lassi',
    subtitle: 'Authentic churned yogurt drinks & summer quenchers',
    items: [
      { name: 'Banana Lassi', price: '₹100' },
      { name: 'Lassi (Sweet / Salted)', price: '₹80' },
      { name: 'Lemon Soda', price: '₹70' },
      { name: 'Canned Juice', price: '₹60' },
      { name: 'Chaas (Spiced Buttermilk)', price: '₹50' },
      { name: 'Lemon Water', price: '₹40' },
    ]
  },
  {
    name: 'Quick Bites & Fast Food',
    subtitle: 'Crispy snacks, fries & comfort savouries',
    items: [
      { name: 'French Fries (Classic / Peri-Peri)', price: '₹100' },
      { name: 'Grilled Cheese Sandwich', price: '₹120' },
      { name: 'Veg Hakka Noodles', price: '₹140' },
      { name: 'Farmhouse Cheesy Pizza', price: '₹240' },
    ]
  }
];

export const WHY_NARROW_GAUGE = [
  {
    code: 'DINE',
    title: 'Dine',
    subtitle: 'Everyday meals and memorable dinners.',
    description: 'Impeccable table service, North Indian & Chinese favourites in a warm room designed for family meals on Shivpuri Road.',
    tag: 'Restaurant'
  },
  {
    code: 'CELEBRATE',
    title: 'Celebrate',
    subtitle: 'Events designed around great food.',
    description: 'Bespoke wedding and celebration catering, punctual service and magnificent presentations brought by NG Catters.',
    tag: 'Catering'
  },
  {
    code: 'CONNECT',
    title: 'Connect',
    subtitle: 'Spaces made for conversations.',
    description: 'Chill corners, soothing music and relaxed ambience built for coffee dates and shake sessions at Uknow Café.',
    tag: 'Café & Lounge'
  },
  {
    code: 'INDULGE',
    title: 'Indulge',
    subtitle: 'Shakes, mojitos, bites and everything in between.',
    description: 'Handcrafted KitKat & Oreo shakes, chilled lassis, sizzlers and pizzas made fresh with genuine Sheopur hospitality.',
    tag: 'All Experiences'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Signature Curries & Breads',
    category: 'Restaurant',
    experienceTag: 'Narrow Gauge Restaurant',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    aspect: 'wide',
    caption: 'Thoughtful plating and rich North Indian flavours made for hearty family dining.'
  },
  {
    id: 'g-2',
    title: 'Celebration Banquet Arrangement',
    category: 'NG Catters',
    experienceTag: 'NG Catters',
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80',
    aspect: 'tall',
    caption: 'Bespoke wedding and celebration table settings orchestrated by NG Catters.'
  },
  {
    id: 'g-3',
    title: 'Handcrafted Shakes & Cold Coffee',
    category: 'Uknow Café',
    experienceTag: 'Uknow Café',
    imageUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80',
    aspect: 'square',
    caption: 'Rich Kitkat, Oreo and Mango thickshakes blended fresh to beat the heat.'
  },
  {
    id: 'g-4',
    title: 'Warm Table Ambience in Sheopur',
    category: 'Restaurant',
    experienceTag: 'Narrow Gauge Restaurant',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    aspect: 'wide',
    caption: 'Sophisticated dining room lighting designed for unhurried dinners opposite Badminton Court.'
  },
  {
    id: 'g-5',
    title: 'Outdoor Live Catering Setup',
    category: 'NG Catters',
    experienceTag: 'NG Catters',
    imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    aspect: 'wide',
    caption: 'Professional buffet presentation ensuring food stays fresh, warm, and inviting.'
  },
  {
    id: 'g-6',
    title: 'Refreshing Mojitos & Coolers',
    category: 'Uknow Café',
    experienceTag: 'Uknow Café',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80',
    aspect: 'tall',
    caption: 'Chilled Blue Curacao, Virgin Mojitos, and Green Mint coolers served with crushed ice.'
  },
  {
    id: 'g-7',
    title: 'Tandoor & Flame Spiced Appetizers',
    category: 'Restaurant',
    experienceTag: 'Narrow Gauge Restaurant',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
    aspect: 'square',
    caption: 'Sizzling starters prepared fresh with aromatic spices and house mint dips.'
  },
  {
    id: 'g-8',
    title: 'Relaxed Evening Conversations',
    category: 'Uknow Café',
    experienceTag: 'Uknow Café',
    imageUrl: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80',
    aspect: 'wide',
    caption: 'Comfortable seating and warm lighting at Uknow Café for evening unwinding.'
  }
];
