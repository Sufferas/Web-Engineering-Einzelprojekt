import '../style-folder/form.css';



function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


export default function validateForm() {
  var name = document.contactForm.name.value;
  var email = document.contactForm.email.value;
  var mobile = document.contactForm.mobile.value;
  // var password = document.contactForm.password.value;
  // var password2 = document.contactForm.password.value;
    let emailErr;
    let mobileErr;
    var nameErr = emailErr = mobileErr = true;

  if(name === "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if(email === "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate number
    if(mobile === "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^\d*$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    // if(password !== password2) {
    //     printError("passErr", "Please enter same password");
    // } else {
    //     printError("mobileErr", "");
    //     passErr = false;
    // }

    if((nameErr || emailErr || mobileErr) === true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Number: " + mobile + "\n";
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
    return false;
}

