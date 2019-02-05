import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';
import WelcomeText from '../components/text/WelcomeText';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);


type Props = {};
class Challenges extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Challenges,js</Text>

        <Icon name="nav_home_icon" size={20} color="#bf1313" />
        <Icon name="nav_challenges_icon" size={20} color="#bf1313" />
        <Icon name="nav_friends_icon" size={20} color="#bf1313" />
        <Icon name="nav_profile_icon" size={20} color="#bf1313" />
        
        
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