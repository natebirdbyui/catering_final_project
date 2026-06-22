export function loadHeader() {
    const headerEl = document.querySelector(".header-create");

    if (!headerEl) return;

    headerEl.innerHTML = `
        <div class="logo">
            <h1>Hope it Pans Out Catering</h1>
        </div>

        <nav class="header_nav">
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="../src/menu.html">Menu</a></li>
                <li><a href="../src/booking.html">Booking</a></li>
                <li><a href="../src/contact.html">Contact</a></li>
                <li><a href="../src/about_us.html">About</a></li>
            </ul>
        </nav>
    `;
}