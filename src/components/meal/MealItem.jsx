import React from 'react';
import { Link } from 'react-router-dom';

function MealItem(props) {
    const { strMeal, strMealThumb, idMeal } = props;

    return (
        <div>
            <div className='card'>
                <div className='card-image'>
                    <img src={strMealThumb} alt={strMeal} />
                </div>
                <div className='card-content center'>
                    <span className='card-title'>{strMeal}</span>
                </div>
                <div className='card-action center'>
                    <Link to={`/meal/${idMeal}`} className='btn'>
                        Watch recipe
                    </Link>
                </div>
            </div>
        </div>
    );
}

export { MealItem };
