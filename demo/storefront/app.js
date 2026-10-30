document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const cartCount = document.querySelector(".cart-count");
  const toast = document.querySelector(".toast");
  const searchPanel = document.querySelector(".search-panel");
  const bagPanel = document.querySelector(".bag-panel");
  const bagItems = document.querySelector(".bag-items");
  const bagTotal = document.querySelector(".bag-total");
  const checkoutButton = document.querySelector(".checkout-button");
  const products = [...document.querySelectorAll(".add-button")].map((button) => ({
    name: button.dataset.product,
    price: Number(button.dataset.price)
  }));
  let bag = JSON.parse(window.localStorage.getItem("northstar-bag") || "[]");
  let toastTimer;

  const formatPrice = (price) => `₹${new Intl.NumberFormat("en-IN").format(price)}`;

  function announce(message) {
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("visible");
    toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2400);
  }

  function saveBag() {
    window.localStorage.setItem("northstar-bag", JSON.stringify(bag));
  }

  function renderBag() {
    const groupedItems = bag.reduce((items, product) => {
      const current = items.find((item) => item.name === product.name);
      if (current) {
        current.quantity += 1;
      } else {
        items.push({ ...product, quantity: 1 });
      }
      return items;
    }, []);
    const total = bag.reduce((sum, product) => sum + product.price, 0);

    cartCount.textContent = String(bag.length);
    cartCount.setAttribute("aria-label", `${bag.length} ${bag.length === 1 ? "item" : "items"}`);
    bagTotal.textContent = formatPrice(total);
    bagItems.innerHTML = groupedItems.length
      ? groupedItems.map((item) => `
          <div class="bag-item">
            <div><strong>${item.name}</strong><span>Quantity ${item.quantity}</span></div>
            <span>${formatPrice(item.price * item.quantity)}</span>
            <button type="button" data-remove-product="${item.name}" aria-label="Remove one ${item.name}"><i data-lucide="trash-2" aria-hidden="true"></i></button>
          </div>
        `).join("")
      : '<p class="bag-empty">Your bag is ready for something considered.</p>';

    const orderLines = groupedItems.map((item) => `${item.name} x${item.quantity}`).join(", ");
    checkoutButton.href = `mailto:visqora@gmail.com?subject=${encodeURIComponent("Northstar order enquiry")}&body=${encodeURIComponent(`Hello, I would like to enquire about: ${orderLines || "Northstar products"}.`)}`;
    if (window.lucide) window.lucide.createIcons();
  }

  document.querySelectorAll(".add-button").forEach((button) => {
    button.addEventListener("click", () => {
      bag.push({ name: button.dataset.product, price: Number(button.dataset.price) });
      saveBag();
      renderBag();
      announce(`${button.dataset.product} added to your bag.`);
    });
  });

  document.querySelector(".cart-button").addEventListener("click", () => {
    renderBag();
    bagPanel.showModal();
  });

  bagItems.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-product]");
    if (!removeButton) return;
    const productIndex = bag.findIndex((item) => item.name === removeButton.dataset.removeProduct);
    if (productIndex !== -1) bag.splice(productIndex, 1);
    saveBag();
    renderBag();
  });

  document.querySelector(".bag-close").addEventListener("click", () => bagPanel.close());

  const searchInput = searchPanel.querySelector("input");
  const searchResults = searchPanel.querySelector(".search-results");
  document.querySelector(".search-button").addEventListener("click", () => {
    searchPanel.showModal();
    searchInput.focus();
  });
  document.querySelector(".search-close").addEventListener("click", () => searchPanel.close());
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    const matches = products.filter((product) => product.name.toLowerCase().includes(query));
    searchResults.innerHTML = query
      ? matches.map((product) => `<a href="#collection" data-search-result>${product.name} · ${formatPrice(product.price)}</a>`).join("") || "No pieces found. Try shirt, trousers, or jacket."
      : "Popular: linen shirt, everyday trousers, utility jacket";
  });
  searchResults.addEventListener("click", (event) => {
    if (event.target.closest("[data-search-result]")) searchPanel.close();
  });

  [searchPanel, bagPanel].forEach((panel) => {
    panel.addEventListener("click", (event) => {
      if (event.target === panel) panel.close();
    });
  });

  document.querySelector(".newsletter-form").addEventListener("submit", (event) => {
    event.preventDefault();
    announce("You’re on the Northstar list.");
    event.currentTarget.reset();
  });

  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.scrollTarget);
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      target.focus({ preventScroll: true });
    });
  });

  renderBag();
});