import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokeMenuComponent from './components/poke-menu-component/PokeMenuContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/pokemon' component={PokeMenuComponent} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
