import './App.css'
import ComparisonArea from './components/ComparisonArea'
import RecipeList from './components/RecipeList'
import recipes from './data/recipes.json'



function App() {

  return (
    <>
      <ComparisonArea/>
      <RecipeList  recipes = {recipes} />  
        
    </>
  )
}

export default App
