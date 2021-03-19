const addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const multiplication = document.querySelector('.multiplication');
const division = document.querySelector('.division');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const del = document.querySelector('.del');
const decimal = document.querySelector('.decimal');
const number0 = document.querySelector('.number-0');
const number1 = document.querySelector('.number-1');
const number2 = document.querySelector('.number-2');
const number3 = document.querySelector('.number-3');
const number4 = document.querySelector('.number-4');
const number5 = document.querySelector('.number-5');
const number6 = document.querySelector('.number-6');
const number7 = document.querySelector('.number-7');
const number8 = document.querySelector('.number-8');
const number9 = document.querySelector('.number-9');
const numberArray = [
  number0, number1, number2, number3, number4,
  number5, number6, number7, number8, number9
];

const value = document.querySelector('.screen');

// variables
let valueStrInMemory = null;
let operatorInMemory = null;


// Functions
const getValueAsStr = () => value.textContent

const getValueAsNum = () => {
  return parseFloat(getValueAsStr());
};

const setStrAsValue = (valueStr) => {
    value.textContent = parseFloat(valueStr).toString();
  };

const handleNumberClick = (numStr) => {
  const currentValueStr = getValueAsStr();
  setStrAsValue(currentValueStr + numStr);
};

const getResultOfOperationAsStr = () => {
  const currentValueNum = getValueAsNum();
  const valueNumInMemory = parseFloat(valueStrInMemory);
  let newValueNum;
  if (operatorInMemory === 'addition') {
    newValueNum = valueNumInMemory + currentValueNum;
  } else if (operatorInMemory === 'subtraction') {
    newValueNum = valueNumInMemory - currentValueNum;
  } else if (operatorInMemory === 'multiplication') {
    newValueNum = valueNumInMemory * currentValueNum;
  } else if (operatorInMemory === 'division') {
    newValueNum = valueNumInMemory / currentValueNum;
  }
  valueStrInMemory = newValueNum.toString();
  return newValueNum.toString();
};

const handleOperatorClick = (operation) => {
  const currentValueStr = getValueAsStr();

  if (!valueStrInMemory) {
    valueStrInMemory = currentValueStr;
    operatorInMemory = operation;
    setStrAsValue('0');
    return;
  }
  valueStrInMemory = getResultOfOperationAsStr();
  operatorInMemory = operation;
  setStrAsValue('0');
};

const handleDeleteClick = () => {
  const currentValueStr = getValueAsStr();
  let tmp = "";
  if (currentValueStr.length === 1) {
        tmp = "0";
      } else {
        tmp = currentValueStr.substring(0, currentValueStr.length - 1);
      }
  value.textContent = tmp;
};




// Add Event Listeners to functions
 clear.addEventListener('click', () => {
  setStrAsValue('0');
  valueStrInMemory = null;
  operatorInMemory = null;
});

del.addEventListener('click', () => {
  handleDeleteClick();
});

// add event listeners to operators
addition.addEventListener('click', () => {
  handleOperatorClick('addition');
});
subtraction.addEventListener('click', () => {
  handleOperatorClick('subtraction');
});
multiplication.addEventListener('click', () => {
  handleOperatorClick('multiplication');
});
division.addEventListener('click', () => {
  handleOperatorClick('division');
});
equal.addEventListener('click', () => {
  if (valueStrInMemory) {
    setStrAsValue(getResultOfOperationAsStr());
    valueStrInMemory = null;
    operatorInMemory = null;
  }
});


// Add Event Listeners to numbers and decimal
for (let i=0; i < numberArray.length; i++) {
  const number = numberArray[i];
  number.addEventListener('click', () => {
    console.log('clicked number');
    handleNumberClick(i.toString());
  });
}




// const acEl = document.querySelector('.clear');
//
// const additionEl = document.querySelector('.addition');
// const subtractionEl = document.querySelector('.subtraction');
// const multiplicationEl = document.querySelector('.multiplication');
// const divisionEl = document.querySelector('.division');
// const equalEl = document.querySelector('.equal');
//
// const decimalEl = document.querySelector('.decimal');
// const number0El = document.querySelector('.number-0');
// const number1El = document.querySelector('.number-1');
// const number2El = document.querySelector('.number-2');
// const number3El = document.querySelector('.number-3');
// const number4El = document.querySelector('.number-4');
// const number5El = document.querySelector('.number-5');
// const number6El = document.querySelector('.number-6');
// const number7El = document.querySelector('.number-7');
// const number8El = document.querySelector('.number-8');
// const number9El = document.querySelector('.number-9');
// const numberElArray = [
//   number0El, number1El, number2El, number3El, number4El,
//   number5El, number6El, number7El, number8El, number9El
// ];
//
// const valueEl = document.querySelector('.screen');
//
//
// // variables
// let valueStrInMemory = null;
// let operatorInMemory = null;
//
//
// // Functions
// const getValueAsStr = () => valueEl.textContent.split(',').join('');
//
// const getValueAsNum = () => {
//   return parseFloat(getValueAsStr());
// };
//
// const setStrAsValue = (valueStr) => {
//   if (valueStr[valueStr.length - 1] === '.') {
//     valueEl.textContent += '.';
//     return;
//   }
//
//   const [wholeNumStr, decimalStr] = valueStr.split('.');
//   if (decimalStr) {
//     valueEl.textContent =
//       parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr;
//   } else {
//     valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();
//   }
// };
//
// const handleNumberClick = (numStr) => {
//   const currentValueStr = getValueAsStr();
//   if (currentValueStr === '0') {
//     setStrAsValue(numStr);
//   } else {
//     setStrAsValue(currentValueStr + numStr);
//   }
// };
//
// const getResultOfOperationAsStr = () => {
//   const currentValueNum = getValueAsNum();
//   const valueNumInMemory = parseFloat(valueStrInMemory);
//   let newValueNum;
//   if (operatorInMemory === 'addition') {
//     newValueNum = valueNumInMemory + currentValueNum;
//   } else if (operatorInMemory === 'subtraction') {
//     newValueNum = valueNumInMemory - currentValueNum;
//   } else if (operatorInMemory === 'multiplication') {
//     newValueNum = valueNumInMemory * currentValueNum;
//   } else if (operatorInMemory === 'division') {
//     newValueNum = valueNumInMemory / currentValueNum;
//   }
//
//   return newValueNum.toString();
// };
//
// const handleOperatorClick = (operation) => {
//   const currentValueStr = getValueAsStr();
//
//   if (!valueStrInMemory) {
//     valueStrInMemory = currentValueStr;
//     operatorInMemory = operation;
//     setStrAsValue('0');
//     return;
//   }
//   valueStrInMemory = getResultOfOperationAsStr();
//   operatorInMemory = operation;
//   setStrAsValue('0');
// };
//
//
//
//
// // Add Event Listeners to functions
// acEl.addEventListener('click', () => {
//   setStrAsValue('0');
//   valueStrInMemory = null;
//   operatorInMemory = null;
// });
//
//
//
//
// // add event listeners to operators
// additionEl.addEventListener('click', () => {
//   handleOperatorClick('addition');
// });
// subtractionEl.addEventListener('click', () => {
//   handleOperatorClick('subtraction');
// });
// multiplicationEl.addEventListener('click', () => {
//   handleOperatorClick('multiplication');
// });
// divisionEl.addEventListener('click', () => {
//   handleOperatorClick('division');
// });
// equalEl.addEventListener('click', () => {
//   if (valueStrInMemory) {
//     setStrAsValue(getResultOfOperationAsStr());
//     valueStrInMemory = null;
//     operatorInMemory = null;
//   }
// });
//
//
// // Add Event Listeners to numbers and decimal
// for (let i=0; i < numberElArray.length; i++) {
//   const numberEl = numberElArray[i];
//   numberEl.addEventListener('click', () => {
//     handleNumberClick(i.toString());
//   });
// }