import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';


const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    padding-top: 10px
`;

const Left = styled.View`
    flex: 1;
    padding-right: 10px;
`;

const Right = styled.View`
    flex: 1;
    height: 50px
    padding-left: 10px;
`;

const LabelLeft =  styled.Text`
    font-size: 18px;
    color: ${Colors.lightgrey};
    text-align: right;
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    padding-top: 5px;
`;

const LabelRight =  styled.Text`
    font-size: 18px;
    color: ${Colors.black};
    text-align: left;
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    padding-top: 5px;
`;


export const ProfileLiftingStyle = (props) => {
  return (
    <Container>
        <Left>
            <LabelLeft>Lifting Style</LabelLeft>
            <LabelLeft>Body Weight</LabelLeft>
        </Left>
        <Right>
            <LabelRight>Weightlifting</LabelRight>
            <LabelRight>89KG</LabelRight>
        </Right>
    </Container>
 );
};
