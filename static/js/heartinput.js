const passwordInput = document.getElementById('passwordInput');

        passwordInput.addEventListener('input', function() {
            let displayValue = '';
            // Loop through each character in the password field
            for (let i = 0; i < passwordInput.value.length; i++) {
                // Display hearts instead of the characters
                displayValue += '❤️';
            }
            
            // Update the input field's placeholder with hearts
            passwordInput.setAttribute('placeholder', displayValue);
        });