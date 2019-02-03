import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {RedGradientButton} from '../components/buttons/RedGradientButton';
import {HamburgerButton} from '../components/buttons/HamburgerButton';
import {Fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';
import StartupLogo from '../components/text/StartupLogo';

type Props = {};
class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View 
            style={styles.hamburger}
          >
            <HamburgerButton
              onPress ={() => this.props.navigation.openDrawer()}
            />
          </View>
          <View style={styles.points}>
            <Text
              style={styles.ap1}
            >
              000
            </Text>
            <Text
              style={styles.ap2}
            >
              AP
            </Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            Looks like you’re not following a programme, Have a browse.
          </Text>
          <RedGradientButton>
            Programmes
          </RedGradientButton>

        </View>        
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },
  header: {
    flex: 1,
    flexDirection: 'row'
  },
  body: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyText: {
    textAlign: 'center',
    paddingBottom: 20,
    fontFamily: Fonts.Roboto,
    color: Colors.black
  },
  hamburger: {
    padding: 10
  },
  points: {
    position: 'absolute',
    right: 10,
  }, 
  ap1: {
    fontFamily: Fonts.UniversalKnowledge,
    paddingTop: 10,
    fontSize: 20,
    color: '#6C6C6C'
  },
  ap2: {
    fontFamily: Fonts.UniversalKnowledge,
    paddingTop:10,
    fontSize: 20,
    color: '#EF7F70'
  }

});

export default Home;