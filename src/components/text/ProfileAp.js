import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

const Container = styled.View`
    width: 60px
`;

const Number = styled.Text`
    font-size: 24px;
    color: ${Colors.black};
    text-align: center;
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    padding-top: 15px;
`;

const AP = styled.Text`
    font-size: 18px;
    color: ${Colors.red};
    text-align: center;
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    padding-top: 5px;
`;

export const ProfileAp = (props) => {
  return (
      <Container>
        <Number>120</Number>
        <AP>AP</AP>
      </Container>
  );
};
