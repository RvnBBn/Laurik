// script.js

  function createRoses() {
    const roseContainer = document.getElementById('roseContainer');
  
    for (let i = 0; i < 100; i++) { // Create 10 roses for the effect
      setTimeout(() => {
        const rose = document.createElement('div');
        rose.className = 'rose';
        rose.style.left = Math.random() * window.innerWidth + 'px';
        roseContainer.appendChild(rose);
  
        // Remove the rose after it falls
        setTimeout(() => {
          rose.remove();
        }, 5000); // Adjust the timing to match the animation duration
      }, i * 10); // Stagger the creation of roses
    }
  }
  