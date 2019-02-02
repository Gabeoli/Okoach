import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';
import WelcomeText from '../components/text/WelcomeText';
import StartupLogo from '../components/text/StartupLogo';
import {RedGradientButton} from '../components/buttons/RedGradientButton';

type Props = {};
class Startup extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.startup}>
          <StartupLogo />
          <WelcomeText />
          <Text style={styles.okoach_text}>OKOACH</Text>
          <Text style={styles.instructions}>Sign Up to Continue</Text>
        </View>
        <View style={styles.bottom_buttons}>
          <RedGradientButton
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            Sign Up
          </RedGradientButton>
          <Text style={styles.instructions}>Already Have an Account?</Text>
          <TouchableOpacity
            style={styles.link}
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <Text style={styles.link_text}>SIGN IN</Text>
          </TouchableOpacity>
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
  okoach_text: {
    fontSize:96,
    fontFamily: Fonts.UniversalKnowledge,
    paddingTop: 28,
    color: Colors.red,
    letterSpacing: -5
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    fontFamily: Fonts.Roboto,
    fontWeight: '300'
  },
  bottom_buttons: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    width: 177,
    height: 50,
    marginBottom: 40
  },
  link_text: {
    fontSize: 16,
    color: Colors.red,
    fontFamily: Fonts.Roboto,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'center'
  }
});

export default Startup;