
document.addEventListener("DOMContentLoaded", () => {
  fetchDogs();

  // Filter by Select Menu
  document.addEventListener('input', (e) => {
    letter = e.target.value
    filterItems(letter)
  })

});

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogs() {
  fetch(imgUrl)
  .then(response => response.json())
  .then(data => {
    data.message.forEach(image => {
      createImage(image)
    })
  })

  fetch(breedUrl)
  .then(response => response.json())
  .then(data => {
    for (let key in data.message) {
      createListItem(key)
    }
  })
}

function createImage(image){
  let ul = document.getElementById('dog-image-container')
  let li = document.createElement('li')
  let img = document.createElement('img')
  img.src = image
  li.appendChild(img)
  ul.appendChild(li)
}

function createListItem(text) {
  let ul = document.getElementById('dog-breeds')
  let li = document.createElement('li')
  li.innerText = text
  li.dataset.filter = text[0]
  ul.appendChild(li)
  li.addEventListener('click', changeTextColor)
}

function changeTextColor(e) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  e.target.style.color = `rgb(${r},${g},${b})`
}

function filterItems(letter) {
  let listItems = document.querySelectorAll('li[data-filter]')

  // "filter" is interchangable with "forEach" here
  Array.from(listItems).filter(item => {
    item.style.display = "none"
    if (item.dataset.filter === letter) {
      item.style.display = "list-item"
    }
  })
}