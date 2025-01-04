import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LandingPage } from "./pages/landingPage/LandingPage";
import Delivery from "./pages/delivery/Delivery";
// import { OrderSummaryFoordItem } from "./components/orderSummaryFoodItem/OrderSummaryFoordItem";
import { OrderSummaryPage } from "./pages/orderSummary/OrderSummaryPage";
import ConfirmOrder from "./components/confirmOrder/ConfirmOrder";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <LandingPage /> */}
      {/* <Delivery /> */}
      {/* <OrderSummaryFoordItem /> */}
      <OrderSummaryPage />
      {/* <ConfirmOrder /> */}
    </div>
  );
}

export default App;
