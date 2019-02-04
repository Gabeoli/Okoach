import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';


const Title = styled.Text`
    font-size: 20px;
    color: ${Colors.lightgrey}
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    padding-top: 20px
`;


export const SubmenuTitle = (props) => {
  return (
    <Title>
        {props.children}
    </Title>
  );
};
