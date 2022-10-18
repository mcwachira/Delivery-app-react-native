
import { StyleSheet, Text, View, Image } from 'react-native';

const RestaurantItem = ({restaurant}) => {
    // console.log(restaurant)
 
        const { id, name, deliveryFee, minDeliveryTime, maxDeliveryTime, rating, image } = restaurant
       
        return (
       
                <View style={styles.restaurantContainer} key={id}>
                    <Image source={{ uri: image }}
                        style={styles.image} />
                    <View style={styles.row}>

                    <View>

                   
                    <Text style={styles.title}>
                        {name}
                    </Text>
                    <Text style={styles.subTitle}>
                        ${deliveryFee} &#8226; {minDeliveryTime}-{maxDeliveryTime} minutes

                    </Text>
                </View>

                    <View style={styles.rating}>
                    <Text>
                        {rating}
                    </Text>
                </View>          
                </View>

            </View>
        
           
        )


}

export default RestaurantItem

const styles = StyleSheet.create({

    restaurantContainer: {
        width: "100%",
        marginVertical: 10

    },
    image: {
        width: "100%",
        aspectRatio: 4 / 3,
        marginBottom: 5
    },
    row:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'

    },
    title: {
        fontSize: 15,
        fontWeight: '500',
        marginVertical: 5
    },
    subTitle: {
        color: "gray",
    },
    rating:{
        backgroundColor:'lightgray',
        width:30,
        height:30,
        borderRadius:30,
        alignItems:"center",
        justifyContent:'center'
    }
});
