const API_URL = "https://date.nager.at/api/v3/PublicHolidays/2026/US";

export async function loadHolidays() {
    const container = document.querySelector("#holiday-container");

    if (!container) return;

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch holidays");
        }

        const holidays = await response.json();

        const today = new Date();

        const upcoming = holidays
            .filter(h => new Date(h.date) >= today)
            .slice(0, 5);

        container.innerHTML = upcoming.map(h => `
            <div class="holiday-card">
                <h3>${h.name}</h3>
                <p>📅 ${h.date}</p>
            </div>
        `).join("");

    } catch (error) {
        console.error("Holiday API error:", error);
        container.innerHTML = "<p>Could not load holidays.</p>";
    }
}