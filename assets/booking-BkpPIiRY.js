import{g as r,c as d,a as g,b as m,e as p}from"./cart-CsStHKWq.js";console.log("booking.js loaded");function E(){const e=r();x(e),y(e)}function x(e){const n=document.getElementById("booking-items");if(n){if(e.length===0){n.innerHTML="<p>No catering items selected.</p>";return}n.innerHTML=e.map(t=>`
        <div class="booking-item">
            <h3>${t.name}</h3>
            <p>
                Guests Requested:
                ${t.guests_requested}
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
    `).join("")}}function y(e){const n=document.getElementById("booking-guests"),t=document.getElementById("item-count"),s=document.getElementById("subtotal"),a=document.getElementById("tax"),i=document.getElementById("total"),o=d(e),u=m(o),c=p(o,u),l=g(e);t&&(t.textContent=l),s&&(s.textContent=o.toFixed(2)),a&&(a.textContent=u.toFixed(2)),i&&(i.textContent=c.toFixed(2)),n&&e.length>0&&(n.textContent=e[0].guests_requested)}export{E as initBookingPage};
