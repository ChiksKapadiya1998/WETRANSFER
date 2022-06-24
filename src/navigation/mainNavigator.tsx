import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {screenString} from '../helpers/strings';
import {
  LandingScreen,
  HomeScreen,
  PostScreen,
  PostListScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          orientation: 'portrait',
        }}
        initialRouteName={screenString.landing}>
        <Stack.Screen name={screenString.landing} component={LandingScreen} />
        <Stack.Screen name={screenString.homeScreen} component={HomeScreen} />
        <Stack.Screen
          name={screenString.postListScreen}
          component={PostListScreen}
        />
        <Stack.Screen name={screenString.postScreen} component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
