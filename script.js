'use strict';

const currentDiv = document.getElementById("container");
const button = document.getElementById("reset"); 

function addDiv(cellSize) {
  const newDiv = document.createElement("div");
  newDiv.style.width = cellSize + "%";
  currentDiv.appendChild(newDiv);
  newDiv.addEventListener("mouseenter", () => {
    newDiv.style.backgroundColor = "#363838";
  })
}

function buildGrid(input) {
  currentDiv.innerHTML = ""; 
  const cellSize = 100 / input; 
  const squareSide = input ** 2; 
  for (let i = 1; i <= squareSide; i++) {
    addDiv(cellSize);
  }
}

// Initial grid on page load
buildGrid(16); 

button.addEventListener("click", () => {
  const input = prompt('What number of squares per side for the new grid?'); 
  if (input === null || isNaN(Number(input.trim()))) return; 
  buildGrid(Number(input)); 
}); 


