import { Fragment } from "react";
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals'


const Meals=()=>{
   return( 
   <div style={{position: "relative", marginTop: 200}}>
   <Fragment>
        <MealsSummary/>
        <AvailableMeals/>
   </Fragment> 
   </div>
   );
};

export default Meals;