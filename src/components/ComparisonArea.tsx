import RecipeCard from "./RecipeCard";


const ComparisonArea = ({selectedRecipes1, selectedRecipes2}) => {
  return (
     <>
        <h2>Comparison Area</h2>
        <div className="comparison-area">
          <RecipeCard recipe= {selectedRecipes1}/>
          <RecipeCard recipe= {selectedRecipes2}/>
        </div>
     </>
    );
}

export default ComparisonArea;