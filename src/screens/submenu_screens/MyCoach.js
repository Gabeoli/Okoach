import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SvgUri from 'react-native-svg-uri';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

import {SubScreenTitle} from '../../components/text/SubScreenTitle'
import {SubScreenHeaderBg} from '../../components/background_style/SubScreenHeaderBg'
import {BackButton} from '../../components/buttons/BackButton'


type Props = {};
class MyCoach extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        {/* <SubScreenHeaderBg/> */}
        {/* <BackButton
                  onPress={() => this.props.navigation.goBack()}
          /> */}
          <SubScreenTitle 
            onPress={() => this.props.navigation.goBack()}
          >
            My Coach
          </SubScreenTitle>
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

  header: {
    height: 150

  }
});

export default MyCoach;