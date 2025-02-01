# project2 

Login & Register Form
This project is a simple implementation of a login and register form with client-side validation using HTML, CSS, and JavaScript. The form toggles between login and registration modes, performing basic validation on user input.

Features : -

Toggling between Login and Register Forms: The form can switch between login and registration modes dynamically.
Validation:
Login Mode: Validates email and password input.
Registration Mode: Validates name, email, and password inputs with additional checks for password complexity.
Error Handling: Displays real-time error messages for invalid inputs and provides feedback for corrections.

Files : -

index.html: Contains the structure of the form and includes references to the external CSS and JavaScript files.
style.css: Styles for the form, including layout, color, and error handling visuals.
script.js: Contains JavaScript for toggling the form and performing validation logic.

Usage : -

Initially, the form displays the login mode with fields for email and password.
Clicking on the "Register now" link will toggle the form to registration mode, showing a name field along with the email and password fields.
On submitting the form, the inputs are validated:
Name, email, and password are required in registration mode.
Passwords must contain at least one special character and be at least 6 characters long.
Email must be in a valid format.
If validation passes, a success message will appear, and the form will reset.
