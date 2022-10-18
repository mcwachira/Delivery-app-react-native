import {View, Image, Text, StyleSheet ,Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const DishListItem = ({dish}) => {
    console.warn(dish.id)

    const navigation = useNavigation()
    const {name, description, price , image, id } = dish
    return (

        <Pressable onPress={() => navigation.navigate('Dish', {id:id})} style={styles.Container}>
         
           

<View style={{flex:1}}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text style={styles.description}>

                    {description}
                </Text>
                <Text style={styles.price}>

                    $ {price}
                </Text>
</View>

{image && <Image source={{uri:image}} style={styles.image}/>}
                  
   
        </Pressable>
    )

}

export default DishListItem

const styles = StyleSheet.create({

     Container: {
        width: "100%",
        paddingVertical:10,
        marginVertical:10,
        paddingHorizontal:20,
        borderBottomColor:'lightgrey',
        borderBottomWidth:1,
        flexDirection:"row",
        alignItems:'center'

    },

    name: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing:.5,
        marginVertical: 5,
    },
    description: {
        color: "gray",
    },
    price:{

    },

    image:{

        height:75,
        aspectRatio:4/3
    }
});