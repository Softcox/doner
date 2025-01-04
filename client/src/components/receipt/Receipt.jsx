import React from "react";
import "./Receipt.css"; // Import the CSS file

const Receipt = ({ subtotal, deliveryCharge, discounts }) => {
  const total = subtotal + deliveryCharge - discounts;

  return (
    <div className="receipt-container">
      <div className="receipt-row">
        <span>Sub total</span>
        <span>{subtotal.toLocaleString()} LKR</span>
      </div>
      <div className="receipt-row">
        <span>Delivery Charge</span>
        <span>{deliveryCharge.toLocaleString()} LKR</span>
      </div>
      <div className="receipt-row">
        <span>Discounts</span>
        <span>{discounts.toLocaleString().padStart(3, "0")} LKR</span>
      </div>

      <div className="receipt-total">
        <span>Total</span>
        <span>{total.toLocaleString()} LKR</span>
      </div>
    </div>
  );
};

export default Receipt;
