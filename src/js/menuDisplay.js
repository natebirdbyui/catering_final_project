//menuDisplay.js
import { addToCart, flyToCart } from "./cart.js";

export function displayMenuItems(menuItems) {
    const menuContainer = document.getElementById("menu-list");
    if (!menuContainer) return;

    menuContainer.innerHTML = menuItems.map(item => `
        <div class="menu-item" data-id="${item.id}">
            <h2>${item.name}</h2>
            <img src="${item.image}" alt="${item.name}">
            <p>${item.description}</p>
            <p>Servings: ${item.servings}</p>
            <p>$${item.price_per_serving.toFixed(2)}</p>

            <button class="add-to-cart" data-id="${item.id}">
                Add to Cart
            </button>
        </div>
    `).join("");

    bindMenuButtons(menuItems);
}

function bindMenuButtons(menuItems) {
    const cartIcon = document.querySelector(".cart-nav a");

    document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = Number(btn.dataset.id);
            const item = menuItems.find(i => i.id === id);
            if (!item) return;

            addToCart(item);

            const card = btn.closest(".menu-item");
            flyToCart(card, cartIcon);
        });
    });
}