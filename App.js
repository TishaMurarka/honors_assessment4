// //Step 1: import libraries

// import { Text } from "react-native";
// import { Header } from "react-native/Libraries/NewAppScreen";

// const App = () => { 
//     return(
//         <Header/>
//         // <Text>Hi I am Here!!! </Text>
//     )
// }

// export default App
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import GadgetsScreen from './GadgetsScreen';
import GadgetDetailScreen from './GadgetDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Gadgets" component={GadgetsScreen} />
    <Stack.Screen name="GadgetDetail" component={GadgetDetailScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;