# 🍲 Ethiopian Restaurant Web Application

A lightweight, responsive web application built with vanilla JavaScript, HTML, and CSS for browsing an Ethiopian dish menu, filtering items, managing a shopping cart, and checking out orders.

---

## 🚀 Features

* **Dynamic Data Loading:** Fetches food menu items asynchronously from an external `menu.json` file.
* **Loading State Handling:** Displays user-friendly feedback while data is being fetched or in case of loading errors.
* **Real-time Search:** Filters menu items instantly based on user input using regular expressions.
* **Interactive Cart:** Add dishes, increment existing items, and remove items with dynamic order summary updates and total price calculations.
* **Ethiopian Phone Validation:** Validates checkout forms using regular expressions specific to Ethiopian phone formats (e.g., `09...`, `07...`, `+251...`).
* **Local Storage Integration:** Saves successful order details to the browser's `localStorage`.

---

## 📂 Project Structure

```text
├── index.html          # Main HTML structure
├── script.js            # Main application logic & DOM manipulation
├── styles.css           # UI styling and layout rules
└── data/
    └── menu.json        # Ethiopian menu dataset