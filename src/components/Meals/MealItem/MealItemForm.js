//Add to cart functionality

import classes from '../MealItem/MealItemForm.module.css'
import { Input } from '../../UI/Input'
import { useRef , useState } from 'react'
export const MealItemForm = props =>{
    const [amountIsValid , setAmountIsValid] = useState(true)
    const amountInputRef = useRef()
    const submitHandler = event =>{
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value ; //this value is always a string 
        const enteredAmountNumber = +enteredAmount //converting it to number
        if(enteredAmount.trim().length === 0 || enteredAmountNumber <1 || enteredAmountNumber >5){
            setAmountIsValid(false)
            return;
        }
        //now if the amount is valid  ,  we will call the function addToCart from the context
        console.log("in form",enteredAmountNumber)
        props.onAddToCart(enteredAmountNumber);
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input input={{id:'amount_'+props.id,
                            type:'number',
                            min:'1',
                            max:'5',
                            step:'1',
                            defaultValue:'0'}} label="Amount" ref={amountInputRef}></Input>
            <button>Add</button>
            {!amountIsValid && <p>Please enter a valid amount</p >}

        </form>
    )
}