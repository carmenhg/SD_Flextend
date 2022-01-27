import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createSwitchNavigator } from 'react-navigation';

//importing components for page routings
import HomeScreen from "./components/HomeScreen";
import LiveMeasureScreen from "./components/LiveMeasureScreen";
import MetricsScreen from "./components/MetricsScreen";
import ProgressScreen from "./components/ProgressScreen";
import BLEScreen from "./components/BLEScreen";
import LoginScreen from "./components/LoginScreen";
import DeviceScreen from "./components/DeviceScreen";
import DeviceCard from "./BLE_components/DeviceCard";
import IntroSlider from "./components/IntroSlider";

//TO FIX: stack-navigator module not installing properly? I did pod install and update as well??? 
//3 main navigators for different parts of the app
//Stack Navigator fro HOME -> Other Screens (Forward)
const Stack = createNativeStackNavigator();

//Switch Navigator for LOGIN -> HOME (Not going backwards)
// const Switch = createSwitchNavigator();
//Tab Navigator for PROFILE -> HOME


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Guide" component={IntroSlider} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Live Measure" component={LiveMeasureScreen} />
        <Stack.Screen name="Metrics" component={MetricsScreen} />
        <Stack.Screen name="Progress" component={ProgressScreen} />
        <Stack.Screen name="BLE" component={BLEScreen} />
        <Stack.Screen name="Device" component={DeviceScreen} />
        {/* <Stack.Screen name="DeviceCard" component={DeviceCard} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;