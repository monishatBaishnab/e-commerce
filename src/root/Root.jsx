import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
    return (
        <div className="">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;