// menuDisplay.js

import { addToCart } from "./cart.js";
import { flyToCart } from "./cartAnimation.js";

const BASE = import.meta.env.BASE_URL;
console.log("menuDisplay.js loaded");

export function displayMenuItems(menu) {
    const container = document.getElementById("menu-list");
    if (!container) return;
    container.innerHTML = "";

    menu.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("menu-card-vertical");

        // IMAGE
        const img = document.createElement("img");
        img.src = `${BASE}${item.image}`;
        img.alt = item.name;

        // TITLE
        const title = document.createElement("h3");
        title.textContent = item.name;

        // DESCRIPTION
        const desc = document.createElement("p");
        desc.classList.add("menu-desc");
        desc.textContent =
            item.description || "Delicious handcrafted menu item made fresh.";

        // SERVINGS
        const servings = document.createElement("p");
        servings.classList.add("menu-servings");
        servings.textContent =
            `Serves approx. ${item.servings_per_tray || "varies"} guests per tray`;

        // GET GUEST COUNT
        const guestInput = document.getElementById("guest-count");

        const guests = guestInput &&
            Number.isInteger(Number(guestInput.value)) &&
            Number(guestInput.value) > 0
                ? Number(guestInput.value)
                : 1;

        // CALCULATE TRAYS
        const traysNeeded = guests > 0
            ? Math.ceil(guests / item.servings_per_tray)
            : 1;

            // PRICE
        const price = document.createElement("p");
        price.classList.add("menu-price");
        price.textContent =
            `$${item.price_per_serving.toFixed(2)} per serving`;

        // ESTIMATE
       // CALCULATE ACTUAL SERVINGS PURCHASED
        const servingsPurchased =
            traysNeeded * item.servings_per_tray;

        // CALCULATE REAL COST
        const estimatedCost =
            servingsPurchased * item.price_per_serving;

        // ESTIMATE
        const estimate = document.createElement("p");
        estimate.classList.add("menu-estimate");
        estimate.textContent =
            `${traysNeeded} tray(s) | ${servingsPurchased} servings | Estimated: $${estimatedCost.toFixed(2)}`;

        // BUTTON
        const btn = document.createElement("button");
        btn.classList.add("add-to-cart");
        btn.dataset.id = item.id;
        btn.textContent = "Add to Cart";



        btn.addEventListener("click", () => {
            const cartItem = {

                ...item, //...spread existing item properties
                quantity: traysNeeded,
                guests_requested: guests,
                trays_needed: traysNeeded,
                servings_purchased:
                    traysNeeded * item.servings_per_tray,
                estimated_cost:
                    traysNeeded *
                    item.servings_per_tray *
                    item.price_per_serving
            };

            addToCart(cartItem);

            const cartIcon = document.querySelector(".cart-nav a");

            const card =
                btn.closest(".menu-card-vertical") ||
                btn.closest(".menu-card");

            if (cartIcon && card) {
                flyToCart(card, cartIcon);
            }
        });

        // BUILD CARD
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(servings);
        card.appendChild(price);
        card.appendChild(estimate);
        card.appendChild(btn);
        container.appendChild(card);
    });

}