import { FadeLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-green-50/50 flex items-center justify-center">
            <FadeLoader className="w-20" color="#22c55e" />
        </div>
    );
};

export default Loader;