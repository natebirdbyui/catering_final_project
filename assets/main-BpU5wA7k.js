const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/aboutUs-5q1EV2WY.js","assets/slideshow-DNuq9ADp.js","assets/menuDisplay-By7wfa4R.js","assets/cart-K_G46SnB.js","assets/cartAnimation-BuOtR5Oh.js","assets/cartUI-CYSWHZ1R.js","assets/checkoutUI-DA4KC4ER.js","assets/mobileCart-DyCzCsOW.js","assets/guestCalculator-CiwRflyv.js","assets/menu-CmcZs9w_.js","assets/booking-C3K04xTe.js","assets/cartPage-D3hgvcyB.js","assets/checkoutComplete-DkVKyo6Y.js"])))=>i.map(i=>d[i]);
(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const g="modulepreload",y=function(t){return"/catering_final_project/"+t},h={},i=function(a,r,s){let e=Promise.resolve();if(r&&r.length>0){let f=function(u){return Promise.all(u.map(_=>Promise.resolve(_).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var d=f;document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),n=c?.nonce||c?.getAttribute("nonce");e=f(r.map(u=>{if(u=y(u),u in h)return;h[u]=!0;const _=u.endsWith(".css"),m=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${m}`))return;const l=document.createElement("link");if(l.rel=_?"stylesheet":g,_||(l.as="script"),l.crossOrigin="",l.href=u,n&&l.setAttribute("nonce",n),document.head.appendChild(l),_)return new Promise((p,v)=>{l.addEventListener("load",p),l.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(c){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=c,window.dispatchEvent(n),!n.defaultPrevented)throw c}return e.then(c=>{for(const n of c||[])n.status==="rejected"&&o(n.reason);return a().catch(o)})};console.log("utils.mjs loaded");function E(){const t="/catering_final_project/";return`
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
    `)}console.log("navigation.js loaded");function b(){const t=document.querySelector(".nav-toggle"),a=document.querySelector(".sidebar-nav"),r=document.querySelector(".sidebar-overlay");if(!t||!a||!r)return;const s=()=>{a.classList.add("open"),r.classList.add("open"),t.classList.add("hidden"),document.body.classList.add("menu-open")},e=()=>{a.classList.remove("open"),r.classList.remove("open"),t.classList.remove("hidden"),document.body.classList.remove("menu-open")};t.addEventListener("click",s),r.addEventListener("click",e),a.querySelectorAll("a").forEach(o=>{o.addEventListener("click",d=>{const c=o.getAttribute("href");e(),setTimeout(()=>{window.location.href=c},50)})})}console.log("main.js loaded:",location.pathname);document.addEventListener("DOMContentLoaded",async()=>{if(w(),L(),b(),document.querySelector(".hero-banner")){const{loadSlideshow:t}=await i(async()=>{const{loadSlideshow:e}=await import("./slideshow-DNuq9ADp.js");return{loadSlideshow:e}},[]),{loadMealOfTheDay:a}=await i(async()=>{const{loadMealOfTheDay:e}=await import("./mealOfTheDay-BUpSfShv.js");return{loadMealOfTheDay:e}},[]),{initCalendar:r}=await i(async()=>{const{initCalendar:e}=await import("./calendar-Dn4LpN0y.js");return{initCalendar:e}},[]),{loadHolidays:s}=await i(async()=>{const{loadHolidays:e}=await import("./holidays-4BzL8aIv.js");return{loadHolidays:e}},[]);t(),a(),r(),s()}if(document.querySelector(".owner-reel")){const{loadAboutUsSlideshow:t}=await i(async()=>{const{loadAboutUsSlideshow:a}=await import("./aboutUs-5q1EV2WY.js");return{loadAboutUsSlideshow:a}},__vite__mapDeps([0,1]));t()}if(document.querySelector(".menu-page")){const{loadMenu:t}=await i(async()=>{const{loadMenu:n}=await import("./menu-CmcZs9w_.js");return{loadMenu:n}},[]),{displayMenuItems:a}=await i(async()=>{const{displayMenuItems:n}=await import("./menuDisplay-By7wfa4R.js");return{displayMenuItems:n}},__vite__mapDeps([2,3,4])),{initCartSidebar:r}=await i(async()=>{const{initCartSidebar:n}=await import("./cartUI-CYSWHZ1R.js");return{initCartSidebar:n}},__vite__mapDeps([5,3])),{initCheckoutBar:s}=await i(async()=>{const{initCheckoutBar:n}=await import("./checkoutUI-DA4KC4ER.js");return{initCheckoutBar:n}},__vite__mapDeps([6,3])),{initMobileCart:e}=await i(async()=>{const{initMobileCart:n}=await import("./mobileCart-DyCzCsOW.js");return{initMobileCart:n}},__vite__mapDeps([7,3,4])),{initCheckoutNavigation:o}=await i(async()=>{const{initCheckoutNavigation:n}=await import("./checkoutNavigation-ChKThjuP.js");return{initCheckoutNavigation:n}},[]),{initGuestCalculator:d}=await i(async()=>{const{initGuestCalculator:n}=await import("./guestCalculator-CiwRflyv.js");return{initGuestCalculator:n}},__vite__mapDeps([8,9,2,3,4]));d();const c=await t();a(c),r(),s(),e(),o()}if(document.querySelector("#checkout-form")){const{initBookingPage:t}=await i(async()=>{const{initBookingPage:o}=await import("./booking-C3K04xTe.js");return{initBookingPage:o}},__vite__mapDeps([10,3])),{initGuestCalculator:a}=await i(async()=>{const{initGuestCalculator:o}=await import("./guestCalculator-CiwRflyv.js");return{initGuestCalculator:o}},__vite__mapDeps([8,9,2,3,4])),{initBookingValidation:r}=await i(async()=>{const{initBookingValidation:o}=await import("./bookingValidation-M3RoeDe_.js");return{initBookingValidation:o}},[]),{initCheckoutNavigation:s}=await i(async()=>{const{initCheckoutNavigation:o}=await import("./checkoutNavigation-ChKThjuP.js");return{initCheckoutNavigation:o}},[]),{initCalendar:e}=await i(async()=>{const{initCalendar:o}=await import("./calendar-Dn4LpN0y.js");return{initCalendar:o}},[]);t(),a(),r(),s(),e()}if(document.querySelector(".cart-page")){const{initCartPage:t}=await i(async()=>{const{initCartPage:r}=await import("./cartPage-D3hgvcyB.js");return{initCartPage:r}},__vite__mapDeps([11,3])),{initCheckoutNavigation:a}=await i(async()=>{const{initCheckoutNavigation:r}=await import("./checkoutNavigation-ChKThjuP.js");return{initCheckoutNavigation:r}},[]);t(),a()}if(document.querySelector(".checkout-complete")){const{initCheckoutComplete:t}=await i(async()=>{const{initCheckoutComplete:a}=await import("./checkoutComplete-DkVKyo6Y.js");return{initCheckoutComplete:a}},__vite__mapDeps([12,3]));t()}});
