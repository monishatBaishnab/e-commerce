import { useLoaderData } from "react-router-dom";
import Container from "../Container";

const ProductDetails = () => {
    const product = useLoaderData();
    const { title, price, description, image, rating } = product;
    console.log(rating);
    console.log(product);
    return (
        <section>
            <Container>
                <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                    <div className="col-span-1">
                        <div className="w-full h-full overflow-hidden p-10 border">
                            <img className="h-full w-full object-contain" src={image} alt="" />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl mb-5 text-green-500">{title}</h2>
                        <p className="text-gray-600">{description}</p>
                        <p className="mt-2 text-amber-500">Price: ${price}</p>
                        <p className="mt-2 text-amber-500">Reating: ${rating.rate}</p>
                        <p className="mt-2 text-amber-500">Review: ${rating.count}</p>
                        <button className="px-4 py-2 rounded-md bg-green-500 text-white mt-3">Purches</button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ProductDetails;