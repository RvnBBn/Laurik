const gridSize = 3; // Size of the puzzle grid (3x3)
let tiles = [];

function createPuzzle() {
    const board = document.getElementById('puzzleBoard');
    tiles = [];

    for (let i = 0; i < gridSize * gridSize - 1; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.textContent = i + 1;
        tile.dataset.number = i + 1;
        tile.onclick = () => moveTile(tile);
        tiles.push(tile);
        board.appendChild(tile);
    }
    // Create an empty tile (last tile)
    const emptyTile = document.createElement('div');
    emptyTile.className = 'tile';
    emptyTile.textContent = '';
    emptyTile.dataset.number = '';
    tiles.push(emptyTile);
    board.appendChild(emptyTile);

    shuffleTiles();
}

function shuffleTiles() {
    // Randomly shuffle tiles
    tiles.sort(() => Math.random() - 0.5);

    // Render shuffled tiles on the board
    const board = document.getElementById('puzzleBoard');
    board.innerHTML = '';
    tiles.forEach(tile => board.appendChild(tile));
}

function moveTile(tile) {
    const emptyTileIndex = tiles.findIndex(t => t.dataset.number === '');
    const tileIndex = tiles.indexOf(tile);

    // Check if the clicked tile can move
    if (canMoveTile(tileIndex, emptyTileIndex)) {
        // Swap tiles
        [tiles[emptyTileIndex], tiles[tileIndex]] = [tiles[tileIndex], tiles[emptyTileIndex]];
        renderBoard();
        checkCompletion();
    }
}

function canMoveTile(tileIndex, emptyTileIndex) {
    // Check if the tile can move to the empty space
    const rowDiff = Math.abs(Math.floor(tileIndex / gridSize) - Math.floor(emptyTileIndex / gridSize));
    const colDiff = Math.abs((tileIndex % gridSize) - (emptyTileIndex % gridSize));
    return (rowDiff === 0 && colDiff === 1) || (colDiff === 0 && rowDiff === 1);
}

function renderBoard() {
    const board = document.getElementById('puzzleBoard');
    board.innerHTML = '';
    tiles.forEach(tile => board.appendChild(tile));
}

function checkCompletion() {
    // Check if tiles are in correct order
    const isComplete = tiles.every((tile, index) => tile.dataset.number === '' || parseInt(tile.dataset.number) === index + 1);

    if (isComplete) {
        createCompletionButton();
    }
}

function createCompletionButton() {
    // Check if a completion button already exists
    const existingButton = document.getElementById('completionButton');
    if (existingButton) 
        return;

    const completeButton = document.createElement('button');
    completeButton.id = 'completionButton';
    completeButton.textContent = 'Poti trece mai departe';
    completeButton.className = 'btn btn-secondary';
    completeButton.className = 'button';
    completeButton.onclick = 0;
    document.querySelector('.puzzle-container').appendChild(completeButton);
}
function solvePuzzle() {
    const board = document.getElementById('puzzleBoard');
    board.innerHTML = '';

    // Arrange tiles in the correct order
    tiles = [];
    for (let i = 0; i < gridSize * gridSize - 1; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.textContent = i + 1;
        tile.dataset.number = i + 1;
        tiles.push(tile);
        board.appendChild(tile);
    }
    // Create the empty tile
    const emptyTile = document.createElement('div');
    emptyTile.className = 'tile';
    emptyTile.textContent = '';
    emptyTile.dataset.number = '';
    tiles.push(emptyTile);
    board.appendChild(emptyTile);

    // Remove the Solve Puzzle button
    const completeButton = document.getElementById('completionButton');
    if (completeButton) completeButton.remove();
}

function skip()
{
    
}
// Initialize puzzle on page load
createPuzzle();
