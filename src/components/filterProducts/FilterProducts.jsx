import { useLoaderData } from "react-router-dom";
import FilterProduct from "./Product";

const FilterProducts = () => {
    const categoryData = useLoaderData();
    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                categoryData.map((singleData, idx ) => <FilterProduct key={idx} singleData={singleData} />)
            }
        </div>
    );
};

export default FilterProducts;