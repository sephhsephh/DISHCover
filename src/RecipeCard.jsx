import React, { useState } from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
    const [showModal, setShowModal] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowModal(false);
            setIsClosing(false);
        }, 75); // Duration matches the CSS transition time
    };

    return (
        <>
            <div className='recipe-card'>
                <div className="recipe-img-container">
                    <img className='recipe-img' src={recipe.recipe.image} alt={recipe.recipe.label} />
                </div>
                <div className="infobox">
                    <h2 className='name'>{recipe.recipe.label}</h2>
                    <h3>{recipe.recipe.dishType}</h3>
                    <h3>{recipe.recipe.mealType}</h3>
                </div>
                <div className="overlay">
                    <button onClick={handleShowModal}>View Recipe</button>
                </div>
            </div>
            <div className={`modal-overlay ${showModal ? 'show' : ''}`} onClick={handleCloseModal}></div>
            <div className={`moreinfo-box ${showModal ? 'show' : ''}`}>
                <div className="img-container">
                    <img className='recipe-img' src={recipe.recipe.image} alt={recipe.recipe.label} />
                </div>
                <div className="main-info-container">
                    <h2>{recipe.recipe.label}</h2>
                    <h3>Ingredients</h3>
                    <ul className='ingredients'>
                        {recipe.recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.text}</li>
                        ))}
                    </ul>
                    <h3>Other Info</h3>
                    <p>Dish Type: {recipe.recipe.dishType}</p>
                    <p>Meal Type: {recipe.recipe.mealType}</p>
                </div>
                <button className='close-btn' onClick={handleCloseModal}>X</button>
            </div>
        </>
    );
};

export default RecipeCard;
    