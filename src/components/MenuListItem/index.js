import {View, Image, Text, StyleSheet} from 'react-native'

const MenuListItem = ({dish}) => {

    const {name, description, price , image} = dish
    return (

        <View style={styles. Container} key={name}>
         
           

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
                  
             

        </View>
    )

}

export default MenuListItem

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