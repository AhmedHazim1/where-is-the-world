// for theams
const body = document.querySelector("body").classList
const mainHeader = document.querySelector(".main-header").classList
const theamCon = document.querySelector(".theam-controls").classList
const searchForm = document.querySelector(".search-form").classList
const regionFilterBt = document.querySelector(".regionFilterBt").classList

let darkMoodOn = false

switcher.addEventListener("click",el=>{
    let checked = switcher.checked;
    if(!checked){
        lightMode()
    }else{
        darkMode()
    }
})

// dark Mode
function darkMode(){
    body.add("body-DarkMood")
    mainHeader.add(`main-header-DarkMood`)
    theamCon.add(`theam-controls-DarkMood`)

    searchForm.add("search-form-DarkMood")
    searchBar.classList.add("search-bar-DarkMood")
    
    regionFilterBt.add("regionFilterBt-DarkMood")
    filterRegionContent.classList.add("filterRegionContent-DarkMood")
    
    for(let i=0; i < countriesCards.length;i++){
        countriesCards[i].classList.add("card-DarkMood")
    }

    try{
        // More info page elemnts
        let getBackBt = document.querySelector(".getBackBt").classList
        let borderCountries =  document.querySelectorAll(".borderCountries")
        
        getBackBt.add("getBackBt-DarkMood")
        for(let i=0; i< borderCountries.length; i++){
            borderCountries[i].classList.add("borderCountries-DarkMood")
        }
    }catch(error){}
    darkMoodOn = true
}
// light Mode
function lightMode(){
    body.remove("body-DarkMood")
    mainHeader.remove(`main-header-DarkMood`)
    theamCon.remove(`theam-controls-DarkMood`)

    searchForm.remove("search-form-DarkMood")
    searchBar.classList.remove("search-bar-DarkMood")

    regionFilterBt.remove("regionFilterBt-DarkMood")
    filterRegionContent.classList.remove("filterRegionContent-DarkMood")

    for(let i=0; i < countriesCards.length;i++){
        countriesCards[i].classList.remove("card-DarkMood")
    }
 
    try{
        let getBackBt = document.querySelector(".getBackBt").classList
        let borderCountries =  document.querySelectorAll(".borderCountries")

        getBackBt.remove("getBackBt-DarkMood")
        
        for(let i=0; i< borderCountries.length; i++){
            borderCountries[i].classList.remove("borderCountries-DarkMood")
        }
    }catch(error){}
    darkMoodOn = false
}
