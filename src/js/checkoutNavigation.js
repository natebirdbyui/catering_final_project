console.log("checkoutNavigation.js loaded");

export function initCheckoutNavigation() {

    // Menu page button -> cart page
    const checkoutBtn = document.getElementById("checkout-btn");

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            window.location.href = "../cart/cart.html";
        });
    }


    // Cart page button -> booking page
    const pageCheckoutBtn = document.getElementById("page-checkout-btn");

    if (pageCheckoutBtn) {
        pageCheckoutBtn.addEventListener("click", () => {
            window.location.href = "../booking/booking.html";
        });
    }

}