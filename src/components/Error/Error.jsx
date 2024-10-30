import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="w-[1600px] mx-auto flex justify-center mt-[200px]">
           <div className="">
           <h1 className="text-[36px] font-bold">
                Ops!!! 
            </h1>
            <p className="text-[26px] font-semibold">
                {error.massage || error.statusText}
            </p>
            <p className="text-[72px] font-bold">{error.status}</p>
            {
                error.status === 404 && <div>
                    <h3 className="mb-5 text-[30px] font-medium">Page not found.</h3>
                    <Link to="/"
                    className="px-6 py-[13px] bg-[#0BE58A] text-[18px] font-semibold rounded-[10px]">Home</Link>
                </div>
            }
           </div>
        </div>
    );
};

export default Error;