
const container = document.getElementById('container');


function makeDivs(numDivs) {
for (let i = 0; i < numDivs; i++){
    let gridCells = document.createElement('div');
    gridCells.classList.add('grid-item');
        
       let opacity = 0;
        gridCells.addEventListener('mouseover', function() {
            opacity += 0.1;
            if (opacity > 1) opacity = 1;
            gridCells.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;  
        });
    container.appendChild(gridCells);    
    }
    }
    makeDivs(256);

   
