import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import LinearGradient from 'react-native-linear-gradient';

import {Fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';

import {TabTitle} from '../components/text/TabTitle';
import {GradientSubTitle} from '../components/text/GradientSubTitle';
import {ProfileImage} from '../components/holders/ProfileImage';
import {ProfileAp} from '../components/text/ProfileAp';
import {ProfileType} from '../components/text/ProfileType';
import {ProfileLiftingStyle} from '../components/text/ProfileLiftingStyle';
import {EditButton} from '../components/buttons/EditButton';


type Props = {};
class Profile extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TabTitle>My Profile</TabTitle>
        <View style={styles.details}>
          <ProfileImage/>
          <ProfileAp/>
          <ProfileType/>
          <ProfileLiftingStyle/>
          <EditButton/>
        </View>
        <GradientSubTitle>Personal Bests</GradientSubTitle>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey
  },
  details: {
    alignItems: 'center',
  }

});

export default Profile;