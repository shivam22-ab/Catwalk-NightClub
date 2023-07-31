$(document).ready(function(){
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting
        // Clear previous error messages
        $('form .form-group input').removeClass('error');
         // Function to validate email format
        function isValidEmail(email) {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
            // Validate the form fields
        var isValid = true;
        // Validate Full Name
        var name = $('#name').val().trim();
        if (name === '') {
            $('#name').addClass('error');
            $('#name').attr('placeholder', 'Your Name*');
            isValid = false;
        }
        // Validate phone
        var phone = $('#phone').val().trim();
        if (phone === '') {
            $('#phone').addClass('error');
            $('#phone').attr('placeholder', '+977 9*');
            isValid = false;
        }
        // Validate subject
        var subject = $('#subject').val().trim();
        if (subject === '') {
            $('#subject').addClass('error');
            $('#subject').attr('placeholder', 'ex. New Year Event*');
            isValid = false;
        }
        // Validate message
        var message = $('#message').val().trim();
        if (message === '') {
            $('#message').addClass('error');
            $('#message').attr('placeholder', 'Please type your message here*');
            isValid = false;
        }
        // Validate Email
        var email = $('#email').val().trim();
        if (email === '') {
            $('#email').addClass('error');
            $('#email').attr('placeholder', 'someone@example.com*');
            isValid = false;
        } else if (!isValidEmail(email)) {
            $('#email').addClass('error');
            $('#email').val('');
            $('#email').attr('placeholder', 'Invalid Email');
            isValid = false;
        }

        // Validate checkbox
        var checkboxChecked = $('#checkbox').is(':checked');
        if (!checkboxChecked) {
            $('#checkbox').addClass('error');
            isValid = false;
 }
        // Submit the form if valid
        if (isValid) {
            this.submit();
        } else {
            console.log('Form is not valid. Submission prevented.');
        }
    });

});