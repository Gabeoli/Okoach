import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

import {SubScreenTitle} from '../../components/text/SubScreenTitle';
import {RedTextButton} from '../../components/buttons/RedTextButton';

import {RedGradientButton} from '../../components/buttons/RedGradientButton';
import { ExerciseTitle } from '../../components/inputs/exerciseInputs/ExerciseTitle';
import { RepTypePicker } from '../../components/inputs/exerciseInputs/RepTypePicker';
import { SetsPicker } from '../../components/inputs/exerciseInputs/SetsPicker';
import { RepPicker } from '../../components/inputs/exerciseInputs/RepPicker';
import { WeightInput } from '../../components/inputs/exerciseInputs/WeightInput';


type Props = {};
class AddExerciseB extends Component<Props> {
  constructor(props){
  super(props);

    this.state = {
      state: "1"
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <SubScreenTitle 
            onPress={() => this.props.navigation.goBack()}
          >
          Add Exercise
        </SubScreenTitle>
        </View>
        <ExerciseTitle/>
        <SetsPicker/>
        <RepTypePicker
          onValueChange={value => {
            this.setState({
              cat: value,
            });
          }}
        />
        <RepPicker/>
        <WeightInput/>
        <View style={styles.center}>
            <RedGradientButton
              onPress={() => this.props.navigation.navigate('EditProgrammeC')}
            >
                Add
            </RedGradientButton>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  }, 
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20
  }, 
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default AddExerciseB;