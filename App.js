import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Restaurant from './screens/Restaurant';
import OrderDetails from './screens/OrderDetails';
import Tabs from './navigation/Tabs';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Tabs} ></Stack.Screen>
        <Stack.Screen name="Restaurant" component={Restaurant} ></Stack.Screen>
        <Stack.Screen name="OrderDetails" component={OrderDetails} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
export default App;