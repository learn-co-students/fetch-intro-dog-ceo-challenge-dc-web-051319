document.addEventListener('DOMContentLoaded', init )

function init () {
  getDogImages()
  getDogBreeds()
}

function getDogImages () {
  return fetch('https://dog.ceo/api/breeds/image/random/10')
.then(resp => resp.json())
.then(json => showDogImages(json.message));
}

function showDogImages (dogs) {

  let target = document.getElementById("dog-image-container")
  dogs.forEach( dog => {
    let dogDiv = document.createElement('div')
    dogDiv.className = "dog-image"
    target.appendChild(dogDiv)
    const dogIMG = document.createElement('img')
    dogIMG.src = dog
    dogDiv.appendChild(dogIMG)
  })
}


function getDogBreeds () {
  return fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => showDogBreeds(json.message))
}

function showDogBreeds (breeds) {
  let dogBreeds = document.getElementById("dog-breeds")
  breedList = Object.keys(breeds)
  breedList.forEach( breed => {

// Add lines for and 41 to closed at 47 to show that we can filter the list with the right information

    let l = breed.charAt(0)
    if (l === "b") {
      let li = document.createElement('li')
      li.className = 'dog-breed-li'
      li.innerText = `${breed}`
      li.addEventListener("click", changeColor)
      dogBreeds.appendChild(li)
    }
  })
}



function changeColor(event) {
  let li = event.target
  li.style.color = "green"
}
