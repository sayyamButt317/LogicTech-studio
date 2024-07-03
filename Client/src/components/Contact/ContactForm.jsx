import React, { useState } from "react";
import Axios from "axios";

const formFields = [
  { id: "username", label: "User name" },
  { id: "email", label: "Your Email" },
  { id: "phone", label: "Enter your number " },
  { id: "location", label: "Enter Your Location" },
  { id: "text", label: "Message here" },
];

const Map = () => {
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
    console.log("Form data:", formData); 
    try {
      const res = await Axios.post("http://localhost:5000/save-form", formData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log("Form submitted:", res.data);
      window.alert("Success Submitted");
    } catch (error) {
      console.error("Error submitting form:", error.response.data);
      window.alert("Error");
    }
  };
  
  

  return (
    <>
     <div className="flex justify-center items-center h-screen">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8"
  >
    <h1 className="mb-5 text-xl font-bold">Contact Us</h1>
    <div className="container flex-col">
      {formFields.map((field, index) => (
        <div key={index} className="max-w-sm mx-auto mt-5">
          <label
            htmlFor={field.id}
            className="block uppercase tracking-wide mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
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
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-full px-20 sm:w-[300px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full mt-5 mb-5"
        >
          Submit
        </button>
      </div>
    </div>
  </form>
</div>

    </>
  );
};

export default Map;
