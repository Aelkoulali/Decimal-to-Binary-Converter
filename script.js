// Access to the id from the html document
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// Function check user input 
const checkUserInput  = () => {
    if (!numberInput.value || parseInt(numberInput.value)) { 

    }
    console.log(numberInput.value);
};

// addEventListener method to convertBtn
convertBtn.addEventListener("click", checkUserInput);
// Keydown event to numberInput
numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkUserInput();
    }
  });