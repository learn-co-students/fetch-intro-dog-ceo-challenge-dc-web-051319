console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breedNames;
let list;

document.addEventListener("DOMContentLoaded", ()=>{
  fetchImages()
  fetchBreed()
  let selectDropdown = document.getElementById("breed-dropdown")
  selectDropdown.addEventListener("change", getFilteredBreeds )



})

function changeColor(event){
  event.target.style.color = "blue"
}

function fetchBreed(){
  fetch(breedUrl)
  .then(response => response.json())
  .then(data => getBreedFromArray(data.message))
}

function getBreedFromArray(breedObject, letter=false){
  console.log(letter)
  breedNames = breedObject

  let array = Object.keys(breedObject)
  array.forEach((entry) => {
    if(letter){
      if(entry.startsWith(letter)){
        listBreed(entry)
      }
  }else {
    listBreed(entry)
  }
  })

}

function listBreed(breedEntry){
  let li = document.createElement("li")
  li.addEventListener("click", changeColor)
  let ulOfBreeds = document.querySelector("#dog-breeds")
  li.innerText = breedEntry
  console.log(li)
  ulOfBreeds.appendChild(li)


}

function getFilteredBreeds(event){
  let letter = event.target.value
  breedNames
  list = document.querySelector("#dog-breeds")
  list.innerHTML = ""
  getBreedFromArray(breedNames, letter)


}

function fetchImages () {
  fetch(imgUrl)
  .then(response => response.json())
  .then(data => getImagesFromArray(data.message))

}

function getImagesFromArray(data) {
  data.forEach( (entry) => {
    printImagesFromArray(entry)
  })
}

function printImagesFromArray(entry){
  let imgElement = document.createElement("img")
  let container = document.querySelector("#dog-image-container")
  imgElement.src = entry
  container.appendChild(imgElement)
}
