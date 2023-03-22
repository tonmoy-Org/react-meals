import React from 'react';
import './Meal.css';
const Meal = (props) => {
    const {strMeal, strMealThumb, strTags, strYoutube} = props;
    return (
        <div className='meal border border-warning p-2'>
            <h3>{strMeal}</h3>
            <img className='img' src={strMealThumb} alt="" />
            <h4>{strTags}</h4>
            <a href={strYoutube} className='fw-bolder text-red'>YouTube</a>
        </div>
    );
};

export default Meal;