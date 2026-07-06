// checkout.js
import { getCart, clearCart } from "./cart.js";
import {
    calculateSubtotal,
    calculateTax,
    calculateTotal
} from "./checkoutProcess.mjs";

console.log("checkout.js loaded");

export function initCheckout() { 
    const container = document.getElementById("checkout-items");
    const subtotalEl = document.getElementById("subtotal");
    const taxEl = document.getElementById("tax");
    const totalEl = document.getElementById("total");
    const btn = document.getElementById("checkout-btn");

    if (!container) return;

    function render() {
        const cart = getCart();
        container.innerHTML = cart.map(item => `
            <div class="checkout-item">
                <h3>${item.name}</h3>
                <p>
                    $${item.price_per_serving} × ${item.quantity}
                </p>
                <p>
                    Subtotal: $${(item.price_per_serving * item.quantity).toFixed(2)}
                </p>
                <button data-id="${item.id}" class="minus">−</button>
                <button data-id="${item.id}" class="plus">+</button>
            </div>
        `).join('');

        const subtotal = calculateSubtotal(cart);
        const tax = calculateTax(subtotal);
        const total = calculateTotal(subtotal, tax);

        subtotalEl.textContent = subtotal.toFixed(2);
        taxEl.textContent = tax.toFixed(2);
        totalEl.textContent = total.toFixed(2);
    }

    btn?.addEventListener("click", () => {
        alert("Order placed!");
        clearCart();
        window.location.href = "/";
    });
    render();
}