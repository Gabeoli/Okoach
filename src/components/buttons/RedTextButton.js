import React from 'react';
import styled from 'styled-components/native';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
`;

const Label = styled.Text `
    font-size: 16px;
    color: ${Colors.red};
    font-family: ${Fonts.UniversalKnowledge};
    padding-top: 10px;
    text-transform: uppercase;
    letter-spacing: 2px
    text-align: center;
`;


export const RedTextButton = (props) => {
  return (
    <ButtonContainer>
        <Label>
            {props.children}
        </Label>
    </ButtonContainer>
  );
};
