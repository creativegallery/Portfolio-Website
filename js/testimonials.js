// 1. THE DATA
const testimonialsData = [
  {
    id: "REV001",
    name: "Aarti Sharma",
    text: "Absolutely in love with the custom dual-slot frame! It perfectly preserved my wedding roses. The attention to detail is stunning.",
    rating: 5,
    category: "Memory Frames",
    date: "2023-10-12",
    image: "assets/Frames/Frame 1.webp",
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
    featured: true
  },
  {
    id: "REV003",
    name: "", // Will show as "Happy Client"
    text: "The geode tea coasters are so aesthetic! Everyone asks me where I got them from when I host tea parties.",
    rating: 4,
    category: "Coasters",
    date: "2024-01-20",
    image: "assets/Resin Coaster Sets/IMG_1.webp",
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
    featured: false
  },
  {
    id: "REV005",
    name: "Sneha Nair",
    text: "Gifted the resin alphabet keychain to my best friend and she adored it. The gold flakes look so classy.",
    rating: 5,
    category: "Gifts",
    date: "2024-03-01",
    image: "assets/Gift Items/IMG_2.webp",
    featured: false
  }
];

// 2. THE LOGIC
document.addEventListener('DOMContentLoaded', () => {
  const fullGrid = document.getElementById('all-testimonials-grid');
  const textGrid = document.getElementById('home-text-testimonials');

  // Template for Testimonials Page (Image + Text)
  const renderFullCard = (t) => {
    const name = t.name.trim() !== "" ? t.name : "Happy Client";
    const stars = "★".repeat(t.rating) + "☆".repeat(5 - t.rating);
    
    return `
      <div class="testimonial-card glass-effect">
        <div class="testimonial-img-wrapper">
          <img src="${t.image}" alt="${name} Review" class="testimonial-img" loading="lazy">
          <span class="verified-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            Verified
          </span>
        </div>
        <div class="testimonial-content">
          <div class="stars">${stars}</div>
          <p class="review-text">"${t.text}"</p>
          <div class="reviewer-info">
            <strong>${name}</strong>
            <span>${t.category}</span>
          </div>
        </div>
      </div>
    `;
  };

  // Template for Home Page (Text Only)
  const renderTextCard = (t) => {
    const name = t.name.trim() !== "" ? t.name : "Happy Client";
    const stars = "★".repeat(t.rating) + "☆".repeat(5 - t.rating);
    
    return `
      <div class="text-review-card glass-effect">
        <div class="stars">${stars}</div>
        <p class="review-text">"${t.text}"</p>
        <div class="reviewer-info">
          <strong>${name}</strong>
          <span>${t.category}</span>
        </div>
      </div>
    `;
  };

  // Inject Full Cards into Testimonials Page
  if (fullGrid) {
    fullGrid.innerHTML = testimonialsData.map(renderFullCard).join('');
  }

  // Inject Text-Only Cards into Home Page
  if (textGrid) {
    const featured = testimonialsData.filter(t => t.featured).slice(0, 3);
    textGrid.innerHTML = featured.map(renderTextCard).join('');
  }
});