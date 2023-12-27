import React, { useState } from "react";

export default function DetialCard({ setName }) {
  const [Transpose, setTranspose] = useState(false);
  const [transcript, setTranscript] = useState(
    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.  In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains",
  );
  const [editing, setEditing] = useState(false);
  const [editedTranscript, setEditedTranscript] = useState(transcript);

  const [data, setData] = useState([
    { name: "Sample Name", uploadDate: "Malcolm Lockyer", status: "1961" },
    { name: "Sample Name", uploadDate: "The Eagles", status: "1972" },
    {
      name: "Sample Name",
      uploadDate: "Earth, Wind, and Fire",
      status: "1975",
    },
  ]);

  const Editer = () => {
    setTranspose(true);
  };

  const handleDelete = (index) => {
    // Create a copy of the data array
    const newData = [...data];

    // Remove the element at the specified index
    newData.splice(index, 1);

    // Update the state with the new data
    setData(newData);
  };
  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setTranscript(editedTranscript);
    setEditing(false);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setEditedTranscript(transcript); // Reset the edited transcript to the original value
  };

  const handleTextareaChange = (e) => {
    setEditedTranscript(e.target.value);
  };

  return (
    <>
      {!Transpose ? (
        <div className="">
          <div className="cards flex gap-5 pb-5">
            <div className="card ">
              <div class="box-border h-20 w-52 p-1 border-2 grid-cols-2 rounded-lg flex shadow-sm ">
                <div className="icon py-2 px-2">
                  <svg
                    width="40"
                    height="43"
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
                <div className="title pt-2 pl-3 font-semibold">
                  <p>Upload </p>
                  <p>Youtube Video </p>
                </div>
              </div>
            </div>
            <div className="card ">
              <div class="box-border h-20 w-52 p-1 border-2 grid-cols-2 rounded-lg flex shadow-sm ">
                <div className="icon py-2 px-2">
                  <svg
                    width="40"
                    height="43"
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
                <div className="title pt-2 pl-3 font-semibold">
                  <p>Upload </p>
                  <p>Youtube Video </p>
                </div>
              </div>
            </div>
            <div className="card ">
              <div class="box-border h-20 w-52 p-1 border-2 grid-cols-2 rounded-lg flex shadow-sm ">
                <div className="icon py-2 px-2"></div>
                <div className="title pt-2 pl-3 font-semibold">
                  <p>Upload Media </p>
                  <p>Or Text File </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bar rounded-lg bg-purple-700 w-[850px] px-6 py-4">
            <h3 className="text-white font-semibold">
              All files are processed! Your widget is ready to go!
            </h3>
          </div>
          <div className="tabledetails pt-5 ">
            <table class="table-fixed border-2 w-[850px] rounded-full mx-auto">
              <thead>
                <tr className="border ">
                  <th className="p-3 flex items-center justify-center">Name</th>
                  <th className="p-3 ">Upload Date & Time</th>
                  <th className="p-3 ">Status</th>
                  <th className="p-3 ">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border">
                    <td className="p-3 flex items-center justify-center">
                      {item.name}
                    </td>
                    <td className="p-3">{item.uploadDate}</td>
                    <td className="p-3">{item.status}</td>
                    <td className="p-3 flex justify-center">
                      <div
                        className="box rounded-l-lg border-2 p-1 px-6 py-2 cursor-pointer"
                        onClick={() => {
                          Editer();
                          setName("Transcripta");
                        }}>
                        Edit
                      </div>
                      <div
                        className="box rounded-r-lg border-2 p-1 px-3 py-2 text-red-600 font-semibold cursor-pointer"
                        onClick={() => handleDelete(index)}>
                        Delete
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>
          <h1
            onClick={() => {
              setTranspose(false);
              setName("Upload");
            }}
            className="cursor-pointer">
            Button Has Been Clicked
          </h1>
          {editing && (
            <div className="editbuttons w-[800px] flex justify-end p-3 gap-3">
              <button
                onClick={handleSaveClick}
                className="rounded-lg bg-purple-700 text-white font-semibold px-4 py-2">
                Save & exist
              </button>
              <button
                onClick={handleCancelClick}
                className="rounded-lg  text-red-700 border-red-700 border-2 font-semibold px-6 py-2">
                Discard
              </button>
            </div>
          )}
          <div>
            {editing ? (
              <div>
                <textarea
                  rows="6"
                  cols="50"
                  className="box border-2 rounded-lg border-purple-700 w-[800px] h-96"
                  value={editedTranscript}
                  onChange={handleTextareaChange}
                />
                <br />
              </div>
            ) : (
              <div>
                <p className="box border-2 rounded-lg border-purple-700 w-[800px] h-96">
                  <div className="button pt-2 pl-2">
                    <div
                      className="edit box-border h-6 w-20 bg-gray-600 flex rounded-full px-2 cursor-pointer  gap-2"
                      onClick={handleEditClick}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.0588 9.02L14.9788 9.94L5.91878 19H4.99878V18.08L14.0588 9.02ZM17.6588 3C17.4088 3 17.1488 3.1 16.9588 3.29L15.1288 5.12L18.8788 8.87L20.7088 7.04C21.0988 6.65 21.0988 6.02 20.7088 5.63L18.3688 3.29C18.1688 3.09 17.9188 3 17.6588 3ZM14.0588 6.19L2.99878 17.25V21H6.74878L17.8088 9.94L14.0588 6.19Z"
                          fill="white"
                        />
                      </svg>
                      <h3 className="text-white">Edit</h3>
                    </div>
                  </div>

                  <p className="pl-4 font-bold text-md pt-2 text-purple-800">
                    Speaker
                  </p>
                  <p className="px-5">{transcript} </p>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
