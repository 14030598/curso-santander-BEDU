const container = document.querySelector('#tarjetas');
async function getMeals() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
    // console.log(response);
    let data = await response.json();
    // console.log(data.meals);
    for (const item of data.meals) {
        // console.log(item.strMeal);
        const card= document.createElement("card");
        card.className = "ui card";
        
        card.innerHTML += `
            <a class="image" href="#">
                <img src="${item.strMealThumb}" alt="">
            </a>
            <div class="content">
                <a class="header" href="#">${item.strMeal}</a>
                <div class="meta">
                    <a>Last Seen 2 days ago</a>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    }
    
    return data;
}
console.log(getMeals());


// function cha() {
//     document.getElementById("p").src = alert('hola');
// };










async function getMeal(name) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    // console.log(response);
    let data = await response.json()
    //let elemento = document.getElementById('imagen');
    document.getElementById("imagen").innerHTML.src = data.meals[0].strMealThumb;
    // elemento.innerHTML = data.meals[0].strMealThumb;
    console.log(data.meals[0].strMealThumb);
    return data;
}
// console.log(getMeal('Arrabiata'));
// console.log(todos);

async function getIDs(data) {
    // let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    // // console.log(response);
    // let data = await response.json()
    console.log(data);

    for (const id in data) {
        console.log(id.idMeal);
    }
}

// const resultados = getMeal('Arrabiata');

// console.log(todos);













// fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
//       .then(response => response.json())
//       .then(json => console.log(json))

// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata