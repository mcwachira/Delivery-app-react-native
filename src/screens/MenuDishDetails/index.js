import { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import { AntDesign } from '@expo/vector-icons';
const dish = restaurants[0].dishes[0]

const MenuDishDetails = () => {
    const [quantity, setQuantity] = useState(1)
    const IncreaseQuantity = () => setQuantity(quantity +1 )
const DecreaseQuantity = () => quantity>1&& setQuantity(quantity - 1)
    return(
        <View style={styles.page}>
            {/* <Text style={styles.name}> 
            {dish.name}
            </Text>
            <Text style={styles.description}>
                {dish.description}
            </Text>
      <View style={styles.separator}/>
      <View style={styles.row}>
                <AntDesign name="minuscircle" size={40} color="black" onPress={DecreaseQuantity} />
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign name="pluscircleo" size={40} color="black" onPress={IncreaseQuantity} />
      </View> */}
        </View>
    )
}

export default MenuDishDetails

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
        marginTop:50,
     },
     quantity:{

     }

})