import NetflixLogo from "../assets/Netflix.png";
import React from "react";

function Header() {
  return (
    <div className=" pl-[10%] px-4 bg-gradient-to-b from-black h-14 w-[100%] flex justify-between items-center z-10 absolute">
      <img
        src={NetflixLogo}
        alt="netflix-logo"
        className="w-[15%] pt-[3%] object-contain"
      />
      <div className="flex justify-between items-center space-x-4 pr-24">
        <button className="text-white text-xs bg-red-800 rounded font-poppins font-semibold h-7 w-16">
          Logout
        </button>
        <button className="text-white text-xs bg-red-800 rounded  font-poppins font-semibold h-7 w-16">
          Search Movies
        </button>
      </div>
    </div>
  );
}

export default Header;
