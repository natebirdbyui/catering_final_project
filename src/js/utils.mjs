// utils.mjs
export function loadNav() {   
    const BASE = import.meta.env.BASE_URL;
    return `
        <div class="logo">
            <img src="${BASE}images/logo_and_banner/rsz_1logo.webp" alt="Logo">
        </div>
        <nav class="main-nav">
            <a href="${BASE}">Home</a>
            <a href="${BASE}menu/menu.html">Menu</a>
            <a href="${BASE}about_us/about_us.html">About</a>
            <a href="${BASE}booking/booking.html">Booking</a>
            <a href="${BASE}contact_us/contact_us.html">Contact</a>
        </nav>

        <nav class="cart-nav">
            <a href="${BASE}cart/cart.html">🛒</a>
        </nav>
    `;
}