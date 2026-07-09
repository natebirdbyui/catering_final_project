import{g as u,i as p,d as y,u as x}from"./cart-CsStHKWq.js";console.log("cartUI.js loaded");function E(){window.addEventListener("cart:update",a=>{i(a.detail?.totals)}),i({subtotal:0,tax:0,total:0})}function i(a={}){const r=u(),e=document.getElementById("cart-sidebar-items"),n=document.getElementById("cart-subtotal"),o=document.getElementById("cart-tax"),s=document.getElementById("cart-total");if(!e)return;if(r.length===0){e.innerHTML=`
            <p>Your order is empty.</p>
        `,n&&(n.textContent="0.00"),o&&(o.textContent="0.00"),s&&(s.textContent="0.00");return}e.innerHTML=r.map(t=>`
        <div class="cart-item">
            <span>${t.name}</span>
            <div class="qty-controls">
                <button class="minus" data-id="${t.id}">
                    −
                </button>              
                <span>${t.quantity}</span>
                <input 
                    class="cart-quantity"
                    type="number"
                    min="1"
                    step="1"
                    value="${t.quantity}"
                    data-id="${t.id}">
                <button class="plus" data-id="${t.id}">
                    +
                </button>
            </div>
            <span>
                $${(t.quantity*t.servings_per_tray*t.price_per_serving).toFixed(2)}
            </span>
        </div>
    `).join(""),e.querySelectorAll(".plus").forEach(t=>{t.addEventListener("click",()=>{p(t.dataset.id)})}),e.querySelectorAll(".minus").forEach(t=>{t.addEventListener("click",()=>{y(t.dataset.id)})});const d=a.subtotal??0,c=a.tax??0,l=a.total??0;e.querySelectorAll(".cart-quantity").forEach(t=>{t.addEventListener("change",()=>{x(t.dataset.id,t.value)})}),n&&(n.textContent=d.toFixed(2)),o&&(o.textContent=c.toFixed(2)),s&&(s.textContent=l.toFixed(2))}export{E as initCartSidebar};
