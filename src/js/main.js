// main.js
import { loadHeader } from "./header.js";
import { loadFooter } from "./footer.js";
import { loadSlideshow } from "./slideshow.js";
import { initSidebarMenu } from "./navigation.js";

import { loadMenu } from "./menu.js";
import { displayMenuItems } from "./menuDisplay.js";

import { initCartSidebar } from "./cartUI.js";
import { initCheckoutBar } from "./checkoutUI.js";

import { loadMealOfTheDay } from "./mealOfTheDay.js";
import { initCalendar } from "./calendar.js";
import { loadHolidays } from "./holidays.js";

console.log("main.js loaded:", location.pathname);

async function initMenuPage() {
    console.log("INIT menu page");

    const menu = await loadMenu();

    console.log("MENU DATA:", menu);

    displayMenuItems(menu);
}

document.addEventListener("DOMContentLoaded", async () => {

    // layout
    loadHeader();
    loadFooter();
    loadSlideshow();
    initSidebarMenu();

    // homepage features
    loadMealOfTheDay();
    loadHolidays();
    initCalendar();

   //Show menu items in menu page
    initMenuPage();

    // CART + CHECKOUT
    initCartSidebar();
    initCheckoutBar();
});