import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import orders from '../../../assets/data/orders.json'
import restaurants from '../../../assets/data/restaurants.json'
import OrderHeader from './Header'
import MenuListItem from '../../components/MenuListItem'
import BasketDishItem from '../../components/BasketDishItem'

const order = orders[0]
const restaurant = restaurants[0]

const OrderDetails = () => {
  const {image, name, deliveryFee, minDeliveryTime, maxDeliveryTime} = order.Restaurant
 

      return (

      <View style={styles.page}>

        <View>

          <FlatList
            ListHeaderComponent={() => <OrderHeader restaurant={restaurant} />}
              data={restaurant.dishes} renderItem={({ item }) => <BasketDishItem basketItem={item} />} />


                 </View>

      </View>


      )
     
  
}

export default OrderDetails