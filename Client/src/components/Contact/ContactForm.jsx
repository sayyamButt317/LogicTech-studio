import React, { useState } from "react";
import axios from "axios";
import { response } from "express";

const ContactForm = () => {
  // const [result, setResult] = useState(""); 
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    location: "",
    text: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/v1/form', formData);
      console.log('Success:', response.data);
      if (response.status === 200) {
        setResult("Message Sent!");
      } else {
        setResult("Message Failed!");
      }

      // Reset the form after successful submission
      setFormData({
        username: "",
        email: "",
        phone: "",
        location: "",
        text: "",
      });

    } catch (error) {
      console.error('Error:', error);
      setResult("Message Failed!");
    }
  };

  const handleReset = () => {
    setFormData({
      username: "",
      email: "",
      phone: "",
      location: "",
      text: "",
    });
  };

  return (
    <div className="w-full px-4 py-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-900 mb-2">
              User name
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="block w-full p-2.5 border border-gray-300 rounded-lg"
              placeholder="User name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full p-2.5 border border-gray-300 rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
              Enter your number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full p-2.5 border border-gray-300 rounded-lg"
              placeholder="Enter your number"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-900 mb-2">
              Enter Your Location
            </label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={handleChange}
              className="block w-full p-2.5 border border-gray-300 rounded-lg"
              placeholder="Enter Your Location"
            />
          </div>
          <div>
            <label htmlFor="text" className="block text-sm font-medium text-gray-900 mb-2">
              Message here
            </label>
            <textarea
              id="text"
              value={formData.text}
              onChange={handleChange}
              rows={4}
              className="block w-full p-2.5 border border-gray-300 rounded-lg"
              placeholder="Message here"
            />
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-lg"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 rounded-lg"
            >
              Reset
            </button>

            {result && (
              <p className={`text-center mt-4 ${result === "Message Sent!" ? "text-green-500" : "text-red-500"}`}>
                {result}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
