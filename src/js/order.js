import { addToCart } from "./cart.js";
import { flyToCart } from "./cartAnimation.js";
console.log("order.js loaded");

export function initOrderSystem(menuItems) {
    const menuList = document.getElementById("menu-list");
    const cartTarget = document.getElementById("cart-target");

    if (!menuList) return;

    menuList.addEventListener("click", (e) => {
        if (!e.target.classList.contains("add-btn")) return;

        const itemEl = e.target.closest(".menu-item");
        const img = itemEl.querySelector("img");

        const id = Number(itemEl.dataset.id);
        const item = menuItems.find(m => m.id === id);

        addToCart(item);

        // 🔥 ANIMATION TRIGGER
        flyToCart(img, cartTarget);
    });
}