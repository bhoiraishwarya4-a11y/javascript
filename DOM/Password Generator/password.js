// ===============================
// DOM ELEMENTS
// ===============================

const passwordOutput = document.getElementById("passwordOutput");

const passwordLength = document.getElementById("passwordLength");
const lengthValue = document.getElementById("lengthValue");

const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const special = document.getElementById("special");
const ambiguous = document.getElementById("ambiguous");

const generateBtn = document.getElementById("generateBtn");

const copyBtn = document.getElementById("copyBtn");
const togglePassword = document.getElementById("togglePassword");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

const errorMessage = document.getElementById("errorMessage");
const copyMessage = document.getElementById("copyMessage");


// ===============================
// CHARACTER SETS
// ===============================

const CHARACTERS = {

    lowercase: "abcdefghijklmnopqrstuvwxyz",

    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

    numbers: "0123456789",

    special: "!@#$%^&*()_+-=[]{}|;:,.<>?"
};


// ===============================
// AMBIGUOUS CHARACTERS
// ===============================

const AMBIGUOUS_CHARACTERS = "iIlL1oO0";


// ===============================
// LENGTH DISPLAY
// ===============================

passwordLength.addEventListener("input", () => {

    lengthValue.textContent = passwordLength.value;

});


// ===============================
// SECURE RANDOM INDEX
// ===============================

function secureRandomIndex(max) {

    if (max <= 0) {
        throw new Error("Invalid character set");
    }

    const maxUint32 = 0xFFFFFFFF;

    const limit = Math.floor(
        (maxUint32 + 1) / max
    ) * max;

    const randomArray = new Uint32Array(1);

    let randomValue;

    do {

        crypto.getRandomValues(randomArray);

        randomValue = randomArray[0];

    } while (randomValue >= limit);


    return randomValue % max;
}


// ===============================
// SECURE RANDOM CHARACTER
// ===============================

function secureRandomCharacter(characters) {

    const index = secureRandomIndex(characters.length);

    return characters[index];
}


// ===============================
// REMOVE AMBIGUOUS CHARACTERS
// ===============================

function removeAmbiguousCharacters(characters) {

    return characters
        .split("")
        .filter(char => !AMBIGUOUS_CHARACTERS.includes(char))
        .join("");

}


// ===============================
// GET SELECTED CHARACTER SETS
// ===============================

function getCharacterSets() {

    const sets = [];

    if (lowercase.checked) {
        sets.push(CHARACTERS.lowercase);
    }

    if (uppercase.checked) {
        sets.push(CHARACTERS.uppercase);
    }

    if (numbers.checked) {
        sets.push(CHARACTERS.numbers);
    }

    if (special.checked) {
        sets.push(CHARACTERS.special);
    }


    if (ambiguous.checked) {

        return sets.map(set =>
            removeAmbiguousCharacters(set)
        );

    }

    return sets;
}


// ===============================
// SECURE SHUFFLE
// ===============================

function secureShuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const randomIndex =
            secureRandomIndex(i + 1);

        [array[i], array[randomIndex]] =
            [array[randomIndex], array[i]];
    }

    return array;
}


// ===============================
// GENERATE PASSWORD
// ===============================

function generatePassword() {

    clearError();

    const length = Number(passwordLength.value);

    const characterSets = getCharacterSets();


    // -------------------------------
    // VALIDATION
    // -------------------------------

    if (characterSets.length === 0) {

        showError(
            "Please select at least one character type."
        );

        return;

    }


    if (length < characterSets.length) {

        showError(
            `Password length must be at least ${characterSets.length}.`
        );

        return;

    }


    // -------------------------------
    // COMBINE CHARACTER SETS
    // -------------------------------

    const allCharacters =
        characterSets.join("");


    // -------------------------------
    // GUARANTEE ONE FROM EACH TYPE
    // -------------------------------

    const passwordCharacters = [];


    characterSets.forEach(set => {

        passwordCharacters.push(
            secureRandomCharacter(set)
        );

    });


    // -------------------------------
    // FILL REMAINING CHARACTERS
    // -------------------------------

    while (passwordCharacters.length < length) {

        passwordCharacters.push(
            secureRandomCharacter(allCharacters)
        );

    }


    // -------------------------------
    // SHUFFLE PASSWORD
    // -------------------------------

    secureShuffle(passwordCharacters);


    // -------------------------------
    // CREATE PASSWORD
    // -------------------------------

    const password =
        passwordCharacters.join("");


    passwordOutput.value = password;


    // -------------------------------
    // UPDATE STRENGTH
    // -------------------------------

    calculateStrength(password);

}


// ===============================
// PASSWORD STRENGTH
// ===============================

function calculateStrength(password) {

    let score = 0;


    // Length
    if (password.length >= 8) {
        score++;
    }

    if (password.length >= 12) {
        score++;
    }

    if (password.length >= 16) {
        score++;
    }


    // Lowercase
    if (/[a-z]/.test(password)) {
        score++;
    }


    // Uppercase
    if (/[A-Z]/.test(password)) {
        score++;
    }


    // Numbers
    if (/[0-9]/.test(password)) {
        score++;
    }


    // Special
    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    }


    if (score <= 2) {

        strengthText.textContent = "Weak";
        strengthBar.style.width = "25%";
        strengthBar.className =
            "progress-bar bg-danger";

    }

    else if (score <= 4) {

        strengthText.textContent = "Medium";
        strengthBar.style.width = "50%";
        strengthBar.className =
            "progress-bar bg-warning";

    }

    else if (score <= 6) {

        strengthText.textContent = "Strong";
        strengthBar.style.width = "75%";
        strengthBar.className =
            "progress-bar bg-info";

    }

    else {

        strengthText.textContent = "Very Strong";
        strengthBar.style.width = "100%";
        strengthBar.className =
            "progress-bar bg-success";

    }

}


// ===============================
// COPY PASSWORD
// ===============================

copyBtn.addEventListener("click", async () => {

    const password = passwordOutput.value;


    if (!password) {

        showError(
            "Generate a password first."
        );

        return;

    }


    try {

        await navigator.clipboard.writeText(password);

        copyMessage.textContent =
            "Password copied successfully!";

        setTimeout(() => {

            copyMessage.textContent = "";

        }, 2000);

    }

    catch (error) {

        showError(
            "Unable to copy password."
        );

    }

});


// ===============================
// SHOW / HIDE PASSWORD
// ===============================

togglePassword.addEventListener("click", () => {

    if (passwordOutput.type === "password") {

        passwordOutput.type = "text";

        togglePassword.textContent = "🙈";

    }

    else {

        passwordOutput.type = "password";

        togglePassword.textContent = "👁";

    }

});


// ===============================
// GENERATE BUTTON
// ===============================

generateBtn.addEventListener(
    "click",
    generatePassword
);


// ===============================
// ERROR FUNCTIONS
// ===============================

function showError(message) {

    errorMessage.textContent = message;

    errorMessage.classList.remove("d-none");

}


function clearError() {

    errorMessage.textContent = "";

    errorMessage.classList.add("d-none");

}


// ===============================
// GENERATE PASSWORD ON PAGE LOAD
// ===============================

generatePassword();