import Logo from '../assets/Logo.png';
import PhoneIcon from '../assets/phone.png';
import Mail from '../assets/mail.png';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import LinkedIn from '../assets/linkedin.png';
import YouTube from '../assets/youtube.png';
import X from '../assets/x.png';
import dot from '../assets/dot.png';
import DropdownIcon from '../assets/downarrow.png';
import Heart from "../assets/Heart.png";
import Menu from "../assets/menu.png";

export default function Navbar() {
  return (
    <nav className="relative z-10">
        <div className="fixed top-0 w-full lg:h-22 md:h-14 shadow-lg">
            <img src={Logo} alt="Logo" className="absolute top-0 left-8 lg:h-22 h-14 z-20"/>
            <div className="hidden lg:flex justify-end items-center gap-6 h-8 bg-black md:gap-2">
              <div className='flex items-center'>
                <img src={PhoneIcon} className="w-3 h-3 mt-[3px]"/>
                <span className="ml-2 text-white font-josefin text-xs">+918428683411</span>
              </div>
              <div className='flex items-center'>
                <img src={PhoneIcon} className="w-3 h-3 mt-[3px]"/>
                <span className="ml-2 text-white font-josefin text-xs">+918428683411</span>
              </div>
              <div className='flex items-center'>
                <img src={Mail} className="w-3 h-3 mt-[3px]"/>
                <span className="ml-2 text-white font-josefin text-xs">abiswishdomtrust102024@gmail.com</span>
              </div>
              <div className="flex items-center pr-6 md:px-2 lg:pr-6">
                <img src={Facebook} className="w-4 h-4 mx-1" />
                <img src={dot} className="hidden lg:inline w-2 h-2 mx-1" />  
                <img src={Instagram} className="w-4 h-4 mx-1" />
                <img src={dot} className="hidden lg:inline w-2 h-2 mx-1" />
                <img src={LinkedIn} className="w-4 h-4 mx-1" />
                <img src={dot} className="hidden lg:inline w-2 h-2 mx-1" />
                <img src={YouTube} className="w-4 h-4 mx-1" />
                <img src={dot} className="hidden lg:inline w-2 h-2 mx-1" />
                <img src={X} className="w-4 h-4 mx-1" />
              </div>
            </div>
            <div className="relative flex items-center justify-between h-14 bg-white">
              <div className='hidden lg:flex lg:ml-[10%] md:ml-[15%] lg:gap-8 md:gap-2'>
                <div>
                  <span className='text-[#555859] font-josefin '>
                    Home
                  </span>
                </div>
                <div>
                  <span className='text-[#555859] font-josefin '>
                    Who We Are?
                  </span>
                  <img src={DropdownIcon} className="w-6 h-6 inline-block ml-1 mb-1 "/>
                </div>
                <div>
                  <span className='text-[#555859] font-josefin'>
                    What We Do?
                  </span>
                  <img src={DropdownIcon} className="w-6 h-6 inline-block ml-1 mb-1"/>
                </div>
                <div>
                  <span className='text-[#555859] font-josefin'>
                    Get Involved
                  </span>
                  <img src={DropdownIcon} className="w-6 h-6 inline-block ml-1 mb-1"/>
                </div>
                <div>
                  <span className='text-[#555859] font-josefin'>
                    Resources
                  </span>
                  <img src={DropdownIcon} className="w-6 h-6 inline-block ml-1 mb-1"/>
                </div>
              </div>
              <div className='fixed right-2 flex items-center gap-2 '>
              <div className="h-10 md:w-30 lg:w-40 w-30 bg-[#2aa7bd] rounded-full cursor-pointer gap-2 mr-[2%] flex items-center justify-center  hover:bg-[#05b4d3] transition-all duration-300">
                <img src={Heart} className="lg:w-5 w-3 lg:h-5 h-3 mb-1" alt="Heart" />
                <span className="text-white lg:text-sm md:text-xs text-xs font-josefin text-shadow font-semibold" style={{ textShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)" }}>Donate Now</span>
              </div>
              <div>
                <img src={Menu} className="lg:hidden w-4 h-4 mr-4 cursor-pointer"/>
              </div>
              </div>
            </div>
        </div>
    </nav>
  );
}
