// Listen for submit
document.getElementById('submit').addEventListener('click', submitForm);

function submitForm(e) {

  // Get input Values
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let company = document.getElementById('company');
    let phone = document.getElementById('phone');
    let message = document.getElementById('message');

    if (name.value === '' || name.value == null) {
        alert('Name is required!')
        return;
    }
    else if (phone.value.length === '' || phone.value.length == null || phone.value.length >=12 || phone.value.length <=8) {
        alert('Incorect phone number type!')
        return;
    }
    else if (message.value.length <= 0 || message.value.length >= 801) {
        alert('Incorect message value! Maximum 800 characters.')
        return;
    }
    sendEmail(name.value, email.value, company.value, phone.value, message.value);
    e.preventDefault();
}

// Send Email Info
function sendEmail(name, email, company, phone, message){
    Email.send({
        SecureToken : "c3540b4b-d124-430f-9ff8-a738adc75f23",
        To : 'korec02@gmail.com',
        From : "korec.firemni@gmail.com",
        Subject : `${name} send you a message`,
        Body : `Name: ${name} <br> Email: ${email} <br> Company: ${company} <br> Phone: ${phone} <br> Message: ${message}`, 
    }).then(message => {
    
            if (message== 'OK') {
                        alert("Thank you, your email has been send.");
                        document.querySelector("#form").reset();
                        }
                        else {
                            console.error (message);
                            alert("There is error at sending message.");
                        }
        });
}



/*

// Form Limits
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {

    let name = document.getElementById('name')
    let phone = document.getElementById('phone')
    let message = document.getElementById('message')

    if (name.value === '' || name.value == null) {
        alert('Name is required!')
        return;
    }
    if (phone.value.length === '' || phone.value.length == null || phone.value.length >=12 || phone.value.length <=8) {
        alert('Incorect phone number type!')
        return;
    }
    if (message.value.length <= 0 || message.value.length >= 801) {
        alert('Incorect message value! Maximum 800 characters.')
        return;
    }
})



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


// Captcha 

var allValue = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y',
                'Z','1','2','3','4','5','6','7','8','9','0',]

var cVal1 = allValue[Math.floor(Math.random()*allValue.length)];
var cVal2 = allValue[Math.floor(Math.random()*allValue.length)];
var cVal3 = allValue[Math.floor(Math.random()*allValue.length)];
var cVal4 = allValue[Math.floor(Math.random()*allValue.length)];
var cVal5 = allValue[Math.floor(Math.random()*allValue.length)];
var cVal6 = allValue[Math.floor(Math.random()*allValue.length)];

var cValue = cVal1+cVal2+cVal3+cVal4+cVal5+cVal6;

captchaValue.innerHTML = cValue

thisValue = "";
inputCaptcha.addEventListener('change', function() {
    thisValue = inputCaptcha.value;
    alert(thisValue)

})

submitBtn.addEventListener('click', function() {
    if(cValue == thisValue){
        alert('Valid');
        document.logForm.submit();
    }else if(inputCaptcha.value == ""){
        alert('Invalid Captcha');
    }else{
        alert('Invalid Captcha');
    }
})

<div class="captcha form-field col-lg-12">
                                    <div id="captchaValue">SSSS</div>
                                    <input id="inputCaptcha" type="text" name="" placeholder="Captcha">
                                </div>

*/