import React from 'react';
import './App.css';
import Game from './pages/Game'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Detail from './pages/detail/DetailCard'
import Favorite from './pages/Favorite.js'
import NotFound from './pages/404/NotFound'
import Navbar from '../src/components/Navbar'
import { Provider } from 'react-redux'
import store from './store'


const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>

            <Route exact path='/'>
              <Game />
            </Route>

            <Route exact path='/favorites'>
              <Favorite />
            </Route>

            <Route exact path='/detail/:gameId'>
              <Detail />
            </Route>

            <Route path='*'><NotFound /></Route>
          </Switch>
        </Router>

      </div>
    </Provider>
  );
}

export default App;
