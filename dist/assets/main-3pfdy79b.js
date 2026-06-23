(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function l(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(o){if(o.ep)return;o.ep=!0;const t=l(o);fetch(o.href,t)}})();function c(){const e="/catering_final_project/";return`
        <div class="logo">
            <img src="${e}images/logo_and_banner/rsz_1logo.webp" alt="Logo">
        </div>
        <nav class="main-nav">
            <a href="${e}">Home</a>
            <a href="${e}menu/menu.html">Menu</a>
            <a href="${e}about_us/about_us.html">About</a>
            <a href="${e}booking/booking.html">Booking</a>
            <a href="${e}contact_us/contact_us.html">Contact</a>
        </nav>

        <nav class="cart-nav">
            <a href="${e}cart/cart.html">🛒</a>
        </nav>
    `}console.log("header.js loaded");function d(){const e=document.querySelector(".header-create");e&&(e.innerHTML=`
        ${c()}
    `)}console.log("footer.js loaded");function u(){const e=document.querySelector(".footer-create");e&&(e.innerHTML=`
        <p> &copy; 2026 Catering Company. All rights reserved.</p>
        
    `)}const s="/catering_final_project/";function f(){const e=document.querySelector(".hero-banner");e&&(e.innerHTML=`
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
    `)}let i=0;function g(){const e=document.querySelectorAll(".slide");e.length&&setInterval(()=>{e.forEach(r=>r.classList.remove("active")),i++,i>=e.length&&(i=0),e[i].classList.add("active")},3e3)}console.log("main.js loaded");d();u();f();g();
