import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import SvgUri from 'react-native-svg-uri';
import { TextInput } from 'react-native-gesture-handler';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

const UserInput = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: flex-start;
    border-bottom-width: 1px;
    border-color: ${Colors.lightgrey};
    width: 100%;
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


export const UserInputBox = (props) => {  
    return (
      <UserInput>
        <SvgUri 
          source={props.source}
          style={{
            paddingLeft: 10,
            paddingRight: 10
          }}
        />
        <StyledInput
          defaultValue={props.defaultValue}
          secureTextEntry={props.secureTextEntry}
        />   
      </UserInput>
    );
  };
      
