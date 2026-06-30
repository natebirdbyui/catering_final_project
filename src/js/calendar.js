//calendar.js
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

export function initCalendar() {
    const el = document.querySelector('#calendar');

    if (!el) return;

    const calendar = new Calendar(el, {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        height: 'auto',

        events: [
            {
                title: "Independence Day",
                start: "2026-07-04",
                color: "red"
            },
            {
                title: "Memorial Day",
                start: "2026-05-25",
                color: "blue"
            },
            {
                title: "Labor Day",
                start: "2026-09-07",
                color: "green"
            },
            {
                title: "Halloween",
                start: "2026-10-31",
                color: "orange"
            },
            {
                title: "New Year's Day",
                start: "2026-01-01",
                color: "yellow"
            },
            {
                title: "Valentine's Day",
                start: "2026-02-14",
                color: "pink"
            },
            {
                title: "Thanksgiving",
                start: "2026-11-26",
                color: "brown"
            },
            {
                title: "Christmas",
                start: "2026-12-25",
                color: "green"
            },
            {
                title: "New Year's Day",
                start: "2027-01-01",
                color: "yellow"
            },
            {
                title: "New Year's Eve",
                start: "2026-12-31",
                color: "purple"
            }
        ]
    });

    calendar.render();
}