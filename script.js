let button = document.querySelector(".password-check");

// 1 - Write your function here
// Write a function to test if the password is correct
// The function should take in the text of the password
// as an input, and return true if the password is correct


button.addEventListener("click", function() {

    let password = document.querySelector(".password-input").value;
    function checkPassword(passwordCheck){
        if(passwordCheck === "password123"){
                return false;
        }

    }
    // 2 - Call your function here, store the result in a variable
    // and use the variable to determine which message to display
    let onepasswordCheck = document.checkPassword(password);
    if (onepasswordCheck) {
        document.querySelector(".yes").style = "display:block";
        document.querySelector(".denied").style = "display:none";
    } else {
        document.querySelector(".denied").style = "display:block";
        document.querySelector(".yes").style = "display:none";
    }

});

