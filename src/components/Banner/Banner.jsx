import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <section>
            <div
            className="w-[1320px] h-[600px] mx-auto pt-[129px] px-[194px] rounded-[24px] bg-cover bg-center relative overflow-hidden"
            style={{
                backgroundImage: 'linear-gradient(0deg, rgba(21, 11, 43, 0.9), rgba(21, 11, 43, 0) 100%), url(https://i.ibb.co/ZVYpz1t/chef-holding-pan-with-fire-inside.jpg)',
            }}
        >
            {/* Content goes here */}
            <div>
                <h1 className="text-[52px] font-bold text-white text-center">
                Discover an exceptional cooking class tailored for you!
                </h1>
                <p className="text-[18px] font-normal mt-6 text-gray-300 text-center">
                Master the art of cooking with personalized lessons designed to fit your style. Elevate your culinary skills with expert guidance!
                </p>
            </div>
            <div className="flex gap-[30px] mt-10 justify-center">
                <Link to={`/recipes`} className="px-[30px] py-[20px] rounded-[50px] bg-[#0BE58A] text-[20px] font-semibold">
                Explore Now
                </Link>
                <button className="px-[30px] py-[20px] rounded-[50px] text-[20px] text-white border font-semibold hover:bg-[#0BE58A] hover:text-black">
                Our Feedback
                </button>
            </div>
        </div>
        </section>
    );
};

export default Banner;