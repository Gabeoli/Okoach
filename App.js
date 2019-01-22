import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Nav from './src/Navigator';
import {Colors} from './src/utils/Colors';

console.disableYellowBox = true;

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          borderBottomWidth: 0,
          backgroundColor: Colors.grey
        }}
        forceInset={{ bottom: 'never' }}
      >
        <Nav />
      </SafeAreaView>
    );
  }
}
