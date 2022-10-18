import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
 

<RootNavigator/>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
}



