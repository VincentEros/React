import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import Guild from './common/guild'
import Manager from './pages'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Guild/>
            <Manager/>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
