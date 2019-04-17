import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Create from './pages/Create';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';

const TabNavigator = createBottomTabNavigator(
    {
        Home:{
          screen: Home,
          navigationOptions: {
            tabBarIcon: ({ focused, horizontal, tintColor }) => (
              <Icon name={'home'} size={22} color={tintColor} />
            )
          }
        },
        Messages:{
          screen: Messages,
          navigationOptions: {
            tabBarIcon: ({ focused, horizontal, tintColor }) => (
              <Icon name={'inbox'} size={22} color={tintColor} />
            )
          },
        },
        Create:{screen: Create,
          navigationOptions: {
            tabBarIcon: ({ focused, horizontal, tintColor }) => (
              <Icon name={'pluscircleo'} size={25} color={tintColor} />
            )
          }
        },
        Notifications:{screen: Notifications,
          navigationOptions: {
            tabBarIcon: ({ focused, horizontal, tintColor }) => (
              <Icon name={'profile'} size={22} color={tintColor} />
            )
          }
        },
        Profile:{screen: Profile,
          navigationOptions: {
            tabBarIcon: ({ focused, horizontal, tintColor }) => (
              <Icon name={'user'} size={22} color={tintColor} />
            )
          }
        },
    },
    {
      tabBarOptions: {
        activeTintColor: '#DC143C',
        inactiveTintColor: 'gray',
      },
    }
);

export default createAppContainer(TabNavigator);