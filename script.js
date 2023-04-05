//Variables 

// // Get the form and input fields
// const form = document.querySelector('form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const studentNumberInput = document.querySelector('#student-number');

// //load input values on submit
// nameInput.value = localStorage.getItem('name');
// emailInput.value = localStorage.getItem('email');
// studentNumberInput.value = localStorage.getItem('student-number');

// //save input values on submit 
// form.addeventListner('submit' , (event) => {
//     event.preventDefault();
//     localStorage.setItem ('name' , nameInput.value);
//     localStorage.setItem ('email',emailInput.value);
//     localStorage.setItem ('student-number', studentNumberInput.value);
//     alert('input values saved')
// })



const studentInfo = document.getElementById("personal-info");

studentInfo.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting
  
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const studentIdInput = document.getElementById("student-id");
 
  
  // Check if name input is not empty
  if (nameInput.value.trim() === "") {
    alert("Please enter your name");
    return;
  }
  
  // Check if email input is a valid email format
  if (!isValidEmail(emailInput.value)) {
    alert("Please enter a valid email address");
    return;
  }
  
  // Check if student ID input contains 9 digits
  if (!isValidStudentId(studentIdInput.value)) {
    alert("Please enter a student ID containing 9 digits");
    return;
  }
  
  // If all validation passes, submit the form
  studentInfo.submit();
});

function isValidEmail(email) {
  // Regular expression to check email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidStudentId(studentId) {
  // Regular expression to check if student ID contains 9 digits
  const studentIdRegex = /^[0-9]{9}$/;
  return studentIdRegex.test(studentId);
}

