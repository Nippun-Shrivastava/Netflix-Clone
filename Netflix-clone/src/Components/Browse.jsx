import Header from "./Header";
import Background from "../assets/background.jpg";
import Line from "../assets/browse-page.png";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
function Browse() {
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

      <div className="absolute bg-black opacity-70 w-[100%] h-[110%] "></div>

      <div className=" left-0 right-0 mx-auto items-center flex flex-col mt-[15%] w-[50%] absolute">
        <p className=" mb-[3%] font-poppins font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-balanced">
          Unlimited movies, TV
        </p>
        <p className="font-poppins font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-balanced">
          shows and more
        </p>
        <h6 className="mt-[3%] font-poppins font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg">
          Join for Free. Enjoy unlimited streaming.
        </h6>
        <p className="mt-[4%] mb-[1%] font-poppins font-normal text-xs sm:text-xs md:text-base lg:text-sm xl:text-sm">
          Ready to watch? Enter your email to create or restart your account.
        </p>
        <div className="space-x-3 w-[80%] flex items-center justify-start">
          <input
            type="input"
            placeholder="Email address"
            className="w-[65%] p-[3%] border border-white rounded-md opacity-50  text-white placeholder-white  focus:text-white"
          ></input>
          <button className="flex items-center justify-center bg-red-700 font-poppins font-semibold w-[40%] h-16 rounded-md text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-2xl">
            Get Started
            <ChevronRightIcon className="h-6 w-6 ml-3" />
          </button>
        </div>
        <div className=" w-[200%] absolute z-10 mt-[58%]">
          <img src={Line} id="browse-page-line" className="w-[100%]" />
        </div>
        <div className="absolute bg-black w-[200%] h-[210%] mt-[68%]" />
        <div className="border border-white w-[180%] absolute z-10 h-[210%] mt-[68%]">
          <h3 className="font-poppins font-semibold mt-[2%] ml-[4%] sm:text-sm md:text-base lg:text-lg xl:text-2xl">
            Trending Now
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Browse;
