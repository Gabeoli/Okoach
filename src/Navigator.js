import React, {Component} from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation';
import LoginScreen from './screens/Login';
import StartupScreen from './screens/Startup';
import HomeScreen from './screens/Home';
import ChallengesScreen from './screens/Challenges';
import FriendsScreen from './screens/Friends';
import ProfileScreen from './screens/Profile';
import SignUpScreen from './screens/SignUp';
import Hamburger from './screens/Hamburger';

import MyCoachScreen from './screens/submenu_screens/MyCoach';
import PublicProgrammesScreen from './screens/submenu_screens/PublicProgrammes';
import SavedProgrammesScreen from './screens/submenu_screens/SavedProgrammes';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';

import {Colors} from './utils/Colors';

const Icon = createIconSetFromFontello(fontelloConfig); //Custom Icons

const LoginStack = createStackNavigator(
    {
        Login: LoginScreen
    },
    {
        headerMode: 'none' ,
        navigationOptions: {
            headerStyle: {
                headerVisible: false,
            },
        },
    }
);

const BottomTabNav = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="nav_home_icon"
                        color= {Colors.darkgrey}
                        size={24}
                    />
                )
    
            })
        },
        Challenges: {
            screen: ChallengesScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="nav_challenges_icon"
                        color= {Colors.darkgrey}
                        size={24}
                    />
                )
            })

        },
        Friends: {
            screen: FriendsScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="nav_friends_icon"
                        color= {Colors.darkgrey}
                        size={24}
                    />
                )
            })

        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="nav_profile_icon"
                        color= {Colors.darkgrey}
                        size={24}
                    />
                )
            })

        }
    }, {
        tabBarOptions: {    
            activeTintColor: Colors.red,
            tintColor: Colors.red,
            style: {
                backgroundColor: Colors.grey
            }

        }
    }
);

const HamburgerNav = createDrawerNavigator(
    {
        BottomTabNav,
        MyCoach: {
            screen: MyCoachScreen
        },
        PublicProgrammes: {
            screen: PublicProgrammesScreen
        },
        SavedProgrammes: {
            screen: SavedProgrammesScreen
        }
    },
    {
       contentComponent: Hamburger,
       drawerPosition: 'left',
    },
);


export default createAppContainer(createSwitchNavigator(
  {
    Startup: StartupScreen,
    SignUp: SignUpScreen,
    Login: LoginStack,
    App: HamburgerNav,
    // MyCoach: MyCoachScreen,
    // PublicProgrammes: PublicProgrammesScreen,
    // SavedProgrammes: SavedProgrammesScreen
  },
  {
    initialRouteName: 'Startup',
  }
));

