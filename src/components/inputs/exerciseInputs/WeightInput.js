import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler';
import {Fonts} from '../../../utils/Fonts';
import {Colors} from '../../../utils/Colors';

const Container = styled.View`
    width: 100%;
    padding-top: 20px;
    margin: 0 15px;
`;
const UserInput = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: flex-start;
    border-bottom-width: 2px;
    border-color: ${Colors.red};
    height: 40px;
    margin-bottom: 30px;
`;

const StyledInput = styled.TextInput`
    width: 80%;
    height: 40px;
    padding-left: 10px;
    padding-bottom: 15px;
    font-family: ${Fonts.Roboto}
    font-size: 18px;
    color: #6c6c6c;
    letter-spacing: 1.5
`;

const Label = styled.Text`
    font-family: ${Fonts.Roboto};
    font-weight: 700;
    font-size: 18px;
    padding-bottom: 10px;
`;

export const WeightInput = (props) => {  
    return (
    <Container>
        <Label>Weight</Label>
        <UserInput>
            <StyledInput
            defaultValue={props.defaultValue}
            secureTextEntry={props.secureTextEntry}
            />   
        </UserInput>
    </Container>
    );
  };
      
