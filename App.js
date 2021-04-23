import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./src/Navigation/BottomTabNavigator";
export default function App({ navigation }) {
  const [stateloading, stateSetLoading] = React.useState(true)


  if (!stateloading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator
          size={"large"}
          color={"#ff0000"}
          style={{ alignSelf: "center" }}
        />
      </View>)
  }

  return (

    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>

  );
}