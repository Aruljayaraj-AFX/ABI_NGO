import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-25 md:pt-30 lg:pt-36 xl:pt-50 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
