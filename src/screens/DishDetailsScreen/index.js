import { useState } from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const dish = restaurants[0].dishes[0]

const DishDetailsScreen = () => {

    const navigation = useNavigation()
    const [quantity, setQuantity] = useState(1)
    const IncreaseQuantity = () => setQuantity(quantity +1 )
const DecreaseQuantity = () => quantity>1&& setQuantity(quantity - 1)

const totalPrice = () => (dish.price*quantity).toFixed(2)
    return(
        <View style={styles.page}>
            <Text style={styles.name}> 
            {dish.name}
            </Text>
            <Text style={styles.description}>
                {dish.description}
            </Text>
      <View style={styles.separator}/>
      <View style={styles.row}>
                <AntDesign name="minuscircle" size={60} color="black" onPress={DecreaseQuantity} />
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign name="pluscircleo" size={60} color="black" onPress={IncreaseQuantity} />
      </View>
      <Pressable onPress={() => navigation.navigate('Basket')} style={styles.button}>
        <Text style={styles.buttonText}>

                    Add {quantity} to basket  &#8226; ${totalPrice()}
        </Text>
      </Pressable>
        </View>
    )
}

export default DishDetailsScreen

const styles = StyleSheet.create({
    page:{
        flex:1,
        width:'100%',
        paddingVertical:40,
        padding:10,
    },
    name:{
        fontSize:30,
        fontWeight:'600',
        marginVertical:10,
    },
    description:{
color:'#696969'
    },
    separator:{
        height:1,
        backgroundColor:'lightgrey',
        marginVertical:10
    },
     row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
     },
     quantity:{
fontSize:25,
marginHorizontal:20,
     },

     button:{
        backgroundColor:'black',
        marginTop:'auto',
        padding:20,
        alignItems:'center',
        borderRadius:20
     },
     buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
     }

})