import React, { useState } from "react";
import FoodCard from "../../components/foodItem/FoodCard";
import CategoryFilter from "../../components/Filter/Filter";
import { items, categories } from "../../data/DeliveryData";
import { useNavigate } from "react-router-dom";
import "./Delivery.css";

const Delivery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Items");

  const [expandedId, setExpandedId] = useState(null);

  const handleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems =
    selectedCategory === "All Items"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const navigate = useNavigate();

  const goToBucket = () => {
    navigate("/order-summary");
  };

  return (
    <div className="delivery">
      <div className="delivery-container-top">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <div className="delivery-container-bottom">
        {filteredItems.map((item) => (
          <FoodCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            sizes={item.sizes}
            normalPrice={item.normalPrice}
            isExpanded={expandedId === item.id}
            onExpand={() => handleExpand(item.id)}
          />
        ))}
      </div>
      <button className="gotobucket" onClick={goToBucket}>
        Go to bucket
      </button>
    </div>
  );
};

export default Delivery;
