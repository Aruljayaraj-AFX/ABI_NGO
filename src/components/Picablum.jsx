import pic from "../assets/picbg.png";
import Helpavatar from "../assets/helpavatar.png";
import TestImg from "../assets/test.png";

export default function Picablum() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <img
        src={pic}
        alt="bg-pic"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="flex gap-2 z-1 mt-10 items-center">
        <img src={Helpavatar} alt="Helpavatar" className="w-6 h-6 md:w-8 md:h-8" />
        <span className="text-[#F87B15] font-josefin font-light tracking-widest text-[15px] md:text-[22px]">
          Abi’s Wisdom Trust - NGO
        </span>
      </div>
      <p className=" ml-1 mr-1 pt-5 leading-normal text-4xl md:text-5xl xl:text-[50px] text-black font-josefin font-medium z-1 text-center px-5 md:px-0">
        Be The Reason Of Someone 
      </p>

      <p className="ml-1 mr-1 pt-2 leading-normal text-4xl md:text-5xl xl:text-[50px] text-black font-josefin font-medium z-1 text-center px-5 md:px-0">
        <span className="bg-gradient-to-r from-[#08d4f8] to-[#0fa4be] bg-clip-text text-transparent">
          Smiles
        </span>{" "}
        Causes
      </p>
      <div className="relative flex w-full justify-center pt-10 pb-20 px-5 ">
        <img
          src={TestImg}
          alt="testimg"
          className="w-full max-w-6xl h-auto object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}
