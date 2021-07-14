//component for providing
//we will use useReducer for managing state
import { useReducer } from "react";


//Headerbutton.js needs access to this context for count badge
//meals.js will need acess to the context to add item to the cart

import CartContext from "./cart-context";


const defaultCartState ={
    items:[],
    totalAmount:0,
}


const cartReducer = (state ,action) =>{
    if(action.type==='ADD'){
        
        const updatedTotalAmount = +state.totalAmount+action.item.price*action.item.amount;
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingItem = state.items[existingCartItemIndex]

        let updatedItem;let updatedItems;
        if(existingItem){
            updatedItem = {...existingItem , amount : existingItem.amount+action.item.amount}
        
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem}
        else{
            //updatedItem = {...state.items}
             updatedItems = state.items.concat(action.item)
        }




       
        return {items:updatedItems ,totalAmount:updatedTotalAmount}
    }
    if(action.type === 'REM'){
        const item = state.items.findIndex(item => item.id === action.id)
        const updatedTotalAmount = state.totalAmount-state.items[item].price
        let updatedItem ; let updatedItems
        if(state.items[item].amount > 1){
            
            
            updatedItem = {...state.items[item] , amount : state.items[item].amount-1}
           updatedItems = [...state.items]
            updatedItems[item] = updatedItem
            
        }
        else{
            
             updatedItems = state.items.filter(item => item.id !== action.id)
            

        }
        return {items:updatedItems ,totalAmount:updatedTotalAmount}
    }
    return defaultCartState;
}

const CartProvider = (props) =>{

    const [cartState , dispatchCartAction] = useReducer(cartReducer , defaultCartState);
    //fucntion to add items
    const addItemToCartHandler = item =>{
        dispatchCartAction({type:'ADD' , item:item})
    }

    //function to remove item from cart
    const removeItemFromCartHandler = id => {
        dispatchCartAction({type:'REM' , id:id})
    }

    //global context data
    const cartContext = {
        items:cartState.items,
        totalAmount : cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem : removeItemFromCartHandler
    };
    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider