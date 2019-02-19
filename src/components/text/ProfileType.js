import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';


const Label = styled.Text`
    font-size: 24px;
    color: ${Colors.black};
    text-align: center;
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    padding-top: 15px;
`;


export const ProfileType = (props) => {
  return (
      <Label>Athlete</Label>
  );
};
