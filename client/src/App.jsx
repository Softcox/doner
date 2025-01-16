import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LandingPage } from "./pages/landingPage/LandingPage";
import Delivery from "./pages/delivery/Delivery";
import { OrderSummaryPage } from "./pages/orderSummary/OrderSummaryPage";
import ConfirmOrder from "./components/confirmOrder/ConfirmOrder";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/order-summary" element={<OrderSummaryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
