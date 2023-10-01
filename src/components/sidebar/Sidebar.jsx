import PropTypes from 'prop-types';
import Category from "./Category";

const Sidebar = ({categories}) => {
    return (
        <ul className="flex flex-col items-start gap-2">
            {
                categories.map((category, idx) => <Category key={idx} category={category} />)
            }
        </ul>
    );
};

Sidebar.propTypes = {
    categories: PropTypes.array,
}

export default Sidebar;