document.addEventListener('DOMContentLoaded', (event) => {
    const romania = document.getElementById('romania');
    const netherlands = document.getElementById('netherlands');
    const messageContainer = document.getElementById('message-container');
    let planesLanded = 0;

    romania.addEventListener('dragstart', dragStart, true);
    netherlands.addEventListener('dragover', dragOver);
    netherlands.addEventListener('drop', drop);

    function dragStart(e) {
        if (e.target.className.includes('airplane')) {
            e.dataTransfer.setData('text/plain', e.target.id);
            setTimeout(() => {
                e.target.style.visibility = 'hidden';
            }, 0);
        }
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        draggable.style.visibility = 'visible';
        e.target.appendChild(draggable);

        planesLanded += 1;
        if (planesLanded >= 5) {
            messageContainer.textContent = "Olandezii au zburat inapoi in Tara Minunilor! Deschide plicul 7";
        }

        // Create a new airplane and add it to Romania
        const newPlane = document.createElement('div');
        newPlane.className = 'airplane';
        newPlane.draggable = true;
        newPlane.textContent = '✈️';
        newPlane.id = 'plane' + Date.now(); // Ensure unique ID
        newPlane.addEventListener('dragstart', dragStart);

        romania.appendChild(newPlane);
    }
});
