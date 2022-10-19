import { useState, useEffect } from 'react';
import {View, Text, Image, FlatList} from 'react-native'
import DishListItem from '../../components/DishListItem';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import RestaurantHeader from './Header';
import { useRoute, useNavigation } from '@react-navigation/native';
import { DataStore } from 'aws-amplify';
import { Restaurant , Dish} from '../../models';
import { ActivityIndicator } from 'react-native-paper';

const RestaurantDetailsPage = () =>{

    const [singleRestaurant, setSingleRestaurant] = useState(null)
    const [dishes, setDishes] = useState([])

    const route = useRoute()
    const navigation = useNavigation()
    const id = route.params?.id
    // console.warn(id);
    const fetchRestaurants = async () => {
        const results = await DataStore.query(Restaurant , id)
        setSingleRestaurant(results)
    }
    const fetchDishes = async() => {
        const results = await DataStore.query(Dish, (dish) => dish.restaurantID('eq',id))

        setDishes(results)
    }
    useEffect(() => {
        if(!id){
            return
        }
fetchRestaurants()
fetchDishes()
    }, [id])

    if (!singleRestaurant){
        return <ActivityIndicator size='large' color='gray'/>
    }

    const { name, deliveryFee, minDeliveryTime, maxDeliveryTime, rating, image,  } = singleRestaurant


    return (

        <View style={styles.page}>
                    
      

                <FlatList
                    ListHeaderComponent={() => <RestaurantHeader restaurant={singleRestaurant} />}
                    data={dishes} renderItem={({ item }) => <DishListItem dish={item} />}
              
                    keyExtractor={(item) => item.name}
                />
               

                <Ionicons 
                onPress={() => navigation.goBack()}
                name='arrow-back-circle' size={45} color='white' style={styles.iconContainer} />

     
        </View>


    )
}


export default RestaurantDetailsPage



