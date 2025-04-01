import type { Recipe } from "./RecipeCard";
import RecipeCardDetailed from "./RecipeCardDetailed";

interface ComparisonAreaProps {
	selectedRecipes: Recipe[];
}

const ComparisonArea = ({ selectedRecipes }: ComparisonAreaProps) => {
	return (
		<>
			<h2>Compare Recipes</h2>
			<div className="comparison-area">
				{selectedRecipes.map((selectedRecipe, index) => {
					return <RecipeCardDetailed key={index} recipe={selectedRecipe} />;
				})}
			</div>
		</>
	);
};

export default ComparisonArea;
