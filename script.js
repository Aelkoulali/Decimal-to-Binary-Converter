// Access to the id from the html document
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// Function check user input 
const checkUserInput  = () => {
    console.log(numberInput.value);
};

// addEventListener method to convertBtn
convertBtn.addEventListener("click", checkUserInput);
