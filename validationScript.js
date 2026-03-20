// JavaScript code for form validation

const myForm = document.getElementById("myForm")
const submitbtn = document.getElementById("submit");

myForm.addEventListener("submit", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Retrieve the input field value
  const inputField = document.getElementById("inputField").value;

  validate(inputField)

});
	
function validate (input) {
  regex = /^[a-zA-Z0-9]+$/;
  if(regex.test(input)) {
    alert("Correct input was given!");
  } else {
    alert("Please enter a valid alphanumeric expression");
    preventDefault();
  }

};