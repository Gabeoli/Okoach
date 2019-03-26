import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SvgUri from 'react-native-svg-uri';
import LinearGradient from 'react-native-linear-gradient';

import { connect } from 'react-redux';

/*Actions*/
import {SET_SIGNUP_DETAILS} from '../store/signUp/Actions';

/*Vars*/
import {Fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';

import StartupLogo from '../components/text/StartupLogo';
import {RedGradientButton} from '../components/buttons/RedGradientButton';
import {OkoachText} from '../components/text/OkoachText';
import {UserInputBox} from '../components/inputs/LoginInputs';
import {SecondaryLink} from '../components/buttons/SecondaryLink';



type Props = {};
class SignUp extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  onChangeText = (key, val) => {
    console.log(this.state.username)
    this.setState({
      isError: false,
      [key]: val
    })
  }

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
              value={this.state.username}
              onChangeText={val => this.onChangeText('username', val)}
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
              onPress={() => this.props.dispatch({ type: SET_SIGNUP_DETAILS, payload: this.props.username })}
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

const mapStateToProps = (state) => ({
  username: state.username,
  email: state.email,
  password: state.password,
});

export default connect(mapStateToProps)(SignUp);