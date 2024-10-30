import { useLoaderData } from "react-router-dom";
import Details from "../Details/Details";

const RecipeDetails = () => {
    const recipesObject = useLoaderData();
    
    console.log(recipesObject)
   
    // const recipes = recipesObject.categories;
    // console.log(recipes)

    return (
        
        <div>
            
        </div>
    );
};

export default RecipeDetails;