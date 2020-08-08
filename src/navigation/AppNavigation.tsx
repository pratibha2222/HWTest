import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home';

export type AppStackParamList = {
    default: undefined;
    Home: undefined;
}

export type AppStackNavigationProps<
  T extends keyof AppStackParamList = 'default'
> = StackNavigationProp<AppStackParamList, T>;

const AppStack = createStackNavigator<AppStackParamList>();

const AppNavigation: React.FC = () => {

    return (
        <>
          <NavigationContainer>
            <AppStack.Navigator
              initialRouteName={'Home'}
              headerMode="none"
              screenOptions={{
                gestureEnabled: false,
                gestureDirection: 'horizontal',
              }}>
              <AppStack.Screen name={'Home'} component={Home} />
            </AppStack.Navigator>
          </NavigationContainer>
        </>
      );
    };
    
    export default AppNavigation;
    