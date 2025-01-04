import { useState } from "react";
import location from "../../assets/icons/Location.svg"; // Import the location icon
import "./ConfirmOrder.css"; // Import the CSS file

const ConfirmOrder = () => {
  const [address, setAddress] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCheckboxChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleOrderConfirm = () => {
    if (!address.trim()) {
      alert("Please enter a valid address.");
    } else if (!termsAccepted) {
      alert("Please accept the Terms and Conditions.");
    } else {
      alert(`Order confirmed! Your address: ${address}`);
    }
  };

  return (
    <div className="delivery-form-container">
      <div className="delivery-form-title">
        <img src={location} alt="Location" />
        <h2 className="delivery-form-title">Add delivery address</h2>
      </div>
      <textarea
        placeholder="Enter your address here..."
        value={address}
        onChange={handleAddressChange}
        className="address-textarea"
      />
      <div className="delivery-note">
        <h4>Note:</h4>
        <p>
          Place your order easily online, but please note that all payments are
          made in hand upon delivery, dine-in, or take-away. Delivery is not
          available above 5 kms. Thank you for choosing 4doner!
        </p>
      </div>
      <div className="terms-container">
        <input
          type="checkbox"
          id="terms"
          checked={termsAccepted}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="terms">
          I accept the{" "}
          <a href="#" className="terms-link">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="terms-link">
            Conditions.
          </a>
        </label>
      </div>
      <button
        onClick={handleOrderConfirm}
        className={`confirm-button ${
          !termsAccepted || !address.trim() ? "disabled" : ""
        }`}
        disabled={!termsAccepted || !address.trim()}
      >
        Confirm order
      </button>
    </div>
  );
};

export default ConfirmOrder;
