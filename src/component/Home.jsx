import React from "react";
import { useState, useEffect } from "react";
import homeimg from "../Assets/img/homeimg.png";
import HomeNav from "./HomeNav";

function Home({ onFormSubmit }) {
  const [isBoxOpen, setBoxOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // State to track if the input is empty
  const [isEmpty, setIsEmpty] = useState(false);

  const handleCreateProjectClick = () => {
    setBoxOpen(!isBoxOpen);
  };
  useEffect(() => {
    // Check if the input is empty when the component mounts
    setIsEmpty(inputValue.trim() === "");
  }, [inputValue]);

  // Event handler for input changes
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

  return (
    <div>
      <div className="relative">
        {isBoxOpen && (
          <div className="fixed inset-0 bg-opacity-75 bg-blur backdrop-filter backdrop-blur-sm z-50"></div>
        )}

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
              {isEmpty && (
                <p className="text-red-500">Input cannot be empty.</p>
              )}
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

        <HomeNav onFormSubmit={onFormSubmit} />

        <div className="heading flex flex-col items-center gap-2 ">
          <h1 className="text-purple-700 text-[43.41px]  font-semibold">
            Create a New Project
          </h1>
          <img height="275px" width="325px" src={homeimg} alt="imges" />
        </div>
        <div className="container discription mx-auto text-center max-w-3xl pt-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem praesentium similique eum libero. Temporibus
            consequatur natus nam modi nisi quasi, tempore molestiae. Quasi
            autem incidunt aut sequi odit repellendus velit?
          </p>
        </div>
        <div className="ButtonCreateProject flex justify-center pt-5">
          <button
            className="rounded-md bg-gray-800 text-white px-5 py-4 flex gap-3"
            onClick={handleCreateProjectClick}>
            <svg
              width="35"
              height="35"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25.8806 42.7186H31.4663V31.5484H42.6376V25.9633H31.4663V14.7931H25.8806V25.9633H14.7093V31.5484H25.8806V42.7186ZM28.6734 56.6814C24.81 56.6814 21.1793 55.9478 17.7814 54.4808C14.3834 53.0138 11.4277 51.0246 8.91415 48.5131C6.4006 45.9998 4.41117 43.0444 2.94587 39.6468C1.48056 36.2492 0.746979 32.6189 0.745117 28.7558C0.745117 24.8928 1.4787 21.2625 2.94587 17.8649C4.41304 14.4673 6.40246 11.5118 8.91415 8.99854C11.4277 6.48524 14.3834 4.49601 17.7814 3.03085C21.1793 1.56569 24.81 0.832184 28.6734 0.830322C32.5368 0.830322 36.1675 1.56383 39.5655 3.03085C42.9634 4.49787 45.9192 6.4871 48.4327 8.99854C50.9463 11.5118 52.9366 14.4673 54.4038 17.8649C55.8709 21.2625 56.6036 24.8928 56.6017 28.7558C56.6017 32.6189 55.8681 36.2492 54.401 39.6468C52.9338 43.0444 50.9444 45.9998 48.4327 48.5131C45.9192 51.0264 42.9634 53.0166 39.5655 54.4836C36.1675 55.9506 32.5368 56.6832 28.6734 56.6814Z"
                fill="#F8F8F8"
              />
            </svg>
            <h2 className="font-bold text-2xl">Create New Project</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
