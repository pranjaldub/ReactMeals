//this file will contain the code for header part of the app

import {React,Fragment} from "react";
import {Animated} from "react-animated-css";
//Importing the image
import MealsImage from '../../assets/annie-spratt-R3LcfTvcGWY-unsplash.jpg'

//importing the css 
import classes from '../Layout/Header.module.css'
//defining the component

//importing the HeaderCartButton 
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) =>{

    

    return(
            <Fragment>
                <header className={classes.header}>
                   
                    
                    <Animated animationIn="fadeInLeft"  isVisible={true}>
    <div style={{'fontSize':'40px'}}>
        ReactMeals
    </div>
</Animated>
                    <HeaderCartButton showCart={props.showCart}></HeaderCartButton>
                </header>

                <div className={classes['main-image']}>
                    <img src={MealsImage} className={classes.image}></img> 
                </div>
            </Fragment>

    )
}

//exporting the component
export default Header;