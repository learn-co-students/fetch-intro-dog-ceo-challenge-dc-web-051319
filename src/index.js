console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded",init)

function init(){
    getDogImg();
    getDogBreeds();
    setFilterBreeds();
    setRestButton();
}

function getDropDownValue(){
    return document.getElementById("breed-dropdown").value;
}

function getDogImg(){
    fetch(imgUrl)
    .then(response => response.json())
    .then(imgurl => {
        imgurl.message.forEach(element => {
            displayImage(element);
        });
    })
}

function getDogBreeds(){
    fetch(breedUrl)
    .then(response => response.json())
    .then(breedlist => printBreeds(breedlist.message))
}

function displayImage(imgurl){
    let imgDiv = document.getElementById("dog-image-container");
    let newImg = document.createElement("img");
    newImg.src = imgurl;
    newImg.style.height = "400";
    newImg.style.width = "400";
    imgDiv.appendChild(newImg);
}

function printBreeds(breedsObj){
    let breedDiv = document.getElementById("dog-breeds");
    breedDiv.innerHTML = ""
    for (let [key, value] of Object.entries(breedsObj)) {
        let dogBreed = document.createElement("li");
        dogBreed.addEventListener("click",breedClickHandler);
        dogBreed.style.color = "blue";
        dogBreed.innerText=key;
        dogBreed.classList.add("dog-breed");
        breedDiv.appendChild(dogBreed);
        if (value.length > 0){
            let subBreedUl = document.createElement("ul");
            value.forEach(subBreed => {
                let subBreedLi = document.createElement("li");
                subBreedLi.innerText = subBreed;
                subBreedUl.appendChild(subBreedLi);
            });
            dogBreed.appendChild(subBreedUl);
        }
    }
}

function breedClickHandler(e){
    if (e.target.style.backgroundColor === ""){
        e.target.style.backgroundColor = "black";
        e.target.style.color = "white";
    }else{
        e.target.style.backgroundColor = "";
        e.target.style.color = "blue";
    }
}

function setFilterBreeds(){
    let breedDropDown = document.getElementById("breed-dropdown");
    breedDropDown.addEventListener("change",filterHandler);
}

function filterHandler(e){
    fetch(breedUrl)
    .then(response => response.json())
    .then(breedlist => filterBreeds(breedlist.message,getDropDownValue()))
}

function filterBreeds(breedsObj,condition){
    let filteredObj = {};
    for (let key in breedsObj) {
        if (key.charAt(0)===condition){
            filteredObj[key] = breedsObj[key];
        }
    }
    printBreeds(filteredObj);
}

function setRestButton(){
    let resetButton = document.createElement("button");
    let label = document.querySelector("label");
    label.appendChild(resetButton);
    resetButton.innerHTML = "RESET";
    resetButton.addEventListener("click",getDogBreeds);

}