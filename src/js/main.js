//main.js
import { loadHeader } from "./header.js";
import { loadFooter } from "./footer.js";
import { loadSlideshow, startSlideshow } from "./slideshow.js";

console.log("main.js loaded");
console.log("test to see if it updates in real time");
loadHeader();
loadFooter();
loadSlideshow();
startSlideshow();