import Hero from "../components/Hero.jsx";
import Work from "../components/works.jsx";
import Picablum from "../components/Picablum.jsx";
import Mission from "../components/Mission.jsx";
import Donate from "../components/Donate.jsx";
import Quote from "../components/quote.jsx";
import Members from "../components/Members.jsx";

export default function Home(){
    return(
        <div className="min-h-screen relative">
            <Hero/>
            <Work/>
            <Picablum/>
            <Mission/>
            <Donate/>
            <Members/>
            <Quote/>
        </div>
    );

}