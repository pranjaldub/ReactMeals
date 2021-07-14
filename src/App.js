import { Fragment , useState } from 'react';
import Header from '../src/components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from '../src/components/Cart/Cart'
import CartProvider from './store/CartProvider';
function App() {

  //managing states to show/hide cart modal

  const [cartVisible , showCart] = useState(false)

  function showCartHandler(){
    showCart(true);
  }
  function hideCartHandler(){
    showCart(false)
  }
  return (
    <CartProvider >
      {cartVisible && <Cart hideCart={hideCartHandler}></Cart>}
    <div>
      <Header showCart = {showCartHandler}></Header>
    </div>
    <main>
      <Meals></Meals>
    </main>
    </CartProvider>
  );
}

export default App;
