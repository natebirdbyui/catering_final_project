// slideshow.js
const BASE = import.meta.env.BASE_URL;

let index = 0;
let intervalId;

export function loadSlideshow() {
    index = 0; // reset index when loading slideshow
    console.log(document.querySelector(".hero-banner"));
    const slideshowEl = document.querySelector(".hero-banner");
    if (!slideshowEl) return;

    slideshowEl.innerHTML = `
        <div class="slideshow">
            <div class="slide active">
                <img src="${BASE}images/logo_and_banner/steak-1359897_1920.webp" alt="slide1">
            </div>

            <div class="slide">
                <img src="${BASE}images/food/rsz_bacon_wrap_pork.jpg" alt="slide2">
            </div>

            <div class="slide">
                <img src="${BASE}images/food/rsz_complete_bbq.jpg" alt="slide3">
            </div>

            <div class="slide">
                <img src="${BASE}images/food/rsz_bbq_hamburger_hotdog.jpg" alt="slide4">
            </div>

            <div class="slide">
                <img src="${BASE}images/chef/meet_the_chef_nate.jpg" alt="slide5">
            </div>
        </div>
    `;

    startSlideshow(); // ✅ correct place
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