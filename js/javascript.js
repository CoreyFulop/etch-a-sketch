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
        square.setAttribute("id", `square-${i}`);
        gridContainer.appendChild(square);
    }
}

createGrid(16, primaryLength, sketchContainer);