import React, {Component} from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator, Transitioner} from 'react-navigation';
import LoginScreen from './screens/Login';
import StartupScreen from './screens/Startup';
import HomeScreen from './screens/Home';
import ChallengesScreen from './screens/Challenges';
import FriendsScreen from './screens/Friends';
import ProfileScreen from './screens/Profile';
import SignUpScreen from './screens/SignUp';
import Hamburger from './screens/Hamburger';
import WelcomeScreen from './screens/Welcome';

import MyCoachScreen from './screens/submenu_screens/MyCoach';
import PublicProgrammesScreen from './screens/submenu_screens/PublicProgrammes';
import SavedProgrammesScreen from './screens/submenu_screens/SavedProgrammes';
import CreateProgrammeScreen from './screens/submenu_screens/CreateProgramme';
import EditProgrammeScreen from './screens/submenu_screens/EditProgramme';
import AddExerciseScreen from './screens/submenu_screens/ExerciseAdd';


//CREATE FLOW

import SavedProgrammesA from './screens/flow/SavedProgrammesA';
import CreateProgrammeA from './screens/flow/CreateProgrammeA';
import EditProgrammeA from './screens/flow/EditProgrammeA';
import AddExerciseA from './screens/flow/AddExerciseA';
import EditProgrammeB from './screens/flow/EditProgrammeB';
import AddExerciseB from './screens/flow/AddExerciseB';
import EditProgrammeC from './screens/flow/EditProgrammeC';
import SavedProgrammesB from './screens/flow/SavedProgrammesB';
import ProgrammeDetailsA from './screens/flow/ProgrammeDetailsA';

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

const FlowStack = createStackNavigator(
    {   
        SavedProgrammesA: SavedProgrammesA,
        CreateProgrammeA: CreateProgrammeA,
        EditProgrammeA: EditProgrammeA,
        AddExerciseA: AddExerciseA,
        EditProgrammeB: EditProgrammeB,
        AddExerciseB: AddExerciseB,
        EditProgrammeC: EditProgrammeC,
        SavedProgrammesB: SavedProgrammesB,
        ProgrammeDetailsA: ProgrammeDetailsA

    },
    {
        headerMode: 'none' ,
        navigationOptions: {
            headerStyle: {
                headerVisible: false,
            },
        },
        // transitionConfig : () => ({
        //     transitionSpec: {
        //         duration: 0,
        //         timing: Animated.timing,
        //         easing: Easing.step0,
        //     },
        // }),       
    },
)

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

const SavedProgrammesStack = createStackNavigator (
    {
        SavedProgrammes: SavedProgrammesScreen,
        CreateProgramme: CreateProgrammeScreen,
        EditProgramme: EditProgrammeScreen,
        AddExercise: AddExerciseScreen
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerStyle: {
                headerVisible: false,
            },
        },
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
            screen: FlowStack
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
    Welcome: WelcomeScreen,
    App: HamburgerNav,
  },
  {
    initialRouteName: 'Startup',
  }
));

