import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import data_restaurant from "../DATA.json";

const menuButton = document.querySelector("#nav-menu");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("main");


menuButton.addEventListener("click", event => {
    drawerElement.classList.toggle("open");
    event.stopPropagation();
});

mainElement.addEventListener("click", event => {
    drawerElement.classList.remove("open");
    event.stopPropagation();
});

const main = (data_restaurant) => {
    let restaurantData = '';


data_restaurant.restaurants.forEach((data, a)=>{
    restaurantData += `
    <style>
    .card {
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);
    }

    .card-image {
        width: 100%;
        height: 200px;
        overflow: hidden;
    }

    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-content {
        padding: 10px;
    }

    .card-content p {
        font-family: 'Martel', sans-serif;
        color: #000;
    }


    .card-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0;
        padding: 0;
        text-align: center;
    }

    .card-title a {
        font-family: 'Martel', sans-serif;
        text-decoration: none;
        color: #000;
        display: "inline-block";
        padding: 12px;
    }

    .card-footer {
        padding: 10px;
        background-color: #f1f1f1;
        display: flex;
        justify-content: space-between;
    }

    .card-footer p {
        font-family: 'Martel', sans-serif;
        color: #000;
        margin: 0;
        padding: 0;
    }


    </style>


    <div class="card">
        <div class="card-image">
            <img src="${data.pictureId}" alt="${data.name}">
        </div>
        <div class="card-content">
            <h3 class="card-title"><a href="#">${data.name}</a></h3>
            <p tabindex="0">${data.description}</p>
        </div>
        <div class="card-footer">
            <p>Rating: ${data.rating}</p>
            <p>City: ${data.city}</p>
        </div>
    </div>
    `;
});
    document.getElementById('list-restaurants').innerHTML =  restaurantData;
}

main(data_restaurant);