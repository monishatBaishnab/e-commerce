import { useState } from "react";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import { HiOutlineBars3BottomRight } from 'react-icons/hi2'

const navItems = [
    {
        path: '/',
        label: 'Home',
    },
    {
        path: '/products',
        label: 'Products',
    },
    {
        path: '/shop',
        label: 'Shop',
    },
    {
        path: '/login',
        label: 'Login',
    },
];

const Navbar = () => {
    // small navbar open or not
    const [open, setOpen] = useState(false);
    // set open false
    const handleOpen = () => setOpen(false);
    
    return (
        <header className="border-b">
            <div className="max-w-screen-xl mx-auto">
                <nav className="flex items-center justify-between min-h-[80px]">
                    {/* nav logo */}
                    <NavLogo />

                    {/* nav list */}
                    <div className={`absolute bottom-0 top-[81px] transition-all ${open === true ? 'right-0 opacity-100 visible z-50' : 'right-5 opacity-0 invisible'} p-5 bg-white w-52 md:static md:bg-none md:w-auto md:p-0 md:opacity-100 md:visible`}>
                        <ul className="flex flex-col items-start gap-3 md:items-center md:flex-row">
                            {
                                navItems.map((item, idx) => <NavItem key={idx} handleOpen={handleOpen} navItem={item} />)
                            }
                        </ul>
                    </div>
                    
                    {/* nav toggler */}
                    <div className="block md:hidden p-2 rounded-md transition-all hover:bg-gray-100 hover:text-primary" onClick={() => setOpen(!open)}>
                        <HiOutlineBars3BottomRight className="text-3xl" />
                    </div>
                </nav>
            </div>
            {/* inner background */}
            <div onClick={handleOpen} className={`absolute left-0 right-0 top-[80px] bottom-0 w-full bg-green-50/80 transition-all ${open === true ? 'opacity-100 visible': 'opacity-0 invisible'}`}></div>
        </header>
    );
};

export default Navbar;