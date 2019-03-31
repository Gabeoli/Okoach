import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

import {SubScreenTitle} from '../../components/text/SubScreenTitle';
import {RedTextButton} from '../../components/buttons/RedTextButton';
import {RedGradientButton} from '../../components/buttons/RedGradientButton';

import {DetailsOfProgramme} from '../../components/holders/DetailsOfProgramme';
import {DaysCheckbox} from '../../components/inputs/DaysCheckbox';
import {Description} from '../../components/holders/Description';

type Props = {};
class ProgrammeDetailsA extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <SubScreenTitle 
            onPress={() => this.props.navigation.navigate('Home')}
          >
          Programme Title Here
        </SubScreenTitle>
        </View>
        <View style={styles.detailsholder}>
            <DetailsOfProgramme/>
            <DaysCheckbox/>
            <Description/>
        </View>
        <View style={styles.buttoncenter}>
            <RedGradientButton
                onPress={() => this.props.navigation.navigate('ProgrammeDetailsB')}
            >Follow
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
  detailsholder: {
      flex: 2
  },
  buttoncenter: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
  }
});


export default ProgrammeDetailsA;