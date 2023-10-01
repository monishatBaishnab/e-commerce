import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const NavItem = ({ navItem, handleOpen }) => {
    const { path, label } = navItem;
    return (
        <li className='text-gray-600 transition-all font-medium hover:text-green-500'>
            <NavLink onClick={handleOpen} className={({ isActive, isPending }) => isActive ? 'text-green-500' : isPending ? 'text-green-500' : ''} to={path}>{label}</NavLink>
        </li>
    );
};

NavItem.propTypes = {
    navItem: PropTypes.object,
    handleOpen: PropTypes.func,
}

export default NavItem;