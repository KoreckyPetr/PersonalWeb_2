// Generate Captcha CODE
window.onload = function() {

    var allValue = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y',
                    'Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x',
                    'y','z','1','2','3','4','5','6','7','8','9','0',]

    let cVal1 = allValue[Math.floor(Math.random()*allValue.length)];
    let cVal2 = allValue[Math.floor(Math.random()*allValue.length)];
    let cVal3 = allValue[Math.floor(Math.random()*allValue.length)];
    let cVal4 = allValue[Math.floor(Math.random()*allValue.length)];
    let cVal5 = allValue[Math.floor(Math.random()*allValue.length)];
    let cVal6 = allValue[Math.floor(Math.random()*allValue.length)];
    let cValue = cVal1+cVal2+cVal3+cVal4+cVal5+cVal6;

    captchaValue.innerHTML = cValue
}

// Listen For Submit
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();

    checkInputs();
});

// Checking All Inputs      
function checkInputs() {
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/im;
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const companyValue = document.getElementById('company').value;
    const phoneValue = document.getElementById('phone').value;
    const messageValue = document.getElementById('message').value;
    const captchaValue = document.getElementById('captchaValue').innerText;
    const inputCaptcha = document.getElementById('inputCaptcha').value;

    // Name
    if (nameValue === '' || nameValue == null || nameValue.length >=30) {
        document.getElementById('nameError').style.display = 'inline-block';
        //alert('NAME: Maximum 30 Characters!');
        return;
    }else {
        document.getElementById('nameError').style.display = 'none';
    }
    // Email
    if (emailValue.match(emailPattern))  {
        document.getElementById('emailError').style.display = 'none';
        //alert('Valid Type of email!');    /*only for test!*/
    }else {
        document.getElementById('emailError').style.display = 'inline-block';
        //alert('Invalid Type of email!');
        return;
    }
    // Company
    if (companyValue === '' || companyValue == null || companyValue.length >=30) {
        document.getElementById('companyError').style.display = 'inline-block';
        //alert('COMPANY: Maximum 30 Characters!');
        return;
    }else {
        document.getElementById('companyError').style.display = 'none';
    } 
    // Phone
    if (phoneValue.match(phonePattern)) {
        document.getElementById('phoneError').style.display = 'none';
        //alert('Valid Type of phone number!');   /*only for test!*/
    }
    else {
        document.getElementById('phoneError').style.display = 'inline-block';
        //alert('Invalid Type of phone number!');
        return;
    }
    // Message
    if (messageValue.length <= 0 || messageValue.length >= 801) {
        document.getElementById('messageError').style.display = 'inline-block';
        //alert('MESSAGE: Maximum 800 Characters!');
        return;
    }
    else {
        document.getElementById('messageError').style.display = 'none';
    }
    // Captcha
    if (inputCaptcha === '' || inputCaptcha == null || captchaValue != inputCaptcha) {
        document.getElementById('captchaError').style.display = 'inline-block';
        //alert('CAPTCHA: Incorrect Value!');   /*only for test!*/
        return;
    }
    else {
        captchaValue == inputCaptcha
        document.getElementById('captchaError').style.display = 'none';
        //alert('CAPTCHA: Correct Value!'); /*only for test!*/
    }

    sendEmail(nameValue, emailValue, companyValue, phoneValue, messageValue);
    e.preventDefault();
}

// Send Email Information
function sendEmail(nameValue, emailValue, companyValue, phoneValue, messageValue){
    Email.send({
    SecureToken : "c3540b4b-d124-430f-9ff8-a738adc75f23",
    To : 'korec02@gmail.com',
    From : "korec.firemni@gmail.com",
    Subject : `${nameValue} send you a message`,
    Body : `Name: ${nameValue} <br> Email: ${emailValue} <br> Company: ${companyValue} <br> 
            Phone: ${phoneValue} <br> Message: ${messageValue}`, 
    }).then(message => {
        if (message== 'OK') {
            alert("Thank you, your email has been send.");
            window.location.reload();
            //document.querySelector("#form").reset();
        }else {
            alert("There is error at sending message.");
            return;
        }
    });
} 