import './SearchBar.css';

const categories = ['All', 'Main', 'Vegetarian', 'Breakfast', 'Side'];

function SearchBar({ selected, onSelect }) {
    return (
        <div className="filter-container">
        {categories.map((category) => {
        const isSelected = category === selected;

        return (
            <button
            key={category}
            type="button"
            className={`chip ${isSelected ? 'active' : ''}`}
            onClick={() => onSelect(category)}
            >
            {category}
            </button>
        );
        })}
        </div>
        );
}

export default SearchBar;