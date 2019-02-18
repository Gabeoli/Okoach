import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {Fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';

import {TabTitle} from '../components/text/TabTitle';
import {GradientSubTitle} from '../components/text/GradientSubTitle';
import {FriendButton} from '../components/buttons/FriendButton';


type Props = {};
class Friends extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TabTitle>Friends</TabTitle>
        <GradientSubTitle>Leaderboard</GradientSubTitle>
        <FriendButton></FriendButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },

});

export default Friends;