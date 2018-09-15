import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Guild from './common/guild'
// import Home from './pages/home'
// import History from './pages/history'
// import Trending from './pages/trending'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Guild/>
            {/*<Route path='/' exact component={Home}></Route>*/}
            {/*<Route path='/trending' exact component={Trending}></Route>*/}
            {/*<Route path='/history' exact component={History}></Route>*/}
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
