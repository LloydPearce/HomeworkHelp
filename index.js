var firebaseConfig = {
  apiKey: "AIzaSyCpQobrd3VK5f-Z-e9CNtIqc_bcIy6TLmw",
  authDomain: "dtproject-d4250.firebaseapp.com",
  databaseURL: "https://dtproject-d4250.firebaseio.com",
  projectId: "dtproject-d4250",
  storageBucket: "dtproject-d4250.appspot.com",
  messagingSenderId: "80901270533",
  appId: "1:80901270533:web:b5810934a24554565f006c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Global Variables
var tasks = [];

//Writing data into arrays
function writeData(){
  //Saving data into the array
  var taskName = document.getElementById('nameField').value;
  var taskDate = document.getElementById('dateField').value;
  var newTask = [taskName, taskDate];
  tasks.push(newTask);

  //index of the newest task
  var index = tasks.length - 1;

  //Getting the Date assigned
  var dateAssigned = new Date();

  var dd = String(dateAssigned.getDate()).padStart(2, '0');
  var mm = String(dateAssigned.getMonth() + 1).padStart(2, '0');
  var yyyy = dateAssigned.getFullYear();

  dateAssigned = mm + '/' + dd + '/' + yyyy;


  //Creating the Div of the task
    var div = document.createElement("div");

    //Editing the inner part of the Div
    div.innerHTML = taskName + "<br>Assigned on " + dateAssigned + "<br>Due On " + taskDate + "<br>" + "<button class = 'button' id = " + index +" onclick = 'deleteData(this.id)'>Delete</button>";

    //Giving the Div a class name
    var className = "task" + index;
    var className2 = "task";
    div.classList.add(className);
    div.classList.add("task");


  //Printing the array into the HTML website
  document.querySelector(".displayArea").appendChild(div);
}

function deleteData(index){
  //Removing value from the array
  tasks.splice(index,1);
  //Creating the div name to be deleted
  var dName = ".task"+index;
  var e = document.querySelector(dName);
  e.parentNode.removeChild(e);

}

function searchTask(){
  var searchTerm = document.querySelector(".search").value;
  searchTerm = searchTerm.toLowerCase();

  //Clearing the innerHTML of the display area to prevent reprinting
  document.querySelector(".searchResult").innerHTML = "";


  for(var i = 0; i < tasks.length; i++){
    var task = tasks[i];
    //If the name of the task (in lower case) contains the search term
    //We print it into results section
    if(task[0].toLowerCase().includes(searchTerm)){
      document.querySelector(".searchResult").innerHTML += "<h3>" + task[0] +  "<br>Due On " + task[1] +"</h3>";
    }
  }

  //Printing results in the results section

}

// Login Section

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      //document.getElementById("login").style.display = "none";
      //location.href = "homepage.html";
    } else {

    }
  });

function login(){
  console.log("hello testing");
  var userEmail = document.getElementById("emailField").value;
  var userPass = document.getElementById("passwordField").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

  });
}

function logout(){
  firebase.auth().signOut();
}

// W3 Schools Side Bar Functions

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
