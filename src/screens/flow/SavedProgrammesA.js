import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

import {SubScreenTitle} from '../../components/text/SubScreenTitle';
import {RedTextButton} from '../../components/buttons/RedTextButton';

import {ProgrammeListItem} from '../../components/holders/ProgrammeListItem';

type Props = {};
class SavedProgrammesA extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <SubScreenTitle 
            onPress={() => this.props.navigation.navigate('Home')}
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
            <Text style={styles.standardtext}>You have no programmes listed.</Text>
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
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  standardtext: {
    fontFamily: Fonts.Roboto,
    fontWeight: '300'
  }
});


export default SavedProgrammesA;