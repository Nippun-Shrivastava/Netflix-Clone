import React from "react";
import Header from "./Header";
import Background from "../assets/background.jpg";
function Login() {
  return (
    <div>
      <Header />

      <div className="absolute">
        <img src={Background} alt="login-page-background" />
      </div>

      <form className="absolute w-72 flex flex-col my-20 left-0 right-0 mx-auto bg-gray-900 bg-opacity-75 rounded-lg  backdrop-blur-sm">
        <h1 className="text-left pt-8 pl-10 w-full font-poppins font-bold text-xl">
          Log In
        </h1>
        <div className="flex flex-col w-full h-full items-center pt-5 pl-24 pr-24">
          <input
            type="text"
            className="border border-white text-xs p-2 mb-3 w-52 rounded"
            placeholder="Email or mobile number"
          />
          <input
            type="text"
            className="border border-white text-xs p-2 mb-3 w-52 rounded"
            placeholder="Password"
          />
          <button className="bg-red-700 text-xs mb-3 w-52 h-7 rounded items-center font-poppins font-semibold">
            Log In
          </button>
          <h6 className="font-poppins font-normal text-xs mb-3">OR</h6>
          <button className="bg-gray-500 text-customTextColor text-[10px] mb-3 w-52 h-7 rounded items-center font-poppins font-medium opacity-50">
            Use a log-in code
          </button>
          <button className="text-customTextColor text-[11px] mb-3 font-poppins font-normal items-center">
            Forget password
          </button>
          <div className="flex justify-start space-x-2 w-[290%] pl-10 mb-2">
            <input type="checkbox" className="rounded w-4 h-4" />
            <label className="text-customTextColor text-[11px] font-poppins font-normal">
              Remeber me
            </label>
          </div>
          <p className="w-[290%] pl-10 space-x-1">
            <span className="text-white text-[10px] font-poppins font-light">
              New to Netflix?
            </span>
            <span className="text-white text-[10px] font-poppins font-semibold">
              Sign up now
            </span>
          </p>
          <p className=" w-[290%] whitespace-pre-wrap pl-10 pr-10 text-[8px] mt-4 mb-4">
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
