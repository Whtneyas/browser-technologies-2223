//Variables 

// Get the form and input fields
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const studentNumberInput = document.querySelector('#student-number');

//load input values on submit
nameInput.value = localStorage.getItem('name');
emailInput.value = localStorage.getItem('email');
studentNumberInput.value = localStorage.getItem('student-number');

//save input values on submit 
form.addeventListner('submit' , (event) => {
    event.preventDefault();
    localStorage.setItem ('name' , nameInput.value);
    localStorage.setItem ('email',emailInput.value);
    localStorage.setItem ('student-number', studentNumberInput.value);
    alert('input values saved')
})