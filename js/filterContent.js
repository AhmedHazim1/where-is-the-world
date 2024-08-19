// show the filter region options
filterRegionContainer.addEventListener("focusin",()=>{
        filterRegionContent.style.display = "grid"
})

// show the filter region options
filterRegionContainer.addEventListener("focusout",()=>{
    setTimeout(()=>{
        filterRegionContent.style.display = ""
    },150)
})

// filter using the serch bar
searchBar.addEventListener("input",()=>{
    searchValue = searchBar.value.toLowerCase();

    countriesCards.forEach(coutnryC=>{
        let countryName = coutnryC.querySelector("h1").innerText.toLowerCase()

        if(countryName.indexOf(searchValue) != -1){
            coutnryC.style.display = "block"
        }else{
            coutnryC.style.display = "none"
        }
    })
})


// filter by region
regionElments.forEach(el=>{
    el.addEventListener("click",()=>{
        let region = el.textContent.toLowerCase()
        
        countriesCards.forEach(countryC=>{
            let countryRegion = countryC.querySelector("h3").lastChild.textContent.toLowerCase();

            if(region == "all"){
                countryC.style.display = "block"
            }
            else if(region == countryRegion){
                countryC.style.display = "block"
            } else{
                countryC.style.display = "none"
            }
        })
        
    })
})
