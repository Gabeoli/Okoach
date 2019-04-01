import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';


const Title = styled.Text`
    font-size: 40px;
    color: ${Colors.black}
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    padding-top: 28px;
    margin-bottom: 40px;
`;


export const UsernameText = (props) => {
  return (
    <Title>
        {props.children}
    </Title>
  );
};
