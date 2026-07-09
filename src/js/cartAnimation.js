//cartAnimation.js
// Thought it will be nice with some fun aninmation to keep the user engaged.
//  When they click "Add to Cart", the item image will fly to the cart icon in the header, 
// and the cart icon will do a little pulse animation to show that it was updated. 
// This is done by cloning the item image, animating it to the cart position, and then removing it from the DOM.
//  The cart icon animation is triggered by adding and removing a CSS class that defines a keyframe animation.
//  This adds a nice touch of interactivity and feedback for the user when they add items to their cart.
console.log("cartAnimation.js loaded");
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