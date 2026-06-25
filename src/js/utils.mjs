// utils.mjs
export function loadNav() {   
    return `
        <div class="logo">
            <img src="/images/logo_and_banner/rsz_1logo.webp" alt="Logo">
        </div>
        <nav class="main-nav">
            <a href="index.html">Home</a>
            <a href="menu/menu.html">Menu</a>
            <a href="about_us/about_us.html">About</a>
            <a href="booking/booking.html">Booking</a>
            <a href="contact_us/contact_us.html">Contact</a>
        </nav>

        <nav class="cart-nav">
            <a href="cart/cart.html">🛒</a>
        </nav>
    `;
}