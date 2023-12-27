import React from "react";
import { useState, useEffect } from "react";

export default function InputBox({ onFormSubmit }) {
  const [isBoxOpen, setBoxOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // State to track if the input is empty
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    // Check if the input is empty when the component mounts
    setIsEmpty(inputValue.trim() === "");
  }, [inputValue]);

  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Check if the input is empty before submitting
    if (!isEmpty) {
      // Use the input value as needed (e.g., send it to an API)
      console.log("Submitted value:", inputValue);
      onFormSubmit();
    } else {
      // Display an error message or perform other actions for an empty input
      console.error("Input cannot be empty.");
    }
  };

  const handleInputChange = (event) => {
    // Update the state with the new input value
    setInputValue(event.target.value);

    // Check if the input is empty
    const isEmptyValue = event.target.value.trim() === "";
    setIsEmpty(isEmptyValue);

    // Log the current values for debugging
    console.log("Input value:", event.target.value);
    console.log("isEmpty:", isEmptyValue);
  };
  return (
    <div>
      <div
        className={`projectBox fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-md shadow-md z-50 ${
          isBoxOpen ? "block" : "hidden"
        }`}
        style={{
          boxShadow: "0 0 10px rgba(126, 34, 206, 0.5)",
          width: "900px",
        }}>
        <div className="flex justify-between items-center mb-5 p-2">
          <h2 className="text-2xl font-bold text-purple-700 ">
            Create New Project
          </h2>
          {/* <button
              onClick={handleCreateProjectClick}
              className="text-gray-500 hover:text-gray-700">
              Close
            </button> */}
        </div>
        {/* Project Title Input */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="projectTitle"
              className="block text-sm font-medium text-gray-700 pb-1">
              Enter Project Name
            </label>
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              value={inputValue}
              onChange={handleInputChange}
              className={`mt-1 p-3 border rounded-md w-full ${
                isEmpty ? "border-red-500" : ""
              }`}
              placeholder="Type Here"
            />
            {isEmpty && <p className="text-red-500">Input cannot be empty.</p>}
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => {
                // Add logic for canceling the project creation
                setBoxOpen(false);
              }}
              className="mr-2 px-4 py-2 text-red-700 rounded-md hover:bg-green-600"
              type="button" // Set the type to "button" to prevent accidental form submission
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-gray-400 font-semibold">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
