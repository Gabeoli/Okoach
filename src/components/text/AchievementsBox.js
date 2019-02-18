import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

const Container = styled.View`
    width: 100%;
    flex: 1;
    padding: 10px;
    flex-direction: row
`;

const Box = styled.View`
    width: 25%;
    height: 81px;
    margin-right: 20px
    border-radius: 5
    background: ${Colors.placeholdergrey}
    flex: 1
`;

const BoxText = styled.Text`
    font-size: 14px;
    color: ${Colors.black}
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    padding-top: 5px;
    text-align: center;
`;

const TextHolder = styled.View`
    flex: 3
`;

const Title = styled.Text`
    font-size: 16px;
    color: ${Colors.black}
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    padding-top: 10px;
`;

const Desc = styled.Text`
    font-size: 14px;
    color: ${Colors.black}
    font-family: ${Fonts.Roboto};
`;


export const AchievementsBox = (props) => {
  return (
      <Container>
        <Box>
            <BoxText>
                10AP
            </BoxText>
        </Box>
        <TextHolder>
            <Title>First Day</Title>
            <Desc>Complete the first day of a programme you’re following.</Desc>
        </TextHolder>
      </Container>
  );
};
