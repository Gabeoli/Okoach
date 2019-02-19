import React from 'react';
import styled from 'styled-components/native';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

const ButtonContainer = styled.TouchableOpacity`
    width: 60px;
    align-self: flex-end;
`;

const Label = styled.Text `
    font-size: 14px;
    color: ${Colors.black};
    font-family: ${Fonts.UniversalKnowledge};
    padding-top: 10px;
    text-transform: uppercase;
    text-align: center;
`;


export const AddFriend = (props) => {
  return (
    <ButtonContainer>
        <Label>
            Find Friends
        </Label>
    </ButtonContainer>
  );
};
