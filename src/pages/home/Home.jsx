import { Outlet, useLoaderData } from "react-router-dom";
import Container from "../../components/Container";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    const categories = useLoaderData();
    return (
        <section>
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    <div className="col-span-1">
                        <div className="">
                            <h4 className="text-xl text-green-500 border-b pb-2 mb-2">Categories</h4>
                            <Sidebar categories={categories} />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-3">
                        <Outlet />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Home;