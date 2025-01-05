import React, { useState } from 'react';
import './FoodCard.css';

const FoodItem = ({ id, image, name, description, sizes, normalPrice, onAddToBucket, isExpanded, onExpand }) => {
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value));
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(quantity > 1 ? quantity - 1 : 1);
    };

    const selectedSizePrice = sizes.find(s => s.size === selectedSize)?.price || 0;
    const displayPrice = selectedSizePrice || normalPrice;

    const handleAddToBucket = () => {
        if (onAddToBucket) {
            onAddToBucket({
                id,
                name,
                selectedSize,
                quantity,
                price: displayPrice
            });
        }
    };

    return (
        <div className={`food-card ${isExpanded ? 'expanded-view' : ''}`}>
            <div className={`food-card-top ${isExpanded ? 'expanded-view' : ''}`}>
                <img src={image} alt={name} className={`food-item-image ${isExpanded ? 'expanded-view' : ''}`} />
                <div className={`food-item-details ${isExpanded ? 'expanded-view' : ''}`}>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <div className="food-item-sizes">
                        {sizes.map((sizeOption) => (
                            <div key={sizeOption.size} className="food-size-option">
                                <input
                                    type="radio"
                                    id={`size-${id}-${sizeOption.size}`}
                                    value={sizeOption.size}
                                    checked={selectedSize === sizeOption.size}
                                    onChange={handleSizeChange}
                                />
                                <label htmlFor={`size-${id}-${sizeOption.size}`}>
                                    <span className="size">{sizeOption.size}</span>
                                    <span className="price">{sizeOption.price} LKR</span>
                                </label>
                            </div>
                        ))}
                    </div>
                    
                </div>
                
            </div>

            <div className='food-items-button'>
                        <div className="food-item-quantity">
                            <button className="quantity-btn decrease-btn" onClick={decrementQuantity}>-</button>
                            <input
                                type="number"
                                id="quantity"
                                value={quantity}
                                min="1"
                                onChange={handleQuantityChange}
                            />
                            <button className="quantity-btn increase-btn" onClick={incrementQuantity}>+</button>
                        </div>
                        <button className='addToBucket' onClick={handleAddToBucket}>Add to bucket</button>
                    </div>

            <div className="food-card-middle">
                {!isExpanded && (
                    <>
                        <h1>{name}</h1>
                        <p>{normalPrice} LKR</p>
                        <button
                            className='food-card-view-more'
                            onClick={() => onExpand(id)}
                        >
                            View More
                        </button>
                    </>
                )}
            </div>

            <div className="food-card-bottom">
                {isExpanded && (
                    <>
                        <div className="food-item-quantity-1">
                            <button className="quantity-btn decrease-btn" onClick={decrementQuantity}>-</button>
                            <input
                                type="number"
                                id="quantity"
                                value={quantity}
                                min="1"
                                onChange={handleQuantityChange}
                            />
                            <button className="quantity-btn increase-btn" onClick={incrementQuantity}>+</button>
                        </div>
                        <button className='addToBucket-1' onClick={handleAddToBucket}>Add to bucket</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default FoodItem;
