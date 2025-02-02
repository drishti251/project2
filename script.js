const formTitle = document.getElementById('form-title');
const form = document.getElementById('loginForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const toggleForm = document.getElementById('toggleForm');

let isLogin = true;

toggleForm.addEventListener('click', () => {
    isLogin = !isLogin;
    formTitle.textContent = isLogin ? 'Login Form' : 'Register Form';
    toggleForm.textContent = isLogin ? 'Register Now' : 'Login Now';
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    let valid = true;

    // Name validation (only during register)
    if (!isLogin && nameInput.value.trim() === '') {
        showError(nameInput, nameError, 'Name can\'t be blank');
        valid = false;
    } else {
        clearError(nameInput, nameError);
    }

    // Email validation
    if (emailInput.value.trim() === '') {
        showError(emailInput, emailError, 'Email can\'t be blank');
        valid = false;
    } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, emailError, 'Enter a valid email');
        valid = false;
    } else {
        clearError(emailInput, emailError);
    }

    // Password validation
    if (passwordInput.value.trim() === '') {
        showError(passwordInput, passwordError, 'Password can\'t be blank');
        valid = false;
    } else if (passwordInput.value.length < 6) {
        showError(passwordInput, passwordError, 'Password must be at least 6 characters');
        valid = false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordInput.value)) {
        showError(passwordInput, passwordError, 'Password must include a special character');
        valid = false;
    } else {
        clearError(passwordInput, passwordError);
    }

    if (valid) {
        alert(isLogin ? 'Logged in successfully!' : 'Registered successfully!');
        form.reset();
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
    setTimeout(() => input.classList.remove('error'), 500);
}

function clearError(input, errorElement) {
    input.classList.remove('error');
    errorElement.textContent = '';
}
