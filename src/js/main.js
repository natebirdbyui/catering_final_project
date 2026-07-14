// main.js

import { loadHeader } from "./header.js";
import { loadFooter } from "./footer.js";
import { initSidebarMenu } from "./navigation.js";

console.log("main.js loaded:", location.pathname);

//break js using async so we can use await for dynamic imports and only load code when needed.
//This will improve performance by only loading code for the current page and not loading code for other pages until the user navigates to them. 
// It also keeps our main.js file clean and focused on initialization logic.

document.addEventListener("DOMContentLoaded", async () => {
    // Site-wide (every page)
    loadHeader();
    loadFooter();
    initSidebarMenu();

    // Home Page
    if (document.querySelector(".hero-banner")) {
        const { loadSlideshow } = await import("./slideshow.js");
        const { loadMealOfTheDay } = await import("./mealOfTheDay.js");
        const { initCalendar } = await import("./calendar.js");
        const { loadHolidays } = await import("./holidays.js");

        loadSlideshow();
        loadMealOfTheDay();
        initCalendar();
        loadHolidays();
    }

    // About Us Page
    if (document.querySelector(".owner-reel")) {
        const { loadAboutUsSlideshow } = await import("./aboutUs.js");
        loadAboutUsSlideshow();
    }


    // Menu Page
    if (document.querySelector(".menu-page")) {
        const { loadMenu } = await import("./menu.js");
        const { displayMenuItems } = await import("./menuDisplay.js");
        const { initCartSidebar } = await import("./cartUI.js");
        const { initCheckoutBar } = await import("./checkoutUI.js");
        const { initMobileCart } = await import("./mobileCart.js");
        const { initCheckoutNavigation } = await import("./checkoutNavigation.js");
        const { initGuestCalculator } = await import("./guestCalculator.js");

        initGuestCalculator();

        const menu = await loadMenu();
        displayMenuItems(menu);

        initCartSidebar();
        initCheckoutBar();
        initMobileCart();
        initCheckoutNavigation();
    }

    // Booking Page
    if (document.querySelector("#checkout-form")) {
        const { initBookingPage } = await import("./booking.js");
        const { initGuestCalculator } = await import("./guestCalculator.js");
        const { initBookingValidation } = await import("./bookingValidation.js");
        const { initCheckoutNavigation } = await import("./checkoutNavigation.js");
        const { initCalendar } = await import("./calendar.js");

        initBookingPage();
        initGuestCalculator();
        initBookingValidation();
        initCheckoutNavigation();
        initCalendar();
    }

    // Cart Page
    if (document.querySelector(".cart-page")) {
        const { initCartPage } = await import("./cartPage.js");
        const { initCheckoutNavigation } = await import("./checkoutNavigation.js");
        
        initCartPage();
        initCheckoutNavigation();
    }

    // Checkout Complete Page
    if (document.querySelector(".checkout-complete")) {
        const { initCheckoutComplete } = await import("./checkoutComplete.js");
        initCheckoutComplete();
    }
});