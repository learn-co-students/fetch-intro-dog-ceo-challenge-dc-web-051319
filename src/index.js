// console.log('%c HI', 'color: firebrick')

//api: const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener('DOMContentLoaded',fetchImages)

function fetchImages() {
    let imagePlacement = document.getElementById("dog-image-container");

    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then( (response) => response.json())
        .then( (data) => {
            
            for (var i = 0; i < data.message.length; i++) {

                let newImage = document.createElement('img');
                newImage.src = data.message[i];
                let breaker = document.createElement('br');

                newImage.style.width = '500px'
                newImage.style.height = '500px'

                imagePlacement.appendChild(newImage);
                imagePlacement.appendChild(breaker);
            }     
        });
}
