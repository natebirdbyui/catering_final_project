// cart.js
import {
    calculateSubtotal,
    calculateTax,
    calculateTotal,
    calculateItemCount
} from "./checkoutProcess.mjs";
console.log("cart.js loaded");
const CART_KEY = "hipoc_cart";

export function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function saveCart(cart) {
    localStorage.setItem(
        CART_KEY,
        JSON.stringify(cart)
    );

    // Central calculation system
    const subtotal = calculateSubtotal(cart);
    const tax = calculateTax(subtotal);
    const total = calculateTotal(subtotal, tax);
    const count = calculateItemCount(cart);

    window.dispatchEvent(
        new CustomEvent("cart:update", {
            detail: {
                cart,
                totals: {
                    subtotal,
                    tax,
                    total,
                    count
                }
            }
        })
    );
}

// This function is called when the user submits the booking form.
//  It gathers all the information from the form, along with the current cart contents,
//  and saves it to localStorage as a booking object.
// Also lets you add or delete items from the cart, and updates the cart totals accordingly.
export function addToCart(item) {
    const cart = getCart();
    const existing = cart.find(i => i.id == item.id);

    if (existing) {
        existing.quantity = item.quantity;
        existing.guests_requested =
            item.guests_requested;
        existing.trays_needed =
            item.trays_needed;
        existing.servings_purchased =
            item.servings_purchased;
        existing.estimated_cost =
            item.estimated_cost;
    } else {
        cart.push({
            ...item
        });
    }

    saveCart(cart);
}

export function increaseItem(id) {
    const cart = getCart();
    const item = cart.find(
        i => i.id == id
    );
    if (item) {
        item.quantity++;
    }
    saveCart(cart);
}

export function decreaseItem(id) {
    let cart = getCart();
    cart = cart
        .map(item => {
            if (item.id == id) {
                item.quantity--;
            }
            return item;
        })
        .filter(item => item.quantity > 0);

    saveCart(cart);
}

export function updateQuantity(id, quantity) {
    const cart = getCart();
    const item = cart.find(i => i.id == id);

    if (!item) return;
    let amount = Number(quantity);

    // Protect against bad input
    if (!Number.isInteger(amount) || amount < 1) {
        amount = 1;
    }
    item.quantity = amount;
    saveCart(cart);
}

export function clearCart() {
    saveCart([]);
}
