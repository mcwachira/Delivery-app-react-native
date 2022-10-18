import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import styles from './styles'

const RestaurantHeader = ({restaurant}) => {

    const { id, name, deliveryFee, minDeliveryTime, maxDeliveryTime, rating, image, dishes } = restaurant

 
    return (

        <View style={styles.page}> 
            <Image source={{ uri: image }}
                resizeMode='cover'
                style={styles.image} />



            <View style={styles.container}>


                <Text style={styles.title}>
                    {name}
                </Text>
                <Text style={styles.subTitle}>
                    ${deliveryFee} &#8226; {minDeliveryTime}-{maxDeliveryTime} minutes

                </Text>
                <Text style={styles.menuTitle}>
                    Menu
                </Text>
            </View>


            <View>

            




            </View>

        </View>


    )
}


export default RestaurantHeader

