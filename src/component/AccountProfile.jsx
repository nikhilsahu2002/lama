import React from "react";

export default function AccountProfile() {
  return (
    <div>
      <div className="profile items-center ">
        <div className="profileImg rounded-full w-40 h-40 overflow-hidden ml-96">
          <img
            src="https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.webp?b=1&s=170667a&w=0&k=20&c=0aBawAGIMPymGUppOgw1HmV8MNXB1536B3sX_PP9_SQ="
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="cont flex gap-32 pt-8 pr-5">
          <div className="input-1">
            <h2 className="text-lg font-semibold pb-2">
              <p>User Name</p>
            </h2>
            <input
              type="text"
              className="border-2 rounded-lg p-1 w-96"
              placeholder="Name"
            />
          </div>
          <div className="input-1">
            <h2 className="text-lg font-semibold pb-2">
              <p>Email</p>
            </h2>
            <input
              type="text"
              className="border-2 rounded-lg p-1 w-96"
              placeholder="Name@XYZ"
            />
          </div>
        </div>
        <h2 className="text-purple-700 pt-11 text-3xl font-bold pb-3">
          {" "}
          Subscriptions
        </h2>
        <div className="popup rounded-lg flex w-[1050px] justify-between bg-purple-700 ">
          <h1 className="p-5 font-medium text-white text-xl space-x-3">
            You Are Currently On{" "}
            <b className="font-bold underline"> The Ques AI Basic Plan!</b>
          </h1>
          <div className="button pt-3 pr-3">
            <button
              type="button"
              class="text-purple-700 bg-white hover:bg-white focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-white dark:hover:bg-white ">
              {" "}
              Upgrade
            </button>
          </div>
        </div>
        <p className="pt-3 text-red-700 font-medium">Canel Subscription</p>
      </div>
    </div>
  );
}
