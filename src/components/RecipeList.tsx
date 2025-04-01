import { useState } from "react";
import type { Recipe } from "./RecipeCard";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";

interface RecipeListProps {
	recipes: Recipe[];
	setSelectedRecipes: (recipes: Recipe[]) => void;
}

const RecipeList = ({ recipes, setSelectedRecipes }: RecipeListProps) => {
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
							setSelectedRecipes={setSelectedRecipes}
						/>
					))}
			</div>
		</>
	);
};

export default RecipeList;
export type { Recipe };
