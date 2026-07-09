//bookingValidation.js
console.log("bookingValidation.js loaded");

export function initBookingValidation() {
    const eventDate = document.getElementById("event-date");
    const form = document.getElementById("checkout-form");

    if (!eventDate || !form) return;

    // Set minimum date = today + 14 days
    // Good to give 2 weeks for catering orders to allow for preparation and scheduling.
    const today = new Date();
    today.setDate(today.getDate() + 14);
    const minDate = today.toISOString().split("T")[0];
    eventDate.min = minDate;

    form.addEventListener("submit", (e) => {
        const selectedDate = new Date(eventDate.value);
        const minimumDate = new Date();
        minimumDate.setDate(minimumDate.getDate() + 14);

        if (selectedDate < minimumDate) { //do have a minimum date selection for 2 weeks, but good to have as a backup in case someone tries to bypass the date picker.
            e.preventDefault();
            alert(
                "Please schedule your event at least 2 weeks in advance. Thank you!"
            );
            eventDate.value = "";
        }
    });
}