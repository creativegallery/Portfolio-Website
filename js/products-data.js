const deepFreezeTestimonials = (obj) => {
  Object.keys(obj).forEach(prop => {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      deepFreezeTestimonials(obj[prop]);
    }
  });
  return Object.freeze(obj);
};

const productsData = deepFreezeTestimonials([
  {
    id: "RF001CG",
    title: "Custom Dual-Slot Resin Photo Frame",
    desc: "gold-painted dried rose with beads. (Custom Sizes available)",
    img: "assets/Frames/Frame 1.webp",
    price: 1500,
    sizes: ["8x10", "10x12", "12x15"],
    customizations: ["Gold Flakes", "Silver Flakes", "None"],
    stockCount: "ON ORDER"
  },
  {
    id: "RF002CG",
    title: "Resin Wedding Preservation with Wooden Frame",
    desc: "Dried Flowers With Beads. (Custom Sizes available)",
    img: "assets/Frames/Frame 2.webp",
    price: null,
    sizes: ["Custom Built"],
    customizations: ["Wooden Frame", "Acrylic Frame"],
    stockCount: "ON ORDER"
  },
  {
    id: "RF003CG",
    title: "wedding zig-zag Golden Border frame",
    desc: "varmala with roses aesthetic geode style frame. (Custom Sizes available)",
    img: "assets/Frames/Frame 3.webp",
    price: 2800,
    sizes: ["12x12", "16x16", "20x20"],
    customizations: ["Add Initials", "Without Initials"],
    stockCount: "ON ORDER"
  },
  {
    id: "RF004CG",
    title: "Custom Glittered Base Frame",
    desc: "custom base with shell, flowers & beads. (Custom Sizes available)",
    img: "assets/Frames/Frame 4.webp",
    price: 1250,
    sizes: ["8x8", "10x10"],
    customizations: ["Ocean Theme", "Floral Theme", "Minimalist"],
    stockCount: "ON ORDER"
  },
  {
    id: "RC001CG",
    title: "Geode Tea Coasters",
    desc: "Gold Flakes Edition (Set of 4 with Custom Sizes)",
    img: "assets/Resin Coaster Sets/IMG_1.webp",
    price: 800,
    sizes: ["Standard", "Large"],
    customizations: ["Gold Flakes", "Silver Flakes"],
    stockCount: "ON ORDER"
  },
  {
    id: "RC002CG",
    title: "Customized floral coaster set",
    desc: "Custom Base (Custom Sizes available)",
    img: "assets/Resin Coaster Sets/IMG_2.webp",
    price: 950,
    sizes: ["Standard", "Large"],
    customizations: ["Red Roses", "Pink Roses", "Mixed Flora"],
    stockCount: "ON ORDER"
  },
  {
    id: "RC003CG",
    title: "Shimmer coasters with mica flakes",
    desc: "Reflective Finish with resin (Set of 4 with Custom sizes)",
    img: "assets/Resin Coaster Sets/IMG_3.webp",
    price: 850,
    sizes: ["Standard"],
    customizations: ["Blue Mica", "Purple Mica", "Pearl White"],
    stockCount: "ON ORDER"
  },
  {
    id: "RC004CG",
    title: "Tray & Coaster Set",
    desc: "Silver Edition with glittered looks (Sets and Custom sizes available)",
    img: "assets/Resin Coaster Sets/IMG_4.webp",
    price: 2200,
    sizes: ["Standard Tray", "Large Tray"],
    customizations: ["Silver Glitter", "Holographic Glitter"],
    stockCount: "ON ORDER"
  },
  {
    id: "RGI001CG",
    title: "Car Hanging / Ornament",
    desc: "Resin base with pearl designed borders. (Custom Photo,color,chain and sizes available)",
    img: "assets/Gift Items/IMG_1.webp",
    price: 450,
    sizes: ["Standard"],
    customizations: ["Gold Chain", "Silver Chain", "Black Cord"],
    stockCount: "ON ORDER"
  },
  {
    id: "RGI002CG",
    title: "Resin Alphabet Keychain",
    desc: "mixed with white pearlescent pigment and embedded with Gold Foil Flakes. (Custom alphabet,color,keychain available)",
    img: "assets/Gift Items/IMG_2.webp",
    price: 250,
    sizes: ["Standard"],
    customizations: ["A-Z (Specify in Notes)", "Add Tassel"],
    stockCount: "ON ORDER"
  },
  {
    id: "RGI003CG",
    title: "Devotional Display initial",
    desc: "(Custom Photo,color,looks and sizes available)",
    img: "assets/Gift Items/IMG_3.webp",
    price: 600,
    sizes: ["Small", "Medium"],
    customizations: ["Warm LEDs", "No LEDs"],
    stockCount: "ON ORDER"
  },
  {
    id: "RGI004CG",
    title: "Ocean-Themed Keychains",
    desc: "Ocean themed having shells with custom color props with Keychains. (Customization available)",
    img: "assets/Gift Items/IMG_4.webp",
    price: 300,
    sizes: ["Standard"],
    customizations: ["Starfish", "Seashell", "Turtle"],
    stockCount: "ON ORDER"
  },
  {
    id: "RGI005CG",
    title: "Ocean-Themed Book Cover and Bookmark",
    desc: "Ocean themed cover custom color props with bookmark. (Customization available)",
    img: "assets/Gift Items/IMG_5.webp",
    price: 1500,
    sizes: ["A5", "A6"],
    customizations: ["Ocean Blue", "Deep Sea Green"],
    stockCount: "ON ORDER"
  },
  {
    id: "RGI006CG",
    title: "Clear Resin Bookmark",
    desc: "clear bookmark with custom color props with Keychains. (Customization available)",
    img: "assets/Gift Items/IMG_6.webp",
    price: 200,
    sizes: ["Standard"],
    customizations: ["Gold Tassel", "Silver Tassel"],
    stockCount: "ON ORDER"
  },
  {
    id: "RGI007CG",
    title: "Resin vase",
    desc: "clear vase with floral reel preserve your favourite flowers. (Customization available)",
    img: "assets/Gift Items/IMG_7.webp",
    price: 1800,
    sizes: ["6 Inch", "8 Inch"],
    customizations: ["Gold Edges", "Clear Edges"],
    stockCount: "ON ORDER"
  },
  {
    id: "RN001CG",
    title: "Resin Varmala Preservation Stand",
    desc: "for couple name initials (All type of Customization, Sizes available)",
    img: "assets/Resin Nameplates/IMG_1.webp",
    price: 3500,
    sizes: ["12x8", "18x12"],
    customizations: ["Block Letters", "Cursive Letters"],
    stockCount: "ON ORDER"
  },
  {
    id: "RN002CG",
    title: "Floral Preservation Entrance Plaque",
    desc: "preserved special flowers, such as those from a wedding garland. (Custom Sizes available)",
    img: "assets/Resin Nameplates/IMG_2.webp",
    price: 4000,
    sizes: ["16x10", "24x12"],
    customizations: ["Gold Border", "Silver Border"],
    stockCount: "ON ORDER"
  },
  {
    id: "RN003CG",
    title: "Custom Resin Name Plate",
    desc: "Ocean theme features embedded seashells and glass stones to simulate a shoreline.(Custom Sizes available)",
    img: "assets/Resin Nameplates/IMG_3.webp",
    price: 2500,
    sizes: ["12x6", "14x8"],
    customizations: ["Add LED Backlight", "No Backlight"],
    stockCount: "ON ORDER"
  },
  {
    id: "RN004CG",
    title: "Resin Business Nameplate",
    desc: "Floral Resin Door Sign with Gold stainless steel standoff screws. (Custom Sizes available)",
    img: "assets/Resin Nameplates/IMG_4.webp",
    price: 2800,
    sizes: ["12x8", "16x10"],
    customizations: ["Gold Standoffs", "Silver Standoffs"],
    stockCount: "ON ORDER"
  },
  {
    id: "RWH001CG",
    title: "Ocean-Themed Round Clock",
    desc: "Ocean feel with sea shells designed custom clock. (Full Customization and sizes available)",
    img: "assets/Resin Wall Art/IMG_1_RWH.webp",
    price: 3200,
    sizes: ["12 Inch", "16 Inch", "20 Inch"],
    customizations: ["Roman Numerals", "Standard Numbers"],
    stockCount: "ON ORDER"
  },
  {
    id: "RWH002CG",
    title: "Sea Shells Scape Resin Art on Canvas",
    desc: "Acrylic, agate, clam shell, resin, sand (Custom sizes available)",
    img: "assets/Resin Wall Art/IMG_2_RWH.webp",
    price: null,
    sizes: ["24x36", "36x48"],
    customizations: ["Canvas Base", "Wood Base"],
    stockCount: "ON ORDER"
  },
  {
    id: "RWH003CG",
    title: "Floral Wall Clock",
    desc: "Handcrafted Resin Wall Clock: 10-Inch Floral Home Decor (Customization and sizes available)",
    img: "assets/Resin Wall Art/IMG_3_RWH.webp",
    price: 2100,
    sizes: ["10 Inch", "14 Inch"],
    customizations: ["Gold Hands", "Black Hands"],
    stockCount: "ON ORDER"
  },
  {
    id: "RWH004CG",
    title: "Ocean Wave Resin Art on Canvas",
    desc: "Resin Beach Painting: Abstract Ocean Waves Wall Art (pre-order, sizes available)",
    img: "assets/Resin Wall Art/IMG_4_RWH.webp",
    price: 4500,
    sizes: ["18x24", "24x36"],
    customizations: ["Add Sand Textures", "Smooth Finish"],
    stockCount: "ON ORDER"
  }
]);