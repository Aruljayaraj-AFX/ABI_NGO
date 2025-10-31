import Ellipse from "../assets/Ellipse.png";
import card_sr from "../assets/service_gr.png";
import Helpavatar from "../assets/helpavatar.png";
import Earth from "../assets/world.png";
import Group from "../assets/group.png";
import Correct from "../assets/correct.png";
import green from "../assets/1000green.png";

export default function Works() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={Ellipse}
        alt="Ellipse"
        className="absolute top-20 md:h-200 lg:h-auto h-90 object-cover"
      />
      <div className="relative min-h-screen ">
        <div className="flex  flex-col lg:flex-row gap-5 w-full">
            <div className="w-screen lg:w-150 relative pt-10 px-[5%]">
            <img
              src={card_sr}
              alt="Service Graphic"
              className="w-screen h-auto object-cover"
            />
            </div>
            <div className="flex-col px-[5%] pt-5 lg:pt-30 lg:w-1/2 w-screen ">
                <div className="flex gap-1">
                    <img src={Helpavatar} alt="Helpavatar" className="w-6 h-6"/>
                    <span className="ml-2 text-[15px] sm:text-[15px] md:text-[22px] lg:text-[22px] text-[#F87B15] font-josefin font-light  tracking-widest">Abi’s wishdom trust -ngo</span>
                </div>
                    <p className="pt-5 leading-normal text-4xl md:text-5xl lg:text-4xl xl:text-[50px] text-black font-josefin font-medium">
                        helping each other can make <span className="bg-gradient-to-r from-[#08d4f8] to-[#0fa4be] bg-clip-text text-transparent">better</span> world<img src={Earth} className="w-10 h-10 inline-block ml-2 mb-2"/>
                    </p>
                <div className="flex  flex-col lg:flex-row mb-5">
                    <div>
                        <div className="flex gap-1 pt-5">
                            <img src={Group} alt="group" className="w-6 h-6 sm:w-6 md:w-9 lg:w-8 sm:h-6 md:h-8 lg:h-8"/>
                            <span className="ml-2 text-[16px] sm:text-[16px] md:text-[30px] text-[#000000] font-josefin font-medium tracking-[0.1em]">Start helping them.</span>
                        </div>
                        <p className="ml-8 p-2 text-[18px] text-[#000000] font-josefin font-light leading-8">Awareness is the seed; charity is the bloom that brings change.</p>
                        <hr className="my-4 mr-1 border-t-2 border-gray-300" />
                        <div className="flex gap-1">
                            <img src={Correct} alt="correct" className="w-6 h-6"/>
                            <span className="ml-2 text-[16px] sm:text-[16px] md:text-[30px] text-[#000000] font-josefin font-medium tracking-[0.1em]">We Give Child A Gift Of A Education</span>
                        </div>
                    </div>
                    <div>
                        <img src={green} alt="green" className="w-40 sm:w-40 md:w-50 lg:w-60 h-60 sm:h-60 md:h-70 lg:h-70  mt-10"/>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
      </div>
    </div>
  );
}
