import React from 'react';
import styled from 'styled-components/native';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import SvgUri from 'react-native-svg-uri';

const ButtonContainer = styled.TouchableOpacity`
    width: 100%
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

const Label = styled.Text `
    font-size: 18px;
    color: ${Colors.red};
    font-family: ${Fonts.Roboto};
    padding-top: 10px;
    text-align: center;
`;


export const AddExercise = (props) => {
  return (
    <ButtonContainer
        onPress={props.onPress}
    >
        <SvgUri
        source={require('../../../assets/img/plus_icon.svg')}
        />
        <Label>
            Add Exercise
        </Label>
    </ButtonContainer>
  );
};
