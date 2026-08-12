// --- STATE ---
let items = [];

// --- DOM ELEMENTS ---
const form = document.getElementById('item-form');
const input = document.getElementById('item-input');
const shoppingList = document.getElementById('shopping-list');
const itemCount = document.getElementById('item-count');

// --- RENDER FUNCTION ---
function render() {
    shoppingList.innerHTML = '';

    items.forEach((item) => {
        const li = document.createElement('li');
        if (item.bought) li.classList.add('bought');

        const span = document.createElement('span');
        span.className = 'item-text';
        span.textContent = item.name;

        // Toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'toggle-btn';
        toggleBtn.textContent = item.bought ? 'Bought' : 'Mark Bought';
        toggleBtn.addEventListener('click', () => toggleItem(item.id));

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Remove';
        deleteBtn.addEventListener('click', () => removeItem(item.id));

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'item-actions';
        actionsDiv.appendChild(toggleBtn);
        actionsDiv.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actionsDiv);
        shoppingList.appendChild(li);
    });

    itemCount.textContent = items.length;
}

// --- STATE MODIFIERS ---
function addItem(name) {
    items.push({ id: Date.now(), name, bought: false });
    render();
}

function toggleItem(id) {
    items = items.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
    );
    render();
}

function removeItem(id) {
    items = items.filter((item) => item.id !== id);
    render();
}

// --- EVENT LISTENERS ---
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text !== '') {
        addItem(text);
        input.value = '';
    }
});

// Initial Render
render();