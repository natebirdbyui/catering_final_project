//main.js
import { loadHeader } from "./header.js";
import { loadFooter } from "./footer.js";
import { loadSlideshow, startSlideshow } from "./slideshow.js";

console.log("main.js loaded");

loadHeader();
loadFooter();
loadSlideshow();
startSlideshow();