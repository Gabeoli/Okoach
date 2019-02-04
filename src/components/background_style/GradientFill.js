import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

export const GradientFill = (props) => {
  return (
    <LinearGradient 
            colors={[Colors.red, Colors.darkred]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{
              flex: 1,
              borderRadius: 5,
              justifyContent: 'center'}
            }
    />
  );
};                    
