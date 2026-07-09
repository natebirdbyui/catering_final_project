import{h as n}from"./cart-CsStHKWq.js";console.log("checkoutComplete.js loaded");function r(){const e=document.getElementById("checkout-form");e&&e.addEventListener("submit",o=>{o.preventDefault();const t=document.createElement("div");t.classList.add("checkout-message"),t.innerHTML=`
            <h2>🎉 Your Order is Complete!</h2>
            <p>
                Thank you for choosing Hope It Pans Out Catering.
                We will contact you soon with confirmation details.
            </p>
        `,e.replaceWith(t),n()})}export{r as initCheckoutComplete};
