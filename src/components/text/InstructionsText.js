import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';


const Instructions = styled.Text`
    font-size: 16px;
    color: ${Colors.darkgrey}
    font-family: ${Fonts.Roboto};
    font-weight: 300;
    text-align: center;
`;


export const InstructionsText = (props) => {
  return (
    <Instructions>
        {props.children}
    </Instructions>
  );
};
