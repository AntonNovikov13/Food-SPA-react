import React, { useContext } from 'react';
import Context from '../../context';

function MealRecipeItem() {
    const { recipe, id } = useContext(Context);

    return (
        <div className='recipe'>
            <img
                style={{
                    border: '4mm ridge rgba(21, 220, 546, .6)',
                    borderRadius: '25px',
                }}
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
            />
            <h1>{recipe.strMeal}</h1>
            <h4>Category: {recipe.strCategory}</h4>
            {recipe.strArea ? <h6>{recipe.strArea}</h6> : null}
            <p style={{ textAlign: 'justify' }}>
                Instructions: {recipe.strInstructions}
            </p>
            <table className='striped centered'>
                <thead>
                    <tr>
                        <th>Ingredients</th>
                        <th>Measure</th>
                    </tr>
                </thead>

                <tbody>
                    {Object.keys(recipe).map((key) => {
                        if (key.includes('Ingredient') && recipe[key]) {
                            return (
                                <tr key={key}>
                                    <td>{recipe[key]}</td>
                                    <td>
                                        {recipe[`strMeasure${key.slice(13)}`]}
                                    </td>
                                </tr>
                            );
                        }

                        return null;
                    })}
                </tbody>
            </table>
            {recipe.strYoutube ? (
                <div className='row'>
                    <h5 style={{ margin: '2rem 0 1.5rem' }}>Video Recipe</h5>
                    <iframe
                        src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                            -11
                        )}`}
                        title={id}
                        allowFullScreen
                    />
                    {recipe.strTags && <h6>#: {recipe.strTags}</h6>}
                </div>
            ) : null}
        </div>
    );
}

export { MealRecipeItem };
