import React, { useState } from "react";
import UploadCards from "./UploadCards";
import Configuration from "./Configuration";
import AccountProfile from "./AccountProfile";
import { Link } from "react-router-dom";

export default function UploadNav() {
  const [Name, setName] = useState("Upload");
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const renderButton = (buttonNumber, backgroundColor, textColor, label) => (
    <div className="buttonfirst pt-2 pl-4" key={buttonNumber}>
      <button
        className={`flex ${backgroundColor} w-11/12 rounded-full items-center pl-3`}
        onClick={() => handleButtonClick(buttonNumber)}>
        <p
          className={`rounded-full ${textColor} w-7 h-7 flex items-center justify-center text-l`}>
          {buttonNumber}
        </p>
        <span className={`${textColor} p-3 font-semibold`}>{label}</span>
      </button>
    </div>
  );

  return (
    <div>
      <div class="grid grid-cols-4 gap-4  ">
        <div class="fixed bottom-0 w-3/12 col-span-1 bg-gray-100 rounded-lg h-full ">
          <Link to="/">
            <div className=" logo flex pt-3 pl-3 w-full">
              <svg
                width="35"
                height="35"
                viewBox="0 0 53 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M37.4727 46.8739L29.8109 43.043C27.6752 41.9862 25.1873 41.9862 23.0517 43.043L15.3678 46.8739C8.80679 50.1544 1.87148 43.087 5.3061 36.592L7.11149 33.2014C7.35367 32.7171 7.74998 32.3428 8.23435 32.1446L36.0857 19.617C37.2306 19.1106 38.5736 19.573 39.146 20.6738L47.5344 36.614C50.9691 43.087 44.0338 50.1544 37.4727 46.8739Z"
                  fill="#7E22CE"
                />
                <path
                  opacity="0.4"
                  d="M34.3463 16.9308L16.1163 25.1431C14.0688 26.0678 11.9992 23.8661 13.056 21.8846L19.7491 9.18088C22.5893 3.78675 30.2952 3.78675 33.1354 9.18088L35.4912 13.6723C36.1076 14.8832 35.6013 16.3584 34.3463 16.9308Z"
                  fill="#7E22CE"
                />
              </svg>
              <h3 className="text-2xl pt-0.5 text-purple-600 font-bold">
                LAMA.
              </h3>
            </div>
          </Link>{" "}
          <p className=" p-4 pl-5 font-normal text-sm">Prodcast Upload flow</p>
          <div
            className=" buttonfirst pt-2 pl-4 "
            onClick={() => {
              setName("Upload");
            }}>
            {renderButton(
              1,
              activeButton === 1 ? "bg-purple-800" : "bg-gray-300",
              activeButton === 1 ? "text-white" : "text-black",
              "Projects",
            )}
          </div>
          <div
            className="buttonfirst pt-2 pl-4 "
            onClick={() => {
              setName("Configuration");
            }}>
            {renderButton(
              2,
              activeButton === 2 ? "bg-purple-800" : " bg-gray-300",
              activeButton === 2 ? "text-white" : "text-black",
              "Widget Configurations",
            )}
          </div>
          <div className="buttonfirst pt-2 pl-4 ">
            {renderButton(
              3,
              activeButton === 3 ? "bg-purple-800" : " bg-gray-300",
              activeButton === 3 ? "text-white" : "text-black",
              "Deployment",
            )}
          </div>
          <div className="buttonfirst pt-2 pl-4 ">
            {renderButton(
              4,
              activeButton === 4 ? "bg-purple-800" : " bg-gray-300",
              activeButton === 4 ? "text-white" : "text-black",
              "Pricing",
            )}
          </div>
          <div className="flex justify-center items-center">
            <hr className="w-5/6 border-t-2 flex pl-3" />
          </div>
          <div className="buttonfirst pt-2 pl-4 ">
            <button
              className={`flex w-[350px] rounded-full items-center pl-3 bottom-0 fixed ${
                activeButton === 5
                  ? "bg-purple-800 text-white"
                  : "bg-gray-300 text-black"
              }`}
              onClick={() => {
                setName("Account Setting");
                setActiveButton(5); // Change the button number as needed
              }}>
              <p class="rounded-full bg-gray-300 text-white w-7 h-7 flex items-center justify-center text-l">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.38">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.3102 21.03C15.2102 21.71 14.5902 22.25 13.8502 22.25H10.1502C9.41023 22.25 8.79023 21.71 8.70023 20.98L8.43023 19.09C8.16023 18.95 7.90023 18.8 7.64023 18.63L5.84023 19.35C5.14023 19.61 4.37023 19.32 4.03023 18.7L2.20023 15.53C1.85023 14.87 2.00023 14.09 2.56023 13.65L4.09023 12.46C4.08023 12.31 4.07023 12.16 4.07023 12C4.07023 11.85 4.08023 11.69 4.09023 11.54L2.57023 10.35C1.98023 9.90001 1.83023 9.09001 2.20023 8.47001L4.05023 5.28001C4.39023 4.66001 5.16023 4.38001 5.84023 4.65001L7.65023 5.38001C7.91023 5.21001 8.17023 5.06001 8.43023 4.92001L8.70023 3.01001C8.79023 2.31001 9.41023 1.76001 10.1402 1.76001H13.8402C14.5802 1.76001 15.2002 2.30001 15.2902 3.03001L15.5602 4.92001C15.8302 5.06001 16.0902 5.21001 16.3502 5.38001L18.1502 4.66001C18.8602 4.40001 19.6302 4.69001 19.9702 5.31001L21.8102 8.49001C22.1702 9.15001 22.0102 9.93001 21.4502 10.37L19.9302 11.56C19.9402 11.71 19.9502 11.86 19.9502 12.02C19.9502 12.18 19.9402 12.33 19.9302 12.48L21.4502 13.67C22.0102 14.12 22.1702 14.9 21.8202 15.53L19.9602 18.75C19.6202 19.37 18.8502 19.65 18.1602 19.38L16.3602 18.66C16.1002 18.83 15.8402 18.98 15.5802 19.12L15.3102 21.03ZM10.6202 20.25H13.3802L13.7502 17.7L14.2802 17.48C14.7202 17.3 15.1602 17.04 15.6202 16.7L16.0702 16.36L18.4502 17.32L19.8302 14.92L17.8002 13.34L17.8702 12.78L17.8733 12.7531C17.9023 12.5027 17.9302 12.2607 17.9302 12C17.9302 11.73 17.9002 11.47 17.8702 11.22L17.8002 10.66L19.8302 9.08001L18.4402 6.68001L16.0502 7.64001L15.6002 7.29001C15.1802 6.97001 14.7302 6.71001 14.2702 6.52001L13.7502 6.30001L13.3802 3.75001H10.6202L10.2502 6.30001L9.72023 6.51001C9.28023 6.70001 8.84023 6.95001 8.38023 7.30001L7.93023 7.63001L5.55023 6.68001L4.16023 9.07001L6.19023 10.65L6.12023 11.21C6.09023 11.47 6.06023 11.74 6.06023 12C6.06023 12.26 6.08023 12.53 6.12023 12.78L6.19023 13.34L4.16023 14.92L5.54023 17.32L7.93023 16.36L8.38023 16.71C8.81023 17.04 9.24023 17.29 9.71023 17.48L10.2402 17.7L10.6202 20.25ZM15.5002 12C15.5002 13.933 13.9332 15.5 12.0002 15.5C10.0672 15.5 8.50023 13.933 8.50023 12C8.50023 10.067 10.0672 8.50001 12.0002 8.50001C13.9332 8.50001 15.5002 10.067 15.5002 12Z"
                      fill="#1D1B20"
                    />
                  </g>
                </svg>
              </p>
              <span className="  text-black p-3 font-semibold ">Settings</span>
            </button>
          </div>
        </div>

        <div class="col-span-3 flex pl-[420px] pt-10 w-full">
          <div className="nav flex  w-full">
            <div className="left flex">
              <svg
                width="37"
                height="37"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M26.0002 13.4116L36.8335 23.1616V40.0833H32.5002V27.0833H19.5002V40.0833H15.1668V23.1616L26.0002 13.4116ZM26.0002 7.58325L4.3335 27.0833H10.8335V44.4166H23.8335V31.4166H28.1668V44.4166H41.1668V27.0833H47.6668L26.0002 7.58325Z"
                  fill="#7E22CE"
                />
              </svg>
              <p className="font-semibold text-2xl opacity-40 pt-1">
                /Sample Project /
              </p>
              <span className="text-purple-600 font-bold text-2xl pt-1 ">
                {Name}
              </span>
            </div>
          </div>
        </div>
        <div className="right flex gap-3 pt-10 justify-end pr-4">
          <svg
            width="45"
            height="45"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.6667 25.3333L32.0001 38.6666L45.3334 25.3333H18.6667Z"
              fill="#1E1E1E"
            />
          </svg>
          <p className="items-baseline text-2xl font-semibold pt-1">EN</p>
          <div className="pt-1">
            <div class="rounded-full bg-black w-8 h-8 overflow-hidden flex items-baseline justify-center">
              <img
                src="https://media.istockphoto.com/id/1270270387/vector/india-flag.jpg?s=612x612&w=0&k=20&c=sJrAdDoKVffgAm6xJlVmGGjVYxZGuSVzZ5DNnFJFbc8="
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <svg
            width="48"
            height="48"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32.0001 58C34.9334 58 37.3334 55.6 37.3334 52.6667H26.6667C26.6667 55.6 29.0667 58 32.0001 58ZM48.0001 42V28.6667C48.0001 20.48 43.6534 13.6267 36.0001 11.8133V10C36.0001 7.78667 34.2134 6 32.0001 6C29.7867 6 28.0001 7.78667 28.0001 10V11.8133C20.3734 13.6267 16.0001 20.4533 16.0001 28.6667V42L10.6667 47.3333V50H53.3334V47.3333L48.0001 42ZM42.6667 44.6667H21.3334V28.6667C21.3334 22.0533 25.3601 16.6667 32.0001 16.6667C38.6401 16.6667 42.6667 22.0533 42.6667 28.6667V44.6667Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="title pl-[425px]">
          <h3 className=" font-bold text-4xl text-purple-700 pt-9 w-96">
            {Name}
          </h3>
        </div>

        <div
          className="cards pl-12 pt-28
        ">
          {activeButton === 1 && <UploadCards setName={setName} />}
          {activeButton === 2 && <Configuration setName={setName} />}
          {activeButton === 5 && <AccountProfile />}
        </div>
      </div>
    </div>
  );
}
