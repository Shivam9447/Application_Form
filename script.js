 // password error show in outside of input tag..

        // document.addEventListener('DOMContentLoaded', function () {
        //     const form = document.getElementById('form');
        //     const passwordInput = document.getElementById('password');
        //     const passwordError = document.getElementById('passwordError');

        //     form.addEventListener('submit', function () {
        //          // Prevent form submission

        //         const password = passwordInput.value;

        //         // Regular expressions for password criteria
        //         const containsUppercase = /[A-Z]/.test(password);
        //         const containsLowercase = /[a-z]/.test(password);
        //         const containsDigit = /\d/.test(password);
        //         const containsSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password); // Add more characters as needed

        //         // Validation checks
        //         if (!containsUppercase) {
        //             passwordError.textContent = 'Password must contain at least one uppercase letter.';
        //             return;
        //         }
        //         if (!containsLowercase) {
        //             passwordError.textContent = 'Password must contain at least one lowercase letter.';
        //             return;
        //         }
        //         if (!containsDigit) {
        //             passwordError.textContent = 'Password must contain at least one digit.';
        //             return;
        //         }
        //         if (!containsSpecial) {
        //             passwordError.textContent = 'Password must contain at least one special character.';
        //             return;
        //         }

        //         // If password meets all criteria
        //         passwordError.textContent = ''; // Clear any previous error messages
        //         // Proceed with form submission or further processing
        //         console.log('Password is valid:', password);
        //     });
        // });

        // timer function logic previous........

        
        // Timer set on top of the form to submit until when user not fill form...

        // const form = document.getElementById('form');
        // const timerElement = document.getElementById('timer');
        // let timer;
        // const TIMER_DURATION = 120; // 2 minutes in seconds
        // let timeLeft = TIMER_DURATION;
        // let formStarted = false;

        // // Function to update the timer display
        // function updateTimer() {
        //     const minutes = Math.floor(timeLeft / 60);
        //     const seconds = timeLeft % 60;
        //     timerElement.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        // }

        // // Function to start the timer
        // function startTimer() {
        //     timer = setInterval(() => {
        //         timeLeft--;
        //         updateTimer();
        //         if (timeLeft === 0) {
        //             clearInterval(timer);
        //             alert('Time limit exceeded. Please submit the form within 3 minutes.');
        //             timerElement.textContent = ''; // Clear timer display after time is up
        //         }
        //     }, 1000); // Update timer every second (1000ms)
        // }

        // // Function to reset the timer
        // function resetTimer() {
        //     clearInterval(timer);
        //     timeLeft = TIMER_DURATION;
        //     updateTimer();
        // }

        // // Function to validate the form
        // function validateForm(event) {
        //     event.preventDefault();

        //     // Start the timer when form filling begins
        //     if (!formStarted) {
        //         startTimer();
        //         formStarted = true;
        //     }

        //     // Validate each input field
        //     let isValid = true;
        //     const inputs = form.querySelectorAll('input');
        //     inputs.forEach(input => {
        //         if (!input.checkValidity()) {
        //             isValid = false;
        //             input.classList.add('error');
        //         } else {
        //             input.classList.remove('error');
        //         }
        //     });

        //     // Custom validation for password
        //     const password = document.getElementById('password').value;
        //     if (!isValidPassword(password)) {
        //         isValid = false;
        //         document.getElementById('password').classList.add('error');
        //     } else {
        //         document.getElementById('password').classList.remove('error');
        //     }

        //     // Custom validation for number
        //     const number = document.getElementById('number').value;
        //     if (number !== "10") {
        //         isValid = false;
        //         document.getElementById('number').classList.add('error');
        //     } else {
        //         document.getElementById('number').classList.remove('error');
        //     }

        //     // If form is valid, submit it
        //     if (isValid) {
        //         alert('Form submitted successfully!');
        //         form.submit(); // Submit the form
        //     } else {
        //         alert('Please fill out all required fields correctly.');
        //     }
        // }

        // // Function to validate password (alphanumeric, at least 8 characters)
        // function isValidPassword(password) {
        //     const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
        //     return regex.test(password) && password.length >= 8;
        // }

        // // Event listener for form submission
        // form.addEventListener('submit', validateForm);

        // timer function logic 2...............

        // Timer variables

        // let startTime;
        // let timerInterval;

        // // Start timer when user interacts with form
        // document.querySelectorAll('#form input').forEach(input => {
        //     input.addEventListener('input', startTimer);
        // });

        // function startTimer() {
        //     if (!startTime) {
        //         startTime = new Date().getTime();
        //         timerInterval = setInterval(updateTimer, 1000); // Update timer every second
        //     }
        // }

        // function updateTimer() {
        //     const currentTime = new Date().getTime();
        //     const elapsedTime = Math.floor((currentTime - startTime) / 1000); // Convert to seconds
        //     document.getElementById('timer').textContent = elapsedTime;
        // }

        // // Form submission handling
        // document.getElementById('form').addEventListener('submit', function () {
        //     // event.preventDefault(); // Prevent default form submission

        //     // Fetch input values
        //     const username = document.getElementById('name').value.trim();
        //     const password = document.getElementById('password').value.trim();
        //     const phone = document.getElementById('email').value.trim();

        //     // Validation checks
        //     const errors = [];

        //     if (!isAlphaNumeric(password)) {
        //         errors.push("Password must be alphanumeric");
        //     }
        //     if (phone.length !== 10) {
        //         errors.push("Phone number must be 10 digits long");
        //     }

        //     // Display errors
        //     // const errorMessages = document.getElementById('errorMessages');
        //     // errorMessages.innerHTML = ''; // Clear previous errors

        //     if (errors.length > 0) {
        //         errors.forEach(function (error) {
        //             const errorElement = document.createElement('div');
        //             errorElement.textContent = error;
        //             errorMessages.appendChild(errorElement);
        //         });
        //     } else {
        //         // Submit the form or perform further actions
        //         alert("Form submitted successfully!");
        //         clearInterval(timerInterval); // Stop the timer
        //         startTime = null; // Reset timer start time
        //         document.getElementById('timer').textContent = '0'; // Reset timer display
        //         // Optionally, you can reset the form
        //         // document.getElementById('myForm').reset();
        //     }
        // });

        // // Helper function to check if a string is alphanumeric
        // function isAlphaNumeric(str) {
        //     const alphaNumericRegex = /^[0-9a-zA-Z]+$/;
        //     return alphaNumericRegex.test(str);
        // }

        // image file attach only in input type file...
