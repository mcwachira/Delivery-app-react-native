import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native'

const BasketDishItem = ({ basketItem }) => {
    const { name, price } = basketItem

    return (
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