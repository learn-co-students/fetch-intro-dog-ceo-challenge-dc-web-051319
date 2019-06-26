console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    fetchDog()
    fetchBreed() 
})


function changeColor(event){
    li = event.currentTarget
    // console.log(event)
    
    li.style.color = "purple";
  return false;
}


function fetchDog(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => {
        displayDog(data.message)
    })
}

function displayDog(dataMessages) {
    dataMessages.forEach(dataMessage => {
        renderDog(dataMessage)
    });
}


function renderDog(e){
    let dogContainer = document.querySelector("#dog-image-container")
    let dogElement = document.createElement("img")
    dogElement.classList.add("dog-picture")
    dogElement.src = e
    dogContainer.appendChild(dogElement)
}

function fetchBreed(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
        displayBreed(data.message)
    })
}

function renderBreed(event){
    let dogUl = document.querySelector("#dog-breeds")
    let dogBreed = document.createElement("li")
    dogBreed.addEventListener("click", changeColor)
    dogBreed.innerText = event
    dogBreed.classList.add("the-breed")
    dogUl.appendChild(dogBreed)
}

function displayBreed(dataMessages) {
    for(let element in dataMessages){
        renderBreed(element)
    }
}

