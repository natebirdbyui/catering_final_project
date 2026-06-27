(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();function d(){const e="/catering_final_project/";return`
        <div class="logo">
            <img src="${e}images/logo_and_banner/rsz_1logo.webp" alt="Logo">
        </div>
        <nav class="main-nav">
            <a href="${e}">Home</a>
            <a href="${e}menu/menu.html">Menu</a>            
            <a href="${e}booking/booking.html">Booking</a>
            <a href="${e}contact_us/contact_us.html">Contact Us</a>
            <a href="${e}about_us/about_us.html">About Us</a>
            
        </nav>

        <nav class="cart-nav">
            <a href="${e}cart/cart.html">🛒 Cart</a>
        </nav>
    `}console.log("header.js loaded");function u(){const e=document.querySelector(".header-create");e&&(e.innerHTML=d())}console.log("footer.js loaded");function f(){const e=document.querySelector(".footer-create");e&&(e.innerHTML=`
        <p>&copy; 2026 Hope It Pans Out Catering. All rights reserved.</p>
    `)}const s="/catering_final_project/";let n=0,i;function m(){n=0,console.log(document.querySelector(".hero-banner"));const e=document.querySelector(".hero-banner");e&&(e.innerHTML=`
        <div class="slideshow">
            <div class="slide active">
                <img src="${s}images/logo_and_banner/steak-1359897_1920.webp" alt="slide1">
            </div>

            <div class="slide">
                <img src="${s}images/food/rsz_bacon_wrap_pork.jpg" alt="slide2">
            </div>

            <div class="slide">
                <img src="${s}images/food/rsz_complete_bbq.jpg" alt="slide3">
            </div>

            <div class="slide">
                <img src="${s}images/food/rsz_bbq_hamburger_hotdog.jpg" alt="slide4">
            </div>

            <div class="slide">
                <img src="${s}images/chef/meet_the_chef_nate.jpg" alt="slide5">
            </div>
        </div>
    `,g())}function g(){const e=document.querySelectorAll(".slide");e.length&&(i&&clearInterval(i),i=setInterval(()=>{e.forEach(r=>r.classList.remove("active")),n++,n>=e.length&&(n=0),e[n].classList.add("active")},3e3))}console.log("main.js loaded:",location.pathname);document.addEventListener("DOMContentLoaded",()=>{u(),f(),m()});
