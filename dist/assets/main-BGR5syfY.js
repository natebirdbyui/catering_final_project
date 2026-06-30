(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function u(){const e="/catering_final_project/";return`
        <div class="header-top">
            <button class="nav-toggle">☰</button>
            
            <div class="logo">
                <figure>
                    <picture>
                        <source srcset="${e}images/logo_and_banner/rsz_rsz_1logo.png" type="image/webp">
                        <img src="${e}images/logo_and_banner/rsz_rsz_1logo.png" alt="Logo">
                    </picture>
                </figure>
            </div>

            <nav class="cart-nav">
                <a href="${e}cart/cart.html">🛒 Cart</a>
            </nav>
        </div>

        <!-- Sidebar navigation -->
        <div class="sidebar-overlay"></div>

        <aside class="sidebar-nav">
            <nav class="sidebar-links">
                <a href="${e}">Home</a>
                <a href="${e}menu/menu.html">Menu</a>            
                <a href="${e}booking/booking.html">Booking</a>
                <a href="${e}contact_us/contact_us.html">Contact Us</a>
                <a href="${e}about_us/about_us.html">About Us</a>
                
            </nav>
        </aside>        
    `}console.log("header.js loaded");function f(){const e=document.querySelector(".header-create");e&&(e.innerHTML=u())}console.log("footer.js loaded");function m(){const e=document.querySelector(".footer-create");e&&(e.innerHTML=`
        <p>&copy; 2026 Hope It Pans Out Catering. All rights reserved.</p>
    `)}const i="/catering_final_project/";let c=0,l;function g(){c=0,console.log(document.querySelector(".hero-banner"));const e=document.querySelector(".hero-banner");e&&(e.innerHTML=`
        <div class="slideshow">
            <div class="slide active">
                <img src="${i}images/logo_and_banner/steak-1359897_1920.webp" alt="slide1">
            </div>

            <div class="slide">
                <img src="${i}images/food/rsz_bacon_wrap_pork.jpg" alt="slide2">
            </div>

            <div class="slide">
                <img src="${i}images/food/rsz_complete_bbq.jpg" alt="slide3">
            </div>

            <div class="slide">
                <img src="${i}images/food/rsz_bbq_hamburger_hotdog.jpg" alt="slide4">
            </div>

            <div class="slide">
                <img src="${i}images/chef/meet_the_chef_nate.jpg" alt="slide5">
            </div>
        </div>
    `,p())}function p(){const e=document.querySelectorAll(".slide");e.length&&(l&&clearInterval(l),l=setInterval(()=>{e.forEach(r=>r.classList.remove("active")),c++,c>=e.length&&(c=0),e[c].classList.add("active")},3e3))}function h(){const e=document.querySelector(".nav-toggle"),r=document.querySelector(".sidebar-nav"),n=document.querySelector(".sidebar-overlay");if(!e||!r||!n)return;const a=()=>{r.classList.add("open"),n.classList.add("open"),document.body.classList.add("menu-open")},t=()=>{r.classList.remove("open"),n.classList.remove("open"),document.body.classList.remove("menu-open")};e.addEventListener("click",a),n.addEventListener("click",t),r.querySelectorAll("a").forEach(o=>{o.addEventListener("click",s=>{const d=o.getAttribute("href");t(),setTimeout(()=>{window.location.href=d},50)})})}const v="https://www.themealdb.com/api/json/v1/1/random.php";async function y(){const e=document.querySelector("#meal-of-the-day-content");if(e)try{const a=(await(await fetch(v)).json()).meals[0];e.innerHTML=`
            <div class="meal-card">
                <h3>${a.strMeal}</h3>
                
                <img src="${a.strMealThumb}" alt="${a.strMeal}" />

                <p><strong>Category:</strong> ${a.strCategory}</p>
                <p><strong>Area:</strong> ${a.strArea}</p>

                <a href="${a.strSource||"#"}" target="_blank">
                    View Full Recipe
                </a>
            </div>
        `}catch(r){console.error("Meal API error:",r),e.innerHTML="<p>Failed to load meal of the day.</p>"}}const b="https://date.nager.at/api/v3/PublicHolidays/2026/US";async function _(){const e=document.querySelector("#calendar-container");if(e)try{const r=await fetch(b);if(!r.ok)throw new Error("Failed to fetch holidays");const n=await r.json(),a=new Date,t=n.filter(o=>new Date(o.date)>=a).slice(0,5);e.innerHTML=t.map(o=>`
            <div class="holiday-card">
                <h3>${o.name}</h3>
                <p>📅 ${o.date}</p>
            </div>
        `).join("")}catch(r){console.error("Holiday API error:",r),e.innerHTML="<p>Could not load holidays.</p>"}}console.log("main.js loaded:",location.pathname);document.addEventListener("DOMContentLoaded",()=>{f(),m(),g(),h(),y(),_()});
