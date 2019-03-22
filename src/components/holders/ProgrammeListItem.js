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
    display: flex;
    flex-direction: row;
`;

const Left = styled.View `
    width: 75%;
`;
const Right = styled.View `
    width: 25%;
    align-items: center;
    position: relative;
`;

const BtnHolder = styled.View`
    align-items: center;
    justify-content: center;
`;

const Title = styled.Text`
    font-family: ${Fonts.UniversalKnowledge};
    color: ${Colors.black};
    font-size: 18px;
    padding-top: 10px;
    text-transform: uppercase;
`;

const Category = styled.Text`
    font-family: ${Fonts.Roboto};
    font-weight: 500;
    color: ${Colors.black};
    font-size: 14px;
`;

const CreatedBy = styled.Text`
    font-family: ${Fonts.Roboto};
    color: ${Colors.black};
    font-size: 12px;
    font-weight: 300;
`;

const Username = styled.Text`
    font-weight: 500;
    color: ${Colors.red};
`;

const Rating = styled.View`
    display: flex;
    flex-direction: row
    padding-top: 10px
`;

export const ProgrammeListItem = (props) => {
  return (
    <Container>
        <Left>
            <Title>
                {props.Title}
            </Title>
            <Category>
                Weightlifting
            </Category>
            <CreatedBy>Created By 
                <Username> User123</Username>
            </CreatedBy>
            <Rating>
                <StarImage/>
                <StarImage/>
                <StarImage/>
                <StarImage/>
                <StarImage/>
            </Rating>
        </Left> 
        <Right>
            <BtnHolder>
                <RedTextButton>View</RedTextButton>
            </BtnHolder>
        </Right>
    </Container>
  );
};
