import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/About';
import React from 'react';
import Header from '../shared/Header';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='About Game Zone' />,
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#d3d3d3',
      height: 90,
    },
  },
});

export default AboutStack;
