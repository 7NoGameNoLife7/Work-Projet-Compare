interface Recipe {
	name: string;
	url: string;
	description: string | null;
	author: string | null;
	ingredients: string[] | null;
	method: string[] | null;
}
interface RecipeCardProps {
	recipe: Recipe;
	setSelectedRecipes1: (recipe: Recipe) => void; 
	setSelectedRecipes2	: (recipe: Recipe) => void;
}

const RecipeCard = ({ recipe, setSelectedRecipes1, setSelectedRecipes2 }: RecipeCardProps) => {
	const { name, url, description, author, ingredients, method } = recipe;

	return (
		<div className="recipe-card">
			<img src="https://picsum.photos/200/300" alt={name} />
			<div className="recipe-info">
				<a href={url} type="_blank">
					<h3>{name}</h3>
				</a>
				<p>{description}</p>
				<h4>- {author}</h4>
				<div className="recipe-details">
					<p>{ingredients}</p>
					<p>{method}</p>
				</div>
				<div className="recipe-btns">
					<button type="button" onClick={() => {setSelectedRecipes1(recipe)}}>Compare1</button>
					<button type="button" onClick={() => {setSelectedRecipes2(recipe)}}>Compare2</button>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
export type { Recipe };
