// bookingSubmit.js

import { getCart, clearCart } from "./cart.js";
console.log("bookingSubmit.js loaded");

export function initBookingSubmit() {
    const form = document.getElementById("checkout-form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const cart = getCart();
        if (cart.length === 0) {
            alert("Your cart is empty. Please select catering items before checkout.");
            return;
        }



        const booking = {
            customer: {
                firstName:
                    document.getElementById("fname").value,

                lastName:
                    document.getElementById("lname").value,

                email:
                    document.getElementById("email").value,

                phone:
                    document.getElementById("phone").value,

                address: {

                    street:
                        document.getElementById("street").value,

                    city:
                        document.getElementById("city").value,

                    state:
                        document.getElementById("state").value,

                    zip:
                        document.getElementById("zip").value

                }

            },


            event: {

                name:
                    document.getElementById("event-name").value,

                date:
                    document.getElementById("event-date").value,

                time:
                    document.getElementById("event-time").value,

                type:
                    document.getElementById("event-type").value,

                notes:
                    document.getElementById("notes").value

            },


            order: cart,

            created:
                new Date().toISOString()
        };

        localStorage.setItem(
            "hipoc_booking",
            JSON.stringify(booking)
        );

        clearCart();
        showCompleteMessage();
    });
}

//when you finish the booking, show a complete message and clear the form. Added a celebration emoji for fun!
function showCompleteMessage() {
    const form = document.getElementById("checkout-form");
    if (!form) return;

    form.innerHTML = `

        <section class="booking-complete">
            <h2>
                🎉 Your Order is Complete!
            </h2>

            <p>
                Thank you for choosing HIPOC.
            </p>
            <p>
                We have received your catering request 
                and will contact you shortly to finalize 
                your event details.
            </p>

            <p>
                We look forward to serving you!
            </p>
        </section>
    `;
}