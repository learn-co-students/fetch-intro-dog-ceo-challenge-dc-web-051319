
document.addEventListener("DOMContentLoaded", function() {
  getDogs()

  document.addEventListener('input', function(event) {
    letter = event.target.value
    renderDogLi(filterBreed(letter))
  })
})

///////////////////////////////////////////////////////////
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getDogs() {
  // Challenge #1
  fetch(imgUrl)
  .then(response => response.json())
  .then(dogsArray => { 
    dogsArray.message.forEach(dog => renderDogs(dog)) 
  })

  // Challenge #2
  fetch(breedUrl)
  .then(response => response.json())
  .then(dogsArray => { 
    let breeds = Object.keys(dogsArray.message)
    for (i = 0; i < breeds.length; i++) { 
      renderDogLi(breeds[i])
    }
  })
}

function filterBreed(letter){
  fetch(breedUrl)
  .then(response => response.json())
  .then(dogsArray => { 
    let breeds = Object.keys(dogsArray.message)
    let breedFiltered = breeds.filter(breed => {
      return breed[0][0] === letter
    })
    debugger
  })
}

function renderDogLi(breed) {
  let dogBreeds = document.getElementById('dog-breeds');
  let li = document.createElement('li')
  li.innerText = breed
  dogBreeds.appendChild(li)
  li.addEventListener('click', colorChange)
}

function colorChange(e){
  e.target.style.color = "#ff0000";
  // console.log(e.target)
}

function renderDogs(dogImageSrc) {
  let dogContainer = document.getElementById('dog-image-container');
  let image = document.createElement('img')
  image.src = `${dogImageSrc}`
  dogContainer.appendChild(image);
}


