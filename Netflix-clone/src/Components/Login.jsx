import React, { useState } from "react";
import Header from "./Header";
import Background from "../assets/background.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const getInputData = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="w-[100%]">
      <Header />

      <div className="absolute w-[100%] h-[100%] object-contain">
        <img
          src={Background}
          alt="login-page-background"
          className="w-[100%] h-[110%] object-cover"
        />
      </div>
      <div className="absolute bg-black opacity-30 w-[100%] h-[110%] "></div>

      <form
        onSubmit={getInputData}
        className="absolute w-[30%] h-[88%] flex flex-col my-[7%] left-[0%] right-[0%] mx-auto bg-black bg-opacity-75 rounded-lg"
      >
        <div className="items-start text-left pt-[8%] pl-[14%] w-[100%] font-poppins font-bold">
          <h1 className="text-[250%]">Log In</h1>
        </div>
        <div className="flex flex-col w-[100%] h-[100%] pt-[5%] items-center pl-[14%] pr-[14%]">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-[5%] mb-[5%] w-[100%] rounded border border-white font-poppins text-base bg-black bg-opacity-10 text-white placeholder-white focus:text-white color-white"
            placeholder="Email or mobile number"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-[5%] mb-[5%] w-[100%] rounded border border-white font-poppins text-base bg-black bg-opacity-10 text-white placeholder-white  focus:text-white"
            placeholder="Password"
          />
          <button className="bg-red-700 text-base mb-3 w-[100%] h-9 rounded items-center font-poppins font-semibold">
            Log In
          </button>
          <h6 className="font-poppins font-normal text-lg mb-3">OR</h6>
          <button className="bg-white text-sm mb-4 w-[100%] h-9 rounded items-center font-poppins font-semibold bg-opacity-25">
            Use a log-in code
          </button>
          <button className="text-customTextColor text-base mb-4 font-poppins font-normal items-center">
            Forget password?
          </button>
          <div className="flex items-center justify-start w-[100%] space-x-3 mb-4">
            <input
              type="checkbox"
              className="rounded transform scale-150 items-start"
            />
            <label className="text-customTextColor text-[80%] font-poppins font-normal">
              Remeber me
            </label>
          </div>
          <p className="w-[100%] space-x-1">
            <span className="text-white text-[100%] font-poppins font-light">
              New to Netflix?
            </span>
            <button className="hover:underline text-white text-[100%] font-poppins font-semibold">
              Sign up now
            </button>
            {/* <span className="text-white text-[100%] font-poppins font-semibold">
              Sign up now
            </span> */}
          </p>
          <p className=" w-[100%] whitespace-pre-wrap pr-10 text-[70%] mt-[8%] font-poppins font-normal mb-[15%]">
            <span>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
