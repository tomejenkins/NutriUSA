(() => {
  const body = document.body;

  const mobileToggle = document.querySelector('.js-toggle-mobile-menu');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => mobileMenu.classList.toggle('is-open'));
  }

  const drawer = document.querySelector('[data-cart-drawer]');
  const openButtons = document.querySelectorAll('.js-open-cart');
  const closeButtons = document.querySelectorAll('.js-close-cart');
  const openDrawer = () => { if (drawer) { drawer.classList.add('is-open'); drawer.setAttribute('aria-hidden', 'false'); body.style.overflow = 'hidden'; } };
  const closeDrawer = () => { if (drawer) { drawer.classList.remove('is-open'); drawer.setAttribute('aria-hidden', 'true'); body.style.overflow = ''; } };
  openButtons.forEach((b) => b.addEventListener('click', openDrawer));
  closeButtons.forEach((b) => b.addEventListener('click', closeDrawer));

  const setCartCount = (count) => document.querySelectorAll('[data-cart-count]').forEach((el) => { el.textContent = count; });
  const setCartTotal = (total) => {
    const target = document.querySelector('[data-cart-total]');
    if (target) target.textContent = Shopify.formatMoney(total);
  };

  document.querySelectorAll('form[data-ajax-add="true"]').forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const payload = new URLSearchParams();
      for (const [key, value] of formData.entries()) payload.append(key, value);
      const response = await fetch(`${window.Shopify.routes.root}cart/add.js`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' },
        body: payload.toString()
      });
      if (!response.ok) return;
      const cartResponse = await fetch(`${window.Shopify.routes.root}cart.js`);
      const cart = await cartResponse.json();
      setCartCount(cart.item_count);
      setCartTotal(cart.total_price);
      openDrawer();
    });
  });

  document.addEventListener('change', async (event) => {
    const input = event.target.closest('[data-line-update]');
    if (!input) return;
    const key = input.getAttribute('data-line-update');
    await fetch(`${window.Shopify.routes.root}cart/change.js`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ id: key, quantity: Number(input.value) })
    });
    window.location.reload();
  });

  document.addEventListener('click', async (event) => {
    const btn = event.target.closest('[data-line-remove]');
    if (!btn) return;
    const key = btn.getAttribute('data-line-remove');
    await fetch(`${window.Shopify.routes.root}cart/change.js`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ id: key, quantity: 0 })
    });
    window.location.reload();
  });

  const hero = document.querySelector('[data-hero-carousel]');
  if (hero) {
    const slides = hero.querySelectorAll('.hero-slide');
    let index = 0;
    const interval = Number(hero.getAttribute('data-interval')) || 5000;
    if (slides.length > 1) {
      setInterval(() => {
        slides[index].classList.remove('is-active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('is-active');
      }, interval);
    }
  }

  document.querySelectorAll('[data-product-root]').forEach((root) => {
    const selectEls = root.querySelectorAll('[data-option-select]');
    const variantIdInput = root.querySelector('[data-variant-id]');
    const jsonEl = root.querySelector('[data-product-json]');
    if (!selectEls.length || !variantIdInput || !jsonEl) return;

    const product = JSON.parse(jsonEl.textContent);
    const getCurrentVariant = () => {
      const selected = Array.from(selectEls).map((el) => el.value);
      return product.variants.find((variant) =>
        variant.options.every((value, idx) => value === selected[idx])
      );
    };
    selectEls.forEach((el) => el.addEventListener('change', () => {
      const variant = getCurrentVariant();
      if (!variant) return;
      variantIdInput.value = variant.id;
    }));
  });
})();
