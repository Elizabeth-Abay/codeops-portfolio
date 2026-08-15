const themeBtn = document.getElementById('themeToggle');

// Restore on load
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(savedTheme);

// Save on change
themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    const newTheme = isDark ? 'dark' : 'light';
    document.body.classList.remove(isDark ? 'light' : 'dark');
    localStorage.setItem('theme', newTheme);
});


const STORAGE_KEY = 'user_array_data';

function save(dataArray) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataArray));
    } catch (error) {
        console.error('Failed to save data to localStorage:', error);
    }
}

function load() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) return []; // Guard against null
        return JSON.parse(data);
    } catch (error) {
        console.error('Corrupt or invalid JSON data in localStorage:', error);
        return []; // Guard against corrupt data
    }
}



const form = document.getElementById('signupForm');
const errorArea = document.getElementById('errorArea');
const signupCount = document.getElementById('signupCount');

const USERS_KEY = 'signed_up_users';

// Ethiopian phone regex (Matches: +251..., 251..., or 09... / 07... followed by 8 digits)
const ethPhoneRegex = /^(?:\+251|251|0)?(9|7)\d{8}$/;

// Exercise 6 helper: Load saved users
function getSavedUsers() {
    try {
        const data = localStorage.getItem(USERS_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

// Exercise 6: Show count on load
function updateSignupCount() {
    const users = getSavedUsers();
    signupCount.textContent = `Total people signed up: ${users.length}`;
}

// Run on page load
updateSignupCount();

// Exercises 4 & 5: Validation & Submit handling
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default submission
    errorArea.textContent = ''; // Clear previous errors

    // Read trimmed values
    const nameVal = document.getElementById('name').value.trim();
    const phoneVal = document.getElementById('phone').value.trim();

    // Exercise 5: Show first problem found using textContent
    if (nameVal.length < 2) {
        errorArea.textContent = 'Name must be at least two characters long.';
        return;
    }

    if (!ethPhoneRegex.test(phoneVal)) {
        errorArea.textContent = 'Please enter a valid Ethiopian phone number (e.g., 0912345678 or +251912345678).';
        return;
    }

    // Exercise 6: On success, save to localStorage, clear form, and update count
    const users = getSavedUsers();
    users.push({ name: nameVal, phone: phoneVal });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    form.reset();
    updateSignupCount();
});