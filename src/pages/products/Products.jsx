import { useLoaderData } from "react-router-dom";
import Container from "../../components/Container";
import FilterProduct from "../../components/filterProducts/Product";

const Products = () => {
    const categoryData = useLoaderData();
    return (
        <div>
            <Container>
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        categoryData.map((singleData, idx) => <FilterProduct key={idx} singleData={singleData} />)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Products;