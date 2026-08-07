let toDos =["project 1","project 2"]

function renderToDos(){
    document.getElementById("lists").innerHTML = toDos.map((task,i) => `
                   <li class="mb-2">
                   <b>${task}</b>
                   <button class="btn btn-danger" onclick="deleteTask(${i})">
                     Delete
                   </button>
                   </li> 
    `).join("")
}
renderToDos()

function addNewTask(){
    inputTaskElmt = document.getElementById("inputTask");
    newTask = inputTaskElmt.value;
    toDos.push(newTask);
    renderToDos();
    inputTaskElmt.value = '';
}

function clearAll(){
    toDos = [];
    renderToDos();
}
function deleteTask(index){
    toDos.splice(index,1);
    renderToDos();
}

window.addEventListener('load', ()=>{
    renderToDos();
})


//2.student marks calculator//


let marksArray = [];

// Add Marks
function addMarks() {

    let mark = Number(document.getElementById("marks").value);

    if (document.getElementById("marks").value === "") {
        alert("Please enter marks.");
        return;
    }

    if (mark < 0 || mark > 100) {
        alert("Marks should be between 0 and 100.");
        return;
    }

    marksArray.push(mark);

    document.getElementById("markList").innerHTML = marksArray.join(", ");

    document.getElementById("marks").value = "";
}


// Calculate
function calculateMarks() {

    if (marksArray.length == 0) {
        alert("Please add marks first.");
        return;
    }

    let total = 0;

    for (let i = 0; i < marksArray.length; i++) {
        total += marksArray[i];
    }

    let average = total / marksArray.length;

    let highest = marksArray[0];
    let lowest = marksArray[0];

    for (let i = 1; i < marksArray.length; i++) {

        if (marksArray[i] > highest) {
            highest = marksArray[i];
        }

        if (marksArray[i] < lowest) {
            lowest = marksArray[i];
        }
    }

    document.getElementById("total").innerHTML = total;
    document.getElementById("average").innerHTML = average.toFixed(2);
    document.getElementById("highest").innerHTML = highest;
    document.getElementById("lowest").innerHTML = lowest;
}


// Reset
function resetData() {

    marksArray = [];

    document.getElementById("marks").value = "";

    document.getElementById("markList").innerHTML = "No Marks Added";

    document.getElementById("total").innerHTML = 0;
    document.getElementById("average").innerHTML = 0;
    document.getElementById("highest").innerHTML = 0;
    document.getElementById("lowest").innerHTML = 0;
}





// 3.search on an array

// Predefined Array
let cars = ["BMW","Audi","Mercedes","Toyota","Honda","Hyundai","Mahindra"];

// Display Array
document.getElementById("arrayList").innerHTML = cars.join(" , ");

function searchArray(){

let value = document.getElementById("search").value;

let found = false;

let output = "";

for(let i=0;i<cars.length;i++){

    if(cars[i].toLowerCase() == value.toLowerCase()){

        output += "<span class='highlight'>" + cars[i] + "</span> ";

        found = true;

    }
    else{

        output += cars[i] + " ";

    }

}

if(found){

    document.getElementById("arrayList").innerHTML = output;

    document.getElementById("result").innerHTML =
    "<span class='text-success fw-bold'>Item Found</span>";

}
else{

    document.getElementById("arrayList").innerHTML = cars.join(" , ");

    document.getElementById("result").innerHTML =
    "<span class='text-danger fw-bold'>No Matches Found</span>";

}

}



// 4.Sort Names Alphabetically

let names = [];

// Add Name
function addName(){

    let name = document.getElementById("name").value;

    if(name === ""){
        alert("Please enter name");
        return;
    }

    names.push(name);

    displayNames();

    document.getElementById("name").value = "";
}


// Display Names
function displayNames(){

    let list = document.getElementById("list");

    list.innerHTML = "";

    names.forEach((name)=>{

        list.innerHTML += `
        <li class="list-group-item">
            ${name}
        </li>
        `;

    });

}


// Sort Names
function sortNames(){

    names.sort((a,b)=> a.localeCompare(b));

    displayNames();


}


// Reset Names
function resetNames(){

    names = [];

    displayNames();

}

// 5.
let numbersArray = [];


// Add Number

function addNumber(){

    let num = Number(document.getElementById("number").value);


    if(document.getElementById("number").value === ""){
        alert("Please Enter Number");
        return;
    }


    numbersArray.push(num);


    document.getElementById("numbers").innerHTML =
    numbersArray.join(", ");


    document.getElementById("number").value = "";

}



// Show Even Numbers

function showEven(){

    let evenNumbers = [];


    for(let i=0; i<numbersArray.length; i++){

        if(numbersArray[i] % 2 == 0){

            evenNumbers.push(numbersArray[i]);

        }

    }


    if(evenNumbers.length == 0){

        document.getElementById("even").innerHTML =
        "No Even Numbers";

    }
    else{

        document.getElementById("even").innerHTML =
        evenNumbers.join(", ");

    }

}



// Show Odd Numbers

function showOdd(){

    let oddNumbers = [];


    for(let i=0; i<numbersArray.length; i++){

        if(numbersArray[i] % 2 != 0){

            oddNumbers.push(numbersArray[i]);

        }

    }


    if(oddNumbers.length == 0){

        document.getElementById("odd").innerHTML =
        "No Odd Numbers";

    }
    else{

        document.getElementById("odd").innerHTML =
        oddNumbers.join(", ");

    }

}



// Clear All

function clearData(){

    numbersArray = [];


    document.getElementById("numbers").innerHTML =
    "No Numbers Added";


    document.getElementById("even").innerHTML =
    "No Even Numbers";


    document.getElementById("odd").innerHTML =
    "No Odd Numbers";


    document.getElementById("number").value = "";

}