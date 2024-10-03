import NetflixLogo from "../assets/Netflix.png";
import React from "react";

function Header() {
  return (
    <div className="border border-black pl-24 px-4 bg-gradient-to-b from-black h-14 w-[100%] flex justify-between items-center">
      <img
        src={NetflixLogo}
        alt="netflix-logo"
        className="w-[130px] object-contain"
      />
      <div className="flex justify-between items-center space-x-4 pr-4">
        <button className="text-white">Logout</button>
        <button className="text-white">Search Movies</button>
      </div>
    </div>
  );
}

export default Header;
