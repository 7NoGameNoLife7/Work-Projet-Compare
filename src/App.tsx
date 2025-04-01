import "./App.css";
import ComparisonArea from "./components/ComparisonArea";
import RecipeList from "./components/RecipeList";
import recipes from "./data/recipes.json";
import { useState } from "react";
import type { Recipe } from "./components/RecipeCard";

function App() {
	const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>([
		recipes[Math.floor(Math.random() * recipes.length)],
		recipes[Math.floor(Math.random() * recipes.length)],
	]);

	return (
		<>
			<ComparisonArea selectedRecipes={selectedRecipes} />
			<RecipeList recipes={recipes} setSelectedRecipes={setSelectedRecipes} />
		</>
	);
}

export default App;
