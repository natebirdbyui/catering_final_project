// header.js
import { loadNav } from "./utils.mjs";

console.log("header.js loaded");

export function loadHeader() {
    const headerEl = document.querySelector(".header-create");
    if (!headerEl) return;

    headerEl.innerHTML = loadNav();
}
