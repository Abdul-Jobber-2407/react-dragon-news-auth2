import { Outlet } from "react-router-dom";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>

      <main className="">
           <section className=" grid grid-rows-1">
            <LeftNavbar></LeftNavbar>
           </section>
            <Outlet></Outlet>
     
      </main>
      <Footer></Footer>

    </div>
  );
};

export default HomeLayout;
