import cartIcon from  '../Cart/shopping_cart.png';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
import { useContext, useEffect } from 'react';

const HeaderCartButton= props=>{

    const cartCtx= useContext(CartContext);

    const numberOfCartItems= cartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    }, 0);

    return <button  style={{border: 20}} onClick={props.onClick}>
        <span className= {classes.icon}>
            <img style={{width: 100, height: 60}} src= {cartIcon} />
        </span>
        <span style={{backgroundColor: 'yellow', fontFamily: 'bold'}}>Your Cart </span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;