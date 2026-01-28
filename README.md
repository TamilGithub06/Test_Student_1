# Student Portal - Login & Signup Form

A modern, responsive student authentication system with login and signup functionality.

## Project Structure

```
student-portal/
├── index.html                 # Main entry point
├── README.md                  # Project documentation
├── .github/
│   └── copilot-instructions.md
├── src/
│   ├── css/
│   │   └── styles.css        # Main stylesheet
│   ├── js/
│   │   └── app.js            # Application logic
│   ├── utils/
│   │   └── helpers.js        # Utility functions
│   ├── pages/                # Additional pages (if needed)
│   └── assets/
│       ├── icons/            # Icon files
│       └── images/           # Image files
└── docs/
    └── SETUP.md              # Setup guide
```

## Features

- **Student Login** - Secure login with email and password
- **Student Signup** - Register new student accounts with validation
- **Remember Me** - Option to save email for faster login
- **Form Validation** - Comprehensive input validation
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Local Storage** - Student data persisted in browser storage
- **Modular Code** - Organized utilities and helper functions

## Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code recommended)

### Installation

1. **Open the project in VS Code**
   ```bash
   code /home/t/azuredev-8aca
   ```

2. **Launch with Live Server** (optional)
   - Install "Live Server" extension in VS Code
   - Right-click on `index.html` → "Open with Live Server"

3. **Or open directly in browser**
   - Navigate to the `index.html` file
   - Double-click to open in default browser

## How to Use

### Login
1. Enter your registered email address
2. Enter your password
3. Optionally check "Remember me" to save your email
4. Click "Login" button

### Sign Up
1. Click "Sign up" link on the login form
2. Fill in all required fields:
   - Full Name (minimum 3 characters)
   - Email (valid email format)
   - Student ID (unique identifier)
   - Password (minimum 6 characters)
   - Confirm Password
3. Click "Sign Up" button
4. You'll be redirected to login form to verify your credentials

## Validation Rules

### Login Form
- ✓ Email must be in valid format
- ✓ Password is required (minimum 6 characters)

### Signup Form
- ✓ Full name: minimum 3 characters
- ✓ Email: must be valid email format
- ✓ Student ID: required and must be unique
- ✓ Password: minimum 6 characters
- ✓ Passwords must match exactly

## File Descriptions

### src/css/styles.css
Main stylesheet with:
- Gradient background styling
- Form container and responsive layout
- Input field styling and focus states
- Button animations and hover effects
- Success/error message styling
- Mobile responsiveness

### src/js/app.js
Core application logic:
- Form toggle functionality
- Login form handling
- Signup form handling
- Message display management
- Email pre-filling for remembered accounts

### src/utils/helpers.js
Utility modules:
- **ValidationUtils** - Email, password, and input validation
- **StorageUtils** - localStorage operations for student data
- **MessageUtils** - Success/error message management

## Data Storage

Student information is stored in browser localStorage with the following structure:

```json
{
  "id": 1234567890,
  "fullName": "John Doe",
  "email": "john@example.com",
  "studentId": "ST12345",
  "password": "password123",
  "registrationDate": "2024-01-28T10:00:00.000Z"
}
```

## Security Considerations

⚠️ **Important**: This is a demonstration project. For production use:
- Use HTTPS protocol for secure connections
- Hash passwords using bcrypt or similar on the server
- Never store plain passwords
- Implement server-side validation
- Use secure authentication tokens (JWT)
- Implement proper session management
- Add CSRF protection
- Validate and sanitize all inputs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Development Notes

- Passwords are stored in localStorage for demonstration only
- Authentication happens on the client-side
- No backend server required for basic functionality
- Add backend integration for production use

## Future Enhancements

- [ ] Backend API integration
- [ ] Password reset functionality
- [ ] Email verification
- [ ] Two-factor authentication
- [ ] User profile page
- [ ] Student dashboard
- [ ] Password hashing
- [ ] Session management

## License

MIT License - Feel free to use and modify this project.

## Support

For issues or questions, please refer to the documentation in the `/docs` folder.
