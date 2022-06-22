//Creates Grid
const gridContainer = document.querySelector('#grid-container');
createSquares = () => {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square')
    gridContainer.append(gridSquare);
}
createGrid = (numberOfSquare) => {
    gridContainer.setAttribute('style',`grid-template-columns : repeat(${numberOfSquare}, 1fr)`)
    for(let i = 0; i < numberOfSquare * numberOfSquare; ++i) {
        createSquares();
    }
}
createGrid(16);
//Buttons
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let checkID = button.id;
    console.log(checkID);
    checkButtonId(checkID);
  });
});
checkButtonId = (id) => {
    switch(id) {
        case 'black' : blackColor(); 
        break;
    }
}
// Changes grid squares to color black when hovered
blackColor = () => {
    let square = document.querySelectorAll('.grid-square');
    square.forEach((hover) => {
        hover.addEventListener('mouseover', function( event ) {
            event.target.setAttribute("style", "background-color:black;");
        });
    });
}
blackColor(); //Default event