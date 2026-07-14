// guestCalculator.js
import { loadMenu } from "./menu.js";
import { displayMenuItems } from "./menuDisplay.js";
const GUEST_KEY = "hipoc_guest_count";

console.log("guestCalculator.js loaded");

export function initGuestCalculator() {
    const input = document.getElementById("guest-count");
    if (!input) return;

    const savedGuests = localStorage.getItem(GUEST_KEY);    
    if (savedGuests) {
        input.value = savedGuests;
    }

    input.addEventListener("input", async () => {
        let guests = Number(input.value);
        if (!Number.isInteger(guests) || guests < 1) {
            input.value = "";
            return;
        }

        if (guests > 2000) {
            guests = 2000;
            input.value = guests;
        }

        //Saves guest count to local storage
        localStorage.setItem(
            GUEST_KEY,
            guests
        );

        // tell menu cards to refresh
        window.dispatchEvent(
            new Event("guest:update")
        );

        // Reload menu items to update tray calculations
        const menu = await loadMenu();
        displayMenuItems(menu);
        console.log(`Guest count updated: ${guests}`);
    });
}