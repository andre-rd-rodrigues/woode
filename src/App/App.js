import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import Home from "pages/Home/Home";
import Cart from "pages/ShoppingCart/Cart";
import ShoppingItem from "pages/ShoppingItem/ShoppingItem";
import { Route, Routes } from "react-router";
import "react-slideshow-image/dist/styles.css";
import "styles/global.scss";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shoppingCart" element={<Cart />} />
        <Route path="/shoppingItem:id" element={<ShoppingItem />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
