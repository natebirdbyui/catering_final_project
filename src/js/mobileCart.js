import { getCart } from "./cart.js";

export function initMobileCart() {
    const drawer = document.querySelector(".mobile-cart-drawer");
    const openBtn = document.getElementById("open-cart");
    const closeBtn = document.getElementById("close-cart");

    openBtn?.addEventListener("click", () => {
        drawer.classList.add("open");
        renderMobileCart();
    });

    closeBtn?.addEventListener("click", () => {
        drawer.classList.remove("open");
    });

    window.addEventListener("cart:update", renderMobileCart);
}

function renderMobileCart() {
    const cart = getCart();

    const container = document.getElementById("mobile-cart-items");
    const totalEl = document.getElementById("mobile-total");

    if (!container) return;

    container.innerHTML = cart.map(i => `
        <div>
            ${i.name} × ${i.quantity}
        </div>
    `).join('');

    totalEl.textContent = cart.reduce(
        (sum, i) => sum + i.price_per_serving * i.quantity,
        0
    ).toFixed(2);
}