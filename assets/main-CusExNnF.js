const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/aboutUs-5q1EV2WY.js","assets/slideshow-DNuq9ADp.js","assets/menuDisplay-C5wbxpxl.js","assets/cart-CsStHKWq.js","assets/cartAnimation-BuOtR5Oh.js","assets/cartUI-DCmxpSMn.js","assets/checkoutUI-CvzeZRLE.js","assets/mobileCart-CEKq3czc.js","assets/booking-BkpPIiRY.js","assets/guestCalculator-v2spvmyb.js","assets/menu-CmcZs9w_.js","assets/cartPage-BykFVT18.js","assets/checkoutComplete-CL1bcpi1.js"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const v="modulepreload",y=function(e){return"/catering_final_project/"+e},p={},a=function(o,n,i){let t=Promise.resolve();if(n&&n.length>0){let f=function(c){return Promise.all(c.map(_=>Promise.resolve(_).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var s=f;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=l?.nonce||l?.getAttribute("nonce");t=f(n.map(c=>{if(c=y(c),c in p)return;p[c]=!0;const _=c.endsWith(".css"),m=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${m}`))return;const d=document.createElement("link");if(d.rel=_?"stylesheet":v,_||(d.as="script"),d.crossOrigin="",d.href=c,u&&d.setAttribute("nonce",u),document.head.appendChild(d),_)return new Promise((h,g)=>{d.addEventListener("load",h),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return t.then(l=>{for(const u of l||[])u.status==="rejected"&&r(u.reason);return o().catch(r)})};console.log("utils.mjs loaded");function E(){const e="/catering_final_project/";return`
        <div class="header-top">
            <button class="nav-toggle">☰</button>
            
            <div class="logo">
                <figure>
                    <picture>
                        <source srcset="${e}images/logo_and_banner/rsz_rsz_1logo.png" type="image/webp">
                        <img src="${e}images/logo_and_banner/rsz_rsz_1logo.png"
                        alt="HIPOC Logo"
                        width="250"
                        height="250">
                    </picture>
                </figure>
            </div>

            <nav class="cart-nav">
                <a href="${e}cart/cart.html">🛒 Cart</a>
            </nav>
        </div>

        <!-- Sidebar navigation -->
        <div class="sidebar-overlay"></div>

        <!-- Desktop navigation -->
        <div class="desktop-nav">
            <a href="${e}">Home</a>
                <a href="${e}menu/menu.html">Menu</a>            
                <a href="${e}booking/booking.html">Booking</a>
                <a href="${e}contact_us/contact_us.html">Contact Us</a>
                <a href="${e}about_us/about_us.html">About Us</a>
        </div>

        <aside class="sidebar-nav">
            <nav class="sidebar-links">
                <a href="${e}">Home</a>
                <a href="${e}menu/menu.html">Menu</a>            
                <a href="${e}booking/booking.html">Booking</a>
                <a href="${e}contact_us/contact_us.html">Contact Us</a>
                <a href="${e}about_us/about_us.html">About Us</a>
                
            </nav>
        </aside>        
    `}console.log("header.js loaded");function w(){const e=document.querySelector(".header-create");e&&(e.innerHTML=E())}console.log("footer.js loaded");function b(){const e=document.querySelector(".footer-create");e&&(e.innerHTML=`
        <p>&copy; 2026 Hope It Pans Out Catering. All rights reserved.</p>
    `)}console.log("navigation.js loaded");function L(){const e=document.querySelector(".nav-toggle"),o=document.querySelector(".sidebar-nav"),n=document.querySelector(".sidebar-overlay");if(!e||!o||!n)return;const i=()=>{o.classList.add("open"),n.classList.add("open"),e.classList.add("hidden"),document.body.classList.add("menu-open")},t=()=>{o.classList.remove("open"),n.classList.remove("open"),e.classList.remove("hidden"),document.body.classList.remove("menu-open")};e.addEventListener("click",i),n.addEventListener("click",t),o.querySelectorAll("a").forEach(r=>{r.addEventListener("click",s=>{const l=r.getAttribute("href");t(),setTimeout(()=>{window.location.href=l},50)})})}console.log("main.js loaded:",location.pathname);document.addEventListener("DOMContentLoaded",async()=>{if(w(),b(),L(),document.querySelector(".hero-banner")){const{loadSlideshow:e}=await a(async()=>{const{loadSlideshow:t}=await import("./slideshow-DNuq9ADp.js");return{loadSlideshow:t}},[]),{loadMealOfTheDay:o}=await a(async()=>{const{loadMealOfTheDay:t}=await import("./mealOfTheDay-BUpSfShv.js");return{loadMealOfTheDay:t}},[]),{initCalendar:n}=await a(async()=>{const{initCalendar:t}=await import("./calendar-Dn4LpN0y.js");return{initCalendar:t}},[]),{loadHolidays:i}=await a(async()=>{const{loadHolidays:t}=await import("./holidays-4BzL8aIv.js");return{loadHolidays:t}},[]);e(),o(),n(),i()}if(document.querySelector(".owner-reel")){const{loadAboutUsSlideshow:e}=await a(async()=>{const{loadAboutUsSlideshow:o}=await import("./aboutUs-5q1EV2WY.js");return{loadAboutUsSlideshow:o}},__vite__mapDeps([0,1]));e()}if(document.querySelector(".menu-page")){const{loadMenu:e}=await a(async()=>{const{loadMenu:s}=await import("./menu-CmcZs9w_.js");return{loadMenu:s}},[]),{displayMenuItems:o}=await a(async()=>{const{displayMenuItems:s}=await import("./menuDisplay-C5wbxpxl.js");return{displayMenuItems:s}},__vite__mapDeps([2,3,4])),{initCartSidebar:n}=await a(async()=>{const{initCartSidebar:s}=await import("./cartUI-DCmxpSMn.js");return{initCartSidebar:s}},__vite__mapDeps([5,3])),{initCheckoutBar:i}=await a(async()=>{const{initCheckoutBar:s}=await import("./checkoutUI-CvzeZRLE.js");return{initCheckoutBar:s}},__vite__mapDeps([6,3])),{initMobileCart:t}=await a(async()=>{const{initMobileCart:s}=await import("./mobileCart-CEKq3czc.js");return{initMobileCart:s}},__vite__mapDeps([7,3,4])),r=await e();o(r),n(),i(),t()}if(document.querySelector("#booking-form")){const{initBookingPage:e}=await a(async()=>{const{initBookingPage:i}=await import("./booking-BkpPIiRY.js");return{initBookingPage:i}},__vite__mapDeps([8,3])),{initGuestCalculator:o}=await a(async()=>{const{initGuestCalculator:i}=await import("./guestCalculator-v2spvmyb.js");return{initGuestCalculator:i}},__vite__mapDeps([9,10,2,3,4])),{initBookingValidation:n}=await a(async()=>{const{initBookingValidation:i}=await import("./bookingValidation-M3RoeDe_.js");return{initBookingValidation:i}},[]);e(),o(),n()}if(document.querySelector(".cart-page")){const{initCartPage:e}=await a(async()=>{const{initCartPage:n}=await import("./cartPage-BykFVT18.js");return{initCartPage:n}},__vite__mapDeps([11,3])),{initCheckoutNavigation:o}=await a(async()=>{const{initCheckoutNavigation:n}=await import("./checkoutNavigation-ChKThjuP.js");return{initCheckoutNavigation:n}},[]);e(),o()}if(document.querySelector(".checkout-complete")){const{initCheckoutComplete:e}=await a(async()=>{const{initCheckoutComplete:o}=await import("./checkoutComplete-CL1bcpi1.js");return{initCheckoutComplete:o}},__vite__mapDeps([12,3]));e()}});
