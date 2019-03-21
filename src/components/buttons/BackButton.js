import React from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import SvgUri from 'react-native-svg-uri';

const ButtonContainer = styled.TouchableOpacity`
`;
export const BackButton = (props) => {
  return (
    <ButtonContainer
        onPress={props.onPress}
    >
    <Text>Hello</Text>
        <SvgUri
            width="30"
            height="30"
            source={require('../../../assets/img/back_button.svg')} 
        />
    </ButtonContainer>
  );
};
