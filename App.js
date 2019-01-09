import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Startup from './src/screens/Startup';
import {Colors} from './src/utils/Colors';

console.disableYellowBox = true;

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: Colors.grey}}
      >
        <Startup />
      </SafeAreaView>
    );
  }
}
