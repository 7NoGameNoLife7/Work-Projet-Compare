import "./App.css";
import ComparisonArea from "./components/ComparisonArea";
import RecipeList from "./components/RecipeList";
import recipes from "./data/recipes.json";
import { useState } from "react";
import type { Recipe } from "./components/RecipeCard";
import AddRecipeFrom from "./components/AddRecipeFrom";

function App() {
	const [selectedRecipes1, setSelectedRecipes1] = useState<Recipe>(recipes[4]);
	const [selectedRecipes2, setSelectedRecipes2] = useState<Recipe>(recipes[9]);

	return (
		<>
			<ComparisonArea
				selectedRecipes1={selectedRecipes1}
				selectedRecipes2={selectedRecipes2}
			/>
			<AddRecipeFrom/>
			<RecipeList
				recipes={recipes}
				setSelectedRecipes1={setSelectedRecipes1}
				setSelectedRecipes2={setSelectedRecipes2}
			/>
			

		</>
	);
}

export default App;
