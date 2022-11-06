import { View, Text } from 'react-native'
import React from 'react'
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import Favorite from '../screen/Favorite';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconhome from 'react-native-vector-icons/AntDesign';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




function Tabb() {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle:{
          
          margin:35,
          borderRadius:40,
          height:70,
          elevation: 0, 
        },
        tabBarItemStyle:{
          
          margin:12,
          
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
            return <Iconhome name="home" size={27} color={color} />

          } else if (route.name === 'Favorite') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
            return <Ionicons name="heart-outline" size={27} color={color} />
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
            return <Icon name="smile-o" size={27} color={color} />
          }

          // You can return any component that you like here!

        },
        tabBarActiveTintColor: '#FF3A44',
        tabBarInactiveTintColor: 'gray',

      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>

  );
}

export default function Nav() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="tabb" component={Tabb} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

