
import { StyleSheet,FlatList, View } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json'
import RestaurantItem from '../../components/RestaurantItem';
export default function HomeScreen() {
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
