Birr Watch - ETB Currency Converter
A lightweight, browser-based currency conversion application built to convert Ethiopian Birr (ETB) into various global currencies in real time using the Open Exchange Rates API. The application includes dynamic rate fetching, local storage persistence for a custom watchlist, theme switching, and visual status indicators.

Features
Real-Time Exchange Rates: Fetches dynamic conversion data directly from the Open Exchange Rates API (open.er-api.com).

Instant Calculation: Computes accurate target currency values from user-input ETB amounts rounded to two decimal places.

Persistent Watchlist: Automatically saves converted currencies to localStorage and retains them across browser sessions.

UI Feedback: Provides visual status states (loading animations, success cards, and input validation error alerts).

Theme Switching: Includes a toggle to switch between dark and light background themes.

Tech Stack
HTML5: Semantic markup for form controls, headers, and container layouts.

CSS3: Custom CSS custom properties, glassmorphism UI design, pulse animations, and responsive flexbox layouts.

JavaScript (ES6+): Async/Await API handling, DOM manipulation, event management, and browser localStorage.

File Structure
Plaintext
├── index.html   # Application markup and static currency dropdown data
├── style.css    # Global styling, theme classes, and glassmorphic card design
└── app.js       # API conversion logic, UI state handlers, and watchlist persistence
Getting Started
Download or clone all repository files into a single project directory.

Open index.html in any modern web browser (or launch with Live Server in VS Code).

Enter an amount in ETB, select a target currency from the dropdown, and click Convert Now.

Done