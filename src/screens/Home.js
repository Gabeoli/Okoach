import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';
import WelcomeText from '../components/text/WelcomeText';
import {RedGradientButton} from '../components/buttons/RedGradientButton';


type Props = {};
class Home extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Home.js</Text>
        </View>
        <View>

        </View>
        <View>
          <Text>
            Looks like you’re not following a programme, Have a browse.
          </Text>
          <RedGradientButton>
            Programmes
          </RedGradientButton>

        </View>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },

});

export default Home;