import React,{useState} from 'react'
import Header from './components/Header'
import Meals from './components/Meals'
import Cart from'./components/Cart'
import CartProvider from './components/CartProvider'
//import classes from './components/Header.module.css'

function App() {

  const[cartIsShown,setCartIsShown]= useState(false)

  const showCartHandler = () =>{
      setCartIsShown(true);
  }
  const hideCartHandler = () =>{
    setCartIsShown(false);
}
  return (
    //<div className={classes.yourcomponent}>
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
      
    </CartProvider>
   // </div>
  );
}

export default App;
