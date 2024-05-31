import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import NotificationNewsletter from "components/Notifications/NotificationNewsletter";
import TopNotification from "components/Notifications/TopNotification";
import ProtectedRoute from "components/ProtectedRoute";
import ToastNotification from "components/ToastNotification";
import AboutUs from "pages/AboutUs/AboutUs";
import Checkout from "pages/Checkout/Checkout";
import Contact from "pages/Contact/Contact";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import Shop from "pages/Shop/Shop";
import Cart from "pages/ShoppingCart/Cart";
import ShoppingItem from "pages/ShoppingItem/ShoppingItem";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router";
import "react-slideshow-image/dist/styles.css";
import { updateRoute } from "store/entities/navigation";
import "styles/global.scss";

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const isAuthPage = pathname === "/login" || pathname === "/register";

  useEffect(() => {
    dispatch(updateRoute(pathname));
  }, [pathname]);

  return (
    <>
      {!isAuthPage && (
        <>
          <Navbar />
          <TopNotification />
          <NotificationNewsletter />
        </>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopping-cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path="/shoppingItem:id" element={<ShoppingItem />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {!isAuthPage && <Footer />}
      <ToastNotification />
    </>
  );
}

export default App;
