function validateTextbox() {
 var box = document.getElementById("name");
 var box2 = document.getElementById("email");
 var box3 = document.getElementById("message");
 
 if (box.value.length < 5 || box2.value.length < 5 || box3.value.length < 5) {
 alert("Please enter at least 5 characters!");
 return false;
 }
 
 }