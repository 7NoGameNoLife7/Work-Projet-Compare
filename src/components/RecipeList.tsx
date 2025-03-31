import RecipeCard from "./RecipeCard"; 
import { Recipe } from "./RecipeCard";

  interface RecipeListProps  {
    recipes: Recipe[];
  };
const RecipeList = ({recipes} : RecipeListProps) => {
    console.log(recipes[0]);
  return (
    <>  
        <h2>RecipeList</h2>
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.name} recipe={recipe} />
            ))}
        </div>
    </>   
);
}

export default RecipeList;
export type { Recipe };