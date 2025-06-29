import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="font-poppins bg-[#F3F3F3]">
            <Navbar></Navbar>
             <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;