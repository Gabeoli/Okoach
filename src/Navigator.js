
import { createSwitchNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation';
import LoginScreen from './screens/Login';
import StartupScreen from './screens/Startup';
import HomeScreen from './screens/Home';
import ChallengesScreen from './screens/Challenges';
import FriendsScreen from './screens/Friends';
import ProfileScreen from './screens/Profile';
import SignUpScreen from './screens/SignUp';
import Hamburger from './screens/Hamburger';

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
        Home: HomeScreen,
        Challenges: ChallengesScreen,
        Friends: FriendsScreen,
        Profile: ProfileScreen
    }

);

const HamburgerNav = createDrawerNavigator(
    {
        BottomTabNav,
    },
    {
       contentComponent: Hamburger,
       drawerPosition: 'right',
    },
);

export default createAppContainer(createSwitchNavigator(
  {
    Startup: StartupScreen,
    SignUp: SignUpScreen,
    Login: LoginStack,
    App: HamburgerNav,
  },
  {
    initialRouteName: 'Startup',
  }
));

