// booking.js

import { getCart } from "./cart.js";
import {
    calculateSubtotal,
    calculateTax,
    calculateTotal,
    calculateItemCount
} from "./checkoutProcess.mjs";

console.log("booking.js loaded");

export function initBookingPage() {

    const cart = getCart();

    renderBookingItems(cart);
    renderBookingSummary(cart);

}
function renderBookingItems(cart) {

    const container = document.getElementById("booking-items");

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML =
            "<p>No catering items selected.</p>";
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="booking-item">
            <h3>${item.name}</h3>
            <p>
                Guests Requested:
                ${item.guests_requested}
            </p>
            <p>
                Trays Ordered:
                ${item.quantity}
            </p>
            <p>
                Servings Purchased:
                ${item.quantity * item.servings_per_tray}
            </p>
            <p>
                Cost:
                $${(
                    item.quantity *
                    item.servings_per_tray *
                    item.price_per_serving
                ).toFixed(2)}
            </p>
        </div>
    `).join("");
}
function renderBookingSummary(cart) {

    const guestsEl = document.getElementById("booking-guests");

    const itemCount = document.getElementById("item-count");
    const subtotalEl = document.getElementById("subtotal");
    const taxEl = document.getElementById("tax");
    const totalEl = document.getElementById("total");

    const subtotal = calculateSubtotal(cart);
    const tax = calculateTax(subtotal);
    const total = calculateTotal(subtotal, tax);

    const count = calculateItemCount(cart);

    if (itemCount)
        itemCount.textContent = count;

    if (subtotalEl)
        subtotalEl.textContent = subtotal.toFixed(2);

    if (taxEl)
        taxEl.textContent = tax.toFixed(2);

    if (totalEl)
        totalEl.textContent = total.toFixed(2);

    if (guestsEl && cart.length > 0) {
        guestsEl.textContent =
            cart[0].guests_requested;
    }

}