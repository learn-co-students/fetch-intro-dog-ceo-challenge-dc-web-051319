console.log('%c connected', 'color: green');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener('DOMContentLoaded', init);

function init() {
    fetchImages()
    fetchBreeds()
}

function fetchImages() {
    let div = document.getElementById('dog-image-container')
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            for (const element of data.message) {
            let img = document.createElement('img')
                img.src = element
                div.appendChild(img)
            }
        })
};

function fetchBreeds(filter = undefined) {
    let ul = document.querySelector('#dog-breeds')
    ul.innerHTML = ''
    let select = document.getElementById('breed-dropdown')
    select.addEventListener('click', handleDropdown)
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            for (const breed in data.message) {
                if (!filter || breed.startsWith(filter)) {
                    let li = document.createElement('li')
                    li.innerText = breed
                    ul.appendChild(li)

                    li.addEventListener('click', function () {
                        li.style.color = 'green'
                    })
                }
            }
        })
};

function handleDropdown(event) {
    fetchBreeds(event.target.value)
}
