import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors} from '../utils/Colors';
import WelcomeText from '../components/text/WelcomeText';
import StartupLogo from '../components/text/StartupLogo';
import {RedGradientButton} from '../components/buttons/RedGradientButton';
import {OkoachText} from '../components/text/OkoachText';
import {InstructionsText} from '../components/text/InstructionsText';
import {SecondaryLink} from '../components/buttons/SecondaryLink';

type Props = {};
class Startup extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.startup}>
          <StartupLogo />
          <WelcomeText />
          <OkoachText />
          <InstructionsText>
            Sign Up to Continue
          </InstructionsText>
        </View>
        <View style={styles.bottom_buttons}>
          <RedGradientButton
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            Sign Up
          </RedGradientButton>
          <InstructionsText>
            Already Have an Account?
          </InstructionsText>
          <SecondaryLink
            onPress={() => this.props.navigation.navigate('Login')}
          >
            SIGN IN
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
  }
});

export default Startup;