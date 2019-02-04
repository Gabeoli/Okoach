import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SvgUri from 'react-native-svg-uri';

import {SubmenuItem} from '../components/buttons/SubmenuItem';
import {SubmenuTitle} from '../components/text/SubmenuTitle';
import {GradientFill} from '../components/background_style/GradientFill';
import StartupLogo from '../components/text/StartupLogo';

import {Fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';

type Props = {};
class Hamburger extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.submenu_header}>
          <GradientFill />
        </View>
        <View style={styles.submenu_list}>
          <SubmenuTitle>
            Menu
          </SubmenuTitle>
          <SubmenuItem>
            Public Programmes
          </SubmenuItem>
          <SubmenuItem>
            Saved Programmes
          </SubmenuItem>
          <SubmenuItem>
            Calculator
          </SubmenuItem>
          <SubmenuItem>
            Timer
          </SubmenuItem>
          <SubmenuItem>
            Camera
          </SubmenuItem>
          <SubmenuItem>
            Help
          </SubmenuItem>
        </View>
        <View style={styles.footer_logo}>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  submenu_header: {
    flex: 1,
    backgroundColor: 'red'
  },
  submenu_list: {
    flex: 8,
    paddingLeft: 15
  },
  footer_logo: {
    flex: 1
  },

});

export default Hamburger;