import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';
import {TabTitle} from '../components/text/TabTitle';
import {GradientSubTitle} from '../components/text/GradientSubTitle';



type Props = {};
class Challenges extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TabTitle>
            Challenges
          </TabTitle>
        </View>
        <View>
          <GradientSubTitle>
            Daily
          </GradientSubTitle>
        </View>
        <View>
          <View>
            <View style={styles.dailybox}>
              <Text>10/50AP</Text>
            </View>
            <Text style={styles.dailytitle}>Daily Reps 1/5</Text>
            <Text style={styles.dailydesc}>Part 1 - Do 10 Reps</Text>
          </View>
        </View>
        <View>
          <GradientSubTitle>
            Achievements
          </GradientSubTitle>
        </View>
        <View>
          
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

export default Challenges;