import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
export default function App() {
  return (
    <View style={styles.container}>
  {/* restaurant item*/}



    

     <HomeScreen/>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
  },
  
});
