import PropTypes from 'prop-types';
import { useState } from 'react';
import {BsFillCartPlusFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const FilterProduct = ({singleData}) => {
    const {id, title, price, image} = singleData || {};
    const [showCart, setShowCart] = useState(false);
    return (
        <div className='p-5 border relative' onMouseOver={() => setShowCart(true)} onMouseLeave={() => setShowCart(false)}>
            <div className='w-full h-[200px] overflow-hidden'>
                <img className='w-full h-full object-contain' src={image} alt="" />
            </div>
            <div className='flex w-full justify-between my-4'>
                <span className='px-4 py-1 bg-green-50 rounded-md'>${price}</span>
            </div>
            <h4>{title.length > 25 ? <>{title.slice(0, 25)+' ...'}</> : title}</h4>
            <div className={`absolute transition-all ${showCart === true ? 'opacity-100 visible top-5 left-5' : 'opacity-0 invisible top-4 left-4'} flex gap-2`}>
                <button className='text-xl bg-green-500 p-2 text-white rounded-md'><BsFillCartPlusFill /></button>
                <Link to={`/details/${id}`} className='text-sm bg-green-500 p-2 text-white rounded-md'>Details</Link>
            </div>
        </div>
    );
};

FilterProduct.propTypes = {
    singleData: PropTypes.object,
}

export default FilterProduct;