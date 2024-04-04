import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Carrinho from '../screens/Carrinho';
import { Ionicons } from '@expo/vector-icons';
import Favoritos from '../screens/Favoritos';


const {Screen, Navigator} = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Navigator screenOptions={
            {
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#757575',
                tabBarStyle:{
                    backgroundColor: '#ffffff',
                    borderTopWidth: 0,
                },
            }
        } >
            <Screen
                name='(Home)'
                component={Home}
                options={{
                    title:'Tela de Inicio',
                    headerShown:false,
                    tabBarLabel:'Home',
                    tabBarIcon:({color, size}) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Screen
                name='(Favoritos)'
                component={Favoritos}
                options={{
                    title:'Tela de Favoritos',
                    headerShown:false,
                    tabBarLabel:'Favoritos',
                    tabBarIcon:({color, size}) => (
                        <Ionicons name="heart" color={color} size={size} />
                    ),
                }}
            />
            <Screen
                name='(Carrinho)'
                component={Carrinho}
                options={{
                    title:'Tela de Carrinho',
                    headerShown:false,
                    tabBarLabel:'Carrinho',
                    tabBarIcon:({color, size}) => (
                        <Ionicons name="cart" color={color} size={size} />
                    ),
                }}
            />
            
        </Navigator>
    )
}