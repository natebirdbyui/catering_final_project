import{g as m,i as p,d as y,u as E,c as b,a as f,b as v,e as g}from"./cart-K_G46SnB.js";import"./cartAnimation-BuOtR5Oh.js";console.log("mobileCart.js loaded");function L(){const c=document.querySelector(".mobile-cart-drawer"),n=document.getElementById("open-cart"),e=document.getElementById("close-cart"),a=document.getElementById("mobile-checkout");a&&a.addEventListener("click",()=>{window.location.href="../cart/cart.html"}),!(!c||!n||!e)&&(n.addEventListener("click",()=>{c.classList.add("open")}),e.addEventListener("click",()=>{c.classList.remove("open")}),window.addEventListener("cart:update",o=>{r(o.detail?.totals)}),r())}function r(c={}){const n=m(),e=document.getElementById("mobile-cart-items"),a=document.getElementById("mobile-tax"),o=document.getElementById("mobile-total"),i=document.getElementById("mobile-count");if(!e)return;if(n.length===0){e.innerHTML="<p>Your order is empty.</p>",a&&(a.textContent="0.00"),o&&(o.textContent="0.00"),i&&(i.textContent="0");return}e.innerHTML=n.map(t=>`
        <div class="mobile-cart-item">
            <span>${t.name}</span>

            <div class="mobile-qty-controls">
                <button class="minus" data-id="${t.id}">−</button>
                <input
                    class="mobile-cart-quantity"
                    type="number"
                    min="1"
                    value="${t.quantity}"
                    data-id="${t.id}">
                <button class="plus" data-id="${t.id}">+</button>
            </div>

            <span>
                $${(t.quantity*t.servings_per_tray*t.price_per_serving).toFixed(2)}
            </span>
        </div>
    `).join(""),e.querySelectorAll(".plus").forEach(t=>{t.addEventListener("click",()=>p(t.dataset.id))}),e.querySelectorAll(".minus").forEach(t=>{t.addEventListener("click",()=>y(t.dataset.id))}),e.querySelectorAll(".mobile-cart-quantity").forEach(t=>{t.addEventListener("change",()=>{E(t.dataset.id,t.value)})});const l=b(n),s=v(l),d=g(l,s),u=f(n);a&&(a.textContent=s.toFixed(2)),o&&(o.textContent=d.toFixed(2)),i&&(i.textContent=u)}export{L as initMobileCart};
