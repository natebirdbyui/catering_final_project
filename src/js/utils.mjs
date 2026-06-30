// utils.mjs
export function loadNav() {   
    const BASE = import.meta.env.BASE_URL;
    return `
        <div class="header-top">
            <button class="nav-toggle">☰</button>
            
            <div class="logo">
                <figure>
                    <picture>
                        <source srcset="${BASE}images/logo_and_banner/rsz_rsz_1logo.png" type="image/webp">
                        <img src="${BASE}images/logo_and_banner/rsz_rsz_1logo.png" alt="Logo">
                    </picture>
                </figure>
            </div>

            <nav class="cart-nav">
                <a href="${BASE}cart/cart.html">🛒 Cart</a>
            </nav>
        </div>

        <!-- Sidebar navigation -->
        <div class="sidebar-overlay"></div>

        <aside class="sidebar-nav">
            <nav class="sidebar-links">
                <a href="${BASE}">Home</a>
                <a href="${BASE}menu/menu.html">Menu</a>            
                <a href="${BASE}booking/booking.html">Booking</a>
                <a href="${BASE}contact_us/contact_us.html">Contact Us</a>
                <a href="${BASE}about_us/about_us.html">About Us</a>
                
            </nav>
        </aside>        
    `;
}
