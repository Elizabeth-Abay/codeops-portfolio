# Grocery Shopping List SPA

A lightweight, responsive single-page application (SPA) built with vanilla JavaScript, HTML5, and modern CSS. The application manages a dynamic grocery list following a strict **state-then-render** architecture.


## Features

* **State-Driven Architecture**: All user interactions modify a central JavaScript array (`state`) before triggering a clean DOM re-render.
* **Add Items**: Dynamically append new grocery items to the list via form submit.
* **Toggle Purchased State**: Mark items as bought using dedicated action buttons, which updates both visual styling and item state.
* **Remove Items**: Delete unwanted items from the list.
* **Live Counter**: Real-time tracker displaying total items currently in state.
* **Modern Dark UI**: Fully responsive, dark-mode design styled with CSS variables and flexbox layout.



## File Structure

```text
├── index.html     # Application structure and DOM containers
├── styles.css     # Dark mode design system and responsive layout
├── app.js         # Core application state, state mutators, and render logic
└── README.md      # Project documentation