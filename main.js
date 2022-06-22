/*
    Creates Grid
*/
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
/*
    Buttons
*/