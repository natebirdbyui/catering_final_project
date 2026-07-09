//cartPage.js
import { 
    getCart,
    increaseItem,
    decreaseItem
} from "./cart.js";

import {
    calculateSubtotal,
    calculateTax,
    calculateTotal
} from "./checkoutProcess.mjs";

console.log("cartPage.js loaded");

export function initCartPage() {
    renderCartPage();

    window.addEventListener("cart:update", () => {
        renderCartPage();
    });
}

function renderCartPage() {
    const cart = getCart();
    const container = document.getElementById("cart-page-items");
    const subtotalEl = document.getElementById("page-subtotal");
    const guestDisplay = document.getElementById("guest-count");
    const taxEl = document.getElementById("page-tax");
    const totalEl = document.getElementById("page-total");

    if (!container) return;

    if (guestDisplay && cart.length > 0) {
        guestDisplay.textContent =
            cart[0].guests_requested || 0;
    }
    
    // EMPTY CART
    if (cart.length === 0) {
        container.innerHTML = `
            <p>Your cart is empty.</p>
        `;
    } else {
        container.innerHTML = cart.map(item => `
            <div class="cart-page-item">
                <span>
                    ${item.name}
                </span>
                <div class="qty-controls">
                    <button 
                        class="minus"
                        data-id="${item.id}">
                        −
                    </button>
                    <span>
                        ${item.quantity}
                    </span>
                    <button 
                        class="plus"
                        data-id="${item.id}">
                        +
                    </button>
                </div>
                <span>
                    $${(
                        item.price_per_serving *
                        item.quantity
                    ).toFixed(2)}
                </span>
            </div>
        `).join("");

        // PLUS BUTTONS
        container.querySelectorAll(".plus")
        .forEach(btn => {
            btn.addEventListener("click", () => {
                increaseItem(btn.dataset.id);
            });
        });

        // MINUS BUTTONS
        container.querySelectorAll(".minus")
        .forEach(btn => {
            btn.addEventListener("click", () => {
                decreaseItem(btn.dataset.id);
            });
        });
    }

    // ALWAYS CALCULATE SUMMARY ON PAGE LOAD
    const subtotal = calculateSubtotal(cart);
    const tax = calculateTax(subtotal);
    const total = calculateTotal(
        subtotal,
        tax
    );

    if (subtotalEl)
        subtotalEl.textContent = subtotal.toFixed(2);
    if (taxEl)
        taxEl.textContent = tax.toFixed(2);
    if (totalEl)
        totalEl.textContent = total.toFixed(2);
}