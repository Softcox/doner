import React from 'react';
import './Filter.css';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
                <div className="filter">
                    {categories.map(category => (
                        <div
                        key={category.image}
                        className="filter-container"
                        >
                        <button
                            className={`category-button ${selectedCategory === category.image ? 'active' : ''}`}
                            onClick={() => onCategoryChange(category.name)}
                        >
                            <img src={category.image} alt={category.name} className="category-image" />
                        </button>
                        <p>{category.name}</p>
                        </div>
                    ))}
                </div>
    );
};

export default CategoryFilter;
