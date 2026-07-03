//cart.js

console.log("cart.js loaded");

const CART_KEY = "hipoc_cart";
const bar = document.querySelector(".checkout-bar");

export function toggleCheckoutBar(count) {
    if (!bar) return;

    bar.classList.toggle("show", count > 0);
    if (count > 0) {
        bar.classList.add("bump");
        setTimeout(() => bar.classList.remove("bump"), 250);
    }
}

export function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));

    // 🔥 global update event (THIS powers live UI)
    window.dispatchEvent(new CustomEvent("cart:update", {
        detail: { cart }
    }));
}

export function addToCart(item) {
    const cart = getCart();
    const existing = cart.find(i => i.id === item.id);
    toggleCheckoutBar(cart.length);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    saveCart(cart);
}

export function increaseItem(id) {
    const cart = getCart();
    const item = cart.find(i => i.id === id);
    if (item) item.quantity++;

    saveCart(cart);
}

export function decreaseItem(id) {
    let cart = getCart();

    cart = cart.map(i => {
        if (i.id === id) i.quantity--;
        return i;
    }).filter(i => i.quantity > 0);

    saveCart(cart);
}

export function clearCart() {
    saveCart([]);
}

export function flyToCart(startEl, cartEl) {
    if (!startEl || !cartEl) return;

    const startRect = startEl.getBoundingClientRect();
    const endRect = cartEl.getBoundingClientRect();

    const flyer = startEl.cloneNode(true);

    flyer.style.position = "fixed";
    flyer.style.left = startRect.left + "px";
    flyer.style.top = startRect.top + "px";
    flyer.style.width = startRect.width + "px";
    flyer.style.height = startRect.height + "px";
    flyer.style.transition = "all 0.7s ease";
    flyer.style.zIndex = "9999";
    flyer.style.pointerEvents = "none";
    flyer.style.opacity = "0.9";

    document.body.appendChild(flyer);

    requestAnimationFrame(() => {
        flyer.style.left = endRect.left + "px";
        flyer.style.top = endRect.top + "px";
        flyer.style.transform = "scale(0.2)";
        flyer.style.opacity = "0";
    });

    setTimeout(() => {
        flyer.remove();
    }, 750);
}