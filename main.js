let currentNumber = 0;

    function updateDisplay() {
      const displayElement = document.getElementById('counterDisplay');
      const limitMessageElement = document.getElementById('limitMessage');
      displayElement.textContent = `${currentNumber} (${currentNumber % 2 === 0 ? 'Even' : 'Odd'})`;

      limitMessageElement.textContent = '';

      if (currentNumber === 20) {
        limitMessageElement.textContent = 'Max number is 20';
      } else if (currentNumber === 0) {
        limitMessageElement.textContent = 'Min number is 0';
      }
    }

    function increment() {
      if (currentNumber < 20) {
        currentNumber++;
        updateDisplay();
      }
    }

    function decrement() {
      if (currentNumber > 0) {
        currentNumber--;
        updateDisplay();
      }
    }

    function reset() {
      currentNumber = 0;
      updateDisplay();
    }