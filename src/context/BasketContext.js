import { createContext, useState, useEffect , useContext} from "react";
import { DataStore } from "aws-amplify";
import { BasketDish, Basket } from "../models";
import { useAuthContext } from "./AuthContext";


export const BasketContext = createContext({

})

 const BasketContextProvider = ({children}) => {

    //getting user who owns the basket
    const {dbUser} = useAuthContext()


    const [restaurant, setRestaurant] = useState(null)
    const [basket, setBasket] = useState(null)
    const [basketDishes, setBasketDishes] = useState([])


    //get total price of dishes in the basket

  
     const totalPrice = basketDishes.reduce(
         (sum, basketDish) => sum + basketDish.quantity * basketDish.Dish.price,
         restaurant?.deliveryFee
     );


    

    //fetching basket from amplify
    useEffect(() => {
        DataStore.query(Basket, (b) => b.restaurantID('eq', restaurant.id).userID("eq", dbUser.id)).then((baskets) => setBasket(baskets[0]))
    }, [dbUser, restaurant])



     console.log(basketDishes)

     //adding a dish to a basket
         const addDishToBasket = async (dish, quantity) => {
                //gest the existing basket from the chosen restaurant or creates one
      let theBasket = basket || (await createNewBasket())
         console.log('pressed')

         //create a basket dish item
            
             const newDish = await DataStore.save(new BasketDish({ quantity, Dish: dish, basketID: theBasket.id })
             )
             //update the number of dishes in the basket without refetching
             setBasketDishes([...basketDishes, newDish])
     }

     //creating a new basket 
        const createNewBasket =  async() =>{
  const newBasket = await DataStore.save(
    new Basket({userID:dbUser.id, restaurantID:restaurant.id})
  )

  setBasket(newBasket)
  return newBasket
        }

        //fetching all the dishes from amplify
     useEffect(() => {
     DataStore.query(BasketDish, (bd) => bd.basketID('eq', basket.id)).then((dishes) => setBasketDishes(dishes))
     }, [basket])


    const value = {
        addDishToBasket,
        setBasket,
        setRestaurant,
        restaurant,
        basketDishes,
         basket,
         totalPrice

    }

    return(
        <BasketContext.Provider value={value}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContextProvider