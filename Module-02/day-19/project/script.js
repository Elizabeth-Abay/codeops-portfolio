// Select key DOM elements
const form = document.getElementById('item-form');
const nameInput = document.getElementById('item-name');
const priceInput = document.getElementById('item-price');
const shoppingList = document.getElementById('shopping-list');
const totalPriceEl = document.getElementById('total-price');

// State variable to track live running total
let runningTotal = 0;

// Helper function to update the DOM total display
function updateTotal(amount) {
    runningTotal += amount;
    // Format to 2 decimal places if necessary
    totalPriceEl.textContent = runningTotal.toFixed(2);
}

// Requirement 1 & 2: Form submission, validation, & DOM node creation
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameValue = nameInput.value.trim();
    const priceValue = parseFloat(priceInput.value);

    // Validate that both fields are filled correctly
    if (!nameValue || isNaN(priceValue) || priceValue < 0) {
        alert('Please provide a valid item name and ETB price.');
        return;
    }

    // Create list item container
    const li = document.createElement('li');
    li.className = 'item-row';
    // Attach dataset attribute so we know the price when deleting
    li.dataset.price = priceValue;

    // Create text container for item details
    const infoSpan = document.createElement('span');
    infoSpan.className = 'item-info';
    infoSpan.textContent = `${nameValue} - ${priceValue.toFixed(2)} ETB`;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';

    // Append elements to li, then append li to list
    li.appendChild(infoSpan);
    li.appendChild(deleteBtn);
    shoppingList.appendChild(li);

    // Update running total
    updateTotal(priceValue);

    // Clear form inputs
    nameInput.value = '';
    priceInput.value = '';
});

// Requirement 3 & 4: Single delegated listener for toggle and delete
shoppingList.addEventListener('click', function (e) {
    const target = e.target;
    const row = target.closest('.item-row');

    if (!row) return;

    // Check if delete button was clicked
    if (target.classList.contains('delete-btn')) {
        const itemPrice = parseFloat(row.dataset.price);

        // Deduct price from running total
        updateTotal(-itemPrice);

        // Remove element from DOM
        row.remove();
    }
    // Toggle "bought" state when clicking item details
    else if (target.classList.contains('item-info')) {
        row.classList.toggle('bought');
    }
});