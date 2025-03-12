
const container = document.getElementById('container');
//const color = document.getElementsByTagName('div');

function makeDivs(numDivs) {
for (let i = 0; i < numDivs; i++){
    let gridCells = document.createElement('div');
    gridCells.classList.add('grid-item');
        
       
        gridCells.addEventListener('click', function() {
            gridCells.style.backgroundColor = 'blue';  
        });
    container.appendChild(gridCells);    
    }
    }
    makeDivs(256);

    //container.addEventListener(onclick, (div) => {
    //container.classList.add('hidden');


    //});
