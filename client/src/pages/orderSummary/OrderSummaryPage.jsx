import React from "react";
import { OrderSummaryFoodItem } from "../../components/orderSummaryFoodItem/OrderSummaryFoordItem";
import Burger from "../../assets/images/burger.png";
import Receipt from "../../components/receipt/Receipt";
import ConfirmOrder from "../../components/confirmOrder/ConfirmOrder";
import "./OrderSummaryPage.css";

export const OrderSummaryPage = () => {
  const items = [
    {
      id: 1,
      name: "Hot & Spicy Submarine",
      description: "Delicious submarine sandwich with spicy flavors.",
      price: 2000,
      image: Burger,
    },
    {
      id: 2,
      name: "Classic Cheeseburger",
      description: "Juicy burger topped with melted cheese and fresh veggies.",
      price: 1500,
      image: Burger,
    },
    {
      id: 3,
      name: "Classic Cheeseburger",
      description: "Juicy burger topped with melted cheese and fresh veggies.",
      price: 1500,
      image: Burger,
    },
  ];

  const handleRemove = (id) => {
    console.log(`Remove item with ID: ${id}`);
  };

  return (
    <div className="order-summary-page">
      <h1>Your Order Summary</h1>
      <div className="order-summary-page-top">
        <div className="order-item-receipt">
          <div className="order-items">
            {items.map((item) => (
              <OrderSummaryFoodItem
                key={item.id}
                item={item}
                onRemove={() => handleRemove(item.id)}
              />
            ))}
          </div>
          <div className="receipt">
            <Receipt subtotal={5000} deliveryCharge={300} discounts={0} />
          </div>
        </div>
        <div className="confirm-order">
          <ConfirmOrder />
        </div>
      </div>
    </div>
  );
};
