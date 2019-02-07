import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';


const Title = styled.Text`
    font-size: 35px;
    color: ${Colors.darkgrey}
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    padding-top: 28px;
`;


export const TabTitle = (props) => {
  return (
    <Title>
        {props.children}
    </Title>
  );
};
