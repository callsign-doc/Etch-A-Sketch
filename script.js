let mainContainer = document.getElementById('mainContainer');
let gridContainer = document.getElementById('gridContainer');
let newGridBtn = document.getElementById('newGridBtn');

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
            createGrid(100);
        } else {
            createGrid(dimension);
        }
    }
    
})

gridContainer.addEventListener('mouseover', (event)=> {
    event.target.style.backgroundColor = 'blue';
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
}

createGrid(16);


  