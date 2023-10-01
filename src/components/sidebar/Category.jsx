import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Category = ({category}) => {
    return (
        <li className="w-full category"><NavLink to={`/${category}`} className="block w-full px-4 py-2 transition-all capitalize hover:bg-green-500 hover:text-white rounded-md">{category}</NavLink></li>
    );
};
Category.propTypes = {
    category: PropTypes.string,
}

export default Category;