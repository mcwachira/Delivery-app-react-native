
import { StyleSheet,FlatList } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json'
import RestaurantItem from '../../components/RestaurantItem';
export default function HomeScreen() {
    return (
            <FlatList data={restaurants} renderItem={({ item }) => <RestaurantItem restaurant={item} />} />
        
    );
}

const styles = StyleSheet.create({

});
