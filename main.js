const container = document.querySelector('.container');
let gridSize = 16;

function createGrid(){
    container.innerHTML = ''; // clear current grid
    for (let i = 0; i <  gridSize * gridSize; i++) {
        
        const gridSquare = document.createElement('div');  // create grid div
        gridSquare.classList.add('grid-square'); //add css 
        container.appendChild(gridSquare); // add grid div to container
    }
    
}

function generateGrid(){
    const userInput = prompt("Enter number of squares per side(1-100");
    const newGridSize = parseInt(userInput);

    if(!isNaN(newGridSize) && newGridSize > 0 && newGridSize <=100){
        gridSize = newGridSize; 
        createGrid();
    }else{
        alert("Enter a number between 1 and 100");
    }
}
createGrid();