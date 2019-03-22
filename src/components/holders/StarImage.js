import React from 'react';
import {StyleSheet} from 'react-native';
import SvgUri from 'react-native-svg-uri';


export const StarImage = (props) => {
    return (
      <SvgUri
      source={require('../../../assets/img/star.svg')}
      style={style.image}
      />
    );
  };


const style = StyleSheet.create({
  image: {
    paddingRight: 10
  }
})