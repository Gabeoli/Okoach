import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import styled from 'styled-components/native';
import { TextInput, Picker } from 'react-native-gesture-handler';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

import RNPickerSelect from 'react-native-picker-select';

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

const categories = [
    {
        label: '1',
        value: '1',
    },
    {
        label: '2',
        value: '2',
    },
    {
        label: '3',
        value: '3',
    },
    {
        label: '4',
        value: '4',
    },
    {
        label: '5',
        value: '5',
    },
    {
        label: '6',
        value: '6',
    },
    {
        label: '7',
        value: '7',
    },

];

const placeholder = {
    label: '0',
    value: null,
    color: '#9EA0A4',
  };

export const EditDayPicker = (props) => {  
    return (

        
    <Container>
        <Label>Day</Label>
        <View
            style={pickerSelectStyles.input}
        >
            <RNPickerSelect
            placeholder={placeholder}
            items={categories}
            />
        </View>
    </Container>
    );
  };

const pickerSelectStyles = StyleSheet.create({
input: {
    fontSize: 16,
    width: 75,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: Colors.red,
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
}
});
      
