// Save HTML elements as variables
let redInEl = document.getElementById("red");
let greenInEl = document.getElementById("green");
let blueInEl = document.getElementById("blue");
let rgbStringOutEl = document.getElementById("colorBox");
let displayEl = document.getElementById("rgb-name");
let widthInEl = document.getElementById("width");
let heightInEl = document.getElementById("height");

// Preview button event listener
redInEl.addEventListener("input", rgbPreview);
greenInEl.addEventListener("input", rgbPreview);
blueInEl.addEventListener("input", rgbPreview);

// Width and height event listener
widthInEl.addEventListener("change", changeSize);
height.addEventListener("change", changeSize);

// Event function
function rgbPreview() {
  // INPUT
  let r = +redInEl.value;
  let g = +greenInEl.value;
  let b = +blueInEl.value;

  // Validate colours (Constrain colors between 0-255)
  // Check r value
  if (r < 0) {
    r = 0;
    redInEl.value = 0;
  } else if (r > 255) {
    r = 255;
    redInEl.value = 255;
  }

  // Check g value
  if (g < 0) {
    g = 0;
    greenInEl.value = 0;
  } else if (g > 255) {
    g = 255;
    greenInEl.value = 255;
  }

  // Check b value
  if (b < 0) {
    b = 0;
    blueInEl.value = 0;
  } else if (b > 255) {
    b = 255;
    blueInEl.value = 255;
  }

  // PROCESS
  let color = "rgb(" + r + "," + g + "," + b + ")"; // String concatenation using "" and +
  let code1 = `rgb(${r}, ${g}, ${b})`; // Template string using ${} and ``

  // OUTPUT
  rgbStringOutEl.style.backgroundColor = color;
  displayEl.innerHTML = code1;
}

// Event function for changing box size
function changeSize() {
  // INPUT
  let width = widthInEl.value;
  let height = heightInEl.value;

  rgbStringOutEl.style.width = width + "px";
  rgbStringOutEl.style.height = height + "px";

  // Check width values
  if (width < 50) {
    widthInEl.value = 50;
    rgbStringOutEl.style.width = widthInEl.value;
  }

  if (width > 400) {
    widthInEl.value = 400;
    rgbStringOutEl.style.width = 400 + "px";
  }

  // Check height values
  if (height < 50) {
    rgbStringOutEl.style.height = 50 + "px";
    heightInEl.value = 50;
  }

  if (height > 200) {
    rgbStringOutEl.style.height = 200 + "px";
    heightInEl.value = 200;
  }
}

// Black button event listener
document.getElementById("btn1").addEventListener("click", blackButton);

// Event function
let code2 = `rgb(0, 0, 0)`;

function blackButton() {
  document.getElementById("colorBox").style.backgroundColor = "black";
  document.getElementById("rgb-name").innerHTML = code2;
}

// White button event listener
document.getElementById("btn2").addEventListener("click", whiteButton);

// Event function
let code3 = `rgb(255, 255, 255)`;

function whiteButton() {
  document.getElementById("colorBox").style.backgroundColor = "white";
  document.getElementById("rgb-name").innerHTML = code3;
}
