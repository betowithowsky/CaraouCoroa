import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Rotas from './src/components/Rotas';

export default class app6Udemy extends Component {
  render() {
    return (
      <Rotas />
    );
  }
}

AppRegistry.registerComponent('app6Udemy', () => app6Udemy);
