/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import tcpService from 'src/services/tcpService';
import UdpService from 'src/services/udpService';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const handleButtonClick = () => {
    // UdpService.sendRequest();
    tcpService.sendRequest();
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Button title="Search device" onPress={handleButtonClick} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
