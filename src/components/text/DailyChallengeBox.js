import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

const Container = styled.View`
    width: 50%;
    flex: 1
    margin-bottom: 30px
`;

const Box = styled.View`
    padding: 10px;
    height: 178px;
    width: 100%
    flex:1
`;

const BoxBg = styled.View`
    background: ${Colors.placeholdergrey};
    width: 100%;
    height: 100%;
    border-radius: 5;
`;

const BoxText = styled.Text`
    font-size: 14px;
    color: ${Colors.black}
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    padding-top: 10px;
    text-align: center;
`;

const DailyTitle = styled.Text`
    font-size: 24px;
    color: ${Colors.red}
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    padding-top: 10px;
    text-align: center;
`;

const DailyDesc = styled.Text`
    font-size: 18px;
    color: ${Colors.black}
    font-family: ${Fonts.Roboto};
    text-align: center;
`;


export const DailyChallengeBox = (props) => {
  return (
      <Container>
        <Box>
            <BoxBg>
                <BoxText>
                    10AP / 50AP
                </BoxText>
            </BoxBg>
        </Box>
        <DailyTitle>
            Daily Reps
        </DailyTitle>
        <DailyDesc>
            Part 1 - Do Reps
        </DailyDesc>
      </Container>
  );
};
