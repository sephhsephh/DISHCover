import { useState } from 'react';
import './App.css';
import RecipeCard from './RecipeCard';
import { CiSearch } from "react-icons/ci";

const app_id = '327d4b32';
const app_key = 'd97967bb65e2bc39da35f17b6614b9c0';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [findRecipe, setFindRecipe] = useState("");

  const handleChange = (event) => {
    setFindRecipe(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchRecipe(findRecipe);
    }
  };

  const searchRecipe = async (foodName) => {
    const response = await fetch(`https://api.edamam.com/search?q=${foodName}&app_id=${app_id}&app_key=${app_key}`);
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };

  return (
    <>
      <header>
        <h1><span>DISH</span>Cover</h1>
        <h3><span>Discover</span> Your Culinary Calling</h3>
        <div className='searchbar'>
          <input
            type="text"
            value={findRecipe}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            placeholder='Search for a recipe'
          />
          <button onClick={() => searchRecipe(findRecipe)}>
            <CiSearch />
          </button>
        </div>
      </header>
      <div className='results-container'>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.recipe.uri} recipe={recipe} />
        ))}
      </div>
    </>
  );
}

export default App;
