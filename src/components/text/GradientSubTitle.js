import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';


const Title = styled.Text`
    font-size: 18px;
    color: ${Colors.white}
    font-family: ${Fonts.UniversalKnowledge};
    text-transform: uppercase;
`;


export const TabTitle = (props) => {
  return (
    <LinearGradient 
    colors={[Colors.red, Colors.darkred]}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    style={{
      flex: 1,
      borderRadius: 5,
      justifyContent: 'center'}}>
        <Title>
            {props.children}
        </Title>
    </LinearGradient>
  );
};
