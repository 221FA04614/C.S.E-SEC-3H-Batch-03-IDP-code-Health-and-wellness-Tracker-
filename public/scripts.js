s

document.addEventListener('DOMContentLoaded', function () {
    
    const appointmentForm = document.querySelector('form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function (event) {
            const patientName = document.getElementById('patientName').value;
            if (!patientName) {
                alert('Patient name is required!');
                event.preventDefault();
            }
        });
    }
  });

  // Script to toggle between login and signup forms
function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');

    if (loginForm.classList.contains('active')) {
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
        loginBtn.classList.remove('active');
        signupBtn.classList.add('active');
    } else {
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
        signupBtn.classList.remove('active');
        loginBtn.classList.add('active');
    }
}

// Get the forms and buttons
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

// Add event listeners to the forms
loginForm.addEventListener('submit', handleLogin);
signupForm.addEventListener('submit', handleSignup);

// Function to handle login form submission
function handleLogin(event) {
  event.preventDefault();
  // TO DO: Add your login logic here (e.g., validate credentials, authenticate with server)
  // For now, assume login is successful
  window.location.href = 'index.html';
}

// Function to handle signup form submission
function handleSignup(event) {
  event.preventDefault();
  // TO DO: Add your signup logic here (e.g., validate credentials, create new user account)
  // For now, assume signup is successful
  window.location.href = 'index.html';
}
