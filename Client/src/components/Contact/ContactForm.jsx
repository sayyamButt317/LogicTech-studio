import React, { useState } from "react";
import ContactStepperWidget from "./ContactStepper";

const formFields = [
  { id: "username", label: "User name" },
  { id: "email", label: "Your Email" },
  { id: "phone", label: "Enter your number " },
  { id: "location", label: "Enter Your Location" },
  { id: "text", label: "Message here" },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    location: "",
    text: "",
  });

  const [result, setResult] = useState("");
  const [status, setStatus] = useState("Submit");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    for (const field of formFields) {
      if (!formData[field.id]) {
        setResult(`Please enter your ${field.label.toLowerCase()}.`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setResult("");
    setStatus("Sending...");

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        if (!response.ok) {
          const errorData = await response.json(); // Try to get error details from the response
          throw new Error(errorData.message || 'Network response was not ok'); // Use the backend error if available
        }

      const data = await response.json();

      setStatus("Submit");

      if (data.status === "success") {
        setResult("Message Sent!");
        setFormData({
          username: "",
          email: "",
          phone: "",
          location: "",
          text: "",
        });
      } else {
        setResult("Message failed to send.");
      }
    } catch (error) {
      console.error('Error:', error.message); 
      setStatus("Submit");
      // Update result with more specific error information from the backend
      setResult(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full px-4 py-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-lg font-medium text-blue-400 text-center mb-4">We're here to help.</h2>
        <p className="text-2xl md:text-3xl text-center mb-4">Contact us today and let us know how we can assist you.</p>
        <p className="text-lg md:text-xl text-center mb-8">
          Looking to find and hire great talent? You are one step away from building your perfect product.
        </p>
        <ContactStepperWidget />

        <form onSubmit={handleSubmit} className="mt-8">
          <h1 className="text-xl font-bold mb-4">Contact Us</h1>
          <div className="space-y-4">
            {formFields.map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-sm font-medium text-gray-900 mb-2">
                  {field.label}
                </label>
                {field.id === "text" ? (
                  <textarea
                    id={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    rows={5}
                    className="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder={field.label}
                  />
                ) : (
                  <input
                    type="text"
                    id={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    className="block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder={field.label}
                  />
                )}
              </div>
            ))}
            <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">
              <button
                type="submit"
                className="w-full md:w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full"
              >
                {status}
              </button>
              <button
                type="reset"
                onClick={() => setFormData({
                  username: "",
                  email: "",
                  phone: "",
                  location: "",
                  text: "",
                })}
                className="w-full md:w-1/2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 rounded-full"
              >
                Reset
              </button>
            </div>
            {result && <p className={`text-center mt-4 ${result === "Message Sent!" ? "text-green-500" : "text-red-500"}`}>{result}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
