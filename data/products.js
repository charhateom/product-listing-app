const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 199.99,
    originalPrice: 249.99,
    image: '/headphones.jpg',
    description: 'Experience crystal-clear sound with our noise-cancelling wireless headphones. 40-hour battery life with quick charge.',
    rating: 4.5,
    onSale: true,
    features: [
      'Active Noise Cancellation',
      '40-hour battery life',
      'Bluetooth 5.0',
      'Built-in microphone',
      'Foldable design'
    ],
    colors: ['Black', 'Silver', 'Blue'],
    stock: 15
  },
  {
    id: 2,
    name: 'Luxury Smart Watch Pro',
    price: 349.99,
    image: '/smartwatch.jpg',
    description: 'Track your fitness and stay connected with this elegant smartwatch featuring AMOLED display and health monitoring.',
    rating: 4.8,
    features: [
      '1.7" AMOLED touch display',
      'Heart rate & blood oxygen monitoring',
      'Water resistant (5ATM)',
      '7-day battery life',
      '200+ watch faces'
    ],
    colors: ['Midnight Black', 'Rose Gold', 'Silver'],
    stock: 8
  },
  {
    id: 3,
    name: '4K Ultra HD Smart TV',
    price: 899.99,
    originalPrice: 1099.99,
    image: '/smart-tv.jpg',
    description: 'Immerse yourself in stunning picture quality with our 55" 4K HDR Smart TV with built-in Alexa.',
    rating: 4.7,
    onSale: true,
    features: [
      '55" 4K UHD display',
      'Dolby Vision HDR',
      'Smart TV with streaming apps',
      'Voice control with Alexa',
      '120Hz refresh rate'
    ],
    stock: 5
  },
  {
    id: 4,
    name: 'Professional DSLR Camera',
    price: 1299.99,
    image: '/dslr-camera.jpg',
    description: 'Capture stunning photos with this 24.2MP DSLR camera featuring 4K video and 3" touchscreen.',
    rating: 4.9,
    features: [
      '24.2MP APS-C CMOS sensor',
      '4K UHD video recording',
      '3.0" vari-angle touchscreen',
      '45-point all cross-type AF',
      'Wi-Fi & Bluetooth'
    ],
    bundle: ['Camera Body', '18-55mm Lens', 'Bag', '32GB SD Card'],
    stock: 3
  },
  {
    id: 5,
    name: 'Gaming Laptop Elite',
    price: 1599.99,
    originalPrice: 1799.99,
    image: '/gaming-laptop.jpg',
    description: 'Powerful gaming laptop with RTX 3070 graphics, 16GB RAM, and 1TB SSD for ultimate performance.',
    rating: 4.6,
    onSale: true,
    features: [
      'Intel Core i7-11800H processor',
      'NVIDIA RTX 3070 8GB',
      '15.6" QHD 165Hz display',
      '16GB DDR4 RAM',
      '1TB NVMe SSD'
    ],
    colors: ['Black', 'White'],
    stock: 7
  },
  {
    id: 6,
    name: 'Wireless Charging Station',
    price: 49.99,
    image: '/charging-station.jpg',
    description: 'Charge three devices simultaneously with this stylish 15W fast wireless charging station.',
    rating: 4.3,
    features: [
      '15W fast wireless charging',
      '3-device simultaneous charging',
      'LED charging indicators',
      'Non-slip silicone surface',
      'Overcharge protection'
    ],
    stock: 22
  },
  {
    id: 7,
    name: 'Noise Cancelling Earbuds',
    price: 179.99,
    image: '/earbuds.jpg',
    description: 'True wireless earbuds with active noise cancellation and 30-hour total battery life.',
    rating: 4.4,
    features: [
      'Active Noise Cancellation',
      '30-hour total battery life',
      'IPX4 water resistance',
      'Bluetooth 5.2',
      'Touch controls'
    ],
    colors: ['Black', 'White', 'Blue'],
    stock: 12
  },
  {
    id: 8,
    name: 'Ultra-Slim Bluetooth Keyboard',
    price: 79.99,
    originalPrice: 99.99,
    image: '/keyboard.jpg',
    description: 'Sleek and portable Bluetooth keyboard with backlit keys and multi-device connectivity.',
    rating: 4.2,
    onSale: true,
    features: [
      'Ultra-slim 5mm design',
      'Backlit keys (3 levels)',
      'Connect up to 3 devices',
      '6-month battery life',
      'Compatible with all systems'
    ],
    colors: ['Space Gray', 'Silver', 'Rose Gold'],
    stock: 18
  }
];

export default products;