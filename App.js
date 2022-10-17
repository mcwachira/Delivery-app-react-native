import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
   <Text>
    Hello world
   </Text>
  {/* restaurant item*/}

  {/* <View style={styles.restaurantContainer}>
        <Image source={{ uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg'}}
        style={styles.image}/>
  </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantContainer:{
    width:"100%",

  },
  image:{
    width:"100%",
    aspectRatio:5/3,
  }
});
