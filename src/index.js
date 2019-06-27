const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function(){
    let filterForm = document.getElementById('filter-form')
    filterForm.addEventListener('submit', filterFormHandler)
    imgAPI()
    breedApi()
})


function imgAPI() {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => {
            let imgArr = json.message
            // For each image, we wannt to create an element
            imgArr.forEach(function(image){
                let dogImage = document.getElementById('dog-image-container')
                let img = document.createElement('img')
                img.src = image
                dogImage.appendChild(img)
            })
        })
}

function breedApi(firstLetter = '') {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            
            let dogHash = json.message
            let allBreeds = []
            let dogBreeds = Object.keys(dogHash)
         

            
            const dogList = document.getElementById('dog-breeds')
            dogList.innerHTML = ''
            

            // Apend li of each breed and subbreed to UL
            dogBreeds.forEach(breed => {
                if (dogHash[breed].length === 0) {
                    allBreeds.push(breed)
                } else {
                    dogHash[breed].forEach(subBreed => {
                        allBreeds.push(`${breed}: ${subBreed}`)
                    })
                }
                
            })

            
            if (firstLetter !== '') {
                allBreeds = allBreeds.filter(breed => breed[0] === firstLetter)
            }

            allBreeds.forEach(breed => {
                let li = document.createElement('li')
                li.innerText = breed
                dogList.appendChild(li)
        }) 

            // create event listener on each Li
            allLI = document.querySelectorAll('li')
            allLI.forEach(li => {
                li.addEventListener('click', liHandler)
            })
        })
}

function liHandler(event) {
    console.log("click")
    event.target.classList.toggle('color')
}

function filterFormHandler(event) {
    event.preventDefault()
    let breedDropdown = document.getElementById('breed-dropdown').value
    breedApi(breedDropdown)
}