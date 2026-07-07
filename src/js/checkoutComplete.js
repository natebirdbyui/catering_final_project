import { clearCart } from "./cart.js";

console.log("checkoutComplete.js loaded");

export function initCheckoutComplete() {
    const form = document.getElementById("checkout-form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = document.createElement("div");
        message.classList.add("checkout-message");
        message.innerHTML = `
            <h2>🎉 Your Order is Complete!</h2>
            <p>
                Thank you for choosing Hope It Pans Out Catering.
                We will contact you soon with confirmation details.
            </p>
        `;
        form.replaceWith(message);
        // Clear cart after successful order
        clearCart();
    });
}