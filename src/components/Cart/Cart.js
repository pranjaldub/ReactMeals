//display all cart items ,  display total amount and add delete items functionality
import { Fragment, useContext } from 'react'
import CartContext from '../../store/cart-context'
import classes from '../Cart/Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
const Cart = props =>{
    const ctx = useContext(CartContext)  
    console.log("on cart ctx",ctx)
    const TotaLAmount = `${ctx.totalAmount.toFixed(2)}`
    //console.log("amount" , TotaLAmount)
    const hasItems = ctx.items.length>0;
    
    //function to add item to cart
    const itemAddHandler = item =>{
        ctx.addItem({...item , amount :1})
    }

    //fucntion to remove item from the cart
    const itemRemoveHandler = id =>{
        ctx.removeItem(id)
    }
    //const CartItems = [{id:'c1',name:'sushi',amount:'2',price:'12.99'}].map(item => <li>{item.name}</li>)
    const CartItems = ctx.items.map(item => <CartItem item={item} onAdd={itemAddHandler.bind(null,item)} onRemove={itemRemoveHandler.bind(null , item.id)}></CartItem>)

    return <Modal hideCart={props.hideCart}>
        <ul className={classes['cart-items']}>{CartItems}</ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{TotaLAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.hideCart}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
    
}
export default Cart