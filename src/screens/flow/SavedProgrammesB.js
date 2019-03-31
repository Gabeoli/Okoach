import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

import {SubScreenTitle} from '../../components/text/SubScreenTitle';
import {RedTextButton} from '../../components/buttons/RedTextButton';

import {ProgrammeListItem} from '../../components/holders/ProgrammeListItem';

type Props = {};
class SavedProgrammesB extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <SubScreenTitle 
            onPress={() => this.props.navigation.navigate('Home', {
              version: 'two'
            }
            )}
          >
          Saved Programmes 
        </SubScreenTitle>
        </View>
        <View style={styles.buttonholders}>
          <RedTextButton
            onPress={() => this.props.navigation.navigate('CreateProgrammeA')}
          >
            Create
          </RedTextButton>
        </View>
        <View style={styles.alert}>
          <ProgrammeListItem
            Title={'Beginner Programme'} 
            onPress={() => this.props.navigation.navigate('ProgrammeDetailsA')}/>
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
    paddingTop: 10,
    paddingBottom: 10
  },
  alert: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  standardtext: {
    fontFamily: Fonts.Roboto,
    fontWeight: '300'
  }
});


export default SavedProgrammesB;