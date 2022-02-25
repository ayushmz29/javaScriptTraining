// using OLD style '.then' technique handle promises
// using 'node fetch' to use 'fetch' with node
// import fetch from 'node-fetch'

// fetch("https://dog.ceo/api/breeds/list/all").then((response) => {
//   return response.json()
// }).then((data) => {
//   console.log(data)
// })

// Using Modern Syntax of promises
const startFetching = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    // console.log(data);
    // response body from server gives 'message' which contains the dog breeds
    createBreedList(data.message);
};
startFetching();

// Building Select Dropdown
const createBreedList = (breedList) => {
    document.getElementById(
        "breed"
    ).innerHTML = `<select id="selectId" onchange="loadByBreed()">
    <option>
      Choose a Dog Breed
    </option>
    
    // Object.keys() will return an array, then we'll use 'map' method
    ${Object.keys(breedList)
        .map((breed) => {
            return `<option>
        ${breed}
      </option>`;
        })
        .join("")}
    // Join will convert an array into a single string
  </select>
  `;
};

const loadByBreed = async () => {
    selectedBreed = document.getElementById("selectId").value;
    if (selectedBreed !== "Choose a Dog Breed") {
        // alert(selectedBreed)
        const response = await fetch(
            `https://dog.ceo/api/breed/${selectedBreed}/images`
        );
        const data = await response.json();
        // console.log(data.message);
        createSlideShow(data.message);
    }
};

const createSlideShow = (imageArray) => {
    let currentIndexValue = 0;
    // console.log(imageArray[0]);
    document.getElementById("slide").innerHTML = `
    <div
        class="slideImage"
        style="
            background-image: url('${imageArray[0]}')
        "
        >
    </div>
    <div
        class="slideImage"
        style="
            background-image: url('${imageArray[1]}')
        "
        >
    </div>
    `;
    currentIndexValue += 2;

    setInterval(() => {
        document.getElementById("slideShow").insertAdjacentHTML(
            "beforeend",
            `<div
                class="slideImage"
                style="
                    background-image: url('${imageArray[currentIndexValue]}')
                "
                >
        </div>`
        );
        const deleteOldestPhoto = () => {
            // querySelector will select only the first instance
            document.querySelector(".slideImage").remove();
        };
        // after 1 sec because transition animation of oldest photo is .9s
        setTimeout(deleteOldestPhoto, 1000);
        if (currentIndexValue + 1 >= imageArray.length) {
            currentIndexValue = 0;
        } else {
            currentIndexValue += 1;
        }
    }, 3000);
};
