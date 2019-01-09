
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';
import WelcomeText from '../components/text/WelcomeText';

type Props = {};
class Startup extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.startup}>
          <SvgUri
              width="153"
              height="120"
              source={require('../../assets/img/main_logo.svg')} />
          <WelcomeText />
          <Text style={styles.okoach_text}>OKOACH</Text>
          <Text style={styles.instructions}>Sign Up to Continue</Text>
        </View>
        <View style={styles.bottom_buttons}>
          <TouchableOpacity style={styles.button}>
            <LinearGradient colors={[Colors.red, Colors.darkred]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.button_gradient}>
              <Text style={styles.button_text}>SIGN UP</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.instructions}>Already Have an Account?</Text>
          <TouchableOpacity style={styles.link}>
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
  welcome: {
    fontSize: 32,
    textAlign: 'center',
    fontFamily: Fonts.UniversalKnowledge,
    paddingTop: 30,
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
  button_gradient:{
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center'
  },
  button_text: {
    fontSize: 16,
    color: 'white',
    fontFamily: Fonts.Roboto,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'center',
  },
  link: {

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