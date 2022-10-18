import {View, Text, Image, FlatList} from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import DishListItem from '../../components/DishListItem';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import RestaurantHeader from './Header';
import { useRoute, useNavigation } from '@react-navigation/native';
const restaurant = restaurants[0]
const RestaurantDetailsPage = () =>{
    const route = useRoute()
    const navigation = useNavigation()
    const id = route.params?.id
    // console.warn(id);

    const {name, deliveryFee, minDeliveryTime, maxDeliveryTime, rating, image, dishes } = restaurant


    return (

        <View style={styles.page}>
                    
            <View>

                <FlatList
                    ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant}/>} 
                 data={dishes} renderItem={({item}) => <DishListItem dish={item} />  }
                    keyExtractor={(item) => item.name}
                 />
               

                <Ionicons 
                onPress={() => navigation.goBack()}
                name='arrow-back-circle' size={45} color='white' style={styles.iconContainer} />

            </View>

        </View>


    )
}


export default RestaurantDetailsPage
