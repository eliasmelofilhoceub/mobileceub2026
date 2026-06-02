import "react-native-gesture-handler";
import React from 'react';
import {} from '@react-navigation/native'

import DrawerNavigator from './screens/DrawerNavigation';

export default function App() {
  return(
      <NavigationContainer>
        <DrawerNavigator>
        </DrawerNavigator>
      </NavigationContainer>
  )
}