// Utility functions for validation
const ValidationUtils = {
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    validatePassword(password) {
        return password.length >= 6;
    },

    validateStudentId(id) {
        return id.trim().length > 0;
    },

    validateFullName(name) {
        return name.trim().length >= 3;
    },

    passwordsMatch(password1, password2) {
        return password1 === password2;
    }
};

// Utility functions for storage
const StorageUtils = {
    getStudents() {
        return JSON.parse(localStorage.getItem('students')) || [];
    },

    saveStudent(student) {
        const students = this.getStudents();
        students.push(student);
        localStorage.setItem('students', JSON.stringify(students));
    },

    studentExists(email, studentId) {
        const students = this.getStudents();
        return students.some(s => s.email === email || s.studentId === studentId);
    },

    findStudent(email, password) {
        const students = this.getStudents();
        return students.find(s => s.email === email && s.password === password);
    },

    setCurrentStudent(student) {
        localStorage.setItem('currentStudent', JSON.stringify(student));
    },

    getCurrentStudent() {
        return JSON.parse(localStorage.getItem('currentStudent'));
    },

    clearCurrentStudent() {
        localStorage.removeItem('currentStudent');
    }
};

// Utility functions for messages
const MessageUtils = {
    showSuccess(message, duration = 5000) {
        const successMsg = document.getElementById('successMessage');
        const messageText = document.getElementById('messageText');
        
        if (messageText && successMsg) {
            messageText.textContent = message;
            successMsg.style.display = 'block';
            
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, duration);
        }
    },

    showError(message, duration = 5000) {
        const errorMsg = document.getElementById('errorMessage');
        const errorText = document.getElementById('errorText');
        
        if (errorText && errorMsg) {
            errorText.textContent = message;
            errorMsg.style.display = 'block';
            
            setTimeout(() => {
                errorMsg.style.display = 'none';
            }, duration);
        }
    },

    hideAll() {
        const successMsg = document.getElementById('successMessage');
        const errorMsg = document.getElementById('errorMessage');
        
        if (successMsg) successMsg.style.display = 'none';
        if (errorMsg) errorMsg.style.display = 'none';
    }
};
