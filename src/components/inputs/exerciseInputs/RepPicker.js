import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import styled from 'styled-components/native';
import { TextInput, Picker } from 'react-native-gesture-handler';
import {Fonts} from '../../../utils/Fonts';
import {Colors} from '../../../utils/Colors';

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

const RepsInput = styled.TextInput`
    font-size: 16px;
    width: 75px;
    padding: 12px 10px;
    margin: 0 15px;
    border: solid 1px ${Colors.red};
    border-radius: 4px;
    color: ${Colors.black};
`;

const placeholder = {
    label: '0',
    value: null,
    color: '#9EA0A4',
  };

export const RepPicker = (props) => {  
    return (

        
    <Container>
        <Label>Reps</Label>
        <View>
            <RepsInput
            keyboardType = 'numeric'
            />
        </View>
    </Container>
    );
  };

// const pickerSelectStyles = StyleSheet.create({
// input: {
//     fontSize: 16,
//     width: 75,
//     paddingVertical: 12,
//     paddingHorizontal: 10,
//     marginHorizontal: 15,
//     borderWidth: 1,
//     borderColor: Colors.red,
//     borderRadius: 4,
//     color: 'black',
//     paddingRight: 30, // to ensure the text is never behind the icon
// }
// });
      
