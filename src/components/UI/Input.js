import classes from '../UI/Input.module.css'
import React from 'react'
//using React.forwardRef will allow us to pass the ref from mealitem to here and then use inside input element in line 9
export const Input = React.forwardRef((props,ref) =>{

    return(
        <div className={classes.input}>
            <label htmlFor={props.input.id} >{props.label}</label>
            <input ref={ref} {...props.input}></input>
        </div>
    )
})