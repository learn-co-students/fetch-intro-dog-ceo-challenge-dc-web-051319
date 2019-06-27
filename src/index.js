console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
  fetchDog()
  fetchBreed()
  document.addEventListener("click",changeColor)
} )

function changeColor(e){
  let b = document.querySelector("#dog-breeds")
  let breeds = e.target.style.color = "purple"


}
function fetchBreed(){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data =>{
    displayBreed(data.message)
  })
}

function displayBreed(data){
  for(let element in data){
    renderBreedToDom(element)
  }
}

function renderBreedToDom(element){
  let breedContainer = document.querySelector("#dog-breeds")
  let breedName = document.createElement("ul")
  breedName.innerText = element
  breedContainer.appendChild(breedName)
}

function fetchDog(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(data => {
    displayDog(data.message)
  }  )
}


function displayDog(event){
  event.forEach(dog => renderDogToDom(dog))
}

function renderDogToDom(dog){
  let dogContainer = document.querySelector("#dog-image-container")
  let dogImage = document.createElement("img")
  dogImage.src = dog
  dogContainer.appendChild(dogImage)
}
