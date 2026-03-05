const deepFreezeTestimonials = (obj) => {
  Object.keys(obj).forEach(prop => {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      deepFreezeTestimonials(obj[prop]);
    }
  });
  return Object.freeze(obj);
};

const testimonialsData = deepFreezeTestimonials([
  {
    id: "REV001",
    name: "Aarti Sharma",
    text: "Absolutely in love with the custom dual-slot frame! It perfectly preserved my wedding roses. The attention to detail is stunning.",
    rating: 5,
    category: "Memory Frames",
    date: "2023-10-12",
    image: "assets/Frames/Frame 1.webp", /* Using existing image for placeholder */
    type: "photo",
    featured: true
  },
  {
    id: "REV002",
    name: "Rahul Verma",
    text: "Ordered a custom business nameplate and it arrived perfectly packaged and looking incredibly premium. Highly recommend!",
    rating: 5,
    category: "Nameplates",
    date: "2023-11-05",
    image: "assets/Resin Nameplates/IMG_1.webp",
    type: "screenshot",
    featured: true
  },
  {
    id: "REV003",
    name: "", // Tests fallback to Happy Client
    text: "The geode tea coasters are so aesthetic! Everyone asks me where I got them from when I host tea parties.",
    rating: 4,
    category: "Coasters",
    date: "2024-01-20",
    image: "assets/Resin Coaster Sets/IMG_1.webp",
    type: "photo",
    featured: true
  },
  {
    id: "REV004",
    name: "Priya K.",
    text: "Beautiful ocean wave resin art. It adds so much life to my living room wall. Thank you for the fast delivery!",
    rating: 5,
    category: "Wall Art",
    date: "2024-02-14",
    image: "assets/Resin Wall Art/IMG_1_RWH.webp",
    type: "screenshot",
    featured: true
  },
  {
    id: "REV005",
    name: "Sneha Nair",
    text: "Gifted the resin alphabet keychain to my best friend and she adored it. The gold flakes look so classy.",
    rating: 5,
    category: "Gifts",
    date: "2024-03-01",
    image: "assets/Gift Items/IMG_2.webp",
    type: "photo",
    featured: false
  },
  {
    id: "REV006",
    name: "Karan D.",
    text: "Got my varmala preserved in the zig-zag golden frame. It's a memory I'll cherish forever. Great craftsmanship.",
    rating: 5,
    category: "Memory Frames",
    date: "2024-03-10",
    image: "assets/Frames/Frame 3.webp",
    type: "photo",
    featured: false
  }
]);