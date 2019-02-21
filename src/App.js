import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NewsPage from './pages/NewsPage'

class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path='/country/:country' component={Homepage} />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/news/:id' component={NewsPage} />
      </Switch>
    );
  }
}

export default App;
