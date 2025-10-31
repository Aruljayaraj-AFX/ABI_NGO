import Logo from "../assets/Logo.png";
import Group from "../assets/group-1.png";
import Mail from '../assets/mail.png';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import LinkedIn from '../assets/linkedin.png';
import YouTube from '../assets/youtube.png';
import X from '../assets/x.png';
import PhoneIcon from '../assets/phone.png';

export default function Footer() {
  return (
    <footer className="flex flex-col bg-black " >
        <div className="flex justify-between mx-[2%] md:mx-[2%] lg:mx-[2%] ">
            <img src={Logo} alt="Logo" className="w-12  h-12 lg:w-20 lg:h-20 "/>
             <div className="flex items-center justify-center gap-2 bg-[#2aa7bd] rounded-full px-3 py-3 sm:px-3 mt-2 md:px-3 md:py-2 lg:mt-5 lg:px-6  cursor-pointer hover:bg-[#2292a7] transition-all duration-300">
               <img
                 src={Group}
                 alt="About Us"
                 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7"
               />
               <span className="text-white text-xs sm:text-sm lg:text-xl font-josefin font-semibold" 
                 style={{ textShadow: "0px 1px 1px rgba(0, 0, 0, 0.2)" }}>
                 About Us
               </span>
            </div>
        </div>
        <div className="flex  flex-col  justify-between pt-5 md:pt-5 mb-5 mr-5 lg:mt-8">
          <div className="flex flex-col  md:flex-row justify-between ">
            <div className="flex flex-col pl-5  text-white text-4xl lg:text-6xl lg:leading-18 ">
                <p>
                    Small step.<br/> Big change.<br/> Join us.
                </p>
                <div className="flex items-center pt-3 pr-6 md:px-0 lg:pr-6">
                  <img src={Facebook} className="w-7 h-7 lg:w-10 lg:h-10 mx-1" /> 
                  <img src={Instagram} className="w-7 h-7 lg:w-10 lg:h-10 mx-1" />
                  <img src={LinkedIn} className="w-7 h-7 lg:w-10 lg:h-10 mx-1" />
                  <img src={YouTube} className="w-7 h-7 lg:w-10 lg:h-10 mx-1" />
                  <img src={X} className="w-7 h-7 lg:w-10 lg:h-10 mx-1" />
                </div>
            </div>
            <div className="flex flex-col  pl-5 pt-7 lg:pr-20 md:pt-0">
              <p className="text-xl underline pb-3 lg:text-4xl  text-white">What We Do?</p>
              <ul className="list-disc text-sm lg:text-xl text-white font-josefin list-inside space-y-1">
                  <li>Education for Every Child</li>
                  <li>Awareness Today for a Healthier Tomorrow</li>
                  <li>Government Welfare Scheme Support</li>
                  <li>Planting Trees, Growing Hope</li>
              </ul>
              <div className='flex gap-5 pt-3'>
                <div className="flex">
                  <img src={PhoneIcon} className="w-3 h-3 mt-[3px]"/>
                  <span className="ml-2  text-gray-400 font-josefin text-xs">+918428683411</span>
                </div>
                <div className="flex">
                  <img src={PhoneIcon} className="w-3 h-3 mt-[3px]"/>
                  <span className="ml-2  text-gray-400 font-josefin text-xs">+918428683411</span>
                </div>
              </div>
            </div>
            </div>
            <div className="flex flex-col sm:gap-0 lg:gap-0 pt-2">
              <p className="text-sm text-gray-400 font-josefin mt-5 mb-2 pl-5">Abi’s Wishdom Trust VAISHALI NAGAR, KADAMBATHUR THIRUVALLUR -631203, Tamil Nadu, India.</p>
              <div className='flex items-center pl-5'>
                <img src={Mail} className="w-3 h-3 mt-[3px]"/>
                <span className="ml-2 text-gray-400 font-josefin text-xs">abiswishdomtrust102024@gmail.com</span>
              </div>
            </div>
         </div>
     </footer>
  );
}
