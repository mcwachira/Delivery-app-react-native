import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import orders from '../../../assets/data/orders.json'

const order = orders[0]

const OrderHeader= () => {
    const { image, name } = order.Restaurant
    return (
        <View>
            <View style={styles.page}>
                <Image source={{ uri: image }}
                    resizeMode='cover'
                    style={styles.image} />



                <View style={styles.container}>


                    <Text style={styles.title}>
                        {name}
                    </Text>
                    <Text style={styles.subTitle}>
                        {order.status} &#8226; 2 days ago

                    </Text>
                    <Text style={styles.menuTitle}>
                        Your Orders
                    </Text>
                </View>


                <View>






                </View>

            </View>
        </View>
    )
}

export default OrderHeader