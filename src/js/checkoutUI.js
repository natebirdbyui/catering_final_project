// checkoutUI.js
import { getCart } from "./cart.js";
import {
    calculateSubtotal,
    calculateTax,
    calculateTotal,
    calculateItemCount
} from "./checkoutProcess.mjs";
console.log("checkoutUI.js loaded");
export function initCheckoutBar() {
    render();

    window.addEventListener("cart:update", render);
}

function animate(el) {
    if (!el) return;

    el.classList.remove("pop");
    void el.offsetWidth;
    el.classList.add("pop");
}

export function render() {
    const cart = getCart();

    const itemCount = document.getElementById("item-count");
    const subtotalEl = document.getElementById("subtotal");
    const taxEl = document.getElementById("tax");
    const totalEl = document.getElementById("total");

    if (!subtotalEl) return;

    const subtotal = calculateSubtotal(cart);
    const tax = calculateTax(subtotal);
    const total = calculateTotal(subtotal, tax);
    const count = calculateItemCount(cart);

    if (itemCount) itemCount.textContent = count;
    subtotalEl.textContent = subtotal.toFixed(2);
    taxEl.textContent = tax.toFixed(2);
    totalEl.textContent = total.toFixed(2);

    animate(subtotalEl);
    animate(taxEl);
    animate(totalEl);
}