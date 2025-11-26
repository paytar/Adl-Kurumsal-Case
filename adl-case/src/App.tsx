import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CardPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
