import React, {Component} from 'react';
import SvgUri from 'react-native-svg-uri';
import {Fonts} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';

type Props = {};
class StartupLogo extends Component<Props> {
  render() {
    return (
      <SvgUri
      width="153"
      height="120"
      source={require('../../../assets/img/main_logo.svg')} />
    );
  }
}

export default StartupLogo;
