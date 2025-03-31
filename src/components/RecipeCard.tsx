interface Recipe  {
    name: string;
    url: string | null;
    description: string | null; 
    author: string | null;
    ingredients: string[] | null;
    method: string[] | null;
  };
  interface RecipeCardProps {
    recipe: Recipe;
  }
  

const RecipeCard = ({recipe}:RecipeCardProps) => {
    const { name, url, description, author, ingredients, method} = recipe;
    
  return (
    <div >
            <h3>{name}</h3>
            <p>{description}</p>
            <img src= "https://picsum.photos/200/300" alt= {name} />
            <p>{ingredients}</p>
            <p>{method}</p>
            <h4>Author: {author}</h4>
            <a href="">{url}</a>
            <button type = "button" >ComparisonArea</button>
            
    </div>
  );
}

export default RecipeCard;
export type { Recipe };