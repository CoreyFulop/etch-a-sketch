"use strict"

function randomInt() {
    return Math.floor(Math.random() * 255); // random int in range 0 - 255 
}

// the dimensions of the sketch surface is 600px x 600px
const primaryLength = 600;

const sketchContainer = document.querySelector(".sketch-container");

function createGrid(squaresPerSide, sideLength, gridContainer) {
    let numberOfSquares = squaresPerSide ** 2;
    for (let i = 0; i < numberOfSquares; i++) {
        let square = document.createElement("div");
        square.style.height = `${sideLength/squaresPerSide}px`;
        square.style.width = `${sideLength/squaresPerSide}px`;
        square.style.backgroundColor = "#eeeeee";
        square.classList.add("grid-square");
        square.setAttribute("id", `square-${i}`);
        gridContainer.appendChild(square);
    }
}

function changeColour(e) {
    let targetSquare = e.target;
    targetSquare.style.backgroundColor = `rgb(${randomInt()},${randomInt()},${randomInt()})`;
}

function resetGrid() {
    let inputSideLengthString = prompt("Enter the number of squares on each side of the grid (1-100): ");
    let inputSideLength = Math.floor(+inputSideLengthString);
    if (inputSideLength > 100) {
        inputSideLength = 100; // limit number of squares to conserve computer resources
    } else if (inputSideLength < 1) {
        inputSideLength = 16; // stop zero or negative number of squares along each side
    }
    sketchContainer.textContent = "";
    createGrid(inputSideLength, primaryLength, sketchContainer);
    const gridSquares = Array.from(document.querySelectorAll(".grid-square"));
    gridSquares.forEach(gridSquare => gridSquare.addEventListener("mouseover", changeColour));
}

createGrid(16, primaryLength, sketchContainer);

const gridSquares = Array.from(document.querySelectorAll(".grid-square"));
gridSquares.forEach(gridSquare => gridSquare.addEventListener("mouseover", changeColour));

const newGridButton = document.querySelector("#new-grid");
newGridButton.addEventListener("click", resetGrid);