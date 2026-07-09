const r="https://www.themealdb.com/api/json/v1/1/random.php";console.log("mealOfTheDay.js loaded");async function n(){const a=document.querySelector("#meal-of-the-day-content");if(a)try{const e=(await(await fetch(r)).json()).meals[0];a.innerHTML=`
            <div class="meal-card">
                <h3>${e.strMeal}</h3>
                
                <img src="${e.strMealThumb}" alt="${e.strMeal}" />

                <p><strong>Category:</strong> ${e.strCategory}</p>
                <p><strong>Area:</strong> ${e.strArea}</p>

                <a href="${e.strSource||"#"}" target="_blank">
                    View Full Recipe
                </a>
            </div>
        `}catch(t){console.error("Meal API error:",t),a.innerHTML="<p>Failed to load meal of the day.</p>"}}export{n as loadMealOfTheDay};
