document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  var formData = new FormData(this);

  // Construct message
  var message = "Name: " + formData.get("name") + "\n";
  message += "Email: " + formData.get("email") + "\n";
  message += "Message: " + formData.get("message");

  // Display message using alert
  alert(message);

  // Clear form fields
  this.reset();
});
