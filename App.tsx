import React, { useEffect, useState, FC } from 'react';
import {Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SettingScreen from './src/screens/SettingScreen';
import ChatScreen from './src/screens/ChatScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import SearchScreen from './src/screens/SearchScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LoginMeals from './src/screens/HomeScreens/LoginMealsScreen';
import MealDetailsScreen from './src/screens/HomeScreens/MealDetailsScreen';
import ReportScreen from './src/screens/HomeScreens/ReportScreen';

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          // let iconName;

          if (route.name === 'Home') {
            return <MaterialCommunityIcons name='home-variant' size={28} color={color} />
          }
          else if (route.name === 'SearchScreen') {
            return <Ionicons name='ios-search' size={24} color={color} />
          }
          else if (route.name === 'ChatScreen') {
            return <Ionicons name='chatbubble-ellipses' size={24} color={color} />
          }
          else if (route.name === 'NotificationScreen') {
            return <Ionicons name='ios-bookmark' size={24} color={color} />
          }
          else if (route.name === 'Setting') {
            return <MaterialIcons name='settings' size={28} color={color} />
          }
          // You can return any component that you like here!
          // return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#8D43A4',
        tabBarShowLabel: false,
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'white',
          height: 70,
          width: '94%',
          borderRadius: 5,
          marginLeft: '3%',
          marginBottom: 10,
        },
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='SearchScreen' component={SearchScreen} />
      <Tab.Screen name='ChatScreen' component={ChatScreen} />
      <Tab.Screen name='NotificationScreen' component={NotificationScreen} />
      <Tab.Screen name='Setting' component={SettingScreen} />
    </Tab.Navigator>
  );
}  

export const HomeStackScreens = (): JSX.Element => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <HomeStack.Screen name='HomeTab' component={HomeTabs} />
    <HomeStack.Screen name='LoginMeals' component={LoginMeals} />
    <HomeStack.Screen name='MealDetailsScreen' component={MealDetailsScreen} />
    <HomeStack.Screen name='ReportScreen' component={ReportScreen} />
    
  </HomeStack.Navigator>
);

export default function App(): JSX.Element {
  
  
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <HomeStackScreens />
    </NavigationContainer>
   
  );
}