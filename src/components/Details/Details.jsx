import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const detailsArr = useLoaderData()
  const details= detailsArr.meals[0];
  const {strMealThumb, strMeal, strInstructions} = details
  
  return (
    <div className="px-[140px]">
      <h1 className="text-[48px] text-center font-bold">
        EatEasy Recipe
      </h1>
      <div className=" bg-base-100 border rounded-[16px] mt-[50px] grid grid-cols-2">
      <div className="py-20 pl-10">
      <figure className="">
        <img
          className="rounded-[16px]"
          src={strMealThumb}
          alt="Recipe image"
        />
      </figure>
      </div>
      <div className="card-body p-10">
        <h2 className="text-[24px] font-semibold text-center mt-10">{strMeal}</h2>
        <p className='pb-5 text-[18px] text-slate-500 mt-5'>
        <span className="font-bold">Recipe: </span>{strInstructions}
        </p>
        <div className="card-actions mb-20">
          <Link to={`/recipe`}
          
          
            className="px-6 py-[13px] mx-auto bg-[#0BE58A] text-[18px] font-semibold rounded-[10px]"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Details;
