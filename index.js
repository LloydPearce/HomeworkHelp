function writeData() {
  database.ref("/users/").set({
    name: document.getElementById('nameField').value
  });
}
