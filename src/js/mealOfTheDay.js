const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

export async function loadMealOfTheDay() {
    const container = document.querySelector("#meal-of-the-day-content");
    if (!container) return;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const meal = data.meals[0];

        container.innerHTML = `
            <div class="meal-card">
                <h3>${meal.strMeal}</h3>
                
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />

                <p><strong>Category:</strong> ${meal.strCategory}</p>
                <p><strong>Area:</strong> ${meal.strArea}</p>

                <a href="${meal.strSource || '#'}" target="_blank">
                    View Full Recipe
                </a>
            </div>
        `;

    } catch (error) {
        console.error("Meal API error:", error);
        container.innerHTML = "<p>Failed to load meal of the day.</p>";
    }
}