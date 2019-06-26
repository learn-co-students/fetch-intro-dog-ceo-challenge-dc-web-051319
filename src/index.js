
document.addEventListener("DOMContentLoaded", () => {
    dogContainer = document.getElementById("dog-image-container")
    dogBreedList = document.getElementById("dog-breeds")

    fetchDogBreeds()
    fetchDogImages()
})
    
let dogContainer
let dogBreedList
    
function fetchDogImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(dogsArray => {
            dogsArray.message.forEach((dog) => renderDogImages(dog))
        })
}
    
function renderDogImages(dogUrl) {
    let dogImage = document.createElement("img")
    dogImage.src = dogUrl
    debugger
    dogContainer.appendChild(dogImage)
}
    
function fetchDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(dogsObj => {
            let breeds = dogsObj.message
            for (let breed in breeds) {
                let subBreeds = []
                if (breeds[breed].length > 0) {
                    subBreeds = breeds[breed]
                }
                renderDogBreeds(breed, subBreeds)
            }
        })
}
    
function renderDogBreeds(breed, subBreeds) {
    let breedListItem = document.createElement("li")
    breedListItem.addEventListener("click", (event) => {
        breedListItem.style.color.rand
    })
    breedListItem.innerText = `${breed}`
        if (subBreeds.length > 0) {
            let subBreedList = document.createElement("ul")
            subBreeds.forEach(subBreed => {
                let subBreedListItem = document.createElement("li")
                subBreedListItem.innerText = subBreed
                subBreedList.appendChild(breedListItem)
                    debugger
            })
            breedListItem.appendChild(subBreedList)
        }
        dogBreedList.appendChild(breedListItem)
}
    