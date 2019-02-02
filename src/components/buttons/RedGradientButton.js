import React from 'react';
import styled from 'styled-components/native';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';

const ButtonContainer = styled.TouchableOpacity`
  width: 177px;
  height: 50px;
  margin-bottom: 40px; 
`;

const Label = styled.Text`
  font-size: 16px;
  color: white;
  font-family: ${Fonts.Roboto};
  font-weight: 700;
  letter-spacing: 2;
  text-align: center;
  text-transform: uppercase;
`;

export const RedGradientButton = (props) => {
  return (
    <ButtonContainer
      onPress={props.onPress}      
    >
      <LinearGradient 
      colors={[Colors.red, Colors.darkred]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{
        flex: 1,
        borderRadius: 5,
        justifyContent: 'center'}}>
        <Label>
          {props.children}
        </Label>
      </LinearGradient>
    </ButtonContainer>
  );
};
    




{/* <LinearGradient colors={[Colors.red, Colors.darkred]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.button_gradient}>
  <Text style={styles.button_text}>
    {props.children}
  </Text>
</LinearGradient> */}
