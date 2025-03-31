import type { Recipe } from "./RecipeCard";
import RecipeCardDetailed from "./RecipeCardDetailed";

interface ComparisonAreaProps {
	selectedRecipes1: Recipe;
	selectedRecipes2: Recipe;
}

const ComparisonArea = ({
	selectedRecipes1,
	selectedRecipes2,
}: ComparisonAreaProps) => {
	return (
		<>
			<h2>Compare Recipes</h2>
			<div className="comparison-area">
				<RecipeCardDetailed recipe={selectedRecipes1} />
				<RecipeCardDetailed recipe={selectedRecipes2} />
			</div>
		</>
	);
};

export default ComparisonArea;
