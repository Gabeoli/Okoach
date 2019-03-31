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


type Props = {};
class EditProgrammeC extends Component<Props> {
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
          <EditWeekPicker/>
          <EditDayPicker/>
        </View>
        <View style={styles.center}>
          <Text>This is C</Text>
          <AddExercise
            onPress={() => this.props.navigation.navigate('AddExerciseB')}
          />
          <RedGradientButton
            onPress={() => this.props.navigation.navigate('SavedProgrammesB')}
          >
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


export default EditProgrammeC;