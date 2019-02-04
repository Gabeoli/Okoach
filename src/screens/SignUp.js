import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SvgUri from 'react-native-svg-uri';
import LinearGradient from 'react-native-linear-gradient';

import {Fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';

import StartupLogo from '../components/text/StartupLogo';
import {RedGradientButton} from '../components/buttons/RedGradientButton';
import {OkoachText} from '../components/text/OkoachText';
import {UserInputBox} from '../components/inputs/LoginInputs';
import {SecondaryLink} from '../components/buttons/SecondaryLink';

type Props = {};
class SignUp extends Component<Props> {
  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <View style={styles.startup}>
          <StartupLogo/>
          <OkoachText />
        </View>
        <View style={styles.login_container}>
          <View>
            <UserInputBox
              source={require('../../assets/img/login_icon.svg')} 
              defaultValue={"Username"}
            />  
          </View>
          <View>
            <UserInputBox
              source={require('../../assets/img/email_icon.svg')} 
              defaultValue={"Email"}
            />  
          </View>
          <View>
            <UserInputBox
              source={require('../../assets/img/password_icon.svg')} 
              defaultValue={"Password"}
              secureTextEntry={true}
            />  
          </View>
        </View>
        <View style={styles.bottom_buttons}>
            <RedGradientButton
                onPress={() => this.props.navigation.navigate('Home')}
            >
            Register
            </RedGradientButton>
            <SecondaryLink
              onPress={() => this.props.navigation.navigate('Login')}
            >
              Login
            </SecondaryLink>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
    startup: {
      flex: 2,
      alignItems: 'center',
      marginTop: 15,
  },
  bottom_buttons: {
    flex: 1,
    alignItems: 'center',
  },
  login_container: {
    width: '100%',
    alignItems: 'center',
    flex: 2
  }

});

export default SignUp;