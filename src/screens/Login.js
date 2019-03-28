import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import {Fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';

import StartupLogo from '../components/text/StartupLogo';
import {RedGradientButton} from '../components/buttons/RedGradientButton';
import {OkoachText} from '../components/text/OkoachText';
import {UserInputBox} from '../components/inputs/LoginInputs';
import {InstructionsText} from '../components/text/InstructionsText';
import {SecondaryLink} from '../components/buttons/SecondaryLink';

type Props = {};
class Login extends Component<Props> {
  render() {
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
              placeholder={"Username"}
            />  
          </View>
          <View>
            <UserInputBox
              source={require('../../assets/img/email_icon.svg')} 
              placeholder={"Password"}
              secureTextEntry={true}
            />  
          </View>
        </View>
        <View style={styles.bottom_buttons}>
          <RedGradientButton
            onPress={() => this.props.navigation.navigate('Home')}
          >
            Log In
          </RedGradientButton>
          <InstructionsText>Forgot Your Password?</InstructionsText>
          <SecondaryLink
              onPress={() => this.props.navigation.navigate('SignUp')}
            >
              Sign Up
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
    backgroundColor: Colors.grey,
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

export default Login;