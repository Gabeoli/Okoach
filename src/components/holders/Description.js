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

const Placeholder = styled.Text`
    font-family: ${Fonts.Roboto};
    font-weight: 300
    font-size: 12px;
    margin: 0 15px;
`;

export const Description = (props) => {  
    return (
    <Container>
        <Label>Description</Label>
        <Placeholder>
            This is a Training Programme.
        </Placeholder>
    </Container>
    );
  };
      
