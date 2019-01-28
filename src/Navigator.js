
import { createSwitchNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import LoginScreen from './screens/Login';
import StartupScreen from './screens/Startup';
import HomeScreen from './screens/Home';
import ChallengesScreen from './screens/Challenges';
import FriendsScreen from './screens/Friends';
import ProfileScreen from './screens/Profile';


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
      
            navigationOptions: {
              tabBarLabel:"Home Page",
              tabBarIcon: ({ tintColor }) => (
                <Icon name="home" size={30} color="#900" />
              )
            },
          },
        Challenges: ChallengesScreen,
        Friends: FriendsScreen,
        Profile: ProfileScreen
    }

);



export default createAppContainer(createSwitchNavigator(
  {
    Startup: StartupScreen,
    Login: LoginStack,
    App: BottomTabNav,
  },
  {
    initialRouteName: 'Startup',
  }
));

