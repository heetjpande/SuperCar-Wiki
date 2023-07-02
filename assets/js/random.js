// Generate random car and display details
function generateRandomCar() {
  const randomIndex = Math.floor(Math.random() * cars.length);
  const randomCar = cars[randomIndex];

  // Display car details in HTML elements
  document.getElementById("car-name").textContent = randomCar.name;
  document.getElementById("car-speed").textContent = "Top Speed: " + randomCar.speed;
  document.getElementById("car-manufacturer").textContent = "Manufactured By: " + randomCar.manufacturer;
  document.getElementById("car-year").textContent = "Year: " + randomCar.year;
  document.getElementById("car-engine").textContent = "Engine: " + randomCar.engine;
  document.getElementById("car-horsepower").textContent = "Horsepower: " + randomCar.horsepower;

  // Update car image
  const carImage = document.getElementById("car-image");
  carImage.src = randomCar.image;
  carImage.alt = randomCar.name;
}

// Call the function to generate a random car when the page loads
window.addEventListener("load", generateRandomCar);
