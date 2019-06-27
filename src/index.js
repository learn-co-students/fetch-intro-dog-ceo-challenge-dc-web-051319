const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

document.addEventListener("DOMContentLoaded", function() {
    let filterForm = document.getElementById("filter-form");
    filterForm.addEventListener("submit", filterFormHandler);
    imgAPI();
    breedAPI();
})


function imgAPI () {
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => {
            let imgArr = json.message;
                imgArr.forEach( (image) => {
                    let dogImageContainer = document.getElementById("dog-image-container");
                    let img = document.createElement("img");
                    

                    img.src = image;
                    dogImageContainer.appendChild(img);
            })
        })
}

function breedAPI() {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            const dogHash = json.message;
            const dogBreeds = Object.keys(dogHash);
            const dogList = document.getElementById("dog-breeds");
            
            dogBreeds.forEach(breed => {
               if (dogHash[breed].length === 0) {
                   let li = document.createElement("li");
                   li.innerText = breed;
                   dogList.appendChild(li);
               } else {
                   dogHash[breed].forEach(subBreed => {
                    let li = document.createElement("li");
                    li.innerText = subBreed;
                    dogList.appendChild(li);
                   })
               }
            })

            allLi = document.querySelectorAll("li");
            allLi.forEach(li => {
                li.addEventListener("click", liHandler)
            })

        })
}

function liHandler(event) {
    console.log("click")
    event.target.classList.toggle("color")
}

function filterFormHandler(event) {
    event.preventDefault();
    let breedDropDown = document.getElementById("breed-dropdown").value;
    
}

