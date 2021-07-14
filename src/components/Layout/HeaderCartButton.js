import { Fragment } from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
//importing the css
import classes from '../Layout/HeaderCartButton.module.css'
//defining the component
const HeaderCartButton = (props) =>{
    function showCart(){
        props.showCart()
    }
    const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
    return(
        <button className={classes['header-button']}>
            <span>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAgMTkuNWMwIC44MjktLjY3MiAxLjUtMS41IDEuNXMtMS41LS42NzEtMS41LTEuNWMwLS44MjguNjcyLTEuNSAxLjUtMS41czEuNS42NzIgMS41IDEuNXptMy41LTEuNWMtLjgyOCAwLTEuNS42NzEtMS41IDEuNXMuNjcyIDEuNSAxLjUgMS41IDEuNS0uNjcxIDEuNS0xLjVjMC0uODI4LS42NzItMS41LTEuNS0xLjV6bTEuMzM2LTVsMS45NzctN2gtMTYuODEzbDIuOTM4IDdoMTEuODk4em00Ljk2OS0xMGwtMy40MzIgMTJoLTEyLjU5N2wuODM5IDJoMTMuMjM5bDMuNDc0LTEyaDEuOTI5bC43NDMtMmgtNC4xOTV6Ii8+PC9zdmc+"></img>
            </span>
            <span onClick={showCart}>View Cart</span>
            <span className={classes.digit}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;