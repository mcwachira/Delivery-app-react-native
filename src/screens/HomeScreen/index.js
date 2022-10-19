import {useState, useEffect} from 'react'
import { StyleSheet,FlatList, View } from 'react-native';
// import restaurants from '../../../assets/data/restaurants.json'
import RestaurantItem from '../../components/RestaurantItem';
import { DataStore } from 'aws-amplify';
import { Restaurant } from '../../models';
export default function HomeScreen() {
    const [restaurants, setRestaurants] = useState([])

    const fetchRestaurants = async() => {
        const results = await DataStore.query(Restaurant)
        setRestaurants(results)
    }

    useEffect(() => {
fetchRestaurants()

//DataStore.query(Restaurant).then(Restaurant)
    }, [Restaurant])
    return (
        <View style={styles.page}>
        <FlatList data={restaurants} renderItem={({ item }) => <RestaurantItem restaurant={item} />} />

        </View>
            
    );
}

const styles = StyleSheet.create({

    page:{
        paddingVertical:30,
        padding:10
    }
});
