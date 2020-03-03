var taskNumber = 0;
var testNum = 0;
var test = 1;
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
var database = firebase.database();

var ref = database.ref("students/stu1");
ref.on("value", gotData, errData);

function gotData(data){
  //console.log(data.val());
  var tasks = data.val();
  var keys = Object.keys(tasks);
  //console.log(keys);

  for(var i = 0; i < keys.length; i++){
    var k = keys[i];

    var taskName = tasks[k].taskName;
    var taskDate = tasks[k].taskDate;
    //Prevent "undefined" tasks from getting printed out
    if(taskName != null && taskDate != null){
      document.querySelector(".displayArea").innerHTML += "<h3>Task Name : " + taskName + " Task Date : " + taskDate +"</h3>" + "<button id = " + k +" onclick = 'deleteData(this.id)'>Delete</button>";
    }

  }
}

function deleteData(divID){
  var divNum = divID.split("task").pop();
  console.log(divNum);

  var delAddress = "/students/stu1/task"+divNum+"/";

  var addressRef = database.ref(delAddress);
  addressRef.remove();

  window.location.reload();
}

function errData(err){
  console.log("Error");
  console.log(err);
}


//Writing data into Database
function writeData(){
  return new Promise(function(resolve, reject) {
  //New strategy : save index in database
  //address of index within database
  var indexAddress = "/students/stu1/";


  //address of tasks
  //taskNumber = task + number
  var address = "/students/stu1/task";
  var hello = "hello";
  var index = "";
  console.log(address);
  firebase.database().ref(indexAddress).once('value').then
  (
    function(snapshot){
      index = snapshot.val().index;
      resolve(index);
    }
  );
  });

  //Creating a new task object within database
  database.ref(address).set({
    taskName: document.getElementById('nameField').value,
    taskDate: document.getElementById('dateField').value
  })

  // Reload function Easy fix to the bug
  window.location.reload();


}


//CURRENT SOLUTION : 
// window.onload = function() {
//   writeData().then(function(index) {
//     console.log(index);
//     // do things that depend on user/username
//   }).catch(function(error) {
//     alert(error);
//   });
// };

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
