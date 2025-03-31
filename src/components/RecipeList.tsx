import RecipeCard from "./RecipeCard";
import type { Recipe } from "./RecipeCard";
interface RecipeListProps {
	recipes: Recipe[];
	setSelectedRecipes1: (recipe: Recipe) => void;
	setSelectedRecipes2: (recipe: Recipe) => void;
}

const RecipeList = ({
	recipes,
	setSelectedRecipes1,
	setSelectedRecipes2,
}: RecipeListProps) => {
	return (
		<>
			<h2>RecipeList</h2>
			<div className="recipe-list">
				{recipes.map((recipe) => (
					<RecipeCard
						key={recipe.name}
						recipe={recipe}
						setSelectedRecipes1={setSelectedRecipes1}
						setSelectedRecipes2={setSelectedRecipes2}
					/>
				))}
			</div>
		</>
	);
};

export default RecipeList;
export type { Recipe };
