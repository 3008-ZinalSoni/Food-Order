import React,{useContext} from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from './CartContext';

export default function MealItem(props) {

  
  const price = `$${props.price.toFixed(2)}`;
    //const amount = props.price;
    //const price = `$${amount.toFixed(2)}%`;
    //const price = props.price ? `$${props.price.toFixed(2)}` : '';  
    //const price  = props.price &&`$${ props.price.toFixed(2)}`;
    //const price = `$${props.price !== undefined ? props.price.toFixed(2) : 'N/A'}`;



    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) =>{
        cartCtx.addItem({
          id: props.id,
          name: props.name,
          amount: amount,
          price: props.price
        });
    };
  return (
    
    <>
      <li className={classes.meal}>

        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
       <div>
            <MealItemForm id={props.id}  onAddToCart={addToCartHandler}/>
       </div>
        
       
      </li>
  </>
  )
}
