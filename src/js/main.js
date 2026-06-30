// main.js
import { loadHeader } from "./header.js";
import { loadFooter } from "./footer.js";
import { loadSlideshow } from "./slideshow.js";
import { initSidebarMenu} from "./navigation.js";
import { loadMealOfTheDay } from "./mealOfTheDay.js";
import { initCalendar } from "./calendar.js";
import { loadHolidays } from "./holidays.js";

console.log("main.js loaded:", location.pathname);

const BASE = import.meta.env.BASE_URL;

nav.innerHTML = `
    <a href="${BASE}index.html">Home</a>
    <a href="${BASE}menu/menu.html">Menu</a>
    <a href="${BASE}booking/booking.html">Booking</a>
    <a href="${BASE}contact_us/contact_us.html">Contact</a>
    <a href="${BASE}about_us/about_us.html">About</a>
`;

document.addEventListener("DOMContentLoaded", () => {
    loadHeader();    
    loadFooter();
    loadSlideshow();
    initSidebarMenu();
    loadMealOfTheDay();
    loadHolidays();
    initCalendar();
});