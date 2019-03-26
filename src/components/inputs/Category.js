import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import { TextInput, Picker } from 'react-native-gesture-handler';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

import RNPickerSelect from 'react-native-picker-select';

const Container = styled.View`
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
        label: 'Weightlifting',
        value: 'weightlifting',
    },
    {
        label: 'Powerlifting',
        value: 'powerlifting',
    },
    {
        label: 'Bodybuilding',
        value: 'bodybuilding',
    },

];

const placeholder = {
    label: 'Select a sport...',
    value: null,
    color: '#9EA0A4',
  };

export const Category = (props) => {  
    return (

        
    <Container>
        <Label>Category</Label>
        <RNPickerSelect
          placeholder={placeholder}
          items={categories}
          onValueChange={value => {
            this.setState({
              favSport0: value,
            });
          }}
          onUpArrow={() => {
            this.inputRefs.firstTextInput.focus();
          }}
          onDownArrow={() => {
            this.inputRefs.favSport1.togglePicker();
          }}
          style={pickerSelectStyles.input}
          value={this.state.favSport0}
        //   ref={el => {
        //     this.inputRefs.favSport0 = el;
        //   }}
        />
    </Container>
    );
  };

const pickerSelectStyles = StyleSheet.create({
input: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
}
});
      
