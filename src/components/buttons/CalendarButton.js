import React from 'react';
import styled from 'styled-components/native';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

const date = new Date();

const strtodate =  function(){
    date.toString();
}

const ButtonContainer = styled.TouchableOpacity`
  width: 70%;
  border: solid 3px ${Colors.red};
  border-radius: 5px
`;

const Label = styled.Text`
  font-size: 24px;
  color: ${Colors.darkgrey};
  font-family: ${Fonts.UniversalKnowledge};
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  padding-top: 10px

`;

export const CalendarButton = (props) => {
  return (
    <ButtonContainer
      onPress={props.onPress}      
    >
        <Label>
            6 FEB 2019
        </Label>
    </ButtonContainer>
  );
};
