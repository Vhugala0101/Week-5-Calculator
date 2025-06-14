// Reference display element
const display = document.getElementById("display");

// Track it we have performed a calculation
let justCalculated = false;

function appendToDisplay(value) {
    console.log('Button pressed:', value);

    let currentValue = display.value;

    if (justCalculated && !isNaN(value)) {
        display.value = value;
        justCalculated = false;
        return;
    }
    

    // if current display show 0 and user enters a number,we wanna replace the 0
    if (currentValue === "0" && isNaN(value)) {
        display.value = value;
    } else if (currentValue === '0' && value ==='.') {
    
    } else {
        display.value = currentValue + value;
    } else if (value ==='.') {
        // Get the last number in the display
        let lastNumber = currentValue.split('/[+\-*/]').pop();
        // Only add the decimal if the current number doesnt have  it
        if (!lastNumber.includes('.')) {
            display.value = currentValue + value
        }
    } else {
        display.value = currentValue + value;
    }


    // Reset the justCalculated flag when the user starts typing
    justCalculated = false;  

    console.log('Display updated to:', display.value);   

}

 function clearDisplay() {
    console.log('Clear button pressed.');
    display.value = '0';
    justCalculated  = false;

    display.style.backgroundColor = '#f0f0f0';
    setTimeout(() => {
        display.style.backgroundColor
    }, 150);

 }

 function deleteLast() {
    console.log('backspace button pressed');

    let currentValue = display.value;

    // if theres only one character or its 0,reset to 0
    if (currentValue.length <= 1 || currentValue === "0") {
        display.value = '0'
    
    } else {
        display.value = currentValue.slice(0, -1);
    }


    alert('Backspace button was clicked');

 }
  function calculate() {
    console.log('Equals button pressed');

    

  }

  document.addEventListener('keydown',function(event) {
    console.log('key pressed', event.key);

    if (event.key >= '0' && event.key <='9');{
            appendToDisplay(event.key); 
    } else if (event.key === '.') {
        appendToDisplay('.'); 
    } else if (event.key ==='+')  {     
            appendToDisplay('+');
    } else if (event.key === '-') {
            appendToDisplay('-');
    } else if (event.key === '*') {
            appendToDisplay('*');
    } else if (event.key === '/') {
            event.preventDefault();
            appendToDisplay('/');
        }
      else if (event.key === 'Enter' || event.key === '=') {
            calculate();
    } else if (event.key === 'Escape' || event.key === 'C' || event.key === 'C') {
            clearDisplay();
    } else if (event.key ==="Backspace") {
        deleteLast();
    }
    }

    }
  })

  document.addEventListener('DOMContentLoaded', function()) {
    console.log('Calculator loaded successfully');
    console.log('Display element', display);

    if (display) {
          console.log('Current display value:', display.value);
    } else {
        console.log('Display element not found');
    }

  }
