



// Get the form element
const form = document.getElementById("personal-info");

// Get the input fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const studentIdInput = document.getElementById("student-id");

// Get the error message elements
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const studentIdError = document.getElementById("student-id-error");

// Get the success message elements
const emailSuccess = document.getElementById("email-success");
const studentIdSuccess = document.getElementById("student-id-success");

// Retrieve saved form data from local storage
const savedFormData = localStorage.getItem("formData");
if (savedFormData) {
    const parsedData = JSON.parse(savedFormData);
    nameInput.value = parsedData.name;
    emailInput.value = parsedData.email;
    studentIdInput.value = parsedData.studentId;
}

// Add event listeners for real-time validation
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
studentIdInput.addEventListener("input", validateStudentId);

// Function to validate the name field
function validateName() {
    const value = nameInput.value.trim();
    if (value === "") {
        nameError.textContent = "Name is required";
    } else {
        nameError.textContent = "";
    }
}

// Function to validate the email field
function validateEmail() {
    const value = emailInput.value.trim();
    if (value === "") {
        emailError.textContent = "Email is required";
        emailSuccess.textContent = "";
    } else if (!isValidEmail(value)) {
        emailError.textContent = "Invalid email format";
        emailSuccess.textContent = "";
    } else {
        emailError.textContent = "";
        emailSuccess.textContent = "✓";
    }
}

// Function to validate the student ID field
function validateStudentId() {
    const value = studentIdInput.value.trim();
    if (value !== "" && !isValidStudentId(value)) {
        studentIdError.textContent = "Student ID must contain 9 numbers";
        studentIdSuccess.textContent = "";
    } else {
        studentIdError.textContent = "";
        studentIdSuccess.textContent = "✓";
    }
}

// Attach a submit event listener to the form
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate the input fields
    validateName();
    validateEmail();
    validateStudentId();

    // Check if any errors exist
    if (nameError.textContent || emailError.textContent || studentIdError.textContent) {
        return;
    }

    // Save the form data to local storage
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        studentId: studentIdInput.value
    };
    localStorage.setItem("formData", JSON.stringify(formData));

    // If all validations pass and data is saved, the form is valid
    window.location.href = "/html/webappfromscratch.html";
});

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to validate student ID format
function isValidStudentId(studentId) {
    const studentIdRegex = /^\d{9}$/;
    return studentIdRegex.test(studentId);
}