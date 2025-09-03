import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import LiveChat from "./LiveChat";

export default function RestaurantDashboard() {
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [prepDate, setPrepDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [instructions, setInstructions] = useState("");
  const navigate = useNavigate();
  

  const recentSubmissions = [
    { type: "Vegetarian", quantity: "25 servings", status: "Collected", time: "2 hours ago" },
    { type: "Vegan", quantity: "15 servings", status: "Pending", time: "30 mins ago" },
    { type: "Bakery", quantity: "40 items", status: "Assigned", time: "1 hour ago" },
  ];


const scrollToSection = (id) => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-[#002D3D] text-white shadow">
        <div className="flex items-center space-x-2">
          {/* <img src="/logo.png" alt="logo" className="w-8 h-8" /> */}
          <h1 className="font-bold text-xl">Donate Verse</h1>
        </div>
        {/* <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">How it Works</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </nav> */}


        <ul className="flex items-center space-x-6 text-sm">
          <li><Link to="/">Home</Link></li>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('how-it-works')}>How it works</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          <li><Link to="/ngologin">Log Out</Link></li>
        </ul>
      </header>

      {/* Search bar */}
      <div className="px-6 py-3 bg-white shadow-sm">
        <input
          type="text"
          placeholder="Search..."
          className="w-full sm:w-80 border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <main className="p-6 space-y-8 max-w-6xl mx-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-6 text-center border-t-4 border-blue-500">
            <h3 className="text-lg font-semibold">Today's submissions</h3>
            <p className="text-3xl text-blue-600 font-bold mt-2">13</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center border-t-4 border-green-500">
            <h3 className="text-lg font-semibold">Collected Today</h3>
            <p className="text-3xl text-green-600 font-bold mt-2">8</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center border-t-4 border-purple-500">
            <h3 className="text-lg font-semibold">Active NGO's</h3>
            <p className="text-3xl text-purple-600 font-bold mt-2">15</p>
          </div>
        </div>

        {/* Food Submission Form */}
        <div className="bg-white border rounded-lg p-6 shadow space-y-4">
          <h2 className="text-xl font-bold mb-4">Submit Leftover Food</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
              className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
            >
              <option value="">Select food type</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="bakery">Bakery</option>
            </select>
            <input
              type="text"
              placeholder="Quantity (e.g. 10 servings)"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              value={prepDate}
              onChange={(e) => setPrepDate(e.target.value)}
              className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <textarea
            placeholder="Any allergies, storage instructions, etc."
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300"
          />

          <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Notify NGO's
          </button>
        </div>

        {/* Recent Submissions */}
        <div className="bg-white border rounded-lg p-6 shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Submissions</h2>
            <button className="text-sm text-blue-600 hover:underline">View all</button>
          </div>

          <div className="grid grid-cols-4 font-semibold text-sm border-b pb-2">
            <span>Food Type</span>
            <span>Quantity</span>
            <span>Status</span>
            <span>Submitted</span>
          </div>

          {recentSubmissions.map((item, idx) => (
            <div key={idx} className="grid grid-cols-4 py-2 text-sm border-b">
              <span>{item.type}</span>
              <span>{item.quantity}</span>
              <span>
                <span
                  className={`px-2 py-1 rounded text-white text-xs ${
                    item.status === "Collected"
                      ? "bg-green-500"
                      : item.status === "Pending"
                      ? "bg-yellow-500"
                      : "bg-purple-500"
                  }`}
                >
                  {item.status}
                </span>
              </span>
              <span>{item.time}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Live Chat Button */}
      <div className="fixed bottom-4 right-4">
        <Link to="/LiveChat">Live chat with NGO</Link>
        {/* <button className="bg-[#002D3D] text-white px-4 py-2 rounded shadow hover:bg-[#001a24]"> 
          Live chat with NGO
        </button> */}
      </div>
    </div>
  );
}
