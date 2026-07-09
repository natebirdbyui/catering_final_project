import{g as u,i as p,d as g,c as m,b as x,e as E}from"./cart-CsStHKWq.js";console.log("cartPage.js loaded");function f(){i(),window.addEventListener("cart:update",()=>{i()})}function i(){const e=u(),a=document.getElementById("cart-page-items"),s=document.getElementById("page-subtotal"),o=document.getElementById("guest-count"),c=document.getElementById("page-tax"),l=document.getElementById("page-total");if(!a)return;o&&e.length>0&&(o.textContent=e[0].guests_requested||0),e.length===0?a.innerHTML=`
            <p>Your cart is empty.</p>
        `:(a.innerHTML=e.map(t=>`
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
                    $${(t.price_per_serving*t.quantity).toFixed(2)}
                </span>
            </div>
        `).join(""),a.querySelectorAll(".plus").forEach(t=>{t.addEventListener("click",()=>{p(t.dataset.id)})}),a.querySelectorAll(".minus").forEach(t=>{t.addEventListener("click",()=>{g(t.dataset.id)})}));const n=m(e),d=x(n),r=E(n,d);s&&(s.textContent=n.toFixed(2)),c&&(c.textContent=d.toFixed(2)),l&&(l.textContent=r.toFixed(2))}export{f as initCartPage};
