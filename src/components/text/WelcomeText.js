import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

type Props = {};
class WelcomeText extends Component<Props> {
  render() {
    return (
        <Text style={styles.welcome}>WELCOME TO</Text>
    );
  }
}

const styles = StyleSheet.create({
welcome: {
    fontSize: 32,
    textAlign: 'center',
    fontFamily: Fonts.UniversalKnowledge,
    paddingTop: 30,
  }
});

export default WelcomeText;
