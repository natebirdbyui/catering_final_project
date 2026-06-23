console.log("footer.js loaded");

export function loadFooter() {
    const footerEl = document.querySelector(".footer-create");
    if (!footerEl) return;

    footerEl.innerHTML = `
        <p>&copy; 2026 Hope It Pans Out Catering. All rights reserved.</p>
    `;
}