import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

import {SubScreenTitle} from '../../components/text/SubScreenTitle';
import {RedTextButton} from '../../components/buttons/RedTextButton';
import {RedGradientButton} from '../../components/buttons/RedGradientButton';
import {ProgrammeListItem} from '../../components/holders/ProgrammeListItem';

type Props = {};
class ExerciseTrackingA extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <SubScreenTitle 
            onPress={() => this.props.navigation.navigate('Home', {version: 'three'})}
          >
            Snatch
        </SubScreenTitle>
        </View>
        <View style={styles.buttonholders}>
            <RedGradientButton
              onPress={() => this.props.navigation.navigate('Home', {version: 'four'})}
            >
              Done
            </RedGradientButton>
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
  buttonholders: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default ExerciseTrackingA;