import{g as u,i as g,d as p,c as m,b as x,e as E}from"./cart-K_G46SnB.js";console.log("cartPage.js loaded");function y(){requestAnimationFrame(()=>{i()}),window.addEventListener("cart:update",()=>{i()})}function i(){const a=u(),e=document.getElementById("cart-page-items"),o=document.getElementById("page-subtotal"),s=document.getElementById("cart-guest-count"),c=document.getElementById("page-tax"),l=document.getElementById("page-total");if(!e){console.log("Cart container not ready");return}if(s){const t=Number(localStorage.getItem("hipoc_guest_count"))||0;console.log("Cart guests:",t),s.textContent=t}if(!e)return;a.length===0?e.innerHTML=`
            <p>Your cart is empty.</p>
        `:(e.innerHTML=a.map(t=>`
            <div class="cart-page-item">
                <span>
                    ${t.name}
                </span>
                <div class="qty-controls">
                    <button 
                        class="minus"
                        data-id="${t.id}">
                        −
                    </button>
                    <span>
                        ${t.quantity}
                    </span>
                    <button 
                        class="plus"
                        data-id="${t.id}">
                        +
                    </button>
                </div>
                <span>
                    $${(t.servings_purchased*t.price_per_serving).toFixed(2)}
                </span>
            </div>
        `).join(""),e.querySelectorAll(".plus").forEach(t=>{t.addEventListener("click",()=>{g(t.dataset.id)})}),e.querySelectorAll(".minus").forEach(t=>{t.addEventListener("click",()=>{p(t.dataset.id)})}));const n=m(a),r=x(n),d=E(n,r);o&&(o.textContent=n.toFixed(2)),c&&(c.textContent=r.toFixed(2)),l&&(l.textContent=d.toFixed(2))}export{y as initCartPage};
