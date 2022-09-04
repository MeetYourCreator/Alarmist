import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {showLocalTime} from '../../utils/utils.time.js';

export const DigitalClock = () => {
  const [localTime, setLocalTime] = useState(showLocalTime());
  const [colorValue, setColorValue] = useState('#0000FF');
  const [fontValue, setFontValue] = useState('press-start-2p');

  const colorHandler = event => {
    setColorValue(event);
  };
  const fontHandler = event => setFontValue(event);

  const currentColor = colorValue;
  const currentFont = fontValue;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLocalTime(showLocalTime());
    }, 1000);
    return () => clearTimeout(timeout);
  });

  return (
    <>
      <SafeAreaView>
        <View style={styles.clockContainer}>
          <View style={styles.clock}>
            <View style={styles.clockText}>
              <Text>Digital Alarm Clock</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  clockContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    marginTop: 180,
    marginBottom: 90,
  },
  clock: {
    position: 'relative',
    width: 350,
    height: 100,
    borderWidth: 8,
    borderColor: '#2d2d2d',
    borderRadius: 15,
    backgroundColor: '#151617',
  },
  clockText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    textAlign: 'center',
    fontSize: 35,
    textShadowColor: '#f70300',
  },
  location: {
    marginTop: 15,
    marginRight: 7,
    marginBottom: 5,
    marginLeft: 7,
    borderTopWidth: 2,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  alarmsContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '70%',
    height: 170,
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    padding: 0,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
