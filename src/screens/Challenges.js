import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';
import WelcomeText from '../components/text/WelcomeText';

type Props = {};
class Challenges extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Challenges,js</Text>
        
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

});

export default Challenges;