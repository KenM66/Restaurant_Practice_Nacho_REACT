import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Bacon Cheese Burger',
      description: 'Double Meat and Double Cheese with Bacon',
      price: 12.99,
    },
    {
      id: 'm2',
      name: 'French Fries',
      description: 'Crispy deep fried coated shoestring potatoes!',
      price: 7.99,
    },
    {
      id: 'm3',
      name: 'Nachos',
      description: 'Chips and cheese sauce.  How could Nacho not serve nachoes?',
      price: 8.99,
    },
    {
      id: 'm4',
      name: 'Cheese Quesadilla',
      description: "Just cheese heated in a shell, because for some reason, Nacho won't eat it with spicy sauce",
      price: 11.99,
    },
  ];

const AvailableMeals= ()=>{

    const mealsList= DUMMY_MEALS.map(meal=> <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price= {meal.price}/>);

    return(
        <div>
            <section className= {classes.meals}>
              <Card>
                <ul>
                    {mealsList}
                </ul>
             </Card>
            </section>
        </div>
    );

};

export default AvailableMeals;