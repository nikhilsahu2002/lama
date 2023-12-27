import React, { useState, useRef, useEffect } from "react";
import { SketchPicker } from "react-color";

export default function Configuration() {
  const [NavNum, setNavNum] = useState(1);
  const [select, setSelect] = useState("pl-0");
  const [color, setColor] = useState("black");
  const [showPicker, setShowPicker] = useState(false);
  const colorBoxRef = useRef(null);

  const handleNavClick = (navNum, selectClass) => {
    setNavNum(navNum);
    setSelect(selectClass);
  };

  const handleChange = (newColor) => {
    setColor(newColor.hex);
  };

  const handleTextClick = () => {
    setShowPicker(!showPicker);
  };

  const handleClickOutside = (e) => {
    if (colorBoxRef.current && !colorBoxRef.current.contains(e.target)) {
      setShowPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <div className="nav gap-9 flex pb-2">
        <button
          className={`${
            NavNum === 1 ? "text-purple-700 font-bold text-xl" : ""
          }`}
          onClick={() => handleNavClick(1, "pl-0")}>
          General
        </button>

        <button
          className={`${
            NavNum === 2 ? "text-purple-700 font-bold text-xl" : ""
          }`}
          onClick={() => handleNavClick(2, "ml-20")}>
          Display
        </button>
        <button
          className={`${
            NavNum === 3 ? "text-purple-700 font-bold text-xl" : ""
          }`}
          onClick={() => handleNavClick(3, "ml-44")}>
          Advance
        </button>
      </div>
      <div className="progress flex w-[1050px] relative">
        <hr
          className={`absolute ${select}  bg-purple-700 border-2 p-0.5 w-20 rounded-lg`}
        />
        <hr className="w-full border-2 rounded-lg p-0.5 bg-gray-200"></hr>
      </div>
      {NavNum === 1 && (
        <div className="InputBox mt-5">
          <div className="">
            <label
              htmlFor="BotName"
              className="block  font-bold opacity-75 text-lg text-blacl-700 pb-2 ">
              Chatbot Name
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              className="mt-1 p-2 border-2 w-[1050px] rounded-md "
              placeholder="Type Here"
            />
            <p className="text-xs opacity-75">Lorem ipsum dolor sit, amet</p>
          </div>
          <div className="">
            <label
              htmlFor="BotName"
              className="block  font-bold opacity-75 text-lg text-blacl-700 pb-2 pt-3">
              Welcome Message
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              className="mt-1 p-2 border-2 w-[1050px] rounded-md "
              placeholder="Type Here"
            />
            <p className="text-xs opacity-75">Lorem ipsum dolor sit, amet</p>
          </div>
          <div className="">
            <label
              htmlFor="BotName"
              className="block  font-bold opacity-75 text-lg text-blacl-700 pb-2 pt-3">
              Input Placeholder
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              className="mt-1 p-2 border-2 w-[1050px] rounded-md "
              placeholder="Type Here"
            />
            <p className="text-xs opacity-75">Lorem ipsum dolor sit, amet</p>
          </div>
        </div>
      )}
      {NavNum === 2 && (
        <div className=" mt-8 mb-80">
          <div className="inputcolor flex">
            {/* Your existing input and color box */}
            <div className="mr-4">
              <h2 className="text-lg font-semibold pb-2">Primary Color</h2>
              <input
                type="text"
                value={color}
                className="border-2 rounded-lg p-1 w-96"
                onChange={handleInputChange}
              />
            </div>
            <div className="concol pt-9">
              <div
                className="box border-2 w-9 h-9 rounded-lg "
                style={{ backgroundColor: color }}
                onClick={handleTextClick}
                ref={colorBoxRef}></div>
            </div>
            <div className="color2 flex ml-20">
              <div className="mr-4 ">
                <h2 className="text-lg font-semibold pb-2">Font Color</h2>
                <input
                  type="text"
                  value={color}
                  className="border-2 rounded-lg p-1 w-96"
                  onChange={handleInputChange}
                />
              </div>
              <div className="concol pt-9">
                <div
                  className="box border-2 w-9 h-9 rounded-lg "
                  style={{ backgroundColor: color }}
                  onClick={handleTextClick}
                  ref={colorBoxRef}></div>
              </div>
            </div>

            {showPicker && (
              <div className="absolute mt-12">
                <SketchPicker color={color} onChange={handleChange} />
              </div>
            )}
          </div>
          <div className="input flex">
            <div className="color3 flex pt-4">
              <div className="mr-4 ">
                <h2 className="text-lg font-semibold pb-2">
                  <p>Font Size (in px)</p>
                </h2>
                <input
                  type="text"
                  className="border-2 rounded-lg p-1 w-96"
                  placeholder="25px"
                />
              </div>
            </div>
            <div className="color4 flex pt-4 ml-28">
              <div className="mr-4 ">
                <h2 className="text-lg font-semibold pb-2">
                  <p>Chat Height (in % of total screen)</p>
                </h2>
                <input
                  type="text"
                  className="border-2 rounded-lg p-1 w-96"
                  placeholder="25px"
                />
              </div>
            </div>
          </div>
          <div className="input flex">
            <div className="color3 flex pt-4">
              <div className="mr-4  w-96">
                <h2 className="text-xl font-bold pb-2 pt-2">Show Source</h2>
                <p className="text-xs opacity-75">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
            <div className="color6  flex pt-10 ml-96  items-end text-end ">
              <div className="mr-4 w-32 justify-end  ">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>
          </div>
          <div className="progress flex w-[1050px] relative pt-14">
            <hr className="w-full border-0 rounded-lg p-0.5 bg-gray-200"></hr>
          </div>
          <div className="pt-9">
            <h1 className="text-purple-700 font-bold text-lg">Chat Icon</h1>
          </div>
          <div className="input flex">
            <div className="color3 flex pt-4">
              <div className="mr-4">
                <h2 className="text-lg font-semibold pb-2">
                  <p>Chat Icon Size</p>
                </h2>
                <select
                  className="border-2 rounded-lg p-1 w-96"
                  defaultValue="25px" // Set the default value
                >
                  <option value="12px">12px</option>
                  <option value="16px">16px</option>
                  <option value="20px">20px</option>
                  <option value="25px">25px</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>

            <div className="color4 flex pt-4 ml-28">
              <div className="mr-4">
                <h2 className="text-lg font-semibold pb-2">
                  <p>Position on Screen</p>
                </h2>
                <select
                  className="border-2 rounded-lg p-1 w-96"
                  defaultValue="center" // Set the default value
                >
                  <option value="top-left">Top Left</option>
                  <option value="top-center">Top Center</option>
                  <option value="top-right">Top Right</option>
                  <option value="center-left">Center Left</option>
                  <option value="center">Center</option>
                  <option value="center-right">Center Right</option>
                  <option value="bottom-left">Bottom Left</option>
                  <option value="bottom-center">Bottom Center</option>
                  <option value="bottom-right">Bottom Right</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
          </div>
          <div className="input flex">
            <div className="color3 flex pt-4">
              <div className="mr-4 ">
                <h2 className="text-lg font-semibold pb-2">
                  <p>Distance from Bottom (in px)</p>
                </h2>
                <input
                  type="text"
                  className="border-2 rounded-lg p-1 w-96"
                  placeholder="25px"
                />
              </div>
            </div>
            <div className="color4 flex pt-4 ml-28">
              <div className="mr-4 ">
                <h2 className="text-lg font-semibold pb-2">
                  <p>Horizontal Distance (in px)</p>
                </h2>
                <input
                  type="text"
                  className="border-2 rounded-lg p-1 w-96"
                  placeholder="25px"
                />
              </div>
            </div>
          </div>
          <div className="input ">
            <div className="color3 flex pt-4">
              <div className="mr-4 w-96">
                <h2 className="text-lg font-semibold pb-2">
                  <p>Bot Icon</p>
                </h2>
              </div>
            </div>
            <div className="color4 flex ">
              <div className="mr-4 rounded-full w-16 h-16 bg-gray-400"></div>
              <div className="button pt-2">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-4  mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 flex justify-center items-center w-36 py-2">
                  Upload Image{" "}
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.0417 23.3333V11.4479L12.25 15.2396L10.2084 13.125L17.5 5.83334L24.7917 13.125L22.75 15.2396L18.9584 11.4479V23.3333H16.0417ZM8.75004 29.1667C7.94796 29.1667 7.26108 28.8808 6.68942 28.3092C6.11775 27.7375 5.8324 27.0511 5.83338 26.25V21.875H8.75004V26.25H26.25V21.875H29.1667V26.25C29.1667 27.0521 28.8809 27.739 28.3092 28.3106C27.7375 28.8823 27.0512 29.1677 26.25 29.1667H8.75004Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
