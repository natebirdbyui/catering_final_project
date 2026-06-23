(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();function s(){const o="/catering_final_project/";return`
        <nav>
            <a href="${o}">Home</a>
            <a href="${o}menu/menu.html">Menu</a>
            <a href="${o}about_us/about_us.html">About</a>
            <a href="${o}booking/booking.html">Booking</a>
            <a href="${o}contact_us/contact_us.html">Contact</a>
        </nav>
    `}console.log("header.js loaded");function i(){const o=document.querySelector(".header-create");o&&(o.innerHTML=`
        <div class="logo">
            <img src="/images/logo_and_banner/rsz_1logo.webp" alt="Logo">
        </div>
        ${s()}
    `)}console.log("footer.js loaded");function l(){const o=document.querySelector(".footer-create");o&&(o.innerHTML=`
        <div class="logo">
            <img src="/images/logo_and_banner/rsz_1logo.webp" alt="Logo">
        </div>

        ${s()}
    `)}console.log("main.js loaded");i();l();
