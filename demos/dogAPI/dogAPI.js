// using OLD style '.then' technique handle promises
// using 'node fetch' to use 'fetch' with node 
// import fetch from 'node-fetch'

fetch("https://dog.ceo/api/breeds/list/all").then((response) => {
  return response.json()
}).then((data) => {
  // console.log(data)
})

// Using Modern Syntax of promises
const startFetching = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all")
  const data = await response.json()
  // console.log(data);
  // response body from server gives 'message' which contains the dog breeds
  createBreedList(data.message);
}
startFetching();

// Building Select Dropdown
const createBreedList = (breedList) => {
  document.getElementById("breed").innerHTML = `
  <select>
    <option>
      Choose a Dog Breed
    </option>
    
    // Object.keys() will return an array, then we'll use 'map' method
    ${Object.keys(breedList).map((breed) => {
      return `<option>
        ${breed}
      </option>`
    }).join('')}
    // Join will convert an array into a single string
  </select>
  `
}