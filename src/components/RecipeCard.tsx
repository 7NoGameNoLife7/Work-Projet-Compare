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
	setSelectedRecipes: (recipes: Recipe[]) => void;
}

const RecipeCard = ({ recipe, setSelectedRecipes }: RecipeCardProps) => {
	const { name, url, description, author } = recipe;

	const handleOnClick = (recipe: Recipe) => {
		setSelectedRecipes((prev /* : Recipe[] */) => {
			const updatedComparisonRecipes = [...prev.slice(1), recipe];
			return updatedComparisonRecipes;
		});
	};

	return (
		<div className="recipe-global">
			<img src="https://picsum.photos/200/300" alt={name} />
			<div className="recipe-info">
				<a href={url} target="_blank" rel="noreferrer">
					<h3>{name}</h3>
				</a>
				<p>{description}</p>
				<h4>- {author}</h4>
				<div className="recipe-btns">
					<button
						type="button"
						onClick={() => {
							handleOnClick(recipe);
						}}
					>
						Compare
					</button>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
export type { Recipe };
