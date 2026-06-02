import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import ProfileScreen from '../screens/ProfileScreen';   

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Library" component={LibraryScreen} /> 
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

