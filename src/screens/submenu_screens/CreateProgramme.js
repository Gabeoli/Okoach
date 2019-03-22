import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

import {SubScreenTitle} from '../../components/text/SubScreenTitle';
import {RedTextButton} from '../../components/buttons/RedTextButton';

type Props = {};
class CreateProgramme extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <SubScreenTitle 
            onPress={() => this.props.navigation.navigate('Home')}
          >
          Create Programme
        </SubScreenTitle>
        </View>
        <View>
          <RedTextButton>Create</RedTextButton>
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
});


export default CreateProgramme;