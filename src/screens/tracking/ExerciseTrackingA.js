import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

import {SubScreenTitle} from '../../components/text/SubScreenTitle';
import {RedTextButton} from '../../components/buttons/RedTextButton';
import {RedGradientButton} from '../../components/buttons/RedGradientButton';
import {ProgrammeListItem} from '../../components/holders/ProgrammeListItem';
import {ExerciseBreakdownTitle} from '../../components/holders/ExerciseBreakdownTitle';
import {ExerciseBreakdown} from '../../components/holders/ExerciseBreakdown';

type Props = {};
class ExerciseTrackingA extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <SubScreenTitle 
            onPress={() => this.props.navigation.navigate('Home', {version: 'two'})}
          >
            Snatch
        </SubScreenTitle>
        </View>
        <View styles={styles.content}>
          <ExerciseBreakdownTitle/>
          <ExerciseBreakdown
          Set={'1'}
          Reps={'2'}
          />
          <ExerciseBreakdown
          Set={'2'}
          Reps={'2'}
          />
          <ExerciseBreakdown
          Set={'3'}
          Reps={'2'}
          />
        </View>
        <View style={styles.buttonholders}>
            <RedGradientButton
              onPress={() => this.props.navigation.navigate('Home', {version: 'three'})}
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
  },
  content: {
    flex: 2,
  }
});


export default ExerciseTrackingA;