/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import h from 'react-hyperscript';
import { Provider } from 'react-redux';
import { router } from './app/router';
import store from './app/store';

export class App extends React.Component {
  render() {
    return (
      h(Provider, { store }, [h(router)])
    );
  }
}
render(<App />, window.document.getElementById('app'));