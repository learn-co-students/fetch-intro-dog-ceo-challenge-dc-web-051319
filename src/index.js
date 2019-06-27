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
    //where the dog breeds will be displayed
    let breedPlacement = document.getElementById('dog-breeds')
    //select dog breed to search
    let select = document.getElementById('breed-dropdown');
    //button to search the dogs by name
    let selectDog = document.getElementById('select_dog');

    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then( data => {

        selectDog.addEventListener('click',function() {

        switch (select.value) {
            case 'a': //if the select is a
                for (let key in data.message) {
                    let li = document.createElement('li')
                    if (key.startsWith('a')) {
                        li.innerText = key;
                        breedPlacement.appendChild(li);
                    };
                    li.addEventListener('click',function() {
                        li.style.color = 'red';
                    });
                };
                break;
            case 'b': //if the select is b
                for (let key in data.message) {
                    let li = document.createElement('li')
                    if (key.startsWith('b')) {
                        li.innerText = key;
                        breedPlacement.appendChild(li);
                    };
                    li.addEventListener('click',function() {
                        li.style.color = 'red';
                    });
                 };
                break;
            case 'c': //if the select is c
                for (let key in data.message) {
                    let li = document.createElement('li')
                    if (key.startsWith('c')) {
                        li.innerText = key;
                        breedPlacement.appendChild(li);
                    };
                    li.addEventListener('click',function() {
                        li.style.color = 'red';
                    });
                };
                break;
            case 'd': //if the select is d
                for (let key in data.message) {
                    let li = document.createElement('li')
                    if (key.startsWith('d')) {
                        li.innerText = key;
                        debugger
                        breedPlacement.appendChild(li);
                    };
                    li.addEventListener('click',function() {
                        li.style.color = 'red';
                    });
                };
                break;
            }
        });
    });
};



