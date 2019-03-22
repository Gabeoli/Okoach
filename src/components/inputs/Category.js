import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import { TextInput, Picker } from 'react-native-gesture-handler';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

const Container = styled.View`
`;
const Label = styled.Text`
    font-family: ${Fonts.Roboto};
    font-weight: 700;
    font-size: 18px;
    padding-bottom: 10px;
    padding-left: 15px;
`;

const Pick = styled.Picker`

`;

export const Category = (props) => {  
    return (
    <Container>
        <Label>Category</Label>
        <Pick
            selectedValue={props.selectedValue}
            onValueChange={props.onValueChange}
        >
            <Pick.Item label="No Category" value="No Category"/>
            <Pick.Item label="Weightlifting" value="Weightlifting"/>
            <Pick.Item label="Powerlifting" value="Powerlifting"/>
            <Pick.Item label="Bodybuilding" value="Bodybuilding"/>
        </Pick>
    </Container>
    );
  };
      
