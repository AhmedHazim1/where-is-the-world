let nav = document.querySelector('nav')
let infoContainer;

// show more info about the country
function showMoreInfo(cardName){
    countriesCards.forEach(coutnryC=>{
        let countryName = coutnryC.querySelector("h1").innerText.toLowerCase()
        let countryData;
        let languages;
        
        if(countryName === cardName){
            // check in which theam we will create the page
            let getBackBtClass = "";
            let BorderCountriesClass = ""
            
            if(darkMoodOn){
                getBackBtClass = "getBackBt getBackBt-DarkMood"
                BorderCountriesClass = "borderCountries borderCountries-DarkMood"
            }else{
                getBackBtClass = "getBackBt"
                BorderCountriesClass = "borderCountries"
            }
                      
            // get the country data
            data.forEach((country, index)=>{
                if(country.name.common.toLowerCase() === cardName){
                    countryData = data[index]
                }
            })

            function getBorder(arr){
                if(arr!= undefined){
                    let BorderCountries = "";
                    for(let i=0; i< arr.length;i++){
                        BorderCountries += `<li class="${BorderCountriesClass}">${arr[i]}</li>`
                    }
                    return BorderCountries;
                }
                else{
                    return "None"
                }
            }            

            const langsKeys = Object.keys(countryData.languages)
            const currenciesKeys = Object.keys(countryData.currencies)
            
            function languagesLoop(keys){
                let langsArr = []
                for(let i=0; i < keys.length; i++){
                    langsArr.push(countryData.languages[keys[i]])
                }
                return langsArr;
            }
            // creating the More info page
            moreInfo = document.createElement("section")

            let moreInfoPageHtml = `
            <button class="${getBackBtClass}" onclick=(back())>
                <img src="${arrowRight}">
                Back
            </button>

            <section class= "moreInfo">                
                <img class="flagInfoPage" src="${countryData.flags[0]}" alt="${countryName}">
                <article>
                    <h1>
                        ${countryData.name.common}
                    </h1>
                    <ul class="infoList">
                        <ul>
                            <li>Native Name: <span>${countryData.name.nativeName[langsKeys[0]].common}</span></li>
                            <li>Population: <span>${countryData.population}</span></li>
                            <li>Region: <span>${countryData.region}</span></li>
                            <li>Sub Region: <span>${countryData.subregion}</span></li>
                            <li>Capital: <span>${countryData.capital}</span></li>
                        </ul>
                        <br>

                        <ul>
                            <li>Top Level Domain: <span>${countryData.tld[0]}</span></li>
                            <li>Currencies: <span>${countryData.currencies[currenciesKeys].name}</span></li>
                            <li>Languages: <span>${languagesLoop(langsKeys)}</span></li>
                        </ul>
                    </ul>
                    <br>
                    <div class= "borderCountriesContainer">
                        <h2>Border Countries:</h2>
                        <ul class="borderCountriesContent">
                            ${getBorder(countryData.borders)}
                        </ul>
                    </div>
                </article>
            </section>
            `
            // undisplay the cards and the filters 
            cardsContainer.style.display = "none"
            nav.style.display = "none"

            moreInfo.clasList = "moreInfo"
            moreInfo.innerHTML = moreInfoPageHtml
            main.appendChild(moreInfo)
        }
    })
}
function back(){
    moreInfo.remove()
    // display the cards and the filters 
    cardsContainer.style.display = ""
    nav.style.display = ""
}