# Setup Guide - Student Portal

## Project Setup Instructions

### Step 1: Project Installation

The project is already created at `/home/t/azuredev-8aca`

### Step 2: Open in VS Code

```bash
code /home/t/azuredev-8aca
```

### Step 3: View Project Structure

The project is organized as follows:

- **Root Files**
  - `index.html` - Main entry point
  - `README.md` - Project documentation

- **Source Code** (`src/`)
  - `css/styles.css` - Application styling
  - `js/app.js` - Main application logic
  - `utils/helpers.js` - Utility functions
  - `pages/` - Additional pages (expandable)
  - `assets/` - Images and icons storage

- **Documentation** (`docs/`)
  - Setup guides and additional documentation

### Step 4: Launch the Application

#### Option A: Using Live Server (Recommended for Development)

1. Install Live Server extension:
   - Go to Extensions → Search "Live Server"
   - Install by Ritwick Dey

2. Right-click on `index.html` → "Open with Live Server"

3. Browser will automatically open at `http://localhost:5500`

#### Option B: Direct Browser Access

1. Open File Explorer
2. Navigate to `/home/t/azuredev-8aca`
3. Double-click `index.html`
4. Application opens in default browser

#### Option C: Using Python Server

```bash
cd /home/t/azuredev-8aca
python3 -m http.server 8000
```

Then open `http://localhost:8000` in browser

### Step 5: Test the Application

#### Create a Test Account
1. Click "Sign up" link
2. Enter test data:
   - Full Name: John Doe
   - Email: john@example.com
   - Student ID: ST001
   - Password: Password123
   - Confirm: Password123
3. Click "Sign Up"
4. You'll be redirected to login

#### Test Login
1. Enter email: john@example.com
2. Enter password: Password123
3. Check "Remember me" (optional)
4. Click "Login"
5. You should see success message

### Step 6: File Structure Explanation

```
azuredev-8aca/
│
├── index.html                 ← Main page (open this)
├── README.md                  ← Full documentation
├── styles.css (old)           ← Move to src/css if needed
├── script.js (old)            ← Move to src/js if needed
│
├── .github/
│   └── copilot-instructions.md
│
├── src/                       ← Source code folder
│   ├── css/
│   │   └── styles.css         ← All styling
│   ├── js/
│   │   └── app.js             ← Main logic
│   ├── utils/
│   │   └── helpers.js         ← Helper functions
│   ├── pages/                 ← Future pages
│   └── assets/
│       ├── icons/             ← Icon files
│       └── images/            ← Image files
│
└── docs/
    └── SETUP.md               ← This file
```

### Step 7: Development Workflow

#### Making Changes
1. Edit files in `src/` folder
2. Live Server will auto-reload (if used)
3. Check browser console for any errors (F12)

#### Adding Features
- **Styling**: Edit `src/css/styles.css`
- **Logic**: Edit `src/js/app.js`
- **Utilities**: Update `src/utils/helpers.js`

### Step 8: Browser Developer Tools

Press `F12` to open Developer Tools:

- **Console Tab**: Check for JavaScript errors
- **Application Tab**: View localStorage data
- **Network Tab**: Monitor requests
- **Elements Tab**: Inspect HTML structure

### Step 9: Data Storage

View stored student data:
1. Open Developer Tools (F12)
2. Go to "Application" tab
3. Click "Local Storage"
4. Select the site URL
5. View "students" and "currentStudent" entries

### Troubleshooting

| Issue | Solution |
|-------|----------|
| Page not loading | Check file path in HTML links |
| Styling not applied | Clear browser cache (Ctrl+Shift+Delete) |
| JavaScript errors | Check browser console (F12) |
| Live Server not working | Reinstall Live Server extension |
| Data not saving | Check browser storage is enabled |

### Next Steps

1. **Test all features** thoroughly
2. **Customize styling** to match your brand
3. **Add additional fields** to signup form if needed
4. **Connect to backend** for production deployment
5. **Deploy to hosting service** (GitHub Pages, Netlify, etc.)

### Additional Commands

```bash
# Navigate to project directory
cd /home/t/azuredev-8aca

# List all files
ls -la

# List source files
ls -la src/

# Open in VS Code
code .
```

### Resources

- [Live Server Documentation](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [MDN Web Docs](https://developer.mozilla.org)
- [HTML/CSS/JavaScript Guides](https://www.w3schools.com)

---

For more information, refer to `README.md` in the project root.
