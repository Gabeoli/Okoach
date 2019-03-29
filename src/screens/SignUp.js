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

  saveDetails = (username, email, password) => {
    this.props.dispatch({ type: 'SET_SIGNUP_DETAILS', payload: { username, email, password } })
  }

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
              onChangeText={(username) => this.setState({username: username})}
              value={this.state.username}
            />  
          </View>
          <View>
            <UserInputBox
              source={require('../../assets/img/email_icon.svg')} 
              placeholder={"Email"}
              onChangeText={(email) => this.setState({email: email})}
              value={this.state.email}             
            />  
          </View>
          <View>
            <UserInputBox
              source={require('../../assets/img/password_icon.svg')} 
              placeholder={"Password"}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password: password})}
              value={this.state.password}
            />  
          </View>
        </View>
        <View style={styles.bottom_buttons}>
            <RedGradientButton
              onPress={() => {this.saveDetails(this.state.username, this.state.email, this.state.password);
              this.props.navigation.navigate('Welcome');
              console.log(this.state.username)}}
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