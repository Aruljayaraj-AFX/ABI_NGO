import Donateimg from "../assets/donate-black.png";
import Donatei from "../assets/donatereq.png";

export default function Donate() {
  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-center rounded-xl lg:mx-20 md:mx-10 sm:mx-5 mx-5 my-5 bg-[#305EFF] overflow-hidden">
      
      <div className="flex flex-col p-3 sm:p-3 md:p-8 lg:p-8 bg-[#305EFF] rounded-xl lg:w-1/2">
        <p className="font-josefin text-2xl sm:text-2xl md:text-4xl lg:text-4xl pb-3 text-white leading-relaxed font-normal text-left">
          Just ₹1 Can Change a Life With{" "}
          <span className="text-[#00d684] font-josefin font-normal text-2xl sm:text-2xl md:text-4xl lg:text-4xl">
            Abi's Wishdom Trust
          </span>
        </p>
        <hr className="border-white/40"/>
        
        <div className="flex mt-5 w-36 h-12 bg-white rounded-2xl items-center justify-center cursor-pointer group hover:bg-[#00d684]  transition duration-300">
          <img src={Donateimg} alt="Donate" className="w-6 h-6 mr-2"/>
          <p className="text-black font-medium">Donate</p>
        </div>
      </div>
      
      <div className="lg:w-1/2 p-2">
        <img
          src={Donatei}
          alt="Donate illustration"
          className="rounded-xl w-full h-full object-cover"
        />
      </div>
    </div>
  );
}