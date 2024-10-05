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
      <form className="absolute w-3/12 flex flex-col my-36 left-0 right-0 mx-auto items-center justify-center p-12 bg-black">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-left mb-4">Login</h1>
          <input
            type="text"
            className="border border-white text-xs p-2 m-4 w-56"
            placeholder="Email or mobile number"
          />
          <input
            type="text"
            className="border border-white text-xs p-2 w-56"
            placeholder="Password"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
