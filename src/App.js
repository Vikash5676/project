import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Header from "./components/navbar/Header";
import RegisterComplete from "./pages/auth/RegisterComplete";
import ForgotPassword from "./pages/auth/ForgotPassword";
import { login } from "./slices/authSlice";
import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import User from "./components/userpage/User";
import ProductList from "./components/productPage/ProductLIst";
import Dasboard from "./components/dashboard/Dasboard";

function App() {
  const dispatch = useDispatch();

  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        // console.log("user", user);
        dispatch(login({ email: user.email, token: idTokenResult }));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header />
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<RegisterComplete />} />
        <Route exact path="/forgot/password" element={<ForgotPassword />} />
        <Route exact path="/dashboard" element={<Dasboard />} />
        <Route exact path="/inventory" element={<ProductList />} />
        <Route exact path="/user" element={<User />} />
        {/* <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<Home />} />         */}
      </Routes>
    </>
  );
}

export default App;
