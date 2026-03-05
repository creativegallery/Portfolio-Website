document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  
  const product = productsData.find(p => p.id === productId);

  if (!product) {
    document.querySelector('.product-container').innerHTML = '<h2 style="width:100%; text-align:center;">Product not found.</h2>';
    return;
  }

  // Handle Recently Viewed State
  let recentViews = JSON.parse(sessionStorage.getItem('cg_recent')) || [];
  recentViews = recentViews.filter(id => id !== productId);
  recentViews.unshift(productId);
  if(recentViews.length > 5) recentViews.pop();
  sessionStorage.setItem('cg_recent', JSON.stringify(recentViews));

  const prodImg = document.getElementById('prod-img');
  prodImg.src = product.img;
  document.getElementById('prod-title').textContent = product.title;
  document.getElementById('prod-id').textContent = `SKU: ${product.id}`;
  document.getElementById('prod-desc').textContent = product.desc;

  const zoomContainer = document.getElementById('zoom-container');
  zoomContainer.addEventListener('mousemove', (e) => {
    if(window.innerWidth < 768) return;
    const rect = zoomContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    prodImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    prodImg.style.transform = 'scale(2.5)';
  });

  zoomContainer.addEventListener('mouseleave', () => {
    prodImg.style.transformOrigin = 'center center';
    prodImg.style.transform = 'scale(1)';
  });

  const priceEl = document.getElementById('prod-price');
  const totalEl = document.getElementById('prod-total');
  const qtyInput = document.getElementById('prod-qty');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  const qtyWrapper = document.getElementById('qty-wrapper');
  const actionBtn = document.getElementById('btn-add-cart'); // Changed ID mapping
  
  // Scarcity Logic Injection
  if (product.stockCount === 0) {
    actionBtn.innerHTML = 'Out of Stock';
    actionBtn.style.background = '#888';
    actionBtn.style.pointerEvents = 'none';
    qtyWrapper.style.display = 'none';
  } else if (product.stockCount <= 3) {
    const scarcityBadge = document.createElement('div');
    scarcityBadge.className = 'scarcity-badge';
    scarcityBadge.innerHTML = `&#9888; Hurry! Only ${product.stockCount} left in stock.`;
    priceEl.parentNode.insertBefore(scarcityBadge, priceEl);
  }

  const currentPrice = product.price;

  if (currentPrice !== null) {
    priceEl.textContent = `₹${currentPrice}`;
    totalEl.textContent = `Total: ₹${currentPrice * parseInt(qtyInput.value, 10)}`;
  } else {
    priceEl.textContent = "Price on request";
    totalEl.style.display = 'none';
    if(product.stockCount > 0) qtyWrapper.style.display = 'none';
  }

  const sizeSelect = document.getElementById('prod-size');
  product.sizes.forEach(size => {
    const opt = document.createElement('option');
    opt.value = size;
    opt.textContent = size;
    sizeSelect.appendChild(opt);
  });

  const custSelect = document.getElementById('prod-cust');
  product.customizations.forEach(cust => {
    const opt = document.createElement('option');
    opt.value = cust;
    opt.textContent = cust;
    custSelect.appendChild(opt);
  });

  const updateQuantity = (newQty) => {
    if (product.stockCount === 0) return;
    if (isNaN(newQty) || newQty < 1) newQty = 1;
    if (newQty > product.stockCount) newQty = product.stockCount; // Limit to stock
    qtyInput.value = newQty;
    if (currentPrice !== null) {
      totalEl.textContent = `Total: ₹${currentPrice * newQty}`;
    }
  };

  qtyInput.addEventListener('input', () => updateQuantity(parseInt(qtyInput.value, 10)));
  qtyMinus.addEventListener('click', () => {
    let q = parseInt(qtyInput.value, 10);
    updateQuantity(q > 1 ? q - 1 : 1);
  });
  qtyPlus.addEventListener('click', () => {
    let q = parseInt(qtyInput.value, 10);
    updateQuantity(q + 1);
  });

  actionBtn.addEventListener('click', () => {
    if (product.stockCount === 0) return;
    const qty = parseInt(qtyInput.value, 10) || 1;
    window.addToCartGlobal(product, qty, sizeSelect.value, custSelect.value, document.getElementById('prod-notes').value);
  });

  // Recently Viewed Render
  const recommendationsGrid = document.getElementById('recommendations-grid');
  
  // Prefer recently viewed, fallback to random
  let renderIds = recentViews.slice(1, 4); // skip index 0 (current)
  
  if (renderIds.length < 3) {
    const otherProducts = productsData.filter(p => p.id !== productId && !renderIds.includes(p.id));
    const shuffled = otherProducts.sort(() => 0.5 - Math.random());
    renderIds = [...renderIds, ...shuffled.slice(0, 3 - renderIds.length).map(p => p.id)];
  }

  renderIds.forEach(id => {
    const p = productsData.find(prod => prod.id === id);
    if(!p) return;

    const article = document.createElement('article');
    article.className = 'product';
    article.dataset.id = p.id;
    article.style.cursor = 'pointer';
    
    const priceText = p.price !== null ? `₹${p.price}` : 'Price on request';
    
    article.innerHTML = `
      <div class="imgwrap">
        <img src="${p.img}" alt="${p.title}" loading="lazy">
      </div>
      <div class="desc">
        <strong>${p.title}</strong>
        <span style="display:block; margin-top:0.5rem; font-weight:600; color:var(--accent);">${priceText}</span>
      </div>
    `;
    
    article.addEventListener('click', () => {
      window.location.href = `product.html?id=${p.id}`;
    });
    
    recommendationsGrid.appendChild(article);
  });
});