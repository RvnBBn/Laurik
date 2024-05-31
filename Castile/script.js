let clues = [];
let currentPuzzle = 0;

const puzzles = [
    { 
        type: 'memoryMatch',
        start: startMemoryMatch,
        clue: 'Raspunde la puzzle pt a primii hinturi.'
    },
    { 
        type: 'patternRecognition',
        start: startPatternRecognition,
        question: 'In ce perioada se petrece firul epic?(sarbatoare)',
        answer: 'Paste',
        clue: 'Poza din camera nu e completa'
    },
    { 
        type: 'logicPuzzle',
        start: startLogicPuzzle,
        question: 'Ce ti s-a parut ciudat in poza?',
        // answer: 'Walking between the library and the park', // No longer needed
        clue: 'Victima se pregatea sa iasa in oras.'
    },
    { 
        type: 'codeDecryption',
        start: startCodeDecryption,
        encryptedMessage: '12 21 16 9 9 12 9 2 5 18 9 ',
        decryptedMessage: 'Lupii Liberi',
        clue: 'O pata de sange pe noptiera cu Rh + la fel si pe capul lui Razvan.'
    }
];

function startMemoryMatch() {
    // Implementation of memory match game
    console.log('Memory Match started');
    // Once completed
    completePuzzle();
}

function startPatternRecognition() {
    const puzzle = puzzles[currentPuzzle];
    document.getElementById('patternQuestion').innerText = puzzle.question;
    console.log('Pattern Recognition started');
}

function checkPattern() {
    const answer = document.getElementById('patternAnswer').value;
    const puzzle = puzzles[currentPuzzle];
    if (answer === puzzle.answer) {
        completePuzzle();
    } else {
        alert('Incorrect answer. Try again.');
    }
}

function startLogicPuzzle() {
    const puzzle = puzzles[currentPuzzle];
    document.getElementById('logicQuestion').innerText = puzzle.question;
    console.log('Logic Puzzle started');
}

function checkLogic() {
    // Always complete the puzzle regardless of the answer
    completePuzzle();
}

function startCodeDecryption() {
    const puzzle = puzzles[currentPuzzle];
    document.getElementById('encryptedMessage').innerText = puzzle.encryptedMessage;
    console.log('Code Decryption started');
}

function checkDecryption() {
    const answer = document.getElementById('decryptedMessage').value;
    const puzzle = puzzles[currentPuzzle];
    if (answer === puzzle.decryptedMessage) {
        completePuzzle();
    } else {
        alert('Incorrect answer. Try again.');
    }
}

function completePuzzle() {
    const puzzle = puzzles[currentPuzzle];
    clues.push(puzzle.clue);
    updateClueList();
    currentPuzzle++;
    if (currentPuzzle < puzzles.length) {
        document.querySelector('.puzzle').style.display = 'none';
        document.getElementById(puzzles[currentPuzzle].type).style.display = 'block';
        puzzles[currentPuzzle].start();
    } else {
        showFinalImage();
    }
}

function updateClueList() {
    const clueList = document.getElementById('clueList');
    clueList.innerHTML = '';
    clues.forEach(clue => {
        const li = document.createElement('li');
        li.innerText = clue;
        clueList.appendChild(li);
    });
}

function showFinalImage() {
    document.getElementById('game').style.display = 'none';
    document.getElementById('rewardImage').style.display = 'block';
}

// Start the first puzzle
document.addEventListener('DOMContentLoaded', () => {
    puzzles[currentPuzzle].start();
});
