const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/aboutUs-5q1EV2WY.js","assets/slideshow-DNuq9ADp.js","assets/menuDisplay-By7wfa4R.js","assets/cart-K_G46SnB.js","assets/cartAnimation-BuOtR5Oh.js","assets/cartUI-CYSWHZ1R.js","assets/checkoutUI-DA4KC4ER.js","assets/mobileCart-DyCzCsOW.js","assets/guestCalculator-CiwRflyv.js","assets/menu-CmcZs9w_.js","assets/booking-C3K04xTe.js","assets/cartPage-D3hgvcyB.js","assets/checkoutComplete-DkVKyo6Y.js"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const g="modulepreload",y=function(t){return"/catering_final_project/"+t},h={},i=function(n,a,s){let e=Promise.resolve();if(a&&a.length>0){let f=function(u){return Promise.all(u.map(_=>Promise.resolve(_).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var d=f;document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),o=c?.nonce||c?.getAttribute("nonce");e=f(a.map(u=>{if(u=y(u),u in h)return;h[u]=!0;const _=u.endsWith(".css"),m=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${m}`))return;const l=document.createElement("link");if(l.rel=_?"stylesheet":g,_||(l.as="script"),l.crossOrigin="",l.href=u,o&&l.setAttribute("nonce",o),document.head.appendChild(l),_)return new Promise((p,v)=>{l.addEventListener("load",p),l.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(c){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=c,window.dispatchEvent(o),!o.defaultPrevented)throw c}return e.then(c=>{for(const o of c||[])o.status==="rejected"&&r(o.reason);return n().catch(r)})};console.log("utils.mjs loaded");function E(){const t="/catering_final_project/";return`
        <div class="header-top">
            <button class="nav-toggle">☰</button>
            
            <div class="logo">
                <figure>
                    <picture>
                        <source srcset="${t}images/logo_and_banner/rsz_rsz_1logo.png" type="image/webp">
                        <img src="${t}images/logo_and_banner/rsz_rsz_1logo.png"
                        alt="HIPOC Logo"
                        width="250"
                        height="250">
                    </picture>
                </figure>
            </div>

            <nav class="cart-nav">
                <a href="${t}cart/cart.html">🛒 Cart</a>
            </nav>
        </div>

        <!-- Sidebar navigation -->
        <div class="sidebar-overlay"></div>

        <!-- Desktop navigation -->
        <div class="desktop-nav">
            <a href="${t}">Home</a>
                <a href="${t}menu/menu.html">Menu</a>            
                <a href="${t}booking/booking.html">Booking</a>
                <a href="${t}contact_us/contact_us.html">Contact Us</a>
                <a href="${t}about_us/about_us.html">About Us</a>
        </div>

        <aside class="sidebar-nav">
            <nav class="sidebar-links">
                <a href="${t}">Home</a>
                <a href="${t}menu/menu.html">Menu</a>            
                <a href="${t}booking/booking.html">Booking</a>
                <a href="${t}contact_us/contact_us.html">Contact Us</a>
                <a href="${t}about_us/about_us.html">About Us</a>
                
            </nav>
        </aside>        
    `}console.log("header.js loaded");function w(){const t=document.querySelector(".header-create");t&&(t.innerHTML=E())}console.log("footer.js loaded");function L(){const t=document.querySelector(".footer-create");t&&(t.innerHTML=`
        <p>&copy; 2026 Hope It Pans Out Catering. All rights reserved.</p>
    `)}console.log("navigation.js loaded");function b(){const t=document.querySelector(".nav-toggle"),n=document.querySelector(".sidebar-nav"),a=document.querySelector(".sidebar-overlay");if(!t||!n||!a)return;const s=()=>{n.classList.add("open"),a.classList.add("open"),t.classList.add("hidden"),document.body.classList.add("menu-open")},e=()=>{n.classList.remove("open"),a.classList.remove("open"),t.classList.remove("hidden"),document.body.classList.remove("menu-open")};t.addEventListener("click",s),a.addEventListener("click",e),n.querySelectorAll("a").forEach(r=>{r.addEventListener("click",d=>{const c=r.getAttribute("href");e(),setTimeout(()=>{window.location.href=c},50)})})}console.log("main.js loaded:",location.pathname);document.addEventListener("DOMContentLoaded",async()=>{if(w(),L(),b(),document.querySelector(".hero-banner")){const{loadSlideshow:t}=await i(async()=>{const{loadSlideshow:e}=await import("./slideshow-DNuq9ADp.js");return{loadSlideshow:e}},[]),{loadMealOfTheDay:n}=await i(async()=>{const{loadMealOfTheDay:e}=await import("./mealOfTheDay-BUpSfShv.js");return{loadMealOfTheDay:e}},[]),{initCalendar:a}=await i(async()=>{const{initCalendar:e}=await import("./calendar-Dn4LpN0y.js");return{initCalendar:e}},[]),{loadHolidays:s}=await i(async()=>{const{loadHolidays:e}=await import("./holidays-4BzL8aIv.js");return{loadHolidays:e}},[]);t(),n(),a(),s()}if(document.querySelector(".owner-reel")){const{loadAboutUsSlideshow:t}=await i(async()=>{const{loadAboutUsSlideshow:n}=await import("./aboutUs-5q1EV2WY.js");return{loadAboutUsSlideshow:n}},__vite__mapDeps([0,1]));t()}if(document.querySelector(".menu-page")){const{loadMenu:t}=await i(async()=>{const{loadMenu:o}=await import("./menu-CmcZs9w_.js");return{loadMenu:o}},[]),{displayMenuItems:n}=await i(async()=>{const{displayMenuItems:o}=await import("./menuDisplay-By7wfa4R.js");return{displayMenuItems:o}},__vite__mapDeps([2,3,4])),{initCartSidebar:a}=await i(async()=>{const{initCartSidebar:o}=await import("./cartUI-CYSWHZ1R.js");return{initCartSidebar:o}},__vite__mapDeps([5,3])),{initCheckoutBar:s}=await i(async()=>{const{initCheckoutBar:o}=await import("./checkoutUI-DA4KC4ER.js");return{initCheckoutBar:o}},__vite__mapDeps([6,3])),{initMobileCart:e}=await i(async()=>{const{initMobileCart:o}=await import("./mobileCart-DyCzCsOW.js");return{initMobileCart:o}},__vite__mapDeps([7,3,4])),{initCheckoutNavigation:r}=await i(async()=>{const{initCheckoutNavigation:o}=await import("./checkoutNavigation-ChKThjuP.js");return{initCheckoutNavigation:o}},[]),{initGuestCalculator:d}=await i(async()=>{const{initGuestCalculator:o}=await import("./guestCalculator-CiwRflyv.js");return{initGuestCalculator:o}},__vite__mapDeps([8,9,2,3,4]));d();const c=await t();n(c),a(),s(),e(),r()}if(document.querySelector("#checkout-form")){const{initBookingPage:t}=await i(async()=>{const{initBookingPage:e}=await import("./booking-C3K04xTe.js");return{initBookingPage:e}},__vite__mapDeps([10,3])),{initGuestCalculator:n}=await i(async()=>{const{initGuestCalculator:e}=await import("./guestCalculator-CiwRflyv.js");return{initGuestCalculator:e}},__vite__mapDeps([8,9,2,3,4])),{initBookingValidation:a}=await i(async()=>{const{initBookingValidation:e}=await import("./bookingValidation-M3RoeDe_.js");return{initBookingValidation:e}},[]),{initCheckoutNavigation:s}=await i(async()=>{const{initCheckoutNavigation:e}=await import("./checkoutNavigation-ChKThjuP.js");return{initCheckoutNavigation:e}},[]);t(),n(),a(),s()}if(document.querySelector(".cart-page")){const{initCartPage:t}=await i(async()=>{const{initCartPage:a}=await import("./cartPage-D3hgvcyB.js");return{initCartPage:a}},__vite__mapDeps([11,3])),{initCheckoutNavigation:n}=await i(async()=>{const{initCheckoutNavigation:a}=await import("./checkoutNavigation-ChKThjuP.js");return{initCheckoutNavigation:a}},[]);t(),n()}if(document.querySelector(".checkout-complete")){const{initCheckoutComplete:t}=await i(async()=>{const{initCheckoutComplete:n}=await import("./checkoutComplete-DkVKyo6Y.js");return{initCheckoutComplete:n}},__vite__mapDeps([12,3]));t()}});
