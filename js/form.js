//Declaring a function called validateTextbox, which is used on the Contact Page. 
function validateTextbox() {
 
 //Here we are assigning 3 variables. 
 //The variables are equal to the IDs retrieved from the Contact Page e.g. name, email, and message.
 var box = document.getElementById("name");  
 var box2 = document.getElementById("email");
 var box3 = document.getElementById("message");
 
 //An IF statement will be used, so if the user types less than 5 characters in any of the boxes an alert will appear asking the user to "Please enter at least 5 characters!"
 if (box.value.length < 5 || box2.value.length < 5 || box3.value.length < 5) {
 alert("Please enter at least 5 characters!");
 //The function will only return false if the user has typed more than 5 characters, so if the objective has already been achieved the if statement won't be called. 
 return false;
 }
 
 }