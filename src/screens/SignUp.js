import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SvgUri from 'react-native-svg-uri';
import LinearGradient from 'react-native-linear-gradient';

import {Fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';
import { RedGradientButton } from '../components/buttons/RedGradientButton';
import { UserInputBox } from '../components/inputs/LoginInputs';
import StartupLogo from '../components/text/StartupLogo';

type Props = {};
class SignUp extends Component<Props> {
  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>

        

        <View style={styles.startup}>
          <StartupLogo/>
          <Text style={styles.okoach_text}>OKOACH</Text>
        </View>
        <View style={styles.login_container}>
          <View
            style={{ padding: 10 }}
          >
            <UserInputBox
              source={require('../../assets/img/main_logo.svg')} 
              defaultValue={"HelloTestDickhead"}
            >  
            </UserInputBox>
          </View>
          <View style={styles.text_input}>
            <SvgUri 
              width="20"
              height="20"
              source={require('../../assets/img/password_icon.svg')}
              style={{paddingRight: 20}} 
              />
            <TextInput
              style={{height: 40, width: '100%'}}
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
            <TouchableOpacity style={styles.link}>
                <Text style={styles.link_text}>LOGIN</Text>
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
  },

  login_container: {
    width: '100%',
    alignItems: 'center',
    flex: 2
  },

  text_input: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgrey,
  }

});

export default SignUp;