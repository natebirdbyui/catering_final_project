// aboutUs.js - JavaScript for the About Us page
import { startSlideshow } from "./slideshow.js";

const BASE = import.meta.env.BASE_URL;

console.log("aboutUs.js loaded");

export function loadAboutUsSlideshow() {
    const aboutUsSlideShowEl = document.querySelector(".owner-reel");
    console.log("Owner reel element:", aboutUsSlideShowEl);
    if (!aboutUsSlideShowEl) return;

    aboutUsSlideShowEl.innerHTML = `
        <div class="slideshow">
            <div class="slide active">
                <img src="${BASE}images/chef/chef_foodprep.jpg" alt="slide1">
            </div>

            <div class="slide">
                <img src="${BASE}images/chef/rsz_meet_the_chef_nate.webp" alt="slide2">
            </div>

            <div class="slide">
                <img src="${BASE}images/chef/nate_jello.jpg" alt="slide3">
            </div>

            <div class="slide">
                <img src="${BASE}images/chef/nate_taco_compas.jpg" alt="slide4">
            </div>

            <div class="slide">
                <img src="${BASE}images/chef/nate_tacos.jpg" alt="slide5">
            </div>

            <div class="slide">
                <img src="${BASE}images/chef/nate_tamal.jpg" alt="slide6">
            </div>

            <div class="slide">
                <img src="${BASE}images/chef/taco_compa_grill.jpg" alt="slide7">
        </div>
    `;

    startSlideshow();
}