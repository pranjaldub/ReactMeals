//to display list of available meals
import classes from '../Meals/AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  const AvailableMeals = () =>{
    const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} DUMMY_MEALS={meal}></MealItem>);
    return(
        <section className={classes.meals}>
            
            <ul>
                
                {mealsList}
            </ul>
        </section>
    )
  }
  export default AvailableMeals