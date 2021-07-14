import classes from '../MealItem/MealItem.module.css'
import { MealItemForm } from './MealItemForm'
import { useContext } from 'react'
import CartContext from '../../../store/cart-context'

const MealItem = props =>{
    //here we have recieved the amount and will update the amount in the context
    const ctx = useContext(CartContext)
    const addToCartHandler = amount =>{
    console.log("in mealitem" , props.DUMMY_MEALS.price) 
        ctx.addItem({id:props.id ,  name :props.DUMMY_MEALS.name ,amount: amount , price :props.DUMMY_MEALS.price})
    
    }
    console.log("meals fetched")
    return(
        <li className={classes.meal} >
           
            <div>
                <h3>
                    {props.DUMMY_MEALS.name}
                </h3>
                <div className={classes.description}>
                    {props.DUMMY_MEALS.description}
                </div>
                <div className={classes.price}>
                    ${props.DUMMY_MEALS.price.toFixed(2)}
                </div>
                </div>
                <div>
                    <MealItemForm id={props.DUMMY_MEALS.id} onAddToCart={addToCartHandler}></MealItemForm>
                </div>
            
        </li>
    )
}

export default MealItem;