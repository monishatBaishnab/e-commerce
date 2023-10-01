import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const {status, statusText} = error;
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <h4 className="text-green-500">{status} {statusText}</h4>
            <h2 className="text-4xl text-[#101828] font-semibold mb-4 mt-2">We can’t find that page</h2>
            <p className="text-lg text-[#475467]">Sorry, the page you are looking for does not exist or has been moved.</p>
            <div>
                <Link to='/' className="px-5 py-2 block bg-green-500 text-white rounded-md mt-3">Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;