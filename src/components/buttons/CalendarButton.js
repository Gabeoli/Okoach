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

var dateNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT','NOV','DEC']
var dt = new Date();

var day = dt.getDate();
var month = dateNames[dt.getMonth()];
var year = dt.getFullYear();

var dateLabel = day + ' ' + month + ' ' + year;
export const CalendarButton = (props) => {
  return (
    <ButtonContainer
      onPress={props.onPress}      
    >
        <Label>
            {dateLabel}
        </Label>
    </ButtonContainer>
  );
};
