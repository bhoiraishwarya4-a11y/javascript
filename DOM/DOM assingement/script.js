//simple form validation//
const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");


form.addEventListener("submit", function(event) {


    event.preventDefault();

  
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

   
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    let isValid = true;


    // Name validation
    if (name === "") {
        nameError.textContent = "Name cannot be empty.";
        isValid = false;
    }


    // Email validation
    if (email === "") {
        emailError.textContent = "Email cannot be empty.";
        isValid = false;
    }


    // Password validation
    if (password.length < 6) {
        passwordError.textContent =
            "Password must contain at least 6 characters.";
        isValid = false;
    }


    // Everything valid
    if (isValid) {

        successMessage.textContent = "Registration Successful!";

    
        form.reset();
    }

});










//simple to do list//
 const taskInput = document.getElementById("taskInput");

        const addTask = document.getElementById("addTask");

        const taskList = document.getElementById("taskList");


        // Add a new task
        addTask.addEventListener("click", function () {

            const taskText = taskInput.value.trim();


                return;
            }


            // Create li
            const li = document.createElement("li");


            // Create span
            const span = document.createElement("span");

            span.textContent = taskText;


            // Create Delete button
            const deleteButton = document.createElement("button");

            deleteButton.textContent = "Delete";

            deleteButton.className = "delete";


            // Complete task
            span.addEventListener("click", function () {

                span.classList.toggle("completed");

            });


            // Delete task
            deleteButton.addEventListener("click", function (event) {

                event.stopPropagation();

                li.remove();

            });


  
            li.appendChild(span);

            li.appendChild(deleteButton);


       
            taskList.appendChild(li);


       
            taskInput.value = "";


           
            taskInput.focus();

        });


        taskInput.addEventListener("keypress", function (event) {

            if (event.key === "Enter") {

                addTask.click();

            }

        });






//add item to list//

let list = document.getElementById("shoppingList");

let milk = document.createElement("li");
milk.textContent = "Milk";
list.appendChild(milk);

let bread = document.createElement("li");
bread.textContent = "Bread";
list.appendChild(bread);

let eggs = document.createElement("li");
eggs.textContent = "Eggs";
list.appendChild(eggs);

let rice = document.createElement("li");
rice.textContent = "Rice";
list.appendChild(rice);






//character counter//

// Select elements 
 const textarea = document.getElementById("message"); 
 const counter = document.getElementById("counter");
//  // Input event 
 textarea.addEventListener("input", function () { 
// // Get number of characters 
 const length = textarea.value.length; 
// // Update counter 
counter.textContent = `Character: ${length}/100`; 
// // Warning when fewer than 10 characters remain 
 if (100 - length < 10) { counter.classList.add("warning"); 
 } else { 
counter.classList.remove("warning"); }
 });





//show/hide message//

 // Select elements 
  const message = document.getElementById("secretMessage"); 
 const showBtn = document.getElementById("showBtn"); 
  const hideBtn = document.getElementById("hideBtn"); 
 // // Show message
   showBtn.addEventListener("click", function () { 
  message.style.display = "block"; }); 
 // // Hide message 
  hideBtn.addEventListener("click", function () { 
 message.style.display = "none"; });






//change background color//

 // Select paragraph 
 const paragraph = document.querySelector("#text"); 
  // Select buttons 
 const redButton = document.querySelector("#redBtn"); 
const greenButton = document.querySelector("#greenBtn"); 
 const blueButton = document.querySelector("#blueBtn"); 
 // Red button 
  redButton.addEventListener("click", function () {
  paragraph.style.color = "red"; 
 }); 
 // Green button 
  greenButton.addEventListener("click", function () { 
  paragraph.style.color = "green";
  }); 
  // Blue button 
  blueButton.addEventListener("click", function () { 
  paragraph.style.color = "blue"; 
 });





//change heading//

 // Select the heading 
const heading = document.querySelector("#heading");
 // Select the button 
 const button = document.querySelector("#changeBtn"); 
 // Add click event 
 button.addEventListener("click", function () {
// Change heading content 
heading.textContent = "Welcome to JavaScript DOM Practice";
});






//input greeting//

// Select input 
 const nameInputs = document.querySelector("#nameInput");
  // Select button 
 const greetBtn = document.querySelector("#greetBtn"); 
 // Select greeting paragraph 
 const greeting = document.querySelector("#greeting"); 
 // Button click event
  greetBtn.addEventListener("click", function () { 
 // Get value from input 
 const name = nameInputs.value; // Update greeting 
 greeting.textContent = "Hello " + name + "!";
});