import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import {TextInput} from 'react-native-gesture-handler';
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


export const WeeksDropdown = (props) => {  
    return (
    <Container>
        <Label>Days Per Week</Label>
        

    </Container>
    );
  };
      
