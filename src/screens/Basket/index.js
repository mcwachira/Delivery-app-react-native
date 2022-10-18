import { useState } from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import { AntDesign } from '@expo/vector-icons';
const restaurant = restaurants[0]

const BasketList = ({ basketItem }) => {
    const {name, price} = basketItem

    return(
        <View style={styles.row}>
            <View style={styles.quantityContainer}>
                <Text>
                    1
                </Text>
            </View>
            <Text style={{ fontWeight: '600' }}>{name}</Text>
            <Text style={{ marginLeft: 'auto' }}>$ {price}</Text>

        </View>
    )
   
}

const Basket = () => {
 

const totalPrice = () => (dish.price*quantity).toFixed(2)
    return(
        <View style={styles.page}>
            <Text style={styles.name}> 
                {restaurant.name}
            </Text>
            <Text style={{fontWeight:'bold', marginTop:20, fontSize:19}}>
          
          Your Items
            </Text>
          

            <FlatList data={restaurant.dishes}  renderItem={({item}) => <BasketList basketItem={item}/>}/>
        
      <View style={styles.separator}/>
    
      <View style={styles.button}>
        <Text style={styles.buttonText}>

                  Create Order
        </Text>
      </View>
        </View>
    )
}

export default Basket

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
    
        marginVertical:15,
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
      
     },
     buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
     },
     quantityContainer:{
        backgroundColor:'lightgray',
        paddingHorizontal:5,
        paddingVertical:2,
        borderRadius:2,
        marginRight:10,
     }

})