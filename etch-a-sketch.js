
const container = document.getElementById('container');

function makeDivs(numDivs) {
for (let i = 0; i < numDivs; i++){
    let gridCells = document.createElement('div');
    container.appendChild(gridCells);    
    }
    }

makeDivs(256);