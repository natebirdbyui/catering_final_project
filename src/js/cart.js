// cart.js

import {
    calculateSubtotal,
    calculateTax,
    calculateTotal,
    calculateItemCount
} from "./checkoutProcess.mjs";

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



export function addToCart(item) {

    const cart = getCart();

    const existing = cart.find(
        i => i.id == item.id
    );


    if (existing) {
        existing.quantity++;
    } 
    else {
        cart.push({
            ...item,
            quantity: 1
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



export function clearCart() {

    saveCart([]);

}