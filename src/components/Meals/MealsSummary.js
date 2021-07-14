//display summary of each meal
import classes from '../Meals/MealsSummary.module.css'
const MealsSummary = () =>{
    return(
        <section className={classes.summary}>
            <h2>Delicious Food ,  Delivered To You</h2>
            <p>
                Choose your favourute meal from our broad selection of available Meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All of our meals are cooked with high-quality ingredients , just-in-time and of course by experinced chefs.
            </p>
        </section>
    )
}

export default MealsSummary