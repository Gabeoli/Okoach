import React from 'react';
import {TouchableOpacity} from 'react-native';


import styled from 'styled-components/native';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

import {StarImage} from '../holders/StarImage';
import {RedTextButton} from '../buttons/RedTextButton';

const Container = styled.View`
`;

const Row = styled.View`
    flex-direction: row;
    margin: 15px
`;

const Col = styled.View`
    width: 50%
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
    justify-content: flex-end
`;

export const DetailsOfProgramme = (props) => {
  return (
    <Container>
        <Row>
            <Col>
                <Category>
                    Weightlifting
                </Category>
                <CreatedBy>Created By 
                    <Username> User123</Username>
                </CreatedBy>
            </Col>
            <Col>
                <Rating>
                    <StarImage/>
                    <StarImage/>
                    <StarImage/>
                    <StarImage/>
                    <StarImage/>
                </Rating>
            </Col>
        </Row>
    </Container>
  );
};
