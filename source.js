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



  console.log('the number is', numberToWord(1234516));
};

// number to words

// number, no commas, no decimal yet

// break number up into 1-3 digit blocks
// turn numbers in that block into words
// append suffix to end of word-ized block
// put it all together

// zero is an edge case
// need a dictionary of basic numbers
// need a dictionary of tens place numbers, excluding teens
// need a dictionary of ten-teens numbers

const splitNum = function (num) {
  const numStr = num.toString();
  if (numStr.length < 4) {
    return [numStr];
  }

  const lhs = numStr.length % 3;
  const pieces = [];
  let currentIdx = 0;

  if (lhs > 0) {
    pieces.push(numStr.substr(0, lhs));
    currentIdx = lhs;
  }

  while (currentIdx < numStr.length - 1) {
    let end = currentIdx + 2;
    pieces.push(numStr.substr(currentIdx, end));
    currentIdx = currentIdx + 3;
  }

  return pieces;
}

const generateSuffix = function (suffixIndex) {
  return suffixes[suffixIndex];
};

const spellOutNumber = function (numStr) {
  const numInt = parseInt(numStr);
  if (numStr.length === 1) {
    return numberDict[numStr];
  } else if (numStr.length === 2) {
    if (numInt < 10) {
      return spellOutNumber(numInt.toString());
    } else if (numInt > 9 && numInt < 20) {
      return teens[numStr];
    } else {
      return tensNumbers[numStr.charAt(0)] + ' ' + spellOutNumber(numStr.charAt(1));
    }
  } else {
    return numberDict[numStr.charAt(0)] + ' hundred ' + spellOutNumber(numStr.substr(1, 2));
  }
};

const numberToWord = function (num) {
  if (num === 0) {
    return 'zero';
  }
  if (num < 0) {
    return 'negative ' + numberToWord(Math.abs(num));
  }

  const numPieces = splitNum(num);

  let result = '';

  for (let i = 0; i < numPieces.length; i++) {
    result = result.length ? result + ' ' : result;
    result += spellOutNumber(numPieces[i]);
    const suffixIndex = numPieces.length - i;
    if (suffixIndex > 1) {
      result += ` ${generateSuffix(suffixIndex)}`;
    }
  }

  return result;
};

const numberDict = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight', 
  9: 'nine'
};

const teens = {
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'ninteen'
};

const tensNumbers = {
  2: 'twenty',
  3: 'thirty',
  4: 'fourty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninty'
};

// to do: hundred, thousand, million, billion
const suffixes = {
  1: 'hundred',
  2: 'thousand',
  3: 'million',
  4: 'billion'
};
