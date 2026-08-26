

// ======================================
// GET ELEMENTS
// ======================================

const otpInputs = document.querySelectorAll(".otp-inputs input");

const generateBtn = document.getElementById("generateBtn");

const generatedOtp = document.getElementById("generatedOtp");

const verifyBtn = document.getElementById("verifyBtn");


// ======================================
// CORRECT OTP VARIABLE
// ======================================

let correctOTP = "";


// ======================================
// GENERATE OTP
// ======================================

generateBtn.addEventListener("click", function () {

    // Generate 5 digit OTP

    correctOTP = Math.floor(
        10000 + Math.random() * 90000
    ).toString();


    // Display OTP

    generatedOtp.textContent = correctOTP;


    // Console

    console.log("Generated OTP:", correctOTP);


    // Clear old input boxes

    otpInputs.forEach(function (input) {
        input.value = "";
    });


    // Focus first box

    otpInputs[0].focus();

});


// ======================================
// OTP INPUT
// ======================================

otpInputs.forEach(function (input, index) {


    // ==================================
    // INPUT EVENT
    // ==================================

    input.addEventListener("input", function () {

        // Only numbers allowed

        this.value = this.value.replace(/[^0-9]/g, "");


        // If value entered

        if (this.value !== "") {

            // Move to next box

            if (index < otpInputs.length - 1) {

                otpInputs[index + 1].focus();

            }

        }

    });


    // ==================================
    // KEYDOWN EVENT
    // ==================================

    input.addEventListener("keydown", function (event) {


        // Backspace

        if (event.key === "Backspace") {


            // If current box is empty

            if (this.value === "") {

                // Move previous box

                if (index > 0) {

                    otpInputs[index - 1].focus();

                }

            }

        }

    });

});


// ======================================
// VERIFY OTP
// ======================================

verifyBtn.addEventListener("click", function () {


    // ==================================
    // CHECK OTP GENERATED OR NOT
    // ==================================

    if (correctOTP === "") {

        alert("Please generate OTP first.");

        return;

    }


    // ==================================
    // GET ENTERED OTP
    // ==================================

    let enteredOTP = "";


    otpInputs.forEach(function (input) {

        enteredOTP += input.value;

    });


    console.log("Entered OTP:", enteredOTP);


    // ==================================
    // CHECK 5 DIGITS
    // ==================================

    if (enteredOTP.length !== 5) {

        alert("Please enter complete 5 digit OTP.");

        return;

    }


    // ==================================
    // CORRECT OTP
    // ==================================

    if (enteredOTP === correctOTP) {

        alert("OTP Verified Successfully!");


        // Open success page

        window.location.href = "success.html";

    }


    // ==================================
    // WRONG OTP
    // ==================================

    else {

        alert("Invalid OTP. Please try again.");

    }

});