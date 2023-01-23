

// we have using react-native older version because of in new react-native artitacture multipule library does not availble for new artitacture
//here we have provide navigation to different screen

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/Login/LoginScreen';
import { ImageuploadScreen } from './src/ImageUpload/ImageuploadScreen'

const Stack = createNativeStackNavigator()
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ImageuploadScreen" component={ImageuploadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
