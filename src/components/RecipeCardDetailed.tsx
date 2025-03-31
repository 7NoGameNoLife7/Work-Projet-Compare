import type { Recipe } from "./RecipeCard";

interface RecipeCardDetailedProps {
	recipe: Recipe;
}

const RecipeCardDetailed = ({ recipe }: RecipeCardDetailedProps) => {
	const { name, url, description, author, ingredients, method } = recipe;

	return (
		<div className="recipe-card-detailed">
			<div className="recipe-global">
				<img src="https://picsum.photos/200/300" alt={name} />
				<div className="recipe-info">
					<a href={url} target="_blank" rel="noreferrer">
						<h3>{name}</h3>
					</a>
					<p>{description}</p>
					<h4>- {author}</h4>
				</div>
			</div>
			<div className="recipe-details">
				<h3>Ingredients:</h3>
				<ul>
					{ingredients?.map((ingredient, index) => {
						return <li key={index}>{ingredient}</li>;
					})}
				</ul>
				<h3>Recipe:</h3>
				<p> {method}</p>
			</div>
		</div>
	);
};

export default RecipeCardDetailed;
export type { Recipe };
