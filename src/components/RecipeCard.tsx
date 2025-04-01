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
	setSelectedRecipes2: (recipe: Recipe) => void;
}

const RecipeCard = ({
	recipe,
	setSelectedRecipes1,
	setSelectedRecipes2,
}: RecipeCardProps) => {
	const { name, url, description, author } = recipe;

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
							setSelectedRecipes1(recipe);
						}}
					>
						Compare 1
					</button>
					<button
						type="button"
						onClick={() => {
							setSelectedRecipes2(recipe);
						}}
					>
						Compare 2
					</button>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
export type { Recipe };
