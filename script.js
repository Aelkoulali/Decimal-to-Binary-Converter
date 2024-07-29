// Access to the id from the html document
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// Function that do the decimal to binary conversion
const decimalToBinary = (input) => {
    return"1"; // 1 represents true

};

// Function check user input 
const checkUserInput  = () => {
    if (!numberInput.value ||
        parseInt(numberInput.value)||
        parseInt(numberInput.value < 0)
     ) { 
        alert("Please provide a decimal number greater than or equal to 0");
        return;
    }
    decimalToBinary(parseInt(numberInput.value));
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