import { Fragment } from "react";

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";


const Header= props=>{
    return <Fragment>

        <header className={classes.header}>
      <div className= {classes['main-image']}> <img style={{ height: 150, width: 200}} src={mealsImage} alt= "Food at Nacho's Restaurant"/></div>
           <h1>Nacho's Restaurant</h1> 
           <HeaderCartButton onClick={props.onShowCart}/>
           
        </header>
        
        


    </Fragment>
};

export default Header;