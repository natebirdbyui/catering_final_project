// guestCalculator.js

import { displayMenuItems } from "./menuDisplay.js";
import { getMenu } from "./menu.js";

console.log("guestCalculator.js loaded");

export function initGuestCalculator() {
    const guestInput = document.getElementById("guest-count");
    if (!guestInput) return;

    guestInput.addEventListener("input", () => {
        let guests = Number(guestInput.value);

        // Protect against bad input
        if (!Number.isInteger(guests) || guests < 1) {
            guestInput.value = 1;
            guests = 1;
        }
        const menu = getMenu();
        displayMenuItems(menu, guests);
    });
}