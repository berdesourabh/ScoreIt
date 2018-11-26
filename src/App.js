import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Home from './components/Home/Home';

class App extends Component {
  render() {
  const store = createStore(reducers);
  return (
    <Provider Store={store}>
      <Home />
    </Provider>
    );
  }
}

export default App;
