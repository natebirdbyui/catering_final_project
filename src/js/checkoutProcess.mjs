//checkoutProcess.mjs
export function calculateSubtotal(cart) {
    return cart.reduce((sum, item) => {
        return sum + (item.price_per_serving * item.quantity);
    }, 0);
}

export function calculateTax(subtotal, rate = 0.06) {
    return subtotal * rate;
}

export function calculateTotal(subtotal, tax) {
    return subtotal + tax;
}

export function calculateItemCount(cart) {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}