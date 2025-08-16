"use strict";

/**
 * Demo product data. In a real app this could come from an API.
 */
const PRODUCTS = [
  { id: 1, name: "Aurora Headphones", category: "Electronics", price: 129.99, rating: 4.6, image: "https://images.unsplash.com/photo-1518444777735-76bc5c0b1d9f?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Nimbus Bluetooth Speaker", category: "Electronics", price: 89.5, rating: 4.3, image: "https://images.unsplash.com/photo-1495305379050-64540d6ee964?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Cascade Coffee Maker", category: "Home", price: 59.99, rating: 4.1, image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Evergreen Plant Set", category: "Home", price: 24.99, rating: 4.8, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Trailblazer Running Shoes", category: "Sports", price: 74.0, rating: 4.2, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Serenity Yoga Mat", category: "Sports", price: 29.95, rating: 4.0, image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=800&auto=format&fit=crop" },
  { id: 7, name: "Starlight Dress", category: "Clothing", price: 49.99, rating: 4.4, image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800&auto=format&fit=crop" },
  { id: 8, name: "Voyager Jacket", category: "Clothing", price: 119.0, rating: 4.7, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop" },
  { id: 9, name: "PageTurner Novel", category: "Books", price: 14.5, rating: 3.9, image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop" },
  { id: 10, name: "Insightful Nonfiction", category: "Books", price: 21.0, rating: 4.5, image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop" },
  { id: 11, name: "PixelCraft Mouse", category: "Electronics", price: 39.99, rating: 4.1, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop" },
  { id: 12, name: "Comfy Cotton Tee", category: "Clothing", price: 19.99, rating: 4.0, image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop" },
  { id: 13, name: "Harmony Skincare Set", category: "Beauty", price: 32.0, rating: 4.3, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop" },
  { id: 14, name: "Glow Moisturizer", category: "Beauty", price: 18.75, rating: 4.6, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop" },
  { id: 15, name: "Timber Cutting Board", category: "Home", price: 27.5, rating: 4.2, image: "https://images.unsplash.com/photo-1519311965067-36d3e5f5bf6f?q=80&w=800&auto=format&fit=crop" },
  { id: 16, name: "Orbit Smartwatch", category: "Electronics", price: 199.99, rating: 4.8, image: "https://images.unsplash.com/photo-1517341720801-1b84fd5619ae?q=80&w=800&auto=format&fit=crop" },
  { id: 17, name: "Playtime Blocks", category: "Toys", price: 22.0, rating: 4.1, image: "https://images.unsplash.com/photo-1603575449299-0b6c4ba66356?q=80&w=800&auto=format&fit=crop" },
  { id: 18, name: "Explorer Drone", category: "Electronics", price: 349.0, rating: 4.9, image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop" },
  { id: 19, name: "Balance Bike", category: "Toys", price: 79.9, rating: 4.4, image: "https://images.unsplash.com/photo-1519751138087-5a45a3bcf7b9?q=80&w=800&auto=format&fit=crop" },
  { id: 20, name: "Cozy Throw Blanket", category: "Home", price: 34.0, rating: 4.5, image: "https://images.unsplash.com/photo-1499938971629-2fbc0bff1c89?q=80&w=800&auto=format&fit=crop" }
];

const dom = {
  categoryFilters: document.getElementById("category-filters"),
  minPriceInput: document.getElementById("min-price"),
  maxPriceInput: document.getElementById("max-price"),
  sortSelect: document.getElementById("sort-select"),
  productGrid: document.getElementById("product-grid"),
  resultsCount: document.getElementById("results-count"),
  resetBtn: document.getElementById("reset-filters"),
  searchInput: document.getElementById("search-input"),
  minRatingInput: document.getElementById("min-rating"),
  minRatingValue: document.getElementById("min-rating-value"),
  openFiltersBtn: document.getElementById("open-filters"),
  closeFiltersBtn: document.getElementById("close-filters"),
  categoryChips: document.getElementById("category-chips"),
  overlay: document.getElementById("overlay"),
  // Cart
  cartButton: document.getElementById("cart-button"),
  cartDrawer: document.getElementById("cart-drawer"),
  closeCartBtn: document.getElementById("close-cart"),
  cartItems: document.getElementById("cart-items"),
  cartTotal: document.getElementById("cart-total"),
  cartCount: document.getElementById("cart-count"),
  pageInfo: document.getElementById("page-info"),
  prevPage: document.getElementById("prev-page"),
  nextPage: document.getElementById("next-page"),
  pageSize: document.getElementById("page-size"),
};

const STORAGE_KEYS = {
  CART: "sanju_shop_cart_v1",
};

const state = {
  selectedCategories: new Set(),
  minPrice: null,
  maxPrice: null,
  sortBy: "rating-desc",
  searchQuery: "",
  minRating: 0,
  cart: new Map(), // productId -> quantity
  currentPage: 1,
  pageSize: 9,
};

// Currency
function formatPrice(value) {
  try {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 }).format(value);
  } catch (_) {
    return `₹${Number(value).toFixed(2)}`;
  }
}

function getAllCategories(products) {
  const set = new Set(products.map(p => p.category));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

function getPriceBounds(products) {
  let min = Infinity, max = -Infinity;
  for (const p of products) {
    if (p.price < min) min = p.price;
    if (p.price > max) max = p.price;
  }
  return { min: Math.floor(min), max: Math.ceil(max) };
}

// Render category checkboxes (sidebar)
function renderCategories(products) {
  const categories = getAllCategories(products);
  const fragment = document.createDocumentFragment();

  categories.forEach(category => {
    const count = products.filter(p => p.category === category).length;
    const wrapper = document.createElement("label");
    wrapper.className = "category-item";
    wrapper.innerHTML = `
      <input type="checkbox" value="${category}" aria-label="${category}" />
      <span class="category-label">
        <span>${category}</span>
        <span class="category-count">${count}</span>
      </span>
    `;
    const checkbox = wrapper.querySelector("input[type=checkbox]");
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) state.selectedCategories.add(category);
      else state.selectedCategories.delete(category);
      update();
      syncCategoryChipsActiveState();
    });
    fragment.appendChild(wrapper);
  });

  dom.categoryFilters.innerHTML = "";
  dom.categoryFilters.appendChild(fragment);
}

// Chips bar (top quick categories)
function renderCategoryChips(products) {
  const categories = getAllCategories(products);
  const frag = document.createDocumentFragment();
  categories.forEach(category => {
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.type = "button";
    chip.textContent = category;
    chip.addEventListener("click", () => {
      if (state.selectedCategories.has(category)) {
        state.selectedCategories.delete(category);
      } else {
        state.selectedCategories.add(category);
      }
      // reflect in checkboxes
      for (const input of dom.categoryFilters.querySelectorAll("input[type=checkbox]")) {
        if (input.value === category) input.checked = state.selectedCategories.has(category);
      }
      update();
      syncCategoryChipsActiveState();
    });
    frag.appendChild(chip);
  });
  dom.categoryChips.innerHTML = "";
  dom.categoryChips.appendChild(frag);
  syncCategoryChipsActiveState();
}

function syncCategoryChipsActiveState() {
  const chips = dom.categoryChips?.querySelectorAll(".chip");
  if (!chips) return;
  chips.forEach(chip => {
    if (state.selectedCategories.has(chip.textContent)) chip.classList.add("active");
    else chip.classList.remove("active");
  });
}

// Filters
function applyFilters(products) {
  const selected = state.selectedCategories;
  const min = state.minPrice ?? -Infinity;
  const max = state.maxPrice ?? Infinity;
  const query = state.searchQuery.trim().toLowerCase();
  const minRating = state.minRating ?? 0;

  return products.filter(p => {
    const inCategory = selected.size === 0 || selected.has(p.category);
    const inPrice = p.price >= min && p.price <= max;
    const inSearch = query === "" || p.name.toLowerCase().includes(query);
    const meetsRating = p.rating >= minRating;
    return inCategory && inPrice && inSearch && meetsRating;
  });
}

const SORTERS = {
  "rating-desc": (a, b) => b.rating - a.rating || a.name.localeCompare(b.name),
  "rating-asc": (a, b) => a.rating - b.rating || a.name.localeCompare(b.name),
  "price-asc": (a, b) => a.price - b.price || a.name.localeCompare(b.name),
  "price-desc": (a, b) => b.price - a.price || a.name.localeCompare(b.name),
  "name-asc": (a, b) => a.name.localeCompare(b.name),
  "name-desc": (a, b) => b.name.localeCompare(a.name),
};

function applySort(products) {
  const sorter = SORTERS[state.sortBy] ?? SORTERS["rating-desc"];
  return [...products].sort(sorter);
}

function renderProducts(products) {
  const grid = dom.productGrid;
  grid.innerHTML = "";

  if (!products.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No products match your filters.";
    grid.appendChild(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  for (const p of products) {
    const card = document.createElement("article");
    card.className = "product-card";
    const ratingStars = generateStars(p.rating);
    card.innerHTML = `
      <img class="product-image" src="${p.image}" alt="${p.name}" loading="lazy" />
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <div class="product-meta">
          <span class="category">${p.category}</span>
          <span class="price">${formatPrice(p.price)}</span>
        </div>
        <div class="product-meta" style="margin-top:6px">
          <span class="rating" aria-label="Rating ${p.rating} out of 5">${ratingStars}</span>
          <span class="rating-num" style="color:#9ca3af">${p.rating.toFixed(1)}</span>
        </div>
        <button class="add-to-cart" data-id="${p.id}" type="button">Add to Cart</button>
      </div>
    `;
    fragment.appendChild(card);
  }
  grid.appendChild(fragment);

  // Bind add-to-cart buttons
  grid.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-id"));
      addToCart(id, 1);
    });
  });
}

function generateStars(rating) {
  const rounded = Math.round(rating);
  let stars = "";
  for (let i = 1; i <= 5; i += 1) {
    stars += i <= rounded ? "★" : "☆";
  }
  return stars;
}

function updateResultsCount(count) {
  dom.resultsCount.textContent = String(count);
}

function paginate(items) {
  const totalItems = items.length;
  const pageSize = state.pageSize;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const current = Math.min(Math.max(1, state.currentPage), totalPages);
  const start = (current - 1) * pageSize;
  const pageItems = items.slice(start, start + pageSize);
  return { pageItems, totalPages, current, totalItems };
}

function renderPagination(meta) {
  if (!dom.pageInfo || !dom.prevPage || !dom.nextPage || !dom.pageSize) return;
  dom.pageInfo.textContent = `Page ${meta.current} of ${meta.totalPages}`;
  dom.prevPage.disabled = meta.current <= 1;
  dom.nextPage.disabled = meta.current >= meta.totalPages;
}

function attachControlHandlers(bounds) {
  dom.minPriceInput.value = String(bounds.min);
  dom.maxPriceInput.value = String(bounds.max);

  state.minPrice = bounds.min;
  state.maxPrice = bounds.max;

  dom.minPriceInput.addEventListener("input", () => {
    const val = Number(dom.minPriceInput.value);
    state.minPrice = Number.isFinite(val) ? val : null;
    update();
  });

  dom.maxPriceInput.addEventListener("input", () => {
    const val = Number(dom.maxPriceInput.value);
    state.maxPrice = Number.isFinite(val) ? val : null;
    update();
  });

  dom.sortSelect.addEventListener("change", () => {
    state.sortBy = dom.sortSelect.value;
    update();
  });

  dom.resetBtn.addEventListener("click", () => {
    state.selectedCategories.clear();
    state.minPrice = bounds.min;
    state.maxPrice = bounds.max;
    state.searchQuery = "";
    state.minRating = 0;
    state.currentPage = 1;

    dom.minPriceInput.value = String(bounds.min);
    dom.maxPriceInput.value = String(bounds.max);
    dom.searchInput.value = "";
    dom.minRatingInput.value = String(state.minRating);
    dom.minRatingValue.textContent = state.minRating.toFixed(1);

    for (const input of dom.categoryFilters.querySelectorAll("input[type=checkbox]")) {
      input.checked = false;
    }
    syncCategoryChipsActiveState();
    update();
  });

  // Search
  dom.searchInput?.addEventListener("input", () => {
    state.searchQuery = dom.searchInput.value;
    update();
  });

  // Min rating
  if (dom.minRatingInput && dom.minRatingValue) {
    dom.minRatingInput.value = String(state.minRating);
    dom.minRatingValue.textContent = state.minRating.toFixed(1);
    dom.minRatingInput.addEventListener("input", () => {
      const val = Number(dom.minRatingInput.value);
      state.minRating = Number.isFinite(val) ? val : 0;
      dom.minRatingValue.textContent = state.minRating.toFixed(1);
      update();
    });
  }

  // Filters drawer (mobile)
  dom.openFiltersBtn?.addEventListener("click", openFilters);
  dom.closeFiltersBtn?.addEventListener("click", closeFilters);

  // Cart drawer
  dom.cartButton?.addEventListener("click", openCart);
  dom.closeCartBtn?.addEventListener("click", closeCart);

  dom.overlay?.addEventListener("click", () => {
    closeFilters();
    closeCart();
  });
}

function update() {
  const filtered = applyFilters(PRODUCTS);
  const sorted = applySort(filtered);
  const { pageItems, totalPages, current, totalItems } = paginate(sorted);
  renderProducts(pageItems);
  updateResultsCount(totalItems);
  renderPagination({ totalPages, current, totalItems });
}

function openFilters() {
  document.querySelector(".filters")?.classList.add("is-open");
  showOverlay();
}
function closeFilters() {
  document.querySelector(".filters")?.classList.remove("is-open");
  hideOverlayIfNoDrawer();
}

function showOverlay() {
  dom.overlay?.classList.add("is-visible");
}
function hideOverlayIfNoDrawer() {
  const isFiltersOpen = document.querySelector(".filters")?.classList.contains("is-open");
  const isCartOpen = dom.cartDrawer?.classList.contains("is-open");
  if (!isFiltersOpen && !isCartOpen) {
    dom.overlay?.classList.remove("is-visible");
  }
}

// Cart logic
function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CART);
    if (!raw) return new Map();
    const obj = JSON.parse(raw);
    const map = new Map();
    Object.entries(obj).forEach(([id, qty]) => {
      const numId = Number(id);
      const numQty = Number(qty);
      if (Number.isFinite(numId) && Number.isFinite(numQty)) map.set(numId, numQty);
    });
    return map;
  } catch {
    return new Map();
  }
}

function saveCart() {
  const obj = Object.fromEntries(state.cart.entries());
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(obj));
}

function addToCart(productId, quantity) {
  const current = state.cart.get(productId) ?? 0;
  state.cart.set(productId, current + quantity);
  saveCart();
  renderCart();
  updateCartBadge();
  openCart();
}

function setCartQuantity(productId, quantity) {
  if (quantity <= 0) {
    state.cart.delete(productId);
  } else {
    state.cart.set(productId, quantity);
  }
  saveCart();
  renderCart();
  updateCartBadge();
}

function removeFromCart(productId) {
  state.cart.delete(productId);
  saveCart();
  renderCart();
  updateCartBadge();
}

function getCartCount() {
  let count = 0;
  for (const qty of state.cart.values()) count += qty;
  return count;
}

function getCartTotal() {
  let total = 0;
  for (const [id, qty] of state.cart.entries()) {
    const product = PRODUCTS.find(p => p.id === id);
    if (product) total += product.price * qty;
  }
  return total;
}

function renderCart() {
  const container = dom.cartItems;
  container.innerHTML = "";

  if (state.cart.size === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Your cart is empty.";
    container.appendChild(empty);
    dom.cartTotal.textContent = formatPrice(0);
    return;
  }

  const frag = document.createDocumentFragment();
  for (const [id, qty] of state.cart.entries()) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) continue;
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div>
        <div class="ci-title">${product.name}</div>
        <div class="ci-price">${formatPrice(product.price)}</div>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <div class="qty">
          <button aria-label="Decrease" data-action="dec" data-id="${id}">−</button>
          <input type="number" min="1" value="${qty}" data-action="input" data-id="${id}" />
          <button aria-label="Increase" data-action="inc" data-id="${id}">+</button>
        </div>
        <button class="remove-btn" data-action="remove" data-id="${id}">Remove</button>
      </div>
    `;
    frag.appendChild(row);
  }
  container.appendChild(frag);

  // Bind qty and remove handlers
  container.querySelectorAll("button[data-action], input[data-action]").forEach(el => {
    const id = Number(el.getAttribute("data-id"));
    const action = el.getAttribute("data-action");
    if (action === "dec") {
      el.addEventListener("click", () => {
        const current = state.cart.get(id) ?? 1;
        setCartQuantity(id, current - 1);
      });
    } else if (action === "inc") {
      el.addEventListener("click", () => {
        const current = state.cart.get(id) ?? 0;
        setCartQuantity(id, current + 1);
      });
    } else if (action === "input") {
      el.addEventListener("change", () => {
        const val = Number(el.value);
        setCartQuantity(id, Number.isFinite(val) ? Math.max(1, Math.floor(val)) : 1);
      });
    } else if (action === "remove") {
      el.addEventListener("click", () => removeFromCart(id));
    }
  });

  dom.cartTotal.textContent = formatPrice(getCartTotal());
}

function updateCartBadge() {
  dom.cartCount.textContent = String(getCartCount());
}

function openCart() {
  dom.cartDrawer?.classList.add("is-open");
  dom.cartDrawer?.setAttribute("aria-hidden", "false");
  showOverlay();
}
function closeCart() {
  dom.cartDrawer?.classList.remove("is-open");
  dom.cartDrawer?.setAttribute("aria-hidden", "true");
  hideOverlayIfNoDrawer();
}

function attachPaginationHandlers() {
  if (dom.pageSize) {
    dom.pageSize.value = String(state.pageSize);
    dom.pageSize.addEventListener("change", () => {
      const val = Number(dom.pageSize.value);
      if (Number.isFinite(val) && val > 0) {
        state.pageSize = val;
        state.currentPage = 1;
        update();
      }
    });
  }
  dom.prevPage?.addEventListener("click", () => {
    state.currentPage = Math.max(1, state.currentPage - 1);
    update();
  });
  dom.nextPage?.addEventListener("click", () => {
    state.currentPage = state.currentPage + 1;
    update();
  });
}

// Reset page on filter-changing actions
function wrapAndReset(handler) {
  return function(...args) {
    state.currentPage = 1;
    return handler.apply(this, args);
  };
}

// Apply wrappers to relevant event bindings inside attachControlHandlers
// We cannot easily intercept existing listeners, but we can add new ones that reset state
function attachResetOnChange() {
  dom.searchInput?.addEventListener("input", () => { state.currentPage = 1; });
  dom.minRatingInput?.addEventListener("input", () => { state.currentPage = 1; });
  dom.minPriceInput?.addEventListener("input", () => { state.currentPage = 1; });
  dom.maxPriceInput?.addEventListener("input", () => { state.currentPage = 1; });
  dom.sortSelect?.addEventListener("change", () => { state.currentPage = 1; });
  // Category toggles (delegate)
  dom.categoryFilters?.addEventListener("change", (e) => {
    if (e.target && e.target.matches('input[type="checkbox"]')) {
      state.currentPage = 1;
    }
  });
}

function init() {
  renderCategories(PRODUCTS);
  renderCategoryChips(PRODUCTS);

  const bounds = getPriceBounds(PRODUCTS);
  attachControlHandlers(bounds);

  // Load cart
  state.cart = loadCart();
  renderCart();
  updateCartBadge();

  // Pagination handlers and reset hooks
  attachPaginationHandlers();
  attachResetOnChange();

  update();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
} 