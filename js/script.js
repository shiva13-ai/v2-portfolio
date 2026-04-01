document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const alertBox = document.getElementById("formAlert");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Stop normal submission
            let isValid = true;

            // Clear previous alert
            alertBox.className = "alert d-none";
            alertBox.innerHTML = "";

            // HTML5 Form Validation State
            if (!form.checkValidity()) {
                isValid = false;
            }

            // Custom JS Validation: Phone number must be exactly 10 digits
            const phoneInput = document.getElementById("phone");
            const phonePattern = /^\d{10}$/;
            
            if (!phonePattern.test(phoneInput.value)) {
                isValid = false;
                phoneInput.classList.add("is-invalid");
            } else {
                phoneInput.classList.remove("is-invalid");
                phoneInput.classList.add("is-valid");
            }

            // Apply Bootstrap validation visual cues
            form.classList.add("was-validated");

            // Final check
            if (isValid) {
                alertBox.className = "alert alert-success mt-3";
                alertBox.innerHTML = "<strong>Success!</strong> Your message has been sent securely.";
                form.reset();
                form.classList.remove("was-validated");
                
                // Remove green tick marks after reset
                phoneInput.classList.remove("is-valid"); 
            } else {
                alertBox.className = "alert alert-danger mt-3";
                alertBox.innerHTML = "<strong>Error!</strong> Please fill out all fields correctly. Ensure the mobile number is 10 digits.";
            }
        });
    }
});