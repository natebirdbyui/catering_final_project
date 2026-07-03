export function flyToCart(startEl, cartEl) {
    if (!startEl || !cartEl) return;

    const startRect = startEl.getBoundingClientRect();
    const endRect = cartEl.getBoundingClientRect();

    cartEl.classList.add("cart-pulse");
    setTimeout(() => cartEl.classList.remove("cart-pulse"), 300);

    // Create flying element
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

function animate(el) {
    el.classList.remove("pop");
    void el.offsetWidth; // restart animation
    el.classList.add("pop");
}