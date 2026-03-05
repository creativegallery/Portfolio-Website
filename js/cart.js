document.addEventListener('DOMContentLoaded', () => {
  // Inject Cart UI
  const cartHTML = `
    <button id="cart-toggle-btn" aria-label="Open Cart">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
      <span id="cart-count">0</span>
    </button>

    <div id="cart-drawer" class="glass-effect">
      <div class="cart-header">
        <h3>Your Cart</h3>
        <button id="cart-close-btn">&times;</button>
      </div>
      <div id="cart-items-container"></div>
      <div class="cart-footer">
        <div class="cart-total">Total: <span id="cart-total-price">₹0</span></div>
        <button id="cart-checkout-btn" class="hero-btn" style="width:100%; justify-content:center; padding: 12px;">Checkout on WhatsApp</button>
      </div>
    </div>
    <div id="cart-overlay"></div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', cartHTML);

  const cartToggle = document.getElementById('cart-toggle-btn');
  const cartClose = document.getElementById('cart-close-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartContainer = document.getElementById('cart-items-container');
  const cartCount = document.getElementById('cart-count');
  const cartTotalPrice = document.getElementById('cart-total-price');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  let cart = JSON.parse(localStorage.getItem('cg_cart')) || [];

  const saveCart = () => localStorage.setItem('cg_cart', JSON.stringify(cart));

  const toggleCart = () => {
    cartDrawer.classList.toggle('open');
    cartOverlay.classList.toggle('open');
    renderCart();
  };

  cartToggle.addEventListener('click', toggleCart);
  cartClose.addEventListener('click', toggleCart);
  cartOverlay.addEventListener('click', toggleCart);

  const renderCart = () => {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartContainer.innerHTML = '';
    let total = 0;
    let hasRequestPrice = false;

    if (cart.length === 0) {
      cartContainer.innerHTML = '<p style="text-align:center; color:var(--text-light); margin-top:2rem;">Your cart is empty.</p>';
      cartTotalPrice.textContent = '₹0';
      return;
    }

    cart.forEach((item, index) => {
      if (item.price) {
        total += item.price * item.quantity;
      } else {
        hasRequestPrice = true;
      }

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <div class="cart-item-details">
          <h4>${item.title}</h4>
          <p>Size: ${item.size} | Cust: ${item.cust}</p>
          <div class="cart-item-actions">
            <span>Qty: ${item.quantity}</span>
            <span>${item.price ? '₹' + (item.price * item.quantity) : 'Price on Request'}</span>
          </div>
        </div>
        <button class="cart-item-remove" data-index="${index}">&times;</button>
      `;
      cartContainer.appendChild(itemEl);
    });

    cartTotalPrice.textContent = hasRequestPrice ? `₹${total} + Request Items` : `₹${total}`;

    document.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const i = e.target.dataset.index;
        cart.splice(i, 1);
        saveCart();
        renderCart();
      });
    });
  };

  window.addToCartGlobal = (product, quantity, size, cust, notes) => {
    const cartItemId = `${product.id}-${size}-${cust}`;
    const existing = cart.find(i => i.cartItemId === cartItemId);
    
    if (existing) {
      existing.quantity += quantity;
      if (notes) existing.notes = existing.notes ? existing.notes + " | " + notes : notes;
    } else {
      cart.push({
        cartItemId,
        id: product.id,
        title: product.title,
        price: product.price,
        img: product.img,
        quantity,
        size,
        cust,
        notes
      });
    }
    
    saveCart();
    renderCart();
    toggleCart();
  };

  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    
    let message = `*NEW ORDER REQUEST*\n\n`;
    let grandTotal = 0;
    let requestPricePresent = false;

    cart.forEach((item, i) => {
      message += `*${i + 1}. ${item.title}*\n`;
      message += `- SKU: ${item.id}\n`;
      message += `- Size: ${item.size}\n`;
      message += `- Customization: ${item.cust}\n`;
      message += `- Qty: ${item.quantity}\n`;
      if (item.notes) message += `- Notes: ${item.notes}\n`;
      message += `- Subtotal: ${item.price ? '₹' + (item.price * item.quantity) : 'TBD'}\n\n`;
      
      if (item.price) grandTotal += (item.price * item.quantity);
      else requestPricePresent = true;
    });

    message += `*ESTIMATED TOTAL: ${requestPricePresent ? '₹' + grandTotal + ' + TBD items' : '₹' + grandTotal}*`;

    const waNumber = "919999999999"; 
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
  });

  renderCart();
});