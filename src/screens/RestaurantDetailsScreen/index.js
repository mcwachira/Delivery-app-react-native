import {View, Text, Image, FlatList} from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import MenuListItem from '../../components/MenuListItem';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import RestaurantHeader from './Header';
//const restaurant = restaurants.map((restaurantData) =>restaurantData )
const restaurant = restaurants[0]
const RestaurantDetailsPage = () =>{

    const { id, name, deliveryFee, minDeliveryTime, maxDeliveryTime, rating, image, dishes } = restaurant


    return (

        <View style={styles.page}>
                    
            <View>

                <FlatList
                    ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant}/>} 
                 data={dishes} renderItem={({item}) => <MenuListItem dish={item} />  }/>
               

                <Ionicons name='arrow-back-circle' size={45} color='white' style={styles.iconContainer} />

            </View>

        </View>


    )
}


export default RestaurantDetailsPage
