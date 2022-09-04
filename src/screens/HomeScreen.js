import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import DigitalClock from '../components/DigitalClock';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>HomeScreen.js</Text>
      <DigitalClock />
    </SafeAreaView>
  );
};

export default HomeScreen;
