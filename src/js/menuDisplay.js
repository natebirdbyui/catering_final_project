//menuDisplay.js
const BASE = import.meta.env.BASE_URL;

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

        // PRICE
        const price = document.createElement("p");
        price.classList.add("menu-price");
        price.textContent =
            `$${item.price_per_serving.toFixed(2)} per serving`;

        // BUTTON
        const btn = document.createElement("button");
        btn.classList.add("add-to-cart");
        btn.dataset.id = item.id;
        btn.textContent = "Add to Cart";

        // BUILD CARD (STACKED)
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(servings);
        card.appendChild(price);
        card.appendChild(btn);

        container.appendChild(card);
    });
}