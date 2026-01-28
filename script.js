// Toggle between login and signup forms
function toggleForm(event) {
    event.preventDefault();
    
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    loginForm.classList.toggle('active');
    signupForm.classList.toggle('active');
    
    // Clear messages
    hideMessages();
}

// Show success message
function showSuccessMessage(message) {
    const successMsg = document.getElementById('successMessage');
    const messageText = document.getElementById('messageText');
    
    messageText.textContent = message;
    successMsg.style.display = 'block';
    
    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 5000);
}

// Show error message
function showErrorMessage(message) {
    const errorMsg = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    
    errorText.textContent = message;
    errorMsg.style.display = 'block';
    
    setTimeout(() => {
        errorMsg.style.display = 'none';
    }, 5000);
}

// Hide all messages
function hideMessages() {
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';
}

// Validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate password strength
function validatePassword(password) {
    return password.length >= 6;
}

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Validation
    if (!email || !password) {
        showErrorMessage('Please fill in all fields');
        return;
    }
    
    if (!validateEmail(email)) {
        showErrorMessage('Please enter a valid email address');
        return;
    }
    
    // Simulate login (in real app, send to server)
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const student = students.find(s => s.email === email && s.password === password);
    
    if (student) {
        if (rememberMe) {
            localStorage.setItem('rememberedEmail', email);
        }
        
        // Simulate authentication
        localStorage.setItem('currentStudent', JSON.stringify({
            id: student.studentId,
            name: student.fullName,
            email: student.email
        }));
        
        showSuccessMessage(`Welcome back, ${student.fullName}!`);
        this.reset();
        
        setTimeout(() => {
            // Redirect or update UI (placeholder)
            console.log('Login successful');
        }, 1500);
    } else {
        showErrorMessage('Invalid email or password');
    }
});

// Handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const studentId = document.getElementById('studentId').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validation
    if (!fullName || !email || !studentId || !password || !confirmPassword) {
        showErrorMessage('Please fill in all fields');
        return;
    }
    
    if (!validateEmail(email)) {
        showErrorMessage('Please enter a valid email address');
        return;
    }
    
    if (fullName.length < 3) {
        showErrorMessage('Full name must be at least 3 characters');
        return;
    }
    
    if (!validatePassword(password)) {
        showErrorMessage('Password must be at least 6 characters long');
        return;
    }
    
    if (password !== confirmPassword) {
        showErrorMessage('Passwords do not match');
        return;
    }
    
    // Check if student already exists
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const exists = students.some(s => s.email === email || s.studentId === studentId);
    
    if (exists) {
        showErrorMessage('Email or Student ID already registered');
        return;
    }
    
    // Create new student record
    const newStudent = {
        id: Date.now(),
        fullName,
        email,
        studentId,
        password, // Note: In production, passwords should be hashed
        registrationDate: new Date().toISOString()
    };
    
    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));
    
    showSuccessMessage('Account created successfully! Please login.');
    this.reset();
    
    setTimeout(() => {
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        document.getElementById('loginEmail').value = email;
    }, 2000);
});

// Pre-fill login email if remembered
window.addEventListener('load', function() {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        document.getElementById('loginEmail').value = rememberedEmail;
        document.getElementById('rememberMe').checked = true;
    }
});
