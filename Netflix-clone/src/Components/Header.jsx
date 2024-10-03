import NetflixLogo from "../assets/NetflixLogo.svg";
import React from "react";
function Header() {
  return (
    <div>
      <img src={NetflixLogo} alt="netflix-logo" className="w-[300px]" />
    </div>
  );
}

export default Header;
