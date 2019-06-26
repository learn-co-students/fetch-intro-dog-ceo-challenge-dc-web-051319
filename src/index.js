// console.log('%c HI', 'color: firebrick')

//api: const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//api: const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//event listeners will be called when DOM loads
document.addEventListener('DOMContentLoaded',fetchImages)
document.addEventListener('DOMContentLoaded',fetchBreeds)

//getting the images of dogs
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

//getting breeds of the dogs
function fetchBreeds() {
    let breedPlacement = document.getElementById('dog-breeds')

    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then( data => {

        for (let key in data.message) {
            let li = document.createElement('li')
            li.innerText = key;

            breedPlacement.appendChild(li);
        }
    });
};



