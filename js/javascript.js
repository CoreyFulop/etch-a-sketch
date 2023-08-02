"use strict"

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
    targetSquare.style.backgroundColor = "black";
}

createGrid(100, primaryLength, sketchContainer);

const gridSquares = Array.from(document.querySelectorAll(".grid-square"));
gridSquares.forEach(gridSquare => gridSquare.addEventListener("mouseover", changeColour));