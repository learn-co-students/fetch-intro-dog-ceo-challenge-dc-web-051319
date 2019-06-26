console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

let dropdown = document.getElementById("breed-dropdown")
dropdown.addEventListener("click", ()=> {
    switch(dropdown.value){
        case "a":
            ;
        break;
        
        case "b":
            Value = "b";
        break;

        case "c":
            Value = "c";
        break;

        case "d":
            Value = "d";
    }
})

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
    fetchBreeds()
})


function fetchData (){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(dogData  => renderDogs(dogData))
}

function renderDogs(dogData){
    dogData.message.forEach(dog => showDogs(dog))
}

function showDogs(dog){
    let dogDiv = document.getElementById("dog-image-container")
    let dogImage = document.createElement("img")
    dogImage.src = dog
    dogDiv.appendChild(dogImage)
    console.log(dog)
}

function fetchBreeds (){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(dogBreeds  => renderBreeds(dogBreeds))

}

function renderBreeds(dogBreeds){
    Object.keys(dogBreeds.message).map(breed => showBreeds(breed))
    
}

function showBreeds(breed){
    let dogUl = document.getElementById("dog-breeds")
    let dogLi = document.createElement("li")
    dogLi.innerText = breed
    dogUl.appendChild(dogLi)
    dogLi.addEventListener("click", ()=> {
        dogLi.style.color = "blue"
    })
    
}


 
    


