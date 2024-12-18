function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for (const item of errors) {
    item.innerHTML = "";
  }
}

function seterror(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
  clearErrors();
  var returnVal = true;
  let name = document.forms["myForm"]["fname"].value;
  let email = document.forms["myForm"]["femail"].value;
  let number = document.forms["myForm"]["fphone"].value;
  let password = document.forms["myForm"]["fpass"].value;
  let ConfirmPassword = document.forms["myForm"]["fcpass"].value;

  if (name.length < 5) {
    seterror("name", "*Length of name is too short!");
    returnVal = false;
  }

  if (email.length > 25) {
    seterror("email", "*Email length is too long!");
    returnVal = false;
  }

  if (number.length != 11) {
    seterror("phone", "*Phone number should be of 11 digits!");
    returnVal = false;
  }

  if (password.length < 6) {
    // Qiuz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
    seterror("pass", "*Password should be aleast 6 characters long!");
    returnVal = false;
  }

  if (ConfirmPassword != password) {
    seterror("cpass", "*Password and confirm password should match!");
    returnVal = false;
  }

  return returnVal;
}
