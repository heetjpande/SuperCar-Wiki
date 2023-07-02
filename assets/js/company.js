let carCompany = ["BMW", "Audi", "Tesla", "Mercedes", "Aston Martin", "Rolls Royce", "Bently", "Toyota", "MG", "Ford", "Koenigsegg", "Lamborgini", "Porche", "Volkswagon"]
let carGrid = document.getElementsByClassName("car-grid")[0]

const lower = carCompany.map(element => {
    return element.toLowerCase();
  });

carCompany.forEach((value, index) => {
    let carContainer = document.createElement("div")
    carContainer.setAttribute("class", "car-container")
    carContainer.innerHTML = `<div class="car-pic">
                    <img src="../assets/img/company/car-logo-${index + 1}.png" alt="${value}">
                </div>
                <div class="car-title">${value}</div>`
    carGrid.appendChild(carContainer)
})
function sortAndSearch(value) {
    // Get the input value
    const inputValue = document.getElementById('inputValue').value;
    let carContainer = document.createElement("div")
    console.log(inputValue);

    // Search for the input value in the array
    let index = lower.indexOf(inputValue);

    // Display the search result
    if (lower.includes(inputValue)) {
        document.getElementById("clear").innerHTML = "";
        carContainer.setAttribute("class", "car-container")
        carContainer.innerHTML = `<div class="car-pic">
                    <img src="../assets/img/company/car-logo-${index + 1}.png" alt="${value}">
                </div>
                <div class="car-title">${inputValue}</div>`
        carGrid.appendChild(carContainer)
    } else if(inputValue == ""){
        document.getElementById("clear").innerHTML = "";
        lower.forEach((value, index) => {
            let carContainer = document.createElement("div")
            carContainer.setAttribute("class", "car-container")
            carContainer.innerHTML = `<div class="car-pic">
                            <img src="../assets/img/company/car-logo-${index + 1}.png" alt="${value}">
                        </div>
                        <div class="car-title">${value}</div>`
            carGrid.appendChild(carContainer)
        })
    } 
    else {
        console.log('Value', inputValue, 'not found in the array');
        document.getElementById("clear").innerHTML = "";
        carContainer.innerHTML = `
                <div class="car-title">No Such Company Found</div>`
        carGrid.appendChild(carContainer)
    }
}
document.getElementById('inputValue').addEventListener('input', sortAndSearch);