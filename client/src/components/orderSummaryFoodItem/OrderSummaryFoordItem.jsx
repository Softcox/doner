import React, { useState } from "react";
import PropTypes from "prop-types";
import deleteButton from "../../assets/icons/deletebutton.svg";
import "./OrderSummeryFoodItem.css";

export const OrderSummaryFoodItem = ({
  item: { name, description, price, image },
  onRemove,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const value = Math.max(1, Number(event.target.value));
    setQuantity(value);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  return (
    <div className="order-summary-food-item">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="details">
        <h1>{name}</h1>
        <h2>{description}</h2>
        <div className="quantity-button">
          <button
            className="quantity-btn-cart decrease-btn-cart"
            onClick={decrementQuantity}
          >
            -
          </button>
          <input
            type="number"
            id="quantity"
            value={quantity}
            min="1"
            onChange={handleQuantityChange}
          />
          <button
            className="quantity-btn-cart increase-btn-cart"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>
      </div>
      <div className="price-details">
        <h1>Rs. {price * quantity}</h1>
        <button className="remove-btn" onClick={onRemove}>
          <img src={deleteButton} alt="delete" />
        </button>
      </div>
    </div>
  );
};

// Prop types validation
OrderSummaryFoodItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

// Default props (if needed)
OrderSummaryFoodItem.defaultProps = {
  item: {
    description: "No description available",
  },
};
