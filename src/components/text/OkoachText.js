import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';


const Title = styled.Text`
    font-size: 96px;
    color: ${Colors.red}
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    padding-top: 28px;
    letter-spacing: -5
`;


export const OkoachText = (props) => {
  return (
    <Title>
        Okoach
    </Title>
  );
};
