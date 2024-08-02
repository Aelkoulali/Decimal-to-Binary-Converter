// Access to the id from the html document
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationData = [
  {
    "inputVal": 5,
    "marginTop": 300,
    "addElDelay" : 1000,
  },
  {
    "inputVal": 2,
    "marginTop": 200,
    "addElDelay" : 1500,
  }

];

// Function that do the decimal to binary conversion
const decimalToBinary = (input) => {
  if ( input == 0 | input == 1 ){
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
    
};

// Function showAnimation
const showAnimation = () => {
  if (parseInt(numberInput.value) == 5 ) {
    showAnimation();
    return;
  }

};

// Function check user input 
const checkUserInput  = () => {
  const inputInt = parseInt(numberInput.value);
  if (
    !numberInput.value ||
    isNaN(inputInt) ||
    inputInt < 0
  ) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  if (inputInt === 5) {
    showAnimation();
    return;
  }

  result.textContent = decimalToBinary(inputInt);
  numberInput.value = "";
};

// Add addEventListener method to convertBtn
convertBtn.addEventListener("click", checkUserInput);

// Add keydown event to numberInput
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkUserInput();
    }
  });