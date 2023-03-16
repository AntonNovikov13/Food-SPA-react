import React from 'react';
import { MealItem } from './MealItem';

function MealList({ meals = [] }) {
    return (
        <div className='list'>
            {meals.map((elem) => (
                <MealItem key={elem.idMeal} {...elem} />
            ))}
        </div>
    );
}

export { MealList };
