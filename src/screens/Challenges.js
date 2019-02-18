import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../utils/Fonts';
import {Colors} from '../utils/Colors';
import {TabTitle} from '../components/text/TabTitle';
import {GradientSubTitle} from '../components/text/GradientSubTitle';
import {DailyChallengeBox} from '../components/text/DailyChallengeBox';



type Props = {};
class Challenges extends Component<Props> {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <TabTitle>
            Challenges
          </TabTitle>
        </View>
        <View>
          <GradientSubTitle>
            Daily
          </GradientSubTitle>
          <View>
            <View style={styles.dailys}>
                <DailyChallengeBox style={styles.dailysbox}></DailyChallengeBox>
                <DailyChallengeBox style={styles.dailysbox}></DailyChallengeBox>
            </View>
          </View>
        </View>
        <View>
          <GradientSubTitle>
            Achievements
          </GradientSubTitle>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
  },

  dailys: {
    flexDirection: 'row',
    flex: 1
  }
});

export default Challenges;