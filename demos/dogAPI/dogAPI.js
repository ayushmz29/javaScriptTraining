// using OLD style '.then' technique handle promises
// using 'node fetch' to use 'fetch' with node 
import fetch from 'node-fetch'

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
}
startFetching();

// Building Select Dropdown
const createBreedList = (breedList) => {
  
}