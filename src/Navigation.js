import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AntDesign, Ionicons} from '@expo/vector-icons';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';

import PayButton from './components/PayButton';

const Tab = createBottomTabNavigator();
const icons = {
    Home: {
        lib: AntDesign,
        name: 'home'
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard'
    },
    /*
    Pay: {
        lib: AntDesign,
        name: 'home'
    },
    */
    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline'
    },
    Settings: {
        lib: AntDesign,
        name: 'setting'
    }
};

export default function Navigation(){
    return(
        <Tab.Navigator
            screenOptions={({route, navigation}) =>({
                tabBarIcon: ({color, size, focused})=>{
                    if( route.name === 'Pay'){
                        return (
                            <PayButton 
                                onPress={() => navigation.navigate('Pay')} 
                                focused={focused}
                            />
                        );
                    }
                    const {lib: Icon, name} = icons[route.name];
                    return <Icon name={name} size={size} color={color} />;

                },
            })}
            tabBarOptions={{
                style:{
                    backgroundColor: '#131418',
                    borderTopColor: 'rgba(255, 255, 255, 0.2)',
                },
                activeTintColor: '#FFF',
                inactiveTintColor: '#92929C',
            }}
        >
            <Tab.Screen name="Home" 
                options={{
                    title: 'Inicio'
                    }} 
                component={HomeScreen}/>
            <Tab.Screen name="Wallet" 
                options={{
                    title: 'Carteira'
                    }} 
                component={WalletScreen}/>
            <Tab.Screen name="Pay" 
                options={{
                    title: ''
                    }} 
                component={PayScreen}/>
            <Tab.Screen name="Notifications" options={{
                    title: 'Notificações'
                    }}  
                component={PayScreen} />
            <Tab.Screen name="Settings" options={{
                    title: 'Ajustes'
                    }} 
                component={PayScreen} />
        </Tab.Navigator>
    )

}
