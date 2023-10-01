import { BiSolidCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavLogo = () => {
    return (
        <div>
            <Link to='/' className="text-2xl text-green-500 flex items-center gap-2"><span className="text-3xl"><BiSolidCartAlt /></span> E-Commerce</Link>
        </div>
    );
};

export default NavLogo;