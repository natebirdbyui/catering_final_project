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

    requestAnimationFrame(() => {
        renderCartPage();
    });

    window.addEventListener("cart:update", () => {
        renderCartPage();
    });
}

function renderCartPage() {
    const cart = getCart();

    const container =
        document.getElementById("cart-page-items");

    const subtotalEl =
        document.getElementById("page-subtotal");

    const guestDisplay =
        document.getElementById("cart-guest-count");

    const taxEl =
        document.getElementById("page-tax");

    const totalEl =
        document.getElementById("page-total");


    if (!container) {
        console.log("Cart container not ready");
        return;
    }


    if (guestDisplay) {
        const guests =
            Number(localStorage.getItem("hipoc_guest_count")) || 0;

        console.log("Cart guests:", guests);

        guestDisplay.textContent = guests;
    }

    if (!container) return;
    
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
                        item.servings_purchased *
                        item.price_per_serving
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