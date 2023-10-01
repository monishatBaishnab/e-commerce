import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Loader from "../components/loader/Loader";

const Root = () => {
    const navigation = useNavigation();
    
    return (
        <div className="">
            <Navbar />
            {navigation.state == 'loading' ? <Loader /> : <Outlet />}
            {/* <Loader /> */}
            {/* <Outlet /> */}
        </div>
    );
};

export default Root;