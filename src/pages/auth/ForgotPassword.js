import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("vikashkumar04081999@gmail.com");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const { authSlice } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (authSlice && authSlice.token) history("/");
  }, [authSlice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await sendPasswordResetEmail(auth, email)
      .then(() => {
        setEmail("");
        setLoading(false);
        toast.success("Check your email for password reset link");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
        console.log("ERROR MSG IN FORGOT PASSWORD", error);
      });
  };

  return (
    <div
      className="container col-md-6 offset-md-3 p-5"
      style={{ position: "fixed", top: "10%" }}
    >
      {loading ? (
        <h4>Loading</h4>
      ) : (
        <h4 style={{ color: " white" }}>Forgot Password</h4>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type your email"
          autoFocus
        />
        <br />
        <button className="btn btn-raised" disabled={!email}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
