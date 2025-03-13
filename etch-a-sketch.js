
const container = document.getElementById('container');
let red = Math.floor(Math.random() * 224) + 1;
    let green = Math.floor(Math.random() * 224) + 1;
    let blue = Math.floor(Math.random() * 224) + 1;

function makeDivs(numDivs) {
for (let i = 0; i < numDivs; i++){
    let gridCells = document.createElement('div');
    gridCells.classList.add('grid-item');
    
       let opacity = 0;
        gridCells.addEventListener('mouseover', function() {
            opacity += 0.1;
            if (opacity > 1) opacity = 1;
            gridCells.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;  
        });
    container.appendChild(gridCells);    
    }
    }
    makeDivs(256);

   
