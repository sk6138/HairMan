import React, { useState } from "react";
import { auth, initRecaptcha } from "./firebase";
import { signInWithPhoneNumber } from "firebase/auth";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to request OTP
  const requestOTP = async () => {
    try {
      setLoading(true);
      initRecaptcha(); // Initialize reCAPTCHA

      // Send OTP
      const confirmation = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
      setConfirmationResult(confirmation);
      alert("OTP sent to your phone!");
    } catch (error) {
      console.error("Error sending OTP:", error.message);
      alert("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to verify OTP
  const verifyOTP = async () => {
    try {
      setLoading(true);
      if (!confirmationResult) {
        alert("Please request an OTP first.");
        return;
      }

      // Confirm OTP
      const result = await confirmationResult.confirm(otp);
      console.log("User signed in:", result.user);
      alert("Logged in successfully!");
    } catch (error) {
      console.error("Invalid OTP:", error.message);
      alert("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="login" style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>OTP Login</h2>

      {/* reCAPTCHA container */}
      <div id="recaptcha-container"></div>

      {!confirmationResult ? (
        <>
          <input
            type="tel"
            placeholder="Enter phone number (+1xxxxxxxxxx)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%" }}
            disabled={loading}
          />
          <button
            onClick={requestOTP}
            disabled={loading || !phone}
            style={{ padding: "10px", width: "100%" }}
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%" }}
            disabled={loading}
          />
          <button
            onClick={verifyOTP}
            disabled={loading || !otp}
            style={{ padding: "10px", width: "100%" }}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
