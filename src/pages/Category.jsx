import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilteredCategory } from '../service';
import { Loader } from '../components/Loader';
import { MealList } from '../components/meal/MealList';

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getFilteredCategory(name).then((data) => {
            setMeals(data.meals);
        });
    }, [name]);

    return (
        <>
            <button className='btn' onClick={() => navigate(-1)}>
                Go Back
            </button>
            {!meals.length ? <Loader /> : <MealList meals={meals} />}
        </>
    );
}

export { Category };
