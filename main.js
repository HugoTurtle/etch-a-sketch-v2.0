const gridContainer = document.querySelector('#grid-container');

createGrid = (numberOfSquare) => {
    for(let i = 0; i < numberOfSquare * 2; ++i) {
        const gridSquare = document.createElement('div');
        gridContainer.append(gridSquare);
    }
}