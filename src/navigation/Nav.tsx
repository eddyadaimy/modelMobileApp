import React, {Component} from 'react';
import Home from '../pages/home/home';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AppearanceProvider} from 'react-native-appearance';
import {Props} from './nav.props';
import Model from '../pages/model/model';
import ModelDetails from '../pages/modelDetails/modelDetails';
const Stack = createStackNavigator();

export class Nav extends Component<Props> {
  initStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="model"
        component={Model}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="modelDetails"
        component={ModelDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );

  render() {
    return (
      <AppearanceProvider>
        <NavigationContainer>{this.initStack()}</NavigationContainer>
      </AppearanceProvider>
    );
  }
}
