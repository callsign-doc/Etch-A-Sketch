let mainContainer = document.getElementById('mainContainer');
let gridContainer = document.getElementById('gridContainer');
let newGridBtn = document.getElementById('newGridBtn');
let currentGridSizeUI = document.getElementById('currentGridSize');

let currentGridSize;

let randomRGBValue = function() {
    
}

function generateRandomColor() {
    // Generate random RGB values (pastel color)
    const randomRed = Math.floor(Math.random() * 101) + 150;  // Limit to 150-250 range
  const randomGreen = Math.floor(Math.random() * 101) + 150;  // Limit to 150-250 range
  const randomBlue = Math.floor(Math.random() * 101) + 150;  // Limit to 150-250 range

    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
}

newGridBtn.addEventListener('click', ()=> {
    let dimension = prompt('Enter the size of your square grid (e.g., 8 for an 8x8 grid)');
    
    //check if dimension is a number
    if (isNaN(dimension)) {
        alert('Input is not a number (eg, 8)');

    } else {
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.lastChild);
        }
        
        if (dimension > 100) {
            //limit max grid to 100x100
            alert('Exceeded limit of 100x100.')
            createGrid(100);
        } else {
            createGrid(dimension);
        }
    }
    
})

gridContainer.addEventListener('mouseover', (event)=> {
    

    // Set the background color using the rgb() function
    event.target.style.backgroundColor = generateRandomColor();
})

function createGrid(dimension) {
    for (let i = 0; i < dimension; i++) {
        let row = document.createElement('div');
        row.id = 'gridRow';
    
        for (let i = 0; i < dimension; i++) {
            let box = document.createElement('div');
            box.id = 'gridBox'
            row.append(box);
    
            console.log(`Box ${i} was created`);
        }
    
        gridContainer.append(row);
    }

    currentGridSize = `${dimension} x ${dimension}`;
    currentGridSizeUI.textContent = currentGridSize;
}


createGrid(16);


  