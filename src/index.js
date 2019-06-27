console.log('%c connected', 'color: green');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener('DOMContentLoaded', fetchImages);
document.addEventListener('DOMContentLoaded', fetchBreeds);

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

function fetchBreeds() {
    let ul = document.getElementById('dog-breeds')
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            for (const message in data.message) {
                let li = document.createElement('li')
                li.innerText = message
                ul.appendChild(li)

                li.addEventListener('click', function() {
                    li.style.color = 'green'
                })
            }
        })
};
