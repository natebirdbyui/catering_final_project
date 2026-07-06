// mobileCart.js
import { getCart, increaseItem, decreaseItem } from "./cart.js";
import { flyToCart } from "./cartAnimation.js";
console.log("mobileCart.js loaded");

export function initMobileCart() {
    const drawer = document.querySelector(".mobile-cart-drawer");
    const openBtn = document.getElementById("open-cart");
    const closeBtn = document.getElementById("close-cart");

    if (!drawer || !openBtn || !closeBtn) return;

    openBtn.addEventListener("click", () => {
        drawer.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
        drawer.classList.remove("open");
    });

    window.addEventListener("cart:update", (e) => {
        renderMobileCart(e.detail?.totals);
    });

    renderMobileCart();
}

function renderMobileCart(totals = {}) {
    const cart = getCart();

    const container = document.getElementById("mobile-cart-items");
    const taxEl = document.getElementById("mobile-tax");
    const totalEl = document.getElementById("mobile-total");
    const countEl = document.getElementById("mobile-count");

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = "<p>Your order is empty.</p>";

        if (taxEl) taxEl.textContent = "0.00";
        if (totalEl) totalEl.textContent = "0.00";
        if (countEl) countEl.textContent = "0";
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="mobile-cart-item">
            <span>${item.name}</span>

            <div class="mobile-qty-controls">
                <button class="minus" data-id="${item.id}">−</button>
                <span>${item.quantity}</span>
                <button class="plus" data-id="${item.id}">+</button>
            </div>

            <span>
                $${(item.price_per_serving * item.quantity).toFixed(2)}
            </span>
        </div>
    `).join("");

    container.querySelectorAll(".plus").forEach(btn => {
        btn.addEventListener("click", () => increaseItem(btn.dataset.id));
    });

    container.querySelectorAll(".minus").forEach(btn => {
        btn.addEventListener("click", () => decreaseItem(btn.dataset.id));
    });

    const { tax = 0, total = 0, count = 0 } = totals;

    if (taxEl) taxEl.textContent = tax.toFixed(2);
    if (totalEl) totalEl.textContent = total.toFixed(2);
    if (countEl) countEl.textContent = count;
}