import { apiRequest } from "../../utils/api";
import React, { useEffect, useState } from "react";
import "../../styles/AuthModal.css";


function AuthModal({ isOpen, onClose }) {
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState("login");
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    email: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    }
  }, [isOpen]);

  if (!isOpen && !visible) return null;

  const handleClose = () => {
    setVisible(false);

    setTimeout(() => {
      onClose();       // tells App.jsx to close modal
    }, 300);
  };


  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await apiRequest("/login", "POST", {        // api/Login for Live Server
        email: formData.emailOrPhone, // 👈 mapping happens here
        password: formData.password,
      });

      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      handleClose();
      window.location.reload();
    } catch (err) {
      setError(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    setError("");
    setLoading(true);

    try {
      await apiRequest("/register", "POST", {           // api/register for Live Server
        email: formData.email,               // signup email
        phone: formData.emailOrPhone,        // phone from same field
        password: formData.password,
      });

      // ✅ Signup success
      // Move user back to login
      setMode("login");
      setFormData({
        emailOrPhone: "",
        email: "",
        password: "",
      });

    } catch (err) {
      setError(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };






  return (
    <div className={`auth-overlay ${visible ? "show" : "hide"}`}>
      <div className={`auth-modal ${visible ? "open" : "close"}`}>
        <button className="auth-close" onClick={handleClose}>
          ✕
        </button>

        <h2 className="auth-title">
          {mode === "login" ? "Login" : "Sign Up"}
        </h2>
        {mode === "login" && (
          <div className="auth-form">

            {/* Email / Phone */}
            <input
              type="text"
              className="auth-input outlined"
              placeholder="Email ID or Phone Number"
              value={formData.emailOrPhone}
              onChange={(e) =>
                setFormData({ ...formData, emailOrPhone: e.target.value })
              }
            />


            {/* Password */}
            <input
              type="password"
              className="auth-input outlined"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />


            {/* Remember + Forgot */}
            <div className="auth-row">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember Me</span>
              </label>

              <button className="forgot-link">
                Forgot Password?
              </button>
            </div>
            {error && <p className="auth-error">{error}</p>}
            {/* Login Button */}
            <button
              className="auth-submit small"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>




            {/* Divider */}
            <div className="auth-divider">
              <span>Or</span>
            </div>

            {/* Google Login */}
            <button className="google-btn">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
              />
              Continue with Google
            </button>

            {/* Footer */}
            <div className="auth-footer">
              <span>Don’t have an account?</span>
              <button
                className="auth-link"
                onClick={() => setMode("signup-step-1")}
              >
                Sign Up
              </button>

            </div>
            <div className="auth-footer-row secondary">
              <span>Do you want to join ?</span>
              <button
                className="auth-link"
                onClick={() => {
                  handleClose();
                  window.location.href = "/sp-registration";
                }}
              >
                Register as a service provider
              </button>
            </div>

          </div>
        )}
        {mode === "signup-step-1" && (
          <div className="auth-form">

            {/* Phone Number */}
            <input
              type="text"
              className="auth-input outlined"
              placeholder="+1   Phone Number"
              value={formData.emailOrPhone}
              onChange={(e) =>
                setFormData({ ...formData, emailOrPhone: e.target.value })
              }
            />


            {/* Email */}
            <input
              type="email"
              className="auth-input outlined"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />


            {/* Password */}
            <input
              type="password"
              className="auth-input outlined"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />


            {/* Continue Button */}
            <button
              className="auth-submit small"
              onClick={handleSignup}
              disabled={loading}
            >
              {loading ? "Signing up..." : "Continue"}
            </button>

            {/* Terms */}
            <label className="terms">
              <input type="checkbox" />
              <span>
                I agree to the <span className="link">terms and conditions</span>
              </span>
            </label>

            {/* Divider */}
            <div className="auth-divider">
              <span>Or</span>
            </div>

            {/* Google Signup */}
            <button className="google-btn">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
              />
              Continue with Google
            </button>

            {/* Footer */}
            <div className="auth-footer">
              <span>Already have an account?</span>
              <button
                className="auth-link"
                onClick={() => setMode("login")}
              >
                Login
              </button>
            </div>

          </div>
        )}



      </div>

    </div>
  );
}

export default AuthModal;
