import React from "react";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import NotificationNewsletter from "components/Notifications/NotificationNewsletter";
import TopNotification from "components/Notifications/TopNotification";
import AboutUs from "pages/AboutUs/AboutUs";
import Checkout from "pages/Checkout/Checkout";
import Contact from "pages/Contact/Contact";
import Home from "pages/Home/Home";
import Locations from "pages/Locations/Locations";
import Shop from "pages/Shop/Shop";
import Cart from "pages/ShoppingCart/Cart";
import ShoppingItem from "pages/ShoppingItem/ShoppingItem";
import { Route, Routes } from "react-router";
import "react-slideshow-image/dist/styles.css";
import "styles/global.scss";

function App() {
  return (
    <>
      <Navbar />
      <TopNotification />
      <NotificationNewsletter />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopping-cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shoppingItem:id" element={<ShoppingItem />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
