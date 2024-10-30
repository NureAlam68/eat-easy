import { useLoaderData } from "react-router-dom";
import Details from "../Details/Details";

const RecipeDetails = () => {
    const recipesObject = useLoaderData();
    const recipes = recipesObject.categories;
    console.log(recipes)
   
    // const recipes = recipesObject.categories;
    // console.log(recipes)

    return (
        
        <div>
            {
                recipes.map((recipe, idx) => 
                <Details key={idx} recipe={recipe}></Details>
                )
            }
            
        </div>
    );
};

export default RecipeDetails;