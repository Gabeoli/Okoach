import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

import {SubScreenTitle} from '../../components/text/SubScreenTitle';
import {RedTextButton} from '../../components/buttons/RedTextButton';


import {ProgrammeTitle} from '../../components/inputs/ProgrammeTitle';
import {WeeksDropdown} from '../../components/inputs/WeeksDropdown';
import {Category} from '../../components/inputs/Category';
import { RedGradientButton } from '../../components/buttons/RedGradientButton';
import { DaysCheckbox } from '../../components/inputs/DaysCheckbox';
import { DescriptionInput } from '../../components/inputs/DescriptionInput';



type Props = {};
class CreateProgrammeA extends Component<Props> {
  constructor(props){
  super(props);

    this.state = {
      cat: '',
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <SubScreenTitle 
            onPress={() => this.props.navigation.goBack()}
          >
          Create Programme
        </SubScreenTitle>
        </View>
        <ProgrammeTitle/>
        <WeeksDropdown
          onValueChange={value => {
            this.setState({
              cat: value,
            });
          }}
        />
        <Category
          onValueChange={value => {
            this.setState({
              cat: value,
            });
          }}
        />
        <DaysCheckbox/>
        <DescriptionInput/>

        <View style ={styles.buttoncontainer}>
          <RedGradientButton
            onPress={() => this.props.navigation.navigate('EditProgrammeA')}
          >
            Create
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
  buttoncontainer: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default CreateProgrammeA;