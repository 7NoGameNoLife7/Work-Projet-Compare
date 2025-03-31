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
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
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
					<button type="button">Details</button>
					<button type="button">Compare</button>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
export type { Recipe };
