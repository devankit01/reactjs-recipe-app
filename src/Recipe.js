import React from 'react'
import "./App.css";

function Recipe({title,image,calorie, ingredients}) {
    return (
        <div className="recipe__card">
            <img src={image} />
            <p className="recipe__title">{title}</p>
            <p className="recipe__calorie">Calories : {calorie}</p>
            <ol>{ingredients.map(ingredient => (
                <li className="recipe__ingredients">{ingredient.text}</li>
            ))}</ol>
           
        </div>
    )
}

export default Recipe
