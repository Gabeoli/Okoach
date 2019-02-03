import React from 'react';
import {TouchableOpacity} from 'react-native';
import SvgUri from 'react-native-svg-uri';


export const HamburgerButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <SvgUri
        source={require('../../../assets/img/hamburger_icon.svg')}
      />
    </TouchableOpacity>
  );
};
