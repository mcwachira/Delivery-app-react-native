import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import {Amplify} from 'aws-amplify'

//higher order component
 import { withAuthenticator } from 'aws-amplify-react-native/dist/Auth';
import config from './src/aws-exports'

// initializing our aws amplify
Amplify.configure({
  ...config, 
  Analytics:{
  disabled:true
}})

 function App() {

  return (
    <NavigationContainer>
 

<RootNavigator/>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
}


export default withAuthenticator(App)
