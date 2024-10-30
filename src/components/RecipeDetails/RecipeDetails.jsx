import { useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
    const recipesObject = useLoaderData();
    
    const recipes =recipesObject.meals;

    
    return (
        
        <div className="px-[140px]">
            <h1 className="text-[48px] text-center font-bold">Same category recipes</h1>
            <div className="grid grid-cols-3 gap-6">
            {
                recipes.map(recipe =>  <div key={recipe.idMeal} className="card bg-base-100 pt-6 border mt-[50px]">
                    <figure className="">
                      <img
                        className="h-[182px] lg:h-[220px] w-[352px] rounded-[16px]"
                        src={recipe.strMealThumb}
                        alt="Recipe image"
                      />
                    </figure>
                    <div className="card-body p-6">
                      <h2 className="text-[22px] font-semibold">{recipe.strMeal}</h2>
                      <p className='pb-5 text-[18px] text-slate-500'>
                      Delicious and fresh flavors from around the world, crafted to satisfy every craving.
                      </p>
                      <hr />
                      <div className="card-actions mt-6">
                        <button to=""
                          className="px-6 py-[13px] bg-[#0BE58A] text-[18px] font-semibold rounded-[10px]"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                )
            }
            </div>
        </div>
    );
};

export default RecipeDetails;