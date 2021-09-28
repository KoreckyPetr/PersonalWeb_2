// Listen for submit
document.querySelector("#form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get input Values
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let company = document.querySelector("#company").value;
  let phone = document.querySelector("#phone").value;
  let message = document.querySelector("#message").value;

  sendEmail(name, email, company, phone, message);
}

// Send Email Info
function sendEmail(name, email, company, phone, message){
    Email.send({
        SecureToken : "c3540b4b-d124-430f-9ff8-a738adc75f23",
        To : 'korec02@gmail.com',
        From : "korec.firemni@gmail.com",
        Subject : `${name} send you a message`,
        Body : `Name: ${name} <br> Email: ${email} <br> Company: ${company} <br> Phone: ${phone} <br> Message: ${message}`, 
    }).then(
        message => {
    
            if (message== 'OK') {
                        alert("Thank you, your email has been send.");
                        document.querySelector("#form").reset();
                        }
                        else {
                            console.error (message);
                            alert("There is error at sending message.");
                        }
        }
    );
}




/*

.then((message) => alert("Email send successfully"))

var name = $("#name").val();
  var email = $("#email").val();
  var company = $("#company").val();
  var phone = $("#phone").val();
  var message = $("#message").val();
  
  var Body= 'Name: '+name+'<br> Email: '+email+'<br> Company: '+company+'<br> Phone: '+phone+'<br> Message: '+message;
  
  }
  
      Email.send({
          Host : "smtp.gmail.com",
          Username : "korec02@gmail.com",
          Password : "password",
          To : 'korec02@gmail.com',
          From : "korec02@gmail.com",
          Subject : "New mail on contact form from:"+name,
          Body : Body
  }).then(
      message => {
  
          if (message== 'OK') {
                      alert("Thank you, your email has been send.");
                      }
                      else {
                          console.error (message);
                          alert("There is error at sending message.");
                      }
      }
  );

*/