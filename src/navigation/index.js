import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsPage from '../screens/RestaurantDetailsScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import Basket from '../screens/Basket';
import OrderScreen from '../screens/OrdersScreen';
import OrderDetails from "../screens/OrderDetails";
import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons"
import DishListItem from "../components/DishListItem";

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
    return (

       <Stack.Navigator screenOPtions={{headerShown:false}}>
        <Stack.Screen name="HomeTabs" component={HomeTabs}>
            
        </Stack.Screen>
          
        
       </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator()
const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle={{backgroundColor:'white'}}>
            <Tab.Screen name='Home'
             component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Foundation name="home" size={24} color={color} />
                    ),
                }}
             />
            <Tab.Screen name='orders' 
            component={OrderStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="list-alt" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen name='profile'
             component={OrderScreen} 
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user-alt" size={24} color={color} />
                    ),
                }}
             />
        </Tab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator()
const HomeStackNavigator = () => {
    return(
        <HomeStack.Navigator>

            <HomeStack.Screen name="Restaurants" component={HomeScreen} />
            <HomeStack.Screen name='Restaurant' component={RestaurantDetailsPage}/>
            <HomeStack.Screen name='Dish' component={DishListItem} />
            <HomeStack.Screen name='Basket' component={Basket} />
        </HomeStack.Navigator>
    )
}

const OrderStack = createNativeStackNavigator()
const OrderStackNavigator = () => {
    return (
        <OrderStack.Navigator>

            <OrderStack.Screen name="Orders" component={OrderScreen} />
            <OrderStack.Screen name='Order' component={OrderDetails} />
        
        </OrderStack.Navigator>
    )
}
export default  RootNavigator