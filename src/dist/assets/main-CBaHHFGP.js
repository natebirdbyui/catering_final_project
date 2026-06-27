(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function c(){return`
        <div class="logo">
            <img src="/images/logo_and_banner/rsz_1logo.webp" alt="Logo">
        </div>
        <nav class="main-nav">
            <a href="/">Home</a>
            <a href="/menu/menu.html">Menu</a>
            <a href="/about_us/about_us.html">About</a>
            <a href="/booking/booking.html">Booking</a>
            <a href="/contact_us/contact_us.html">Contact</a>
        </nav>

        <nav class="cart-nav">
            <a href="/cart/cart.html">🛒</a>
        </nav>
    `}console.log("header.js loaded");function d(){const o=document.querySelector(".header-create");o&&(o.innerHTML=`
        ${c()}
    `)}console.log("footer.js loaded");function u(){const o=document.querySelector(".footer-create");o&&(o.innerHTML=`
        <p> &copy; 2026 Catering Company. All rights reserved.</p>
        
    `)}const s="/catering_final_project/";function f(){const o=document.querySelector(".hero-banner");o&&(o.innerHTML=`
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
    `)}let i=0;function m(){const o=document.querySelectorAll(".slide");o.length&&setInterval(()=>{o.forEach(r=>r.classList.remove("active")),i++,i>=o.length&&(i=0),o[i].classList.add("active")},3e3)}console.log("main.js loaded");console.log("test to see if it updates in real time");d();u();f();m();
