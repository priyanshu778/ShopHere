import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nopage from "./pages/Nopage/Nopage";
import ProductPages from "./pages/ProductPages/ProductPages";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import CartPage from "./pages/CartPage/CartPage";
import AllProduct from "./pages/AllProduct/AllProduct";
import Signup from "./pages/Registration/Signup";
import Login from "./pages/Registration/Login";
import UserDashboard from "./pages/Users/UserDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AddProductPage from "./pages/Admin/AddproductPages";
import UpdateProductpage from "./pages/Admin/UpdateProductpage";
import MyState from "./context/MyState";
import { Toaster } from "react-hot-toast";
import {ProtectedRouteForUser} from "./protectedRoute/ProtectedRouteForUser";
import {ProtectedRouteForAdmin} from "./protectedRoute/ProtectedRouteForAdmin";
import Category from "./components/Category/Category";
import CategoryPage from "./pages/Category/CategoryPages";

const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Nopage />} />
          <Route path="/productpages/:id" element={<ProductPages />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/:categoryname" element={<CategoryPage />} />
          <Route
            path="/userDashboard"
            element={
              <ProtectedRouteForUser>
                <UserDashboard />
              </ProtectedRouteForUser>
            }
          />
          <Route
            path="/adminDashboard"
            element={
              <ProtectedRouteForAdmin>
                <AdminDashboard />
              </ProtectedRouteForAdmin>
            }
          />

          <Route
            path="/addproduct"
            element={
              <ProtectedRouteForAdmin>
                <AddProductPage />
              </ProtectedRouteForAdmin>
            }
          />


          <Route
            path="/UpdateProductPage/:id"
            element={
              <ProtectedRouteForAdmin>
                <UpdateProductpage />
              </ProtectedRouteForAdmin>
            }
          />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
};

export default App;
