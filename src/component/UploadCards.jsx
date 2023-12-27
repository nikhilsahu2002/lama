import React, { useState, useEffect } from "react";
import DetialCard from "./DetialCard";

export default function UploadCards({ setName }) {
  const [clicked, setclick] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueLink, setInputValueLink] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setclick(true);
  };
  const handleCloseModal = () => {
    setclick(false);
  };
  useEffect(() => {
    // Check if either of the input values is empty when the component mounts or when inputs change
    const isEmptyName = inputValueName.trim() === "";
    const isEmptyLink = inputValueLink.trim() === "";

    // Update the state for both inputs
    setIsEmpty(isEmptyName || isEmptyLink);
  }, [inputValueName, inputValueLink]);

  // Event handler for input changes
  const handleInputChangeName = (event) => {
    // Update the state with the new input value
    setInputValueName(event.target.value);

    // Check if the input is empty
    const isEmptyValue = event.target.value.trim() === "";
    setIsEmpty(isEmptyValue);

    // Log the current values for debugging
    console.log("Input value:", event.target.value);
    console.log("isEmpty:", isEmptyValue);
  };
  const handleInputChangeLink = (event) => {
    // Update the state with the new input value
    setInputValueLink(event.target.value);

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
      // Create an object with the form data
      const formData = {
        name: inputValueName,
        link: inputValueLink,
      };

      // Use the formData object as needed (e.g., log it or send it to an API)
      console.log("Form Data:", formData);

      // Reset the form state if needed
      setInputValueName("");
      setInputValueLink("");
      setIsEmpty(true);
      setSubmitted(true);

      // Close the modal or perform other actions
      handleCloseModal();
    } else {
      // Display an error message or perform other actions for an empty input
      console.error("Input cannot be empty.");
    }
  };

  return (
    <>
      {submitted ? (
        <DetialCard setIsEmpty={setIsEmpty} setName={setName} />
      ) : (
        <div>
          {!clicked ? (
            <div>
              <div className="grid grid-cols-3 gap-80">
                <div class="box-border h-24 w-60 p-1 border-4 grid-cols-2 rounded-lg flex shadow-md">
                  <div className="icon py-2 px-2">
                    <svg
                      width="60"
                      height="63"
                      viewBox="0 0 84 83"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M42 82.7077C65.196 82.7077 84 64.1929 84 41.3538C84 18.5147 65.196 0 42 0C18.804 0 0 18.5147 0 41.3538C0 64.1929 18.804 82.7077 42 82.7077Z"
                        fill="#DA0000"
                      />
                      <path
                        d="M68.824 28.0839C68.5067 26.9074 67.8792 25.8344 67.005 24.9737C66.1308 24.113 65.0411 23.4951 63.8462 23.1827C59.5093 22.0554 42 22.0554 42 22.0554C42 22.0554 24.4844 22.0554 20.1164 23.2072C18.9273 23.5243 17.844 24.1443 16.9756 25.0047C16.1072 25.8651 15.4844 26.9356 15.1698 28.1084C14 32.3969 14 41.3784 14 41.3784C14 41.3784 14 50.3476 15.1698 54.6484C15.4844 55.8212 16.1072 56.8917 16.9756 57.7521C17.844 58.6125 18.9273 59.2325 20.1164 59.5496C24.472 60.7014 42 60.7014 42 60.7014C42 60.7014 59.5093 60.7014 63.8773 59.5496C65.0722 59.2372 66.1619 58.6193 67.0361 57.7586C67.9103 56.8978 68.5378 55.8249 68.8551 54.6484C70.0311 50.3598 70.0311 41.3784 70.0311 41.3784C70.0311 41.3784 70 32.3847 68.824 28.0839ZM36.4 49.6247V33.0831L50.9413 41.3539L36.4 49.6247Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="title pt-4 pl-3 font-semibold">
                    <p>Upload </p>
                    <p>Youtube Video </p>
                  </div>
                </div>
                <div class="box-border h-24 w-60 p-1 border-4 grid-cols-2 rounded-lg flex shadow-md">
                  <div className="icon py-2 px-2">
                    <svg
                      width="60"
                      height="63"
                      viewBox="0 0 84 83"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M42 82.7077C65.196 82.7077 84 64.1929 84 41.3538C84 18.5147 65.196 0 42 0C18.804 0 0 18.5147 0 41.3538C0 64.1929 18.804 82.7077 42 82.7077Z"
                        fill="#DA0000"
                      />
                      <path
                        d="M68.824 28.0839C68.5067 26.9074 67.8792 25.8344 67.005 24.9737C66.1308 24.113 65.0411 23.4951 63.8462 23.1827C59.5093 22.0554 42 22.0554 42 22.0554C42 22.0554 24.4844 22.0554 20.1164 23.2072C18.9273 23.5243 17.844 24.1443 16.9756 25.0047C16.1072 25.8651 15.4844 26.9356 15.1698 28.1084C14 32.3969 14 41.3784 14 41.3784C14 41.3784 14 50.3476 15.1698 54.6484C15.4844 55.8212 16.1072 56.8917 16.9756 57.7521C17.844 58.6125 18.9273 59.2325 20.1164 59.5496C24.472 60.7014 42 60.7014 42 60.7014C42 60.7014 59.5093 60.7014 63.8773 59.5496C65.0722 59.2372 66.1619 58.6193 67.0361 57.7586C67.9103 56.8978 68.5378 55.8249 68.8551 54.6484C70.0311 50.3598 70.0311 41.3784 70.0311 41.3784C70.0311 41.3784 70 32.3847 68.824 28.0839ZM36.4 49.6247V33.0831L50.9413 41.3539L36.4 49.6247Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="title pt-4 pl-3 font-semibold">
                    <p>Upload </p>
                    <p>Youtube Video </p>
                  </div>
                </div>
                <div class="box-border h-24 w-60 p-1 border-4 grid-cols-2 rounded-lg flex shadow-md">
                  <div className="icon py-2 px-2">
                    <svg
                      width="60"
                      height="63"
                      viewBox="0 0 84 83"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M42 82.7077C65.196 82.7077 84 64.1929 84 41.3538C84 18.5147 65.196 0 42 0C18.804 0 0 18.5147 0 41.3538C0 64.1929 18.804 82.7077 42 82.7077Z"
                        fill="#DA0000"
                      />
                      <path
                        d="M68.824 28.0839C68.5067 26.9074 67.8792 25.8344 67.005 24.9737C66.1308 24.113 65.0411 23.4951 63.8462 23.1827C59.5093 22.0554 42 22.0554 42 22.0554C42 22.0554 24.4844 22.0554 20.1164 23.2072C18.9273 23.5243 17.844 24.1443 16.9756 25.0047C16.1072 25.8651 15.4844 26.9356 15.1698 28.1084C14 32.3969 14 41.3784 14 41.3784C14 41.3784 14 50.3476 15.1698 54.6484C15.4844 55.8212 16.1072 56.8917 16.9756 57.7521C17.844 58.6125 18.9273 59.2325 20.1164 59.5496C24.472 60.7014 42 60.7014 42 60.7014C42 60.7014 59.5093 60.7014 63.8773 59.5496C65.0722 59.2372 66.1619 58.6193 67.0361 57.7586C67.9103 56.8978 68.5378 55.8249 68.8551 54.6484C70.0311 50.3598 70.0311 41.3784 70.0311 41.3784C70.0311 41.3784 70 32.3847 68.824 28.0839ZM36.4 49.6247V33.0831L50.9413 41.3539L36.4 49.6247Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="title pt-4 pl-3 font-semibold">
                    <p>Upload </p>
                    <p>Youtube Video </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-80 pt-10">
                <div class="box-border h-24 w-60 p-1 border-4 grid-cols-2 rounded-lg flex shadow-md">
                  <div className="icon py-2 px-2">
                    <svg
                      width="60"
                      height="63"
                      viewBox="0 0 84 83"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M42 82.7077C65.196 82.7077 84 64.1929 84 41.3538C84 18.5147 65.196 0 42 0C18.804 0 0 18.5147 0 41.3538C0 64.1929 18.804 82.7077 42 82.7077Z"
                        fill="#DA0000"
                      />
                      <path
                        d="M68.824 28.0839C68.5067 26.9074 67.8792 25.8344 67.005 24.9737C66.1308 24.113 65.0411 23.4951 63.8462 23.1827C59.5093 22.0554 42 22.0554 42 22.0554C42 22.0554 24.4844 22.0554 20.1164 23.2072C18.9273 23.5243 17.844 24.1443 16.9756 25.0047C16.1072 25.8651 15.4844 26.9356 15.1698 28.1084C14 32.3969 14 41.3784 14 41.3784C14 41.3784 14 50.3476 15.1698 54.6484C15.4844 55.8212 16.1072 56.8917 16.9756 57.7521C17.844 58.6125 18.9273 59.2325 20.1164 59.5496C24.472 60.7014 42 60.7014 42 60.7014C42 60.7014 59.5093 60.7014 63.8773 59.5496C65.0722 59.2372 66.1619 58.6193 67.0361 57.7586C67.9103 56.8978 68.5378 55.8249 68.8551 54.6484C70.0311 50.3598 70.0311 41.3784 70.0311 41.3784C70.0311 41.3784 70 32.3847 68.824 28.0839ZM36.4 49.6247V33.0831L50.9413 41.3539L36.4 49.6247Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="title pt-4 pl-3 font-semibold">
                    <p>Upload </p>
                    <p>Youtube Video </p>
                  </div>
                </div>
                <div class="box-border h-24 w-60 p-1 border-4 grid-cols-2 rounded-lg flex shadow-md">
                  <div className="icon py-2 px-2">
                    <svg
                      width="60"
                      height="63"
                      viewBox="0 0 84 83"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M42 82.7077C65.196 82.7077 84 64.1929 84 41.3538C84 18.5147 65.196 0 42 0C18.804 0 0 18.5147 0 41.3538C0 64.1929 18.804 82.7077 42 82.7077Z"
                        fill="#DA0000"
                      />
                      <path
                        d="M68.824 28.0839C68.5067 26.9074 67.8792 25.8344 67.005 24.9737C66.1308 24.113 65.0411 23.4951 63.8462 23.1827C59.5093 22.0554 42 22.0554 42 22.0554C42 22.0554 24.4844 22.0554 20.1164 23.2072C18.9273 23.5243 17.844 24.1443 16.9756 25.0047C16.1072 25.8651 15.4844 26.9356 15.1698 28.1084C14 32.3969 14 41.3784 14 41.3784C14 41.3784 14 50.3476 15.1698 54.6484C15.4844 55.8212 16.1072 56.8917 16.9756 57.7521C17.844 58.6125 18.9273 59.2325 20.1164 59.5496C24.472 60.7014 42 60.7014 42 60.7014C42 60.7014 59.5093 60.7014 63.8773 59.5496C65.0722 59.2372 66.1619 58.6193 67.0361 57.7586C67.9103 56.8978 68.5378 55.8249 68.8551 54.6484C70.0311 50.3598 70.0311 41.3784 70.0311 41.3784C70.0311 41.3784 70 32.3847 68.824 28.0839ZM36.4 49.6247V33.0831L50.9413 41.3539L36.4 49.6247Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="title pt-4 pl-3 font-semibold">
                    <p>Upload </p>
                    <p>Youtube Video </p>
                  </div>
                </div>
                <div class="box-border h-24 w-60 p-1 border-4 grid-cols-2 rounded-lg flex shadow-md">
                  <div className="icon py-2 px-2">
                    <svg
                      width="60"
                      height="63"
                      viewBox="0 0 84 83"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M42 82.7077C65.196 82.7077 84 64.1929 84 41.3538C84 18.5147 65.196 0 42 0C18.804 0 0 18.5147 0 41.3538C0 64.1929 18.804 82.7077 42 82.7077Z"
                        fill="#DA0000"
                      />
                      <path
                        d="M68.824 28.0839C68.5067 26.9074 67.8792 25.8344 67.005 24.9737C66.1308 24.113 65.0411 23.4951 63.8462 23.1827C59.5093 22.0554 42 22.0554 42 22.0554C42 22.0554 24.4844 22.0554 20.1164 23.2072C18.9273 23.5243 17.844 24.1443 16.9756 25.0047C16.1072 25.8651 15.4844 26.9356 15.1698 28.1084C14 32.3969 14 41.3784 14 41.3784C14 41.3784 14 50.3476 15.1698 54.6484C15.4844 55.8212 16.1072 56.8917 16.9756 57.7521C17.844 58.6125 18.9273 59.2325 20.1164 59.5496C24.472 60.7014 42 60.7014 42 60.7014C42 60.7014 59.5093 60.7014 63.8773 59.5496C65.0722 59.2372 66.1619 58.6193 67.0361 57.7586C67.9103 56.8978 68.5378 55.8249 68.8551 54.6484C70.0311 50.3598 70.0311 41.3784 70.0311 41.3784C70.0311 41.3784 70 32.3847 68.824 28.0839ZM36.4 49.6247V33.0831L50.9413 41.3539L36.4 49.6247Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="title pt-4 pl-3 font-semibold">
                    <p>Upload </p>
                    <p>Youtube Video </p>
                  </div>
                </div>
              </div>
              <p className="flex pl-[424px] pt-8 opacity-40 font-semibold pb-5">
                OR
              </p>
              <div className="InputBox box-border h-72 pt-8 w-[882px] border-dotted border-2 border-blue-300">
                <div className="icon flex  justify-center">
                  <svg
                    width="100"
                    height="102"
                    viewBox="0 0 128 129"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M103.2 54.4666C99.5733 36.0666 83.4133 22.2533 64 22.2533C48.5867 22.2533 35.2 31 28.5333 43.8C12.48 45.5066 0 59.1066 0 75.5866C0 93.24 14.3467 107.587 32 107.587H101.333C116.053 107.587 128 95.64 128 80.92C128 66.84 117.067 55.4266 103.2 54.4666ZM101.333 96.92H32C20.2133 96.92 10.6667 87.3733 10.6667 75.5866C10.6667 64.6533 18.8267 55.5333 29.6533 54.4133L35.36 53.8266L38.0267 48.76C43.0933 39 53.0133 32.92 64 32.92C77.9733 32.92 90.0267 42.84 92.7467 56.5466L94.3467 64.5466L102.507 65.1333C110.827 65.6666 117.333 72.6533 117.333 80.92C117.333 89.72 110.133 96.92 101.333 96.92ZM42.6667 70.2533H56.2667V86.2533H71.7333V70.2533H85.3333L64 48.92L42.6667 70.2533Z"
                      fill="#7E22CE"
                    />
                  </svg>
                </div>
                <p className="text-center">
                  Select a file or drag and drop here (Podcast Media or
                  Transcription Text)
                </p>
                <p className="text-center opacity-50 font-normal">
                  MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
                </p>
                <div>
                  <div className="buttonsubmit justify-center flex pt-3">
                    <label
                      htmlFor="fileInput"
                      className="rounded-full border-2 border-purple-700 px-8 py-2 text-purple-700 font-medium cursor-pointer"
                      onClick={handleChange}>
                      Select File
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div
                className="fixed top-0 left-0 w-full h-full bg-blur z-50"
                style={{
                  backdropFilter: "blur(8px)", // You can adjust the blur strength
                }}></div>

              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-8 rounded-md z-50">
                <div className="box rounded-lg bg-white p-5 border-2 w-[800px] shadow-md">
                  <div className="ttile flex gap-4 py-2 pl-3">
                    <svg
                      width="45"
                      height="47"
                      viewBox="0 0 84 83"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M42 82.7077C65.196 82.7077 84 64.1929 84 41.3538C84 18.5147 65.196 0 42 0C18.804 0 0 18.5147 0 41.3538C0 64.1929 18.804 82.7077 42 82.7077Z"
                        fill="#DA0000"
                      />
                      <path
                        d="M68.824 28.0838C68.5067 26.9074 67.8792 25.8344 67.005 24.9737C66.1308 24.1129 65.0411 23.495 63.8462 23.1826C59.5093 22.0554 42 22.0554 42 22.0554C42 22.0554 24.4844 22.0554 20.1164 23.2071C18.9273 23.5243 17.844 24.1442 16.9756 25.0046C16.1072 25.8651 15.4844 26.9355 15.1698 28.1083C14 32.3969 14 41.3783 14 41.3783C14 41.3783 14 50.3475 15.1698 54.6483C15.4844 55.8211 16.1072 56.8916 16.9756 57.752C17.844 58.6124 18.9273 59.2324 20.1164 59.5495C24.472 60.7013 42 60.7013 42 60.7013C42 60.7013 59.5093 60.7013 63.8773 59.5495C65.0722 59.2371 66.1619 58.6192 67.0361 57.7585C67.9103 56.8978 68.5378 55.8248 68.8551 54.6483C70.0311 50.3598 70.0311 41.3783 70.0311 41.3783C70.0311 41.3783 70 32.3846 68.824 28.0838ZM36.4 49.6246V33.0831L50.9413 41.3538L36.4 49.6246Z"
                        fill="white"
                      />
                    </svg>
                    <h2 className="text-2xl font-bold mb-4 text-black pt-1 pr-96">
                      Upload from Youtube
                    </h2>
                    <button onClick={handleCloseModal}>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 62 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M31.0001 34.6165L18.3417 47.2748C17.8681 47.7484 17.2653 47.9852 16.5334 47.9852C15.8015 47.9852 15.1987 47.7484 14.7251 47.2748C14.2515 46.8012 14.0146 46.1984 14.0146 45.4665C14.0146 44.7345 14.2515 44.1318 14.7251 43.6582L27.3834 30.9998L14.7251 18.3415C14.2515 17.8679 14.0146 17.2651 14.0146 16.5332C14.0146 15.8012 14.2515 15.1984 14.7251 14.7248C15.1987 14.2512 15.8015 14.0144 16.5334 14.0144C17.2653 14.0144 17.8681 14.2512 18.3417 14.7248L31.0001 27.3832L43.6584 14.7248C44.132 14.2512 44.7348 14.0144 45.4667 14.0144C46.1987 14.0144 46.8015 14.2512 47.2751 14.7248C47.7487 15.1984 47.9855 15.8012 47.9855 16.5332C47.9855 17.2651 47.7487 17.8679 47.2751 18.3415L34.6167 30.9998L47.2751 43.6582C47.7487 44.1318 47.9855 44.7345 47.9855 45.4665C47.9855 46.1984 47.7487 46.8012 47.2751 47.2748C46.8015 47.7484 46.1987 47.9852 45.4667 47.9852C44.7348 47.9852 44.132 47.7484 43.6584 47.2748L31.0001 34.6165Z"
                          fill="#3C3C3C"
                        />
                      </svg>
                    </button>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="projectName"
                        className="block text-sm font-medium text-gray-700 pb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="projectName"
                        name="projectName"
                        value={inputValueName}
                        onChange={handleInputChangeName}
                        className="mt-1 p-2 border rounded-md w-full"
                        placeholder="Type Here"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="projectLink"
                        className="block text-sm font-medium text-gray-700 pb-1">
                        Link
                      </label>
                      <input
                        type="text"
                        id="projectLink"
                        value={inputValueLink}
                        onChange={handleInputChangeLink}
                        name="projectLink"
                        className="mt-1 p-2 border rounded-md w-full"
                        placeholder="Type Here"
                      />
                    </div>
                    {isEmpty && (
                      <p className="text-red-500">Input cannot be empty.</p>
                    )}

                    <div className="mt-4 items-end flex justify-end">
                      <button
                        type="submit"
                        className="bg-purple-700 text-white px-4 py-2 rounded-md items-end">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
