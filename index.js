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

var tasks = [];
var index = 0;
//Writing data into Database
function writeData(){
    //taskNumber = task + number
    var address = "/students/stu1/task" + index + "/";
    index++;
     //Creating a new task object within database

    var taskName = document.getElementById('nameField').value;
    var taskDate = document.getElementById('dateField').value;


}
// document.querySelector(".displayArea").innerHTML += "<h3>Task Name : " + taskName + " Task Date : " + taskDate +"</h3>" + "<button id = " + k +" onclick = 'deleteData(this.id)'>Delete</button>";


function deleteData(divID){
  var divNum = divID.split("task").pop();
  console.log(divNum);

  var delAddress = "/students/stu1/task"+divNum+"/";

  var addressRef = database.ref(delAddress);
  addressRef.remove();

  window.location.reload();
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
