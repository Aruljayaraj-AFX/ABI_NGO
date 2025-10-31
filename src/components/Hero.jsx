import Donatecoin from "../assets/donatecoin.png";
import Logo from '../assets/Logo.png';
import Heroimg from "../assets/Heroimg.png";
import Heart from "../assets/Heart.png";
import About from "../assets/About_us.png";
import Donate from "../assets/Donate1.png";
import Paper from "../assets/Paper.png";

export default function Home() {
  return (
    <div>
        <div className="flex  flex-col lg:flex-row gap-5 w-full">
            <div className="flex flex-col px-[5%] ">
              <div className="flex gap-1  items-center">
                <img src={Donatecoin} alt="Donatecoin" className="w-6 h-6" />
                <span className="ml-2 text-[15px] sm:text-[15px] md:text-[22px] lg:text-[22px] text-[#F87B15] font-josefin font-light  tracking-widest">
                  Start helping with each other.
                </span>
              </div>
              <p className="pt-3 leading-normal text-4xl md:text-5xl lg:text-4xl xl:text-[60px] text-black font-josefin font-medium" 
                 style={{ textShadow: "2px 4px 6px rgba(0, 0, 0, 0.3)" }}>
                Giving Help
              </p>
              <p className="pt-1 leading-normal text-4xl md:text-5xl lg:text-4xl xl:text-[60px] text-black font-josefin font-medium" 
                 style={{ textShadow: "2px 4px 6px rgba(0, 0, 0, 0.3)" }}>
                To Those <span className="bg-gradient-to-r from-[#08d4f8] to-[#0fa4be] bg-clip-text text-transparent">People</span>
              </p>
              <p className="pt-1 leading-normal text-4xl md:text-5xl lg:text-4xl xl:text-[60px] text-black font-josefin font-medium" 
                 style={{ textShadow: "2px 4px 6px rgba(0, 0, 0, 0.3)" }}>
                Who Really Need It.
              </p>
              <div className="flex pt-5 lg:gap-4 md:gap-3 sm:gap-2">
                  <div className="h-10 sm:h-10 lg:h-16 md:h-12 sm:w-30 md:w-34 lg:w-44 w-30  border border-[#2aa7bd] rounded-full cursor-pointer gap-2 mr-[2%] flex items-center justify-center">
                      <img src={About} className="lg:w-7 w-5 sm:w-5 lg:h-7 sm:h-5 h-5 mb-1" alt="About Us" />
                      <span className="text-[#2aa7bd] sm:text-xs lg:text-lg md:text-md text-xs font-josefin text-shadow font-semibold" style={{ textShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)" }}>About Us</span>
                  </div>
                  <div className="h-10 sm:h-10 lg:h-16 md:h-12 sm:w-30 md:w-34 lg:w-44 w-30  bg-[#2aa7bd] rounded-full cursor-pointer gap-2 mr-[2%] flex items-center justify-center  hover:bg-[#05b4d3] transition-all duration-300">
                      <img src={Donate} className="lg:w-7 w-5 sm:w-5 lg:h-7 sm:h-5 h-5 mb-1" alt="Donate" />
                      <span className="text-white sm:text-xs lg:text-lg md:text-md text-xs font-josefin text-shadow font-semibold" style={{ textShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)" }}>Donate Now</span>
                  </div>
              </div>
            </div>
      
            <div className="w-screen lg:w-1/2 relative px-[5%] ">
              <img
                src={Heroimg}
                alt="Heroimg"
                className="w-screen h-auto object-cover"
              />
            </div>
        </div>
        <img src={Paper} alt="Paper" className="w-full h-auto mt-15 object-cover"/>
    </div>
  );
}
