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
            let dogBreeds
            if (firstLetter === '') {
                dogBreeds = Object.keys(dogHash)
            } else {
                dogBreeds = Object.keys(dogHash).filter(breed => {
                    return breed[0] === firstLetter
                })
            }

            
            const dogList = document.getElementById('dog-breeds')
            dogList.innerHTML = ''
            

            // Apend li of each breed and subbreed to UL
            dogBreeds.forEach(breed => {
                if (dogHash[breed].length === 0) {
                    let li = document.createElement('li')
                    li.innerText = breed
                    dogList.appendChild(li) 
                } else {
                    dogHash[breed].forEach(subBreed => {
                        console.log(subBreed)
                        if (subBreed[0] === firstLetter || firstLetter === '') {
                            let li = document.createElement('li')
                            li.innerText = subBreed
                            dogList.appendChild(li)
                        } 
                    })
                }
                
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