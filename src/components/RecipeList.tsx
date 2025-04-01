import { useState } from "react";
import type { Recipe } from "./RecipeCard";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";

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
	const [searchedName, setSearchedName] = useState("");

	return (
		<>
			<h2>Recipes</h2>
			<SearchBar
				searchedName={searchedName}
				setSearchedName={setSearchedName}
			/>
			<div className="recipe-list">
				{recipes
					.filter((recipe) =>
						recipe.name
							.toLocaleLowerCase()
							.includes(searchedName.toLocaleLowerCase()),
					)
					.map((recipe, index) => (
						<RecipeCard
							key={index}
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
