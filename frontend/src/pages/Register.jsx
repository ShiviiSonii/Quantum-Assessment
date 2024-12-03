import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/register",
        formData
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/protected");
    } catch (error) {
      console.error("Error during registration:", error);
      setError(
        error.response?.data?.message || "An error occurred during registration"
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-teal-50 to-teal-500">
      <div
        className="w-96 backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-6 relative"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)', 
        }}
      >
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-12 bg-teal-500 text-white text-center rounded-lg flex items-center justify-center shadow-md">
          REGISTER
        </div>
        <div className="flex flex-col items-center mt-8">
          <form onSubmit={handleSubmit} className="w-full mt-6 space-y-4">
            <div>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-5 py-3 rounded-lg border border-teal-500 bg-teal-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out"
              />
            </div>
            <div>
            <input
              id="dob"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-lg border border-teal-500 bg-teal-100 text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out"
            />
            </div>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-5 py-3 rounded-lg border border-teal-500 bg-teal-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full px-5 py-3 rounded-lg border border-teal-500 bg-teal-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out"
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <div>
              <button
                type="submit"
                className="w-full py-2 bg-teal-500/90 rounded-md text-white font-semibold hover:bg-teal-400 transition duration-300 ease-in-out"
              >
                Register
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-teal-500 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
