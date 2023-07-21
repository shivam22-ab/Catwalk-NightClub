$(document).ready(function(){
   $('#subscribeForm').submit(function(event) {
       event.preventDefault(); // Prevent the form from submitting
       // Clear previous error messages
       $('form .form-group input').removeClass('error');
       // Validate the form fields
       var isValid = true;
       // Validate Full Name
       var name = $('#name').val().trim();
       if (name === '') {
           $('#name').addClass('error');
           $('#name').attr('placeholder', 'Your Name*');
           isValid = false;
       }

       // Validate Email
       var email = $('#email').val().trim();
       if (email === '') {
           $('#email').addClass('error');
           $('#email').attr('placeholder', 'Your Email Addess*');
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