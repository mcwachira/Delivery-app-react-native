import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { BasketDish } from '../../models';

const BasketDishItem = ({ basketItem }) => {
    const { name, price } = basketItem

    return (
        <View style={styles.row}>
            <View style={styles.quantityContainer}>
                <Text>
                    {basketItem.quantity}
                </Text>
            </View>
            <Text style={{ fontWeight: '600' }}>{basketItem.Dish.name}</Text>
            <Text style={{ marginLeft: 'auto' }}>$ {basketItem.Dish.price}</Text>

        </View>
        
    )

}

export default BasketDishItem


const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        alignItems: 'center',

        marginVertical: 15,
    },
    quantityContainer: {
        backgroundColor: 'lightgray',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 2,
        marginRight: 10,
    }

})