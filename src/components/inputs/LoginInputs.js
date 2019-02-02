import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import SvgUri from 'react-native-svg-uri';
import { TextInput } from 'react-native-gesture-handler';

const UserInput = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: flex-start;
    border-bottom-width: 1px;
    border-color: black;
    color: black;
    width: 100%;
    height: 40px
`;

const StyledInput = styled.TextInput`
    width: 90%;
    height: 40px
`;


export const UserInputBox = (props) => {  
    return (
        <UserInput>
        <StyledInput
          defaultValue={props.defaultValue}
        />   
      </UserInput>
    );
  };
      

//   text_input: {
//     width: '90%',
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     borderBottomWidth: 1,
//     borderBottomColor: Colors.lightgrey,
//   }