"use client";
import { useState } from "react";

export default function Signin() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-left mb-6">Sign Up</h2>
        <form>
          {/* Name Field */}
          <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
              <img src="/User (1).png" alt="User Icon" />
              <input
                type="text"
                placeholder="Name"
                className="ml-2 w-full border-none focus:outline-none"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
              <img src="/EnvelopeSimple.png" alt="Envelope Icon" />
              <input
                type="email"
                placeholder="Email"
                className="ml-2 w-full border-none focus:outline-none"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
              <img src="/Lock.png" alt="Lock Icon" />
              <input
                type="password"
                placeholder="Password"
                className="ml-2 w-full border-none focus:outline-none"
              />
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className={`mr-2 ${isChecked ? "bg-[#FF9F0D]" : "bg-white"}`}
                checked={isChecked}
                onClick={handleCheckboxChange}
              />
              Remember me?
            </label>
          </div>

          {/* Sign-Up Button */}
          <button className="w-full bg-[#FF9F0D] text-white py-2 rounded">
            Sign Up
          </button>
          <a
            href="#"
            className="w-full text-sm text-[#FF9F0D] hover:underline flex justify-end py-2"
          >
            Forgot password?
          </a>
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-gray-500">OR</div>

        {/* Social Buttons */}
        <div>
          <button className="w-full flex items-center justify-between px-14 border border-gray-300 py-2 rounded mb-3 hover:bg-gray-100">
            <img src="/Google.png" alt="Google" className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>
          <button className="w-full flex items-center justify-between px-14 border border-gray-300 py-2 rounded hover:bg-gray-100">
            <img src="/Apple.png" alt="Apple" className="w-5 h-5 mr-2" />
            Sign up with Apple
          </button>
        </div>
      </div>
    </div>
  );
}