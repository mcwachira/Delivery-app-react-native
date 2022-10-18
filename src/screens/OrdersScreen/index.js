import { View ,FlatList, StyleSheet } from 'react-native'
import React from 'react'
import OrderListItem from '../../components/OrderListItem/index'
import orders from '../../../assets/data/orders.json'

const OrderScreen = () => {
  return (
    <View style={styles.page}>
  
      <FlatList data={orders} renderItem={({item})=> <OrderListItem order={item}/>}/>
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({

    page: {
        flex: 1,
        width: "100%",
        marginTop: 30,
    }

})