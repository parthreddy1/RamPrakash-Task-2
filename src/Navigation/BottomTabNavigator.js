import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screens/HomeScreen";
import Loaction from "../Screens/LocationsScreen";
import Message from "../Screens/MessageScreen";
import Account from "../Screens/AccountScreen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (

        <Tab.Navigator
            backBehavior="initialRoute"
            tabBarOptions={{
                showLabel: false,
                activeTintColor: "#ffffff",
                inactiveTintColor: "#7d95a1",
                style: {
                    backgroundColor: '#000000',
                    borderTopWidth: 0
                }

            }}
        >
            <Tab.Screen name="Home" component={Home}

                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            size={size + 4}
                            color={color}
                            name="home"
                        />)
                }}
            />
            <Tab.Screen name="Location" component={Loaction}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            size={size + 4}
                            color={color}
                            name="location-on"
                        />)
                }}
            />
            <Tab.Screen name="Message" component={Message}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            size={size + 4}
                            color={color}
                            name="messenger"
                        />)
                }}

            />
            <Tab.Screen name="Account" component={Account}

                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            size={size + 4}
                            color={color}
                            name="account"
                        />)
                }}
            />

        </Tab.Navigator>

    );
}