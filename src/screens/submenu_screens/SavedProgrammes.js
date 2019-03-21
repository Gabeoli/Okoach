import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';


type Props = {};
class SavedProgrammes extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Saved Programmes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  }
});

export default SavedProgrammes;