console.log("footer.js loaded");

import { loadNav } from "./utils.mjs";
export function loadFooter() {
    const footerEl = document.querySelector(".footer-create");

    if (!footerEl) return;

    footerEl.innerHTML = `
        <p> &copy; 2026 Catering Company. All rights reserved.</p>
        
    `;
}