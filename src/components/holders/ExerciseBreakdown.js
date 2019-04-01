import React from 'react';
import {TouchableOpacity} from 'react-native';


import styled from 'styled-components/native';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

import {StarImage} from '../holders/StarImage';
import {RedTextButton} from '../buttons/RedTextButton';


const Container = styled.View`
    width: 100%;
    height: 75px;
    background: ${Colors.white};
    padding-bottom: 40px
`;

const Columns = styled.View`
    display: flex;
    flex-direction: row;
`;

const Title = styled.Text`
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    font-size: 24px;
    padding-top: 10px
`;

const Number = styled.Text`
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    font-size: 24px;
    padding-top: 10px
`;

const ColOne = styled.View`
    flex: 1
    align-items: center;
    justify-content: center;
`;

const ColTwo = styled.View`
    flex: 1
    align-items: center;
    justify-content: center;
`;

const ColThree = styled.View`
    flex: 1
    align-items: center;
    justify-content: center;
`;

const UserInput = styled.TextInput`
    width: 80%;
    height: 100%;
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase
    text-align: center;
    padding-top: 10px;
    font-size: 24px;
`;

export const ExerciseBreakdown = (props) => {
  return (
    <Container>
        <Title>{props.Title}</Title>
        <Columns>
            <ColOne>
                <Number>{props.Set}</Number>
            </ColOne>
            <ColTwo>
                <Number>{props.Reps}</Number>
            </ColTwo>
            <ColThree>
                <UserInput/>
            </ColThree>
        </Columns>
    </Container>
  );
};
