const r="https://date.nager.at/api/v3/PublicHolidays/2026/US";console.log("holidays.js loaded");async function c(){const e=document.querySelector("#holiday-container");if(e)try{const o=await fetch(r);if(!o.ok)throw new Error("Failed to fetch holidays");const t=await o.json(),n=new Date,i=t.filter(a=>new Date(a.date)>=n).slice(0,5);e.innerHTML=i.map(a=>`
            <div class="holiday-card">
                <h3>${a.name}</h3>
                <p>📅 ${a.date}</p>
            </div>
        `).join("")}catch(o){console.error("Holiday API error:",o),e.innerHTML="<p>Could not load holidays.</p>"}}export{c as loadHolidays};
