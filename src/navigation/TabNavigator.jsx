import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>

            <Tab.Screen name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons 
                        name='home'
                        size={size}
                        color={color}
                        />
                    )
                }}
            />
            <Tab.Screen name="Library" component={LibraryScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons 
                        name='library-outline'
                        size={size}
                        color={color}
                        />
                    )
                }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} 
            options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons 
                        name='person-outline'
                        size={size}
                        color={color}
                        />
                    )
                }}v/>
        </Tab.Navigator>
    );
}

