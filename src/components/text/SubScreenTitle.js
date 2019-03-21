import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import SvgUri from 'react-native-svg-uri';

import LinearGradient from 'react-native-linear-gradient';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

const TitleContainer = styled.View`
    width: 100%;
    height: 115px;
`;

const Title = styled.Text`
    position: absolute;
    bottom: 0;
    font-size: 24px;
    color: ${Colors.white}
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    padding-top: 10px;
    padding-left: 15px;
    padding-bottom: 20px
`;

const ButtonContainer = styled.TouchableOpacity`
  padding-left: 15px;
  position: absolute;
  top: 0;
  padding-top: 15px;
`;


export const SubScreenTitle = (props) => {
  return (
    <TitleContainer>
      <LinearGradient 
            colors={[Colors.red, Colors.darkred]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{
              flex: 1,
              justifyContent: 'center'}
            }
      >
      <ButtonContainer
        onPress={props.onPress}
      >
        <SvgUri
            width="30"
            height="30"
            source={require('../../../assets/img/back_button.svg')} 
        />
      </ButtonContainer>
      <Title>
          {props.children}
      </Title>
      </LinearGradient>
    </TitleContainer>
  );
};