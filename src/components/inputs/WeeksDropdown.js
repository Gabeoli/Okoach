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

export const WeeksDropdown = (props) => {  
    return (
    <Container>
        <Label>How Many Weeks?</Label>
        <Pick
            selectedValue={props.selectedValue}
            onValueChange={props.onValueChange}
        >
            <Pick.Item label="1" value="1"/>
            <Pick.Item label="2" value="2"/>
            <Pick.Item label="3" value="3"/>
            <Pick.Item label="4" value="4"/>
            <Pick.Item label="5" value="5"/>
            <Pick.Item label="6" value="6"/>
        </Pick>
    </Container>
    );
  };
      
