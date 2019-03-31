import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import {RadioButton} from '../buttons/RadioButton';
import {RadioButtonOff} from '../buttons/RadioButton_off';

import {TextInput} from 'react-native-gesture-handler';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

const Container = styled.View`

    margin-bottom: 20px;
`;

const Label = styled.Text`
    font-family: ${Fonts.Roboto};
    font-weight: 700;
    font-size: 18px;
    padding-bottom: 10px;
    padding-left: 15px;
`;

const RadioHolder = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const DaysCheckbox = (props) => {  
    return (
    <Container>
        <Label>Days Per Week</Label>
        <RadioHolder>
            <RadioButton
                label={'1'}
            />
            <RadioButtonOff
                label={'2'}
            />
            <RadioButtonOff
                label={'3'}
            />
            <RadioButtonOff
                label={'4'}
            />
            <RadioButtonOff
                label={'5'}
            />
            <RadioButtonOff
                label={'6'}
            />
            <RadioButtonOff
                label={'7'}
            />
        </RadioHolder>
    </Container>
    );
  };
      
