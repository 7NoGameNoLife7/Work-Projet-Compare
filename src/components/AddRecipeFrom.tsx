import { useState } from "react";


function AddRecipeFrom() {
  const [addrecipe, setAddRecipe] = useState({
    name: "",
    url: "",
    description: "",
    ingredients: "",
    method: "",
    author: "",
  });

  // const handleSubmit = (event:React.FormEvent) => {
  //   event.preventDefault();
  //   setAddRecipe({ ...addrecipe, });
  // };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value);
    setAddRecipe(prevAddRecipe => ({ 
      ...prevAddRecipe,[name]: value,
    })
  )}

  const handleSubmit = (event: React.FormEvent) => {}

    return (
      <div className="add-recipe-form">
        <form >
          <div>
            <h3>New recipe </h3>
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={addrecipe.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="url"
              name="url"
              placeholder="url"
              value={addrecipe.url}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="description"
              placeholder="description"
              value={addrecipe.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="ingredients"
              placeholder="ingredients"
              value={addrecipe.ingredients}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="method"
              placeholder="method"
              value={addrecipe.method}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="author"
              placeholder="author"
              value={addrecipe.author}
              onChange={handleChange}
            />
          </div>
            <button type="submit" >Submit Recipe</button>
        </form>
      </div>
    );
  }

  export default AddRecipeFrom;