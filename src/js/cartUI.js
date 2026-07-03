//cartUI.js

import {getCart, increaseItem, decreaseItem} from "./cart.js";


export function initCartSidebar() {
    renderCart();

    // re-render every time cart changes (simple approach)
    window.addEventListener("cart:update", renderCart);
}

export function renderCart() {
    const cart = getCart();

    const container = document.getElementById("cart-sidebar-items");
    const subtotalEl = document.getElementById("cart-subtotal");

    if (!container) return;

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <h4>${item.name}</h4>

            <p>$${(item.price_per_serving * item.quantity).toFixed(2)}</p>

            <div class="qty-controls">
                <button data-id="${item.id}" class="minus">−</button>
                <span>${item.quantity}</span>
                <button data-id="${item.id}" class="plus">+</button>
            </div>
        </div>
    `).join('');

    const subtotal = cart.reduce(
        (sum, i) => sum + i.price_per_serving * i.quantity,
        0
    );

    subtotalEl.textContent = subtotal.toFixed(2);

    bindCartButtons();
}

function bindCartButtons() {
    document.querySelectorAll(".plus").forEach(btn => {
        btn.onclick = () => increaseItem(Number(btn.dataset.id));
    });

    document.querySelectorAll(".minus").forEach(btn => {
        btn.onclick = () => decreaseItem(Number(btn.dataset.id));
    });
}
