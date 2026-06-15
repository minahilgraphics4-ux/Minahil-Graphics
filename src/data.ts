/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  BrandingItem,
  LogoItem,
  SocialItem,
  FlyerItem,
  PackagingItem,
  ThumbnailItem,
  PrintItem,
  CaseStudy,
  Testimonial,
  Skill,
  Tool
} from './types';

export const SKILLS: Skill[] = [
  { name: 'Logo Design' },
  { name: 'Branding Identity' },
  { name: 'Social Media Design' },
  { name: 'Packaging Design' },
  { name: 'Flyer Design' },
  { name: 'Brochure Design' },
  { name: 'Thumbnail Design' }
];

export const TOOLS: Tool[] = [
  { name: 'Ps', color: '#00c8ff', icon: 'Adobe Photoshop' },
  { name: 'Ai', color: '#ff9a00', icon: 'Adobe Illustrator' },
  { name: 'Id', color: '#ff1cec', icon: 'Adobe InDesign' },
  { name: 'Ae', color: '#9d56ff', icon: 'Adobe After Effects' },
  { name: 'Canva', color: '#00c4cc', icon: 'Canva Pro' }
];

export const BRANDING_ITEMS: BrandingItem[] = [
  {
    id: 'coffee-house',
    title: 'Bean & Brew Coffee',
    tagline: 'Warmth & Rich Premium Sips',
    logoType: 'Minimal Coffee Mug Emblem',
    colorTheme: {
      primary: '#d6b899',
      secondary: '#422a1d',
      bg: '#fffbf7',
      text: '#422a1d'
    },
    details: 'A premium corporate design system crafted for an upscale coffee house. Built with hand-drawn organic emblems and minimalist layout structures, it scales beautifully across both physical bags and modern digital banners.',
    deliverables: [
      'Logo (Minimal Emblem)',
      'Business Card (Textured Cardstock)',
      'Letterhead (Minimal Clean Grid)',
      'Shopping Bag (Eco-friendly Kraft Paper Bag)',
      'Packaging (Roast Coffee Bean Kraft Pouch)',
      'Social Media Mockups (Instagram Launch Grid)'
    ]
  },
  {
    id: 'luxora-jewelry',
    title: 'Luxora Jewelry',
    tagline: 'A Glimmer of Classic Perfection',
    logoType: 'Luxury Monogram Crown Symbol',
    colorTheme: {
      primary: '#cca43b',
      secondary: '#111111',
      bg: '#181818',
      text: '#f5f5f5'
    },
    details: 'High-end monoline branding package for a luxury diamond boutique. Designed to communicate premium geometric precision, the brand aesthetic uses black velvet textures paired with metallic gold leaf highlights.',
    deliverables: [
      'Logo (Sleek Crown Monogram)',
      'Business Card (Premium Gold Foil Card)',
      'Letterhead (Elegant Embossed Stationery)',
      'Shopping Bag (Matte Velvet Rope Bag)',
      'Packaging (Luxury Leather Gift Box)',
      'Social Media Mockups (Chic Carousel Showcase)'
    ]
  },
  {
    id: 'naturo-skincare',
    title: 'Naturo Skincare',
    tagline: '100% Botanical Serene Care',
    logoType: 'Organic Botanical Shield Logo',
    colorTheme: {
      primary: '#43815c',
      secondary: '#efede6',
      bg: '#fbfbfa',
      text: '#1c3425'
    },
    details: 'Visual branding for an eco-conscious herbal skincare line. Focuses on natural sage-green pastel accents, botanical line art, and soft oatmeal-tinted packaging to highlight pure natural ingredients.',
    deliverables: [
      'Logo (Botanical Line Shield)',
      'Business Card (Recycled Seed Paper)',
      'Letterhead (Minimal Sage Frame Layout)',
      'Shopping Bag (Unbleached Canvas Tote)',
      'Packaging (Amber Glass Soothing Dropper bottle)',
      'Social Media Mockups (Green Aesthetic Theme Grid)'
    ]
  },
  {
    id: 'pixel-studio',
    title: 'Pixel Studio',
    tagline: 'Futuristic Digital Evolution',
    logoType: 'Modern Hexagonal Geometric P-Mark',
    colorTheme: {
      primary: '#a855f7',
      secondary: '#090514',
      bg: '#0c0a1a',
      text: '#ffffff'
    },
    details: 'Sleek, futuristic visual system for an innovative digital consultancy and high-tech software firm. Implements high-fidelity tech blueprints, vibrant ultraviolet glow lines, and modern dark-mode stationery.',
    deliverables: [
      'Logo (Laser Engraved Hexagon Mark)',
      'Business Card (Futuristic Holographic Finish)',
      'Letterhead (Modern Neon Border Document)',
      'Shopping Bag (Tech Sleek Polymer Bag)',
      'Packaging (Premium Software Box Sleeve)',
      'Social Media Mockups (Cyberpunk Promotional Stories)'
    ]
  }
];

export const LOGO_ITEMS: LogoItem[] = [
  {
    id: 'flex-fitness',
    name: 'FLEX FITNESS',
    category: 'Gym, Athletic & Dynamic Sports',
    description: 'A sharp, high-speed dynamic lettermark representing a stylized wing and checkmark intersecting in bold scarlet red. Built to convey kinetic energy, action, and peak performance.',
    logoStyle: 'dynamic',
    primaryColor: '#e11d48',
    accentColor: '#000000'
  },
  {
    id: 'vertex-solutions',
    name: 'VERTEX SOLUTIONS',
    category: 'Future-Proof Tech & Software',
    description: 'An isometric intersecting blue lettermark projecting a three-dimensional vertex node structure. Visualizes mathematical symmetry, stability, and digital engineering.',
    logoStyle: 'geometric',
    primaryColor: '#2563eb',
    accentColor: '#0ea5e9'
  },
  {
    id: 'greenly-organics',
    name: 'GREENLY ORGANICS',
    category: 'Organic Farm & Herbal Goods',
    description: 'A delicate hand-crafted organic tea-leaf vector set inside a soft, double-ringed shield. Intended to evoke earthiness, environmental friendliness, and natural health.',
    logoStyle: 'organic',
    primaryColor: '#16a34a',
    accentColor: '#15803d'
  },
  {
    id: 'avant-studio',
    name: 'AVANT STUDIO',
    category: 'Luxury Fashion & Creative Bureau',
    description: 'An elegant high-fashion monogram composed of interlocking monoline lines that converge to create an abstract high-contrast letter A. Perfect for luxury foil embossing and high-contrast styling.',
    logoStyle: 'elegant',
    primaryColor: '#b45309',
    accentColor: '#f59e0b'
  },
  {
    id: 'wander-travel',
    name: 'WANDER TRAVEL',
    category: 'Adventure, Hiking & Agency',
    description: 'A scenic exploration emblem depicting three distant geometric mountain crests silhouetted against a golden rising sun, encased in a badge design. Inspired by the great outdoors.',
    logoStyle: 'minimalist',
    primaryColor: '#eab308',
    accentColor: '#451a03'
  },
  {
    id: 'luna-wellness',
    name: 'LUNA WELLNESS',
    category: 'Spa, Yoga & Calm Self-Care',
    description: 'A serene crescent moon enclosing a blooming lotus flower, conveying tranquility, rejuvenation, and organic skin care in calming violet tones.',
    logoStyle: 'elegant',
    primaryColor: '#8b5cf6',
    accentColor: '#ddd6fe'
  },
  {
    id: 'apex-racing',
    name: 'APEX RACING',
    category: 'Motorsports, Gaming & Simulators',
    description: 'A high-speed slanted letter A formed by aggressive geometric racing tracks and aerodynamic vents, finished in sleek dark neon-red and silver.',
    logoStyle: 'geometric',
    primaryColor: '#f43f5e',
    accentColor: '#fda4af'
  },
  {
    id: 'pantry-fresh',
    name: 'PANTRY FRESH',
    category: 'Gourmet Kitchen & Fresh Spices',
    description: 'A rustic hand-written chef hat and wooden spoon crossed over matching kitchen elements in deep amber, reflecting authentic home-cooked taste.',
    logoStyle: 'organic',
    primaryColor: '#d97706',
    accentColor: '#fef3c7'
  },
  {
    id: 'pulse-energy',
    name: 'PULSE ENERGY',
    category: 'Kinetic Sports & Premium Energy Drink',
    description: 'A sharp, vibrant neon-green heartbeat oscilloscope line fusing with a lightning emblem. Built to evoke raw electrical energy and cellular stamina.',
    logoStyle: 'dynamic',
    primaryColor: '#22c55e',
    accentColor: '#10b981'
  },
  {
    id: 'orbit-aerospace',
    name: 'ORBIT AEROSPACE',
    category: 'Defense Aviation & Drone Research Labs',
    description: 'Sleek triple-concentric astronomical orbital rings enclosing a high-precision futuristic vanguard delta-wing rocket. Conveys orbital mechanics and clean technology.',
    logoStyle: 'geometric',
    primaryColor: '#06b6d4',
    accentColor: '#0891b2'
  },
  {
    id: 'nova-craft',
    name: 'NOVA CRAFT',
    category: 'Handmade Artisan Wood & Leather Goods',
    description: 'A vintage monographic compass card layout featuring a double-headed stellar star of navigation, ideal for branding luxury heritage leatherware.',
    logoStyle: 'minimalist',
    primaryColor: '#d97706',
    accentColor: '#b45309'
  },
  {
    id: 'acme-logistics',
    name: 'ACME LOGISTICS',
    category: 'Express Shipping & Global Freight Networks',
    description: 'A dynamic modular isometric forwarding crate featuring sleek horizontal speed lines pointing east. Embodies swift, secure parcel routing.',
    logoStyle: 'geometric',
    primaryColor: '#6366f1',
    accentColor: '#4f46e5'
  }
];

export const SOCIAL_ITEMS: SocialItem[] = [
  {
    id: 'smash-burger',
    title: 'Grand Opening Deal - Double Smash Burger',
    category: 'Restaurant Posts',
    discount: '50% OFF',
    bgColor: '#1c1917',
    textColor: '#ffffff',
    accentColor: '#f59e0b',
    tag: 'RESTAURANT POST',
    imageAlt: 'Vibrant sizzling double cheeseburger surrounded by floating fire flames, spicy chili graphics, and retro bold burger joint typography.',
    bulletPoints: [
      'Dynamic fire sparks to catch scrolling gourmet lovers',
      'Heavy distressed slab-serif headlines for bold flavor styling',
      'Golden discount emblem highlighting the 50% discount'
    ]
  },
  {
    id: 'food-sushi',
    title: 'Midweek Special - Premium Seafood Platter',
    category: 'Restaurant Posts',
    discount: 'BUY 1 GET 1',
    bgColor: '#fdfbf7',
    textColor: '#1c1917',
    accentColor: '#dc2626',
    tag: 'RESTAURANT POST',
    imageAlt: 'Traditional Japanese wooden plate full of delicious salmon and avocado sushi rolls, with organic soy sauce droplets.',
    bulletPoints: [
      'Minimal Zen design layout with rich food photography focus',
      'Clean asymmetric layout emphasizing natural presentation',
      'Bold striking Asian stamp-style elements'
    ]
  },
  {
    id: 'sneaker-promo',
    title: 'AeroMax V2 - Next-Gen Athletic Shoes',
    category: 'Product Promotion Posts',
    discount: '30% OFF',
    bgColor: '#090d16',
    textColor: '#ffffff',
    accentColor: '#3b82f6',
    tag: 'PRODUCT PROMOTION',
    imageAlt: 'Vibrant neon blue active athletic shoe hovering inside a futuristic glowing halo structure on a dark tech grid backdrop.',
    bulletPoints: [
      'High-contrast glowing halo frame to hook users on screens',
      'Modern sans-serif typography displaying feature badges',
      'Sleek layout suggesting forward speed and performance'
    ]
  },
  {
    id: 'cosmetic-shampoo',
    title: 'Pure Hydration - Herbal Argan Shampoo',
    category: 'Product Promotion Posts',
    discount: 'FREE SHIPPING',
    bgColor: '#f4f6f0',
    textColor: '#2d3a22',
    accentColor: '#16a34a',
    tag: 'PRODUCT PROMOTION',
    imageAlt: 'Elegant amber bottle surrounded by real botanicals, green tea leaves, and splash of water drops.',
    bulletPoints: [
      'Soft botanical green gradients that speak of natural organic health',
      'Clean typography indicating paraben-free pure formulation',
      'Elegant badge with special shipping offer'
    ]
  },
  {
    id: 'chic-fashion',
    title: 'Minimalist Autumn Wool Blend Overcoat',
    category: 'Fashion Posts',
    discount: '20% OFF',
    bgColor: '#fcfaf7',
    textColor: '#292524',
    accentColor: '#b45309',
    tag: 'FASHION POST',
    imageAlt: 'Stylistically elegant profile of a model wearing a beige autumn overcoat, styled with warm aesthetic serif typography.',
    bulletPoints: [
      'High-end editorial serif look for premium luxury appeal',
      'Neutral earth-toned backdrop highlighting apparel textures',
      'Spacious margins and layouts for a clean fashion feel'
    ]
  },
  {
    id: 'retro-watches',
    title: 'Chrono Series - Handcrafted Leather Watches',
    category: 'Fashion Posts',
    discount: 'LAST SHIFT',
    bgColor: '#171717',
    textColor: '#e5e5e5',
    accentColor: '#cca43b',
    tag: 'FASHION POST',
    imageAlt: 'Premium metal luxury watch placed on dynamic dark oak background with ambient warm studio lighting.',
    bulletPoints: [
      'Deep dark monochrome styling paired with rich gold text',
      'Highly professional watch details call-out list',
      'Strong center-aligned luxurious structure'
    ]
  },
  {
    id: 'luxury-villas',
    title: 'PineCrest Luxury Modern 4-BHK Villas',
    category: 'Real Estate Posts',
    discount: 'BOOK NOW',
    bgColor: '#0f172a',
    textColor: '#f8fafc',
    accentColor: '#0ea5e9',
    tag: 'REAL ESTATE',
    imageAlt: 'Breathtaking modern architectural cabin with floor-to-ceiling glass paneling glowing amid a quiet blue twilight pine forest.',
    bulletPoints: [
      'Elegant modern high-contrast navy layout expressing prestige',
      'Clean vector icons for amenities (Beds, Pool, Gym, Area)',
      'Subtle metallic teal borders for structure'
    ]
  },
  {
    id: 'cozy-apartments',
    title: 'Sunny Meadows - Contemporary Smart Apartments',
    category: 'Real Estate Posts',
    discount: 'EASY INSTALLMENT',
    bgColor: '#fafaf9',
    textColor: '#1c1917',
    accentColor: '#2563eb',
    tag: 'REAL ESTATE',
    imageAlt: 'Beautiful modern apartment room with warm natural skylight and elegant interior styling.',
    bulletPoints: [
      'Minimal editorial layout highlighting airy luxury spaces',
      'Clean payment options and installment period details',
      'Direct call-to-action bar with custom icons'
    ]
  }
];

export const FLYER_ITEMS: FlyerItem[] = [
  {
    id: 'delightful-burger',
    title: 'Delicious Burger',
    subtitle: 'Taste the Sizzling Crunch of Premium BBQ',
    badge: '50% OFF',
    category: 'Food Flyer',
    bgColor: '#0f0a04',
    textColor: '#ffffff',
    accentColor: '#ff9a00',
    phone: '+92 300 1234567'
  },
  {
    id: 'smart-ideas',
    title: 'Smart Ideas',
    subtitle: 'Grow Your Business & Drive Seamless Sales',
    category: 'Corporate Flyer',
    bgColor: '#f4f4f5',
    textColor: '#18181b',
    accentColor: '#2563eb',
    phone: '+92 300 7654321'
  },
  {
    id: 'live-music-night',
    title: 'Live Music Night',
    subtitle: 'Featuring Electric Beats & Acoustic Sets',
    badge: '25 MAY',
    category: 'Event Flyer',
    bgColor: '#170529',
    textColor: '#fbf7ff',
    accentColor: '#e01dff',
    phone: '+92 312 9876543'
  },
  {
    id: 'company-profile',
    title: 'Company Profile',
    subtitle: 'Annual Design Vision Corporate Presentation',
    category: 'Brochure',
    bgColor: '#fdfdfd',
    textColor: '#1f1f1f',
    accentColor: '#dc2626',
    phone: '+92 305 1112233'
  }
];

export const PACKAGING_ITEMS: PackagingItem[] = [
  {
    id: 'cravings-nimko',
    title: 'Cravings Nimko',
    subtitle: 'Traditional Spicy Mix & Crunchy Chickpea Sticks',
    category: 'Nimko Packaging',
    productType: 'Glossy Metallic Pillow Pack',
    bgColor: '#ea580c',
    accentColor: '#9a3412',
    nutritionFacts: ['Spiciness: Intense', 'Net Wt: 150g', 'Ingredients: Lentils, Chickpea Flour, Spices', 'Baked: Yes']
  },
  {
    id: 'crispy-chips',
    title: 'CHIPS',
    subtitle: 'Classic Salted & Crispy Golden Potato Crunch',
    category: 'Chips Packaging',
    productType: 'Matte-Finish Foil Bag',
    bgColor: '#facc15',
    accentColor: '#ca8a04',
    nutritionFacts: ['Calories: 155 kcal', 'Total Fat: 10g', 'Sodium: 170mg', 'Pure Potatoes: 100%']
  },
  {
    id: 'aloe-vera-gel',
    title: 'Aloe Vera Gel',
    subtitle: 'Soothe & Refresh Hydrating Natural Botanics',
    category: 'Cosmetic Packaging',
    productType: 'Frosted Translucent Jar with Gold Lid',
    bgColor: '#15803d',
    accentColor: '#166534',
    nutritionFacts: ['Organic Aloe: 99%', 'Paraben Free', 'Vegan Formula', 'Soothes Sunburns']
  },
  {
    id: 'citrus-bloom',
    title: 'Citrus Bloom Soda',
    subtitle: 'Vibrant Sparkling Orange & Fresh Mint Fizzer',
    category: 'Beverage Packaging',
    productType: 'Sleek Glossy Aluminum Can',
    bgColor: '#f97316',
    accentColor: '#ffedd5',
    nutritionFacts: ['Orange Juice: 15%', 'Low Sugar: 4g', 'Carbonated: Yes', '100% Refreshing Refreshment']
  }
];

export const THUMBNAIL_ITEMS: ThumbnailItem[] = [
  {
    id: 'gaming-victory',
    title: 'GAMING VICTORY IS EVERYTHING',
    badge: 'NEW VIDEO',
    views: '240K views',
    duration: '12:45',
    glowColor: '#3b82f6',
    style: 'gaming',
    author: 'GAMER PRO'
  },
  {
    id: 'grow-business',
    title: '5 WAYS TO GROW YOUR BUSINESS',
    badge: 'TIPS',
    views: '1.2M views',
    duration: '08:12',
    glowColor: '#f97316',
    style: 'business',
    author: 'BIZ COACH'
  },
  {
    id: 'freelancing-guide',
    title: '$1000/DAY FROM FREELANCING',
    badge: 'GUIDE',
    views: '890K views',
    duration: '15:20',
    glowColor: '#22c55e',
    style: 'freelancing',
    author: 'FREE ACADEMY'
  },
  {
    id: 'ps-secrets',
    title: '10 PHOTOSHOP SECRETS YOU DO NOT KNOW',
    badge: 'TUTORIAL',
    views: '540K views',
    duration: '10:15',
    glowColor: '#06b6d4',
    style: 'freelancing',
    author: 'MINAHIL EDIT'
  }
];

export const PRINT_ITEMS: PrintItem[] = [
  {
    id: 'black-friday',
    title: 'BLACK FRIDAY SALE',
    subtitle: 'Massive Clearance Storewide Event',
    badge: '70% OFF',
    category: 'Storefront Poster Design (A2)',
    accentColor: '#ef4444',
    bgColor: '#000000'
  },
  {
    id: 'marketing-agency',
    title: 'DIGITAL MARKETING AGENCY',
    subtitle: 'Innovate, Optimize, Skyrocket Brand Value',
    badge: 'GROW NOW',
    category: 'Corporate Event Roll-Up Banner (85x200cm)',
    accentColor: '#2563eb',
    bgColor: '#ffffff'
  },
  {
    id: 'grand-opening',
    title: 'GRAND OPENING',
    subtitle: 'Join Us & Grab Inaugural Deals',
    badge: '20% OFF',
    category: 'Welcome Standee Design (60x160cm)',
    accentColor: '#eab308',
    bgColor: '#0f172a'
  }
];

export const CASE_STUDY: CaseStudy = {
  project: 'Smash & Sizzle',
  industry: 'Gourmet Burger Joint & Fast Food Dining',
  scope: ['Brand Identity & Logo Concept', 'Dine-In Menu Board Layout', 'Biodegradable Takeaway Packaging', 'Social Media Launch & Ads Design'],
  problem: 'A new gourmet restaurant, Smash & Sizzle, required comprehensive premium branding. Unko market mein stand out karne ke liye ek unique aesthetic identity aur complete physical + digital packaging and advertising system ki zaroorat thi.',
  solution: 'I designed a bold, distressed stamp-style typography logo with integrated rustic flame marks. Created custom paper burger wrappers, modern minimalist menu cards, and a striking high-contrast neon social media marketing kit to drive launch traffic.',
  result: 'Launched successfully with massive local response. Double smash burger identity became instantly recognizable on Instagram, establishing a cohesive and extremely professional brand personality that elevated sales.'
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'ayecha-khan',
    name: 'Ayecha Khan',
    role: 'CEO',
    company: 'Bean & Brew Coffee',
    rating: 5,
    text: 'Amazing work! Very professional and creative. Minahil delivered a full luxury system that far exceeded our initial expectations.',
    avatar: 'AK'
  },
  {
    id: 'bilal-ahmed',
    name: 'Bilal Ahmed',
    role: 'Founder',
    company: 'Vertex Solutions',
    rating: 5,
    text: 'Outstanding communication and sheer design prowess! The geometric vertex lettermark created for us completely captures the futuristic digital scope of our company.',
    avatar: 'BA'
  },
  {
    id: 'hassan-raza',
    name: 'Hassan Raza',
    role: 'Owner',
    company: 'Smash & Sizzle',
    rating: 5,
    text: 'Amazing! Minahil created our entire identity from scratch—from the sizzling stamp-styled logo to packaging & menus. Customer feedback has been phenomenal!',
    avatar: 'HR'
  }
];
