import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SvgUri from 'react-native-svg-uri';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

import {SubScreenTitle} from '../../components/text/SubScreenTitle'

import {TabTitle} from '../../components/text/TabTitle';
import {GradientSubTitle} from '../../components/text/GradientSubTitle';
import {ProfileImage} from '../../components/holders/ProfileImage';
import {ProfileAp} from '../../components/text/ProfileAp';
import {ProfileType} from '../../components/text/ProfileType';
import {ProfileLiftingStyle} from '../../components/text/ProfileLiftingStyle';



type Props = {};
class MyCoach extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <SubScreenTitle 
            onPress={() => this.props.navigation.goBack()}
          >
            My Coach
          </SubScreenTitle>
        </View>
        <View style={styles.details}>
          <ProfileImage/>
          <ProfileAp/>
          <ProfileType/>
          <ProfileLiftingStyle/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  details: {
    alignItems: 'center',
  }
});

export default MyCoach;