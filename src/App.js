import './sass/global.css';
import Home from '../src/pages/home/home.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import InfoPage from './pages/info/info';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/info">
          <InfoPage></InfoPage>
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
