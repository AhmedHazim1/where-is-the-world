let apiURL = "https://restcountries.com/v3/all"
const main = document.querySelector("main")

const switcher = document.querySelector(".switch-theams")
const searchBar = document.querySelector("#search-bar")

const filterRegionContainer = document.querySelector(".filterRegionContainer")
const filterRegionContent = document.querySelector(".filterRegionContent")
const regionElments = document.querySelectorAll(".regionLi")
let showFilters = false;
let cardsContainer = document.querySelector(".cards-Container")

let data;
let countriesCards;
let searchValue;

let infoPageIsThere = false

// imges urls
const arrowRight = "./content/imges/arrowRight.png"


// fetching data
function fetchData(api){
    return fetch(api)
        .then(response => {
            if(response.status == 200)
                return response.json()
            else
                alert("failed fetchng data")
        }).then(response => {
            display(response);
            data = response;
        })
    }

// display the data
function display(countries){
    countries.forEach(country => {
        let card = document.createElement("section")
        let cardHtml = 
        `<img class = "flag-img" src="${country.flags[0]}" 
            alt="${country.name.common}">
        <article class="country-info">
            <h1>${country.name.common}</h1>
            <h2>Population : <span>${country.population}</span></h2>
            <h3>Region: <span>${country.region}</span></h3>
            <h4>Capital: <span>${country.capital}</span></h4>
        </article>`

        card.addEventListener("click",()=>{
            showMoreInfo(card.querySelector('h1').textContent.toLowerCase());
        })
        card.classList.add("card")
        card.innerHTML = cardHtml
        cardsContainer.append(card)
    });
    countriesCards = Array.from(document.querySelectorAll(".card"))
}
fetchData(apiURL)