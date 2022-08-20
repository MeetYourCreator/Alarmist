import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, Text } from 'react-native';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (

    <NavigationContainer>
      <SafeAreaView>
        <Text>AppNavigator</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default AppNavigator;
