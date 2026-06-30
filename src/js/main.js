// main.js
import { loadHeader } from "./header.js";
import { loadFooter } from "./footer.js";
import { loadSlideshow } from "./slideshow.js";
import { initSidebarMenu} from "./navigation.js";
import { loadMealOfTheDay } from "./mealOfTheDay.js";
import { initCalendar } from "./calendar.js";
import { loadHolidays } from "./holidays.js";

console.log("main.js loaded:", location.pathname);


document.addEventListener("DOMContentLoaded", () => {
    loadHeader();    
    loadFooter();
    loadSlideshow();
    initSidebarMenu();
    loadMealOfTheDay();
    loadHolidays();
    initCalendar();
});