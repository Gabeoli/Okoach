import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

import {SubScreenTitle} from '../../components/text/SubScreenTitle';
import {RedTextButton} from '../../components/buttons/RedTextButton';


import {EditDayPicker} from '../../components/inputs/EditDayPicker';
import {EditWeekPicker} from '../../components/inputs/EditWeekPicker';
import { AddExercise } from '../../components/buttons/AddExercise';
import {RedGradientButton} from '../../components/buttons/RedGradientButton';
import {ExerciseHolder} from '../../components/holders/ExerciseHolder';


type Props = {};
class EditProgrammeB extends Component<Props> {
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
          Edit Programme
        </SubScreenTitle>
        </View>
        <View style={styles.row}>
          <EditWeekPicker
          onValueChange={value => {
            this.setState({
              week: value,
            });
          }}/>
          <EditDayPicker
          onValueChange={value => {
            this.setState({
              day: value,
            });
          }}/>
        </View>
        <View style={styles.center}>
          <ExerciseHolder
            Title={'Snatch'}
            Sets={'3'}
            Reps={'2'}
            Weight={'85%'}
          />
          <AddExercise
            onPress={() => this.props.navigation.navigate('AddExerciseB')}
          />
          <RedGradientButton>
          Save
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


export default EditProgrammeB;