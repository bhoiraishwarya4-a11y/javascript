

const otpInputs =
    document.querySelectorAll(".otp-inputs input");

const generateBtn =
    document.getElementById("generateBtn");

const generatedOtp =
    document.getElementById("generatedOtp");

const verifyBtn =
    document.getElementById("verifyBtn");


// ======================================
// CORRECT OTP
// ======================================

let correctOTP = "";


// ======================================
// GENERATE OTP
// ======================================

generateBtn.addEventListener("click", function () {

    correctOTP = Math.floor(
        10000 + Math.random() * 90000
    ).toString();


    // Show OTP

    generatedOtp.textContent = correctOTP;


    console.log("Generated OTP:", correctOTP);


    // Clear old OTP

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


    // INPUT

    input.addEventListener("input", function () {

        // Only numbers

        this.value =
            this.value.replace(/[^0-9]/g, "");


        // Next box

        if (this.value !== "") {

            if (index < otpInputs.length - 1) {

                otpInputs[index + 1].focus();

            }

        }

    });


    // ==================================
    // BACKSPACE
    // ==================================

    input.addEventListener("keydown", function (event) {

        if (event.key === "Backspace") {

            if (this.value === "") {

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


    // OTP generate केला आहे का?

    if (correctOTP === "") {

        alert("Please generate OTP first.");

        return;

    }


    // Entered OTP

    let enteredOTP = "";


    otpInputs.forEach(function (input) {

        enteredOTP += input.value;

    });


    console.log("Entered OTP:", enteredOTP);


    // Complete OTP आहे का?

    if (enteredOTP.length !== 5) {

        alert("Please enter complete 5 digit OTP.");

        return;

    }


    // Correct OTP

    if (enteredOTP === correctOTP) {

        alert("OTP Verified Successfully!");

        window.location.href = "success.html";

    }


    // Wrong OTP

    else {

        alert("Invalid OTP. Please try again.");

    }

});