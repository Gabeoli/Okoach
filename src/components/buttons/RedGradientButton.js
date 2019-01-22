import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';

type Props = {};
class WelcomeText extends Component<Props> {
  render() {
    return (
        <TouchableOpacity style={styles.button}>
            <LinearGradient colors={[Colors.red, Colors.darkred]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.button_gradient}>
              <Text style={styles.button_text}>
                {this}
              </Text>
            </LinearGradient>
        </TouchableOpacity>
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
