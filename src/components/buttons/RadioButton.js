import React from 'react';
import styled from 'styled-components/native';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

const ButtonContainer = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  background: ${Colors.red};
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text`
  font-size: 16px;
  color: white;
  font-family: ${Fonts.Roboto};
  font-weight: 700;
  letter-spacing: 2;
  text-align: center;
  text-transform: uppercase;
  justify-content: center;
`;

export const RadioButton = (props) => {
  return (
    <ButtonContainer>
        <Label>{props.label}</Label>
    </ButtonContainer>
  );
};
