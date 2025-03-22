
const container = document.getElementById('container');
const buttonOne = document.getElementById('eraser');
let red = Math.floor(Math.random() * 224) + 1;
    let green = Math.floor(Math.random() * 224) + 1;
    let blue = Math.floor(Math.random() * 224) + 1;
let numDivs = 256;

for (let i = 0; i < numDivs; i++){
    let gridCells = document.createElement('div');
    gridCells.classList.add('grid-item');
   
       let opacity = 0;
        gridCells.addEventListener('mouseover', function() {
            opacity += 0.2;
            if (opacity > 1) opacity = 1;
            gridCells.style.backgroundColor = `rgba(${red},${green},${blue}, ${opacity})`  
        });
    container.appendChild(gridCells);    
    }
   


    

    function restart(moreDivs) {
       
        container.innerHTML = '';
    

        for (let i = 0; i < moreDivs; i++) {
            let gridCells = document.createElement('div');
            gridCells.classList.add('grid-item');
            
            let opacity = 0;
            gridCells.addEventListener('mouseover', function() {
                opacity += 0.2;
                if (opacity > 1) opacity = 1;
                
                gridCells.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
            });
            container.appendChild(gridCells);
        }
    }
    
 
      
    buttonOne.addEventListener('click', function() {
        let newGridSize = prompt("how big u want it?");
        if (newGridSize > 100) newGridSize = 100;
        let GridRestart = newGridSize * newGridSize;
        restart(GridRestart)
    })