import Mission1 from "../assets/Mission1.png";
import Mission2 from "../assets/Mission2.png";
import Mission3 from "../assets/Mission3.png";
import Mission4 from "../assets/Mission4.png";
export default function Mission() {
    return (
      <div className="flex flex-col items-center ">
        <div className="flex flex-col">
          <h2 className="text-[28px] mt-10 mb-5 sm:text-[30px] md:text-[60px] text-black font-josefin font-semibold ml-8 mr-8">A Complete Mission for a <span className="bg-gradient-to-r from-[#08f87c] to-[#0fbe6f] bg-clip-text text-transparent">Better</span> Tomorrow</h2>
          <p className="text-[10px] sm:text-[12px] md:text-[16px] text-center text-gray-700 font-josefin font-light mx-5 mb-10 leading-4">Join with us &nbsp;&nbsp;:&nbsp;&nbsp;Educate Children&nbsp;&nbsp;|&nbsp;&nbsp;Promote Healthcare Awareness&nbsp;&nbsp;|&nbsp;&nbsp;Support Government Welfare Schemes&nbsp;&nbsp;|&nbsp;&nbsp;Empower Through Environmental Action</p>
        </div>  
        <div className="flex ">
          <div >
            <div className=" flex flex-col  max-w-full gap-5 items-center ml-4 mr-4 p-5 mb-5 rounded-lg bg-white sticky top-[100px]">
              <p className="text-black text-lg font-josefin font-semibold">Education for Every Child</p>
              <div className="flex  flex-col md:flex-row lg:flex-row items-center md:items-start lg:items-start justify-center gap-10">
                <img src={Mission1} alt="Mission" className="w-1/2 sm:w-1/2 md:1/3 lg:1/3 h-auto rounded-lg"/>
                <p className="text-gray-700 text-sm sm:max-w-[500px]  font-josefin font-light mb-5 text-left tracking-widesr">Millions of underprivileged children are denied basic education due to <span className="text-red-400">poverty and lack of resources.</span> We believe every child deserves the chance to learn, grow, and dream—no matter their background.<br/><br/><span className="text-green-800 font-semibold">OUR MISSION</span> is to provide free, quality education through school programs, learning materials, and community support. By working with local schools and volunteers, we ensure that no child is left behind.</p>
              </div>
          </div>
            <div className="flex flex-col max-w-full gap-5 items-center ml-4 mr-4 p-5 mb-5 rounded-lg bg-white sticky top-[100px]">
              <p className="text-black text-lg font-josefin font-semibold">Awareness Today for a Healthier Tomorrow</p>
              <div className="flex  flex-col md:flex-row lg:flex-row items-center md:items-start lg:items-start justify-center gap-10">
                <img src={Mission2} alt="Mission" className="w-1/2 sm:w-1/2 md:1/3 lg:1/3 h-auto mt-2 rounded-lg"/>
                <p className="text-gray-700 text-sm max-w-[500px] font-josefin font-light mt-2 mb-5 text-left tracking-wider">We believe a healthy life starts with awareness.<br/> Many people suffer not from lack of treatment, but from lack of information.<br/> We organize free health camps and screenings in underserved areas.<br/> We educate people about hygiene, nutrition, and disease prevention.<br/>We spread awareness about government healthcare schemes and how to access them.<br/> Our goal is to help communities make informed choices about their health.<br/>When people know better, they live better.</p>
              </div>
            </div>
            <div className="flex flex-col max-w-full gap-5 items-center ml-4 mr-4 p-5 mb-5 rounded-lg bg-white  sticky top-[100px]">
              <p className="text-black text-lg font-josefin font-semibold">Government welfare scheme support</p>
              <div className="flex  flex-col md:flex-row lg:flex-row items-center md:items-start lg:items-start justify-center gap-10">
                <img src={Mission3} alt="Mission" className="w-1/2 sm:w-1/2 md:1/3 lg:1/3 h-auto mt-2 rounded-lg"/>
                <p className="text-gray-700 text-sm max-w-[500px] font-josefin font-light mt-2 mb-5 text-left tracking-wider">Thousands of deserving families miss out on government support due to lack of awareness and accessibility. Vital schemes for health, education, and livelihood go unused by those who need them most.<br/><br/>OUR MISSION is to raise awareness and provide hands-on support in accessing these welfare programs. Through local outreach, guidance, and community partnerships, we make sure help reaches those who truly need it—ensuring no one is left behind.</p>
              </div>
            </div>
            <div className="flex flex-col max-w-full gap-5 items-center ml-4 mr-4 p-5 mb-0 sm:mb-0 md:mb-80 lg:mb-10 rounded-lg bg-white sticky top-[110px]">
              <p className="text-black text-lg font-josefin font-semibold">Planting Trees, Growing Hope</p>
              <div className="flex  flex-col md:flex-row lg:flex-row items-center md:items-start lg:items-start justify-center gap-10">
                <img src={Mission4} alt="Mission" className="w-1/2 sm:w-1/2 md:1/3 lg:1/3 h-auto mt-2 rounded-lg"/>
                <div className="text-gray-700 text-sm max-w-[500px] font-josefin font-light tracking-wider text-left space-y-2">
                  <p>
                    Every tree we plant brings us closer to a greener, healthier planet.
                    We inspire and involve communities in tree-planting and environmental care.
                  </p>
              
                  <p className="font-semibold mt-3">Our goals are simple:</p>
              
                  <ul className="list-disc text-sm list-inside space-y-1">
                    <li>Rebuild green spaces in cities and villages</li>
                    <li>Spread awareness about climate and sustainability</li>
                    <li>Engage schools, volunteers, and local groups</li>
                    <li>Ensure trees are cared for and protected</li>
                    <li>Plant a tree. Grow a future.</li>
                  </ul>
              
                  <p className="mt-3">
                    Let’s make the earth cleaner and greener — together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}