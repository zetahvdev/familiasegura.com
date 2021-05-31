import './sass/global.css';
import Home from '../src/pages/home/home.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  link
} from 'react-router-dom'
import InfoHeader from './pages/info/header/header';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/info">
          <InfoHeader></InfoHeader>
        </Route>
      </Switch>
      <Switch>
        <Route path="/"  exact={true}>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
