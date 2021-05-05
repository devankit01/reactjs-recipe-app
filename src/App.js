import { useEffect, useState } from "react";
import "./App.css";
import Recipe from './Recipe';

function App() {
  const [search, setSearch] = useState("Sugar");
  const [recipes, setRecipes] = useState([]);

  const APP_Id = "f7701e9a";
  const APP_KEY = "4332f92d262c1f8d886180d67d5896fa";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async (search) => {
    console.log("☺☺☺");
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_Id}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
    console.log(recipes);
    // return data;
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form");
    const data = getRecipes(search);
    console.log(data.hits);

  };

  return (
    <div className="App">
      <h1>ReactJS Recipe App</h1>
      <div className="search__section">
        <form onSubmit={handleSubmit}>
          <input

          className="search__box"
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
          <button type="submit" className="search__btn">Search</button>
        </form>
       

{recipes.map((recipe) => (
          <Recipe
            title = {recipe.recipe.label}
            image = {recipe.recipe.image}
            calorie = {recipe.recipe.calories}
            ingredients = {recipe.recipe.ingredients}
          />
        ))}
      </div>

      <div>Developed by <a href="https://www.instagram.com/dev_ankit____/">@devankit01 </a></div>
    </div>
  );
}

export default App;
