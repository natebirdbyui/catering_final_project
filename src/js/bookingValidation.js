console.log("bookingValidation.js loaded");


export function initBookingValidation() {

    const eventDate = document.getElementById("event-date");
    const form = document.getElementById("checkout-form");


    if (!eventDate || !form) return;



    // Set minimum date = today + 14 days
    const today = new Date();

    today.setDate(today.getDate() + 14);


    const minDate = today.toISOString().split("T")[0];


    eventDate.min = minDate;



    form.addEventListener("submit", (e) => {


        const selectedDate = new Date(eventDate.value);

        const minimumDate = new Date();

        minimumDate.setDate(minimumDate.getDate() + 14);



        if (selectedDate < minimumDate) {

            e.preventDefault();


            alert(
                "Please schedule your event at least 2 weeks in advance. Thank you!"
            );


            eventDate.value = "";

        }


    });


}