//individual meal ,  it will combine meals summary and available meals
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react";
import Card from '../UI/Card'
import MealItem from "./MealItem/MealItem";
const Meals =() =>{
    return(
        <Fragment>
            <MealsSummary></MealsSummary>
            <Card>
            <AvailableMeals></AvailableMeals>
            </Card>
        </Fragment>
    )
}

export default Meals;