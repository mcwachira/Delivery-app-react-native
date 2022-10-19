import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import styles from './styles'
const DEFAULT_IMAGE = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg'

const RestaurantHeader = ({restaurant}) => {

    const { id, name, deliveryFee, minDeliveryTime, maxDeliveryTime, rating, image, dishes } = restaurant

 
    return (

        <View style={styles.page}> 
            <Image source={{ uri: image.startsWith('http') ? image : DEFAULT_IMAGE }}
                resizeMode='cover'
                style={styles.image} />



            <View style={styles.container}>


                <Text style={styles.title}>
                    {name}
                </Text>
                <Text style={styles.subTitle}>
                    ${deliveryFee.toFixed(1)} &#8226;  {minDeliveryTime}-{maxDeliveryTime} minutes

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

