
// Defining a function to display error message
function printError(elemId, hintMsg) {
    elemId="#"+elemId;
    $(elemId).html(hintMsg);
    //  (document.getElementById(elemId).parentElement.className)
    $(elemId).parent().removeClass('successcolor').addClass('errorcolor');
}
function printSuccess(elemId, hintMsg) {
    elemId="#"+elemId;
    $(elemId).html(hintMsg);
    //  (document.getElementById(elemId).parentElement.className)
    $(elemId).parent().removeClass('errorcolor').addClass('successcolor');
}

 

// Defining a function to validate form 
function validateForm() {
    //var els = document.querySelectorAll('.row.errorcolor');
    
 
    // Retrieving the values of form elements 
    var name = $("#name").val();
    var email = $("#email").val();
    var mobile = $("#mobile").val();
    var country = $("#country").val();
    var gender = $("input[name='gender']:checked").val();
    var hobbies = [];
    var checkboxes = $(".hobbies");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }

    // Defining error variables with a default value
    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        if (name.length < 2) {
            printError("nameErr", "Please put more than two alphabet.");
        }
        else {
            var regex = /^[a-zA-Z\s]+$/;
            if (regex.test(name) === false) {
                printError("nameErr", "Please enter a valid name");
            } else {
                printSuccess("nameErr", "");
                nameErr = false;
            }
        }

    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printSuccess("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printSuccess("mobileErr", "");
            mobileErr = false;
        }
    }

    // Validate country
    if (country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printSuccess("countryErr", "");
        countryErr = false;
    }

    // Validate gender
    if (gender == "" || gender == undefined) {
        printError("genderErr", "Please select your gender");
    } else {
        printSuccess("genderErr", "");
        genderErr = false;
    }

    // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +
            "Country: " + country + "\n" +
            "Gender: " + gender + "\n";
        if (hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
    return false;
};