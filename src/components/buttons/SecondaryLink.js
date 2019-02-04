import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

const Label = styled.Text`
    font-family: ${Fonts.Roboto};
    color: ${Colors.red};
    text-transform: uppercase;
    letter-spacing: 2;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
`;
export const SecondaryLink = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
        <Label>
            {props.children}
        </Label>
    </TouchableOpacity>
  );
};
