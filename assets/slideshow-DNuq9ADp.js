const s="/catering_final_project/";let i=0,l;console.log("slideshow.js loaded");function o(){i=0,console.log(document.querySelector(".hero-banner"));const e=document.querySelector(".hero-banner");e&&(e.innerHTML=`
        <div class="slideshow">
            <div class="slide active">
                <img src="${s}images/logo_and_banner/steak-1359897_1920.webp" alt="slide1" fetchpriority="high">
            </div>

            <div class="slide">
                <img src="${s}images/food/rsz_bacon_wrap_pork.jpg" alt="slide2" loading="lazy">
            </div>

            <div class="slide">
                <img src="${s}images/food/rsz_complete_bbq.jpg" alt="slide3" loading="lazy">
            </div>

            <div class="slide">
                <img src="${s}images/food/rsz_bbq_hamburger_hotdog.jpg" alt="slide4" loading="lazy">
            </div>

            <div class="slide">
                <img src="${s}images/chef/rsz_meet_the_chef_nate.webp" alt="slide5" loading="lazy">
            </div>

            <div class="slide">
                <img src="${s}images/food/rsz_steak_and_tators.jpg" alt="slide6" loading="lazy">
            </div>

            <div class="slide">
                <img src="${s}images/food/rsz_pit_style_beans.jpg" alt="slide7" loading="lazy">
            </div>

            <div class="slide">
                <img src="${s}images/food/rsz_1texas_twinkie.jpg" alt="slide8" loading="lazy">
            </div>

            <div class="slide">
                <img src="${s}images/food/rsz_chicken_bombs.jpg" alt="slide9" loading="lazy">
            </div>
        </div>
    `,d())}function d(){const e=document.querySelectorAll(".slide");e.length&&(l&&clearInterval(l),l=setInterval(()=>{e.forEach(a=>a.classList.remove("active")),i++,i>=e.length&&(i=0),e[i].classList.add("active")},3e3))}export{o as loadSlideshow,d as startSlideshow};
