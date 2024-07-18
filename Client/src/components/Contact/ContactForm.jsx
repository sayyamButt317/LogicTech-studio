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
        throw new Error('Network response was not ok');
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
      setResult("An error occurred. Please try again.");
    }
  };

  return (
      <div className="flex justify-evenly items-center h-screen">
        <div className="w-1/3">
          <h2 className="text-lg font-medium text-blue-400">We're here to help.</h2>
          <p className="mt-2 text-4xl">Contact us today and let us know how we can assist you.</p>
          <p className="mt-2 text-xl">
            Looking To Find And Hire Great Talent. You are one step away to build your perfect product.
          </p>
          <ContactStepperWidget />
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h1 className="mb-5 text-xl font-bold">Contact Us</h1>
          <div className="container flex-col">
            {formFields.map((field) => (
                <div key={field.id} className="max-w-sm mx-auto mt-5">
                  <label htmlFor={field.id} className="block uppercase tracking-wide mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    {field.label}
                  </label>
                  {field.id === "text" ? (
                      <textarea
                          id={field.id}
                          value={formData[field.id]}
                          onChange={handleChange}
                          rows={5}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder={field.label}
                      />
                  ) : (
                      <input
                          type="text"
                          id={field.id}
                          value={formData[field.id]}
                          onChange={handleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder={field.label}
                      />
                  )}
                </div>
            ))}
            <div className="flex justify-center px-2">
              <button type="submit" className="w-full px-20 sm:w-[300px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full mt-5 mb-5">
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
                  className="w-full px-20 sm:w-[300px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full mt-5 mb-5 ml-5"
              >
                Reset
              </button>
            </div>
            {result && <p className={result === "Message Sent!" ? "text-green-500" : "text-red-500"}>{result}</p>}
          </div>
        </form>
      </div>
  );
};

export default ContactForm;
