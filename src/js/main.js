import { loadHeader } from "./header.js";
import { loadFooter } from "./footer.js";
import { loadSlideshow } from "./slideshow.js";

console.log("main.js loaded:", location.pathname);

document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
    loadFooter();
    loadSlideshow();
});