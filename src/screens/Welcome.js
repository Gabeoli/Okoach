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
import {GeneralText} from '../components/text/GeneralText';


type Props = {};
class Welcome extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <View style={styles.startup}>
          <StartupLogo/>
          <OkoachText />
        </View>
        <View style={styles.content}>   
          <GeneralText>
            Welcome
          </GeneralText>
          <RedGradientButton
            onPress={()=> {this.props.navigation.navigate('Home')}}
          >
            LETS GO 
          </RedGradientButton>       
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
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
  },
   content: {
    flex:2,
    alignItems: 'center',
    marginTop: 50
   },
   userText: {
     fontFamily: Fonts.UniversalKnowledge,
     textTransform: 'uppercase'
   }
});

const mapStateToProps = (state) => ({
  username: state.username,
  email: state.email,
  password: state.password,
});


export default connect(mapStateToProps)(Welcome);