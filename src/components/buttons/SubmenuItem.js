import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

const Label = styled.Text`
    font-family: ${Fonts.Roboto};
    color: ${Colors.black};
    letter-spacing: 3;
    font-size: 16px;
    font-weight: bold;
    padding-top: 5px;
`;
export const SubmenuItem = (props) => {
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
