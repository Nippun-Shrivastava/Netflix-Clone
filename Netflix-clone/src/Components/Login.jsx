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

      <form className="absolute w-72 flex flex-col my-20 left-0 right-0 mx-auto bg-black opacity-80 rounded-lg">
        <h1 className="text-left pt-8 pl-8 w-full font-poppins font-bold text-xl">
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
          <button className="bg-red-700 text-xs mb-10 w-52 h-7 rounded items-center font-poppins font-semibold">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
