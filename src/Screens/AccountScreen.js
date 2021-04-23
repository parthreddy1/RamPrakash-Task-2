import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { customSize } from '../Functions/funtions';


export default function AccountScreen({ navigation }) {


    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: customSize(20) }}>
                Account Screen
            </Text>
        </View>


    );
}