import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import LinearGradient from 'react-native-linear-gradient';

import {SubmenuItem} from '../components/buttons/SubmenuItem';
import {SubmenuTitle} from '../components/text/SubmenuTitle';

import {Fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';

type Props = {};
class Hamburger extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View>

        </View>
        <View>
          <SubmenuTitle>
            Menu
          </SubmenuTitle>
          <SubmenuItem>
            My Coach
          </SubmenuItem>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }

});

export default Hamburger;