import { useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const object = useLoaderData();
    const recipes = object.categories;
    return (
        <div className="mt-[88px] px-[140px]">
            <h2 className="text-[48px] text-center font-bold">Our top recipes</h2>
            <div className="grid grid-cols-3 gap-6">
                {
                    recipes.map(recipe=> <Recipe key={recipe.idCategory} recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;