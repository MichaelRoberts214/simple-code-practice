var buttonHandler = function () {
  alert('something was done');
};

// calculator implementation
let accumulator = 0;
let operation = null;
let hold = '';

window.onload = function () {
  document.querySelector('#calculator-buttons').addEventListener('click', event => {
    const target = event.target;
    console.log(target);
    // const value = parseInt(target.innerHTML) || target.innerHTML; // maybe not yet
    const value = target.innerHTML;

    // if number, want hold number to be that number
    //  if hold number has number, concat to it
    // if number is operator, store operator

    // to do: clear, enter

    if (value.match(/^[0-9]*$/g)
      || (!hold.includes('.') && value === '.')) {
      hold += value;
    } else if (value === '=') {
      if (operation) {
        accumulator = accumulator
      }
    } else {
      if (operation) {
        // evaluate with that operation first
      }
      operation = value;
    }
    
    // display accumulator
  });
};
