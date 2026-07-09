// slideshow.js
const BASE = import.meta.env.BASE_URL;

let index = 0;
let intervalId;
console.log("slideshow.js loaded");

export function loadSlideshow() {
    index = 0; // reset index when loading slideshow
    console.log(document.querySelector(".hero-banner"));
    const slideshowEl = document.querySelector(".hero-banner");
    if (!slideshowEl) return;
    // set up the slideshow HTML plus had the first image with fetchpriority="high" to ensure it loads quickly for a good user experience.
    //  The rest of the images are set to loading="lazy" to optimize performance and increase lighthouse scores.
    slideshowEl.innerHTML = `
        <div class="slideshow">
            <div class="slide active">
                <img src="${BASE}images/logo_and_banner/steak-1359897_1920.webp" alt="slide1" fetchpriority="high">
            </div>

            <div class="slide">
                <img src="${BASE}images/food/rsz_bacon_wrap_pork.jpg" alt="slide2" loading="lazy">
            </div>

            <div class="slide">
                <img src="${BASE}images/food/rsz_complete_bbq.jpg" alt="slide3" loading="lazy">
            </div>

            <div class="slide">
                <img src="${BASE}images/food/rsz_bbq_hamburger_hotdog.jpg" alt="slide4" loading="lazy">
            </div>

            <div class="slide">
                <img src="${BASE}images/chef/rsz_meet_the_chef_nate.webp" alt="slide5" loading="lazy">
            </div>

            <div class="slide">
                <img src="${BASE}images/food/rsz_steak_and_tators.jpg" alt="slide6" loading="lazy">
            </div>

            <div class="slide">
                <img src="${BASE}images/food/rsz_pit_style_beans.jpg" alt="slide7" loading="lazy">
            </div>

            <div class="slide">
                <img src="${BASE}images/food/rsz_1texas_twinkie.jpg" alt="slide8" loading="lazy">
            </div>

            <div class="slide">
                <img src="${BASE}images/food/rsz_chicken_bombs.jpg" alt="slide9" loading="lazy">
            </div>
        </div>
    `;

    startSlideshow(); // correct place
}

export function startSlideshow() {
    const slides = document.querySelectorAll(".slide");
    if (!slides.length) return;

    if (intervalId) clearInterval(intervalId);

    intervalId = setInterval(() => {
        slides.forEach(s => s.classList.remove("active"));

        index++;
        if (index >= slides.length) index = 0;

        slides[index].classList.add("active");
    }, 3000);
}