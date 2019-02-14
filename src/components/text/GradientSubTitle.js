import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';


const TitleContainer = styled.View`
    width: 100%;
    height: 40px
`;

const Title = styled.Text`
    font-size: 18px;
    color: ${Colors.white}
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
    text-align: center;
    padding-top: 11px;
`;


export const GradientSubTitle = (props) => {
  return (
    <TitleContainer>
      <LinearGradient 
      colors={[Colors.red, Colors.darkred]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{
        flex: 1,
        justifyContent: 'center'}}>
          <Title>
              {props.children}
          </Title>
      </LinearGradient>
    </TitleContainer>
  );
};
