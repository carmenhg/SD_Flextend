import React, {useState, useEffect} from 'react';
import { View, Text, Button, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { firebase } from '@react-native-firebase/auth';
import { Avatar } from 'react-native-elements';
import auth from '@react-native-firebase/auth'

//importing components for page routings
import HomeScreen from "./components/HomeScreen";
import LiveMeasureScreen from "./components/LiveMeasureScreen";
import PreviousResults from "./components/PreviousResults";
import ProgressScreen from "./components/ProgressScreen";
import BLEScreen from "./components/BLEScreen";
import LoginScreen from "./components/LoginScreen";
import DeviceScreen from "./components/DeviceScreen";
import DeviceCard from "./BLE_components/DeviceCard";
import IntroSlider from "./components/IntroSlider";
import ProfileScreen from "./components/ProfileScreen";
import CalendarEventTEST from "./components/CalendarEventTEST";
import RegistrationScreen from "./components/Registration";
import ReportScreen from "./components/ReportScreen";


LogBox.ignoreAllLogs(true)


//main stack 
const Stack = createNativeStackNavigator();

const App = () =>{

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  if(auth().currentUser != null){
      const name = firebase.auth().currentUser.displayName;
      var first_name = ''
      var last_name = ''

      if (name != null)
      {
          var n = name.indexOf(' ')
      
          first_name = name.substring(0, n)
          last_name = name.substring((n - 1) + 2)
      }
  }

  if (initializing) return null;

  if(user){
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTransparent: true, headerTitleStyle: {
            fontWeight: 'bold',
          }}}>
          <Stack.Screen name="Home" component={HomeScreen} 
           options={({route, navigation}) => ({ // get reference to navigation
            headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('Guide')} 
                  title="Guide"
                  color="red"
                />
            ),
            headerLeft: () => (
                <Avatar
                  size={50}
                  containerStyle={{backgroundColor: '#ff8c00'}}
                  // rounded
                  title={first_name[0] + last_name[0]}
                  //on press navigate to profile screen 
                  onPress={() => navigation.navigate( 'Profile' )}
                />
            )
            })
          }
          />
          <Stack.Screen name="Live Measure" component={LiveMeasureScreen} />
          <Stack.Screen name="Previous Results" component={PreviousResults}/>
          <Stack.Screen name="Progress" component={ProgressScreen} 
            options={({route, navigation }) => 
              ({ // get reference to navigation
                headerRight: () => (
                    <Button
                      onPress={() => navigation.navigate('Report')} 
                      title="Generate Report"
                      color="red"
                    />
                )
              })
            }
          />
          <Stack.Screen name="Guide" component={IntroSlider} />
          <Stack.Screen name="BLE" component={BLEScreen} />
          <Stack.Screen name="Device" component={DeviceScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Events" component={CalendarEventTEST}  />
          <Stack.Screen name="Report" component={ReportScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTransparent: true,}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;