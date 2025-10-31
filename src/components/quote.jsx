import Donateimg from "../assets/quote.png";

export default function quote() {
  return (
    <div className="flex">
      <img src={Donateimg} alt="Quote" className="w-full h-auto  object-cover"/>
    </div>
  );
}