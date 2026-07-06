// cartUI.js

import { getCart, increaseItem, decreaseItem, updateQuantity } from "./cart.js";

console.log("cartUI.js loaded");

export function initCartSidebar() {

    window.addEventListener("cart:update", (e) => {
        renderCart(e.detail?.totals);
    });

    renderCart({
        subtotal: 0,
        tax: 0,
        total: 0
    });
}

function renderCart(totals = {}) {
    const cart = getCart();
    const container = document.getElementById("cart-sidebar-items");
    const subtotalEl = document.getElementById("cart-subtotal");
    const taxEl = document.getElementById("cart-tax");
    const totalEl = document.getElementById("cart-total");
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <p>Your order is empty.</p>
        `;

        if (subtotalEl) subtotalEl.textContent = "0.00";
        if (taxEl) taxEl.textContent = "0.00";
        if (totalEl) totalEl.textContent = "0.00";
        return;
    }



    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <div class="qty-controls">
                <button class="minus" data-id="${item.id}">
                    −
                </button>              
                <span>${item.quantity}</span>
                <input 
                    class="cart-quantity"
                    type="number"
                    min="1"
                    step="1"
                    value="${item.quantity}"
                    data-id="${item.id}">
                <button class="plus" data-id="${item.id}">
                    +
                </button>
            </div>
            <span>
                $${(item.price_per_serving * item.quantity).toFixed(2)}
            </span>
        </div>
    `).join("");

    container.querySelectorAll(".plus").forEach(btn => {
        btn.addEventListener("click", () => {
            increaseItem(btn.dataset.id);
        });
    });

    container.querySelectorAll(".minus").forEach(btn => {
        btn.addEventListener("click", () => {
            decreaseItem(btn.dataset.id);
        });
    });

    const subtotal = totals.subtotal ?? 0;
    const tax = totals.tax ?? 0;
    const total = totals.total ?? 0;

    // DIRECT QUANTITY INPUT
    container.querySelectorAll(".cart-quantity")
    .forEach(input => {
        input.addEventListener("change", () => {
            updateQuantity(
                input.dataset.id,
                input.value
            );
        });
    });

    if (subtotalEl)
        subtotalEl.textContent = subtotal.toFixed(2);

    if (taxEl)
        taxEl.textContent = tax.toFixed(2);

    if (totalEl)
        totalEl.textContent = total.toFixed(2);
}