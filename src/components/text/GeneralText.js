import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';


const Title = styled.Text`
    font-size: 18px;
    color: ${Colors.darkgrey}
    font-family: ${Fonts.Roboto};
`;


export const GeneralText = (props) => {
  return (
    <Title>
        {props.children}
    </Title>
  );
};
