import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Department from './Department';
import Employee from './Employee';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './Navigation';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center">
        React WebAPI
      </h3>
      <Navigation/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/department' component={Department}/>
        <Route path='/employee' component={Employee}/>
      </Switch>
    </div>
    </BrowserRouter>
  );

}

export default App;
