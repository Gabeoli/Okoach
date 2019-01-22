
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './screens/Login';
import StartupScreen from './screens/Startup';
import HomeScreen from './screens/Home';

const AppStack = createStackNavigator(
    {
        Home: HomeScreen
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

export default createAppContainer(createSwitchNavigator(
  {
    Startup: StartupScreen,
    Login: LoginStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Startup',
  }
));