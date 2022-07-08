const email = document.getElementById("email");

const emailError = document.querySelector("#email + .error");

email.addEventListener("input", () => {
    if(email.validity.valid) {
        emailError.textContent = ''; // Reset the content of the message
        emailError.className = 'error'; // Reset the visual state of the message
    } else {
        showError()
    }
});

function showError() {
    if(email.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        emailError.textContent = 'You need to enter an e-mail address.';
      } else if(email.validity.typeMismatch) {
        // If the field doesn't contain an email address,
        // display the following error message.
        emailError.textContent = 'Entered value needs to be an e-mail address.';
      } 
    
      // Set the styling appropriately
      emailError.className = 'error active';
}