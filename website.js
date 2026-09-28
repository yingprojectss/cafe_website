function validateEmail(event) {
    event.preventDefault(); //

    const email = document.getElementById("email").value;
    const error = document.getElementById("error");

  if (!email.includes("@")) { //if no @ in the input
    error.textContent = "Please enter a valid email with @";
  } else {
    error.textContent = "";
    alert("Valid email submitted!");
  }

}