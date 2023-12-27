import React from "react";
import HomeNav from "./HomeNav";

export default function ProjectsHome({ isFormSubmitted }) {
  console.log("Form submitted:", isFormSubmitted);

  return (
    isFormSubmitted && (
      <div>
        <HomeNav />
        <div className="title pt-3 justify-between flex items-center">
          <h1
            className="text-purple-700  text-6xl  font-semibold  "
            style={{ paddingLeft: "130px" }}>
            Project
          </h1>
          <div className="pr-28">
            <button
              className="rounded-md bg-gray-800 text-white px-3 py-1 flex gap-3 "
              style={{ height: "45px", width: "300px" }}>
              <svg
                className="pt-1"
                width="30"
                height="30"
                viewBox="0 0 57 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.8806 42.7186H31.4663V31.5484H42.6376V25.9633H31.4663V14.7931H25.8806V25.9633H14.7093V31.5484H25.8806V42.7186ZM28.6734 56.6814C24.81 56.6814 21.1793 55.9478 17.7814 54.4808C14.3834 53.0138 11.4277 51.0246 8.91415 48.5131C6.4006 45.9998 4.41117 43.0444 2.94587 39.6468C1.48056 36.2492 0.746979 32.6189 0.745117 28.7558C0.745117 24.8928 1.4787 21.2625 2.94587 17.8649C4.41304 14.4673 6.40246 11.5118 8.91415 8.99854C11.4277 6.48524 14.3834 4.49601 17.7814 3.03085C21.1793 1.56569 24.81 0.832184 28.6734 0.830322C32.5368 0.830322 36.1675 1.56383 39.5655 3.03085C42.9634 4.49787 45.9192 6.4871 48.4327 8.99854C50.9463 11.5118 52.9366 14.4673 54.4038 17.8649C55.8709 21.2625 56.6036 24.8928 56.6017 28.7558C56.6017 32.6189 55.8681 36.2492 54.401 39.6468C52.9338 43.0444 50.9444 45.9998 48.4327 48.5131C45.9192 51.0264 42.9634 53.0166 39.5655 54.4836C36.1675 55.9506 32.5368 56.6832 28.6734 56.6814Z"
                  fill="#F8F8F8"
                />
              </svg>
              <h2 className="font-medium text-2xl ">Create New Project</h2>
            </button>
          </div>
        </div>
        <div className="container">
          <div className="cards flex pt-4 pr-5 pl-14 gap-10">
            <div className="flex  border-2 p-4 m-2  rounded-lg shadow-md overflow-hidden ">
              <div className="flex items-center space-x-4">
                {/* Vertical Card */}
                <div className="flex-shrink-0 w-32 h-28 bg-purple-700 rounded-lg shadow-md overflow-hidden">
                  {/* Card Content */}
                  <div className="">
                    <h3 className="text-center text-6xl font-bold pt-5 px-4 py-5  text-white">
                      SP
                    </h3>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="flex flex-col">
                  {/* Text */}
                  <div className="text-left">
                    <p className="text-xl font-bold text-purple-700 pr-10 pt-5">
                      Sample Project
                    </p>
                  </div>

                  {/* Subtext */}
                  <div className="text-left">
                    <p className="text-black">4 Episode</p>
                  </div>

                  {/* Check Bottom */}
                  <div className="text-left mt-2 pt-5">
                    <p className="text-gray-500 ">Last edited a week ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  border-2 p-4 m-2  rounded-lg shadow-md overflow-hidden ">
              {" "}
              <div className="flex items-center space-x-4">
                {/* Vertical Card */}
                <div className="flex-shrink-0 w-32 h-28 bg-purple-700 rounded-lg shadow-md overflow-hidden">
                  {/* Card Content */}
                  <div className="">
                    <h3 className="text-center text-6xl font-bold pt-5 px-4 py-5  text-white">
                      SP
                    </h3>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="flex flex-col">
                  {/* Text */}
                  <div className="text-left">
                    <p className="text-xl font-bold text-purple-700 pr-12 pt-5">
                      Sample Project
                    </p>
                  </div>

                  {/* Subtext */}
                  <div className="text-left">
                    <p className="text-black">4 Episode</p>
                  </div>

                  {/* Check Bottom */}
                  <div className="text-left mt-2 pt-5">
                    <p className="text-gray-500 ">Last edited a week ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  border-2 p-4 m-2  rounded-lg shadow-md overflow-hidden ">
              {" "}
              <div className="flex items-center space-x-4">
                {/* Vertical Card */}
                <div className="flex-shrink-0 w-32 h-28 bg-purple-700 rounded-lg shadow-md overflow-hidden">
                  {/* Card Content */}
                  <div className="">
                    <h3 className="text-center text-6xl font-bold pt-5 px-4 py-5  text-white">
                      SP
                    </h3>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="flex flex-col">
                  {/* Text */}
                  <div className="text-left">
                    <p className="text-xl font-bold text-purple-700 pr-12 pt-5">
                      Sample Project
                    </p>
                  </div>

                  {/* Subtext */}
                  <div className="text-left">
                    <p className="text-black">4 Episode</p>
                  </div>

                  {/* Check Bottom */}
                  <div className="text-left mt-2 pt-5">
                    <p className="text-gray-500 ">Last edited a week ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cards flex pt-4 pr-5 pl-14 gap-10">
            <div className="flex  border-2 p-4 m-2  rounded-lg shadow-md overflow-hidden ">
              <div className="flex items-center space-x-4">
                {/* Vertical Card */}
                <div className="flex-shrink-0 w-32 h-28 bg-purple-700 rounded-lg shadow-md overflow-hidden">
                  {/* Card Content */}
                  <div className="">
                    <h3 className="text-center text-6xl font-bold pt-5 px-4 py-5  text-white">
                      SP
                    </h3>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="flex flex-col">
                  {/* Text */}
                  <div className="text-left">
                    <p className="text-xl font-bold text-purple-700 pr-10 pt-5">
                      Sample Project
                    </p>
                  </div>

                  {/* Subtext */}
                  <div className="text-left">
                    <p className="text-black">4 Episode</p>
                  </div>

                  {/* Check Bottom */}
                  <div className="text-left mt-2 pt-5">
                    <p className="text-gray-500 ">Last edited a week ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  border-2 p-4 m-2  rounded-lg shadow-md overflow-hidden ">
              {" "}
              <div className="flex items-center space-x-4">
                {/* Vertical Card */}
                <div className="flex-shrink-0 w-32 h-28 bg-purple-700 rounded-lg shadow-md overflow-hidden">
                  {/* Card Content */}
                  <div className="">
                    <h3 className="text-center text-6xl font-bold pt-5 px-4 py-5  text-white">
                      SP
                    </h3>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="flex flex-col">
                  {/* Text */}
                  <div className="text-left">
                    <p className="text-xl font-bold text-purple-700 pr-12 pt-5">
                      Sample Project
                    </p>
                  </div>

                  {/* Subtext */}
                  <div className="text-left">
                    <p className="text-black">4 Episode</p>
                  </div>

                  {/* Check Bottom */}
                  <div className="text-left mt-2 pt-5">
                    <p className="text-gray-500 ">Last edited a week ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  border-2 p-4 m-2  rounded-lg shadow-md overflow-hidden w- ">
              {" "}
              <div className="flex items-center space-x-4">
                {/* Vertical Card */}
                <div className="flex-shrink-0 w-32 h-28 bg-purple-700 rounded-lg shadow-md overflow-hidden">
                  {/* Card Content */}
                  <div className="">
                    <h3 className="text-center text-6xl font-bold pt-5 px-4 py-5  text-white">
                      SP
                    </h3>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="flex flex-col">
                  {/* Text */}
                  <div className="text-left">
                    <p className="text-xl font-bold text-purple-700 pr-12 pt-5">
                      Sample Project
                    </p>
                  </div>

                  {/* Subtext */}
                  <div className="text-left">
                    <p className="text-black">4 Episode</p>
                  </div>

                  {/* Check Bottom */}
                  <div className="text-left mt-2 pt-5">
                    <p className="text-gray-500 ">Last edited a week ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cards flex pt-4 pr-5 pl-14 gap-10">
            <div className="flex  border-2 p-4 m-2  rounded-lg shadow-md overflow-hidden ">
              <div className="flex items-center space-x-4">
                {/* Vertical Card */}
                <div className="flex-shrink-0 w-32 h-28 bg-purple-700 rounded-lg shadow-md overflow-hidden">
                  {/* Card Content */}
                  <div className="">
                    <h3 className="text-center text-6xl font-bold pt-5 px-4 py-5  text-white">
                      SP
                    </h3>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="flex flex-col">
                  {/* Text */}
                  <div className="text-left">
                    <p className="text-xl font-bold text-purple-700 pr-10 pt-5">
                      Sample Project
                    </p>
                  </div>

                  {/* Subtext */}
                  <div className="text-left">
                    <p className="text-black">4 Episode</p>
                  </div>

                  {/* Check Bottom */}
                  <div className="text-left mt-2 pt-5">
                    <p className="text-gray-500 ">Last edited a week ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  border-2 p-4 m-2  rounded-lg shadow-md overflow-hidden ">
              {" "}
              <div className="flex items-center space-x-4">
                {/* Vertical Card */}
                <div className="flex-shrink-0 w-32 h-28 bg-purple-700 rounded-lg shadow-md overflow-hidden">
                  {/* Card Content */}
                  <div className="">
                    <h3 className="text-center text-6xl font-bold pt-5 px-4 py-5  text-white">
                      SP
                    </h3>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="flex flex-col">
                  {/* Text */}
                  <div className="text-left">
                    <p className="text-xl font-bold text-purple-700 pr-12 pt-5">
                      Sample Project
                    </p>
                  </div>

                  {/* Subtext */}
                  <div className="text-left">
                    <p className="text-black">4 Episode</p>
                  </div>

                  {/* Check Bottom */}
                  <div className="text-left mt-2 pt-5">
                    <p className="text-gray-500 ">Last edited a week ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  border-2 p-4 m-2  rounded-lg shadow-md overflow-hidden ">
              {" "}
              <div className="flex items-center space-x-4">
                {/* Vertical Card */}
                <div className="flex-shrink-0 w-32 h-28 bg-purple-700 rounded-lg shadow-md overflow-hidden">
                  {/* Card Content */}
                  <div className="">
                    <h3 className="text-center text-6xl font-bold pt-5 px-4 py-5  text-white">
                      SP
                    </h3>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="flex flex-col">
                  {/* Text */}
                  <div className="text-left">
                    <p className="text-xl font-bold text-purple-700 pr-12 pt-5">
                      Sample Project
                    </p>
                  </div>

                  {/* Subtext */}
                  <div className="text-left">
                    <p className="text-black">4 Episode</p>
                  </div>

                  {/* Check Bottom */}
                  <div className="text-left mt-2 pt-5">
                    <p className="text-gray-500 ">Last edited a week ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
