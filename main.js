//Creates Grid
const gridContainer = document.querySelector('#grid-container');
createSquares = () => {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square')
    gridContainer.append(gridSquare);
}
createGrid = (numberOfSquare) => {
    (numberOfSquare > 100) ? numberOfSquare = 64 : numberOfSquare = numberOfSquare;
    gridContainer.setAttribute('style',`grid-template-columns : repeat(${numberOfSquare}, 1fr)`)
    for(let i = 0; i < numberOfSquare * numberOfSquare; ++i) {
        createSquares();
    }
}
clearGrid = () => {
    gridContainer.innerHTML="";
}
createGrid(16);
/*
    Button Events
*/
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let checkID = button.id;
    checkButtonId(checkID);
  });
});
hoverEvent = (style) => {
    let square = document.querySelectorAll('.grid-square');
    square.forEach((hover) => {
        hover.addEventListener('mouseover', function( event ) {
            event.target.setAttribute("style", `${style}`);
        });
    });
}
// Changes grid squares to color black when hovered
blackColor = () => {
    hoverEvent("background-color:black;");
}
// Erases grid square's color when hovered
erase = () => {
    hoverEvent("background-color:");
}
//Resets grid
reset = () => {
    clearGrid();
    let answer = prompt("Enter number for your new grid: ");
    createGrid(answer);
}
const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
// Random color when hovered
rainbow = () => {
    let square = document.querySelectorAll('.grid-square');
    square.forEach((hover) => {
        hover.addEventListener('mouseover', function( event ) {
            event.target.setAttribute("style", `background-color:${randColor()}`);
        });
    });
}
blackColor(); //Default event

checkButtonId = (id) => {
    switch(id) {
        case 'black' : blackColor(); 
        break;
        case 'eraser' : erase();
        break;
        case 'reset' : reset();
        break;
        case 'rainbow' : rainbow();
        break;
    }
}