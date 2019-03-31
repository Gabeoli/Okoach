import React from 'react';
import {TouchableOpacity} from 'react-native';


import styled from 'styled-components/native';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

import {StarImage} from '../holders/StarImage';
import {RedTextButton} from '../buttons/RedTextButton';


const Container = styled.View`
    width: 100%;
    height: 115px;
    background: ${Colors.white};
    padding: 10px 15px;
    padding-bottom: 30px;
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

const Label = styled.Text`
    font-family: ${Fonts.Roboto};
    font-weight: 500;
    font-size: 16px;
    text-align: center;
`;

const Number = styled.Text`
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    font-size: 24px;
    padding-top: 10px
`;

const Done = styled.View`
    text-align: center;
    width: 80%;
    height: 80%;
    justify-content: center;
    align-items: center;
    background: ${Colors.green};
`;

const DoneText = styled.Text`
    font-family: ${Fonts.Roboto};
    font-weight: 700;
    text-transform: uppercase;
    color: ${Colors.black};
    font-size: 16px;
    text-align: center;
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

const ColFour = styled.View`
    flex: 1
    align-items: center;
    justify-content: center;
`;
export const HomeExerciseHolderDone = (props) => {
  return (
    <Container>
        <Title>{props.Title}</Title>
        <Columns>
            <ColOne>
                <Label>Sets</Label>
                <Number>{props.Sets}</Number>
            </ColOne>
            <ColTwo>
                <Label>Reps</Label>
                <Number>{props.Reps}</Number>
            </ColTwo>
            <ColThree>
                <Label>Weight</Label>
                <Number>{props.Weight}</Number>
            </ColThree>
            <ColFour>
                <Done
                    onPress={props.onPress}
                >
                    <DoneText>Done</DoneText>
                </Done>
            </ColFour>
        </Columns>
    </Container>
  );
};
