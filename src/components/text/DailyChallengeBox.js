import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';


const Title = styled.Text`
    font-size: 35px;
    color: ${Colors.darkgrey}
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    padding: 30px 0px 15px 30px;
`;

const Title = styled.Text`
    font-size: 35px;
    color: ${Colors.darkgrey}
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    padding: 30px 0px 15px 30px;
`;


export const DailyChallengeBox = (props) => {
  return (
    <View>
        <View style={styles.dailybox}>
            <Text>10/50AP</Text>
        </View>
        <Text style={styles.dailytitle}>Daily Reps 1/5</Text>
        <Text style={styles.dailydesc}>Part 1 - Do 10 Reps</Text>
    </View>
  );
};
