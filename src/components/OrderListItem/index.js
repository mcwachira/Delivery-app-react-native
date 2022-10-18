import { StyleSheet, Text, View, Image}from 'react-native'


const OrderListItem = ({order}) => {
  return (
    <View style={styles.page}>
    <Image source={{uri:order.Restaurant.image}} style={styles.image} />
    <View>
        <Text style={styles.name}>
            {order.Restaurant.name}
        </Text>
              <Text>
                3 items $38.45
              </Text>
              <Text>
                2 days ago {order.status}
              </Text>

    </View>

    </View>
  )
}

export default OrderListItem


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 5,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,

  }
 
});