import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/Store';
import Nav from './src/Navigator';
import {Colors} from './src/utils/Colors';

console.disableYellowBox = true;

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}
