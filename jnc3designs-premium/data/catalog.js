export const supplyCategories = [
  {
    name: "PLA",
    slug: "pla",
    description: "Everyday printing filament for clean, reliable prints.",
  },
  {
    name: "PLA High Speed",
    slug: "pla-high-speed",
    description: "Optimized for faster printing while maintaining quality.",
  },
  {
    name: "PLA+",
    slug: "pla-plus",
    description: "Stronger PLA option for durable prints.",
  },
  {
    name: "PLA Metallic",
    slug: "pla-metallic",
    description: "Metallic finish filament for decorative and display prints.",
  },
  {
    name: "PETG",
    slug: "petg",
    description: "Durable filament with good strength and flexibility.",
  },
  {
    name: "PETG HF",
    slug: "petg-hf",
    description: "High-flow PETG for faster printing and strong parts.",
  },
  {
    name: "Silk",
    slug: "silk",
    description: "Glossy specialty filament for decorative prints.",
  },
  ];
  export const materialDetails = {
  pla: {
    displayName: "PLA",
    nozzleTemp: "200–220°C",
    bedTemp: "50–60°C",
    difficulty: "Easy",
    bestFor: "Everyday prints, signs, display pieces, prototypes, and general use.",
    notes:
      "PLA is one of the easiest materials to print and is a great choice for clean detail and reliable results.",
  },

  "pla-high-speed": {
    displayName: "PLA High Speed",
    nozzleTemp: "210–230°C",
    bedTemp: "50–60°C",
    difficulty: "Easy",
    bestFor: "Fast prints, prototypes, and everyday parts.",
    notes:
      "Designed for faster printing while still keeping clean surface quality.",
  },

  "pla-plus": {
    displayName: "PLA+",
    nozzleTemp: "205–225°C",
    bedTemp: "50–60°C",
    difficulty: "Easy",
    bestFor: "Stronger everyday prints and parts needing extra durability.",
    notes:
      "PLA+ gives you improved toughness while staying easy to print.",
  },

  "pla-metallic": {
    displayName: "PLA Metallic",
    nozzleTemp: "200–220°C",
    bedTemp: "50–60°C",
    difficulty: "Easy",
    bestFor: "Decorative prints, displays, awards, and premium-looking parts.",
    notes:
      "Metallic PLA is great when you want a more eye-catching finish.",
  },

  petg: {
    displayName: "PETG",
    nozzleTemp: "230–250°C",
    bedTemp: "70–80°C",
    difficulty: "Medium",
    bestFor: "Functional parts, brackets, outdoor-friendly prints, and durable items.",
    notes:
      "PETG is stronger and more flexible than PLA, making it a great choice for practical parts.",
  },

  "petg-hf": {
    displayName: "PETG HF",
    nozzleTemp: "230–260°C",
    bedTemp: "70–80°C",
    difficulty: "Medium",
    bestFor: "Fast functional prints, stronger parts, and production work.",
    notes:
      "High-flow PETG is built for faster printing while keeping good strength.",
  },

  silk: {
    displayName: "Silk PLA",
    nozzleTemp: "200–220°C",
    bedTemp: "50–60°C",
    difficulty: "Easy",
    bestFor: "Decorative prints, gifts, display pieces, and colorful designs.",
    notes:
      "Silk PLA gives prints a glossy finish and is best for visual impact.",
  },
};

export const products = [
  {
  id: 1,
  slug: "ceramic-white",
  name: "Ceramic White PLA",
  material: "PLA",
  category: "pla",
  color: "Ceramic White",
  brand: "ZYLtech",
  price: 17.95,
  stock: 2,
  square: "",
  image: "/filament/pla/ceramic-white.jpg",
  description:
    "Premium PLA for clean, reliable everyday printing with a smooth finish.",
  applications: [
    "Prototypes",
    "Decorative prints",
    "Signs and displays",
    "General purpose printing",
  ],
  printerCompatibility: [
    "Bambu Lab",
    "Creality",
    "Prusa",
    "Any FDM printer",
  ],
},
  { id: 2, slug: "light-blue", name: "Light Blue PLA", material: "PLA", category: "pla", color: "Light Blue", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/pla/light-blue.jpg", },
  { id: 3, slug: "dark-red", name: "Dark Red PLA", material: "PLA", category: "pla", color: "Dark Red", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/pla/dark-red.jpg", },
  { id: 4, slug: "deep-blue", name: "Deep Blue PLA", material: "PLA", category: "pla", color: "Deep Blue", brand: "ZYLtech", price: 17.95, stock: 4, square: "", image: "/filament/pla/deep-blue.jpg", },
  { id: 5, slug: "fluorescent-green", name: "Fluorescent Green PLA", material: "PLA", category: "pla", color: "Fluorescent Green", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/pla/fluorescent-green.jpg", },
  { id: 6, slug: "cocoa-brown", name: "Cocoa Brown PLA", material: "PLA", category: "pla", color: "Cocoa Brown", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/pla/cocoa-brown.jpg", },
  { id: 7, slug: "orange", name: "Orange PLA", material: "PLA", category: "pla", color: "Orange", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/pla/orange.jpg", },
  { id: 8, slug: "panhandle-khaki", name: "Panhandle Khaki PLA", material: "PLA", category: "pla", color: "Panhandle Khaki", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/pla/panhandle-khaki.jpg", },
  { id: 9, slug: "dark-green", name: "Dark Green PLA", material: "PLA", category: "pla", color: "Dark Green", brand: "ZYLtech", price: 17.95, stock: 1, square: "", image: "/filament/pla/dark-green.jpg", },
  { id: 10, slug: "lipstick-red", name: "Lipstick Red PLA", material: "PLA", category: "pla", color: "Lipstick Red", brand: "ZYLtech", price: 17.95, stock: 1, square: "", image: "/filament/pla/lipstick-red.jpg", },
  { id: 11, slug: "army-green", name: "Army Green PLA", material: "PLA", category: "pla", color: "Army Green", brand: "ZYLtech", price: 17.95, stock: 1, square: "", image: "/filament/pla/army-green.jpg", },
  { id: 12, slug: "maroon", name: "Maroon PLA", material: "PLA", category: "pla", color: "Maroon", brand: "ZYLtech", price: 17.95, stock: 1, square: "", image: "/filament/pla/maroon.jpg", },
  { id: 13, slug: "matte-khaki", name: "Matte Khaki PLA", material: "PLA", category: "pla", color: "Matte Khaki", brand: "ZYLtech", price: 17.95, stock: 1, square: "", image: "/filament/pla/matte-khaki.jpg", },

  { id: 14, slug: "mint", name: "Mint PLA High Speed", material: "PLA High Speed", category: "pla-high-speed", color: "Mint", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/pla-high-speed/mint.jpg" },
{ id: 15, slug: "purple", name: "Purple PLA High Speed", material: "PLA High Speed", category: "pla-high-speed", color: "Purple", brand: "ZYLtech", price: 17.95, stock: 1, square: "", image: "/filament/pla-high-speed/purple.jpg" },

{ id: 16, slug: "glossy-black", name: "Glossy Black PLA+", material: "PLA+", category: "pla-plus", color: "Glossy Black", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/pla-plus/glossy-black.jpg" },

{ id: 17, slug: "red", name: "Red PLA Metallic", material: "PLA Metallic", category: "pla-metallic", color: "Red", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/pla-metallic/red.jpg" },

{ id: 18, slug: "rainbow-celestial-cascade", name: "Rainbow Celestial Cascade Silk", material: "Silk", category: "silk", color: "Rainbow: Celestial Cascade", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/silk/rainbow-celestial-cascade.jpg" },
{ id: 19, slug: "magenta", name: "Magenta Silk", material: "Silk", category: "silk", color: "Magenta", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/silk/magenta.jpg" },
{ id: 20, slug: "white", name: "White Silk", material: "Silk", category: "silk", color: "White", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/silk/white.jpg" },
{ id: 21, slug: "dual-color-crimson-noir", name: "Dual Color Crimson Noir Silk", material: "Silk", category: "silk", color: "Dual Color: Crimson Noir", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/silk/dual-color-crimson-noir.jpg" },
{ id: 22, slug: "dual-color-shadow-blade", name: "Dual Color Shadow Blade Silk", material: "Silk", category: "silk", color: "Dual Color: Shadow Blade", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/silk/dual-color-shadow-blade.jpg" },

{ id: 23, slug: "deep-blue", name: "Deep Blue PETG", material: "PETG", category: "petg", color: "Deep Blue", brand: "ZYLtech", price: 17.95, stock: 4, square: "", image: "/filament/petg/deep-blue.jpg" },
{ id: 24, slug: "white", name: "White PETG", material: "PETG", category: "petg", color: "White", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/petg/white.jpg" },
{ id: 25, slug: "army-green", name: "Army Green PETG", material: "PETG", category: "petg", color: "Army Green", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/petg/army-green.jpg" },
{ id: 26, slug: "gray", name: "Gray PETG", material: "PETG", category: "petg", color: "Gray", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/petg/gray.jpg" },
{ id: 27, slug: "red", name: "Red PETG", material: "PETG", category: "petg", color: "Red", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/petg/red.jpg" },
{ id: 28, slug: "transparent", name: "Transparent PETG", material: "PETG", category: "petg", color: "Transparent", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/petg/transparent.jpg" },
{ id: 29, slug: "maroon", name: "Maroon PETG", material: "PETG", category: "petg", color: "Maroon", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/petg/maroon.jpg" },

{ id: 30, slug: "black", name: "Black PETG HF", material: "PETG HF", category: "petg-hf", color: "Black", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/petg-hf/black.jpg" },
{ id: 31, slug: "red", name: "Red PETG HF", material: "PETG HF", category: "petg-hf", color: "Red", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/petg-hf/red.jpg" },
{ id: 32, slug: "deep-blue", name: "Deep Blue PETG HF", material: "PETG HF", category: "petg-hf", color: "Deep Blue", brand: "ZYLtech", price: 17.95, stock: 2, square: "", image: "/filament/petg-hf/deep-blue.jpg" },
];
