import{g,c as d,a as m,b as p,e as x}from"./cart-K_G46SnB.js";const y="hipoc_guest_count";console.log("booking.js loaded");function _(){requestAnimationFrame(()=>{const e=g(),n=Number(localStorage.getItem(y))||e[0]?.guests_requested||0;E(e,n),f(e,n)})}function E(e,n){const o=document.getElementById("booking-items");if(o){if(e.length===0){o.innerHTML="<p>No catering items selected.</p>";return}o.innerHTML=e.map(t=>`
        <div class="booking-item">
            <h3>${t.name}</h3>
            <p>
                Guests Requested:
                ${n}
            </p>
            <p>
                Trays Ordered:
                ${t.quantity}
            </p>
            <p>
                Servings Purchased:
                ${t.quantity*t.servings_per_tray}
            </p>
            <p>
                Cost:
                $${(t.quantity*t.servings_per_tray*t.price_per_serving).toFixed(2)}
            </p>
        </div>
    `).join("")}}function f(e,n){const o=document.getElementById("booking-guests"),t=document.getElementById("item-count"),a=document.getElementById("subtotal"),c=document.getElementById("tax"),i=document.getElementById("total"),s=d(e),u=p(s),r=x(s,u),l=m(e);t&&(t.textContent=l),a&&(a.textContent=s.toFixed(2)),c&&(c.textContent=u.toFixed(2)),i&&(i.textContent=r.toFixed(2)),o&&(o.textContent=n)}export{_ as initBookingPage};
