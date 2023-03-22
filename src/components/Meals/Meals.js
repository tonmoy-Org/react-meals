import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = (props) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.searchQuery}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals))
      .catch((error) => console.error(error));
  }, [props.searchQuery]);

  return (
    <div>
      {
        console.log(meals)
      }
      <div className='main-c container-lg mt-4'>
        {meals.map((meal) => (
          <Meal
            key={meal.idMeal}
            strMeal={meal.strMeal}
            strMealThumb={meal.strMealThumb}
            strYoutube={meal.strYoutube}
          />
        ))}
      </div>
    </div>
  );
};

export default Meals;
