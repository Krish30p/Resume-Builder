import React, { useEffect, useRef, useState } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);
  const [resumeFile, setResumeFile] = useState(null);

  // Load saved passwords from localStorage
  useEffect(() => {
    let password = localStorage.getItem("password");
    if (password) {
      setpasswordArray(JSON.parse(password));
    }
  }, []);

  const showpassword = () => {
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
    } else {
      ref.current.src = "icons/eyecross.png";
    }
  };

  const savePassword = () => {
    const updatedPasswords = [...passwordArray, form];
    setpasswordArray(updatedPasswords);
    localStorage.setItem("password", JSON.stringify(updatedPasswords));
    console.log(updatedPasswords);
    setform({ site: "", username: "", password: "" }); // reset form
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    setResumeFile(file);
    console.log("Selected Resume:", file);
  };

  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="mycontainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500"> &lt;</span>
          <span className="text-white">Resume</span>
          <span className="text-green-500">Builder/&gt;</span>
        </h1>
        <p className="text-blue-600 text-lg text-center">
          Create Your Own Resume
        </p>

        {/* Input Section */}
        <div className="text-white flex flex-col p-4 gap-5 items-center">
          <div className="flex w-full justify-between gap-5">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter UserName"
              className="rounded-full border border-gray-400 w-full p-4 py-1"
              type="text"
              name="username"
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-gray-400 w-full p-4 py-1"
                type="text"
                name="password"
              />
              <span
                className="absolute right-[3px] top-[2px] cursor-pointer"
                onClick={showpassword}
              >
                <img
                  ref={ref}
                  className="p-1.5"
                  width={30}
                  src="icons/eye.png"
                  alt="eye"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-900 hover:bg-green-800 rounded-full px-4 py-2 w-fit border-2 border-green-900 text-white"
          >
            <lord-icon
              src="https://cdn.lordicon.com/vjgknpfx.json"
              trigger="hover"
              stroke="light"
              colors="primary:#ffffff,secondary:#9ce5f4"
            ></lord-icon>
            Login
          </button>
        </div>

        {/* Upload Resume Section */}
        <div className="mt-10 text-white flex flex-col items-center gap-4">
          <h2 className="text-2xl font-semibold"> Enhance your current Resume</h2>

          {/* Hidden file input */}
          <input
            type="file"
            id="resumeUpload"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
            className="hidden"
          />

          {/* Custom styled button */}
          <label
            htmlFor="resumeUpload"
            className="cursor-pointer bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
          >
            Choose File
          </label>

          {/* Show selected file name */}
          {resumeFile && (
            <p className="text-gray-300">
              ✅ Selected File:{" "}
              <span className="text-green-400">{resumeFile.name}</span>
            </p>
          )}

          {/* Message below upload */}
          <p className="text-lg text-gray-300 mt-4">
             To use Resume Builder, <span className="text-green-400 font-semibold">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Manager;
